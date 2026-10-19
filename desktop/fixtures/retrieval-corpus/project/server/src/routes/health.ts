import type { Request, Response } from "../http";
import type { SqlClient } from "../db/migrate";

export interface HealthCheck {
  name: string;
  run(): Promise<void>;
}

export function databaseCheck(db: SqlClient): HealthCheck {
  return {
    name: "database",
    run: async () => {
      await db.query("SELECT 1");
    },
  };
}

async function runWithTimeout(check: HealthCheck, timeoutMs: number): Promise<{ ok: boolean; error?: string; ms: number }> {
  const started = Date.now();
  let timer: NodeJS.Timeout | undefined;
  try {
    await Promise.race([
      check.run(),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("timed out")), timeoutMs);
      }),
    ]);
    return { ok: true, ms: Date.now() - started };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err), ms: Date.now() - started };
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Liveness just says the process is up; readiness checks dependencies. */
export function livenessHandler(_req: Request, res: Response): void {
  res.statusCode = 200;
  res.json({ status: "ok", uptimeSeconds: Math.round(process.uptime()) });
}

export function readinessHandler(checks: HealthCheck[], timeoutMs = 2000) {
  return async function readiness(_req: Request, res: Response): Promise<void> {
    const results: Record<string, unknown> = {};
    let healthy = true;
    for (const check of checks) {
      const result = await runWithTimeout(check, timeoutMs);
      results[check.name] = result;
      healthy &&= result.ok;
    }
    res.statusCode = healthy ? 200 : 503;
    res.json({ status: healthy ? "ready" : "degraded", checks: results });
  };
}
