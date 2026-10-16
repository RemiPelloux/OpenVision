"use strict";
const { Response: r, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: n, makeResponse: i } = require("./module-61099.js"), { Headers: E } = require("./module-2932.js"), { Request: Q, makeRequest: g } = require("./module-52239.js"), C = require(43106), { bytesMatch: B, makePolicyContainer: a, clonePolicyContainer: I, requestBadPort: c, TAOCheck: h, appendRequestOriginHeader: l, responseLocationURL: u, requestCurrentURL: d, setRequestReferrerPolicyOnRedirect: f, tryUpgradeRequestToAPotentiallyTrustworthyURL: y, createOpaqueTimingInfo: D, appendFetchMetadata: R, corsCheck: w, crossOriginResourcePolicyCheck: p, determineRequestsReferrer: k, coarsenedSharedCurrentTime: F, createDeferredPromise: N, isBlobLike: b, sameOrigin: S, isCancelled: m, isAborted: U, isErrorLike: L, fullyReadBody: M, readableStreamClose: Y, isomorphicEncode: T, urlIsLocal: J, urlIsHttpHttpsScheme: G, urlHasHttpsScheme: H } = require("./module-75728.js"), { kState: v, kHeaders: V, kGuard: x, kRealm: O } = require("./module-35899.js"), W = require(42613), { safelyExtractBody: q } = require("./module-87052.js"), { redirectStatusSet: P, nullBodyStatus: _, safeMethodsSet: Z, requestBodyHeader: X, subresourceSet: K, DOMException: j } = require("./module-96687.js"), { kHeadersList: z } = require("./module-58832.js"), $ = require(24434), { Readable: AA, pipeline: eA } = require(2203), { addAbortListener: tA, isErrored: rA, isReadable: sA, nodeMajor: oA, nodeMinor: nA } = require("./module-9361.js"), { dataURLProcessor: iA, serializeAMimeType: EA } = require("./module-3631.js"), { TransformStream: QA } = require(63774), { getGlobalDispatcher: gA } = require("./module-37362.js"), { webidl: CA } = require("./module-48005.js"), { STATUS_CODES: BA } = require(58611), aA = [
    "GET",
    "HEAD"
];
let IA, cA = globalThis.ReadableStream;
class hA extends $ {
    constructor(A){
        super(), this.dispatcher = A, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(A) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(A), this.emit("terminated", A));
    }
    abort(A) {
        "ongoing" === this.state && (this.state = "aborted", A || (A = new j("The operation was aborted.", "AbortError")), this.serializedAbortReason = A, this.connection?.destroy(A), this.emit("terminated", A));
    }
}
function lA(A, e = "other") {
    if ("error" === A.type && A.aborted) return;
    if (!A.urlList?.length) return;
    const t = A.urlList[0];
    let r = A.timingInfo, s = A.cacheState;
    G(t) && null !== r && (A.timingAllowPassed || (r = D({
        startTime: r.startTime
    }), s = ""), r.endTime = F(), A.timingInfo = r, function(A, e, t, r, s) {
        (oA > 18 || 18 === oA && nA >= 2) && performance.markResourceTiming(A, e.href, t, r, s);
    }(r, t, e, globalThis, s));
}
function uA(A, e, t, r) {
    if (r || (r = new j("The operation was aborted.", "AbortError")), A.reject(r), null != e.body && sA(e.body?.stream) && e.body.stream.cancel(r).catch((A)=>{
        if ("ERR_INVALID_STATE" !== A.code) throw A;
    }), null == t) return;
    const s = t[v];
    null != s.body && sA(s.body?.stream) && s.body.stream.cancel(r).catch((A)=>{
        if ("ERR_INVALID_STATE" !== A.code) throw A;
    });
}
function dA({ request: A, processRequestBodyChunkLength: e, processRequestEndOfBody: t, processResponse: r, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: n = !1, dispatcher: i }) {
    let E = null, Q = !1;
    null != A.client && (E = A.client.globalObject, Q = A.client.crossOriginIsolatedCapability);
    const g = F(Q), C = D({
        startTime: g
    }), B = {
        controller: new hA(i),
        request: A,
        timingInfo: C,
        processRequestBodyChunkLength: e,
        processRequestEndOfBody: t,
        processResponse: r,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: E,
        crossOriginIsolatedCapability: Q
    };
    if (W(!A.body || A.body.stream), "client" === A.window && (A.window = "Window" === A.client?.globalObject?.constructor?.name ? A.client : "no-window"), "client" === A.origin && (A.origin = A.client?.origin), "client" === A.policyContainer && (null != A.client ? A.policyContainer = I(A.client.policyContainer) : A.policyContainer = a()), !A.headersList.contains("accept")) {
        const e = "*/*";
        A.headersList.append("accept", e);
    }
    return A.headersList.contains("accept-language") || A.headersList.append("accept-language", "*"), A.priority, K.has(A.destination), fA(B).catch((A)=>{
        B.controller.terminate(A);
    }), B.controller;
}
async function fA(A, e = !1) {
    const t = A.request;
    let r = null;
    if (t.localURLsOnly && !J(d(t)) && (r = s("local URLs only")), y(t), "blocked" === c(t) && (r = s("bad port")), "" === t.referrerPolicy && (t.referrerPolicy = t.policyContainer.referrerPolicy), "no-referrer" !== t.referrer && (t.referrer = k(t)), null === r && (r = await (async ()=>{
        const e = d(t);
        return S(e, t.url) && "basic" === t.responseTainting || "data:" === e.protocol || "navigate" === t.mode || "websocket" === t.mode ? (t.responseTainting = "basic", await yA(A)) : "same-origin" === t.mode ? s('request mode cannot be "same-origin"') : "no-cors" === t.mode ? "follow" !== t.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (t.responseTainting = "opaque", await yA(A)) : G(d(t)) ? (t.responseTainting = "cors", await wA(A)) : s("URL scheme must be a HTTP(S) scheme");
    })()), e) return r;
    0 === r.status || r.internalResponse || (t.responseTainting, "basic" === t.responseTainting ? r = n(r, "basic") : "cors" === t.responseTainting ? r = n(r, "cors") : "opaque" === t.responseTainting ? r = n(r, "opaque") : W(!1));
    let o = 0 === r.status ? r : r.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...t.urlList), t.timingAllowFailed || (r.timingAllowPassed = !0), "opaque" === r.type && 206 === o.status && o.rangeRequested && !t.headers.contains("range") && (r = o = s()), 0 === r.status || "HEAD" !== t.method && "CONNECT" !== t.method && !_.includes(o.status) || (o.body = null, A.controller.dump = !0), t.integrity) {
        const e = (e)=>RA(A, s(e));
        if ("opaque" === t.responseTainting || null == r.body) return void e(r.error);
        const o = (s)=>{
            B(s, t.integrity) ? (r.body = q(s)[0], RA(A, r)) : e("integrity mismatch");
        };
        await M(r.body, o, e);
    } else RA(A, r);
}
function yA(A) {
    if (m(A) && 0 === A.request.redirectCount) return Promise.resolve(o(A));
    const { request: e } = A, { protocol: r } = d(e);
    switch(r){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                IA || (IA = require(20181).resolveObjectURL);
                const A = d(e);
                if (0 !== A.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const r = IA(A.toString());
                if ("GET" !== e.method || !b(r)) return Promise.resolve(s("invalid method"));
                const o = q(r), n = o[0], E = T(`${n.length}`), Q = o[1] ?? "", g = i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: E
                            }
                        ],
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: Q
                            }
                        ]
                    ]
                });
                return g.body = n, Promise.resolve(g);
            }
        case "data:":
            {
                const A = d(e), t = iA(A);
                if ("failure" === t) return Promise.resolve(s("failed to fetch the data URL"));
                const r = EA(t.mimeType);
                return Promise.resolve(i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: r
                            }
                        ]
                    ],
                    body: q(t.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
            return wA(A).catch((A)=>s(A));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function DA(A, e) {
    A.request.done = !0, null != A.processResponseDone && queueMicrotask(()=>A.processResponseDone(e));
}
function RA(A, e) {
    "error" === e.type && (e.urlList = [
        A.request.urlList[0]
    ], e.timingInfo = D({
        startTime: A.timingInfo.startTime
    }));
    const t = ()=>{
        A.request.done = !0, null != A.processResponseEndOfBody && queueMicrotask(()=>A.processResponseEndOfBody(e));
    };
    if (null != A.processResponse && queueMicrotask(()=>A.processResponse(e)), null == e.body) t();
    else {
        const A = (A, e)=>{
            e.enqueue(A);
        }, r = new QA({
            start () {},
            transform: A,
            flush: t
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        e.body = {
            stream: e.body.stream.pipeThrough(r)
        };
    }
    if (null != A.processResponseConsumeBody) {
        const t = (t)=>A.processResponseConsumeBody(e, t), r = (t)=>A.processResponseConsumeBody(e, t);
        return null != e.body ? M(e.body, t, r) : (queueMicrotask(()=>t(null)), Promise.resolve());
    }
}
async function wA(A) {
    const e = A.request;
    let t = null, r = null;
    const o = A.timingInfo;
    if (e.serviceWorkers, null === t) {
        if ("follow" === e.redirect && (e.serviceWorkers = "none"), r = t = await pA(A), "cors" === e.responseTainting && "failure" === w(e, t)) return s("cors failure");
        "failure" === h(e, t) && (e.timingAllowFailed = !0);
    }
    return "opaque" !== e.responseTainting && "opaque" !== t.type || "blocked" !== p(e.origin, e.client, e.destination, r) ? (P.has(r.status) && ("manual" !== e.redirect && A.controller.connection.destroy(), "error" === e.redirect ? t = s("unexpected redirect") : "manual" === e.redirect ? t = r : "follow" === e.redirect ? t = await function(A, e) {
        const t = A.request, r = e.internalResponse ? e.internalResponse : e;
        let o;
        try {
            if (o = u(r, d(t).hash), null == o) return e;
        } catch (A) {
            return Promise.resolve(s(A));
        }
        if (!G(o)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === t.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (t.redirectCount += 1, "cors" === t.mode && (o.username || o.password) && !S(t, o)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === t.responseTainting && (o.username || o.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== r.status && null != t.body && null == t.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(r.status) && "POST" === t.method || 303 === r.status && !aA.includes(t.method)) {
            t.method = "GET", t.body = null;
            for (const A of X)t.headersList.delete(A);
        }
        S(d(t), o) || (t.headersList.delete("authorization"), t.headersList.delete("proxy-authorization", !0), t.headersList.delete("cookie"), t.headersList.delete("host"));
        null != t.body && (W(null != t.body.source), t.body = q(t.body.source)[0]);
        const n = A.timingInfo;
        n.redirectEndTime = n.postRedirectStartTime = F(A.crossOriginIsolatedCapability), 0 === n.redirectStartTime && (n.redirectStartTime = n.startTime);
        return t.urlList.push(o), f(t, r), fA(A, !0);
    }(A, t) : W(!1)), t.timingInfo = o, t) : s("blocked");
}
async function pA(A, e = !1, r = !1) {
    const n = A.request;
    let Q = null, B = null, a = null;
    "no-window" === n.window && "error" === n.redirect ? (Q = A, B = n) : (B = g(n), Q = {
        ...A
    }, Q.request = B);
    const I = "include" === n.credentials || "same-origin" === n.credentials && "basic" === n.responseTainting, c = B.body ? B.body.length : null;
    let h = null;
    if (null == B.body && [
        "POST",
        "PUT"
    ].includes(B.method) && (h = "0"), null != c && (h = T(`${c}`)), null != h && B.headersList.append("content-length", h), null != c && B.keepalive, B.referrer instanceof URL && B.headersList.append("referer", T(B.referrer.href)), l(B), R(B), B.headersList.contains("user-agent") || B.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === B.cache && (B.headersList.contains("if-modified-since") || B.headersList.contains("if-none-match") || B.headersList.contains("if-unmodified-since") || B.headersList.contains("if-match") || B.headersList.contains("if-range")) && (B.cache = "no-store"), "no-cache" !== B.cache || B.preventNoCacheCacheControlHeaderModification || B.headersList.contains("cache-control") || B.headersList.append("cache-control", "max-age=0"), "no-store" !== B.cache && "reload" !== B.cache || (B.headersList.contains("pragma") || B.headersList.append("pragma", "no-cache"), B.headersList.contains("cache-control") || B.headersList.append("cache-control", "no-cache")), B.headersList.contains("range") && B.headersList.append("accept-encoding", "identity"), B.headersList.contains("accept-encoding") || (H(d(B)) ? B.headersList.append("accept-encoding", "br, gzip, deflate") : B.headersList.append("accept-encoding", "gzip, deflate")), B.headersList.delete("host"), B.cache = "no-store", "no-store" !== B.mode && B.mode, null == a) {
        if ("only-if-cached" === B.mode) return s("only if cached");
        const A = await async function(A) {
            W(!A.controller.connection || A.controller.connection.destroyed), A.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (A) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(A ?? new j("The operation was aborted.", "AbortError")));
                }
            };
            const e = A.request;
            let r = null;
            const n = A.timingInfo, Q = null;
            null == Q && (e.cache = "no-store");
            e.mode;
            let g = null;
            if (null == e.body && A.processRequestEndOfBody) queueMicrotask(()=>A.processRequestEndOfBody());
            else if (null != e.body) {
                const t = async function*(e) {
                    m(A) || (yield e, A.processRequestBodyChunkLength?.(e.byteLength));
                }, r = ()=>{
                    m(A) || A.processRequestEndOfBody && A.processRequestEndOfBody();
                }, s = (e)=>{
                    m(A) || ("AbortError" === e.name ? A.controller.abort() : A.controller.terminate(e));
                };
                g = async function*() {
                    try {
                        for await (const A of e.body.stream)yield* t(A);
                        r();
                    } catch (A) {
                        s(A);
                    }
                }();
            }
            try {
                const { body: e, status: t, statusText: s, headersList: o, socket: n } = await h({
                    body: g
                });
                if (n) r = i({
                    status: t,
                    statusText: s,
                    headersList: o,
                    socket: n
                });
                else {
                    const n = e[Symbol.asyncIterator]();
                    A.controller.next = ()=>n.next(), r = i({
                        status: t,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (e) {
                return "AbortError" === e.name ? (A.controller.connection.destroy(), o(A, e)) : s(e);
            }
            const B = ()=>{
                A.controller.resume();
            }, a = (e)=>{
                A.controller.abort(e);
            };
            cA || (cA = require(63774).ReadableStream);
            const I = new cA({
                async start (e) {
                    A.controller.controller = e;
                },
                async pull (A) {
                    await B(A);
                },
                async cancel (A) {
                    await a(A);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function c(e) {
                U(A) ? (r.aborted = !0, sA(I) && A.controller.controller.error(A.controller.serializedAbortReason)) : sA(I) && A.controller.controller.error(new TypeError("terminated", {
                    cause: L(e) ? e : void 0
                })), A.controller.connection.destroy();
            }
            return r.body = {
                stream: I
            }, A.controller.on("terminated", c), A.controller.resume = async ()=>{
                for(;;){
                    let e, t;
                    try {
                        const { done: t, value: r } = await A.controller.next();
                        if (U(A)) break;
                        e = t ? void 0 : r;
                    } catch (r) {
                        A.controller.ended && !n.encodedBodySize ? e = void 0 : (e = r, t = !0);
                    }
                    if (void 0 === e) return Y(A.controller.controller), void DA(A, r);
                    if (n.decodedBodySize += e?.byteLength ?? 0, t) return void A.controller.terminate(e);
                    if (A.controller.controller.enqueue(new Uint8Array(e)), rA(I)) return void A.controller.terminate();
                    if (!A.controller.controller.desiredSize) return;
                }
            }, r;
            async function h({ body: t }) {
                const r = d(e), s = A.controller.dispatcher;
                return new Promise((o, i)=>s.dispatch({
                        path: r.pathname + r.search,
                        origin: r.origin,
                        method: e.method,
                        body: A.controller.dispatcher.isMockActive ? e.body && (e.body.source || e.body.stream) : t,
                        headers: e.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === e.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (e) {
                            const { connection: t } = A.controller;
                            t.destroyed ? e(new j("The operation was aborted.", "AbortError")) : (A.controller.on("terminated", e), this.abort = t.abort = e);
                        },
                        onHeaders (A, t, r, s) {
                            if (A < 200) return;
                            let n = [], i = "";
                            const Q = new E;
                            if (Array.isArray(t)) for(let A = 0; A < t.length; A += 2){
                                const e = t[A + 0].toString("latin1"), r = t[A + 1].toString("latin1");
                                "content-encoding" === e.toLowerCase() ? n = r.toLowerCase().split(",").map((A)=>A.trim()) : "location" === e.toLowerCase() && (i = r), Q[z].append(e, r);
                            }
                            else {
                                const A = Object.keys(t);
                                for (const e of A){
                                    const A = t[e];
                                    "content-encoding" === e.toLowerCase() ? n = A.toLowerCase().split(",").map((A)=>A.trim()).reverse() : "location" === e.toLowerCase() && (i = A), Q[z].append(e, A);
                                }
                            }
                            this.body = new AA({
                                read: r
                            });
                            const g = [], B = "follow" === e.redirect && i && P.has(A);
                            if ("HEAD" !== e.method && "CONNECT" !== e.method && !_.includes(A) && !B) for (const A of n)if ("x-gzip" === A || "gzip" === A) g.push(C.createGunzip({
                                flush: C.constants.Z_SYNC_FLUSH,
                                finishFlush: C.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === A) g.push(C.createInflate());
                            else {
                                if ("br" !== A) {
                                    g.length = 0;
                                    break;
                                }
                                g.push(C.createBrotliDecompress());
                            }
                            return o({
                                status: A,
                                statusText: s,
                                headersList: Q[z],
                                body: g.length ? eA(this.body, ...g, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (e) {
                            if (A.controller.dump) return;
                            const t = e;
                            return n.encodedBodySize += t.byteLength, this.body.push(t);
                        },
                        onComplete () {
                            this.abort && A.controller.off("terminated", this.abort), A.controller.ended = !0, this.body.push(null);
                        },
                        onError (e) {
                            this.abort && A.controller.off("terminated", this.abort), this.body?.destroy(e), A.controller.terminate(e), i(e);
                        },
                        onUpgrade (A, e, t) {
                            if (101 !== A) return;
                            const r = new E;
                            for(let A = 0; A < e.length; A += 2){
                                const t = e[A + 0].toString("latin1"), s = e[A + 1].toString("latin1");
                                r[z].append(t, s);
                            }
                            return o({
                                status: A,
                                statusText: BA[A],
                                headersList: r[z],
                                socket: t
                            }), !0;
                        }
                    }));
            }
        }(Q, I, r);
        !Z.has(B.method) && A.status >= 200 && A.status, null == a && (a = A);
    }
    if (a.urlList = [
        ...B.urlList
    ], B.headersList.contains("range") && (a.rangeRequested = !0), a.requestIncludesCredentials = I, 407 === a.status) return "no-window" === n.window ? s() : m(A) ? o(A) : s("proxy authentication required");
    if (421 === a.status && !r && (null == n.body || null != n.body.source)) {
        if (m(A)) return o(A);
        A.controller.connection.destroy(), a = await pA(A, e, !0);
    }
    return a;
}
module.exports = {
    fetch: function(A, e = {}) {
        CA.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const t = N();
        let s;
        try {
            s = new Q(A, e);
        } catch (A) {
            return t.reject(A), t.promise;
        }
        const o = s[v];
        if (s.signal.aborted) return uA(t, o, null, s.signal.reason), t.promise;
        const n = o.client.globalObject;
        "ServiceWorkerGlobalScope" === n?.constructor?.name && (o.serviceWorkers = "none");
        let i = null, E = !1, g = null;
        return tA(s.signal, ()=>{
            E = !0, W(null != g), g.abort(s.signal.reason), uA(t, o, i, s.signal.reason);
        }), g = dA({
            request: o,
            processResponseEndOfBody: (A)=>lA(A, "fetch"),
            processResponse: (A)=>E ? Promise.resolve() : A.aborted ? (uA(t, o, i, g.serializedAbortReason), Promise.resolve()) : "error" === A.type ? (t.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: A.error
                })), Promise.resolve()) : (i = new r, i[v] = A, i[O] = null, i[V][z] = A.headersList, i[V][x] = "immutable", i[V][O] = null, void t.resolve(i)),
            dispatcher: e.dispatcher ?? gA()
        }), t.promise;
    },
    Fetch: hA,
    fetching: dA,
    finalizeAndReportTiming: lA
};
