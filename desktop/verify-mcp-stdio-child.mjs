import { connect } from 'node:net';
import { createInterface } from 'node:readline';
import { randomUUID } from 'node:crypto';
import { mcpFixtureResponse } from './verify-mcp-protocol.mjs';

// Launched only by a disposable native MCP configuration. The retained control
// connection authorizes fixture cleanup; PIDs are never used as kill authority.
const [port, token, marker] = process.argv.slice(2);
const instance = randomUUID();
const socket = connect(Number(port), '127.0.0.1');
const report = value => socket.write(JSON.stringify(value) + '\n');
socket.on('error', () => process.exit(1));
socket.on('close', () => process.exit(0));
const ready = Promise.withResolvers();
createInterface({ input: socket }).on('line', line => {
  if (line === 'ready') ready.resolve();
  if (line === 'exit') process.exit(0);
});
socket.on('connect', () => report({ kind: 'hello', token, instance, pid: process.pid }));
await ready.promise;
const pending = new Set();
const input = createInterface({ input: process.stdin });
input.on('line', line => {
  try {
    const message = JSON.parse(line);
    if (message.method === 'tools/call' && message.params?.arguments?.mode === 'disconnect') {
      socket.write(JSON.stringify({ kind: 'request', message }) + '\n', () => process.exit(0)); return;
    }
    report({ kind: 'request', message });
    if (message.method === 'tools/call' && ['slow', 'timeout'].includes(message.params?.arguments?.mode)) {
      pending.add(message.id); return;
    }
    if (message.method === 'notifications/cancelled' && pending.delete(message.params?.requestId))
      report({ kind: 'cancelled', requestId: message.params.requestId });
    const response = mcpFixtureResponse(message, marker);
    if (response) process.stdout.write(JSON.stringify(response) + '\n');
  } catch (error) { report({ kind: 'error', message: error.message }); }
});
input.on('close', () => process.exit(0));
