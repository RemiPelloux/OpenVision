"use strict";
const { extractBody: n, mixinBody: r, cloneBody: o } = require("./module-7052.js"), { Headers: s, fill: i, HeadersList: a } = require("./module-2932.js"), { FinalizationRegistry: c } = require("./module-1531.js")(), l = require("./module-9361.js"), { isValidHTTPToken: u, sameOrigin: g, normalizeMethod: E, makePolicyContainer: h, normalizeMethodRecord: d } = require("./module-5728.js"), { forbiddenMethodsSet: I, corsSafeListedMethodsSet: B, referrerPolicy: Q, requestRedirect: f, requestMode: C, requestCredentials: p, requestCache: m, requestDuplex: y } = require("./module-6687.js"), { kEnumerableProperty: w } = l, { kHeaders: k, kSignal: b, kState: N, kGuard: T, kRealm: D } = require("./module-5899.js"), { webidl: S } = require("./module-8005.js"), { getGlobalOrigin: R } = require("./module-9523.js"), { URLSerializer: F } = require("./module-3631.js"), { kHeadersList: v, kConstruct: M } = require("./module-8832.js"), U = require("./module-2613.js"), { getMaxListeners: L, setMaxListeners: _, getEventListeners: J, defaultMaxListeners: O } = require("./module-4434.js");
let Y = globalThis.TransformStream;
const G = Symbol("abortController"), P = new c(({ signal: e, abort: t })=>{
    e.removeEventListener("abort", t);
});
class V {
    constructor(e, t = {}){
        if (e === M) return;
        S.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = S.converters.RequestInfo(e), t = S.converters.RequestInit(t), this[D] = {
            settingsObject: {
                baseUrl: R(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: h()
            }
        };
        let r = null, o = null;
        const c = this[D].settingsObject.baseUrl;
        let Q = null;
        if ("string" == typeof e) {
            let t;
            try {
                t = new URL(e, c);
            } catch (t) {
                throw new TypeError("Failed to parse URL from " + e, {
                    cause: t
                });
            }
            if (t.username || t.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
            r = x({
                urlList: [
                    t
                ]
            }), o = "cors";
        } else U(e instanceof V), r = e[N], Q = e[b];
        const f = this[D].settingsObject.origin;
        let C = "client";
        if ("EnvironmentSettingsObject" === r.window?.constructor?.name && g(r.window, f) && (C = r.window), null != t.window) throw new TypeError(`'window' option '${C}' must be null`);
        "window" in t && (C = "no-window"), r = x({
            method: r.method,
            headersList: r.headersList,
            unsafeRequest: r.unsafeRequest,
            client: this[D].settingsObject,
            window: C,
            priority: r.priority,
            origin: r.origin,
            referrer: r.referrer,
            referrerPolicy: r.referrerPolicy,
            mode: r.mode,
            credentials: r.credentials,
            cache: r.cache,
            redirect: r.redirect,
            integrity: r.integrity,
            keepalive: r.keepalive,
            reloadNavigation: r.reloadNavigation,
            historyNavigation: r.historyNavigation,
            urlList: [
                ...r.urlList
            ]
        });
        const p = 0 !== Object.keys(t).length;
        if (p && ("navigate" === r.mode && (r.mode = "same-origin"), r.reloadNavigation = !1, r.historyNavigation = !1, r.origin = "client", r.referrer = "client", r.referrerPolicy = "", r.url = r.urlList[r.urlList.length - 1], r.urlList = [
            r.url
        ]), void 0 !== t.referrer) {
            const e = t.referrer;
            if ("" === e) r.referrer = "no-referrer";
            else {
                let t;
                try {
                    t = new URL(e, c);
                } catch (t) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: t
                    });
                }
                "about:" === t.protocol && "client" === t.hostname || f && !g(t, this[D].settingsObject.baseUrl) ? r.referrer = "client" : r.referrer = t;
            }
        }
        let m;
        if (void 0 !== t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy), m = void 0 !== t.mode ? t.mode : o, "navigate" === m) throw S.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != m && (r.mode = m), void 0 !== t.credentials && (r.credentials = t.credentials), void 0 !== t.cache && (r.cache = t.cache), "only-if-cached" === r.cache && "same-origin" !== r.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== t.redirect && (r.redirect = t.redirect), null != t.integrity && (r.integrity = String(t.integrity)), void 0 !== t.keepalive && (r.keepalive = Boolean(t.keepalive)), void 0 !== t.method) {
            let e = t.method;
            if (!u(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (I.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = d[e] ?? E(e), r.method = e;
        }
        void 0 !== t.signal && (Q = t.signal), this[N] = r;
        const y = new AbortController;
        if (this[b] = y.signal, this[b][D] = this[D], null != Q) {
            if (!Q || "boolean" != typeof Q.aborted || "function" != typeof Q.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (Q.aborted) y.abort(Q.reason);
            else {
                this[G] = y;
                const e = new WeakRef(y), t = function() {
                    const t = e.deref();
                    void 0 !== t && t.abort(this.reason);
                };
                try {
                    ("function" == typeof L && L(Q) === O || J(Q, "abort").length >= O) && _(100, Q);
                } catch  {}
                l.addAbortListener(Q, t), P.register(y, {
                    signal: Q,
                    abort: t
                });
            }
        }
        if (this[k] = new s(M), this[k][v] = r.headersList, this[k][T] = "request", this[k][D] = this[D], "no-cors" === m) {
            if (!B.has(r.method)) throw new TypeError(`'${r.method} is unsupported in no-cors mode.`);
            this[k][T] = "request-no-cors";
        }
        if (p) {
            const e = this[k][v], A = void 0 !== t.headers ? t.headers : new a(e);
            if (e.clear(), A instanceof a) {
                for (const [t, n] of A)e.append(t, n);
                e.cookies = A.cookies;
            } else i(this[k], A);
        }
        const w = e instanceof V ? e[N].body : null;
        if (!(null == t.body && null == w || "GET" !== r.method && "HEAD" !== r.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let F = null;
        if (null != t.body) {
            const [e, A] = n(t.body, r.keepalive);
            F = e, A && !this[k][v].contains("content-type") && this[k].append("content-type", A);
        }
        const H = F ?? w;
        if (null != H && null == H.source) {
            if (null != F && null == t.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== r.mode && "cors" !== r.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            r.useCORSPreflightFlag = !0;
        }
        let q = H;
        if (null == F && null != w) {
            if (l.isDisturbed(w.stream) || w.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            Y || (Y = require("./module-3774.js").TransformStream);
            const e = new Y;
            w.stream.pipeThrough(e), q = {
                source: w.source,
                length: w.length,
                stream: e.readable
            };
        }
        this[N].body = q;
    }
    get method() {
        return S.brandCheck(this, V), this[N].method;
    }
    get url() {
        return S.brandCheck(this, V), F(this[N].url);
    }
    get headers() {
        return S.brandCheck(this, V), this[k];
    }
    get destination() {
        return S.brandCheck(this, V), this[N].destination;
    }
    get referrer() {
        return S.brandCheck(this, V), "no-referrer" === this[N].referrer ? "" : "client" === this[N].referrer ? "about:client" : this[N].referrer.toString();
    }
    get referrerPolicy() {
        return S.brandCheck(this, V), this[N].referrerPolicy;
    }
    get mode() {
        return S.brandCheck(this, V), this[N].mode;
    }
    get credentials() {
        return this[N].credentials;
    }
    get cache() {
        return S.brandCheck(this, V), this[N].cache;
    }
    get redirect() {
        return S.brandCheck(this, V), this[N].redirect;
    }
    get integrity() {
        return S.brandCheck(this, V), this[N].integrity;
    }
    get keepalive() {
        return S.brandCheck(this, V), this[N].keepalive;
    }
    get isReloadNavigation() {
        return S.brandCheck(this, V), this[N].reloadNavigation;
    }
    get isHistoryNavigation() {
        return S.brandCheck(this, V), this[N].historyNavigation;
    }
    get signal() {
        return S.brandCheck(this, V), this[b];
    }
    get body() {
        return S.brandCheck(this, V), this[N].body ? this[N].body.stream : null;
    }
    get bodyUsed() {
        return S.brandCheck(this, V), !!this[N].body && l.isDisturbed(this[N].body.stream);
    }
    get duplex() {
        return S.brandCheck(this, V), "half";
    }
    clone() {
        if (S.brandCheck(this, V), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e = function(e) {
            const t = x({
                ...e,
                body: null
            });
            null != e.body && (t.body = o(e.body));
            return t;
        }(this[N]), t = new V(M);
        t[N] = e, t[D] = this[D], t[k] = new s(M), t[k][v] = e.headersList, t[k][T] = this[k][T], t[k][D] = this[k][D];
        const A = new AbortController;
        return this.signal.aborted ? A.abort(this.signal.reason) : l.addAbortListener(this.signal, ()=>{
            A.abort(this.signal.reason);
        }), t[b] = A.signal, t;
    }
}
function x(e) {
    const t = {
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
        ...e,
        headersList: e.headersList ? new a(e.headersList) : new a
    };
    return t.url = t.urlList[0], t;
}
r(V), Object.defineProperties(V.prototype, {
    method: w,
    url: w,
    headers: w,
    redirect: w,
    clone: w,
    signal: w,
    duplex: w,
    destination: w,
    body: w,
    bodyUsed: w,
    isHistoryNavigation: w,
    isReloadNavigation: w,
    keepalive: w,
    integrity: w,
    cache: w,
    credentials: w,
    attribute: w,
    referrerPolicy: w,
    referrer: w,
    mode: w,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: !0
    }
}), S.converters.Request = S.interfaceConverter(V), S.converters.RequestInfo = function(e) {
    return "string" == typeof e ? S.converters.USVString(e) : e instanceof V ? S.converters.Request(e) : S.converters.USVString(e);
}, S.converters.AbortSignal = S.interfaceConverter(AbortSignal), S.converters.RequestInit = S.dictionaryConverter([
    {
        key: "method",
        converter: S.converters.ByteString
    },
    {
        key: "headers",
        converter: S.converters.HeadersInit
    },
    {
        key: "body",
        converter: S.nullableConverter(S.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: S.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: S.converters.DOMString,
        allowedValues: Q
    },
    {
        key: "mode",
        converter: S.converters.DOMString,
        allowedValues: C
    },
    {
        key: "credentials",
        converter: S.converters.DOMString,
        allowedValues: p
    },
    {
        key: "cache",
        converter: S.converters.DOMString,
        allowedValues: m
    },
    {
        key: "redirect",
        converter: S.converters.DOMString,
        allowedValues: f
    },
    {
        key: "integrity",
        converter: S.converters.DOMString
    },
    {
        key: "keepalive",
        converter: S.converters.boolean
    },
    {
        key: "signal",
        converter: S.nullableConverter((e)=>S.converters.AbortSignal(e, {
                strict: !1
            }))
    },
    {
        key: "window",
        converter: S.converters.any
    },
    {
        key: "duplex",
        converter: S.converters.DOMString,
        allowedValues: y
    }
]), module.exports = {
    Request: V,
    makeRequest: x
};
