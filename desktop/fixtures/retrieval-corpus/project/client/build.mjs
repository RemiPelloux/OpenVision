#!/usr/bin/env node
// Bundles the client by concatenating ES modules into dist/ and fingerprinting
// assets so they can be cached forever by the CDN.
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile, rm } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const root = new URL(".", import.meta.url).pathname;
const outDir = join(root, "dist");

function fingerprint(contents) {
  return createHash("sha256").update(contents).digest("hex").slice(0, 10);
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .trim();
}

async function emit(sourcePath, transform = (s) => s) {
  const contents = transform(await readFile(sourcePath, "utf8"));
  const ext = extname(sourcePath);
  const name = `${basename(sourcePath, ext)}.${fingerprint(contents)}${ext}`;
  await writeFile(join(outDir, name), contents);
  return [basename(sourcePath), name];
}

async function build() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  const manifest = {};

  for (const file of await readdir(join(root, "src"))) {
    if (!file.endsWith(".js")) continue;
    const [from, to] = await emit(join(root, "src", file));
    manifest[from] = to;
  }
  for (const file of await readdir(join(root, "styles"))) {
    if (!file.endsWith(".css")) continue;
    const [from, to] = await emit(join(root, "styles", file), minifyCss);
    manifest[from] = to;
  }

  await writeFile(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`built ${Object.keys(manifest).length} assets into ${outDir}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
