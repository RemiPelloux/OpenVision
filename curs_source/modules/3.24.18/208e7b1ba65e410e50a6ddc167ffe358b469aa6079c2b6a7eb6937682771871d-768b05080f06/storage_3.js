import { Vl, le } from "./async.js";
import { Em, Ve, kt } from "./errors.js";
import { O, se } from "./event.js";
import { En } from "./lifecycleMainService.js";
import { mr } from "./map.js";
import { Jt } from "./network.js";
import { Ce, _t, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { ee, oe } from "./platform.js";
import { t8 } from "./stickyArchiveRowMerge.js";
import { cC } from "./storage.js";
import { $6, V6, ad, dC, fp, gp, mC } from "./storageSizeBreakdown.js";
import { j5e } from "./storageSizeScanChild.js";
import { z5e } from "./storageSizeScanRunner.js";
import { h } from "./tslib.es6.js";
import * as Li from "fs";
import { fork as V5e } from "child_process";
import { tmpdir as n8 } from "os";
function Cs(e) {
    return e instanceof kt ? !0 : e instanceof Error && e.name === Em && e.message === Em;
}
function mUe(e) {
    const t = [];
    return e.forEach((n, r)=>{
        t.push(`${r} => ${n}`);
    }), `Map(${e.size}) {${t.join(", ")}}`;
}
function pUe(e) {
    const t = [];
    return e.forEach((n)=>{
        t.push(n);
    }), `Set(${e.size}) {${t.join(", ")}}`;
}
function M5e(e) {
    return e === "composerHeaders" ? "composerIndex" : "otherKv";
}
function O6() {
    return "LENGTH(key) + COALESCE(LENGTH(value), 0)";
}
function L6(e, t) {
    const n = dC.flatMap((s)=>s.prefixes.map((i)=>`${e} GLOB '${U6(i)}*'`));
    if (t === "otherKv") return n.length === 0 ? "1" : `NOT (${n.join(" OR ")})`;
    const r = dC.find((s)=>s.id === t);
    if (r) return r.prefixes.map((s)=>`${e} GLOB '${U6(s)}*'`).join(" OR ");
}
function lC(e, t) {
    const n = new Map;
    for (const s of e.categories)n.set(s.id, s);
    const r = t.fileBytes > 0;
    r && (n.delete("wal"), n.delete("sqliteFree"), n.delete("sqliteOverhead"));
    for (const s of t.categories)n.set(s.id, s);
    return {
        fileBytes: r ? t.fileBytes : e.fileBytes,
        walBytes: r ? t.walBytes : e.walBytes,
        freeBytes: r ? t.freeBytes : e.freeBytes,
        categories: [
            ...n.values()
        ]
    };
}
function D5e(e) {
    const t = e.categories.filter((s)=>s.id !== "sqliteFree" && s.id !== "wal" && s.id !== "sqliteOverhead").reduce((s, i)=>s + i.bytes, 0), n = Math.max(0, e.fileBytes - e.freeBytes), r = Math.max(0, n - t);
    return r <= 0 ? {
        ...e,
        categories: e.categories.filter((s)=>s.id !== "sqliteOverhead")
    } : lC(e, {
        fileBytes: 0,
        walBytes: 0,
        freeBytes: 0,
        categories: [
            {
                id: "sqliteOverhead",
                bytes: r,
                keyCount: 0
            }
        ]
    });
}
function U6(e) {
    return e.replaceAll("'", "''").replaceAll("[", "[[]").replaceAll("*", "[*]").replaceAll("?", "[?]");
}
function X6(e) {
    return e.lastUpdatedAt ?? e.createdAt ?? 0;
}
function Q6(e) {
    return e.isArchived === !0;
}
function Z6(e) {
    return e.isArchived === !1;
}
function e8(e, t) {
    const n = Q6(e), r = Q6(t);
    if (r && !n && !Z6(e)) return !1;
    if (n && !r && !Z6(t)) return !0;
    const s = X6(e), i = X6(t);
    return s !== i ? s > i : n !== r ? n : !0;
}
function $5e(e, t) {
    let n, r = !1, s = !1, i;
    const a = ()=>{
        s = !0, i !== void 0 && (clearTimeout(i), i = void 0), n && !n.killed && n.kill();
    };
    return {
        promise: new Promise((l, d)=>{
            try {
                const m = Jt.asFileUri("bootstrap-fork").fsPath, f = {
                    ...process.env,
                    VSCODE_ESM_ENTRYPOINT: "vs/base/parts/storage/node/storageSizeScanMain",
                    VSCODE_STORAGE_SIZE_SCAN_PATH: e,
                    VSCODE_PIPE_LOGGING: "true",
                    VSCODE_VERBOSE_LOGGING: "false",
                    VSCODE_PROCESS_TITLE: t ? `storage-size-scan:${t}` : "storage-size-scan"
                };
                t && (f.VSCODE_STORAGE_SIZE_SCAN_CATEGORY = t), n = V5e(m, [
                    "--type=storageSizeScan"
                ], {
                    env: f,
                    stdio: [
                        "ignore",
                        "ignore",
                        "ignore",
                        "ipc"
                    ]
                });
            } catch (m) {
                return d(m);
            }
            i = setTimeout(()=>{
                u(new Error(`Storage size scan timed out after ${mC}ms`)), n && !n.killed && n.kill();
            }, mC);
            const u = (m, f)=>{
                if (!r) {
                    if (r = !0, i !== void 0 && (clearTimeout(i), i = void 0), m) {
                        d(s ? new kt : m);
                        return;
                    }
                    l(f);
                }
            };
            n.on("message", (m)=>{
                if (!(!m || typeof m != "object")) {
                    if ("ok" in m && m.ok === !0 && "breakdown" in m) {
                        u(void 0, m.breakdown);
                        return;
                    }
                    "ok" in m && m.ok === !1 && "error" in m && u(new Error(String(m.error)));
                }
            }), n.on("error", (m)=>u(m)), n.on("exit", (m, f)=>{
                if (!r) {
                    if (s) {
                        u(new kt);
                        return;
                    }
                    u(new Error(`Storage size scan exited (code=${m}, signal=${f})`));
                }
            });
        }),
        kill: a
    };
}
function H5e(e) {
    return {
        get: (t, n = [])=>new Promise((r, s)=>{
                e.get(t, n, (i, a)=>{
                    if (i) return s(i);
                    r(a);
                });
            }),
        exec: (t)=>new Promise((n, r)=>{
                e.exec(t, (s)=>{
                    if (s) return r(s);
                    n();
                });
            }),
        close: ()=>new Promise((t)=>{
                e.close(()=>t());
            })
    };
}
async function q5e(e, t) {
    const n = L6("key", t);
    if (!n) return {
        id: t,
        bytes: 0,
        keyCount: 0
    };
    const r = await e.get(`SELECT COUNT(*) AS keyCount, COALESCE(SUM(${O6()}), 0) AS bytes FROM cursorDiskKV WHERE ${n}`);
    return {
        id: t,
        bytes: Number(r?.bytes ?? 0),
        keyCount: Number(r?.keyCount ?? 0)
    };
}
async function K5e(e, t = gp) {
    const n = [];
    for (const r of t){
        const s = await q5e(e, r);
        (s.bytes > 0 || s.keyCount > 0) && n.push(s);
    }
    return n;
}
function Y5e() {
    const e = [];
    for (const [t, n] of Object.entries(nk)){
        const r = n.columns.map((s)=>`${s.name} ${s.type}`).join(", ");
        e.push(`CREATE TABLE IF NOT EXISTS ${t} (${n.pkColumn} TEXT PRIMARY KEY, ${r}, value TEXT);`), n.indexes.forEach((s, i)=>{
            e.push(`CREATE INDEX IF NOT EXISTS idx_${t}_${i} ON ${t} (${s.join(", ")});`);
        });
    }
    return e;
}
function r8(e) {
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(e);
}
function s8(e) {
    return `"${e.replaceAll('"', '""')}"`;
}
async function i8(e) {
    const t = await Li.promises.statfs(e);
    return t.bavail * t.bsize;
}
async function J5e(e) {
    try {
        return (await Li.promises.stat(e)).isDirectory() ? (await Li.promises.access(e, Li.constants.W_OK | Li.constants.X_OK), !0) : !1;
    } catch  {
        return !1;
    }
}
async function X5e(e = process.env) {
    if (ee) return n8();
    for (const t of [
        e.SQLITE_TMPDIR,
        e.TMPDIR,
        "/var/tmp",
        "/usr/tmp",
        "/tmp",
        "."
    ])if (t && await J5e(t)) return t;
    return n8();
}
var nk, a8, Gr, Sp, TC, o8;
export { $5e, Cs, D5e, Gr, H5e, J5e, K5e, L6, M5e, O6, Q6, Sp, TC, U6, X5e, X6, Y5e, Z6, a8, e8, i8, lC, mUe, nk, o8, pUe, q5e, r8, s8 };
var __wakaru_Q5e_initialized = false;
export function Q5e() {
if (__wakaru_Q5e_initialized) return;
__wakaru_Q5e_initialized = true;
"use strict";
h(), le(), Ve(), se(), mr(), Ce(), oe(), gn(), fp(), t8(), j5e(), z5e(), nk = {
    composerHeaders: {
        pkColumn: "composerId",
        columns: [
            {
                name: "workspaceId",
                type: "TEXT"
            },
            {
                name: "createdAt",
                type: "INTEGER"
            },
            {
                name: "lastUpdatedAt",
                type: "INTEGER"
            },
            {
                name: "isArchived",
                type: "INTEGER"
            },
            {
                name: "isSubagent",
                type: "INTEGER"
            },
            {
                name: "recency",
                type: "INTEGER"
            },
            {
                name: "checkpointAt",
                type: "INTEGER"
            },
            {
                name: "subagentTypeName",
                type: "TEXT"
            }
        ],
        indexes: [
            [
                "workspaceId",
                "isSubagent",
                "isArchived",
                "recency"
            ],
            [
                "recency",
                "composerId"
            ]
        ],
        conflictStrategy: "stickyArchiveRecency"
    }
}, a8 = class extends Error {
}, Gr = class Pt {
    constructor(t, n = Object.create(null)){
        this.path = t, this.options = n, this.scanEpoch = 0, this.scanChildKills = new Set, this.heavyInProcessScanTail = Promise.resolve(), this.closed = !1, this.lastCursorKVKeys = [], this.statsQueryCount = 0, this.statsTotalTimeMs = 0, this.statsMaxTimeMs = 0, this.statsTimingBuckets = [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], this.name = _t(this.path), this.logger = new o8(n.logging), this.whenConnected = this.connect(this.path);
    }
    get onDidChangeItemsExternal() {
        return O.None;
    }
    classifySQL(t) {
        const n = t.trim().replace(/\s+/g, " ").toLowerCase();
        return n === "begin transaction" ? "transaction_begin" : n === "end transaction" || n === "commit" ? "transaction_end" : n.startsWith("pragma incremental_vacuum") ? "pragma_incremental_vacuum" : n === "vacuum" ? "vacuum" : n.startsWith("pragma ") ? "pragma" : n.startsWith("create table") ? "create_table" : n.includes("cursordiskkv") ? n.startsWith("select key") && n.includes("where key >= ? and key < ?") ? "cursor_kv_prefix_scan" : n.startsWith("select") ? "cursor_kv_get" : n.startsWith("insert") ? "cursor_kv_upsert" : n.startsWith("delete") ? n.includes("where key >= ? and key < ?") || n.includes("where key like ? || '%'") ? "cursor_kv_prefix_delete" : n === "delete from cursordiskkv" ? "cursor_kv_clear_all" : "cursor_kv_delete" : "cursor_kv_other" : n.includes("itemtable") ? n.startsWith("select") ? "item_table_load" : n.startsWith("insert") ? "item_table_upsert" : n.startsWith("delete") ? "item_table_delete" : "item_table_other" : "other";
    }
    trackCursorKVKey(t) {
        this.lastCursorKVKeys.push(t), this.lastCursorKVKeys.length > Pt.MAX_LAST_CURSOR_KV_KEYS && this.lastCursorKVKeys.shift();
    }
    isAsciiString(t) {
        for(let n = 0; n < t.length; n++)if (t.charCodeAt(n) > 127) return !1;
        return !0;
    }
    collectionSchema(t) {
        const n = nk[t];
        if (!n) throw new Error(`[storage ${this.name}] unknown collection: ${t}`);
        return n;
    }
    collectionInsertSQL(t, n) {
        const r = [
            n.pkColumn,
            ...n.columns.map((a)=>a.name),
            "value"
        ], s = r.map(()=>"?").join(", "), i = [
            ...n.columns.map((a)=>a.name),
            "value"
        ].map((a)=>`${a} = excluded.${a}`).join(", ");
        return `INSERT INTO ${t} (${r.join(", ")}) VALUES (${s}) ON CONFLICT(${n.pkColumn}) DO UPDATE SET ${i}`;
    }
    collectionRowParams(t, n) {
        return [
            n.pk,
            ...t.columns.map((r)=>n.columns[r.name] ?? null),
            n.value
        ];
    }
    collectionPrefers(t, n, r) {
        if (t.conflictStrategy === "stickyArchiveRecency") try {
            return e8(JSON.parse(n), JSON.parse(r));
        } catch  {
            return !0;
        }
        return !0;
    }
    async collectionBulkInsert(t, n) {
        if (n.length === 0) return;
        const r = this.collectionSchema(t), s = await this.whenConnected, i = this.collectionInsertSQL(t, r);
        try {
            await this.transaction(s, ()=>{
                for (const a of n)s.db.run(i, this.collectionRowParams(r, a));
            });
        } catch (a) {
            throw this.logger.error(`[storage ${this.name}] collectionBulkInsert(${t}): ${a}`), a;
        }
    }
    async collectionUpsertIfPreferred(t, n) {
        const r = [];
        if (n.length === 0) return {
            applied: 0,
            rejected: r
        };
        const s = this.collectionSchema(t), i = await this.whenConnected, a = `SELECT value FROM ${t} WHERE ${s.pkColumn} = ?`, o = [];
        for (const l of n){
            const d = await this.getParams(i, a, [
                l.pk
            ]);
            !d || typeof d.value != "string" || this.collectionPrefers(s, l.value, d.value) ? o.push(l) : r.push(l.pk);
        }
        if (o.length > 0) {
            const l = this.collectionInsertSQL(t, s);
            try {
                await this.transaction(i, ()=>{
                    for (const d of o)i.db.run(l, this.collectionRowParams(s, d));
                });
            } catch (d) {
                throw this.logger.error(`[storage ${this.name}] collectionUpsertIfPreferred(${t}): ${d}`), d;
            }
        }
        return {
            applied: o.length,
            rejected: r
        };
    }
    async collectionDeleteMany(t, n) {
        if (n.length === 0) return;
        const r = this.collectionSchema(t), s = await this.whenConnected, i = `DELETE FROM ${t} WHERE ${r.pkColumn} = ?`;
        try {
            await this.transaction(s, ()=>{
                for (const a of n)s.db.run(i, [
                    a
                ]);
            });
        } catch (a) {
            throw this.logger.error(`[storage ${this.name}] collectionDeleteMany(${t}): ${a}`), a;
        }
    }
    async collectionQuery(t, n) {
        const r = this.collectionSchema(t), s = await this.whenConnected, i = new Set([
            r.pkColumn,
            ...r.columns.map((d)=>d.name)
        ]), a = [];
        let o = `SELECT value FROM ${t}`;
        const l = n?.where ? Object.entries(n.where) : [];
        if (l.length > 0) {
            const d = [];
            for (const [u, m] of l){
                if (!i.has(u)) throw new Error(`[storage ${this.name}] collectionQuery(${t}): unknown column ${u}`);
                d.push(`${u} = ?`), a.push(m);
            }
            o += ` WHERE ${d.join(" AND ")}`;
        }
        if (n?.orderByDesc) {
            if (!i.has(n.orderByDesc)) throw new Error(`[storage ${this.name}] collectionQuery(${t}): unknown orderBy ${n.orderByDesc}`);
            o += ` ORDER BY ${n.orderByDesc} DESC, ${r.pkColumn} DESC`;
        }
        if (n?.limit !== void 0) {
            if (!Number.isInteger(n.limit) || n.limit < 0) throw new Error(`[storage ${this.name}] collectionQuery(${t}): invalid limit ${n.limit}`);
            o += " LIMIT ?", a.push(n.limit);
        }
        try {
            return (await this.allParams(s, o, a)).map((u)=>u.value).filter((u)=>typeof u == "string");
        } catch (d) {
            return this.logger.error(`[storage ${this.name}] collectionQuery(${t}): ${d}`), [];
        }
    }
    async cursorDiskKVGet(t, n) {
        n?.(`[storage ${this.name}] cursorDiskKVGet: ${t}`);
        const r = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            const s = await this.getParams(r, "SELECT value FROM cursorDiskKV WHERE key = ?", [
                t
            ]);
            if (!s) {
                n?.(`[storage ${this.name}] cursorDiskKVGet: ${t} res=undefined`);
                return;
            }
            const i = s.value;
            if (i == null || typeof i != "string") {
                n?.(`[storage ${this.name}] cursorDiskKVGet: ${t} res=${typeof i}`);
                return;
            }
            return i;
        } catch (s) {
            n?.(`[storage ${this.name}] cursorDiskKVGet: ${t} error=${s.stack}`), this.logger.error(`[storage ${this.name}] cursorDiskKVGet(${t}): ${s}`);
            return;
        }
    }
    async cursorDiskKVGetWithLogs(t) {
        const n = [];
        return {
            result: await this.cursorDiskKVGet(t, (s)=>n.push(`${Date.now()} ${s}`)),
            logs: n
        };
    }
    async cursorDiskKVGetBatch(t) {
        const n = await this.whenConnected, r = [];
        if (t.length === 0) return r;
        for (const s of t.slice(0, 5))this.trackCursorKVKey(s);
        try {
            for(let i = 0; i < t.length; i += 500){
                const a = t.slice(i, i + 500), l = `SELECT key, value FROM cursorDiskKV WHERE key IN (${a.map(()=>"?").join(",")})`, d = await this.allParams(n, l, a);
                for (const u of d)u.value !== void 0 && u.value !== null && typeof u.value == "string" && r.push([
                    u.key,
                    u.value
                ]);
            }
            return r;
        } catch (s) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVGetBatch(): ${s}`), s;
        }
    }
    async cursorDiskKVSet(t, n) {
        if (n == null) return this.cursorDiskKVDelete(t);
        const r = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            await this.runParams(r, "INSERT INTO cursorDiskKV (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value", [
                t,
                n
            ]);
        } catch (s) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVSet(${t}): ${s}`), s;
        }
    }
    async cursorDiskKVSetIfAbsent(t, n) {
        const r = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            return await this.afterAtomicBatch(()=>new Promise((s, i)=>{
                    r.db.run("INSERT INTO cursorDiskKV (key, value) SELECT ?, ? WHERE NOT EXISTS (SELECT 1 FROM cursorDiskKV WHERE key = ?)", [
                        t,
                        n,
                        t
                    ], function(a) {
                        if (a) return i(a);
                        s(this.changes === 1);
                    });
                }));
        } catch (s) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVSetIfAbsent(${t}): ${s}`), s;
        }
    }
    async cursorDiskKVReplaceIfEquals(t, n, r) {
        const s = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            return await this.afterAtomicBatch(()=>new Promise((i, a)=>{
                    s.db.run("UPDATE cursorDiskKV SET value = ? WHERE key = ? AND value = ?", [
                        r,
                        t,
                        n
                    ], function(o) {
                        if (o) return a(o);
                        i(this.changes === 1);
                    });
                }));
        } catch (i) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVReplaceIfEquals(${t}): ${i}`), i;
        }
    }
    async cursorDiskKVDelete(t, n) {
        const r = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            n !== void 0 ? await this.runParams(r, "DELETE FROM cursorDiskKV WHERE key = ? AND value = ?", [
                t,
                n
            ]) : await this.runParams(r, "DELETE FROM cursorDiskKV WHERE key = ?", [
                t
            ]);
        } catch (s) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVDelete(${t}): ${s}`), s;
        }
    }
    async cursorDiskKVSetBinary(t, n) {
        const r = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            await this.runParams(r, "INSERT INTO cursorDiskKV (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value != excluded.value", [
                t,
                Buffer.from(n)
            ]);
        } catch (s) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVSetBinary(${t}): ${s}`), s;
        }
    }
    async cursorDiskKVSetBinaryBatch(t) {
        const n = await this.whenConnected;
        if (t.length !== 0) {
            for (const [r] of t.slice(0, 5))this.trackCursorKVKey(r);
            try {
                const r = Math.max(1, Math.floor(Pt.MAX_HOST_PARAMETERS / 2));
                await this.transaction(n, ()=>{
                    for(let s = 0; s < t.length; s += r){
                        const i = t.slice(s, s + r), a = [];
                        for (const [o, l] of i)a.push(o, Buffer.from(l));
                        this.prepare(n, `INSERT INTO cursorDiskKV (key, value) VALUES ${new Array(i.length).fill("(?, ?)").join(",")} ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value != excluded.value`, (o)=>o.run(a), ()=>`Entries: ${i.length}`);
                    }
                });
            } catch (r) {
                throw this.logger.error(`[storage ${this.name}] cursorDiskKVSetBinaryBatch(): ${r}`), r;
            }
        }
    }
    async cursorDiskKVSetBatch(t, n) {
        const r = await this.whenConnected, s = new Map(t);
        if (s.size === 0) return !0;
        const i = [], a = [];
        for (const [l, d] of s)d === void 0 ? a.push(l) : i.push([
            l,
            d
        ]);
        for (const [l] of t.slice(0, 5))this.trackCursorKVKey(l);
        const o = new a8;
        try {
            const l = Math.max(1, Math.floor(Pt.MAX_HOST_PARAMETERS / 2));
            return await this.transactionAtomic(r, (d)=>{
                n && this.prepare(r, "SELECT CASE WHEN json_valid(value) THEN json_extract(value, ?) END AS observed FROM cursorDiskKV WHERE key = ?", (u)=>u.get([
                        n.jsonPath,
                        n.key
                    ], (m, f)=>{
                        m ? d(m) : f?.observed !== n.equals && d(o);
                    }), ()=>`Precondition: ${n.key} ${n.jsonPath}`, d);
                for(let u = 0; u < i.length; u += l){
                    const m = i.slice(u, u + l);
                    this.prepare(r, `INSERT INTO cursorDiskKV (key, value) VALUES ${new Array(m.length).fill("(?, ?)").join(",")} ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value`, (f)=>f.run(m.flat()), ()=>`Entries: ${m.length}`, d);
                }
                for(let u = 0; u < a.length; u += Pt.MAX_HOST_PARAMETERS){
                    const m = a.slice(u, u + Pt.MAX_HOST_PARAMETERS);
                    this.prepare(r, `DELETE FROM cursorDiskKV WHERE key IN (${new Array(m.length).fill("?").join(",")})`, (f)=>f.run(m), ()=>`Keys: ${m.length}`, d);
                }
            }), !0;
        } catch (l) {
            if (l === o) return !1;
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVSetBatch(): ${l}`), l;
        }
    }
    async cursorDiskKVGetBinary(t) {
        const n = await this.whenConnected;
        this.trackCursorKVKey(t);
        try {
            const r = await this.getParams(n, "SELECT value FROM cursorDiskKV WHERE key = ?", [
                t
            ]);
            if (!r) return;
            const s = r.value;
            return s == null ? void 0 : Buffer.isBuffer(s) ? new Uint8Array(s) : void 0;
        } catch (r) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVGetBinary(${t}): ${r}`), r;
        }
    }
    async cursorDiskKVClearPrefix(t) {
        const n = await this.whenConnected;
        this.trackCursorKVKey(`prefix:${t}`);
        try {
            if (t.length === 0) {
                await this.runParams(n, "DELETE FROM cursorDiskKV", []);
                return;
            }
            if (this.isAsciiString(t)) {
                const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1)}${String.fromCharCode(r + 1)}`;
                await this.runParams(n, "DELETE FROM cursorDiskKV WHERE key >= ? AND key < ?", [
                    t,
                    s
                ]);
                return;
            }
            await this.runParams(n, "DELETE FROM cursorDiskKV WHERE key LIKE ? || '%'", [
                t
            ]);
        } catch (r) {
            throw this.logger.error(`[storage ${this.name}] cursorDiskKVClearPrefix(${t}): ${r}`), r;
        }
    }
    async cursorDiskKVGetPrefix(t) {
        const n = await this.whenConnected;
        this.trackCursorKVKey(`prefix:${t}`);
        try {
            if (t.length === 0) throw new Error("cursorDiskKVGetPrefix requires a non-empty prefix");
            if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefix requires an ASCII-only prefix");
            const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1)}${String.fromCharCode(r + 1)}`;
            return (await this.allParams(n, "SELECT key, value FROM cursorDiskKV WHERE key >= ? AND key < ?", [
                t,
                s
            ])).filter((a)=>typeof a.value == "string").map((a)=>[
                    a.key,
                    a.value
                ]);
        } catch (r) {
            return this.logger.error(`[storage ${this.name}] cursorDiskKVGetPrefix(${t}): ${r}`), [];
        }
    }
    async cursorDiskKVGetPrefixKeys(t) {
        const n = await this.whenConnected;
        this.trackCursorKVKey(`prefixKeys:${t}`);
        try {
            if (t.length === 0) throw new Error("cursorDiskKVGetPrefixKeys requires a non-empty prefix");
            if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefixKeys requires an ASCII-only prefix");
            const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1)}${String.fromCharCode(r + 1)}`;
            return (await this.allParams(n, "SELECT key FROM cursorDiskKV WHERE key >= ? AND key < ?", [
                t,
                s
            ])).map((a)=>a.key);
        } catch (r) {
            return this.logger.error(`[storage ${this.name}] cursorDiskKVGetPrefixKeys(${t}): ${r}`), [];
        }
    }
    async cursorDiskKVGetPrefixBinary(t) {
        const n = await this.whenConnected;
        this.trackCursorKVKey(`prefixBinary:${t}`);
        try {
            if (t.length === 0) throw new Error("cursorDiskKVGetPrefixBinary requires a non-empty prefix");
            if (!this.isAsciiString(t)) throw new Error("cursorDiskKVGetPrefixBinary requires an ASCII-only prefix");
            const r = t.charCodeAt(t.length - 1), s = `${t.slice(0, -1)}${String.fromCharCode(r + 1)}`, i = await this.allParams(n, "SELECT key, value FROM cursorDiskKV WHERE key >= ? AND key < ?", [
                t,
                s
            ]), a = [];
            for (const o of i){
                const l = o.value;
                Buffer.isBuffer(l) && a.push([
                    o.key,
                    new Uint8Array(l)
                ]);
            }
            return a;
        } catch (r) {
            return this.logger.error(`[storage ${this.name}] cursorDiskKVGetPrefixBinary(${t}): ${r}`), [];
        }
    }
    async getItems() {
        const t = await this.whenConnected, n = new Map;
        return (await this.all(t, "SELECT * FROM ItemTable")).forEach((s)=>n.set(s.key, s.value)), this.logger.isTracing && this.logger.trace(`[storage ${this.name}] getItems(): ${n.size} rows`), n;
    }
    async updateItems(t) {
        const n = await this.whenConnected;
        return this.doUpdateItems(n, t);
    }
    doUpdateItems(t, n) {
        return this.logger.isTracing && this.logger.trace(`[storage ${this.name}] updateItems(): insert(${n.insert ? mUe(n.insert) : "0"}), delete(${n.delete ? pUe(n.delete) : "0"})`), this.transaction(t, ()=>{
            const r = n.insert, s = n.delete;
            if (r && r.size > 0) {
                const i = [];
                i.push([]);
                let a = 0;
                r.forEach((o, l)=>{
                    let d = i[a];
                    d.length > Pt.MAX_HOST_PARAMETERS && (a++, d = [], i.push(d)), d.push(l, o);
                }), i.forEach((o)=>{
                    this.prepare(t, `INSERT INTO ItemTable VALUES ${new Array(o.length / 2).fill("(?,?)").join(",")} ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value != excluded.value`, (l)=>l.run(o), ()=>{
                        const l = [];
                        let d = 0;
                        return r.forEach((u, m)=>{
                            l.push(m), d += u.length;
                        }), `Keys: ${l.join(", ")} Length: ${d}`;
                    });
                });
            }
            if (s && s.size) {
                const i = [];
                i.push([]);
                let a = 0;
                s.forEach((o)=>{
                    let l = i[a];
                    l.length > Pt.MAX_HOST_PARAMETERS && (a++, l = [], i.push(l)), l.push(o);
                }), i.forEach((o)=>{
                    this.prepare(t, `DELETE FROM ItemTable WHERE key IN (${new Array(o.length).fill("?").join(",")})`, (l)=>l.run(o), ()=>{
                        const l = [];
                        return s.forEach((d)=>{
                            l.push(d);
                        }), `Keys: ${l.join(", ")}`;
                    });
                });
            }
        });
    }
    async optimize(t) {
        const n = await this.whenConnected;
        if (typeof t?.incrementalPages == "number") if (!Number.isFinite(t.incrementalPages)) this.logger.trace(`[storage ${this.name}] ignoring incremental_vacuum with non-finite page count`);
        else {
            const r = Math.max(1, Math.min(Math.trunc(t.incrementalPages), 1e6));
            this.logger.trace(`[storage ${this.name}] incremental_vacuum(${r})`), await this.exec(n, `PRAGMA incremental_vacuum(${r});`);
        }
        else t?.checkpointWal || (this.logger.trace(`[storage ${this.name}] vacuum()`), await this.exec(n, "VACUUM"));
        t?.checkpointWal && (this.logger.trace(`[storage ${this.name}] wal_checkpoint(TRUNCATE)`), await this.exec(n, "PRAGMA wal_checkpoint(TRUNCATE);"));
    }
    async getStorageStats() {
        const t = {
            queryCount: this.statsQueryCount,
            timingBuckets: [
                ...this.statsTimingBuckets
            ],
            totalTimeMs: this.statsTotalTimeMs,
            maxTimeMs: this.statsMaxTimeMs
        };
        return this.statsQueryCount = 0, this.statsTotalTimeMs = 0, this.statsMaxTimeMs = 0, this.statsTimingBuckets = [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], t;
    }
    async getStorageSizeBreakdown(t) {
        if (this.closed) throw new Error("SQLite storage is closed");
        const n = this.scanEpoch, r = t?.phase === ad || typeof t?.phase == "string" && gp.includes(t.phase), s = await this.ensureScanConnection(r);
        if (this.scanEpoch !== n || this.closed) throw new kt;
        try {
            if (t) {
                const a = await this.measureStorageSizePhase(s, t.phase, n);
                return this.throwIfScanCancelled(n), a;
            }
            let i = cC();
            i = lC(i, await this.measureStorageSizePhase(s, "overview", n)), this.throwIfScanCancelled(n);
            for (const a of V6)i = lC(i, await this.measureStorageSizePhase(s, a, n)), this.throwIfScanCancelled(n);
            return D5e(i);
        } catch (i) {
            throw Cs(i) || this.isSqliteInterruptError(i) ? Cs(i) ? i : new kt : (this.logger.error(`[storage ${this.name}] getStorageSizeBreakdown(): ${i}`), i);
        }
    }
    async cancelStorageSizeBreakdown() {
        this.scanEpoch++;
        for (const t of this.scanChildKills)t();
        this.scanChildKills.clear(), await this.disposeScanConnection();
    }
    throwIfScanCancelled(t) {
        if (this.scanEpoch !== t || this.closed) throw new kt;
    }
    async ensureScanConnection(t = !1) {
        if (this.closed) throw new Error("SQLite storage is closed");
        if (await this.whenConnected, this.closed) throw new Error("SQLite storage is closed");
        if (this.path === Pt.IN_MEMORY_PATH) return this.whenConnected;
        if (t) {
            if (this.heavyScanConnection) return this.heavyScanConnection;
            const r = this.scanEpoch;
            if (!this.heavyScanConnectionPromise) {
                const s = this.doConnectScan(this.path).then(async (i)=>{
                    if (this.scanEpoch !== r || this.closed) throw await this.disposeScanHandle(i), new kt;
                    return this.heavyScanConnection = i, i;
                }).finally(()=>{
                    this.heavyScanConnectionPromise === s && (this.heavyScanConnectionPromise = void 0);
                });
                this.heavyScanConnectionPromise = s;
            }
            return this.heavyScanConnectionPromise;
        }
        if (this.scanConnection) return this.scanConnection;
        const n = this.scanEpoch;
        if (!this.scanConnectionPromise) {
            const r = this.doConnectScan(this.path).then(async (s)=>{
                if (this.scanEpoch !== n || this.closed) throw await this.disposeScanHandle(s), new kt;
                return this.scanConnection = s, s;
            }).finally(()=>{
                this.scanConnectionPromise === r && (this.scanConnectionPromise = void 0);
            });
            this.scanConnectionPromise = r;
        }
        return this.scanConnectionPromise;
    }
    async disposeScanConnection() {
        const t = this.scanConnection, n = this.heavyScanConnection;
        this.scanConnection = void 0, this.heavyScanConnection = void 0;
        const r = this.scanConnectionPromise, s = this.heavyScanConnectionPromise;
        await Promise.all([
            t?.isScan ? this.disposeScanHandle(t) : Promise.resolve(),
            n?.isScan ? this.disposeScanHandle(n) : Promise.resolve(),
            r?.then(void 0, ()=>{}) ?? Promise.resolve(),
            s?.then(void 0, ()=>{}) ?? Promise.resolve()
        ]);
    }
    async disposeScanHandle(t) {
        this.interruptConnection(t), await this.closeConnectionQuiet(t);
    }
    interruptConnection(t) {
        try {
            t.db.interrupt();
        } catch  {}
    }
    closeConnectionQuiet(t) {
        return new Promise((n)=>{
            t.db.close(()=>n());
        });
    }
    isSqliteInterruptError(t) {
        if (!t || typeof t != "object") return /SQLITE_INTERRUPT|interrupted/i.test(String(t));
        const n = "code" in t ? String(t.code ?? "") : "", r = t instanceof Error ? t.message : String(t);
        return n === "SQLITE_INTERRUPT" || /SQLITE_INTERRUPT|interrupted/i.test(r);
    }
    async measureStorageSizePhase(t, n, r) {
        if (n === "overview") return this.measureStorageSizeOverview(t);
        if (n === "wal" || n === "sqliteFree" || n === "sqliteOverhead") return cC();
        const s = new Map, i = (o, l, d)=>{
            const u = s.get(o) ?? {
                bytes: 0,
                keyCount: 0
            };
            s.set(o, {
                bytes: u.bytes + l,
                keyCount: u.keyCount + d
            });
        };
        if (n === ad) {
            this.throwIfScanCancelled(r);
            for (const o of await this.measureAllKvCategories(t, r))i(o.id, o.bytes, o.keyCount);
            return await this.addUserTableBytes(t, "otherKv", i), this.totalsToBreakdown(s);
        }
        const a = L6("key", n);
        if (a) {
            this.throwIfScanCancelled(r);
            const o = gp.includes(n), l = o ? await this.measureIsolatedKvPhase(n, r) : void 0;
            if (l) for (const d of l.categories)i(d.id, d.bytes, d.keyCount);
            else if (o) {
                const d = await this.withHeavyInProcessScan(()=>this.measureKvCategoryBytes(t, a));
                i(n, d.bytes, d.keyCount);
            } else {
                const d = await this.measureKvCategoryBytes(t, a);
                i(n, d.bytes, d.keyCount);
            }
        }
        if (n === "composerIndex" || n === "settings") {
            this.throwIfScanCancelled(r);
            const o = n === "composerIndex" ? "key LIKE 'composer.%'" : "key NOT LIKE 'composer.%'", d = (await this.allParamsUnchecked(t, `SELECT COUNT(*) AS keyCount, SUM(LENGTH(key) + COALESCE(LENGTH(value), 0)) AS bytes FROM ItemTable WHERE ${o}`, []))[0];
            i(n, Number(d?.bytes ?? 0), Number(d?.keyCount ?? 0));
        }
        return (n === "composerIndex" || n === "otherKv") && await this.addUserTableBytes(t, n, i), this.totalsToBreakdown(s);
    }
    totalsToBreakdown(t) {
        return {
            fileBytes: 0,
            walBytes: 0,
            freeBytes: 0,
            categories: [
                ...t.entries()
            ].filter(([, n])=>n.bytes > 0 || n.keyCount > 0).map(([n, r])=>({
                    id: n,
                    bytes: r.bytes,
                    keyCount: r.keyCount
                }))
        };
    }
    async addUserTableBytes(t, n, r) {
        const s = await this.allParamsUnchecked(t, "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' AND name NOT IN ('ItemTable', 'cursorDiskKV')", []);
        for (const i of s){
            const a = String(i.name ?? "");
            if (!r8(a) || M5e(a) !== n) continue;
            const o = await this.measureUserTableBytes(t, a);
            o && r(n, o.bytes, o.keyCount);
        }
    }
    async measureStorageSizeOverview(t) {
        const n = await this.getUnchecked(t, "PRAGMA page_count"), r = await this.getUnchecked(t, "PRAGMA page_size"), s = await this.getUnchecked(t, "PRAGMA freelist_count"), i = Number(r?.page_size ?? 0), a = Number(s?.freelist_count ?? 0) * i;
        let o = Number(n?.page_count ?? 0) * i, l = 0;
        if (this.path !== Pt.IN_MEMORY_PATH) {
            try {
                o = (await Li.promises.stat(this.path)).size;
            } catch  {}
            try {
                l = (await Li.promises.stat(`${this.path}-wal`)).size;
            } catch  {}
        }
        const d = [];
        return l > 0 && d.push({
            id: "wal",
            bytes: l,
            keyCount: 0
        }), a > 0 && d.push({
            id: "sqliteFree",
            bytes: a,
            keyCount: 0
        }), {
            fileBytes: o,
            walBytes: l,
            freeBytes: a,
            categories: d
        };
    }
    async measureKvCategoryBytes(t, n) {
        const r = await this.allParamsUnchecked(t, `SELECT COUNT(*) AS keyCount, COALESCE(SUM(${O6()}), 0) AS bytes FROM cursorDiskKV WHERE ${n}`, []);
        return {
            keyCount: Number(r[0]?.keyCount ?? 0),
            bytes: Number(r[0]?.bytes ?? 0)
        };
    }
    async measureAllKvCategories(t, n) {
        const r = await this.measureIsolatedKvPhase(ad, n);
        return r ? r.categories : (this.throwIfScanCancelled(n), K5e(H5e(t.db)));
    }
    async withHeavyInProcessScan(t) {
        const n = this.heavyInProcessScanTail;
        let r;
        this.heavyInProcessScanTail = new Promise((s)=>{
            r = s;
        }), await n;
        try {
            return await t();
        } finally{
            r();
        }
    }
    async measureIsolatedKvPhase(t, n) {
        if (this.path === Pt.IN_MEMORY_PATH) return;
        let r = 0;
        try {
            r = (await Li.promises.stat(this.path)).size;
        } catch  {
            return;
        }
        if (r <= $6) return;
        const s = t === ad ? void 0 : t;
        try {
            const i = $5e(this.path, s);
            this.scanChildKills.add(i.kill);
            try {
                const a = await i.promise;
                return this.throwIfScanCancelled(n), a;
            } finally{
                this.scanChildKills.delete(i.kill);
            }
        } catch (i) {
            throw Cs(i) || this.scanEpoch !== n ? Cs(i) ? i : new kt : (this.logger.error(`[storage ${this.name}] isolated size scan failed: ${i}`), i);
        }
    }
    async close(t) {
        this.logger.trace(`[storage ${this.name}] close()`), this.closed = !0, await this.cancelStorageSizeBreakdown();
        const n = await this.whenConnected;
        return this.doClose(n, t);
    }
    async doClose(t, n) {
        await this.reclaimFreePagesOnClose(t);
        const r = Date.now(), s = new Vl(()=>{
            this.logger.sentryException(new Error(`[storage ${this.name}] close() wal_checkpoint still running after ${Pt.STUCK_CLOSE_WAL_CHECKPOINT_TIMEOUT}ms`), {
                tags: {
                    cursor_storage_event: "close_wal_checkpoint_stuck",
                    storage_name: this.name
                },
                extra: {
                    stuck_threshold_ms: Pt.STUCK_CLOSE_WAL_CHECKPOINT_TIMEOUT
                },
                fingerprint: [
                    "close_wal_checkpoint_stuck",
                    this.name
                ],
                level: "warning"
            });
        }, Pt.STUCK_CLOSE_WAL_CHECKPOINT_TIMEOUT);
        try {
            await this.exec(t, "PRAGMA wal_checkpoint(TRUNCATE);");
        } catch (i) {
            this.logger.sentryException(i, {
                tags: {
                    cursor_storage_event: "close_wal_checkpoint_failed",
                    storage_name: this.name
                },
                extra: {
                    wal_checkpoint_ms: Date.now() - r
                }
            });
        } finally{
            s.dispose();
        }
        return new Promise((i, a)=>{
            t.db.close((o)=>(o && this.handleSQLiteError(t, `[storage ${this.name}] close(): ${o}`), this.path === Pt.IN_MEMORY_PATH ? i() : !t.isErroneous && !t.isInMemory ? this.options.disableBackup?.() === !0 ? (this.logger.trace(`[storage ${this.name}] backup(): skipped because backups are disabled`), i()) : this.backup().then(i, (l)=>(this.logger.error(`[storage ${this.name}] backup(): ${l}`), this.logger.sentryException(l, {
                        tags: {
                            cursor_storage_event: "close_backup_failed",
                            storage_name: this.name
                        },
                        extra: {
                            db_path_type: "disk"
                        },
                        level: "warning"
                    }), i())) : typeof n == "function" ? (this.logger.sentryException(new Error("[storage] sqlite close: attempting recovery"), {
                    tags: {
                        cursor_storage_event: "close_recovery_attempt",
                        storage_name: this.name
                    },
                    extra: {
                        db_path_type: this.path === Pt.IN_MEMORY_PATH ? "in_memory" : "disk",
                        connection_is_erroneous: t.isErroneous === !0,
                        connection_is_in_memory: t.isInMemory === !0
                    }
                }), i()) : a(o || new Error("Database has errors or is in-memory without recovery option"))));
        });
    }
    async reclaimFreePagesOnClose(t) {
        if (this.path === Pt.IN_MEMORY_PATH || t.isErroneous || t.isInMemory || this.options.incrementalAutoVacuumOnClose?.() !== !0) return;
        const n = Date.now(), r = this.options.closeVacuumBudgetMs ?? Pt.CLOSE_VACUUM_BUDGET_MS, s = new Vl(()=>this.interruptConnection(t), r);
        let i, a;
        try {
            const o = await this.getPragmaNumber(t, "auto_vacuum");
            if (o !== Pt.AUTO_VACUUM_NONE && o !== Pt.AUTO_VACUUM_INCREMENTAL) return;
            const { pageSize: l, pageCount: d, freelistCount: u } = await this.readPageStats(t);
            i = {
                pageSize: l,
                freelistCount: u,
                liveBytes: Math.max(0, d - u) * l,
                maxBytes: this.options.closeVacuumMaxBytes ?? Pt.CLOSE_VACUUM_MAX_BYTES
            }, a = o === Pt.AUTO_VACUUM_NONE ? await this.migrateToIncrementalAutoVacuum(t, i) : await this.incrementalVacuumOnClose(t, i, n + r);
        } catch (o) {
            this.logger.error(`[storage ${this.name}] close(): incremental auto-vacuum failed: ${o}`), a = {
                outcome: "failed",
                error: o
            };
            const l = o?.code;
            (l === "SQLITE_CORRUPT" || l === "SQLITE_NOTADB") && (t.isErroneous = !0, t.lastError = String(o));
        } finally{
            s.dispose();
        }
        this.reportCloseVacuumOutcome(a, i, Date.now() - n);
    }
    async migrateToIncrementalAutoVacuum(t, { pageSize: n, freelistCount: r, liveBytes: s, maxBytes: i }) {
        if (s > i) return this.logger.trace(`[storage ${this.name}] close(): skipping auto_vacuum migration, live data over the quit-time cap (live: ${s}b, cap: ${i}b)`), {
            outcome: "skipped_over_cap"
        };
        const a = Pt.AUTO_VACUUM_MIGRATION_DISK_HEADROOM_BYTES, o = await i8(st(this.path)), l = await i8(await X5e());
        if (o < 2 * s + a || l < s + a) return this.logger.trace(`[storage ${this.name}] close(): skipping auto_vacuum migration, not enough free disk (live: ${s}b, db volume free: ${o}b, temp volume free: ${l}b)`), {
            outcome: "skipped_low_disk",
            dbVolumeFreeBytes: o,
            tempVolumeFreeBytes: l
        };
        const d = r * n;
        return this.logger.trace(`[storage ${this.name}] close(): migrating to auto_vacuum = INCREMENTAL (live: ${s}b, free: ${d}b)`), await this.execUnchecked(t, "VACUUM;"), {
            outcome: "converted",
            freedBytes: d
        };
    }
    async incrementalVacuumOnClose(t, { pageSize: n, freelistCount: r, maxBytes: s }, i) {
        const a = Math.min(r, Math.floor(s / n)), o = Math.max(1, Math.min(Pt.CLOSE_INCREMENTAL_VACUUM_CHUNK_MAX_PAGES, Math.floor(Pt.CLOSE_INCREMENTAL_VACUUM_CHUNK_BYTES / n)));
        let l = 1, d = 0;
        for(; d < a;){
            const u = Math.min(l, a - d);
            this.logger.trace(`[storage ${this.name}] close(): incremental_vacuum(${u})`);
            const m = Date.now();
            try {
                await this.execUnchecked(t, `PRAGMA incremental_vacuum(${u});`);
            } catch (T) {
                if (this.isSqliteInterruptError(T)) break;
                throw T;
            }
            d += u;
            const f = Date.now();
            if (f >= i) break;
            const v = Math.max(1, f - m) / u;
            l = Math.max(1, Math.min(o, 2 * u, Math.floor((i - f) / v)));
        }
        return {
            outcome: "incremental",
            freedBytes: d * n
        };
    }
    reportCloseVacuumOutcome(t, n, r) {
        const { outcome: s } = t, i = r > Pt.SLOW_CLOSE_VACUUM_THRESHOLD, a = this.options.storageKind ?? "unknown", o = s === "converted" || s === "incremental" ? t.freedBytes : 0;
        this.logger.trace(`[storage ${this.name}] close(): auto_vacuum ${s} in ${r}ms (freed: ${o}b)`);
        const l = s === "failed" ? t.error : new Error(`[storage ${this.name}] close(): auto_vacuum ${s} on ${a} store (live: ${n?.liveBytes}b, freed: ${o}b)`);
        this.logger.sentryException(l, {
            tags: {
                cursor_storage_event: "close_auto_vacuum_outcome",
                outcome: s,
                storage_name: this.name,
                storage_kind: a,
                slow: String(i)
            },
            extra: {
                elapsed_ms: r,
                live_bytes: n?.liveBytes,
                free_bytes: n && n.freelistCount * n.pageSize,
                freed_bytes: o,
                max_bytes: n?.maxBytes,
                ...s === "skipped_low_disk" ? {
                    db_volume_free_bytes: t.dbVolumeFreeBytes,
                    temp_volume_free_bytes: t.tempVolumeFreeBytes
                } : void 0
            },
            fingerprint: [
                "close_auto_vacuum_outcome",
                s,
                String(i)
            ],
            level: i || s === "failed" ? "warning" : "info"
        });
    }
    async readPageStats(t) {
        return {
            pageSize: await this.getPragmaNumber(t, "page_size"),
            pageCount: await this.getPragmaNumber(t, "page_count"),
            freelistCount: await this.getPragmaNumber(t, "freelist_count")
        };
    }
    async getPragmaNumber(t, n) {
        const r = await this.getUnchecked(t, `PRAGMA ${n}`), s = Number(r?.[n]);
        if (!Number.isFinite(s)) throw new Error(`PRAGMA ${n} returned no value`);
        return s;
    }
    backup() {
        const t = this.toBackupPath(this.path);
        return ie.copy(this.path, t, {
            preserveSymlinks: !1
        });
    }
    toBackupPath(t) {
        return `${t}.backup`;
    }
    toCorruptedPath(t) {
        return `${t}.corrupted.${Date.now()}`;
    }
    async checkIntegrity(t) {
        this.logger.trace(`[storage ${this.name}] checkIntegrity(full: ${t})`);
        const n = await this.whenConnected, r = await this.get(n, t ? "PRAGMA integrity_check" : "PRAGMA quick_check"), s = t ? r.integrity_check : r.quick_check;
        return n.isErroneous ? `${s} (last error: ${n.lastError})` : n.isInMemory ? `${s} (in-memory!)` : s;
    }
    async connect(t, n = !0) {
        this.logger.trace(`[storage ${this.name}] open(${t}, retryOnBusy: ${n})`);
        try {
            return await this.doConnect(t);
        } catch (r) {
            this.logger.error(`[storage ${this.name}] open(): Unable to open DB due to ${r}`);
            const s = r, i = typeof s?.code == "string" ? s.code : void 0, a = t === Pt.IN_MEMORY_PATH ? "in_memory" : "disk";
            if (i === "SQLITE_BUSY" && n) return await En(Pt.BUSY_OPEN_TIMEOUT), this.connect(t, !1);
            if (this.logger.sentryException(r, {
                tags: {
                    cursor_storage_event: "open_failed",
                    storage_name: this.name,
                    sqlite_error_code: i ?? "unknown"
                },
                extra: {
                    db_path_type: a,
                    retry_on_busy: n,
                    busy_open_timeout_ms: Pt.BUSY_OPEN_TIMEOUT
                }
            }), i === "SQLITE_BUSY") throw r;
            try {
                const o = Li.existsSync(t), l = this.toBackupPath(t), d = Li.existsSync(l);
                if (o) {
                    const m = this.toCorruptedPath(t);
                    await ie.rename(t, m, !1);
                }
                let u = !1;
                try {
                    await ie.rename(this.toBackupPath(t), t, !1), u = !0;
                } catch (m) {
                    this.logger.sentryException(m, {
                        tags: {
                            cursor_storage_event: "open_backup_rename_failed",
                            storage_name: this.name,
                            sqlite_error_code: i ?? "unknown"
                        },
                        extra: {
                            db_path_type: a,
                            db_existed_before_move: o,
                            backup_existed_before_rename: d
                        }
                    });
                }
                return this.logger.sentryException(new Error("[storage] sqlite open failed: moved corrupted db file"), {
                    tags: {
                        cursor_storage_event: "open_moved_corrupted_db_file",
                        storage_name: this.name,
                        sqlite_error_code: i ?? "unknown"
                    },
                    extra: {
                        db_path_type: a,
                        db_existed_before_move: o,
                        backup_existed_before_rename: d
                    }
                }), await this.doConnect(t).then((m)=>(u && this.logger.sentryException(new Error("[storage] sqlite open failed: backup reconnect succeeded"), {
                        tags: {
                            cursor_storage_event: "open_backup_reconnect_succeeded",
                            storage_name: this.name,
                            sqlite_error_code: i ?? "unknown"
                        },
                        extra: {
                            db_path_type: a,
                            db_existed_before_move: o,
                            backup_existed_before_rename: d
                        }
                    }), m));
            } catch (o) {
                throw this.logger.error(`[storage ${this.name}] open(): Unable to use backup due to ${o}`), this.logger.sentryException(o, {
                    tags: {
                        cursor_storage_event: "open_failed_no_fallback",
                        storage_name: this.name,
                        sqlite_error_code: i ?? "unknown"
                    },
                    extra: {
                        db_path_type: a
                    }
                }), o;
            }
        }
    }
    handleSQLiteError(t, n) {
        if (this.closed && !n.startsWith(`[storage ${this.name}] close(): `) && /SQLITE_MISUSE: Database (handle )?is closed/.test(n)) {
            this.logger.trace(n);
            return;
        }
        const r = t.isErroneous === !0;
        t.isErroneous = !0, t.lastError = n, this.logger.error(n), r || this.logger.sentryException(new Error(n), {
            tags: {
                cursor_storage_event: "runtime_sqlite_error",
                storage_name: this.name
            },
            extra: {
                db_path_type: t.isInMemory ? "in_memory" : "disk"
            },
            level: "error"
        });
    }
    doConnectScan(t) {
        return new Promise((n, r)=>{
            import("@vscode/sqlite3").then((s)=>{
                const i = s.default, a = {
                    db: new i.Database(t, i.OPEN_READONLY, (o)=>o ? a.db ? a.db.close(()=>r(o)) : r(o) : this.execUnchecked(a, "PRAGMA query_only = ON; PRAGMA busy_timeout = 2000; PRAGMA cache_size = -65536; PRAGMA temp_store = MEMORY;").then(()=>n(a), (l)=>a.db.close(()=>r(l)))),
                    isInMemory: !1,
                    isScan: !0
                };
                a.db.on("error", (o)=>{
                    this.isSqliteInterruptError(o) || this.logger.trace(`[storage ${this.name}] scan Error (event): ${o}`);
                });
            }, r);
        });
    }
    doConnect(t) {
        return new Promise((n, r)=>{
            import("@vscode/sqlite3").then((s)=>{
                const i = this.logger.isTracing ? s.default.verbose().Database : s.default.Database, a = {
                    db: new i(t, (o)=>{
                        if (o) return a.db && o.code !== "SQLITE_CANTOPEN" ? a.db.close(()=>r(o)) : r(o);
                        const l = [
                            "PRAGMA auto_vacuum = INCREMENTAL;",
                            "PRAGMA user_version = 1;",
                            "PRAGMA journal_mode = WAL;",
                            "PRAGMA synchronous = NORMAL;",
                            "PRAGMA wal_autocheckpoint = 1000;"
                        ];
                        return l.push("CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);", "CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);", ...Y5e()), this.exec(a, l.join("")).then(()=>this.migrateCollectionColumns(a)).then(()=>n(a), (d)=>a.db.close(()=>r(d)));
                    }),
                    isInMemory: t === Pt.IN_MEMORY_PATH
                };
                a.db.on("error", (o)=>this.handleSQLiteError(a, `[storage ${this.name}] Error (event): ${o}`));
                {
                    const o = this.logger.hasSentryException ? {
                        textEncoder: new TextEncoder,
                        lastRequests: [],
                        maxLastRequests: 10,
                        maxSqlLength: 2e3,
                        lastReported: Date.now()
                    } : void 0;
                    a.db.on("profile", (l, d)=>{
                        this.statsQueryCount++, this.statsTotalTimeMs += d, this.statsMaxTimeMs = Math.max(this.statsMaxTimeMs, d);
                        const u = d < 1 ? 0 : d < 10 ? 1 : d < 100 ? 2 : d < 1e3 ? 3 : d < 1e4 ? 4 : d < 1e5 ? 5 : 6;
                        if (this.statsTimingBuckets[u]++, o) {
                            const m = l.length > o.maxSqlLength ? `${l.slice(0, o.maxSqlLength)}\u2026` : l, f = l.includes("cursorDiskKV");
                            if (o.lastRequests.push([
                                m,
                                d
                            ]), o.lastRequests.length > o.maxLastRequests && o.lastRequests.shift(), d > 1e3 && Date.now() - o.lastReported > 6e4) {
                                o.lastReported = Date.now();
                                const v = {
                                    db_path_type: a.isInMemory ? "in_memory" : "disk",
                                    time_ms: d,
                                    sql: m
                                };
                                f && this.lastCursorKVKeys.length > 0 && (v.recent_cursor_kv_keys = [
                                    ...this.lastCursorKVKeys
                                ]);
                                let T = o.lastRequests.map(([S, k])=>`${S} ${k}`).join(`
`);
                                f && this.lastCursorKVKeys.length > 0 && (T += `

--- Recent cursorKV keys ---
` + this.lastCursorKVKeys.join(`
`)), this.logger.sentryException(new Error(`[storage ${this.name}] Profile (event): slow sqlite request`), {
                                    tags: {
                                        cursor_storage_event: "profile_slow_request",
                                        storage_name: this.name,
                                        storage_kind: this.options.storageKind ?? "unknown",
                                        sql_class: this.classifySQL(l),
                                        is_cursor_kv_query: f ? "true" : "false",
                                        is_use_wal: "true"
                                    },
                                    extra: v,
                                    level: "warning",
                                    attachments: [
                                        {
                                            filename: "profile.txt",
                                            data: o.textEncoder.encode(T),
                                            contentType: "text/plain"
                                        }
                                    ]
                                });
                            }
                        }
                    });
                }
                this.logger.isTracing && a.db.on("trace", (o)=>this.logger.trace(`[storage ${this.name}] Trace (event): ${o}`));
            }, r);
        });
    }
    async migrateCollectionColumns(t) {
        const n = async (r, s)=>{
            const i = new Set((await this.allParams(t, `PRAGMA table_info(${r})`, [])).map((a)=>String(a.name ?? "")));
            return s.columns.filter((a)=>!i.has(a.name));
        };
        for (const [r, s] of Object.entries(nk))if ((await n(r, s)).length !== 0) {
            await this.exec(t, "BEGIN IMMEDIATE");
            try {
                const i = (await n(r, s)).map((a)=>`ALTER TABLE ${r} ADD COLUMN ${a.name} ${a.type};`);
                i.length > 0 && await this.exec(t, i.join("")), await this.exec(t, "COMMIT");
            } catch (i) {
                throw await this.execUnchecked(t, "ROLLBACK").catch(()=>{}), i;
            }
        }
    }
    afterAtomicBatch(t) {
        const n = this.atomicBatch;
        return n ? n.then(()=>this.afterAtomicBatch(t)) : t();
    }
    exec(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.exec(n, (i)=>i ? (this.handleSQLiteError(t, `[storage ${this.name}] exec(): ${i}`), s(i)) : r());
            }));
    }
    getUnchecked(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.get(n, (i, a)=>i ? s(this.isSqliteInterruptError(i) ? new kt : i) : r(a));
            }));
    }
    execUnchecked(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.exec(n, (i)=>i ? s(i) : r());
            }));
    }
    get(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.get(n, (i, a)=>i ? (this.handleSQLiteError(t, `[storage ${this.name}] get(): ${i}`), s(i)) : r(a));
            }));
    }
    getParams(t, n, r) {
        return this.afterAtomicBatch(()=>new Promise((s, i)=>{
                t.db.get(n, r, (a, o)=>a ? (this.handleSQLiteError(t, `[storage ${this.name}] getParams(): ${a}`), i(a)) : s(o));
            }));
    }
    allParamsUnchecked(t, n, r = []) {
        return this.afterAtomicBatch(()=>new Promise((s, i)=>{
                t.db.all(n, r, (a, o)=>a ? i(this.isSqliteInterruptError(a) ? new kt : a) : s(o || []));
            }));
    }
    async measureUserTableBytes(t, n) {
        try {
            const r = s8(n), i = (await this.allParamsUnchecked(t, `PRAGMA table_info(${r})`)).map((d)=>String(d.name ?? "")).filter((d)=>r8(d));
            if (i.length === 0) return;
            const a = i.map((d)=>`COALESCE(LENGTH(CAST(${s8(d)} AS BLOB)), 0)`).join(" + "), l = (await this.allParamsUnchecked(t, `SELECT COUNT(*) AS keyCount, SUM(${a}) AS bytes FROM ${r}`))[0];
            return {
                keyCount: Number(l?.keyCount ?? 0),
                bytes: Number(l?.bytes ?? 0)
            };
        } catch (r) {
            this.logger.trace(`[storage ${this.name}] getStorageSizeBreakdown skipped table ${n}: ${r}`);
            return;
        }
    }
    allParams(t, n, r) {
        return this.afterAtomicBatch(()=>new Promise((s, i)=>{
                t.db.all(n, r, (a, o)=>a ? (this.handleSQLiteError(t, `[storage ${this.name}] allParams(): ${a}`), i(a)) : s(o || []));
            }));
    }
    all(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.all(n, (i, a)=>i ? (this.handleSQLiteError(t, `[storage ${this.name}] all(): ${i}`), s(i)) : r(a));
            }));
    }
    transaction(t, n) {
        return this.afterAtomicBatch(()=>new Promise((r, s)=>{
                t.db.serialize(()=>{
                    t.db.run("BEGIN TRANSACTION"), n(), t.db.run("END TRANSACTION", (i)=>i ? (this.handleSQLiteError(t, `[storage ${this.name}] transaction(): ${i}`), s(i)) : r());
                });
            }));
    }
    transactionAtomic(t, n) {
        return this.afterAtomicBatch(()=>{
            const r = new Promise((i, a)=>{
                t.db.serialize(()=>{
                    let o;
                    const l = (f)=>{
                        o ??= f;
                    }, d = (f)=>{
                        this.handleSQLiteError(t, `[storage ${this.name}] transactionAtomic(): ${f}`), l(f);
                    };
                    t.db.run("BEGIN TRANSACTION", (f)=>{
                        f && d(f);
                    }), n(l);
                    const u = t.db.prepare("END TRANSACTION", (f)=>{
                        if (f) return d(f);
                        if (o) return u.finalize();
                        u.run((v)=>{
                            if (v) {
                                d(v), t.db.run("ROLLBACK", (T)=>{
                                    T && d(T), a(o ?? v);
                                });
                                return;
                            }
                            i();
                        }).finalize();
                    }), m = t.db.prepare("ROLLBACK", (f)=>{
                        if (f) return d(f), a(o ?? f);
                        if (!o) return m.finalize();
                        m.run((v)=>{
                            v && d(v);
                        }).finalize(()=>a(o));
                    });
                });
            }), s = r.then(()=>{}, ()=>{});
            return this.atomicBatch = s, s.then(()=>{
                this.atomicBatch === s && (this.atomicBatch = void 0);
            }), r;
        });
    }
    prepare(t, n, r, s, i) {
        const a = t.db.prepare(n), o = (l)=>{
            this.handleSQLiteError(t, `[storage ${this.name}] prepare(): ${l} (${n}). Details: ${s()}`), i?.(l);
        };
        a.on("error", o), r(a), a.finalize((l)=>{
            l && o(l), a.removeListener("error", o);
        });
    }
    runParams(t, n, r) {
        return this.afterAtomicBatch(()=>new Promise((s, i)=>{
                t.db.run(n, r, (a)=>a ? (this.handleSQLiteError(t, `[storage ${this.name}] runParams(): ${a}`), i(a)) : s());
            }));
    }
}, Gr.IN_MEMORY_PATH = ":memory:", Gr.BUSY_OPEN_TIMEOUT = 2e3, Gr.STUCK_CLOSE_WAL_CHECKPOINT_TIMEOUT = 5e3, Gr.MAX_HOST_PARAMETERS = 256, Gr.MAX_LAST_CURSOR_KV_KEYS = 20, Gr.AUTO_VACUUM_NONE = 0, Gr.AUTO_VACUUM_INCREMENTAL = 2, Gr.AUTO_VACUUM_MIGRATION_DISK_HEADROOM_BYTES = 512 * 1024 * 1024, Gr.CLOSE_VACUUM_MAX_BYTES = 256 * 1024 * 1024, Gr.SLOW_CLOSE_VACUUM_THRESHOLD = 2e3, Gr.CLOSE_VACUUM_BUDGET_MS = 3500, Gr.CLOSE_INCREMENTAL_VACUUM_CHUNK_BYTES = 16 * 1024 * 1024, Gr.CLOSE_INCREMENTAL_VACUUM_CHUNK_MAX_PAGES = 4096, Sp = Gr, TC = class mLe {
    constructor(t){
        t && typeof t.logTrace == "function" && process.env[mLe.VSCODE_TRACE_STORAGE] && (this.logTrace = t.logTrace), t && typeof t.logError == "function" && (this.logError = t.logError), t && typeof t.logSentryException == "function" && (this.logSentryException = t.logSentryException);
    }
    get isTracing() {
        return !!this.logTrace;
    }
    get hasSentryException() {
        return !!this.logSentryException;
    }
    trace(t) {
        this.logTrace?.(t);
    }
    error(t) {
        this.logError?.(t);
    }
    sentryException(t, n) {
        this.logSentryException?.(t, n);
    }
}, TC.VSCODE_TRACE_STORAGE = "VSCODE_TRACE_STORAGE", o8 = TC;

}
