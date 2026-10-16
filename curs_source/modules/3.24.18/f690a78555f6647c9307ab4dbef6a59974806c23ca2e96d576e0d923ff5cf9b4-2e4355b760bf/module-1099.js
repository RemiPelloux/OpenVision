"use strict";
const { Headers: n, HeadersList: r, fill: o } = require("./module-2932.js"), { extractBody: s, cloneBody: a, mixinBody: i } = require("./module-7052.js"), c = require("./module-9361.js"), { kEnumerableProperty: l } = c, { isValidReasonPhrase: g, isCancelled: E, isAborted: u, isBlobLike: d, serializeJavascriptValueToJSONString: I, isErrorLike: h, isomorphicEncode: Q } = require("./module-5728.js"), { redirectStatusSet: m, nullBodyStatus: C, DOMException: B } = require("./module-6687.js"), { kState: p, kHeaders: f, kGuard: y, kRealm: T } = require("./module-5899.js"), { webidl: k } = require("./module-8005.js"), { FormData: w } = require("./module-1606.js"), { getGlobalOrigin: N } = require("./module-9523.js"), { URLSerializer: D } = require("./module-3631.js"), { kHeadersList: R, kConstruct: S } = require("./module-8832.js"), b = require("./module-2613.js"), { types: F } = require("./module-9023.js"), _ = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, v = new TextEncoder("utf-8");
class L {
    static error() {
        const e = {
            settingsObject: {}
        }, A = new L;
        return A[p] = O(), A[T] = e, A[f][R] = A[p].headersList, A[f][y] = "immutable", A[f][T] = e, A;
    }
    static json(e, A = {}) {
        k.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== A && (A = k.converters.ResponseInit(A));
        const t = v.encode(I(e)), n = s(t), r = {
            settingsObject: {}
        }, o = new L;
        return o[T] = r, o[f][y] = "response", o[f][T] = r, P(o, A, {
            body: n[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, A = 302) {
        const t = {
            settingsObject: {}
        };
        let n;
        k.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = k.converters.USVString(e), A = k.converters["unsigned short"](A);
        try {
            n = new URL(e, N());
        } catch (A) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: A
            });
        }
        if (!m.has(A)) throw new RangeError("Invalid status code " + A);
        const r = new L;
        r[T] = t, r[f][y] = "immutable", r[f][T] = t, r[p].status = A;
        const o = Q(D(n));
        return r[p].headersList.append("location", o), r;
    }
    constructor(e = null, A = {}){
        null !== e && (e = k.converters.BodyInit(e)), A = k.converters.ResponseInit(A), this[T] = {
            settingsObject: {}
        }, this[p] = M({}), this[f] = new n(S), this[f][y] = "response", this[f][R] = this[p].headersList, this[f][T] = this[T];
        let t = null;
        if (null != e) {
            const [A, n] = s(e);
            t = {
                body: A,
                type: n
            };
        }
        P(this, A, t);
    }
    get type() {
        return k.brandCheck(this, L), this[p].type;
    }
    get url() {
        k.brandCheck(this, L);
        const e = this[p].urlList, A = e[e.length - 1] ?? null;
        return null === A ? "" : D(A, !0);
    }
    get redirected() {
        return k.brandCheck(this, L), this[p].urlList.length > 1;
    }
    get status() {
        return k.brandCheck(this, L), this[p].status;
    }
    get ok() {
        return k.brandCheck(this, L), this[p].status >= 200 && this[p].status <= 299;
    }
    get statusText() {
        return k.brandCheck(this, L), this[p].statusText;
    }
    get headers() {
        return k.brandCheck(this, L), this[f];
    }
    get body() {
        return k.brandCheck(this, L), this[p].body ? this[p].body.stream : null;
    }
    get bodyUsed() {
        return k.brandCheck(this, L), !!this[p].body && c.isDisturbed(this[p].body.stream);
    }
    clone() {
        if (k.brandCheck(this, L), this.bodyUsed || this.body && this.body.locked) throw k.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = U(this[p]), A = new L;
        return A[p] = e, A[T] = this[T], A[f][R] = e.headersList, A[f][y] = this[f][y], A[f][T] = this[f][T], A;
    }
}
function U(e) {
    if (e.internalResponse) return Y(U(e.internalResponse), e.type);
    const A = M({
        ...e,
        body: null
    });
    return null != e.body && (A.body = a(e.body)), A;
}
function M(e) {
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
        headersList: e.headersList ? new r(e.headersList) : new r,
        urlList: e.urlList ? [
            ...e.urlList
        ] : []
    };
}
function O(e) {
    return M({
        type: "error",
        status: 0,
        error: h(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function J(e, A) {
    return A = {
        internalResponse: e,
        ...A
    }, new Proxy(e, {
        get: (e, t)=>t in A ? A[t] : e[t],
        set: (e, t, n)=>(b(!(t in A)), e[t] = n, !0)
    });
}
function Y(e, A) {
    return "basic" === A ? J(e, {
        type: "basic",
        headersList: e.headersList
    }) : "cors" === A ? J(e, {
        type: "cors",
        headersList: e.headersList
    }) : "opaque" === A ? J(e, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === A ? J(e, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void b(!1);
}
function P(e, A, t) {
    if (null !== A.status && (A.status < 200 || A.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in A && null != A.statusText && !g(String(A.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in A && null != A.status && (e[p].status = A.status), "statusText" in A && null != A.statusText && (e[p].statusText = A.statusText), "headers" in A && null != A.headers && o(e[f], A.headers), t) {
        if (C.includes(e.status)) throw k.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[p].body = t.body, null == t.type || e[p].headersList.contains("Content-Type") || e[p].headersList.append("content-type", t.type);
    }
}
i(L), Object.defineProperties(L.prototype, {
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
}), Object.defineProperties(L, {
    json: l,
    redirect: l,
    error: l
}), k.converters.ReadableStream = k.interfaceConverter(_), k.converters.FormData = k.interfaceConverter(w), k.converters.URLSearchParams = k.interfaceConverter(URLSearchParams), k.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? k.converters.USVString(e) : d(e) ? k.converters.Blob(e, {
        strict: !1
    }) : F.isArrayBuffer(e) || F.isTypedArray(e) || F.isDataView(e) ? k.converters.BufferSource(e) : c.isFormDataLike(e) ? k.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? k.converters.URLSearchParams(e) : k.converters.DOMString(e);
}, k.converters.BodyInit = function(e) {
    return e instanceof _ ? k.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : k.converters.XMLHttpRequestBodyInit(e);
}, k.converters.ResponseInit = k.dictionaryConverter([
    {
        key: "status",
        converter: k.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: k.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: k.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: O,
    makeResponse: M,
    makeAppropriateNetworkError: function(e, A = null) {
        return b(E(e)), u(e) ? O(Object.assign(new B("The operation was aborted.", "AbortError"), {
            cause: A
        })) : O(Object.assign(new B("Request was cancelled."), {
            cause: A
        }));
    },
    filterResponse: Y,
    Response: L,
    cloneResponse: U
};
