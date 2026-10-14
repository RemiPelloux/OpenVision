import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, symlink, rmdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { denyFixtureWrites } from './verification-write-denial.mjs';

export async function verifyMemoryFilesystem({ page, directory, project, secondary, result, newChat, replyFinished }) {
  assert.equal(process.platform, 'win32', 'Native memory filesystem fixture currently targets Windows');
  const selectedRules = join(secondary, '.openvision/rules');
  const untouched = await readdir(join(project, '.openvision/rules'));
  const card = page.locator('.openvision-memory-card').filter({ visible: true }).last();
  const save = () => card.getByRole('button', { name: 'Save project memory', exact: true });
  const suggest = async suffix => {
    await newChat('Suggest a project memory for explicit review.');
    await save().waitFor(); await replyFinished();
    await card.getByLabel('Memory content', { exact: true }).fill(`Filesystem verification ${suffix}`);
    assert.equal(await card.getByLabel('Memory project').locator('option').count(), 2);
    await card.getByLabel('Memory project').selectOption('1');
  };
  const saved = () => card.getByText('Saved to this project. Agent can read it when relevant.', { exact: true }).waitFor();
  const target = join(directory, 'junction-memory-target'); await mkdir(target);
  await mkdir(join(secondary, '.openvision'));
  await symlink(target, selectedRules, 'junction');
  try {
    await suggest('junction rejection'); await save().click();
    await card.getByText(/Could not save memory: Memory folders must be ordinary project directories, not links/).waitFor();
    assert.deepEqual(await readdir(target), []);
    assert.equal(await save().isEnabled(), true);
    result.checks.native_junction_memory_folder_rejected = true;
  } finally { await rmdir(selectedRules); await mkdir(selectedRules); }
  await save().click(); await saved();
  const prior = await readdir(selectedRules); assert.equal(prior.length, 1);
  const priorText = await readFile(join(selectedRules, prior[0]), 'utf8');
  assert.deepEqual(await readdir(target), []);
  result.checks.native_junction_rejection_recovers_without_target_writes = true;
  await suggest('permission denial');
  const denial = await denyFixtureWrites({ directory: selectedRules, scope: directory });
  try {
    await assert.rejects(writeFile(join(selectedRules, 'write-probe.txt'), 'Should fail'),
      error => ['EPERM', 'EACCES'].includes(error.code));
    await save().click();
    await card.getByText(/Could not save memory:/).waitFor();
    assert.deepEqual(await readdir(selectedRules), prior);
    assert.equal(await save().isEnabled(), true);
    result.checks.memory_native_permission_denial_preserves_content_and_retries = true;
  } finally { await denial.restore(); result.checks.memory_acl_restored = true; }
  await save().click(); await saved();
  const names = await readdir(selectedRules); assert.equal(names.length, 2);
  const created = names.find(name => !prior.includes(name));
  assert.ok((await readFile(join(selectedRules, created), 'utf8')).includes('Filesystem verification permission denial'));
  assert.equal(await readFile(join(selectedRules, prior[0]), 'utf8'), priorText);
  assert.deepEqual(await readdir(join(project, '.openvision/rules')), untouched);
  result.checks.multi_root_approval_writes_only_selected_project = true;

}
