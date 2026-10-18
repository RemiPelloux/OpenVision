import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
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
  } while (current !== expected && states.length < limit);
  return { steps: states.length, exact: current === expected, states };
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

// A 20,000-character line: bounded request context and exact line reconstruction.
async function longLine({ page, file, fixture }) {
  const prefix = 'const long = "' + 'x'.repeat(20000) + '"; const tail = ', insertion = 'done;';
  fixture.begin('long', { match: context => context.prefix.endsWith('const tail = '), content: insertion });
  await typePrefix(page, prefix);
  // The native trigger reaches a 20,000-character line late or not at all.
  const typed = performance.now();
  let event;
  try { event = await requestFor(page, fixture, 'long', 25000); } catch { event = undefined; }
  if (event) await ghost(page, 'done').waitFor({ timeout: 5000 }).catch(() => {});
  else await page.waitForTimeout(1500);
  await pressTab(page);
  await savedText(page, file);
  // A 20 KB save can land after the default read delay; wait for this case's text.
  // Save participants hold this save for several seconds on Linux.
  let saved;
  const saveStarted = performance.now();
  for (let attempt = 0; attempt < 200; attempt++) {
    saved = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
    if (saved.startsWith('const long = ') && saved.includes('const tail =')) break;
    await page.waitForTimeout(100);
  }
  const saveWaitMs = Math.round(performance.now() - saveStarted);
  const accepted = saved === prefix + insertion, discarded = squash(saved) === squash(prefix);
  assert.ok(accepted || discarded, `Long-line acceptance corrupted the line: ${JSON.stringify(saved.slice(-40))}`);
  if (event) assert.ok(event.prefixLength <= 8000, 'Long-line request context must stay bounded');
  return { requested: !!event, typedToRequestMs: event && Math.round(event.receivedAt - typed), prefixLength: event?.prefixLength, requestBytes: event?.requestBytes,
    outcome: accepted ? 'accepted-exact' : 'not-accepted', lineLength: prefix.length, saveWaitMs };
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
    lastKeyToVisibleMs: Math.round(visibleAt - lastKey) };
}

// Quick Open serves its previous file list (warmed at startup, also by the chat
// mention menu) while a fresh one loads, re-initializes at most every 5 s and does
// not re-run a query when the load completes. A file written just before Quick Open
// could therefore stay "No matching results" (juoyx2, MzaZ82). Every fixture the
// cases open by name is created before the application starts.
export async function prepareCompletionAcceptanceProject(project) {
  await writeFile(join(project, 'other.js'), '// Other document must remain unchanged.\n');
  await writeFile(join(project, 'crlf.js'), crlfOriginal);
}

export async function verifyCompletionAcceptance(context, result) {
  result.requests = context.fixture.log;
  context.trace = result.trace = [];
  const cases = [['fullAccept', fullAccept], ['staleSameLine', staleSameLine], ['staleLineShift', staleLineShift],
    ['wrongTab', wrongTab], ['externalChange', externalChange], ['multiCursor', multiCursor],
    ['unicodeCrlf', unicodeCrlf], ['longLine', longLine]];
  // `--cases=a,b` limits a diagnostic run; full verification runs every case.
  const only = process.argv.find(item => item.startsWith('--cases='))?.slice(8).split(',');
  if (only) result.selectedCases = only;
  const selected = name => !only || only.includes(name);
  for (const [name, run] of cases) if (selected(name)) { result.current = name; result[name] = await run(context); }
  result.bursts = [];
  for (const interval of [30, 150, 600]) if (selected('bursts')) {
    result.current = `burst-${interval}`; result.bursts.push(await burst(context, interval));
  }
  delete result.current;
  context.fixture.end();
  return result;
}
