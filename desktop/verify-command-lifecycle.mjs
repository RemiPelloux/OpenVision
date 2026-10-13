import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { createServer } from 'node:net';

const connectionTimeoutMs = 30000;
const stopTimeoutMs = 10000;

async function deadline(promise, milliseconds, message) {
  let timer;
  try {
    return await Promise.race([promise, new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), milliseconds);
    })]);
  } finally { clearTimeout(timer); }
}

export async function commandLifecycle() {
  const token = randomUUID(), connected = Promise.withResolvers(), closed = Promise.withResolvers();
  const sockets = new Set();
  let child;
  const server = createServer(socket => {
    sockets.add(socket); socket.setEncoding('utf8');
    let buffer = '';
    socket.on('data', chunk => {
      buffer += chunk;
      if (buffer.length > 1024) return socket.destroy();
      if (!buffer.includes('\n')) return;
      let message;
      try { message = JSON.parse(buffer.slice(0, buffer.indexOf('\n'))); } catch { return socket.destroy(); }
      if (message.token !== token || !Number.isSafeInteger(message.pid) || child) return socket.destroy();
      child = { pid: message.pid, socket }; connected.resolve(child);
    });
    socket.on('error', () => {});
    socket.on('close', () => { sockets.delete(socket); if (child?.socket === socket) closed.resolve(); });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return {
    script: [
      "const socket = require('node:net').connect(" + server.address().port + ", '127.0.0.1');",
      `socket.on('connect', () => socket.write(JSON.stringify({token: ${JSON.stringify(token)}, pid: process.pid}) + '\\n'));`,
      "socket.on('data', () => process.exit(0)); socket.on('end', () => process.exit(0)); socket.on('error', () => process.exit(1));",
      "console.log('OpenVision long-running command started'); setTimeout(() => process.exit(42), 45000);",
    ].join('\n'),
    async verifyStop(page) {
      const owned = await deadline(connected.promise, connectionTimeoutMs, 'Command did not register its fixture connection');
      const started = performance.now();
      await page.locator('.stop-button').filter({ visible: true }).first().click();
      await deadline(closed.promise, stopTimeoutMs, 'Stop did not close the running command connection');
      const stopMs = Math.round(performance.now() - started);
      // Read-only existence check; never send a signal to a process selected by PID.
      let exists = true;
      for (let attempts = 0; attempts < 50 && exists; attempts++) {
        try { process.kill(owned.pid, 0); await page.waitForTimeout(100); }
        catch (error) { if (error.code !== 'ESRCH') throw error; exists = false; }
      }
      assert.equal(exists, false, 'Registered fixture process must exit after Stop');
      return { stopMs, connectionClosed: true, registeredPidAbsent: true };
    },
    async dispose() {
      // Only nonce-authenticated fixture code receives cleanup instructions.
      try {
        if (child && !child.socket.destroyed) {
          child.socket.end('exit\n');
          await deadline(closed.promise, stopTimeoutMs, 'Fixture cleanup connection did not close');
        }
      } finally {
        for (const socket of sockets) socket.destroy();
        await new Promise(resolve => server.close(resolve));
      }
    },
  };
}
