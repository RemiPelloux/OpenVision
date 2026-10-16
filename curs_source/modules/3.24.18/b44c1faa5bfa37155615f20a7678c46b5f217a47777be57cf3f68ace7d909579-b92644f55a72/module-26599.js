"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wsReachabilityProbeTesting = void 0, exports.classifyTlsVendor = k, exports.attemptWsReachabilityProbe = B, exports.attemptWsDurabilityProbe = P, exports.scheduleWsReachabilityProbe = function(e) {
    return q({
        ...e,
        kind: "reachability"
    });
}, exports.scheduleWsDurabilityProbe = function(e) {
    return q({
        ...e,
        kind: "durability"
    });
}, exports.cancelWsDurabilityProbe = function() {
    const e = E.durability;
    void 0 !== e.timer && clearTimeout(e.timer);
    e.controller?.abort(), e.controller = void 0, e.timer = void 0, "scheduled" === e.state && (e.state = "idle", e.owner = void 0);
};
const n = require("./module-77598.js"), s = require("./module-47670.js"), o = require("./module-7126.js"), i = "ws_reachability_probe", a = "ws_dark_durability_probe", c = "/ws-reachability-probe", l = 5e3, u = 1e4, d = 3e4, p = 4, m = 3e4, h = "ws_dark_durability_probe_config", f = 1e3, g = 4e4, y = 1e3, w = 3e4, v = 1, _ = 8, A = {
    holdMs: m,
    echoTimeoutMs: l,
    concurrency: p
};
function S(e, t, r, n) {
    return "number" == typeof e && Number.isFinite(e) ? Math.min(r, Math.max(t, Math.round(e))) : n;
}
async function b(e) {
    let t;
    try {
        t = "function" == typeof e.getDynamicConfigValue ? await e.getDynamicConfigValue(h) : void 0;
    } catch  {
        t = void 0;
    }
    if (null == t) try {
        t = "function" == typeof e.getDynamicConfigFallbackValues ? e.getDynamicConfigFallbackValues(h) : void 0;
    } catch  {
        t = void 0;
    }
    const r = "object" == typeof t && null !== t ? t : {};
    return {
        holdMs: S(r.idleHoldMs, f, g, A.holdMs),
        echoTimeoutMs: S(r.echoTimeoutMs, y, w, A.echoTimeoutMs),
        concurrency: S(r.concurrency, v, _, A.concurrency)
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
function k(e) {
    if (void 0 === e || 0 === e.length) return "unknown";
    for (const [t, r] of I)if (t.test(e)) return r;
    return C.test(e) ? "public_ca" : "other";
}
function x(e, t, r) {
    const n = k(r.tlsIssuer), s = {
        subkey: "ws_reachability_probe",
        outcome: r.outcome,
        httpStatus: r.httpStatus,
        handshakeMs: r.handshakeMs,
        echoRttMs: r.echoRttMs,
        errorCode: r.errorCode,
        http1Reason: t.http1Reason,
        mode: t.mode,
        tlsVendor: n,
        tlsIssuer: r.tlsIssuer
    };
    try {
        o.StructuredLogProviderImpl.info("transport", "WebSocket reachability probe", s);
    } catch (t) {
        e.debugLog.error("[wsReachabilityProbe] failed to emit structured log", t);
    }
    try {
        e.metricsIncrement({
            stat: "transport.ws_reachability_probe",
            tags: {
                outcome: r.outcome,
                http1_reason: t.http1Reason,
                mode: t.mode,
                tls_vendor: n,
                handshake_completed: void 0 !== r.handshakeMs ? "true" : "false"
            }
        });
    } catch (t) {
        e.debugLog.error("[wsReachabilityProbe] failed to emit metric", t);
    }
}
function T(e, t = "short") {
    const r = new URL(c, e);
    if ("durability" === t && r.searchParams.set("mode", "durability"), "https:" === r.protocol) r.protocol = "wss:";
    else {
        if ("http:" !== r.protocol) throw new Error(`unsupported backend protocol: ${r.protocol}`);
        r.protocol = "ws:";
    }
    return r.toString();
}
function R(e) {
    const t = e.code;
    return "string" == typeof t ? t : void 0;
}
function B(e) {
    const { backendUrl: t, accessToken: r, timeoutMs: o = l } = e;
    return new Promise((e)=>{
        let i;
        try {
            i = new s.WebSocket(T(t), {
                followRedirects: !1,
                perMessageDeflate: !1,
                headers: {
                    Authorization: `Bearer ${r}`
                }
            });
        } catch (t) {
            return void e({
                outcome: "network_error",
                errorCode: t instanceof Error ? R(t) : void 0
            });
        }
        const a = performance.now();
        let c, l, u = !1;
        const d = setTimeout(()=>p({
                outcome: "timeout",
                handshakeMs: c
            }), o);
        function p(t) {
            u || (u = !0, clearTimeout(d), i.removeAllListeners(), i.on("error", ()=>{}), i.terminate(), e({
                tlsIssuer: l,
                ...t
            }));
        }
        function m(e) {
            try {
                const t = e.socket;
                if ("function" != typeof t?.getPeerCertificate) return;
                const r = t.getPeerCertificate()?.issuer;
                if (void 0 === r) return;
                const n = [
                    r.O,
                    r.CN
                ].filter((e)=>"string" == typeof e && e.length > 0);
                l = n.length > 0 ? n.join(" / ") : void 0;
            } catch  {}
        }
        d.unref(), i.once("upgrade", (e)=>{
            m(e);
        }), i.once("unexpected-response", (e, t)=>{
            m(t), t.resume(), p({
                outcome: "rejected",
                httpStatus: t.statusCode,
                handshakeMs: Math.round(performance.now() - a)
            });
        }), i.once("error", (e)=>{
            p({
                outcome: "network_error",
                handshakeMs: c,
                errorCode: R(e)
            });
        }), i.once("close", ()=>{
            p({
                outcome: "closed_early",
                handshakeMs: c
            });
        }), i.once("open", ()=>{
            c = Math.round(performance.now() - a);
            const e = (0, n.randomBytes)(16), t = performance.now();
            i.once("message", (r)=>{
                (Array.isArray(r) ? Buffer.concat(r) : Buffer.isBuffer(r) ? r : Buffer.from(r)).equals(e) ? p({
                    outcome: "success",
                    handshakeMs: c,
                    echoRttMs: Math.round(performance.now() - t)
                }) : p({
                    outcome: "echo_mismatch",
                    handshakeMs: c
                });
            });
            try {
                i.send(e);
            } catch (e) {
                p({
                    outcome: "network_error",
                    handshakeMs: c,
                    errorCode: e instanceof Error ? R(e) : void 0
                });
            }
        });
    });
}
async function P(e) {
    const { backendUrl: t, accessToken: r, signal: o, holdMs: i = m, timeoutMs: a = l, concurrency: c = p } = e;
    let u = 0, d = 0;
    const h = Array.from({
        length: c
    }, (e, t)=>t), f = await Promise.all(h.map(()=>(function(e) {
            const { backendUrl: t, accessToken: r, holdMs: o, timeoutMs: i, signal: a, onOpen: c, onFinish: l } = e;
            return new Promise((e)=>{
                if (a.aborted) return void e(void 0);
                let u;
                try {
                    u = new s.WebSocket(T(t, "durability"), {
                        followRedirects: !1,
                        perMessageDeflate: !1,
                        headers: {
                            Authorization: `Bearer ${r}`
                        }
                    });
                } catch  {
                    return void e("network_error");
                }
                let d, p, m = "handshake", h = !1, f = !1;
                const g = (e, t)=>{
                    void 0 !== p && clearTimeout(p), p = setTimeout(e, t), p.unref();
                }, y = (t)=>{
                    f || (f = !0, void 0 !== p && clearTimeout(p), a.removeEventListener("abort", w), u.removeAllListeners(), u.on("error", ()=>{}), u.terminate(), h && l(), e(t));
                }, w = ()=>y(void 0);
                a.addEventListener("abort", w, {
                    once: !0
                });
                const v = (e)=>{
                    m = e, d = (0, n.randomBytes)(16), g(()=>y("initial" === e ? "initial_echo_timeout" : "final_echo_timeout"), i);
                    try {
                        u.send(d);
                    } catch  {
                        y("network_error");
                    }
                };
                g(()=>y("handshake_timeout"), i), u.once("unexpected-response", (e, t)=>{
                    t.resume(), y("rejected");
                }), u.once("error", ()=>y("network_error")), u.once("close", ()=>y("closed_early")), u.once("open", ()=>{
                    h = !0, c(), v("initial");
                }), u.on("message", (e)=>{
                    if ("initial" !== m && "final" !== m) return void y("echo_mismatch");
                    const t = Array.isArray(e) ? Buffer.concat(e) : Buffer.isBuffer(e) ? e : Buffer.from(e);
                    void 0 !== d && t.equals(d) ? "initial" === m ? (m = "idle", d = void 0, g(()=>v("final"), o)) : y("success") : y("echo_mismatch");
                });
            });
        })({
            backendUrl: t,
            accessToken: r,
            holdMs: i,
            timeoutMs: a,
            signal: o,
            onOpen: ()=>{
                u += 1, d = Math.max(d, u);
            },
            onFinish: ()=>{
                u -= 1;
            }
        })));
    if (o.aborted || f.some((e)=>void 0 === e)) return;
    const g = f.filter((e)=>void 0 !== e), y = g.filter((e)=>"success" === e).length, w = g.find((e)=>"success" !== e) ?? "none";
    return {
        outcome: y === c ? "success" : 0 === y ? "failure" : "partial",
        achievedConcurrency: d,
        firstFailureBySocketIndex: w,
        socketOutcomes: g
    };
}
function J(e, t, r) {
    const n = !0 === t.hasEffectiveProxy, s = {
        subkey: "ws_dark_durability_probe",
        outcome: r.outcome,
        achievedConcurrency: r.achievedConcurrency,
        firstFailureBySocketIndex: r.firstFailureBySocketIndex,
        socketOutcomes: r.socketOutcomes,
        http1Reason: t.http1Reason,
        mode: t.mode,
        hasEffectiveProxy: n
    };
    try {
        o.StructuredLogProviderImpl.info("transport", "Dark WebSocket durability probe", s);
    } catch (t) {
        e.debugLog.error("[wsReachabilityProbe] failed to emit durability log", t);
    }
    try {
        e.metricsIncrement({
            stat: "transport.ws_dark_durability_probe",
            tags: {
                outcome: r.outcome,
                achieved_concurrency: String(r.achievedConcurrency),
                first_failure_by_socket_index: r.firstFailureBySocketIndex,
                http1_reason: t.http1Reason,
                mode: t.mode,
                has_effective_proxy: n ? "true" : "false"
            }
        });
    } catch (t) {
        e.debugLog.error("[wsReachabilityProbe] failed to emit durability metric", t);
    }
}
function M(e, t) {
    const r = E[e];
    "scheduled" === r.state && r.owner === t && (void 0 !== r.timer && clearTimeout(r.timer), r.state = "idle", r.owner = void 0, r.controller = void 0, r.timer = void 0);
}
function q(e) {
    const { host: t, getContext: r, kind: n } = e, s = E[n];
    if ("idle" !== s.state || void 0 === r()) return;
    const o = Symbol(`ws-${n}-probe`), c = new AbortController;
    s.state = "scheduled", s.owner = o, s.controller = c;
    const l = e.delayMs ?? u + Math.random() * (d - u), p = setTimeout(()=>{
        Promise.resolve().then(async ()=>{
            if ("scheduled" !== s.state || s.owner !== o) return;
            if (void 0 === r() || void 0 === t.getCursorAuthToken()) return void M(n, o);
            const e = "reachability" === n ? i : a, l = await t.checkFeatureGate(e);
            if ("scheduled" !== s.state || s.owner !== o) return;
            if (!l) return void M(n, o);
            const u = r(), d = t.getCursorAuthToken();
            if (void 0 === u || void 0 === d) return void M(n, o);
            if (s.state = "attempted", s.owner = void 0, s.timer = void 0, "reachability" === n) {
                const e = await t.runWithNetworkContext(()=>B({
                        backendUrl: u.backendUrl,
                        accessToken: d
                    }));
                return {
                    kind: n,
                    context: u,
                    result: e
                };
            }
            const p = await b(t);
            if ("attempted" !== s.state || c.signal.aborted) return;
            const m = await t.runWithNetworkContext(()=>P({
                    backendUrl: u.backendUrl,
                    accessToken: d,
                    signal: c.signal,
                    holdMs: p.holdMs,
                    timeoutMs: p.echoTimeoutMs,
                    concurrency: p.concurrency
                }));
            return void 0 === m ? void 0 : {
                kind: n,
                context: u,
                result: m
            };
        }).then((e)=>{
            s.controller === c && (s.controller = void 0), void 0 !== e && ("reachability" === e.kind ? x(t, e.context, e.result) : J(t, e.context, e.result));
        }).catch((e)=>{
            ("scheduled" === s.state && s.owner === o || s.controller === c) && (void 0 !== s.timer && clearTimeout(s.timer), s.state = "idle", s.owner = void 0, s.controller = void 0, s.timer = void 0), t.debugLog.error(`[wsReachabilityProbe] unexpected ${n} probe failure`, e);
        });
    }, l);
    return s.timer = p, p.unref(), {
        dispose: ()=>{
            clearTimeout(p), c.abort(), M(n, o);
        }
    };
}
exports.wsReachabilityProbeTesting = {
    resolveDurabilityConfig: (e)=>b(e),
    emitDurabilityTelemetry (e, t, r) {
        J(e, t, r);
    },
    emitProbeTelemetry (e, t, r) {
        x(e, t, r);
    },
    reset () {
        void 0 !== E.reachability.timer && clearTimeout(E.reachability.timer), void 0 !== E.durability.timer && clearTimeout(E.durability.timer), E.reachability.controller?.abort(), E.durability.controller?.abort(), E.reachability = {
            state: "idle"
        }, E.durability = {
            state: "idle"
        };
    }
};
