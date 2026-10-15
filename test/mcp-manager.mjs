import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { McpManager } from "../src/mcp.mjs";

function deferred() {
  let resolve;
  const promise = new Promise(accept => { resolve = accept; });
  return { promise, resolve };
}

async function within(promise, ms = 2000) {
  let timer;
  try { return await Promise.race([promise, new Promise((_, reject) => {
    timer = setTimeout(() => reject(Error("MCP manager fixture timed out")), ms);
  })]); }
  finally { clearTimeout(timer); }
}

async function fixture(t, handle = () => undefined) {
  const records = [];
  const server = createServer(async (request, response) => {
    try {
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      records.push({ method: message.method, authorization: request.headers.authorization });
      if (await handle(message, response)) return;
      response.writeHead(message.id === undefined ? 202 : 200, { "content-type": "application/json" });
      response.end(message.id === undefined ? "" : JSON.stringify({ jsonrpc: "2.0", id: message.id,
        result: message.method === "initialize" ? { capabilities: {} } : { tools: [{ name: "fixture" }] } }));
    } catch (error) { response.destroy(error); }
  });
  server.listen(0, "127.0.0.1"); await once(server, "listening");
  t.after(async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); });
  return { records, definition: { kind: "mcp", transport: "http", url: `http://127.0.0.1:${server.address().port}` } };
}

function managerFixture(t, options) {
  const manager = new McpManager(options);
  t.after(() => manager.closeAll());
  return manager;
}

test("concurrent callers share initialization and wait for its notification acknowledgement", async t => {
  const notification = deferred(); const prematureTool = deferred();
  let acknowledge; let ready = false; let earlyTools = 0;
  const upstream = await fixture(t, (message, response) => {
    if (message.method === "notifications/initialized") {
      acknowledge = () => { ready = true; response.writeHead(202); response.end(); };
      notification.resolve(); return true;
    }
    if (message.method === "tools/list" && !ready) { earlyTools++; prematureTool.resolve(); }
  });
  const manager = managerFixture(t);
  const first = manager.listTools("fixture", upstream.definition);
  await within(notification.promise);
  const second = manager.listTools("fixture", upstream.definition);
  // Give an incorrect client the chance to send a tool while the ack is held.
  try { await within(prematureTool.promise, 150); } catch { /* expected when initialization is shared */ }
  finally { acknowledge(); }
  const results = await within(Promise.all([first, second]));
  assert.deepEqual(results, [[{ name: "fixture" }], [{ name: "fixture" }]]);
  assert.equal(earlyTools, 0);
  assert.equal(upstream.records.filter(row => row.method === "initialize").length, 1);
});

test("same-id endpoint and authorization changes replace the old connection", async t => {
  const first = await fixture(t); const second = await fixture(t);
  const manager = managerFixture(t);
  await manager.listTools("fixture", first.definition);
  await manager.listTools("fixture", second.definition);
  await manager.listTools("fixture", { ...second.definition, headers: { authorization: "Bearer fixture-two" } });
  assert.equal(first.records.filter(row => row.method === "tools/list").length, 1);
  assert.equal(second.records.filter(row => row.method === "initialize").length, 2);
  assert.equal(second.records.at(-1).authorization, "Bearer fixture-two");
  assert.equal(manager.clients.size, 1);
});

test("equivalent header ordering reuses a client; expanded credential changes replace it", async t => {
  const upstream = await fixture(t);
  const environment = { MCP_FIXTURE_KEY: "fixture-one" };
  const manager = managerFixture(t, { environment });
  const definition = { ...upstream.definition, headers: { authorization: "Bearer ${MCP_FIXTURE_KEY}", "x-fixture": "yes" } };
  await manager.listTools("fixture", definition);
  await manager.listTools("fixture", { ...definition, headers: { "x-fixture": "yes", Authorization: "Bearer ${MCP_FIXTURE_KEY}" } });
  assert.equal(upstream.records.filter(row => row.method === "initialize").length, 1);
  assert.equal(upstream.records.at(-1).authorization, "Bearer fixture-one");
  environment.MCP_FIXTURE_KEY = "fixture-two";
  await manager.listTools("fixture", definition);
  assert.equal(upstream.records.filter(row => row.method === "initialize").length, 2);
  assert.equal(upstream.records.at(-1).authorization, "Bearer fixture-two");
});

test("closing an initializing client cannot delete a newly connected owner", async t => {
  const initializing = deferred();
  const upstream = await fixture(t, (message) => {
    if (message.method === "initialize") { initializing.resolve(); return true; }
  });
  const healthy = await fixture(t);
  const manager = managerFixture(t);
  const pending = manager.listTools("fixture", upstream.definition);
  const rejected = assert.rejects(pending, /closed|changed/);
  await within(initializing.promise);
  await manager.close("fixture");
  await manager.listTools("fixture", healthy.definition);
  await rejected;
  assert.equal(manager.clients.size, 1);
  await manager.listTools("fixture", healthy.definition);
  assert.equal(healthy.records.filter(row => row.method === "initialize").length, 1);
});

test("changing configuration during initialization closes old HTTP work without replaying its caller", async t => {
  const initializing = deferred(); let disconnected;
  const upstream = await fixture(t, (message, response) => {
    if (message.method === "initialize") {
      disconnected = once(response, "close"); initializing.resolve(); return true;
    }
  });
  const healthy = await fixture(t);
  const manager = managerFixture(t);
  const pending = manager.listTools("fixture", upstream.definition);
  const rejected = assert.rejects(pending, /closed|changed/);
  await within(initializing.promise);
  assert.deepEqual(await manager.listTools("fixture", healthy.definition), [{ name: "fixture" }]);
  await rejected; await within(disconnected);
  assert.equal(upstream.records.filter(row => row.method === "tools/list").length, 0);
  assert.equal(healthy.records.filter(row => row.method === "tools/list").length, 1);
});

test("disabling a server closes its client and rejects new calls", async t => {
  const upstream = await fixture(t);
  const manager = managerFixture(t);
  const client = await manager.client("fixture", upstream.definition);
  await assert.rejects(manager.listTools("fixture", { ...upstream.definition, enabled: false }), /disabled/);
  assert.equal(client.closed, true);
  assert.equal(manager.clients.size, 0);
});

test("a failed close remains owned, blocks replacement and can be explicitly retried", async t => {
  const upstream = await fixture(t); const replacement = await fixture(t);
  const manager = managerFixture(t);
  const client = await manager.client("fixture", upstream.definition);
  const close = client.close.bind(client);
  let attempts = 0;
  client.close = async () => { if (++attempts === 1) throw Error("fixture close failure"); await close(); };
  await assert.rejects(manager.close("fixture"), /fixture close failure/);
  assert.equal(manager.clients.size, 1);
  await assert.rejects(manager.listTools("fixture", replacement.definition), /cleanup|close failure/);
  assert.equal(replacement.records.length, 0);
  await manager.close("fixture");
  await manager.listTools("fixture", replacement.definition);
  assert.equal(attempts, 2);
});

test("closeAll attempts every owner and permanently stops new connections even after a failure", async t => {
  const upstream = await fixture(t);
  const manager = managerFixture(t);
  const first = await manager.client("first", upstream.definition);
  const second = await manager.client("second", upstream.definition);
  const close = first.close.bind(first);
  first.close = async () => { throw Error("fixture close failure"); };
  await assert.rejects(manager.closeAll(), /cleanup|close failure/);
  assert.equal(second.closed, true);
  assert.equal(manager.clients.size, 1);
  await assert.rejects(manager.client("third", upstream.definition), /closed|shutting down/);
  first.close = close;
  await manager.closeAll();
  assert.equal(manager.clients.size, 0);
});
