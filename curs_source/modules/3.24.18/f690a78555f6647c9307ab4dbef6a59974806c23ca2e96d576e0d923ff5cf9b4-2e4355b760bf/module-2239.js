"use strict";
const { extractBody: n, mixinBody: r, cloneBody: o } = require("./module-7052.js"), { Headers: s, fill: a, HeadersList: i } = require("./module-2932.js"), { FinalizationRegistry: c } = require("./module-1531.js")(), l = require("./module-9361.js"), { isValidHTTPToken: g, sameOrigin: E, normalizeMethod: u, makePolicyContainer: d, normalizeMethodRecord: I } = require("./module-5728.js"), { forbiddenMethodsSet: h, corsSafeListedMethodsSet: Q, referrerPolicy: m, requestRedirect: C, requestMode: B, requestCredentials: p, requestCache: f, requestDuplex: y } = require("./module-6687.js"), { kEnumerableProperty: T } = l, { kHeaders: k, kSignal: w, kState: N, kGuard: D, kRealm: R } = require("./module-5899.js"), { webidl: S } = require("./module-8005.js"), { getGlobalOrigin: b } = require("./module-9523.js"), { URLSerializer: F } = require("./module-3631.js"), { kHeadersList: _, kConstruct: v } = require("./module-8832.js"), L = require("./module-2613.js"), { getMaxListeners: U, setMaxListeners: M, getEventListeners: O, defaultMaxListeners: J } = require("./module-4434.js");
let Y = globalThis.TransformStream;
const P = Symbol("abortController"), G = new c(({ signal: e, abort: A })=>{
    e.removeEventListener("abort", A);
});
class V {
    constructor(e, A = {}){
        if (e === v) return;
        S.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = S.converters.RequestInfo(e), A = S.converters.RequestInit(A), this[R] = {
            settingsObject: {
                baseUrl: b(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: d()
            }
        };
        let r = null, o = null;
        const c = this[R].settingsObject.baseUrl;
        let m = null;
        if ("string" == typeof e) {
            let A;
            try {
                A = new URL(e, c);
            } catch (A) {
                throw new TypeError("Failed to parse URL from " + e, {
                    cause: A
                });
            }
            if (A.username || A.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
            r = x({
                urlList: [
                    A
                ]
            }), o = "cors";
        } else L(e instanceof V), r = e[N], m = e[w];
        const C = this[R].settingsObject.origin;
        let B = "client";
        if ("EnvironmentSettingsObject" === r.window?.constructor?.name && E(r.window, C) && (B = r.window), null != A.window) throw new TypeError(`'window' option '${B}' must be null`);
        "window" in A && (B = "no-window"), r = x({
            method: r.method,
            headersList: r.headersList,
            unsafeRequest: r.unsafeRequest,
            client: this[R].settingsObject,
            window: B,
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
        const p = 0 !== Object.keys(A).length;
        if (p && ("navigate" === r.mode && (r.mode = "same-origin"), r.reloadNavigation = !1, r.historyNavigation = !1, r.origin = "client", r.referrer = "client", r.referrerPolicy = "", r.url = r.urlList[r.urlList.length - 1], r.urlList = [
            r.url
        ]), void 0 !== A.referrer) {
            const e = A.referrer;
            if ("" === e) r.referrer = "no-referrer";
            else {
                let A;
                try {
                    A = new URL(e, c);
                } catch (A) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: A
                    });
                }
                "about:" === A.protocol && "client" === A.hostname || C && !E(A, this[R].settingsObject.baseUrl) ? r.referrer = "client" : r.referrer = A;
            }
        }
        let f;
        if (void 0 !== A.referrerPolicy && (r.referrerPolicy = A.referrerPolicy), f = void 0 !== A.mode ? A.mode : o, "navigate" === f) throw S.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != f && (r.mode = f), void 0 !== A.credentials && (r.credentials = A.credentials), void 0 !== A.cache && (r.cache = A.cache), "only-if-cached" === r.cache && "same-origin" !== r.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== A.redirect && (r.redirect = A.redirect), null != A.integrity && (r.integrity = String(A.integrity)), void 0 !== A.keepalive && (r.keepalive = Boolean(A.keepalive)), void 0 !== A.method) {
            let e = A.method;
            if (!g(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (h.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = I[e] ?? u(e), r.method = e;
        }
        void 0 !== A.signal && (m = A.signal), this[N] = r;
        const y = new AbortController;
        if (this[w] = y.signal, this[w][R] = this[R], null != m) {
            if (!m || "boolean" != typeof m.aborted || "function" != typeof m.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (m.aborted) y.abort(m.reason);
            else {
                this[P] = y;
                const e = new WeakRef(y), A = function() {
                    const A = e.deref();
                    void 0 !== A && A.abort(this.reason);
                };
                try {
                    ("function" == typeof U && U(m) === J || O(m, "abort").length >= J) && M(100, m);
                } catch  {}
                l.addAbortListener(m, A), G.register(y, {
                    signal: m,
                    abort: A
                });
            }
        }
        if (this[k] = new s(v), this[k][_] = r.headersList, this[k][D] = "request", this[k][R] = this[R], "no-cors" === f) {
            if (!Q.has(r.method)) throw new TypeError(`'${r.method} is unsupported in no-cors mode.`);
            this[k][D] = "request-no-cors";
        }
        if (p) {
            const e = this[k][_], t = void 0 !== A.headers ? A.headers : new i(e);
            if (e.clear(), t instanceof i) {
                for (const [A, n] of t)e.append(A, n);
                e.cookies = t.cookies;
            } else a(this[k], t);
        }
        const T = e instanceof V ? e[N].body : null;
        if (!(null == A.body && null == T || "GET" !== r.method && "HEAD" !== r.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let F = null;
        if (null != A.body) {
            const [e, t] = n(A.body, r.keepalive);
            F = e, t && !this[k][_].contains("content-type") && this[k].append("content-type", t);
        }
        const H = F ?? T;
        if (null != H && null == H.source) {
            if (null != F && null == A.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== r.mode && "cors" !== r.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            r.useCORSPreflightFlag = !0;
        }
        let q = H;
        if (null == F && null != T) {
            if (l.isDisturbed(T.stream) || T.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            Y || (Y = require("./module-3774.js").TransformStream);
            const e = new Y;
            T.stream.pipeThrough(e), q = {
                source: T.source,
                length: T.length,
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
        return S.brandCheck(this, V), this[w];
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
            const A = x({
                ...e,
                body: null
            });
            null != e.body && (A.body = o(e.body));
            return A;
        }(this[N]), A = new V(v);
        A[N] = e, A[R] = this[R], A[k] = new s(v), A[k][_] = e.headersList, A[k][D] = this[k][D], A[k][R] = this[k][R];
        const t = new AbortController;
        return this.signal.aborted ? t.abort(this.signal.reason) : l.addAbortListener(this.signal, ()=>{
            t.abort(this.signal.reason);
        }), A[w] = t.signal, A;
    }
}
function x(e) {
    const A = {
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
        headersList: e.headersList ? new i(e.headersList) : new i
    };
    return A.url = A.urlList[0], A;
}
r(V), Object.defineProperties(V.prototype, {
    method: T,
    url: T,
    headers: T,
    redirect: T,
    clone: T,
    signal: T,
    duplex: T,
    destination: T,
    body: T,
    bodyUsed: T,
    isHistoryNavigation: T,
    isReloadNavigation: T,
    keepalive: T,
    integrity: T,
    cache: T,
    credentials: T,
    attribute: T,
    referrerPolicy: T,
    referrer: T,
    mode: T,
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
        allowedValues: m
    },
    {
        key: "mode",
        converter: S.converters.DOMString,
        allowedValues: B
    },
    {
        key: "credentials",
        converter: S.converters.DOMString,
        allowedValues: p
    },
    {
        key: "cache",
        converter: S.converters.DOMString,
        allowedValues: f
    },
    {
        key: "redirect",
        converter: S.converters.DOMString,
        allowedValues: C
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
