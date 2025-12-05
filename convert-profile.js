import sharp from "sharp";
import fs from "fs";

async function convertProfileImage() {
  try {
    console.log("Converting PerfilLinkedIn.jpeg to profile.webp...");

    await sharp("./src/PerfilLinkedIn.jpeg")
      .webp({ quality: 85 })
      .toFile("./public/assets/images/profile.webp");

    console.log("✅ Profile image converted successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

convertProfileImage();
