import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion.js";

/**
 * Contact Section Component
 * Contact form with backend integration to Supabase
 */
export default function Contact({ lang = "en" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        lang === "en" ? "Name is required" : "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        lang === "en" ? "Email is required" : "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        lang === "en" ? "Invalid email format" : "Formato de correo inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        lang === "en" ? "Message is required" : "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        lang === "en"
          ? "Message must be at least 10 characters"
          : "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            (lang === "en"
              ? "Failed to send message. Please try again."
              : "Error al enviar el mensaje. Por favor intenta de nuevo.")
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(
        lang === "en"
          ? "Network error. Please check your connection and try again."
          : "Error de red. Por favor verifica tu conexión e intenta de nuevo."
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear general error message
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-black"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          variants={fadeUp}
        >
          {lang === "en" ? "Get In Touch" : "Contacto"}
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
          variants={fadeUp}
        >
          {lang === "en"
            ? "Have a project in mind? Let's work together to create something amazing."
            : "¿Tienes un proyecto en mente? Trabajemos juntos para crear algo increíble."}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={fadeUp}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {lang === "en" ? "Name" : "Nombre"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 bg-light dark:bg-dark border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-black/10 dark:border-white/10 focus:ring-black dark:focus:ring-white"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {lang === "en" ? "Email" : "Correo"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className={`w-full px-4 py-3 bg-light dark:bg-dark border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-black/10 dark:border-white/10 focus:ring-black dark:focus:ring-white"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {lang === "en" ? "Message" : "Mensaje"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              rows={6}
              className={`w-full px-4 py-3 bg-light dark:bg-dark border rounded-lg focus:outline-none focus:ring-2 resize-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-black/10 dark:border-white/10 focus:ring-black dark:focus:ring-white"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting"
              ? lang === "en"
                ? "Sending..."
                : "Enviando..."
              : lang === "en"
                ? "Send Message"
                : "Enviar Mensaje"}
          </button>

          {/* Success Message */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm text-center"
              role="alert"
            >
              {lang === "en"
                ? "✓ Message sent successfully! I'll get back to you soon."
                : "✓ ¡Mensaje enviado exitosamente! Te responderé pronto."}
            </motion.div>
          )}

          {/* Error Message */}
          {status === "error" && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm text-center"
              role="alert"
            >
              ✗ {errorMessage}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
