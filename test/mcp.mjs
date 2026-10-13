import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { McpHttpClient, McpManager, McpStdioClient } from "../src/mcp.mjs";

const fixtureSource = `import readline from "node:readline";
const lines = readline.createInterface({ input: process.stdin });
for await (const line of lines) {
  const message = JSON.parse(line);
  if (message.method === "initialize") process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: { protocolVersion: "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "fixture", version: "1" } } }) + "\\n");
  else if (message.method === "tools/list") process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: { tools: [{ name: "echo", description: "Echo input", inputSchema: { type: "object" } }] } }) + "\\n");
  else if (message.method === "tools/call") process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: { content: [{ type: "text", text: String(message.params.arguments?.value ?? "") }], isError: false } }) + "\\n");
}`;

test("stdio MCP owns a child, initializes, lists tools and calls one", async () => {
  const directory = await mkdtemp(join(tmpdir(), "openvision-mcp-"));
  const fixture = join(directory, "server.mjs");
  await writeFile(fixture, fixtureSource);
  const client = new McpStdioClient({ kind: "mcp", command: process.execPath, args: [fixture], env: {} });
  try {
    await client.ready;
    assert.deepEqual((await client.request("tools/list")).tools.map(tool => tool.name), ["echo"]);
    assert.equal((await client.request("tools/call", { name: "echo", arguments: { value: "ok" } })).content[0].text, "ok");
  } finally {
    await client.close();
    await rm(directory, { recursive: true, force: true });
  }
  assert.equal(client.pending.size, 0);
});

test("stdio MCP cancellation releases the request and close reaps the owned child", async () => {
  const directory = await mkdtemp(join(tmpdir(), "openvision-mcp-"));
  const fixture = join(directory, "server.mjs");
  await writeFile(fixture, `import readline from "node:readline";
const lines = readline.createInterface({ input: process.stdin });
for await (const line of lines) { const message = JSON.parse(line); if (message.method === "initialize") process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: { protocolVersion: "2024-11-05", capabilities: {} } }) + "\\n"); }`);
  const client = new McpStdioClient({ kind: "mcp", command: process.execPath, args: [fixture], env: {} });
  const controller = new AbortController();
  try {
    await client.ready;
    const pending = client.request("tools/call", {}, { signal: controller.signal, timeoutMs: 10000 });
    controller.abort(new Error("user canceled"));
    await assert.rejects(pending, /user canceled/);
  } finally {
    await client.close();
    await rm(directory, { recursive: true, force: true });
  }
  assert.equal(client.pending.size, 0);
});

test("HTTP MCP initializes, lists and calls through a configured endpoint", async () => {
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const message = JSON.parse(Buffer.concat(chunks));
    if (message.method === "tools/call" && message.params?.name === "slow") {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (response.destroyed) return;
    }
    const result = message.method === "initialize"
      ? { protocolVersion: "2024-11-05", capabilities: { tools: {} } }
      : message.method === "tools/list" ? { tools: [{ name: "ping" }] }
      : { content: [{ type: "text", text: "pong" }] };
    response.writeHead(message.id === undefined ? 202 : 200, { "content-type": "application/json", "mcp-session-id": "fixture-session" });
    response.end(message.id === undefined ? "" : JSON.stringify({ jsonrpc: "2.0", id: message.id, result }));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const url = `http://127.0.0.1:${server.address().port}/mcp`;
  const client = new McpHttpClient({ kind: "mcp", transport: "http", url });
  try {
    await client.ready;
    assert.deepEqual((await client.request("tools/list")).tools.map(tool => tool.name), ["ping"]);
    assert.equal((await client.request("tools/call", { name: "ping", arguments: {} })).content[0].text, "pong");
    const controller = new AbortController();
    const pending = client.request("tools/call", { name: "slow", arguments: {} }, { signal: controller.signal, timeoutMs: 10000 });
    const started = Date.now();
    controller.abort(new Error("user canceled"));
    await assert.rejects(pending, /user canceled/);
    assert.ok(Date.now() - started < 500, "HTTP cancellation must reject promptly");
  } finally {
    await client.close();
    await new Promise(resolve => server.close(resolve));
  }
});

test("manager reuses a configured client and closes all owned servers", async () => {
  const manager = new McpManager();
  const directory = await mkdtemp(join(tmpdir(), "openvision-mcp-"));
  const fixture = join(directory, "server.mjs");
  await writeFile(fixture, fixtureSource);
  const definition = { kind: "mcp", command: process.execPath, args: [fixture], env: {} };
  try {
    assert.deepEqual(await manager.listTools("fixture", definition), [{ name: "echo", description: "Echo input", inputSchema: { type: "object" } }]);
    assert.equal((await manager.callTool("fixture", definition, "echo", { value: "manager" })).content[0].text, "manager");
    assert.equal(manager.clients.size, 1);
  } finally {
    await manager.closeAll();
    await rm(directory, { recursive: true, force: true });
  }
  assert.equal(manager.clients.size, 0);
});
