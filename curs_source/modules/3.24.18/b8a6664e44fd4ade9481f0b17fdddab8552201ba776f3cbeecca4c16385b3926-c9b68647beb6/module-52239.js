"use strict";
const { extractBody: r, mixinBody: s, cloneBody: o } = require("./module-87052.js"), { Headers: n, fill: i, HeadersList: E } = require("./module-2932.js"), { FinalizationRegistry: Q } = require("./module-71531.js")(), g = require("./module-9361.js"), { isValidHTTPToken: C, sameOrigin: B, normalizeMethod: a, makePolicyContainer: I, normalizeMethodRecord: c } = require("./module-75728.js"), { forbiddenMethodsSet: h, corsSafeListedMethodsSet: l, referrerPolicy: u, requestRedirect: d, requestMode: f, requestCredentials: y, requestCache: D, requestDuplex: R } = require("./module-96687.js"), { kEnumerableProperty: w } = g, { kHeaders: p, kSignal: k, kState: F, kGuard: N, kRealm: b } = require("./module-35899.js"), { webidl: S } = require("./module-48005.js"), { getGlobalOrigin: m } = require("./module-69523.js"), { URLSerializer: U } = require("./module-3631.js"), { kHeadersList: L, kConstruct: M } = require("./module-58832.js"), Y = require(42613), { getMaxListeners: T, setMaxListeners: J, getEventListeners: G, defaultMaxListeners: H } = require(24434);
let v = globalThis.TransformStream;
const V = Symbol("abortController"), x = new Q(({ signal: A, abort: e })=>{
    A.removeEventListener("abort", e);
});
class O {
    constructor(A, e = {}){
        if (A === M) return;
        S.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), A = S.converters.RequestInfo(A), e = S.converters.RequestInit(e), this[b] = {
            settingsObject: {
                baseUrl: m(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: I()
            }
        };
        let s = null, o = null;
        const Q = this[b].settingsObject.baseUrl;
        let u = null;
        if ("string" == typeof A) {
            let e;
            try {
                e = new URL(A, Q);
            } catch (e) {
                throw new TypeError("Failed to parse URL from " + A, {
                    cause: e
                });
            }
            if (e.username || e.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + A);
            s = W({
                urlList: [
                    e
                ]
            }), o = "cors";
        } else Y(A instanceof O), s = A[F], u = A[k];
        const d = this[b].settingsObject.origin;
        let f = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && B(s.window, d) && (f = s.window), null != e.window) throw new TypeError(`'window' option '${f}' must be null`);
        "window" in e && (f = "no-window"), s = W({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[b].settingsObject,
            window: f,
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
        const y = 0 !== Object.keys(e).length;
        if (y && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== e.referrer) {
            const A = e.referrer;
            if ("" === A) s.referrer = "no-referrer";
            else {
                let e;
                try {
                    e = new URL(A, Q);
                } catch (e) {
                    throw new TypeError(`Referrer "${A}" is not a valid URL.`, {
                        cause: e
                    });
                }
                "about:" === e.protocol && "client" === e.hostname || d && !B(e, this[b].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = e;
            }
        }
        let D;
        if (void 0 !== e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), D = void 0 !== e.mode ? e.mode : o, "navigate" === D) throw S.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != D && (s.mode = D), void 0 !== e.credentials && (s.credentials = e.credentials), void 0 !== e.cache && (s.cache = e.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== e.redirect && (s.redirect = e.redirect), null != e.integrity && (s.integrity = String(e.integrity)), void 0 !== e.keepalive && (s.keepalive = Boolean(e.keepalive)), void 0 !== e.method) {
            let A = e.method;
            if (!C(A)) throw new TypeError(`'${A}' is not a valid HTTP method.`);
            if (h.has(A.toUpperCase())) throw new TypeError(`'${A}' HTTP method is unsupported.`);
            A = c[A] ?? a(A), s.method = A;
        }
        void 0 !== e.signal && (u = e.signal), this[F] = s;
        const R = new AbortController;
        if (this[k] = R.signal, this[k][b] = this[b], null != u) {
            if (!u || "boolean" != typeof u.aborted || "function" != typeof u.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (u.aborted) R.abort(u.reason);
            else {
                this[V] = R;
                const A = new WeakRef(R), e = function() {
                    const e = A.deref();
                    void 0 !== e && e.abort(this.reason);
                };
                try {
                    ("function" == typeof T && T(u) === H || G(u, "abort").length >= H) && J(100, u);
                } catch  {}
                g.addAbortListener(u, e), x.register(R, {
                    signal: u,
                    abort: e
                });
            }
        }
        if (this[p] = new n(M), this[p][L] = s.headersList, this[p][N] = "request", this[p][b] = this[b], "no-cors" === D) {
            if (!l.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[p][N] = "request-no-cors";
        }
        if (y) {
            const A = this[p][L], t = void 0 !== e.headers ? e.headers : new E(A);
            if (A.clear(), t instanceof E) {
                for (const [e, r] of t)A.append(e, r);
                A.cookies = t.cookies;
            } else i(this[p], t);
        }
        const w = A instanceof O ? A[F].body : null;
        if (!(null == e.body && null == w || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let U = null;
        if (null != e.body) {
            const [A, t] = r(e.body, s.keepalive);
            U = A, t && !this[p][L].contains("content-type") && this[p].append("content-type", t);
        }
        const q = U ?? w;
        if (null != q && null == q.source) {
            if (null != U && null == e.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let P = q;
        if (null == U && null != w) {
            if (g.isDisturbed(w.stream) || w.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            v || (v = require(63774).TransformStream);
            const A = new v;
            w.stream.pipeThrough(A), P = {
                source: w.source,
                length: w.length,
                stream: A.readable
            };
        }
        this[F].body = P;
    }
    get method() {
        return S.brandCheck(this, O), this[F].method;
    }
    get url() {
        return S.brandCheck(this, O), U(this[F].url);
    }
    get headers() {
        return S.brandCheck(this, O), this[p];
    }
    get destination() {
        return S.brandCheck(this, O), this[F].destination;
    }
    get referrer() {
        return S.brandCheck(this, O), "no-referrer" === this[F].referrer ? "" : "client" === this[F].referrer ? "about:client" : this[F].referrer.toString();
    }
    get referrerPolicy() {
        return S.brandCheck(this, O), this[F].referrerPolicy;
    }
    get mode() {
        return S.brandCheck(this, O), this[F].mode;
    }
    get credentials() {
        return this[F].credentials;
    }
    get cache() {
        return S.brandCheck(this, O), this[F].cache;
    }
    get redirect() {
        return S.brandCheck(this, O), this[F].redirect;
    }
    get integrity() {
        return S.brandCheck(this, O), this[F].integrity;
    }
    get keepalive() {
        return S.brandCheck(this, O), this[F].keepalive;
    }
    get isReloadNavigation() {
        return S.brandCheck(this, O), this[F].reloadNavigation;
    }
    get isHistoryNavigation() {
        return S.brandCheck(this, O), this[F].historyNavigation;
    }
    get signal() {
        return S.brandCheck(this, O), this[k];
    }
    get body() {
        return S.brandCheck(this, O), this[F].body ? this[F].body.stream : null;
    }
    get bodyUsed() {
        return S.brandCheck(this, O), !!this[F].body && g.isDisturbed(this[F].body.stream);
    }
    get duplex() {
        return S.brandCheck(this, O), "half";
    }
    clone() {
        if (S.brandCheck(this, O), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const A = function(A) {
            const e = W({
                ...A,
                body: null
            });
            null != A.body && (e.body = o(A.body));
            return e;
        }(this[F]), e = new O(M);
        e[F] = A, e[b] = this[b], e[p] = new n(M), e[p][L] = A.headersList, e[p][N] = this[p][N], e[p][b] = this[p][b];
        const t = new AbortController;
        return this.signal.aborted ? t.abort(this.signal.reason) : g.addAbortListener(this.signal, ()=>{
            t.abort(this.signal.reason);
        }), e[k] = t.signal, e;
    }
}
function W(A) {
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
        ...A,
        headersList: A.headersList ? new E(A.headersList) : new E
    };
    return e.url = e.urlList[0], e;
}
s(O), Object.defineProperties(O.prototype, {
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
}), S.converters.Request = S.interfaceConverter(O), S.converters.RequestInfo = function(A) {
    return "string" == typeof A ? S.converters.USVString(A) : A instanceof O ? S.converters.Request(A) : S.converters.USVString(A);
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
        allowedValues: u
    },
    {
        key: "mode",
        converter: S.converters.DOMString,
        allowedValues: f
    },
    {
        key: "credentials",
        converter: S.converters.DOMString,
        allowedValues: y
    },
    {
        key: "cache",
        converter: S.converters.DOMString,
        allowedValues: D
    },
    {
        key: "redirect",
        converter: S.converters.DOMString,
        allowedValues: d
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
        converter: S.nullableConverter((A)=>S.converters.AbortSignal(A, {
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
        allowedValues: R
    }
]), module.exports = {
    Request: O,
    makeRequest: W
};
