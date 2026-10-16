"use strict";
const { extractBody: r, mixinBody: s, cloneBody: o, bodyUnusable: n } = require("./module-33095.js"), { Headers: i, fill: a, HeadersList: Q, setHeadersGuard: g, getHeadersGuard: E, setHeadersList: B, getHeadersList: c } = require("./module-48969.js"), { FinalizationRegistry: I } = require("./module-59362.js")(), C = require("./module-55201.js"), h = require(57975), { isValidHTTPToken: l, sameOrigin: u, environmentSettingsObject: d } = require("./module-48215.js"), { forbiddenMethodsSet: f, corsSafeListedMethodsSet: w, referrerPolicy: y, requestRedirect: D, requestMode: p, requestCredentials: k, requestCache: R, requestDuplex: F } = require("./module-99354.js"), { kEnumerableProperty: m, normalizedMethodRecordsBase: b, normalizedMethodRecords: N } = C, { kHeaders: S, kSignal: M, kState: U, kDispatcher: L } = require("./module-15978.js"), { webidl: T } = require("./module-43290.js"), { URLSerializer: Y } = require("./module-52603.js"), { kConstruct: G } = require("./module-76992.js"), J = require(56970), { getMaxListeners: v, setMaxListeners: H, getEventListeners: V, defaultMaxListeners: x } = require(78474), W = Symbol("abortController"), O = new I(({ signal: A, abort: e })=>{
    A.removeEventListener("abort", e);
}), P = new WeakMap;
function q(A) {
    return function e() {
        const t = A.deref();
        if (void 0 !== t) {
            O.unregister(e), this.removeEventListener("abort", e), t.abort(this.reason);
            const A = P.get(t.signal);
            if (void 0 !== A) {
                if (0 !== A.size) {
                    for (const e of A){
                        const A = e.deref();
                        void 0 !== A && A.abort(this.reason);
                    }
                    A.clear();
                }
                P.delete(t.signal);
            }
        }
    };
}
let Z = !1;
class z {
    constructor(A, e = {}){
        if (T.util.markAsUncloneable(this), A === G) return;
        const t = "Request constructor";
        T.argumentLengthCheck(arguments, 1, t), A = T.converters.RequestInfo(A, t, "input"), e = T.converters.RequestInit(e, t, "init");
        let s = null, o = null;
        const E = d.settingsObject.baseUrl;
        let I = null;
        if ("string" == typeof A) {
            let t;
            this[L] = e.dispatcher;
            try {
                t = new URL(A, E);
            } catch (e) {
                throw new TypeError("Failed to parse URL from " + A, {
                    cause: e
                });
            }
            if (t.username || t.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + A);
            s = K({
                urlList: [
                    t
                ]
            }), o = "cors";
        } else this[L] = e.dispatcher || A[L], J(A instanceof z), s = A[U], I = A[M];
        const h = d.settingsObject.origin;
        let y = "client";
        if ("EnvironmentSettingsObject" === s.window?.constructor?.name && u(s.window, h) && (y = s.window), null != e.window) throw new TypeError(`'window' option '${y}' must be null`);
        "window" in e && (y = "no-window"), s = K({
            method: s.method,
            headersList: s.headersList,
            unsafeRequest: s.unsafeRequest,
            client: d.settingsObject,
            window: y,
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
        const D = 0 !== Object.keys(e).length;
        if (D && ("navigate" === s.mode && (s.mode = "same-origin"), s.reloadNavigation = !1, s.historyNavigation = !1, s.origin = "client", s.referrer = "client", s.referrerPolicy = "", s.url = s.urlList[s.urlList.length - 1], s.urlList = [
            s.url
        ]), void 0 !== e.referrer) {
            const A = e.referrer;
            if ("" === A) s.referrer = "no-referrer";
            else {
                let e;
                try {
                    e = new URL(A, E);
                } catch (e) {
                    throw new TypeError(`Referrer "${A}" is not a valid URL.`, {
                        cause: e
                    });
                }
                "about:" === e.protocol && "client" === e.hostname || h && !u(e, d.settingsObject.baseUrl) ? s.referrer = "client" : s.referrer = e;
            }
        }
        let p;
        if (void 0 !== e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), p = void 0 !== e.mode ? e.mode : o, "navigate" === p) throw T.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
        });
        if (null != p && (s.mode = p), void 0 !== e.credentials && (s.credentials = e.credentials), void 0 !== e.cache && (s.cache = e.cache), "only-if-cached" === s.cache && "same-origin" !== s.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== e.redirect && (s.redirect = e.redirect), null != e.integrity && (s.integrity = String(e.integrity)), void 0 !== e.keepalive && (s.keepalive = Boolean(e.keepalive)), void 0 !== e.method) {
            let A = e.method;
            const t = N[A];
            if (void 0 !== t) s.method = t;
            else {
                if (!l(A)) throw new TypeError(`'${A}' is not a valid HTTP method.`);
                const e = A.toUpperCase();
                if (f.has(e)) throw new TypeError(`'${A}' HTTP method is unsupported.`);
                A = b[e] ?? A, s.method = A;
            }
            Z || "patch" !== s.method || (process.emitWarning("Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.", {
                code: "UNDICI-FETCH-patch"
            }), Z = !0);
        }
        void 0 !== e.signal && (I = e.signal), this[U] = s;
        const k = new AbortController;
        if (this[M] = k.signal, null != I) {
            if (!I || "boolean" != typeof I.aborted || "function" != typeof I.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (I.aborted) k.abort(I.reason);
            else {
                this[W] = k;
                const A = q(new WeakRef(k));
                try {
                    ("function" == typeof v && v(I) === x || V(I, "abort").length >= x) && H(1500, I);
                } catch  {}
                C.addAbortListener(I, A), O.register(k, {
                    signal: I,
                    abort: A
                }, A);
            }
        }
        if (this[S] = new i(G), B(this[S], s.headersList), g(this[S], "request"), "no-cors" === p) {
            if (!w.has(s.method)) throw new TypeError(`'${s.method} is unsupported in no-cors mode.`);
            g(this[S], "request-no-cors");
        }
        if (D) {
            const A = c(this[S]), t = void 0 !== e.headers ? e.headers : new Q(A);
            if (A.clear(), t instanceof Q) {
                for (const { name: e, value: r } of t.rawValues())A.append(e, r, !1);
                A.cookies = t.cookies;
            } else a(this[S], t);
        }
        const R = A instanceof z ? A[U].body : null;
        if (!(null == e.body && null == R || "GET" !== s.method && "HEAD" !== s.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let F = null;
        if (null != e.body) {
            const [A, t] = r(e.body, s.keepalive);
            F = A, t && !c(this[S]).contains("content-type", !0) && this[S].append("content-type", t);
        }
        const m = F ?? R;
        if (null != m && null == m.source) {
            if (null != F && null == e.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
            if ("same-origin" !== s.mode && "cors" !== s.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            s.useCORSPreflightFlag = !0;
        }
        let Y = m;
        if (null == F && null != R) {
            if (n(A)) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
            const e = new TransformStream;
            R.stream.pipeThrough(e), Y = {
                source: R.source,
                length: R.length,
                stream: e.readable
            };
        }
        this[U].body = Y;
    }
    get method() {
        return T.brandCheck(this, z), this[U].method;
    }
    get url() {
        return T.brandCheck(this, z), Y(this[U].url);
    }
    get headers() {
        return T.brandCheck(this, z), this[S];
    }
    get destination() {
        return T.brandCheck(this, z), this[U].destination;
    }
    get referrer() {
        return T.brandCheck(this, z), "no-referrer" === this[U].referrer ? "" : "client" === this[U].referrer ? "about:client" : this[U].referrer.toString();
    }
    get referrerPolicy() {
        return T.brandCheck(this, z), this[U].referrerPolicy;
    }
    get mode() {
        return T.brandCheck(this, z), this[U].mode;
    }
    get credentials() {
        return this[U].credentials;
    }
    get cache() {
        return T.brandCheck(this, z), this[U].cache;
    }
    get redirect() {
        return T.brandCheck(this, z), this[U].redirect;
    }
    get integrity() {
        return T.brandCheck(this, z), this[U].integrity;
    }
    get keepalive() {
        return T.brandCheck(this, z), this[U].keepalive;
    }
    get isReloadNavigation() {
        return T.brandCheck(this, z), this[U].reloadNavigation;
    }
    get isHistoryNavigation() {
        return T.brandCheck(this, z), this[U].historyNavigation;
    }
    get signal() {
        return T.brandCheck(this, z), this[M];
    }
    get body() {
        return T.brandCheck(this, z), this[U].body ? this[U].body.stream : null;
    }
    get bodyUsed() {
        return T.brandCheck(this, z), !!this[U].body && C.isDisturbed(this[U].body.stream);
    }
    get duplex() {
        return T.brandCheck(this, z), "half";
    }
    clone() {
        if (T.brandCheck(this, z), n(this)) throw new TypeError("unusable");
        const A = X(this[U]), e = new AbortController;
        if (this.signal.aborted) e.abort(this.signal.reason);
        else {
            let A = P.get(this.signal);
            void 0 === A && (A = new Set, P.set(this.signal, A));
            const t = new WeakRef(e);
            A.add(t), C.addAbortListener(e.signal, q(t));
        }
        return _(A, e.signal, E(this[S]));
    }
    [h.inspect.custom](A, e) {
        null === e.depth && (e.depth = 2), e.colors ??= !0;
        const t = {
            method: this.method,
            url: this.url,
            headers: this.headers,
            destination: this.destination,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            mode: this.mode,
            credentials: this.credentials,
            cache: this.cache,
            redirect: this.redirect,
            integrity: this.integrity,
            keepalive: this.keepalive,
            isReloadNavigation: this.isReloadNavigation,
            isHistoryNavigation: this.isHistoryNavigation,
            signal: this.signal
        };
        return `Request ${h.formatWithOptions(e, t)}`;
    }
}
function K(A) {
    return {
        method: A.method ?? "GET",
        localURLsOnly: A.localURLsOnly ?? !1,
        unsafeRequest: A.unsafeRequest ?? !1,
        body: A.body ?? null,
        client: A.client ?? null,
        reservedClient: A.reservedClient ?? null,
        replacesClientId: A.replacesClientId ?? "",
        window: A.window ?? "client",
        keepalive: A.keepalive ?? !1,
        serviceWorkers: A.serviceWorkers ?? "all",
        initiator: A.initiator ?? "",
        destination: A.destination ?? "",
        priority: A.priority ?? null,
        origin: A.origin ?? "client",
        policyContainer: A.policyContainer ?? "client",
        referrer: A.referrer ?? "client",
        referrerPolicy: A.referrerPolicy ?? "",
        mode: A.mode ?? "no-cors",
        useCORSPreflightFlag: A.useCORSPreflightFlag ?? !1,
        credentials: A.credentials ?? "same-origin",
        useCredentials: A.useCredentials ?? !1,
        cache: A.cache ?? "default",
        redirect: A.redirect ?? "follow",
        integrity: A.integrity ?? "",
        cryptoGraphicsNonceMetadata: A.cryptoGraphicsNonceMetadata ?? "",
        parserMetadata: A.parserMetadata ?? "",
        reloadNavigation: A.reloadNavigation ?? !1,
        historyNavigation: A.historyNavigation ?? !1,
        userActivation: A.userActivation ?? !1,
        taintedOrigin: A.taintedOrigin ?? !1,
        redirectCount: A.redirectCount ?? 0,
        responseTainting: A.responseTainting ?? "basic",
        preventNoCacheCacheControlHeaderModification: A.preventNoCacheCacheControlHeaderModification ?? !1,
        done: A.done ?? !1,
        timingAllowFailed: A.timingAllowFailed ?? !1,
        urlList: A.urlList,
        url: A.urlList[0],
        headersList: A.headersList ? new Q(A.headersList) : new Q
    };
}
function X(A) {
    const e = K({
        ...A,
        body: null
    });
    return null != A.body && (e.body = o(e, A.body)), e;
}
function _(A, e, t) {
    const r = new z(G);
    return r[U] = A, r[M] = e, r[S] = new i(G), B(r[S], A.headersList), g(r[S], t), r;
}
s(z), Object.defineProperties(z.prototype, {
    method: m,
    url: m,
    headers: m,
    redirect: m,
    clone: m,
    signal: m,
    duplex: m,
    destination: m,
    body: m,
    bodyUsed: m,
    isHistoryNavigation: m,
    isReloadNavigation: m,
    keepalive: m,
    integrity: m,
    cache: m,
    credentials: m,
    attribute: m,
    referrerPolicy: m,
    referrer: m,
    mode: m,
    [Symbol.toStringTag]: {
        value: "Request",
        configurable: !0
    }
}), T.converters.Request = T.interfaceConverter(z), T.converters.RequestInfo = function(A, e, t) {
    return "string" == typeof A ? T.converters.USVString(A, e, t) : A instanceof z ? T.converters.Request(A, e, t) : T.converters.USVString(A, e, t);
}, T.converters.AbortSignal = T.interfaceConverter(AbortSignal), T.converters.RequestInit = T.dictionaryConverter([
    {
        key: "method",
        converter: T.converters.ByteString
    },
    {
        key: "headers",
        converter: T.converters.HeadersInit
    },
    {
        key: "body",
        converter: T.nullableConverter(T.converters.BodyInit)
    },
    {
        key: "referrer",
        converter: T.converters.USVString
    },
    {
        key: "referrerPolicy",
        converter: T.converters.DOMString,
        allowedValues: y
    },
    {
        key: "mode",
        converter: T.converters.DOMString,
        allowedValues: p
    },
    {
        key: "credentials",
        converter: T.converters.DOMString,
        allowedValues: k
    },
    {
        key: "cache",
        converter: T.converters.DOMString,
        allowedValues: R
    },
    {
        key: "redirect",
        converter: T.converters.DOMString,
        allowedValues: D
    },
    {
        key: "integrity",
        converter: T.converters.DOMString
    },
    {
        key: "keepalive",
        converter: T.converters.boolean
    },
    {
        key: "signal",
        converter: T.nullableConverter((A)=>T.converters.AbortSignal(A, "RequestInit", "signal", {
                strict: !1
            }))
    },
    {
        key: "window",
        converter: T.converters.any
    },
    {
        key: "duplex",
        converter: T.converters.DOMString,
        allowedValues: F
    },
    {
        key: "dispatcher",
        converter: T.converters.any
    }
]), module.exports = {
    Request: z,
    makeRequest: K,
    fromInnerRequest: _,
    cloneRequest: X
};
