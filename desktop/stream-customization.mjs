import { parseExpressionAt } from '../tooling/dependencies.mjs';

const moduleAnchor = '"textDeltaCoalescer.js"() {';
const marker = '/* OpenVision release cancelled stream barriers v1 */';

export function customizeStream(text) {
  if (text.includes(marker)) return { text, patches: [] };
  const moduleStart = text.indexOf(moduleAnchor);
  if (moduleStart < 0 || text.indexOf(moduleAnchor, moduleStart + moduleAnchor.length) >= 0)
    throw new Error('Stream coalescer module missing or ambiguous');
  const start = text.indexOf('class ', moduleStart);
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (owner.type !== 'ClassExpression') throw new Error('Stream coalescer class owner changed');
  const method = owner.body.body.find(item => item.key?.name === 'dropPending');
  const dispose = owner.body.body.find(item => item.key?.name === 'disposeWithoutFlush');
  if (!method?.value?.body || !dispose || !owner.body.body.some(item => item.key?.name === 'resolveDrainWaiters'))
    throw new Error('Stream coalescer cancellation contract changed');
  const body = method.value.body;
  if (text.slice(body.start, body.end).replace(/\s/g, '') !== '{(this.cancelScheduledFrame(),(this.pending=void0));}')
    throw new Error('Stream coalescer discard implementation changed');
  const patch = { start: body.start, end: body.end, reason: 'release cancelled stream drain barriers' };
  const replacement = `{ ${marker}
    this.cancelScheduledFrame();
    this.pending = void 0;
    this.resolveDrainWaiters();
  }`;
  return { text: text.slice(0, body.start) + replacement + text.slice(body.end), patches: [patch] };
}
