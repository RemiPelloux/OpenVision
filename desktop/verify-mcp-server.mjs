import { createServer } from 'node:http';

// Real HTTP MCP transport, deliberately local and credential-free outside this fixture.
export async function createMcpServerFixture() {
  const requests = [], errors = [];
  const marker = `OpenVision MCP execution ${crypto.randomUUID()}`;
  const server = createServer(async (request, response) => {
    try {
      if (request.method !== 'POST') { response.writeHead(405); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const message = JSON.parse(Buffer.concat(chunks));
      const authorized = request.headers.authorization === 'Bearer openvision-mcp-fixture';
      requests.push({ method: message.method, id: message.id, params: message.params, authorized });
      if (!authorized) { response.writeHead(401); response.end(); return; }
      if (message.id === undefined) { response.writeHead(202); response.end(); return; }
      let result;
      switch (message.method) {
        case 'initialize': result = { protocolVersion: message.params.protocolVersion,
          capabilities: { tools: {} }, serverInfo: { name: 'openvision-verify', version: '1.0.0' } }; break;
        case 'tools/list': result = { tools: [{ name: 'memory_probe', description: 'Read the disposable verification marker.',
          inputSchema: { type: 'object', properties: {}, additionalProperties: false } }] }; break;
        case 'tools/call': result = message.params.name === 'memory_probe'
          ? { content: [{ type: 'text', text: marker }] }
          : { isError: true, content: [{ type: 'text', text: 'Unknown fixture tool' }] }; break;
        case 'ping': result = {}; break;
      }
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result === undefined
        ? { jsonrpc: '2.0', id: message.id, error: { code: -32601, message: 'Method not found' } }
        : { jsonrpc: '2.0', id: message.id, result }));
    } catch (error) { errors.push(error.message); response.writeHead(500); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { requests, errors, marker, url: `http://127.0.0.1:${server.address().port}/mcp`,
    async dispose() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } };
}
