require.r(exports), require.d(exports, {
    AGENT_HOST_REMOTE_EGRESS_FLIP_MESSAGE: ()=>s,
    createRemoteEgressFlipError: ()=>i,
    createRemoteEgressKindLatch: ()=>c,
    createRemoteEgressLatchedTransport: ()=>l,
    decisionFromProbeResult: ()=>u,
    isRemoteEgressFlipError: ()=>a,
    mergeAbortSignals: ()=>E,
    runLatchedAgentService: ()=>d
});
var n = require("./module-93173.js"), o = require(1444);
const s = "connection aborted (remote egress probe latched external)";
function i() {
    return Object.assign(new Error(s), {
        code: "ECONNRESET"
    });
}
function a(t) {
    return t instanceof Error && t.message === s;
}
function c(t) {
    let e = t?.initial;
    const r = new Set, n = (t)=>{
        for (const e of r)e(t);
    }, s = (r, s)=>{
        if (void 0 !== e) return !1;
        e = r;
        const i = s?.source ?? ("external" === r ? "probe" : "run_first_byte"), a = s?.reason ?? o.YR, c = {
            kind: r,
            source: i,
            reason: a
        };
        return t?.onDecision?.(c), "external" === r ? (t?.onExternal?.(a), n({
            kind: "external",
            reason: a
        }), !0) : (n({
            kind: "builtin"
        }), !0);
    };
    return void 0 !== t?.initial && t.onDecision?.({
        kind: t.initial,
        source: t.initialSource ?? "setting",
        reason: o.YR
    }), {
        resolveKind: ()=>e ?? "builtin",
        peekKind: ()=>e,
        latch: s,
        applyProbeResult (t) {
            const e = u(t);
            return "external" === e.kind ? s("external", {
                source: "probe",
                reason: e.reason
            }) : t.ok && t.url.length > 0 && s("builtin", {
                source: "probe",
                reason: o.YR
            }), e;
        },
        subscribe: (t)=>(r.add(t), ()=>{
                r.delete(t);
            })
    };
}
function u(t) {
    return t.ok || !(0, n.isConnectClassProbeFailure)(t.reason) ? {
        kind: "builtin"
    } : {
        kind: "external",
        reason: t.reason
    };
}
function l(t) {
    let e;
    const r = ()=>(e ??= t.createExternal(), e);
    return {
        run: (e, n, o)=>d({
                builtin: t.builtin,
                getExternal: r,
                latch: t.latch,
                ctx: e,
                request: n,
                options: o
            })
    };
}
async function* d(t) {
    const e = t.latch.peekKind();
    if ("external" === e) return void (yield* t.getExternal().run(t.ctx, t.request, t.options));
    if ("builtin" === e) return void (yield* t.builtin.run(t.ctx, t.request, t.options));
    const r = new AbortController;
    let o = !1;
    const s = t.latch.subscribe((t)=>{
        "external" !== t.kind || o || r.abort();
    });
    try {
        for await (const e of t.builtin.run(t.ctx, t.request, {
            ...t.options,
            signal: E(t.options.signal, r.signal)
        }))o = !0, t.latch.latch("builtin", {
            source: "run_first_byte"
        }), yield e;
        t.latch.latch("builtin", {
            source: "run_first_byte"
        });
    } catch (e) {
        if (!o && r.signal.aborted && !t.options.signal.aborted) throw i();
        throw !o && (0, n.isPreFirstByteConnectClassError)(e) && t.latch.latch("external", {
            source: "run_connect_error",
            reason: (0, n.classifyRemoteEgressProbeError)(e)
        }), e;
    } finally{
        s();
    }
}
function E(t, e) {
    const r = AbortSignal.any;
    if ("function" == typeof r) return r([
        t,
        e
    ]);
    const n = new AbortController, o = ()=>{
        n.abort();
    };
    return t.aborted || e.aborted ? (n.abort(), n.signal) : (t.addEventListener("abort", o, {
        once: !0
    }), e.addEventListener("abort", o, {
        once: !0
    }), n.signal);
}
