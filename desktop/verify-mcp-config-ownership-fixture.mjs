import { createServer } from 'node:http';

// Controlled inference for the native configuration-ownership verifier. Each
// phase names the exact MCP server identifier the real Agent must call.
export async function createMcpConfigOwnershipProvider() {
  const requests = [], continuations = [], errors = [];
  let phase = 'idle', server = '', mode = 'call';
  const http = createServer(async (request, response) => {
    try {
      if (request.url === '/v1/models') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ data: [{ id: 'fixture-config-ownership' }] })); return;
      }
      if (request.url !== '/v1/chat/completions') { response.writeHead(404); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const payload = JSON.parse(Buffer.concat(chunks));
      requests.push({ phase, server, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key' });
      response.writeHead(200, { 'Content-Type': 'text/event-stream' });
      const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
        id: 'config-ownership-fixture', object: 'chat.completion.chunk', model: payload.model,
        choices: [{ index: 0, delta, finish_reason }],
      })}\n\n`);
      const id = `config_ownership_${phase}`;
      const output = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
      if (output) {
        continuations.push({ phase, server, content: output.content });
        event({ role: 'assistant', content: `OpenVision config ownership ${phase} complete.` }); event({}, 'stop');
      } else {
        const name = mode === 'discover' ? 'GetMcpTools' : 'CallMcpTool';
        if (!payload.tools?.some(tool => tool.function?.name === name)) throw Error(`${name} not advertised`);
        const args = mode === 'discover' ? { server } : {
          server, toolName: 'memory_probe', description: 'Read the configuration ownership marker', arguments: {},
        };
        event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function',
          function: { name, arguments: JSON.stringify(args) } }] }); event({}, 'tool_calls');
      }
      response.end('data: [DONE]\n\n');
    } catch (error) { errors.push(String(error)); response.end(); }
  });
  await new Promise(resolve => http.listen(0, '127.0.0.1', resolve));
  return { requests, continuations, errors,
    setPhase(value, target, kind = 'call') { phase = value; server = target; mode = kind; },
    baseURL: `http://127.0.0.1:${http.address().port}/v1`,
    async dispose() { http.closeAllConnections(); await new Promise(resolve => http.close(resolve)); } };
}
