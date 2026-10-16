"use strict";
const { Response: n, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: i, makeResponse: a } = require("./module-53511.js"), { Headers: c } = require("./module-72848.js"), { Request: l, makeRequest: u } = require("./module-30547.js"), d = require("./module-43106.js"), { bytesMatch: p, makePolicyContainer: m, clonePolicyContainer: h, requestBadPort: f, TAOCheck: g, appendRequestOriginHeader: y, responseLocationURL: w, requestCurrentURL: v, setRequestReferrerPolicyOnRedirect: _, tryUpgradeRequestToAPotentiallyTrustworthyURL: A, createOpaqueTimingInfo: S, appendFetchMetadata: b, corsCheck: E, crossOriginResourcePolicyCheck: I, determineRequestsReferrer: C, coarsenedSharedCurrentTime: k, createDeferredPromise: x, isBlobLike: T, sameOrigin: R, isCancelled: B, isAborted: P, isErrorLike: J, fullyReadBody: M, readableStreamClose: q, isomorphicEncode: D, urlIsLocal: O, urlIsHttpHttpsScheme: N, urlHasHttpsScheme: F } = require("./module-98116.js"), { kState: U, kHeaders: L, kGuard: $, kRealm: Q } = require("./module-77271.js"), j = require("./module-42613.js"), { safelyExtractBody: G } = require("./module-29608.js"), { redirectStatusSet: H, nullBodyStatus: z, safeMethodsSet: W, requestBodyHeader: V, subresourceSet: K, DOMException: Y } = require("./module-22955.js"), { kHeadersList: Z } = require("./module-15532.js"), X = require("./module-24434.js"), { Readable: ee, pipeline: te } = require("./module-2203.js"), { addAbortListener: re, isErrored: ne, isReadable: se, nodeMajor: oe, nodeMinor: ie } = require("./module-83589.js"), { dataURLProcessor: ae, serializeAMimeType: ce } = require("./module-64387.js"), { TransformStream: le } = require("./module-63774.js"), { getGlobalDispatcher: ue } = require("./module-17582.js"), { webidl: de } = require("./module-18193.js"), { STATUS_CODES: pe } = require("./module-58611.js"), me = [
    "GET",
    "HEAD"
];
let he, fe = globalThis.ReadableStream;
class ge extends X {
    constructor(e){
        super(), this.dispatcher = e, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(e) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e), this.emit("terminated", e));
    }
    abort(e) {
        "ongoing" === this.state && (this.state = "aborted", e || (e = new Y("The operation was aborted.", "AbortError")), this.serializedAbortReason = e, this.connection?.destroy(e), this.emit("terminated", e));
    }
}
function ye(e, t = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const r = e.urlList[0];
    let n = e.timingInfo, s = e.cacheState;
    N(r) && null !== n && (e.timingAllowPassed || (n = S({
        startTime: n.startTime
    }), s = ""), n.endTime = k(), e.timingInfo = n, function(e, t, r, n, s) {
        (oe > 18 || 18 === oe && ie >= 2) && performance.markResourceTiming(e, t.href, r, n, s);
    }(n, r, t, globalThis, s));
}
function we(e, t, r, n) {
    if (n || (n = new Y("The operation was aborted.", "AbortError")), e.reject(n), null != t.body && se(t.body?.stream) && t.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == r) return;
    const s = r[U];
    null != s.body && se(s.body?.stream) && s.body.stream.cancel(n).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function ve({ request: e, processRequestBodyChunkLength: t, processRequestEndOfBody: r, processResponse: n, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: i = !1, dispatcher: a }) {
    let c = null, l = !1;
    null != e.client && (c = e.client.globalObject, l = e.client.crossOriginIsolatedCapability);
    const u = k(l), d = S({
        startTime: u
    }), p = {
        controller: new ge(a),
        request: e,
        timingInfo: d,
        processRequestBodyChunkLength: t,
        processRequestEndOfBody: r,
        processResponse: n,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: c,
        crossOriginIsolatedCapability: l
    };
    if (j(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = h(e.client.policyContainer) : e.policyContainer = m()), !e.headersList.contains("accept")) {
        const t = "*/*";
        e.headersList.append("accept", t);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, K.has(e.destination), _e(p).catch((e)=>{
        p.controller.terminate(e);
    }), p.controller;
}
async function _e(e, t = !1) {
    const r = e.request;
    let n = null;
    if (r.localURLsOnly && !O(v(r)) && (n = s("local URLs only")), A(r), "blocked" === f(r) && (n = s("bad port")), "" === r.referrerPolicy && (r.referrerPolicy = r.policyContainer.referrerPolicy), "no-referrer" !== r.referrer && (r.referrer = C(r)), null === n && (n = await (async ()=>{
        const t = v(r);
        return R(t, r.url) && "basic" === r.responseTainting || "data:" === t.protocol || "navigate" === r.mode || "websocket" === r.mode ? (r.responseTainting = "basic", await Ae(e)) : "same-origin" === r.mode ? s('request mode cannot be "same-origin"') : "no-cors" === r.mode ? "follow" !== r.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (r.responseTainting = "opaque", await Ae(e)) : N(v(r)) ? (r.responseTainting = "cors", await Ee(e)) : s("URL scheme must be a HTTP(S) scheme");
    })()), t) return n;
    0 === n.status || n.internalResponse || (r.responseTainting, "basic" === r.responseTainting ? n = i(n, "basic") : "cors" === r.responseTainting ? n = i(n, "cors") : "opaque" === r.responseTainting ? n = i(n, "opaque") : j(!1));
    let o = 0 === n.status ? n : n.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...r.urlList), r.timingAllowFailed || (n.timingAllowPassed = !0), "opaque" === n.type && 206 === o.status && o.rangeRequested && !r.headers.contains("range") && (n = o = s()), 0 === n.status || "HEAD" !== r.method && "CONNECT" !== r.method && !z.includes(o.status) || (o.body = null, e.controller.dump = !0), r.integrity) {
        const t = (t)=>be(e, s(t));
        if ("opaque" === r.responseTainting || null == n.body) return void t(n.error);
        const o = (s)=>{
            p(s, r.integrity) ? (n.body = G(s)[0], be(e, n)) : t("integrity mismatch");
        };
        await M(n.body, o, t);
    } else be(e, n);
}
function Ae(e) {
    if (B(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: t } = e, { protocol: n } = v(t);
    switch(n){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                he || (he = require("./module-20181.js").resolveObjectURL);
                const e = v(t);
                if (0 !== e.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const n = he(e.toString());
                if ("GET" !== t.method || !T(n)) return Promise.resolve(s("invalid method"));
                const o = G(n), i = o[0], c = D(`${i.length}`), l = o[1] ?? "", u = a({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: c
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
                return u.body = i, Promise.resolve(u);
            }
        case "data:":
            {
                const e = v(t), r = ae(e);
                if ("failure" === r) return Promise.resolve(s("failed to fetch the data URL"));
                const n = ce(r.mimeType);
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
                    body: G(r.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
            return Ee(e).catch((e)=>s(e));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function Se(e, t) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(t));
}
function be(e, t) {
    "error" === t.type && (t.urlList = [
        e.request.urlList[0]
    ], t.timingInfo = S({
        startTime: e.timingInfo.startTime
    }));
    const r = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(t));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(t)), null == t.body) r();
    else {
        const e = (e, t)=>{
            t.enqueue(e);
        }, n = new le({
            start () {},
            transform: e,
            flush: r
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
        const r = (r)=>e.processResponseConsumeBody(t, r), n = (r)=>e.processResponseConsumeBody(t, r);
        return null != t.body ? M(t.body, r, n) : (queueMicrotask(()=>r(null)), Promise.resolve());
    }
}
async function Ee(e) {
    const t = e.request;
    let r = null, n = null;
    const o = e.timingInfo;
    if (t.serviceWorkers, null === r) {
        if ("follow" === t.redirect && (t.serviceWorkers = "none"), n = r = await Ie(e), "cors" === t.responseTainting && "failure" === E(t, r)) return s("cors failure");
        "failure" === g(t, r) && (t.timingAllowFailed = !0);
    }
    return "opaque" !== t.responseTainting && "opaque" !== r.type || "blocked" !== I(t.origin, t.client, t.destination, n) ? (H.has(n.status) && ("manual" !== t.redirect && e.controller.connection.destroy(), "error" === t.redirect ? r = s("unexpected redirect") : "manual" === t.redirect ? r = n : "follow" === t.redirect ? r = await function(e, t) {
        const r = e.request, n = t.internalResponse ? t.internalResponse : t;
        let o;
        try {
            if (o = w(n, v(r).hash), null == o) return t;
        } catch (e) {
            return Promise.resolve(s(e));
        }
        if (!N(o)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === r.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (r.redirectCount += 1, "cors" === r.mode && (o.username || o.password) && !R(r, o)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === r.responseTainting && (o.username || o.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n.status && null != r.body && null == r.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(n.status) && "POST" === r.method || 303 === n.status && !me.includes(r.method)) {
            r.method = "GET", r.body = null;
            for (const e of V)r.headersList.delete(e);
        }
        R(v(r), o) || (r.headersList.delete("authorization"), r.headersList.delete("proxy-authorization", !0), r.headersList.delete("cookie"), r.headersList.delete("host"));
        null != r.body && (j(null != r.body.source), r.body = G(r.body.source)[0]);
        const i = e.timingInfo;
        i.redirectEndTime = i.postRedirectStartTime = k(e.crossOriginIsolatedCapability), 0 === i.redirectStartTime && (i.redirectStartTime = i.startTime);
        return r.urlList.push(o), _(r, n), _e(e, !0);
    }(e, r) : j(!1)), r.timingInfo = o, r) : s("blocked");
}
async function Ie(e, t = !1, n = !1) {
    const i = e.request;
    let l = null, p = null, m = null;
    "no-window" === i.window && "error" === i.redirect ? (l = e, p = i) : (p = u(i), l = {
        ...e
    }, l.request = p);
    const h = "include" === i.credentials || "same-origin" === i.credentials && "basic" === i.responseTainting, f = p.body ? p.body.length : null;
    let g = null;
    if (null == p.body && [
        "POST",
        "PUT"
    ].includes(p.method) && (g = "0"), null != f && (g = D(`${f}`)), null != g && p.headersList.append("content-length", g), null != f && p.keepalive, p.referrer instanceof URL && p.headersList.append("referer", D(p.referrer.href)), y(p), b(p), p.headersList.contains("user-agent") || p.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === p.cache && (p.headersList.contains("if-modified-since") || p.headersList.contains("if-none-match") || p.headersList.contains("if-unmodified-since") || p.headersList.contains("if-match") || p.headersList.contains("if-range")) && (p.cache = "no-store"), "no-cache" !== p.cache || p.preventNoCacheCacheControlHeaderModification || p.headersList.contains("cache-control") || p.headersList.append("cache-control", "max-age=0"), "no-store" !== p.cache && "reload" !== p.cache || (p.headersList.contains("pragma") || p.headersList.append("pragma", "no-cache"), p.headersList.contains("cache-control") || p.headersList.append("cache-control", "no-cache")), p.headersList.contains("range") && p.headersList.append("accept-encoding", "identity"), p.headersList.contains("accept-encoding") || (F(v(p)) ? p.headersList.append("accept-encoding", "br, gzip, deflate") : p.headersList.append("accept-encoding", "gzip, deflate")), p.headersList.delete("host"), p.cache = "no-store", "no-store" !== p.mode && p.mode, null == m) {
        if ("only-if-cached" === p.mode) return s("only if cached");
        const e = await async function(e) {
            j(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new Y("The operation was aborted.", "AbortError")));
                }
            };
            const t = e.request;
            let n = null;
            const i = e.timingInfo, l = null;
            null == l && (t.cache = "no-store");
            t.mode;
            let u = null;
            if (null == t.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != t.body) {
                const r = async function*(t) {
                    B(e) || (yield t, e.processRequestBodyChunkLength?.(t.byteLength));
                }, n = ()=>{
                    B(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, s = (t)=>{
                    B(e) || ("AbortError" === t.name ? e.controller.abort() : e.controller.terminate(t));
                };
                u = async function*() {
                    try {
                        for await (const e of t.body.stream)yield* r(e);
                        n();
                    } catch (e) {
                        s(e);
                    }
                }();
            }
            try {
                const { body: t, status: r, statusText: s, headersList: o, socket: i } = await g({
                    body: u
                });
                if (i) n = a({
                    status: r,
                    statusText: s,
                    headersList: o,
                    socket: i
                });
                else {
                    const i = t[Symbol.asyncIterator]();
                    e.controller.next = ()=>i.next(), n = a({
                        status: r,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (t) {
                return "AbortError" === t.name ? (e.controller.connection.destroy(), o(e, t)) : s(t);
            }
            const p = ()=>{
                e.controller.resume();
            }, m = (t)=>{
                e.controller.abort(t);
            };
            fe || (fe = require("./module-63774.js").ReadableStream);
            const h = new fe({
                async start (t) {
                    e.controller.controller = t;
                },
                async pull (e) {
                    await p(e);
                },
                async cancel (e) {
                    await m(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function f(t) {
                P(e) ? (n.aborted = !0, se(h) && e.controller.controller.error(e.controller.serializedAbortReason)) : se(h) && e.controller.controller.error(new TypeError("terminated", {
                    cause: J(t) ? t : void 0
                })), e.controller.connection.destroy();
            }
            return n.body = {
                stream: h
            }, e.controller.on("terminated", f), e.controller.resume = async ()=>{
                for(;;){
                    let t, r;
                    try {
                        const { done: r, value: n } = await e.controller.next();
                        if (P(e)) break;
                        t = r ? void 0 : n;
                    } catch (n) {
                        e.controller.ended && !i.encodedBodySize ? t = void 0 : (t = n, r = !0);
                    }
                    if (void 0 === t) return q(e.controller.controller), void Se(e, n);
                    if (i.decodedBodySize += t?.byteLength ?? 0, r) return void e.controller.terminate(t);
                    if (e.controller.controller.enqueue(new Uint8Array(t)), ne(h)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, n;
            async function g({ body: r }) {
                const n = v(t), s = e.controller.dispatcher;
                return new Promise((o, a)=>s.dispatch({
                        path: n.pathname + n.search,
                        origin: n.origin,
                        method: t.method,
                        body: e.controller.dispatcher.isMockActive ? t.body && (t.body.source || t.body.stream) : r,
                        headers: t.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === t.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (t) {
                            const { connection: r } = e.controller;
                            r.destroyed ? t(new Y("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", t), this.abort = r.abort = t);
                        },
                        onHeaders (e, r, n, s) {
                            if (e < 200) return;
                            let i = [], a = "";
                            const l = new c;
                            if (Array.isArray(r)) for(let e = 0; e < r.length; e += 2){
                                const t = r[e + 0].toString("latin1"), n = r[e + 1].toString("latin1");
                                "content-encoding" === t.toLowerCase() ? i = n.toLowerCase().split(",").map((e)=>e.trim()) : "location" === t.toLowerCase() && (a = n), l[Z].append(t, n);
                            }
                            else {
                                const e = Object.keys(r);
                                for (const t of e){
                                    const e = r[t];
                                    "content-encoding" === t.toLowerCase() ? i = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === t.toLowerCase() && (a = e), l[Z].append(t, e);
                                }
                            }
                            this.body = new ee({
                                read: n
                            });
                            const u = [], p = "follow" === t.redirect && a && H.has(e);
                            if ("HEAD" !== t.method && "CONNECT" !== t.method && !z.includes(e) && !p) for (const e of i)if ("x-gzip" === e || "gzip" === e) u.push(d.createGunzip({
                                flush: d.constants.Z_SYNC_FLUSH,
                                finishFlush: d.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) u.push(d.createInflate());
                            else {
                                if ("br" !== e) {
                                    u.length = 0;
                                    break;
                                }
                                u.push(d.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: s,
                                headersList: l[Z],
                                body: u.length ? te(this.body, ...u, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (t) {
                            if (e.controller.dump) return;
                            const r = t;
                            return i.encodedBodySize += r.byteLength, this.body.push(r);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (t) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(t), e.controller.terminate(t), a(t);
                        },
                        onUpgrade (e, t, r) {
                            if (101 !== e) return;
                            const n = new c;
                            for(let e = 0; e < t.length; e += 2){
                                const r = t[e + 0].toString("latin1"), s = t[e + 1].toString("latin1");
                                n[Z].append(r, s);
                            }
                            return o({
                                status: e,
                                statusText: pe[e],
                                headersList: n[Z],
                                socket: r
                            }), !0;
                        }
                    }));
            }
        }(l, h, n);
        !W.has(p.method) && e.status >= 200 && e.status, null == m && (m = e);
    }
    if (m.urlList = [
        ...p.urlList
    ], p.headersList.contains("range") && (m.rangeRequested = !0), m.requestIncludesCredentials = h, 407 === m.status) return "no-window" === i.window ? s() : B(e) ? o(e) : s("proxy authentication required");
    if (421 === m.status && !n && (null == i.body || null != i.body.source)) {
        if (B(e)) return o(e);
        e.controller.connection.destroy(), m = await Ie(e, t, !0);
    }
    return m;
}
module.exports = {
    fetch: function(e, t = {}) {
        de.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const r = x();
        let s;
        try {
            s = new l(e, t);
        } catch (e) {
            return r.reject(e), r.promise;
        }
        const o = s[U];
        if (s.signal.aborted) return we(r, o, null, s.signal.reason), r.promise;
        const i = o.client.globalObject;
        "ServiceWorkerGlobalScope" === i?.constructor?.name && (o.serviceWorkers = "none");
        let a = null, c = !1, u = null;
        return re(s.signal, ()=>{
            c = !0, j(null != u), u.abort(s.signal.reason), we(r, o, a, s.signal.reason);
        }), u = ve({
            request: o,
            processResponseEndOfBody: (e)=>ye(e, "fetch"),
            processResponse: (e)=>c ? Promise.resolve() : e.aborted ? (we(r, o, a, u.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (r.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (a = new n, a[U] = e, a[Q] = null, a[L][Z] = e.headersList, a[L][$] = "immutable", a[L][Q] = null, void r.resolve(a)),
            dispatcher: t.dispatcher ?? ue()
        }), r.promise;
    },
    Fetch: ge,
    fetching: ve,
    finalizeAndReportTiming: ye
};
