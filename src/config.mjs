import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const appRoot = resolve(import.meta.dirname, "..");
const repoRoot = resolve(appRoot, "..");
const defaultPath = resolve(appRoot, "config", "servers.json");
const tokenPattern = /\$\{([A-Z][A-Z0-9_]*)\}/gu;
const idPattern = /^[a-z][a-z0-9_-]{0,63}$/u;
let configQueue = Promise.resolve();

export function paths() {
  return { appRoot, repoRoot, configPath: resolve(process.env.OPENVISION_CONFIG ?? process.env.CURSOR_APP_CONFIG ?? defaultPath) };
}

export function expand(value, env = process.env) {
  return value.replace(tokenPattern, (_, name) => env[name] ?? "");
}

export async function loadConfig() {
  const configPath = paths().configPath;
  const parsed = JSON.parse(await readFile(configPath, "utf8"));
  const config = normalizeConfig(parsed);
  validateConfig(config);
  return { configPath, config };
}

export async function saveConfig(config) {
  validateConfig(config);
  const configPath = paths().configPath;
  await mkdir(dirname(configPath), { recursive: true });
  const temporary = `${configPath}.${process.pid}.${Date.now()}.${Math.random().toString(16).slice(2)}.tmp`;
  await writeFile(temporary, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  await rename(temporary, configPath);
  return configPath;
}

function queueConfig(operation) {
  const pending = configQueue.then(operation);
  configQueue = pending.catch(() => undefined);
  return pending;
}

// Reserve work synchronously from an ordered snapshot; do not hold the queue
// while that work initializes a connection or executes a tool.
export async function selectConfig(select) {
  const { selection } = await queueConfig(async () => ({ selection: select(await loadConfig()) }));
  return selection;
}

export function mutateConfig(mutator, { afterSave } = {}) {
  return queueConfig(async () => {
    const { config } = await loadConfig();
    const result = await mutator(config);
    await saveConfig(config);
    // Keep resource reconciliation ordered with the configuration that produced it.
    await afterSave?.(result);
    return result;
  });
}

export function validateConfig(config) {
  if (!config || config.version !== 2 || typeof config.servers !== "object" || config.servers === null) {
    throw new Error("Configuration must have version 2 and a servers object.");
  }
  for (const [id, server] of Object.entries(config.servers)) validateServer(id, server);
  if (config.apis !== undefined && !Array.isArray(config.apis)) throw new Error("apis must be an array.");
  for (const api of config.apis ?? []) {
    if (!idPattern.test(api.id) || typeof api.baseUrl !== "string") throw new Error("Each API needs a valid id and baseUrl.");
    new URL(api.baseUrl);
  }
  const ai = config.ai;
  if (!ai || typeof ai.enabled !== "boolean" || typeof ai.baseUrl !== "string" || typeof ai.model !== "string" || typeof ai.apiKeyEnv !== "string") {
    throw new Error("ai must define enabled, baseUrl, model, and apiKeyEnv.");
  }
  new URL(ai.baseUrl);
  if (!/^[A-Z][A-Z0-9_]{0,127}$/u.test(ai.apiKeyEnv)) throw new Error("ai.apiKeyEnv must be an environment variable name.");
  if (!Number.isInteger(ai.timeoutMs) || ai.timeoutMs < 1000 || ai.timeoutMs > 600000) throw new Error("ai.timeoutMs must be between 1000 and 600000 milliseconds.");
}

export function normalizeConfig(config) {
  if (config?.version === 2) return config;
  if (config?.version === 1) return { ...config, version: 2, ai: { enabled: false, baseUrl: "http://127.0.0.1:11434/v1", model: "local-model", apiKeyEnv: "OPENVISION_AI_API_KEY", timeoutMs: 60000 } };
  return config;
}

export function validateServer(id, server) {
  const transport = server?.transport ?? "stdio";
  const validStdio = transport === "stdio" && typeof server?.command === "string" && Array.isArray(server?.args);
  const validHttp = transport === "http" && typeof server?.url === "string";
  if (!idPattern.test(id) || !server || server.kind !== "mcp" || (!validStdio && !validHttp)) {
    throw new Error(`Invalid MCP server definition: ${id}`);
  }
  if (validHttp) new URL(server.url);
  if (server.env !== undefined && (typeof server.env !== "object" || server.env === null)) {
    throw new Error(`Invalid environment for MCP server: ${id}`);
  }
  for (const [name, value] of Object.entries(server.env ?? {})) {
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/u.test(name) || typeof value !== "string")
      throw new Error(`Invalid environment entry for MCP server: ${id}`);
  }
}

export function publicConfig(config) {
  return {
    version: config.version,
    servers: Object.fromEntries(
      Object.entries(config.servers).map(([id, server]) => [id, {
        kind: server.kind,
        transport: server.transport ?? "stdio",
        enabled: server.enabled !== false,
        command: server.command,
        args: server.args,
        url: server.url,
        hasEnvironment: Object.keys(server.env ?? {}).length > 0,
      }]),
    ),
    apis: (config.apis ?? []).map(({ id, baseUrl, enabled = true }) => ({ id, baseUrl, enabled })),
    ai: {
      enabled: config.ai.enabled,
      baseUrl: config.ai.baseUrl,
      model: config.ai.model,
      apiKeyEnv: config.ai.apiKeyEnv,
      hasApiKey: Boolean(process.env[config.ai.apiKeyEnv]),
      timeoutMs: config.ai.timeoutMs,
    },
  };
}
