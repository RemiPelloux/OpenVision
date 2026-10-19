import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export interface HarborConfig {
  port: number;
  databaseUrl: string;
  auth: { issuer: string; signingSecret: string; tokenTtlSeconds: number };
  rateLimit: { capacity: number; refillPerSecond: number };
  uploads: { maxBytes: number };
  cache: { capacity: number; ttlSeconds: number };
  defaultLocale: string;
  featureFlagsFile: string;
}

const ENV_PREFIX = "HARBOR_";

function setPath(target: Record<string, unknown>, path: string[], raw: string): void {
  let node = target;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (typeof node[key] !== "object" || node[key] === null) node[key] = {};
    node = node[key] as Record<string, unknown>;
  }
  const leaf = path[path.length - 1];
  const current = node[leaf];
  if (typeof current === "number") node[leaf] = Number(raw);
  else if (typeof current === "boolean") node[leaf] = raw === "true" || raw === "1";
  else node[leaf] = raw;
}

function snakeToCamel(segment: string): string {
  return segment.toLowerCase().replace(/_([a-z])/g, (_m, c: string) => c.toUpperCase());
}

/**
 * Loads config/default.json, merges config/<env>.json when present, then
 * applies environment overrides such as HARBOR_AUTH__TOKEN_TTL_SECONDS=900
 * (double underscore separates nesting levels).
 */
export function loadConfig(configDir: string, env: NodeJS.ProcessEnv = process.env): HarborConfig {
  const base = JSON.parse(readFileSync(join(configDir, "default.json"), "utf8"));
  const envName = env.HARBOR_ENV ?? "development";
  const envFile = join(configDir, `${envName}.json`);
  const merged = existsSync(envFile) ? deepMerge(base, JSON.parse(readFileSync(envFile, "utf8"))) : base;

  for (const [name, value] of Object.entries(env)) {
    if (!name.startsWith(ENV_PREFIX) || name === "HARBOR_ENV" || value === undefined) continue;
    const path = name.slice(ENV_PREFIX.length).split("__").map(snakeToCamel);
    setPath(merged, path, value);
  }

  if (!merged.auth?.signingSecret || merged.auth.signingSecret === "replace-me-in-env") {
    if (envName === "production") {
      throw new Error("HARBOR_AUTH__SIGNING_SECRET must be set in production");
    }
  }
  return merged as HarborConfig;
}

export function deepMerge<T extends Record<string, unknown>>(base: T, override: Record<string, unknown>): T {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const existing = out[key];
    if (value && typeof value === "object" && !Array.isArray(value) && existing && typeof existing === "object") {
      out[key] = deepMerge(existing as Record<string, unknown>, value as Record<string, unknown>);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}
