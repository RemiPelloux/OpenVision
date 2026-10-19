import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// OV-1002: the recovered Agent loop (consumeStream in cursor-agent-exec) awaits
// two or three extension-host -> renderer round trips for every model text delta
// (sendUpdate(textDelta), sendUpdate(tokenDelta), recordText) before it reads the
// next one. Delivery therefore runs at the renderer main thread's pace: on a
// Linux x64 host without GPU acceleration a 500-delta fixture stream sent in
// 2.2 s reached the renderer at 25-50 deltas per second, and the last chunk was
// painted 4.6-12 s after it was sent (45 s for 2,000 deltas). The model stream is
// now read as it arrives, and text deltas that are already waiting when the loop
// asks for the next event are merged into one, so one round trip carries the
// backlog. Order, text, token counts and every other event are unchanged; with a
// renderer that keeps up, nothing is waiting and each delta is delivered alone.
const marker = '/* OpenVision coalesced Agent text delivery v1 */';
export const streamDeliveryOwner = { method: 'async consumeStream(e, t, r) {', loop: 'for await (const m of t)',
  relative: 'extensions/cursor-agent-exec/dist/main.js' };

export function coalesceTextDeltas(source) {
  return (async function* () {
    const iterator = source[Symbol.asyncIterator](), queue = [];
    let done = false, failure, wake;
    (async () => {
      try { for (let step = await iterator.next(); !step.done; step = await iterator.next()) { queue.push(step.value); wake?.(); } }
      catch (error) { failure = { error }; }
      finally { done = true; wake?.(); }
    })();
    try {
      for (;;) {
        if (!queue.length) {
          if (done) break;
          await new Promise(resolveWake => { wake = resolveWake; }); wake = undefined;
          continue;
        }
        let item = queue.shift();
        if (item?.type === 'text-delta' && typeof item.textDelta === 'string')
          while (queue[0]?.type === 'text-delta' && typeof queue[0].textDelta === 'string')
            item = { ...item, textDelta: item.textDelta + queue.shift().textDelta };
        yield item;
      }
      if (failure) throw failure.error;
    } finally {
      // The consumer stopped early (cancel, loop error): release the model stream.
      if (!done) Promise.resolve(iterator.return?.()).catch(() => {});
    }
  })();
}
// The bundle receives exactly this function (renamed), so tests run what ships.
const helper = coalesceTextDeltas.toString().replace('function coalesceTextDeltas(', 'function openvisionCoalesceTextDeltas(');

export function coalescedStreamDelivery(text) {
  if (text.includes(marker)) return text;
  const start = text.indexOf(streamDeliveryOwner.method);
  if (start < 0 || text.indexOf(streamDeliveryOwner.method, start + 1) >= 0) throw Error('Agent stream consumer missing or ambiguous');
  // The method is a class member: parse the rest of its class from it.
  const node = parseExpressionAt(`class{${text.slice(start)}`, 0, { ecmaVersion: 'latest' }).body.body[0];
  const body = text.slice(start, start + node.end - 'class{'.length);
  const loop = body.indexOf(streamDeliveryOwner.loop);
  if (loop < 0 || body.indexOf(streamDeliveryOwner.loop, loop + 1) >= 0) throw Error('Agent stream loop changed');
  // Contract: text deltas are delivered with awaited round trips, one per event.
  if (!/"text-delta" === m\.type/.test(body) || !body.includes('await this.interactionProvider.sendUpdate(e, j.textDelta(m.textDelta, t))') ||
    !body.includes('await this.emitTokenDeltaFromChars(e, m.textDelta)') || !body.includes('await r.recordText(e, m.textDelta, t)'))
    throw Error('Agent text delta delivery contract changed');
  const position = start + loop;
  return `${helper};\n` + text.slice(0, position) +
    `${marker} for await (const m of openvisionCoalesceTextDeltas(t))` + text.slice(position + streamDeliveryOwner.loop.length);
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
