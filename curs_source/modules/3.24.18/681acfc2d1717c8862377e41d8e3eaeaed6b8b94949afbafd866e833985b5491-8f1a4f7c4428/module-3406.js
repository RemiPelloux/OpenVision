"use strict";
const { Response: n, makeNetworkError: r, makeAppropriateNetworkError: o, filterResponse: s, makeResponse: i } = require("./module-1099.js"), { Headers: a } = require("./module-2932.js"), { Request: c, makeRequest: l } = require("./module-2239.js"), u = require("./module-3106.js"), { bytesMatch: g, makePolicyContainer: E, clonePolicyContainer: h, requestBadPort: d, TAOCheck: I, appendRequestOriginHeader: B, responseLocationURL: Q, requestCurrentURL: f, setRequestReferrerPolicyOnRedirect: C, tryUpgradeRequestToAPotentiallyTrustworthyURL: p, createOpaqueTimingInfo: m, appendFetchMetadata: y, corsCheck: w, crossOriginResourcePolicyCheck: k, determineRequestsReferrer: b, coarsenedSharedCurrentTime: N, createDeferredPromise: T, isBlobLike: D, sameOrigin: S, isCancelled: R, isAborted: F, isErrorLike: v, fullyReadBody: M, readableStreamClose: U, isomorphicEncode: L, urlIsLocal: _, urlIsHttpHttpsScheme: J, urlHasHttpsScheme: O } = require("./module-5728.js"), { kState: Y, kHeaders: G, kGuard: P, kRealm: V } = require("./module-5899.js"), x = require("./module-2613.js"), { safelyExtractBody: H } = require("./module-7052.js"), { redirectStatusSet: q, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: K, subresourceSet: X, DOMException: Z } = require("./module-6687.js"), { kHeadersList: z } = require("./module-8832.js"), $ = require("./module-4434.js"), { Readable: ee, pipeline: te } = require("./module-2203.js"), { addAbortListener: Ae, isErrored: ne, isReadable: re, nodeMajor: oe, nodeMinor: se } = require("./module-9361.js"), { dataURLProcessor: ie, serializeAMimeType: ae } = require("./module-3631.js"), { TransformStream: ce } = require("./module-3774.js"), { getGlobalDispatcher: le } = require("./module-7362.js"), { webidl: ue } = require("./module-8005.js"), { STATUS_CODES: ge } = require("./module-8611.js"), Ee = [
    "GET",
    "HEAD"
];
let he, de = globalThis.ReadableStream;
class Ie extends $ {
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
function Be(e, t = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const A = e.urlList[0];
    let n = e.timingInfo, r = e.cacheState;
    J(A) && null !== n && (e.timingAllowPassed || (n = m({
        startTime: n.startTime
    }), r = ""), n.endTime = N(), e.timingInfo = n, function(e, t, A, n, r) {
        (oe > 18 || 18 === oe && se >= 2) && performance.markResourceTiming(e, t.href, A, n, r);
    }(n, A, t, globalThis, r));
}
function Qe(e, t, A, n) {
    if (n || (n = new Z("The operation was aborted.", "AbortError")), e.reject(n), null != t.body && re(t.body?.stream) && t.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == A) return;
    const r = A[Y];
    null != r.body && re(r.body?.stream) && r.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function fe({ request: e, processRequestBodyChunkLength: t, processRequestEndOfBody: A, processResponse: n, processResponseEndOfBody: r, processResponseConsumeBody: o, useParallelQueue: s = !1, dispatcher: i }) {
    let a = null, c = !1;
    null != e.client && (a = e.client.globalObject, c = e.client.crossOriginIsolatedCapability);
    const l = N(c), u = m({
        startTime: l
    }), g = {
        controller: new Ie(i),
        request: e,
        timingInfo: u,
        processRequestBodyChunkLength: t,
        processRequestEndOfBody: A,
        processResponse: n,
        processResponseConsumeBody: o,
        processResponseEndOfBody: r,
        taskDestination: a,
        crossOriginIsolatedCapability: c
    };
    if (x(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = h(e.client.policyContainer) : e.policyContainer = E()), !e.headersList.contains("accept")) {
        const t = "*/*";
        e.headersList.append("accept", t);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, X.has(e.destination), Ce(g).catch((e)=>{
        g.controller.terminate(e);
    }), g.controller;
}
async function Ce(e, t = !1) {
    const A = e.request;
    let n = null;
    if (A.localURLsOnly && !_(f(A)) && (n = r("local URLs only")), p(A), "blocked" === d(A) && (n = r("bad port")), "" === A.referrerPolicy && (A.referrerPolicy = A.policyContainer.referrerPolicy), "no-referrer" !== A.referrer && (A.referrer = b(A)), null === n && (n = await (async ()=>{
        const t = f(A);
        return S(t, A.url) && "basic" === A.responseTainting || "data:" === t.protocol || "navigate" === A.mode || "websocket" === A.mode ? (A.responseTainting = "basic", await pe(e)) : "same-origin" === A.mode ? r('request mode cannot be "same-origin"') : "no-cors" === A.mode ? "follow" !== A.redirect ? r('redirect mode cannot be "follow" for "no-cors" request') : (A.responseTainting = "opaque", await pe(e)) : J(f(A)) ? (A.responseTainting = "cors", await we(e)) : r("URL scheme must be a HTTP(S) scheme");
    })()), t) return n;
    0 === n.status || n.internalResponse || (A.responseTainting, "basic" === A.responseTainting ? n = s(n, "basic") : "cors" === A.responseTainting ? n = s(n, "cors") : "opaque" === A.responseTainting ? n = s(n, "opaque") : x(!1));
    let o = 0 === n.status ? n : n.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...A.urlList), A.timingAllowFailed || (n.timingAllowPassed = !0), "opaque" === n.type && 206 === o.status && o.rangeRequested && !A.headers.contains("range") && (n = o = r()), 0 === n.status || "HEAD" !== A.method && "CONNECT" !== A.method && !W.includes(o.status) || (o.body = null, e.controller.dump = !0), A.integrity) {
        const t = (t)=>ye(e, r(t));
        if ("opaque" === A.responseTainting || null == n.body) return void t(n.error);
        const o = (r)=>{
            g(r, A.integrity) ? (n.body = H(r)[0], ye(e, n)) : t("integrity mismatch");
        };
        await M(n.body, o, t);
    } else ye(e, n);
}
function pe(e) {
    if (R(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: t } = e, { protocol: n } = f(t);
    switch(n){
        case "about:":
            return Promise.resolve(r("about scheme is not supported"));
        case "blob:":
            {
                he || (he = require("./module-181.js").resolveObjectURL);
                const e = f(t);
                if (0 !== e.search.length) return Promise.resolve(r("NetworkError when attempting to fetch resource."));
                const n = he(e.toString());
                if ("GET" !== t.method || !D(n)) return Promise.resolve(r("invalid method"));
                const o = H(n), s = o[0], a = L(`${s.length}`), c = o[1] ?? "", l = i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: a
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
                const e = f(t), A = ie(e);
                if ("failure" === A) return Promise.resolve(r("failed to fetch the data URL"));
                const n = ae(A.mimeType);
                return Promise.resolve(i({
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
                    body: H(A.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(r("not implemented... yet..."));
        case "http:":
        case "https:":
            return we(e).catch((e)=>r(e));
        default:
            return Promise.resolve(r("unknown scheme"));
    }
}
function me(e, t) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(t));
}
function ye(e, t) {
    "error" === t.type && (t.urlList = [
        e.request.urlList[0]
    ], t.timingInfo = m({
        startTime: e.timingInfo.startTime
    }));
    const A = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(t));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(t)), null == t.body) A();
    else {
        const e = (e, t)=>{
            t.enqueue(e);
        }, n = new ce({
            start () {},
            transform: e,
            flush: A
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        t.body = {
            stream: t.body.stream.pipeThrough(n)
        };
    }
    if (null != e.processResponseConsumeBody) {
        const A = (A)=>e.processResponseConsumeBody(t, A), n = (A)=>e.processResponseConsumeBody(t, A);
        return null != t.body ? M(t.body, A, n) : (queueMicrotask(()=>A(null)), Promise.resolve());
    }
}
async function we(e) {
    const t = e.request;
    let A = null, n = null;
    const o = e.timingInfo;
    if (t.serviceWorkers, null === A) {
        if ("follow" === t.redirect && (t.serviceWorkers = "none"), n = A = await ke(e), "cors" === t.responseTainting && "failure" === w(t, A)) return r("cors failure");
        "failure" === I(t, A) && (t.timingAllowFailed = !0);
    }
    return "opaque" !== t.responseTainting && "opaque" !== A.type || "blocked" !== k(t.origin, t.client, t.destination, n) ? (q.has(n.status) && ("manual" !== t.redirect && e.controller.connection.destroy(), "error" === t.redirect ? A = r("unexpected redirect") : "manual" === t.redirect ? A = n : "follow" === t.redirect ? A = await function(e, t) {
        const A = e.request, n = t.internalResponse ? t.internalResponse : t;
        let o;
        try {
            if (o = Q(n, f(A).hash), null == o) return t;
        } catch (e) {
            return Promise.resolve(r(e));
        }
        if (!J(o)) return Promise.resolve(r("URL scheme must be a HTTP(S) scheme"));
        if (20 === A.redirectCount) return Promise.resolve(r("redirect count exceeded"));
        if (A.redirectCount += 1, "cors" === A.mode && (o.username || o.password) && !S(A, o)) return Promise.resolve(r('cross origin not allowed for request mode "cors"'));
        if ("cors" === A.responseTainting && (o.username || o.password)) return Promise.resolve(r('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n.status && null != A.body && null == A.body.source) return Promise.resolve(r());
        if ([
            301,
            302
        ].includes(n.status) && "POST" === A.method || 303 === n.status && !Ee.includes(A.method)) {
            A.method = "GET", A.body = null;
            for (const e of K)A.headersList.delete(e);
        }
        S(f(A), o) || (A.headersList.delete("authorization"), A.headersList.delete("proxy-authorization", !0), A.headersList.delete("cookie"), A.headersList.delete("host"));
        null != A.body && (x(null != A.body.source), A.body = H(A.body.source)[0]);
        const s = e.timingInfo;
        s.redirectEndTime = s.postRedirectStartTime = N(e.crossOriginIsolatedCapability), 0 === s.redirectStartTime && (s.redirectStartTime = s.startTime);
        return A.urlList.push(o), C(A, n), Ce(e, !0);
    }(e, A) : x(!1)), A.timingInfo = o, A) : r("blocked");
}
async function ke(e, t = !1, n = !1) {
    const s = e.request;
    let c = null, g = null, E = null;
    "no-window" === s.window && "error" === s.redirect ? (c = e, g = s) : (g = l(s), c = {
        ...e
    }, c.request = g);
    const h = "include" === s.credentials || "same-origin" === s.credentials && "basic" === s.responseTainting, d = g.body ? g.body.length : null;
    let I = null;
    if (null == g.body && [
        "POST",
        "PUT"
    ].includes(g.method) && (I = "0"), null != d && (I = L(`${d}`)), null != I && g.headersList.append("content-length", I), null != d && g.keepalive, g.referrer instanceof URL && g.headersList.append("referer", L(g.referrer.href)), B(g), y(g), g.headersList.contains("user-agent") || g.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === g.cache && (g.headersList.contains("if-modified-since") || g.headersList.contains("if-none-match") || g.headersList.contains("if-unmodified-since") || g.headersList.contains("if-match") || g.headersList.contains("if-range")) && (g.cache = "no-store"), "no-cache" !== g.cache || g.preventNoCacheCacheControlHeaderModification || g.headersList.contains("cache-control") || g.headersList.append("cache-control", "max-age=0"), "no-store" !== g.cache && "reload" !== g.cache || (g.headersList.contains("pragma") || g.headersList.append("pragma", "no-cache"), g.headersList.contains("cache-control") || g.headersList.append("cache-control", "no-cache")), g.headersList.contains("range") && g.headersList.append("accept-encoding", "identity"), g.headersList.contains("accept-encoding") || (O(f(g)) ? g.headersList.append("accept-encoding", "br, gzip, deflate") : g.headersList.append("accept-encoding", "gzip, deflate")), g.headersList.delete("host"), g.cache = "no-store", "no-store" !== g.mode && g.mode, null == E) {
        if ("only-if-cached" === g.mode) return r("only if cached");
        const e = await async function(e) {
            x(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new Z("The operation was aborted.", "AbortError")));
                }
            };
            const t = e.request;
            let n = null;
            const s = e.timingInfo, c = null;
            null == c && (t.cache = "no-store");
            t.mode;
            let l = null;
            if (null == t.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != t.body) {
                const A = async function*(t) {
                    R(e) || (yield t, e.processRequestBodyChunkLength?.(t.byteLength));
                }, n = ()=>{
                    R(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, r = (t)=>{
                    R(e) || ("AbortError" === t.name ? e.controller.abort() : e.controller.terminate(t));
                };
                l = async function*() {
                    try {
                        for await (const e of t.body.stream)yield* A(e);
                        n();
                    } catch (e) {
                        r(e);
                    }
                }();
            }
            try {
                const { body: t, status: A, statusText: r, headersList: o, socket: s } = await I({
                    body: l
                });
                if (s) n = i({
                    status: A,
                    statusText: r,
                    headersList: o,
                    socket: s
                });
                else {
                    const s = t[Symbol.asyncIterator]();
                    e.controller.next = ()=>s.next(), n = i({
                        status: A,
                        statusText: r,
                        headersList: o
                    });
                }
            } catch (t) {
                return "AbortError" === t.name ? (e.controller.connection.destroy(), o(e, t)) : r(t);
            }
            const g = ()=>{
                e.controller.resume();
            }, E = (t)=>{
                e.controller.abort(t);
            };
            de || (de = require("./module-3774.js").ReadableStream);
            const h = new de({
                async start (t) {
                    e.controller.controller = t;
                },
                async pull (e) {
                    await g(e);
                },
                async cancel (e) {
                    await E(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function d(t) {
                F(e) ? (n.aborted = !0, re(h) && e.controller.controller.error(e.controller.serializedAbortReason)) : re(h) && e.controller.controller.error(new TypeError("terminated", {
                    cause: v(t) ? t : void 0
                })), e.controller.connection.destroy();
            }
            return n.body = {
                stream: h
            }, e.controller.on("terminated", d), e.controller.resume = async ()=>{
                for(;;){
                    let t, A;
                    try {
                        const { done: A, value: n } = await e.controller.next();
                        if (F(e)) break;
                        t = A ? void 0 : n;
                    } catch (n) {
                        e.controller.ended && !s.encodedBodySize ? t = void 0 : (t = n, A = !0);
                    }
                    if (void 0 === t) return U(e.controller.controller), void me(e, n);
                    if (s.decodedBodySize += t?.byteLength ?? 0, A) return void e.controller.terminate(t);
                    if (e.controller.controller.enqueue(new Uint8Array(t)), ne(h)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, n;
            async function I({ body: A }) {
                const n = f(t), r = e.controller.dispatcher;
                return new Promise((o, i)=>r.dispatch({
                        path: n.pathname + n.search,
                        origin: n.origin,
                        method: t.method,
                        body: e.controller.dispatcher.isMockActive ? t.body && (t.body.source || t.body.stream) : A,
                        headers: t.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === t.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (t) {
                            const { connection: A } = e.controller;
                            A.destroyed ? t(new Z("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", t), this.abort = A.abort = t);
                        },
                        onHeaders (e, A, n, r) {
                            if (e < 200) return;
                            let s = [], i = "";
                            const c = new a;
                            if (Array.isArray(A)) for(let e = 0; e < A.length; e += 2){
                                const t = A[e + 0].toString("latin1"), n = A[e + 1].toString("latin1");
                                "content-encoding" === t.toLowerCase() ? s = n.toLowerCase().split(",").map((e)=>e.trim()) : "location" === t.toLowerCase() && (i = n), c[z].append(t, n);
                            }
                            else {
                                const e = Object.keys(A);
                                for (const t of e){
                                    const e = A[t];
                                    "content-encoding" === t.toLowerCase() ? s = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === t.toLowerCase() && (i = e), c[z].append(t, e);
                                }
                            }
                            this.body = new ee({
                                read: n
                            });
                            const l = [], g = "follow" === t.redirect && i && q.has(e);
                            if ("HEAD" !== t.method && "CONNECT" !== t.method && !W.includes(e) && !g) for (const e of s)if ("x-gzip" === e || "gzip" === e) l.push(u.createGunzip({
                                flush: u.constants.Z_SYNC_FLUSH,
                                finishFlush: u.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) l.push(u.createInflate());
                            else {
                                if ("br" !== e) {
                                    l.length = 0;
                                    break;
                                }
                                l.push(u.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: r,
                                headersList: c[z],
                                body: l.length ? te(this.body, ...l, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (t) {
                            if (e.controller.dump) return;
                            const A = t;
                            return s.encodedBodySize += A.byteLength, this.body.push(A);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (t) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(t), e.controller.terminate(t), i(t);
                        },
                        onUpgrade (e, t, A) {
                            if (101 !== e) return;
                            const n = new a;
                            for(let e = 0; e < t.length; e += 2){
                                const A = t[e + 0].toString("latin1"), r = t[e + 1].toString("latin1");
                                n[z].append(A, r);
                            }
                            return o({
                                status: e,
                                statusText: ge[e],
                                headersList: n[z],
                                socket: A
                            }), !0;
                        }
                    }));
            }
        }(c, h, n);
        !j.has(g.method) && e.status >= 200 && e.status, null == E && (E = e);
    }
    if (E.urlList = [
        ...g.urlList
    ], g.headersList.contains("range") && (E.rangeRequested = !0), E.requestIncludesCredentials = h, 407 === E.status) return "no-window" === s.window ? r() : R(e) ? o(e) : r("proxy authentication required");
    if (421 === E.status && !n && (null == s.body || null != s.body.source)) {
        if (R(e)) return o(e);
        e.controller.connection.destroy(), E = await ke(e, t, !0);
    }
    return E;
}
module.exports = {
    fetch: function(e, t = {}) {
        ue.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const A = T();
        let r;
        try {
            r = new c(e, t);
        } catch (e) {
            return A.reject(e), A.promise;
        }
        const o = r[Y];
        if (r.signal.aborted) return Qe(A, o, null, r.signal.reason), A.promise;
        const s = o.client.globalObject;
        "ServiceWorkerGlobalScope" === s?.constructor?.name && (o.serviceWorkers = "none");
        let i = null, a = !1, l = null;
        return Ae(r.signal, ()=>{
            a = !0, x(null != l), l.abort(r.signal.reason), Qe(A, o, i, r.signal.reason);
        }), l = fe({
            request: o,
            processResponseEndOfBody: (e)=>Be(e, "fetch"),
            processResponse: (e)=>a ? Promise.resolve() : e.aborted ? (Qe(A, o, i, l.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (A.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (i = new n, i[Y] = e, i[V] = null, i[G][z] = e.headersList, i[G][P] = "immutable", i[G][V] = null, void A.resolve(i)),
            dispatcher: t.dispatcher ?? le()
        }), A.promise;
    },
    Fetch: Ie,
    fetching: fe,
    finalizeAndReportTiming: Be
};
