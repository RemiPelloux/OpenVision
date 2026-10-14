import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const invalidInsertion = 'Provider did not return a complete code insertion.';
export const completionFailureCases = [
  { id: 'empty', content: '' },
  { id: 'truncated', reason: 'length', diagnostic: 'Provider truncated the completion. Try a shorter context or another autocomplete model.' },
  { id: 'filtered', reason: 'content_filter', diagnostic: invalidInsertion },
  { id: 'tool', extra: { tool_calls: [{ id: 'one', type: 'function' }] }, diagnostic: invalidInsertion },
  { id: 'legacy-tool', extra: { function_call: { name: 'write' } }, diagnostic: invalidInsertion },
  { id: 'malformed-tool', extra: { tool_calls: {} }, diagnostic: invalidInsertion },
  { id: 'refusal', extra: { refusal: 'Fixture refusal' }, diagnostic: invalidInsertion },
  { id: 'missing-finish', reason: null, diagnostic: invalidInsertion },
  { id: 'invalid-json', raw: '{"key":"fixture-key", broken', diagnostic: 'Provider returned invalid completion JSON or UTF-8.' },
  { id: 'invalid-utf8', raw: Buffer.from([0xff, 0xfe]), diagnostic: 'Provider returned invalid completion JSON or UTF-8.' },
  { id: 'unsupported', status: 404, diagnostic: 'Completion failed (HTTP 404).' },
  { id: 'oversized', content: 'x'.repeat(65537), diagnostic: 'Completion response is too large.' },
  { id: 'markdown', content: '```js\nUNSAFE_COMPLETION\n```', diagnostic: 'Provider returned Markdown instead of a code insertion.' },
];

export function writeCompletionFailure(id, response) {
  const entry = completionFailureCases.find(item => item.id === id);
  if (!entry) return false;
  response.statusCode = entry.status ?? 200;
  response.end(entry.raw ?? JSON.stringify({ choices: [{ finish_reason: entry.reason === null ? undefined : entry.reason ?? 'stop',
    message: { role: 'assistant', content: entry.content ?? 'UNSAFE_COMPLETION', ...entry.extra } }] }));
  return true;
}

async function requestCase(context, id, original) {
  const { page, requests, setPhase } = context;
  setPhase(id);
  await page.keyboard.press('Escape');
  await page.locator('.monaco-editor .inputarea').first().focus();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(original.trimEnd());
  await page.keyboard.press('End');
  await page.keyboard.insertText(' ');
  const deadline = Date.now() + 25000;
  while (!requests.some(request => request.phase === id && request.context.prefix === original)) {
    assert.ok(Date.now() < deadline, `No native completion request for ${id}`);
    await page.waitForTimeout(100);
  }
}

export async function verifyCompletionFailures(context) {
  const { page, file, directory } = context, observed = [];
  for (const [index, entry] of completionFailureCases.entries()) {
    const original = `const failure${index} = `;
    await requestCase(context, entry.id, original);
    if (entry.diagnostic) await page.getByRole('button', { name: `OpenVision autocomplete: ${entry.diagnostic}`, exact: true }).waitFor();
    else {
      await page.waitForTimeout(1000);
      assert.equal(await page.getByLabel(/^OpenVision autocomplete:/).count(), 0, 'Empty completions are a normal no-suggestion response');
    }
    // A rejected response must leave Tab as ordinary editor input; it must not
    // accept provider text. Whitespace differs with user/editor tab settings.
    await page.keyboard.press('Tab');
    await page.keyboard.press('ControlOrMeta+s');
    await page.waitForTimeout(300);
    const saved = await readFile(file, 'utf8');
    assert.equal(saved.replace(/\s/g, ''), original.replace(/\s/g, ''), `${entry.id} changed source code`);
    observed.push({ id: entry.id, rejectedWithoutCodeInsertion: true, diagnostic: entry.diagnostic });
    if (entry.diagnostic) {
      // Clear the error through an actual empty provider response. The next
      // case must produce fresh feedback, even when its diagnostic is identical.
      await requestCase(context, 'empty', `const reset${index} = `);
      await page.getByRole('button', { name: /^OpenVision autocomplete:/ }).waitFor({ state: 'hidden' });
    }
  }
  await page.screenshot({ path: join(directory, 'rejected-completion.png') });
  return observed;
}
