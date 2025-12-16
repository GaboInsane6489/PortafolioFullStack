import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = join(
  __dirname,
  "public/assets/images/certificates/fullStack-cert.jpeg"
);
const output = join(
  __dirname,
  "public/assets/images/certificates/fullStack-cert.webp"
);

console.log(`Converting: ${input} -> ${output}`);

sharp(input)
  .webp({ quality: 80, effort: 6 })
  .toFile(output)
  .then(() => console.log("✅ Conversion complete"))
  .catch((err) => console.error("❌ Error:", err));
