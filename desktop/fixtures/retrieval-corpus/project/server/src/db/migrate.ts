import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { createHash } from "node:crypto";

export interface SqlClient {
  query(text: string, values?: unknown[]): Promise<{ rows: Record<string, unknown>[] }>;
}

export interface MigrationFile {
  version: number;
  name: string;
  sql: string;
  checksum: string;
}

export async function loadMigrations(directory: string): Promise<MigrationFile[]> {
  const files = (await readdir(directory)).filter((f) => /^\d{3}_[a-z0-9_]+\.sql$/.test(f)).sort();
  const migrations: MigrationFile[] = [];
  for (const file of files) {
    const sql = await readFile(join(directory, file), "utf8");
    migrations.push({
      version: Number(file.slice(0, 3)),
      name: file.replace(/\.sql$/, ""),
      sql,
      checksum: createHash("sha256").update(sql).digest("hex"),
    });
  }
  return migrations;
}

/**
 * Applies pending schema migrations inside one transaction each, recording
 * them in schema_migrations. Refuses to continue if an applied file changed.
 */
export async function runMigrations(client: SqlClient, directory: string): Promise<string[]> {
  await client.query(
    `CREATE TABLE IF NOT EXISTS schema_migrations (
       version integer PRIMARY KEY,
       name text NOT NULL,
       checksum text NOT NULL,
       applied_at timestamptz NOT NULL DEFAULT now()
     )`,
  );
  const applied = await client.query("SELECT version, checksum FROM schema_migrations");
  const appliedByVersion = new Map(applied.rows.map((r) => [Number(r.version), String(r.checksum)]));
  const ran: string[] = [];

  for (const migration of await loadMigrations(directory)) {
    const previous = appliedByVersion.get(migration.version);
    if (previous !== undefined) {
      if (previous !== migration.checksum) {
        throw new Error(`migration ${migration.name} was modified after being applied`);
      }
      continue;
    }
    await client.query("BEGIN");
    try {
      await client.query(migration.sql);
      await client.query("INSERT INTO schema_migrations (version, name, checksum) VALUES ($1, $2, $3)", [
        migration.version,
        migration.name,
        migration.checksum,
      ]);
      await client.query("COMMIT");
      ran.push(migration.name);
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    }
  }
  return ran;
}
