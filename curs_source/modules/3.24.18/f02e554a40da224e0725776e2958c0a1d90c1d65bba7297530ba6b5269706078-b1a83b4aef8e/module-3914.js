"use strict";
const { Response: n, makeNetworkError: s, makeAppropriateNetworkError: i, filterResponse: o, makeResponse: a } = require("./module-3511.js"), { Headers: u } = require("./module-2848.js"), { Request: c, makeRequest: l } = require("./module-547.js"), m = require("./module-3106.js"), { bytesMatch: d, makePolicyContainer: f, clonePolicyContainer: p, requestBadPort: h, TAOCheck: g, appendRequestOriginHeader: A, responseLocationURL: _, requestCurrentURL: y, setRequestReferrerPolicyOnRedirect: w, tryUpgradeRequestToAPotentiallyTrustworthyURL: S, createOpaqueTimingInfo: J, appendFetchMetadata: B, corsCheck: E, crossOriginResourcePolicyCheck: I, determineRequestsReferrer: C, coarsenedSharedCurrentTime: b, createDeferredPromise: k, isBlobLike: v, sameOrigin: q, isCancelled: R, isAborted: P, isErrorLike: T, fullyReadBody: x, readableStreamClose: N, isomorphicEncode: D, urlIsLocal: U, urlIsHttpHttpsScheme: Q, urlHasHttpsScheme: M } = require("./module-8116.js"), { kState: O, kHeaders: F, kGuard: L, kRealm: $ } = require("./module-7271.js"), G = require("./module-2613.js"), { safelyExtractBody: H } = require("./module-9608.js"), { redirectStatusSet: K, nullBodyStatus: V, safeMethodsSet: z, requestBodyHeader: W, subresourceSet: Y, DOMException: j } = require("./module-2955.js"), { kHeadersList: X } = require("./module-5532.js"), Z = require("./module-4434.js"), { Readable: tt, pipeline: et } = require("./module-2203.js"), { addAbortListener: rt, isErrored: nt, isReadable: st, nodeMajor: it, nodeMinor: ot } = require("./module-3589.js"), { dataURLProcessor: at, serializeAMimeType: ut } = require("./module-4387.js"), { TransformStream: ct } = require("./module-3774.js"), { getGlobalDispatcher: lt } = require("./module-7582.js"), { webidl: mt } = require("./module-8193.js"), { STATUS_CODES: dt } = require("./module-8611.js"), ft = [
    "GET",
    "HEAD"
];
let pt, ht = globalThis.ReadableStream;
class gt extends Z {
    constructor(t){
        super(), this.dispatcher = t, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(t) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(t), this.emit("terminated", t));
    }
    abort(t) {
        "ongoing" === this.state && (this.state = "aborted", t || (t = new j("The operation was aborted.", "AbortError")), this.serializedAbortReason = t, this.connection?.destroy(t), this.emit("terminated", t));
    }
}
function At(t, e = "other") {
    if ("error" === t.type && t.aborted) return;
    if (!t.urlList?.length) return;
    const r = t.urlList[0];
    let n = t.timingInfo, s = t.cacheState;
    Q(r) && null !== n && (t.timingAllowPassed || (n = J({
        startTime: n.startTime
    }), s = ""), n.endTime = b(), t.timingInfo = n, function(t, e, r, n, s) {
        (it > 18 || 18 === it && ot >= 2) && performance.markResourceTiming(t, e.href, r, n, s);
    }(n, r, e, globalThis, s));
}
function _t(t, e, r, n) {
    if (n || (n = new j("The operation was aborted.", "AbortError")), t.reject(n), null != e.body && st(e.body?.stream) && e.body.stream.cancel(n).catch((t)=>{
        if ("ERR_INVALID_STATE" !== t.code) throw t;
    }), null == r) return;
    const s = r[O];
    null != s.body && st(s.body?.stream) && s.body.stream.cancel(n).catch((t)=>{
        if ("ERR_INVALID_STATE" !== t.code) throw t;
    });
}
function yt({ request: t, processRequestBodyChunkLength: e, processRequestEndOfBody: r, processResponse: n, processResponseEndOfBody: s, processResponseConsumeBody: i, useParallelQueue: o = !1, dispatcher: a }) {
    let u = null, c = !1;
    null != t.client && (u = t.client.globalObject, c = t.client.crossOriginIsolatedCapability);
    const l = b(c), m = J({
        startTime: l
    }), d = {
        controller: new gt(a),
        request: t,
        timingInfo: m,
        processRequestBodyChunkLength: e,
        processRequestEndOfBody: r,
        processResponse: n,
        processResponseConsumeBody: i,
        processResponseEndOfBody: s,
        taskDestination: u,
        crossOriginIsolatedCapability: c
    };
    if (G(!t.body || t.body.stream), "client" === t.window && (t.window = "Window" === t.client?.globalObject?.constructor?.name ? t.client : "no-window"), "client" === t.origin && (t.origin = t.client?.origin), "client" === t.policyContainer && (null != t.client ? t.policyContainer = p(t.client.policyContainer) : t.policyContainer = f()), !t.headersList.contains("accept")) {
        const e = "*/*";
        t.headersList.append("accept", e);
    }
    return t.headersList.contains("accept-language") || t.headersList.append("accept-language", "*"), t.priority, Y.has(t.destination), wt(d).catch((t)=>{
        d.controller.terminate(t);
    }), d.controller;
}
async function wt(t, e = !1) {
    const r = t.request;
    let n = null;
    if (r.localURLsOnly && !U(y(r)) && (n = s("local URLs only")), S(r), "blocked" === h(r) && (n = s("bad port")), "" === r.referrerPolicy && (r.referrerPolicy = r.policyContainer.referrerPolicy), "no-referrer" !== r.referrer && (r.referrer = C(r)), null === n && (n = await (async ()=>{
        const e = y(r);
        return q(e, r.url) && "basic" === r.responseTainting || "data:" === e.protocol || "navigate" === r.mode || "websocket" === r.mode ? (r.responseTainting = "basic", await St(t)) : "same-origin" === r.mode ? s('request mode cannot be "same-origin"') : "no-cors" === r.mode ? "follow" !== r.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (r.responseTainting = "opaque", await St(t)) : Q(y(r)) ? (r.responseTainting = "cors", await Et(t)) : s("URL scheme must be a HTTP(S) scheme");
    })()), e) return n;
    0 === n.status || n.internalResponse || (r.responseTainting, "basic" === r.responseTainting ? n = o(n, "basic") : "cors" === r.responseTainting ? n = o(n, "cors") : "opaque" === r.responseTainting ? n = o(n, "opaque") : G(!1));
    let i = 0 === n.status ? n : n.internalResponse;
    if (0 === i.urlList.length && i.urlList.push(...r.urlList), r.timingAllowFailed || (n.timingAllowPassed = !0), "opaque" === n.type && 206 === i.status && i.rangeRequested && !r.headers.contains("range") && (n = i = s()), 0 === n.status || "HEAD" !== r.method && "CONNECT" !== r.method && !V.includes(i.status) || (i.body = null, t.controller.dump = !0), r.integrity) {
        const e = (e)=>Bt(t, s(e));
        if ("opaque" === r.responseTainting || null == n.body) return void e(n.error);
        const i = (s)=>{
            d(s, r.integrity) ? (n.body = H(s)[0], Bt(t, n)) : e("integrity mismatch");
        };
        await x(n.body, i, e);
    } else Bt(t, n);
}
function St(t) {
    if (R(t) && 0 === t.request.redirectCount) return Promise.resolve(i(t));
    const { request: e } = t, { protocol: n } = y(e);
    switch(n){
        case "about:":
            return Promise.resolve(s("about scheme is not supported"));
        case "blob:":
            {
                pt || (pt = require("./module-181.js").resolveObjectURL);
                const t = y(e);
                if (0 !== t.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
                const n = pt(t.toString());
                if ("GET" !== e.method || !v(n)) return Promise.resolve(s("invalid method"));
                const i = H(n), o = i[0], u = D(`${o.length}`), c = i[1] ?? "", l = a({
                    statusText: "OK",
                    headersList: [
                        [
                            "content-length",
                            {
                                name: "Content-Length",
                                value: u
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
                return l.body = o, Promise.resolve(l);
            }
        case "data:":
            {
                const t = y(e), r = at(t);
                if ("failure" === r) return Promise.resolve(s("failed to fetch the data URL"));
                const n = ut(r.mimeType);
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
                    body: H(r.body)[0]
                }));
            }
        case "file:":
            return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
            return Et(t).catch((t)=>s(t));
        default:
            return Promise.resolve(s("unknown scheme"));
    }
}
function Jt(t, e) {
    t.request.done = !0, null != t.processResponseDone && queueMicrotask(()=>t.processResponseDone(e));
}
function Bt(t, e) {
    "error" === e.type && (e.urlList = [
        t.request.urlList[0]
    ], e.timingInfo = J({
        startTime: t.timingInfo.startTime
    }));
    const r = ()=>{
        t.request.done = !0, null != t.processResponseEndOfBody && queueMicrotask(()=>t.processResponseEndOfBody(e));
    };
    if (null != t.processResponse && queueMicrotask(()=>t.processResponse(e)), null == e.body) r();
    else {
        const t = (t, e)=>{
            e.enqueue(t);
        }, n = new ct({
            start () {},
            transform: t,
            flush: r
        }, {
            size: ()=>1
        }, {
            size: ()=>1
        });
        e.body = {
            stream: e.body.stream.pipeThrough(n)
        };
    }
    if (null != t.processResponseConsumeBody) {
        const r = (r)=>t.processResponseConsumeBody(e, r), n = (r)=>t.processResponseConsumeBody(e, r);
        return null != e.body ? x(e.body, r, n) : (queueMicrotask(()=>r(null)), Promise.resolve());
    }
}
async function Et(t) {
    const e = t.request;
    let r = null, n = null;
    const i = t.timingInfo;
    if (e.serviceWorkers, null === r) {
        if ("follow" === e.redirect && (e.serviceWorkers = "none"), n = r = await It(t), "cors" === e.responseTainting && "failure" === E(e, r)) return s("cors failure");
        "failure" === g(e, r) && (e.timingAllowFailed = !0);
    }
    return "opaque" !== e.responseTainting && "opaque" !== r.type || "blocked" !== I(e.origin, e.client, e.destination, n) ? (K.has(n.status) && ("manual" !== e.redirect && t.controller.connection.destroy(), "error" === e.redirect ? r = s("unexpected redirect") : "manual" === e.redirect ? r = n : "follow" === e.redirect ? r = await function(t, e) {
        const r = t.request, n = e.internalResponse ? e.internalResponse : e;
        let i;
        try {
            if (i = _(n, y(r).hash), null == i) return e;
        } catch (t) {
            return Promise.resolve(s(t));
        }
        if (!Q(i)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === r.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (r.redirectCount += 1, "cors" === r.mode && (i.username || i.password) && !q(r, i)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === r.responseTainting && (i.username || i.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n.status && null != r.body && null == r.body.source) return Promise.resolve(s());
        if ([
            301,
            302
        ].includes(n.status) && "POST" === r.method || 303 === n.status && !ft.includes(r.method)) {
            r.method = "GET", r.body = null;
            for (const t of W)r.headersList.delete(t);
        }
        q(y(r), i) || (r.headersList.delete("authorization"), r.headersList.delete("proxy-authorization", !0), r.headersList.delete("cookie"), r.headersList.delete("host"));
        null != r.body && (G(null != r.body.source), r.body = H(r.body.source)[0]);
        const o = t.timingInfo;
        o.redirectEndTime = o.postRedirectStartTime = b(t.crossOriginIsolatedCapability), 0 === o.redirectStartTime && (o.redirectStartTime = o.startTime);
        return r.urlList.push(i), w(r, n), wt(t, !0);
    }(t, r) : G(!1)), r.timingInfo = i, r) : s("blocked");
}
async function It(t, e = !1, n = !1) {
    const o = t.request;
    let c = null, d = null, f = null;
    "no-window" === o.window && "error" === o.redirect ? (c = t, d = o) : (d = l(o), c = {
        ...t
    }, c.request = d);
    const p = "include" === o.credentials || "same-origin" === o.credentials && "basic" === o.responseTainting, h = d.body ? d.body.length : null;
    let g = null;
    if (null == d.body && [
        "POST",
        "PUT"
    ].includes(d.method) && (g = "0"), null != h && (g = D(`${h}`)), null != g && d.headersList.append("content-length", g), null != h && d.keepalive, d.referrer instanceof URL && d.headersList.append("referer", D(d.referrer.href)), A(d), B(d), d.headersList.contains("user-agent") || d.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === d.cache && (d.headersList.contains("if-modified-since") || d.headersList.contains("if-none-match") || d.headersList.contains("if-unmodified-since") || d.headersList.contains("if-match") || d.headersList.contains("if-range")) && (d.cache = "no-store"), "no-cache" !== d.cache || d.preventNoCacheCacheControlHeaderModification || d.headersList.contains("cache-control") || d.headersList.append("cache-control", "max-age=0"), "no-store" !== d.cache && "reload" !== d.cache || (d.headersList.contains("pragma") || d.headersList.append("pragma", "no-cache"), d.headersList.contains("cache-control") || d.headersList.append("cache-control", "no-cache")), d.headersList.contains("range") && d.headersList.append("accept-encoding", "identity"), d.headersList.contains("accept-encoding") || (M(y(d)) ? d.headersList.append("accept-encoding", "br, gzip, deflate") : d.headersList.append("accept-encoding", "gzip, deflate")), d.headersList.delete("host"), d.cache = "no-store", "no-store" !== d.mode && d.mode, null == f) {
        if ("only-if-cached" === d.mode) return s("only if cached");
        const t = await async function(t) {
            G(!t.controller.connection || t.controller.connection.destroyed), t.controller.connection = {
                abort: null,
                destroyed: !1,
                destroy (t) {
                    this.destroyed || (this.destroyed = !0, this.abort?.(t ?? new j("The operation was aborted.", "AbortError")));
                }
            };
            const e = t.request;
            let n = null;
            const o = t.timingInfo, c = null;
            null == c && (e.cache = "no-store");
            e.mode;
            let l = null;
            if (null == e.body && t.processRequestEndOfBody) queueMicrotask(()=>t.processRequestEndOfBody());
            else if (null != e.body) {
                const r = async function*(e) {
                    R(t) || (yield e, t.processRequestBodyChunkLength?.(e.byteLength));
                }, n = ()=>{
                    R(t) || t.processRequestEndOfBody && t.processRequestEndOfBody();
                }, s = (e)=>{
                    R(t) || ("AbortError" === e.name ? t.controller.abort() : t.controller.terminate(e));
                };
                l = async function*() {
                    try {
                        for await (const t of e.body.stream)yield* r(t);
                        n();
                    } catch (t) {
                        s(t);
                    }
                }();
            }
            try {
                const { body: e, status: r, statusText: s, headersList: i, socket: o } = await g({
                    body: l
                });
                if (o) n = a({
                    status: r,
                    statusText: s,
                    headersList: i,
                    socket: o
                });
                else {
                    const o = e[Symbol.asyncIterator]();
                    t.controller.next = ()=>o.next(), n = a({
                        status: r,
                        statusText: s,
                        headersList: i
                    });
                }
            } catch (e) {
                return "AbortError" === e.name ? (t.controller.connection.destroy(), i(t, e)) : s(e);
            }
            const d = ()=>{
                t.controller.resume();
            }, f = (e)=>{
                t.controller.abort(e);
            };
            ht || (ht = require("./module-3774.js").ReadableStream);
            const p = new ht({
                async start (e) {
                    t.controller.controller = e;
                },
                async pull (t) {
                    await d(t);
                },
                async cancel (t) {
                    await f(t);
                }
            }, {
                highWaterMark: 0,
                size: ()=>1
            });
            function h(e) {
                P(t) ? (n.aborted = !0, st(p) && t.controller.controller.error(t.controller.serializedAbortReason)) : st(p) && t.controller.controller.error(new TypeError("terminated", {
                    cause: T(e) ? e : void 0
                })), t.controller.connection.destroy();
            }
            return n.body = {
                stream: p
            }, t.controller.on("terminated", h), t.controller.resume = async ()=>{
                for(;;){
                    let e, r;
                    try {
                        const { done: r, value: n } = await t.controller.next();
                        if (P(t)) break;
                        e = r ? void 0 : n;
                    } catch (n) {
                        t.controller.ended && !o.encodedBodySize ? e = void 0 : (e = n, r = !0);
                    }
                    if (void 0 === e) return N(t.controller.controller), void Jt(t, n);
                    if (o.decodedBodySize += e?.byteLength ?? 0, r) return void t.controller.terminate(e);
                    if (t.controller.controller.enqueue(new Uint8Array(e)), nt(p)) return void t.controller.terminate();
                    if (!t.controller.controller.desiredSize) return;
                }
            }, n;
            async function g({ body: r }) {
                const n = y(e), s = t.controller.dispatcher;
                return new Promise((i, a)=>s.dispatch({
                        path: n.pathname + n.search,
                        origin: n.origin,
                        method: e.method,
                        body: t.controller.dispatcher.isMockActive ? e.body && (e.body.source || e.body.stream) : r,
                        headers: e.headersList.entries,
                        maxRedirections: 0,
                        upgrade: "websocket" === e.mode ? "websocket" : void 0
                    }, {
                        body: null,
                        abort: null,
                        onConnect (e) {
                            const { connection: r } = t.controller;
                            r.destroyed ? e(new j("The operation was aborted.", "AbortError")) : (t.controller.on("terminated", e), this.abort = r.abort = e);
                        },
                        onHeaders (t, r, n, s) {
                            if (t < 200) return;
                            let o = [], a = "";
                            const c = new u;
                            if (Array.isArray(r)) for(let t = 0; t < r.length; t += 2){
                                const e = r[t + 0].toString("latin1"), n = r[t + 1].toString("latin1");
                                "content-encoding" === e.toLowerCase() ? o = n.toLowerCase().split(",").map((t)=>t.trim()) : "location" === e.toLowerCase() && (a = n), c[X].append(e, n);
                            }
                            else {
                                const t = Object.keys(r);
                                for (const e of t){
                                    const t = r[e];
                                    "content-encoding" === e.toLowerCase() ? o = t.toLowerCase().split(",").map((t)=>t.trim()).reverse() : "location" === e.toLowerCase() && (a = t), c[X].append(e, t);
                                }
                            }
                            this.body = new tt({
                                read: n
                            });
                            const l = [], d = "follow" === e.redirect && a && K.has(t);
                            if ("HEAD" !== e.method && "CONNECT" !== e.method && !V.includes(t) && !d) for (const t of o)if ("x-gzip" === t || "gzip" === t) l.push(m.createGunzip({
                                flush: m.constants.Z_SYNC_FLUSH,
                                finishFlush: m.constants.Z_SYNC_FLUSH
                            }));
                            else if ("deflate" === t) l.push(m.createInflate());
                            else {
                                if ("br" !== t) {
                                    l.length = 0;
                                    break;
                                }
                                l.push(m.createBrotliDecompress());
                            }
                            return i({
                                status: t,
                                statusText: s,
                                headersList: c[X],
                                body: l.length ? et(this.body, ...l, ()=>{}) : this.body.on("error", ()=>{})
                            }), !0;
                        },
                        onData (e) {
                            if (t.controller.dump) return;
                            const r = e;
                            return o.encodedBodySize += r.byteLength, this.body.push(r);
                        },
                        onComplete () {
                            this.abort && t.controller.off("terminated", this.abort), t.controller.ended = !0, this.body.push(null);
                        },
                        onError (e) {
                            this.abort && t.controller.off("terminated", this.abort), this.body?.destroy(e), t.controller.terminate(e), a(e);
                        },
                        onUpgrade (t, e, r) {
                            if (101 !== t) return;
                            const n = new u;
                            for(let t = 0; t < e.length; t += 2){
                                const r = e[t + 0].toString("latin1"), s = e[t + 1].toString("latin1");
                                n[X].append(r, s);
                            }
                            return i({
                                status: t,
                                statusText: dt[t],
                                headersList: n[X],
                                socket: r
                            }), !0;
                        }
                    }));
            }
        }(c, p, n);
        !z.has(d.method) && t.status >= 200 && t.status, null == f && (f = t);
    }
    if (f.urlList = [
        ...d.urlList
    ], d.headersList.contains("range") && (f.rangeRequested = !0), f.requestIncludesCredentials = p, 407 === f.status) return "no-window" === o.window ? s() : R(t) ? i(t) : s("proxy authentication required");
    if (421 === f.status && !n && (null == o.body || null != o.body.source)) {
        if (R(t)) return i(t);
        t.controller.connection.destroy(), f = await It(t, e, !0);
    }
    return f;
}
module.exports = {
    fetch: function(t, e = {}) {
        mt.argumentLengthCheck(arguments, 1, {
            header: "globalThis.fetch"
        });
        const r = k();
        let s;
        try {
            s = new c(t, e);
        } catch (t) {
            return r.reject(t), r.promise;
        }
        const i = s[O];
        if (s.signal.aborted) return _t(r, i, null, s.signal.reason), r.promise;
        const o = i.client.globalObject;
        "ServiceWorkerGlobalScope" === o?.constructor?.name && (i.serviceWorkers = "none");
        let a = null, u = !1, l = null;
        return rt(s.signal, ()=>{
            u = !0, G(null != l), l.abort(s.signal.reason), _t(r, i, a, s.signal.reason);
        }), l = yt({
            request: i,
            processResponseEndOfBody: (t)=>At(t, "fetch"),
            processResponse: (t)=>u ? Promise.resolve() : t.aborted ? (_t(r, i, a, l.serializedAbortReason), Promise.resolve()) : "error" === t.type ? (r.reject(Object.assign(new TypeError("fetch failed"), {
                    cause: t.error
                })), Promise.resolve()) : (a = new n, a[O] = t, a[$] = null, a[F][X] = t.headersList, a[F][L] = "immutable", a[F][$] = null, void r.resolve(a)),
            dispatcher: e.dispatcher ?? lt()
        }), r.promise;
    },
    Fetch: gt,
    fetching: yt,
    finalizeAndReportTiming: At
};
