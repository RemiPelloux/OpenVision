import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { gzipSync } from "node:zlib";
import { McpHttpClient } from "../src/mcp.mjs";
import { mcpHttpLimits } from "../src/mcp-http-response.mjs";

async function fixture(t, tool, notification, timeoutMs = 2000) {
  const server = createServer(async (request, response) => {
    try {
      const chunks = [];
      for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      if (message.method === "notifications/initialized") {
        if (notification) return notification(response);
        response.writeHead(202); response.end(); return;
      }
      if (message.method !== "initialize") return tool(message, response);
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: { capabilities: {} } }));
    } catch (error) { response.destroy(error); }
  });
  server.listen(0, "127.0.0.1"); await once(server, "listening");
  const client = new McpHttpClient({ transport: "http", url: `http://127.0.0.1:${server.address().port}` }, { timeoutMs });
  t.after(async () => { await client.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); });
  await client.ready;
  return client;
}

async function within(promise, ms = 1000) {
  let timer;
  try { return await Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("HTTP socket did not close")), ms); })]); }
  finally { clearTimeout(timer); }
}

for (const stage of ["headers", "JSON body", "SSE body"]) {
  test(`request deadline closes actual HTTP work stalled at ${stage}`, async t => {
    let response;
    let started;
    const received = new Promise(resolve => { started = resolve; });
    const client = await fixture(t, (_, value) => {
      response = value;
      if (stage !== "headers") {
        value.writeHead(200, { "content-type": stage === "JSON body" ? "application/json" : "text/event-stream" });
        value.write(stage === "JSON body" ? '{"jsonrpc":' : ': waiting\n\n');
      }
      started();
    });
    const pending = client.request("tools/list", {}, { timeoutMs: 150 });
    const rejected = assert.rejects(pending, /MCP request timed out: tools\/list/);
    await within(received);
    const closed = once(response, "close");
    await rejected;
    await within(closed);
    assert.equal(client.pending.size, 0);
  });
}

test("HTTP cancellation and client close release bodies and preserve the caller reason", async t => {
  const responses = [];
  let received;
  const client = await fixture(t, (_, response) => {
    responses.push(response); response.writeHead(200, { "content-type": "application/json" });
    response.write('{"jsonrpc":'); received();
  });
  for (const action of ["cancel", "close"]) {
    const controller = new AbortController();
    const started = new Promise(resolve => { received = resolve; });
    const reason = new Error("Stopped by user");
    const request = client.request("tools/list", {}, { signal: controller.signal });
    const rejected = assert.rejects(request, action === "cancel" ? error => error === reason : /MCP client closed/);
    await within(started);
    const closed = once(responses.at(-1), "close");
    if (action === "cancel") controller.abort(reason); else await client.close();
    await rejected; await within(closed);
    assert.equal(client.pending.size, 0);
  }
});

test("SSE consumes fragmented multiline UTF-8 events and stops at its matching response", async t => {
  let socketClosed;
  const client = await fixture(t, (message, response) => {
    socketClosed = once(response, "close");
    response.writeHead(200, { "content-type": "text/event-stream; charset=utf-8" });
    const body = Buffer.from(': heartbeat\r\ndata: {"jsonrpc":"2.0","method":"notifications/progress"}\r\n\r\n' +
      'data: {"jsonrpc":"2.0","id":999,"result":{}}\n\n' +
      `data: {"jsonrpc":"2.0","id":${message.id},\r\ndata: "result":{"tools":[{"name":"🦀"}]}}\r\n\r\n`);
    let offset = 0;
    const write = () => {
      if (response.destroyed || offset === body.length) return;
      response.write(body.subarray(offset, ++offset)); setImmediate(write);
    };
    write(); // Deliberately leave the response open after the matching event.
  });
  assert.deepEqual(await client.request("tools/list"), { tools: [{ name: "🦀" }] });
  await within(socketClosed);
  assert.equal(client.pending.size, 0);
});

test("gzip HTTP errors stop at the decoded-byte budget and keep status/diagnostics", async t => {
  let closed;
  const client = await fixture(t, (_, response) => {
    closed = once(response, "close");
    response.writeHead(503, { "content-type": "text/plain", "content-encoding": "gzip" });
    response.end(gzipSync(Buffer.from("provider unavailable ".repeat(100000))));
  });
  await assert.rejects(client.request("tools/list"), error => {
    assert.match(error.message, /MCP HTTP 503: provider unavailable/);
    assert.match(error.message, new RegExp(`exceeds ${mcpHttpLimits.errorBytes} decoded bytes`));
    assert.ok(error.message.length < 700);
    return true;
  });
  await within(closed);
  assert.equal(client.pending.size, 0);
});

for (const type of ["application/json", "text/event-stream"]) {
  test(`${type} oversized success fails explicitly and disconnects`, async t => {
    let closed;
    const client = await fixture(t, (_, response) => {
      closed = once(response, "close"); response.writeHead(200, { "content-type": type });
      response.write("x".repeat(mcpHttpLimits.responseBytes + 1));
    });
    await assert.rejects(client.request("tools/list"), /response exceeds 8388608 decoded bytes/);
    await within(closed);
  });
}

for (const [type, body, error] of [
  ["application/json", '{"jsonrpc":"2.0","id":999,"result":{}}', /does not match/],
  ["text/event-stream", 'data: {"jsonrpc":"2.0","id":2,"result":{}}', /stream ended/],
  ["application/json", "{malformed", /JSON|property name/],
  ["text/event-stream", "data: {malformed\n\n", /JSON|property name/],
  ["text/plain", "unexpected", /must use application\/json or text\/event-stream/],
]) {
  test(`invalid ${type} reply rejects without retaining a pending request: ${body.slice(0, 12)}`, async t => {
    const client = await fixture(t, (_, response) => { response.writeHead(200, { "content-type": type }); response.end(body); });
    await assert.rejects(client.request("tools/list"), error);
    assert.equal(client.pending.size, 0);
  });
}

test("notification acknowledgement cancels an unexpected open body", async t => {
  let closed;
  const client = await fixture(t, () => {}, response => {
    closed = once(response, "close"); response.writeHead(202); response.write("unexpected");
  });
  await within(closed);
  assert.equal(client.pending.size, 0);
});

test("a stalled notification acknowledgement obeys the client deadline", async t => {
  let closed;
  await assert.rejects(fixture(t, () => {}, response => {
    closed = once(response, "close"); // Send no headers: fetch itself must be aborted.
  }, 150), error => error.name === "TimeoutError");
  assert.ok(closed);
  await within(closed);
});
