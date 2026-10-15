import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import { mcpFixtureResponse } from './verify-mcp-protocol.mjs';

// Real Streamable HTTP session IDs and HTTP 404 expiry, with deterministic tool output.
export async function createMcpSessionFixture() {
  const requests = [], errors = [], sessions = new Set();
  const marker = `OpenVision session recovery ${randomUUID()}`;
  let expireNextCall = false;
  const server = createServer(async (request, response) => {
    try {
      if (request.method !== 'POST') { response.writeHead(405); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      const authorized = request.headers.authorization === 'Bearer openvision-session-fixture';
      const record = { method: message.method, id: message.id, params: message.params,
        session: request.headers['mcp-session-id'], authorized };
      requests.push(record);
      if (!authorized) { record.status = 401; response.writeHead(401); response.end(); return; }
      if (message.method === 'tools/call' && expireNextCall) {
        expireNextCall = false; sessions.delete(record.session);
      }
      if (message.method !== 'initialize' && !sessions.has(record.session)) {
        record.status = 404; response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('MCP session expired'); return;
      }
      const headers = { 'Content-Type': 'application/json' };
      if (message.method === 'initialize') {
        const session = randomUUID(); sessions.add(session); headers['Mcp-Session-Id'] = session;
        record.assignedSession = session;
      }
      record.status = message.id === undefined ? 202 : 200;
      response.writeHead(record.status, headers);
      response.end(message.id === undefined ? undefined : JSON.stringify(mcpFixtureResponse(message, marker)));
    } catch (error) { errors.push(error.message); response.writeHead(500); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { requests, errors, marker,
    configuration: { url: `http://127.0.0.1:${server.address().port}/mcp`,
      headers: { Authorization: 'Bearer openvision-session-fixture' } },
    expireNextCall() { expireNextCall = true; },
    async dispose() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } };
}
