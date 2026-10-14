import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Reach the existing Customize service through its mounted React component.
// This drives the real producer/IPC/SQLite path, with no fake storage.
async function updateNativeMemory(page, item) {
  await page.locator('.openvision-legacy-memories').evaluate(async (element, item) => {
    let host = element;
    while (host) {
      const key = Object.keys(host).find(key => key.startsWith('__reactFiber$'));
      for (let fiber = host[key]; fiber; fiber = fiber.return) {
        const knowledge = fiber.memoizedProps?.services?.knowledgeBaseService;
        if (knowledge) {
          await knowledge.updateItem(item.id, item.title, item.knowledge);
          return;
        }
      }
      host = host.parentElement;
    }
    throw new Error('Mounted Customize knowledge service not found');
  }, item);
}

export async function verifyLegacyMemoryStale(context) {
  const { page, fixtures, result, memoryFiles, memoryDirectory } = context;
  const section = page.locator('.openvision-legacy-memories');
  const card = section.locator('.openvision-memory-card');
  const original = fixtures[0];
  const changed = { ...original, title: original.title + ' revised', knowledge: original.knowledge + '\nChanged through the native memory service during review.' };
  const before = await memoryFiles();
  const contents = await Promise.all(before.map(name => readFile(`${memoryDirectory}/${name}`, 'utf8')));
  await section.getByRole('button', { name: original.title, exact: true }).click();
  assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), original.knowledge);
  try {
    await updateNativeMemory(page, changed);
    await section.getByRole('button', { name: changed.title, exact: true }).waitFor();
    await card.getByRole('button', { name: 'Import project memory', exact: true }).click();
    await card.getByText(/Could not save memory: The original memory changed/).waitFor();
    assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), original.knowledge);
    assert.equal(await card.getByRole('button', { name: 'Import project memory', exact: true }).isEnabled(), true);
    assert.deepEqual(await memoryFiles(), before);
    assert.deepEqual(await Promise.all(before.map(name => readFile(`${memoryDirectory}/${name}`, 'utf8'))), contents);
    result.checks.native_source_update_rejects_stale_import_without_writes = true;
    await section.getByRole('button', { name: changed.title, exact: true }).click();
    assert.equal(await card.getByLabel('Memory content', { exact: true }).inputValue(), changed.knowledge);
    await card.getByRole('button', { name: 'Dismiss', exact: true }).click();
    assert.deepEqual(await memoryFiles(), before);
    result.checks.native_stale_review_refreshes_to_latest_source = true;
  } finally {
    await updateNativeMemory(page, original);
    await section.getByRole('button', { name: original.title, exact: true }).waitFor();
  }
}
