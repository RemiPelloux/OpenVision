"use strict";
const { extractBody: t, mixinBody: s, cloneBody: o } = require("./module-7052.js"), { Headers: r, fill: i, HeadersList: l } = require("./module-2932.js"), { FinalizationRegistry: d } = require("./module-1531.js")(), m = require("./module-9361.js"), { isValidHTTPToken: c, sameOrigin: p, normalizeMethod: A, makePolicyContainer: u, normalizeMethodRecord: g } = require("./module-5728.js"), { forbiddenMethodsSet: T, corsSafeListedMethodsSet: h, referrerPolicy: k, requestRedirect: _, requestMode: E, requestCredentials: f, requestCache: C, requestDuplex: I } = require("./module-6687.js"), { kEnumerableProperty: v } = m, { kHeaders: y, kSignal: S, kState: R, kGuard: N, kRealm: B } = require("./module-5899.js"), { webidl: w } = require("./module-8005.js"), { getGlobalOrigin: b } = require("./module-9523.js"), { URLSerializer: Q } = require("./module-3631.js"), { kHeadersList: D, kConstruct: M } = require("./module-8832.js"), O = require("./module-2613.js"), { getMaxListeners: U, setMaxListeners: F, getEventListeners: P, defaultMaxListeners: L } = require("./module-4434.js");
let G = globalThis.TransformStream;
const x = Symbol("abortController"), V = new d(({ signal: e, abort: a })=>{
    e.removeEventListener("abort", a);
});
class Y {
    constructor(e, a = {}){
        if (e === M) return;
        w.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = w.converters.RequestInfo(e), a = w.converters.RequestInit(a), this[B] = {
            settingsObject: {
                baseUrl: b(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: u()
            }
        };
        let s = null, o = null;
        const d = this[B].settingsObject.baseUrl;
        let k = null;
        if ("string" == typeof e) {
            let a;
            try {
                a = new URL(e, d);
            } catch (a) {
                throw new TypeError("Failed to parse URL from " + e, {
                    cause: a
                });
            }
            if (a.username || a.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
            s = q({
                urlList: [
                    a
                ]
            }), o = "cors";
        } else O(e instanceof Y), s = e[R], k = e[S];
        const _ = this[B].settingsObject.origin;
        let E = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && p(s.window, _) && (E = s.window), null != a.window) throw new TypeError(`'window' option '${E}' must be null`);
        "window" in a && (E = "no-window"), s = q({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[B].settingsObject,
            window: E,
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
        const f = 0 !== Object.keys(a).length;
        if (f && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== a.referrer) {
            const e = a.referrer;
            if ("" === e) s.referrer = "no-referrer";
            else {
                let a;
                try {
                    a = new URL(e, d);
                } catch (a) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: a
                    });
                }
                "about:" === a.protocol && "client" === a.hostname || _ && !p(a, this[B].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = a;
            }
        }
        let C;
        if (void 0 !== a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), C = void 0 !== a.mode ? a.mode : o, "navigate" === C) throw w.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != C && (s.mode = C), void 0 !== a.credentials && (s.credentials = a.credentials), void 0 !== a.cache && (s.cache = a.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== a.redirect && (s.redirect = a.redirect), null != a.integrity && (s.integrity = String(a.integrity)), void 0 !== a.keepalive && (s.keepalive = Boolean(a.keepalive)), void 0 !== a.method) {
            let e = a.method;
            if (!c(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (T.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = g[e] ?? A(e), s.method = e;
        }
        void 0 !== a.signal && (k = a.signal), this[R] = s;
        const I = new AbortController;
        if (this[S] = I.signal, this[S][B] = this[B], null != k) {
            if (!k || "boolean" != typeof k.aborted || "function" != typeof k.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (k.aborted) I.abort(k.reason);
            else {
                this[x] = I;
                const e = new WeakRef(I), a = function() {
                    const a = e.deref();
                    void 0 !== a && a.abort(this.reason);
                };
                try {
                    ("function" == typeof U && U(k) === L || P(k, "abort").length >= L) && F(100, k);
                } catch  {}
                m.addAbortListener(k, a), V.register(I, {
                    signal: k,
                    abort: a
                });
            }
        }
        if (this[y] = new r(M), this[y][D] = s.headersList, this[y][N] = "request", this[y][B] = this[B], "no-cors" === C) {
            if (!h.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[y][N] = "request-no-cors";
        }
        if (f) {
            const e = this[y][D], n = void 0 !== a.headers ? a.headers : new l(e);
            if (e.clear(), n instanceof l) {
                for (const [a, t] of n)e.append(a, t);
                e.cookies = n.cookies;
            } else i(this[y], n);
        }
        const v = e instanceof Y ? e[R].body : null;
        if (!(null == a.body && null == v || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let Q = null;
        if (null != a.body) {
            const [e, n] = t(a.body, s.keepalive);
            Q = e, n && !this[y][D].contains("content-type") && this[y].append("content-type", n);
        }
        const H = Q ?? v;
        if (null != H && null == H.source) {
            if (null != Q && null == a.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let J = H;
        if (null == Q && null != v) {
            if (m.isDisturbed(v.stream) || v.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            G || (G = require("./module-3774.js").TransformStream);
            const e = new G;
            v.stream.pipeThrough(e), J = {
                source: v.source,
                length: v.length,
                stream: e.readable
            };
        }
        this[R].body = J;
    }
    get method() {
        return w.brandCheck(this, Y), this[R].method;
    }
    get url() {
        return w.brandCheck(this, Y), Q(this[R].url);
    }
    get headers() {
        return w.brandCheck(this, Y), this[y];
    }
    get destination() {
        return w.brandCheck(this, Y), this[R].destination;
    }
    get referrer() {
        return w.brandCheck(this, Y), "no-referrer" === this[R].referrer ? "" : "client" === this[R].referrer ? "about:client" : this[R].referrer.toString();
    }
    get referrerPolicy() {
        return w.brandCheck(this, Y), this[R].referrerPolicy;
    }
    get mode() {
        return w.brandCheck(this, Y), this[R].mode;
    }
    get credentials() {
        return this[R].credentials;
    }
    get cache() {
        return w.brandCheck(this, Y), this[R].cache;
    }
    get redirect() {
        return w.brandCheck(this, Y), this[R].redirect;
    }
    get integrity() {
        return w.brandCheck(this, Y), this[R].integrity;
    }
    get keepalive() {
        return w.brandCheck(this, Y), this[R].keepalive;
    }
    get isReloadNavigation() {
        return w.brandCheck(this, Y), this[R].reloadNavigation;
    }
    get isHistoryNavigation() {
        return w.brandCheck(this, Y), this[R].historyNavigation;
    }
    get signal() {
        return w.brandCheck(this, Y), this[S];
    }
    get body() {
        return w.brandCheck(this, Y), this[R].body ? this[R].body.stream : null;
    }
    get bodyUsed() {
        return w.brandCheck(this, Y), !!this[R].body && m.isDisturbed(this[R].body.stream);
    }
    get duplex() {
        return w.brandCheck(this, Y), "half";
    }
    clone() {
        if (w.brandCheck(this, Y), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e = function(e) {
            const a = q({
                ...e,
                body: null
            });
            null != e.body && (a.body = o(e.body));
            return a;
        }(this[R]), a = new Y(M);
        a[R] = e, a[B] = this[B], a[y] = new r(M), a[y][D] = e.headersList, a[y][N] = this[y][N], a[y][B] = this[y][B];
        const n = new AbortController;
        return this.signal.aborted ? n.abort(this.signal.reason) : m.addAbortListener(this.signal, ()=>{
            n.abort(this.signal.reason);
        }), a[S] = n.signal, a;
    }
}
function q(e) {
    const a = {
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
        headersList: e.headersList ? new l(e.headersList) : new l
    };
    return a.url = a.urlList[0], a;
}
s(Y), Object.defineProperties(Y.prototype, {
    method: v,
    url: v,
    headers: v,
    redirect: v,
    clone: v,
    signal: v,
    duplex: v,
    destination: v,
    body: v,
    bodyUsed: v,
    isHistoryNavigation: v,
    isReloadNavigation: v,
    keepalive: v,
    integrity: v,
    cache: v,
    credentials: v,
    attribute: v,
    referrerPolicy: v,
    referrer: v,
    mode: v,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: !0
    }
}), w.converters.Request = w.interfaceConverter(Y), w.converters.RequestInfo = function(e) {
    return "string" == typeof e ? w.converters.USVString(e) : e instanceof Y ? w.converters.Request(e) : w.converters.USVString(e);
}, w.converters.AbortSignal = w.interfaceConverter(AbortSignal), w.converters.RequestInit = w.dictionaryConverter([
    {
        key: "method",
        converter: w.converters.ByteString
    },
    {
        key: "headers",
        converter: w.converters.HeadersInit
    },
    {
        key: "body",
        converter: w.nullableConverter(w.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: w.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: w.converters.DOMString,
        allowedValues: k
    },
    {
        key: "mode",
        converter: w.converters.DOMString,
        allowedValues: E
    },
    {
        key: "credentials",
        converter: w.converters.DOMString,
        allowedValues: f
    },
    {
        key: "cache",
        converter: w.converters.DOMString,
        allowedValues: C
    },
    {
        key: "redirect",
        converter: w.converters.DOMString,
        allowedValues: _
    },
    {
        key: "integrity",
        converter: w.converters.DOMString
    },
    {
        key: "keepalive",
        converter: w.converters.boolean
    },
    {
        key: "signal",
        converter: w.nullableConverter((e)=>w.converters.AbortSignal(e, {
                strict: !1
            }))
    },
    {
        key: "window",
        converter: w.converters.any
    },
    {
        key: "duplex",
        converter: w.converters.DOMString,
        allowedValues: I
    }
]), module.exports = {
    Request: Y,
    makeRequest: q
};
