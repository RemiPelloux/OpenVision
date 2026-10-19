import { spawn, execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, readdir, readlink, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { join, resolve } from 'node:path';
import { cpus, totalmem } from 'node:os';
import { loadCriticalSuite, currentPlatform, selectEntries, classifyAttempts, summarize, scriptCommand,
  runDirectories } from './critical-suite.mjs';

const usage = `Usage: npm run verify:critical -- [--subset <name>] [--story OV-xxx]... [--only id,id]
  [--retries <n>] [--low-parallelism] [--list]
Runs the selected critical verifiers one at a time. A verifier that fails and then passes on a
retry is reported as flaky, never as a first-time pass.`;
const root = resolve(import.meta.dirname, '..');
const argv = process.argv.slice(2);
if (argv.includes('--help')) { console.log(usage); process.exit(0); }
const option = name => { const index = argv.indexOf(name); return index < 0 ? undefined : argv[index + 1]; };
const options = {
  subset: option('--subset'), ids: option('--only')?.split(','),
  stories: argv.flatMap((value, index) => argv[index - 1] === '--story' ? [value] : []),
  retries: Number(option('--retries') ?? 1), lowParallelism: argv.includes('--low-parallelism'),
  platform: currentPlatform()
};
if (!Number.isInteger(options.retries) || options.retries < 0 || options.retries > 3) throw Error('--retries must be 0-3');
const suite = await loadCriticalSuite(root);
const { scripts } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const selected = selectEntries(suite, options);
if (!selected.length) throw Error('No critical entries match the selection');
if (argv.includes('--list')) {
  for (const { entry, run, reason } of selected) console.log(`${run ? 'run ' : 'skip'} ${entry.id.padEnd(22)} ${entry.story.padEnd(8)} ${entry.script}${reason ? ` (${reason})` : ''}`);
  process.exit(0);
}

await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/critical-suite-'));
const git = args => { try { return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim(); } catch { return null; } };
const run = { success: false, startedAt: new Date().toISOString(), directory, options,
  host: { platform: process.platform, arch: process.arch, node: process.version, cpus: cpus().length,
    memoryBytes: totalmem(), display: process.env.WAYLAND_DISPLAY ? `wayland:${process.env.WAYLAND_DISPLAY}`
      : process.env.DISPLAY ? `x11:${process.env.DISPLAY}` : null,
    ozonePlatform: process.env.OPENVISION_OZONE_PLATFORM ?? null, desktop: process.env.XDG_CURRENT_DESKTOP ?? null },
  commit: git(['rev-parse', 'HEAD']), dirty: git(['status', '--porcelain'])?.length > 0, results: [] };

// Processes still running from this checkout's runtime after a verifier ended. Identity is the
// executable path, not a PID; the runner only records and waits, it never terminates them.
async function leftoverProcesses() {
  if (process.platform !== 'linux') return [];
  const owned = [join(root, 'electron-host') + '/', join(root, 'logs') + '/'];
  const found = [];
  for (const name of await readdir('/proc')) {
    if (!/^\d+$/.test(name)) continue;
    const executable = await readlink(`/proc/${name}/exe`).catch(() => null);
    if (executable && owned.some(prefix => executable.startsWith(prefix))) found.push({ pid: Number(name), executable });
  }
  return found;
}

async function attempt(entry, number) {
  const { file, args } = scriptCommand(scripts, entry.script);
  const log = join(directory, `${entry.id}-attempt${number}.log`);
  const stream = createWriteStream(log);
  const env = { ...process.env };
  if (options.lowParallelism) Object.assign(env, { UV_THREADPOOL_SIZE: '2', OPENVISION_LOW_PARALLELISM: '1' });
  const command = options.lowParallelism && process.platform === 'linux'
    ? ['nice', ['-n', '10', process.execPath, file, ...args]] : [process.execPath, [file, ...args]];
  const started = Date.now();
  let output = '';
  const exitCode = await new Promise(done => {
    const child = spawn(command[0], command[1], { cwd: root, env, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
    for (const source of [child.stdout, child.stderr]) source.on('data', chunk => {
      stream.write(chunk); output = (output + chunk).slice(-262144);
    });
    child.on('error', error => { stream.write(`\n${error.stack}\n`); done(-1); });
    child.on('close', code => done(code ?? -1));
  });
  await new Promise(done => stream.end(done));
  let leftovers = await leftoverProcesses();
  for (let waited = 0; leftovers.length && options.lowParallelism && waited < 30; waited++) {
    await new Promise(next => setTimeout(next, 1000)); leftovers = await leftoverProcesses();
  }
  if (options.lowParallelism) await new Promise(next => setTimeout(next, 5000));
  return { attempt: number, exitCode, durationMs: Date.now() - started, log, runDirectories: runDirectories(output, root),
    leftoverProcesses: leftovers };
}

for (const { entry, run: runnable, reason } of selected) {
  const result = { id: entry.id, story: entry.story, clause: entry.clause, script: entry.script, attempts: [] };
  if (runnable) {
    for (let number = 1; number <= options.retries + 1; number++) {
      console.error(`[critical] ${entry.id} attempt ${number}`);
      const outcome = await attempt(entry, number);
      result.attempts.push(outcome);
      if (outcome.exitCode === 0) break;
    }
  } else result.reason = reason;
  result.outcome = classifyAttempts(result.attempts);
  console.error(`[critical] ${entry.id}: ${result.outcome}`);
  run.results.push(result);
  await writeFile(join(directory, 'result.json'), JSON.stringify(run, null, 2));
}
run.finishedAt = new Date().toISOString();
run.summary = summarize(run.results);
run.success = run.summary.success;
await writeFile(join(directory, 'result.json'), JSON.stringify(run, null, 2));
const lines = [`# Critical suite ${run.startedAt}`, '', `Commit ${run.commit}${run.dirty ? ' (uncommitted changes)' : ''}; ` +
  `${run.host.platform}-${run.host.arch}; display ${run.host.display ?? 'none'}; ozone ${run.host.ozonePlatform ?? 'auto'}; ` +
  `low parallelism ${options.lowParallelism}; retries ${options.retries}.`, '',
  '| Entry | Story | Script | Outcome | Attempts | Run directories |', '| --- | --- | --- | --- | --- | --- |',
  ...run.results.map(result => `| ${result.id} | ${result.story} | \`${result.script}\` | ${result.outcome}${result.reason ? ` (${result.reason})` : ''} | ` +
    `${result.attempts.map(item => `${item.exitCode} in ${Math.round(item.durationMs / 1000)} s`).join(', ') || '-'} | ` +
    `${[...new Set(result.attempts.flatMap(item => item.runDirectories))].join(', ') || '-'} |`),
  '', `First-time pass ${run.summary.pass}/${run.summary.executed}; flaky ${run.summary.flaky}; failed ${run.summary.fail}; skipped ${run.summary.skipped}.`];
await writeFile(join(directory, 'summary.md'), lines.join('\n') + '\n');
console.log(JSON.stringify({ directory, summary: run.summary, results: run.results.map(({ id, outcome }) => ({ id, outcome })) }, null, 2));
if (!run.success) process.exitCode = 1;
