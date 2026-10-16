"use strict";
const { Headers: n, HeadersList: s, fill: o } = require("./module-72848.js"), { extractBody: i, cloneBody: a, mixinBody: c } = require("./module-29608.js"), l = require("./module-83589.js"), { kEnumerableProperty: u } = l, { isValidReasonPhrase: d, isCancelled: p, isAborted: m, isBlobLike: h, serializeJavascriptValueToJSONString: f, isErrorLike: g, isomorphicEncode: y } = require("./module-98116.js"), { redirectStatusSet: w, nullBodyStatus: v, DOMException: _ } = require("./module-22955.js"), { kState: A, kHeaders: S, kGuard: b, kRealm: E } = require("./module-77271.js"), { webidl: I } = require("./module-18193.js"), { FormData: C } = require("./module-66522.js"), { getGlobalOrigin: k } = require("./module-13967.js"), { URLSerializer: x } = require("./module-64387.js"), { kHeadersList: T, kConstruct: R } = require("./module-15532.js"), B = require("./module-42613.js"), { types: P } = require("./module-39023.js"), J = globalThis.ReadableStream || require("./module-63774.js").ReadableStream, M = new TextEncoder("utf-8");
class q {
    static error() {
        const e = {
            settingsObject: {}
        }, t = new q;
        return t[A] = N(), t[E] = e, t[S][T] = t[A].headersList, t[S][b] = "immutable", t[S][E] = e, t;
    }
    static json(e, t = {}) {
        I.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== t && (t = I.converters.ResponseInit(t));
        const r = M.encode(f(e)), n = i(r), s = {
            settingsObject: {}
        }, o = new q;
        return o[E] = s, o[S][b] = "response", o[S][E] = s, L(o, t, {
            body: n[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, t = 302) {
        const r = {
            settingsObject: {}
        };
        let n;
        I.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = I.converters.USVString(e), t = I.converters["unsigned short"](t);
        try {
            n = new URL(e, k());
        } catch (t) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: t
            });
        }
        if (!w.has(t)) throw new RangeError("Invalid status code " + t);
        const s = new q;
        s[E] = r, s[S][b] = "immutable", s[S][E] = r, s[A].status = t;
        const o = y(x(n));
        return s[A].headersList.append("location", o), s;
    }
    constructor(e = null, t = {}){
        null !== e && (e = I.converters.BodyInit(e)), t = I.converters.ResponseInit(t), this[E] = {
            settingsObject: {}
        }, this[A] = O({}), this[S] = new n(R), this[S][b] = "response", this[S][T] = this[A].headersList, this[S][E] = this[E];
        let r = null;
        if (null != e) {
            const [t, n] = i(e);
            r = {
                body: t,
                type: n
            };
        }
        L(this, t, r);
    }
    get type() {
        return I.brandCheck(this, q), this[A].type;
    }
    get url() {
        I.brandCheck(this, q);
        const e = this[A].urlList, t = e[e.length - 1] ?? null;
        return null === t ? "" : x(t, !0);
    }
    get redirected() {
        return I.brandCheck(this, q), this[A].urlList.length > 1;
    }
    get status() {
        return I.brandCheck(this, q), this[A].status;
    }
    get ok() {
        return I.brandCheck(this, q), this[A].status >= 200 && this[A].status <= 299;
    }
    get statusText() {
        return I.brandCheck(this, q), this[A].statusText;
    }
    get headers() {
        return I.brandCheck(this, q), this[S];
    }
    get body() {
        return I.brandCheck(this, q), this[A].body ? this[A].body.stream : null;
    }
    get bodyUsed() {
        return I.brandCheck(this, q), !!this[A].body && l.isDisturbed(this[A].body.stream);
    }
    clone() {
        if (I.brandCheck(this, q), this.bodyUsed || this.body && this.body.locked) throw I.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = D(this[A]), t = new q;
        return t[A] = e, t[E] = this[E], t[S][T] = e.headersList, t[S][b] = this[S][b], t[S][E] = this[S][E], t;
    }
}
function D(e) {
    if (e.internalResponse) return U(D(e.internalResponse), e.type);
    const t = O({
        ...e,
        body: null
    });
    return null != e.body && (t.body = a(e.body)), t;
}
function O(e) {
    return {
        aborted: !1,
        rangeRequested: !1,
        timingAllowPassed: !1,
        requestIncludesCredentials: !1,
        type: "default",
        status: 200,
        timingInfo: null,
        cacheState: "",
        statusText: "",
        ...e,
        headersList: e.headersList ? new s(e.headersList) : new s,
        urlList: e.urlList ? [
            ...e.urlList
        ] : []
    };
}
function N(e) {
    return O({
        type: "error",
        status: 0,
        error: g(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function F(e, t) {
    return t = {
        internalResponse: e,
        ...t
    }, new Proxy(e, {
        get: (e, r)=>r in t ? t[r] : e[r],
        set: (e, r, n)=>(B(!(r in t)), e[r] = n, !0)
    });
}
function U(e, t) {
    return "basic" === t ? F(e, {
        type: "basic",
        headersList: e.headersList
    }) : "cors" === t ? F(e, {
        type: "cors",
        headersList: e.headersList
    }) : "opaque" === t ? F(e, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === t ? F(e, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void B(!1);
}
function L(e, t, r) {
    if (null !== t.status && (t.status < 200 || t.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in t && null != t.statusText && !d(String(t.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in t && null != t.status && (e[A].status = t.status), "statusText" in t && null != t.statusText && (e[A].statusText = t.statusText), "headers" in t && null != t.headers && o(e[S], t.headers), r) {
        if (v.includes(e.status)) throw I.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[A].body = r.body, null == r.type || e[A].headersList.contains("Content-Type") || e[A].headersList.append("content-type", r.type);
    }
}
c(q), Object.defineProperties(q.prototype, {
    type: u,
    url: u,
    status: u,
    ok: u,
    redirected: u,
    statusText: u,
    headers: u,
    clone: u,
    body: u,
    bodyUsed: u,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: !0
    }
}), Object.defineProperties(q, {
    json: u,
    redirect: u,
    error: u
}), I.converters.ReadableStream = I.interfaceConverter(J), I.converters.FormData = I.interfaceConverter(C), I.converters.URLSearchParams = I.interfaceConverter(URLSearchParams), I.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? I.converters.USVString(e) : h(e) ? I.converters.Blob(e, {
        strict: !1
    }) : P.isArrayBuffer(e) || P.isTypedArray(e) || P.isDataView(e) ? I.converters.BufferSource(e) : l.isFormDataLike(e) ? I.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? I.converters.URLSearchParams(e) : I.converters.DOMString(e);
}, I.converters.BodyInit = function(e) {
    return e instanceof J ? I.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : I.converters.XMLHttpRequestBodyInit(e);
}, I.converters.ResponseInit = I.dictionaryConverter([
    {
        key: "status",
        converter: I.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: I.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: I.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: N,
    makeResponse: O,
    makeAppropriateNetworkError: function(e, t = null) {
        return B(p(e)), m(e) ? N(Object.assign(new _("The operation was aborted.", "AbortError"), {
            cause: t
        })) : N(Object.assign(new _("Request was cancelled."), {
            cause: t
        }));
    },
    filterResponse: U,
    Response: q,
    cloneResponse: D
};
