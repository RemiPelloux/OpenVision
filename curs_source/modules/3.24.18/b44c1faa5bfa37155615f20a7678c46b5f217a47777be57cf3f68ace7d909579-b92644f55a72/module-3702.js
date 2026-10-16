"use strict";
require.d(exports, {
    Rf: ()=>m,
    Wn: ()=>R,
    ad: ()=>E,
    eE: ()=>I,
    hi: ()=>b,
    k5: ()=>v,
    kW: ()=>S,
    rd: ()=>h,
    y: ()=>k,
    yi: ()=>x,
    zk: ()=>A
});
var n = require("./module-78877.js"), s = require("./module-17392.js"), o = require("./module-37949.js"), i = require("./module-33002.js"), a = require("./module-56215.js"), c = require("./module-49273.js"), l = require("./module-46612.js"), u = require("./module-1368.js");
const d = (0, o.h)("HarnessRoutingAdapter");
function p(e) {
    return void 0 === e.standIn ? [
        e
    ] : [
        e,
        e.standIn
    ];
}
const m = "agent_host.module.fault", h = "agent_host.module.revert", f = "agent_host.module.rerun", g = "The agent stopped because of an internal error. Try again.";
function y(e) {
    return e < 3e5 ? "lt_5m" : e < 9e5 ? "lt_15m" : "ge_15m";
}
function w(e) {
    return new s.DN(g, {
        cause: e,
        displayInfo: {
            title: "Request Failed",
            detail: g,
            isRetryable: !0
        }
    });
}
const v = "agent_host.module.host_lost", _ = "agent_host.module.turn", A = "agent_host.module.load", S = "agent_host.module.swap_ms", b = "agent_host.module.heap_mb", E = "agent_host.module.serve", I = "agent_host.module.write_failed", C = String(a.nl);
function k(e, t, r, n) {
    const s = "static" === e.source ? void 0 : e, o = s?.builtAt, i = void 0 !== o && /(?:Z|[+-]\d{2}:\d{2})$/.test(o) ? Date.parse(o) : Number.NaN;
    return {
        module_version: e.generation.slice(0, 12),
        module_channel: t ?? "unknown",
        serving: "installed" === e.source ? "module" : "static",
        harness_revision: C,
        ...void 0 === n ? {} : {
            module_mode: n
        },
        ...void 0 === r ? {} : {
            module_sequence: String(r)
        },
        ...void 0 !== s?.commit && /^[0-9a-f]{40}$/.test(s.commit) ? {
            module_commit: s.commit
        } : {},
        ...Number.isNaN(i) ? {} : {
            module_built: new Date(i).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "-")
        }
    };
}
const x = k({
    generation: "static",
    source: "static"
}, void 0, void 0);
function T(e) {
    return Math.round(e / 1024 / 1024);
}
class R {
    constructor(e){
        this.disposed = !1, this.recentTurns = new Map, this.retriesOnFloor = new Map, this.onRevert = e.onRevert, this.loader = e.loader, this.compose = e.compose, this.log = e.log, this.metrics = e.metrics, this.logContext = e.logContext ?? i.q6, this.disposeShared = e.disposeShared, this.clock = e.clock ?? c.l, this.now = e.now ?? (()=>performance.now()), this.stopCounting = [
            this.loader.onDidLoad(({ module: e, channel: t, sequence: r, verdict: n, reason: s, when: o })=>this.increment(A, {
                    verdict: n,
                    reason: s,
                    when: o,
                    ...k(e, t, r)
                })),
            this.loader.onDidServe(({ module: e, channel: t, sequence: r, cause: n, when: s, refused: o, currentChangedAt: i })=>{
                const a = {
                    cause: n,
                    when: s,
                    ...void 0 === o ? {} : {
                        verdict: o.verdict,
                        reason: o.reason
                    },
                    ...k(e, t, r)
                };
                this.increment(E, a), void 0 !== i && this.distribution("agent_host.module.pickup_delay_ms", Math.max(0, Math.round(Date.now() - i)), a);
            }),
            this.loader.onDidFailToWrite(({ file: e, code: t, channel: r })=>this.increment(I, {
                    file: e,
                    code: t,
                    module_channel: r ?? "unknown"
                })),
            this.loader.onDidRevert((e)=>this.countLoaderRevert(e)),
            this.loader.onDidLoseHost(({ generation: e, phase: t, channel: r, sequence: n })=>this.increment(v, {
                    phase: t,
                    ...k({
                        generation: e,
                        source: "installed"
                    }, r, n)
                }))
        ];
    }
    countLoaderRevert({ module: e, channel: t, sequence: r, trigger: n, fallback: s }) {
        this.log(`${e.label} (${(0, u.rw)(e.generation)}) ${"crash_loop" === n ? "kept killing extension hosts" : "was reverted by another window"}; serving ${(0, u.KC)(s)}`);
        const o = {
            error_class: "crash_loop" === n ? "host_lost" : "none",
            trigger: n,
            late_faults: "0",
            ...k(e, t, r)
        };
        this.increment(h, o), this.warn(this.logContext(), "Agent host module reverted", {
            ...o,
            fallback_version: s.generation.slice(0, 12),
            fallback_serving: "installed" === s.source ? "module" : "static"
        }), this.tellOfRevert({
            label: e.label,
            version: e.generation.slice(0, 12),
            channel: t,
            fallback: {
                label: s.label,
                version: s.generation.slice(0, 12),
                builtIn: "installed" !== s.source
            },
            trigger: n
        });
        const i = this.slot;
        void 0 !== i && i.harness.info.generation === e.generation && (this.slot = void 0, this.retire(i));
    }
    activeHarness() {
        return (this.slot?.harness ?? this.loader.current()).info;
    }
    async run(e) {
        if (this.disposed) throw new Error("HarnessRoutingAdapter is disposed");
        const t = this.now();
        let r;
        try {
            const n = this.slotForTurn(this.pollSlot(t), e), s = this.takeRetryOnFloor(e, n);
            if (void 0 !== s) return void await this.runOnFloor(e, (e)=>`running the next turn of a conversation on ${e} after a late module fault on ${s.tags.module_version ?? "?"}`, {
                after: "late_fault",
                error_class: s.errorClass,
                ...s.tags
            }, {
                countsAsTurn: !0
            });
            r = n.harness, this.increment(_, this.tagsOf(n.harness)), await this.runOn(n, e);
        } catch (n) {
            if (!(n instanceof l.R2)) throw n;
            if ("installed" !== n.module.source || void 0 === r) throw w(n);
            if (!n.early) throw this.keepRetryOnFloor(e, {
                generation: n.module.generation,
                errorClass: n.errorClass,
                tags: this.tagsOf(r)
            }), w(n);
            e.conversationActionManager.reopen();
            const s = (0, u.KC)(n.module);
            await this.runOnFloor(e, (e)=>`running the turn again on ${e} after an early module fault on ${s}`, {
                after: "early_fault",
                error_class: n.errorClass,
                ...this.tagsOf(r)
            }, {
                countsAsTurn: !1,
                waitingSince: t
            });
        }
    }
    async runOnFloor(e, t, { after: r, ...n }, { countsAsTurn: o, waitingSince: i }) {
        const a = {
            ...void 0 === r ? {} : {
                after: r
            },
            ...n
        }, c = this.now(), d = this.composeSlot(this.loader.floor());
        this.measureSwap(d, {
            started: c,
            when: "rerun",
            from: "module"
        }), d.retired = !0, this.log(t((0, u.KC)(d.harness.info))), o && this.increment(_, this.tagsOf(d.harness)), void 0 !== i && this.distribution("agent_host.module.rerun_delay_ms", this.now() - i, n);
        try {
            await this.runOn(d, e);
        } catch (e) {
            const t = e instanceof s.cc ? "aborted" : "failed";
            throw this.increment(f, {
                ...a,
                result: t
            }), e instanceof l.R2 ? w(e) : e;
        }
        this.increment(f, {
            ...a,
            result: "ok"
        });
    }
    keepRetryOnFloor(e, t) {
        const r = e.runOptions.conversationId;
        if (void 0 !== r && "" !== r) {
            this.retriesOnFloor.delete(r), this.retriesOnFloor.set(r, t);
            for (const e of this.retriesOnFloor.keys()){
                if (this.retriesOnFloor.size <= 64) break;
                this.retriesOnFloor.delete(e);
            }
        }
    }
    takeRetryOnFloor(e, t) {
        const r = e.runOptions.conversationId, n = void 0 === r ? void 0 : this.retriesOnFloor.get(r);
        if (void 0 === n || void 0 === r) return;
        this.retriesOnFloor.delete(r);
        const s = t.harness.info;
        return "installed" === s.source && s.generation === n.generation ? n : void 0;
    }
    pollSlot(e) {
        const t = this.loader.poll();
        return void 0 !== t.rejected && this.log(`pinned generation ${(0, u.rw)(t.rejected.generation)} rejected (${t.rejected.reason}); serving ${(0, u.KC)(t.active.info)}`), this.slotFor(t.active, e);
    }
    slotFor(e, t) {
        const r = this.slot;
        if (void 0 !== r && r.harness.harness === e.harness) return r;
        const n = this.composeSlot(e);
        this.slot = n;
        const s = this.composedOn;
        var o;
        return this.composedOn = e.info, void 0 !== r && this.retire(r), this.measureSwap(n, {
            started: t,
            when: void 0 === s ? "start" : "turn",
            from: (o = s, void 0 === o ? "none" : "installed" === o.source ? "module" : "static")
        }), n;
    }
    measureSwap(e, { started: t, when: r, from: s }) {
        const o = Math.round(this.now() - t), i = this.tagsOf(e.harness);
        this.distribution(S, o, {
            when: r,
            result: e.composeFailed ? "compose_failed" : "ok",
            from: s,
            ...i
        });
        const a = this.loader.serving().length;
        this.distribution(b, T((0, n.getHeapStatistics)().used_heap_size), {
            live: a >= 3 ? "3+" : String(a),
            when: r,
            module_channel: i.module_channel ?? "unknown",
            serving: i.serving ?? "static"
        });
    }
    slotForTurn(e, t) {
        return "installed" !== e.harness.info.source || e.harness.capabilities.has(a.eN.seamRunOptions) || !(0, s.Xs)(t.runOptions) ? e : (void 0 === e.standIn && (e.standIn = this.composeSlot(this.loader.floor()), this.log(`serving child turns on ${(0, u.KC)(e.standIn.harness.info)}: ${(0, u.KC)(e.harness.info)} does not announce ${a.eN.seamRunOptions}`)), e.standIn);
    }
    composeSlot(e) {
        let t, r = !1;
        try {
            t = this.compose(e, (t)=>{
                for (const r of t ?? []){
                    this.log(`module fault on ${(0, u.KC)(r.module)} after the turn completed: ${r.errorClass}: ${r.reason}`);
                    const t = {
                        timing: "after_turn",
                        error_class: r.errorClass,
                        ...this.tagsOf(e)
                    };
                    this.increment(m, t), this.warn(this.logContext(), "Agent host module fault", t);
                }
                this.countTurn(e.info.generation, {
                    fault: !1,
                    late: !1
                }), this.loader.markServed(e.info);
            }, (t)=>{
                this.log(`turn on ${(0, u.KC)(e.info)} stopped after ${Math.round(t / 1e3)} s with only heartbeats crossing`), this.increment("agent_host.module.quiet_stop", {
                    quiet: y(t),
                    ...this.tagsOf(e)
                });
            }), this.log(`composed managed-local adapter on ${(0, u.KC)(e.info)}`);
        } catch (n) {
            this.log(`composition on ${(0, u.KC)(e.info)} failed: ${n instanceof Error ? n.message : String(n)}`), t = {
                run: ()=>Promise.reject(n),
                dispose: ()=>{}
            }, r = !0;
        }
        return {
            adapter: t,
            harness: e,
            composeFailed: r,
            inFlight: 0,
            retired: !1,
            disposed: !1
        };
    }
    retire(e) {
        for (const t of p(e))this.log(`retiring ${(0, u.KC)(t.harness.info)}`), t.retired = !0, this.release(t);
    }
    async runOn(e, t) {
        e.inFlight += 1, this.log(`turn -> ${(0, u.KC)(e.harness.info)}, model=${t.runOptions.requestedModel?.modelId || t.modelDetails?.modelId || "?"}`), this.loader.turnStarted(e.harness.info);
        try {
            await e.adapter.run(t);
        } catch (r) {
            throw r instanceof l.R2 && this.countFault(r, e.harness, t.ctx), r;
        } finally{
            this.loader.turnSettled(e.harness.info), e.inFlight -= 1, e.retired && this.release(e);
        }
    }
    countTurn(e, t) {
        const r = [
            ...this.recentTurns.get(e) ?? [],
            t
        ].slice(-5);
        return this.recentTurns.set(e, r), r;
    }
    countFault(e, t, r) {
        const { generation: n } = e.module, s = this.countTurn(n, {
            fault: !0,
            late: !e.early
        }), o = s.filter((e)=>e.fault), i = s.length - 1 - s.findLastIndex((e)=>!e.fault), a = e.early ? "early" : "late";
        this.log(`module fault on ${(0, u.KC)(e.module)}: ${e.errorClass}, ${a}, ${i} in a row, ${o.length} of the last ${s.length}: ${e.reason}`);
        const c = {
            timing: a,
            error_class: e.errorClass,
            ...this.tagsOf(t)
        };
        if (this.increment(m, c), this.warn(r, "Agent host module fault", {
            ...c,
            in_a_row: i,
            in_window: o.length
        }), o.length < 3 || "installed" !== e.module.source) return;
        this.recentTurns.delete(n);
        const l = i >= 3, d = l ? `${i} module faults in a row` : `${o.length} module faults in its last ${s.length} turns`, p = l ? "in_a_row" : "window", f = this.loader.markIncompatible({
            generation: n,
            reason: `${d}, the last ${e.errorClass}: ${e.reason}`,
            revert: {
                label: e.module.label,
                trigger: p
            }
        });
        if (void 0 === f) return;
        this.log(`reverted ${(0, u.KC)(e.module)} for every window on this machine after ${d}; serving ${(0, u.KC)(f.info)}`);
        const g = {
            error_class: e.errorClass,
            trigger: p,
            late_faults: String(o.filter((e)=>e.late).length),
            ...this.tagsOf(t)
        };
        this.increment(h, g), this.warn(r, "Agent host module reverted", {
            ...g,
            fallback_version: f.info.generation.slice(0, 12),
            fallback_serving: "installed" === f.info.source ? "module" : "static"
        }), this.tellOfRevert({
            label: e.module.label,
            version: n.slice(0, 12),
            channel: t.channel,
            fallback: {
                label: f.info.label,
                version: f.info.generation.slice(0, 12),
                builtIn: "installed" !== f.info.source
            },
            trigger: p
        });
        const y = this.slot;
        void 0 !== y && y.harness.info.generation === n && (this.slot = void 0, this.retire(y));
    }
    tellOfRevert(e) {
        try {
            this.onRevert?.(e);
        } catch (e) {
            this.log(`revert not told: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    tagsOf(e) {
        return k(e.info, e.channel, e.sequence);
    }
    increment(e, t) {
        try {
            this.metrics?.increment?.({
                stat: e,
                value: 1,
                tags: t
            });
        } catch (t) {
            this.log(`${e} counter not emitted: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    distribution(e, t, r) {
        try {
            this.metrics?.distribution({
                stat: e,
                value: t,
                tags: r
            });
        } catch (t) {
            this.log(`${e} distribution not emitted: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    warn(e, t, r) {
        try {
            d.warn(e, t, r);
        } catch (e) {
            this.log(`"${t}" not logged: ${e instanceof Error ? e.message : String(e)}`);
        }
    }
    release(e) {
        if (!(e.disposed || e.inFlight > 0)) try {
            this.disposeSlot(e), this.log(`released ${(0, u.KC)(e.harness.info)}; ${this.footprint()}`), this.logFootprintAfterGc(e.harness.info);
        } catch (t) {
            this.log(`dispose of ${(0, u.KC)(e.harness.info)} threw: ${t instanceof Error ? t.message : String(t)}`);
        }
    }
    footprint() {
        const { heapUsed: e, rss: t } = process.memoryUsage(), r = this.loader.serving().length;
        return `heapUsed ${T(e)} MB, rss ${T(t)} MB, installed generations live: ${r}`;
    }
    logFootprintAfterGc(e) {
        const t = globalThis.gc;
        "function" == typeof t && this.clock.schedule(0, ()=>{
            try {
                t(), this.log(`after gc, ${(0, u.KC)(e)} released: ${this.footprint()}`);
            } catch (e) {
                this.log(`gc after release threw: ${e instanceof Error ? e.message : String(e)}`);
            }
        });
    }
    disposeSlot(e) {
        e.disposed = !0;
        try {
            e.adapter.dispose();
        } finally{
            this.loader.current().harness !== e.harness.harness && this.loader.release(e.harness);
        }
    }
    dispose() {
        if (this.disposed) return;
        this.disposed = !0;
        for (const e of this.stopCounting)e();
        const e = this.slot;
        let t;
        this.slot = void 0;
        for (const r of void 0 === e ? [] : p(e))if (!r.disposed) try {
            this.disposeSlot(r);
        } catch (e) {
            t ??= e;
        }
        try {
            this.disposeShared?.();
        } catch (e) {
            t ??= e;
        }
        if (void 0 !== t) throw t;
    }
}
