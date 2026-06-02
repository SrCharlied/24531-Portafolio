/**
 * Genera la imagen Open Graph (1200x630) para compartir el portafolio.
 * Uso: node scripts/make-og.mjs
 */
import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#2f3045"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#101018"/>
  <rect width="1200" height="630" fill="url(#dots)" opacity="0.5"/>
  <!-- panel/viñeta -->
  <rect x="60" y="60" width="1080" height="510" rx="8" fill="#181824"
        stroke="#f4f1de" stroke-width="4"/>
  <!-- capítulo -->
  <text x="110" y="170" font-family="Arial, sans-serif" font-size="28"
        font-weight="700" fill="#e07a5f" letter-spacing="4">CAP. 00 — PORTAFOLIO</text>
  <!-- título -->
  <text x="106" y="300" font-family="Arial, sans-serif" font-size="120"
        font-weight="800" fill="#f4f1de">Charlie<tspan fill="#e07a5f">.dev</tspan></text>
  <!-- subtítulo -->
  <text x="110" y="380" font-family="Arial, sans-serif" font-size="40"
        font-weight="600" fill="#88c070">Desarrollador full-stack junior</text>
  <!-- línea -->
  <text x="110" y="470" font-family="Arial, sans-serif" font-size="30"
        fill="#b8b5a6">Web · APIs REST · Experiencias interactivas</text>
  <!-- badges -->
  <text x="110" y="530" font-family="Arial, sans-serif" font-size="26"
        font-weight="700" fill="#f2cc8f">React · Vite · Bun · PostgreSQL · Docker</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png generado (1200x630)");
