import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseJavaScript } from '../tooling/dependencies.mjs';
import { readableAppDirectory } from './recovered-source.mjs';
import { compileRenameAdapter } from './rename-adapter-fixture.mjs';
import * as current from './rename-version-customization.mjs';
import { fileHash } from './import-files.mjs';

const root = resolve(import.meta.dirname, '..'), run = promisify(execFile);
const baselineRef = '8bc4dfcc530052732297d78e6bad6c4fde4131c9';
const targetCount = 1024, editsPerTarget = 4, warmRuns = 3, setupConcurrency = 16;

async function baseline() {
  const { stdout } = await run('git', ['show', `${baselineRef}:desktop/rename-version-customization.mjs`], { cwd: root });
  let source = stdout;
  const imports = parseJavaScript(source, { ecmaVersion: 'latest', sourceType: 'module' }).body
    .filter(node => node.type === 'ImportDeclaration' && node.source.value.startsWith('.'));
  for (const { source: node } of imports.reverse()) {
    const url = new URL(node.value, pathToFileURL(join(root, 'desktop/baseline.mjs')));
    source = source.slice(0, node.start) + JSON.stringify(url.href) + source.slice(node.end);
  }
  return import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
}

async function measure(mode, directory) {
  const guards = mode === 'baseline' ? await baseline() : current;
  const input = join(readableAppDirectory(), 'out/vs/workbench/api/node/extensionHostProcess.js');
  const source = await readFile(input, 'utf8');
  const guarded = guards.guardRenameDiskChanges(guards.guardRenameVersions(source));
  let calls = 0, active = 0, peak = 0;
  const disk = { promises: { stat: async path => {
    calls++; peak = Math.max(peak, ++active);
    try { return await stat(path); } finally { active--; }
  } } };
  const Adapter = compileRenameAdapter(guarded, { process: { getBuiltinModule: () => disk } });
  const document = { uri: { toString: () => 'source' }, version: 1 };
  const documents = { getDocument: () => document, getAllDocumentData: () => [{ document }],
    getDocumentData: uri => uri === document.uri ? { document } : undefined };
  const targets = Array.from({ length: targetCount }, (_, index) => ({ resource: {
    scheme: 'file', toString: () => `file:${index}`, fsPath: join(directory, String(index)) }, textEdit: {} }));
  const edits = Array.from({ length: editsPerTarget }, () => targets).flat();
  const service = new Adapter(documents, { provideRenameEdits: async () => edits }, {});
  const samples = [];
  for (let iteration = 0; iteration <= warmRuns; iteration++) {
    calls = 0; peak = 0;
    const cpu = process.cpuUsage(), started = performance.now();
    const result = await service.provideRenameEdits(document.uri, {}, 'renamed', { isCancellationRequested: false });
    const elapsedMs = performance.now() - started, used = process.cpuUsage(cpu);
    assert.equal(result.edits?.length, targetCount * editsPerTarget, result.rejectReason);
    assert.equal(calls, targetCount); assert.equal(active, 0);
    samples.push({ phase: iteration ? 'warm' : 'process-cold', elapsedMs,
      cpuMs: (used.user + used.system) / 1000, calls, peakInFlight: peak,
      processHighWaterRssKiB: process.resourceUsage().maxRSS });
  }
  return { mode, inputSha256: await fileHash(input), samples };
}

if (process.argv[2] === '--child') {
  console.log(JSON.stringify(await measure(process.argv[3], process.argv[4])));
} else {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/rename-benchmark-'));
  let next = 0;
  await Promise.all(Array.from({ length: setupConcurrency }, async () => {
    while (next < targetCount) await writeFile(join(directory, String(next++)), 'rename target\n');
  }));
  // Ensure freshly created files precede the conservative 50 ms timestamp guard.
  await new Promise(resolve => setTimeout(resolve, 100));
  const result = { directory, baselineRef, commit: (await run('git', ['rev-parse', 'HEAD'], { cwd: root })).stdout.trim(),
    platform: process.platform, node: process.version, targetCount, editsPerTarget, measurements: [],
    aiRequests: 0, modelTokens: 0,
    limitations: ['Process-cold means a fresh child; OS filesystem caches are uncontrolled.',
      'Child high-water RSS includes recovery parsing/setup; coordinator memory is unmeasured.',
      'This is rename adapter plus real filesystem metadata, not a whole-app benchmark.'] };
  for (const mode of ['baseline', 'current']) {
    const { stdout } = await run(process.execPath, [import.meta.filename, '--child', mode, directory], { cwd: root });
    result.measurements.push(JSON.parse(stdout));
  }
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
