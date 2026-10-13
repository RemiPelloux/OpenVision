// Deterministic MCP fixture behavior shared by real HTTP and STDIO transports.
export function mcpFixtureResponse(message, marker) {
  if (message.id === undefined) return undefined;
  let result;
  switch (message.method) {
    case 'initialize': result = { protocolVersion: message.params.protocolVersion,
      capabilities: { tools: {} }, serverInfo: { name: 'openvision-verify', version: '1.0.0' } }; break;
    case 'tools/list': result = { tools: [{ name: 'memory_probe', description: 'Read the disposable verification marker.',
      inputSchema: { type: 'object', properties: { mode: { type: 'string', enum: ['slow'] } }, additionalProperties: false } }] }; break;
    case 'tools/call': result = message.params.name === 'memory_probe'
      ? { content: [{ type: 'text', text: marker }] }
      : { isError: true, content: [{ type: 'text', text: 'Unknown fixture tool' }] }; break;
    case 'ping': result = {}; break;
  }
  return result === undefined
    ? { jsonrpc: '2.0', id: message.id, error: { code: -32601, message: 'Method not found' } }
    : { jsonrpc: '2.0', id: message.id, result };
}
