import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import { mcpFixtureResponse } from './verify-mcp-protocol.mjs';

// One real Streamable HTTP MCP server shared by several configured servers.
// Each configuration sends its own owner header, so requests, sessions and tool
// output are attributed per configured server even when URLs are identical.
export async function createMcpHttpOwnerFixture() {
  const requests = [], errors = [], sessions = new Map(), sockets = [];
  const token = `openvision-http-owner-${randomUUID()}`;
  const markers = new Map();
  const marker = owner => { if (!markers.has(owner)) markers.set(owner, `OpenVision HTTP owner ${owner} ${randomUUID()}`); return markers.get(owner); };
  const server = createServer(async (request, response) => {
    try {
      const owner = request.headers['x-openvision-owner'];
      const record = { at: new Date().toISOString(), owner, path: request.url, httpMethod: request.method,
        session: request.headers['mcp-session-id'], remotePort: request.socket.remotePort,
        authorized: request.headers.authorization === `Bearer ${token}` };
      requests.push(record);
      if (!record.authorized || typeof owner !== 'string') { record.status = 401; response.writeHead(401); response.end(); return; }
      if (request.method === 'DELETE') {
        if (sessions.has(record.session)) sessions.get(record.session).deletedAt = record.at;
        record.status = 200; response.writeHead(200); response.end(); return;
      }
      // No server-initiated SSE stream; the client treats 405 as unsupported.
      if (request.method !== 'POST') { record.status = 405; response.writeHead(405); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      Object.assign(record, { method: message.method, id: message.id, params: message.params });
      const headers = { 'Content-Type': 'application/json' };
      if (message.method === 'initialize') {
        const session = randomUUID(); headers['Mcp-Session-Id'] = session;
        sessions.set(session, { owner, createdAt: record.at }); record.assignedSession = session;
      } else if (!sessions.has(record.session) || sessions.get(record.session).owner !== owner || sessions.get(record.session).deletedAt) {
        record.status = 404; response.writeHead(404); response.end('Unknown MCP session'); return;
      }
      sessions.get(record.session ?? record.assignedSession).lastUsedAt = record.at;
      record.status = message.id === undefined ? 202 : 200;
      response.writeHead(record.status, headers);
      response.end(message.id === undefined ? undefined : JSON.stringify(mcpFixtureResponse(message, marker(owner))));
    } catch (error) { errors.push(error.message); response.writeHead(500); response.end(); }
  });
  server.on('connection', socket => {
    const record = { remotePort: socket.remotePort, openedAt: new Date().toISOString() };
    sockets.push(record); socket.on('close', () => { record.closedAt = new Date().toISOString(); });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  return { requests, errors, sessions, sockets, port,
    configuration: (owner, path = '/mcp') => ({ url: `http://127.0.0.1:${port}${path}`,
      headers: { Authorization: `Bearer ${token}`, 'X-OpenVision-Owner': owner } }),
    // A per-owner view compatible with the verifier's call helpers.
    view(owner) {
      return { owner, marker: marker(owner),
        get requests() { return requests.filter(item => item.owner === owner); },
        get sessions() { return [...sessions.entries()].filter(([, item]) => item.owner === owner).map(([id, item]) => ({ id, ...item })); } };
    },
    async dispose() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } };
}
