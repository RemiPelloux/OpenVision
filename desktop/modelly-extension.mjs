import { cp, mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "extension.js",
  "package.json",
  "modelly-plugin.mjs",
  "modelly-plugin-manifest.mjs",
  "starter.ipynb",
];

export async function installModellyExtension(root) {
  const source = join(root, "desktop/modelly-extension");
  const target = join(root, "source/app/extensions/openvision-modelly");
  await mkdir(target, { recursive: true });
  for (const file of files)
    await cp(join(source, file), join(target, file), { force: true });
  return {
    target,
    files: (await readdir(target)).filter((file) => files.includes(file)),
  };
}
