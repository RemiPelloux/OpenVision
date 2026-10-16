"use strict";
require.d(exports, {
    Pz: ()=>p,
    Qf: ()=>f,
    zj: ()=>g
});
var n = require("./module-37949.js"), s = require("./module-98875.js"), o = require("./module-33002.js"), i = require("./module-47825.js"), a = require("./module-22544.js");
const c = 6e4, l = {
    component: "storage"
}, u = (0, n.h)("agent-host:storage"), d = {
    hydrate: "agentHostStorage.hydrateSession",
    checkpoint: "agentHostStorage.writeCheckpoint",
    list: "agentHostStorage.listSessions"
};
class p {
    constructor(e){
        this.args = e, this.lastWarnAtMs = new Map, this.storageObserver = (e)=>{
            try {
                this.observe(e);
            } catch (e) {
                this.reportSinkFailure(e);
            }
        }, this.sessionEnabled = void 0 !== e.ctx || void 0 !== e.metrics || void 0 !== e.onStorageFault;
    }
    reportBlobReads(e, t, r, n) {
        const o = n.hits + n.misses + n.errors;
        this.distribution("blob_read_count", n.hits, {
            source: r,
            result: "hit"
        }), this.distribution("blob_read_count", n.misses, {
            source: r,
            result: "miss"
        }), this.distribution("blob_read_count", n.errors, {
            source: r,
            result: "error"
        }), this.observeSink(()=>{
            const t = (0, s.fU)(e);
            void 0 !== t && m(t, {
                "agent_host.storage.blob_read.source": r,
                "agent_host.storage.blob_read.count": o,
                "agent_host.storage.blob_read.hit_count": n.hits,
                "agent_host.storage.blob_read.miss_count": n.misses,
                "agent_host.storage.blob_read.error_count": n.errors
            });
        }), this.observeSink(()=>{
            u.info(e, "Turn terminal blob reads", {
                ...l,
                sessionId: t,
                source: r,
                count: o,
                hits: n.hits,
                misses: n.misses,
                errors: n.errors
            });
        }), "host_sqlite" === r && n.misses > 0 && this.runtimeFault("host_blob_missing");
    }
    beginBlobReadSummary(e, t, r) {
        if (void 0 === r) return {
            ctx: e,
            finish: ()=>{}
        };
        const n = (0, i.I)(e, r);
        return {
            ctx: n.ctx,
            finish: ()=>this.reportBlobReads(n.ctx, t, n.source, n.counts)
        };
    }
    runtimeFault(e) {
        this.distribution(e, 1, {
            store: "session"
        }), this.fault({
            kind: e,
            store: "session"
        });
    }
    rejectHostOwnedLegacyBlobRead() {
        throw this.runtimeFault("host_owned_legacy_blob_read"), new Error("Host-owned session attempted a legacy blob read");
    }
    async timeAsync(e, t, r, n) {
        if (!this.sessionEnabled) return r(t);
        const s = performance.now();
        try {
            const o = await this.runWithParentedSpan(e, t, r, n);
            return this.distribution(`${e}_ms`, performance.now() - s, {
                outcome: "ok"
            }), o;
        } catch (t) {
            throw this.distribution(`${e}_ms`, performance.now() - s, {
                outcome: "error"
            }), t;
        }
    }
    time(e, t, r, n) {
        if (!this.sessionEnabled) return r();
        const s = Date.now(), o = performance.now();
        try {
            const i = r(), a = performance.now() - o;
            return this.distribution(`${e}_ms`, a, {
                outcome: "ok"
            }), this.recordCompletedSpan(e, t, s, a, ()=>({
                    outcome: "ok",
                    ...n?.(i)
                })), i;
        } catch (r) {
            const n = performance.now() - o;
            throw this.distribution(`${e}_ms`, n, {
                outcome: "error"
            }), this.recordCompletedSpan(e, t, s, n, ()=>h(r)), r;
        }
    }
    async runWithParentedSpan(e, t, r, n) {
        if (void 0 === (0, s.fU)(t) || !0 === t.get(s.n3)) return r(t);
        let o;
        try {
            return await (0, s.uj)(t.withName(d[e]), async (e, t)=>{
                o = (async ()=>{
                    try {
                        return {
                            kind: "ok",
                            value: await r(e)
                        };
                    } catch (e) {
                        return {
                            kind: "error",
                            error: e
                        };
                    }
                })();
                const s = await o;
                if ("ok" === s.kind) return this.observeSink(()=>{
                    m(t, {
                        outcome: "ok",
                        ...n?.(s.value)
                    });
                }), s.value;
                throw this.observeSink(()=>{
                    m(t, h(s.error));
                }), s.error;
            });
        } catch (e) {
            if (void 0 !== o) {
                const t = await o;
                if ("error" === t.kind) throw e !== t.error && this.reportSinkFailure(e), t.error;
                return this.reportSinkFailure(e), t.value;
            }
            return this.reportSinkFailure(e), r(t);
        }
    }
    recordCompletedSpan(e, t, r, n, o) {
        void 0 !== (0, s.fU)(t) && !0 !== t.get(s.n3) && this.observeSink(()=>{
            (0, s.xd)(t.withName(d[e]), {
                startTime: r,
                attributes: o()
            }, r + n);
        });
    }
    observeSink(e) {
        try {
            e();
        } catch (e) {
            this.reportSinkFailure(e);
        }
    }
    observe(e) {
        const t = {
            ...l,
            store: e.store,
            relPath: e.relPath
        };
        switch(e.kind){
            case "opened":
                return this.distribution("open_ms", e.durationMs, {
                    store: e.store,
                    outcome: "ok",
                    created: String(e.created)
                }), this.debug("Agent host store opened", {
                    ...t,
                    created: e.created,
                    durationMs: e.durationMs
                }), void this.warnIfSlow(e);
            case "open_failed":
                return this.distribution("open_ms", e.durationMs, {
                    store: e.store,
                    outcome: "error"
                }), e.error instanceof a.C8 ? void this.debug("Agent host store is not committed yet", {
                    ...t,
                    durationMs: e.durationMs
                }) : void (this.warnIfContention(e) || (this.fault({
                    ...e,
                    kind: "open_failed"
                }), this.debug("Agent host store open failed", {
                    ...t,
                    code: e.code,
                    sqliteErrcode: e.sqliteErrcode,
                    durationMs: e.durationMs
                })));
            case "transaction":
                return this.distribution("transaction_ms", e.durationMs, {
                    store: e.store,
                    outcome: e.outcome
                }), void ("committed" === e.outcome ? (this.debug("Agent host store transaction committed", {
                    ...t,
                    durationMs: e.durationMs
                }), this.warnIfSlow(e)) : "rollback_failed" === e.outcome ? (this.fault({
                    kind: "rollback_failed",
                    store: e.store,
                    relPath: e.relPath,
                    durationMs: e.durationMs,
                    code: e.code,
                    sqliteErrcode: e.sqliteErrcode
                }), this.error("Agent host store transaction failed and could not roll back; the file may be inconsistent", {
                    ...t,
                    code: e.code,
                    sqliteErrcode: e.sqliteErrcode,
                    durationMs: e.durationMs
                })) : this.warnIfContention(e) || this.debug("Agent host store transaction rolled back", {
                    ...t,
                    code: e.code,
                    sqliteErrcode: e.sqliteErrcode,
                    durationMs: e.durationMs
                }));
            case "closed_store_use":
                return void this.warnRateLimited("closed", e.relPath, "Agent host store used after close", t);
        }
    }
    fault(e) {
        try {
            this.args.onStorageFault?.(e);
        } catch (e) {
            this.reportSinkFailure(e);
        }
    }
    distribution(e, t, r) {
        try {
            this.args.metrics?.distribution({
                stat: `agent_host.storage.${e}`,
                value: t,
                ...void 0 === r ? {} : {
                    tags: r
                }
            });
        } catch (e) {
            this.reportSinkFailure(e);
        }
    }
    reportSinkFailure(e) {
        const t = Date.now(), r = this.lastWarnAtMs.get("sink:");
        if (!(void 0 !== r && t - r < c)) {
            this.lastWarnAtMs.set("sink:", t);
            try {
                console.warn("Agent host storage sink failed", e instanceof Error ? e.name : typeof e);
            } catch (e) {
                e instanceof Error && e.name;
            }
        }
    }
    ctx() {
        return this.args.ctx?.() ?? (0, o.q6)();
    }
    debug(e, t) {
        void 0 !== this.args.ctx && u.debug(this.args.ctx(), e, t);
    }
    error(e, t) {
        u.error(this.ctx(), e, void 0, t);
    }
    warnIfSlow(e) {
        e.durationMs > 1e3 && this.warnRateLimited("slow", e.relPath, `Agent host store ${"opened" === e.kind ? "open" : "transaction"} waited on a peer`, {
            ...l,
            store: e.store,
            relPath: e.relPath,
            durationMs: e.durationMs
        });
    }
    warnIfContention(e) {
        return (5 === (t = e.sqliteErrcode) || 6 === t) && (this.fault({
            kind: "busy_exhausted",
            store: e.store,
            relPath: e.relPath,
            durationMs: e.durationMs,
            code: e.code,
            sqliteErrcode: e.sqliteErrcode
        }), this.warnRateLimited("busy", e.relPath, `Agent host store ${"open_failed" === e.kind ? "open" : "transaction"} gave up waiting for a peer`, {
            ...l,
            store: e.store,
            relPath: e.relPath,
            sqliteErrcode: e.sqliteErrcode,
            durationMs: e.durationMs
        }), !0);
        var t;
    }
    warnRateLimited(e, t, r, n) {
        const s = `${e}:${t}`, o = Date.now(), i = this.lastWarnAtMs.get(s);
        void 0 !== i && o - i < c || (this.lastWarnAtMs.set(s, o), u.warn(this.ctx(), r, n));
    }
}
function m(e, t) {
    for (const [r, n] of Object.entries(t))e.setAttribute(r, n);
}
function h(e) {
    const { code: t, sqliteErrcode: r } = (0, a.CA)(e);
    return {
        outcome: "error",
        "error.type": e instanceof Error ? e.name : typeof e,
        ...void 0 === t ? {} : {
            "error.code": t
        },
        ...void 0 === r ? {} : {
            "error.sqlite_errcode": r
        }
    };
}
function f(e) {
    const t = (t)=>t.split(e.storageDir).join("<storageDir>");
    let r;
    const n = (e)=>{
        try {
            e();
        } catch (e) {
            const t = Date.now();
            if (void 0 !== r && t - r < c) return;
            r = t;
            try {
                console.warn("Agent host storage logger failed", e instanceof Error ? e.name : typeof e);
            } catch (e) {
                e instanceof Error && e.name;
            }
        }
    };
    return {
        info: (r)=>{
            n(()=>u.info(e.ctx(), t(r), l));
        },
        warn: (r)=>{
            n(()=>u.warn(e.ctx(), t(r), l));
        },
        error: (r, s, o)=>{
            n(()=>u.error(e.ctx(), t(r), g(s, e.storageDir), {
                    ...Object.fromEntries(Object.entries(o ?? {}).map(([e, r])=>[
                            e,
                            "string" == typeof r ? t(r) : r
                        ])),
                    ...l
                }));
        }
    };
}
function g(e, t) {
    if (void 0 === e) return;
    const r = (e)=>e.split(t).join("<storageDir>");
    if (!(e instanceof Error)) return new Error(r(String(e)));
    const n = new Error(r(e.message));
    return n.name = e.name, n.stack = void 0 === e.stack ? void 0 : r(e.stack), n;
}
p.none = new p({});
