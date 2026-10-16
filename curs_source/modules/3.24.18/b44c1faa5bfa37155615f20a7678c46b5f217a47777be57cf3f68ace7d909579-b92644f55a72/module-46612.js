"use strict";
require.d(exports, {
    R2: ()=>B,
    hj: ()=>N,
    bL: ()=>O
});
var n = require("./module-17392.js"), s = require("./module-37949.js"), o = require("./module-33002.js"), i = require("./module-98875.js"), a = require("./module-60431.js"), c = require("./module-46144.js"), l = require("./module-17714.js"), u = require("./module-4410.js"), d = require("./module-67918.js"), p = require("./module-84959.js"), m = require("./module-92801.js"), h = require("./module-33574.js"), f = require("./module-17819.js"), g = require("./module-56151.js"), y = require("./module-33624.js"), w = require("./module-56215.js"), v = require("./module-70656.js"), _ = require("./module-48826.js"), A = require("./module-1368.js");
function S({ wrapper: e, inner: t, mapThrown: r = (e)=>e }) {
    const n = t.return?.bind(t);
    void 0 !== n && (e.return = n);
    const s = t.throw?.bind(t);
    return void 0 !== s && (e.throw = (e)=>s(r(e))), e;
}
var b, E, I, C, k = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
};
class x {
    constructor(){
        b.add(this), E.set(this, new Map);
    }
    recordSent(e) {
        const t = function(e) {
            if ("conversationAction" !== e.message.case) return;
            const t = e.message.value.action;
            return "injectContextAction" === t.case && "" !== t.value.injectionId ? t.value.injectionId : void 0;
        }(e);
        void 0 !== t && k(this, E, "f").set(t, {
            frame: e,
            state: "settled"
        });
    }
    beginCall() {
        const e = [];
        for (const [t, r] of k(this, E, "f"))"settled" !== r.state && (k(this, E, "f").set(t, {
            frame: r.frame,
            state: "handedOver",
            ack: r.ack
        }), e.push(r.frame));
        const t = {
            handedOver: e,
            admit: (e)=>k(this, b, "m", I).call(this, t, e),
            end: ()=>k(this, b, "m", C).call(this, t)
        };
        return t;
    }
    unclaimedAcks() {
        return [
            ...k(this, E, "f").values()
        ].flatMap((e)=>"settled" === e.state ? [] : [
                e.ack.update
            ]);
    }
}
E = new WeakMap, b = new WeakSet, I = function(e, t) {
    const r = function(e) {
        if ("interactionUpdate" !== e.message.case) return;
        const t = e.message.value;
        return "contextInjectionState" === t.message.case ? {
            injectionId: t.message.value.injectionId,
            state: t.message.value.state?.state.case,
            message: e,
            update: t
        } : void 0;
    }(t), n = void 0 === r ? void 0 : k(this, E, "f").get(r.injectionId);
    return void 0 === r || void 0 === n ? function(e) {
        return "interactionUpdate" === e.message.case && "contextInjectionState" !== e.message.value.message.case;
    }(t) ? [
        ...k(this, b, "m", C).call(this, e),
        t
    ] : [
        t
    ] : "handedOver" === n.state && "queued" === r.state ? [] : "queuedForNextTurn" === r.state ? (k(this, E, "f").set(r.injectionId, {
        frame: n.frame,
        state: "held",
        ack: r,
        by: e
    }), []) : (k(this, E, "f").set(r.injectionId, {
        frame: n.frame,
        state: "settled"
    }), [
        t
    ]);
}, C = function(e) {
    const t = [];
    for (const [r, n] of k(this, E, "f"))"held" === n.state && n.by === e && (k(this, E, "f").set(r, {
        frame: n.frame,
        state: "settled"
    }), t.push(n.ack.message));
    return t;
};
const T = (0, s.h)("HarnessAgentClient"), R = 4294967295;
class B extends n.SK {
    constructor(e, t){
        const r = `Module ${e.label} (${(0, A.rw)(e.generation)}) failed`;
        super(`${r}: ${t.reason}`, {
            cause: t.cause instanceof Error ? t.cause : void 0,
            displayInfo: {
                title: r,
                detail: t.reason,
                isRetryable: !1
            }
        }), this.reason = t.reason, this.errorClass = t.errorClass, this.early = t.early, this.module = e;
    }
}
const P = new Set([
    p.C.Unknown,
    p.C.Internal,
    p.C.InvalidArgument,
    p.C.Unimplemented,
    p.C.DataLoss
]);
function J(e) {
    if (!(e instanceof m.T)) return e;
    const t = (0, v._)(e.rawMessage, e.code);
    if (t === e.rawMessage) return e;
    const r = new m.T(t, e.code, e.metadata, void 0, e.cause);
    return r.details = e.details, r;
}
function M(e, t, r = {
    crossed: !1,
    faults: []
}, n = ()=>performance.now()) {
    let s = !1;
    const o = ()=>!0 !== t?.aborted, i = (t, r)=>{
        const n = o() ? function(e) {
            if (e instanceof m.T && P.has(e.code) && !(e.findDetails(d.ErrorDetails).length > 0)) return {
                reason: e.rawMessage,
                errorClass: (0, f.s)(e.code)
            };
        }(t) ?? (function(e) {
            return e instanceof m.T && e.metadata.get(w.mj) === w.xP;
        }(t) ? {
            reason: t.rawMessage,
            errorClass: w.xP
        } : void 0) : void 0;
        return void 0 === n ? t : new B(e, {
            ...n,
            early: r,
            cause: t
        });
    };
    return {
        requests: (e)=>({
                [Symbol.asyncIterator] () {
                    const t = e[Symbol.asyncIterator]();
                    let n = !1;
                    return S({
                        wrapper: {
                            next: async ()=>{
                                const e = await t.next();
                                return n ||= !0 !== e.done, e;
                            }
                        },
                        inner: t,
                        mapThrown: (e)=>i(J(e), !n && !r.crossed)
                    });
                }
            }),
        responses: (t)=>({
                [Symbol.asyncIterator] () {
                    const a = t[Symbol.asyncIterator]();
                    return S({
                        wrapper: {
                            async next () {
                                let t;
                                try {
                                    t = await a.next();
                                } catch (e) {
                                    const t = i(J(e), !r.crossed);
                                    throw t instanceof B && r.faults.push(t), t;
                                }
                                if (!0 === t.done) {
                                    if (!s && o()) {
                                        const t = new B(e, {
                                            reason: "stream ended without turnEnded",
                                            errorClass: "no_turn_ended",
                                            early: !r.crossed
                                        });
                                        throw r.faults.push(t), t;
                                    }
                                    return t;
                                }
                                const c = t.value.message, l = "interactionUpdate" === c.case ? c.value.message.case : void 0;
                                return "heartbeat" !== l && (r.crossed = !0, r.lastProgressAt = n()), "turnEnded" === l && (s = !0), t;
                            }
                        },
                        inner: a
                    });
                }
            })
    };
}
const q = (0, o.cF)(Symbol("moduleTurn"), void 0), D = 12e4;
function O(e, t) {
    return {
        unary: (t, r, n, s, o, i, a)=>e.unary(t, r, n, s, o, i, a),
        stream: async (r, n, s, o, i, a, c)=>{
            const l = await e.stream(r, n, s, o, i, a, c);
            return r.typeName === u.InferenceService.typeName && n.name === u.InferenceService.methods.runInference.name && t.get(new Headers(i).get("x-original-request-id") ?? "")?.(l.header), l;
        }
    };
}
function N(e, t, r, o, u, { onQuietStop: d, now: p = ()=>performance.now() } = {}) {
    const m = (0, a.Zj)(l.AgentService, function(e) {
        return (0, h.o)({
            httpClient: e.call,
            baseUrl: "https://agent-harness.local",
            useBinaryFormat: !0,
            interceptors: [],
            acceptCompression: [],
            sendCompression: null,
            compressMinBytes: R,
            readMaxBytes: R,
            writeMaxBytes: R
        });
    }(e), {
        injectTraceHeaders: !1,
        extractHeaders: (e)=>e.get(q)?.callerTraceHeaders ?? {}
    }), f = new n.PW({
        run: (e, r, n)=>{
            const s = e.get(q);
            if (void 0 === s) throw new Error("The harness client's transport serves only its own client's turns");
            s.watchStop();
            const o = M(t, n?.signal, s.guard, p), i = function(e) {
                const t = e.beginCall();
                return {
                    requests: (r)=>({
                            [Symbol.asyncIterator] () {
                                const n = r[Symbol.asyncIterator](), s = [];
                                let o = !1;
                                return S({
                                    wrapper: {
                                        next: async ()=>{
                                            const r = s.shift();
                                            if (void 0 !== r) return {
                                                done: !1,
                                                value: r
                                            };
                                            const i = await n.next();
                                            return !0 !== i.done && (e.recordSent(i.value), o || (o = !0, s.push(...t.handedOver))), i;
                                        }
                                    },
                                    inner: n
                                });
                            }
                        }),
                    responses: (e)=>({
                            [Symbol.asyncIterator] () {
                                const r = e[Symbol.asyncIterator](), n = [];
                                let s = !1;
                                return S({
                                    wrapper: {
                                        async next () {
                                            for(;;){
                                                const e = n.shift();
                                                if (void 0 !== e) return {
                                                    done: !1,
                                                    value: e
                                                };
                                                if (s) return {
                                                    done: !0,
                                                    value: void 0
                                                };
                                                const o = await r.next();
                                                !0 === o.done ? (s = !0, n.push(...t.end())) : n.push(...t.admit(o.value));
                                            }
                                        }
                                    },
                                    inner: r
                                });
                            }
                        })
                };
            }(s.steers);
            return o.responses(i.responses(m.run(e, o.requests(i.requests(r)), n)));
        }
    }, y.q.reconnectEndpoint, {
        loop: "module",
        retryLogging: {
            tag: y.q.logTag,
            includeErrorObjects: !1
        },
        decorateAttempt: _.zy,
        prepareAttemptContext: (e, { attemptRequestId: t, runOptions: r })=>(0, g.qo)((0, g.Am)(e, {
                attemptRequestId: t,
                composerId: r.conversationGroupId ?? r.conversationId
            }))
    });
    return {
        run: async (e, t, n, a, l, m, h, y, w, v, { onHeader: _, ...A })=>{
            const S = function(e, t) {
                const r = (0, s.o1)(e, t).with(i.b6, {
                    ...e.get(i.b6),
                    ...t
                });
                return r.with(c.Fm, (0, c.ts)({
                    backend: r.get(c.Fm),
                    labels: {
                        ...t
                    }
                }));
            }(e, u);
            let b;
            const E = ()=>{
                b ??= p() - (k.guard.lastProgressAt ?? p());
            }, I = new Set, C = (e)=>{
                I.has(e) || (I.add(e), e.aborted ? E() : e.addEventListener("abort", E, {
                    once: !0
                }));
            }, k = {
                guard: {
                    crossed: !1,
                    faults: [],
                    lastProgressAt: p()
                },
                steers: new x,
                callerTraceHeaders: (0, g.qk)(S),
                watchStop: ()=>C(y.signal)
            };
            C(e.signal);
            const R = A.generationUUID ?? crypto.randomUUID();
            void 0 !== _ && o.set(R, (e)=>{
                try {
                    _(e);
                } catch (e) {
                    T.warn(S, "RunInference onHeader callback threw", {
                        error: String(e)
                    });
                }
            });
            try {
                await f.run(S.with(q, k), t, n, a, l, m, h, y, w, v, {
                    ...A,
                    generationUUID: R
                });
            } finally{
                o.delete(R);
                for (const e of k.steers.unclaimedAcks())await l.sendUpdate(S, e).catch((e)=>{
                    T.warn(S, "Unclaimed steer's ack not delivered", {
                        error: String(e)
                    });
                });
                for (const e of I)e.removeEventListener("abort", E);
                if (void 0 !== b && b >= D) try {
                    d?.(b);
                } catch (e) {
                    T.warn(S, "Quiet stop not reported", {
                        error: String(e)
                    });
                }
            }
            r(k.guard.faults);
        }
    };
}
