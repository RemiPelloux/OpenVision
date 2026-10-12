import { spawn } from "node:child_process";
import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { paths } from "./config.mjs";

const blockedCommands = new Set([
  "setup",
  "uninstall",
  "update",
  "install-adb-package",
  "push-adb-file",
  "start-adb-activity",
  "start-adb-app",
  "stop-adb-app",
  "uninstall-adb-package",
]);
const resultCache = new Map();
const inFlight = new Map();
const maxCachedResults = 32;

function runtimeEnvironment() {
  const { repoRoot } = paths();
  const tools = resolve(repoRoot, ".tools");
  return {
    ...process.env,
    REA_NODE_PATH: process.env.REA_NODE_PATH ?? resolve(tools, "node-v24.18.0-win-x64", "node.exe"),
    JAVA_HOME: process.env.JAVA_HOME ?? resolve(tools, "jdk-21.0.12.1+1"),
    GHIDRA_INSTALL_DIR: process.env.GHIDRA_INSTALL_DIR ?? resolve(tools, "ghidra_12.1.4_PUBLIC"),
    REA_JADX_MCP_JAR: process.env.REA_JADX_MCP_JAR ?? resolve(tools, "downloads", "jadx-headless-mcp-0.7.1-all.jar"),
    REA_APKTOOL_COMMAND: process.env.REA_APKTOOL_COMMAND ?? resolve(repoRoot, "apktool-local.cmd"),
    REA_ADB_PATH: process.env.REA_ADB_PATH ?? resolve(tools, "platform-tools", "adb.exe"),
    REA_WABT_BIN_DIRECTORY: process.env.REA_WABT_BIN_DIRECTORY ?? resolve(tools, "wabt-1.0.42", "bin"),
  };
}

function commandFor(env) {
  return env.REA_NODE_PATH && access(env.REA_NODE_PATH).then(() => env.REA_NODE_PATH).catch(() => process.execPath);
}

export async function runRea(args, options = {}) {
  if (!Array.isArray(args) || args.length === 0 || typeof args[0] !== "string") throw new Error("REA args must start with a command.");
  if (!/^[a-z][a-z0-9-]*$/u.test(args[0])) throw new Error("Invalid REA command.");
  if (!options.allowMutations && blockedCommands.has(args[0])) throw new Error(`Blocked mutating REA command: ${args[0]}`);
  const cacheMs = options.cacheMs ?? 0;
  const cacheKey = cacheMs > 0 ? JSON.stringify(args) : null;
  if (cacheKey !== null) {
    const cached = resultCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) return cached.value;
    if (inFlight.has(cacheKey)) return inFlight.get(cacheKey);
  }
  const operation = executeRea(args, options);
  if (cacheKey === null) return operation;
  inFlight.set(cacheKey, operation);
  return operation.then((value) => {
    resultCache.set(cacheKey, { value, expiresAt: Date.now() + cacheMs });
    while (resultCache.size > maxCachedResults) resultCache.delete(resultCache.keys().next().value);
    return value;
  }).finally(() => inFlight.delete(cacheKey));
}

async function executeRea(args, options) {
  const env = runtimeEnvironment();
  const node = await commandFor(env);
  const { repoRoot } = paths();
  const child = spawn(node, [resolve(repoRoot, "scripts", "rea.mjs"), ...args], {
    cwd: repoRoot,
    env: { ...env, PATH: `${resolve(repoRoot, ".tools", "node-v24.18.0-win-x64")};${env.PATH ?? ""}` },
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const timeoutMs = options.timeoutMs ?? 120_000;
  const stdout = [];
  const stderr = [];
  child.stdout.on("data", (chunk) => stdout.push(chunk));
  child.stderr.on("data", (chunk) => stderr.push(chunk));
  const timer = setTimeout(() => child.kill(), timeoutMs);
  const exitCode = await new Promise((resolveExit, reject) => {
    child.once("error", reject);
    child.once("close", (code, signal) => resolveExit({ code, signal }));
  }).finally(() => clearTimeout(timer));
  const output = Buffer.concat(stdout).toString("utf8").trim();
  if (exitCode.code !== 0) throw new Error(Buffer.concat(stderr).toString("utf8").trim() || `REA exited with code ${exitCode.code ?? "unknown"}.`);
  try {
    return JSON.parse(output);
  } catch {
    return { output, exitCode };
  }
}
