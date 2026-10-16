"use strict";
const { Response: a, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: r, makeResponse: i } = require("./module-1099.js"), { Headers: A } = require("./module-2932.js"), { Request: c, makeRequest: l } = require("./module-2239.js"), d = require("./module-3106.js"), { bytesMatch: m, makePolicyContainer: u, clonePolicyContainer: g, requestBadPort: p, TAOCheck: E, appendRequestOriginHeader: h, responseLocationURL: T, requestCurrentURL: k, setRequestReferrerPolicyOnRedirect: f, tryUpgradeRequestToAPotentiallyTrustworthyURL: _, createOpaqueTimingInfo: I, appendFetchMetadata: C, corsCheck: y, crossOriginResourcePolicyCheck: B, determineRequestsReferrer: Q, coarsenedSharedCurrentTime: v, createDeferredPromise: R, isBlobLike: N, sameOrigin: S, isCancelled: w, isAborted: b, isErrorLike: D, fullyReadBody: M, readableStreamClose: F, isomorphicEncode: O, urlIsLocal: U, urlIsHttpHttpsScheme: L, urlHasHttpsScheme: P } = require("./module-5728.js"), { kState: x, kHeaders: G, kGuard: Y, kRealm: J } = require("./module-5899.js"), V = require("./module-2613.js"), { safelyExtractBody: q } = require("./module-7052.js"), { redirectStatusSet: H, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: K, subresourceSet: $, DOMException: X } = require("./module-6687.js"), { kHeadersList: Z } = require("./module-8832.js"), z = require("./module-4434.js"), { Readable: ee, pipeline: ne } = require("./module-2203.js"), { addAbortListener: te, isErrored: ae, isReadable: se, nodeMajor: oe, nodeMinor: re } = require("./module-9361.js"), { dataURLProcessor: ie, serializeAMimeType: Ae } = require("./module-3631.js"), { TransformStream: ce } = require("./module-3774.js"), { getGlobalDispatcher: le } = require("./module-7362.js"), { webidl: de } = require("./module-8005.js"), { STATUS_CODES: me } = require("./module-8611.js"), ue = [
    "GET",
    "HEAD"
];
let ge, pe = globalThis.ReadableStream;
class Ee extends z {
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
function he(e, n = "other") {
    if ("error" === e.type && e.aborted) return;
    if (!e.urlList?.length) return;
    const t = e.urlList[0];
    let a = e.timingInfo, s = e.cacheState;
    L(t) && null !== a && (e.timingAllowPassed || (a = I({
        startTime: a.startTime
    }), s = ""), a.endTime = v(), e.timingInfo = a, function(e, n, t, a, s) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e, n.href, t, a, s);
    }(a, t, n, globalThis, s));
}
function Te(e, n, t, a) {
    if (a || (a = new X("The operation was aborted.", "AbortError")), e.reject(a), null != n.body && se(n.body?.stream) && n.body.stream.cancel(a).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    }), null == t) return;
    const s = t[x];
    null != s.body && se(s.body?.stream) && s.body.stream.cancel(a).catch((e)=>{
        if ("ERR_INVALID_STATE" !== e.code) throw e;
    });
}
function ke({ request: e, processRequestBodyChunkLength: n, processRequestEndOfBody: t, processResponse: a, processResponseEndOfBody: s, processResponseConsumeBody: o, useParallelQueue: r = !1, dispatcher: i }) {
    let A = null, c = !1;
    null != e.client && (A = e.client.globalObject, c = e.client.crossOriginIsolatedCapability);
    const l = v(c), d = I({
        startTime: l
    }), m = {
        controller: new Ee(i),
        request: e,
        timingInfo: d,
        processRequestBodyChunkLength: n,
        processRequestEndOfBody: t,
        processResponse: a,
        processResponseConsumeBody: o,
        processResponseEndOfBody: s,
        taskDestination: A,
        crossOriginIsolatedCapability: c
    };
    if (V(!e.body || e.body.stream), "client" === e.window && (e.window = "Window" === e.client?.globalObject?.constructor?.name ? e.client : "no-window"), "client" === e.origin && (e.origin = e.client?.origin), "client" === e.policyContainer && (null != e.client ? e.policyContainer = g(e.client.policyContainer) : e.policyContainer = u()), !e.headersList.contains("accept")) {
        const n = "*/*";
        e.headersList.append("accept", n);
    }
    return e.headersList.contains("accept-language") || e.headersList.append("accept-language", "*"), e.priority, $.has(e.destination), fe(m).catch((e)=>{
        m.controller.terminate(e);
    }), m.controller;
}
async function fe(e, n = !1) {
    const t = e.request;
    let a = null;
    if (t.localURLsOnly && !U(k(t)) && (a = s("local URLs only")), _(t), "blocked" === p(t) && (a = s("bad port")), "" === t.referrerPolicy && (t.referrerPolicy = t.policyContainer.referrerPolicy), "no-referrer" !== t.referrer && (t.referrer = Q(t)), null === a && (a = await (async ()=>{
        const n = k(t);
        return S(n, t.url) && "basic" === t.responseTainting || "data:" === n.protocol || "navigate" === t.mode || "websocket" === t.mode ? (t.responseTainting = "basic", await _e(e)) : "same-origin" === t.mode ? s('request mode cannot be "same-origin"') : "no-cors" === t.mode ? "follow" !== t.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (t.responseTainting = "opaque", await _e(e)) : L(k(t)) ? (t.responseTainting = "cors", await ye(e)) : s("URL scheme must be a HTTP(S) scheme");
    })()), n) return a;
    0 === a.status || a.internalResponse || (t.responseTainting, "basic" === t.responseTainting ? a = r(a, "basic") : "cors" === t.responseTainting ? a = r(a, "cors") : "opaque" === t.responseTainting ? a = r(a, "opaque") : V(!1));
    let o = 0 === a.status ? a : a.internalResponse;
    if (0 === o.urlList.length && o.urlList.push(...t.urlList), t.timingAllowFailed || (a.timingAllowPassed = !0), "opaque" === a.type && 206 === o.status && o.rangeRequested && !t.headers.contains("range") && (a = o = s()), 0 === a.status || "HEAD" !== t.method && "CONNECT" !== t.method && !W.includes(o.status) || (o.body = null, e.controller.dump = !0), t.integrity) {
        const n = (n)=>Ce(e, s(n));
        if ("opaque" === t.responseTainting || null == a.body) return void n(a.error);
        const o = (s)=>{
            m(s, t.integrity) ? (a.body = q(s)[0], Ce(e, a)) : n("integrity mismatch");
        };
        await M(a.body, o, n);
    } else Ce(e, a);
}
function _e(e) {
    if (w(e) && 0 === e.request.redirectCount) return Promise.resolve(o(e));
    const { request: n } = e, { protocol: a } = k(n);
    switch(a){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                ge || (ge = require("./module-181.js").resolveObjectURL);
                const e = k(n);
                if (0 !== e.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const a = ge(e.toString());
                if ("GET" !== n.method || !N(a)) return Promise.resolve(s("invalid method"));
                const o = q(a), r = o[0], A = O(`${r.length}`), c = o[1] ?? "", l = i({
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
                                value: c
                            }
                        ]
                    ]
                });
                return l.body = r, Promise.resolve(l);
            }
        case "data:":
            {
                const e = k(n), t = ie(e);
                if ("failure" === t) return Promise.resolve(s("failed to fetch the data URL"));
                const a = Ae(t.mimeType);
                return Promise.resolve(i({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-type",
                            {
                                name: "Content-Type",
                                value: a
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
            return ye(e).catch((e)=>s(e));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function Ie(e, n) {
    e.request.done = !0, null != e.processResponseDone && queueMicrotask(()=>e.processResponseDone(n));
}
function Ce(e, n) {
    "error" === n.type && (n.urlList = [
        e.request.urlList[0]
    ], n.timingInfo = I({
        startTime: e.timingInfo.startTime
    }));
    const t = ()=>{
        e.request.done = !0, null != e.processResponseEndOfBody && queueMicrotask(()=>e.processResponseEndOfBody(n));
    };
    if (null != e.processResponse && queueMicrotask(()=>e.processResponse(n)), null == n.body) t();
    else {
        const e = (e, n)=>{
            n.enqueue(e);
        }, a = new ce({
            start () {},
            transform: e,
            flush: t
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        n.body = {
            stream: n.body.stream.pipeThrough(a)
        };
    }
    if (null != e.processResponseConsumeBody) {
        const t = (t)=>e.processResponseConsumeBody(n, t), a = (t)=>e.processResponseConsumeBody(n, t);
        return null != n.body ? M(n.body, t, a) : (queueMicrotask(()=>t(null)), Promise.resolve());
    }
}
async function ye(e) {
    const n = e.request;
    let t = null, a = null;
    const o = e.timingInfo;
    if (n.serviceWorkers, null === t) {
        if ("follow" === n.redirect && (n.serviceWorkers = "none"), a = t = await Be(e), "cors" === n.responseTainting && "failure" === y(n, t)) return s("cors failure");
        "failure" === E(n, t) && (n.timingAllowFailed = !0);
    }
    return "opaque" !== n.responseTainting && "opaque" !== t.type || "blocked" !== B(n.origin, n.client, n.destination, a) ? (H.has(a.status) && ("manual" !== n.redirect && e.controller.connection.destroy(), "error" === n.redirect ? t = s("unexpected redirect") : "manual" === n.redirect ? t = a : "follow" === n.redirect ? t = await function(e, n) {
        const t = e.request, a = n.internalResponse ? n.internalResponse : n;
        let o;
        try {
            if (o = T(a, k(t).hash), null == o) return n;
        } catch (e) {
            return Promise.resolve(s(e));
        }
        if (!L(o)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === t.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (t.redirectCount += 1, "cors" === t.mode && (o.username || o.password) && !S(t, o)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === t.responseTainting && (o.username || o.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== a.status && null != t.body && null == t.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(a.status) && "POST" === t.method || 303 === a.status && !ue.includes(t.method)) {
            t.method = "GET", t.body = null;
            for (const e of K)t.headersList.delete(e);
        }
        S(k(t), o) || (t.headersList.delete("authorization"), t.headersList.delete("proxy-authorization", !0), t.headersList.delete("cookie"), t.headersList.delete("host"));
        null != t.body && (V(null != t.body.source), t.body = q(t.body.source)[0]);
        const r = e.timingInfo;
        r.redirectEndTime = r.postRedirectStartTime = v(e.crossOriginIsolatedCapability), 0 === r.redirectStartTime && (r.redirectStartTime = r.startTime);
        return t.urlList.push(o), f(t, a), fe(e, !0);
    }(e, t) : V(!1)), t.timingInfo = o, t) : s("blocked");
}
async function Be(e, n = !1, a = !1) {
    const r = e.request;
    let c = null, m = null, u = null;
    "no-window" === r.window && "error" === r.redirect ? (c = e, m = r) : (m = l(r), c = {
        ...e
    }, c.request = m);
    const g = "include" === r.credentials || "same-origin" === r.credentials && "basic" === r.responseTainting, p = m.body ? m.body.length : null;
    let E = null;
    if (null == m.body && [
        "POST",
        "PUT"
    ].includes(m.method) && (E = "0"), null != p && (E = O(`${p}`)), null != E && m.headersList.append("content-length", E), null != p && m.keepalive, m.referrer instanceof URL && m.headersList.append("referer", O(m.referrer.href)), h(m), C(m), m.headersList.contains("user-agent") || m.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === m.cache && (m.headersList.contains("if-modified-since") || m.headersList.contains("if-none-match") || m.headersList.contains("if-unmodified-since") || m.headersList.contains("if-match") || m.headersList.contains("if-range")) && (m.cache = "no-store"), "no-cache" !== m.cache || m.preventNoCacheCacheControlHeaderModification || m.headersList.contains("cache-control") || m.headersList.append("cache-control", "max-age=0"), "no-store" !== m.cache && "reload" !== m.cache || (m.headersList.contains("pragma") || m.headersList.append("pragma", "no-cache"), m.headersList.contains("cache-control") || m.headersList.append("cache-control", "no-cache")), m.headersList.contains("range") && m.headersList.append("accept-encoding", "identity"), m.headersList.contains("accept-encoding") || (P(k(m)) ? m.headersList.append("accept-encoding", "br, gzip, deflate") : m.headersList.append("accept-encoding", "gzip, deflate")), m.headersList.delete("host"), m.cache = "no-store", "no-store" !== m.mode && m.mode, null == u) {
        if ("only-if-cached" === m.mode) return s("only if cached");
        const e = await async function(e) {
            V(!e.controller.connection || e.controller.connection.destroyed), e.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (e) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(e ?? new X("The operation was aborted.", "AbortError")));
                }
            };
            const n = e.request;
            let a = null;
            const r = e.timingInfo, c = null;
            null == c && (n.cache = "no-store");
            n.mode;
            let l = null;
            if (null == n.body && e.processRequestEndOfBody) queueMicrotask(()=>e.processRequestEndOfBody());
            else if (null != n.body) {
                const t = async function*(n) {
                    w(e) || (yield n, e.processRequestBodyChunkLength?.(n.byteLength));
                }, a = ()=>{
                    w(e) || e.processRequestEndOfBody && e.processRequestEndOfBody();
                }, s = (n)=>{
                    w(e) || ("AbortError" === n.name ? e.controller.abort() : e.controller.terminate(n));
                };
                l = async function*() {
                    try {
                        for await (const e of n.body.stream)yield* t(e);
                        a();
                    } catch (e) {
                        s(e);
                    }
                }();
            }
            try {
                const { body: n, status: t, statusText: s, headersList: o, socket: r } = await E({
                    body: l
                });
                if (r) a = i({
                    status: t,
                    statusText: s,
                    headersList: o,
                    socket: r
                });
                else {
                    const r = n[Symbol.asyncIterator]();
                    e.controller.next = ()=>r.next(), a = i({
                        status: t,
                        statusText: s,
                        headersList: o
                    });
                }
            } catch (n) {
                return "AbortError" === n.name ? (e.controller.connection.destroy(), o(e, n)) : s(n);
            }
            const m = ()=>{
                e.controller.resume();
            }, u = (n)=>{
                e.controller.abort(n);
            };
            pe || (pe = require("./module-3774.js").ReadableStream);
            const g = new pe({
                async start (n) {
                    e.controller.controller = n;
                },
                async pull (e) {
                    await m(e);
                },
                async cancel (e) {
                    await u(e);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function p(n) {
                b(e) ? (a.aborted = !0, se(g) && e.controller.controller.error(e.controller.serializedAbortReason)) : se(g) && e.controller.controller.error(new TypeError("terminated", {
                    cause: D(n) ? n : void 0
                })), e.controller.connection.destroy();
            }
            return a.body = {
                stream: g
            }, e.controller.on("terminated", p), e.controller.resume = async ()=>{
                for(;;){
                    let n, t;
                    try {
                        const { done: t, value: a } = await e.controller.next();
                        if (b(e)) break;
                        n = t ? void 0 : a;
                    } catch (a) {
                        e.controller.ended && !r.encodedBodySize ? n = void 0 : (n = a, t = !0);
                    }
                    if (void 0 === n) return F(e.controller.controller), void Ie(e, a);
                    if (r.decodedBodySize += n?.byteLength ?? 0, t) return void e.controller.terminate(n);
                    if (e.controller.controller.enqueue(new Uint8Array(n)), ae(g)) return void e.controller.terminate();
                    if (!e.controller.controller.desiredSize) return;
                }
            }, a;
            async function E({ body: t }) {
                const a = k(n), s = e.controller.dispatcher;
                return new Promise((o, i)=>s.dispatch({
                        path: a.pathname + a.search,
                        origin: a.origin,
                        method: n.method,
                        body: e.controller.dispatcher.isMockActive ? n.body && (n.body.source || n.body.stream) : t,
                        headers: n.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === n.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (n) {
                            const { connection: t } = e.controller;
                            t.destroyed ? n(new X("The operation was aborted.", "AbortError")) : (e.controller.on("terminated", n), this.abort = t.abort = n);
                        },
                        onHeaders (e, t, a, s) {
                            if (e < 200) return;
                            let r = [], i = "";
                            const c = new A;
                            if (Array.isArray(t)) for(let e = 0; e < t.length; e += 2){
                                const n = t[e + 0].toString("latin1"), a = t[e + 1].toString("latin1");
                                "content-encoding" === n.toLowerCase() ? r = a.toLowerCase().split(",").map((e)=>e.trim()) : "location" === n.toLowerCase() && (i = a), c[Z].append(n, a);
                            }
                            else {
                                const e = Object.keys(t);
                                for (const n of e){
                                    const e = t[n];
                                    "content-encoding" === n.toLowerCase() ? r = e.toLowerCase().split(",").map((e)=>e.trim()).reverse() : "location" === n.toLowerCase() && (i = e), c[Z].append(n, e);
                                }
                            }
                            this.body = new ee({
                                read: a
                            });
                            const l = [], m = "follow" === n.redirect && i && H.has(e);
                            if ("HEAD" !== n.method && "CONNECT" !== n.method && !W.includes(e) && !m) for (const e of r)if ("x-gzip" === e || "gzip" === e) l.push(d.createGunzip({
                                flush: d.constants.Z_SYNC_FLUSH,
                                finishFlush: d.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === e) l.push(d.createInflate());
                            else {
                                if ("br" !== e) {
                                    l.length = 0;
                                    break;
                                }
                                l.push(d.createBrotliDecompress());
                            }
                            return o({
                                status: e,
                                statusText: s,
                                headersList: c[Z],
                                body: l.length ? ne(this.body, ...l, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (n) {
                            if (e.controller.dump) return;
                            const t = n;
                            return r.encodedBodySize += t.byteLength, this.body.push(t);
                        },
                        onComplete () {
                            this.abort && e.controller.off("terminated", this.abort), e.controller.ended = !0, this.body.push(null);
                        },
                        onError (n) {
                            this.abort && e.controller.off("terminated", this.abort), this.body?.destroy(n), e.controller.terminate(n), i(n);
                        },
                        onUpgrade (e, n, t) {
                            if (101 !== e) return;
                            const a = new A;
                            for(let e = 0; e < n.length; e += 2){
                                const t = n[e + 0].toString("latin1"), s = n[e + 1].toString("latin1");
                                a[Z].append(t, s);
                            }
                            return o({
                                status: e,
                                statusText: me[e],
                                headersList: a[Z],
                                socket: t
                            }), !0;
                        }
                    }));
            }
        }(c, g, a);
        !j.has(m.method) && e.status >= 200 && e.status, null == u && (u = e);
    }
    if (u.urlList = [
        ...m.urlList
    ], m.headersList.contains("range") && (u.rangeRequested = !0), u.requestIncludesCredentials = g, 407 === u.status) return "no-window" === r.window ? s() : w(e) ? o(e) : s("proxy authentication required");
    if (421 === u.status && !a && (null == r.body || null != r.body.source)) {
        if (w(e)) return o(e);
        e.controller.connection.destroy(), u = await Be(e, n, !0);
    }
    return u;
}
module.exports = {
    fetch: function(e, n = {}) {
        de.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const t = R();
        let s;
        try {
            s = new c(e, n);
        } catch (e) {
            return t.reject(e), t.promise;
        }
        const o = s[x];
        if (s.signal.aborted) return Te(t, o, null, s.signal.reason), t.promise;
        const r = o.client.globalObject;
        "ServiceWorkerGlobalScope" === r?.constructor?.name && (o.serviceWorkers = "none");
        let i = null, A = !1, l = null;
        return te(s.signal, ()=>{
            A = !0, V(null != l), l.abort(s.signal.reason), Te(t, o, i, s.signal.reason);
        }), l = ke({
            request: o,
            processResponseEndOfBody: (e)=>he(e, "fetch"),
            processResponse: (e)=>A ? Promise.resolve() : e.aborted ? (Te(t, o, i, l.serializedAbortReason), Promise.resolve()) : "error" === e.type ? (t.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: e.error
                })), Promise.resolve()) : (i = new a, i[x] = e, i[J] = null, i[G][Z] = e.headersList, i[G][Y] = "immutable", i[G][J] = null, void t.resolve(i)),
            dispatcher: n.dispatcher ?? le()
        }), t.promise;
    },
    Fetch: Ee,
    fetching: ke,
    finalizeAndReportTiming: he
};
