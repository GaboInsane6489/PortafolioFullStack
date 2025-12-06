import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, basename, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, "src");
const DEST_DIR = join(__dirname, "public", "assets", "images", "projects");

// Ensure destination directory exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function optimizeImages() {
  console.log("🚀 Starting Bulk Image Optimization...");
  console.log(`📂 Source: ${SRC_DIR}`);
  console.log(`📂 Dest:   ${DEST_DIR}\n`);

  try {
    const files = await readdir(SRC_DIR);

    // Filter for image files
    const imageFiles = files.filter(
      (file) =>
        /\.(jpg|jpeg|png)$/i.test(file) &&
        (file.includes("Harry") ||
          file.includes("Instalaciones") ||
          file.includes("Certificado") ||
          file.includes("Github"))
    );

    console.log(`Found ${imageFiles.length} images to process.\n`);

    for (const file of imageFiles) {
      const inputPath = join(SRC_DIR, file);

      // Sanitize filename
      let outputName = file
        .toLowerCase()
        .replace("harrypoterhead", "harry-potter")
        .replace("harrypotterhead", "harry-potter")
        .replace("harrypotter", "harry-potter")
        .replace("instalacionesgarcias", "garcias")
        .replace("certificadofullstack", "certificate-fullstack")
        .replace("contribucionesdelañogithubperfil", "github-contributions")
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/[^a-z0-9-]/g, "-"); // Replace special chars with hyphen

      // Fix double hyphens
      outputName = outputName.replace(/-+/g, "-").replace(/^-|-$/g, "");

      const outputPath = join(DEST_DIR, `${outputName}.webp`);

      console.log(`Processing: ${file} -> ${outputName}.webp`);

      await sharp(inputPath)
        .resize(1280, 720, {
          // Standard 720p resolution is good balance
          fit: "inside", // Maintain aspect ratio, don't crop
          withoutEnlargement: true,
        })
        .webp({ quality: 80, effort: 6 }) // Good quality, high compression effort
        .toFile(outputPath);
    }

    console.log("\n✅ All images optimized successfully!");
  } catch (error) {
    console.error("❌ Error optimizing images:", error);
  }
}

optimizeImages();
