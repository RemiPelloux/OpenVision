import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function createAgentSearchFixture({ directory, project }) {
  const folder = join(project, 'search café 日本語');
  await mkdir(folder);
  const files = ['first.needle.txt', 'second.needle.txt'].map(name => ({ name,
    path: join(folder, name), text: `OV_SEARCH_${randomUUID()}\n` }));
  for (const file of files) await writeFile(file.path, file.text);
  const calls = [
    { id: 'ov_glob', name: 'Glob', args: { target_directory: project, glob_pattern: '**/*.needle.txt' } },
    { id: 'ov_grep', name: 'Grep', args: { path: project, pattern: 'OV_SEARCH_', glob: '**/*.needle.txt', output_mode: 'content' } },
    { id: 'ov_empty', name: 'Grep', args: { path: project, pattern: `OV_ABSENT_${randomUUID()}`, output_mode: 'content' } },
  ];
  const results = { calls: [], checks: {} };
  return {
    results,
    respond(payload, event) {
      const completed = payload.messages?.filter(message => message.role === 'tool' && calls.some(call => call.id === message.tool_call_id)) ?? [];
      const next = calls.find(call => !completed.some(message => message.tool_call_id === call.id));
      if (next) {
        event({ role: 'assistant', tool_calls: [{ index: 0, id: next.id, type: 'function',
          function: { name: next.name, arguments: JSON.stringify(next.args) } }] });
        event({}, 'tool_calls'); return;
      }
      results.calls = completed.map(message => ({ id: message.tool_call_id, content: message.content }));
      event({ role: 'assistant', content: 'OpenVision native project search completed.' }); event({}, 'stop');
    },
    async verify(page) {
      const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
      await input.fill('Search the project for *.needle.txt files, inspect OV_SEARCH_ matches, then confirm that an absent search has no matches. Do not modify files.');
      await input.press('Enter');
      await page.getByText('OpenVision native project search completed.', { exact: true }).first().waitFor({ timeout: 45000 });
      await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
      await writeFile(join(directory, 'search-tool-results.json'), JSON.stringify(results.calls, null, 2));
      assert.equal(results.calls.length, calls.length);
      const content = id => JSON.stringify(results.calls.find(call => call.id === id)?.content);
      for (const file of files) {
        assert.ok(content('ov_glob').includes(file.name), `Glob must find ${file.name}`);
        assert.ok(content('ov_grep').includes(file.name), `Grep must return ${file.name}`);
        assert.ok(content('ov_grep').includes(file.text.trim()), 'Grep must return the unpredictable on-disk marker');
        assert.equal(await readFile(file.path, 'utf8'), file.text);
      }
      assert.match(content('ov_empty'), /no matches|0 matches/i);
      assert.ok(!content('ov_empty').includes('OV_SEARCH_'));
      Object.assign(results.checks, { nativeGlob: true, nativeGrep: true, unicodePaths: true,
        actualDiskContent: true, emptySearch: true, filesPreserved: true });
      await page.screenshot({ path: join(directory, 'native-search.png') });
    },
  };
}
