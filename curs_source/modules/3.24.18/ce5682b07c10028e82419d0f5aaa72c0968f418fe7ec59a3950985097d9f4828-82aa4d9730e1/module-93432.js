require.r(exports), require.d(exports, {
    createRemoteEgressLatchedInferenceTransport: ()=>s,
    runLatchedConnectCall: ()=>i
});
var n = require("./module-29580.js"), o = require("./module-93173.js");
function s(t) {
    let e;
    const r = ()=>(e ??= t.createExternal(), e);
    let n;
    const s = ()=>"external" === t.latch.peekKind() || void 0 !== n, a = (e)=>{
        const r = (0, o.classifyRemoteEgressProbeError)(e);
        t.latch.latch("external", {
            source: "inference_connect_error",
            reason: r
        }) || "builtin" === t.latch.peekKind() && void 0 === n && (n = r, t.onInferenceHop?.(r));
    }, c = t.builtin.transport;
    return {
        transport: {
            unary: (e, n, o, l, u, d, E)=>i({
                    latch: t.latch,
                    isExternal: s,
                    onBuiltinConnectError: a,
                    signal: o,
                    builtin: (t)=>c.unary(e, n, t, l, u, d, E),
                    external: ()=>r().unary(e, n, o, l, u, d, E)
                }),
            stream: (e, n, o, l, u, d, E)=>i({
                    latch: t.latch,
                    isExternal: s,
                    onBuiltinConnectError: a,
                    signal: o,
                    builtin: (t)=>c.stream(e, n, t, l, u, d, E),
                    external: ()=>r().stream(e, n, o, l, u, d, E)
                })
        },
        isHttp2TransportFor: (e)=>!!s() || t.builtin.isHttp2TransportFor(e)
    };
}
async function i(t) {
    if (t.isExternal()) return t.external();
    if ("builtin" === t.latch.peekKind()) try {
        return await t.builtin(t.signal);
    } catch (e) {
        throw !0 !== t.signal?.aborted && (0, o.isPreFirstByteConnectClassError)(e) && t.onBuiltinConnectError(e), e;
    }
    const e = new AbortController;
    let r = !1;
    const s = t.latch.subscribe((t)=>{
        "external" !== t.kind || r || e.abort();
    });
    try {
        const o = await t.builtin(void 0 === t.signal ? e.signal : (0, n.mergeAbortSignals)(t.signal, e.signal));
        return r = !0, o;
    } catch (s) {
        if (r = !0, !0 === t.signal?.aborted) throw s;
        if (e.signal.aborted) throw (0, n.createRemoteEgressFlipError)();
        throw (0, o.isPreFirstByteConnectClassError)(s) && t.onBuiltinConnectError(s), s;
    } finally{
        s();
    }
}
