// OV-1001/OV-1003: a closed chat must not keep its history in renderer memory.
//
// The recovered composer handle manager keeps a loaded chat for 60 s after its
// last use (a three-entry LRU) and then finalizes it only once its handle has
// been garbage-collected. Native Linux heap snapshots showed the handles of
// every chat opened in a session staying strongly reachable (UI state stores
// and an editor extension's configuration keep them), so finalization never
// ran: the closed chat's messages stayed in the loaded-composer store and the
// loaded-conversation cache, and streamed reply prefixes stayed in the
// 256-entry plain-text preview cache (stripMarkdownToPlainText).
//
// After `closeComposer`, this customization schedules a release of the closed
// chat after the same 60 s idle window. If the chat is still closed, idle and
// no open chat is one of its sub-chats, it is unloaded through the recovered
// `unloadComposer` path (persist pending messages, drop the store entry and
// the per-chat caches) and the preview cache is cleared (a pure derived-text
// memo; open chats recompute their previews). Reopening loads the chat from
// SQLite as for any chat that is not loaded. A chat that is reopened before
// the window ends is left alone; a running chat is checked again later.
//
// The transcript row model of a chat view also stays reachable after the view
// is disposed, and its disposal kept the rendered-row content caches
// (`contentCacheByRowId`, `lastMarkdownRowById`) filled with reply markdown.
// Disposal now clears both; a disposed model recomputes a row if asked.
//
// The bundled tiptap core's `extend()` stored every configured copy on its
// base extension (`this.child = copy`). Nothing reads `child`, but the base
// extensions are module-level, so each kept its last copy, whose options
// close over the last chat input (its handle, headers and editor document).
// The write-only back reference is no longer stored; `parent` is unchanged.

export const marker = '/* OpenVision release closed chat history v1 */';
export const releaseDelayMs = 60000;

const previewCache = /"stripMarkdownToPlainText\.js"\(\) \{\n\s+"use strict";\n\s+\([^\n]*\(([\w$]+) = 256\), \(([\w$]+) = new Map\(\)\)\);/g;
const closeOwner = /\n(\s+)async closeComposer\(([\w$]+), ([\w$]+)\) \{\n(\s+)if \(!this\.composerDataService\.selectedComposerIds\.includes\(\2\)\) \{\n\s+console\.error\("\[composer\] Cannot close composer that is not selected", \2\);\n\s+return;\n\s+\}\n/g;
const rowModelOwner = /for \(const ([\w$]+) of this\.mountedBubbleSubscriptions\.values\(\)\) \1\.dispose\(\);\n(\s+)\(this\.mountedBubbleSubscriptions\.clear\(\), this\.trackedRows\.clear\(\)\);/g;
const extendOwner = /\n(\s+)extend\(([\w$]+) = \{\}\) \{\n\s+const ([\w$]+) = new this\.constructor\(\{ \.\.\.this\.config, \.\.\.\2 \}\);\n\s+return \(\n\s+\(\3\.parent = this\),\n(\s+)\(this\.child = \3\),\n/g;
const unloadOwner = /\n\s+unloadComposer\(([\w$]+)\) \{\n\s+return this\.composerDataHandleManager\.unloadComposer\(\1\);\n\s+\}/g;

export const rowsMarker = '/* OpenVision release disposed transcript rows */';
export const extensionMarker = '/* OpenVision: no child back reference on shared extensions */';

// Three independent, idempotent steps (each guarded by its own marker), so a
// workbench customized by an earlier build receives only the missing ones.
export function releaseClosedChats(text) {
  return releaseDisposedExtensionCopies(releaseDisposedTranscriptRows(releaseClosedComposers(text)));
}

function releaseClosedComposers(text) {
  if (text.includes(marker)) return text;
  const caches = [...text.matchAll(previewCache)], closes = [...text.matchAll(closeOwner)];
  if (caches.length !== 1) throw new Error('Plain-text preview cache owner changed');
  if (closes.length !== 1) throw new Error('Composer close owner changed');
  if ([...text.matchAll(unloadOwner)].length !== 1) throw new Error('Composer unload owner changed');
  const [, limit, cache] = caches[0];
  // The cache must be the bounded preview memo read and evicted by one function.
  if (!text.includes(`if (${cache}.size >= ${limit}) {`)) throw new Error('Plain-text preview cache contract changed');
  const [match, indent, id, , bodyIndent] = closes[0];
  const method = `
${indent}openvisionReleaseClosedComposerLater(id, delay = ${releaseDelayMs}) {
${indent}  ${marker}
${indent}  const timers = (this.openvisionClosedReleaseTimers ??= new Map());
${indent}  clearTimeout(timers.get(id));
${indent}  timers.set(id, setTimeout(() => {
${indent}    timers.delete(id);
${indent}    const data = this.composerDataService, handle = data.getHandleIfLoaded(id);
${indent}    if (!handle || data.selectedComposerIds.includes(id)) return;
${indent}    if (data.isComposerRunning(handle)) return this.openvisionReleaseClosedComposerLater(id, delay);
${indent}    const composer = data.getComposerDataIfLoaded(id);
${indent}    const children = [...(composer?.subComposerIds ?? []), ...(composer?.subagentComposerIds ?? [])];
${indent}    if (children.some(child => data.selectedComposerIds.includes(child))) return;
${indent}    Promise.resolve(data.unloadComposer(id)).then(() => ${cache}.clear(),
${indent}      error => console.error("[composer] Releasing a closed chat failed", error));
${indent}  }, delay));
${indent}}`;
  const replacement = `${method}${match}${bodyIndent}this.openvisionReleaseClosedComposerLater(${id});\n`;
  return text.slice(0, closes[0].index) + replacement + text.slice(closes[0].index + match.length);
}

function releaseDisposedTranscriptRows(text) {
  if (text.includes(rowsMarker)) return text;
  const rows = [...text.matchAll(rowModelOwner)];
  if (rows.length !== 1 || ['(this.lastMarkdownRowById = new Map()),', '(this.contentCacheByRowId = new Map()),']
    .some(field => text.split(field).length !== 2)) throw new Error('Transcript row model owner changed');
  const [rowMatch] = rows;
  const rowReplacement = rowMatch[0].replace('this.trackedRows.clear());',
    `this.trackedRows.clear(),\n${rowMatch[2]}  this.contentCacheByRowId.clear(), ${rowsMarker}\n${rowMatch[2]}  this.lastMarkdownRowById.clear());`);
  return text.slice(0, rowMatch.index) + rowReplacement + text.slice(rowMatch.index + rowMatch[0].length);
}

function releaseDisposedExtensionCopies(text) {
  if (text.includes(extensionMarker)) return text;
  const extendsFound = [...text.matchAll(extendOwner)];
  if (extendsFound.length !== 1) throw new Error('Editor extension owner changed');
  const [extendMatch] = extendsFound;
  const baseStart = text.lastIndexOf('(this.type = "extendable"),', extendMatch.index);
  // Within the extension base class, `child` is only initialized and assigned.
  if (baseStart < 0 || text.slice(baseStart, extendMatch.index + extendMatch[0].length).split('child').length !== 3)
    throw new Error('Editor extension child contract changed');
  const extendReplacement = extendMatch[0].replace(`${extendMatch[4]}(this.child = ${extendMatch[3]}),\n`,
    `${extendMatch[4]}${extensionMarker}\n`);
  return text.slice(0, extendMatch.index) + extendReplacement + text.slice(extendMatch.index + extendMatch[0].length);
}
