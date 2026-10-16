"use strict";
const { makeNetworkError: r, makeAppropriateNetworkError: s, filterResponse: o, makeResponse: n, fromInnerResponse: i } = require("./module-54768.js"), { HeadersList: a } = require("./module-48969.js"), { Request: Q, cloneRequest: g } = require("./module-78078.js"), E = require(38522), { bytesMatch: B, makePolicyContainer: c, clonePolicyContainer: I, requestBadPort: C, TAOCheck: h, appendRequestOriginHeader: l, responseLocationURL: u, requestCurrentURL: d, setRequestReferrerPolicyOnRedirect: f, tryUpgradeRequestToAPotentiallyTrustworthyURL: w, createOpaqueTimingInfo: y, appendFetchMetadata: D, corsCheck: p, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: R, coarsenedSharedCurrentTime: F, createDeferredPromise: m, isBlobLike: b, sameOrigin: N, isCancelled: S, isAborted: M, isErrorLike: U, fullyReadBody: L, readableStreamClose: T, isomorphicEncode: Y, urlIsLocal: G, urlIsHttpHttpsScheme: J, urlHasHttpsScheme: v, clampAndCoarsenConnectionTimingInfo: H, simpleRangeHeaderValue: V, buildContentRange: x, createInflate: W, extractMimeType: O } = require("./module-48215.js"), { kState: P, kDispatcher: q } = require("./module-15978.js"), Z = require(56970), { safelyExtractBody: z, extractBody: K } = require("./module-33095.js"), { redirectStatusSet: X, nullBodyStatus: _, safeMethodsSet: j, requestBodyHeader: $, subresourceSet: AA } = require("./module-99354.js"), eA = require(78474), { Readable: tA, pipeline: rA, finished: sA } = require(57075), { addAbortListener: oA, isErrored: nA, isReadable: iA, bufferToLowerCasedHeaderName: aA } = require("./module-55201.js"), { dataURLProcessor: QA, serializeAMimeType: gA, minimizeSupportedMimeType: EA } = require("./module-52603.js"), { getGlobalDispatcher: BA } = require("./module-37922.js"), { webidl: cA } = require("./module-43290.js"), { STATUS_CODES: IA } = require(37067), CA = [
    "GET",
    "HEAD"
], hA = "undefined" != typeof __UNDICI_IS_NODE__ || "undefined" != typeof esbuildDetection ? "node" : "undici";
let lA;
class uA extends eA {
    constructor(A){
        super(), this.dispatcher = A, this.connection = null, this.dump = !1, this.state = "ongoing";
    }
    terminate(A) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(A), this.emit("terminated", A));
    }
    abort(A) {
        "ongoing" === this.state && (this.state = "aborted", A || (A = new DOMException("The operation was aborted.", "AbortError")), this.serializedAbortReason = A, this.connection?.destroy(A), this.emit("terminated", A));
    }
}
function dA(A) {
    fA(A, "fetch");
}
function fA(A, e = "other") {
    if ("error" === A.type && A.aborted) return;
    if (!A.urlList?.length) return;
    const t = A.urlList[0];
    let r = A.timingInfo, s = A.cacheState;
    J(t) && null !== r && (A.timingAllowPassed || (r = y({
        startTime: r.startTime
    }), s = ""), r.endTime = F(), A.timingInfo = r, wA(r, t.href, e, globalThis, s));
}
const wA = performance.markResourceTiming;
function yA(A, e, t, r) {
    if (A && A.reject(r), null != e.body && iA(e.body?.stream) && e.body.stream.cancel(r).catch((A)=>{
        if ("ERR_INVALID_STATE" !== A.code) throw A;
    }), null == t) return;
    const s = t[P];
    null != s.body && iA(s.body?.stream) && s.body.stream.cancel(r).catch((A)=>{
        if ("ERR_INVALID_STATE" !== A.code) throw A;
    });
}
function DA({ request: A, processRequestBodyChunkLength: e, processRequestEndOfBody: t, processResponse: r, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: n = !1, dispatcher: i = BA() }) {
    Z(i);
    let a = null, Q = !1;
    null != A.client && (a = A.client.globalObject, Q = A.client.crossOriginIsolatedCapability);
    const g = F(Q), E = y({
        startTime: g
    }), B = {
        controller: new uA(i),
        request: A,
        timingInfo: E,
        processRequestBodyChunkLength: e,
        processRequestEndOfBody: t,
        processResponse: r,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: a,
        crossOriginIsolatedCapability: Q
    };
    if (Z(!A.body || A.body.stream), "client" === A.window && (A.window = "Window" === A.client?.globalObject?.constructor?.name ? A.client : "no-window"), "client" === A.origin && (A.origin = A.client.origin), "client" === A.policyContainer && (null != A.client ? A.policyContainer = I(A.client.policyContainer) : A.policyContainer = c()), !A.headersList.contains("accept", !0)) {
        const e = "*/*";
        A.headersList.append("accept", e, !0);
    }
    return A.headersList.contains("accept-language", !0) || A.headersList.append("accept-language", "*", !0), A.priority, AA.has(A.destination), pA(B).catch((A)=>{
        B.controller.terminate(A);
    }), B.controller;
}
async function pA(A, e = !1) {
    const t = A.request;
    let s = null;
    if (t.localURLsOnly && !G(d(t)) && (s = r("local URLs only")), w(t), "blocked" === C(t) && (s = r("bad port")), "" === t.referrerPolicy && (t.referrerPolicy = t.policyContainer.referrerPolicy), "no-referrer" !== t.referrer && (t.referrer = R(t)), null === s && (s = await (async ()=>{
        const e = d(t);
        return N(e, t.url) && "basic" === t.responseTainting || "data:" === e.protocol || "navigate" === t.mode || "websocket" === t.mode ? (t.responseTainting = "basic", await kA(A)) : "same-origin" === t.mode ? r('request mode cannot be "same-origin"') : "no-cors" === t.mode ? "follow" !== t.redirect ? r('redirect mode cannot be "follow" for "no-cors" request') : (t.responseTainting = "opaque", await kA(A)) : J(d(t)) ? (t.responseTainting = "cors", await mA(A)) : r("URL scheme must be a HTTP(S) scheme");
    })()), e) return s;
    0 === s.status || s.internalResponse || (t.responseTainting, "basic" === t.responseTainting ? s = o(s, "basic") : "cors" === t.responseTainting ? s = o(s, "cors") : "opaque" === t.responseTainting ? s = o(s, "opaque") : Z(!1));
    let n = 0 === s.status ? s : s.internalResponse;
    if (0 === n.urlList.length && n.urlList.push(...t.urlList), t.timingAllowFailed || (s.timingAllowPassed = !0), "opaque" === s.type && 206 === n.status && n.rangeRequested && !t.headers.contains("range", !0) && (s = n = r()), 0 === s.status || "HEAD" !== t.method && "CONNECT" !== t.method && !_.includes(n.status) || (n.body = null, A.controller.dump = !0), t.integrity) {
        const e = (e)=>FA(A, r(e));
        if ("opaque" === t.responseTainting || null == s.body) return void e(s.error);
        const o = (r)=>{
            B(r, t.integrity) ? (s.body = z(r)[0], FA(A, s)) : e("integrity mismatch");
        };
        await L(s.body, o, e);
    } else FA(A, s);
}
function kA(A) {
    if (S(A) && 0 === A.request.redirectCount) return Promise.resolve(s(A));
    const { request: e } = A, { protocol: o } = d(e);
    switch(o){
        case "about:":
            return Promise.resolve(r("about scheme is not supported"));
        case "blob:":
            {
                lA || (lA = require(4573).resolveObjectURL);
                const A = d(e);
                if (0 !== A.search.length) return Promise.resolve(r("NetworkError when attempting to fetch resource."));
                const s = lA(A.toString());
                if ("GET" !== e.method || !b(s)) return Promise.resolve(r("invalid method"));
                const o = n(), i = s.size, a = Y(`${i}`), Q = s.type;
                if (e.headersList.contains("range", !0)) {
                    o.rangeRequested = !0;
                    const A = e.headersList.get("range", !0), t = V(A, !0);
                    if ("failure" === t) return Promise.resolve(r("failed to fetch the data URL"));
                    let { rangeStartValue: n, rangeEndValue: a } = t;
                    if (null === n) n = i - a, a = n + a - 1;
                    else {
                        if (n >= i) return Promise.resolve(r("Range start is greater than the blob's size."));
                        (null === a || a >= i) && (a = i - 1);
                    }
                    const g = s.slice(n, a, Q), E = K(g);
                    o.body = E[0];
                    const B = Y(`${g.size}`), c = x(n, a, i);
                    o.status = 206, o.statusText = "Partial Content", o.headersList.set("content-length", B, !0), o.headersList.set("content-type", Q, !0), o.headersList.set("content-range", c, !0);
                } else {
                    const A = K(s);
                    o.statusText = "OK", o.body = A[0], o.headersList.set("content-length", a, !0), o.headersList.set("content-type", Q, !0);
                }
                return Promise.resolve(o);
            }
        case "data:":
            {
                const A = d(e), t = QA(A);
                if ("failure" === t) return Promise.resolve(r("failed to fetch the data URL"));
                const s = gA(t.mimeType);
                return Promise.resolve(n({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: s
                            }
                        ]
                    ],
                    body: z(t.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(r("not implemented... yet..."));
        case "http:":
        case "https:":
            return mA(A).catch((A)=>r(A));
        default:
            return Promise.resolve(r("unknown scheme"));
    }
}
function RA(A, e) {
    A.request.done = !0, null != A.processResponseDone && queueMicrotask(()=>A.processResponseDone(e));
}
function FA(A, e) {
    let t = A.timingInfo;
    const r = ()=>{
        const r = Date.now();
        "document" === A.request.destination && (A.controller.fullTimingInfo = t), A.controller.reportTimingSteps = ()=>{
            if ("https:" !== A.request.url.protocol) return;
            t.endTime = r;
            let s = e.cacheState;
            const o = e.bodyInfo;
            e.timingAllowPassed || (t = y(t), s = "");
            let n = 0;
            if ("navigator" !== A.request.mode || !e.hasCrossOriginRedirects) {
                n = e.status;
                const A = O(e.headersList);
                "failure" !== A && (o.contentType = EA(A));
            }
            null != A.request.initiatorType && wA(t, A.request.url.href, A.request.initiatorType, globalThis, s, o, n);
        };
        queueMicrotask(()=>(A.request.done = !0, null != A.processResponseEndOfBody && queueMicrotask(()=>A.processResponseEndOfBody(e)), void (null != A.request.initiatorType && A.controller.reportTimingSteps())));
    };
    null != A.processResponse && queueMicrotask(()=>{
        A.processResponse(e), A.processResponse = null;
    });
    const s = "error" === e.type ? e : e.internalResponse ?? e;
    null == s.body ? r() : sA(s.body.stream, ()=>{
        r();
    });
}
async function mA(A) {
    const e = A.request;
    let t = null, s = null;
    const o = A.timingInfo;
    if (e.serviceWorkers, null === t) {
        if ("follow" === e.redirect && (e.serviceWorkers = "none"), s = t = await bA(A), "cors" === e.responseTainting && "failure" === p(e, t)) return r("cors failure");
        "failure" === h(e, t) && (e.timingAllowFailed = !0);
    }
    return "opaque" !== e.responseTainting && "opaque" !== t.type || "blocked" !== k(e.origin, e.client, e.destination, s) ? (X.has(s.status) && ("manual" !== e.redirect && A.controller.connection.destroy(void 0, !1), "error" === e.redirect ? t = r("unexpected redirect") : "manual" === e.redirect ? t = s : "follow" === e.redirect ? t = await function(A, e) {
        const t = A.request, s = e.internalResponse ? e.internalResponse : e;
        let o;
        try {
            if (o = u(s, d(t).hash), null == o) return e;
        } catch (A) {
            return Promise.resolve(r(A));
        }
        if (!J(o)) return Promise.resolve(r("URL scheme must be a HTTP(S) scheme"));
        if (20 === t.redirectCount) return Promise.resolve(r("redirect count exceeded"));
        if (t.redirectCount += 1, "cors" === t.mode && (o.username || o.password) && !N(t, o)) return Promise.resolve(r('cross origin not allowed for request mode "cors"'));
        if ("cors" === t.responseTainting && (o.username || o.password)) return Promise.resolve(r('URL cannot contain credentials for request mode "cors"'));
        if (303 !== s.status && null != t.body && null == t.body.source) return Promise.resolve(r());
        if ([
            301,
            302
        ].includes(s.status) && "POST" === t.method || 303 === s.status && !CA.includes(t.method)) {
            t.method = "GET", t.body = null;
            for (const A of $)t.headersList.delete(A);
        }
        N(d(t), o) || (t.headersList.delete("authorization", !0), t.headersList.delete("proxy-authorization", !0), t.headersList.delete("cookie", !0), t.headersList.delete("host", !0));
        null != t.body && (Z(null != t.body.source), t.body = z(t.body.source)[0]);
        const n = A.timingInfo;
        n.redirectEndTime = n.postRedirectStartTime = F(A.crossOriginIsolatedCapability), 0 === n.redirectStartTime && (n.redirectStartTime = n.startTime);
        return t.urlList.push(o), f(t, s), pA(A, !0);
    }(A, t) : Z(!1)), t.timingInfo = o, t) : r("blocked");
}
async function bA(A, e = !1, t = !1) {
    const o = A.request;
    let i = null, Q = null, B = null;
    "no-window" === o.window && "error" === o.redirect ? (i = A, Q = o) : (Q = g(o), i = {
        ...A
    }, i.request = Q);
    const c = "include" === o.credentials || "same-origin" === o.credentials && "basic" === o.responseTainting, I = Q.body ? Q.body.length : null;
    let C = null;
    if (null == Q.body && [
        "POST",
        "PUT"
    ].includes(Q.method) && (C = "0"), null != I && (C = Y(`${I}`)), null != C && Q.headersList.append("content-length", C, !0), null != I && Q.keepalive, Q.referrer instanceof URL && Q.headersList.append("referer", Y(Q.referrer.href), !0), l(Q), D(Q), Q.headersList.contains("user-agent", !0) || Q.headersList.append("user-agent", hA), "default" === Q.cache && (Q.headersList.contains("if-modified-since", !0) || Q.headersList.contains("if-none-match", !0) || Q.headersList.contains("if-unmodified-since", !0) || Q.headersList.contains("if-match", !0) || Q.headersList.contains("if-range", !0)) && (Q.cache = "no-store"), "no-cache" !== Q.cache || Q.preventNoCacheCacheControlHeaderModification || Q.headersList.contains("cache-control", !0) || Q.headersList.append("cache-control", "max-age=0", !0), "no-store" !== Q.cache && "reload" !== Q.cache || (Q.headersList.contains("pragma", !0) || Q.headersList.append("pragma", "no-cache", !0), Q.headersList.contains("cache-control", !0) || Q.headersList.append("cache-control", "no-cache", !0)), Q.headersList.contains("range", !0) && Q.headersList.append("accept-encoding", "identity", !0), Q.headersList.contains("accept-encoding", !0) || (v(d(Q)) ? Q.headersList.append("accept-encoding", "br, gzip, deflate", !0) : Q.headersList.append("accept-encoding", "gzip, deflate", !0)), Q.headersList.delete("host", !0), Q.cache = "no-store", "no-store" !== Q.cache && Q.cache, null == B) {
        if ("only-if-cached" === Q.cache) return r("only if cached");
        const A = await async function(A) {
            Z(!A.controller.connection || A.controller.connection.destroyed), A.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (A, e = !0) {
                    this.destroyed || (this.destroyed = !0, e && this.abort?.(A ?? new DOMException("The operation was aborted.", "AbortError")));
                }
            };
            const e = A.request;
            let t = null;
            const o = A.timingInfo, i = null;
            null == i && (e.cache = "no-store");
            e.mode;
            let Q = null;
            if (null == e.body && A.processRequestEndOfBody) queueMicrotask(()=>A.processRequestEndOfBody());
            else if (null != e.body) {
                const t = async function*(e) {
                    S(A) || (yield e, A.processRequestBodyChunkLength?.(e.byteLength));
                }, r = ()=>{
                    S(A) || A.processRequestEndOfBody && A.processRequestEndOfBody();
                }, s = (e)=>{
                    S(A) || ("AbortError" === e.name ? A.controller.abort() : A.controller.terminate(e));
                };
                Q = async function*() {
                    try {
                        for await (const A of e.body.stream)yield* t(A);
                        r();
                    } catch (A) {
                        s(A);
                    }
                }();
            }
            try {
                const { body: e, status: r, statusText: s, headersList: o, socket: i } = await C({
                    body: Q
                });
                if (i) t = n({
                    status: r,
                    statusText: s,
                    headersList: o,
                    socket: i
                });
                else {
                    const i = e[Symbol.asyncIterator]();
                    A.controller.next = ()=>i.next(), t = n({
                        status: r,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (e) {
                return "AbortError" === e.name ? (A.controller.connection.destroy(), s(A, e)) : r(e);
            }
            const g = async ()=>{
                await A.controller.resume();
            }, B = (e)=>{
                S(A) || A.controller.abort(e);
            }, c = new ReadableStream({
                async start (e) {
                    A.controller.controller = e;
                },
                async pull (A) {
                    await g(A);
                },
                async cancel (A) {
                    await B(A);
                },
                type: "bytes"
            });
            function I(e) {
                M(A) ? (t.aborted = !0, iA(c) && A.controller.controller.error(A.controller.serializedAbortReason)) : iA(c) && A.controller.controller.error(new TypeError("terminated", {
                    cause: U(e) ? e : void 0
                })), A.controller.connection.destroy();
            }
            return t.body = {
                stream: c,
                source: null,
                length: null
            }, A.controller.onAborted = I, A.controller.on("terminated", I), A.controller.resume = async ()=>{
                for(;;){
                    let e, r;
                    try {
                        const { done: t, value: r } = await A.controller.next();
                        if (M(A)) break;
                        e = t ? void 0 : r;
                    } catch (t) {
                        A.controller.ended && !o.encodedBodySize ? e = void 0 : (e = t, r = !0);
                    }
                    if (void 0 === e) return T(A.controller.controller), void RA(A, t);
                    if (o.decodedBodySize += e?.byteLength ?? 0, r) return void A.controller.terminate(e);
                    const s = new Uint8Array(e);
                    if (s.byteLength && A.controller.controller.enqueue(s), nA(c)) return void A.controller.terminate();
                    if (A.controller.controller.desiredSize <= 0) return;
                }
            }, t;
            function C({ body: t }) {
                const r = d(e), s = A.controller.dispatcher;
                return new Promise((n, i)=>s.dispatch({
                        path: r.pathname + r.search,
                        origin: r.origin,
                        method: e.method,
                        body: s.isMockActive ? e.body && (e.body.source || e.body.stream) : t,
                        headers: e.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === e.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (e) {
                            const { connection: t } = A.controller;
                            o.finalConnectionTimingInfo = H(void 0, o.postRedirectStartTime, A.crossOriginIsolatedCapability), t.destroyed ? e(new DOMException("The operation was aborted.", "AbortError")) : (A.controller.on("terminated", e), this.abort = t.abort = e), o.finalNetworkRequestStartTime = F(A.crossOriginIsolatedCapability);
                        },
                        onResponseStarted () {
                            o.finalNetworkResponseStartTime = F(A.crossOriginIsolatedCapability);
                        },
                        onHeaders (A, t, r, s) {
                            if (A < 200) return;
                            let o = "";
                            const Q = new a;
                            for(let A = 0; A < t.length; A += 2)Q.append(aA(t[A]), t[A + 1].toString("latin1"), !0);
                            o = Q.get("location", !0), this.body = new tA({
                                read: r
                            });
                            const g = [], B = o && "follow" === e.redirect && X.has(A);
                            if ("HEAD" !== e.method && "CONNECT" !== e.method && !_.includes(A) && !B) {
                                const A = Q.get("content-encoding", !0), e = A ? A.toLowerCase().split(",") : [], t = 5;
                                if (e.length > t) return i(new Error(`too many content-encodings in response: ${e.length}, maximum allowed is ${t}`)), !0;
                                for(let A = e.length - 1; A >= 0; --A){
                                    const t = e[A].trim();
                                    if ("x-gzip" === t || "gzip" === t) g.push(E.createGunzip({
                                        flush: E.constants.Z_SYNC_FLUSH,
                                        finishFlush: E.constants.Z_SYNC_FLUSH
                                    }));
                                    else if ("deflate" === t) g.push(W({
                                        flush: E.constants.Z_SYNC_FLUSH,
                                        finishFlush: E.constants.Z_SYNC_FLUSH
                                    }));
                                    else {
                                        if ("br" !== t) {
                                            g.length = 0;
                                            break;
                                        }
                                        g.push(E.createBrotliDecompress({
                                            flush: E.constants.BROTLI_OPERATION_FLUSH,
                                            finishFlush: E.constants.BROTLI_OPERATION_FLUSH
                                        }));
                                    }
                                }
                            }
                            const c = this.onError.bind(this);
                            return n({
                                status: A,
                                statusText: s,
                                headersList: Q,
                                body: g.length ? rA(this.body, ...g, (A)=>{
                                    A && this.onError(A);
                                }).on("error", c) : this.body.on("error", c)
                            }), !0;
                        },
                        onData (e) {
                            if (A.controller.dump) return;
                            const t = e;
                            return o.encodedBodySize += t.byteLength, this.body.push(t);
                        },
                        onComplete () {
                            this.abort && A.controller.off("terminated", this.abort), A.controller.onAborted && A.controller.off("terminated", A.controller.onAborted), A.controller.ended = !0, this.body.push(null);
                        },
                        onError (e) {
                            this.abort && A.controller.off("terminated", this.abort), this.body?.destroy(e), A.controller.terminate(e), i(e);
                        },
                        onUpgrade (A, e, t) {
                            if (101 !== A) return;
                            const r = new a;
                            for(let A = 0; A < e.length; A += 2)r.append(aA(e[A]), e[A + 1].toString("latin1"), !0);
                            return n({
                                status: A,
                                statusText: IA[A],
                                headersList: r,
                                socket: t
                            }), !0;
                        }
                    }));
            }
        }(i, c, t);
        !j.has(Q.method) && A.status >= 200 && A.status, null == B && (B = A);
    }
    if (B.urlList = [
        ...Q.urlList
    ], Q.headersList.contains("range", !0) && (B.rangeRequested = !0), B.requestIncludesCredentials = c, 407 === B.status) return "no-window" === o.window ? r() : S(A) ? s(A) : r("proxy authentication required");
    if (421 === B.status && !t && (null == o.body || null != o.body.source)) {
        if (S(A)) return s(A);
        A.controller.connection.destroy(), B = await bA(A, e, !0);
    }
    return B;
}
module.exports = {
    fetch: function(A, e = void 0) {
        cA.argumentLengthCheck(arguments, 1, "globalThis.fetch");
        let t, r = m();
        try {
            t = new Q(A, e);
        } catch (A) {
            return r.reject(A), r.promise;
        }
        const s = t[P];
        if (t.signal.aborted) return yA(r, s, null, t.signal.reason), r.promise;
        const o = s.client.globalObject;
        "ServiceWorkerGlobalScope" === o?.constructor?.name && (s.serviceWorkers = "none");
        let n = null, a = !1, g = null;
        return oA(t.signal, ()=>{
            a = !0, Z(null != g), g.abort(t.signal.reason);
            const A = n?.deref();
            yA(r, s, A, t.signal.reason);
        }), g = DA({
            request: s,
            processResponseEndOfBody: dA,
            processResponse: (A)=>{
                a || (A.aborted ? yA(r, s, n, g.serializedAbortReason) : "error" !== A.type ? (n = new WeakRef(i(A, "immutable")), r.resolve(n.deref()), r = null) : r.reject(new TypeError("fetch failed", {
                    cause: A.error
                })));
            },
            dispatcher: t[q]
        }), r.promise;
    },
    Fetch: uA,
    fetching: DA,
    finalizeAndReportTiming: fA
};
