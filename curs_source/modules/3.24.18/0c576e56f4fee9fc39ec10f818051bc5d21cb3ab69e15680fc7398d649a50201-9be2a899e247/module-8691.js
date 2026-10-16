"use strict";
require.d(exports, {
    CX: ()=>m,
    Xo: ()=>Y,
    k8: ()=>o,
    FI: ()=>B,
    yZ: ()=>H,
    fX: ()=>Z,
    Vz: ()=>K,
    nw: ()=>W,
    K9: ()=>$,
    ZR: ()=>L,
    qw: ()=>q,
    I5: ()=>G,
    KS: ()=>U,
    J3: ()=>V
});
var n = require("./module-6768.js");
function o(e, t) {
    switch(e.type){
        case "idle":
        case "connecting":
        case "dormant":
            return i;
        case "connected":
            return e.stabilized ? e.probing || !1 === t?.getKeepaliveProbesEnabled?.() ? i : function(e) {
                return new Map([
                    [
                        "health_probe_timer",
                        {
                            delayMs: c(e) + Math.floor(Math.random() * u(e))
                        }
                    ]
                ]);
            }(t) : function(e) {
                return new Map([
                    [
                        "stability_timer",
                        {
                            delayMs: a(e)
                        }
                    ]
                ]);
            }(t);
        case "degraded":
            return e.probing ? i : function(e) {
                return new Map([
                    [
                        "health_probe_timer",
                        {
                            delayMs: l(e)
                        }
                    ]
                ]);
            }(t);
        case "transient_failure":
            return new Map([
                [
                    "backoff_timer",
                    {
                        delayMs: e.nextDelayMs
                    }
                ]
            ]);
        case "failed":
        case "closed":
            return !1 === e.automaticRetry && !0 !== t?.getRetryNonRetryableAutomatically?.() || e.exhausted ? i : new Map([
                [
                    "periodic_retry_timer",
                    {
                        delayMs: e.periodicRetryDelayMs
                    }
                ]
            ]);
        default:
            return e;
    }
}
function s(e) {
    switch(e.type){
        case "idle":
        case "dormant":
        case "transient_failure":
        case "failed":
        case "closed":
            return d;
        case "connecting":
            return p;
        case "connected":
        case "degraded":
            return e.probing ? f : d;
        default:
            return e;
    }
}
const i = new Map;
function a(e) {
    return e?.getStabilityThresholdMs?.() ?? (0, n.dg)();
}
function c(e) {
    return e?.getKeepaliveProbeDelayMs?.() ?? (0, n.wW)();
}
function u(e) {
    return e?.getKeepaliveJitterMs?.() ?? (0, n.Tr)();
}
function l(e) {
    return e?.getDegradedProbeDelayMs?.() ?? (0, n.sv)();
}
const d = new Set, p = new Set([
    "connection_attempt"
]), f = new Set([
    "health_probe"
]);
function h(e) {
    return "connected" === e.type && e.stabilized && !e.probing ? "keepalive" : "degraded" !== e.type || e.probing ? void 0 : "degraded";
}
class m {
    constructor(e = o){
        this.resolveActivities = e, this.activeTimers = new Map, this.activeServiceHandles = new Map, this.activeServicePromises = new Map;
    }
    reconcile(e, t, r) {
        const n = this.resolveActivities(e), o = this.resolveActivities(t);
        for (const [r, s] of this.activeTimers){
            const i = o.get(r), a = n.get(r), c = "health_probe_timer" === r && h(e) !== h(t);
            (!i || c || "health_probe_timer" !== r && i?.delayMs !== a?.delayMs) && (s.cancel(), this.activeTimers.delete(r));
        }
        for (const [e, t] of o)if (!this.activeTimers.has(e)) {
            const n = this.startTimer(e, t, r);
            this.activeTimers.set(e, n);
        }
    }
    reconcileServices(e, t, r, n) {
        s(e);
        const o = s(t), i = "connecting" === e.type ? e.generation : -1, a = "connecting" === t.type ? t.generation : -1, c = e.type === t.type && i !== a && a >= 0;
        for (const [e, t] of this.activeServiceHandles)o.has(e) && !c || (t.cancel(), this.activeServiceHandles.delete(e), this.activeServicePromises.delete(e));
        for (const e of o)if (!this.activeServiceHandles.has(e)) {
            const { handle: t, promise: o } = n(e, r);
            this.activeServiceHandles.set(e, t), this.activeServicePromises.set(e, o.catch(()=>{}));
        }
    }
    getServicePromise(e) {
        return this.activeServicePromises.get(e);
    }
    dispose() {
        for (const [, e] of this.activeTimers)e.cancel();
        this.activeTimers.clear();
        for (const [, e] of this.activeServiceHandles)e.cancel();
        this.activeServiceHandles.clear(), this.activeServicePromises.clear();
    }
    get activeCount() {
        return this.activeTimers.size;
    }
    get activeServiceCount() {
        return this.activeServiceHandles.size;
    }
    has(e) {
        return this.activeTimers.has(e);
    }
    hasService(e) {
        return this.activeServiceHandles.has(e);
    }
    startTimer(e, t, r) {
        const n = function(e) {
            switch(e){
                case "backoff_timer":
                    return {
                        target: "connection",
                        kind: "backoff_timer_expired"
                    };
                case "stability_timer":
                    return {
                        target: "connection",
                        kind: "connection_stabilized"
                    };
                case "periodic_retry_timer":
                    return {
                        target: "connection",
                        kind: "periodic_retry_expired"
                    };
                case "health_probe_timer":
                    return {
                        target: "connection",
                        kind: "health_probe_due"
                    };
                default:
                    return e;
            }
        }(e);
        let o = !1;
        const s = setTimeout(()=>{
            o || (this.activeTimers.delete(e), r([
                n
            ]));
        }, t.delayMs);
        return {
            cancel: ()=>{
                o = !0, clearTimeout(s);
            }
        };
    }
}
var g = require("./module-7223.js");
function y(e) {
    return e.maxAttempts ?? e.getMaxAttempts?.() ?? (0, g.pt)();
}
function _(e) {
    return void 0 !== e.maxPeriodicCycles ? e.maxPeriodicCycles : e.getMaxPeriodicCycles?.() ?? (0, g.Zo)();
}
function v(e) {
    return e.getStabilityThresholdMs?.() ?? (0, n.dg)();
}
const w = {
    state: null,
    commands: []
};
function b(e) {
    return function(e) {
        return "connecting" === e.type ? e.generation : 0;
    }(e) + 1;
}
function S(e, t, r = 0) {
    return {
        state: {
            type: "connecting",
            attempt: t,
            generation: b(e),
            periodicCycle: r
        },
        commands: []
    };
}
function k(e, t, r, n = 0) {
    return {
        state: {
            type: "connecting",
            attempt: t,
            generation: b(e),
            periodicCycle: n
        },
        commands: r
    };
}
function E(e, t, r = 0, n = !0) {
    return {
        state: {
            type: "failed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(r),
            periodicCycle: r,
            ...!1 === n ? {
                automaticRetry: !1
            } : {}
        },
        commands: []
    };
}
function x(e, t, r, n = 0, o = !0) {
    return {
        state: {
            type: "failed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(n),
            periodicCycle: n,
            ...!1 === o ? {
                automaticRetry: !1
            } : {}
        },
        commands: r
    };
}
function T(e, t, r = [], n = 0, o = !0) {
    return {
        state: {
            type: "closed",
            error: e,
            periodicRetryDelayMs: t.getPeriodicRetryDelay(n),
            periodicCycle: n,
            ...!1 === o ? {
                automaticRetry: !1
            } : {}
        },
        commands: r
    };
}
function O(e, t, r = 0) {
    const n = t.getBackoffDelay(e);
    return {
        state: {
            type: "transient_failure",
            attempt: e,
            nextDelayMs: n,
            periodicCycle: r
        },
        commands: [
            {
                type: "start_backoff_timer",
                delayMs: n
            }
        ]
    };
}
function P(e, t, r) {
    switch(t.kind){
        case "connect_success":
            return {
                state: {
                    type: "connected",
                    attempt: e.attempt,
                    stabilized: !1,
                    probing: !1
                },
                commands: [
                    {
                        type: "cancel_backoff_timer"
                    },
                    {
                        type: "start_stability_timer",
                        delayMs: v(r)
                    }
                ]
            };
        case "connect_failure":
            return function(e, t, r, n, o = 0) {
                if (!r) return E(t, n, o, !1);
                const s = e + 1;
                return s >= y(n) ? E(t, n, o) : O(s, n, o);
            }(e.attempt, t.error, t.isRetryable, r, e.periodicCycle);
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: [
                    {
                        type: "cancel_backoff_timer"
                    }
                ]
            };
        case "connect_start":
        case "transport_error":
        case "transport_closed":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
            return w;
        case "session_invalidated":
            return k(e, 0, [
                {
                    type: "initiate_connection"
                }
            ]);
        default:
            return t;
    }
}
function I(e, t, r) {
    switch(t.kind){
        case "health_probe_due":
            return e.probing ? w : {
                state: {
                    ...e,
                    probing: !0
                },
                commands: []
            };
        case "health_probe_succeeded":
            return {
                state: {
                    type: "connected",
                    attempt: 0,
                    stabilized: !0,
                    probing: !1
                },
                commands: []
            };
        case "health_probe_failed":
            {
                const o = e.consecutiveFailures + 1;
                return o >= function(e) {
                    return e.getMaxDegradedProbeFailures?.() ?? (0, n.eZ)();
                }(r) ? O(0, r) : {
                    state: {
                        type: "degraded",
                        consecutiveFailures: o,
                        reason: t.error,
                        probing: !1
                    },
                    commands: []
                };
            }
        case "request_degraded":
            return {
                state: {
                    type: "degraded",
                    consecutiveFailures: 0,
                    reason: t.reason,
                    probing: e.probing
                },
                commands: []
            };
        case "transport_error":
            return t.isRetryable ? O(0, r) : E(t.error, r, 0, !1);
        case "transport_closed":
            return t.isStdio ? T("Client closed", r) : O(0, r);
        case "session_invalidated":
            return k(e, 0, [
                {
                    type: "cancel_backoff_timer"
                },
                {
                    type: "initiate_connection"
                }
            ]);
        case "server_removed":
            return {
                state: {
                    type: "idle"
                },
                commands: []
            };
        case "connect_start":
        case "connect_success":
        case "connect_failure":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
            return w;
        default:
            return t;
    }
}
function C(e, t, r) {
    switch(e.type){
        case "idle":
            return function(e, t, r) {
                switch(t.kind){
                    case "connect_start":
                        return S(e, 0);
                    case "connect_failure":
                        return E(t.error, r, 0, t.isRetryable);
                    case "server_removed":
                    case "connect_success":
                    case "transport_error":
                    case "transport_closed":
                    case "session_invalidated":
                    case "idle_suspend":
                    case "backoff_timer_expired":
                    case "connection_stabilized":
                    case "periodic_retry_expired":
                    case "request_degraded":
                    case "health_probe_due":
                    case "health_probe_succeeded":
                    case "health_probe_failed":
                        return w;
                    default:
                        return t;
                }
            }(e, t, r);
        case "connecting":
            return P(e, t, r);
        case "connected":
            return function(e, t, r) {
                switch(t.kind){
                    case "connect_start":
                    case "connect_success":
                    case "connect_failure":
                    case "backoff_timer_expired":
                    case "periodic_retry_expired":
                        return w;
                    case "connection_stabilized":
                        return {
                            state: {
                                type: "connected",
                                attempt: 0,
                                stabilized: !0,
                                probing: !1
                            },
                            commands: []
                        };
                    case "transport_error":
                        if (t.isRetryable) {
                            const n = e.stabilized ? 0 : e.attempt + 1;
                            return n >= y(r) ? x(t.error, r, [
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]) : {
                                state: {
                                    type: "transient_failure",
                                    attempt: n,
                                    nextDelayMs: r.getBackoffDelay(n),
                                    periodicCycle: 0
                                },
                                commands: [
                                    {
                                        type: "cancel_stability_timer"
                                    },
                                    {
                                        type: "start_backoff_timer",
                                        delayMs: r.getBackoffDelay(n)
                                    }
                                ]
                            };
                        }
                        return x(t.error, r, [
                            {
                                type: "cancel_stability_timer"
                            }
                        ], 0, !1);
                    case "transport_closed":
                        if (t.isStdio) return T("Client closed", r, [
                            {
                                type: "cancel_stability_timer"
                            }
                        ]);
                        {
                            const t = e.stabilized ? 0 : e.attempt + 1;
                            return t >= y(r) ? x("Transport closed", r, [
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]) : {
                                state: {
                                    type: "transient_failure",
                                    attempt: t,
                                    nextDelayMs: r.getBackoffDelay(t),
                                    periodicCycle: 0
                                },
                                commands: [
                                    {
                                        type: "cancel_stability_timer"
                                    },
                                    {
                                        type: "start_backoff_timer",
                                        delayMs: r.getBackoffDelay(t)
                                    }
                                ]
                            };
                        }
                    case "session_invalidated":
                        return k(e, 0, [
                            {
                                type: "cancel_backoff_timer"
                            },
                            {
                                type: "cancel_stability_timer"
                            },
                            {
                                type: "initiate_connection"
                            }
                        ]);
                    case "idle_suspend":
                        return {
                            state: {
                                type: "dormant"
                            },
                            commands: [
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]
                        };
                    case "server_removed":
                        return {
                            state: {
                                type: "idle"
                            },
                            commands: [
                                {
                                    type: "cancel_backoff_timer"
                                },
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]
                        };
                    case "request_degraded":
                        return {
                            state: {
                                type: "degraded",
                                consecutiveFailures: 0,
                                reason: t.reason,
                                probing: !1
                            },
                            commands: [
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]
                        };
                    case "health_probe_due":
                        return e.probing ? w : {
                            state: {
                                ...e,
                                probing: !0
                            },
                            commands: []
                        };
                    case "health_probe_succeeded":
                        return e.probing ? {
                            state: {
                                ...e,
                                probing: !1
                            },
                            commands: []
                        } : w;
                    case "health_probe_failed":
                        return {
                            state: {
                                type: "degraded",
                                consecutiveFailures: 1,
                                reason: t.error,
                                probing: !1
                            },
                            commands: [
                                {
                                    type: "cancel_stability_timer"
                                }
                            ]
                        };
                    default:
                        return t;
                }
            }(e, t, r);
        case "dormant":
            return function(e, t) {
                switch(t.kind){
                    case "connect_start":
                    case "session_invalidated":
                        return S(e, 0);
                    case "server_removed":
                        return {
                            state: {
                                type: "idle"
                            },
                            commands: [
                                {
                                    type: "cancel_backoff_timer"
                                }
                            ]
                        };
                    case "idle_suspend":
                    case "connect_success":
                    case "connect_failure":
                    case "transport_error":
                    case "transport_closed":
                    case "backoff_timer_expired":
                    case "connection_stabilized":
                    case "periodic_retry_expired":
                    case "request_degraded":
                    case "health_probe_due":
                    case "health_probe_succeeded":
                    case "health_probe_failed":
                        return w;
                    default:
                        return t;
                }
            }(e, t);
        case "degraded":
            return I(e, t, r);
        case "transient_failure":
            return function(e, t) {
                switch(t.kind){
                    case "backoff_timer_expired":
                        return {
                            state: {
                                type: "connecting",
                                attempt: e.attempt,
                                generation: b(e),
                                periodicCycle: e.periodicCycle
                            },
                            commands: [
                                {
                                    type: "initiate_connection"
                                }
                            ]
                        };
                    case "connect_start":
                        return k(e, 0, [
                            {
                                type: "cancel_backoff_timer"
                            }
                        ]);
                    case "server_removed":
                        return {
                            state: {
                                type: "idle"
                            },
                            commands: [
                                {
                                    type: "cancel_backoff_timer"
                                }
                            ]
                        };
                    case "connect_success":
                    case "connect_failure":
                    case "transport_error":
                    case "transport_closed":
                    case "session_invalidated":
                    case "idle_suspend":
                    case "connection_stabilized":
                    case "periodic_retry_expired":
                    case "request_degraded":
                    case "health_probe_due":
                    case "health_probe_succeeded":
                    case "health_probe_failed":
                        return w;
                    default:
                        return t;
                }
            }(e, t);
        case "failed":
            return function(e, t, r) {
                switch(t.kind){
                    case "connect_start":
                        return S(e, 0);
                    case "periodic_retry_expired":
                        {
                            const t = _(r);
                            return void 0 !== t && e.periodicCycle >= t ? e.exhausted ? w : {
                                state: {
                                    ...e,
                                    exhausted: !0
                                },
                                commands: []
                            } : S(e, 0, e.periodicCycle + 1);
                        }
                    case "server_removed":
                        return {
                            state: {
                                type: "idle"
                            },
                            commands: []
                        };
                    case "connect_success":
                    case "connect_failure":
                    case "transport_error":
                    case "transport_closed":
                    case "session_invalidated":
                    case "idle_suspend":
                    case "backoff_timer_expired":
                    case "connection_stabilized":
                    case "request_degraded":
                    case "health_probe_due":
                    case "health_probe_succeeded":
                    case "health_probe_failed":
                        return w;
                    default:
                        return t;
                }
            }(e, t, r);
        case "closed":
            return function(e, t, r) {
                switch(t.kind){
                    case "connect_start":
                        return S(e, 0);
                    case "periodic_retry_expired":
                        {
                            const t = _(r);
                            return void 0 !== t && e.periodicCycle >= t ? e.exhausted ? w : {
                                state: {
                                    ...e,
                                    exhausted: !0
                                },
                                commands: []
                            } : S(e, 0, e.periodicCycle + 1);
                        }
                    case "server_removed":
                        return {
                            state: {
                                type: "idle"
                            },
                            commands: []
                        };
                    case "connect_success":
                    case "connect_failure":
                    case "transport_error":
                    case "transport_closed":
                    case "session_invalidated":
                    case "idle_suspend":
                    case "backoff_timer_expired":
                    case "connection_stabilized":
                    case "request_degraded":
                    case "health_probe_due":
                    case "health_probe_succeeded":
                    case "health_probe_failed":
                        return w;
                    default:
                        return t;
                }
            }(e, t, r);
        default:
            return e;
    }
}
function A(e, t) {
    switch(t.kind){
        case "auth_required":
            return {
                type: "needsUserAuth",
                authorizationUrl: t.authorizationUrl
            };
        case "tokens_saved":
            switch(e.type){
                case "needsUserAuth":
                case "expired":
                    return {
                        type: "valid"
                    };
                case "unknown":
                case "valid":
                    return null;
                default:
                    return e;
            }
        case "auth_completed":
            switch(e.type){
                case "needsUserAuth":
                    return {
                        type: "valid"
                    };
                case "unknown":
                case "valid":
                case "expired":
                    return null;
                default:
                    return e;
            }
        case "operation_auth_failed":
            switch(e.type){
                case "valid":
                case "unknown":
                    return {
                        type: "expired",
                        error: t.error
                    };
                case "needsUserAuth":
                case "expired":
                    return null;
                default:
                    return e;
            }
        case "operation_succeeded":
            switch(e.type){
                case "expired":
                case "unknown":
                    return {
                        type: "valid"
                    };
                case "valid":
                case "needsUserAuth":
                    return null;
                default:
                    return e;
            }
        case "server_removed":
            return {
                type: "unknown"
            };
        default:
            return t;
    }
}
function $(e, t, r, n) {
    let o = e, s = t, i = [];
    switch(r.target){
        case "connection":
            {
                const a = "needsUserAuth" === t.type || "expired" === t.type;
                if ("backoff_timer_expired" !== r.kind && "periodic_retry_expired" !== r.kind || !a) {
                    const { target: a, ...c } = r, u = C(e, c, n.backoff);
                    if (null !== u.state && (o = u.state), i = u.commands, "connect_success" === r.kind && "expired" === t.type) {
                        const e = A(t, {
                            kind: "operation_succeeded"
                        });
                        null !== e && (s = e);
                    }
                } else ;
                break;
            }
        case "auth":
            {
                const e = t, { target: a, ...c } = r, u = A(t, c);
                null !== u && (s = u);
                const l = "needsUserAuth" === e.type || "expired" === e.type, d = "needsUserAuth" !== s.type && "expired" !== s.type, p = "transient_failure" === o.type || "failed" === o.type || "closed" === o.type;
                if (l && d && p) {
                    const e = C(o, {
                        kind: "connect_start"
                    }, n.backoff);
                    null !== e.state && (o = e.state), i.push(...e.commands), i.push({
                        type: "initiate_connection"
                    });
                }
                break;
            }
        default:
            return r;
    }
    const a = function(e, t) {
        return "needsUserAuth" === t.type ? {
            type: "needsAuth",
            authorizationUrl: t.authorizationUrl
        } : "expired" === t.type ? {
            type: "error",
            error: t.error
        } : "failed" === e.type || "closed" === e.type && e.error ? !1 === e.automaticRetry ? {
            type: "error",
            error: e.error,
            isRetryable: !1
        } : {
            type: "error",
            error: e.error
        } : "connecting" === e.type ? {
            type: "initializing"
        } : "degraded" === e.type ? {
            type: "degraded",
            reason: e.reason
        } : "connected" !== e.type && "dormant" !== e.type || "valid" !== t.type && "unknown" !== t.type ? "transient_failure" === e.type ? {
            type: "connected"
        } : {
            type: "disconnected"
        } : {
            type: "connected"
        };
    }(o, s);
    return {
        connectionState: o,
        authState: s,
        commands: i,
        projectedStatus: a
    };
}
var R = require("./module-8891.js"), N = require("./module-5977.js"), M = require("./module-1521.js"), J = require("./module-3168.js"), j = require("./module-1195.js");
function D(e) {
    if ("object" == typeof e && null !== e && "code" in e) return e.code;
}
function F(e) {
    return e.message.includes("Received a response for an unknown message ID");
}
function q(e) {
    if (e instanceof R.D_) return !0;
    if (e instanceof N.Gy || e instanceof N.Pg || e instanceof N.g || e instanceof N.hY) return !0;
    if (e instanceof N.W5 && "string" == typeof (t = e.errorCode) && M.S2.has(t.toLowerCase())) return !0;
    var t;
    if ((0, M.Gp)(e)) return !0;
    if (e instanceof Error) {
        const t = e.message.toLowerCase();
        if (t.includes("unauthorized") || /\b401\b/.test(t)) return !0;
        if (401 === D(e)) return !0;
    }
    return !1;
}
function z(e) {
    return !!e.message.includes("SSE stream disconnected") || !!e.message.startsWith("SSE error:") && void 0 === (0, j.RI)(e) && !e.message.includes("Maximum reconnection attempts");
}
function U(e, t) {
    return "streamableHttp" === t && e instanceof Error && (404 === (0, j.RI)(e) || 404 === D(e) || !!e.message.includes("Maximum reconnection attempts") || !!e.message.includes("MCP error -32000: Connection closed") || function(e) {
        const t = e.match(/MCP error -3200[01]:\s*(.+)/i);
        if (t) {
            const e = t[1];
            if (/session/i.test(e)) return !0;
        }
        const r = e.match(/\{[\s\S]*"jsonrpc"[\s\S]*\}/);
        if (r) try {
            const e = JSON.parse(r[0]), t = e?.error?.code;
            if ((-32e3 === t || -32001 === t) && "string" == typeof e?.error?.message && /session/i.test(e.error.message)) return !0;
        } catch  {}
        return !1;
    }(e.message));
}
function B(e, t) {
    const r = function(e) {
        return e instanceof M.Nj ? {
            reason: "sibling_refreshed",
            retryable: !0
        } : (0, M.zG)(e) ? {
            reason: "network",
            retryable: !0
        } : (0, M.ZN)(e) ? {
            reason: "oauth_loopback_unavailable",
            retryable: !1
        } : void 0;
    }(e);
    if (void 0 !== r) return r;
    const n = e instanceof Error ? e.message : String(e), o = e instanceof Error && (0, j.Hr)(e), s = (0, J.v)(n), i = o || s;
    if (q(e)) return {
        reason: "auth",
        retryable: !1
    };
    if (void 0 !== t && U(e, t)) return {
        reason: "session_invalidated",
        retryable: !0,
        httpStatus: 404
    };
    const a = e instanceof Error ? (0, j.RI)(e) : void 0;
    if (void 0 !== a) {
        if (a >= 500) return {
            reason: "http_5xx",
            retryable: i,
            httpStatus: a
        };
        if (a >= 400) return {
            reason: "http_4xx",
            retryable: i,
            httpStatus: a
        };
    }
    return s ? {
        reason: "timeout",
        retryable: !0,
        httpStatus: a
    } : o ? {
        reason: "network",
        retryable: !0,
        httpStatus: a
    } : {
        reason: "unknown",
        retryable: i,
        httpStatus: a
    };
}
function L(e, t, r) {
    if (z(e) || F(e)) return "suppress";
    const n = r ?? B(e, t);
    return "session_invalidated" === n.reason ? "warn" : n.retryable ? "debug" : "warn";
}
function V(e, t) {
    if (t) return !0;
    switch(e.kind){
        case "connect_failure":
        case "transport_error":
            return !e.isRetryable;
        case "transport_closed":
            return e.isStdio;
        case "session_invalidated":
            return !1;
        default:
            return e;
    }
}
function K(e, t) {
    const { authState: r, transportType: n } = t;
    if (z(e)) return [];
    if (F(e)) return [];
    if ("needsUserAuth" === r.type) return [];
    const o = B(e, n);
    if ("auth" === o.reason) return [
        {
            target: "auth",
            kind: "operation_auth_failed",
            error: e.message
        }
    ];
    if ("session_invalidated" === o.reason) return [
        {
            target: "connection",
            kind: "session_invalidated"
        }
    ];
    if ("stdio" !== n) {
        const e = o.httpStatus;
        if (429 === e || 503 === e) return [
            {
                target: "connection",
                kind: "request_degraded",
                reason: `HTTP ${e}`
            }
        ];
    }
    return "stdio" !== n && o.retryable ? [
        {
            target: "connection",
            kind: "transport_error",
            error: e.message,
            isRetryable: !0
        }
    ] : [
        {
            target: "connection",
            kind: "transport_error",
            error: e.message,
            isRetryable: !1
        }
    ];
}
function Z(e) {
    const { authState: t, transportType: r } = e;
    if ("needsUserAuth" === t.type) return [];
    return [
        {
            target: "connection",
            kind: "transport_closed",
            isStdio: "stdio" === r
        }
    ];
}
function W(e) {
    const { result: t, error: r, authState: n } = e;
    if (void 0 !== r) {
        if (q(r) && "needsUserAuth" !== n.type) {
            return [
                {
                    target: "auth",
                    kind: "operation_auth_failed",
                    error: r instanceof Error ? r.message : String(r)
                }
            ];
        }
        return [];
    }
    return void 0 === t ? [] : (t.isError, [
        {
            target: "auth",
            kind: "operation_succeeded"
        }
    ]);
}
function H(e) {
    const { authError: t, authState: r } = e;
    return void 0 !== t ? "needsUserAuth" !== r.type ? [
        {
            target: "auth",
            kind: "operation_auth_failed",
            error: t
        }
    ] : [] : [
        {
            target: "auth",
            kind: "operation_succeeded"
        }
    ];
}
class Y {
    constructor(e = 200){
        this.head = 0, this.count = 0, this.capacity = e, this.buffer = new Array(e);
    }
    push(e) {
        this.buffer[this.head] = e, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++;
    }
    getEntries() {
        return 0 === this.count ? [] : this.count < this.capacity ? this.buffer.slice(0, this.count) : [
            ...this.buffer.slice(this.head),
            ...this.buffer.slice(0, this.head)
        ];
    }
    clear() {
        this.head = 0, this.count = 0, this.buffer = new Array(this.capacity);
    }
    get size() {
        return this.count;
    }
}
function G(e) {
    return !e.ok && !0 !== e.needsAuth && !0 === e.sessionReuseRequired;
}
