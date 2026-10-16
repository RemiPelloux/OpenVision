import { isRegularFile, pathIsOccupied, withoutAbsolutePath } from "./agent-host-storage.js";
import { STATE_VSCDB_PRAGMAS, STATE_VSCDB_TABLES, init_state_vscdb } from "./state-vscdb.js";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to3, from2, except, desc)=>{
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
        for (let key of __getOwnPropNames(from2))if (!__hasOwnProp.call(to3, key) && key !== except) __defProp(to3, key, {
            get: ()=>from2[key],
            enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable
        });
    }
    return to3;
};
var __toESM = (mod2, isNodeMode, target)=>(target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", {
        value: mod2,
        enumerable: true
    }) : target, mod2));
function stateVscdbUpsert(table) {
    return `INSERT INTO ${table} (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value`;
}
function loadNodeSqlite() {
    return process.getBuiltinModule("node:sqlite");
}
function errorCode(error3) {
    if (!(error3 instanceof Error)) {
        return {};
    }
    const code = "code" in error3 ? error3.code : void 0;
    const errcode = "errcode" in error3 ? error3.errcode : void 0;
    return {
        code: typeof code === "string" ? code : void 0,
        sqliteErrcode: typeof errcode === "number" ? errcode : void 0
    };
}
function isThenable(value) {
    return (typeof value === "object" || typeof value === "function") && value !== null && "then" in value && typeof value.then === "function";
}
function readPragma(db, name17) {
    return db.prepare(`PRAGMA ${name17}`).get()?.[name17];
}
function openWithEnvelope(filePath) {
    const db = new (loadNodeSqlite()).DatabaseSync(filePath, {
        enableForeignKeyConstraints: false
    });
    try {
        db.exec(`PRAGMA busy_timeout = ${BUSY_TIMEOUT_MS};`);
        if (readPragma(db, "auto_vacuum") !== 2) {
            db.exec(STATE_VSCDB_PRAGMAS.autoVacuum);
        }
        if (readPragma(db, "user_version") !== 1) {
            db.exec(STATE_VSCDB_PRAGMAS.userVersion);
        }
        db.exec(STATE_VSCDB_PRAGMAS.journalMode + STATE_VSCDB_PRAGMAS.synchronous + STATE_VSCDB_PRAGMAS.walAutocheckpoint + STATE_VSCDB_TABLES.join(""));
        return db;
    } catch (error3) {
        db.close();
        throw error3;
    }
}
function openReadOnly(filePath, relPath) {
    if (pathIsOccupied(filePath) && !isRegularFile(filePath)) {
        throw new AgentHostStoreNotAFileError(relPath);
    }
    const db = new (loadNodeSqlite()).DatabaseSync(filePath, {
        readOnly: true,
        enableForeignKeyConstraints: false
    });
    try {
        db.exec(`PRAGMA busy_timeout = ${BUSY_TIMEOUT_MS};`);
        const envelope = db.prepare("SELECT count(*) AS n FROM sqlite_master WHERE name = 'ItemTable'").get();
        if (readCount(envelope) === 0) {
            throw new AgentHostStoreEmptyError(relPath);
        }
        return db;
    } catch (error3) {
        db.close();
        throw error3;
    }
}
function readCount(row) {
    return typeof row === "object" && row !== null && "n" in row && typeof row.n === "number" ? row.n : 0;
}
function ensurePrivateFile(filePath, relPath) {
    try {
        import_node_fs.default.mkdirSync(import_node_path.default.dirname(filePath), {
            recursive: true,
            mode: 448
        });
        let created = true;
        try {
            import_node_fs.default.writeFileSync(filePath, new Uint8Array(), {
                mode: 384,
                flag: "wx"
            });
        } catch (error3) {
            if (errorCode(error3).code !== "EEXIST") {
                throw error3;
            }
            created = false;
        }
        if (!isRegularFile(filePath)) {
            throw new AgentHostStoreNotAFileError(relPath);
        }
        return created;
    } catch (error3) {
        throw withoutAbsolutePath(error3, relPath);
    }
}
function prefixUpperBound(prefix) {
    const codePoints = Array.from(prefix, (c)=>c.codePointAt(0) ?? 0);
    while(codePoints.length > 0){
        const last = codePoints[codePoints.length - 1];
        if (last < 1114111) {
            const next = last + 1;
            codePoints[codePoints.length - 1] = next >= 55296 && next <= 57343 ? 57344 : next;
            return String.fromCodePoint(...codePoints);
        }
        codePoints.pop();
    }
    return new Uint8Array(0);
}
function assertKey(key) {
    if (key.includes("\0") || !key.isWellFormed()) {
        throw new TypeError(`Key must be well-formed text without NUL: ${JSON.stringify(key)}`);
    }
}
function upsertBindingNullAsEmpty(table) {
    return stateVscdbUpsert(table).replace("VALUES (?, ?)", "VALUES (?, COALESCE(?, X''))");
}
var import_node_fs, import_node_path, BUSY_TIMEOUT_MS, AgentHostStoreEmptyError, AgentHostStoreNotAFileError, RawTable, AgentHostItemTable, AgentHostBlobTable, AgentHostSqliteStore;
export { AgentHostBlobTable, AgentHostItemTable, AgentHostSqliteStore, AgentHostStoreEmptyError, AgentHostStoreNotAFileError, BUSY_TIMEOUT_MS, RawTable, __copyProps, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __toESM, assertKey, ensurePrivateFile, errorCode, import_node_fs, import_node_path, isThenable, loadNodeSqlite, openReadOnly, openWithEnvelope, prefixUpperBound, readCount, readPragma, stateVscdbUpsert, upsertBindingNullAsEmpty };
var __wakaru_init_sqlite_store_initialized = false;
export function init_sqlite_store() {
if (__wakaru_init_sqlite_store_initialized) return;
__wakaru_init_sqlite_store_initialized = true;
"use strict";
import_node_fs = __toESM(require("node:fs"), 1);
import_node_path = __toESM(require("node:path"), 1);
init_state_vscdb();
BUSY_TIMEOUT_MS = 5e3;
AgentHostStoreEmptyError = class extends Error {
    constructor(relPath){
        super(`${relPath} exists but holds no store yet`);
        this.name = "AgentHostStoreEmptyError";
    }
};
AgentHostStoreNotAFileError = class extends Error {
    constructor(relPath){
        super(`${relPath} exists and is not a regular file`);
        this.name = "AgentHostStoreNotAFileError";
    }
};
RawTable = class {
    constructor(db, table, guard){
        this.guard = guard;
        this.getStmt = db.prepare(`SELECT value FROM ${table} WHERE key = ?`);
        this.setStmt = db.prepare(upsertBindingNullAsEmpty(table));
        this.deleteStmt = db.prepare(`DELETE FROM ${table} WHERE key = ?`);
        const range2 = `WHERE key >= ? AND key < ? AND value IS NOT NULL ORDER BY key`;
        this.keysStmt = db.prepare(`SELECT key FROM ${table} ${range2}`);
        this.entriesStmt = db.prepare(`SELECT key, value FROM ${table} ${range2}`);
    }
    get(key) {
        assertKey(key);
        return this.guard(()=>this.getStmt.get(key)?.value ?? void 0);
    }
    set(key, value) {
        assertKey(key);
        this.guard(()=>this.setStmt.run(key, value));
    }
    delete(key) {
        assertKey(key);
        this.guard(()=>this.deleteStmt.run(key));
    }
    keys(prefix) {
        assertKey(prefix);
        return this.guard(()=>this.keysStmt.all(prefix, prefixUpperBound(prefix)).map((row)=>String(row.key)));
    }
    entries(prefix) {
        assertKey(prefix);
        return this.guard(()=>this.entriesStmt.all(prefix, prefixUpperBound(prefix)).map((row)=>({
                    key: String(row.key),
                    value: row.value
                })));
    }
};
AgentHostItemTable = class {
    constructor(raw){
        this.raw = raw;
    }
    get(key) {
        const column = this.raw.get(key);
        return column === void 0 ? void 0 : this.parse(column, key);
    }
    set(key, value) {
        if (value === void 0 || value === null) {
            this.raw.delete(key);
        } else {
            this.raw.set(key, JSON.stringify(value));
        }
    }
    delete(key) {
        this.raw.delete(key);
    }
    keys(prefix = "") {
        return this.raw.keys(prefix);
    }
    entries(prefix = "") {
        return this.raw.entries(prefix).map(({ key, value })=>({
                key,
                value: this.parse(value, key)
            }));
    }
    parse(column, key) {
        const text4 = column instanceof Uint8Array ? new TextDecoder().decode(column) : column;
        if (typeof text4 !== "string") {
            throw new Error(`Unexpected column type for key ${key}`);
        }
        try {
            const value = JSON.parse(text4);
            return value;
        } catch (error3) {
            throw new Error(`Value at key ${key} is not valid JSON`, {
                cause: error3
            });
        }
    }
};
AgentHostBlobTable = class {
    constructor(raw){
        this.raw = raw;
    }
    get(key) {
        const column = this.raw.get(key);
        return column === void 0 ? void 0 : this.bytes(column, key);
    }
    set(key, value) {
        if (!(value instanceof Uint8Array)) {
            throw new TypeError(`Blob for key ${key} must be a Uint8Array`);
        }
        this.raw.set(key, value);
    }
    delete(key) {
        this.raw.delete(key);
    }
    keys(prefix = "") {
        return this.raw.keys(prefix);
    }
    entries(prefix = "") {
        return this.raw.entries(prefix).map(({ key, value })=>({
                key,
                value: this.bytes(value, key)
            }));
    }
    bytes(column, key) {
        if (column instanceof Uint8Array) {
            return column;
        }
        if (typeof column === "string") {
            return new TextEncoder().encode(column);
        }
        throw new Error(`Unexpected column type for key ${key}`);
    }
};
AgentHostSqliteStore = class _AgentHostSqliteStore {
    constructor(db, path64, relPath, created, emit2){
        this.db = db;
        this.path = path64;
        this.relPath = relPath;
        this.created = created;
        this.emit = emit2;
        this.closed = false;
        const guard = (fn)=>this.guard(fn);
        this.items = new AgentHostItemTable(new RawTable(db, "ItemTable", guard));
        this.blobs = new AgentHostBlobTable(new RawTable(db, "cursorDiskKV", guard));
    }
    static open(filePath, options2) {
        return _AgentHostSqliteStore.openWith(filePath, options2, false);
    }
    static openReadOnly(filePath, options2) {
        return _AgentHostSqliteStore.openWith(filePath, options2, true);
    }
    static openWith(filePath, options2, readOnly) {
        const relPath = options2?.relPath ?? import_node_path.default.basename(filePath);
        const { store, observer } = options2 ?? {};
        const emit2 = store !== void 0 && observer !== void 0 ? (event)=>observer({
                ...event,
                store,
                relPath
            }) : ()=>{};
        const startedAt = performance.now();
        let created = false;
        let opened;
        try {
            if (!readOnly) {
                created = ensurePrivateFile(filePath, relPath);
            }
            const db = readOnly ? openReadOnly(filePath, relPath) : openWithEnvelope(filePath);
            try {
                opened = new _AgentHostSqliteStore(db, filePath, relPath, created, emit2);
            } catch (error3) {
                db.close();
                throw error3;
            }
        } catch (error3) {
            emit2({
                kind: "open_failed",
                durationMs: performance.now() - startedAt,
                error: error3,
                ...errorCode(error3)
            });
            throw error3;
        }
        try {
            emit2({
                kind: "opened",
                created,
                durationMs: performance.now() - startedAt
            });
        } catch (error3) {
            opened.close();
            throw error3;
        }
        return opened;
    }
    transaction(fn) {
        return this.guard(()=>this.runTransaction(fn));
    }
    dataVersion() {
        const value = this.guard(()=>readPragma(this.db, "data_version"));
        if (typeof value === "number") {
            return value;
        }
        if (typeof value === "bigint") {
            return Number(value);
        }
        throw new Error(`Unexpected data_version for ${this.relPath}`);
    }
    runTransaction(fn) {
        const startedAt = performance.now();
        let failure2;
        try {
            this.db.exec("BEGIN IMMEDIATE");
            const result = fn();
            if (isThenable(result)) {
                throw new TypeError(`Transaction on ${this.relPath} needs a synchronous callback; it returned a promise`);
            }
            this.guard(()=>this.db.exec("COMMIT"));
            return result;
        } catch (error3) {
            failure2 = {
                outcome: "rolled_back",
                error: error3
            };
            if (!this.closed) {
                try {
                    this.db.exec("ROLLBACK");
                } catch (rollbackError) {
                    if (!(rollbackError instanceof Error) || !rollbackError.message.includes("no transaction is active")) {
                        failure2 = {
                            outcome: "rollback_failed",
                            error: rollbackError
                        };
                        throw new AggregateError([
                            error3,
                            rollbackError
                        ], `Transaction on ${this.relPath} failed and could not roll back`);
                    }
                }
            }
            throw error3;
        } finally{
            this.emit({
                kind: "transaction",
                durationMs: performance.now() - startedAt,
                outcome: failure2?.outcome ?? "committed",
                ...errorCode(failure2?.error)
            });
        }
    }
    get isClosed() {
        return this.closed;
    }
    close() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.db.close();
    }
    guard(fn) {
        if (this.closed) {
            this.emit({
                kind: "closed_store_use"
            });
            throw new Error(`Agent host store ${this.relPath} is closed`);
        }
        return fn();
    }
};

}
