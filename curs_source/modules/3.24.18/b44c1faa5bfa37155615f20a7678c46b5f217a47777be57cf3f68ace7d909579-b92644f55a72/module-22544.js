"use strict";
require.d(exports, {
    Zg: ()=>E,
    C8: ()=>f,
    df: ()=>g,
    CA: ()=>p,
    Ze: ()=>y,
    Is: ()=>w,
    rD: ()=>m
});
var n = require("./module-73024.js"), s = require("./module-76760.js");
const o = "PRAGMA auto_vacuum = INCREMENTAL;", i = "PRAGMA user_version = 1;", a = "PRAGMA journal_mode = WAL;", c = "PRAGMA synchronous = NORMAL;", l = "PRAGMA wal_autocheckpoint = 1000;", u = [
    "CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);",
    "CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);"
];
function d() {
    return process.getBuiltinModule("node:sqlite");
}
function p(e) {
    if (!(e instanceof Error)) return {};
    const t = "code" in e ? e.code : void 0, r = "errcode" in e ? e.errcode : void 0;
    return {
        code: "string" == typeof t ? t : void 0,
        sqliteErrcode: "number" == typeof r ? r : void 0
    };
}
function m(e, t) {
    const { code: r } = p(e);
    return void 0 === r ? e : Object.assign(new Error(`${r} on ${t}`), {
        code: r
    });
}
function h(e, t) {
    return e.prepare(`PRAGMA ${t}`).get()?.[t];
}
class f extends Error {
    constructor(e){
        super(`${e} exists but holds no store yet`), this.name = "AgentHostStoreEmptyError";
    }
}
class g extends Error {
    constructor(e){
        super(`${e} exists and is not a regular file`), this.name = "AgentHostStoreNotAFileError";
    }
}
function y(e) {
    try {
        return n.lstatSync(e).isFile();
    } catch  {
        return !1;
    }
}
function w(e) {
    try {
        return n.lstatSync(e), !0;
    } catch (e) {
        const { code: t } = p(e);
        return "ENOENT" !== t && "ENOTDIR" !== t;
    }
}
function v(e) {
    const t = Array.from(e, (e)=>e.codePointAt(0) ?? 0);
    for(; t.length > 0;){
        const e = t[t.length - 1];
        if (e < 1114111) {
            const r = e + 1;
            return t[t.length - 1] = r >= 55296 && r <= 57343 ? 57344 : r, String.fromCodePoint(...t);
        }
        t.pop();
    }
    return new Uint8Array(0);
}
function _(e) {
    if (e.includes("\0") || !e.isWellFormed()) throw new TypeError(`Key must be well-formed text without NUL: ${JSON.stringify(e)}`);
}
class A {
    constructor(e, t, r){
        this.guard = r, this.getStmt = e.prepare(`SELECT value FROM ${t} WHERE key = ?`), this.setStmt = e.prepare(function(e) {
            return (function(e) {
                return `INSERT INTO ${e} (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value`;
            })(e).replace("VALUES (?, ?)", "VALUES (?, COALESCE(?, X''))");
        }(t)), this.deleteStmt = e.prepare(`DELETE FROM ${t} WHERE key = ?`);
        const n = "WHERE key >= ? AND key < ? AND value IS NOT NULL ORDER BY key";
        this.keysStmt = e.prepare(`SELECT key FROM ${t} ${n}`), this.entriesStmt = e.prepare(`SELECT key, value FROM ${t} ${n}`);
    }
    get(e) {
        return _(e), this.guard(()=>this.getStmt.get(e)?.value ?? void 0);
    }
    set(e, t) {
        _(e), this.guard(()=>this.setStmt.run(e, t));
    }
    delete(e) {
        _(e), this.guard(()=>this.deleteStmt.run(e));
    }
    keys(e) {
        return _(e), this.guard(()=>this.keysStmt.all(e, v(e)).map((e)=>String(e.key)));
    }
    entries(e) {
        return _(e), this.guard(()=>this.entriesStmt.all(e, v(e)).map((e)=>({
                    key: String(e.key),
                    value: e.value
                })));
    }
}
class S {
    constructor(e){
        this.raw = e;
    }
    get(e) {
        const t = this.raw.get(e);
        return void 0 === t ? void 0 : this.parse(t, e);
    }
    set(e, t) {
        null == t ? this.raw.delete(e) : this.raw.set(e, JSON.stringify(t));
    }
    delete(e) {
        this.raw.delete(e);
    }
    keys(e = "") {
        return this.raw.keys(e);
    }
    entries(e = "") {
        return this.raw.entries(e).map(({ key: e, value: t })=>({
                key: e,
                value: this.parse(t, e)
            }));
    }
    parse(e, t) {
        const r = e instanceof Uint8Array ? (new TextDecoder).decode(e) : e;
        if ("string" != typeof r) throw new Error(`Unexpected column type for key ${t}`);
        try {
            return JSON.parse(r);
        } catch (e) {
            throw new Error(`Value at key ${t} is not valid JSON`, {
                cause: e
            });
        }
    }
}
class b {
    constructor(e){
        this.raw = e;
    }
    get(e) {
        const t = this.raw.get(e);
        return void 0 === t ? void 0 : this.bytes(t, e);
    }
    set(e, t) {
        if (!(t instanceof Uint8Array)) throw new TypeError(`Blob for key ${e} must be a Uint8Array`);
        this.raw.set(e, t);
    }
    delete(e) {
        this.raw.delete(e);
    }
    keys(e = "") {
        return this.raw.keys(e);
    }
    entries(e = "") {
        return this.raw.entries(e).map(({ key: e, value: t })=>({
                key: e,
                value: this.bytes(t, e)
            }));
    }
    bytes(e, t) {
        if (e instanceof Uint8Array) return e;
        if ("string" == typeof e) return (new TextEncoder).encode(e);
        throw new Error(`Unexpected column type for key ${t}`);
    }
}
class E {
    constructor(e, t, r, n, s){
        this.db = e, this.path = t, this.relPath = r, this.created = n, this.emit = s, this.closed = !1;
        const o = (e)=>this.guard(e);
        this.items = new S(new A(e, "ItemTable", o)), this.blobs = new b(new A(e, "cursorDiskKV", o));
    }
    static open(e, t) {
        return E.openWith(e, t, !1);
    }
    static openReadOnly(e, t) {
        return E.openWith(e, t, !0);
    }
    static openWith(e, t, r) {
        const v = t?.relPath ?? s.basename(e), { store: _, observer: A } = t ?? {}, S = void 0 !== _ && void 0 !== A ? (e)=>A({
                ...e,
                store: _,
                relPath: v
            }) : ()=>{}, b = performance.now();
        let I, C = !1;
        try {
            r || (C = function(e, t) {
                try {
                    n.mkdirSync(s.dirname(e), {
                        recursive: !0,
                        mode: 448
                    });
                    let r = !0;
                    try {
                        n.writeFileSync(e, new Uint8Array, {
                            mode: 384,
                            flag: "wx"
                        });
                    } catch (e) {
                        if ("EEXIST" !== p(e).code) throw e;
                        r = !1;
                    }
                    if (!y(e)) throw new g(t);
                    return r;
                } catch (e) {
                    throw m(e, t);
                }
            }(e, v));
            const t = r ? function(e, t) {
                if (w(e) && !y(e)) throw new g(t);
                const r = new (d()).DatabaseSync(e, {
                    readOnly: !0,
                    enableForeignKeyConstraints: !1
                });
                try {
                    r.exec("PRAGMA busy_timeout = 5000;");
                    if (0 === ("object" == typeof (n = r.prepare("SELECT count(*) AS n FROM sqlite_master WHERE name = 'ItemTable'").get()) && null !== n && "n" in n && "number" == typeof n.n ? n.n : 0)) throw new f(t);
                    return r;
                } catch (e) {
                    throw r.close(), e;
                }
                var n;
            }(e, v) : function(e) {
                const t = new (d()).DatabaseSync(e, {
                    enableForeignKeyConstraints: !1
                });
                try {
                    return t.exec("PRAGMA busy_timeout = 5000;"), 2 !== h(t, "auto_vacuum") && t.exec(o), 1 !== h(t, "user_version") && t.exec(i), t.exec(a + c + l + u.join("")), t;
                } catch (e) {
                    throw t.close(), e;
                }
            }(e);
            try {
                I = new E(t, e, v, C, S);
            } catch (e) {
                throw t.close(), e;
            }
        } catch (e) {
            throw S({
                kind: "open_failed",
                durationMs: performance.now() - b,
                error: e,
                ...p(e)
            }), e;
        }
        try {
            S({
                kind: "opened",
                created: C,
                durationMs: performance.now() - b
            });
        } catch (e) {
            throw I.close(), e;
        }
        return I;
    }
    transaction(e) {
        return this.guard(()=>this.runTransaction(e));
    }
    dataVersion() {
        const e = this.guard(()=>h(this.db, "data_version"));
        if ("number" == typeof e) return e;
        if ("bigint" == typeof e) return Number(e);
        throw new Error(`Unexpected data_version for ${this.relPath}`);
    }
    runTransaction(e) {
        const t = performance.now();
        let r;
        try {
            this.db.exec("BEGIN IMMEDIATE");
            const t = e();
            if (("object" == typeof (n = t) || "function" == typeof n) && null !== n && "then" in n && "function" == typeof n.then) throw new TypeError(`Transaction on ${this.relPath} needs a synchronous callback; it returned a promise`);
            return this.guard(()=>this.db.exec("COMMIT")), t;
        } catch (e) {
            if (r = {
                outcome: "rolled_back",
                error: e
            }, !this.closed) try {
                this.db.exec("ROLLBACK");
            } catch (t) {
                if (!(t instanceof Error && t.message.includes("no transaction is active"))) throw r = {
                    outcome: "rollback_failed",
                    error: t
                }, new AggregateError([
                    e,
                    t
                ], `Transaction on ${this.relPath} failed and could not roll back`);
            }
            throw e;
        } finally{
            this.emit({
                kind: "transaction",
                durationMs: performance.now() - t,
                outcome: r?.outcome ?? "committed",
                ...p(r?.error)
            });
        }
        var n;
    }
    get isClosed() {
        return this.closed;
    }
    close() {
        this.closed || (this.closed = !0, this.db.close());
    }
    guard(e) {
        if (this.closed) throw this.emit({
            kind: "closed_store_use"
        }), new Error(`Agent host store ${this.relPath} is closed`);
        return e();
    }
}
