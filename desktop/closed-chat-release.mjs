import { parseExpressionAt } from '../tooling/dependencies.mjs';

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
//
// Two owners kept a long chat's view (DOM, listeners, conversation proxies)
// after it closed (heap snapshots of the 110-turn chat, 20 October 2026):
// - MCPService creates three Solid roots in its constructor and disposes them
//   with the service. Solid's createRoot copies the current owner's context,
//   and the service is created lazily while a chat view renders, so its roots
//   (and an effect still observing the settings signal) kept that chat view's
//   context for the life of the window. These roots belong to the service, so
//   they are created detached (`detachedOwner = null`: no owner, no context).
// - React DOM keeps the last root that had nested synchronous updates
//   (`rootWithNestedUpdates`) until another root has some; its container was
//   the closed transcript. The reference is now cleared whenever React resets
//   the nested-update count, so the infinite-update guard still counts
//   consecutive nested commits of one root.

export const marker = '/* OpenVision release closed chat history v1 */';
export const releaseDelayMs = 60000;

const previewCache = /"stripMarkdownToPlainText\.js"\(\) \{\n\s+"use strict";\n\s+\([^\n]*\(([\w$]+) = 256\), \(([\w$]+) = new Map\(\)\)\);/g;
const closeOwner = /\n(\s+)async closeComposer\(([\w$]+), ([\w$]+)\) \{\n(\s+)if \(!this\.composerDataService\.selectedComposerIds\.includes\(\2\)\) \{\n\s+console\.error\("\[composer\] Cannot close composer that is not selected", \2\);\n\s+return;\n\s+\}\n/g;
const rowModelOwner = /for \(const ([\w$]+) of this\.mountedBubbleSubscriptions\.values\(\)\) \1\.dispose\(\);\n(\s+)\(this\.mountedBubbleSubscriptions\.clear\(\), this\.trackedRows\.clear\(\)\);/g;
const extendOwner = /\n(\s+)extend\(([\w$]+) = \{\}\) \{\n\s+const ([\w$]+) = new this\.constructor\(\{ \.\.\.this\.config, \.\.\.\2 \}\);\n\s+return \(\n\s+\(\3\.parent = this\),\n(\s+)\(this\.child = \3\),\n/g;
const unloadOwner = /\n\s+unloadComposer\(([\w$]+)\) \{\n\s+return this\.composerDataHandleManager\.unloadComposer\(\1\);\n\s+\}/g;

const serviceRoot = /const \{ dispose: ([\w$]+) \} = ([\w$]+)\(\n/g;
const nestedRoot = /\? ([\w$]+) === ([\w$]+)\n(\s+)\? ([\w$]+)\+\+\n\s+: \(\(\4 = 0\), \(\2 = \1\)\)\n(\s+): \(\4 = 0\),/g;

export const serviceRootMarker = '/* OpenVision: service roots do not inherit a component context */';
export const nestedRootMarker = '/* OpenVision: release rootWithNestedUpdates */';
export const nestedRootUnavailableMarker = '/* OpenVision: React nested-update owner unavailable */';
export const rowsMarker = '/* OpenVision release disposed transcript rows */';
export const extensionMarker = '/* OpenVision: no child back reference on shared extensions */';

// Three independent, idempotent steps (each guarded by its own marker), so a
// workbench customized by an earlier build receives only the missing ones.
export function releaseClosedChats(text) {
  return detachServiceRoots(releaseDisposedExtensionCopies(releaseDisposedTranscriptRows(releaseClosedComposers(text))));
}

// Solid's createRoot: `function NAME(fn, detachedOwner)` falling back to the current owner.
function createRootName(text) {
  const found = [...text.matchAll(/function ([\w$]+)\(([\w$]+), ([\w$]+)\) \{\n  const [\w$]+ = [\w$]+,\n    ([\w$]+) = [\w$]+,\n    [\w$]+ = \2\.length === 0,\n    [\w$]+ = \3 === void 0 \? \4 : \3,\n    [\w$]+ = [\w$]+ \? [\w$]+ : \{ owned: null, cleanups: null, context: [\w$]+ \? [\w$]+\.context : null, owner: [\w$]+ \},/g)];
  if (found.length !== 1) throw new Error('Solid createRoot owner changed');
  return found[0][1];
}

function detachServiceRoots(text) {
  if (text.includes(serviceRootMarker)) return text;
  const name = createRootName(text);
  // Roots whose disposer the owning service registers on itself (MCPService).
  const roots = [...text.matchAll(serviceRoot)].filter(match => match[2] === name);
  const owned = roots.filter(match => {
    const call = parseExpressionAt(text, match.index + match[0].length - name.length - 2, { ecmaVersion: 'latest' });
    match.call = call;
    return call.type === 'CallExpression' && call.arguments.length === 1 &&
      /^\s*\(?this\._register\(\{ dispose: /.test(text.slice(call.end + 1).replace(/^;/, '')) &&
      text.slice(call.end + 1).replace(/^;/, '').trimStart().replace(/^\(/, '').startsWith(`this._register({ dispose: ${match[1]} })`);
  });
  if (roots.length !== 3 || owned.length !== 3 || !text.slice(roots[0].index, roots[2].index).includes('[MCPService]'))
    throw new Error('Service root owner changed');
  for (const match of owned.reverse()) {
    const end = match.call.arguments[0].end;
    text = text.slice(0, end) + `, null ${serviceRootMarker}` + text.slice(end);
  }
  return text;
}

// React DOM production client: clear rootWithNestedUpdates with its counter.
export function releaseNestedUpdateRoot(text) {
  if (text.includes(nestedRootMarker) || text.includes(nestedRootUnavailableMarker)) return text;
  const found = [...text.matchAll(nestedRoot)];
  if (found.length === 0) return `${text}\n${nestedRootUnavailableMarker}\n`;
  if (found.length !== 1) throw new Error('React nested-update owner changed');
  const [match, , rootName, , count, indent] = found[0];
  // The same pair is reset together by the infinite-update guard.
  if (!text.includes(`throw ((${count} = 0), (${rootName} = null), Error(`)) throw new Error('React nested-update contract changed');
  const replacement = match.slice(0, match.lastIndexOf(`${indent}: (${count} = 0),`)) +
    `${indent}: ((${count} = 0), (${rootName} = null)) ${nestedRootMarker},`;
  return text.slice(0, found[0].index) + replacement + text.slice(found[0].index + match.length);
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
