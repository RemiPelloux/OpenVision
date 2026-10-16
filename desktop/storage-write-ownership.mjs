import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision unacknowledged storage writes v1 */';

export function storageWriteOwner(text) {
  const matches = [...text.matchAll(/acceptExternal\(([\w$]+), ([\w$]+)\) \{/g)];
  if (matches.length !== 1) throw new Error('Provider storage notification owner changed');
  const start = text.lastIndexOf('class ', matches[0].index);
  let owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (owner.type === 'SequenceExpression') owner = owner.expressions[0];
  if (owner.type !== 'ClassExpression' || !owner.body.body.some(method =>
    method.key?.name === 'set' && text.slice(method.start, method.end).includes('this.pendingInserts.set(')))
    throw new Error('Provider storage pending-write owner changed');
  return owner;
}

function replaceOnce(text, before, after) {
  if (text.split(before).length !== 2) throw new Error('Storage write ownership contract changed: ' + before);
  return text.replace(before, after);
}

function preserveStorageCache(text) {
  const owner = storageWriteOwner(text), source = text.slice(owner.start, owner.end);
  if (source.includes(marker)) return text;
  const replacements = [];
  const constructor = owner.body.body.find(node => node.kind === 'constructor');
  const init = text.slice(constructor.start, constructor.end);
  replacements.push({ node: constructor, source: replaceOnce(init, 'this.pendingInserts = new Map()',
    '(this.pendingInserts = new Map(), this.openvisionUnacknowledgedKeys = new Set())') });
  const accept = owner.body.body.find(node => node.key?.name === 'acceptExternal');
  const key = accept.value.params[0].name;
  const acceptSource = text.slice(accept.start, accept.end);
  if (!acceptSource.includes('this.cache.set(') || !acceptSource.includes('external: !0'))
    throw new Error('Storage write notification contract changed');
  replacements.push({ node: accept, source: acceptSource.replace('{', `{\n    if (this.openvisionHasUnacknowledgedWrite(${key})) return;`) });
  const flush = owner.body.body.find(node => node.key?.name === 'flushPending');
  if (!flush || !text.slice(flush.start, flush.end).includes('this.database.updateItems('))
    throw new Error('Storage write flush owner changed');
  replacements.push({ node: flush, source: flushOwner });
  for (const { node, source: replacement } of replacements.sort((a, b) => b.node.start - a.node.start))
    text = text.slice(0, node.start) + replacement + text.slice(node.end);
  return text;
}

const flushOwner = `${marker}
  openvisionHasUnacknowledgedWrite(key) {
    return this.pendingInserts.has(key) || this.pendingDeletes.has(key) || this.openvisionUnacknowledgedKeys.has(key);
  }
  openvisionMarkAcknowledged(batch) {
    batch.insert?.forEach((_value, key) => this.openvisionUnacknowledgedKeys.delete(key));
    batch.delete?.forEach(key => this.openvisionUnacknowledgedKeys.delete(key));
  }
  async flushPending() {
    if (!this.hasPending) return;
    const batch = {insert: this.pendingInserts, delete: this.pendingDeletes};
    this.pendingInserts = new Map(); this.pendingDeletes = new Set();
    batch.insert.forEach((_value, key) => this.openvisionUnacknowledgedKeys.add(key));
    batch.delete.forEach(key => this.openvisionUnacknowledgedKeys.add(key));
    return this.database.updateItems(batch, chunk => this.openvisionMarkAcknowledged(chunk)).finally(() => {
      this.openvisionMarkAcknowledged(batch);
      if (!this.hasPending) while (this.whenFlushedCallbacks.length) this.whenFlushedCallbacks.pop()?.();
    });
  }`;

export function storageIpcWriteOwner(text) {
  const owners = [...text.matchAll(/async updateItems\(([\w$]+)(?:, openvisionAcknowledge)?\) \{/g)].map(match => {
    const prefix = 'async function ', tail = text.slice(match.index + 'async '.length);
    const parsed = parseExpressionAt(prefix + tail, 0, { ecmaVersion: 'latest' });
    return { start: match.index, end: match.index + parsed.end - 'function '.length };
  }).filter(node => text.slice(node.start, node.end).includes('this.channel.call("updateItems",'));
  if (owners.length !== 1) throw new Error('Storage IPC write owner changed');
  return owners[0];
}

function acknowledgeStorageChunks(text) {
  const ipcMarker = '/* OpenVision storage chunk acknowledgement v1 */';
  if (text.includes(ipcMarker)) return text;
  const owner = storageIpcWriteOwner(text), source = text.slice(owner.start, owner.end);
  const call = 'this.channel.call("updateItems", {';
  const calls = source.split(call).length - 1;
  if (calls !== 8) throw new Error('Storage IPC chunk routing changed');
  const patched = source.replace(/async updateItems\(([\w$]+)\) \{/, `async updateItems($1, openvisionAcknowledge) {
    ${ipcMarker}
    const openvisionUpdate = async payload => {
      await this.channel.call("updateItems", payload);
      openvisionAcknowledge?.({insert: payload.insert && new Map(payload.insert), delete: payload.delete && new Set(payload.delete)});
    };`).replaceAll(call, 'openvisionUpdate({');
  return text.slice(0, owner.start) + patched + text.slice(owner.end);
}

export function preserveUnacknowledgedWrites(text) {
  return acknowledgeStorageChunks(preserveStorageCache(text));
}
