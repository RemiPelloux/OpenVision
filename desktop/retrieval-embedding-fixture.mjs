import { createServer } from 'node:http';
import { createHash } from 'node:crypto';

// Loopback OpenAI-compatible /v1/embeddings fixture. Vectors are a
// deterministic hashed bag of words: a controlled model, not live inference.
export function fixtureVector(text, dimensions = 64) {
  const vector = new Array(dimensions).fill(0);
  for (const word of text.toLowerCase().match(/[a-z0-9]+/g) ?? []) {
    const bucket = createHash('sha256').update(word).digest().readUInt16BE(0) % dimensions;
    vector[bucket] += 1;
  }
  return vector;
}

export async function startEmbeddingFixture({ mode = 'ok', delayMs = 0, dimensions = 64 } = {}) {
  const requests = [];
  const state = { mode, delayMs };
  const server = createServer(async (request, response) => {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const body = chunks.length ? JSON.parse(Buffer.concat(chunks)) : undefined;
    requests.push({ url: request.url, authorization: request.headers.authorization, model: body?.model,
      inputs: body?.input?.length, chars: body?.input?.reduce((sum, text) => sum + text.length, 0), input: body?.input });
    if (request.url !== '/v1/embeddings' || request.method !== 'POST') { response.statusCode = 404; return response.end(); }
    if (state.delayMs) await new Promise(resolve => setTimeout(resolve, state.delayMs));
    if (response.destroyed) return;
    if (state.mode === 'error') { response.statusCode = 503; return response.end('{"error":"unavailable"}'); }
    response.setHeader('content-type', 'application/json');
    if (state.mode === 'malformed') return response.end('{"data":[{"embedding":"x"}]}');
    response.end(JSON.stringify({ object: 'list', model: body.model,
      data: body.input.map((text, index) => ({ object: 'embedding', index, embedding: fixtureVector(text, dimensions) })) }));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/v1`;
  return { url, requests, state, close: () => new Promise(resolve => { server.closeAllConnections?.(); server.close(resolve); }) };
}
