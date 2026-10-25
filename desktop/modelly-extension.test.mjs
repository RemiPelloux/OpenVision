import assert from "node:assert/strict";
import { test } from "node:test";
import { cp, mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { installModellyExtension } from "./modelly-extension.mjs";

test("Modelly is packaged as a separate lazy extension with its installer inputs", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "openvision-modelly-extension-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await cp(
    join(import.meta.dirname, "modelly-extension"),
    join(root, "desktop/modelly-extension"),
    { recursive: true },
  );
  const result = await installModellyExtension(root);
  assert.deepEqual(result.files.sort(), [
    "extension.js",
    "modelly-plugin-manifest.mjs",
    "modelly-plugin.mjs",
    "package.json",
    "starter.ipynb",
  ]);
  const manifest = JSON.parse(
    await readFile(join(result.target, "package.json"), "utf8"),
  );
  assert.equal(manifest.name, "openvision-modelly");
  assert.equal((await readdir(result.target)).includes("starter.ipynb"), true);
});
