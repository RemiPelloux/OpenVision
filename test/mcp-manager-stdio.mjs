import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { McpManager } from "../src/mcp.mjs";

const source = `import readline from "node:readline";
for await (const line of readline.createInterface({input:process.stdin})) {
  const message=JSON.parse(line);
  if(message.id===undefined) continue;
  const result=message.method==="initialize"?{capabilities:{}}:
    {content:[{type:"text",text:JSON.stringify({tag:process.argv[1],value:process.env.MCP_FIXTURE_VALUE,cwd:process.cwd()})}]};
  process.stdout.write(JSON.stringify({jsonrpc:"2.0",id:message.id,result})+"\\n");
}`;

test("STDIO args, explicit environment, expansion and working-directory changes replace and reap the previous child", async t => {
  const directory = await mkdtemp(join(tmpdir(), "openvision-mcp-identity-"));
  const nested = join(directory, "nested"); await mkdir(nested);
  const environment = { MCP_FIXTURE_VALUE: "first" };
  const manager = new McpManager({ environment });
  t.after(async () => { await manager.closeAll(); await rm(directory, { recursive: true, force: true }); });
  const definition = { kind: "mcp", command: process.execPath, args: ["--input-type=module", "-e", source, "one"],
    cwd: directory, env: { MCP_FIXTURE_VALUE: "${MCP_FIXTURE_VALUE}" } };
  async function call(current) {
    const result = await manager.callTool("fixture", current, "identity", {});
    return JSON.parse(result.content[0].text);
  }
  assert.deepEqual(await call(definition), { tag: "one", value: "first", cwd: directory });
  const first = await manager.client("fixture", definition);
  environment.MCP_FIXTURE_VALUE = "second";
  assert.deepEqual(await call(definition), { tag: "one", value: "second", cwd: directory });
  assert.ok(first.child.exitCode !== null || first.child.signalCode !== null, "old child must have exited");
  const second = await manager.client("fixture", definition);
  const changed = { ...definition, args: [...definition.args.slice(0, -1), "two"], cwd: nested };
  assert.deepEqual(await call(changed), { tag: "two", value: "second", cwd: nested });
  assert.ok(second.child.exitCode !== null || second.child.signalCode !== null, "second child must have exited");
  assert.equal(manager.clients.size, 1);
});
