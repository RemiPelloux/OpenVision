// OV-1003 process sampling on Linux x64, controlled condition. The hosted
// `extension_monitor_control` config is enabled through the workbench's own
// test override (`--test-dynamic-configs`, honoured with --enable-smoke-test-driver),
// the state an older profile reached through the anonymous Statsig bootstrap. The
// fixed build must then still run no whole-system scan (main), build, write,
// stash or upload no sample (renderer). `--control` asserts the opposite on an
// unfixed build. Main-process CPU is read from /proc for the owned host only.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { processFamily, electronNames } from './process-family-linux.mjs';

assert.equal(process.platform, 'linux', 'verify:process-sampling reads Linux /proc');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const control = process.argv.includes('--control');
const windowSeconds = Number(process.argv.find(item => item.startsWith('--window-seconds='))?.slice(17) ?? 150);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, `logs/process-sampling-${control ? 'control' : 'fixed'}-`));
const profile = join(directory, 'profile'), project = join(directory, 'project');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(project, 'hello.js'), 'export const answer = 42;\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'workbench.startupEditor': 'none' }));
// The enabled hosted config: 10 s subsamples, a sample every minute, backend reporting on.
const enabled = { extension_monitor_control: { local_enabled: true, backend_reporting_enabled: true,
  network_diagnostics_reporting_enabled: false, subsample_polling_rate_sec: 10, sample_polling_rate_min: 1 } };

const result = { checkedAt: new Date().toISOString(), directory, control, windowSeconds, enabled,
  identity: { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    main: await fileHash(join(appRoot, 'out/main.js')), workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')) },
  scope: 'Controlled condition (--test-dynamic-configs in smoke-test-driver mode); Linux x64 source build; one run.', success: false };
const pause = ms => new Promise(done => setTimeout(done, ms));
const cpu = async pid => { const stat = await readFile(`/proc/${pid}/stat`, 'utf8'); const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
  return (Number(fields[11]) + Number(fields[12])) / 100; };
async function evidence() {
  const lines = [], files = [];
  async function walk(path, visit) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const next = join(path, entry.name); if (entry.isDirectory()) await walk(next, visit); else await visit(next, entry.name);
    }
  }
  await walk(join(profile, 'logs'), async (path, name) => {
    if (name.endsWith('.log')) for (const line of (await readFile(path, 'utf8')).split('\n'))
      if (/Proclist|CursorProclistService/.test(line)) lines.push(line.replace(/^\S+ \S+ /, '').slice(0, 240));
  });
  await walk(join(profile, 'process-monitor'), async (path, name) => {
    if (name.endsWith('.log') || name === 'pending-uploads.json') files.push(path.replace(`${profile}/`, ''));
  });
  return { lines, files };
}
let app;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window', '--disable-updates',
      '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', '--enable-smoke-test-driver',
      `--test-dynamic-configs=${Buffer.from(JSON.stringify(enabled)).toString('base64')}`,
      '--log', 'debug', ...await linuxSandboxArguments(layout.host), project] });
  const page = await app.firstWindow(); page.setDefaultTimeout(30000);
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
  await enterWorkspace(page);
  const pid = app.process().pid;
  await pause(30000); // past the polling owner's deferred start
  const names = await electronNames(app);
  const before = { main: await cpu(pid), at: Date.now(), family: await processFamily({ rootPid: pid, names }) };
  await pause(windowSeconds * 1000);
  const after = { main: await cpu(pid), at: Date.now(), family: await processFamily({ rootPid: pid, names }) };
  const seconds = (after.at - before.at) / 1000;
  result.mainCpuSeconds = Math.round((after.main - before.main) * 100) / 100;
  result.mainCpuSecondsPer10Min = Math.round(result.mainCpuSeconds * 600 / seconds * 100) / 100;
  const prior = new Map(before.family.map(item => [item.pid, item.cpuTicks]));
  result.familyCpuSeconds = Math.round(after.family.filter(item => prior.has(item.pid))
    .reduce((sum, item) => sum + item.cpuTicks - prior.get(item.pid), 0)) / 100;
  result.measuredSeconds = Math.round(seconds);
  const child = app.process(), exited = new Promise(done => child.once('exit', done));
  await app.close(); await Promise.race([exited, pause(30000)]); app = undefined;
  Object.assign(result, await evidence());
  const scanned = result.lines.some(line => line.includes('Config enabled feature'));
  const polled = result.lines.some(line => /Started polling|Samples written|Transport down|Failed to send V2 metrics/.test(line));
  const disabled = result.lines.some(line => line.includes('Local collection disabled by config'));
  result.checks = { scanned, polled, disabled, sampleFiles: result.files.length };
  if (control) { assert.ok(scanned && polled, 'Control must reproduce the 10 s scan and sample polling'); }
  else { assert.ok(!scanned && !polled && result.files.length === 0, 'Process sampling must stay inert'); assert.ok(disabled, 'The polling owner must log its disabled config'); }
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  if (app) await app.close().catch(() => {});
} finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, control, success: result.success, failure: result.failure?.slice(0, 1500), checks: result.checks,
    mainCpuSeconds: result.mainCpuSeconds, mainCpuSecondsPer10Min: result.mainCpuSecondsPer10Min, familyCpuSeconds: result.familyCpuSeconds,
    measuredSeconds: result.measuredSeconds, files: result.files, lines: result.lines?.slice(0, 12) }, null, 2));
  if (!result.success) process.exitCode = 1;
}
