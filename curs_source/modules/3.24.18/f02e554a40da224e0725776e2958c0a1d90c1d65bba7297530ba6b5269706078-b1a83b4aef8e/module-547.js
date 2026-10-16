"use strict";
const { extractBody: n, mixinBody: s, cloneBody: i } = require("./module-9608.js"), { Headers: o, fill: a, HeadersList: u } = require("./module-2848.js"), { FinalizationRegistry: c } = require("./module-4191.js")(), l = require("./module-3589.js"), { isValidHTTPToken: m, sameOrigin: d, normalizeMethod: f, makePolicyContainer: p, normalizeMethodRecord: h } = require("./module-8116.js"), { forbiddenMethodsSet: g, corsSafeListedMethodsSet: A, referrerPolicy: _, requestRedirect: y, requestMode: w, requestCredentials: S, requestCache: J, requestDuplex: B } = require("./module-2955.js"), { kEnumerableProperty: E } = l, { kHeaders: I, kSignal: C, kState: b, kGuard: k, kRealm: v } = require("./module-7271.js"), { webidl: q } = require("./module-8193.js"), { getGlobalOrigin: R } = require("./module-3967.js"), { URLSerializer: P } = require("./module-4387.js"), { kHeadersList: T, kConstruct: x } = require("./module-5532.js"), N = require("./module-2613.js"), { getMaxListeners: D, setMaxListeners: U, getEventListeners: Q, defaultMaxListeners: M } = require("./module-4434.js");
let O = globalThis.TransformStream;
const F = Symbol("abortController"), L = new c(({ signal: t, abort: e })=>{
    t.removeEventListener("abort", e);
});
class $ {
    constructor(t, e = {}){
        if (t === x) return;
        q.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), t = q.converters.RequestInfo(t), e = q.converters.RequestInit(e), this[v] = {
            settingsObject: {
                baseUrl: R(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: p()
            }
        };
        let s = null, i = null;
        const c = this[v].settingsObject.baseUrl;
        let _ = null;
        if ("string" == typeof t) {
            let e;
            try {
                e = new URL(t, c);
            } catch (e) {
                throw new TypeError("Failed to parse URL from " + t, {
                    cause: e
                });
            }
            if (e.username || e.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + t);
            s = G({
                urlList: [
                    e
                ]
            }), i = "cors";
        } else N(t instanceof $), s = t[b], _ = t[C];
        const y = this[v].settingsObject.origin;
        let w = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && d(s.window, y) && (w = s.window), null != e.window) throw new TypeError(`'window' option '${w}' must be null`);
        "window" in e && (w = "no-window"), s = G({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[v].settingsObject,
            window: w,
            priority: s.priority,
            origin: s.origin,
            referrer: s.referrer,
            referrerPolicy: s.referrerPolicy,
            mode: s.mode,
            credentials: s.credentials,
            cache: s.cache,
            redirect: s.redirect,
            integrity: s.integrity,
            keepalive: s.keepalive,
            reloadNavigation: s.reloadNavigation,
            historyNavigation: s.historyNavigation,
            urlList: [
                ...s.urlList
            ]
        });
        const S = 0 !== Object.keys(e).length;
        if (S && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== e.referrer) {
            const t = e.referrer;
            if ("" === t) s.referrer = "no-referrer";
            else {
                let e;
                try {
                    e = new URL(t, c);
                } catch (e) {
                    throw new TypeError(`Referrer "${t}" is not a valid URL.`, {
                        cause: e
                    });
                }
                "about:" === e.protocol && "client" === e.hostname || y && !d(e, this[v].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = e;
            }
        }
        let J;
        if (void 0 !== e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), J = void 0 !== e.mode ? e.mode : i, "navigate" === J) throw q.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != J && (s.mode = J), void 0 !== e.credentials && (s.credentials = e.credentials), void 0 !== e.cache && (s.cache = e.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== e.redirect && (s.redirect = e.redirect), null != e.integrity && (s.integrity = String(e.integrity)), void 0 !== e.keepalive && (s.keepalive = Boolean(e.keepalive)), void 0 !== e.method) {
            let t = e.method;
            if (!m(t)) throw new TypeError(`'${t}' is not a valid HTTP method.`);
            if (g.has(t.toUpperCase())) throw new TypeError(`'${t}' HTTP method is unsupported.`);
            t = h[t] ?? f(t), s.method = t;
        }
        void 0 !== e.signal && (_ = e.signal), this[b] = s;
        const B = new AbortController;
        if (this[C] = B.signal, this[C][v] = this[v], null != _) {
            if (!_ || "boolean" != typeof _.aborted || "function" != typeof _.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (_.aborted) B.abort(_.reason);
            else {
                this[F] = B;
                const t = new WeakRef(B), e = function() {
                    const e = t.deref();
                    void 0 !== e && e.abort(this.reason);
                };
                try {
                    ("function" == typeof D && D(_) === M || Q(_, "abort").length >= M) && U(100, _);
                } catch  {}
                l.addAbortListener(_, e), L.register(B, {
                    signal: _,
                    abort: e
                });
            }
        }
        if (this[I] = new o(x), this[I][T] = s.headersList, this[I][k] = "request", this[I][v] = this[v], "no-cors" === J) {
            if (!A.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[I][k] = "request-no-cors";
        }
        if (S) {
            const t = this[I][T], r = void 0 !== e.headers ? e.headers : new u(t);
            if (t.clear(), r instanceof u) {
                for (const [e, n] of r)t.append(e, n);
                t.cookies = r.cookies;
            } else a(this[I], r);
        }
        const E = t instanceof $ ? t[b].body : null;
        if (!(null == e.body && null == E || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let P = null;
        if (null != e.body) {
            const [t, r] = n(e.body, s.keepalive);
            P = t, r && !this[I][T].contains("content-type") && this[I].append("content-type", r);
        }
        const H = P ?? E;
        if (null != H && null == H.source) {
            if (null != P && null == e.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let K = H;
        if (null == P && null != E) {
            if (l.isDisturbed(E.stream) || E.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            O || (O = require("./module-3774.js").TransformStream);
            const t = new O;
            E.stream.pipeThrough(t), K = {
                source: E.source,
                length: E.length,
                stream: t.readable
            };
        }
        this[b].body = K;
    }
    get method() {
        return q.brandCheck(this, $), this[b].method;
    }
    get url() {
        return q.brandCheck(this, $), P(this[b].url);
    }
    get headers() {
        return q.brandCheck(this, $), this[I];
    }
    get destination() {
        return q.brandCheck(this, $), this[b].destination;
    }
    get referrer() {
        return q.brandCheck(this, $), "no-referrer" === this[b].referrer ? "" : "client" === this[b].referrer ? "about:client" : this[b].referrer.toString();
    }
    get referrerPolicy() {
        return q.brandCheck(this, $), this[b].referrerPolicy;
    }
    get mode() {
        return q.brandCheck(this, $), this[b].mode;
    }
    get credentials() {
        return this[b].credentials;
    }
    get cache() {
        return q.brandCheck(this, $), this[b].cache;
    }
    get redirect() {
        return q.brandCheck(this, $), this[b].redirect;
    }
    get integrity() {
        return q.brandCheck(this, $), this[b].integrity;
    }
    get keepalive() {
        return q.brandCheck(this, $), this[b].keepalive;
    }
    get isReloadNavigation() {
        return q.brandCheck(this, $), this[b].reloadNavigation;
    }
    get isHistoryNavigation() {
        return q.brandCheck(this, $), this[b].historyNavigation;
    }
    get signal() {
        return q.brandCheck(this, $), this[C];
    }
    get body() {
        return q.brandCheck(this, $), this[b].body ? this[b].body.stream : null;
    }
    get bodyUsed() {
        return q.brandCheck(this, $), !!this[b].body && l.isDisturbed(this[b].body.stream);
    }
    get duplex() {
        return q.brandCheck(this, $), "half";
    }
    clone() {
        if (q.brandCheck(this, $), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const t = function(t) {
            const e = G({
                ...t,
                body: null
            });
            null != t.body && (e.body = i(t.body));
            return e;
        }(this[b]), e = new $(x);
        e[b] = t, e[v] = this[v], e[I] = new o(x), e[I][T] = t.headersList, e[I][k] = this[I][k], e[I][v] = this[I][v];
        const r = new AbortController;
        return this.signal.aborted ? r.abort(this.signal.reason) : l.addAbortListener(this.signal, ()=>{
            r.abort(this.signal.reason);
        }), e[C] = r.signal, e;
    }
}
function G(t) {
    const e = {
        method: "GET",
        localURLsOnly: !1,
        unsafeRequest: !1,
        body: null,
        client: null,
        reservedClient: null,
        replacesClientId: "",
        window: "client",
        keepalive: !1,
        serviceWorkers: "all",
        initiator: "",
        destination: "",
        priority: null,
        origin: "client",
        policyContainer: "client",
        referrer: "client",
        referrerPolicy: "",
        mode: "no-cors",
        useCORSPreflightFlag: !1,
        credentials: "same-origin",
        useCredentials: !1,
        cache: "default",
        redirect: "follow",
        integrity: "",
        cryptoGraphicsNonceMetadata: "",
        parserMetadata: "",
        reloadNavigation: !1,
        historyNavigation: !1,
        userActivation: !1,
        taintedOrigin: !1,
        redirectCount: 0,
        responseTainting: "basic",
        preventNoCacheCacheControlHeaderModification: !1,
        done: !1,
        timingAllowFailed: !1,
        ...t,
        headersList: t.headersList ? new u(t.headersList) : new u
    };
    return e.url = e.urlList[0], e;
}
s($), Object.defineProperties($.prototype, {
    method: E,
    url: E,
    headers: E,
    redirect: E,
    clone: E,
    signal: E,
    duplex: E,
    destination: E,
    body: E,
    bodyUsed: E,
    isHistoryNavigation: E,
    isReloadNavigation: E,
    keepalive: E,
    integrity: E,
    cache: E,
    credentials: E,
    attribute: E,
    referrerPolicy: E,
    referrer: E,
    mode: E,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: !0
    }
}), q.converters.Request = q.interfaceConverter($), q.converters.RequestInfo = function(t) {
    return "string" == typeof t ? q.converters.USVString(t) : t instanceof $ ? q.converters.Request(t) : q.converters.USVString(t);
}, q.converters.AbortSignal = q.interfaceConverter(AbortSignal), q.converters.RequestInit = q.dictionaryConverter([
    {
        key: "method",
        converter: q.converters.ByteString
    },
    {
        key: "headers",
        converter: q.converters.HeadersInit
    },
    {
        key: "body",
        converter: q.nullableConverter(q.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: q.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: q.converters.DOMString,
        allowedValues: _
    },
    {
        key: "mode",
        converter: q.converters.DOMString,
        allowedValues: w
    },
    {
        key: "credentials",
        converter: q.converters.DOMString,
        allowedValues: S
    },
    {
        key: "cache",
        converter: q.converters.DOMString,
        allowedValues: J
    },
    {
        key: "redirect",
        converter: q.converters.DOMString,
        allowedValues: y
    },
    {
        key: "integrity",
        converter: q.converters.DOMString
    },
    {
        key: "keepalive",
        converter: q.converters.boolean
    },
    {
        key: "signal",
        converter: q.nullableConverter((t)=>q.converters.AbortSignal(t, {
                strict: !1
            }))
    },
    {
        key: "window",
        converter: q.converters.any
    },
    {
        key: "duplex",
        converter: q.converters.DOMString,
        allowedValues: B
    }
]), module.exports = {
    Request: $,
    makeRequest: G
};
