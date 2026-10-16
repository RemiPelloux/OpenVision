"use strict";
const { extractBody: t, mixinBody: s, cloneBody: o } = require("./module-7052.js"), { Headers: r, fill: i, HeadersList: A } = require("./module-2932.js"), { FinalizationRegistry: l } = require("./module-1531.js")(), c = require("./module-9361.js"), { isValidHTTPToken: m, sameOrigin: d, normalizeMethod: g, makePolicyContainer: u, normalizeMethodRecord: E } = require("./module-5728.js"), { forbiddenMethodsSet: p, corsSafeListedMethodsSet: T, referrerPolicy: k, requestRedirect: I, requestMode: h, requestCredentials: _, requestCache: C, requestDuplex: f } = require("./module-6687.js"), { kEnumerableProperty: B } = c, { kHeaders: Q, kSignal: y, kState: R, kGuard: N, kRealm: v } = require("./module-5899.js"), { webidl: S } = require("./module-8005.js"), { getGlobalOrigin: D } = require("./module-9523.js"), { URLSerializer: w } = require("./module-3631.js"), { kHeadersList: b, kConstruct: M } = require("./module-8832.js"), F = require("./module-2613.js"), { getMaxListeners: O, setMaxListeners: U, getEventListeners: L, defaultMaxListeners: P } = require("./module-4434.js");
let x = globalThis.TransformStream;
const G = Symbol("abortController"), Y = new l(({ signal: e, abort: n })=>{
    e.removeEventListener("abort", n);
});
class J {
    constructor(e, n = {}){
        if (e === M) return;
        S.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = S.converters.RequestInfo(e), n = S.converters.RequestInit(n), this[v] = {
            settingsObject: {
                baseUrl: D(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: u()
            }
        };
        let s = null, o = null;
        const l = this[v].settingsObject.baseUrl;
        let k = null;
        if ("string" == typeof e) {
            let n;
            try {
                n = new URL(e, l);
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
        } else F(e instanceof J), s = e[R], k = e[y];
        const I = this[v].settingsObject.origin;
        let h = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && d(s.window, I) && (h = s.window), null != n.window) throw new TypeError(`'window' option '${h}' must be null`);
        "window" in n && (h = "no-window"), s = V({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[v].settingsObject,
            window: h,
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
                    n = new URL(e, l);
                } catch (n) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: n
                    });
                }
                "about:" === n.protocol && "client" === n.hostname || I && !d(n, this[v].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = n;
            }
        }
        let C;
        if (void 0 !== n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy), C = void 0 !== n.mode ? n.mode : o, "navigate" === C) throw S.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != C && (s.mode = C), void 0 !== n.credentials && (s.credentials = n.credentials), void 0 !== n.cache && (s.cache = n.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== n.redirect && (s.redirect = n.redirect), null != n.integrity && (s.integrity = String(n.integrity)), void 0 !== n.keepalive && (s.keepalive = Boolean(n.keepalive)), void 0 !== n.method) {
            let e = n.method;
            if (!m(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (p.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = E[e] ?? g(e), s.method = e;
        }
        void 0 !== n.signal && (k = n.signal), this[R] = s;
        const f = new AbortController;
        if (this[y] = f.signal, this[y][v] = this[v], null != k) {
            if (!k || "boolean" != typeof k.aborted || "function" != typeof k.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (k.aborted) f.abort(k.reason);
            else {
                this[G] = f;
                const e = new WeakRef(f), n = function() {
                    const n = e.deref();
                    void 0 !== n && n.abort(this.reason);
                };
                try {
                    ("function" == typeof O && O(k) === P || L(k, "abort").length >= P) && U(100, k);
                } catch  {}
                c.addAbortListener(k, n), Y.register(f, {
                    signal: k,
                    abort: n
                });
            }
        }
        if (this[Q] = new r(M), this[Q][b] = s.headersList, this[Q][N] = "request", this[Q][v] = this[v], "no-cors" === C) {
            if (!T.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[Q][N] = "request-no-cors";
        }
        if (_) {
            const e = this[Q][b], a = void 0 !== n.headers ? n.headers : new A(e);
            if (e.clear(), a instanceof A) {
                for (const [n, t] of a)e.append(n, t);
                e.cookies = a.cookies;
            } else i(this[Q], a);
        }
        const B = e instanceof J ? e[R].body : null;
        if (!(null == n.body && null == B || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let w = null;
        if (null != n.body) {
            const [e, a] = t(n.body, s.keepalive);
            w = e, a && !this[Q][b].contains("content-type") && this[Q].append("content-type", a);
        }
        const q = w ?? B;
        if (null != q && null == q.source) {
            if (null != w && null == n.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let H = q;
        if (null == w && null != B) {
            if (c.isDisturbed(B.stream) || B.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            x || (x = require("./module-3774.js").TransformStream);
            const e = new x;
            B.stream.pipeThrough(e), H = {
                source: B.source,
                length: B.length,
                stream: e.readable
            };
        }
        this[R].body = H;
    }
    get method() {
        return S.brandCheck(this, J), this[R].method;
    }
    get url() {
        return S.brandCheck(this, J), w(this[R].url);
    }
    get headers() {
        return S.brandCheck(this, J), this[Q];
    }
    get destination() {
        return S.brandCheck(this, J), this[R].destination;
    }
    get referrer() {
        return S.brandCheck(this, J), "no-referrer" === this[R].referrer ? "" : "client" === this[R].referrer ? "about:client" : this[R].referrer.toString();
    }
    get referrerPolicy() {
        return S.brandCheck(this, J), this[R].referrerPolicy;
    }
    get mode() {
        return S.brandCheck(this, J), this[R].mode;
    }
    get credentials() {
        return this[R].credentials;
    }
    get cache() {
        return S.brandCheck(this, J), this[R].cache;
    }
    get redirect() {
        return S.brandCheck(this, J), this[R].redirect;
    }
    get integrity() {
        return S.brandCheck(this, J), this[R].integrity;
    }
    get keepalive() {
        return S.brandCheck(this, J), this[R].keepalive;
    }
    get isReloadNavigation() {
        return S.brandCheck(this, J), this[R].reloadNavigation;
    }
    get isHistoryNavigation() {
        return S.brandCheck(this, J), this[R].historyNavigation;
    }
    get signal() {
        return S.brandCheck(this, J), this[y];
    }
    get body() {
        return S.brandCheck(this, J), this[R].body ? this[R].body.stream : null;
    }
    get bodyUsed() {
        return S.brandCheck(this, J), !!this[R].body && c.isDisturbed(this[R].body.stream);
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
        }(this[R]), n = new J(M);
        n[R] = e, n[v] = this[v], n[Q] = new r(M), n[Q][b] = e.headersList, n[Q][N] = this[Q][N], n[Q][v] = this[Q][v];
        const a = new AbortController;
        return this.signal.aborted ? a.abort(this.signal.reason) : c.addAbortListener(this.signal, ()=>{
            a.abort(this.signal.reason);
        }), n[y] = a.signal, n;
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
    method: B,
    url: B,
    headers: B,
    redirect: B,
    clone: B,
    signal: B,
    duplex: B,
    destination: B,
    body: B,
    bodyUsed: B,
    isHistoryNavigation: B,
    isReloadNavigation: B,
    keepalive: B,
    integrity: B,
    cache: B,
    credentials: B,
    attribute: B,
    referrerPolicy: B,
    referrer: B,
    mode: B,
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
        allowedValues: k
    },
    {
        key: "mode",
        converter: S.converters.DOMString,
        allowedValues: h
    },
    {
        key: "credentials",
        converter: S.converters.DOMString,
        allowedValues: _
    },
    {
        key: "cache",
        converter: S.converters.DOMString,
        allowedValues: C
    },
    {
        key: "redirect",
        converter: S.converters.DOMString,
        allowedValues: I
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
        allowedValues: f
    }
]), module.exports = {
    Request: J,
    makeRequest: V
};
