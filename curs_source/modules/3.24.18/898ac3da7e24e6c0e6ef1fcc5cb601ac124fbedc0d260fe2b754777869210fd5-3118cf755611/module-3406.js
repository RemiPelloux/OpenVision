"use strict";
const { Response: t, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: r, makeResponse: i } = require("./module-1099.js"), { Headers: A } = require("./module-2932.js"), { Request: l, makeRequest: c } = require("./module-2239.js"), m = require("./module-3106.js"), { bytesMatch: d, makePolicyContainer: g, clonePolicyContainer: u, requestBadPort: E, TAOCheck: p, appendRequestOriginHeader: T, responseLocationURL: k, requestCurrentURL: I, setRequestReferrerPolicyOnRedirect: h, tryUpgradeRequestToAPotentiallyTrustworthyURL: _, createOpaqueTimingInfo: C, appendFetchMetadata: f, corsCheck: B, crossOriginResourcePolicyCheck: Q, determineRequestsReferrer: y, coarsenedSharedCurrentTime: R, createDeferredPromise: N, isBlobLike: v, sameOrigin: S, isCancelled: D, isAborted: w, isErrorLike: b, fullyReadBody: M, readableStreamClose: F, isomorphicEncode: O, urlIsLocal: U, urlIsHttpHttpsScheme: L, urlHasHttpsScheme: P } = require("./module-5728.js"), { kState: x, kHeaders: G, kGuard: Y, kRealm: J } = require("./module-5899.js"), V = require("./module-2613.js"), { safelyExtractBody: q } = require("./module-7052.js"), { redirectStatusSet: H, nullBodyStatus: W, safeMethodsSet: K, requestBodyHeader: j, subresourceSet: X, DOMException: Z } = require("./module-6687.js"), { kHeadersList: z } = require("./module-8832.js"), $ = require("./module-4434.js"), { Readable: ee, pipeline: ne } = require("./module-2203.js"), { addAbortListener: ae, isErrored: te, isReadable: se, nodeMajor: oe, nodeMinor: re } = require("./module-9361.js"), { dataURLProcessor: ie, serializeAMimeType: Ae } = require("./module-3631.js"), { TransformStream: le } = require("./module-3774.js"), { getGlobalDispatcher: ce } = require("./module-7362.js"), { webidl: me } = require("./module-8005.js"), { STATUS_CODES: de } = require("./module-8611.js"), ge = [
    "GET",
    "HEAD"
];
let ue, Ee = globalThis.ReadableStream;
class pe extends $ {
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
function Te(e, n = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const a = e.urlList[0];
    let t = e.timingInfo, s = e.cacheState;
    L(a) && null !== t && (e.timingAllowPassed || (t = C({
        startTime: t.startTime
    }), s = ""), t.endTime = R(), e.timingInfo = t, function(e, n, a, t, s) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e, n.href, a, t, s);
    }(t, a, n, globalThis, s));
}
function ke(e, n, a, t) {
    if (t || (t = new Z("The operation was aborted.", "AbortError")), e.reject(t), null != n.body && se(n.body?.stream) && n.body.stream.cancel(t).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == a) return;
    const s = a[x];
    null != s.body && se(s.body?.stream) && s.body.stream.cancel(t).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function Ie({ request: e, processRequestBodyChunkLength: n, processRequestEndOfBody: a, processResponse: t, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: r = !1, dispatcher: i }) {
    let A = null, l = !1;
    null != e.client && (A = e.client.globalObject, l = e.client.crossOriginIsolatedCapability);
    const c = R(l), m = C({
        startTime: c
    }), d = {
        controller: new pe(i),
        request: e,
        timingInfo: m,
        processRequestBodyChunkLength: n,
        processRequestEndOfBody: a,
        processResponse: t,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: A,
        crossOriginIsolatedCapability: l
    };
    if (V(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = u(e.client.policyContainer) : e.policyContainer = g()), !e.headersList.contains("accept")) {
        const n = "*/*";
        e.headersList.append("accept", n);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, X.has(e.destination), he(d).catch((e)=>{
        d.controller.terminate(e);
    }), d.controller;
}
async function he(e, n = !1) {
    const a = e.request;
    let t = null;
    if (a.localURLsOnly && !U(I(a)) && (t = s("local URLs only")), _(a), "blocked" === E(a) && (t = s("bad port")), "" === a.referrerPolicy && (a.referrerPolicy = a.policyContainer.referrerPolicy), "no-referrer" !== a.referrer && (a.referrer = y(a)), null === t && (t = await (async ()=>{
        const n = I(a);
        return S(n, a.url) && "basic" === a.responseTainting || "data:" === n.protocol || "navigate" === a.mode || "websocket" === a.mode ? (a.responseTainting = "basic", await _e(e)) : "same-origin" === a.mode ? s('request mode cannot be "same-origin"') : "no-cors" === a.mode ? "follow" !== a.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (a.responseTainting = "opaque", await _e(e)) : L(I(a)) ? (a.responseTainting = "cors", await Be(e)) : s("URL scheme must be a HTTP(S) scheme");
    })()), n) return t;
    0 === t.status || t.internalResponse || (a.responseTainting, "basic" === a.responseTainting ? t = r(t, "basic") : "cors" === a.responseTainting ? t = r(t, "cors") : "opaque" === a.responseTainting ? t = r(t, "opaque") : V(!1));
    let o = 0 === t.status ? t : t.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...a.urlList), a.timingAllowFailed || (t.timingAllowPassed = !0), "opaque" === t.type && 206 === o.status && o.rangeRequested && !a.headers.contains("range") && (t = o = s()), 0 === t.status || "HEAD" !== a.method && "CONNECT" !== a.method && !W.includes(o.status) || (o.body = null, e.controller.dump = !0), a.integrity) {
        const n = (n)=>fe(e, s(n));
        if ("opaque" === a.responseTainting || null == t.body) return void n(t.error);
        const o = (s)=>{
            d(s, a.integrity) ? (t.body = q(s)[0], fe(e, t)) : n("integrity mismatch");
        };
        await M(t.body, o, n);
    } else fe(e, t);
}
function _e(e) {
    if (D(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: n } = e, { protocol: t } = I(n);
    switch(t){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                ue || (ue = require("./module-181.js").resolveObjectURL);
                const e = I(n);
                if (0 !== e.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const t = ue(e.toString());
                if ("GET" !== n.method || !v(t)) return Promise.resolve(s("invalid method"));
                const o = q(t), r = o[0], A = O(`${r.length}`), l = o[1] ?? "", c = i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: A
                            }
                        ],
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: l
                            }
                        ]
                    ]
                });
                return c.body = r, Promise.resolve(c);
            }
        case "data:":
            {
                const e = I(n), a = ie(e);
                if ("failure" === a) return Promise.resolve(s("failed to fetch the data URL"));
                const t = Ae(a.mimeType);
                return Promise.resolve(i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: t
                            }
                        ]
                    ],
                    body: q(a.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
            return Be(e).catch((e)=>s(e));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function Ce(e, n) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(n));
}
function fe(e, n) {
    "error" === n.type && (n.urlList = [
        e.request.urlList[0]
    ], n.timingInfo = C({
        startTime: e.timingInfo.startTime
    }));
    const a = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(n));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(n)), null == n.body) a();
    else {
        const e = (e, n)=>{
            n.enqueue(e);
        }, t = new le({
            start () {},
            transform: e,
            flush: a
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        n.body = {
            stream: n.body.stream.pipeThrough(t)
        };
    }
    if (null != e.processResponseConsumeBody) {
        const a = (a)=>e.processResponseConsumeBody(n, a), t = (a)=>e.processResponseConsumeBody(n, a);
        return null != n.body ? M(n.body, a, t) : (queueMicrotask(()=>a(null)), Promise.resolve());
    }
}
async function Be(e) {
    const n = e.request;
    let a = null, t = null;
    const o = e.timingInfo;
    if (n.serviceWorkers, null === a) {
        if ("follow" === n.redirect && (n.serviceWorkers = "none"), t = a = await Qe(e), "cors" === n.responseTainting && "failure" === B(n, a)) return s("cors failure");
        "failure" === p(n, a) && (n.timingAllowFailed = !0);
    }
    return "opaque" !== n.responseTainting && "opaque" !== a.type || "blocked" !== Q(n.origin, n.client, n.destination, t) ? (H.has(t.status) && ("manual" !== n.redirect && e.controller.connection.destroy(), "error" === n.redirect ? a = s("unexpected redirect") : "manual" === n.redirect ? a = t : "follow" === n.redirect ? a = await function(e, n) {
        const a = e.request, t = n.internalResponse ? n.internalResponse : n;
        let o;
        try {
            if (o = k(t, I(a).hash), null == o) return n;
        } catch (e) {
            return Promise.resolve(s(e));
        }
        if (!L(o)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === a.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (a.redirectCount += 1, "cors" === a.mode && (o.username || o.password) && !S(a, o)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === a.responseTainting && (o.username || o.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== t.status && null != a.body && null == a.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(t.status) && "POST" === a.method || 303 === t.status && !ge.includes(a.method)) {
            a.method = "GET", a.body = null;
            for (const e of j)a.headersList.delete(e);
        }
        S(I(a), o) || (a.headersList.delete("authorization"), a.headersList.delete("proxy-authorization", !0), a.headersList.delete("cookie"), a.headersList.delete("host"));
        null != a.body && (V(null != a.body.source), a.body = q(a.body.source)[0]);
        const r = e.timingInfo;
        r.redirectEndTime = r.postRedirectStartTime = R(e.crossOriginIsolatedCapability), 0 === r.redirectStartTime && (r.redirectStartTime = r.startTime);
        return a.urlList.push(o), h(a, t), he(e, !0);
    }(e, a) : V(!1)), a.timingInfo = o, a) : s("blocked");
}
async function Qe(e, n = !1, t = !1) {
    const r = e.request;
    let l = null, d = null, g = null;
    "no-window" === r.window && "error" === r.redirect ? (l = e, d = r) : (d = c(r), l = {
        ...e
    }, l.request = d);
    const u = "include" === r.credentials || "same-origin" === r.credentials && "basic" === r.responseTainting, E = d.body ? d.body.length : null;
    let p = null;
    if (null == d.body && [
        "POST",
        "PUT"
    ].includes(d.method) && (p = "0"), null != E && (p = O(`${E}`)), null != p && d.headersList.append("content-length", p), null != E && d.keepalive, d.referrer instanceof URL && d.headersList.append("referer", O(d.referrer.href)), T(d), f(d), d.headersList.contains("user-agent") || d.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === d.cache && (d.headersList.contains("if-modified-since") || d.headersList.contains("if-none-match") || d.headersList.contains("if-unmodified-since") || d.headersList.contains("if-match") || d.headersList.contains("if-range")) && (d.cache = "no-store"), "no-cache" !== d.cache || d.preventNoCacheCacheControlHeaderModification || d.headersList.contains("cache-control") || d.headersList.append("cache-control", "max-age=0"), "no-store" !== d.cache && "reload" !== d.cache || (d.headersList.contains("pragma") || d.headersList.append("pragma", "no-cache"), d.headersList.contains("cache-control") || d.headersList.append("cache-control", "no-cache")), d.headersList.contains("range") && d.headersList.append("accept-encoding", "identity"), d.headersList.contains("accept-encoding") || (P(I(d)) ? d.headersList.append("accept-encoding", "br, gzip, deflate") : d.headersList.append("accept-encoding", "gzip, deflate")), d.headersList.delete("host"), d.cache = "no-store", "no-store" !== d.mode && d.mode, null == g) {
        if ("only-if-cached" === d.mode) return s("only if cached");
        const e = await async function(e) {
            V(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new Z("The operation was aborted.", "AbortError")));
                }
            };
            const n = e.request;
            let t = null;
            const r = e.timingInfo, l = null;
            null == l && (n.cache = "no-store");
            n.mode;
            let c = null;
            if (null == n.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != n.body) {
                const a = async function*(n) {
                    D(e) || (yield n, e.processRequestBodyChunkLength?.(n.byteLength));
                }, t = ()=>{
                    D(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, s = (n)=>{
                    D(e) || ("AbortError" === n.name ? e.controller.abort() : e.controller.terminate(n));
                };
                c = async function*() {
                    try {
                        for await (const e of n.body.stream)yield* a(e);
                        t();
                    } catch (e) {
                        s(e);
                    }
                }();
            }
            try {
                const { body: n, status: a, statusText: s, headersList: o, socket: r } = await p({
                    body: c
                });
                if (r) t = i({
                    status: a,
                    statusText: s,
                    headersList: o,
                    socket: r
                });
                else {
                    const r = n[Symbol.asyncIterator]();
                    e.controller.next = ()=>r.next(), t = i({
                        status: a,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (n) {
                return "AbortError" === n.name ? (e.controller.connection.destroy(), o(e, n)) : s(n);
            }
            const d = ()=>{
                e.controller.resume();
            }, g = (n)=>{
                e.controller.abort(n);
            };
            Ee || (Ee = require("./module-3774.js").ReadableStream);
            const u = new Ee({
                async start (n) {
                    e.controller.controller = n;
                },
                async pull (e) {
                    await d(e);
                },
                async cancel (e) {
                    await g(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function E(n) {
                w(e) ? (t.aborted = !0, se(u) && e.controller.controller.error(e.controller.serializedAbortReason)) : se(u) && e.controller.controller.error(new TypeError("terminated", {
                    cause: b(n) ? n : void 0
                })), e.controller.connection.destroy();
            }
            return t.body = {
                stream: u
            }, e.controller.on("terminated", E), e.controller.resume = async ()=>{
                for(;;){
                    let n, a;
                    try {
                        const { done: a, value: t } = await e.controller.next();
                        if (w(e)) break;
                        n = a ? void 0 : t;
                    } catch (t) {
                        e.controller.ended && !r.encodedBodySize ? n = void 0 : (n = t, a = !0);
                    }
                    if (void 0 === n) return F(e.controller.controller), void Ce(e, t);
                    if (r.decodedBodySize += n?.byteLength ?? 0, a) return void e.controller.terminate(n);
                    if (e.controller.controller.enqueue(new Uint8Array(n)), te(u)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, t;
            async function p({ body: a }) {
                const t = I(n), s = e.controller.dispatcher;
                return new Promise((o, i)=>s.dispatch({
                        path: t.pathname + t.search,
                        origin: t.origin,
                        method: n.method,
                        body: e.controller.dispatcher.isMockActive ? n.body && (n.body.source || n.body.stream) : a,
                        headers: n.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === n.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (n) {
                            const { connection: a } = e.controller;
                            a.destroyed ? n(new Z("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", n), this.abort = a.abort = n);
                        },
                        onHeaders (e, a, t, s) {
                            if (e < 200) return;
                            let r = [], i = "";
                            const l = new A;
                            if (Array.isArray(a)) for(let e = 0; e < a.length; e += 2){
                                const n = a[e + 0].toString("latin1"), t = a[e + 1].toString("latin1");
                                "content-encoding" === n.toLowerCase() ? r = t.toLowerCase().split(",").map((e)=>e.trim()) : "location" === n.toLowerCase() && (i = t), l[z].append(n, t);
                            }
                            else {
                                const e = Object.keys(a);
                                for (const n of e){
                                    const e = a[n];
                                    "content-encoding" === n.toLowerCase() ? r = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === n.toLowerCase() && (i = e), l[z].append(n, e);
                                }
                            }
                            this.body = new ee({
                                read: t
                            });
                            const c = [], d = "follow" === n.redirect && i && H.has(e);
                            if ("HEAD" !== n.method && "CONNECT" !== n.method && !W.includes(e) && !d) for (const e of r)if ("x-gzip" === e || "gzip" === e) c.push(m.createGunzip({
                                flush: m.constants.Z_SYNC_FLUSH,
                                finishFlush: m.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) c.push(m.createInflate());
                            else {
                                if ("br" !== e) {
                                    c.length = 0;
                                    break;
                                }
                                c.push(m.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: s,
                                headersList: l[z],
                                body: c.length ? ne(this.body, ...c, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (n) {
                            if (e.controller.dump) return;
                            const a = n;
                            return r.encodedBodySize += a.byteLength, this.body.push(a);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (n) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(n), e.controller.terminate(n), i(n);
                        },
                        onUpgrade (e, n, a) {
                            if (101 !== e) return;
                            const t = new A;
                            for(let e = 0; e < n.length; e += 2){
                                const a = n[e + 0].toString("latin1"), s = n[e + 1].toString("latin1");
                                t[z].append(a, s);
                            }
                            return o({
                                status: e,
                                statusText: de[e],
                                headersList: t[z],
                                socket: a
                            }), !0;
                        }
                    }));
            }
        }(l, u, t);
        !K.has(d.method) && e.status >= 200 && e.status, null == g && (g = e);
    }
    if (g.urlList = [
        ...d.urlList
    ], d.headersList.contains("range") && (g.rangeRequested = !0), g.requestIncludesCredentials = u, 407 === g.status) return "no-window" === r.window ? s() : D(e) ? o(e) : s("proxy authentication required");
    if (421 === g.status && !t && (null == r.body || null != r.body.source)) {
        if (D(e)) return o(e);
        e.controller.connection.destroy(), g = await Qe(e, n, !0);
    }
    return g;
}
module.exports = {
    fetch: function(e, n = {}) {
        me.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const a = N();
        let s;
        try {
            s = new l(e, n);
        } catch (e) {
            return a.reject(e), a.promise;
        }
        const o = s[x];
        if (s.signal.aborted) return ke(a, o, null, s.signal.reason), a.promise;
        const r = o.client.globalObject;
        "ServiceWorkerGlobalScope" === r?.constructor?.name && (o.serviceWorkers = "none");
        let i = null, A = !1, c = null;
        return ae(s.signal, ()=>{
            A = !0, V(null != c), c.abort(s.signal.reason), ke(a, o, i, s.signal.reason);
        }), c = Ie({
            request: o,
            processResponseEndOfBody: (e)=>Te(e, "fetch"),
            processResponse: (e)=>A ? Promise.resolve() : e.aborted ? (ke(a, o, i, c.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (a.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (i = new t, i[x] = e, i[J] = null, i[G][z] = e.headersList, i[G][Y] = "immutable", i[G][J] = null, void a.resolve(i)),
            dispatcher: n.dispatcher ?? ce()
        }), a.promise;
    },
    Fetch: pe,
    fetching: Ie,
    finalizeAndReportTiming: Te
};
