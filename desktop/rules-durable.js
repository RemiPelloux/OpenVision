const prefix = 'openvision.user-rule.v1.';
const migrationKey = 'openvision.user-rules.legacy-migrated.v1';

// Called by the native storage IPC owner after it selects and initializes the
// caller's profile/workspace storage. One SQL statement is the commit boundary.
export async function commitRules(owner, request) {
  const { key, value } = request ?? {};
  if (typeof key !== 'string' || (!key.startsWith(prefix) && key !== migrationKey) ||
      (value !== null && typeof value !== 'string')) throw new Error('Invalid OpenVision rule write');
  const storage = owner.storage, database = storage?.database;
  if (owner.isInMemory() || !database?.runParams || !database.whenConnected)
    throw new Error('Persistent OpenVision rule storage is unavailable');
  const connection = await database.whenConnected;
  if (connection.isInMemory !== false || typeof connection.db?.serialize !== 'function')
    throw new Error('Persistent OpenVision rule storage is unavailable');
  let committed;
  // Enqueue exclusively after previously queued native transactions. Their
  // BEGIN/statements/END are enqueued synchronously in serialize callbacks.
  connection.db.serialize(() => {
    committed = value === null
      ? database.runParams(connection, 'DELETE FROM ItemTable WHERE key = ?', [key])
      : database.runParams(connection,
        'INSERT INTO ItemTable (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value', [key, value]);
  });
  await committed;
  // Publish only after SQLite acknowledges the statement. No optimistic entry
  // or pending retry may later overwrite another window's committed version.
  storage.acceptExternal(key, value === null ? undefined : value);
}
