import { execFileSync, spawn } from "node:child_process";
import { mkdtemp, mkdir, writeFile, readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { createHash } from "node:crypto";

const root = resolve(import.meta.dirname, "..");
const workerTimeoutMs = 60_000;
const baseline = execFileSync("git", ["rev-parse", "--verify", `${process.argv[2] ?? "499fc4e"}^{commit}`], { cwd: root, encoding: "utf8" }).trim();
const workloads = process.argv[3] ? [process.argv[3]] : ["normal", "error-recovery"];
if (workloads.some(workload => !["normal", "error-recovery", "manager-reuse"].includes(workload)))
  throw new Error("Unknown MCP benchmark workload.");
await mkdir(join(root, "logs"), { recursive: true });
const directory = await mkdtemp(join(root, "logs/mcp-http-performance-"));
const baselineSource = join(directory, "baseline"); await mkdir(baselineSource);
for (const file of ["mcp.mjs", "config.mjs"])
  await writeFile(join(baselineSource, file), execFileSync("git", ["show", `${baseline}:src/${file}`], { cwd: root }));
if (execFileSync("git", ["show", `${baseline}:src/mcp.mjs`], { cwd: root, encoding: "utf8" }).includes('./mcp-http-response.mjs'))
  await writeFile(join(baselineSource, "mcp-http-response.mjs"), execFileSync("git", ["show", `${baseline}:src/mcp-http-response.mjs`], { cwd: root }));
const sourceDigests = {};
for (const file of ["src/mcp.mjs", "src/mcp-http-response.mjs", "tooling/benchmark-mcp-http-worker.mjs"])
  sourceDigests[file] = createHash("sha256").update(await readFile(join(root, file))).digest("hex");

async function run(modulePath, workload) {
  return new Promise((accept, reject) => {
    const child = spawn(process.execPath, [join(root, "tooling/benchmark-mcp-http-worker.mjs"), modulePath, workload],
      { cwd: root, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    const timer = setTimeout(() => child.kill(), workerTimeoutMs);
    timer.unref();
    let stdout = "", stderr = "";
    child.stdout.setEncoding("utf8"); child.stdout.on("data", text => { stdout += text; });
    child.stderr.setEncoding("utf8"); child.stderr.on("data", text => { stderr += text; });
    child.once("error", error => { clearTimeout(timer); reject(error); });
    child.once("close", code => {
      clearTimeout(timer);
      if (code !== 0) return reject(Error(`Benchmark exited ${code}: ${stderr}`));
      try { accept(JSON.parse(stdout)); } catch (error) { reject(error); }
    });
  });
}

const runs = [];
for (const workload of workloads) {
  for (let repetition = 0; repetition < 3; repetition++) {
    for (const candidate of repetition % 2 ? ["after", "before"] : ["before", "after"]) {
      const modulePath = candidate === "before" ? join(baselineSource, "mcp.mjs") : join(root, "src/mcp.mjs");
      runs.push({ candidate, repetition, ...await run(modulePath, workload) });
    }
  }
}
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const summary = [];
for (const workload of workloads) for (const candidate of ["before", "after"]) {
  const selected = runs.filter(run => run.workload === workload && run.candidate === candidate);
  for (const temperature of ["first", "warm"]) {
    const samples = selected.map(run => run.samples.find(sample => sample.temperature === temperature));
    summary.push({ workload, candidate, temperature, repetitions: samples.length,
      elapsedMs: median(samples.map(sample => sample.elapsedMs)), elapsedRangeMs: [Math.min(...samples.map(s => s.elapsedMs)), Math.max(...samples.map(s => s.elapsedMs))],
      cpuMs: median(samples.map(sample => sample.cpuMs)), peakWorkerRssMiB: median(selected.map(run => run.peakRssKiB / 1024)),
      requests: samples.map(sample => sample.requests), completedTasks: samples[0].completedTasks });
  }
}
const report = { recordedAt: new Date().toISOString(), node: process.version, platform: process.platform, arch: process.arch,
  baseline, sourceDigests, summary, runs, driverPeakRssKiB: process.resourceUsage().maxRSS,
  limits: ["No Electron/native desktop, external provider, account or token measurements", "First means first workload after module loading/initialization; OS cache uncontrolled",
    "Worker RSS is its lifetime OS high-water, including fixture, startup and both temperatures; not per-task allocation or private committed memory",
    "Driver runs one worker at a time; driver high-water is separate, not a simultaneous process-family peak", "Three repetitions are descriptive, not statistical performance guarantees"] };
await writeFile(join(directory, "result.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ report: join(directory, "result.json"), baseline, summary }, null, 2));
