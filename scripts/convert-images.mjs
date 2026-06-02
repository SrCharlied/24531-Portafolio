/**
 * Convierte las capturas PNG de public/screenshots a WebP (más livianas)
 * y elimina los PNG originales. Uso: node scripts/convert-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const DIR = "public/screenshots";

const files = await readdir(DIR);
const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

let beforeTotal = 0;
let afterTotal = 0;

for (const file of pngs) {
  const input = join(DIR, file);
  const output = join(DIR, `${basename(file, ".png")}.webp`);

  const before = (await stat(input)).size;
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);
  const after = (await stat(output)).size;

  await unlink(input); // eliminar el PNG original

  beforeTotal += before;
  afterTotal += after;
  console.log(
    `${file}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  );
}

console.log(
  `\nTotal: ${(beforeTotal / 1024).toFixed(0)}KB → ${(afterTotal / 1024).toFixed(
    0
  )}KB  (ahorro ${(100 - (afterTotal / beforeTotal) * 100).toFixed(0)}%)`
);
