import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, lstat, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parseMemoryProposal, memoryRuleText, captureMemoryWorkspace, saveApprovedMemory } from './workspace-memory.js';
import { reviewLegacyMemory, legacyMemories } from './legacy-memory.js';

const proposal = { title: 'Build notes', description: 'When building: "desktop"', content: 'Use the pinned toolchain. 日本語\n' };
const text = JSON.stringify(proposal);

async function fixture(t) {
  const path = await mkdtemp(join(tmpdir(), 'openvision-memory-'));
  t.after(() => rm(path, { recursive: true, force: true }));
  const uri = path => ({ fsPath: path, toString: () => path });
  const folder = { name: 'Project', uri: uri(path) };
  let current = { id: 'one', folders: [folder] };
  const workspace = { getWorkspace: () => current };
  const files = {
    stat: async resource => { const stat = await lstat(resource.fsPath); return {
      isDirectory: stat.isDirectory(), isFile: stat.isFile(), isSymbolicLink: stat.isSymbolicLink() }; },
    createFolder: resource => mkdir(resource.fsPath, { recursive: true }),
    createFile: (resource, value, options) => { assert.equal(options.overwrite, false); return writeFile(resource.fsPath, value, { flag: 'wx' }); },
    readFile: async resource => ({ value: await readFile(resource.fsPath) }),
  };
  const context = { workspace, files, snapshot: captureMemoryWorkspace(workspace), isMissing: error => error.code === 'ENOENT',
    URI: { joinPath: (base, ...parts) => uri(join(base.fsPath, ...parts)) }, Buffer };
  context.Buffer = { fromString: value => Buffer.from(value) };
  return { path, folder, context, changeWorkspace: () => { current = { id: 'two', folders: [] }; } };
}

test('proposal parser validates data and serializes safe on-demand rule metadata', () => {
  assert.deepEqual(parseMemoryProposal(text), proposal);
  assert.match(memoryRuleText(proposal), /alwaysApply: false/);
  assert.match(memoryRuleText(proposal), /description: "Build notes: When building: \\"desktop\\""/);
  for (const value of ['{}', 'null', '{broken', JSON.stringify({ ...proposal, path: '../../outside' }), 'x'.repeat(65537)])
    assert.throws(() => parseMemoryProposal(value));
});

test('approved memories persist only in the selected project and repeated approval is idempotent', async t => {
  const f = await fixture(t);
  assert.deepEqual(await readdir(f.path), []);
  const saved = await saveApprovedMemory(text, f.folder, f.context);
  assert.equal(await readFile(saved.fsPath, 'utf8'), memoryRuleText(proposal));
  assert.equal((await saveApprovedMemory(text, f.folder, f.context)).fsPath, saved.fsPath);
  assert.equal((await readdir(join(f.path, '.openvision/rules'))).length, 1);
  await writeFile(saved.fsPath, 'User edited this memory');
  await assert.rejects(saveApprovedMemory(text, f.folder, f.context), /different content/);
  assert.equal(await readFile(saved.fsPath, 'utf8'), 'User edited this memory');
});

test('workspace changes, failed writes and linked directories cannot silently save a memory', async t => {
  const f = await fixture(t);
  const create = f.context.files.createFile;
  f.context.files.createFile = async () => { throw new Error('disk write rejected'); };
  await assert.rejects(saveApprovedMemory(text, f.folder, f.context), /disk write rejected/);
  assert.deepEqual(await readdir(join(f.path, '.openvision/rules')), []);
  f.context.files.createFile = create;
  await saveApprovedMemory(text, f.folder, f.context);
  f.context.files.stat = async () => ({ isDirectory: true, isSymbolicLink: true });
  await assert.rejects(saveApprovedMemory(text, f.folder, f.context), /not links/);
  f.changeWorkspace();
  await assert.rejects(saveApprovedMemory(text, f.folder, f.context), /project changed/);
});

test('legacy approval preserves originals and refuses stale review before or during preparation', async t => {
  const f = await fixture(t);
  const source = { id: 'legacy-one', title: 'Legacy fact', knowledge: 'A project fact', isGenerated: true, createdAt: '2026-01-01' };
  const knowledge = { items: [source, { ...source, id: 'personal', isGenerated: false }] };
  const before = JSON.stringify(knowledge.items);
  assert.deepEqual(legacyMemories(knowledge), [source]);
  const review = reviewLegacyMemory(knowledge, source.id);
  const context = { ...f.context, assertCurrent: review.assertCurrent };
  const uri = await saveApprovedMemory(review.text, f.folder, context);
  assert.equal(JSON.stringify(knowledge.items), before);
  assert.equal((await saveApprovedMemory(review.text, f.folder, context)).fsPath, uri.fsPath);
  source.knowledge = 'Changed in another window';
  await assert.rejects(saveApprovedMemory(review.text, f.folder, context), /original memory changed/);
  const refreshed = reviewLegacyMemory(knowledge, source.id);
  const stat = context.files.stat;
  context.files.stat = async path => { source.knowledge = 'Changed during directory inspection'; return stat(path); };
  await assert.rejects(saveApprovedMemory(refreshed.text, f.folder, { ...context, assertCurrent: refreshed.assertCurrent }), /original memory changed/);
  assert.equal((await readdir(join(f.path, '.openvision/rules'))).length, 1);
  knowledge.items = [];
  assert.throws(() => review.assertCurrent(), /original memory changed/);
  assert.throws(() => reviewLegacyMemory(knowledge, source.id), /no longer available/);
});
