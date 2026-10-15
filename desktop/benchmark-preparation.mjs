import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const exec = promisify(execFile), root = resolve(import.meta.dirname, '..');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/preparation-performance-'));
const baseline = '30eaa08411bad9db3bddf4e8d52a3ab8f3af5cda';
const { stdout } = await exec('git', ['show', `${baseline}:desktop/agent-runtime.cjs`], { cwd: root });
const baselineRuntime = join(directory, 'baseline-runtime.cjs');
await writeFile(baselineRuntime, stdout);
const results = [];
// Sequential isolated workers avoid competing for CPU and memory.
for (const mode of ['baseline', 'candidate']) {
  const { stdout: output } = await exec(process.execPath, ['--expose-gc', 'desktop/benchmark-preparation-worker.mjs', mode, baselineRuntime],
    { cwd: root });
  results.push(JSON.parse(output));
}
const report = { baseline, fixture: '101 simultaneous preparation triggers; 16 MiB unterminated SSE stream',
  limitations: 'Controlled boundaries; no external hook process, inference, full IDE, or model tokens measured. Process peak RSS includes module loading.', results };
await writeFile(join(directory, 'result.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ directory, ...report }, null, 2));
