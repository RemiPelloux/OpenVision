import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// OV-1002: the recovered Agent loop (consumeStream in cursor-agent-exec) awaits
// two or three extension-host -> renderer round trips for every model text delta
// (sendUpdate(textDelta), sendUpdate(tokenDelta), recordText) before it reads the
// next one. Delivery therefore runs at the renderer main thread's pace: on a
// Linux x64 host without GPU acceleration a 500-delta fixture stream sent in
// 2.2 s reached the renderer at 25-50 deltas per second, and the last chunk was
// painted 4.6-12 s after it was sent (45 s for 2,000 deltas). While a text delta
// is being delivered, the text deltas that arrive meanwhile are now read and
// merged, so one round trip carries the backlog.
//
// Everything else keeps the recovered pull discipline (v2). v1 read the model
// stream eagerly from the start and delivered what it had buffered even after the
// step had been cancelled. With the profile disk full, a step that failed on
// storage still pulled its model response and showed it, and the turn retry then
// streamed the same reply again (verify:profile-io-faults). Now the stream is read
// ahead only after a text delta is handed to the loop, only text deltas are read
// ahead, read-ahead stops when the loop leaves or the step is cancelled, and once
// cancelled anything buffered is dropped and the next event comes from the stream
// itself, exactly as the recovered loop would see it. With a renderer that keeps
// up, nothing is waiting and each delta is delivered alone.
const marker = '/* OpenVision coalesced Agent text delivery v2 */';
const previousMarker = '/* OpenVision coalesced Agent text delivery v1 */';
export const streamDeliveryOwner = { method: 'async consumeStream(e, t, r) {', loop: 'for await (const m of t)',
  relative: 'extensions/cursor-agent-exec/dist/main.js' };

export function coalesceTextDeltas(source, cancelled = () => false) {
  return (async function* () {
    const iterator = source[Symbol.asyncIterator](), queue = [];
    const isText = item => item?.type === 'text-delta' && typeof item.textDelta === 'string';
    let done = false, failure, reading, left = false;
    // One source read at a time; the loop and the read-ahead share it.
    const read = () => reading ??= iterator.next().then(step => { if (step.done) done = true; else queue.push(step.value); },
      error => { failure = { error }; done = true; }).finally(() => { reading = undefined; });
    const readAhead = async () => {
      while (!left && !done && !cancelled() && (!queue.length || isText(queue.at(-1)))) await read();
    };
    try {
      for (;;) {
        if (cancelled() && queue.length) queue.length = 0; // the recovered loop would not see buffered events
        if (!queue.length && !done) await read();
        if (!queue.length) break;
        let item = queue.shift();
        if (isText(item)) {
          while (isText(queue[0])) item = { ...item, textDelta: item.textDelta + queue.shift().textDelta };
          readAhead();
        }
        yield item;
      }
      if (failure) throw failure.error;
    } finally {
      left = true;
      // The loop stopped early (cancel, loop error): release the model stream.
      if (!done) Promise.resolve().then(() => iterator.return?.()).catch(() => {});
    }
  })();
}
// The bundle receives exactly this function (renamed), so tests run what ships.
const helper = coalesceTextDeltas.toString().replace('function coalesceTextDeltas(', 'function openvisionCoalesceTextDeltas(');

// Restores the recovered loop from a v1 build (helper at the top of the bundle).
function withoutPrevious(text) {
  if (!text.includes(previousMarker)) return text;
  const helperEnd = parseExpressionAt(text, 0, { ecmaVersion: 'latest' }).end;
  if (!text.startsWith('function openvisionCoalesceTextDeltas(') || text.slice(helperEnd, helperEnd + 2) !== ';\n')
    throw Error('Previous Agent text delivery helper changed');
  return text.slice(helperEnd + 2).replace(`${previousMarker} for await (const m of openvisionCoalesceTextDeltas(t))`, streamDeliveryOwner.loop);
}

export function coalescedStreamDelivery(text) {
  if (text.includes(marker)) return text;
  text = withoutPrevious(text);
  const start = text.indexOf(streamDeliveryOwner.method);
  if (start < 0 || text.indexOf(streamDeliveryOwner.method, start + 1) >= 0) throw Error('Agent stream consumer missing or ambiguous');
  // The method is a class member: parse the rest of its class from it.
  const node = parseExpressionAt(`class{${text.slice(start)}`, 0, { ecmaVersion: 'latest' }).body.body[0];
  const body = text.slice(start, start + node.end - 'class{'.length);
  const loop = body.indexOf(streamDeliveryOwner.loop);
  if (loop < 0 || body.indexOf(streamDeliveryOwner.loop, loop + 1) >= 0) throw Error('Agent stream loop changed');
  // Contract: text deltas are delivered with awaited round trips, one per event.
  if (!/"text-delta" === m\.type/.test(body) || !body.includes('await this.interactionProvider.sendUpdate(e, j.textDelta(m.textDelta, t))') ||
    !body.includes('await this.emitTokenDeltaFromChars(e, m.textDelta)') || !body.includes('e.canceled') || !body.includes('await r.recordText(e, m.textDelta, t)'))
    throw Error('Agent text delta delivery contract changed');
  const position = start + loop;
  return `${helper};\n` + text.slice(0, position) +
    `${marker} for await (const m of openvisionCoalesceTextDeltas(t, () => e.canceled === true || e.signal?.aborted === true))` + text.slice(position + streamDeliveryOwner.loop.length);
}

export async function installStreamDelivery(root) {
  const path = join(root, 'source/app', streamDeliveryOwner.relative);
  const before = await readFile(path, 'utf8'), after = coalescedStreamDelivery(before);
  if (before === after) return;
  const backup = join(root, 'backups/agent-stream-delivery', streamDeliveryOwner.relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
