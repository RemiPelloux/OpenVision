'use strict';

const { ownedProcess } = require('./account-auth-process.cjs');
const MAX_LINE_BYTES = 4 * 1024 * 1024;

// One official SDK transport. Credentials remain in the isolated client profile.
function claudeClient(options, dependencies = {}) {
  const client = (dependencies.spawn ?? ownedProcess)(options, ['--print', '--output-format', 'stream-json',
    '--input-format', 'stream-json', '--include-partial-messages', '--verbose', '--no-session-persistence',
    '--setting-sources', '', '--strict-mcp-config', '--mcp-config', '{"mcpServers":{}}', '--tools', '',
    ...(options.model ? ['--model', options.model] : []), ...(options.effort ? ['--effort', options.effort] : [])], options.timeoutMs ?? 600000);
  const pending = new Map(), listeners = new Set();
  let serial = 0, buffer = '', closed = false;
  function send(value) {
    if (closed) throw new Error('Claude account client stopped.');
    client.child.stdin.write(JSON.stringify(value) + '\n', error => {
      if (error) client.stop(new Error('Claude account transport closed.'));
    });
  }
  function dispatch(line) {
    let message;
    try { message = JSON.parse(line); }
    catch { client.stop(new Error('Claude account protocol is unreadable.')); return; }
    const response = message.type === 'control_response' && message.response;
    const operation = response && pending.get(response.request_id);
    if (operation) {
      pending.delete(response.request_id); clearTimeout(operation.timer);
      if (response.subtype === 'success') operation.resolve(response.response);
      else operation.reject(new Error('The official Claude client declined this operation.'));
    } else for (const listener of listeners) listener(message);
  }
  client.child.stdout.setEncoding('utf8');
  client.child.stdout.on('data', chunk => {
    buffer += chunk;
    if (Buffer.byteLength(buffer) > MAX_LINE_BYTES) {
      client.stop(new Error('Claude account protocol exceeded its line limit.')); return;
    }
    let end;
    while ((end = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, end); buffer = buffer.slice(end + 1);
      if (line.trim()) dispatch(line);
    }
  });
  const request = request => new Promise((resolve, reject) => {
    if (closed) { reject(new Error('Claude account client stopped.')); return; }
    const id = String(++serial);
    const timer = setTimeout(() => { pending.delete(id); reject(new Error('Claude account control operation timed out.')); }, 30000);
    pending.set(id, { resolve, reject, timer });
    try { send({ type: 'control_request', request_id: id, request }); }
    catch (error) { pending.delete(id); clearTimeout(timer); reject(error); }
  });
  client.exit.then(({ failure }) => {
    closed = true;
    for (const operation of pending.values()) {
      clearTimeout(operation.timer); operation.reject(failure ?? new Error('Claude account client stopped.'));
    }
    pending.clear();
    for (const listener of listeners) listener({ type: 'openvision/processClosed', error: failure });
  });
  return { request, send, listeners, close: client.close };
}

module.exports = { claudeClient };
