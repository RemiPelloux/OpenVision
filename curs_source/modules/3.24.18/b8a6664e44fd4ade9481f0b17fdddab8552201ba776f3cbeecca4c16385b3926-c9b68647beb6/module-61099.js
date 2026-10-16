"use strict";
const { Headers: r, HeadersList: s, fill: o } = require("./module-2932.js"), { extractBody: n, cloneBody: i, mixinBody: E } = require("./module-87052.js"), Q = require("./module-9361.js"), { kEnumerableProperty: g } = Q, { isValidReasonPhrase: C, isCancelled: B, isAborted: a, isBlobLike: I, serializeJavascriptValueToJSONString: c, isErrorLike: h, isomorphicEncode: l } = require("./module-75728.js"), { redirectStatusSet: u, nullBodyStatus: d, DOMException: f } = require("./module-96687.js"), { kState: y, kHeaders: D, kGuard: R, kRealm: w } = require("./module-35899.js"), { webidl: p } = require("./module-48005.js"), { FormData: k } = require("./module-81606.js"), { getGlobalOrigin: F } = require("./module-69523.js"), { URLSerializer: N } = require("./module-3631.js"), { kHeadersList: b, kConstruct: S } = require("./module-58832.js"), m = require(42613), { types: U } = require(39023), L = globalThis.ReadableStream || require(63774).ReadableStream, M = new TextEncoder("utf-8");
class Y {
    static error() {
        const A = {
            settingsObject: {}
        }, e = new Y;
        return e[y] = G(), e[w] = A, e[D][b] = e[y].headersList, e[D][R] = "immutable", e[D][w] = A, e;
    }
    static json(A, e = {}) {
        p.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== e && (e = p.converters.ResponseInit(e));
        const t = M.encode(c(A)), r = n(t), s = {
            settingsObject: {}
        }, o = new Y;
        return o[w] = s, o[D][R] = "response", o[D][w] = s, V(o, e, {
            body: r[0],
            type: "application/json"
        }), o;
    }
    static redirect(A, e = 302) {
        const t = {
            settingsObject: {}
        };
        let r;
        p.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), A = p.converters.USVString(A), e = p.converters["unsigned short"](e);
        try {
            r = new URL(A, F());
        } catch (e) {
            throw Object.assign(new TypeError("Failed to parse URL from " + A), {
                cause: e
            });
        }
        if (!u.has(e)) throw new RangeError("Invalid status code " + e);
        const s = new Y;
        s[w] = t, s[D][R] = "immutable", s[D][w] = t, s[y].status = e;
        const o = l(N(r));
        return s[y].headersList.append("location", o), s;
    }
    constructor(A = null, e = {}){
        null !== A && (A = p.converters.BodyInit(A)), e = p.converters.ResponseInit(e), this[w] = {
            settingsObject: {}
        }, this[y] = J({}), this[D] = new r(S), this[D][R] = "response", this[D][b] = this[y].headersList, this[D][w] = this[w];
        let t = null;
        if (null != A) {
            const [e, r] = n(A);
            t = {
                body: e,
                type: r
            };
        }
        V(this, e, t);
    }
    get type() {
        return p.brandCheck(this, Y), this[y].type;
    }
    get url() {
        p.brandCheck(this, Y);
        const A = this[y].urlList, e = A[A.length - 1] ?? null;
        return null === e ? "" : N(e, !0);
    }
    get redirected() {
        return p.brandCheck(this, Y), this[y].urlList.length > 1;
    }
    get status() {
        return p.brandCheck(this, Y), this[y].status;
    }
    get ok() {
        return p.brandCheck(this, Y), this[y].status >= 200 && this[y].status <= 299;
    }
    get statusText() {
        return p.brandCheck(this, Y), this[y].statusText;
    }
    get headers() {
        return p.brandCheck(this, Y), this[D];
    }
    get body() {
        return p.brandCheck(this, Y), this[y].body ? this[y].body.stream : null;
    }
    get bodyUsed() {
        return p.brandCheck(this, Y), !!this[y].body && Q.isDisturbed(this[y].body.stream);
    }
    clone() {
        if (p.brandCheck(this, Y), this.bodyUsed || this.body && this.body.locked) throw p.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const A = T(this[y]), e = new Y;
        return e[y] = A, e[w] = this[w], e[D][b] = A.headersList, e[D][R] = this[D][R], e[D][w] = this[D][w], e;
    }
}
function T(A) {
    if (A.internalResponse) return v(T(A.internalResponse), A.type);
    const e = J({
        ...A,
        body: null
    });
    return null != A.body && (e.body = i(A.body)), e;
}
function J(A) {
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
        ...A,
        headersList: A.headersList ? new s(A.headersList) : new s,
        urlList: A.urlList ? [
            ...A.urlList
        ] : []
    };
}
function G(A) {
    return J({
        type: "error",
        status: 0,
        error: h(A) ? A : new Error(A ? String(A) : A),
        aborted: A && "AbortError" === A.name
    });
}
function H(A, e) {
    return e = {
        internalResponse: A,
        ...e
    }, new Proxy(A, {
        get: (A, t)=>t in e ? e[t] : A[t],
        set: (A, t, r)=>(m(!(t in e)), A[t] = r, !0)
    });
}
function v(A, e) {
    return "basic" === e ? H(A, {
        type: "basic",
        headersList: A.headersList
    }) : "cors" === e ? H(A, {
        type: "cors",
        headersList: A.headersList
    }) : "opaque" === e ? H(A, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === e ? H(A, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void m(!1);
}
function V(A, e, t) {
    if (null !== e.status && (e.status < 200 || e.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in e && null != e.statusText && !C(String(e.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in e && null != e.status && (A[y].status = e.status), "statusText" in e && null != e.statusText && (A[y].statusText = e.statusText), "headers" in e && null != e.headers && o(A[D], e.headers), t) {
        if (d.includes(A.status)) throw p.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + A.status
        });
        A[y].body = t.body, null == t.type || A[y].headersList.contains("Content-Type") || A[y].headersList.append("content-type", t.type);
    }
}
E(Y), Object.defineProperties(Y.prototype, {
    type: g,
    url: g,
    status: g,
    ok: g,
    redirected: g,
    statusText: g,
    headers: g,
    clone: g,
    body: g,
    bodyUsed: g,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: !0
    }
}), Object.defineProperties(Y, {
    json: g,
    redirect: g,
    error: g
}), p.converters.ReadableStream = p.interfaceConverter(L), p.converters.FormData = p.interfaceConverter(k), p.converters.URLSearchParams = p.interfaceConverter(URLSearchParams), p.converters.XMLHttpRequestBodyInit = function(A) {
    return "string" == typeof A ? p.converters.USVString(A) : I(A) ? p.converters.Blob(A, {
        strict: !1
    }) : U.isArrayBuffer(A) || U.isTypedArray(A) || U.isDataView(A) ? p.converters.BufferSource(A) : Q.isFormDataLike(A) ? p.converters.FormData(A, {
        strict: !1
    }) : A instanceof URLSearchParams ? p.converters.URLSearchParams(A) : p.converters.DOMString(A);
}, p.converters.BodyInit = function(A) {
    return A instanceof L ? p.converters.ReadableStream(A) : A?.[Symbol.asyncIterator] ? A : p.converters.XMLHttpRequestBodyInit(A);
}, p.converters.ResponseInit = p.dictionaryConverter([
    {
        key: "status",
        converter: p.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: p.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: p.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: G,
    makeResponse: J,
    makeAppropriateNetworkError: function(A, e = null) {
        return m(B(A)), a(A) ? G(Object.assign(new f("The operation was aborted.", "AbortError"), {
            cause: e
        })) : G(Object.assign(new f("Request was cancelled."), {
            cause: e
        }));
    },
    filterResponse: v,
    Response: Y,
    cloneResponse: T
};
