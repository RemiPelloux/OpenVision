"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BidiTransportFactory = exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = void 0;
const n = require("./module-7598.js"), s = require("./module-6402.js"), i = require("./module-4281.js"), o = require("./module-2537.js"), a = require("./module-7918.js"), u = require("./module-8394.js"), c = require("./module-2158.js"), l = require("./module-5684.js"), m = require("./module-668.js");
class d {
    constructor(t, e){
        this.transport = t, this.mode = e;
    }
    unary(t, e, r, n, s, i, o) {
        return this.transport.unary(t, e, r, n, s, i, o);
    }
    async stream(t, e, r, n, i, o, a) {
        const u = await this.transport.stream(t, e, r, n, i, o, a);
        return u.header.set(s.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, this.mode), u;
    }
}
const f = "bidi_append_fix";
function p(t) {
    return t instanceof Error ? t : new Error(String(t));
}
function h(t) {
    return t instanceof u.ConnectError ? u.Code[t.code] : "non_connect";
}
function g(t) {
    return t instanceof u.ConnectError ? {
        connectCode: u.Code[t.code]
    } : {};
}
exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = 5;
function A(t) {
    try {
        Object.defineProperty(t, "cursorBidiAppendFatal", {
            value: !0,
            enumerable: !1,
            configurable: !0
        });
    } catch  {}
    return t;
}
function _(t) {
    return !(t instanceof u.ConnectError) || t.code === u.Code.Unavailable || t.code === u.Code.Internal || t.code === u.Code.DeadlineExceeded || t.code === u.Code.Aborted;
}
function y(t, e) {
    const r = e.filter((t)=>void 0 !== t);
    return t <= 0 ? Promise.resolve(!r.some((t)=>t.aborted)) : new Promise((e)=>{
        let n;
        function s() {
            void 0 !== n && clearTimeout(n);
            for (const t of r)t.removeEventListener("abort", i);
        }
        function i() {
            s(), e(!1);
        }
        n = setTimeout(()=>{
            s(), e(!0);
        }, t);
        for (const t of r)t.addEventListener("abort", i, {
            once: !0
        });
        r.some((t)=>t.aborted) && (s(), e(!1));
    });
}
class w {
    constructor(t){
        this.waiting = [], this.permits = t;
    }
    async acquire() {
        if (!(this.permits > 0)) return new Promise((t)=>{
            this.waiting.push(t);
        });
        this.permits--;
    }
    release() {
        if (this.waiting.length > 0) {
            this.waiting.shift()();
        } else this.permits++;
    }
}
class S {
    constructor(t, e, r, n, s, i){
        this.host = t, this.bidiEndpointMap = e, this.bidiClient = r, this.transport = n, this.mode = s, this.binaryEncoding = i, this.debugLog = t.debugLog;
    }
    telemetryTags(t) {
        return {
            transport_mode: t.transportMode,
            loop: t.loop,
            target_method: t.targetMethod
        };
    }
    recordAppend(t, e, r) {
        (0, m.incrementTransportMetric)(this.host, "agent_client.bidi_append", {
            ...this.telemetryTags(t),
            outcome: e,
            ...void 0 === r ? {} : {
                connect_code: h(r)
            }
        });
    }
    recordPoll(t, e, r) {
        (0, m.incrementTransportMetric)(this.host, "agent_client.bidi_poll", {
            ...this.telemetryTags(t),
            outcome: e,
            ...void 0 === r ? {} : {
                connect_code: h(r)
            }
        });
    }
    emitStreamLog(t, e, r, n, s) {
        (0, m.emitTransportStructuredLog)(this.host, {
            level: e,
            message: n,
            metadata: {
                service: "bidi_transport",
                subkey: r,
                requestId: t.requestId,
                transportMode: t.transportMode,
                loop: t.loop,
                targetMethod: t.targetMethod,
                ...s
            }
        });
    }
    async unary(t, e, r, n, s, i, o) {
        return this.transport.unary(t, e, r, n, s, i, o);
    }
    async stream(t, e, r, s, i, o, a) {
        const u = function(t) {
            const e = t instanceof Headers ? t.get("x-request-id") : Array.isArray(t) ? t.find(([t])=>"x-request-id" === t)?.[1] : t?.["x-request-id"];
            if ("string" == typeof e) return e;
            const r = (0, n.randomUUID)();
            return t instanceof Headers ? t.set("x-request-id", r) : Array.isArray(t) ? t.push([
                "x-request-id",
                r
            ]) : "object" == typeof t && null !== t && (t["x-request-id"] = r), r;
        }(i), c = (0, m.classifyBidiStreamLoop)(t.typeName, e.name), l = this.bidiEndpointMap[e.name];
        l && (e = {
            ...l,
            O: e.O
        });
        const d = {
            requestId: u,
            transportMode: this.mode,
            loop: c,
            targetMethod: e.name
        };
        let f;
        const p = new Promise((t, e)=>{
            f = e;
        });
        p.catch(()=>{});
        const h = this.connectForStartOfStream(d, t, e, r, s, i, a);
        this.startYieldingInputsToTheServer(d, o, s, r, i, f);
        const g = await h, A = g.message, _ = {
            [Symbol.asyncIterator] () {
                const t = A[Symbol.asyncIterator]();
                return {
                    next: ()=>Promise.race([
                            t.next(),
                            p
                        ]),
                    return: (e)=>t.return?.(e) ?? Promise.resolve({
                            done: !0,
                            value: void 0
                        }),
                    throw: (e)=>t.throw?.(e) ?? Promise.resolve({
                            done: !0,
                            value: void 0
                        })
                };
            }
        };
        return {
            ...g,
            message: _
        };
    }
    startYieldingInputsToTheServer(t, r, n = 6e5, i, a, u) {
        const { requestId: c } = t;
        this.debugLog.info(`[BidiTransport:${c}] starting to yield inputs to the server, with timeout ${n}ms`), i?.aborted ? this.debugLog.info(`[BidiTransport:${c}] already aborted, not starting`) : Promise.resolve().then(async ()=>{
            let l = !1;
            try {
                l = await this.host.checkFeatureGate(f);
            } catch (t) {
                this.debugLog.warn(`[BidiTransport:${c}] failed to check ${f} feature gate, keeping existing behavior`, t);
            }
            let m = 0, d = !1;
            const h = new AbortController, S = r[Symbol.asyncIterator](), J = new w(32), B = [], E = (e, r, n)=>{
                d || (d = !0, h.abort(), this.debugLog.error(`[BidiTransport:${c}] ${r}`), this.recordAppend(t, n.outcome, e), this.emitStreamLog(t, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                    outcome: n.outcome,
                    seqno: n.seqno,
                    failures: n.failures,
                    ...g(e)
                }), u(A(p(e))));
            }, I = i ? new Promise((t, e)=>{
                i.addEventListener("abort", ()=>e(new Error("Aborted")), {
                    once: !0
                });
            }) : void 0;
            for(I?.catch(()=>{}); !d;)try {
                let r;
                const f = new Promise((t, e)=>{
                    r = setTimeout(()=>e(new Error("Timeout waiting for next input")), n);
                }), w = [
                    S.next(),
                    f
                ];
                let C;
                I && w.push(I);
                try {
                    C = await Promise.race(w);
                } finally{
                    void 0 !== r && clearTimeout(r);
                }
                if (C.done) {
                    this.debugLog.info(`[BidiTransport:${c}] iterator done, breaking loop`);
                    break;
                }
                if (await J.acquire(), d) {
                    J.release();
                    break;
                }
                const b = m++, k = new o.BidiRequestId({
                    requestId: c
                }), v = C.value.toBinary(), q = this.binaryEncoding ? {
                    requestId: k,
                    appendSeqno: BigInt(b),
                    dataBinary: v
                } : {
                    requestId: k,
                    appendSeqno: BigInt(b),
                    data: Buffer.from(v).toString("hex")
                }, R = async ()=>{
                    await this.bidiClient.bidiAppend(q, {
                        headers: a
                    });
                }, P = (l ? (async ()=>{
                    let r = 0;
                    for(; !i?.aborted && !d;)try {
                        return await R(), void this.recordAppend(t, "ok");
                    } catch (n) {
                        if (i?.aborted || d) return;
                        if (this.debugLog.error(`[BidiTransport:${c}] bidiAppend failed for seqno ${b}:`, n), !_(n)) return void E(n, `bidiAppend failed with non-retryable error for seqno ${b}, surfacing fatal append error`, {
                            outcome: "fatal_non_retryable",
                            seqno: b,
                            failures: r + 1
                        });
                        if (r++, r >= exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES) return void E(n, `bidiAppend failed ${r} times for seqno ${b}, surfacing fatal append error`, {
                            outcome: "fatal_budget",
                            seqno: b,
                            failures: r
                        });
                        this.recordAppend(t, "retried", n);
                        const o = (0, s.calculateBackoffDelay)(r - 1, 1e3, 3e4);
                        this.debugLog.info(`[BidiTransport:${c}] bidiAppend failure #${r}, backing off ${o}ms before retrying seqno ${b}`);
                        if (!await y(o, [
                            i,
                            h.signal
                        ])) return;
                    }
                })() : R().then(()=>{
                    this.recordAppend(t, "ok");
                }, (e)=>{
                    this.debugLog.error(`[BidiTransport:${c}] bidiAppend failed for seqno ${b}:`, e), this.recordAppend(t, "fatal_unretried", e), this.emitStreamLog(t, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                        outcome: "fatal_unretried",
                        seqno: b,
                        failures: 1,
                        ...g(e)
                    }), u(A(p(e)));
                })).finally(()=>{
                    J.release();
                });
                B.push(P);
            } catch (e) {
                if ("Timeout waiting for next input" === e.message) {
                    this.debugLog.info(`[BidiTransport:${c}] timeout waiting for next input, breaking loop`), this.recordAppend(t, "input_idle_timeout"), this.emitStreamLog(t, "info", "bidi_append_input_idle", "BidiAppend pump closed on input idle", {
                        timeoutMs: n,
                        appendsSent: m
                    });
                    break;
                }
                if ("Aborted" === e.message) {
                    this.debugLog.info(`[BidiTransport:${c}] aborted, breaking loop`);
                    break;
                }
                throw this.debugLog.error(`[BidiTransport:${c}] error processing input:`, e), e;
            }
            await Promise.allSettled(B), this.debugLog.info(`[BidiTransport:${c}] finished yielding inputs to the server`);
        }).catch((t)=>{
            this.debugLog.error(`[BidiTransport:${c}] error in yield promise:`, t);
        });
    }
}
class J extends S {
    async connectForStartOfStream(t, e, r, n, s, i, a) {
        const u = new o.BidiRequestId({
            requestId: t.requestId
        }), l = (0, c.createAsyncIterable)([
            u
        ]);
        return this.transport.stream(e, r, n, s, i, l, a);
    }
}
class B extends S {
    async connectForStartOfStream(t, e, r, n, i, m, d) {
        const { requestId: p } = t, h = new o.BidiRequestId({
            requestId: p
        }), g = new o.BidiPollRequest({
            requestId: h,
            startRequest: !0
        }), A = (0, c.createAsyncIterable)([
            g
        ]), _ = {
            ...r,
            O: o.BidiPollResponse
        };
        let w = await this.transport.stream(e, _, n, i, m, A, d);
        const S = new l.AsyncIterPushable(i ?? 6e5);
        return (async function() {
            let l = !1;
            try {
                l = await this.host.checkFeatureGate(f);
            } catch (t) {
                this.debugLog.warn(`[BidiTransport:${p}] failed to check ${f} feature gate, keeping existing behavior`, t);
            }
            let g, A = !1, J = 0;
            const B = new o.BidiPollRequest({
                requestId: h
            });
            try {
                let o = BigInt(0);
                for(; !n?.aborted;){
                    let f = !1;
                    for await (const e of w.message){
                        if (f = !0, e.eof || !0 === n?.aborted) {
                            A = !0;
                            break;
                        }
                        if (e.seqno !== o) {
                            g = e.seqno > o ? "seqno_gap" : "seqno_duplicate", this.emitStreamLog(t, "warn", "bidi_poll_seqno", "BidiPoll refused an out-of-order seqno", {
                                outcome: g,
                                expectedSeqno: o.toString(),
                                receivedSeqno: e.seqno.toString()
                            });
                            const r = `Unexpected seqno: ${e.seqno} != ${o}. Please try again, or contact support if the issue persists.`, n = new a.ErrorDetails({
                                error: a.ErrorDetails_Error.NETWORK_ERROR,
                                details: {
                                    title: "Network Error",
                                    detail: r,
                                    isRetryable: !0
                                },
                                isExpected: !1
                            });
                            throw new u.ConnectError(r, u.Code.Unavailable, void 0, [
                                n
                            ]);
                        }
                        o += BigInt(1);
                        const s = r.O.fromBinary(Buffer.from(e.data, "hex"));
                        S.push(s);
                    }
                    if (A) {
                        this.recordPoll(t, "eof");
                        break;
                    }
                    if (this.recordPoll(t, f ? "slice" : "empty"), l && f) J = 0;
                    else if (l) {
                        J++;
                        const t = (0, s.calculateBackoffDelay)(J - 1, 1e3, 3e4);
                        this.debugLog.info(`[BidiTransport:${p}] empty poll response #${J}, backing off ${t}ms`);
                        if (!await y(t, [
                            n
                        ])) break;
                    }
                    if (n?.aborted) break;
                    const h = (0, c.createAsyncIterable)([
                        B
                    ]);
                    w = await this.transport.stream(e, _, n, i, m, h, d);
                }
            } catch (e) {
                this.recordPoll(t, g ?? (n?.aborted ? "cancelled" : "error"), e), S.error(e);
            } finally{
                S.end();
            }
        }).bind(this)(), {
            ...w,
            method: r,
            message: S
        };
    }
}
exports.BidiTransportFactory = class {
    constructor(t, e, r, n){
        this.host = t, this.transportFactory = e, this.bidiSSEEndpointMap = r, this.bidiPollEndpointMap = n;
    }
    createTransport(t) {
        if (t.useHttp2) {
            const e = this.transportFactory.createTransport({
                ...t,
                pingConfig: t.pingConfig,
                usePooledConnections: t.usePooledConnections,
                connectionPoolSize: t.connectionPoolSize
            });
            return e.transport = new d(e.transport, "http2"), e;
        }
        const e = this.transportFactory.createTransport({
            ...t,
            useHttp2: !1,
            getHttp1KeepaliveDisabled: t.getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs: t.http1KeepaliveInitialDelayMs
        });
        let r = t.bidiTransport?.transport;
        r || (r = e.transport);
        const n = (0, u.createClient)(i.BidiService, r), s = !0 === t.binaryEncoding;
        return !this.host.isHttp1SseDisabled() ? (e.transport = new J(this.host, this.bidiSSEEndpointMap, n, e.transport, "http1_sse", s), e.transport = new d(e.transport, "http1_sse")) : (e.transport = new B(this.host, this.bidiPollEndpointMap, n, e.transport, "http1_poll", s), e.transport = new d(e.transport, "http1_poll")), e;
    }
};
