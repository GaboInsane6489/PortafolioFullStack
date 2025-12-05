import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function processProfileImage() {
  try {
    console.log("Processing profile image...");

    // Process LinkedIn profile image
    await sharp(join(__dirname, "src", "PerfilLinkedIn.jpeg"))
      .resize(400, 400, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 90 })
      .toFile(join(__dirname, "public", "assets", "images", "profile.webp"));

    console.log("✓ Profile image processed successfully");

    // Process project screenshots if they exist
    const projectImages = [
      {
        input: "src/HarryPoterHead-Foro.jpeg",
        output: "public/assets/images/projects/harrypotter.webp",
      },
    ];

    for (const img of projectImages) {
      try {
        await sharp(join(__dirname, img.input))
          .resize(800, 450, {
            fit: "cover",
            position: "center",
          })
          .webp({ quality: 85 })
          .toFile(join(__dirname, img.output));
        console.log(`✓ Processed ${img.output}`);
      } catch (err) {
        console.log(`⚠ Skipped ${img.input} (already exists or not found)`);
      }
    }

    console.log("\n✅ All images processed successfully!");
  } catch (error) {
    console.error("Error processing images:", error);
    process.exit(1);
  }
}

processProfileImage();
