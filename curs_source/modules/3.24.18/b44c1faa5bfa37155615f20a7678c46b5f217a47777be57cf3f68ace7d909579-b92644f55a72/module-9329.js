"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AGENT_WEBSOCKET_POOL_CONFIG = exports.AGENT_WEBSOCKET_FEATURE_GATE = void 0, exports.resolveAgentWebSocketUrl = d, exports.resolveAgentWebSocketMaxConnections = p, exports.resolveAgentWebSocketFallbackOnColdPool = m, exports.resolveAgentWebSocketWarmSpareOnLease = h, exports.resolveAgentWebSocketKeepalive = y, exports.resolveAgentWebSocketPreconnectMaxRetryDelay = A, exports.createAgentRunWebSocketSelection = function(e) {
    const t = new x(e);
    return {
        transport: t,
        drain: ()=>t.drain(),
        dispose: ()=>t.dispose()
    };
};
const n = require("./module-96980.js"), s = require("./module-17714.js"), o = require("./module-97163.js"), i = require("./module-26920.js");
exports.AGENT_WEBSOCKET_FEATURE_GATE = "nal_websocket_client", exports.AGENT_WEBSOCKET_POOL_CONFIG = "nal_websocket_client_pool";
const a = 1, c = 4, l = new Set([
    "https://api.playground.cursor.sh",
    "https://api2.cursor.sh"
]), u = "/agent/v1/run";
function d(e) {
    let t;
    try {
        t = new URL(e);
    } catch  {
        return;
    }
    if (!("https:" === t.protocol && l.has(t.origin) && "" === t.port && "" === t.username && "" === t.password && ("" === t.pathname || "/" === t.pathname) && "" === t.search && "" === t.hash && (e === t.origin || e === `${t.origin}/`))) return;
    const r = new URL(u, t);
    return r.protocol = "wss:", r.toString();
}
function p(e) {
    if ("object" != typeof e || null === e) return a;
    const t = e.maxConnections;
    return "number" != typeof t || !Number.isInteger(t) || t < a || t > c ? a : t;
}
function m(e) {
    return "object" == typeof e && null !== e && !0 === e.fallbackOnColdPool;
}
function h(e) {
    return "object" == typeof e && null !== e && !0 === e.warmSpareOnLease;
}
const f = 6e4, g = 1e3;
function y(e) {
    if ("object" != typeof e || null === e) return {};
    const t = e, r = w(t.keepalivePingIntervalMs, 0), n = w(t.keepalivePingTimeoutMs, g);
    return {
        ...void 0 === r ? {} : {
            pingIntervalMs: r
        },
        ...void 0 === n ? {} : {
            pingTimeoutMs: n
        }
    };
}
function w(e, t) {
    return "number" == typeof e && Number.isInteger(e) && e >= t && e <= f ? e : void 0;
}
const v = 1e3, _ = 18e5;
function A(e) {
    if ("object" != typeof e || null === e) return;
    const t = e.preconnectMaxRetryDelayMs;
    return "number" == typeof t && Number.isInteger(t) && t >= v && t <= _ ? t : void 0;
}
function S(e) {
    const t = new Headers;
    if (void 0 === e) return t;
    if (e instanceof Headers) return e.forEach((e, r)=>{
        t.append(r, e);
    }), t;
    if (Array.isArray(e)) {
        for (const [r, n] of e)t.append(r, n);
        return t;
    }
    for (const [r, n] of Object.entries(e))for (const e of Array.isArray(n) ? n : [
        n
    ])t.append(r, e);
    return t;
}
async function* b(e, t) {
    for await (const r of e)yield r instanceof t ? r.toBinary() : new t(r).toBinary();
}
async function* E(e, t, r) {
    try {
        for await (const r of e)yield t.fromBinary(r);
    } finally{
        r();
    }
}
class I extends o.ConnectError {
    constructor(){
        super("Agent WebSocket transport was closed", o.Code.Canceled);
    }
}
function C(e) {
    return e.reason instanceof Error ? e.reason : new o.ConnectError("Request canceled", o.Code.Canceled);
}
function k(e, t) {
    const r = t.filter((e)=>void 0 !== e), n = r.find((e)=>e.aborted);
    return void 0 !== n ? Promise.reject(C(n)) : 0 === r.length ? e : new Promise((t, n)=>{
        let s = !1;
        const o = new Map, i = (e)=>{
            if (!s) {
                s = !0;
                for (const [e, t] of o)e.removeEventListener("abort", t);
                e();
            }
        };
        for (const e of r){
            const t = ()=>i(()=>n(C(e)));
            o.set(e, t), e.addEventListener("abort", t, {
                once: !0
            });
        }
        e.then((e)=>i(()=>t(e)), (e)=>i(()=>n(e)));
    });
}
class x {
    constructor(e){
        this.options = e, this.closedController = new AbortController, this.webSocketAdmissionGeneration = 0, this.poolConfigRefreshGeneration = 0, this.gateAllowsWebSocketCached = !1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.preconnectFailures = 0, this.preconnectPending = !1, this.observedConnectionSignals = new WeakSet, this.draining = !1, this.closed = !1, this.connectionContextTracker = new i.AgentRunWebSocketConnectionContextTracker(e.connectionContext, (e)=>this.emitMetric({
                stat: "transport.agent_websocket_context_change",
                tags: {
                    cause: e.cause,
                    identity_changed: String(e.identityChanged)
                }
            }), ()=>this.gateAllowsWebSocketCached), this.websocketUrl = e.agentUsesHttp2 ? void 0 : d(e.baseUrl), this.loadRunSessionFactory = e.loadRunSessionFactory ?? (async ()=>(await require.e(915).then(require.bind(require, 40915))).createAgentWebSocketRunSession), this.now = e.now ?? Date.now, this.gateChangeSubscription = void 0 === this.websocketUrl ? void 0 : e.onDidChangeFeatureGate?.(exports.AGENT_WEBSOCKET_FEATURE_GATE, ()=>{
            this.gateAllowsWebSocketCached = !1, this.cancelPreconnect();
            try {
                this.connectionContextTracker.pause();
            } catch (e) {
                this.options.debugLog.info("[AgentRunWebSocket] context subscription cleanup failed while disabling the gate", e);
            }
            const e = ++this.webSocketAdmissionGeneration;
            this.refreshGateSnapshot(e);
        }), this.poolConfigChangeSubscription = void 0 === this.websocketUrl || void 0 === e.getDynamicConfigValue ? void 0 : e.onDidChangeDynamicConfig?.(exports.AGENT_WEBSOCKET_POOL_CONFIG, ()=>{
            !this.closed && this.gateAllowsWebSocketCached && this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration);
        }), void 0 !== this.gateChangeSubscription && this.refreshGateSnapshot(this.webSocketAdmissionGeneration);
    }
    unary(e, t, r, n, s, o, i) {
        return this.options.httpTransport.unary(e, t, r, n, s, o, i);
    }
    async stream(e, t, r, i, a, c, l) {
        const u = (n, s, o = c)=>this.options.httpTransport.stream(e, t, r, s, n, o, l), d = this.websocketUrl, p = void 0 === d || !function(e, t) {
            return e.typeName === s.AgentService.typeName && t.name === s.AgentService.methods.run.name;
        }(e, t) || this.draining || !0 === r?.aborted || void 0 !== i && i <= 0;
        if (p) return u(a, i);
        this.assertOpen();
        const m = this.webSocketAdmissionGeneration;
        if (!this.isWebSocketAdmissionCurrent(m)) return u(a, i);
        const h = this.now(), f = ()=>void 0 === i ? void 0 : Math.max(0, i - (this.now() - h)), g = ()=>{
            const e = f();
            if (void 0 !== e && e <= 0) throw new o.ConnectError("Agent WebSocket deadline exceeded", o.Code.DeadlineExceeded);
            return e;
        }, y = function(e, t) {
            if (void 0 === t) return {
                signal: e,
                dispose: ()=>{}
            };
            const r = new AbortController;
            let n;
            const s = ()=>{
                void 0 !== n && (clearTimeout(n), n = void 0), e?.removeEventListener("abort", a);
            }, i = (e)=>{
                r.signal.aborted || r.abort(e), s();
            };
            function a() {
                i(e?.reason);
            }
            return !0 === e?.aborted ? i(e.reason) : (e?.addEventListener("abort", a, {
                once: !0
            }), n = setTimeout(()=>i(new o.ConnectError("Agent WebSocket deadline exceeded", o.Code.DeadlineExceeded)), t)), {
                signal: r.signal,
                dispose: s
            };
        }(r, i), w = S(a);
        let v, _, A;
        try {
            if (v = await k(this.loadSessionFactory(), [
                y.signal,
                this.closedController.signal
            ]), this.assertOpen(), !this.isWebSocketAdmissionCurrent(m)) return y.dispose(), u(a, g());
            this.throwIfCanceled(y.signal), A = this.connectionContextTracker.current();
            const e = void 0 === y.signal ? A.signal : AbortSignal.any([
                y.signal,
                A.signal
            ]);
            _ = await k(this.options.prepareUpgrade({
                callerHeaders: w,
                signal: e
            }), [
                e,
                this.closedController.signal
            ]), this.assertOpen(), this.throwIfCanceled(y.signal);
        } catch (e) {
            if (y.dispose(), e instanceof I) throw e;
            return this.assertOpen(), this.throwIfCanceled(y.signal), this.options.debugLog.info("[AgentRunWebSocket] preparation failed before dialing; using HTTP", e), u(a, g());
        }
        const C = ()=>{
            const e = S(w);
            return e.set("x-request-id", _.requestId), e;
        };
        if (!this.isConnectionGenerationCurrent(A)) return y.dispose(), u(C(), g());
        if (!this.isWebSocketAdmissionCurrent(m)) return y.dispose(), u(C(), g());
        const x = this.ensureSession(v);
        let T;
        try {
            T = await x.run({
                url: d,
                requestId: _.requestId,
                connectionContext: {
                    ...A.context,
                    credentialFingerprint: _.credentialFingerprint
                },
                headers: _.headers,
                nodeOptions: _.nodeOptions
            }, {
                identity: {
                    runId: w.get("x-original-request-id") ?? _.requestId,
                    requestId: _.requestId
                },
                headers: _.runHeaders,
                input: b(c, t.I),
                canSendRunStart: ()=>this.isWebSocketAdmissionCurrent(m) && this.isConnectionGenerationCurrent(A),
                contextInvalidationSignal: A.signal,
                reuseOnly: this.fallbackOnColdPoolCached,
                ...void 0 !== y.signal ? {
                    signal: y.signal
                } : {}
            });
        } catch (e) {
            throw y.dispose(), e;
        }
        if ("fallback" === T.kind) {
            y.dispose();
            const e = void 0 === T.replayInput ? void 0 : function(e) {
                let t, r = !1, n = !1;
                const s = ()=>{
                    if (r) throw new Error("Agent WebSocket replay input is one-shot");
                    return r = !0, t = e[Symbol.asyncIterator](), t;
                };
                return {
                    input: {
                        [Symbol.asyncIterator]: s
                    },
                    stop (e) {
                        if (!n) {
                            n = !0;
                            try {
                                const r = t ?? s(), n = void 0 !== r.throw ? r.throw(e) : r.return?.();
                                n?.catch(()=>{});
                            } catch  {}
                        }
                    }
                };
            }(T.replayInput);
            "cold-pool" === T.reason && this.schedulePreconnect();
            try {
                return this.assertOpen(), this.throwIfCanceled(y.signal), this.options.debugLog.info(`[AgentRunWebSocket] run did not start (${T.reason}); using HTTP`), u(C(), g(), void 0 === e ? c : async function*(e, t) {
                    for await (const r of e)yield t.fromBinary(r);
                }(e.input, t.I));
            } catch (t) {
                throw e?.stop(t), t;
            }
        }
        return T.response.header.set(n.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, "websocket"), {
            stream: !0,
            service: e,
            method: t,
            header: T.response.header,
            trailer: T.response.trailer,
            message: E(T.response.message, t.O, ()=>y.dispose())
        };
    }
    drain() {
        if (!this.closed && !this.draining) {
            this.draining = !0, this.gateAllowsWebSocketCached = !1, this.cancelPreconnect(), this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.poolConfigRefreshGeneration += 1, this.webSocketAdmissionGeneration += 1;
            try {
                this.gateChangeSubscription?.dispose();
            } finally{
                try {
                    this.poolConfigChangeSubscription?.dispose();
                } finally{
                    try {
                        this.connectionContextTracker.invalidate();
                    } finally{
                        this.session?.retireWhenIdle("selection_drained");
                    }
                }
            }
        }
    }
    dispose() {
        if (this.closed) return;
        this.closed = !0, this.draining = !1, this.gateAllowsWebSocketCached = !1, this.cancelPreconnect();
        const e = this.session;
        this.session = void 0;
        try {
            this.gateChangeSubscription?.dispose();
        } finally{
            try {
                this.poolConfigChangeSubscription?.dispose();
            } finally{
                this.closedController.abort(new I);
                try {
                    this.connectionContextTracker.invalidate();
                } finally{
                    e?.close("selection_disposed");
                }
            }
        }
    }
    isWebSocketAdmissionCurrent(e) {
        return !this.closed && !this.draining && this.gateAllowsWebSocketCached && e === this.webSocketAdmissionGeneration;
    }
    isConnectionGenerationCurrent(e) {
        if (e.signal.aborted) return !1;
        try {
            return this.connectionContextTracker.current().signal === e.signal;
        } catch (e) {
            return this.options.debugLog.info("[AgentRunWebSocket] could not verify connection context; using HTTP", e), !1;
        }
    }
    refreshGateSnapshot(e) {
        Promise.resolve().then(()=>this.options.checkFeatureGate(exports.AGENT_WEBSOCKET_FEATURE_GATE)).then((t)=>{
            if (!this.closed && !this.draining && e === this.webSocketAdmissionGeneration) {
                const e = !0 === t;
                this.gateAllowsWebSocketCached = e, e ? (this.preconnectFailures = 0, this.preconnectOncePoolConfigSettles()) : (this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.retireCurrentSessionWhenIdle("gate_disabled"));
            }
        }, (r)=>{
            this.closed || this.draining || e !== this.webSocketAdmissionGeneration || (this.gateAllowsWebSocketCached = !1, this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.retireCurrentSessionWhenIdle("gate_lookup_failed"), this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports.AGENT_WEBSOCKET_FEATURE_GATE}; using HTTP`, r));
        });
    }
    preconnectOncePoolConfigSettles() {
        this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration).then(()=>this.schedulePreconnect(), ()=>this.schedulePreconnect());
    }
    refreshMaxConnectionsSnapshot(e) {
        const r = this.options.getDynamicConfigValue;
        return void 0 === r ? Promise.resolve() : (n = Promise.resolve().then(()=>r(exports.AGENT_WEBSOCKET_POOL_CONFIG)), s = this.options.poolConfigTimeoutMs ?? 1e3, new Promise((e, t)=>{
            const r = setTimeout(()=>t(new Error(`timed out after ${s}ms`)), s);
            n.then(e, t).finally(()=>clearTimeout(r));
        })).then((t)=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached || e !== this.poolConfigRefreshGeneration) return;
            const r = p(t);
            this.applyKeepalive(y(t)), this.applyMaxConnections(r), this.preconnectMaxRetryDelayCached = A(t), this.fallbackOnColdPoolCached = m(t), this.warmSpareOnLeaseCached = h(t), r !== a && this.options.debugLog.info(`[AgentRunWebSocket] sizing new sessions to ${r} connections`);
        }, (r)=>{
            this.closed || this.draining || !this.gateAllowsWebSocketCached || e !== this.poolConfigRefreshGeneration || (this.applyKeepalive({}), this.applyMaxConnections(a), this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports.AGENT_WEBSOCKET_POOL_CONFIG}; using one connection`, r));
        });
        var n, s;
    }
    applyMaxConnections(e) {
        this.maxConnectionsCached !== e && (this.maxConnectionsCached = e, this.retireCurrentSessionWhenIdle("pool_resized"));
    }
    applyKeepalive(e) {
        this.keepaliveCached.pingIntervalMs === e.pingIntervalMs && this.keepaliveCached.pingTimeoutMs === e.pingTimeoutMs || (this.keepaliveCached = e, this.retireCurrentSessionWhenIdle("keepalive_reconfigured"));
    }
    retireCurrentSessionWhenIdle(e) {
        const t = this.session;
        void 0 !== t && (this.session = void 0, t.retireWhenIdle(e));
    }
    preconnectRetryDelayMs() {
        const e = Math.max(1, this.options.preconnectRetryBaseMs ?? 1e3), t = Math.max(e, this.options.preconnectMaxRetryDelayMs ?? this.preconnectMaxRetryDelayCached ?? 3e5), r = Math.min(Math.max(0, this.preconnectFailures - 1), 30);
        return Math.min(e * 2 ** r, t);
    }
    schedulePreconnect(e = 0) {
        if (!this.closed && !this.draining && this.gateAllowsWebSocketCached && void 0 !== this.websocketUrl && !0 !== this.options.preconnectDisabled) return void 0 !== this.preconnectPromise ? (this.preconnectPending = !0, void (this.preconnectPendingDelayMs = void 0 === this.preconnectPendingDelayMs ? e : Math.min(this.preconnectPendingDelayMs, e))) : void (void 0 === this.preconnectRetryTimer && (this.preconnectRetryTimer = setTimeout(()=>{
            this.preconnectRetryTimer = void 0, this.startPreconnect();
        }, Math.max(0, e))));
    }
    startPreconnect() {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || void 0 === this.websocketUrl || !0 === this.options.preconnectDisabled) return;
        this.emitPreconnect({
            outcome: "attempted"
        });
        const e = new AbortController;
        this.preconnectController = e;
        const t = this.webSocketAdmissionGeneration, r = this.performPreconnect(e.signal, t).then((e)=>{
            if (void 0 === e) return this.preconnectFailures = 0, void this.emitPreconnect({
                outcome: "succeeded"
            });
            this.closed || this.draining || !this.isWebSocketAdmissionCurrent(t) || (this.emitPreconnect({
                outcome: "failed",
                failureCategory: e
            }), "context_invalidated" !== e && "stale" !== e ? (this.preconnectFailures += 1, this.schedulePreconnect(this.preconnectRetryDelayMs())) : this.preconnectFailures = 0);
        });
        this.preconnectPromise = r, r.finally(()=>{
            if (this.preconnectController === e && (this.preconnectController = void 0), this.preconnectPromise === r && (this.preconnectPromise = void 0), this.preconnectPending) {
                const e = this.preconnectPendingDelayMs ?? 0;
                this.preconnectPending = !1, this.preconnectPendingDelayMs = void 0, this.schedulePreconnect(e);
            }
        });
    }
    async performPreconnect(e, t) {
        const r = this.websocketUrl;
        if (void 0 === r) return "stale";
        let n, s = "load";
        const o = new AbortController, i = setTimeout(()=>o.abort(), Math.max(1, this.options.preconnectAttemptTimeoutMs ?? 1e4)), a = AbortSignal.any([
            e,
            o.signal,
            this.closedController.signal
        ]);
        try {
            const e = await k(this.loadSessionFactory(), [
                a
            ]);
            if (!this.isWebSocketAdmissionCurrent(t)) return "stale";
            s = "preparation", n = this.connectionContextTracker.current(), this.observeConnectionGeneration(n);
            const o = AbortSignal.any([
                a,
                n.signal
            ]), i = await k(this.options.prepareUpgrade({
                callerHeaders: new Headers,
                signal: o
            }), [
                o
            ]);
            if (!this.isWebSocketAdmissionCurrent(t) || !this.isConnectionGenerationCurrent(n)) return "stale";
            const c = this.ensureSession(e);
            return await c.preconnect({
                url: r,
                requestId: i.requestId,
                connectionContext: {
                    ...n.context,
                    credentialFingerprint: i.credentialFingerprint
                },
                headers: i.headers,
                nodeOptions: i.nodeOptions
            }, {
                signal: o,
                contextInvalidationSignal: n.signal
            }), this.isWebSocketAdmissionCurrent(t) && this.isConnectionGenerationCurrent(n) ? void 0 : (c.retireWhenIdle(n.signal.aborted ? "context_invalidated" : "preconnect_stale"), n.signal.aborted ? "context_invalidated" : "stale");
        } catch (e) {
            return !0 === n?.signal.aborted ? "context_invalidated" : o.signal.aborted ? "attempt_timeout" : this.preconnectLifecycleCategory(e) ?? s;
        } finally{
            clearTimeout(i);
        }
    }
    observeConnectionGeneration(e) {
        this.observedConnectionSignals.has(e.signal) || (this.observedConnectionSignals.add(e.signal), e.signal.addEventListener("abort", ()=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached) return;
            const e = void 0 !== this.preconnectPromise;
            this.cancelPreconnect(), this.preconnectFailures = 0, e ? (this.preconnectPending = !0, this.preconnectPendingDelayMs = 0) : this.schedulePreconnect();
        }, {
            once: !0
        }));
    }
    preconnectLifecycleCategory(e) {
        if ("object" != typeof e || null === e || !("code" in e)) return;
        const t = e.code;
        switch(t){
            case "aborted":
            case "context_invalidated":
            case "handshake_failed":
            case "handshake_timeout":
            case "manager_closed":
            case "open_failed":
            case "open_timeout":
            case "pool_exhausted":
                return t;
            default:
                return;
        }
    }
    cancelPreconnect() {
        void 0 !== this.preconnectRetryTimer && (clearTimeout(this.preconnectRetryTimer), this.preconnectRetryTimer = void 0), this.preconnectPending = !1, this.preconnectPendingDelayMs = void 0, this.preconnectController?.abort(), this.preconnectController = void 0;
    }
    emitPreconnect(e) {
        try {
            this.options.observePreconnect?.(e);
        } catch  {}
    }
    emitMetric(e) {
        try {
            this.options.metricsIncrement?.(e);
        } catch  {}
    }
    emitLifecycle(e) {
        switch(e.type){
            case "acquire":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_acquire",
                    tags: {
                        outcome: e.outcome,
                        failure_category: "failed" === e.outcome ? e.failureCategory : "none",
                        miss_reason: "reused" === e.outcome ? "none" : e.missReason,
                        idle_age_bucket: "reused" === e.outcome ? e.idleAgeBucket : "none"
                    }
                });
            case "retired":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_retired",
                    tags: {
                        cause: e.cause,
                        phase: e.phase,
                        socket_age_bucket: e.socketAgeBucket,
                        idle_age_bucket: e.idleAgeBucket,
                        last_claimed_idle_age_bucket: e.lastClaimedIdleAgeBucket,
                        lease_count_bucket: e.leaseCountBucket
                    }
                });
            case "peer_closed":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_peer_close",
                    tags: {
                        close_code_category: e.closeCodeCategory,
                        has_reason: String(e.hasReason),
                        phase: e.phase,
                        socket_age_bucket: e.socketAgeBucket,
                        idle_age_bucket: e.idleAgeBucket,
                        last_claimed_idle_age_bucket: e.lastClaimedIdleAgeBucket,
                        lease_count_bucket: e.leaseCountBucket
                    }
                });
            default:
                return;
        }
    }
    throwIfCanceled(e) {
        if (!0 === e?.aborted) throw C(e);
    }
    loadSessionFactory() {
        return this.sessionFactory ??= this.loadRunSessionFactory(), this.sessionFactory;
    }
    ensureSession(e) {
        return this.session ??= e({
            runWithNetworkContext: (e)=>this.options.runWithNetworkContext(e),
            maxConnections: this.maxConnectionsCached,
            ...void 0 === this.keepaliveCached.pingIntervalMs ? {} : {
                keepalivePingIntervalMs: this.keepaliveCached.pingIntervalMs
            },
            ...void 0 === this.keepaliveCached.pingTimeoutMs ? {} : {
                keepalivePingTimeoutMs: this.keepaliveCached.pingTimeoutMs
            },
            onPoolWentCold: ()=>this.schedulePreconnect(),
            onIdleSocketsExhausted: ()=>{
                this.warmSpareOnLeaseCached && this.schedulePreconnect();
            },
            observePreconnect: (e)=>{
                this.emitPreconnect({
                    outcome: e
                }), "expired" === e && this.schedulePreconnect(this.preconnectRetryDelayMs());
            },
            observeLifecycle: (e)=>this.emitLifecycle(e),
            observeFirstMessagePipeline: (e)=>{
                try {
                    this.options.metricsIncrement?.({
                        stat: "transport.agent_websocket_first_message_pipeline",
                        tags: {
                            outcome: e.outcome
                        }
                    }), "accepted" === e.outcome && this.options.metricsIncrement?.({
                        stat: "transport.agent_websocket_first_message_pipeline_time_saved_ms",
                        value: e.timeSavedMs
                    });
                } catch  {}
            }
        }), this.session;
    }
    assertOpen() {
        if (this.closed) throw new I;
    }
}
