import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { once } from "node:events";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

async function within(promise, ms = 2000) {
  let timer;
  try { return await Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(Error("control-plane fixture timed out")), ms); })]); }
  finally { clearTimeout(timer); }
}

test("public MCP call route cancels upstream on browser disconnect and remains usable", async t => {
  let toolStarted;
  let upstreamClosed;
  const upstream = createServer(async (request, response) => {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const message = JSON.parse(Buffer.concat(chunks));
    if (message.id === undefined) { response.writeHead(202); response.end(); return; }
    response.writeHead(200, { "content-type": "application/json" });
    if (message.params?.name === "wait") {
      upstreamClosed = once(response, "close"); response.write('{"jsonrpc":'); toolStarted(); return;
    }
    response.end(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: message.method === "initialize" ?
      { capabilities: {} } : { content: [{ type: "text", text: "healthy" }] } }));
  });
  upstream.listen(0, "127.0.0.1"); await once(upstream, "listening");
  t.after(async () => { upstream.closeAllConnections(); await new Promise(resolve => upstream.close(resolve)); });
  const directory = await mkdtemp(join(tmpdir(), "openvision-control-plane-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const configPath = join(directory, "servers.json");
  await writeFile(configPath, JSON.stringify({ version: 2, servers: {
    fixture: { kind: "mcp", transport: "http", url: `http://127.0.0.1:${upstream.address().port}` },
  }, ai: { enabled: false, baseUrl: "http://127.0.0.1:1/v1", model: "fixture", apiKeyEnv: "OPENVISION_TEST_KEY", timeoutMs: 1000 } }));
  const child = spawn(process.execPath, [resolve("src/server.mjs")], {
    env: { ...process.env, OPENVISION_CONFIG: configPath, OPENVISION_HOST: "127.0.0.1", OPENVISION_PORT: "0" },
    windowsHide: true, stdio: ["ignore", "pipe", "pipe"],
  });
  const exited = once(child, "exit");
  let stderr = ""; child.stderr.setEncoding("utf8"); child.stderr.on("data", text => { stderr += text; });
  t.after(async () => {
    if (child.exitCode === null && child.signalCode === null) child.kill();
    await within(exited);
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
  async function call(tool, options = {}) {
    return fetch(url + "/api/servers/fixture/call", { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ tool, arguments: {}, timeoutMs: 5000 }), ...options });
  }
  const healthy = await call("healthy");
  assert.equal(healthy.status, 200); assert.equal((await healthy.json()).result.content[0].text, "healthy");
  const started = new Promise(resolve => { toolStarted = resolve; });
  const controller = new AbortController();
  const waiting = call("wait", { signal: controller.signal });
  const rejected = assert.rejects(waiting, /stopped by browser/);
  await within(started);
  controller.abort(new Error("stopped by browser"));
  await rejected; await within(upstreamClosed);
  const recovered = await call("healthy");
  assert.equal(recovered.status, 200); assert.equal((await recovered.json()).result.content[0].text, "healthy");
  assert.equal(stderr, "");
});
