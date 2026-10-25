import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import {
  downloadModellyArchive,
  installModelly,
  inspectModellyEnvironment,
  modellyStatus,
  uninstallModelly,
} from "./modelly-plugin.mjs";
import { modellyPluginManifest } from "./modelly-plugin-manifest.mjs";

function fakePython(initial = null) {
  let version = initial;
  const calls = [];
  const runPython = async (python, args) => {
    calls.push({ python, args });
    if (args[0] === "-c")
      return { stdout: JSON.stringify({ major: 3, minor: 12, version }) };
    if (args.includes("install")) {
      version = modellyPluginManifest.version;
      return { stdout: "" };
    }
    if (args.includes("uninstall")) {
      version = null;
      return { stdout: "" };
    }
    return { stdout: "" };
  };
  return { runPython, calls };
}

test("rejects an unsupported Python before downloading", async () => {
  const runPython = async (_python, args) =>
    args[0] === "-c"
      ? { stdout: JSON.stringify({ major: 3, minor: 11, version: null }) }
      : { stdout: "" };
  await assert.rejects(
    installModelly({
      pythonPath: "python311",
      cacheDirectory: "unused",
      runPython,
    }),
    (error) => error.code === "python-version",
  );
});

test("rejects a tampered archive and leaves no temporary artifact", async (t) => {
  const cache = await mkdtemp(join(tmpdir(), "openvision-modelly-download-"));
  t.after(() => rm(cache, { recursive: true, force: true }));
  const response = {
    ok: true,
    status: 200,
    headers: new Headers(),
    body: null,
    arrayBuffer: async () => Buffer.from("tampered"),
  };
  await assert.rejects(
    downloadModellyArchive({
      cacheDirectory: cache,
      fetch: async () => response,
    }),
    (error) => error.code === "checksum-failed",
  );
  assert.deepEqual(
    (await readdir(cache)).filter((file) => file.endsWith(".tmp")),
    [],
  );
});

test("installs once, then detects the pinned version without another download", async (t) => {
  const cache = await mkdtemp(join(tmpdir(), "openvision-modelly-install-"));
  t.after(() => rm(cache, { recursive: true, force: true }));
  const fake = fakePython();
  let downloads = 0;
  const downloadArchive = async () => {
    downloads++;
    return { path: join(cache, "modelly.zip"), bytes: 10, cached: false };
  };
  const first = await installModelly({
    pythonPath: "python312",
    cacheDirectory: cache,
    runPython: fake.runPython,
    downloadArchive,
  });
  const second = await installModelly({
    pythonPath: "python312",
    cacheDirectory: cache,
    runPython: fake.runPython,
    downloadArchive,
  });
  assert.equal(first.status, "installed");
  assert.equal(second.status, "already-installed");
  assert.equal(downloads, 1);
  assert.ok(fake.calls.some((call) => call.args.includes("--no-cache-dir")));
});

test("failed pip installation does not report success", async (t) => {
  const cache = await mkdtemp(join(tmpdir(), "openvision-modelly-failure-"));
  t.after(() => rm(cache, { recursive: true, force: true }));
  const fake = fakePython();
  const runPython = async (python, args, options) => {
    if (args[0] === "-c")
      return { stdout: JSON.stringify({ major: 3, minor: 12, version: null }) };
    throw new Error("pip failed");
  };
  await assert.rejects(
    installModelly({
      cacheDirectory: cache,
      runPython,
      downloadArchive: async () => ({ path: "modelly.zip" }),
    }),
    /pip failed/,
  );
  assert.equal((await modellyStatus({ runPython })).status, "available");
});

test("uninstall only invokes pip for Modelly and preserves other packages", async (t) => {
  const fake = fakePython(modellyPluginManifest.version);
  const cache = await mkdtemp(join(tmpdir(), "openvision-modelly-remove-"));
  t.after(() => rm(cache, { recursive: true, force: true }));
  await writeFile(
    join(cache, `modelly-${modellyPluginManifest.commit}.zip`),
    "cached archive",
  );
  const result = await uninstallModelly({
    pythonPath: "python312",
    runPython: fake.runPython,
    cacheDirectory: cache,
  });
  assert.equal(result.status, "removed");
  const uninstall = fake.calls.find((call) => call.args.includes("uninstall"));
  assert.deepEqual(uninstall.args.at(-1), modellyPluginManifest.packageName);
  assert.equal(uninstall.args.includes("numpy"), false);
  assert.deepEqual(
    (await readdir(cache)).filter((file) => file.endsWith(".zip")),
    [],
  );
});

test("manifest checksum is a lowercase SHA-256 digest", async () => {
  assert.match(modellyPluginManifest.sha256, /^[a-f0-9]{64}$/);
  assert.equal(
    createHash("sha256")
      .update(await readFile("desktop/modelly-plugin-manifest.mjs"))
      .digest("hex").length,
    64,
  );
});
