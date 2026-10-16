"use strict";
require.d(exports, {
    OJ: ()=>c,
    ng: ()=>h,
    jC: ()=>x,
    ae: ()=>tt
});
var n = require("./module-27998.js"), s = require("./module-62671.js"), o = require("./module-65716.js");
function i(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = e.event;
    return "backgrounded" === t?.case;
}
function a(e) {
    if ("object" != typeof e || null === e) return;
    const t = e.path;
    return "string" == typeof t && t.length > 0 ? t : void 0;
}
class c {
    cacheCarriersForExecId(e, t) {
        const r = this.carriersByExecId.get(e);
        if (!(void 0 !== r && r.length > 0 && 0 === t.length)) for(this.carriersByExecId.has(e) && this.carriersByExecId.delete(e), this.carriersByExecId.set(e, t); this.carriersByExecId.size > c.CARRIERS_BY_EXEC_ID_MAX;){
            const e = this.carriersByExecId.keys().next().value;
            if (void 0 === e) break;
            this.carriersByExecId.delete(e);
        }
    }
    constructor(e, t, r, n){
        this.inner = e, this.wake = r, this.carriersByExecId = new Map, this.inFlightByExecId = new Map, this.resolveDrain = "function" == typeof t ? t : (e)=>t, this.skipPathWriteDrain = n?.skipPathWriteDrain, this.onWakeWrittenPath = n?.onWakeWrittenPath, this.forceWrittenPathBeforeDrain = n?.forceWrittenPathBeforeDrain, this.writeBarrierTimeoutMs = n?.writeBarrierTimeoutMs ?? 2e3, this.resolveWriteBarrierTimeoutMs = n?.resolveWriteBarrierTimeoutMs, this.onWriteBarrier = n?.onWriteBarrier;
    }
    resolveTimeoutMs() {
        if (void 0 !== this.resolveWriteBarrierTimeoutMs) try {
            const e = this.resolveWriteBarrierTimeoutMs();
            if ("number" == typeof e && Number.isFinite(e)) return e;
        } catch  {}
        return this.writeBarrierTimeoutMs;
    }
    get(e) {
        return this.wrapImpl(e.symbol, this.inner.get(e));
    }
    *entries() {
        for (const [e, t] of this.inner.entries())yield [
            e,
            this.wrapImpl(e.symbol, t)
        ];
    }
    wrapImpl(e, t) {
        if (!function(e) {
            return "object" == typeof e && null !== e && "execute" in e && "function" == typeof e.execute;
        }(t)) return t;
        const r = function(e) {
            return e === n.Lnu.symbol || e === n.RpG.symbol || e === n.ohZ.symbol || e === n.PiX.symbol ? {
                kind: "path"
            } : e === n.qkk.symbol || e === n.wve.symbol || e === n.OkD.symbol || e === n.TZ.symbol ? {
                kind: "exposed"
            } : void 0;
        }(e), c = this.resolveDrain, l = this.wake, u = this.skipPathWriteDrain, d = this.forceWrittenPathBeforeDrain, p = ()=>this.resolveTimeoutMs(), m = this.onWriteBarrier, h = this.onWakeWrittenPath, f = (e, t)=>{
            if (void 0 !== r && void 0 !== l) try {
                if ("path" === r.kind) {
                    const r = a(e);
                    void 0 !== r && (l.wakeForWrittenPath(r), h?.(r, t));
                } else l.wakeExposedMounts();
            } catch  {}
        }, g = this.cacheCarriersForExecId.bind(this), y = this.carriersByExecId, w = this.inFlightByExecId, v = async (e, t)=>{
            const r = t?.hookContextCollector;
            if (void 0 === r) return [];
            if (!1 === t?.deliverAgentStoreConflictNotices) return [];
            const n = void 0 !== t?.execId && t.execId.length > 0 ? t.execId : void 0;
            if (void 0 !== n) {
                const e = y.get(n);
                if (void 0 !== e) return e.length > 0 && r.push(...e), e;
                const t = w.get(n);
                if (void 0 !== t) {
                    const e = await t;
                    return e.length > 0 && r.push(...e), e;
                }
            }
            const s = async (t)=>{
                const r = c(e);
                let s = [];
                try {
                    const e = await r.peek();
                    if (s = e.eventIds, e.carriers.length > 0) return t.push(...e.carriers), r.ack(e.eventIds), void 0 !== n && g(n, e.carriers), e.carriers;
                    s.length > 0 && r.ack(s);
                    const o = [];
                    return void 0 !== n && g(n, o), o;
                } catch  {
                    return s.length > 0 && r.release(s), [];
                }
            };
            if (void 0 === n) return await s(r);
            const o = s(r);
            w.set(n, o);
            try {
                return await o;
            } finally{
                w.get(n) === o && w.delete(n);
            }
        };
        return new Proxy(t, {
            get: (t, c, l)=>"execute" !== c ? Reflect.get(t, c, l) : (c, l, h)=>{
                    const g = t.execute.call(t, c, l, h);
                    return "object" == typeof (y = g) && null !== y && Symbol.asyncIterator in y && "function" == typeof y[Symbol.asyncIterator] ? async function*() {
                        let t = !1, r = !1, o = !1;
                        try {
                            for await (const r of g)if (e === n.wve.symbol && i(r)) {
                                if (!t) {
                                    f(l, c);
                                    const e = await v(c, h);
                                    t = !0, e.length > 0 && (yield new s.FI({
                                        event: {
                                            case: "hookContext",
                                            value: new s.Ng({
                                                hookAdditionalContexts: [
                                                    ...e
                                                ]
                                            })
                                        }
                                    }));
                                }
                                yield r;
                            } else yield r;
                            o = !0;
                        } catch (e) {
                            throw r = !0, e;
                        } finally{
                            f(l, c), t || r || !o || await v(c, h);
                        }
                    }() : function(e) {
                        return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then;
                    }(g) ? (async ()=>{
                        try {
                            const t = await g;
                            f(l, c);
                            return e === n.Lnu.symbol && !0 === u?.() && !0 === h?.enableAgentStoreConflictNotices || (await async function(e, t, r, n) {
                                const s = (e)=>{
                                    try {
                                        n.onWriteBarrier?.(e);
                                    } catch  {}
                                };
                                if (void 0 === e || "path" !== r?.kind) return;
                                const i = a(t);
                                if (void 0 === i) return;
                                if (!(n.timeoutMs > 0)) return void s({
                                    durationMs: 0,
                                    outcome: "skipped"
                                });
                                const c = Date.now(), l = e(i).then((e)=>e, ()=>"error"), u = await Promise.race([
                                    l,
                                    (0, o.cb)(n.timeoutMs).then(()=>"timeout")
                                ]);
                                "not_store_path" !== u && s({
                                    durationMs: Date.now() - c,
                                    outcome: u
                                });
                            }(d, l, r, {
                                timeoutMs: p(),
                                onWriteBarrier: m
                            }), await v(c, h)), t;
                        } catch (e) {
                            throw f(l, c), e;
                        }
                    })() : (f(l, c), g);
                    var y;
                }
        });
    }
}
c.CARRIERS_BY_EXEC_ID_MAX = 32;
var l = require("./module-76760.js"), u = require("./module-93181.js"), d = require("./module-90393.js"), p = (require("./module-84683.js"), require("./module-75149.js"));
function m(e) {
    return {
        v: e.v,
        eventId: e.event_id,
        journalEpoch: e.journal_epoch,
        seq: e.seq,
        tsMs: e.ts_ms,
        kind: e.kind,
        ...void 0 !== e.store_id ? {
            storeId: e.store_id
        } : {},
        ...void 0 !== e.original_rel_path ? {
            originalRelPath: e.original_rel_path
        } : {},
        ...void 0 !== e.conflict_rel_path ? {
            conflictRelPath: e.conflict_rel_path
        } : {},
        ...void 0 !== e.original_abs_path ? {
            originalAbsPath: e.original_abs_path
        } : {},
        ...void 0 !== e.conflict_abs_path ? {
            conflictAbsPath: e.conflict_abs_path
        } : {},
        ...void 0 !== e.preserved_bytes ? {
            preservedBytes: e.preserved_bytes
        } : {},
        ...void 0 !== e.scope_kind ? {
            scopeKind: e.scope_kind
        } : {},
        ...void 0 !== e.limit_bytes ? {
            limitBytes: e.limit_bytes
        } : {},
        ...void 0 !== e.usage_bytes ? {
            usageBytes: e.usage_bytes
        } : {},
        ...void 0 !== e.source ? {
            source: e.source
        } : {},
        ...!0 === e.remote_only ? {
            remoteOnly: !0
        } : {}
    };
}
class h {
    constructor(e){
        this.pending = new Map, this.leased = new Map, this.deferredEagerWrittenPaths = new Set, this.deferredWakeWrittenPaths = new Set, this.deferredForceWrittenPaths = new Set, this.drainChain = Promise.resolve(), this.driver = e.driver, this.sessionStartedAtMs = e.sessionStartedAtMs, this.claimState = e.claimState, this.announced = e.claimState?.announced ?? e.announcedEventIds ?? new Set, this.leasedIds = e.claimState?.leasedIds ?? new Set, this.quotaNoticesEnabled = "function" == typeof e.quotaNoticesEnabled ? e.quotaNoticesEnabled : ()=>!0 === e.quotaNoticesEnabled, this.cursors = new Map, this.defaultTimeoutMs = e.defaultTimeoutMs ?? 5e3, this.resolveForceGraceTimeoutMs = e.resolveForceGraceTimeoutMs, this.warn = e.warn ?? (()=>{});
    }
    async execute(e, t, r) {
        switch(t.op){
            case "ack":
                return this.ack(t.eventIds);
            case "release":
                return this.release(t.eventIds);
            case "noteDeferredEagerWrittenPaths":
                return this.noteDeferredEagerWrittenPaths(t);
            case "peek":
                return await this.peek(t);
            case "syncAndPeek":
                return await this.syncAndPeek(t);
            default:
                return {
                    kind: "failed",
                    error: "unknown op"
                };
        }
    }
    noteDeferredEagerWrittenPaths(e) {
        const t = e.writtenPaths;
        if (0 === t.length) return {
            kind: "noted",
            count: 0
        };
        const r = this.deferredForceWrittenPaths.size, n = new Set;
        for (const e of t){
            const t = this.driver.resolveMountKeyForPath(e);
            void 0 !== t && n.add(t);
        }
        const s = this.mountsForSyncAndPeek({
            conversationId: e.conversationId,
            eager: !0,
            writtenMountKeys: n
        });
        return this.rememberDeferredForInheritedWrittenPaths(s, t), {
            kind: "noted",
            count: Math.max(0, this.deferredForceWrittenPaths.size - r)
        };
    }
    ack(e) {
        const t = e.filter((e)=>this.leased.has(e)), r = (0, d._3)(this.announced, t), n = [];
        for (const e of t){
            const t = this.leased.get(e) ?? this.pending.get(e), r = t?.event.original_abs_path;
            "string" == typeof r && r.length > 0 && n.push(r), this.pending.delete(e), this.leased.delete(e), this.leasedIds.delete(e);
        }
        return this.clearDeferredEagerWrittenPathsMatchingPaths(n), this.clearDeferredWakeWrittenPathsMatchingPaths(n), this.clearDeferredForceWrittenPathsMatchingPaths(n), {
            kind: "acked",
            count: r
        };
    }
    release(e) {
        const t = this.leased.size;
        return this.releaseLeased(e), {
            kind: "released",
            count: Math.max(0, t - this.leased.size)
        };
    }
    releaseAllLeased() {
        this.releaseLeased([
            ...this.leased.keys()
        ]);
    }
    ackAllLeased() {
        this.ack([
            ...this.leased.keys()
        ]);
    }
    noteDeferredWrittenPaths(e) {
        for (const t of e){
            const e = this.resolveWrittenPathForDeferred(t);
            void 0 !== e && this.deferredWakeWrittenPaths.add(e);
        }
    }
    async peek(e) {
        const t = this.driver.listMounts(e.conversationId).filter((e)=>!1 !== e.deliverEvents);
        if (0 === t.length) return {
            kind: "not-applicable"
        };
        const { events: r, gap: n } = await this.drainMounts(t, {
            lease: !0
        });
        return this.completedOrRelease(r, n);
    }
    async syncAndPeek(e) {
        const t = !0 === e.eager, r = !1 !== e.rememberEagerDeferral;
        let n = [], s = !1;
        const i = t ? [] : [
            ...this.deferredWakeWrittenPaths
        ], a = t || 0 !== (e.writtenPaths?.length ?? 0) ? t ? [] : [
            ...this.deferredForceWrittenPaths
        ].filter((t)=>y({
                original_abs_path: t
            }, e.writtenPaths ?? [])) : [
            ...this.deferredForceWrittenPaths
        ], c = g([
            ...this.deferredEagerWrittenPaths,
            ...a,
            ...i
        ]);
        if (!t && c.length > 0) {
            const t = c, r = await this.syncAndPeek({
                ...e,
                writtenPaths: t,
                eager: !0,
                rememberEagerDeferral: !1
            });
            ("completed" === r.kind || "timed-out" === r.kind) && r.events.length > 0 && void 0 !== r.reminder && r.reminder.length > 0 && (n = [
                ...r.events
            ], s = "completed" === r.kind && !0 === r.gap);
        }
        const l = (e)=>{
            if (!t) {
                if (!("not-applicable" === e.kind || "timed-out" === e.kind && 0 === e.events.length)) for (const e of i)this.deferredWakeWrittenPaths.delete(e);
            }
            return this.mergeDeferredRescueIntoBarrier(e, n, s);
        }, u = t ? e.writtenPaths ?? [] : g([
            ...e.writtenPaths ?? [],
            ...this.deferredEagerWrittenPaths,
            ...a,
            ...i
        ]), d = new Set, p = [];
        for (const e of u){
            const t = this.driver.resolveMountKeyForPath(e);
            void 0 !== t && d.add(t), p.push(this.driver.resolveWrittenPathAbs?.(e) ?? e);
        }
        if (t && u.length > 0 && 0 === d.size) return l({
            kind: "not-applicable"
        });
        const m = this.driver.listMounts(e.conversationId), h = new Set(m.map((e)=>e.mountKey)), f = this.mountsForSyncAndPeek({
            conversationId: e.conversationId,
            eager: t,
            writtenMountKeys: d,
            conversationMounts: m
        });
        if (0 === f.length) return l({
            kind: "not-applicable"
        });
        const w = t ? [
            ...d
        ] : [
            ...new Set([
                ...f.filter((e)=>d.has(e.mountKey) || this.safeIsDirty(e.mountKey)).map((e)=>e.mountKey),
                ...d
            ])
        ], v = f.filter((e)=>!1 === e.deliverEvents ? d.has(e.mountKey) : h.has(e.mountKey));
        if (0 === w.length) {
            const e = await this.drainMounts(v, {
                lease: !0,
                advanceCursor: !t,
                ...t ? {
                    parkWrittenPaths: p
                } : {
                    restrictInheritedToWrittenPaths: p
                }
            }), r = this.scopeDrainedEvents(e.events, {
                eager: t,
                writtenPaths: p
            }), n = this.shouldUseStrongEagerAttribution(t, u);
            return r.length > 0 && this.rememberDeferredForInheritedWrittenPaths(f, u), l(this.completedOrRelease(r, e.gap, n));
        }
        const _ = this.claimState ?? {
            chain: this.drainChain
        };
        let b;
        const S = new Promise((e)=>{
            b = e;
        }), k = _.chain, x = k.then(()=>S);
        _.chain = x, void 0 === this.claimState && (this.drainChain = x);
        const E = new Map;
        if (t) for (const e of u){
            const t = this.driver.resolveMountKeyForPath(e);
            void 0 !== t && (E.has(t) ? E.set(t, void 0) : E.set(t, e));
        }
        let I = !1, T = [], C = [], P = !1;
        const A = e.timeoutMs ?? this.defaultTimeoutMs;
        try {
            const e = w.map((e)=>this.safeForceSyncMount({
                    mountKey: e,
                    absPath: t ? E.get(e) : void 0,
                    timeoutMs: A
                })), r = Promise.allSettled(e);
            if (A > 0) {
                const e = await Promise.race([
                    r.then((e)=>({
                            done: !0,
                            results: e
                        })),
                    (0, o.cb)(A).then(()=>({
                            done: !1
                        }))
                ]);
                if (e.done) T = e.results;
                else {
                    I = !0;
                    const e = await this.raceForceGrace(r);
                    void 0 !== e && (T = e);
                }
            } else T = await r;
            await k;
            const n = await this.drainMountsUnlocked(v, {
                lease: !0,
                advanceCursor: !t,
                ...t ? {
                    parkWrittenPaths: p
                } : {
                    restrictInheritedToWrittenPaths: p
                }
            });
            P = n.gap, C = this.scopeDrainedEvents(n.events, {
                eager: t,
                writtenPaths: p
            });
        } finally{
            b();
        }
        const R = this.shouldUseStrongEagerAttribution(t, u);
        if (C.length > 0 && this.rememberDeferredForInheritedWrittenPaths(f, u), I) {
            if (0 === C.length) return t && r && u.length > 0 && this.rememberDeferredEagerWrittenPaths(u), l({
                kind: "timed-out",
                events: []
            });
            const e = this.renderReminder(C, R), n = this.releaseSuppressedQuotaEvents(C);
            return 0 === n.length ? (t && r && u.length > 0 && this.rememberDeferredEagerWrittenPaths(u), l({
                kind: "timed-out",
                events: []
            })) : void 0 === e ? (this.ack(n.map((e)=>e.eventId)), t && r && u.length > 0 && this.rememberDeferredEagerWrittenPaths(u), l({
                kind: "timed-out",
                events: []
            })) : l({
                kind: "timed-out",
                events: n,
                reminder: e
            });
        }
        const M = new Set(v.map((e)=>e.mountKey)), J = w.some((e, t)=>{
            if (!M.has(e)) return !1;
            const r = T[t];
            return void 0 !== r && "fulfilled" === r.status && ("passive" === r.value || "absent" === r.value || "error" === r.value || "denied" === r.value);
        });
        if (0 === C.length && J) return t && r && u.length > 0 && this.rememberDeferredEagerWrittenPaths(u), l({
            kind: "mount-passive"
        });
        if (0 === C.length && t && u.length > 0 && T.length > 0 && T.every((e)=>"fulfilled" === e.status && "synced" === e.value)) {
            const e = new Set(f.filter((e)=>!1 === e.deliverEvents).map((e)=>e.mountKey));
            this.clearDeferredEagerWrittenPathsMatchingPaths(u.map((e)=>this.resolveWrittenPathForDeferred(e) ?? e), {
                retainMountKeys: e
            });
        }
        return l(this.completedOrRelease(C, P, R));
    }
    mergeDeferredRescueIntoBarrier(e, t, r) {
        if (0 === t.length) return e;
        const n = "completed" === e.kind || "timed-out" === e.kind ? e.events : [], s = new Set, o = [];
        for (const e of [
            ...t,
            ...n
        ])s.has(e.eventId) || (s.add(e.eventId), o.push(e));
        const i = r || "completed" === e.kind && !0 === e.gap;
        return this.completedOrRelease(o, i, !1);
    }
    resolveWrittenPathForDeferred(e) {
        const t = e.trim();
        if (0 !== t.length) return this.driver.resolveWrittenPathAbs?.(t) ?? t;
    }
    rememberDeferredEagerWrittenPaths(e) {
        for (const t of e){
            const e = this.resolveWrittenPathForDeferred(t);
            void 0 !== e && this.deferredEagerWrittenPaths.add(e);
        }
    }
    clearDeferredWakeWrittenPathsMatchingPaths(e) {
        if (0 !== this.deferredWakeWrittenPaths.size && 0 !== e.length) for (const t of [
            ...this.deferredWakeWrittenPaths
        ])y({
            original_abs_path: t
        }, e) && this.deferredWakeWrittenPaths.delete(t);
    }
    rememberDeferredForceWrittenPaths(e) {
        for (const t of e){
            const e = this.resolveWrittenPathForDeferred(t);
            void 0 !== e && this.deferredForceWrittenPaths.add(e);
        }
    }
    clearDeferredForceWrittenPathsMatchingPaths(e) {
        if (0 !== this.deferredForceWrittenPaths.size && 0 !== e.length) for (const t of [
            ...this.deferredForceWrittenPaths
        ])y({
            original_abs_path: t
        }, e) && this.deferredForceWrittenPaths.delete(t);
    }
    shouldUseStrongEagerAttribution(e, t) {
        if (!e) return !1;
        if (0 === t.length || 0 === this.deferredEagerWrittenPaths.size) return !0;
        const r = [
            ...this.deferredEagerWrittenPaths
        ];
        for (const e of t){
            if (y({
                original_abs_path: this.resolveWrittenPathForDeferred(e) ?? e
            }, r)) return !1;
        }
        return !0;
    }
    rememberDeferredForInheritedWrittenPaths(e, t) {
        if (0 === t.length) return;
        const r = new Set(e.filter((e)=>!1 === e.deliverEvents).map((e)=>e.mountKey));
        if (0 === r.size) return;
        const n = t.filter((e)=>{
            const t = this.driver.resolveMountKeyForPath(e);
            return void 0 !== t && r.has(t);
        });
        this.rememberDeferredForceWrittenPaths(n);
    }
    clearDeferredEagerWrittenPathsMatchingPaths(e, t) {
        if (0 === this.deferredEagerWrittenPaths.size || 0 === e.length) return;
        const r = t?.retainMountKeys;
        for (const t of [
            ...this.deferredEagerWrittenPaths
        ])if (y({
            original_abs_path: t
        }, e)) {
            if (void 0 !== r && r.size > 0) {
                const e = this.driver.resolveMountKeyForPath(t);
                if (void 0 !== e && r.has(e)) continue;
            }
            this.deferredEagerWrittenPaths.delete(t);
        }
    }
    scopeDrainedEvents(e, t) {
        if (!t.eager) return [
            ...e
        ];
        const r = function(e, t) {
            if (0 === t.length) return [];
            const r = new Set(t.map(f));
            return e.filter((e)=>void 0 !== e.originalAbsPath && r.has(f(e.originalAbsPath)));
        }(e, t.writtenPaths), n = new Set(r.map((e)=>e.eventId)), s = e.filter((e)=>!n.has(e.eventId)).map((e)=>e.eventId);
        return this.releaseLeased(s), r;
    }
    mountsForSyncAndPeek(e) {
        e.eager;
        const t = e.conversationMounts ?? this.driver.listMounts(e.conversationId);
        if (0 === e.writtenMountKeys.size) return [
            ...t
        ];
        const r = new Set(t.map((e)=>e.mountKey)), n = [
            ...e.writtenMountKeys
        ].filter((e)=>!r.has(e));
        if (0 === n.length) return [
            ...t
        ];
        const s = this.driver.listMounts().filter((e)=>n.includes(e.mountKey));
        return [
            ...t,
            ...s
        ];
    }
    async raceForceGrace(e) {
        let t;
        try {
            t = this.resolveForceGraceTimeoutMs?.() ?? 2e3;
        } catch  {
            t = 2e3;
        }
        if (Number.isFinite(t) && !(t <= 0)) return await Promise.race([
            e,
            (0, o.cb)(t).then(()=>{})
        ]);
    }
    safeIsDirty(e) {
        try {
            return this.driver.isMountDirty(e);
        } catch (e) {
            return this.warn("conflict notice isMountDirty failed", e), !0;
        }
    }
    async safeForceSyncMount(e) {
        const { mountKey: t, absPath: r, timeoutMs: n } = e;
        try {
            return void 0 !== r && void 0 !== this.driver.forceSyncMountPath ? await this.driver.forceSyncMountPath({
                mountKey: t,
                absPath: r,
                timeoutMs: n
            }) : await this.driver.forceSyncMount(t);
        } catch (e) {
            return this.warn("conflict notice forceSyncMount failed", e), "absent";
        }
    }
    async drainMounts(e, t) {
        const r = this.claimState ?? {
            chain: this.drainChain
        }, n = r.chain.then(()=>this.drainMountsUnlocked(e, t)), s = n.then(()=>{}, ()=>{});
        return r.chain = s, void 0 === this.claimState && (this.drainChain = s), n;
    }
    async drainMountsUnlocked(e, t) {
        const r = !1 !== t?.advanceCursor, n = t?.parkWrittenPaths, s = t?.restrictInheritedToWrittenPaths, o = !0 === t?.lease;
        let i = !1;
        for (const t of e){
            const e = this.cursors.get(t.journalPath);
            let o;
            try {
                o = await (0, u.Ob)({
                    journalPath: t.journalPath,
                    cursor: e,
                    sessionStartedAtMs: this.sessionStartedAtMs,
                    applyResolvedFilter: !0
                });
            } catch (e) {
                this.warn("conflict journal read failed", e);
                continue;
            }
            const a = !1 === t.deliverEvents && void 0 !== s, c = void 0 !== n || a, l = (0, u.$U)({
                events: o.events,
                fullNextCursor: o.nextCursor,
                previousCursor: e,
                announced: this.announced,
                leasedIds: this.leasedIds,
                isOwnLease: (e)=>this.leased.has(e),
                continuePastForeignLeases: c
            });
            let d = l.deliverableEvents, p = l.nextCursor, m = o.gap;
            r && !a && this.cursors.set(t.journalPath, p), m && (i = !0);
            for (const e of d)this.leased.has(e.event_id) || this.leasedIds.has(e.event_id) || (void 0 === n || y(e, n)) && (!1 !== t.deliverEvents || void 0 === s || y(e, s)) && this.pending.set(e.event_id, {
                event: e,
                journalPath: t.journalPath
            });
        }
        for (const e of [
            ...this.pending.keys()
        ])(this.announced.has(e) || this.leasedIds.has(e)) && this.pending.delete(e);
        const a = new Set(e.map((e)=>e.journalPath)), c = new Set(e.filter((e)=>!1 !== e.deliverEvents).map((e)=>e.journalPath)), l = this.quotaNoticesEnabled(), d = [];
        for (const [e, t] of [
            ...this.pending
        ])if (a.has(t.journalPath) && (l || "quota_exceeded" !== t.event.kind) && (void 0 === s || c.has(t.journalPath) || y(t.event, s))) {
            try {
                if (!await (0, u.O9)(t.event)) {
                    this.pending.delete(e);
                    continue;
                }
            } catch (e) {
                this.warn("conflict pending resolve-check failed", e);
            }
            o && (this.pending.delete(e), this.leased.set(e, t), this.leasedIds.add(e)), d.push(m(t.event));
        }
        return {
            events: d,
            gap: i
        };
    }
    releaseLeased(e) {
        for (const t of e){
            const e = this.leased.get(t);
            void 0 !== e && (this.leased.delete(t), this.leasedIds.delete(t), this.announced.has(t) || this.pending.set(t, e));
        }
    }
    completedOrRelease(e, t, r = !1) {
        if (0 === e.length) return {
            kind: "completed",
            events: [],
            gap: t
        };
        const n = this.renderReminder(e, r), s = this.releaseSuppressedQuotaEvents(e);
        return 0 === s.length ? {
            kind: "completed",
            events: [],
            gap: t
        } : void 0 === n ? (this.ack(s.map((e)=>e.eventId)), {
            kind: "completed",
            events: [],
            gap: t
        }) : {
            kind: "completed",
            events: s,
            gap: t,
            reminder: n
        };
    }
    releaseSuppressedQuotaEvents(e) {
        if (this.quotaNoticesEnabled()) return [
            ...e
        ];
        const t = e.filter((e)=>"quota_exceeded" === e.kind).map((e)=>e.eventId);
        return 0 === t.length ? [
            ...e
        ] : (this.releaseLeased(t), e.filter((e)=>"quota_exceeded" !== e.kind));
    }
    renderReminder(e, t = !1) {
        const r = e.map((e)=>({
                v: e.v,
                event_id: e.eventId,
                journal_epoch: e.journalEpoch,
                seq: e.seq,
                ts_ms: e.tsMs,
                kind: e.kind,
                ...void 0 !== e.storeId ? {
                    store_id: e.storeId
                } : {},
                ...void 0 !== e.originalRelPath ? {
                    original_rel_path: e.originalRelPath
                } : {},
                ...void 0 !== e.conflictRelPath ? {
                    conflict_rel_path: e.conflictRelPath
                } : {},
                ...void 0 !== e.originalAbsPath ? {
                    original_abs_path: e.originalAbsPath
                } : {},
                ...void 0 !== e.conflictAbsPath ? {
                    conflict_abs_path: e.conflictAbsPath
                } : {},
                ...void 0 !== e.preservedBytes ? {
                    preserved_bytes: e.preservedBytes
                } : {},
                ...void 0 !== e.scopeKind ? {
                    scope_kind: e.scopeKind
                } : {},
                ...void 0 !== e.limitBytes ? {
                    limit_bytes: e.limitBytes
                } : {},
                ...void 0 !== e.usageBytes ? {
                    usage_bytes: e.usageBytes
                } : {},
                ...void 0 !== e.source ? {
                    source: e.source
                } : {},
                ...!0 === e.remoteOnly ? {
                    remote_only: !0
                } : {}
            })), n = this.quotaNoticesEnabled();
        return t ? (0, p.pq)(r, {
            maxChars: p.HA,
            includeQuotaNotices: n
        }) : (0, p.dN)(r, {
            maxChars: p.HA,
            includeQuotaNotices: n
        });
    }
}
function f(e) {
    const t = l.resolve(e);
    return "win32" === process.platform || "darwin" === process.platform ? t.toLowerCase() : t;
}
function g(e) {
    const t = new Set, r = [];
    for (const n of e){
        const e = n.trim();
        if (0 === e.length) continue;
        const s = f(e);
        t.has(s) || (t.add(s), r.push(e));
    }
    return r;
}
function y(e, t) {
    if (0 === t.length) return !1;
    const r = [
        e.original_abs_path,
        e.conflict_abs_path
    ].filter((e)=>void 0 !== e && e.length > 0);
    if (0 === r.length) return !1;
    const n = t.map((e)=>e.trim()).filter((e)=>e.length > 0).map(f);
    return 0 !== n.length && r.some((e)=>n.includes(f(e)));
}
require("./module-73024.js");
var w = require("./module-51455.js"), v = (require("./module-48161.js"), require("./module-46466.js"), require("./module-71831.js"), require("./module-91022.js"));
class _ extends Error {
    constructor(e){
        super(`Hook denied: ${e}`), this.failureType = "permission_denied", this.name = "HookDeniedError", this.reason = e;
    }
}
class b extends Error {
    constructor(e, t){
        super(`Hook failed (fail-closed): ${e}`), this.failureType = "error", this.name = "FailClosedError", this.reason = e, this.cause = t;
    }
}
async function S(e, t) {
    try {
        return await e();
    } catch (e) {
        const r = function(e, t) {
            const r = e ?? "Action", n = t ? `: ${t}` : ".";
            return `${r} was blocked because a configured hook failed to execute${n}\n\nThis is a safety measure (fail-closed) - when hooks cannot be evaluated, the action is blocked to prevent potentially unsafe operations.\n\n${k}`;
        }(t, e instanceof Error ? e.message : String(e));
        throw new b(r, e);
    }
}
const k = "To view or modify configured hooks, go to Cursor Settings > Hooks.", x = "Agent note: Do not suggest workarounds to the blocked tool.";
function E(e) {
    return e.includes(x) ? e : `${e}\n\n${x}`;
}
function I(e) {
    return `Tool blocked because this hook is configured to fail closed (block when it fails). ${e}`;
}
function T(e, t) {
    return E(`${t ? `${e} was blocked by a hook: ${t}` : `${e} was blocked by a hook.`}\n\n${k}`);
}
function C(e) {
    return function(e) {
        return e instanceof _;
    }(e) || function(e) {
        return e instanceof b;
    }(e);
}
var P = require("./module-77598.js"), A = require("./module-643.js"), R = require("./module-82142.js"), M = require("./module-37949.js"), J = require("./module-44272.js");
const O = (0, M.h)("generic-hooks");
function B(e, t, r, n) {
    try {
        return (0, J.JJ)({
            hookEventName: r,
            additionalContext: n
        });
    } catch (n) {
        if (n instanceof J.B1) return O.warn(e, `${r} additional_context exceeded max size; dropping carrier`, {
            toolName: t,
            hookEventName: r,
            actualLength: n.actualLength,
            maxLength: n.maxLength
        }), [];
        throw n;
    }
}
const D = (e)=>Math.round(1e3 * e) / 1e3;
function q(e, t, r, n, s, o) {
    const i = n(e), a = s.getToolCallId?.(t) ?? (0, P.randomUUID)(), c = s.getExtraHookFields?.(t) ?? {}, l = {
        baseHookRequest: i,
        toolUseId: a,
        toolInput: s.createToolInput(t),
        extraHookFields: c,
        hookContextCollector: o?.hookContextCollector ?? s.getHookContextCollector?.(t) ?? []
    }, u = function(e, t, r, n) {
        let { toolInput: s, extraHookFields: o, hookContextCollector: i } = n;
        const { baseHookRequest: a, toolUseId: c } = n;
        return {
            fireFailureAsync: async (n, l, u, d = !1)=>{
                try {
                    const p = await (0, R.vv)(e.signal, ()=>t.executeHookForStep(v._E.postToolUseFailure, {
                            ...a,
                            tool_name: r,
                            tool_input: s,
                            error_message: l,
                            failure_type: u,
                            duration: n,
                            tool_use_id: c,
                            is_interrupt: d,
                            ...o
                        }));
                    (0, J.Bv)(i, B(e, r, v._E.postToolUseFailure, p?.additional_context));
                } catch (t) {
                    O.warn(e, "postToolUseFailure hook error", {
                        toolName: r,
                        error: t instanceof Error ? t.message : String(t)
                    });
                }
            },
            fireSuccessAsync: async (n, l)=>{
                try {
                    const u = await (0, R.vv)(e.signal, ()=>t.executeHookForStep(v._E.postToolUse, {
                            ...a,
                            tool_name: r,
                            tool_input: s,
                            tool_output: l,
                            duration: n,
                            tool_use_id: c,
                            ...o
                        }));
                    (0, J.Bv)(i, B(e, r, v._E.postToolUse, u?.additional_context));
                } catch (t) {
                    O.warn(e, "postToolUse hook error", {
                        toolName: r,
                        error: t instanceof Error ? t.message : String(t)
                    });
                }
            },
            getToolInput: ()=>s,
            setToolInput: (e)=>{
                s = e;
            },
            setExtraHookFields: (e)=>{
                o = e, n.extraHookFields = e;
            }
        };
    }(e, r, s.toolName, l);
    return {
        hookContext: l,
        helpers: u
    };
}
async function N(e, t, r, n, s, o, i, a) {
    const { baseHookRequest: c, toolUseId: l, extraHookFields: u } = n;
    try {
        const a = await (0, R.vv)(e.signal, ()=>r.executeHookForStep(v._E.preToolUse, {
                ...c,
                tool_name: o.toolName,
                tool_input: s.getToolInput(),
                tool_use_id: l,
                ...u
            }));
        if ("deny" === a?.permission) {
            const r = a.user_message || `${o.toolName} blocked by preToolUse hook`, c = E(r);
            try {
                (0, J.Bv)(n.hookContextCollector, (0, J.JJ)({
                    hookEventName: v._E.preToolUse,
                    additionalContext: a.additional_context
                }));
            } catch (t) {
                if (!(t instanceof J.B1)) throw t;
                O.warn(e, "preToolUse deny additional_context exceeded max size; dropping carrier", {
                    toolName: o.toolName,
                    actualLength: t.actualLength,
                    maxLength: t.maxLength
                });
            }
            return await s.fireFailureAsync(0, r, "permission_denied"), {
                type: "rejected",
                result: i(t, c),
                reason: c
            };
        }
        a?.updated_input && o.applyUpdatedInput && (o.applyUpdatedInput(t, a.updated_input), s.setToolInput(o.createToolInput(t)), o.getExtraHookFields && s.setExtraHookFields(o.getExtraHookFields(t))), (0, J.Bv)(n.hookContextCollector, (0, J.JJ)({
            hookEventName: v._E.preToolUse,
            additionalContext: a?.additional_context
        }));
    } catch (n) {
        const a = r.hasFailClosedHooksForStep?.(v._E.preToolUse, o.toolName) ?? !1, c = n instanceof J.B1;
        if (a) {
            const e = I(`${c ? "preToolUse additional_context exceeded max size" : "preToolUse hook failed"}: ${n instanceof Error ? n.message : "preToolUse hook error"}`);
            return await s.fireFailureAsync(0, e, "error"), {
                type: "rejected",
                result: i(t, e),
                reason: e
            };
        }
        O.warn(e, c ? "preToolUse additional_context exceeded max size; dropping carrier" : "preToolUse hook error", {
            toolName: o.toolName,
            error: n instanceof Error ? n.message : String(n),
            ...c ? {
                actualLength: n.actualLength,
                maxLength: n.maxLength
            } : {}
        });
    }
    if (a) try {
        const o = await a({
            ctx: e,
            args: t,
            baseHookRequest: c,
            hookExecutor: r,
            toolInput: s.getToolInput(),
            toolUseId: l,
            extraHookFields: n.extraHookFields
        });
        if (void 0 !== o) {
            const e = "Pre-execution hook returned rejection";
            return await s.fireFailureAsync(0, e, "permission_denied"), {
                type: "rejected",
                result: o,
                reason: e
            };
        }
    } catch (e) {
        if (C(e)) return await s.fireFailureAsync(0, e.reason, e.failureType), {
            type: "rejected",
            result: i(t, e.reason),
            reason: e.reason
        };
        throw e;
    }
    return {
        type: "continue"
    };
}
function F(e) {
    return e.toolCallId;
}
function U(e, t, r, n) {
    return {
        async execute (s, o, i) {
            const { hookContext: a, helpers: c } = q(s, o, t, r, n, i);
            let l;
            try {
                l = await N(s, o, t, a, c, n, n.createRejectedResult, n.runPreExecutionHooks);
            } catch (e) {
                throw n.runCleanup?.(a.toolUseId), e;
            }
            if ("rejected" === l.type) return n.runCleanup?.(a.toolUseId), l.result;
            const u = A.performance.now();
            try {
                const r = await e.execute(s, o, i), l = D(A.performance.now() - u);
                if (n.runPostExecutionHooks) try {
                    const e = await n.runPostExecutionHooks({
                        ctx: s,
                        args: o,
                        result: r,
                        baseHookRequest: a.baseHookRequest,
                        hookExecutor: t,
                        toolInput: c.getToolInput(),
                        toolUseId: a.toolUseId,
                        executionDurationMs: l,
                        extraHookFields: a.extraHookFields
                    });
                    if (void 0 !== e) return await c.fireSuccessAsync(l, JSON.stringify(n.createSuccessOutput(o, e))), n.runCleanup?.(a.toolUseId), e;
                } catch (e) {
                    if (C(e)) return await c.fireFailureAsync(l, e.reason, e.failureType), n.runCleanup?.(a.toolUseId), n.createRejectedResult(o, e.reason);
                    O.warn(s, "postExecutionHooks error", {
                        toolName: n.toolName,
                        error: e instanceof Error ? e.message : String(e)
                    });
                }
                return n.isSuccess(r) ? await c.fireSuccessAsync(l, JSON.stringify(n.createSuccessOutput(o, r))) : await c.fireFailureAsync(l, n.getErrorMessage(r), n.getFailureType?.(r) ?? "error", n.isInterrupt?.(r) ?? !1), n.runCleanup?.(a.toolUseId), r;
            } catch (e) {
                const t = D(A.performance.now() - u);
                throw await c.fireFailureAsync(t, e instanceof Error ? e.message : String(e), "error"), n.runCleanup?.(a.toolUseId), e;
            }
        }
    };
}
function* L(e, t) {
    const r = t.hookContextCollector;
    e.createHookContextEvent && void 0 !== r && 0 !== r.length && (yield e.createHookContextEvent(r));
}
var $ = require("./module-89396.js");
class j {
    constructor(e, t, r, n){
        this.innerExecutor = e, this.hooksAdditionalContextPromise = t, this.teamHooksReadyPromise = r, this.hooksConfigLease = n;
    }
    async execute(e, t, r) {
        this.teamHooksReadyPromise && await this.teamHooksReadyPromise;
        const n = await this.innerExecutor.execute(e, t, r), s = await this.hooksAdditionalContextPromise, o = this.hooksConfigLease ? new $.Jy({
            configuredSteps: Array.from(this.hooksConfigLease.getConfiguredSteps())
        }) : void 0;
        if ("success" === n.result.case && (s || o)) {
            const e = n.result.value.requestContext, t = new $.bb({
                ...e,
                ...s && {
                    hooksAdditionalContext: s
                },
                ...o && {
                    hooksConfig: o
                }
            });
            return new $._G({
                result: {
                    case: "success",
                    value: new $.yW({
                        requestContext: t,
                        servedFromDiskCache: n.result.value.servedFromDiskCache
                    })
                }
            });
        }
        return n;
    }
}
var G = require("./module-44498.js"), z = require("./module-13574.js");
function W(e) {
    return !!e && e.type !== z.vc.INSECURE_NONE && e.type !== z.vc.UNSPECIFIED;
}
const H = "Read", K = "Write", V = "Delete", Y = "List", Q = "Grep", X = "Shell", Z = "WriteShellStdin", ee = "Fetch", te = "ReadLints", re = "ListMcpResources", ne = "FetchMcpResource", se = "ComputerUse", oe = "RecordScreen";
async function ie({ hookExecutor: e, baseHookRequest: t, toolUseId: r, command: s, cwd: o, sandbox: i }) {
    const a = await e.executeHookForStep(v._E.beforeShellExecution, {
        ...t,
        command: s,
        cwd: o,
        sandbox: i,
        tool_use_id: r
    });
    if ("deny" === a?.permission) {
        const e = T("Command execution", a.user_message);
        throw new _(e);
    }
    if ("ask" === a?.permission) return (0, n.$bB)(a.user_message);
}
const ae = {
    toolName: X,
    getToolCallId: F,
    createToolInput: (e)=>{
        const t = e.workingDirectory || "";
        return {
            command: e.command,
            cwd: t
        };
    },
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.command && (e.command = t.command), "string" == typeof t.cwd && (e.workingDirectory = t.cwd);
    },
    createRejectedResult: (e, t)=>new G.Lt({
            result: {
                case: "rejected",
                value: new s.pZ({
                    command: e.command,
                    workingDirectory: e.workingDirectory,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "BackgroundShell error";
            case "rejected":
                return e.result.value.reason || "BackgroundShell rejected";
            case "permissionDenied":
                return "Permission denied";
            case "sandboxUnsupported":
                return `Sandbox policy unsupported on this host: ${e.result.value.reason}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e, t)=>"success" === t.result.case ? {
            shell_id: t.result.value.shellId,
            pid: t.result.value.pid
        } : {
            success: !0
        },
    getExtraHookFields: (e)=>({
            cwd: e.workingDirectory || ""
        }),
    runPreExecutionHooks: async (e)=>{
        const { args: t, baseHookRequest: r, hookExecutor: s, toolUseId: o } = e, i = t.workingDirectory || "", a = W(t.sandboxPolicy);
        (0, n.oAs)(t, await ie({
            hookExecutor: s,
            baseHookRequest: r,
            toolUseId: o,
            command: t.command,
            cwd: i,
            sandbox: a
        }));
    }
};
class ce {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, ae);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
const le = {
    toolName: Z,
    createToolInput: (e)=>({
            shell_id: e.shellId,
            chars_length: e.chars.length
        }),
    createRejectedResult: (e, t)=>new G.nt({
            result: {
                case: "error",
                value: new G.Gv({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>"error" === e.result.case ? e.result.value.error || "WriteShellStdin error" : "Unknown error",
    createSuccessOutput: (e)=>({
            shell_id: e.shellId,
            success: !0
        })
};
class ue {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, le);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var de = require("./module-43643.js");
const pe = {
    toolName: se,
    getToolCallId: F,
    createToolInput: (e)=>({
            actions_count: e.actions.length
        }),
    createRejectedResult: (e, t)=>new de.ks({
            result: {
                case: "error",
                value: new de.Jb({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>"error" === e.result.case ? e.result.value.error || "ComputerUse error" : "Unknown error",
    createSuccessOutput: (e, t)=>"success" === t.result.case ? {
            action_count: t.result.value.actionCount,
            duration_ms: t.result.value.durationMs
        } : {
            success: !0
        }
};
class me {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, pe);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var he = require("./module-19260.js");
const fe = {
    toolName: V,
    getToolCallId: F,
    createToolInput: (e)=>({
            file_path: e.path
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.file_path && (e.path = t.file_path);
    },
    createRejectedResult: (e, t)=>new he.Pi({
            result: {
                case: "rejected",
                value: new he.iq({
                    path: e.path,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "fileNotFound":
                return `File not found: ${e.result.value.path}`;
            case "notFile":
                return `Not a file: ${e.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${e.result.value.path}`;
            case "fileBusy":
                return `File busy: ${e.result.value.path}`;
            case "rejected":
                return e.result.value.reason || "Delete rejected";
            case "error":
                return e.result.value.error || "Delete error";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e)=>({
            file_path: e.path,
            deleted: !0
        })
};
class ge {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, fe);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var ye = require("./module-26885.js");
const we = {
    toolName: te,
    getToolCallId: F,
    createToolInput: (e)=>({
            file_path: e.path
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.file_path && (e.path = t.file_path);
    },
    createRejectedResult: (e, t)=>new ye.Ek({
            result: {
                case: "rejected",
                value: new ye.J6({
                    path: e.path,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "Diagnostics error";
            case "rejected":
                return e.result.value.reason || "Diagnostics rejected";
            case "fileNotFound":
                return `File not found: ${e.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${e.result.value.path}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e, t)=>"success" === t.result.case ? {
            file_path: e.path,
            diagnostics_count: t.result.value.totalDiagnostics
        } : {
            file_path: e.path,
            success: !0
        }
};
class ve {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, we);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var _e = require("./module-31489.js");
const be = {
    toolName: ee,
    getToolCallId: F,
    createToolInput: (e)=>({
            url: e.url
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.url && (e.url = t.url);
    },
    createRejectedResult: (e, t)=>new _e.uN({
            result: {
                case: "error",
                value: new _e.fk({
                    url: e.url,
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>"error" === e.result.case ? e.result.value.error || "Fetch error" : "Unknown error",
    createSuccessOutput: (e, t)=>"success" === t.result.case ? {
            url: e.url,
            status_code: t.result.value.statusCode,
            content_length: t.result.value.content.length
        } : {
            url: e.url,
            success: !0
        }
};
class Se {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, be);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var ke = require("./module-59903.js");
const xe = {
    toolName: Q,
    getToolCallId: F,
    createToolInput: (e)=>({
            pattern: e.pattern,
            file_path: e.path,
            glob: e.glob,
            output_mode: e.outputMode
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.pattern && (e.pattern = t.pattern), "string" == typeof t.file_path && (e.path = t.file_path);
    },
    createRejectedResult: (e, t)=>new ke.Ud({
            result: {
                case: "error",
                value: new ke.ts({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>"error" === e.result.case ? e.result.value.error || "Grep error" : "Unknown error",
    createSuccessOutput: (e)=>({
            pattern: e.pattern,
            success: !0
        })
};
class Ee {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, xe);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var Ie = require("./module-72730.js");
const Te = {
    toolName: Y,
    getToolCallId: F,
    createToolInput: (e)=>({
            file_path: e.path,
            ignore: e.ignore
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.file_path && (e.path = t.file_path);
    },
    createRejectedResult: (e, t)=>new Ie.fv({
            result: {
                case: "rejected",
                value: new Ie.k2({
                    path: e.path,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "Ls error";
            case "rejected":
                return e.result.value.reason || "Ls rejected";
            case "timeout":
                return "Ls operation timed out";
            default:
                return "Unknown error";
        }
    },
    getFailureType: (e)=>"timeout" === e.result.case ? "timeout" : "error",
    createSuccessOutput: (e)=>({
            file_path: e.path,
            success: !0
        })
};
class Ce {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, Te);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var Pe = require("./module-11197.js"), Ae = require("./module-36038.js");
const Re = (0, M.h)("hooks-exec:mcp");
function Me(e, t, r, n) {
    try {
        return (0, J.JJ)({
            hookEventName: r,
            additionalContext: n
        });
    } catch (n) {
        if (n instanceof J.B1) return Re.warn(e, `${r} additional_context exceeded max size; dropping carrier`, {
            toolName: t,
            hookEventName: r,
            actualLength: n.actualLength,
            maxLength: n.maxLength
        }), [];
        throw n;
    }
}
class Je {
    constructor(e, t, r, n, s){
        this.innerExecutor = e, this.hookExecutor = t, this.baseHookRequestExtractor = r, this.mcpLease = n, this.hooksConfigLease = s;
    }
    async execute(e, t, r) {
        if (t.smartModeApprovalOnly) return this.innerExecutor.execute(e, t, r);
        if (t.symbolicPathArguments.length > 0 && (!0 === this.hooksConfigLease?.hasHookForStep(v._E.preToolUse) || !0 === this.hooksConfigLease?.hasHookForStep(v._E.beforeMCPExecution))) return new Pe.iz({
            result: {
                case: "error",
                value: new Pe.Nh({
                    error: `"${n.Eyz}" arguments can't be used on this computer: hooks that inspect MCP calls are configured here, and they would not see the file's contents. Read the file and pass its contents instead.`
                })
            }
        });
        const s = this.baseHookRequestExtractor(e), o = (0, P.randomUUID)(), i = r?.hookContextCollector ?? [];
        let a = Object.fromEntries(Object.entries(t.args).map(([e, t])=>[
                e,
                t?.toJson()
            ]));
        const c = `MCP:${t.toolName}`;
        try {
            const r = await this.hookExecutor.executeHookForStep(v._E.preToolUse, {
                ...s,
                tool_name: c,
                tool_input: a,
                tool_use_id: o
            });
            if ("deny" === r?.permission) {
                const t = r.user_message || "MCP tool blocked by preToolUse hook";
                try {
                    (0, J.Bv)(i, (0, J.JJ)({
                        hookEventName: v._E.preToolUse,
                        additionalContext: r.additional_context
                    }));
                } catch (t) {
                    if (!(t instanceof J.B1)) throw t;
                    Re.warn(e, "preToolUse deny additional_context exceeded max size; dropping carrier", {
                        toolName: c,
                        actualLength: t.actualLength,
                        maxLength: t.maxLength
                    });
                }
                return await this.firePostToolUseFailureAsync(e, s, c, a, t, "permission_denied", 0, o, !1, i), new Pe.iz({
                    result: {
                        case: "permissionDenied",
                        value: new Pe.HQ({
                            error: T("MCP tool execution", t),
                            isReadonly: !1
                        })
                    }
                });
            }
            if (r?.updated_input) try {
                for (const [e, n] of Object.entries(r.updated_input))void 0 !== n && (t.args[e] = Ae.Value.fromJson(n));
                a = Object.fromEntries(Object.entries(t.args).map(([e, t])=>[
                        e,
                        t?.toJson()
                    ]));
            } catch (t) {
                Re.warn(e, "Failed to merge updated_input for MCP", {
                    error: t instanceof Error ? t.message : String(t)
                });
            }
            (0, J.Bv)(i, (0, J.JJ)({
                hookEventName: v._E.preToolUse,
                additionalContext: r?.additional_context
            }));
        } catch (t) {
            const r = this.hookExecutor.hasFailClosedHooksForStep?.(v._E.preToolUse, c) ?? !1, n = t instanceof J.B1;
            if (r) {
                const r = I(`${n ? "preToolUse additional_context exceeded max size" : "preToolUse hook failed"}: ${t instanceof Error ? t.message : "preToolUse hook error"}`);
                return await this.firePostToolUseFailureAsync(e, s, c, a, r, "error", 0, o, !1, i), new Pe.iz({
                    result: {
                        case: "permissionDenied",
                        value: new Pe.HQ({
                            error: T("MCP tool execution", r),
                            isReadonly: !1
                        })
                    }
                });
            }
            Re.warn(e, n ? "preToolUse additional_context exceeded max size; dropping carrier" : "preToolUse hook error in MCP executor", {
                toolName: c,
                error: t instanceof Error ? t.message : String(t),
                ...n ? {
                    actualLength: t.actualLength,
                    maxLength: t.maxLength
                } : {}
            });
        }
        const l = await this.mcpLease?.getClient(e, t.providerIdentifier), u = l?.config;
        let d;
        const p = u && "url" in u && u.url ? u.url : void 0;
        if (void 0 !== p) d = {
            url: p
        };
        else if (u && "command" in u) {
            d = {
                command: [
                    u.command,
                    ...u.args ?? []
                ].filter(Boolean).join(" ")
            };
        } else d = {
            command: t.providerIdentifier
        };
        const m = {
            mcp_server_name: t.providerIdentifier,
            ...void 0 !== p ? {
                mcp_server_url: p
            } : {}
        }, h = {
            ...s,
            tool_name: t.toolName,
            tool_input: JSON.stringify(a),
            tool_use_id: o,
            ...m,
            ...d
        }, f = await this.hookExecutor.executeHookForStep(v._E.beforeMCPExecution, h);
        if ("deny" === f?.permission) {
            const t = T("MCP tool execution", f.user_message);
            return await this.firePostToolUseFailureAsync(e, s, c, a, t, "permission_denied", 0, o, !1, i), new Pe.iz({
                result: {
                    case: "permissionDenied",
                    value: new Pe.HQ({
                        error: t,
                        isReadonly: !1
                    })
                }
            });
        }
        const g = A.performance.now();
        try {
            const n = await this.innerExecutor.execute(e, t, r), l = D(A.performance.now() - g);
            let u = "{}";
            if ("success" === n.result.case) try {
                const e = n.result.value.content.map((e)=>"text" === e.content.case ? {
                        type: "text",
                        text: e.content.value.text
                    } : "image" === e.content.case ? {
                        type: "image",
                        data: Buffer.from(e.content.value.data).toString("base64"),
                        mimeType: e.content.value.mimeType
                    } : {
                        type: "unknown"
                    });
                u = JSON.stringify({
                    content: e,
                    isError: n.result.value.isError
                });
            } catch (t) {
                Re.warn(e, "Failed to serialize MCP result", {
                    error: t instanceof Error ? t.message : String(t)
                }), u = JSON.stringify({
                    error: "Failed to serialize result"
                });
            }
            else "error" === n.result.case ? u = JSON.stringify({
                error: n.result.value.error
            }) : "rejected" === n.result.case ? u = JSON.stringify({
                rejected: !0,
                reason: n.result.value.reason
            }) : "permissionDenied" === n.result.case && (u = JSON.stringify({
                permissionDenied: !0,
                error: n.result.value.error
            }));
            const d = {
                ...s,
                tool_name: t.toolName,
                tool_input: JSON.stringify(a),
                result_json: u,
                duration: l,
                tool_use_id: o,
                ...m
            };
            await this.hookExecutor.executeHookForStep(v._E.afterMCPExecution, d);
            const p = await this.firePostToolUse(e, s, c, a, u, l, o, i);
            if (void 0 !== p?.updated_mcp_tool_output) try {
                const e = p.updated_mcp_tool_output, t = [];
                if ("string" == typeof e) t.push(new Pe._Z({
                    content: {
                        case: "text",
                        value: new Pe.zN({
                            text: e
                        })
                    }
                }));
                else if ("object" == typeof e && null !== e && "content" in e && Array.isArray(e.content)) {
                    const r = e.content;
                    for (const e of r)"object" == typeof e && null !== e && "type" in e && "text" === e.type && "text" in e ? t.push(new Pe._Z({
                        content: {
                            case: "text",
                            value: new Pe.zN({
                                text: String(e.text)
                            })
                        }
                    })) : t.push(new Pe._Z({
                        content: {
                            case: "text",
                            value: new Pe.zN({
                                text: JSON.stringify(e)
                            })
                        }
                    }));
                } else t.push(new Pe._Z({
                    content: {
                        case: "text",
                        value: new Pe.zN({
                            text: JSON.stringify(e)
                        })
                    }
                }));
                const r = "object" == typeof e && null !== e && "isError" in e && Boolean(e.isError);
                return new Pe.iz({
                    result: {
                        case: "success",
                        value: new Pe.QW({
                            content: t,
                            isError: r
                        })
                    }
                });
            } catch (t) {
                return Re.warn(e, "Failed to process updated_mcp_tool_output", {
                    error: t instanceof Error ? t.message : String(t)
                }), n;
            }
            return n;
        } catch (t) {
            const r = D(A.performance.now() - g), n = t instanceof Error ? t.message : String(t);
            throw await this.firePostToolUseFailureAsync(e, s, c, a, n, "error", r, o, !1, i), t;
        }
    }
    async firePostToolUse(e, t, r, n, s, o, i, a) {
        try {
            const c = await this.hookExecutor.executeHookForStep(v._E.postToolUse, {
                ...t,
                tool_name: r,
                tool_input: n,
                tool_output: s,
                duration: o,
                tool_use_id: i
            });
            return (0, J.Bv)(a, Me(e, r, v._E.postToolUse, c?.additional_context)), c;
        } catch (t) {
            return void Re.warn(e, "postToolUse hook error in MCP executor", {
                error: t instanceof Error ? t.message : String(t)
            });
        }
    }
    async firePostToolUseFailureAsync(e, t, r, n, s, o, i, a, c, l) {
        try {
            const u = await this.hookExecutor.executeHookForStep(v._E.postToolUseFailure, {
                ...t,
                tool_name: r,
                tool_input: n,
                error_message: s,
                failure_type: o,
                duration: i,
                tool_use_id: a,
                is_interrupt: c
            });
            (0, J.Bv)(l, Me(e, r, v._E.postToolUseFailure, u?.additional_context));
        } catch (t) {
            Re.warn(e, "postToolUseFailure hook error in MCP executor", {
                error: t instanceof Error ? t.message : String(t)
            });
        }
    }
}
const Oe = {
    toolName: re,
    createToolInput: (e)=>({
            server: e.server
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.server && (e.server = t.server);
    },
    createRejectedResult: (e, t)=>new Pe.kP({
            result: {
                case: "error",
                value: new Pe.w2({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "ListMcpResources error";
            case "rejected":
                return e.result.value.reason || "ListMcpResources rejected";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e, t)=>"success" === t.result.case ? {
            resources_count: t.result.value.resources.length
        } : {
            success: !0
        }
};
class Be {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, Oe);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
const De = {
    toolName: ne,
    createToolInput: (e)=>({
            server: e.server,
            uri: e.uri,
            download_path: e.downloadPath
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.server && (e.server = t.server), "string" == typeof t.uri && (e.uri = t.uri), "string" == typeof t.download_path && (e.downloadPath = t.download_path);
    },
    createRejectedResult: (e, t)=>new Pe.ZD({
            result: {
                case: "error",
                value: new Pe.Jx({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "ReadMcpResource error";
            case "rejected":
                return e.result.value.reason || "ReadMcpResource rejected";
            case "notFound":
                return "Resource not found";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e, t)=>{
        if ("success" === t.result.case) {
            const r = t.result.value;
            return {
                uri: e.uri,
                name: r.name,
                mime_type: r.mimeType,
                download_path: r.downloadPath,
                content_type: r.content.case,
                content_length: "text" === r.content.case || "blob" === r.content.case ? r.content.value.length : void 0
            };
        }
        return {
            uri: e.uri,
            success: !0
        };
    }
};
class qe {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, De);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var Ne = require("./module-88623.js");
const Fe = {
    toolName: H,
    getToolCallId: F,
    createToolInput: (e)=>({
            file_path: e.path
        }),
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.file_path && (e.path = t.file_path);
    },
    createRejectedResult: (e, t)=>new Ne.sV({
            result: {
                case: "rejected",
                value: new Ne.f4({
                    path: e.path,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "error":
                return e.result.value.error || "Read error";
            case "rejected":
                return e.result.value.reason || "Read rejected";
            case "fileNotFound":
                return `File not found: ${e.result.value.path}`;
            case "permissionDenied":
                return `Permission denied: ${e.result.value.path}`;
            case "invalidFile":
                return `Invalid file: ${e.result.value.path}`;
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (e, t)=>{
        if ("success" === t.result.case) {
            const r = "content" === t.result.value.output.case ? t.result.value.output.value : "";
            return {
                file_path: e.path,
                content_length: r.length
            };
        }
        return {
            file_path: e.path,
            success: !0
        };
    },
    runPostExecutionHooks: async (e)=>{
        const { args: t, result: r, baseHookRequest: n, hookExecutor: s } = e;
        if ("success" !== r.result.case) return;
        const o = "content" === r.result.value.output.case ? r.result.value.output.value : "", i = await S(()=>s.executeHookForStep(v._E.beforeReadFile, {
                ...n,
                content: o,
                file_path: t.path,
                attachments: []
            }), "File read");
        if ("deny" === i?.permission) {
            const e = T("File read", i.user_message);
            throw new _(e);
        }
    }
};
class Ue {
    constructor(e, t, r){
        this.wrappedExecutor = new n.yJV(U(e, t, r, Fe));
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var Le = require("./module-11531.js");
const $e = {
    toolName: oe,
    getToolCallId: F,
    createToolInput: (e)=>({
            mode: e.mode,
            save_as_filename: e.saveAsFilename
        }),
    createRejectedResult: (e, t)=>new Le.Tj({
            result: {
                case: "failure",
                value: new Le.yH({
                    error: t
                })
            }
        }),
    isSuccess: (e)=>"failure" !== e.result.case,
    getErrorMessage: (e)=>"failure" === e.result.case ? e.result.value.error || "RecordScreen failed" : "Unknown error",
    createSuccessOutput: (e, t)=>({
            result_type: t.result.case
        })
};
class je {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, $e);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
function Ge(e) {
    return "success" === e.result.case || "failure" === e.result.case ? e.result.value.stdout + e.result.value.stderr : "";
}
const ze = {
    toolName: X,
    createToolInput: (e)=>{
        const t = e.workingDirectory || "", r = e.timeout;
        return {
            command: e.command,
            cwd: t,
            ..."number" == typeof r && r > 0 && {
                timeout: r
            }
        };
    },
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.command && (e.command = t.command), "string" == typeof t.cwd && (e.workingDirectory = t.cwd), "number" == typeof t.timeout && t.timeout >= 0 && (e.timeout = t.timeout);
    },
    createRejectedResult: (e, t)=>new s.W4({
            result: {
                case: "rejected",
                value: new s.pZ({
                    command: e.command,
                    workingDirectory: e.workingDirectory,
                    reason: t
                })
            }
        }),
    isSuccess: (e)=>"success" === e.result.case || "failure" === e.result.case && !e.result.value.aborted,
    getErrorMessage: (e)=>{
        switch(e.result.case){
            case "timeout":
                return `Command timed out after ${e.result.value.timeoutMs}ms`;
            case "spawnError":
                return e.result.value.error || "Failed to spawn command";
            case "failure":
                return e.result.value.aborted ? "Command was aborted" : "Command failed";
            case "rejected":
                return e.result.value.reason || "Command rejected";
            default:
                return "Unknown error";
        }
    },
    getFailureType: (e)=>"timeout" === e.result.case ? "timeout" : "error",
    isInterrupt: (e)=>"failure" === e.result.case && !0 === e.result.value.aborted,
    createSuccessOutput: (e, t)=>({
            output: Ge(t),
            exitCode: "success" === t.result.case ? 0 : 1
        }),
    getExtraHookFields: (e)=>({
            cwd: e.workingDirectory || ""
        }),
    runPreExecutionHooks: async (e)=>{
        const { args: t, baseHookRequest: r, hookExecutor: s, toolUseId: o } = e, i = t.workingDirectory || "";
        (0, n.oAs)(t, await ie({
            hookExecutor: s,
            baseHookRequest: r,
            toolUseId: o,
            command: t.command,
            cwd: i,
            sandbox: W(t.requestedSandboxPolicy)
        }));
    },
    runPostExecutionHooks: async (e)=>{
        const { args: t, result: r, baseHookRequest: n, hookExecutor: s, executionDurationMs: o, toolUseId: i } = e, a = Ge(r);
        await s.executeHookForStep(v._E.afterShellExecution, {
            ...n,
            command: t.command,
            output: a,
            duration: o,
            sandbox: W(t.requestedSandboxPolicy),
            tool_use_id: i
        });
    }
};
class We {
    constructor(e, t, r){
        this.wrappedExecutor = U(e, t, r, ze);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
class He {
    constructor(){
        this.output = "";
    }
    onEvent(e) {
        "stdout" === e.event.case || "stderr" === e.event.case ? this.output += e.event.value.data : "exit" === e.event.case && (this.exitEvent = e.event.value);
    }
    getOutput() {
        return this.output;
    }
    isAborted() {
        return this.exitEvent?.aborted ?? !1;
    }
    getExitCode() {
        return this.exitEvent?.code ?? 0;
    }
}
const Ke = {
    toolName: X,
    createToolInput: (e)=>{
        const t = e.workingDirectory || "", r = e.timeout;
        return {
            command: e.command,
            cwd: t,
            ..."number" == typeof r && r > 0 && {
                timeout: r
            }
        };
    },
    applyUpdatedInput: (e, t)=>{
        "string" == typeof t.command && (e.command = t.command), "string" == typeof t.cwd && (e.workingDirectory = t.cwd), "number" == typeof t.timeout && t.timeout >= 0 && (e.timeout = t.timeout);
    },
    createRejectedEvent: (e, t)=>new s.FI({
            event: {
                case: "rejected",
                value: new s.pZ({
                    command: e.command,
                    workingDirectory: e.workingDirectory,
                    reason: t
                })
            }
        }),
    createHookContextEvent: (e)=>new s.FI({
            event: {
                case: "hookContext",
                value: new s.Ng({
                    hookAdditionalContexts: [
                        ...e
                    ]
                })
            }
        }),
    getExtraHookFields: (e)=>({
            cwd: e.workingDirectory || ""
        }),
    createResultCollector: ()=>new He,
    createSuccessOutput: (e, t)=>({
            output: t.getOutput(),
            exitCode: t.getExitCode()
        }),
    isStreamSuccess: (e)=>0 === e.getExitCode(),
    getStreamErrorMessage: (e, t)=>t.getOutput().trim() || `Command failed with exit code ${t.getExitCode()}`,
    runPreExecutionHooks: async (e)=>{
        const { args: t, baseHookRequest: r, hookExecutor: s, toolUseId: o } = e, i = t.workingDirectory || "", a = W(t.requestedSandboxPolicy);
        (0, n.oAs)(t, await ie({
            hookExecutor: s,
            baseHookRequest: r,
            toolUseId: o,
            command: t.command,
            cwd: i,
            sandbox: a
        }));
    },
    runPostExecutionHooks: async (e)=>{
        const { args: t, baseHookRequest: r, hookExecutor: n, collector: s, executionDurationMs: o, toolUseId: i } = e, a = W(t.requestedSandboxPolicy);
        await n.executeHookForStep(v._E.afterShellExecution, {
            ...r,
            command: t.command,
            output: s.getOutput(),
            duration: o,
            sandbox: a,
            tool_use_id: i
        });
    }
};
class Ve {
    constructor(e, t, r){
        this.wrappedExecutor = function(e, t, r, n) {
            return {
                async *execute (s, o, i) {
                    const { hookContext: a, helpers: c } = q(s, o, t, r, n, i), l = n.runPreExecutionHooks ? async (e)=>{
                        await n.runPreExecutionHooks(e);
                    } : void 0, u = await N(s, o, t, a, c, n, (e, t)=>n.createRejectedEvent(e, t), l);
                    if ("rejected" === u.type) {
                        yield u.result;
                        for (const e of L(n, a))yield e;
                        return;
                    }
                    const d = A.performance.now(), p = n.createResultCollector();
                    let m = !1;
                    try {
                        for await (const t of e.execute(s, o, i))p.onEvent(t), yield t;
                    } catch (e) {
                        m = !0;
                        const t = D(A.performance.now() - d), r = e instanceof Error ? e.message : String(e);
                        await c.fireFailureAsync(t, r, "error");
                        for (const e of L(n, a))yield e;
                        throw e;
                    }
                    const h = D(A.performance.now() - d);
                    if (n.runPostExecutionHooks) try {
                        await n.runPostExecutionHooks({
                            ctx: s,
                            args: o,
                            baseHookRequest: a.baseHookRequest,
                            hookExecutor: t,
                            toolInput: c.getToolInput(),
                            toolUseId: a.toolUseId,
                            extraHookFields: a.extraHookFields,
                            collector: p,
                            executionDurationMs: h
                        });
                    } catch (e) {
                        O.warn(s, "postExecutionHooks error", {
                            toolName: n.toolName,
                            error: e instanceof Error ? e.message : String(e)
                        });
                    }
                    if (!m) if (p.isAborted()) await c.fireFailureAsync(h, "Command was aborted", "error", !0);
                    else if (n.isStreamSuccess?.(p) ?? !0) await c.fireSuccessAsync(h, JSON.stringify(n.createSuccessOutput(o, p)));
                    else {
                        const e = n.getStreamErrorMessage?.(o, p) ?? `Command failed with exit code ${p.getExitCode()}`;
                        await c.fireFailureAsync(h, e, "error");
                    }
                    for (const e of L(n, a))yield e;
                }
            };
        }(e, t, r, Ke);
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
var Ye = require("./module-19950.js"), Qe = require("./module-46842.js"), Xe = require("./module-75261.js");
function Ze(e, t) {
    return {
        toolName: K,
        getToolCallId: F,
        createToolInput: (e)=>({
                file_path: e.path,
                content: e.fileText
            }),
        applyUpdatedInput: (e, t)=>{
            "string" == typeof t.file_path && (e.path = t.file_path);
        },
        createRejectedResult: (e, t)=>new Ye.v3({
                result: {
                    case: "error",
                    value: new Ye.QM({
                        path: e.path,
                        error: t
                    })
                }
            }),
        isSuccess: (e)=>"success" === e.result.case,
        getErrorMessage: (e)=>"error" === e.result.case ? e.result.value.error || "Write error" : "Unknown error",
        createSuccessOutput: (e)=>({
                file_path: e.path,
                success: !0
            }),
        runPreExecutionHooks: async (e)=>{
            const { args: r, toolUseId: n } = e;
            let s, o = !1;
            try {
                (await (0, w.stat)(r.path)).size > 262144 ? o = !0 : s = await (0, Qe.yR)(r.path);
            } catch (e) {}
            t.set(n, {
                contentBeforeWrite: s,
                fileTooLarge: o
            });
        },
        runCleanup: (e)=>{
            t.delete(e);
        },
        runPostExecutionHooks: async (r)=>{
            const { args: n, result: s, baseHookRequest: o, toolUseId: i } = r, a = t.get(i);
            if ("success" !== s.result.case) return;
            const { contentBeforeWrite: c, fileTooLarge: l } = a ?? {
                fileTooLarge: !1
            };
            let u;
            u = l || void 0 === c ? [
                {
                    old_string: "",
                    new_string: n.fileText
                }
            ] : c === n.fileText ? [] : function(e, t) {
                const r = (0, Xe.YB)("", "", e, t, "", "", {
                    context: 0
                });
                return 0 === r.hunks.length ? [] : r.hunks.map((e)=>{
                    const t = [], r = [];
                    for (const n of e.lines)n.startsWith("-") ? t.push(n.slice(1)) : n.startsWith("+") && r.push(n.slice(1));
                    return {
                        old_string: t.join("\n"),
                        new_string: r.join("\n")
                    };
                });
            }(c, n.fileText);
            const d = {
                ...o,
                file_path: n.path,
                edits: u
            }, p = await e.executeHookForStep(v._E.afterFileEdit, d);
            if (n.returnFileContentAfterWrite && void 0 !== p) {
                const e = s.result.value.path;
                try {
                    const t = await (0, Qe.yR)(e), r = (0, Qe.lt)(t), n = Buffer.byteLength(t, "utf8");
                    return new Ye.v3({
                        result: {
                            case: "success",
                            value: new Ye.j6({
                                ...s.result.value,
                                fileContentAfterWrite: t,
                                linesCreated: r,
                                fileSize: n
                            })
                        }
                    });
                } catch (e) {
                    return;
                }
            }
        }
    };
}
class et {
    constructor(e, t, r){
        const n = new Map;
        this.wrappedExecutor = U(e, t, r, Ze(t, n));
    }
    execute(e, t, r) {
        return this.wrappedExecutor.execute(e, t, r);
    }
}
class tt {
    constructor(e, t, r, n, s, o, i){
        this.innerAccessor = e, this.hookExecutor = t, this.baseHookRequestExtractor = r, this.mcpLease = n, this.hooksAdditionalContextPromise = s, this.teamHooksReadyPromise = o, this.hooksConfigLease = i;
    }
    get(e) {
        if (e.symbol === n.bob.symbol) return new n.gl4(this.hookExecutor);
        const t = this.innerAccessor.get(e);
        return e.symbol === n.qkk.symbol ? new We(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.wve.symbol ? new Ve(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.Lnu.symbol ? new et(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.Yib.symbol ? new Je(t, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease) : e.symbol === n._As.symbol || e.symbol === n.Mfc.symbol ? new Ue(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.bL4.symbol ? new Ce(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.u8v.symbol ? new Ee(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.IGA.symbol ? new Se(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.RpG.symbol ? new ge(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.w4j.symbol ? new ve(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.rn8.symbol ? new Be(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.mlu.symbol ? new qe(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.OkD.symbol ? new ce(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.TQC.symbol ? new ue(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.iZk.symbol ? new me(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.pq5.symbol ? new je(t, this.hookExecutor, this.baseHookRequestExtractor) : e.symbol === n.MZM.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease) ? new j(t, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease) : t;
    }
    *entries() {
        for (const [e, t] of this.innerAccessor.entries())e.symbol === n.qkk.symbol ? yield [
            e,
            new We(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.wve.symbol ? yield [
            e,
            new Ve(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.Lnu.symbol ? yield [
            e,
            new et(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.Yib.symbol ? yield [
            e,
            new Je(t, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease)
        ] : e.symbol === n._As.symbol || e.symbol === n.Mfc.symbol ? yield [
            e,
            new Ue(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.bL4.symbol ? yield [
            e,
            new Ce(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.u8v.symbol ? yield [
            e,
            new Ee(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.IGA.symbol ? yield [
            e,
            new Se(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.RpG.symbol ? yield [
            e,
            new ge(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.w4j.symbol ? yield [
            e,
            new ve(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.rn8.symbol ? yield [
            e,
            new Be(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.mlu.symbol ? yield [
            e,
            new qe(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.OkD.symbol ? yield [
            e,
            new ce(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.TQC.symbol ? yield [
            e,
            new ue(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.iZk.symbol ? yield [
            e,
            new me(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.pq5.symbol ? yield [
            e,
            new je(t, this.hookExecutor, this.baseHookRequestExtractor)
        ] : e.symbol === n.MZM.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease) ? yield [
            e,
            new j(t, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease)
        ] : yield [
            e,
            t
        ];
        yield [
            n.bob,
            new n.gl4(this.hookExecutor)
        ];
    }
}
