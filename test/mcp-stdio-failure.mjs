import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { McpManager } from "../src/mcp.mjs";

const definition = { kind: "mcp", command: process.execPath,
  args: [fileURLToPath(new URL("./fixtures/mcp-stdio-failure.mjs", import.meta.url))] };

for (const [tool, code] of [["oversize", "MCP_STDIO_TOO_LARGE"], ["malformed", "MCP_STDIO_MALFORMED"],
  ["incomplete", "MCP_STDIO_INCOMPLETE"]]) {
  test(`real STDIO ${tool} fails every pending call, rejects reuse and recovers on a fresh child`, { timeout: 10000 }, async t => {
    const manager = new McpManager();
    t.after(() => manager.closeAll());
    const first = await manager.client("fixture", definition);
    const waiting = assert.rejects(first.request("tools/call", { name: "wait" }), { code });
    await assert.rejects(manager.callTool("fixture", definition, tool), { code });
    await waiting;
    assert.equal(first.pending.size, 0);
    await assert.rejects(first.request("tools/list"), { code });
    assert.equal((await manager.callTool("fixture", definition, "healthy")).content[0].text, "healthy");
    assert.ok(first.child.exitCode !== null || first.child.signalCode !== null);
    assert.notEqual(await manager.client("fixture", definition), first);
    assert.equal(manager.clients.size, 1);
  });
}

test("real STDIO oversized initialization fails and remains explicitly closeable", { timeout: 10000 }, async t => {
  const manager = new McpManager();
  t.after(() => manager.closeAll());
  const oversized = { ...definition, args: ["-e", "process.stdout.write(Buffer.alloc(8*1024*1024+1,120))"] };
  await assert.rejects(manager.listTools("fixture", oversized), { code: "MCP_STDIO_TOO_LARGE" });
  assert.equal(manager.clients.size, 0);
  assert.equal((await manager.callTool("fixture", definition, "healthy")).content[0].text, "healthy");
});
