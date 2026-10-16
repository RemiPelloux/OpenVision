"use strict";
const { Headers: a, HeadersList: s, fill: o } = require("./module-2932.js"), { extractBody: r, cloneBody: i, mixinBody: A } = require("./module-7052.js"), c = require("./module-9361.js"), { kEnumerableProperty: l } = c, { isValidReasonPhrase: d, isCancelled: m, isAborted: u, isBlobLike: g, serializeJavascriptValueToJSONString: p, isErrorLike: E, isomorphicEncode: h } = require("./module-5728.js"), { redirectStatusSet: T, nullBodyStatus: k, DOMException: f } = require("./module-6687.js"), { kState: _, kHeaders: I, kGuard: C, kRealm: y } = require("./module-5899.js"), { webidl: B } = require("./module-8005.js"), { FormData: Q } = require("./module-1606.js"), { getGlobalOrigin: v } = require("./module-9523.js"), { URLSerializer: R } = require("./module-3631.js"), { kHeadersList: N, kConstruct: S } = require("./module-8832.js"), w = require("./module-2613.js"), { types: b } = require("./module-9023.js"), D = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, M = new TextEncoder("utf-8");
class F {
    static error() {
        const e = {
            settingsObject: {}
        }, n = new F;
        return n[_] = L(), n[y] = e, n[I][N] = n[_].headersList, n[I][C] = "immutable", n[I][y] = e, n;
    }
    static json(e, n = {}) {
        B.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== n && (n = B.converters.ResponseInit(n));
        const t = M.encode(p(e)), a = r(t), s = {
            settingsObject: {}
        }, o = new F;
        return o[y] = s, o[I][C] = "response", o[I][y] = s, G(o, n, {
            body: a[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, n = 302) {
        const t = {
            settingsObject: {}
        };
        let a;
        B.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = B.converters.USVString(e), n = B.converters["unsigned short"](n);
        try {
            a = new URL(e, v());
        } catch (n) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: n
            });
        }
        if (!T.has(n)) throw new RangeError("Invalid status code " + n);
        const s = new F;
        s[y] = t, s[I][C] = "immutable", s[I][y] = t, s[_].status = n;
        const o = h(R(a));
        return s[_].headersList.append("location", o), s;
    }
    constructor(e = null, n = {}){
        null !== e && (e = B.converters.BodyInit(e)), n = B.converters.ResponseInit(n), this[y] = {
            settingsObject: {}
        }, this[_] = U({}), this[I] = new a(S), this[I][C] = "response", this[I][N] = this[_].headersList, this[I][y] = this[y];
        let t = null;
        if (null != e) {
            const [n, a] = r(e);
            t = {
                body: n,
                type: a
            };
        }
        G(this, n, t);
    }
    get type() {
        return B.brandCheck(this, F), this[_].type;
    }
    get url() {
        B.brandCheck(this, F);
        const e = this[_].urlList, n = e[e.length - 1] ?? null;
        return null === n ? "" : R(n, !0);
    }
    get redirected() {
        return B.brandCheck(this, F), this[_].urlList.length > 1;
    }
    get status() {
        return B.brandCheck(this, F), this[_].status;
    }
    get ok() {
        return B.brandCheck(this, F), this[_].status >= 200 && this[_].status <= 299;
    }
    get statusText() {
        return B.brandCheck(this, F), this[_].statusText;
    }
    get headers() {
        return B.brandCheck(this, F), this[I];
    }
    get body() {
        return B.brandCheck(this, F), this[_].body ? this[_].body.stream : null;
    }
    get bodyUsed() {
        return B.brandCheck(this, F), !!this[_].body && c.isDisturbed(this[_].body.stream);
    }
    clone() {
        if (B.brandCheck(this, F), this.bodyUsed || this.body && this.body.locked) throw B.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = O(this[_]), n = new F;
        return n[_] = e, n[y] = this[y], n[I][N] = e.headersList, n[I][C] = this[I][C], n[I][y] = this[I][y], n;
    }
}
function O(e) {
    if (e.internalResponse) return x(O(e.internalResponse), e.type);
    const n = U({
        ...e,
        body: null
    });
    return null != e.body && (n.body = i(e.body)), n;
}
function U(e) {
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
function L(e) {
    return U({
        type: "error",
        status: 0,
        error: E(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function P(e, n) {
    return n = {
        internalResponse: e,
        ...n
    }, new Proxy(e, {
        get: (e, t)=>t in n ? n[t] : e[t],
        set: (e, t, a)=>(w(!(t in n)), e[t] = a, !0)
    });
}
function x(e, n) {
    return "basic" === n ? P(e, {
        type: "basic",
        headersList: e.headersList
    }) : "cors" === n ? P(e, {
        type: "cors",
        headersList: e.headersList
    }) : "opaque" === n ? P(e, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === n ? P(e, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void w(!1);
}
function G(e, n, t) {
    if (null !== n.status && (n.status < 200 || n.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in n && null != n.statusText && !d(String(n.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in n && null != n.status && (e[_].status = n.status), "statusText" in n && null != n.statusText && (e[_].statusText = n.statusText), "headers" in n && null != n.headers && o(e[I], n.headers), t) {
        if (k.includes(e.status)) throw B.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[_].body = t.body, null == t.type || e[_].headersList.contains("Content-Type") || e[_].headersList.append("content-type", t.type);
    }
}
A(F), Object.defineProperties(F.prototype, {
    type: l,
    url: l,
    status: l,
    ok: l,
    redirected: l,
    statusText: l,
    headers: l,
    clone: l,
    body: l,
    bodyUsed: l,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: !0
    }
}), Object.defineProperties(F, {
    json: l,
    redirect: l,
    error: l
}), B.converters.ReadableStream = B.interfaceConverter(D), B.converters.FormData = B.interfaceConverter(Q), B.converters.URLSearchParams = B.interfaceConverter(URLSearchParams), B.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? B.converters.USVString(e) : g(e) ? B.converters.Blob(e, {
        strict: !1
    }) : b.isArrayBuffer(e) || b.isTypedArray(e) || b.isDataView(e) ? B.converters.BufferSource(e) : c.isFormDataLike(e) ? B.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? B.converters.URLSearchParams(e) : B.converters.DOMString(e);
}, B.converters.BodyInit = function(e) {
    return e instanceof D ? B.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : B.converters.XMLHttpRequestBodyInit(e);
}, B.converters.ResponseInit = B.dictionaryConverter([
    {
        key: "status",
        converter: B.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: B.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: B.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: L,
    makeResponse: U,
    makeAppropriateNetworkError: function(e, n = null) {
        return w(m(e)), u(e) ? L(Object.assign(new f("The operation was aborted.", "AbortError"), {
            cause: n
        })) : L(Object.assign(new f("Request was cancelled."), {
            cause: n
        }));
    },
    filterResponse: x,
    Response: F,
    cloneResponse: O
};
