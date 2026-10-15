import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { controlPlane, within } from "./helpers/control-plane.mjs";

test("public MCP route reports STDIO overflow explicitly and recovers without replaying the failed tool", async t => {
  const { url } = await controlPlane(t, { fixture: { kind: "mcp", command: process.execPath,
    args: [fileURLToPath(new URL("./fixtures/mcp-stdio-failure.mjs", import.meta.url))] } });
  const call = tool => fetch(url + "/api/servers/fixture/call", { method: "POST",
    headers: { "content-type": "application/json" }, body: JSON.stringify({ tool }) });
  const overflow = await call("oversize");
  assert.equal(overflow.status, 500);
  assert.match((await overflow.json()).error, /MCP STDIO message exceeds 8388608 encoded bytes/);
  const recovered = await call("healthy");
  assert.equal(recovered.status, 200);
  assert.equal((await recovered.json()).result.content[0].text, "healthy");
});

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
  const { url } = await controlPlane(t, {
    fixture: { kind: "mcp", transport: "http", url: `http://127.0.0.1:${upstream.address().port}` },
  });
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
});

test("public MCP configuration changes route to the new endpoint/key and disabling stops active HTTP work", async t => {
  const calls = []; let stalled; let waiting;
  const upstream = createServer(async (request, response) => {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const message = JSON.parse(Buffer.concat(chunks));
    calls.push({ path: request.url, authorization: request.headers.authorization, method: message.method });
    if (message.id === undefined) { response.writeHead(202); response.end(); return; }
    response.writeHead(200, { "content-type": "application/json" });
    if (message.params?.name === "wait") {
      stalled = once(response, "close"); response.write('{"jsonrpc":'); waiting(); return;
    }
    response.end(JSON.stringify({ jsonrpc: "2.0", id: message.id,
      result: message.method === "initialize" ? { capabilities: {} } : { tools: [{ name: "healthy" }] } }));
  });
  upstream.listen(0, "127.0.0.1"); await once(upstream, "listening");
  t.after(async () => { upstream.closeAllConnections(); await new Promise(resolve => upstream.close(resolve)); });
  const base = `http://127.0.0.1:${upstream.address().port}`;
  const definition = { kind: "mcp", transport: "http", url: base + "/first", headers: { authorization: "Bearer fixture-one" } };
  const { url, configPath } = await controlPlane(t, { fixture: definition });
  const list = () => fetch(url + "/api/servers/fixture/tools").then(response => response.json());
  assert.deepEqual((await list()).tools, [{ name: "healthy" }]);
  async function update(patch) {
    const response = await fetch(url + "/api/servers", { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: "fixture", ...definition, ...patch }) });
    assert.equal(response.status, 201); await response.json();
  }
  await update({ url: base + "/second", headers: { authorization: "Bearer fixture-two" } });
  assert.deepEqual((await list()).tools, [{ name: "healthy" }]);
  assert.deepEqual(calls.at(-1), { path: "/second", authorization: "Bearer fixture-two", method: "tools/list" });
  const started = new Promise(resolve => { waiting = resolve; });
  const active = fetch(url + "/api/servers/fixture/call", { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ tool: "wait" }) });
  await within(started);
  await update({ enabled: false }); await within(stalled);
  const canceled = await active; assert.equal(canceled.status, 500); assert.match((await canceled.json()).error, /closed/);
  assert.match((await list()).error, /disabled/);
  await update({}); assert.deepEqual((await list()).tools, [{ name: "healthy" }]);
  const removed = await fetch(url + "/api/servers/fixture", { method: "DELETE" });
  assert.equal(removed.status, 200); await removed.json();
  assert.match((await list()).error, /not found/);
  assert.equal(JSON.parse(await readFile(configPath, "utf8")).servers.fixture, undefined);
});
