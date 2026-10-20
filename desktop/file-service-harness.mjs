import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { createRequire } from 'node:module';
import { mkdir, mkdtemp, readFile, realpath, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// OV-803 differential harness for the measured file-service subset (Linux x64).
// verify:native-calls measured: the addon is loaded at startup by the retrieval
// extension and makes 0 calls in the workload (the GrepClient gate is off in
// local mode). The subset is therefore (1) the loaded module surface and (2)
// GrepClient, the first export a gate change would reach. Each implementation
// runs in a child process with a deadline; results are normalized (sorted file
// order, error class instead of message text) so two implementations compare.
//
//   node desktop/file-service-harness.mjs --original            # characterize the recovered addon
//   node desktop/file-service-harness.mjs --candidate <module>  # characterize a replacement
//   node desktop/file-service-harness.mjs --candidate <module> --compare <result.json>
const root = resolve(import.meta.dirname, '..');
export const originalModule = join(root, 'source/app/extensions/cursor-retrieval/node_modules/@anysphere/file-service');
export const originalCrepectl = join(root, 'source/app/resources/helpers/crepectl');
const workerTimeoutMs = 120000;

// ---------- fixture ----------
export async function createFixture(directory) {
  const repo = join(directory, 'repo');
  const files = {
    'src/alpha.txt': 'alpha needle one\nbeta\nNEEDLE upper\n',
    'src/beta.js': 'export const needle = 1; // needle twice\nconst needles = 2;\n',
    'src/unicode café.txt': 'café needle 日本語\n',
    'src/crlf.txt': 'crlf needle\r\nsecond line\r\n',
    'docs/readme.md': '# Needle docs\nno match here\n',
    'excluded/skip.txt': 'needle in excluded directory\n',
    'ignored.log': 'needle in ignored file\n',
    '.gitignore': '*.log\n',
  };
  for (const [name, text] of Object.entries(files)) { await mkdir(join(repo, name, '..'), { recursive: true }); await writeFile(join(repo, name), text); }
  await writeFile(join(repo, 'src/binary.bin'), Buffer.from([0, 1, 2, 110, 101, 101, 100, 108, 101, 0, 255]));
  // 4 MiB file with one match near the end (huge input).
  await writeFile(join(repo, 'src/huge.txt'), `${'filler line without the word\n'.repeat(150000)}huge needle at the end\n`);
  const git = (...args) => execFileSync('git', ['-c', 'user.email=fixture@openvision.invalid', '-c', 'user.name=fixture', '-c', 'init.defaultBranch=main', ...args], { cwd: repo });
  git('init', '-q'); git('add', '.'); git('commit', '-qm', 'fixture');
  await writeFile(join(repo, 'src/untracked.txt'), 'untracked needle\n'); // worktree change after the commit
  return repo;
}

// ---------- worker: runs inside the child process ----------
const errorClass = error => ({ threw: true, name: error?.name ?? typeof error, code: error?.code ?? null,
  // Normalized: digits and paths removed, first 60 characters.
  message: String(error?.message ?? error).replace(/\/[^\s'"]+/g, '<path>').replace(/\d+/g, 'N').slice(0, 60) });
const sortResult = value => {
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [workspace, result] of Object.entries(value)) {
    out[workspace.endsWith('/repo') ? '<repo>' : workspace] = result && {
      ...result, byFile: [...(result.byFile ?? [])].sort((a, b) => a.file.localeCompare(b.file)) };
  }
  return out;
};

export function surfaceOf(module) {
  return Object.keys(module).sort().map(name => {
    const value = module[name];
    if (typeof value === 'function') return { name, type: 'class', members: Object.getOwnPropertyNames(value.prototype ?? {}).filter(key => key !== 'constructor').sort(),
      statics: Object.getOwnPropertyNames(value).filter(key => !['length', 'name', 'prototype', 'arguments', 'caller'].includes(key)).sort() };
    return { name, type: typeof value, value };
  });
}

async function runWorker(modulePath, repo, crepectl) {
  const fileService = createRequire(import.meta.url)(modulePath);
  const result = { surface: surfaceOf(fileService), constructor: {}, queries: {}, lifecycle: {} };
  const events = { info: () => {}, error: () => {}, trace: () => {}, crepectlInvocation: (_, outcome) => { (result.crepectlInvocations ??= []).push(outcome); } };
  const attempt = fn => { try { return { value: fn() }; } catch (error) { return errorClass(error); } };
  const { GrepClient } = fileService;
  // Malformed construction (each must fail or construct without crashing the process).
  for (const [name, make] of Object.entries({
    noArguments: () => new GrepClient(),
    workspacesNotArray: () => new GrepClient('repo', { crepectlPath: crepectl }, events),
    workspaceMissingPath: () => new GrepClient([{ excludes: [] }], { crepectlPath: crepectl }, events),
    excludesNotArray: () => new GrepClient([{ path: repo, excludes: 'x' }], { crepectlPath: crepectl }, events),
    optionsNull: () => new GrepClient([{ path: repo, excludes: [] }], null, events),
    eventsMissing: () => new GrepClient([{ path: repo, excludes: [] }], { crepectlPath: crepectl }),
  })) {
    const outcome = attempt(make);
    result.constructor[name] = outcome.threw ? outcome : { constructed: true };
    try { outcome.value?.dispose?.(); } catch {}
  }
  const client = new GrepClient([{ path: repo, excludes: ['excluded/**'] }], { crepectlPath: crepectl }, events);
  client.warmup([repo]);
  const query = async (pattern, options, roots = [repo]) => {
    try { return { value: sortResult(await client.query(roots, pattern, options)), unsupported: client.takeLastUnsupportedReason?.() ?? null }; }
    catch (error) { return errorClass(error); }
  };
  // Index readiness: the first queries return null while the index is bootstrapped.
  let ready = false;
  for (let attempt = 0; attempt < 60 && !ready; attempt++) {
    ready = (await query('needle', { literal: true, caseInsensitive: false })).value !== null;
    if (!ready) await new Promise(resolve => setTimeout(resolve, 500));
  }
  result.indexReady = ready;
  const cases = {
    literal: ['needle', { literal: true, caseInsensitive: false }],
    caseInsensitive: ['needle', { literal: true, caseInsensitive: true }],
    regex: ['need(le|les)\\b', { literal: false, caseInsensitive: false }],
    wholeWord: ['needle', { literal: true, caseInsensitive: false, wholeWord: true }],
    include: ['needle', { literal: true, caseInsensitive: false, includes: ['src/**/*.js'] }],
    exclude: ['needle', { literal: true, caseInsensitive: false, excludes: ['src/**'] }],
    maxResults: ['needle', { literal: true, caseInsensitive: true, maxResults: 2 }],
    context: ['beta', { literal: true, caseInsensitive: false, context: 1 }],
    unicode: ['日本語', { literal: true, caseInsensitive: false }],
    hugeFile: ['huge needle', { literal: true, caseInsensitive: false }],
    noMatch: ['absent-token-7f3a', { literal: true, caseInsensitive: false }],
    filesOnly: ['needle', { literal: true, caseInsensitive: false, mode: 'files_only' }],
    count: ['needle', { literal: true, caseInsensitive: false, mode: 'count' }],
    invalidRegex: ['needle(', { literal: false, caseInsensitive: false }],
    emptyPattern: ['', { literal: true, caseInsensitive: false }],
    hugePattern: ['n'.repeat(100000), { literal: true, caseInsensitive: false }],
    optionsWrongType: ['needle', { literal: 'yes' }],
  };
  for (const [name, [pattern, options]] of Object.entries(cases)) result.queries[name] = await query(pattern, options);
  result.queries.unknownRoot = await query('needle', { literal: true, caseInsensitive: false }, ['/nonexistent-openvision-root']);
  result.lifecycle.workspaceStatuses = await client.getWorkspaceStatuses().then(statuses => statuses.map(status => ({ ...status,
    workspacePath: status.workspacePath?.endsWith('/repo') ? '<repo>' : status.workspacePath, ready: status.ready && { pending: status.ready.pending, isDirty: status.ready.isDirty } })), errorClass);
  result.lifecycle.dispose = attempt(() => client.dispose());
  result.lifecycle.disposeTwice = attempt(() => client.dispose());
  result.lifecycle.queryAfterDispose = await query('needle', { literal: true, caseInsensitive: false });
  delete result.lifecycle.dispose.value; delete result.lifecycle.disposeTwice.value;
  return result;
}

// ---------- comparison ----------
export function compareResults(expected, actual, path = '') {
  const differences = [];
  if (typeof expected !== typeof actual || Array.isArray(expected) !== Array.isArray(actual) || (expected === null) !== (actual === null)) {
    differences.push({ path, expected, actual }); return differences;
  }
  if (expected && typeof expected === 'object') {
    for (const key of new Set([...Object.keys(expected), ...Object.keys(actual)])) differences.push(...compareResults(expected[key], actual[key], `${path}/${key}`));
  } else if (expected !== actual) differences.push({ path, expected, actual });
  return differences;
}

// ---------- driver ----------
export async function characterize(modulePath, directory) {
  const repo = await createFixture(directory), output = join(directory, 'worker.json');
  const child = spawn(process.execPath, [fileURLToPath(import.meta.url), '--worker', modulePath, repo, originalCrepectl, output], { stdio: ['ignore', 'inherit', 'inherit'] });
  const timer = setTimeout(() => child.kill('SIGKILL'), workerTimeoutMs); // the owned worker only
  const [code, signal] = await once(child, 'exit'); clearTimeout(timer);
  if (code !== 0) throw Error(`Harness worker failed (${code ?? signal}); see ${directory}`);
  return JSON.parse(await readFile(output, 'utf8'));
}

if (process.argv[2] === '--worker') {
  const [, , , modulePath, repo, crepectl, output] = process.argv;
  const result = await runWorker(modulePath, repo, crepectl);
  await writeFile(output, JSON.stringify(result, null, 2));
  process.exit(0); // native threadsafe callbacks may otherwise keep the worker alive
} else if (import.meta.url === `file://${process.argv[1]}`) {
  const original = process.argv.includes('--original');
  const candidate = process.argv[process.argv.indexOf('--candidate') + 1];
  const baseline = process.argv.includes('--compare') ? process.argv[process.argv.indexOf('--compare') + 1] : undefined;
  assert.ok(original !== process.argv.includes('--candidate'), 'Pass exactly one of --original or --candidate <module>');
  if (process.platform !== 'linux' || process.arch !== 'x64') throw Error('The recovered file-service addon is the Linux x64 build.');
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await realpath(await mkdtemp(join(root, 'logs/file-service-harness-')));
  const modulePath = original ? originalModule : resolve(candidate);
  const result = { checkedAt: new Date().toISOString(), directory, implementation: original ? 'original' : modulePath, node: process.version,
    scope: 'Linux x64; measured subset of @anysphere/file-service: loaded surface and GrepClient on a disposable Git fixture.',
    characterization: await characterize(modulePath, directory) };
  if (baseline) {
    result.differences = compareResults(JSON.parse(await readFile(baseline, 'utf8')).characterization, result.characterization);
    result.equivalent = result.differences.length === 0;
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, implementation: result.implementation, indexReady: result.characterization.indexReady,
    equivalent: result.equivalent, differences: result.differences?.slice(0, 20) }, null, 2));
  if (result.equivalent === false || !result.characterization.indexReady) process.exitCode = 1;
}
