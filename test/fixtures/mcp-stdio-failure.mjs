import readline from "node:readline";
import { once } from "node:events";

// Avoid retaining the whole flood in the fixture; honor pipe backpressure.
const floodBytes = Number(process.argv[2] ?? 8 * 1024 * 1024 + 1);
const block = Buffer.alloc(64 * 1024, 120);
process.stdout.on("error", () => process.exit(0));
for await (const line of readline.createInterface({ input: process.stdin })) {
  const message = JSON.parse(line);
  if (message.id === undefined || message.params?.name === "wait") continue;
  if (message.params?.name === "oversize") {
    for (let bytes = 0; bytes < floodBytes; bytes += block.length)
      if (!process.stdout.write(block.subarray(0, Math.min(block.length, floodBytes - bytes))))
        await once(process.stdout, "drain");
    continue;
  }
  if (message.params?.name === "malformed") { process.stdout.write("invalid JSON\n"); continue; }
  if (message.params?.name === "incomplete") { process.stdout.write('{"jsonrpc":"2.0"}', () => process.exit(0)); continue; }
  const result = message.method === "initialize" ? { capabilities: {} } :
    { content: [{ type: "text", text: message.params?.name === "payload" ? "a".repeat(8192) : "healthy" }] };
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result }) + "\n");
}
