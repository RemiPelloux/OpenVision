"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BidiTransportFactory = exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = void 0;
const n = require("./module-77598.js"), s = require("./module-96980.js"), o = require("./module-14281.js"), i = require("./module-82537.js"), a = require("./module-67918.js"), c = require("./module-97163.js"), l = require("./module-58931.js"), u = require("./module-5684.js"), d = require("./module-30668.js");
class p {
    constructor(e, t){
        this.transport = e, this.mode = t;
    }
    unary(e, t, r, n, s, o, i) {
        return this.transport.unary(e, t, r, n, s, o, i);
    }
    async stream(e, t, r, n, o, i, a) {
        const c = await this.transport.stream(e, t, r, n, o, i, a);
        return c.header.set(s.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, this.mode), c;
    }
}
const m = "bidi_append_fix";
function h(e) {
    return e instanceof Error ? e : new Error(String(e));
}
function f(e) {
    return e instanceof c.ConnectError ? c.Code[e.code] : "non_connect";
}
function g(e) {
    return e instanceof c.ConnectError ? {
        connectCode: c.Code[e.code]
    } : {};
}
exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = 5;
function y(e) {
    try {
        Object.defineProperty(e, "cursorBidiAppendFatal", {
            value: !0,
            enumerable: !1,
            configurable: !0
        });
    } catch  {}
    return e;
}
function w(e) {
    return !(e instanceof c.ConnectError) || e.code === c.Code.Unavailable || e.code === c.Code.Internal || e.code === c.Code.DeadlineExceeded || e.code === c.Code.Aborted;
}
function v(e, t) {
    const r = t.filter((e)=>void 0 !== e);
    return e <= 0 ? Promise.resolve(!r.some((e)=>e.aborted)) : new Promise((t)=>{
        let n;
        function s() {
            void 0 !== n && clearTimeout(n);
            for (const e of r)e.removeEventListener("abort", o);
        }
        function o() {
            s(), t(!1);
        }
        n = setTimeout(()=>{
            s(), t(!0);
        }, e);
        for (const e of r)e.addEventListener("abort", o, {
            once: !0
        });
        r.some((e)=>e.aborted) && (s(), t(!1));
    });
}
class _ {
    constructor(e){
        this.waiting = [], this.permits = e;
    }
    async acquire() {
        if (!(this.permits > 0)) return new Promise((e)=>{
            this.waiting.push(e);
        });
        this.permits--;
    }
    release() {
        if (this.waiting.length > 0) {
            this.waiting.shift()();
        } else this.permits++;
    }
}
class A {
    constructor(e, t, r, n, s, o){
        this.host = e, this.bidiEndpointMap = t, this.bidiClient = r, this.transport = n, this.mode = s, this.binaryEncoding = o, this.debugLog = e.debugLog;
    }
    telemetryTags(e) {
        return {
            transport_mode: e.transportMode,
            loop: e.loop,
            target_method: e.targetMethod
        };
    }
    recordAppend(e, t, r) {
        (0, d.incrementTransportMetric)(this.host, "agent_client.bidi_append", {
            ...this.telemetryTags(e),
            outcome: t,
            ...void 0 === r ? {} : {
                connect_code: f(r)
            }
        });
    }
    recordPoll(e, t, r) {
        (0, d.incrementTransportMetric)(this.host, "agent_client.bidi_poll", {
            ...this.telemetryTags(e),
            outcome: t,
            ...void 0 === r ? {} : {
                connect_code: f(r)
            }
        });
    }
    emitStreamLog(e, t, r, n, s) {
        (0, d.emitTransportStructuredLog)(this.host, {
            level: t,
            message: n,
            metadata: {
                service: "bidi_transport",
                subkey: r,
                requestId: e.requestId,
                transportMode: e.transportMode,
                loop: e.loop,
                targetMethod: e.targetMethod,
                ...s
            }
        });
    }
    async unary(e, t, r, n, s, o, i) {
        return this.transport.unary(e, t, r, n, s, o, i);
    }
    async stream(e, t, r, s, o, i, a) {
        const c = function(e) {
            const t = e instanceof Headers ? e.get("x-request-id") : Array.isArray(e) ? e.find(([e])=>"x-request-id" === e)?.[1] : e?.["x-request-id"];
            if ("string" == typeof t) return t;
            const r = (0, n.randomUUID)();
            return e instanceof Headers ? e.set("x-request-id", r) : Array.isArray(e) ? e.push([
                "x-request-id",
                r
            ]) : "object" == typeof e && null !== e && (e["x-request-id"] = r), r;
        }(o), l = (0, d.classifyBidiStreamLoop)(e.typeName, t.name), u = this.bidiEndpointMap[t.name];
        u && (t = {
            ...u,
            O: t.O
        });
        const p = {
            requestId: c,
            transportMode: this.mode,
            loop: l,
            targetMethod: t.name
        };
        let m;
        const h = new Promise((e, t)=>{
            m = t;
        });
        h.catch(()=>{});
        const f = this.connectForStartOfStream(p, e, t, r, s, o, a);
        this.startYieldingInputsToTheServer(p, i, s, r, o, m);
        const g = await f, y = g.message, w = {
            [Symbol.asyncIterator] () {
                const e = y[Symbol.asyncIterator]();
                return {
                    next: ()=>Promise.race([
                            e.next(),
                            h
                        ]),
                    return: (t)=>e.return?.(t) ?? Promise.resolve({
                            done: !0,
                            value: void 0
                        }),
                    throw: (t)=>e.throw?.(t) ?? Promise.resolve({
                            done: !0,
                            value: void 0
                        })
                };
            }
        };
        return {
            ...g,
            message: w
        };
    }
    startYieldingInputsToTheServer(e, r, n = 6e5, o, a, c) {
        const { requestId: l } = e;
        this.debugLog.info(`[BidiTransport:${l}] starting to yield inputs to the server, with timeout ${n}ms`), o?.aborted ? this.debugLog.info(`[BidiTransport:${l}] already aborted, not starting`) : Promise.resolve().then(async ()=>{
            let u = !1;
            try {
                u = await this.host.checkFeatureGate(m);
            } catch (e) {
                this.debugLog.warn(`[BidiTransport:${l}] failed to check ${m} feature gate, keeping existing behavior`, e);
            }
            let d = 0, p = !1;
            const f = new AbortController, A = r[Symbol.asyncIterator](), S = new _(32), b = [], E = (t, r, n)=>{
                p || (p = !0, f.abort(), this.debugLog.error(`[BidiTransport:${l}] ${r}`), this.recordAppend(e, n.outcome, t), this.emitStreamLog(e, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                    outcome: n.outcome,
                    seqno: n.seqno,
                    failures: n.failures,
                    ...g(t)
                }), c(y(h(t))));
            }, I = o ? new Promise((e, t)=>{
                o.addEventListener("abort", ()=>t(new Error("Aborted")), {
                    once: !0
                });
            }) : void 0;
            for(I?.catch(()=>{}); !p;)try {
                let r;
                const m = new Promise((e, t)=>{
                    r = setTimeout(()=>t(new Error("Timeout waiting for next input")), n);
                }), _ = [
                    A.next(),
                    m
                ];
                let C;
                I && _.push(I);
                try {
                    C = await Promise.race(_);
                } finally{
                    void 0 !== r && clearTimeout(r);
                }
                if (C.done) {
                    this.debugLog.info(`[BidiTransport:${l}] iterator done, breaking loop`);
                    break;
                }
                if (await S.acquire(), p) {
                    S.release();
                    break;
                }
                const k = d++, x = new i.BidiRequestId({
                    requestId: l
                }), T = C.value.toBinary(), R = this.binaryEncoding ? {
                    requestId: x,
                    appendSeqno: BigInt(k),
                    dataBinary: T
                } : {
                    requestId: x,
                    appendSeqno: BigInt(k),
                    data: Buffer.from(T).toString("hex")
                }, B = async ()=>{
                    await this.bidiClient.bidiAppend(R, {
                        headers: a
                    });
                }, P = (u ? (async ()=>{
                    let r = 0;
                    for(; !o?.aborted && !p;)try {
                        return await B(), void this.recordAppend(e, "ok");
                    } catch (n) {
                        if (o?.aborted || p) return;
                        if (this.debugLog.error(`[BidiTransport:${l}] bidiAppend failed for seqno ${k}:`, n), !w(n)) return void E(n, `bidiAppend failed with non-retryable error for seqno ${k}, surfacing fatal append error`, {
                            outcome: "fatal_non_retryable",
                            seqno: k,
                            failures: r + 1
                        });
                        if (r++, r >= exports.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES) return void E(n, `bidiAppend failed ${r} times for seqno ${k}, surfacing fatal append error`, {
                            outcome: "fatal_budget",
                            seqno: k,
                            failures: r
                        });
                        this.recordAppend(e, "retried", n);
                        const i = (0, s.calculateBackoffDelay)(r - 1, 1e3, 3e4);
                        this.debugLog.info(`[BidiTransport:${l}] bidiAppend failure #${r}, backing off ${i}ms before retrying seqno ${k}`);
                        if (!await v(i, [
                            o,
                            f.signal
                        ])) return;
                    }
                })() : B().then(()=>{
                    this.recordAppend(e, "ok");
                }, (t)=>{
                    this.debugLog.error(`[BidiTransport:${l}] bidiAppend failed for seqno ${k}:`, t), this.recordAppend(e, "fatal_unretried", t), this.emitStreamLog(e, "warn", "bidi_append_fatal", "BidiAppend failed fatally", {
                        outcome: "fatal_unretried",
                        seqno: k,
                        failures: 1,
                        ...g(t)
                    }), c(y(h(t)));
                })).finally(()=>{
                    S.release();
                });
                b.push(P);
            } catch (t) {
                if ("Timeout waiting for next input" === t.message) {
                    this.debugLog.info(`[BidiTransport:${l}] timeout waiting for next input, breaking loop`), this.recordAppend(e, "input_idle_timeout"), this.emitStreamLog(e, "info", "bidi_append_input_idle", "BidiAppend pump closed on input idle", {
                        timeoutMs: n,
                        appendsSent: d
                    });
                    break;
                }
                if ("Aborted" === t.message) {
                    this.debugLog.info(`[BidiTransport:${l}] aborted, breaking loop`);
                    break;
                }
                throw this.debugLog.error(`[BidiTransport:${l}] error processing input:`, t), t;
            }
            await Promise.allSettled(b), this.debugLog.info(`[BidiTransport:${l}] finished yielding inputs to the server`);
        }).catch((e)=>{
            this.debugLog.error(`[BidiTransport:${l}] error in yield promise:`, e);
        });
    }
}
class S extends A {
    async connectForStartOfStream(e, t, r, n, s, o, a) {
        const c = new i.BidiRequestId({
            requestId: e.requestId
        }), u = (0, l.createAsyncIterable)([
            c
        ]);
        return this.transport.stream(t, r, n, s, o, u, a);
    }
}
class b extends A {
    async connectForStartOfStream(e, t, r, n, o, d, p) {
        const { requestId: h } = e, f = new i.BidiRequestId({
            requestId: h
        }), g = new i.BidiPollRequest({
            requestId: f,
            startRequest: !0
        }), y = (0, l.createAsyncIterable)([
            g
        ]), w = {
            ...r,
            O: i.BidiPollResponse
        };
        let _ = await this.transport.stream(t, w, n, o, d, y, p);
        const A = new u.AsyncIterPushable(o ?? 6e5);
        return (async function() {
            let u = !1;
            try {
                u = await this.host.checkFeatureGate(m);
            } catch (e) {
                this.debugLog.warn(`[BidiTransport:${h}] failed to check ${m} feature gate, keeping existing behavior`, e);
            }
            let g, y = !1, S = 0;
            const b = new i.BidiPollRequest({
                requestId: f
            });
            try {
                let i = BigInt(0);
                for(; !n?.aborted;){
                    let m = !1;
                    for await (const t of _.message){
                        if (m = !0, t.eof || !0 === n?.aborted) {
                            y = !0;
                            break;
                        }
                        if (t.seqno !== i) {
                            g = t.seqno > i ? "seqno_gap" : "seqno_duplicate", this.emitStreamLog(e, "warn", "bidi_poll_seqno", "BidiPoll refused an out-of-order seqno", {
                                outcome: g,
                                expectedSeqno: i.toString(),
                                receivedSeqno: t.seqno.toString()
                            });
                            const r = `Unexpected seqno: ${t.seqno} != ${i}. Please try again, or contact support if the issue persists.`, n = new a.ErrorDetails({
                                error: a.ErrorDetails_Error.NETWORK_ERROR,
                                details: {
                                    title: "Network Error",
                                    detail: r,
                                    isRetryable: !0
                                },
                                isExpected: !1
                            });
                            throw new c.ConnectError(r, c.Code.Unavailable, void 0, [
                                n
                            ]);
                        }
                        i += BigInt(1);
                        const s = r.O.fromBinary(Buffer.from(t.data, "hex"));
                        A.push(s);
                    }
                    if (y) {
                        this.recordPoll(e, "eof");
                        break;
                    }
                    if (this.recordPoll(e, m ? "slice" : "empty"), u && m) S = 0;
                    else if (u) {
                        S++;
                        const e = (0, s.calculateBackoffDelay)(S - 1, 1e3, 3e4);
                        this.debugLog.info(`[BidiTransport:${h}] empty poll response #${S}, backing off ${e}ms`);
                        if (!await v(e, [
                            n
                        ])) break;
                    }
                    if (n?.aborted) break;
                    const f = (0, l.createAsyncIterable)([
                        b
                    ]);
                    _ = await this.transport.stream(t, w, n, o, d, f, p);
                }
            } catch (t) {
                this.recordPoll(e, g ?? (n?.aborted ? "cancelled" : "error"), t), A.error(t);
            } finally{
                A.end();
            }
        }).bind(this)(), {
            ..._,
            method: r,
            message: A
        };
    }
}
exports.BidiTransportFactory = class {
    constructor(e, t, r, n){
        this.host = e, this.transportFactory = t, this.bidiSSEEndpointMap = r, this.bidiPollEndpointMap = n;
    }
    createTransport(e) {
        if (e.useHttp2) {
            const t = this.transportFactory.createTransport({
                ...e,
                pingConfig: e.pingConfig,
                usePooledConnections: e.usePooledConnections,
                connectionPoolSize: e.connectionPoolSize
            });
            return t.transport = new p(t.transport, "http2"), t;
        }
        const t = this.transportFactory.createTransport({
            ...e,
            useHttp2: !1,
            getHttp1KeepaliveDisabled: e.getHttp1KeepaliveDisabled,
            http1KeepaliveInitialDelayMs: e.http1KeepaliveInitialDelayMs
        });
        let r = e.bidiTransport?.transport;
        r || (r = t.transport);
        const n = (0, c.createClient)(o.BidiService, r), s = !0 === e.binaryEncoding;
        return !this.host.isHttp1SseDisabled() ? (t.transport = new S(this.host, this.bidiSSEEndpointMap, n, t.transport, "http1_sse", s), t.transport = new p(t.transport, "http1_sse")) : (t.transport = new b(this.host, this.bidiPollEndpointMap, n, t.transport, "http1_poll", s), t.transport = new p(t.transport, "http1_poll")), t;
    }
};
