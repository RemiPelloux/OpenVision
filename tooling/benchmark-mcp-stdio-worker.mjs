import assert from "node:assert/strict";
import { fileURLToPath, pathToFileURL } from "node:url";

const [modulePath, workload] = process.argv.slice(2);
const { McpManager } = await import(pathToFileURL(modulePath));
const fixture = fileURLToPath(new URL("../test/fixtures/mcp-stdio-failure.mjs", import.meta.url));
const floodBytes = 32 * 1024 * 1024;
const definition = { kind: "mcp", command: process.execPath, args: [fixture, String(floodBytes)] };
const manager = new McpManager({ timeoutMs: 1000 });
const samples = [], outcomes = [];

try {
  for (const temperature of ["first", "warm"]) {
    const started = performance.now(), cpu = process.cpuUsage();
    const count = workload === "stdio-overflow-recovery" ? 2 : 20;
    for (let i = 0; i < count; i++) {
      if (workload === "stdio-overflow-recovery") {
        await assert.rejects(manager.callTool("fixture", definition, "oversize"), error => {
          assert.match(error.message, /message exceeds|request timed out/);
          outcomes.push(error.code ?? "request-timeout");
          return true;
        });
        // Both revisions explicitly close before retrying; no replay is hidden.
        await manager.close("fixture");
      }
      const result = await manager.callTool("fixture", definition, "payload");
      assert.equal(result.content[0].text, "a".repeat(8192));
    }
    const elapsedMs = performance.now() - started, used = process.cpuUsage(cpu);
    samples.push({ temperature, elapsedMs, cpuMs: (used.user + used.system) / 1000,
      requests: null, completedTasks: count });
  }
} finally { await manager.closeAll(); }
console.log(JSON.stringify({ workload, samples, outcomes, peakRssKiB: process.resourceUsage().maxRSS,
  floodBytes: workload === "stdio-overflow-recovery" ? floodBytes : undefined,
  memoryScope: "Node client worker lifetime RSS high-water; separate STDIO child excluded",
  limits: ["Requests, tokens, process-family CPU and peak memory are not measured",
    "Overflow producer honors pipe backpressure; candidate may stop it before the full declared flood"] }));
