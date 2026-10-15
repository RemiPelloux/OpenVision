import test from "node:test";
import assert from "node:assert/strict";
import { Readable } from "node:stream";
import { readMcpStdio, mcpStdioLimits } from "../src/mcp-stdio-response.mjs";

async function read(chunks) {
  const messages = [];
  await readMcpStdio(Readable.from(chunks), message => messages.push(message));
  return messages;
}

test("STDIO frames preserve split UTF-8, CRLF, multiple messages and blank LF lines", async () => {
  const message = { jsonrpc: "2.0", id: 1, result: "眼👁" };
  const encoded = Buffer.from(JSON.stringify(message) + "\r\n\n");
  const split = encoded.indexOf(Buffer.from("👁")) + 1;
  const chunks = [encoded.subarray(0, split), encoded.subarray(split, encoded.length - 2),
    Buffer.concat([encoded.subarray(encoded.length - 2), Buffer.from('{"id":2}\n')])];
  assert.deepEqual(await read(chunks), [message, { id: 2 }]);
});

test("STDIO admits a complete message at the byte budget and resets it per message", async () => {
  const line = Buffer.from(JSON.stringify("x".repeat(mcpStdioLimits.messageBytes - 2)));
  const messages = await read([line.subarray(0, 7), line.subarray(7), Buffer.from('\n"next"\n')]);
  assert.equal(messages[0].length, mcpStdioLimits.messageBytes - 2);
  assert.equal(messages[1], "next");
});

test("STDIO rejects oversized complete and fragmented unterminated lines without delivering partial results", async () => {
  const payload = Buffer.alloc(mcpStdioLimits.messageBytes + 1, 120);
  for (const chunks of [[Buffer.concat([payload, Buffer.from("\n")])],
    [payload.subarray(0, mcpStdioLimits.messageBytes), payload.subarray(mcpStdioLimits.messageBytes)]]) {
    const stream = Readable.from(chunks);
    await assert.rejects(readMcpStdio(stream, () => assert.fail("oversize message was delivered")),
      { code: "MCP_STDIO_TOO_LARGE" });
    assert.equal(stream.destroyed, true);
  }
});

test("STDIO counts UTF-8 bytes rather than characters", async () => {
  const payload = Buffer.from(JSON.stringify("眼".repeat(Math.floor(mcpStdioLimits.messageBytes / 3) + 1)) + "\n");
  await assert.rejects(read([payload]), { code: "MCP_STDIO_TOO_LARGE" });
});

test("STDIO rejects malformed JSON, invalid UTF-8 and EOF without a newline", async () => {
  for (const payload of [Buffer.from("not-json\n"), Buffer.from([34, 255, 34, 10])])
    await assert.rejects(read([payload]), { code: "MCP_STDIO_MALFORMED" });
  await assert.rejects(read([Buffer.from('{"id":1}')]), { code: "MCP_STDIO_INCOMPLETE" });
  assert.deepEqual(await read([]), []);
});
