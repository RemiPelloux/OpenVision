import { createServer } from 'node:http';
import { mcpFixtureResponse } from './verify-mcp-protocol.mjs';

// Real HTTP MCP transport, deliberately local and credential-free outside this fixture.
export async function createMcpServerFixture() {
  const requests = [], errors = [], cancellations = [];
  const pending = new Map();
  const marker = `OpenVision MCP execution ${crypto.randomUUID()}`;
  const server = createServer(async (request, response) => {
    try {
      if (request.method !== 'POST') { response.writeHead(405); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      const authorized = request.headers.authorization === 'Bearer openvision-mcp-fixture';
      requests.push({ method: message.method, id: message.id, params: message.params, authorized });
      if (!authorized) { response.writeHead(401); response.end(); return; }
      if (message.method === 'notifications/cancelled') {
        const active = pending.get(message.params?.requestId);
        if (active) {
          pending.delete(message.params.requestId);
          cancellations.push({ requestId: message.params.requestId, reason: 'notification' });
          active.writeHead(204); active.end();
        }
      }
      if (message.method === 'tools/call' && message.params?.arguments?.mode === 'slow') {
        pending.set(message.id, response);
        response.on('close', () => {
          if (pending.get(message.id) !== response) return;
          pending.delete(message.id); cancellations.push({ requestId: message.id, reason: 'connection-closed' });
        });
        return;
      }
      if (message.id === undefined) { response.writeHead(202); response.end(); return; }
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(mcpFixtureResponse(message, marker)));
    } catch (error) { errors.push(error.message); response.writeHead(500); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { kind: 'http', requests, errors, marker, cancellations,
    configuration: { url: `http://127.0.0.1:${server.address().port}/mcp`,
      headers: { Authorization: 'Bearer openvision-mcp-fixture' } },
    async dispose() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } };
}
