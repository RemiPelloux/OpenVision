import assert from 'node:assert/strict';
import { createServer } from 'node:net';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';

const maximumFrameBytes = 65536;
const cleanupTimeoutMs = 10000;

export async function createMcpStdioFixture() {
  const requests = [], errors = [], connections = [], cancellations = [];
  const sockets = new Set(), owners = new Map();
  const token = randomUUID(), marker = `OpenVision MCP STDIO execution ${randomUUID()}`;
  const server = createServer(socket => {
    sockets.add(socket); socket.setEncoding('utf8');
    let buffer = '', owner;
    socket.on('data', chunk => {
      buffer += chunk;
      if (Buffer.byteLength(buffer) > maximumFrameBytes) return socket.destroy();
      while (buffer.includes('\n')) {
        const end = buffer.indexOf('\n'), line = buffer.slice(0, end); buffer = buffer.slice(end + 1);
        let frame;
        try { frame = JSON.parse(line); } catch { socket.destroy(); return; }
        if (!owner) {
          if (frame.kind !== 'hello' || frame.token !== token || !Number.isSafeInteger(frame.pid) ||
              typeof frame.instance !== 'string' || owners.has(frame.instance)) { socket.destroy(); return; }
          owner = { pid: frame.pid, instance: frame.instance, connectedAt: new Date().toISOString() };
          owners.set(frame.instance, { socket, record: owner }); connections.push(owner); socket.write('ready\n');
        } else if (frame.kind === 'request') {
          const message = frame.message;
          requests.push({ instance: owner.instance, method: message.method, id: message.id,
            params: message.params, fixtureControlAuthenticated: true });
        } else if (frame.kind === 'cancelled') cancellations.push({ instance: owner.instance, requestId: frame.requestId });
        else if (frame.kind === 'error') errors.push(frame.message);
        else errors.push('Unexpected fixture control message');
      }
    });
    socket.on('error', () => {});
    socket.on('close', () => { sockets.delete(socket); if (owner) owner.closedAt = new Date().toISOString(); });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  async function waitForClosed() {
    const deadline = Date.now() + cleanupTimeoutMs;
    while ([...owners.values()].some(owner => !owner.socket.destroyed) && Date.now() < deadline) await delay(50);
    return [...owners.values()].every(owner => owner.socket.destroyed);
  }
  async function verifyExited() {
    assert.ok(connections.length, 'Native MCP must launch the real STDIO fixture');
    assert.ok(await waitForClosed(), 'Native app shutdown must release each STDIO child connection');
    for (const record of connections) {
      const deadline = Date.now() + cleanupTimeoutMs;
      while (Date.now() < deadline) {
        try { process.kill(record.pid, 0); }
        catch (error) { if (error.code !== 'ESRCH') throw error; record.pidAbsentAfterShutdown = true; break; }
        await delay(50);
      }
      assert.equal(record.pidAbsentAfterShutdown, true, 'Registered STDIO fixture PID must be absent after native shutdown');
    }
  }
  return { kind: 'stdio', requests, errors, marker, connections, cancellations, verifyExited,
    async verifyOneActiveChild() {
      const deadline = Date.now() + cleanupTimeoutMs;
      while ([...owners.values()].filter(owner => !owner.socket.destroyed).length !== 1 && Date.now() < deadline) await delay(50);
      assert.equal([...owners.values()].filter(owner => !owner.socket.destroyed).length, 1,
        'Only the current STDIO child may remain alive after routing/policy changes');
    },
    configuration: { command: process.execPath,
      args: [fileURLToPath(new URL('./verify-mcp-stdio-child.mjs', import.meta.url)), String(server.address().port), token, marker] },
    async dispose() {
      // Cleanup is sent only over retained nonce-authenticated fixture connections.
      for (const { socket } of owners.values()) if (!socket.destroyed) socket.write('exit\n');
      const closed = await waitForClosed();
      for (const socket of sockets) socket.destroy();
      await new Promise(resolve => server.close(resolve));
      assert.ok(closed, 'STDIO fixture cleanup did not release all owned connections');
    } };
}
