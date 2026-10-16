Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AgentWebSocketRunAdapter = void 0;
const r = require("./module-637.js"), o = require(6402), i = require("./module-3192.js"), s = require(8394), a = require("./module-6157.js"), c = require("./module-5349.js"), l = new Set([
    "acquisition aborted",
    "binary-frames-only",
    "cancelled",
    "client-closed",
    "context invalidated",
    "expired",
    "failed_precondition",
    "idle",
    "lease released while retiring",
    "lease retired",
    "manager closed",
    "manager closed during dial",
    "opening or handshake failed",
    "permission_denied",
    "released socket is not open",
    "resource_exhausted",
    "retiring idle socket",
    "run-complete",
    "socket error",
    "socket is not reusable",
    "write-unacknowledged"
]);
function d(e) {
    if (void 0 === e || 0 === e.byteLength) return "none";
    const t = e.subarray(0, 128).toString("utf8");
    return l.has(t) ? t : `redacted:${e.byteLength}`;
}
function u(e) {
    if (void 0 === e) return "unknown";
    const t = {
        1e3: "normal",
        1001: "going-away",
        1002: "protocol-error",
        1003: "unsupported-data",
        1005: "no-status",
        1006: "abnormal",
        1007: "invalid-payload",
        1008: "policy-violation",
        1009: "message-too-big",
        1010: "extension-required",
        1011: "internal-error",
        1012: "service-restart",
        1013: "try-again-later",
        1014: "bad-gateway",
        1015: "tls-handshake"
    }[e];
    return void 0 !== t ? t : e >= 3e3 && e <= 3999 ? "registered" : e >= 4e3 && e <= 4999 ? "application" : "other";
}
const h = {
    setTimeout: (e, t)=>setTimeout(e, t),
    clearTimeout (e) {
        clearTimeout(e);
    }
};
function f(e) {
    return e?.reason instanceof s.ConnectError ? e.reason : new s.ConnectError("Request canceled", s.Code.Canceled);
}
function m(e) {
    if (e.byteLength > 5e7) throw new s.ConnectError("Agent WebSocket client message exceeds the 50 MB limit", s.Code.ResourceExhausted);
}
function g(e, t) {
    let n = !1;
    return {
        [Symbol.asyncIterator] () {
            if (n) throw new Error("Agent WebSocket fallback input is one-shot");
            n = !0;
            let r = !0;
            return {
                next: async ()=>r ? (r = !1, e) : t.next(),
                return: async ()=>(r = !1, await t.return?.() ?? {
                        done: !0,
                        value: void 0
                    }),
                throw: async (e)=>{
                    if (r = !1, void 0 !== t.throw) return t.throw(e);
                    throw await t.return?.(), e;
                }
            };
        }
    };
}
exports.AgentWebSocketRunAdapter = class {
    constructor(e){
        this.leaseManager = e.leaseManager, this.connectionUsePolicy = e.connectionUsePolicy ?? "sequential-runs", this.acceptTimeoutMs = e.acceptTimeoutMs ?? 3e4, this.cancelFinalizationTimeoutMs = e.cancelFinalizationTimeoutMs ?? 5e3, this.maxBufferedBytes = e.maxBufferedBytes ?? 67108864, this.timers = e.timers ?? h, this.observeFirstMessagePipeline = e.observeFirstMessagePipeline;
    }
    observePipeline(e) {
        try {
            this.observeFirstMessagePipeline?.(e);
        } catch  {}
    }
    async run(e, t) {
        if (!0 === t.signal?.aborted) throw f(t.signal);
        let n;
        try {
            n = await this.leaseManager.acquire(e, {
                signal: t.signal,
                contextInvalidationSignal: t.contextInvalidationSignal,
                ...void 0 === t.reuseOnly ? {} : {
                    reuseOnly: t.reuseOnly
                }
            });
        } catch (e) {
            if (e instanceof a.AgentWebSocketLifecycleError && "aborted" === e.code) throw f(t.signal);
            return e instanceof a.AgentWebSocketLifecycleError && "pool_exhausted" === e.code ? {
                kind: "fallback",
                reason: "busy"
            } : e instanceof a.AgentWebSocketLifecycleError && "no_idle_socket" === e.code ? {
                kind: "fallback",
                reason: "cold-pool"
            } : {
                kind: "fallback",
                reason: "lease-unavailable"
            };
        }
        try {
            const e = await this.startRun(n, t);
            return "fallback" === e.kind && n.retire(), e;
        } catch (e) {
            throw n.retire(), e;
        }
    }
    startRun(e, t) {
        const { identity: n } = t, o = e.socket;
        return new Promise((s, a)=>{
            let l, d, u, h, v, p = !1, b = !1, S = !1, k = !1;
            const y = new Promise((e)=>{
                v = e;
            }), A = ()=>{
                this.timers.clearTimeout(l), o.off("message", W), o.off("error", I), o.off("close", x), t.signal?.removeEventListener("abort", P);
            }, w = (e)=>{
                p || (p = !0, A(), s(e));
            }, E = (e)=>{
                p || (p = !0, ((e)=>{
                    if (!k && void 0 !== u) {
                        k = !0;
                        try {
                            const t = void 0 !== u.throw ? u.throw(e) : u.return?.();
                            t?.catch(()=>{});
                        } catch  {}
                    }
                })(e), A(), a(e));
            }, _ = (e, t)=>{
                void 0 === d || b || (b = !0, this.observePipeline({
                    outcome: "ambiguous"
                })), E(new c.AgentWebSocketDeliveryAmbiguousError(e, {
                    cause: t
                }));
            }, C = (e)=>{
                v(e), _("Agent WebSocket write failed before RunAccepted", e);
            }, W = (o)=>{
                let s;
                try {
                    s = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(o)), (0, r.validateAgentWebSocketServerFrame)(s);
                } catch (e) {
                    return void _("Agent WebSocket sent an unreadable frame before RunAccepted", e);
                }
                if ("runRejected" === s.frame.case) return (0, c.identityMatches)(n, s.frame.value.identity) ? (void 0 === d || b || (b = !0, this.observePipeline({
                    outcome: "rejected"
                })), void w({
                    kind: "fallback",
                    reason: "run-rejected",
                    ...void 0 === h || void 0 === u ? {} : {
                        replayInput: g(h, u)
                    }
                })) : void _("Agent WebSocket rejected a different run");
                "runAccepted" === s.frame.case && (0, c.identityMatches)(n, s.frame.value.identity) ? (void 0 === d || b || (b = !0, this.observePipeline({
                    outcome: "accepted",
                    timeSavedMs: Math.max(0, Date.now() - d)
                })), void 0 !== h && void 0 !== u ? w({
                    kind: "response",
                    response: this.acceptRun({
                        lease: e,
                        request: t,
                        header: (0, c.agentWebSocketHeadersToHeaders)(s.frame.value.headers),
                        inputIterator: u,
                        firstInput: h,
                        firstMessageQueuedBeforeAcceptance: S,
                        preacceptWriteFailure: y
                    })
                }) : _("Agent WebSocket accepted before input was initialized")) : _("Agent WebSocket run was not accepted");
            }, I = (e)=>{
                _("Agent WebSocket failed before RunAccepted", e);
            }, x = ()=>{
                _("Agent WebSocket closed before RunAccepted");
            }, P = ()=>{
                this.trySend(o, (0, c.cancelRunFrame)(n.runId)), E(f(t.signal));
            };
            o.on("message", W), o.on("error", I), o.on("close", x), t.signal?.addEventListener("abort", P, {
                once: !0
            }), l = this.timers.setTimeout(()=>_("Agent WebSocket run was not accepted in time"), this.acceptTimeoutMs);
            try {
                const i = (0, c.runStartFrame)(n, t.headers, e.preconnectReservationId);
                if ((0, r.validateAgentWebSocketClientFrame)(i), 1 !== o.readyState) throw new Error("Agent WebSocket is not open");
                if (!1 === t.canSendRunStart?.()) return void w({
                    kind: "fallback",
                    reason: "gate-disabled"
                });
                this.send(o, i, C);
            } catch  {
                return void w({
                    kind: "fallback",
                    reason: "run-not-started"
                });
            }
            if (!p) {
                try {
                    u = t.input[Symbol.asyncIterator](), h = Promise.resolve().then(()=>u.next());
                } catch (e) {
                    return void _("Agent WebSocket input could not start after RunStart", e);
                }
                h.then((e)=>{
                    if (!p && !0 !== e.done) {
                        try {
                            m(e.value);
                        } catch (e) {
                            return this.trySend(o, (0, c.cancelRunFrame)(n.runId)), void E(e);
                        }
                        d = Date.now(), this.observePipeline({
                            outcome: "attempted"
                        });
                        try {
                            this.send(o, (0, c.clientMessageFrame)(n.runId, BigInt(0), e.value), C), S = !0;
                        } catch (e) {
                            _("Agent WebSocket first client message could not be queued", e);
                        }
                    }
                }, (e)=>{
                    p || _("Agent WebSocket first input failed before RunAccepted", e);
                }), !0 === t.signal?.aborted && P();
            }
        });
    }
    acceptRun(e) {
        const { lease: t, request: n } = e, { identity: a } = n, l = t.socket, h = new Headers, m = new c.SequenceValidator, g = e.inputIterator, v = Date.now(), p = {
            stage: e.firstMessageQueuedBeforeAcceptance ? "client-message-queued" : "awaiting-first-input",
            messagesQueued: e.firstMessageQueuedBeforeAcceptance ? 1 : 0,
            bytesQueued: 0
        };
        let b, S, k, y, A, w = !1, E = !1, _ = !1;
        const C = new Promise((e)=>{
            A = e;
        }), W = (e)=>{
            if (void 0 !== y) return y;
            const t = ()=>{};
            try {
                y = void 0 !== e && void 0 !== g.throw ? g.throw(e).then(t, t) : g.return?.().then(t, t) ?? Promise.resolve();
            } catch  {
                y = Promise.resolve();
            }
            return y;
        }, I = ()=>!w && (w = !0, this.timers.clearTimeout(k), this.timers.clearTimeout(S), l.off("message", L), l.off("error", q), l.off("close", O), n.signal?.removeEventListener("abort", D), !0), x = (e)=>{
            e ? t.release() : t.retire(), A();
        }, P = (e)=>{
            I() && (W(e), x(!1));
        }, T = ()=>{
            if (I()) {
                if (W(), !_) try {
                    this.send(l, (0, c.halfCloseFrame)(a.runId)), _ = !0;
                } catch  {
                    return void x(!1);
                }
                x(!0);
            }
        }, R = (e, t, n)=>{
            if (w) return;
            const r = function(e) {
                const { code: t, reason: n, outbound: r, elapsedMs: o } = e;
                return {
                    agentWsPhase: "accepted",
                    agentWsCloseCode: void 0 === t ? "none" : String(t),
                    agentWsCloseCategory: u(t),
                    agentWsCloseReason: d(n),
                    agentWsOutboundStage: r.stage,
                    agentWsElapsedMs: String(Math.max(0, o)),
                    agentWsClientMessagesQueued: String(r.messagesQueued),
                    agentWsClientPayloadBytesQueued: String(r.bytesQueued)
                };
            }({
                code: n?.code,
                reason: n?.reason,
                outbound: p,
                elapsedMs: Date.now() - v
            }), o = new c.AgentWebSocketDeliveryAmbiguousError(e, {
                cause: t,
                diagnostics: r
            });
            M.error(o), P(o);
        }, B = (e, t)=>{
            w || E || (E = !0, t && M.error(e), W(e), this.trySend(l, (0, c.cancelRunFrame)(a.runId)), k = this.timers.setTimeout(()=>P(), this.cancelFinalizationTimeoutMs));
        }, M = new c.BoundedFrameQueue(this.maxBufferedBytes, async ()=>{
            B(new s.ConnectError("Response iterator returned", s.Code.Canceled), !1), await C;
        }), L = (e)=>{
            if (w || void 0 !== b) return;
            let t;
            try {
                t = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(e)), (0, r.validateAgentWebSocketServerFrame)(t);
            } catch (e) {
                return void R("Accepted Agent WebSocket run sent an unreadable frame", e);
            }
            if ("serverMessage" === t.frame.case) {
                const e = t.frame.value;
                if (e.runId !== a.runId) return void R("Agent WebSocket sent a message for a different run");
                try {
                    m.accept(e.sequence);
                } catch (e) {
                    return void R("Agent WebSocket sent messages out of order", e);
                }
                return void (M.push(e.message, e.message.byteLength) || R("Agent WebSocket receive buffer exceeded"));
            }
            if ("runEnd" !== t.frame.case || !(0, c.identityMatches)(a, t.frame.value.identity)) return void R("Agent WebSocket sent an invalid frame during an accepted run");
            if ((0, c.agentWebSocketHeadersToHeaders)(t.frame.value.trailers).forEach((e, t)=>{
                h.append(t, e);
            }), E) return void P();
            const n = t.frame.value.error;
            if (void 0 !== n) {
                const e = (0, c.connectErrorFromAgentWebSocket)(n);
                return M.error(e), void P(e);
            }
            M.end(), "sequential-runs" === this.connectionUsePolicy && (0, r.allowsAgentWebSocketSequentialReuse)(t.frame.value.trailers) ? T() : P();
        }, q = (e)=>{
            E ? P() : (b ??= e, W(b), void 0 === S && (S = this.timers.setTimeout(()=>{
                S = void 0;
                void 0 !== b && R("Accepted Agent WebSocket connection failed", b);
            }, 100)));
        }, O = (e, t)=>{
            E ? P() : R(void 0 === b ? "Accepted Agent WebSocket connection closed" : "Accepted Agent WebSocket connection failed", b, {
                code: e,
                reason: t
            });
        }, D = ()=>{
            B(f(n.signal), !0);
        };
        return l.on("message", L), l.on("error", q), l.on("close", O), n.signal?.addEventListener("abort", D, {
            once: !0
        }), e.preacceptWriteFailure.then((e)=>{
            w || R("Accepted Agent WebSocket write failed", e);
        }), this.pumpOutbound({
            socket: l,
            identity: a,
            inputIterator: g,
            firstInput: e.firstInput,
            firstMessageQueuedBeforeAcceptance: e.firstMessageQueuedBeforeAcceptance,
            outboundDiagnostics: p,
            isDone: ()=>E || w || void 0 !== b,
            onHalfCloseSent: ()=>{
                _ = !0;
            },
            onAmbiguous: R
        }), !0 === n.signal?.aborted && D(), e.header.set(o.AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER, t.socketReuse), {
            header: e.header,
            trailer: h,
            message: M
        };
    }
    async pumpOutbound(e) {
        const { socket: t, identity: n, inputIterator: r, outboundDiagnostics: o, isDone: i } = e;
        try {
            {
                const r = e.firstInput;
                if (e.firstInput = void 0, void 0 === r) throw new Error("Agent WebSocket first input was already released");
                if (!await this.pumpFirstOutbound({
                    socket: t,
                    identity: n,
                    firstInput: r,
                    firstMessageQueuedBeforeAcceptance: e.firstMessageQueuedBeforeAcceptance,
                    outboundDiagnostics: o,
                    isDone: i,
                    onHalfCloseSent: e.onHalfCloseSent
                })) return;
            }
            let s = BigInt(1);
            for(;;){
                o.stage = "awaiting-next-input";
                const a = await r.next();
                if (i()) return;
                if (!0 === a.done) return this.send(t, (0, c.halfCloseFrame)(n.runId)), o.stage = "half-close-queued", void e.onHalfCloseSent();
                m(a.value), o.stage = "input-ready", this.send(t, (0, c.clientMessageFrame)(n.runId, s, a.value)), o.messagesQueued += 1, o.bytesQueued += a.value.byteLength, o.stage = "client-message-queued", s += BigInt(1);
            }
        } catch (t) {
            i() || e.onAmbiguous("Accepted Agent WebSocket outbound delivery became ambiguous", t);
        }
    }
    async pumpFirstOutbound(e) {
        const t = await e.firstInput;
        return !e.isDone() && (!0 === t.done ? (this.send(e.socket, (0, c.halfCloseFrame)(e.identity.runId)), e.outboundDiagnostics.stage = "half-close-queued", e.onHalfCloseSent(), !1) : (m(t.value), e.firstMessageQueuedBeforeAcceptance ? e.outboundDiagnostics.bytesQueued = t.value.byteLength : (e.outboundDiagnostics.stage = "input-ready", this.send(e.socket, (0, c.clientMessageFrame)(e.identity.runId, BigInt(0), t.value)), e.outboundDiagnostics.messagesQueued = 1, e.outboundDiagnostics.bytesQueued = t.value.byteLength, e.outboundDiagnostics.stage = "client-message-queued"), e.outboundDiagnostics.stage = "awaiting-next-input", !0));
    }
    send(e, t, n) {
        if ((0, r.validateAgentWebSocketClientFrame)(t), 1 !== e.readyState) throw new Error("Agent WebSocket is not open");
        const o = t.toBinary();
        void 0 !== n ? e.send(o, (e)=>{
            null != e && n(e);
        }) : e.send(o);
    }
    trySend(e, t) {
        try {
            this.send(e, t);
        } catch  {}
    }
};
