"use strict";
const { Headers: t, HeadersList: s, fill: o } = require("./module-2932.js"), { extractBody: r, cloneBody: i, mixinBody: l } = require("./module-7052.js"), d = require("./module-9361.js"), { kEnumerableProperty: m } = d, { isValidReasonPhrase: c, isCancelled: p, isAborted: A, isBlobLike: u, serializeJavascriptValueToJSONString: g, isErrorLike: T, isomorphicEncode: h } = require("./module-5728.js"), { redirectStatusSet: k, nullBodyStatus: _, DOMException: E } = require("./module-6687.js"), { kState: f, kHeaders: C, kGuard: I, kRealm: v } = require("./module-5899.js"), { webidl: y } = require("./module-8005.js"), { FormData: S } = require("./module-1606.js"), { getGlobalOrigin: R } = require("./module-9523.js"), { URLSerializer: N } = require("./module-3631.js"), { kHeadersList: B, kConstruct: w } = require("./module-8832.js"), b = require("./module-2613.js"), { types: Q } = require("./module-9023.js"), D = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, M = new TextEncoder("utf-8");
class O {
    static error() {
        const e = {
            settingsObject: {}
        }, a = new O;
        return a[f] = P(), a[v] = e, a[C][B] = a[f].headersList, a[C][I] = "immutable", a[C][v] = e, a;
    }
    static json(e, a = {}) {
        y.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== a && (a = y.converters.ResponseInit(a));
        const n = M.encode(g(e)), t = r(n), s = {
            settingsObject: {}
        }, o = new O;
        return o[v] = s, o[C][I] = "response", o[C][v] = s, x(o, a, {
            body: t[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, a = 302) {
        const n = {
            settingsObject: {}
        };
        let t;
        y.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = y.converters.USVString(e), a = y.converters["unsigned short"](a);
        try {
            t = new URL(e, R());
        } catch (a) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: a
            });
        }
        if (!k.has(a)) throw new RangeError("Invalid status code " + a);
        const s = new O;
        s[v] = n, s[C][I] = "immutable", s[C][v] = n, s[f].status = a;
        const o = h(N(t));
        return s[f].headersList.append("location", o), s;
    }
    constructor(e = null, a = {}){
        null !== e && (e = y.converters.BodyInit(e)), a = y.converters.ResponseInit(a), this[v] = {
            settingsObject: {}
        }, this[f] = F({}), this[C] = new t(w), this[C][I] = "response", this[C][B] = this[f].headersList, this[C][v] = this[v];
        let n = null;
        if (null != e) {
            const [a, t] = r(e);
            n = {
                body: a,
                type: t
            };
        }
        x(this, a, n);
    }
    get type() {
        return y.brandCheck(this, O), this[f].type;
    }
    get url() {
        y.brandCheck(this, O);
        const e = this[f].urlList, a = e[e.length - 1] ?? null;
        return null === a ? "" : N(a, !0);
    }
    get redirected() {
        return y.brandCheck(this, O), this[f].urlList.length > 1;
    }
    get status() {
        return y.brandCheck(this, O), this[f].status;
    }
    get ok() {
        return y.brandCheck(this, O), this[f].status >= 200 && this[f].status <= 299;
    }
    get statusText() {
        return y.brandCheck(this, O), this[f].statusText;
    }
    get headers() {
        return y.brandCheck(this, O), this[C];
    }
    get body() {
        return y.brandCheck(this, O), this[f].body ? this[f].body.stream : null;
    }
    get bodyUsed() {
        return y.brandCheck(this, O), !!this[f].body && d.isDisturbed(this[f].body.stream);
    }
    clone() {
        if (y.brandCheck(this, O), this.bodyUsed || this.body && this.body.locked) throw y.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = U(this[f]), a = new O;
        return a[f] = e, a[v] = this[v], a[C][B] = e.headersList, a[C][I] = this[C][I], a[C][v] = this[C][v], a;
    }
}
function U(e) {
    if (e.internalResponse) return G(U(e.internalResponse), e.type);
    const a = F({
        ...e,
        body: null
    });
    return null != e.body && (a.body = i(e.body)), a;
}
function F(e) {
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
function P(e) {
    return F({
        type: "error",
        status: 0,
        error: T(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function L(e, a) {
    return a = {
        internalResponse: e,
        ...a
    }, new Proxy(e, {
        get: (e, n)=>n in a ? a[n] : e[n],
        set: (e, n, t)=>(b(!(n in a)), e[n] = t, !0)
    });
}
function G(e, a) {
    return "basic" === a ? L(e, {
        type: "basic",
        headersList: e.headersList
    }) : "cors" === a ? L(e, {
        type: "cors",
        headersList: e.headersList
    }) : "opaque" === a ? L(e, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === a ? L(e, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void b(!1);
}
function x(e, a, n) {
    if (null !== a.status && (a.status < 200 || a.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in a && null != a.statusText && !c(String(a.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in a && null != a.status && (e[f].status = a.status), "statusText" in a && null != a.statusText && (e[f].statusText = a.statusText), "headers" in a && null != a.headers && o(e[C], a.headers), n) {
        if (_.includes(e.status)) throw y.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[f].body = n.body, null == n.type || e[f].headersList.contains("Content-Type") || e[f].headersList.append("content-type", n.type);
    }
}
l(O), Object.defineProperties(O.prototype, {
    type: m,
    url: m,
    status: m,
    ok: m,
    redirected: m,
    statusText: m,
    headers: m,
    clone: m,
    body: m,
    bodyUsed: m,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: !0
    }
}), Object.defineProperties(O, {
    json: m,
    redirect: m,
    error: m
}), y.converters.ReadableStream = y.interfaceConverter(D), y.converters.FormData = y.interfaceConverter(S), y.converters.URLSearchParams = y.interfaceConverter(URLSearchParams), y.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? y.converters.USVString(e) : u(e) ? y.converters.Blob(e, {
        strict: !1
    }) : Q.isArrayBuffer(e) || Q.isTypedArray(e) || Q.isDataView(e) ? y.converters.BufferSource(e) : d.isFormDataLike(e) ? y.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? y.converters.URLSearchParams(e) : y.converters.DOMString(e);
}, y.converters.BodyInit = function(e) {
    return e instanceof D ? y.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : y.converters.XMLHttpRequestBodyInit(e);
}, y.converters.ResponseInit = y.dictionaryConverter([
    {
        key: "status",
        converter: y.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: y.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: y.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: P,
    makeResponse: F,
    makeAppropriateNetworkError: function(e, a = null) {
        return b(p(e)), A(e) ? P(Object.assign(new E("The operation was aborted.", "AbortError"), {
            cause: a
        })) : P(Object.assign(new E("Request was cancelled."), {
            cause: a
        }));
    },
    filterResponse: G,
    Response: O,
    cloneResponse: U
};
