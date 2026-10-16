"use strict";
const { extractBody: a, mixinBody: s, cloneBody: o } = require("./module-7052.js"), { Headers: r, fill: i, HeadersList: A } = require("./module-2932.js"), { FinalizationRegistry: c } = require("./module-1531.js")(), l = require("./module-9361.js"), { isValidHTTPToken: d, sameOrigin: m, normalizeMethod: u, makePolicyContainer: g, normalizeMethodRecord: p } = require("./module-5728.js"), { forbiddenMethodsSet: E, corsSafeListedMethodsSet: h, referrerPolicy: T, requestRedirect: k, requestMode: f, requestCredentials: _, requestCache: I, requestDuplex: C } = require("./module-6687.js"), { kEnumerableProperty: y } = l, { kHeaders: B, kSignal: Q, kState: v, kGuard: R, kRealm: N } = require("./module-5899.js"), { webidl: S } = require("./module-8005.js"), { getGlobalOrigin: w } = require("./module-9523.js"), { URLSerializer: b } = require("./module-3631.js"), { kHeadersList: D, kConstruct: M } = require("./module-8832.js"), F = require("./module-2613.js"), { getMaxListeners: O, setMaxListeners: U, getEventListeners: L, defaultMaxListeners: P } = require("./module-4434.js");
let x = globalThis.TransformStream;
const G = Symbol("abortController"), Y = new c(({ signal: e, abort: n })=>{
    e.removeEventListener("abort", n);
});
class J {
    constructor(e, n = {}){
        if (e === M) return;
        S.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = S.converters.RequestInfo(e), n = S.converters.RequestInit(n), this[N] = {
            settingsObject: {
                baseUrl: w(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: g()
            }
        };
        let s = null, o = null;
        const c = this[N].settingsObject.baseUrl;
        let T = null;
        if ("string" == typeof e) {
            let n;
            try {
                n = new URL(e, c);
            } catch (n) {
                throw new TypeError("Failed to parse URL from " + e, {
                    cause: n
                });
            }
            if (n.username || n.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
            s = V({
                urlList: [
                    n
                ]
            }), o = "cors";
        } else F(e instanceof J), s = e[v], T = e[Q];
        const k = this[N].settingsObject.origin;
        let f = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && m(s.window, k) && (f = s.window), null != n.window) throw new TypeError(`'window' option '${f}' must be null`);
        "window" in n && (f = "no-window"), s = V({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[N].settingsObject,
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
        const _ = 0 !== Object.keys(n).length;
        if (_ && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== n.referrer) {
            const e = n.referrer;
            if ("" === e) s.referrer = "no-referrer";
            else {
                let n;
                try {
                    n = new URL(e, c);
                } catch (n) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: n
                    });
                }
                "about:" === n.protocol && "client" === n.hostname || k && !m(n, this[N].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = n;
            }
        }
        let I;
        if (void 0 !== n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy), I = void 0 !== n.mode ? n.mode : o, "navigate" === I) throw S.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != I && (s.mode = I), void 0 !== n.credentials && (s.credentials = n.credentials), void 0 !== n.cache && (s.cache = n.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== n.redirect && (s.redirect = n.redirect), null != n.integrity && (s.integrity = String(n.integrity)), void 0 !== n.keepalive && (s.keepalive = Boolean(n.keepalive)), void 0 !== n.method) {
            let e = n.method;
            if (!d(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (E.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = p[e] ?? u(e), s.method = e;
        }
        void 0 !== n.signal && (T = n.signal), this[v] = s;
        const C = new AbortController;
        if (this[Q] = C.signal, this[Q][N] = this[N], null != T) {
            if (!T || "boolean" != typeof T.aborted || "function" != typeof T.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (T.aborted) C.abort(T.reason);
            else {
                this[G] = C;
                const e = new WeakRef(C), n = function() {
                    const n = e.deref();
                    void 0 !== n && n.abort(this.reason);
                };
                try {
                    ("function" == typeof O && O(T) === P || L(T, "abort").length >= P) && U(100, T);
                } catch  {}
                l.addAbortListener(T, n), Y.register(C, {
                    signal: T,
                    abort: n
                });
            }
        }
        if (this[B] = new r(M), this[B][D] = s.headersList, this[B][R] = "request", this[B][N] = this[N], "no-cors" === I) {
            if (!h.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[B][R] = "request-no-cors";
        }
        if (_) {
            const e = this[B][D], t = void 0 !== n.headers ? n.headers : new A(e);
            if (e.clear(), t instanceof A) {
                for (const [n, a] of t)e.append(n, a);
                e.cookies = t.cookies;
            } else i(this[B], t);
        }
        const y = e instanceof J ? e[v].body : null;
        if (!(null == n.body && null == y || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let b = null;
        if (null != n.body) {
            const [e, t] = a(n.body, s.keepalive);
            b = e, t && !this[B][D].contains("content-type") && this[B].append("content-type", t);
        }
        const q = b ?? y;
        if (null != q && null == q.source) {
            if (null != b && null == n.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let H = q;
        if (null == b && null != y) {
            if (l.isDisturbed(y.stream) || y.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            x || (x = require("./module-3774.js").TransformStream);
            const e = new x;
            y.stream.pipeThrough(e), H = {
                source: y.source,
                length: y.length,
                stream: e.readable
            };
        }
        this[v].body = H;
    }
    get method() {
        return S.brandCheck(this, J), this[v].method;
    }
    get url() {
        return S.brandCheck(this, J), b(this[v].url);
    }
    get headers() {
        return S.brandCheck(this, J), this[B];
    }
    get destination() {
        return S.brandCheck(this, J), this[v].destination;
    }
    get referrer() {
        return S.brandCheck(this, J), "no-referrer" === this[v].referrer ? "" : "client" === this[v].referrer ? "about:client" : this[v].referrer.toString();
    }
    get referrerPolicy() {
        return S.brandCheck(this, J), this[v].referrerPolicy;
    }
    get mode() {
        return S.brandCheck(this, J), this[v].mode;
    }
    get credentials() {
        return this[v].credentials;
    }
    get cache() {
        return S.brandCheck(this, J), this[v].cache;
    }
    get redirect() {
        return S.brandCheck(this, J), this[v].redirect;
    }
    get integrity() {
        return S.brandCheck(this, J), this[v].integrity;
    }
    get keepalive() {
        return S.brandCheck(this, J), this[v].keepalive;
    }
    get isReloadNavigation() {
        return S.brandCheck(this, J), this[v].reloadNavigation;
    }
    get isHistoryNavigation() {
        return S.brandCheck(this, J), this[v].historyNavigation;
    }
    get signal() {
        return S.brandCheck(this, J), this[Q];
    }
    get body() {
        return S.brandCheck(this, J), this[v].body ? this[v].body.stream : null;
    }
    get bodyUsed() {
        return S.brandCheck(this, J), !!this[v].body && l.isDisturbed(this[v].body.stream);
    }
    get duplex() {
        return S.brandCheck(this, J), "half";
    }
    clone() {
        if (S.brandCheck(this, J), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e = function(e) {
            const n = V({
                ...e,
                body: null
            });
            null != e.body && (n.body = o(e.body));
            return n;
        }(this[v]), n = new J(M);
        n[v] = e, n[N] = this[N], n[B] = new r(M), n[B][D] = e.headersList, n[B][R] = this[B][R], n[B][N] = this[B][N];
        const t = new AbortController;
        return this.signal.aborted ? t.abort(this.signal.reason) : l.addAbortListener(this.signal, ()=>{
            t.abort(this.signal.reason);
        }), n[Q] = t.signal, n;
    }
}
function V(e) {
    const n = {
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
        headersList: e.headersList ? new A(e.headersList) : new A
    };
    return n.url = n.urlList[0], n;
}
s(J), Object.defineProperties(J.prototype, {
    method: y,
    url: y,
    headers: y,
    redirect: y,
    clone: y,
    signal: y,
    duplex: y,
    destination: y,
    body: y,
    bodyUsed: y,
    isHistoryNavigation: y,
    isReloadNavigation: y,
    keepalive: y,
    integrity: y,
    cache: y,
    credentials: y,
    attribute: y,
    referrerPolicy: y,
    referrer: y,
    mode: y,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: !0
    }
}), S.converters.Request = S.interfaceConverter(J), S.converters.RequestInfo = function(e) {
    return "string" == typeof e ? S.converters.USVString(e) : e instanceof J ? S.converters.Request(e) : S.converters.USVString(e);
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
        allowedValues: T
    },
    {
        key: "mode",
        converter: S.converters.DOMString,
        allowedValues: f
    },
    {
        key: "credentials",
        converter: S.converters.DOMString,
        allowedValues: _
    },
    {
        key: "cache",
        converter: S.converters.DOMString,
        allowedValues: I
    },
    {
        key: "redirect",
        converter: S.converters.DOMString,
        allowedValues: k
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
        allowedValues: C
    }
]), module.exports = {
    Request: J,
    makeRequest: V
};
