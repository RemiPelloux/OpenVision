import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';

export async function modelDiscoveryFixture() {
  const requests = [], pending = new Set();
  const oversized = gzipSync(Buffer.from('x'.repeat(4 * 1024 * 1024 + 1)));
  const server = createServer((request, response) => {
    const mode = request.url.split('/')[1];
    const entry = { mode, path: request.url, authorized: request.headers.authorization === 'Bearer discovery-fixture',
      customAuthorized: request.headers['x-api-key'] === 'header-fixture',
      started: performance.now(), closed: false };
    requests.push(entry);
    response.once('close', () => { entry.closed = true; entry.closedAt = performance.now(); });
    if (mode === 'headers') return;
    if (mode === 'balance' || mode === 'reflected' || mode === 'plain') {
      response.writeHead(403, { 'content-type': mode === 'plain' ? 'text/plain' : 'application/json' });
      return response.end(mode === 'balance' ? '{"code":"INSUFFICIENT_BALANCE","message":"Insufficient account balance"}'
        : mode === 'reflected' ? JSON.stringify({ error: { message: `Key discovery-fixture\u0007 rejected ${'x'.repeat(400)}` } })
        : 'Insufficient account balance');
    }
    response.writeHead(mode === 'error' ? 503 : 200, { 'content-type': 'application/json',
      ...(mode === 'large' ? { 'content-encoding': 'gzip' } : {}) });
    if (mode === 'error' || mode === 'body') {
      response.write(mode === 'error' ? 'Do not display this provider body: discovery-fixture' : '{"data":[');
      return;
    }
    if (mode === 'large') return response.end(oversized);
    if (mode === 'invalid') return response.end('{bad json');
    if (mode === 'utf8') return response.end(Buffer.concat([
      Buffer.from('{"data":[{"id":"'), Buffer.from([0xff]), Buffer.from('"}]}'),
    ]));
    if (mode === 'catalog') return response.end('{"data":[{"name":"missing ID"}]}');
    response.end('{"data":[{"id":"alpha"},{"id":"beta","name":"Beta"}]}');
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return {
    requests,
    configuration: mode => ({ url: `http://127.0.0.1:${server.address().port}/${mode}`, key: 'discovery-fixture' }),
    async waitFor(predicate, timeoutMs = 2000) {
      const deadline = performance.now() + timeoutMs;
      while (!predicate()) {
        if (performance.now() >= deadline) throw new Error('Discovery fixture observation deadline elapsed.');
        await new Promise(resolve => {
          const timer = setTimeout(() => { pending.delete(timer); resolve(); }, 10); pending.add(timer);
        });
      }
    },
    async close() {
      for (const timer of pending) clearTimeout(timer);
      server.closeAllConnections();
      await new Promise(resolve => server.close(resolve));
    },
  };
}
