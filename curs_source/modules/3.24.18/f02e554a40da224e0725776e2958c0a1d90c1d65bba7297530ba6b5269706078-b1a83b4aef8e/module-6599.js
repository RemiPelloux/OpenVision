"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wsReachabilityProbeTesting = void 0, exports.classifyTlsVendor = b, exports.attemptWsReachabilityProbe = R, exports.attemptWsDurabilityProbe = P, exports.scheduleWsReachabilityProbe = function(t) {
    return N({
        ...t,
        kind: "reachability"
    });
}, exports.scheduleWsDurabilityProbe = function(t) {
    return N({
        ...t,
        kind: "durability"
    });
}, exports.cancelWsDurabilityProbe = function() {
    const t = E.durability;
    void 0 !== t.timer && clearTimeout(t.timer);
    t.controller?.abort(), t.controller = void 0, t.timer = void 0, "scheduled" === t.state && (t.state = "idle", t.owner = void 0);
};
const n = require("./module-7598.js"), s = require("./module-7670.js"), i = require("./module-7126.js"), o = "ws_reachability_probe", a = "ws_dark_durability_probe", u = "/ws-reachability-probe", c = 5e3, l = 1e4, m = 3e4, d = 4, f = 3e4, p = "ws_dark_durability_probe_config", h = 1e3, g = 4e4, A = 1e3, _ = 3e4, y = 1, w = 8, S = {
    holdMs: f,
    echoTimeoutMs: c,
    concurrency: d
};
function J(t, e, r, n) {
    return "number" == typeof t && Number.isFinite(t) ? Math.min(r, Math.max(e, Math.round(t))) : n;
}
async function B(t) {
    let e;
    try {
        e = "function" == typeof t.getDynamicConfigValue ? await t.getDynamicConfigValue(p) : void 0;
    } catch  {
        e = void 0;
    }
    if (null == e) try {
        e = "function" == typeof t.getDynamicConfigFallbackValues ? t.getDynamicConfigFallbackValues(p) : void 0;
    } catch  {
        e = void 0;
    }
    const r = "object" == typeof e && null !== e ? e : {};
    return {
        holdMs: J(r.idleHoldMs, h, g, S.holdMs),
        echoTimeoutMs: J(r.echoTimeoutMs, A, _, S.echoTimeoutMs),
        concurrency: J(r.concurrency, y, w, S.concurrency)
    };
}
const E = {
    reachability: {
        state: "idle"
    },
    durability: {
        state: "idle"
    }
}, I = [
    [
        /netskope|goskope/i,
        "netskope"
    ],
    [
        /zscaler/i,
        "zscaler"
    ],
    [
        /palo\s*alto|globalprotect/i,
        "paloalto"
    ],
    [
        /fortinet|fortigate/i,
        "fortinet"
    ],
    [
        /forcepoint/i,
        "forcepoint"
    ],
    [
        /mcafee|skyhigh/i,
        "skyhigh"
    ],
    [
        /blue\s*coat|symantec|broadcom/i,
        "broadcom"
    ],
    [
        /check\s*point/i,
        "checkpoint"
    ],
    [
        /sophos/i,
        "sophos"
    ],
    [
        /iboss/i,
        "iboss"
    ],
    [
        /menlo/i,
        "menlo"
    ],
    [
        /cato\s*networks/i,
        "cato"
    ]
], C = /let'?s\s*encrypt|amazon|google\s*trust|digicert|globalsign|sectigo|entrust|cloudflare|isrg/i;
function b(t) {
    if (void 0 === t || 0 === t.length) return "unknown";
    for (const [e, r] of I)if (e.test(t)) return r;
    return C.test(t) ? "public_ca" : "other";
}
function k(t, e, r) {
    const n = b(r.tlsIssuer), s = {
        subkey: "ws_reachability_probe",
        outcome: r.outcome,
        httpStatus: r.httpStatus,
        handshakeMs: r.handshakeMs,
        echoRttMs: r.echoRttMs,
        errorCode: r.errorCode,
        http1Reason: e.http1Reason,
        mode: e.mode,
        tlsVendor: n,
        tlsIssuer: r.tlsIssuer
    };
    try {
        i.StructuredLogProviderImpl.info("transport", "WebSocket reachability probe", s);
    } catch (e) {
        t.debugLog.error("[wsReachabilityProbe] failed to emit structured log", e);
    }
    try {
        t.metricsIncrement({
            stat: "transport.ws_reachability_probe",
            tags: {
                outcome: r.outcome,
                http1_reason: e.http1Reason,
                mode: e.mode,
                tls_vendor: n,
                handshake_completed: void 0 !== r.handshakeMs ? "true" : "false"
            }
        });
    } catch (e) {
        t.debugLog.error("[wsReachabilityProbe] failed to emit metric", e);
    }
}
function v(t, e = "short") {
    const r = new URL(u, t);
    if ("durability" === e && r.searchParams.set("mode", "durability"), "https:" === r.protocol) r.protocol = "wss:";
    else {
        if ("http:" !== r.protocol) throw new Error(`unsupported backend protocol: ${r.protocol}`);
        r.protocol = "ws:";
    }
    return r.toString();
}
function q(t) {
    const e = t.code;
    return "string" == typeof e ? e : void 0;
}
function R(t) {
    const { backendUrl: e, accessToken: r, timeoutMs: i = c } = t;
    return new Promise((t)=>{
        let o;
        try {
            o = new s.WebSocket(v(e), {
                followRedirects: !1,
                perMessageDeflate: !1,
                headers: {
                    Authorization: `Bearer ${r}`
                }
            });
        } catch (e) {
            return void t({
                outcome: "network_error",
                errorCode: e instanceof Error ? q(e) : void 0
            });
        }
        const a = performance.now();
        let u, c, l = !1;
        const m = setTimeout(()=>d({
                outcome: "timeout",
                handshakeMs: u
            }), i);
        function d(e) {
            l || (l = !0, clearTimeout(m), o.removeAllListeners(), o.on("error", ()=>{}), o.terminate(), t({
                tlsIssuer: c,
                ...e
            }));
        }
        function f(t) {
            try {
                const e = t.socket;
                if ("function" != typeof e?.getPeerCertificate) return;
                const r = e.getPeerCertificate()?.issuer;
                if (void 0 === r) return;
                const n = [
                    r.O,
                    r.CN
                ].filter((t)=>"string" == typeof t && t.length > 0);
                c = n.length > 0 ? n.join(" / ") : void 0;
            } catch  {}
        }
        m.unref(), o.once("upgrade", (t)=>{
            f(t);
        }), o.once("unexpected-response", (t, e)=>{
            f(e), e.resume(), d({
                outcome: "rejected",
                httpStatus: e.statusCode,
                handshakeMs: Math.round(performance.now() - a)
            });
        }), o.once("error", (t)=>{
            d({
                outcome: "network_error",
                handshakeMs: u,
                errorCode: q(t)
            });
        }), o.once("close", ()=>{
            d({
                outcome: "closed_early",
                handshakeMs: u
            });
        }), o.once("open", ()=>{
            u = Math.round(performance.now() - a);
            const t = (0, n.randomBytes)(16), e = performance.now();
            o.once("message", (r)=>{
                (Array.isArray(r) ? Buffer.concat(r) : Buffer.isBuffer(r) ? r : Buffer.from(r)).equals(t) ? d({
                    outcome: "success",
                    handshakeMs: u,
                    echoRttMs: Math.round(performance.now() - e)
                }) : d({
                    outcome: "echo_mismatch",
                    handshakeMs: u
                });
            });
            try {
                o.send(t);
            } catch (t) {
                d({
                    outcome: "network_error",
                    handshakeMs: u,
                    errorCode: t instanceof Error ? q(t) : void 0
                });
            }
        });
    });
}
async function P(t) {
    const { backendUrl: e, accessToken: r, signal: i, holdMs: o = f, timeoutMs: a = c, concurrency: u = d } = t;
    let l = 0, m = 0;
    const p = Array.from({
        length: u
    }, (t, e)=>e), h = await Promise.all(p.map(()=>(function(t) {
            const { backendUrl: e, accessToken: r, holdMs: i, timeoutMs: o, signal: a, onOpen: u, onFinish: c } = t;
            return new Promise((t)=>{
                if (a.aborted) return void t(void 0);
                let l;
                try {
                    l = new s.WebSocket(v(e, "durability"), {
                        followRedirects: !1,
                        perMessageDeflate: !1,
                        headers: {
                            Authorization: `Bearer ${r}`
                        }
                    });
                } catch  {
                    return void t("network_error");
                }
                let m, d, f = "handshake", p = !1, h = !1;
                const g = (t, e)=>{
                    void 0 !== d && clearTimeout(d), d = setTimeout(t, e), d.unref();
                }, A = (e)=>{
                    h || (h = !0, void 0 !== d && clearTimeout(d), a.removeEventListener("abort", _), l.removeAllListeners(), l.on("error", ()=>{}), l.terminate(), p && c(), t(e));
                }, _ = ()=>A(void 0);
                a.addEventListener("abort", _, {
                    once: !0
                });
                const y = (t)=>{
                    f = t, m = (0, n.randomBytes)(16), g(()=>A("initial" === t ? "initial_echo_timeout" : "final_echo_timeout"), o);
                    try {
                        l.send(m);
                    } catch  {
                        A("network_error");
                    }
                };
                g(()=>A("handshake_timeout"), o), l.once("unexpected-response", (t, e)=>{
                    e.resume(), A("rejected");
                }), l.once("error", ()=>A("network_error")), l.once("close", ()=>A("closed_early")), l.once("open", ()=>{
                    p = !0, u(), y("initial");
                }), l.on("message", (t)=>{
                    if ("initial" !== f && "final" !== f) return void A("echo_mismatch");
                    const e = Array.isArray(t) ? Buffer.concat(t) : Buffer.isBuffer(t) ? t : Buffer.from(t);
                    void 0 !== m && e.equals(m) ? "initial" === f ? (f = "idle", m = void 0, g(()=>y("final"), i)) : A("success") : A("echo_mismatch");
                });
            });
        })({
            backendUrl: e,
            accessToken: r,
            holdMs: o,
            timeoutMs: a,
            signal: i,
            onOpen: ()=>{
                l += 1, m = Math.max(m, l);
            },
            onFinish: ()=>{
                l -= 1;
            }
        })));
    if (i.aborted || h.some((t)=>void 0 === t)) return;
    const g = h.filter((t)=>void 0 !== t), A = g.filter((t)=>"success" === t).length, _ = g.find((t)=>"success" !== t) ?? "none";
    return {
        outcome: A === u ? "success" : 0 === A ? "failure" : "partial",
        achievedConcurrency: m,
        firstFailureBySocketIndex: _,
        socketOutcomes: g
    };
}
function T(t, e, r) {
    const n = !0 === e.hasEffectiveProxy, s = {
        subkey: "ws_dark_durability_probe",
        outcome: r.outcome,
        achievedConcurrency: r.achievedConcurrency,
        firstFailureBySocketIndex: r.firstFailureBySocketIndex,
        socketOutcomes: r.socketOutcomes,
        http1Reason: e.http1Reason,
        mode: e.mode,
        hasEffectiveProxy: n
    };
    try {
        i.StructuredLogProviderImpl.info("transport", "Dark WebSocket durability probe", s);
    } catch (e) {
        t.debugLog.error("[wsReachabilityProbe] failed to emit durability log", e);
    }
    try {
        t.metricsIncrement({
            stat: "transport.ws_dark_durability_probe",
            tags: {
                outcome: r.outcome,
                achieved_concurrency: String(r.achievedConcurrency),
                first_failure_by_socket_index: r.firstFailureBySocketIndex,
                http1_reason: e.http1Reason,
                mode: e.mode,
                has_effective_proxy: n ? "true" : "false"
            }
        });
    } catch (e) {
        t.debugLog.error("[wsReachabilityProbe] failed to emit durability metric", e);
    }
}
function x(t, e) {
    const r = E[t];
    "scheduled" === r.state && r.owner === e && (void 0 !== r.timer && clearTimeout(r.timer), r.state = "idle", r.owner = void 0, r.controller = void 0, r.timer = void 0);
}
function N(t) {
    const { host: e, getContext: r, kind: n } = t, s = E[n];
    if ("idle" !== s.state || void 0 === r()) return;
    const i = Symbol(`ws-${n}-probe`), u = new AbortController;
    s.state = "scheduled", s.owner = i, s.controller = u;
    const c = t.delayMs ?? l + Math.random() * (m - l), d = setTimeout(()=>{
        Promise.resolve().then(async ()=>{
            if ("scheduled" !== s.state || s.owner !== i) return;
            if (void 0 === r() || void 0 === e.getCursorAuthToken()) return void x(n, i);
            const t = "reachability" === n ? o : a, c = await e.checkFeatureGate(t);
            if ("scheduled" !== s.state || s.owner !== i) return;
            if (!c) return void x(n, i);
            const l = r(), m = e.getCursorAuthToken();
            if (void 0 === l || void 0 === m) return void x(n, i);
            if (s.state = "attempted", s.owner = void 0, s.timer = void 0, "reachability" === n) {
                const t = await e.runWithNetworkContext(()=>R({
                        backendUrl: l.backendUrl,
                        accessToken: m
                    }));
                return {
                    kind: n,
                    context: l,
                    result: t
                };
            }
            const d = await B(e);
            if ("attempted" !== s.state || u.signal.aborted) return;
            const f = await e.runWithNetworkContext(()=>P({
                    backendUrl: l.backendUrl,
                    accessToken: m,
                    signal: u.signal,
                    holdMs: d.holdMs,
                    timeoutMs: d.echoTimeoutMs,
                    concurrency: d.concurrency
                }));
            return void 0 === f ? void 0 : {
                kind: n,
                context: l,
                result: f
            };
        }).then((t)=>{
            s.controller === u && (s.controller = void 0), void 0 !== t && ("reachability" === t.kind ? k(e, t.context, t.result) : T(e, t.context, t.result));
        }).catch((t)=>{
            ("scheduled" === s.state && s.owner === i || s.controller === u) && (void 0 !== s.timer && clearTimeout(s.timer), s.state = "idle", s.owner = void 0, s.controller = void 0, s.timer = void 0), e.debugLog.error(`[wsReachabilityProbe] unexpected ${n} probe failure`, t);
        });
    }, c);
    return s.timer = d, d.unref(), {
        dispose: ()=>{
            clearTimeout(d), u.abort(), x(n, i);
        }
    };
}
exports.wsReachabilityProbeTesting = {
    resolveDurabilityConfig: (t)=>B(t),
    emitDurabilityTelemetry (t, e, r) {
        T(t, e, r);
    },
    emitProbeTelemetry (t, e, r) {
        k(t, e, r);
    },
    reset () {
        void 0 !== E.reachability.timer && clearTimeout(E.reachability.timer), void 0 !== E.durability.timer && clearTimeout(E.durability.timer), E.reachability.controller?.abort(), E.durability.controller?.abort(), E.reachability = {
            state: "idle"
        }, E.durability = {
            state: "idle"
        };
    }
};
