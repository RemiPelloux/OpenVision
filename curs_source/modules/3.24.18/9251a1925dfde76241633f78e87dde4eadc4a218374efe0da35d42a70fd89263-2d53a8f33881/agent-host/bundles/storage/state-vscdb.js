var STATE_VSCDB_PRAGMAS, STATE_VSCDB_TABLES;
export { STATE_VSCDB_PRAGMAS, STATE_VSCDB_TABLES };
var __wakaru_init_state_vscdb_initialized = false;
export function init_state_vscdb() {
if (__wakaru_init_state_vscdb_initialized) return;
__wakaru_init_state_vscdb_initialized = true;
"use strict";
STATE_VSCDB_PRAGMAS = {
    autoVacuum: "PRAGMA auto_vacuum = INCREMENTAL;",
    userVersion: "PRAGMA user_version = 1;",
    journalMode: "PRAGMA journal_mode = WAL;",
    synchronous: "PRAGMA synchronous = NORMAL;",
    walAutocheckpoint: "PRAGMA wal_autocheckpoint = 1000;"
};
STATE_VSCDB_TABLES = [
    "CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);",
    "CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);"
];

}
