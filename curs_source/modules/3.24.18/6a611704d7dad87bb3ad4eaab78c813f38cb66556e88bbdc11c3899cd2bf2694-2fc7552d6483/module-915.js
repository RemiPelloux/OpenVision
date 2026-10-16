Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createAgentWebSocketRunSession = void 0;
const r = require(7670), o = require(6920), i = require("./module-6157.js"), s = require("./module-4436.js");
function a(e) {
    const t = {};
    return e.forEach((e, n)=>{
        t[n] = e;
    }), t;
}
function c(e, t) {
    return new r.WebSocket(e.url, [
        t
    ], {
        followRedirects: !1,
        perMessageDeflate: !1,
        headers: a(e.headers),
        ...void 0 !== e.nodeOptions.ca ? {
            ca: [
                ...e.nodeOptions.ca
            ]
        } : {},
        ...void 0 !== e.nodeOptions.rejectUnauthorized ? {
            rejectUnauthorized: e.nodeOptions.rejectUnauthorized
        } : {}
    });
}
function l(e, t) {
    if (e.connectionContext.endpoint !== t.connectionContext.endpoint) return "endpoint_changed";
    if (e.connectionContext.teamId !== t.connectionContext.teamId) return "team_changed";
    if (e.connectionContext.hasEffectiveProxy !== t.connectionContext.hasEffectiveProxy) return "proxy_changed";
    return (0, o.fingerprintAgentRunCredential)(e.headers.get("authorization") ?? void 0) !== (0, o.fingerprintAgentRunCredential)(t.headers.get("authorization") ?? void 0) ? "authorization_changed" : "connection_context_changed";
}
exports.createAgentWebSocketRunSession = (e)=>{
    const t = e.createSocket ?? c, n = new i.AgentWebSocketLeaseManager({
        createSocket: (n, r)=>e.runWithNetworkContext(()=>t(n, r)),
        contextsEqual: (e, t)=>(0, o.agentRunWebSocketConnectionContextsEqual)(e.connectionContext, t.connectionContext),
        classifyContextMismatch: l,
        ...void 0 !== e.maxConnections ? {
            maxConnections: e.maxConnections
        } : {},
        ...void 0 !== e.keepalivePingIntervalMs ? {
            keepalivePingIntervalMs: e.keepalivePingIntervalMs
        } : {},
        ...void 0 !== e.keepalivePingTimeoutMs ? {
            keepalivePingTimeoutMs: e.keepalivePingTimeoutMs
        } : {},
        ...void 0 !== e.timers ? {
            timers: e.timers
        } : {},
        ...void 0 === e.observePreconnect ? {} : {
            observePreconnect: e.observePreconnect
        },
        ...void 0 === e.onPoolWentCold ? {} : {
            onPoolWentCold: e.onPoolWentCold
        },
        ...void 0 === e.onIdleSocketsExhausted ? {} : {
            onIdleSocketsExhausted: e.onIdleSocketsExhausted
        },
        ...void 0 === e.observeLifecycle ? {} : {
            observeLifecycle: e.observeLifecycle
        }
    }), r = new s.AgentWebSocketRunAdapter({
        leaseManager: n,
        connectionUsePolicy: "sequential-runs",
        ...void 0 !== e.timers ? {
            timers: e.timers
        } : {},
        ...void 0 !== e.observeFirstMessagePipeline ? {
            observeFirstMessagePipeline: e.observeFirstMessagePipeline
        } : {}
    });
    return {
        run: (e, t)=>r.run(e, t),
        preconnect: (e, t = {})=>n.preconnect(e, {
                ...t,
                reservationId: e.requestId
            }),
        retireWhenIdle: (e)=>n.retireWhenIdle(e),
        close: (e)=>n.close(e)
    };
};
