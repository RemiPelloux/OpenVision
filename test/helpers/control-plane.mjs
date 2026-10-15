import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

export async function within(promise, ms = 2000) {
  let timer;
  try { return await Promise.race([promise, new Promise((_, reject) => {
    timer = setTimeout(() => reject(Error("control-plane fixture timed out")), ms);
  })]); }
  finally { clearTimeout(timer); }
}

export async function controlPlane(t, servers) {
  const directory = await mkdtemp(join(tmpdir(), "openvision-control-plane-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const configPath = join(directory, "servers.json");
  await writeFile(configPath, JSON.stringify({ version: 2, servers,
    ai: { enabled: false, baseUrl: "http://127.0.0.1:1/v1", model: "fixture", apiKeyEnv: "OPENVISION_TEST_KEY", timeoutMs: 1000 } }));
  const child = spawn(process.execPath, [resolve("src/server.mjs")], {
    env: { ...process.env, OPENVISION_CONFIG: configPath, OPENVISION_HOST: "127.0.0.1", OPENVISION_PORT: "0" },
    windowsHide: true, stdio: ["ignore", "pipe", "pipe"],
  });
  const exited = once(child, "exit");
  let stderr = ""; child.stderr.setEncoding("utf8"); child.stderr.on("data", text => { stderr += text; });
  t.after(async () => {
    if (child.exitCode === null && child.signalCode === null) child.kill();
    await within(exited);
    assert.equal(stderr, "");
  });
  const url = await within(new Promise((accept, reject) => {
    let output = "";
    child.stdout.setEncoding("utf8"); child.stdout.on("data", text => {
      output += text;
      const match = output.match(/OpenVision listening at (http:\/\/127\.0\.0\.1:\d+)/u);
      if (match) accept(match[1]);
    });
    child.once("error", reject);
  }));
  return { url, configPath };
}
