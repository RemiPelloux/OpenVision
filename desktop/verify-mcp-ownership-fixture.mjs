import { createServer } from 'node:http';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';

// Controlled inference drives the real native Agent/approval/STDIO workflow.
export async function createMcpOwnershipFixture() {
  const transport = await createMcpStdioFixture();
  const requests = [], continuations = [], errors = [];
  let phase = 'discover';
  const server = createServer(async (request, response) => {
    try {
      if (request.url === '/v1/models') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ data: [{ id: 'fixture-ownership' }] })); return;
      }
      if (request.url !== '/v1/chat/completions') { response.writeHead(404); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const payload = JSON.parse(Buffer.concat(chunks));
      requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key' });
      response.writeHead(200, { 'Content-Type': 'text/event-stream' });
      const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
        id: 'ownership-fixture', object: 'chat.completion.chunk', model: payload.model,
        choices: [{ index: 0, delta, finish_reason }],
      })}\n\n`);
      const id = `ownership_${phase}`;
      const output = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
      if (output) {
        continuations.push({ phase, content: output.content });
        event({ role: 'assistant', content: `OpenVision ownership ${phase} complete.` }); event({}, 'stop');
      } else {
        const name = phase.includes('discover') ? 'GetMcpTools' : 'CallMcpTool';
        if (!payload.tools?.some(tool => tool.function?.name === name)) throw Error(`${name} not advertised`);
        const args = name === 'GetMcpTools' ? { server: 'user-openvision-verify' } : {
          server: 'user-openvision-verify', toolName: 'memory_probe', description: 'Read the isolated ownership marker', arguments: {},
        };
        event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function',
          function: { name, arguments: JSON.stringify(args) } }] }); event({}, 'tool_calls');
      }
      response.end('data: [DONE]\n\n');
    } catch (error) { errors.push(String(error)); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { transport, requests, continuations, errors, setPhase(value) { phase = value; },
    baseURL: `http://127.0.0.1:${server.address().port}/v1`,
    async dispose() {
      server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); await transport.dispose();
    } };
}
