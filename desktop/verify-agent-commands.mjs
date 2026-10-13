import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { commandLifecycle } from './verify-command-lifecycle.mjs';

export async function createAgentCommandFixture({ directory, project }) {
  const script = join(project, 'command-fixture.cjs');
  const lifecycle = await commandLifecycle();
  await writeFile(script, [
    "const fs = require('node:fs');",
    "const result = { mode: process.argv[2], cwd: process.cwd(), message: 'OpenVision command café 日本語' };",
    "fs.writeFileSync('command-' + result.mode + '.json', JSON.stringify(result));",
    'console.log(result.message);',
    `if (result.mode === 'slow') {\n${lifecycle.script}\n}`,
  ].join('\n'));
  const results = [];
  return {
    results,
    dispose: () => lifecycle.dispose(),
    respond(payload, event, mode) {
      const id = `call_openvision_command_${mode}`;
      const output = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
      if (output) {
        results.push({ mode, content: output.content });
        event({ role: 'assistant', content: `OpenVision command ${mode} finished.` }); event({}, 'stop');
      } else {
        event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'Shell',
          arguments: JSON.stringify({ command: `node "${script}" ${mode}`, working_directory: project,
            description: `Run disposable OpenVision ${mode} fixture`, block_until_ms: 30000 }) } }] });
        event({}, 'tool_calls');
      }
    },
    async verify(page, mode) {
      const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
      await input.fill(`Propose running the disposable command fixture in ${mode} mode. Wait for my approval.`);
      await input.press('Enter');
      await page.getByText(`Run disposable OpenVision ${mode} fixture`, { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
      await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor();
      await assert.rejects(readFile(join(project, `command-${mode}.json`)), { code: 'ENOENT' });
      await writeFile(join(directory, `command-${mode}-controls.txt`), await page.locator('body').innerText());
      await page.screenshot({ path: join(directory, `command-${mode}.png`) });
      const action = mode === 'deny' ? 'Skip' : 'Run';
      await page.getByText(action, { exact: true }).filter({ visible: true }).last().click();
      if (mode === 'slow') {
        const stop = await lifecycle.verifyStop(page);
        await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
        results.push({ mode, ...stop });
        await writeFile(join(directory, 'command-results.json'), JSON.stringify(results, null, 2));
        return;
      }
      await page.getByText(`OpenVision command ${mode} finished.`, { exact: true }).first().waitFor({ timeout: 45000 });
      await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
      await writeFile(join(directory, 'command-results.json'), JSON.stringify(results, null, 2));
      const marker = join(project, `command-${mode}.json`);
      if (mode === 'deny') await assert.rejects(readFile(marker), { code: 'ENOENT' });
      else {
        const output = JSON.parse(await readFile(marker, 'utf8'));
        assert.equal(output.mode, mode); assert.equal(resolve(output.cwd), resolve(project));
        assert.equal(output.message, 'OpenVision command café 日本語');
      }
    },
  };
}
