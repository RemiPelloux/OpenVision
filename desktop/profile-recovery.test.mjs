import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { acknowledge, acknowledgementFile, inspectProfile, jsoncError } from './profile-recovery.mjs';
import { addRecoveryMainImport, addRecoveryWorkbenchImport, recoveryMainImport, recoveryWorkbenchImport } from './profile-recovery-customization.mjs';
import { renderRecoveryNotice, reportProfileFinding } from './profile-recovery.js';

async function profile(run) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-profile-recovery-'));
  try {
    await mkdir(join(directory, 'User/globalStorage'), { recursive: true });
    await mkdir(join(directory, 'User/.openvision-local'), { recursive: true });
    return await run(directory);
  } finally { await rm(directory, { recursive: true, force: true }); }
}
const snapshotTree = async directory => {
  const out = {};
  const walk = async path => { for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name);
    if (entry.isDirectory()) await walk(full); else out[full] = (await readFile(full)).toString('base64');
  } };
  await walk(directory); return out;
};

test('JSONC check accepts comments, trailing commas and empty files; reports the error position', () => {
  assert.equal(jsoncError('// c\n{ "a": 1, /* x */ "b": [1,2,], }\n'), undefined);
  assert.equal(jsoncError(''), undefined);
  assert.equal(jsoncError('{ "url": "http://x//y" }'), undefined);
  const error = jsoncError('{\n  "a": 1,\n  "b": \n');
  assert.equal(error.line, 4);
  assert.match(jsoncError('[1]').message, /object/);
  assert.equal(jsoncError('[1]', 'array'), undefined);
  assert.ok(jsoncError('{ "a": fals\u0000 }'));
});

test('a healthy profile has no findings', () => profile(async directory => {
  await writeFile(join(directory, 'User/settings.json'), '{ "a": 1 }');
  await writeFile(join(directory, 'User/globalStorage/state.vscdb'), 'db');
  await writeFile(join(directory, 'User/globalStorage/state.vscdb.backup'), 'db');
  assert.deepEqual(await inspectProfile({ userDataDir: directory }), []);
}));

test('quarantined databases and invalid JSON files are reported without modifying anything', () => profile(async directory => {
  await writeFile(join(directory, 'User/globalStorage/state.vscdb.corrupted.1760000000000'), 'garbage');
  await mkdir(join(directory, 'User/workspaceStorage/abc'), { recursive: true });
  await writeFile(join(directory, 'User/workspaceStorage/abc/state.vscdb.corrupted.1760000000001'), 'garbage');
  await writeFile(join(directory, 'User/settings.json'), '{ "a": ');
  await writeFile(join(directory, 'User/.openvision-local/argv.json'), '{ "x": tru');
  await writeFile(join(directory, 'User/mcp.json'), '{ "mcpServers": ');
  await writeFile(join(directory, 'User/keybindings.json'), '// an array is valid here\n[]');
  const before = await snapshotTree(directory);
  const findings = await inspectProfile({ userDataDir: directory });
  assert.deepEqual(findings.map(finding => finding.kind).sort(),
    ['invalid-json', 'invalid-json', 'invalid-json', 'quarantined-storage', 'quarantined-storage']);
  assert.ok(!findings.some(finding => /keybindings/.test(finding.store)), 'keybindings.json is an array');
  assert.ok(findings.every(finding => finding.title && finding.detail && finding.path));
  assert.match(findings.find(finding => finding.kind === 'quarantined-storage').detail, /kept unchanged/);
  assert.deepEqual(await snapshotTree(directory), before, 'inspection must not change the profile');
}));

test('acknowledgement hides only current findings and returns when the evidence changes', () => profile(async directory => {
  await writeFile(join(directory, 'User/settings.json'), '{ "a": ');
  const [finding] = await inspectProfile({ userDataDir: directory });
  assert.equal(await acknowledge({ userDataDir: directory, ids: [finding.id, 'invented:id'], current: [finding] }), 1);
  assert.deepEqual(await inspectProfile({ userDataDir: directory }), []);
  assert.deepEqual(JSON.parse(await readFile(join(directory, acknowledgementFile), 'utf8')).acknowledged, [finding.id]);
  assert.deepEqual((await readdir(directory)).filter(name => name.endsWith('.tmp')), []);
  await writeFile(join(directory, 'User/settings.json'), '{ "b": ');
  assert.equal((await inspectProfile({ userDataDir: directory })).length, 1, 'a different broken file is reported again');
  await writeFile(join(directory, acknowledgementFile), '{torn');
  assert.equal((await inspectProfile({ userDataDir: directory })).length, 1, 'an unreadable acknowledgement record hides nothing');
}));

test('installer imports are idempotent and refuse drift or duplicates', () => {
  const main = addRecoveryMainImport('console.log(1);\n');
  assert.equal(addRecoveryMainImport(main), main);
  assert.throws(() => addRecoveryMainImport(`${recoveryMainImport}\n${recoveryMainImport}\n`), /more than once/);
  const anchor = "import { importCursor } from './openvision-import-ui.js';\nrest();\n";
  const profileModule = addRecoveryWorkbenchImport(anchor);
  assert.ok(profileModule.startsWith(recoveryWorkbenchImport));
  assert.equal(addRecoveryWorkbenchImport(profileModule), profileModule);
  assert.throws(() => addRecoveryWorkbenchImport('drifted();'), /drifted/);
});

test('the workbench notice lists every finding and acknowledges on Dismiss', async () => {
  const nodes = [];
  const fake = tag => ({ tag, style: {}, children: [], attributes: {}, textContent: '', append(...items) { this.children.push(...items); },
    setAttribute(name, value) { this.attributes[name] = value; }, remove() { this.removed = true; } });
  globalThis.document = { createElement: tag => { const node = fake(tag); nodes.push(node); return node; }, body: fake('body') };
  try {
    let dismissed = 0;
    const panel = renderRecoveryNotice([{ title: 'T1', detail: 'D1', path: '/p/1' }, { title: 'T2', detail: 'D2', path: '/p/2' }], () => dismissed++);
    assert.equal(panel.attributes.role, 'alert');
    assert.deepEqual(nodes.filter(node => node.tag === 'strong').map(node => node.textContent), ['T1', 'T2']);
    assert.ok(nodes.some(node => /recovery\.md/.test(node.textContent)));
    await nodes.find(node => node.tag === 'button').onclick();
    assert.equal(dismissed, 1); assert.equal(panel.removed, true);
  } finally { delete globalThis.document; }
});

test('workbench owners report through a queue, deduplicated by id', () => {
  const queue = globalThis.openvisionProfileRecoveryQueue;
  assert.equal(typeof queue.push, 'function', 'the module replaces an early array with a live queue');
  assert.doesNotThrow(() => queue.push({ id: 'unreadable-rules:x', title: 'T', detail: 'D', path: 'k' }));
  assert.doesNotThrow(() => reportProfileFinding({ id: 'unreadable-rules:x', title: 'T', detail: 'D', path: 'k' }));
  assert.doesNotThrow(() => reportProfileFinding({ title: 'no id is ignored' }));
});

test('project mcp.json of the window folder is inspected read-only; relative folders are ignored', () => profile(async directory => {
  const project = join(directory, 'project');
  await mkdir(join(project, '.openvision'), { recursive: true });
  await writeFile(join(project, '.openvision/mcp.json'), '{ "mcpServers": [ ');
  const findings = await inspectProfile({ userDataDir: directory, folders: [project, 'relative/path', 42] });
  assert.deepEqual(findings.map(finding => finding.store), ['Project mcp.json (project)']);
}));
