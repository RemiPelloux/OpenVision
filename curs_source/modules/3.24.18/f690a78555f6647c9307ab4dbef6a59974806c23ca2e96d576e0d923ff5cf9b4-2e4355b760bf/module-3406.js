"use strict";
const { Response: n, makeNetworkError: r, makeAppropriateNetworkError: o, filterResponse: s, makeResponse: a } = require("./module-1099.js"), { Headers: i } = require("./module-2932.js"), { Request: c, makeRequest: l } = require("./module-2239.js"), g = require("./module-3106.js"), { bytesMatch: E, makePolicyContainer: u, clonePolicyContainer: d, requestBadPort: I, TAOCheck: h, appendRequestOriginHeader: Q, responseLocationURL: m, requestCurrentURL: C, setRequestReferrerPolicyOnRedirect: B, tryUpgradeRequestToAPotentiallyTrustworthyURL: p, createOpaqueTimingInfo: f, appendFetchMetadata: y, corsCheck: T, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: w, coarsenedSharedCurrentTime: N, createDeferredPromise: D, isBlobLike: R, sameOrigin: S, isCancelled: b, isAborted: F, isErrorLike: _, fullyReadBody: v, readableStreamClose: L, isomorphicEncode: U, urlIsLocal: M, urlIsHttpHttpsScheme: O, urlHasHttpsScheme: J } = require("./module-5728.js"), { kState: Y, kHeaders: P, kGuard: G, kRealm: V } = require("./module-5899.js"), x = require("./module-2613.js"), { safelyExtractBody: H } = require("./module-7052.js"), { redirectStatusSet: q, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: X, subresourceSet: K, DOMException: Z } = require("./module-6687.js"), { kHeadersList: z } = require("./module-8832.js"), $ = require("./module-4434.js"), { Readable: ee, pipeline: Ae } = require("./module-2203.js"), { addAbortListener: te, isErrored: ne, isReadable: re, nodeMajor: oe, nodeMinor: se } = require("./module-9361.js"), { dataURLProcessor: ae, serializeAMimeType: ie } = require("./module-3631.js"), { TransformStream: ce } = require("./module-3774.js"), { getGlobalDispatcher: le } = require("./module-7362.js"), { webidl: ge } = require("./module-8005.js"), { STATUS_CODES: Ee } = require("./module-8611.js"), ue = [
    "GET",
    "HEAD"
];
let de, Ie = globalThis.ReadableStream;
class he extends $ {
    constructor(e){
        super(), this.dispatcher = e, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(e) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e), this.emit("terminated", e));
    }
    abort(e) {
        "ongoing" === this.state && (this.state = "aborted", e || (e = new Z("The operation was aborted.", "AbortError")), this.serializedAbortReason = e, this.connection?.destroy(e), this.emit("terminated", e));
    }
}
function Qe(e, A = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const t = e.urlList[0];
    let n = e.timingInfo, r = e.cacheState;
    O(t) && null !== n && (e.timingAllowPassed || (n = f({
        startTime: n.startTime
    }), r = ""), n.endTime = N(), e.timingInfo = n, function(e, A, t, n, r) {
        (oe > 18 || 18 === oe && se >= 2) && performance.markResourceTiming(e, A.href, t, n, r);
    }(n, t, A, globalThis, r));
}
function me(e, A, t, n) {
    if (n || (n = new Z("The operation was aborted.", "AbortError")), e.reject(n), null != A.body && re(A.body?.stream) && A.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == t) return;
    const r = t[Y];
    null != r.body && re(r.body?.stream) && r.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function Ce({ request: e, processRequestBodyChunkLength: A, processRequestEndOfBody: t, processResponse: n, processResponseEndOfBody: r, processResponseConsumeBody: o, useParallelQueue: s = !1, dispatcher: a }) {
    let i = null, c = !1;
    null != e.client && (i = e.client.globalObject, c = e.client.crossOriginIsolatedCapability);
    const l = N(c), g = f({
        startTime: l
    }), E = {
        controller: new he(a),
        request: e,
        timingInfo: g,
        processRequestBodyChunkLength: A,
        processRequestEndOfBody: t,
        processResponse: n,
        processResponseConsumeBody: o,
        processResponseEndOfBody: r,
        taskDestination: i,
        crossOriginIsolatedCapability: c
    };
    if (x(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = d(e.client.policyContainer) : e.policyContainer = u()), !e.headersList.contains("accept")) {
        const A = "*/*";
        e.headersList.append("accept", A);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, K.has(e.destination), Be(E).catch((e)=>{
        E.controller.terminate(e);
    }), E.controller;
}
async function Be(e, A = !1) {
    const t = e.request;
    let n = null;
    if (t.localURLsOnly && !M(C(t)) && (n = r("local URLs only")), p(t), "blocked" === I(t) && (n = r("bad port")), "" === t.referrerPolicy && (t.referrerPolicy = t.policyContainer.referrerPolicy), "no-referrer" !== t.referrer && (t.referrer = w(t)), null === n && (n = await (async ()=>{
        const A = C(t);
        return S(A, t.url) && "basic" === t.responseTainting || "data:" === A.protocol || "navigate" === t.mode || "websocket" === t.mode ? (t.responseTainting = "basic", await pe(e)) : "same-origin" === t.mode ? r('request mode cannot be "same-origin"') : "no-cors" === t.mode ? "follow" !== t.redirect ? r('redirect mode cannot be "follow" for "no-cors" request') : (t.responseTainting = "opaque", await pe(e)) : O(C(t)) ? (t.responseTainting = "cors", await Te(e)) : r("URL scheme must be a HTTP(S) scheme");
    })()), A) return n;
    0 === n.status || n.internalResponse || (t.responseTainting, "basic" === t.responseTainting ? n = s(n, "basic") : "cors" === t.responseTainting ? n = s(n, "cors") : "opaque" === t.responseTainting ? n = s(n, "opaque") : x(!1));
    let o = 0 === n.status ? n : n.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...t.urlList), t.timingAllowFailed || (n.timingAllowPassed = !0), "opaque" === n.type && 206 === o.status && o.rangeRequested && !t.headers.contains("range") && (n = o = r()), 0 === n.status || "HEAD" !== t.method && "CONNECT" !== t.method && !W.includes(o.status) || (o.body = null, e.controller.dump = !0), t.integrity) {
        const A = (A)=>ye(e, r(A));
        if ("opaque" === t.responseTainting || null == n.body) return void A(n.error);
        const o = (r)=>{
            E(r, t.integrity) ? (n.body = H(r)[0], ye(e, n)) : A("integrity mismatch");
        };
        await v(n.body, o, A);
    } else ye(e, n);
}
function pe(e) {
    if (b(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: A } = e, { protocol: n } = C(A);
    switch(n){
        case "about:":
            return Promise.resolve(r("about scheme is not supported"));
        case "blob:":
            {
                de || (de = require("./module-181.js").resolveObjectURL);
                const e = C(A);
                if (0 !== e.search.length) return Promise.resolve(r("NetworkError when attempting to fetch resource."));
                const n = de(e.toString());
                if ("GET" !== A.method || !R(n)) return Promise.resolve(r("invalid method"));
                const o = H(n), s = o[0], i = U(`${s.length}`), c = o[1] ?? "", l = a({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: i
                            }
                        ],
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: c
                            }
                        ]
                    ]
                });
                return l.body = s, Promise.resolve(l);
            }
        case "data:":
            {
                const e = C(A), t = ae(e);
                if ("failure" === t) return Promise.resolve(r("failed to fetch the data URL"));
                const n = ie(t.mimeType);
                return Promise.resolve(a({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: n
                            }
                        ]
                    ],
                    body: H(t.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(r("not implemented... yet..."));
        case "http:":
        case "https:":
            return Te(e).catch((e)=>r(e));
        default:
            return Promise.resolve(r("unknown scheme"));
    }
}
function fe(e, A) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(A));
}
function ye(e, A) {
    "error" === A.type && (A.urlList = [
        e.request.urlList[0]
    ], A.timingInfo = f({
        startTime: e.timingInfo.startTime
    }));
    const t = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(A));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(A)), null == A.body) t();
    else {
        const e = (e, A)=>{
            A.enqueue(e);
        }, n = new ce({
            start () {},
            transform: e,
            flush: t
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        A.body = {
            stream: A.body.stream.pipeThrough(n)
        };
    }
    if (null != e.processResponseConsumeBody) {
        const t = (t)=>e.processResponseConsumeBody(A, t), n = (t)=>e.processResponseConsumeBody(A, t);
        return null != A.body ? v(A.body, t, n) : (queueMicrotask(()=>t(null)), Promise.resolve());
    }
}
async function Te(e) {
    const A = e.request;
    let t = null, n = null;
    const o = e.timingInfo;
    if (A.serviceWorkers, null === t) {
        if ("follow" === A.redirect && (A.serviceWorkers = "none"), n = t = await ke(e), "cors" === A.responseTainting && "failure" === T(A, t)) return r("cors failure");
        "failure" === h(A, t) && (A.timingAllowFailed = !0);
    }
    return "opaque" !== A.responseTainting && "opaque" !== t.type || "blocked" !== k(A.origin, A.client, A.destination, n) ? (q.has(n.status) && ("manual" !== A.redirect && e.controller.connection.destroy(), "error" === A.redirect ? t = r("unexpected redirect") : "manual" === A.redirect ? t = n : "follow" === A.redirect ? t = await function(e, A) {
        const t = e.request, n = A.internalResponse ? A.internalResponse : A;
        let o;
        try {
            if (o = m(n, C(t).hash), null == o) return A;
        } catch (e) {
            return Promise.resolve(r(e));
        }
        if (!O(o)) return Promise.resolve(r("URL scheme must be a HTTP(S) scheme"));
        if (20 === t.redirectCount) return Promise.resolve(r("redirect count exceeded"));
        if (t.redirectCount += 1, "cors" === t.mode && (o.username || o.password) && !S(t, o)) return Promise.resolve(r('cross origin not allowed for request mode "cors"'));
        if ("cors" === t.responseTainting && (o.username || o.password)) return Promise.resolve(r('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n.status && null != t.body && null == t.body.source) return Promise.resolve(r());
        if ([
            301,
            302
        ].includes(n.status) && "POST" === t.method || 303 === n.status && !ue.includes(t.method)) {
            t.method = "GET", t.body = null;
            for (const e of X)t.headersList.delete(e);
        }
        S(C(t), o) || (t.headersList.delete("authorization"), t.headersList.delete("proxy-authorization", !0), t.headersList.delete("cookie"), t.headersList.delete("host"));
        null != t.body && (x(null != t.body.source), t.body = H(t.body.source)[0]);
        const s = e.timingInfo;
        s.redirectEndTime = s.postRedirectStartTime = N(e.crossOriginIsolatedCapability), 0 === s.redirectStartTime && (s.redirectStartTime = s.startTime);
        return t.urlList.push(o), B(t, n), Be(e, !0);
    }(e, t) : x(!1)), t.timingInfo = o, t) : r("blocked");
}
async function ke(e, A = !1, n = !1) {
    const s = e.request;
    let c = null, E = null, u = null;
    "no-window" === s.window && "error" === s.redirect ? (c = e, E = s) : (E = l(s), c = {
        ...e
    }, c.request = E);
    const d = "include" === s.credentials || "same-origin" === s.credentials && "basic" === s.responseTainting, I = E.body ? E.body.length : null;
    let h = null;
    if (null == E.body && [
        "POST",
        "PUT"
    ].includes(E.method) && (h = "0"), null != I && (h = U(`${I}`)), null != h && E.headersList.append("content-length", h), null != I && E.keepalive, E.referrer instanceof URL && E.headersList.append("referer", U(E.referrer.href)), Q(E), y(E), E.headersList.contains("user-agent") || E.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === E.cache && (E.headersList.contains("if-modified-since") || E.headersList.contains("if-none-match") || E.headersList.contains("if-unmodified-since") || E.headersList.contains("if-match") || E.headersList.contains("if-range")) && (E.cache = "no-store"), "no-cache" !== E.cache || E.preventNoCacheCacheControlHeaderModification || E.headersList.contains("cache-control") || E.headersList.append("cache-control", "max-age=0"), "no-store" !== E.cache && "reload" !== E.cache || (E.headersList.contains("pragma") || E.headersList.append("pragma", "no-cache"), E.headersList.contains("cache-control") || E.headersList.append("cache-control", "no-cache")), E.headersList.contains("range") && E.headersList.append("accept-encoding", "identity"), E.headersList.contains("accept-encoding") || (J(C(E)) ? E.headersList.append("accept-encoding", "br, gzip, deflate") : E.headersList.append("accept-encoding", "gzip, deflate")), E.headersList.delete("host"), E.cache = "no-store", "no-store" !== E.mode && E.mode, null == u) {
        if ("only-if-cached" === E.mode) return r("only if cached");
        const e = await async function(e) {
            x(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new Z("The operation was aborted.", "AbortError")));
                }
            };
            const A = e.request;
            let n = null;
            const s = e.timingInfo, c = null;
            null == c && (A.cache = "no-store");
            A.mode;
            let l = null;
            if (null == A.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != A.body) {
                const t = async function*(A) {
                    b(e) || (yield A, e.processRequestBodyChunkLength?.(A.byteLength));
                }, n = ()=>{
                    b(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, r = (A)=>{
                    b(e) || ("AbortError" === A.name ? e.controller.abort() : e.controller.terminate(A));
                };
                l = async function*() {
                    try {
                        for await (const e of A.body.stream)yield* t(e);
                        n();
                    } catch (e) {
                        r(e);
                    }
                }();
            }
            try {
                const { body: A, status: t, statusText: r, headersList: o, socket: s } = await h({
                    body: l
                });
                if (s) n = a({
                    status: t,
                    statusText: r,
                    headersList: o,
                    socket: s
                });
                else {
                    const s = A[Symbol.asyncIterator]();
                    e.controller.next = ()=>s.next(), n = a({
                        status: t,
                        statusText: r,
                        headersList: o
                    });
                }
            } catch (A) {
                return "AbortError" === A.name ? (e.controller.connection.destroy(), o(e, A)) : r(A);
            }
            const E = ()=>{
                e.controller.resume();
            }, u = (A)=>{
                e.controller.abort(A);
            };
            Ie || (Ie = require("./module-3774.js").ReadableStream);
            const d = new Ie({
                async start (A) {
                    e.controller.controller = A;
                },
                async pull (e) {
                    await E(e);
                },
                async cancel (e) {
                    await u(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function I(A) {
                F(e) ? (n.aborted = !0, re(d) && e.controller.controller.error(e.controller.serializedAbortReason)) : re(d) && e.controller.controller.error(new TypeError("terminated", {
                    cause: _(A) ? A : void 0
                })), e.controller.connection.destroy();
            }
            return n.body = {
                stream: d
            }, e.controller.on("terminated", I), e.controller.resume = async ()=>{
                for(;;){
                    let A, t;
                    try {
                        const { done: t, value: n } = await e.controller.next();
                        if (F(e)) break;
                        A = t ? void 0 : n;
                    } catch (n) {
                        e.controller.ended && !s.encodedBodySize ? A = void 0 : (A = n, t = !0);
                    }
                    if (void 0 === A) return L(e.controller.controller), void fe(e, n);
                    if (s.decodedBodySize += A?.byteLength ?? 0, t) return void e.controller.terminate(A);
                    if (e.controller.controller.enqueue(new Uint8Array(A)), ne(d)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, n;
            async function h({ body: t }) {
                const n = C(A), r = e.controller.dispatcher;
                return new Promise((o, a)=>r.dispatch({
                        path: n.pathname + n.search,
                        origin: n.origin,
                        method: A.method,
                        body: e.controller.dispatcher.isMockActive ? A.body && (A.body.source || A.body.stream) : t,
                        headers: A.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === A.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (A) {
                            const { connection: t } = e.controller;
                            t.destroyed ? A(new Z("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", A), this.abort = t.abort = A);
                        },
                        onHeaders (e, t, n, r) {
                            if (e < 200) return;
                            let s = [], a = "";
                            const c = new i;
                            if (Array.isArray(t)) for(let e = 0; e < t.length; e += 2){
                                const A = t[e + 0].toString("latin1"), n = t[e + 1].toString("latin1");
                                "content-encoding" === A.toLowerCase() ? s = n.toLowerCase().split(",").map((e)=>e.trim()) : "location" === A.toLowerCase() && (a = n), c[z].append(A, n);
                            }
                            else {
                                const e = Object.keys(t);
                                for (const A of e){
                                    const e = t[A];
                                    "content-encoding" === A.toLowerCase() ? s = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === A.toLowerCase() && (a = e), c[z].append(A, e);
                                }
                            }
                            this.body = new ee({
                                read: n
                            });
                            const l = [], E = "follow" === A.redirect && a && q.has(e);
                            if ("HEAD" !== A.method && "CONNECT" !== A.method && !W.includes(e) && !E) for (const e of s)if ("x-gzip" === e || "gzip" === e) l.push(g.createGunzip({
                                flush: g.constants.Z_SYNC_FLUSH,
                                finishFlush: g.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) l.push(g.createInflate());
                            else {
                                if ("br" !== e) {
                                    l.length = 0;
                                    break;
                                }
                                l.push(g.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: r,
                                headersList: c[z],
                                body: l.length ? Ae(this.body, ...l, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (A) {
                            if (e.controller.dump) return;
                            const t = A;
                            return s.encodedBodySize += t.byteLength, this.body.push(t);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (A) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(A), e.controller.terminate(A), a(A);
                        },
                        onUpgrade (e, A, t) {
                            if (101 !== e) return;
                            const n = new i;
                            for(let e = 0; e < A.length; e += 2){
                                const t = A[e + 0].toString("latin1"), r = A[e + 1].toString("latin1");
                                n[z].append(t, r);
                            }
                            return o({
                                status: e,
                                statusText: Ee[e],
                                headersList: n[z],
                                socket: t
                            }), !0;
                        }
                    }));
            }
        }(c, d, n);
        !j.has(E.method) && e.status >= 200 && e.status, null == u && (u = e);
    }
    if (u.urlList = [
        ...E.urlList
    ], E.headersList.contains("range") && (u.rangeRequested = !0), u.requestIncludesCredentials = d, 407 === u.status) return "no-window" === s.window ? r() : b(e) ? o(e) : r("proxy authentication required");
    if (421 === u.status && !n && (null == s.body || null != s.body.source)) {
        if (b(e)) return o(e);
        e.controller.connection.destroy(), u = await ke(e, A, !0);
    }
    return u;
}
module.exports = {
    fetch: function(e, A = {}) {
        ge.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const t = D();
        let r;
        try {
            r = new c(e, A);
        } catch (e) {
            return t.reject(e), t.promise;
        }
        const o = r[Y];
        if (r.signal.aborted) return me(t, o, null, r.signal.reason), t.promise;
        const s = o.client.globalObject;
        "ServiceWorkerGlobalScope" === s?.constructor?.name && (o.serviceWorkers = "none");
        let a = null, i = !1, l = null;
        return te(r.signal, ()=>{
            i = !0, x(null != l), l.abort(r.signal.reason), me(t, o, a, r.signal.reason);
        }), l = Ce({
            request: o,
            processResponseEndOfBody: (e)=>Qe(e, "fetch"),
            processResponse: (e)=>i ? Promise.resolve() : e.aborted ? (me(t, o, a, l.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (t.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (a = new n, a[Y] = e, a[V] = null, a[P][z] = e.headersList, a[P][G] = "immutable", a[P][V] = null, void t.resolve(a)),
            dispatcher: A.dispatcher ?? le()
        }), t.promise;
    },
    Fetch: he,
    fetching: Ce,
    finalizeAndReportTiming: Qe
};
