import sharp from "sharp";
import fs from "fs";
import path from "path";

const srcDir = "./src";
const publicDir = "./public";

// Ensure directories exist
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(path.join(publicDir, "projects")))
  fs.mkdirSync(path.join(publicDir, "projects"));
if (!fs.existsSync(path.join(publicDir, "certificates")))
  fs.mkdirSync(path.join(publicDir, "certificates"));

async function processImages() {
  console.log("Processing images...");

  const mappings = [
    { src: "perfilPortafolio.jfif", dest: "profile.webp", folder: "" },
    {
      src: "HarryPoterHead-Foro.jpeg",
      dest: "harrypotter.webp",
      folder: "projects",
    },
    {
      src: "CertificadoFullStack.jpeg",
      dest: "fullstack-cert.webp",
      folder: "certificates",
    },
    // Add others if needed
  ];

  for (const map of mappings) {
    const inputPath = path.join(srcDir, map.src);
    const outputPath = path.join(publicDir, map.folder, map.dest);

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
        console.log(
          `✅ Converted ${map.src} to ${path.join(map.folder, map.dest)}`
        );
      } catch (err) {
        console.error(`❌ Error converting ${map.src}:`, err);
      }
    } else {
      console.warn(`⚠️ Source file not found: ${map.src}`);
    }
  }
}

processImages();
