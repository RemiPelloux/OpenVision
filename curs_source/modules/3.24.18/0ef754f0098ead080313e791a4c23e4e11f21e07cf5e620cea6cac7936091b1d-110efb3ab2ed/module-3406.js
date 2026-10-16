"use strict";
const { Response: t, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: r, makeResponse: i } = require("./module-1099.js"), { Headers: l } = require("./module-2932.js"), { Request: d, makeRequest: m } = require("./module-2239.js"), c = require("./module-3106.js"), { bytesMatch: p, makePolicyContainer: A, clonePolicyContainer: u, requestBadPort: g, TAOCheck: T, appendRequestOriginHeader: h, responseLocationURL: k, requestCurrentURL: _, setRequestReferrerPolicyOnRedirect: E, tryUpgradeRequestToAPotentiallyTrustworthyURL: f, createOpaqueTimingInfo: C, appendFetchMetadata: I, corsCheck: v, crossOriginResourcePolicyCheck: y, determineRequestsReferrer: S, coarsenedSharedCurrentTime: R, createDeferredPromise: N, isBlobLike: B, sameOrigin: w, isCancelled: b, isAborted: Q, isErrorLike: D, fullyReadBody: M, readableStreamClose: O, isomorphicEncode: U, urlIsLocal: F, urlIsHttpHttpsScheme: P, urlHasHttpsScheme: L } = require("./module-5728.js"), { kState: G, kHeaders: x, kGuard: V, kRealm: Y } = require("./module-5899.js"), q = require("./module-2613.js"), { safelyExtractBody: H } = require("./module-7052.js"), { redirectStatusSet: J, nullBodyStatus: W, safeMethodsSet: K, requestBodyHeader: j, subresourceSet: $, DOMException: X } = require("./module-6687.js"), { kHeadersList: z } = require("./module-8832.js"), Z = require("./module-4434.js"), { Readable: ee, pipeline: ae } = require("./module-2203.js"), { addAbortListener: ne, isErrored: te, isReadable: se, nodeMajor: oe, nodeMinor: re } = require("./module-9361.js"), { dataURLProcessor: ie, serializeAMimeType: le } = require("./module-3631.js"), { TransformStream: de } = require("./module-3774.js"), { getGlobalDispatcher: me } = require("./module-7362.js"), { webidl: ce } = require("./module-8005.js"), { STATUS_CODES: pe } = require("./module-8611.js"), Ae = [
    "GET",
    "HEAD"
];
let ue, ge = globalThis.ReadableStream;
class Te extends Z {
    constructor(e){
        super(), this.dispatcher = e, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(e) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e), this.emit("terminated", e));
    }
    abort(e) {
        "ongoing" === this.state && (this.state = "aborted", e || (e = new X("The operation was aborted.", "AbortError")), this.serializedAbortReason = e, this.connection?.destroy(e), this.emit("terminated", e));
    }
}
function he(e, a = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const n = e.urlList[0];
    let t = e.timingInfo, s = e.cacheState;
    P(n) && null !== t && (e.timingAllowPassed || (t = C({
        startTime: t.startTime
    }), s = ""), t.endTime = R(), e.timingInfo = t, function(e, a, n, t, s) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e, a.href, n, t, s);
    }(t, n, a, globalThis, s));
}
function ke(e, a, n, t) {
    if (t || (t = new X("The operation was aborted.", "AbortError")), e.reject(t), null != a.body && se(a.body?.stream) && a.body.stream.cancel(t).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == n) return;
    const s = n[G];
    null != s.body && se(s.body?.stream) && s.body.stream.cancel(t).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function _e({ request: e, processRequestBodyChunkLength: a, processRequestEndOfBody: n, processResponse: t, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: r = !1, dispatcher: i }) {
    let l = null, d = !1;
    null != e.client && (l = e.client.globalObject, d = e.client.crossOriginIsolatedCapability);
    const m = R(d), c = C({
        startTime: m
    }), p = {
        controller: new Te(i),
        request: e,
        timingInfo: c,
        processRequestBodyChunkLength: a,
        processRequestEndOfBody: n,
        processResponse: t,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: l,
        crossOriginIsolatedCapability: d
    };
    if (q(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = u(e.client.policyContainer) : e.policyContainer = A()), !e.headersList.contains("accept")) {
        const a = "*/*";
        e.headersList.append("accept", a);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, $.has(e.destination), Ee(p).catch((e)=>{
        p.controller.terminate(e);
    }), p.controller;
}
async function Ee(e, a = !1) {
    const n = e.request;
    let t = null;
    if (n.localURLsOnly && !F(_(n)) && (t = s("local URLs only")), f(n), "blocked" === g(n) && (t = s("bad port")), "" === n.referrerPolicy && (n.referrerPolicy = n.policyContainer.referrerPolicy), "no-referrer" !== n.referrer && (n.referrer = S(n)), null === t && (t = await (async ()=>{
        const a = _(n);
        return w(a, n.url) && "basic" === n.responseTainting || "data:" === a.protocol || "navigate" === n.mode || "websocket" === n.mode ? (n.responseTainting = "basic", await fe(e)) : "same-origin" === n.mode ? s('request mode cannot be "same-origin"') : "no-cors" === n.mode ? "follow" !== n.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (n.responseTainting = "opaque", await fe(e)) : P(_(n)) ? (n.responseTainting = "cors", await ve(e)) : s("URL scheme must be a HTTP(S) scheme");
    })()), a) return t;
    0 === t.status || t.internalResponse || (n.responseTainting, "basic" === n.responseTainting ? t = r(t, "basic") : "cors" === n.responseTainting ? t = r(t, "cors") : "opaque" === n.responseTainting ? t = r(t, "opaque") : q(!1));
    let o = 0 === t.status ? t : t.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...n.urlList), n.timingAllowFailed || (t.timingAllowPassed = !0), "opaque" === t.type && 206 === o.status && o.rangeRequested && !n.headers.contains("range") && (t = o = s()), 0 === t.status || "HEAD" !== n.method && "CONNECT" !== n.method && !W.includes(o.status) || (o.body = null, e.controller.dump = !0), n.integrity) {
        const a = (a)=>Ie(e, s(a));
        if ("opaque" === n.responseTainting || null == t.body) return void a(t.error);
        const o = (s)=>{
            p(s, n.integrity) ? (t.body = H(s)[0], Ie(e, t)) : a("integrity mismatch");
        };
        await M(t.body, o, a);
    } else Ie(e, t);
}
function fe(e) {
    if (b(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: a } = e, { protocol: t } = _(a);
    switch(t){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                ue || (ue = require("./module-181.js").resolveObjectURL);
                const e = _(a);
                if (0 !== e.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const t = ue(e.toString());
                if ("GET" !== a.method || !B(t)) return Promise.resolve(s("invalid method"));
                const o = H(t), r = o[0], l = U(`${r.length}`), d = o[1] ?? "", m = i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: l
                            }
                        ],
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: d
                            }
                        ]
                    ]
                });
                return m.body = r, Promise.resolve(m);
            }
        case "data:":
            {
                const e = _(a), n = ie(e);
                if ("failure" === n) return Promise.resolve(s("failed to fetch the data URL"));
                const t = le(n.mimeType);
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
                    body: H(n.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
            return ve(e).catch((e)=>s(e));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function Ce(e, a) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(a));
}
function Ie(e, a) {
    "error" === a.type && (a.urlList = [
        e.request.urlList[0]
    ], a.timingInfo = C({
        startTime: e.timingInfo.startTime
    }));
    const n = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(a));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(a)), null == a.body) n();
    else {
        const e = (e, a)=>{
            a.enqueue(e);
        }, t = new de({
            start () {},
            transform: e,
            flush: n
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        a.body = {
            stream: a.body.stream.pipeThrough(t)
        };
    }
    if (null != e.processResponseConsumeBody) {
        const n = (n)=>e.processResponseConsumeBody(a, n), t = (n)=>e.processResponseConsumeBody(a, n);
        return null != a.body ? M(a.body, n, t) : (queueMicrotask(()=>n(null)), Promise.resolve());
    }
}
async function ve(e) {
    const a = e.request;
    let n = null, t = null;
    const o = e.timingInfo;
    if (a.serviceWorkers, null === n) {
        if ("follow" === a.redirect && (a.serviceWorkers = "none"), t = n = await ye(e), "cors" === a.responseTainting && "failure" === v(a, n)) return s("cors failure");
        "failure" === T(a, n) && (a.timingAllowFailed = !0);
    }
    return "opaque" !== a.responseTainting && "opaque" !== n.type || "blocked" !== y(a.origin, a.client, a.destination, t) ? (J.has(t.status) && ("manual" !== a.redirect && e.controller.connection.destroy(), "error" === a.redirect ? n = s("unexpected redirect") : "manual" === a.redirect ? n = t : "follow" === a.redirect ? n = await function(e, a) {
        const n = e.request, t = a.internalResponse ? a.internalResponse : a;
        let o;
        try {
            if (o = k(t, _(n).hash), null == o) return a;
        } catch (e) {
            return Promise.resolve(s(e));
        }
        if (!P(o)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === n.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (n.redirectCount += 1, "cors" === n.mode && (o.username || o.password) && !w(n, o)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === n.responseTainting && (o.username || o.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== t.status && null != n.body && null == n.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(t.status) && "POST" === n.method || 303 === t.status && !Ae.includes(n.method)) {
            n.method = "GET", n.body = null;
            for (const e of j)n.headersList.delete(e);
        }
        w(_(n), o) || (n.headersList.delete("authorization"), n.headersList.delete("proxy-authorization", !0), n.headersList.delete("cookie"), n.headersList.delete("host"));
        null != n.body && (q(null != n.body.source), n.body = H(n.body.source)[0]);
        const r = e.timingInfo;
        r.redirectEndTime = r.postRedirectStartTime = R(e.crossOriginIsolatedCapability), 0 === r.redirectStartTime && (r.redirectStartTime = r.startTime);
        return n.urlList.push(o), E(n, t), Ee(e, !0);
    }(e, n) : q(!1)), n.timingInfo = o, n) : s("blocked");
}
async function ye(e, a = !1, t = !1) {
    const r = e.request;
    let d = null, p = null, A = null;
    "no-window" === r.window && "error" === r.redirect ? (d = e, p = r) : (p = m(r), d = {
        ...e
    }, d.request = p);
    const u = "include" === r.credentials || "same-origin" === r.credentials && "basic" === r.responseTainting, g = p.body ? p.body.length : null;
    let T = null;
    if (null == p.body && [
        "POST",
        "PUT"
    ].includes(p.method) && (T = "0"), null != g && (T = U(`${g}`)), null != T && p.headersList.append("content-length", T), null != g && p.keepalive, p.referrer instanceof URL && p.headersList.append("referer", U(p.referrer.href)), h(p), I(p), p.headersList.contains("user-agent") || p.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === p.cache && (p.headersList.contains("if-modified-since") || p.headersList.contains("if-none-match") || p.headersList.contains("if-unmodified-since") || p.headersList.contains("if-match") || p.headersList.contains("if-range")) && (p.cache = "no-store"), "no-cache" !== p.cache || p.preventNoCacheCacheControlHeaderModification || p.headersList.contains("cache-control") || p.headersList.append("cache-control", "max-age=0"), "no-store" !== p.cache && "reload" !== p.cache || (p.headersList.contains("pragma") || p.headersList.append("pragma", "no-cache"), p.headersList.contains("cache-control") || p.headersList.append("cache-control", "no-cache")), p.headersList.contains("range") && p.headersList.append("accept-encoding", "identity"), p.headersList.contains("accept-encoding") || (L(_(p)) ? p.headersList.append("accept-encoding", "br, gzip, deflate") : p.headersList.append("accept-encoding", "gzip, deflate")), p.headersList.delete("host"), p.cache = "no-store", "no-store" !== p.mode && p.mode, null == A) {
        if ("only-if-cached" === p.mode) return s("only if cached");
        const e = await async function(e) {
            q(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new X("The operation was aborted.", "AbortError")));
                }
            };
            const a = e.request;
            let t = null;
            const r = e.timingInfo, d = null;
            null == d && (a.cache = "no-store");
            a.mode;
            let m = null;
            if (null == a.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != a.body) {
                const n = async function*(a) {
                    b(e) || (yield a, e.processRequestBodyChunkLength?.(a.byteLength));
                }, t = ()=>{
                    b(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, s = (a)=>{
                    b(e) || ("AbortError" === a.name ? e.controller.abort() : e.controller.terminate(a));
                };
                m = async function*() {
                    try {
                        for await (const e of a.body.stream)yield* n(e);
                        t();
                    } catch (e) {
                        s(e);
                    }
                }();
            }
            try {
                const { body: a, status: n, statusText: s, headersList: o, socket: r } = await T({
                    body: m
                });
                if (r) t = i({
                    status: n,
                    statusText: s,
                    headersList: o,
                    socket: r
                });
                else {
                    const r = a[Symbol.asyncIterator]();
                    e.controller.next = ()=>r.next(), t = i({
                        status: n,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (a) {
                return "AbortError" === a.name ? (e.controller.connection.destroy(), o(e, a)) : s(a);
            }
            const p = ()=>{
                e.controller.resume();
            }, A = (a)=>{
                e.controller.abort(a);
            };
            ge || (ge = require("./module-3774.js").ReadableStream);
            const u = new ge({
                async start (a) {
                    e.controller.controller = a;
                },
                async pull (e) {
                    await p(e);
                },
                async cancel (e) {
                    await A(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function g(a) {
                Q(e) ? (t.aborted = !0, se(u) && e.controller.controller.error(e.controller.serializedAbortReason)) : se(u) && e.controller.controller.error(new TypeError("terminated", {
                    cause: D(a) ? a : void 0
                })), e.controller.connection.destroy();
            }
            return t.body = {
                stream: u
            }, e.controller.on("terminated", g), e.controller.resume = async ()=>{
                for(;;){
                    let a, n;
                    try {
                        const { done: n, value: t } = await e.controller.next();
                        if (Q(e)) break;
                        a = n ? void 0 : t;
                    } catch (t) {
                        e.controller.ended && !r.encodedBodySize ? a = void 0 : (a = t, n = !0);
                    }
                    if (void 0 === a) return O(e.controller.controller), void Ce(e, t);
                    if (r.decodedBodySize += a?.byteLength ?? 0, n) return void e.controller.terminate(a);
                    if (e.controller.controller.enqueue(new Uint8Array(a)), te(u)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, t;
            async function T({ body: n }) {
                const t = _(a), s = e.controller.dispatcher;
                return new Promise((o, i)=>s.dispatch({
                        path: t.pathname + t.search,
                        origin: t.origin,
                        method: a.method,
                        body: e.controller.dispatcher.isMockActive ? a.body && (a.body.source || a.body.stream) : n,
                        headers: a.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === a.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (a) {
                            const { connection: n } = e.controller;
                            n.destroyed ? a(new X("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", a), this.abort = n.abort = a);
                        },
                        onHeaders (e, n, t, s) {
                            if (e < 200) return;
                            let r = [], i = "";
                            const d = new l;
                            if (Array.isArray(n)) for(let e = 0; e < n.length; e += 2){
                                const a = n[e + 0].toString("latin1"), t = n[e + 1].toString("latin1");
                                "content-encoding" === a.toLowerCase() ? r = t.toLowerCase().split(",").map((e)=>e.trim()) : "location" === a.toLowerCase() && (i = t), d[z].append(a, t);
                            }
                            else {
                                const e = Object.keys(n);
                                for (const a of e){
                                    const e = n[a];
                                    "content-encoding" === a.toLowerCase() ? r = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === a.toLowerCase() && (i = e), d[z].append(a, e);
                                }
                            }
                            this.body = new ee({
                                read: t
                            });
                            const m = [], p = "follow" === a.redirect && i && J.has(e);
                            if ("HEAD" !== a.method && "CONNECT" !== a.method && !W.includes(e) && !p) for (const e of r)if ("x-gzip" === e || "gzip" === e) m.push(c.createGunzip({
                                flush: c.constants.Z_SYNC_FLUSH,
                                finishFlush: c.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) m.push(c.createInflate());
                            else {
                                if ("br" !== e) {
                                    m.length = 0;
                                    break;
                                }
                                m.push(c.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: s,
                                headersList: d[z],
                                body: m.length ? ae(this.body, ...m, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (a) {
                            if (e.controller.dump) return;
                            const n = a;
                            return r.encodedBodySize += n.byteLength, this.body.push(n);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (a) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(a), e.controller.terminate(a), i(a);
                        },
                        onUpgrade (e, a, n) {
                            if (101 !== e) return;
                            const t = new l;
                            for(let e = 0; e < a.length; e += 2){
                                const n = a[e + 0].toString("latin1"), s = a[e + 1].toString("latin1");
                                t[z].append(n, s);
                            }
                            return o({
                                status: e,
                                statusText: pe[e],
                                headersList: t[z],
                                socket: n
                            }), !0;
                        }
                    }));
            }
        }(d, u, t);
        !K.has(p.method) && e.status >= 200 && e.status, null == A && (A = e);
    }
    if (A.urlList = [
        ...p.urlList
    ], p.headersList.contains("range") && (A.rangeRequested = !0), A.requestIncludesCredentials = u, 407 === A.status) return "no-window" === r.window ? s() : b(e) ? o(e) : s("proxy authentication required");
    if (421 === A.status && !t && (null == r.body || null != r.body.source)) {
        if (b(e)) return o(e);
        e.controller.connection.destroy(), A = await ye(e, a, !0);
    }
    return A;
}
module.exports = {
    fetch: function(e, a = {}) {
        ce.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const n = N();
        let s;
        try {
            s = new d(e, a);
        } catch (e) {
            return n.reject(e), n.promise;
        }
        const o = s[G];
        if (s.signal.aborted) return ke(n, o, null, s.signal.reason), n.promise;
        const r = o.client.globalObject;
        "ServiceWorkerGlobalScope" === r?.constructor?.name && (o.serviceWorkers = "none");
        let i = null, l = !1, m = null;
        return ne(s.signal, ()=>{
            l = !0, q(null != m), m.abort(s.signal.reason), ke(n, o, i, s.signal.reason);
        }), m = _e({
            request: o,
            processResponseEndOfBody: (e)=>he(e, "fetch"),
            processResponse: (e)=>l ? Promise.resolve() : e.aborted ? (ke(n, o, i, m.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (n.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (i = new t, i[G] = e, i[Y] = null, i[x][z] = e.headersList, i[x][V] = "immutable", i[x][Y] = null, void n.resolve(i)),
            dispatcher: a.dispatcher ?? me()
        }), n.promise;
    },
    Fetch: Te,
    fetching: _e,
    finalizeAndReportTiming: he
};
