"use strict";
const { extractBody: n, mixinBody: s, cloneBody: o } = require("./module-29608.js"), { Headers: i, fill: a, HeadersList: c } = require("./module-72848.js"), { FinalizationRegistry: l } = require("./module-84191.js")(), u = require("./module-83589.js"), { isValidHTTPToken: d, sameOrigin: p, normalizeMethod: m, makePolicyContainer: h, normalizeMethodRecord: f } = require("./module-98116.js"), { forbiddenMethodsSet: g, corsSafeListedMethodsSet: y, referrerPolicy: w, requestRedirect: v, requestMode: _, requestCredentials: A, requestCache: S, requestDuplex: b } = require("./module-22955.js"), { kEnumerableProperty: E } = u, { kHeaders: I, kSignal: C, kState: k, kGuard: x, kRealm: T } = require("./module-77271.js"), { webidl: R } = require("./module-18193.js"), { getGlobalOrigin: B } = require("./module-13967.js"), { URLSerializer: P } = require("./module-64387.js"), { kHeadersList: J, kConstruct: M } = require("./module-15532.js"), q = require("./module-42613.js"), { getMaxListeners: D, setMaxListeners: O, getEventListeners: N, defaultMaxListeners: F } = require("./module-24434.js");
let U = globalThis.TransformStream;
const L = Symbol("abortController"), $ = new l(({ signal: e, abort: t })=>{
    e.removeEventListener("abort", t);
});
class Q {
    constructor(e, t = {}){
        if (e === M) return;
        R.argumentLengthCheck(arguments, 1, {
            header: "Request constructor"
        }), e = R.converters.RequestInfo(e), t = R.converters.RequestInit(t), this[T] = {
            settingsObject: {
                baseUrl: B(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: h()
            }
        };
        let s = null, o = null;
        const l = this[T].settingsObject.baseUrl;
        let w = null;
        if ("string" == typeof e) {
            let t;
            try {
                t = new URL(e, l);
            } catch (t) {
                throw new TypeError("Failed to parse URL from " + e, {
                    cause: t
                });
            }
            if (t.username || t.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
            s = j({
                urlList: [
                    t
                ]
            }), o = "cors";
        } else q(e instanceof Q), s = e[k], w = e[C];
        const v = this[T].settingsObject.origin;
        let _ = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && p(s.window, v) && (_ = s.window), null != t.window) throw new TypeError(`'window' option '${_}' must be null`);
        "window" in t && (_ = "no-window"), s = j({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: this[T].settingsObject,
            window: _,
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
        const A = 0 !== Object.keys(t).length;
        if (A && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== t.referrer) {
            const e = t.referrer;
            if ("" === e) s.referrer = "no-referrer";
            else {
                let t;
                try {
                    t = new URL(e, l);
                } catch (t) {
                    throw new TypeError(`Referrer "${e}" is not a valid URL.`, {
                        cause: t
                    });
                }
                "about:" === t.protocol && "client" === t.hostname || v && !p(t, this[T].settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = t;
            }
        }
        let S;
        if (void 0 !== t.referrerPolicy && (s.referrerPolicy = t.referrerPolicy), S = void 0 !== t.mode ? t.mode : o, "navigate" === S) throw R.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != S && (s.mode = S), void 0 !== t.credentials && (s.credentials = t.credentials), void 0 !== t.cache && (s.cache = t.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== t.redirect && (s.redirect = t.redirect), null != t.integrity && (s.integrity = String(t.integrity)), void 0 !== t.keepalive && (s.keepalive = Boolean(t.keepalive)), void 0 !== t.method) {
            let e = t.method;
            if (!d(e)) throw new TypeError(`'${e}' is not a valid HTTP method.`);
            if (g.has(e.toUpperCase())) throw new TypeError(`'${e}' HTTP method is unsupported.`);
            e = f[e] ?? m(e), s.method = e;
        }
        void 0 !== t.signal && (w = t.signal), this[k] = s;
        const b = new AbortController;
        if (this[C] = b.signal, this[C][T] = this[T], null != w) {
            if (!w || "boolean" != typeof w.aborted || "function" != typeof w.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (w.aborted) b.abort(w.reason);
            else {
                this[L] = b;
                const e = new WeakRef(b), t = function() {
                    const t = e.deref();
                    void 0 !== t && t.abort(this.reason);
                };
                try {
                    ("function" == typeof D && D(w) === F || N(w, "abort").length >= F) && O(100, w);
                } catch  {}
                u.addAbortListener(w, t), $.register(b, {
                    signal: w,
                    abort: t
                });
            }
        }
        if (this[I] = new i(M), this[I][J] = s.headersList, this[I][x] = "request", this[I][T] = this[T], "no-cors" === S) {
            if (!y.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            this[I][x] = "request-no-cors";
        }
        if (A) {
            const e = this[I][J], r = void 0 !== t.headers ? t.headers : new c(e);
            if (e.clear(), r instanceof c) {
                for (const [t, n] of r)e.append(t, n);
                e.cookies = r.cookies;
            } else a(this[I], r);
        }
        const E = e instanceof Q ? e[k].body : null;
        if (!(null == t.body && null == E || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let P = null;
        if (null != t.body) {
            const [e, r] = n(t.body, s.keepalive);
            P = e, r && !this[I][J].contains("content-type") && this[I].append("content-type", r);
        }
        const G = P ?? E;
        if (null != G && null == G.source) {
            if (null != P && null == t.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let H = G;
        if (null == P && null != E) {
            if (u.isDisturbed(E.stream) || E.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            U || (U = require("./module-63774.js").TransformStream);
            const e = new U;
            E.stream.pipeThrough(e), H = {
                source: E.source,
                length: E.length,
                stream: e.readable
            };
        }
        this[k].body = H;
    }
    get method() {
        return R.brandCheck(this, Q), this[k].method;
    }
    get url() {
        return R.brandCheck(this, Q), P(this[k].url);
    }
    get headers() {
        return R.brandCheck(this, Q), this[I];
    }
    get destination() {
        return R.brandCheck(this, Q), this[k].destination;
    }
    get referrer() {
        return R.brandCheck(this, Q), "no-referrer" === this[k].referrer ? "" : "client" === this[k].referrer ? "about:client" : this[k].referrer.toString();
    }
    get referrerPolicy() {
        return R.brandCheck(this, Q), this[k].referrerPolicy;
    }
    get mode() {
        return R.brandCheck(this, Q), this[k].mode;
    }
    get credentials() {
        return this[k].credentials;
    }
    get cache() {
        return R.brandCheck(this, Q), this[k].cache;
    }
    get redirect() {
        return R.brandCheck(this, Q), this[k].redirect;
    }
    get integrity() {
        return R.brandCheck(this, Q), this[k].integrity;
    }
    get keepalive() {
        return R.brandCheck(this, Q), this[k].keepalive;
    }
    get isReloadNavigation() {
        return R.brandCheck(this, Q), this[k].reloadNavigation;
    }
    get isHistoryNavigation() {
        return R.brandCheck(this, Q), this[k].historyNavigation;
    }
    get signal() {
        return R.brandCheck(this, Q), this[C];
    }
    get body() {
        return R.brandCheck(this, Q), this[k].body ? this[k].body.stream : null;
    }
    get bodyUsed() {
        return R.brandCheck(this, Q), !!this[k].body && u.isDisturbed(this[k].body.stream);
    }
    get duplex() {
        return R.brandCheck(this, Q), "half";
    }
    clone() {
        if (R.brandCheck(this, Q), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e = function(e) {
            const t = j({
                ...e,
                body: null
            });
            null != e.body && (t.body = o(e.body));
            return t;
        }(this[k]), t = new Q(M);
        t[k] = e, t[T] = this[T], t[I] = new i(M), t[I][J] = e.headersList, t[I][x] = this[I][x], t[I][T] = this[I][T];
        const r = new AbortController;
        return this.signal.aborted ? r.abort(this.signal.reason) : u.addAbortListener(this.signal, ()=>{
            r.abort(this.signal.reason);
        }), t[C] = r.signal, t;
    }
}
function j(e) {
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
        headersList: e.headersList ? new c(e.headersList) : new c
    };
    return t.url = t.urlList[0], t;
}
s(Q), Object.defineProperties(Q.prototype, {
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
}), R.converters.Request = R.interfaceConverter(Q), R.converters.RequestInfo = function(e) {
    return "string" == typeof e ? R.converters.USVString(e) : e instanceof Q ? R.converters.Request(e) : R.converters.USVString(e);
}, R.converters.AbortSignal = R.interfaceConverter(AbortSignal), R.converters.RequestInit = R.dictionaryConverter([
    {
        key: "method",
        converter: R.converters.ByteString
    },
    {
        key: "headers",
        converter: R.converters.HeadersInit
    },
    {
        key: "body",
        converter: R.nullableConverter(R.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: R.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: R.converters.DOMString,
        allowedValues: w
    },
    {
        key: "mode",
        converter: R.converters.DOMString,
        allowedValues: _
    },
    {
        key: "credentials",
        converter: R.converters.DOMString,
        allowedValues: A
    },
    {
        key: "cache",
        converter: R.converters.DOMString,
        allowedValues: S
    },
    {
        key: "redirect",
        converter: R.converters.DOMString,
        allowedValues: v
    },
    {
        key: "integrity",
        converter: R.converters.DOMString
    },
    {
        key: "keepalive",
        converter: R.converters.boolean
    },
    {
        key: "signal",
        converter: R.nullableConverter((e)=>R.converters.AbortSignal(e, {
                strict: !1
            }))
    },
    {
        key: "window",
        converter: R.converters.any
    },
    {
        key: "duplex",
        converter: R.converters.DOMString,
        allowedValues: b
    }
]), module.exports = {
    Request: Q,
    makeRequest: j
};
