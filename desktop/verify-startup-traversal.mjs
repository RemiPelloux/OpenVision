// OV-1003 startup traversal on Linux x64: which owned processes walk the
// workspace before the first window settles, and how often. The launched
// program is strace (so it is the ancestor of every traced process; nothing is
// attached by PID). execve argv attributes each scanner to its owner:
// sandbox preflights, ripgrep by purpose, and the recursive watcher crawl.
// Directory listings (getdents64) on the fixture are counted per owner. A
// declared budget fails the run when exceeded or unmeasured.
import assert from 'node:assert/strict';
import { createReadStream } from 'node:fs';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { classifyScanner, startupBudget, evaluateStartup } from './startup-traversal.mjs';

assert.equal(process.platform, 'linux', 'verify:startup-traversal traces Linux system calls');
assert.notEqual(process.getuid(), 0, 'Run as an unprivileged user');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const settleSeconds = Number(process.argv.find(item => item.startsWith('--settle-seconds='))?.slice(17) ?? 45);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/startup-traversal-'));
const profile = join(directory, 'profile'), roots = ['alpha', 'beta'].map(name => join(directory, name));
const groups = 30, filesPerGroup = 30;

await mkdir(join(profile, 'User'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'workbench.startupEditor': 'none' }));
// Two self-contained roots, each its own Git repository with project rules,
// an ignore file and a TypeScript project, so every startup discovery has work.
for (const [index, project] of roots.entries()) {
  for (let group = 0; group < groups; group++) {
    await mkdir(join(project, `group-${group}`), { recursive: true });
    for (let file = 0; file < filesPerGroup; file++)
      await writeFile(join(project, `group-${group}`, `file-${file}.ts`), `export const v${file} = ${group};\n`);
  }
  await mkdir(join(project, '.cursor/rules'), { recursive: true });
  await writeFile(join(project, '.cursor/rules/style.mdc'), '---\ndescription: fixture\nalwaysApply: true\n---\nUse tabs.\n');
  await writeFile(join(project, 'AGENTS.md'), `Root ${index} agent notes.\n`);
  await writeFile(join(project, '.cursorignore'), 'group-29/\n');
  await writeFile(join(project, 'tsconfig.json'), '{ "compilerOptions": { "strict": true } }\n');
  execFileSync('git', ['init', '-q', project]);
}
await writeFile(join(directory, 'fixture.code-workspace'), JSON.stringify({ folders: roots.map(path => ({ path })) }));

const trace = join(directory, 'strace.log'), traced = join(directory, 'traced-openvision.sh');
await writeFile(traced, `#!/bin/sh\nexec strace -f -qq -ttt -y -s 512 -o '${trace}' -e trace=execve,getdents64,clone,clone3,fork,vfork '${layout.executable}' "$@"\n`, { mode: 0o755 });

const result = { checkedAt: new Date().toISOString(), directory, settleSeconds, budget: startupBudget, errors: [],
  fixture: { roots: roots.length, directoriesPerRoot: groups + 3, filesPerRoot: groups * filesPerGroup + 4 },
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean).length,
    node: process.version, workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
    extensionHost: await fileHash(join(appRoot, 'out/vs/workbench/api/node/extensionHostProcess.js')) },
  scope: 'Linux x64 source build; one traced cold start with a fresh profile; strace slows traced processes.', success: false };
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  const started = Date.now();
  app = await _electron.launch({ executablePath: traced, env, timeout: 120000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes',
      ...await linuxSandboxArguments(layout.host), join(directory, 'fixture.code-workspace')] });
  const page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 120000 });
  await enterWorkspace(page);
  await page.locator('.part.sidebar').getByRole('treeitem').filter({ hasText: 'group-0' }).first().waitFor({ timeout: 60000 });
  result.explorerMs = Date.now() - started;
  await new Promise(done => setTimeout(done, settleSeconds * 1000));
  // Electron's own process names (extensionHost-N, fileWatcher, shared process ...) for attribution.
  const metrics = await app.evaluate(({ app }) => app.getAppMetrics().map(({ pid, type, name, serviceName }) => ({ pid, type, name, serviceName })));
  result.processNames = Object.fromEntries(metrics.map(item => [item.pid, item.name || item.serviceName || item.type]));
  const child = app.process(), exited = new Promise(done => child.once('exit', done));
  await app.close(); await Promise.race([exited, new Promise(done => setTimeout(done, 30000))]);
  app = undefined;
  result.measured = await parseStartupTrace(trace, roots, result.processNames);
  result.outcome = evaluateStartup(startupBudget, result.measured);
  result.success = result.outcome.pass && result.errors.length === 0;
} catch (error) {
  result.failure = error.stack;
  if (app) await app.close().catch(() => {});
} finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, failure: result.failure?.slice(0, 2000), explorerMs: result.explorerMs,
    scanners: result.measured?.scanners, scannerParents: result.measured?.scannerParents, listings: result.measured?.listings, failures: result.outcome?.failures }, null, 2));
  if (!result.success) process.exitCode = 1;
}

async function parseStartupTrace(path, projectRoots, names = {}) {
  const parents = new Map(), owners = new Map(), scanners = {}, listingsByOwner = {}, samples = {}, scannerParents = {};
  // Thread ids map to their process (thread group) through clone; the named
  // ancestor is the Electron process that started a scanner.
  const named = (tid, depth = 0) => names[tid] ?? (parents.has(tid) && depth < 64 ? named(parents.get(tid), depth + 1) : 'unnamed');
  let listings = 0;
  const ownerOf = (tid, depth = 0) => owners.get(tid) ?? (parents.has(tid) && depth < 64 ? ownerOf(parents.get(tid), depth + 1) : 'electron');
  const underRoot = value => projectRoots.some(item => value === item || value.startsWith(`${item}/`));
  for await (const line of createInterface({ input: createReadStream(path) })) {
    const match = line.match(/^(\d+)\s+\d+\.\d+\s+(?:<\.\.\. )?(\w+)/); if (!match) continue;
    const tid = Number(match[1]), call = match[2];
    const created = /^(clone3?|v?fork)$/.test(call) && line.match(/= (\d+)$/);
    if (created && Number(created[1]) > 0) parents.set(Number(created[1]), tid);
    if (call === 'execve' && !line.includes('resumed>') && !/ = -1 /.test(line)) {
      const program = line.match(/execve\("([^"]+)"/)?.[1] ?? '';
      const argv = [...(line.match(/\[(.*)\]/)?.[1] ?? '').matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(item => item[1]);
      const kind = classifyScanner(basename(program), argv);
      owners.set(tid, kind ?? `exec:${basename(program)}`);
      if (kind) { const parent = `${kind} <- ${named(parents.get(tid) ?? tid)}`; scannerParents[parent] = (scannerParents[parent] ?? 0) + 1;
        scanners[kind] = (scanners[kind] ?? 0) + 1; (samples[kind] ??= []).length < 3 && samples[kind].push(argv.slice(0, 24).join(' ')); }
    }
    // A listing of a fixture directory (strace -y prints the descriptor's path).
    const listed = call === 'getdents64' && line.match(/^\S+\s+\S+\s+getdents64\(\d+<([^>]*)>/)?.[1];
    if (listed && underRoot(listed)) {
      const owner = ownerOf(tid); listings++; listingsByOwner[owner] = (listingsByOwner[owner] ?? 0) + 1;
    }
  }
  return { scanners, scannerParents, scannerSamples: samples, listings: { total: listings, byOwner: listingsByOwner } };
}
