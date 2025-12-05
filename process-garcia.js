import sharp from "sharp";
import fs from "fs";
import path from "path";

const uploadedImage =
  "C:/Users/gabri/.gemini/antigravity/brain/cc396529-b889-4566-9752-ab40199a539a/uploaded_image_1_1764960794742.png";
const outputPath = "./public/assets/images/projects/garcias.webp";

async function processGarciaImage() {
  try {
    console.log("Processing Instalaciones Garcia image...");
    await sharp(uploadedImage).webp({ quality: 85 }).toFile(outputPath);
    console.log("✅ Created garcias.webp");
  } catch (err) {
    console.error("❌ Error processing image:", err);
  }
}

processGarciaImage();
