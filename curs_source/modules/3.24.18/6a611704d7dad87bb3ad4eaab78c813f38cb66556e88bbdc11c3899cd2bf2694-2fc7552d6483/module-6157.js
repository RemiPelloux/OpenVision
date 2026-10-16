Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AgentWebSocketLeaseManager = exports.AgentWebSocketLifecycleError = void 0;
const r = require("./module-637.js"), o = require("./module-3192.js");
class i extends Error {
    constructor(e, t){
        super(t), this.name = "AgentWebSocketLifecycleError", this.code = e;
    }
}
exports.AgentWebSocketLifecycleError = i;
const s = {
    setTimeout: (e, t)=>setTimeout(e, t),
    clearTimeout (e) {
        clearTimeout(e);
    }
};
function a(e, t) {
    const n = t instanceof Error && t.message.length > 0 ? `: ${t.message}` : "";
    return new i(e, {
        aborted: "Agent WebSocket acquisition aborted",
        context_invalidated: "Agent WebSocket context invalidated",
        handshake_failed: `Agent WebSocket hello handshake failed${n}`,
        handshake_timeout: "Agent WebSocket hello handshake timed out",
        manager_closed: "Agent WebSocket lease manager is closed",
        no_idle_socket: "Agent WebSocket pool had no warm socket to reuse",
        open_failed: `Agent WebSocket failed to open${n}`,
        open_timeout: "Agent WebSocket opening timed out",
        pool_exhausted: "Agent WebSocket connection pool is at capacity"
    }[e]);
}
function c(e) {
    return !0 === e?.aborted;
}
function l(e, t) {
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : t;
}
function d(e, t) {
    if (void 0 === e) return "none";
    const n = Math.max(0, t - e);
    return n < 1e3 ? "under_1s" : n < 1e4 ? "1s_to_10s" : n < 6e4 ? "10s_to_1m" : n < 3e5 ? "1m_to_5m" : "5m_plus";
}
function u(e) {
    return 0 === e ? "none" : 1e3 === e ? "normal" : 1001 === e ? "going_away" : 1006 === e ? "abnormal" : 1008 === e ? "policy" : 1012 === e ? "restart" : "other";
}
function h(e, t) {
    e.activePhaseSocketEventOwner === t && (e.activePhaseSocketEventOwner = void 0);
}
exports.AgentWebSocketLeaseManager = class {
    constructor(e){
        this.generations = [], this.closingSockets = new Set, this.reservations = 0, this.retirementDepth = 0, this.closed = !1, this.createSocket = e.createSocket, this.contextsEqual = e.contextsEqual ?? Object.is, this.classifyContextMismatch = e.classifyContextMismatch;
        const t = l(e.maxConnections, 1);
        var n, r;
        this.maxConnections = Math.max(1, Math.trunc(t)), this.openTimeoutMs = l(e.openTimeoutMs, 1e4), this.handshakeTimeoutMs = l(e.handshakeTimeoutMs, 1e4), this.closeGraceTimeoutMs = l(e.closeGraceTimeoutMs, 5e3), this.keepalivePingIntervalMs = (n = e.keepalivePingIntervalMs, r = 1e4, "number" == typeof n && Number.isFinite(n) && n >= 0 ? n : r), this.keepalivePingTimeoutMs = l(e.keepalivePingTimeoutMs, 2e4), this.timers = e.timers ?? s, this.now = e.now ?? Date.now, this.observePreconnect = e.observePreconnect, this.onPoolWentCold = e.onPoolWentCold, this.onIdleSocketsExhausted = e.onIdleSocketsExhausted, this.observeLifecycle = e.observeLifecycle;
    }
    async acquire(e, t = {}) {
        let n, o = "no_idle_socket";
        try {
            if (this.closed) throw a("manager_closed");
            if (this.retirementDepth > 0) throw a("pool_exhausted");
            if (c(t.signal)) throw a("aborted");
            if (c(t.contextInvalidationSignal)) throw a("context_invalidated");
            const i = this.claimIdleGeneration(e, t.contextInvalidationSignal);
            o = i.missReason;
            const s = i.generation;
            if (void 0 === s && !0 === t.reuseOnly) throw a(this.occupancy() >= this.maxConnections ? "pool_exhausted" : "no_idle_socket");
            const l = s ?? await this.openGeneration(e, t, r.AGENT_WEBSOCKET_SUBPROTOCOL);
            if (n = l, c(t.signal)) throw this.retireGeneration(l, "acquisition aborted", "acquisition_aborted"), a("aborted");
            if (c(t.contextInvalidationSignal)) throw this.retireGeneration(l, "context invalidated", "context_invalidated"), a("context_invalidated");
            if ("ready" !== l.state || 1 !== l.socket.readyState || !this.generations.includes(l)) throw this.retireGeneration(l, "socket is not reusable", "socket_unusable"), a("open_failed");
            let d;
            l.leased = !0, l.leaseCount += 1, l.lastClaimedIdleAgeBucket = void 0 === s ? "none" : i.idleAgeBucket, this.exitIdle(l), l.preconnectReady && !l.preconnectClaimed && (l.preconnectClaimed = !0, d = l.preconnectReservationId, this.emitPreconnect("claimed"));
            const u = void 0 === s ? "opened" : l.leaseCount <= 1 ? "preconnected" : "reused", h = this.createLease(l, u, d);
            return this.emitLifecycle(void 0 === s ? {
                type: "acquire",
                outcome: "opened",
                missReason: o
            } : {
                type: "acquire",
                outcome: "reused",
                idleAgeBucket: i.idleAgeBucket
            }), this.maybeEmitIdleSocketsExhausted(), h;
        } catch (e) {
            throw this.emitLifecycle({
                type: "acquire",
                outcome: "failed",
                failureCategory: e instanceof i ? e.code : "unknown",
                missReason: o
            }), e;
        } finally{
            void 0 !== n && (n.acquiring = !1);
        }
    }
    async preconnect(e, t) {
        if (this.closed) throw a("manager_closed");
        if (this.retirementDepth > 0) throw a("pool_exhausted");
        if (c(t.signal)) throw a("aborted");
        if (c(t.contextInvalidationSignal)) throw a("context_invalidated");
        const n = this.claimIdleGeneration(e, t.contextInvalidationSignal).generation;
        if (void 0 !== n) return void (n.acquiring = !1);
        const o = await this.openGeneration(e, t, r.AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, t.reservationId);
        if (c(t.signal)) throw this.retireGeneration(o, "preconnect aborted", "preconnect_aborted"), a("aborted");
        if (c(t.contextInvalidationSignal)) throw this.retireGeneration(o, "preconnect context invalidated", "context_invalidated"), a("context_invalidated");
        if ("ready" !== o.state || 1 !== o.socket.readyState || !this.generations.includes(o)) throw this.retireGeneration(o, "preconnected socket is not reusable", "preconnect_unusable"), a("open_failed");
        if (o.preconnectReady = !0, o.acquiring = !1, this.enterIdle(o), o.retireAfterLease) throw this.retireGeneration(o, "preconnect completed while retiring", o.deferredRetirementCause ?? "preconnect_stale"), a("open_failed");
    }
    close(e = "manager_closed") {
        if (!this.closed) {
            this.closed = !0;
            for (const t of [
                ...this.generations
            ])this.retireGeneration(t, "manager closed", e);
        }
    }
    retireWhenIdle(e = "unknown") {
        this.retirementDepth += 1;
        try {
            for (const t of [
                ...this.generations
            ])t.retireAfterLease = !0, t.deferredRetirementCause ??= e;
            for (const t of [
                ...this.generations
            ])this.isIdle(t) && this.retireGeneration(t, "retiring idle socket", e);
        } finally{
            this.retirementDepth -= 1;
        }
    }
    isIdle(e) {
        return "ready" === e.state && !e.leased && !e.acquiring;
    }
    occupancy() {
        return this.generations.length + this.closingSockets.size + this.reservations;
    }
    claimIdleGeneration(e, t) {
        this.retirementDepth += 1;
        try {
            return this.claimIdleGenerationDuringRetirement(e, t);
        } finally{
            this.retirementDepth -= 1;
        }
    }
    claimIdleGenerationDuringRetirement(e, t) {
        let n, r = "none";
        const o = new Set, i = [];
        for (const s of [
            ...this.generations
        ]){
            if (!this.isIdle(s)) continue;
            s.acquiring = !0;
            let a = !1;
            const c = s.contextInvalidationSignal === t;
            try {
                a = c && this.contextsEqual(s.context, e);
            } finally{
                a && void 0 === n || (s.acquiring = !1);
            }
            a ? "ready" === s.state && this.generations.includes(s) ? s.retireAfterLease || 1 !== s.socket.readyState ? (s.acquiring = !1, o.add("idle_unusable"), this.terminateIdleGeneration(s, "idle_unusable")) : void 0 === n && (n = s, r = d(s.idleSinceMs, this.readNow())) : s.acquiring = !1 : (o.add(c ? this.contextMismatchReason(s.context, e) : "context_generation_changed"), i.push(s));
        }
        if (void 0 !== n) return {
            generation: n,
            idleAgeBucket: r,
            missReason: "no_idle_socket"
        };
        for (const e of i){
            if (this.occupancy() < this.maxConnections) break;
            this.terminateIdleGeneration(e, "context_mismatch");
        }
        let s = "no_idle_socket";
        if (o.size > 1) s = "multiple_idle_mismatches";
        else for (const e of o)s = e;
        return {
            generation: void 0,
            idleAgeBucket: "none",
            missReason: s
        };
    }
    dialGeneration(e, t, n, r) {
        if (this.closed) throw a("manager_closed");
        if (this.occupancy() >= this.maxConnections) throw a("pool_exhausted");
        this.reservations += 1;
        try {
            let o;
            try {
                o = this.createSocket(e, n);
            } catch (e) {
                throw a("open_failed", e);
            }
            const i = {
                context: e,
                contextInvalidationSignal: t.contextInvalidationSignal,
                socket: o,
                subprotocol: n,
                preconnectReservationId: r,
                createdAtMs: this.readNow(),
                state: "opening",
                acquiring: !0,
                leased: !1,
                preconnectReady: !1,
                preconnectClaimed: !1,
                retireAfterLease: !1,
                deferredRetirementCause: void 0,
                idleSinceMs: void 0,
                lastClaimedIdleAgeBucket: "none",
                leaseCount: 0,
                keepalivePingTimeout: void 0,
                keepalivePongTimeout: void 0,
                onKeepalivePong: void 0,
                activePhaseSocketEventOwner: void 0,
                cancelPending: void 0,
                onContextInvalidated: void 0,
                durableLifecycleListeners: void 0
            };
            if (this.generations.push(i), this.attachDurableGenerationLifecycleListeners(i), this.closed) throw this.retireGeneration(i, "manager closed during dial", "manager_closed"), a("manager_closed");
            return i;
        } finally{
            this.reservations -= 1;
        }
    }
    async openGeneration(e, t, n, r) {
        const o = this.dialGeneration(e, t, n, r);
        try {
            await this.waitForOpen(o, t.signal);
            const e = o.socket;
            if (this.assertPooled(o), e.protocol !== n) throw a("handshake_failed", new Error(`server did not negotiate ${n}`));
            if (await this.exchangeHello(o, t.signal), !0 === o.contextInvalidationSignal?.aborted) throw a("context_invalidated");
            return this.assertPooled(o), o.state = "ready", this.attachContextInvalidation(o), o;
        } catch (e) {
            throw this.retireGeneration(o, "opening or handshake failed", "open_or_handshake_failed"), e;
        }
    }
    waitForOpen(e, t) {
        return 1 === e.socket.readyState ? Promise.resolve() : new Promise((n, r)=>{
            let o, i = !1;
            const s = (a)=>{
                i || (i = !0, this.timers.clearTimeout(o), e.socket.off("open", c), h(e, u), t?.removeEventListener("abort", l), e.contextInvalidationSignal?.removeEventListener("abort", d), e.cancelPending === s && (e.cancelPending = void 0), void 0 === a ? n() : r(a));
            }, c = ()=>s(), l = ()=>s(a("aborted")), d = ()=>s(a("context_invalidated")), u = {
                phase: "opening",
                onError: (e)=>s(a("open_failed", e)),
                onClose: ()=>s(a("open_failed"))
            };
            e.socket.on("open", c), e.activePhaseSocketEventOwner = u, t?.addEventListener("abort", l, {
                once: !0
            }), e.contextInvalidationSignal?.addEventListener("abort", d, {
                once: !0
            }), e.cancelPending = s, o = this.timers.setTimeout(()=>s(a("open_timeout")), this.openTimeoutMs), !0 === t?.aborted ? l() : !0 === e.contextInvalidationSignal?.aborted && d();
        });
    }
    exchangeHello(e, t) {
        return new Promise((n, i)=>{
            let s, c = !1;
            const l = (r)=>{
                c || (c = !0, this.timers.clearTimeout(s), e.socket.off("message", d), h(e, m), t?.removeEventListener("abort", u), e.contextInvalidationSignal?.removeEventListener("abort", f), e.cancelPending === l && (e.cancelPending = void 0), void 0 === r ? n() : i(r));
            }, d = (e)=>{
                try {
                    const t = o.AgentWebSocketServerFrame.fromBinary(function(e) {
                        return Array.isArray(e) ? Buffer.concat(e) : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    }(e));
                    if ((0, r.validateAgentWebSocketServerFrame)(t), "hello" !== t.frame.case) throw new Error("first server frame was not hello");
                    l();
                } catch (e) {
                    l(a("handshake_failed", e));
                }
            }, u = ()=>l(a("aborted")), f = ()=>l(a("context_invalidated")), m = {
                phase: "hello-handshake",
                onError: (e)=>l(a("handshake_failed", e)),
                onClose: ()=>l(a("handshake_failed"))
            };
            e.socket.on("message", d), e.activePhaseSocketEventOwner = m, t?.addEventListener("abort", u, {
                once: !0
            }), e.contextInvalidationSignal?.addEventListener("abort", f, {
                once: !0
            }), e.cancelPending = l, s = this.timers.setTimeout(()=>l(a("handshake_timeout")), this.handshakeTimeoutMs);
            try {
                const t = new o.AgentWebSocketClientFrame({
                    frame: {
                        case: "hello",
                        value: new o.AgentWebSocketHello({
                            protocolVersion: r.AGENT_WEBSOCKET_PROTOCOL_VERSION
                        })
                    }
                });
                (0, r.validateAgentWebSocketClientFrame)(t), e.socket.send(t.toBinary());
            } catch (e) {
                l(a("handshake_failed", e));
            }
            !0 === t?.aborted ? u() : !0 === e.contextInvalidationSignal?.aborted && f();
        });
    }
    attachContextInvalidation(e) {
        const t = e.contextInvalidationSignal;
        if (void 0 === t) return;
        const n = ()=>{
            if (e.leased) return e.retireAfterLease = !0, void (e.deferredRetirementCause ??= "context_invalidated");
            this.retireGeneration(e, "context invalidated", "context_invalidated");
        };
        e.onContextInvalidated = n, t.addEventListener("abort", n, {
            once: !0
        });
    }
    attachDurableGenerationLifecycleListeners(e) {
        const t = (t)=>{
            const n = e.activePhaseSocketEventOwner;
            void 0 === n ? this.retireGeneration(e, "socket error", "socket_error") : n.onError(t);
        }, n = (t, n)=>{
            this.emitPeerClosed(e, t ?? 0, (n?.length ?? 0) > 0);
            const r = e.activePhaseSocketEventOwner;
            void 0 === r ? this.abandonGeneration(e) : r.onClose();
        };
        e.durableLifecycleListeners = {
            onSocketError: t,
            onSocketClose: n
        }, e.socket.on("error", t), e.socket.on("close", n);
    }
    createLease(e, t, n) {
        let r = !1;
        return {
            socket: e.socket,
            socketReuse: t,
            ...void 0 === n ? {} : {
                preconnectReservationId: n
            },
            release: ()=>{
                r || (r = !0, "retired" !== e.state && (e.leased = !1, e.retireAfterLease ? this.retireGeneration(e, "lease released while retiring", e.deferredRetirementCause ?? "unknown") : 1 !== e.socket.readyState ? this.retireGeneration(e, "released socket is not open", "released_socket_not_open") : this.enterIdle(e)));
            },
            retire: ()=>{
                r || (r = !0, e.leased = !1, this.retireGeneration(e, "lease retired", "lease_retired"));
            }
        };
    }
    assertPooled(e) {
        if ("retired" === e.state || !this.generations.includes(e) || this.closed) throw a(this.closed ? "manager_closed" : "open_failed");
    }
    enterIdle(e) {
        e.idleSinceMs = this.readNow(), this.armKeepalive(e);
    }
    exitIdle(e) {
        e.idleSinceMs = void 0, this.clearKeepalive(e);
    }
    armKeepalive(e) {
        this.keepalivePingIntervalMs <= 0 || (this.clearKeepalive(e), e.keepalivePingTimeout = this.timers.setTimeout(()=>{
            e.keepalivePingTimeout = void 0, this.sendKeepalivePing(e);
        }, this.keepalivePingIntervalMs));
    }
    clearKeepalive(e) {
        void 0 !== e.keepalivePingTimeout && (this.timers.clearTimeout(e.keepalivePingTimeout), e.keepalivePingTimeout = void 0), void 0 !== e.keepalivePongTimeout && (this.timers.clearTimeout(e.keepalivePongTimeout), e.keepalivePongTimeout = void 0), void 0 !== e.onKeepalivePong && (e.socket.off("pong", e.onKeepalivePong), e.onKeepalivePong = void 0);
    }
    sendKeepalivePing(e) {
        if (this.closed || !this.isIdle(e)) return;
        if (1 !== e.socket.readyState) return void this.retireGeneration(e, "idle socket is not open", "socket_unusable");
        const t = ()=>{
            this.clearKeepalive(e), !this.closed && this.isIdle(e) && this.armKeepalive(e);
        };
        e.onKeepalivePong = t, e.socket.on("pong", t), e.keepalivePongTimeout = this.timers.setTimeout(()=>{
            e.keepalivePongTimeout = void 0, this.terminateIdleGeneration(e, "keepalive_timeout");
        }, this.keepalivePingTimeoutMs);
        try {
            e.socket.ping();
        } catch  {
            this.clearKeepalive(e), this.retireGeneration(e, "keepalive ping failed", "socket_unusable");
        }
    }
    abandonGeneration(e) {
        if ("retired" === e.state) return;
        this.clearKeepalive(e), e.state = "retired", e.leased = !1, e.preconnectReady && !e.preconnectClaimed && (e.preconnectClaimed = !0, this.emitPreconnect("expired"));
        const t = e.cancelPending;
        e.cancelPending = void 0, t?.(a(this.closed ? "manager_closed" : "open_failed")), e.activePhaseSocketEventOwner = void 0, this.detachDurableGenerationLifecycleListeners(e);
        const n = this.generations.indexOf(e);
        -1 !== n && this.generations.splice(n, 1), e.socket.on("error", ()=>{}), 3 === e.socket.readyState && this.maybeEmitPoolWentCold();
    }
    maybeEmitPoolWentCold() {
        if (!(this.closed || this.occupancy() > 0)) try {
            this.onPoolWentCold?.();
        } catch  {}
    }
    maybeEmitIdleSocketsExhausted() {
        if (!(this.closed || void 0 === this.onIdleSocketsExhausted || 0 === this.occupancy() || this.occupancy() >= this.maxConnections)) {
            for (const e of this.generations)if (this.isIdle(e)) return;
            try {
                this.onIdleSocketsExhausted();
            } catch  {}
        }
    }
    emitPreconnect(e) {
        try {
            this.observePreconnect?.(e);
        } catch  {}
    }
    lifecycleDimensions(e) {
        const t = this.readNow(), n = e.activePhaseSocketEventOwner;
        return {
            phase: "hello-handshake" === n?.phase ? "hello_handshake" : "opening" === e.state ? "opening" : e.leased ? "leased" : e.preconnectReady && !e.preconnectClaimed ? "preconnect_idle" : "idle",
            socketAgeBucket: (o = Math.max(0, t - e.createdAtMs), o < 1e4 ? "under_10s" : o < 6e4 ? "10s_to_1m" : o < 3e5 ? "1m_to_5m" : o < 6e5 ? "5m_to_10m" : o < 12e5 ? "10m_to_20m" : "20m_plus"),
            idleAgeBucket: d(e.idleSinceMs, t),
            lastClaimedIdleAgeBucket: e.lastClaimedIdleAgeBucket,
            leaseCountBucket: (r = e.leaseCount, r <= 0 ? "0" : 1 === r ? "1" : r <= 4 ? "2_to_4" : r <= 8 ? "5_to_8" : r <= 16 ? "9_to_16" : "17_plus")
        };
        var r, o;
    }
    contextMismatchReason(e, t) {
        try {
            return this.classifyContextMismatch?.(e, t) ?? "connection_context_changed";
        } catch  {
            return "connection_context_changed";
        }
    }
    readNow() {
        try {
            return this.now();
        } catch  {
            return Date.now();
        }
    }
    emitLifecycle(e) {
        try {
            this.observeLifecycle?.(e);
        } catch  {}
    }
    emitPeerClosed(e, t, n) {
        this.emitLifecycle({
            type: "peer_closed",
            closeCodeCategory: u(t),
            hasReason: n,
            ...this.lifecycleDimensions(e)
        });
    }
    terminateIdleGeneration(e, t) {
        if ("retired" !== e.state && (this.emitLifecycle({
            type: "retired",
            cause: t,
            ...this.lifecycleDimensions(e)
        }), this.abandonGeneration(e), 3 !== e.socket.readyState)) try {
            e.socket.terminate();
        } catch  {
            this.trackClosingSocket(e.socket);
        }
    }
    retireGeneration(e, t, n) {
        if ("retired" === e.state) return;
        if (this.emitLifecycle({
            type: "retired",
            cause: n,
            ...this.lifecycleDimensions(e)
        }), this.abandonGeneration(e), 3 === e.socket.readyState) return;
        const r = this.trackClosingSocket(e.socket);
        try {
            e.socket.close(1e3, t);
        } catch  {
            try {
                e.socket.terminate();
            } catch  {
                return;
            }
            return void (void 0 !== r && this.releaseClosingSocket(r));
        }
        void 0 !== r && 3 === e.socket.readyState && this.releaseClosingSocket(r);
    }
    trackClosingSocket(e) {
        if (3 === e.readyState) return;
        const t = {
            socket: e,
            onClose: ()=>{
                this.releaseClosingSocket(t);
            },
            timeout: void 0
        };
        return this.closingSockets.add(t), e.on("close", t.onClose), t.timeout = this.timers.setTimeout(()=>{
            try {
                e.terminate();
            } catch  {
                return;
            }
            this.releaseClosingSocket(t);
        }, this.closeGraceTimeoutMs), t;
    }
    releaseClosingSocket(e) {
        this.closingSockets.delete(e) && (this.timers.clearTimeout(e.timeout), e.socket.off("close", e.onClose), this.maybeEmitPoolWentCold());
    }
    detachDurableGenerationLifecycleListeners(e) {
        void 0 !== e.onContextInvalidated && (e.contextInvalidationSignal?.removeEventListener("abort", e.onContextInvalidated), e.onContextInvalidated = void 0);
        const t = e.durableLifecycleListeners;
        void 0 !== t && (e.socket.off("error", t.onSocketError), e.socket.off("close", t.onSocketClose), e.durableLifecycleListeners = void 0);
    }
};
