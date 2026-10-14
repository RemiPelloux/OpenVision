import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { probeChatPayload } from './live-chat-probe.mjs';

const outputTokenLimit = 512;

export function payloadComparisons(payload, model, comparison = 'structure') {
  assert.equal(payload.model, model, 'Captured payload must match the selected saved model');
  assert.equal(payload.stream, true, 'Captured payload must use streaming');
  assert.ok(Array.isArray(payload.messages) && payload.messages.length, 'Captured messages required');
  assert.ok(Array.isArray(payload.tools) && payload.tools.length, 'Captured tools required');
  assert.ok(['structure', 'output-limit'].includes(comparison), 'Unknown payload comparison');
  if (comparison === 'output-limit') {
    const { max_tokens, max_completion_tokens, ...unlimited } = payload;
    return [
      { name: 'native-without-output-limit', payload: unlimited },
      ...[512, 8192, 32768].map(limit => ({ name: `native-output-limit-${limit}`, payload: { ...unlimited, max_tokens: limit } })),
      { name: 'native-without-output-limit-recheck', payload: unlimited },
    ];
  }
  const messages = [{ role: 'user', content: 'Reply exactly OPENVISION_PAYLOAD_OK. Do not call any tools.' }];
  const native = { ...payload, max_tokens: outputTokenLimit };
  const { tools, tool_choice, ...withoutTools } = native;
  return [
    { name: 'minimal-control', payload: { model, stream: true, max_tokens: outputTokenLimit, messages } },
    { name: 'native-with-output-limit', payload: native },
    { name: 'native-tools-simple-messages', payload: { ...native, messages } },
    { name: 'native-messages-without-tools', payload: withoutTools },
    { name: 'native-options-simple-messages-without-tools', payload: { ...withoutTools, messages } },
  ];
}

export async function probeNativePayload(provider, payload, transport) {
  const stages = [];
  for (const variant of payloadComparisons(payload, provider.probeModel, provider.probeComparison)) {
    const body = JSON.stringify(variant.payload);
    const { result, calls } = await probeChatPayload(provider, variant.payload, transport);
    // Diagnostic responses may quote captured context. Persist only shape/status,
    // never output text, tool arguments or private reasoning.
    const { text, ...metadata } = result;
    stages.push({ variant: variant.name, requestSha256: createHash('sha256').update(body).digest('hex'),
      requestBytes: Buffer.byteLength(body), keys: Object.keys(variant.payload),
      toolCount: variant.payload.tools?.length ?? 0, ...metadata, returnedToolCount: calls.length });
    transport.progress?.(stages.at(-1));
  }
  return { ok: stages.every(stage => stage.ok), stages,
    scope: 'Real API payload comparisons. Request shape records each output limit; every response has a byte/time bound. No tool execution or native continuation; not feature acceptance.' };
}
