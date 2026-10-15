import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { gzipSync } from "node:zlib";
import { pathToFileURL } from "node:url";

const [modulePath, workload] = process.argv.slice(2);
const { McpHttpClient } = await import(pathToFileURL(modulePath));
const errorDecodedBytes = 32 * 1024 * 1024;
const compressedError = workload === "error-recovery" ? gzipSync(Buffer.alloc(errorDecodedBytes, 120)) : undefined;
const text = "a".repeat(8192);
let requests = 0;
const server = createServer(async (request, response) => {
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const message = JSON.parse(Buffer.concat(chunks)); requests++;
  if (message.id === undefined) { response.writeHead(202); response.end(); return; }
  if (message.params?.name === "error") {
    response.writeHead(503, { "content-type": "text/plain", "content-encoding": "gzip" });
    response.end(compressedError); return;
  }
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify({ jsonrpc: "2.0", id: message.id,
    result: message.method === "initialize" ? { capabilities: {} } : { content: [{ type: "text", text }] } }));
});
server.listen(0, "127.0.0.1"); await once(server, "listening");
const client = new McpHttpClient({ transport: "http", url: `http://127.0.0.1:${server.address().port}` });
try {
  await client.ready;
  const samples = [];
  for (const temperature of ["first", "warm"]) {
    const started = performance.now(), cpu = process.cpuUsage(), beforeRequests = requests;
    const count = workload === "error-recovery" ? 5 : 20;
    for (let i = 0; i < count; i++) {
      if (workload === "error-recovery")
        await assert.rejects(client.request("tools/call", { name: "error" }), /MCP HTTP 503:/);
      const result = await client.request("tools/call", { name: "healthy" });
      assert.equal(result.content[0].text, text);
    }
    const elapsedMs = performance.now() - started, used = process.cpuUsage(cpu);
    samples.push({ temperature, elapsedMs, cpuMs: (used.user + used.system) / 1000,
      requests: requests - beforeRequests, completedTasks: count });
  }
  console.log(JSON.stringify({ workload, samples, peakRssKiB: process.resourceUsage().maxRSS,
    errorDecodedBytes: compressedError ? errorDecodedBytes : undefined, errorWireBytes: compressedError?.length,
    processes: 1, memoryScope: "worker plus in-process HTTP fixture; lifetime OS high-water RSS" }));
} finally {
  await client.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
}
