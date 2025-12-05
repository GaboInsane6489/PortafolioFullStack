// Rate limiting store (in-memory for serverless)
const rateLimitStore = new Map();

// Clean up old entries every hour
setInterval(
  () => {
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.timestamp < oneHourAgo) {
        rateLimitStore.delete(key);
      }
    }
  },
  60 * 60 * 1000
);

export async function POST({ request }) {
  try {
    // Get environment variables
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    const rateLimit = parseInt(import.meta.env.RATE_LIMIT_MAX || "5");

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server configuration error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Get client IP for rate limiting
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting check
    const now = Date.now();
    const userRateLimit = rateLimitStore.get(clientIP);

    if (userRateLimit) {
      const timeSinceLastRequest = now - userRateLimit.timestamp;
      const oneHour = 60 * 60 * 1000;

      if (timeSinceLastRequest < oneHour && userRateLimit.count >= rateLimit) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Too many requests. Please try again later.",
          }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": "3600",
            },
          }
        );
      }

      // Reset count if more than an hour has passed
      if (timeSinceLastRequest >= oneHour) {
        rateLimitStore.set(clientIP, { count: 1, timestamp: now });
      } else {
        userRateLimit.count++;
        userRateLimit.timestamp = now;
      }
    } else {
      rateLimitStore.set(clientIP, { count: 1, timestamp: now });
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    const errors = [];

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required");
    } else if (name.trim().length > 100) {
      errors.push("Name is too long (max 100 characters)");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Invalid email format");
    } else if (email.length > 255) {
      errors.push("Email is too long");
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      errors.push("Message is required");
    } else if (message.trim().length < 10) {
      errors.push("Message is too short (min 10 characters)");
    } else if (message.length > 5000) {
      errors.push("Message is too long (max 5000 characters)");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: errors.join(", "),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert message into database
    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          ip_address: clientIP,
          user_agent: request.headers.get("user-agent") || "unknown",
          status: "unread",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to save message. Please try again.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Optional: Send email notification
    // This would require SendGrid or similar service
    // Uncomment and implement if needed
    /*
    if (import.meta.env.SENDGRID_API_KEY && import.meta.env.CONTACT_EMAIL) {
      try {
        await sendEmailNotification({
          to: import.meta.env.CONTACT_EMAIL,
          from: 'noreply@gabriel-g.dev',
          subject: `New contact form submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the request if email fails
      }
    }
    */

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
        id: data[0].id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
