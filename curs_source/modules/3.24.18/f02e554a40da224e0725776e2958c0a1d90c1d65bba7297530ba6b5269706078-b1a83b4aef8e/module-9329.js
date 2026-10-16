"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AGENT_WEBSOCKET_POOL_CONFIG = exports.AGENT_WEBSOCKET_FEATURE_GATE = void 0, exports.resolveAgentWebSocketUrl = m, exports.resolveAgentWebSocketMaxConnections = d, exports.resolveAgentWebSocketFallbackOnColdPool = f, exports.resolveAgentWebSocketWarmSpareOnLease = p, exports.resolveAgentWebSocketKeepalive = A, exports.resolveAgentWebSocketPreconnectMaxRetryDelay = S, exports.createAgentRunWebSocketSelection = function(t) {
    const e = new k(t);
    return {
        transport: e,
        drain: ()=>e.drain(),
        dispose: ()=>e.dispose()
    };
};
const n = require("./module-6402.js"), s = require("./module-7714.js"), i = require("./module-8394.js"), o = require("./module-6920.js");
exports.AGENT_WEBSOCKET_FEATURE_GATE = "nal_websocket_client", exports.AGENT_WEBSOCKET_POOL_CONFIG = "nal_websocket_client_pool";
const a = 1, u = 4, c = new Set([
    "https://api.playground.cursor.sh",
    "https://api2.cursor.sh"
]), l = "/agent/v1/run";
function m(t) {
    let e;
    try {
        e = new URL(t);
    } catch  {
        return;
    }
    if (!("https:" === e.protocol && c.has(e.origin) && "" === e.port && "" === e.username && "" === e.password && ("" === e.pathname || "/" === e.pathname) && "" === e.search && "" === e.hash && (t === e.origin || t === `${e.origin}/`))) return;
    const r = new URL(l, e);
    return r.protocol = "wss:", r.toString();
}
function d(t) {
    if ("object" != typeof t || null === t) return a;
    const e = t.maxConnections;
    return "number" != typeof e || !Number.isInteger(e) || e < a || e > u ? a : e;
}
function f(t) {
    return "object" == typeof t && null !== t && !0 === t.fallbackOnColdPool;
}
function p(t) {
    return "object" == typeof t && null !== t && !0 === t.warmSpareOnLease;
}
const h = 6e4, g = 1e3;
function A(t) {
    if ("object" != typeof t || null === t) return {};
    const e = t, r = _(e.keepalivePingIntervalMs, 0), n = _(e.keepalivePingTimeoutMs, g);
    return {
        ...void 0 === r ? {} : {
            pingIntervalMs: r
        },
        ...void 0 === n ? {} : {
            pingTimeoutMs: n
        }
    };
}
function _(t, e) {
    return "number" == typeof t && Number.isInteger(t) && t >= e && t <= h ? t : void 0;
}
const y = 1e3, w = 18e5;
function S(t) {
    if ("object" != typeof t || null === t) return;
    const e = t.preconnectMaxRetryDelayMs;
    return "number" == typeof e && Number.isInteger(e) && e >= y && e <= w ? e : void 0;
}
function J(t) {
    const e = new Headers;
    if (void 0 === t) return e;
    if (t instanceof Headers) return t.forEach((t, r)=>{
        e.append(r, t);
    }), e;
    if (Array.isArray(t)) {
        for (const [r, n] of t)e.append(r, n);
        return e;
    }
    for (const [r, n] of Object.entries(t))for (const t of Array.isArray(n) ? n : [
        n
    ])e.append(r, t);
    return e;
}
async function* B(t, e) {
    for await (const r of t)yield r instanceof e ? r.toBinary() : new e(r).toBinary();
}
async function* E(t, e, r) {
    try {
        for await (const r of t)yield e.fromBinary(r);
    } finally{
        r();
    }
}
class I extends i.ConnectError {
    constructor(){
        super("Agent WebSocket transport was closed", i.Code.Canceled);
    }
}
function C(t) {
    return t.reason instanceof Error ? t.reason : new i.ConnectError("Request canceled", i.Code.Canceled);
}
function b(t, e) {
    const r = e.filter((t)=>void 0 !== t), n = r.find((t)=>t.aborted);
    return void 0 !== n ? Promise.reject(C(n)) : 0 === r.length ? t : new Promise((e, n)=>{
        let s = !1;
        const i = new Map, o = (t)=>{
            if (!s) {
                s = !0;
                for (const [t, e] of i)t.removeEventListener("abort", e);
                t();
            }
        };
        for (const t of r){
            const e = ()=>o(()=>n(C(t)));
            i.set(t, e), t.addEventListener("abort", e, {
                once: !0
            });
        }
        t.then((t)=>o(()=>e(t)), (t)=>o(()=>n(t)));
    });
}
class k {
    constructor(t){
        this.options = t, this.closedController = new AbortController, this.webSocketAdmissionGeneration = 0, this.poolConfigRefreshGeneration = 0, this.gateAllowsWebSocketCached = !1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.preconnectFailures = 0, this.preconnectPending = !1, this.observedConnectionSignals = new WeakSet, this.draining = !1, this.closed = !1, this.connectionContextTracker = new o.AgentRunWebSocketConnectionContextTracker(t.connectionContext, (t)=>this.emitMetric({
                stat: "transport.agent_websocket_context_change",
                tags: {
                    cause: t.cause,
                    identity_changed: String(t.identityChanged)
                }
            }), ()=>this.gateAllowsWebSocketCached), this.websocketUrl = t.agentUsesHttp2 ? void 0 : m(t.baseUrl), this.loadRunSessionFactory = t.loadRunSessionFactory ?? (async ()=>(await require.e(915).then(require.bind(require, 915))).createAgentWebSocketRunSession), this.now = t.now ?? Date.now, this.gateChangeSubscription = void 0 === this.websocketUrl ? void 0 : t.onDidChangeFeatureGate?.(exports.AGENT_WEBSOCKET_FEATURE_GATE, ()=>{
            this.gateAllowsWebSocketCached = !1, this.cancelPreconnect();
            try {
                this.connectionContextTracker.pause();
            } catch (t) {
                this.options.debugLog.info("[AgentRunWebSocket] context subscription cleanup failed while disabling the gate", t);
            }
            const t = ++this.webSocketAdmissionGeneration;
            this.refreshGateSnapshot(t);
        }), this.poolConfigChangeSubscription = void 0 === this.websocketUrl || void 0 === t.getDynamicConfigValue ? void 0 : t.onDidChangeDynamicConfig?.(exports.AGENT_WEBSOCKET_POOL_CONFIG, ()=>{
            !this.closed && this.gateAllowsWebSocketCached && this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration);
        }), void 0 !== this.gateChangeSubscription && this.refreshGateSnapshot(this.webSocketAdmissionGeneration);
    }
    unary(t, e, r, n, s, i, o) {
        return this.options.httpTransport.unary(t, e, r, n, s, i, o);
    }
    async stream(t, e, r, o, a, u, c) {
        const l = (n, s, i = u)=>this.options.httpTransport.stream(t, e, r, s, n, i, c), m = this.websocketUrl, d = void 0 === m || !function(t, e) {
            return t.typeName === s.AgentService.typeName && e.name === s.AgentService.methods.run.name;
        }(t, e) || this.draining || !0 === r?.aborted || void 0 !== o && o <= 0;
        if (d) return l(a, o);
        this.assertOpen();
        const f = this.webSocketAdmissionGeneration;
        if (!this.isWebSocketAdmissionCurrent(f)) return l(a, o);
        const p = this.now(), h = ()=>void 0 === o ? void 0 : Math.max(0, o - (this.now() - p)), g = ()=>{
            const t = h();
            if (void 0 !== t && t <= 0) throw new i.ConnectError("Agent WebSocket deadline exceeded", i.Code.DeadlineExceeded);
            return t;
        }, A = function(t, e) {
            if (void 0 === e) return {
                signal: t,
                dispose: ()=>{}
            };
            const r = new AbortController;
            let n;
            const s = ()=>{
                void 0 !== n && (clearTimeout(n), n = void 0), t?.removeEventListener("abort", a);
            }, o = (t)=>{
                r.signal.aborted || r.abort(t), s();
            };
            function a() {
                o(t?.reason);
            }
            return !0 === t?.aborted ? o(t.reason) : (t?.addEventListener("abort", a, {
                once: !0
            }), n = setTimeout(()=>o(new i.ConnectError("Agent WebSocket deadline exceeded", i.Code.DeadlineExceeded)), e)), {
                signal: r.signal,
                dispose: s
            };
        }(r, o), _ = J(a);
        let y, w, S;
        try {
            if (y = await b(this.loadSessionFactory(), [
                A.signal,
                this.closedController.signal
            ]), this.assertOpen(), !this.isWebSocketAdmissionCurrent(f)) return A.dispose(), l(a, g());
            this.throwIfCanceled(A.signal), S = this.connectionContextTracker.current();
            const t = void 0 === A.signal ? S.signal : AbortSignal.any([
                A.signal,
                S.signal
            ]);
            w = await b(this.options.prepareUpgrade({
                callerHeaders: _,
                signal: t
            }), [
                t,
                this.closedController.signal
            ]), this.assertOpen(), this.throwIfCanceled(A.signal);
        } catch (t) {
            if (A.dispose(), t instanceof I) throw t;
            return this.assertOpen(), this.throwIfCanceled(A.signal), this.options.debugLog.info("[AgentRunWebSocket] preparation failed before dialing; using HTTP", t), l(a, g());
        }
        const C = ()=>{
            const t = J(_);
            return t.set("x-request-id", w.requestId), t;
        };
        if (!this.isConnectionGenerationCurrent(S)) return A.dispose(), l(C(), g());
        if (!this.isWebSocketAdmissionCurrent(f)) return A.dispose(), l(C(), g());
        const k = this.ensureSession(y);
        let v;
        try {
            v = await k.run({
                url: m,
                requestId: w.requestId,
                connectionContext: {
                    ...S.context,
                    credentialFingerprint: w.credentialFingerprint
                },
                headers: w.headers,
                nodeOptions: w.nodeOptions
            }, {
                identity: {
                    runId: _.get("x-original-request-id") ?? w.requestId,
                    requestId: w.requestId
                },
                headers: w.runHeaders,
                input: B(u, e.I),
                canSendRunStart: ()=>this.isWebSocketAdmissionCurrent(f) && this.isConnectionGenerationCurrent(S),
                contextInvalidationSignal: S.signal,
                reuseOnly: this.fallbackOnColdPoolCached,
                ...void 0 !== A.signal ? {
                    signal: A.signal
                } : {}
            });
        } catch (t) {
            throw A.dispose(), t;
        }
        if ("fallback" === v.kind) {
            A.dispose();
            const t = void 0 === v.replayInput ? void 0 : function(t) {
                let e, r = !1, n = !1;
                const s = ()=>{
                    if (r) throw new Error("Agent WebSocket replay input is one-shot");
                    return r = !0, e = t[Symbol.asyncIterator](), e;
                };
                return {
                    input: {
                        [Symbol.asyncIterator]: s
                    },
                    stop (t) {
                        if (!n) {
                            n = !0;
                            try {
                                const r = e ?? s(), n = void 0 !== r.throw ? r.throw(t) : r.return?.();
                                n?.catch(()=>{});
                            } catch  {}
                        }
                    }
                };
            }(v.replayInput);
            "cold-pool" === v.reason && this.schedulePreconnect();
            try {
                return this.assertOpen(), this.throwIfCanceled(A.signal), this.options.debugLog.info(`[AgentRunWebSocket] run did not start (${v.reason}); using HTTP`), l(C(), g(), void 0 === t ? u : async function*(t, e) {
                    for await (const r of t)yield e.fromBinary(r);
                }(t.input, e.I));
            } catch (e) {
                throw t?.stop(e), e;
            }
        }
        return v.response.header.set(n.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, "websocket"), {
            stream: !0,
            service: t,
            method: e,
            header: v.response.header,
            trailer: v.response.trailer,
            message: E(v.response.message, e.O, ()=>A.dispose())
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
        const t = this.session;
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
                    t?.close("selection_disposed");
                }
            }
        }
    }
    isWebSocketAdmissionCurrent(t) {
        return !this.closed && !this.draining && this.gateAllowsWebSocketCached && t === this.webSocketAdmissionGeneration;
    }
    isConnectionGenerationCurrent(t) {
        if (t.signal.aborted) return !1;
        try {
            return this.connectionContextTracker.current().signal === t.signal;
        } catch (t) {
            return this.options.debugLog.info("[AgentRunWebSocket] could not verify connection context; using HTTP", t), !1;
        }
    }
    refreshGateSnapshot(t) {
        Promise.resolve().then(()=>this.options.checkFeatureGate(exports.AGENT_WEBSOCKET_FEATURE_GATE)).then((e)=>{
            if (!this.closed && !this.draining && t === this.webSocketAdmissionGeneration) {
                const t = !0 === e;
                this.gateAllowsWebSocketCached = t, t ? (this.preconnectFailures = 0, this.preconnectOncePoolConfigSettles()) : (this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.retireCurrentSessionWhenIdle("gate_disabled"));
            }
        }, (r)=>{
            this.closed || this.draining || t !== this.webSocketAdmissionGeneration || (this.gateAllowsWebSocketCached = !1, this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.retireCurrentSessionWhenIdle("gate_lookup_failed"), this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports.AGENT_WEBSOCKET_FEATURE_GATE}; using HTTP`, r));
        });
    }
    preconnectOncePoolConfigSettles() {
        this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration).then(()=>this.schedulePreconnect(), ()=>this.schedulePreconnect());
    }
    refreshMaxConnectionsSnapshot(t) {
        const r = this.options.getDynamicConfigValue;
        return void 0 === r ? Promise.resolve() : (n = Promise.resolve().then(()=>r(exports.AGENT_WEBSOCKET_POOL_CONFIG)), s = this.options.poolConfigTimeoutMs ?? 1e3, new Promise((t, e)=>{
            const r = setTimeout(()=>e(new Error(`timed out after ${s}ms`)), s);
            n.then(t, e).finally(()=>clearTimeout(r));
        })).then((e)=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached || t !== this.poolConfigRefreshGeneration) return;
            const r = d(e);
            this.applyKeepalive(A(e)), this.applyMaxConnections(r), this.preconnectMaxRetryDelayCached = S(e), this.fallbackOnColdPoolCached = f(e), this.warmSpareOnLeaseCached = p(e), r !== a && this.options.debugLog.info(`[AgentRunWebSocket] sizing new sessions to ${r} connections`);
        }, (r)=>{
            this.closed || this.draining || !this.gateAllowsWebSocketCached || t !== this.poolConfigRefreshGeneration || (this.applyKeepalive({}), this.applyMaxConnections(a), this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = !1, this.warmSpareOnLeaseCached = !1, this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${exports.AGENT_WEBSOCKET_POOL_CONFIG}; using one connection`, r));
        });
        var n, s;
    }
    applyMaxConnections(t) {
        this.maxConnectionsCached !== t && (this.maxConnectionsCached = t, this.retireCurrentSessionWhenIdle("pool_resized"));
    }
    applyKeepalive(t) {
        this.keepaliveCached.pingIntervalMs === t.pingIntervalMs && this.keepaliveCached.pingTimeoutMs === t.pingTimeoutMs || (this.keepaliveCached = t, this.retireCurrentSessionWhenIdle("keepalive_reconfigured"));
    }
    retireCurrentSessionWhenIdle(t) {
        const e = this.session;
        void 0 !== e && (this.session = void 0, e.retireWhenIdle(t));
    }
    preconnectRetryDelayMs() {
        const t = Math.max(1, this.options.preconnectRetryBaseMs ?? 1e3), e = Math.max(t, this.options.preconnectMaxRetryDelayMs ?? this.preconnectMaxRetryDelayCached ?? 3e5), r = Math.min(Math.max(0, this.preconnectFailures - 1), 30);
        return Math.min(t * 2 ** r, e);
    }
    schedulePreconnect(t = 0) {
        if (!this.closed && !this.draining && this.gateAllowsWebSocketCached && void 0 !== this.websocketUrl && !0 !== this.options.preconnectDisabled) return void 0 !== this.preconnectPromise ? (this.preconnectPending = !0, void (this.preconnectPendingDelayMs = void 0 === this.preconnectPendingDelayMs ? t : Math.min(this.preconnectPendingDelayMs, t))) : void (void 0 === this.preconnectRetryTimer && (this.preconnectRetryTimer = setTimeout(()=>{
            this.preconnectRetryTimer = void 0, this.startPreconnect();
        }, Math.max(0, t))));
    }
    startPreconnect() {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || void 0 === this.websocketUrl || !0 === this.options.preconnectDisabled) return;
        this.emitPreconnect({
            outcome: "attempted"
        });
        const t = new AbortController;
        this.preconnectController = t;
        const e = this.webSocketAdmissionGeneration, r = this.performPreconnect(t.signal, e).then((t)=>{
            if (void 0 === t) return this.preconnectFailures = 0, void this.emitPreconnect({
                outcome: "succeeded"
            });
            this.closed || this.draining || !this.isWebSocketAdmissionCurrent(e) || (this.emitPreconnect({
                outcome: "failed",
                failureCategory: t
            }), "context_invalidated" !== t && "stale" !== t ? (this.preconnectFailures += 1, this.schedulePreconnect(this.preconnectRetryDelayMs())) : this.preconnectFailures = 0);
        });
        this.preconnectPromise = r, r.finally(()=>{
            if (this.preconnectController === t && (this.preconnectController = void 0), this.preconnectPromise === r && (this.preconnectPromise = void 0), this.preconnectPending) {
                const t = this.preconnectPendingDelayMs ?? 0;
                this.preconnectPending = !1, this.preconnectPendingDelayMs = void 0, this.schedulePreconnect(t);
            }
        });
    }
    async performPreconnect(t, e) {
        const r = this.websocketUrl;
        if (void 0 === r) return "stale";
        let n, s = "load";
        const i = new AbortController, o = setTimeout(()=>i.abort(), Math.max(1, this.options.preconnectAttemptTimeoutMs ?? 1e4)), a = AbortSignal.any([
            t,
            i.signal,
            this.closedController.signal
        ]);
        try {
            const t = await b(this.loadSessionFactory(), [
                a
            ]);
            if (!this.isWebSocketAdmissionCurrent(e)) return "stale";
            s = "preparation", n = this.connectionContextTracker.current(), this.observeConnectionGeneration(n);
            const i = AbortSignal.any([
                a,
                n.signal
            ]), o = await b(this.options.prepareUpgrade({
                callerHeaders: new Headers,
                signal: i
            }), [
                i
            ]);
            if (!this.isWebSocketAdmissionCurrent(e) || !this.isConnectionGenerationCurrent(n)) return "stale";
            const u = this.ensureSession(t);
            return await u.preconnect({
                url: r,
                requestId: o.requestId,
                connectionContext: {
                    ...n.context,
                    credentialFingerprint: o.credentialFingerprint
                },
                headers: o.headers,
                nodeOptions: o.nodeOptions
            }, {
                signal: i,
                contextInvalidationSignal: n.signal
            }), this.isWebSocketAdmissionCurrent(e) && this.isConnectionGenerationCurrent(n) ? void 0 : (u.retireWhenIdle(n.signal.aborted ? "context_invalidated" : "preconnect_stale"), n.signal.aborted ? "context_invalidated" : "stale");
        } catch (t) {
            return !0 === n?.signal.aborted ? "context_invalidated" : i.signal.aborted ? "attempt_timeout" : this.preconnectLifecycleCategory(t) ?? s;
        } finally{
            clearTimeout(o);
        }
    }
    observeConnectionGeneration(t) {
        this.observedConnectionSignals.has(t.signal) || (this.observedConnectionSignals.add(t.signal), t.signal.addEventListener("abort", ()=>{
            if (this.closed || this.draining || !this.gateAllowsWebSocketCached) return;
            const t = void 0 !== this.preconnectPromise;
            this.cancelPreconnect(), this.preconnectFailures = 0, t ? (this.preconnectPending = !0, this.preconnectPendingDelayMs = 0) : this.schedulePreconnect();
        }, {
            once: !0
        }));
    }
    preconnectLifecycleCategory(t) {
        if ("object" != typeof t || null === t || !("code" in t)) return;
        const e = t.code;
        switch(e){
            case "aborted":
            case "context_invalidated":
            case "handshake_failed":
            case "handshake_timeout":
            case "manager_closed":
            case "open_failed":
            case "open_timeout":
            case "pool_exhausted":
                return e;
            default:
                return;
        }
    }
    cancelPreconnect() {
        void 0 !== this.preconnectRetryTimer && (clearTimeout(this.preconnectRetryTimer), this.preconnectRetryTimer = void 0), this.preconnectPending = !1, this.preconnectPendingDelayMs = void 0, this.preconnectController?.abort(), this.preconnectController = void 0;
    }
    emitPreconnect(t) {
        try {
            this.options.observePreconnect?.(t);
        } catch  {}
    }
    emitMetric(t) {
        try {
            this.options.metricsIncrement?.(t);
        } catch  {}
    }
    emitLifecycle(t) {
        switch(t.type){
            case "acquire":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_acquire",
                    tags: {
                        outcome: t.outcome,
                        failure_category: "failed" === t.outcome ? t.failureCategory : "none",
                        miss_reason: "reused" === t.outcome ? "none" : t.missReason,
                        idle_age_bucket: "reused" === t.outcome ? t.idleAgeBucket : "none"
                    }
                });
            case "retired":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_retired",
                    tags: {
                        cause: t.cause,
                        phase: t.phase,
                        socket_age_bucket: t.socketAgeBucket,
                        idle_age_bucket: t.idleAgeBucket,
                        last_claimed_idle_age_bucket: t.lastClaimedIdleAgeBucket,
                        lease_count_bucket: t.leaseCountBucket
                    }
                });
            case "peer_closed":
                return void this.emitMetric({
                    stat: "transport.agent_websocket_peer_close",
                    tags: {
                        close_code_category: t.closeCodeCategory,
                        has_reason: String(t.hasReason),
                        phase: t.phase,
                        socket_age_bucket: t.socketAgeBucket,
                        idle_age_bucket: t.idleAgeBucket,
                        last_claimed_idle_age_bucket: t.lastClaimedIdleAgeBucket,
                        lease_count_bucket: t.leaseCountBucket
                    }
                });
            default:
                return;
        }
    }
    throwIfCanceled(t) {
        if (!0 === t?.aborted) throw C(t);
    }
    loadSessionFactory() {
        return this.sessionFactory ??= this.loadRunSessionFactory(), this.sessionFactory;
    }
    ensureSession(t) {
        return this.session ??= t({
            runWithNetworkContext: (t)=>this.options.runWithNetworkContext(t),
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
            observePreconnect: (t)=>{
                this.emitPreconnect({
                    outcome: t
                }), "expired" === t && this.schedulePreconnect(this.preconnectRetryDelayMs());
            },
            observeLifecycle: (t)=>this.emitLifecycle(t),
            observeFirstMessagePipeline: (t)=>{
                try {
                    this.options.metricsIncrement?.({
                        stat: "transport.agent_websocket_first_message_pipeline",
                        tags: {
                            outcome: t.outcome
                        }
                    }), "accepted" === t.outcome && this.options.metricsIncrement?.({
                        stat: "transport.agent_websocket_first_message_pipeline_time_saved_ms",
                        value: t.timeSavedMs
                    });
                } catch  {}
            }
        }), this.session;
    }
    assertOpen() {
        if (this.closed) throw new I;
    }
}
