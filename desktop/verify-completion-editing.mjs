import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const cancellationBudgetMs = 1000;
const requestTimeoutMs = 25000;

export function createCompletionEditingFixture() {
  const events = [];
  let current;
  return {
    events,
    begin(mode, prefix, content = '') { current = { mode, prefix, content }; },
    respond(context, response) {
      if (!current) return false;
      if (context.prefix !== current.prefix) {
        response.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: '' } }] }));
        return true;
      }
      const event = { mode: current.mode, prefix: context.prefix, receivedAt: performance.now() };
      events.push(event);
      response.on('close', () => { event.closedAt = performance.now(); event.aborted = !response.writableEnded; });
      if (!current.mode.startsWith('pending-')) {
        response.end(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: current.content } }] }));
        event.respondedAt = performance.now();
      }
      return true;
    },
  };
}

async function until(page, predicate, message, timeout = requestTimeoutMs) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) { const value = predicate(); if (value) return value; await page.waitForTimeout(25); }
  throw Error(message);
}

async function typePrefix(page, text) {
  await page.keyboard.press('Escape');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(text.trimEnd());
  await page.keyboard.press('End'); await page.keyboard.insertText(' ');
}

async function savedText(page, file) {
  await page.keyboard.press('ControlOrMeta+s');
  await page.waitForTimeout(250);
  return (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
}

async function partialAcceptance({ page, file, fixture, directory }, result) {
  const prefix = 'const message = ', insertion = 'greeting + "café 日本語 😀";';
  fixture.begin('partial', prefix, insertion);
  const started = performance.now(); await typePrefix(page, prefix);
  const event = await until(page, () => fixture.events.find(item => item.mode === 'partial'), 'No partial-accept request');
  await page.locator('.cursor-ghost-text').filter({ hasText: 'greeting' }).first().waitFor();
  const visibleAt = performance.now();
  await page.keyboard.press('ControlOrMeta+ArrowRight');
  const partial = await savedText(page, file);
  assert.equal(partial.trimEnd(), prefix + 'greeting', 'Word acceptance must insert only the next word');
  await page.screenshot({ path: join(directory, 'partial-word.png') });
  await page.keyboard.press('Tab');
  assert.equal(await savedText(page, file), prefix + insertion, 'Tab must accept the remaining text without duplication');
  await page.keyboard.press('ControlOrMeta+z');
  const undo = await savedText(page, file);
  result.undoStates = [undo];
  // Native completion edits can share an undo group. Require a bounded exact
  // return to the pre-suggestion text without assuming one undo per UI action.
  let steps = 1, current = undo;
  while (current !== prefix && steps < 3) {
    await page.keyboard.press('ControlOrMeta+z'); current = await savedText(page, file); steps++;
    result.undoStates.push(current);
  }
  assert.equal(current, prefix, 'Undo must restore the exact code before partial acceptance');
  return { partial, undoSteps: steps, requestToVisibleMs: Math.round(visibleAt - event.receivedAt),
    inputSequenceToVisibleMs: Math.round(visibleAt - started) };
}

async function pendingCancellation(context, kind) {
  const { page, file, fixture } = context, prefix = `const ${kind} = `;
  fixture.begin(`pending-${kind}`, prefix);
  await typePrefix(page, prefix);
  const event = await until(page, () => fixture.events.find(item => item.mode === `pending-${kind}`), `No ${kind} pending request`);
  const canceledAt = performance.now();
  if (kind === 'typing') await page.keyboard.insertText('7');
  else if (kind === 'escape') await page.keyboard.press('Escape');
  else {
    await page.keyboard.press('ControlOrMeta+p');
    await page.locator('.quick-input-widget input[type="text"]').fill('other.js');
    await page.locator('.quick-input-widget').getByText('other.js', { exact: true }).first().click();
    await page.locator('.tabs-container .tab.active').filter({ hasText: 'other.js' }).waitFor();
  }
  await until(page, () => event.closedAt, `${kind} did not cancel the upstream request within ${cancellationBudgetMs} ms`, cancellationBudgetMs);
  assert.equal(event.aborted, true, 'Pending transport must be aborted, not completed');
  const elapsedMs = event.closedAt - canceledAt;
  assert.ok(elapsedMs < cancellationBudgetMs, `${kind} cancellation exceeded budget`);
  if (kind === 'switch') {
    assert.equal(await savedText(page, join(dirname(file), 'other.js')), '// Other document must remain unchanged.\n');
    await page.locator('.tabs-container .tab').filter({ hasText: 'completion.js' }).first().click();
    await page.locator('.monaco-editor .inputarea').first().focus();
  }
  const expected = prefix + (kind === 'typing' ? '7' : '');
  assert.equal(await savedText(page, file), expected, `${kind} changed user text`);
  return { upstreamAborted: true, cancellationMs: Math.round(elapsedMs), budgetMs: cancellationBudgetMs, exactTextPreserved: true };
}

export async function verifyCompletionEditing(context, result) {
  await writeFile(join(dirname(context.file), 'other.js'), '// Other document must remain unchanged.\n');
  result.events = context.fixture.events;
  result.partial = {};
  Object.assign(result.partial, await partialAcceptance(context, result.partial));
  for (const kind of ['typing', 'escape', 'switch']) result[kind] = await pendingCancellation(context, kind);
  return result;
}
