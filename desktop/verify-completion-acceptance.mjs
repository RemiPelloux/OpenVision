import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { checkCompletionBudgets, loadCompletionBudgets } from './completion-budgets.mjs';
import { until, typePrefix, savedText, savedRaw, pressTab } from './verify-completion-editing.mjs';

// Acceptance-safety cases for OV-603. Every response comes from a controlled
// local HTTP fixture; this is not live inference.
const settleMs = 2500;
const empty = JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: '' } }] });
const reply = content => JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content } }] });

export function createCompletionAcceptanceFixture() {
  const log = [];
  let rule;
  return {
    log,
    begin(mode, options) { rule = { mode, ...options }; },
    end() { rule = undefined; },
    respond(context, response, bytes) {
      if (!rule) return false;
      const entry = { mode: rule.mode, prefixLength: context.prefix.length, suffixLength: context.suffix.length,
        prefixTail: context.prefix.slice(-40), requestBytes: bytes, receivedAt: performance.now() };
      log.push(entry);
      response.on('close', () => { entry.closedAt = performance.now(); entry.aborted = !response.writableEnded; });
      const matched = rule.match(context);
      entry.matched = matched;
      const body = matched ? reply(rule.content) : rule.stale ? reply(rule.stale) : empty;
      const send = () => {
        if (response.destroyed) return;
        entry.responseBytes = Buffer.byteLength(body); entry.respondedAt = performance.now(); response.end(body);
      };
      if (rule.delayMs) setTimeout(send, rule.delayMs); else send();
      return true;
    },
  };
}

const ghost = (page, text) => page.locator('.cursor-ghost-text').filter({ hasText: text }).first();
const squash = text => text.replace(/\s/g, '');

async function requestFor(page, fixture, mode, timeout = 25000) {
  return until(page, () => fixture.log.find(item => item.mode === mode && item.matched), `No ${mode} request`, timeout);
}

async function command(page, name) {
  await page.keyboard.press('ControlOrMeta+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}

async function openFile(page, name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(name);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
  await page.locator('.tabs-container .tab.active').filter({ hasText: name }).waitFor();
  await page.locator('.monaco-editor .inputarea').first().focus();
}

async function undoTo(page, file, expected, trace, limit = 4) {
  const states = [];
  trace?.push({ undoFrom: await savedText(page, file), expected, states });
  let current;
  do {
    await page.keyboard.press('ControlOrMeta+z');
    current = await savedText(page, file); states.push(current);
  } while (![expected].flat().includes(current) && states.length < limit);
  return { steps: states.length, exact: [expected].flat().includes(current), states };
}

// Full Tab acceptance: exact insertion, a single undo step back to the typed
// text (including the trigger space) and an exact redo.
async function fullAccept({ page, file, fixture, trace }) {
  const prefix = 'const total = ', insertion = 'left + right;';
  fixture.begin('full', { match: context => context.prefix === prefix, content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'full');
  await ghost(page, 'left').waitFor();
  await pressTab(page);
  assert.equal(await savedText(page, file), prefix + insertion, 'Tab must insert exactly the suggestion');
  const undo = await undoTo(page, file, prefix, trace);
  assert.ok(undo.exact, 'Undo must restore the exact typed text');
  assert.equal(undo.steps, 1, 'Full acceptance must undo as one step');
  await page.keyboard.press('ControlOrMeta+Shift+z');
  assert.equal(await savedText(page, file), prefix + insertion, 'Redo must restore the exact accepted text');
  return { exactInsertion: true, undoSteps: undo.steps, redoExact: true };
}

// Visible suggestion, then an edit earlier on the same line. The adapter emits
// whole-line replacements, so a stale line snapshot would drop the edit.
async function staleSameLine({ page, file, fixture }) {
  const prefix = 'const shifted = ', insertion = 'value();';
  fixture.begin('stale-line', { match: context => context.prefix === prefix, content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'stale-line');
  await ghost(page, 'value').waitFor();
  await page.keyboard.press('Home');
  await page.keyboard.insertText('x');
  await page.keyboard.press('End');
  await page.waitForTimeout(settleMs);
  await pressTab(page);
  const saved = await savedText(page, file);
  const accepted = saved === 'x' + prefix + insertion, discarded = squash(saved) === squash('x' + prefix);
  assert.ok(accepted || discarded, `Stale same-line acceptance corrupted the line: ${JSON.stringify(saved)}`);
  return { outcome: accepted ? 'accepted-at-current-text' : 'stale-suggestion-discarded', saved };
}

// Visible suggestion, then a line inserted above it. A stale one-indexed
// replacement range would overwrite the wrong line.
async function staleLineShift({ page, file, fixture }) {
  const prefix = '// header\nconst moved = ', insertion = 'shift();';
  fixture.begin('stale-shift', { match: context => context.prefix.endsWith('const moved = '), content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'stale-shift');
  await ghost(page, 'shift').waitFor();
  const before = fixture.log.filter(item => item.mode === 'stale-shift').length;
  await page.keyboard.press('ControlOrMeta+Home');
  await page.keyboard.press('Enter');
  await page.keyboard.press('ControlOrMeta+End');
  await page.waitForTimeout(settleMs);
  await pressTab(page);
  const saved = await savedText(page, file);
  const accepted = saved === '\n' + prefix + insertion, discarded = squash(saved) === squash('\n' + prefix);
  assert.ok(saved.startsWith('\n// header\nconst moved ='), `Line shift corrupted earlier lines: ${JSON.stringify(saved)}`);
  assert.ok(accepted || discarded, `Line-shift acceptance corrupted the document: ${JSON.stringify(saved)}`);
  return { outcome: accepted ? 'accepted-at-shifted-line' : 'stale-suggestion-discarded', saved,
    requestsAfterShift: fixture.log.filter(item => item.mode === 'stale-shift').length - before };
}

// Visible suggestion; the saved file then changes on disk and the editor reloads.
async function externalChange({ page, file, fixture }) {
  const prefix = 'const disk = ', insertion = 'fromDisk();', external = '// external\nconst replaced = 1;\n';
  fixture.begin('external', { match: context => context.prefix === prefix, content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'external');
  await ghost(page, 'fromDisk').waitFor();
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(500);
  const visibleAfterSave = await ghost(page, 'fromDisk').isVisible();
  await writeFile(file, external);
  await page.locator('.monaco-editor .view-lines').first().filter({ hasText: 'external' }).waitFor({ timeout: 10000 });
  const visibleAfterReload = await ghost(page, 'fromDisk').isVisible();
  await pressTab(page);
  const saved = await savedText(page, file);
  assert.ok(!saved.includes('fromDisk'), 'Suggestion must not be applied to externally replaced content');
  assert.equal(squash(saved), squash(external), 'External content must be preserved');
  return { visibleAfterSave, visibleAfterReload, insertionApplied: false, externalPreserved: true };
}

// Visible suggestion in one file; Tab in another tab must never receive it.
async function wrongTab({ page, file, fixture }) {
  const prefix = 'const tabbed = ', insertion = 'tabValue;';
  const other = join(dirname(file), 'other.js'), otherText = '// Other document must remain unchanged.\n';
  fixture.begin('wrong-tab', { match: context => context.prefix === prefix, content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'wrong-tab');
  await ghost(page, 'tabValue').waitFor();
  await openFile(page, 'other.js');
  await page.keyboard.press('ControlOrMeta+End');
  await pressTab(page);
  const otherSaved = await savedText(page, other);
  assert.ok(!otherSaved.includes('tabValue'), 'Suggestion was applied to another file');
  assert.equal(squash(otherSaved), squash(otherText));
  await page.keyboard.press('ControlOrMeta+z');
  assert.equal(await savedText(page, other), otherText);
  await openFile(page, 'completion.js');
  const own = await savedText(page, file);
  assert.equal(own, prefix, 'Switching tabs must not apply the suggestion to its own file');
  return { otherFileUnchanged: true, sourceFileUnchanged: true };
}

// Multiple cursors: any completion must not be duplicated or applied to the
// wrong cursor's line.
async function multiCursor({ page, file, fixture }) {
  fixture.begin('multi', { match: () => true, content: 'multi();' });
  await typePrefix(page, 'const a =\nconst b =');
  await page.waitForTimeout(settleMs);
  const before = fixture.log.filter(item => item.mode === 'multi').length;
  await page.keyboard.press('ControlOrMeta+a');
  await command(page, 'Add Cursors to Line Ends');
  await page.keyboard.insertText(' ');
  await page.waitForTimeout(settleMs);
  const requests = fixture.log.filter(item => item.mode === 'multi').length - before;
  const visible = await page.locator('.cursor-ghost-text').filter({ hasText: 'multi' }).count();
  await pressTab(page);
  await page.keyboard.press('Escape');
  const saved = await savedText(page, file), lines = saved.split('\n');
  assert.equal(lines.length, 2, `Multi-cursor acceptance changed the line count: ${JSON.stringify(saved)}`);
  const applied = lines.filter(line => line.includes('multi()'));
  assert.ok(lines.every(line => (line.match(/multi\(\)/g) ?? []).length <= 1), 'Suggestion duplicated within a line');
  assert.ok(squash(lines[0]).startsWith('consta=') && squash(lines[1]).startsWith('constb='), 'Multi-cursor lines corrupted');
  for (const line of applied) assert.match(line, /^const [ab] = multi\(\);$/, 'Multi-cursor insertion misplaced');
  return { requestsAfterMultiCursorInput: requests, ghostVisible: visible > 0, linesWithInsertion: applied.length, saved };
}

// CRLF document with Unicode before the cursor and a multiline Unicode insertion.
const crlfOriginal = 'const label = "😀 café";\r\nconst next =\r\n// tail\r\n';
async function unicodeCrlf({ page, file, fixture }) {
  const crlf = join(dirname(file), 'crlf.js');
  // Created before launch (see prepareCompletionAcceptanceProject).
  assert.equal(await readFile(crlf, 'utf8'), crlfOriginal, 'CRLF fixture must be untouched before it is opened');
  fixture.begin('crlf', { match: context => /const next = $/.test(context.prefix), content: 'call("日本語",\n  "😀");' });
  await openFile(page, 'crlf.js');
  await page.keyboard.press('ControlOrMeta+Home');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('End');
  await page.keyboard.insertText(' ');
  const event = await requestFor(page, fixture, 'crlf');
  await ghost(page, 'call').waitFor();
  await pressTab(page);
  const raw = await savedRaw(page, crlf);
  assert.equal(raw, 'const label = "😀 café";\r\nconst next = call("日本語",\r\n  "😀");\r\n// tail\r\n', 'CRLF insertion must keep CRLF line endings');
  assert.ok(!/[^\r]\n/.test(raw), 'Mixed line endings after acceptance');
  await page.keyboard.press('ControlOrMeta+z');
  assert.equal(await savedRaw(page, crlf), 'const label = "😀 café";\r\nconst next = \r\n// tail\r\n', 'CRLF undo must be one exact step');
  await openFile(page, 'completion.js');
  return { exactCrlf: true, undoSteps: 1, prefixUsedCrlf: event.prefixTail.includes('\r\n') };
}

// A 20,000-character line: bounded request context, trigger latency and exact
// line reconstruction. The line is on disk before launch and only the trigger is
// typed. Typing it instead (one 20,030-character insertText) makes the editor's
// type command apply it one character at a time; each of those 20,030 edits runs
// the autocomplete model listener (a full model copy and a diff-history call to
// the extension host). That queued the trigger 14.7 s or more and, on the
// 19 October Linux host, grew the renderer past Chromium's 8 GiB data limit
// (WsP8Z2, 2iGuCB). No user types a line in one input event; pasting is one edit.
const longPrefix = 'const long = "' + 'x'.repeat(20000) + '"; const tail =';
async function longLine({ page, file, fixture }) {
  const long = join(dirname(file), 'long.js'), insertion = 'done;';
  fixture.begin('long', { match: context => context.prefix.endsWith('const tail = '), content: insertion });
  await openFile(page, 'long.js');
  await page.keyboard.press('ControlOrMeta+End');
  const typed = performance.now();
  await page.keyboard.insertText(' ');
  const event = await requestFor(page, fixture, 'long', 25000);
  // A whole-line replacement this long is shown as a diff: the old line on a red
  // background with the added text as an inline decoration, not as ghost text.
  const shown = page.locator('.cursor-ghost-text').filter({ hasText: 'done' }).or(page.locator('.cpp-suggestion-red-background')).first();
  await shown.waitFor();
  const presentation = await shown.evaluate(element => element.classList.contains('cursor-ghost-text') ? 'ghost-text' : 'line-diff');
  const visibleAt = performance.now();
  await page.keyboard.press('Tab');
  await page.waitForFunction(() => !document.querySelector('.cpp-suggestion-red-background') &&
    ![...document.querySelectorAll('.cursor-ghost-text')].some(element => element.textContent.includes('done')))
    .catch(() => { throw Error('Tab left the long-line suggestion on screen'); });
  const saved = await savedText(page, long);
  await page.keyboard.press('ControlOrMeta+z');
  const undone = await savedText(page, long);
  await openFile(page, 'completion.js');
  assert.equal(saved, longPrefix + ' ' + insertion, 'Long-line acceptance must reconstruct the line exactly');
  assert.equal(undone, longPrefix + ' ', 'Long-line acceptance must undo as one exact step');
  assert.ok(event.prefixLength <= 8000, 'Long-line request context must stay bounded');
  return { requested: true, typedToRequestMs: Math.round(event.receivedAt - typed), requestToVisibleMs: Math.round(visibleAt - event.receivedAt),
    presentation, prefixLength: event.prefixLength, requestBytes: event.requestBytes, outcome: 'accepted-exact', undoExact: true,
    lineLength: longPrefix.length + 1 };
}

// Fast typing with a slow fixture: count requests and bytes per burst, check
// that only the final text's completion can be accepted.
async function burst({ page, file, fixture }, interval) {
  const mode = `burst-${interval}`, prefix = `const burst${interval} = `, word = 'compute';
  const final = prefix + word;
  fixture.begin(mode, { match: context => context.prefix === final, content: 'Value();', stale: 'STALE();', delayMs: 250 });
  await page.keyboard.press('Escape');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(prefix.trimEnd());
  await page.keyboard.press('End');
  const started = performance.now();
  let lastKey;
  for (const character of ' ' + word) {
    await page.keyboard.insertText(character); lastKey = performance.now(); await page.waitForTimeout(interval);
  }
  await ghost(page, 'Value').waitFor({ timeout: 25000 });
  const visibleAt = performance.now();
  await page.waitForTimeout(500);
  const staleVisible = await page.locator('.cursor-ghost-text').filter({ hasText: 'STALE' }).count();
  await pressTab(page);
  const saved = await savedText(page, file);
  assert.equal(saved, final + 'Value();', 'Only the final completion may be accepted');
  const requests = fixture.log.filter(item => item.mode === mode && item.receivedAt >= started);
  const finalRequests = requests.filter(item => item.matched);
  assert.equal(finalRequests.length, 1, 'The final text must be requested exactly once');
  assert.equal(staleVisible, 0, 'A stale completion became visible');
  return { keystrokes: word.length + 1, intervalMs: interval, requests: requests.length,
    staleRequests: requests.length - finalRequests.length,
    abortedRequests: requests.filter(item => item.aborted).length,
    requestBytes: requests.reduce((sum, item) => sum + item.requestBytes, 0),
    responseBytes: requests.reduce((sum, item) => sum + (item.responseBytes ?? 0), 0),
    lastKeyToFinalRequestMs: Math.round(finalRequests[0].receivedAt - lastKey),
    finalRequestToVisibleMs: Math.round(visibleAt - finalRequests[0].receivedAt),
    lastKeyToVisibleMs: Math.round(visibleAt - lastKey), staleVisible };
}

// Controlled harness fixture, not product code: widens the asynchronous accept
// window. A DevTools conditional breakpoint on the first statement of the
// recovered accept owner wraps the word-diff provider registered with that
// instance's diffing service once (the service is a delayed-instantiation proxy
// that caches its bound methods). The condition always evaluates to false, so
// nothing pauses. The wrapper holds each word diff for
// globalThis.__openvisionAcceptDelayMs and records its timing.
async function installAcceptDelay(page, appRoot) {
  const workbench = await readFile(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js'), 'utf8');
  const anchor = workbench.indexOf('async makeChangesOnAcceptCppSuggestion(');
  if (anchor < 0) throw Error('Accept owner missing from the workbench');
  const owner = parseExpressionAt(workbench, workbench.lastIndexOf('class ', anchor), { ecmaVersion: 'latest' });
  const first = owner.body.body.find(item => item.key?.name === 'makeChangesOnAcceptCppSuggestion')?.value.body.body[0];
  if (!first) throw Error('Accept owner body missing');
  const before = workbench.slice(0, first.start), lineNumber = before.split('\n').length - 1;
  const columnNumber = first.start - before.lastIndexOf('\n') - 1;
  const condition = `(globalThis.__openvisionAcceptHits = (globalThis.__openvisionAcceptHits ?? 0) + 1, globalThis.__openvisionAcceptDelay ??= (() => {
    const provider = this._diffingService._diffingProvider, original = provider.wordDiff, calls = [];
    provider.wordDiff = async function (...args) {
      const entry = { delayMs: globalThis.__openvisionAcceptDelayMs ?? 0, startedAt: performance.now() };
      calls.push(entry);
      if (entry.delayMs) await new Promise(resolve => setTimeout(resolve, entry.delayMs));
      entry.releasedAt = performance.now();
      try { return await original.apply(this, args); } finally { entry.returnedAt = performance.now(); }
    };
    return { calls };
  })(), false)`;
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Debugger.enable');
  const { breakpointId, locations } = await cdp.send('Debugger.setBreakpointByUrl',
    { urlRegex: 'workbench\\.desktop\\.main\\.js$', lineNumber, columnNumber, condition });
  if (locations.length !== 1) throw Error(`Accept delay breakpoint resolved to ${locations.length} locations`);
  return {
    async release() {
      await cdp.send('Debugger.removeBreakpoint', { breakpointId }).catch(() => {});
      await cdp.send('Debugger.disable').catch(() => {});
      await page.evaluate(() => { globalThis.__openvisionAcceptDelayMs = 0; });
      await cdp.detach().catch(() => {});
    },
  };
}

const delayCalls = page => page.evaluate(() => structuredClone(globalThis.__openvisionAcceptDelay?.calls ?? []));

// One keystroke between the accept key and the delayed edit. `edit` types it;
// the case fails unless the keystroke lands inside the held word-diff window.
async function racedAccept(page, file, fixture, { mode, prefix, insertion, word, key, edit, delayMs }) {
  fixture.begin(mode, { match: context => context.prefix === prefix, content: insertion });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, mode);
  await ghost(page, insertion.slice(0, 5)).waitFor();
  const callsBefore = (await delayCalls(page)).length;
  await page.evaluate(ms => { globalThis.__openvisionAcceptDelayMs = ms; }, delayMs);
  await page.keyboard.press(key);
  await edit();
  const typedAt = await page.evaluate(() => performance.now());
  let call;
  for (const deadline = performance.now() + delayMs + 10000; !call?.returnedAt && performance.now() < deadline;) {
    call = (await delayCalls(page))[callsBefore];
    if (!call?.returnedAt) await page.waitForTimeout(25);
  }
  await page.evaluate(() => { globalThis.__openvisionAcceptDelayMs = 0; });
  if (!call?.returnedAt) throw Error(`${mode}: the accept never reached the held word diff ${JSON.stringify(await page.evaluate(() =>
    [globalThis.__openvisionAcceptHits, globalThis.__openvisionAcceptDelay]))} ${JSON.stringify(await savedText(page, file))}`);
  assert.ok(call.startedAt < typedAt && typedAt < call.releasedAt,
    `${mode}: the keystroke must land inside the held word-diff window`);
  // The continuation edits the model in the turn after the diff returns.
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 0)));
  return { word, keystrokeInsideWindow: true, windowMs: Math.round(call.releasedAt - call.startedAt),
    keystrokeAfterDiffStartMs: Math.round(typedAt - call.startedAt) };
}

// A keystroke inside or next to the suggestion range while Tab (or word accept)
// waits on its asynchronous word diff. The accept may apply to the current text
// or be dropped; it must never be applied at positions computed from the text
// captured before the keystroke.
async function acceptRace({ page, file, fixture, appRoot, trace }) {
  const hook = await installAcceptDelay(page, appRoot), delayMs = 1500, outcomes = {};
  try {
    const classify = (saved, accepted, dropped) => {
      const outcome = saved === accepted ? 'accepted-at-current-text' : saved === dropped ? 'accept-dropped' : 'corrupted';
      return { outcome, saved };
    };
    // Full accept, then a keystroke at the start of the line (inside the range).
    let prefix = 'const raced = ', insertion = 'raceValue();';
    let timing = await racedAccept(page, file, fixture, { mode: 'race-inside', prefix, insertion, key: 'Tab', delayMs,
      edit: async () => { await page.keyboard.press('Home'); await page.keyboard.insertText('y'); } });
    outcomes.fullInside = { ...timing, ...classify(await savedText(page, file), 'y' + prefix + insertion, 'y' + prefix) };
    let undo = await undoTo(page, file, [prefix, prefix.trimEnd()], trace);
    outcomes.fullInside.undo = undo;
    // Full accept, then a keystroke at the insertion point (next to the range).
    prefix = 'const nearby = '; insertion = 'nearValue();';
    timing = await racedAccept(page, file, fixture, { mode: 'race-near', prefix, insertion, key: 'Tab', delayMs,
      edit: () => page.keyboard.insertText('z') });
    outcomes.fullNear = { ...timing, ...classify(await savedText(page, file), prefix + insertion + 'z', prefix + 'z') };
    undo = await undoTo(page, file, [prefix, prefix.trimEnd()], trace);
    outcomes.fullNear.undo = undo;
    // Word (partial) accept, then a keystroke at the start of the line.
    prefix = 'const partly = '; insertion = 'alpha + beta;';
    timing = await racedAccept(page, file, fixture, { mode: 'race-word', prefix, insertion, word: true, key: 'ControlOrMeta+ArrowRight',
      delayMs, edit: async () => { await page.keyboard.press('Home'); await page.keyboard.insertText('q'); } });
    const saved = await savedText(page, file);
    outcomes.wordInside = { ...timing, ...classify(saved.trimEnd(), 'q' + prefix + 'alpha', 'q' + prefix.trimEnd()) };
    if (saved === 'q' + prefix) outcomes.wordInside.outcome = 'accept-dropped';
    undo = await undoTo(page, file, [prefix, prefix.trimEnd()], trace);
    outcomes.wordInside.undo = undo;
  } finally { await hook.release(); trace?.push({ acceptRace: outcomes }); }
  for (const [name, item] of Object.entries(outcomes)) {
    assert.notEqual(item.outcome, 'corrupted', `${name}: raced accept corrupted the document: ${JSON.stringify(item.saved)}`);
    // A dropped accept adds no undo boundary, so a keystroke typed right after the
    // trigger joins its typing element; undo then lands before the trigger space.
    assert.ok(item.undo.exact, `${name}: undo must restore the exact pre-accept text`);
    if (item.outcome === 'accept-dropped') assert.ok(item.undo.states.every(state => !/Value|alpha/.test(state)),
      `${name}: undo exposed part of a dropped suggestion`);
  }
  return outcomes;
}

const editorText = editor => editor.locator('.view-lines').innerText().then(text => text.replaceAll(' ', ' ').trimEnd());

// Saves and reads while two editor groups show the document. The shared helpers
// expect exactly one active tab, so this waits for every tab's dirty mark.
async function splitSaved(page, file) {
  await page.keyboard.press('ControlOrMeta+s');
  const deadline = performance.now() + 30000;
  while (await page.locator('.tabs-container .tab.dirty').count()) {
    if (performance.now() > deadline) throw Error('Split save did not complete');
    await page.waitForTimeout(25);
  }
  return (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
}

async function splitTab(page) {
  const shown = await page.locator('.cursor-ghost-text').filter({ visible: true }).first().elementHandle().catch(() => null);
  await page.keyboard.press('Tab');
  if (shown) await page.waitForFunction(element => !element.isConnected || !element.getClientRects().length, shown, { timeout: 15000 });
  const deadline = performance.now() + 15000;
  while (!await page.locator('.tabs-container .tab.dirty').count()) {
    if (performance.now() > deadline) throw Error('Tab had no effect in the split editor');
    await page.waitForTimeout(25);
  }
}

// Two editor groups show the same document. Accepting in one must update both
// views once, and undo must restore the exact text in both.
async function splitEditors({ page, file, fixture, trace }) {
  const prefix = 'const split = ', insertion = 'both();';
  fixture.begin('split', { match: context => context.prefix === prefix, content: insertion });
  await page.keyboard.press('Escape');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(prefix.trimEnd());
  await command(page, 'View: Split Editor Right');
  const editors = page.locator('.part.editor .monaco-editor');
  await page.waitForFunction(() => document.querySelectorAll('.part.editor .editor-group-container .monaco-editor').length === 2);
  const [left, right] = [editors.nth(0), editors.nth(1)];
  await right.locator('.inputarea').focus();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.insertText(' ');
  const event = await requestFor(page, fixture, 'split');
  await right.locator('.cursor-ghost-text').filter({ hasText: 'both' }).first().waitFor();
  const ghosts = { left: await left.locator('.cursor-ghost-text').count(), right: await right.locator('.cursor-ghost-text').count() };
  await splitTab(page);
  const accepted = await splitSaved(page, file);
  const views = { left: await editorText(left), right: await editorText(right) };
  assert.equal(accepted, prefix + insertion, 'Split accept must insert exactly once');
  assert.deepEqual(views, { left: prefix + insertion, right: prefix + insertion }, 'Both split views must show the single insertion');
  await page.keyboard.press('ControlOrMeta+z');
  const undone = await splitSaved(page, file);
  assert.equal(undone, prefix, 'Split accept must undo as one exact step');
  assert.deepEqual({ left: await editorText(left), right: await editorText(right) }, { left: prefix.trimEnd(), right: prefix.trimEnd() });
  // A suggestion shown in the right view, then Tab in the left view.
  const crossPrefix = 'const cross = ', crossInsertion = 'other();';
  fixture.begin('split-cross', { match: context => context.prefix === crossPrefix, content: crossInsertion });
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(crossPrefix.trimEnd());
  await page.keyboard.insertText(' ');
  await requestFor(page, fixture, 'split-cross');
  await right.locator('.cursor-ghost-text').filter({ hasText: 'other' }).first().waitFor();
  await left.locator('.inputarea').focus();
  await page.keyboard.press('ControlOrMeta+End');
  await splitTab(page);
  const cross = await splitSaved(page, file);
  const crossOutcome = cross === crossPrefix + crossInsertion ? 'accepted-once' :
    squash(cross) === squash(crossPrefix) ? 'not-accepted' : 'corrupted';
  assert.notEqual(crossOutcome, 'corrupted', `Cross-view Tab corrupted the document: ${JSON.stringify(cross)}`);
  assert.equal((cross.match(/other\(\)/g) ?? []).length <= 1, true, 'Cross-view Tab duplicated the insertion');
  const crossViews = { left: await editorText(left), right: await editorText(right) };
  assert.equal(crossViews.left, crossViews.right, 'Split views diverged after cross-view Tab');
  await right.locator('.inputarea').focus();
  await command(page, 'View: Close Editor Group');
  await page.waitForFunction(() => document.querySelectorAll('.part.editor .editor-group-container .monaco-editor').length === 1);
  await page.locator('.monaco-editor .inputarea').first().focus();
  trace?.push({ split: { accepted, undone, cross } });
  return { ghostsShown: ghosts, requestPrefix: event.prefixTail, exactInsertion: true, bothViewsConsistent: true, undoSteps: 1,
    crossViewTab: crossOutcome, crossSaved: cross };
}

// IME composition through the DevTools protocol, the same path a platform input
// method uses in Chromium: a visible suggestion, then a composition that is
// updated and committed; and a pending request, then a composition.
async function imeComposition({ page, file, fixture }) {
  const cdp = await page.context().newCDPSession(page);
  const prefix = 'const ime = ', composing = ['に', 'にほ'], committed = '日本';
  try {
    fixture.begin('ime', { match: context => context.prefix === prefix, content: 'imeValue;' });
    await typePrefix(page, prefix);
    await requestFor(page, fixture, 'ime');
    await ghost(page, 'imeValue').waitFor();
    const started = performance.now();
    for (const text of composing) {
      await cdp.send('Input.imeSetComposition', { text, selectionStart: text.length, selectionEnd: text.length });
      await page.waitForTimeout(600);
    }
    const visibleWhileComposing = await ghost(page, 'imeValue').isVisible();
    await cdp.send('Input.insertText', { text: committed });
    await page.waitForTimeout(settleMs);
    const during = fixture.log.filter(item => item.mode === 'ime' && item.receivedAt >= started);
    const uncommitted = during.filter(item => composing.some(text => item.prefixTail.endsWith(text)));
    const saved = await savedText(page, file);
    assert.equal(saved, prefix + committed, `IME composition corrupted the document: ${JSON.stringify(saved)}`);
    assert.equal(uncommitted.length, 0, 'A completion was requested for uncommitted composition text');
    // A pending request, then a composition; the late response must not apply.
    const pendingPrefix = 'const imePending = ';
    fixture.begin('ime-pending', { match: context => context.prefix === pendingPrefix, content: 'lateValue;', delayMs: 2000 });
    await typePrefix(page, pendingPrefix);
    const pending = await requestFor(page, fixture, 'ime-pending');
    await cdp.send('Input.imeSetComposition', { text: 'か', selectionStart: 1, selectionEnd: 1 });
    await page.waitForTimeout(300);
    await cdp.send('Input.insertText', { text: 'カ' });
    await until(page, () => pending.closedAt, 'Pending IME request never closed', 10000);
    await page.waitForTimeout(settleMs);
    const lateVisible = await page.locator('.cursor-ghost-text').filter({ hasText: 'lateValue' }).count();
    const pendingSaved = await savedText(page, file);
    assert.equal(pendingSaved, pendingPrefix + 'カ', `IME composition with a pending request corrupted the document: ${JSON.stringify(pendingSaved)}`);
    assert.equal(lateVisible, 0, 'A response for text before the composition became visible');
    return { visibleWhileComposing, requestsAfterCompositionStart: during.map(item => item.prefixTail.slice(-4)),
      uncommittedRequests: uncommitted.length, exactCommit: true,
      pendingAborted: pending.aborted === true, lateSuggestionVisible: false };
  } finally { await cdp.detach().catch(() => {}); }
}

// Line-wise accept: the recovered runtime has "Accept Next Line" only for VS Code
// inline suggestions (precondition inlineSuggestionVisible). Cursor Tab ghost text
// is a separate owner. Record that the command is not offered while it is shown.
async function lineAccept({ page, file, fixture }) {
  const prefix = 'const lined = ';
  fixture.begin('line', { match: context => context.prefix === prefix, content: 'first();\nsecond();' });
  await typePrefix(page, prefix);
  await requestFor(page, fixture, 'line');
  await ghost(page, 'first').waitFor();
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const input = page.locator('.quick-input-widget input[type="text"]');
  await input.fill('>Accept Next Line');
  await page.waitForTimeout(1000);
  const offered = await page.locator('.quick-input-widget .monaco-list-row').filter({ hasText: 'Accept Next Line' }).count();
  await page.keyboard.press('Escape');
  await page.locator('.monaco-editor .inputarea').first().focus();
  const saved = await savedText(page, file);
  assert.equal(saved, prefix, 'Probing line-wise accept changed the document');
  return { lineAcceptOffered: offered > 0, supported: false, documentUnchanged: true };
}

// Quick Open serves its previous file list (warmed at startup, also by the chat
// mention menu) while a fresh one loads, re-initializes at most every 5 s and does
// not re-run a query when the load completes. A file written just before Quick Open
// could therefore stay "No matching results" (juoyx2, MzaZ82). Every fixture the
// cases open by name is created before the application starts.
export async function prepareCompletionAcceptanceProject(project) {
  await writeFile(join(project, 'other.js'), '// Other document must remain unchanged.\n');
  await writeFile(join(project, 'crlf.js'), crlfOriginal);
  await writeFile(join(project, 'long.js'), longPrefix);
}

export async function verifyCompletionAcceptance(context, result) {
  result.requests = context.fixture.log;
  context.trace = result.trace = [];
  const cases = [['fullAccept', fullAccept], ['staleSameLine', staleSameLine], ['staleLineShift', staleLineShift],
    ['wrongTab', wrongTab], ['externalChange', externalChange], ['multiCursor', multiCursor],
    ['unicodeCrlf', unicodeCrlf], ['longLine', longLine], ['accept-race', acceptRace], ['split-editors', splitEditors],
    ['ime', imeComposition], ['line-accept', lineAccept]];
  // `--cases=a,b` limits a diagnostic run; full verification runs every case.
  const only = process.argv.find(item => item.startsWith('--cases='))?.slice(8).split(',');
  if (only) result.selectedCases = only;
  const selected = name => !only || only.includes(name);
  // A crashed renderer leaves page calls pending; fail the case instead of waiting.
  const crashed = new Promise((_, reject) => context.page.once('crash', () => reject(Error('Renderer crashed'))));
  crashed.catch(() => {});
  const run = task => Promise.race([task, crashed]);
  for (const [name, test] of cases) if (selected(name)) { result.current = name; result[name] = await run(test(context)); }
  result.bursts = [];
  for (const interval of [30, 150, 600]) if (selected('bursts')) {
    result.current = `burst-${interval}`; result.bursts.push(await run(burst(context, interval)));
  }
  delete result.current;
  context.fixture.end();
  // Declared workload budgets (desktop/completion-budgets.json): an exceeded or
  // unmeasured metric fails. A diagnostic selection checks only what it ran.
  const budgets = await loadCompletionBudgets();
  result.budgets = checkCompletionBudgets(result, budgets, metric =>
    metric.startsWith('burst') ? selected('bursts') : selected(metric.split('.')[0]));
  const failed = result.budgets.checks.filter(check => check.status !== 'pass');
  assert.equal(failed.length, 0, `Completion budgets failed: ${JSON.stringify(failed)}`);
  return result;
}
