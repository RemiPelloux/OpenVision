import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

// This verifier uses the real storage channel from a second native window.
// The UI intentionally reuses an already-open folder, so the fixture explicitly
// selects the review window's workspace descriptor at the IPC boundary.
async function storageOperation(page, operation) {
  return page.locator('.openvision-legacy-memories').evaluate(async (element, operation) => {
    let host = element;
    while (host) {
      const key = Object.keys(host).find(key => key.startsWith('__reactFiber$'));
      for (let fiber = host[key]; fiber; fiber = fiber.return) {
        const knowledge = fiber.memoizedProps?.services?.knowledgeBaseService;
        const database = knowledge?.localRules?.storage.getStorage(1)?.database;
        if (!database) continue;
        if (operation.kind === 'identity') return { workspace: database.workspace, profile: database.profile };
        await database.channel.call('openvisionRulesUpdate', {
          ...operation.target, key: `openvision.user-rule.v1.${operation.item.id}`,
          value: JSON.stringify(operation.item),
        });
        return;
      }
      host = host.parentElement;
    }
    throw new Error('Mounted native workspace rule storage not found');
  }, operation);
}

async function secondWindow(context) {
  const { app, layout, profile, directory, other, errors, requests } = context;
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  const pending = app.waitForEvent('window', { timeout: 45000 });
  const forwarding = spawn(layout.executable, ['--user-data-dir', profile, '--extensions-dir',
    join(directory, 'extensions'), '--new-window', '--disable-updates', '--skip-welcome',
    '--skip-release-notes', other], { env, windowsHide: true, stdio: 'ignore' });
  const exited = new Promise((resolve, reject) => {
    forwarding.once('error', reject);
    forwarding.once('exit', (code, signal) => resolve({ code, signal }));
  });
  const [page, exit] = await Promise.all([pending, exited]);
  assert.equal(exit.code, 0, 'Second launch forwards to the owned native host');
  context.result.crossWindowForwardingExit = exit;
  page.setDefaultTimeout(20000);
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => {
    if (/\/KnowledgeBase(?:Add|List|Update|Remove)(?:\?|$)/i.test(request.url()))
      requests.push(new URL(request.url()).pathname);
  });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  await page.waitForTimeout(8000);
  await context.openRules(page);
  return page;
}

async function windowIdentity(app, page) {
  return (await app.browserWindow(page)).evaluate(window => ({
    windowId: window.id, rendererPid: window.webContents.getOSProcessId(),
  }));
}

export async function verifyLegacyMemoryWindows(context) {
  const { app, page, fixtures, result, memoryFiles, memoryDirectory } = context;
  result.limitations.push('Cross-window source mutation selects the review workspace descriptor through test-only access to the second window native storage channel. Normal same-folder opens reuse the existing window.');
  const original = fixtures[0];
  const changed = { ...original, title: `${original.title} from another window`,
    knowledge: `${original.knowledge}\nCross-window native IPC revision.` };
  const target = await storageOperation(page, { kind: 'identity' });
  const second = await secondWindow(context);
  const source = await storageOperation(second, { kind: 'identity' });
  assert.notDeepEqual(source.workspace, target.workspace, 'Fixture windows have distinct native workspace identities');
  result.crossWindowIdentities = await Promise.all([windowIdentity(app, page), windowIdentity(app, second)]);
  assert.notEqual(result.crossWindowIdentities[0].windowId, result.crossWindowIdentities[1].windowId);
  assert.notEqual(result.crossWindowIdentities[0].rendererPid, result.crossWindowIdentities[1].rendererPid);
  const section = page.locator('.openvision-legacy-memories');
  const card = section.locator('.openvision-memory-card');
  const before = await memoryFiles();
  const contents = await Promise.all(before.map(name => readFile(join(memoryDirectory, name), 'utf8')));
  await section.getByRole('button', { name: original.title, exact: true }).click();
  assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), original.knowledge);
  try {
    await storageOperation(second, { kind: 'update', target, item: changed });
    await section.getByRole('button', { name: changed.title, exact: true }).waitFor();
    assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), original.knowledge);
    await card.getByRole('button', { name: 'Import project memory', exact: true }).click();
    await card.getByText(/Could not save memory: The original memory changed/).waitFor();
    assert.deepEqual(await memoryFiles(), before);
    assert.deepEqual(await Promise.all(before.map(name => readFile(join(memoryDirectory, name), 'utf8'))), contents);
    result.checks.cross_window_ipc_change_rejects_stale_review_without_writes = true;
    await section.getByRole('button', { name: changed.title, exact: true }).click();
    assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), changed.knowledge);
    await card.getByRole('button', { name: 'Dismiss', exact: true }).click();
    assert.deepEqual(await memoryFiles(), before);
    result.checks.cross_window_revision_requires_fresh_review = true;
    await page.screenshot({ path: join(context.directory, 'cross-window-review.png') });
  } finally {
    await storageOperation(second, { kind: 'update', target, item: original });
    await section.getByRole('button', { name: original.title, exact: true }).waitFor();
    await second.close();
  }
}
