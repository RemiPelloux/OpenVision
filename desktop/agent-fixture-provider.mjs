import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';

// Deterministic OpenAI-compatible Chat Completions fixture for native Agent checks.
// It stands in for the upstream provider behind live-agent-relay.mjs, so the same
// relay evidence and assertions apply. Every response is a fixture, not inference:
// it never invents knowledge, it only reflects what the actual request contains.
const markerPattern = /OPENVISION_READ_[0-9a-f]{32}/;
const recallPattern = /reply with (\S+:) followed immediately by the exact single line you read earlier/;
export const fixtureModel = 'openvision-agent-fixture';

const text = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
const pathKeys = ['path', 'file_path', 'target_file', 'filePath', 'targetFile'];

// Choose the reply from the request alone: a Read call, the Read result's marker,
// or a recall marker found only in earlier assistant history.
export function fixtureReply(payload, { project }) {
  const messages = Array.isArray(payload?.messages) ? payload.messages : [];
  const last = messages.at(-1);
  if (last?.role === 'tool') {
    const marker = text(last.content).match(markerPattern)?.[0];
    return { content: marker ?? 'FIXTURE_TOOL_RESULT_WITHOUT_MARKER' };
  }
  const prompt = text(messages.findLast(message => message.role === 'user')?.content);
  const recall = prompt.match(recallPattern);
  if (recall) {
    // The marker must come from the conversation history the app actually sent.
    const marker = messages.filter(message => message.role === 'assistant')
      .map(message => text(message.content).match(markerPattern)?.[0]).find(Boolean);
    return { content: marker ? `${recall[1]} ${marker}` : `${recall[1]} FIXTURE_HISTORY_MISSING` };
  }
  if (/Read tool to read probe\.txt/.test(prompt)) {
    const read = payload.tools?.find(tool => (tool.function?.name ?? tool.name) === 'Read');
    if (!read) return { content: 'FIXTURE_READ_TOOL_MISSING' };
    const properties = read.function?.parameters?.properties ?? {};
    const key = pathKeys.find(name => name in properties) ?? read.function?.parameters?.required?.[0] ?? 'path';
    return { toolCall: { id: `call_${randomBytes(8).toString('hex')}`, name: 'Read',
      arguments: JSON.stringify({ [key]: `${project}/probe.txt` }) } };
  }
  return { content: 'fixture reply' };
}

function writeEvent(response, delta, finishReason = null) {
  response.write(`data: ${JSON.stringify({ id: 'fixture-agent', object: 'chat.completion.chunk', model: fixtureModel,
    choices: [{ index: 0, delta, finish_reason: finishReason }] })}\n\n`);
}

export async function createAgentFixtureProvider({ project }) {
  const key = `fixture-${randomBytes(12).toString('hex')}`;
  const requests = [];
  let armed;
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    if (request.url !== '/chat/completions' || request.method !== 'POST') { response.writeHead(404); return response.end(); }
    const payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const record = { authorized: request.headers.authorization === `Bearer ${key}`, model: payload.model };
    requests.push(record);
    if (!record.authorized) {
      record.status = 401;
      response.writeHead(401, { 'content-type': 'application/json', 'x-request-id': `fixture-401-${requests.length}` });
      return response.end(JSON.stringify({ error: { message: 'Incorrect API key provided.', type: 'invalid_request_error', code: 'invalid_api_key' } }));
    }
    if (armed) {
      record.status = armed; armed = undefined;
      response.writeHead(record.status, { 'content-type': 'application/json', 'x-request-id': `fixture-${record.status}-${requests.length}` });
      return response.end(JSON.stringify({ error: { message: 'The fixture service is temporarily unavailable.', type: 'server_error', code: null } }));
    }
    const reply = fixtureReply(payload, { project });
    record.status = 200; record.reply = reply.toolCall ? { toolCall: reply.toolCall.name } : { content: reply.content };
    response.writeHead(200, { 'content-type': 'text/event-stream', 'x-request-id': `fixture-200-${requests.length}` });
    if (reply.toolCall) {
      writeEvent(response, { role: 'assistant', content: null, tool_calls: [{ index: 0, id: reply.toolCall.id, type: 'function',
        function: { name: reply.toolCall.name, arguments: '' } }] });
      writeEvent(response, { tool_calls: [{ index: 0, function: { arguments: reply.toolCall.arguments } }] });
      writeEvent(response, {}, 'tool_calls');
    } else {
      writeEvent(response, { role: 'assistant', content: reply.content });
      writeEvent(response, {}, 'stop');
    }
    response.end('data: [DONE]\n\n');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return {
    key, requests, model: fixtureModel,
    url: `http://127.0.0.1:${server.address().port}`,
    // Fail the next inference with a provider status (for example 503) once.
    failNextRequest(status) {
      if (!Number.isInteger(status) || status < 400 || status > 599) throw new Error('Fixture failure status must be 4xx or 5xx');
      armed = status;
    },
    async close() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); },
  };
}
