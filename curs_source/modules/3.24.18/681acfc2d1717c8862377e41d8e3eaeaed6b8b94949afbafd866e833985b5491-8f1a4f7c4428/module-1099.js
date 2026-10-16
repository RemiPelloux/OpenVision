"use strict";
const { Headers: n, HeadersList: r, fill: o } = require("./module-2932.js"), { extractBody: s, cloneBody: i, mixinBody: a } = require("./module-7052.js"), c = require("./module-9361.js"), { kEnumerableProperty: l } = c, { isValidReasonPhrase: u, isCancelled: g, isAborted: E, isBlobLike: h, serializeJavascriptValueToJSONString: d, isErrorLike: I, isomorphicEncode: B } = require("./module-5728.js"), { redirectStatusSet: Q, nullBodyStatus: f, DOMException: C } = require("./module-6687.js"), { kState: p, kHeaders: m, kGuard: y, kRealm: w } = require("./module-5899.js"), { webidl: k } = require("./module-8005.js"), { FormData: b } = require("./module-1606.js"), { getGlobalOrigin: N } = require("./module-9523.js"), { URLSerializer: T } = require("./module-3631.js"), { kHeadersList: D, kConstruct: S } = require("./module-8832.js"), R = require("./module-2613.js"), { types: F } = require("./module-9023.js"), v = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, M = new TextEncoder("utf-8");
class U {
    static error() {
        const e = {
            settingsObject: {}
        }, t = new U;
        return t[p] = J(), t[w] = e, t[m][D] = t[p].headersList, t[m][y] = "immutable", t[m][w] = e, t;
    }
    static json(e, t = {}) {
        k.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== t && (t = k.converters.ResponseInit(t));
        const A = M.encode(d(e)), n = s(A), r = {
            settingsObject: {}
        }, o = new U;
        return o[w] = r, o[m][y] = "response", o[m][w] = r, G(o, t, {
            body: n[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, t = 302) {
        const A = {
            settingsObject: {}
        };
        let n;
        k.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = k.converters.USVString(e), t = k.converters["unsigned short"](t);
        try {
            n = new URL(e, N());
        } catch (t) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: t
            });
        }
        if (!Q.has(t)) throw new RangeError("Invalid status code " + t);
        const r = new U;
        r[w] = A, r[m][y] = "immutable", r[m][w] = A, r[p].status = t;
        const o = B(T(n));
        return r[p].headersList.append("location", o), r;
    }
    constructor(e = null, t = {}){
        null !== e && (e = k.converters.BodyInit(e)), t = k.converters.ResponseInit(t), this[w] = {
            settingsObject: {}
        }, this[p] = _({}), this[m] = new n(S), this[m][y] = "response", this[m][D] = this[p].headersList, this[m][w] = this[w];
        let A = null;
        if (null != e) {
            const [t, n] = s(e);
            A = {
                body: t,
                type: n
            };
        }
        G(this, t, A);
    }
    get type() {
        return k.brandCheck(this, U), this[p].type;
    }
    get url() {
        k.brandCheck(this, U);
        const e = this[p].urlList, t = e[e.length - 1] ?? null;
        return null === t ? "" : T(t, !0);
    }
    get redirected() {
        return k.brandCheck(this, U), this[p].urlList.length > 1;
    }
    get status() {
        return k.brandCheck(this, U), this[p].status;
    }
    get ok() {
        return k.brandCheck(this, U), this[p].status >= 200 && this[p].status <= 299;
    }
    get statusText() {
        return k.brandCheck(this, U), this[p].statusText;
    }
    get headers() {
        return k.brandCheck(this, U), this[m];
    }
    get body() {
        return k.brandCheck(this, U), this[p].body ? this[p].body.stream : null;
    }
    get bodyUsed() {
        return k.brandCheck(this, U), !!this[p].body && c.isDisturbed(this[p].body.stream);
    }
    clone() {
        if (k.brandCheck(this, U), this.bodyUsed || this.body && this.body.locked) throw k.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = L(this[p]), t = new U;
        return t[p] = e, t[w] = this[w], t[m][D] = e.headersList, t[m][y] = this[m][y], t[m][w] = this[m][w], t;
    }
}
function L(e) {
    if (e.internalResponse) return Y(L(e.internalResponse), e.type);
    const t = _({
        ...e,
        body: null
    });
    return null != e.body && (t.body = i(e.body)), t;
}
function _(e) {
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
function J(e) {
    return _({
        type: "error",
        status: 0,
        error: I(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function O(e, t) {
    return t = {
        internalResponse: e,
        ...t
    }, new Proxy(e, {
        get: (e, A)=>A in t ? t[A] : e[A],
        set: (e, A, n)=>(R(!(A in t)), e[A] = n, !0)
    });
}
function Y(e, t) {
    return "basic" === t ? O(e, {
        type: "basic",
        headersList: e.headersList
    }) : "cors" === t ? O(e, {
        type: "cors",
        headersList: e.headersList
    }) : "opaque" === t ? O(e, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === t ? O(e, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void R(!1);
}
function G(e, t, A) {
    if (null !== t.status && (t.status < 200 || t.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in t && null != t.statusText && !u(String(t.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in t && null != t.status && (e[p].status = t.status), "statusText" in t && null != t.statusText && (e[p].statusText = t.statusText), "headers" in t && null != t.headers && o(e[m], t.headers), A) {
        if (f.includes(e.status)) throw k.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[p].body = A.body, null == A.type || e[p].headersList.contains("Content-Type") || e[p].headersList.append("content-type", A.type);
    }
}
a(U), Object.defineProperties(U.prototype, {
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
}), Object.defineProperties(U, {
    json: l,
    redirect: l,
    error: l
}), k.converters.ReadableStream = k.interfaceConverter(v), k.converters.FormData = k.interfaceConverter(b), k.converters.URLSearchParams = k.interfaceConverter(URLSearchParams), k.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? k.converters.USVString(e) : h(e) ? k.converters.Blob(e, {
        strict: !1
    }) : F.isArrayBuffer(e) || F.isTypedArray(e) || F.isDataView(e) ? k.converters.BufferSource(e) : c.isFormDataLike(e) ? k.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? k.converters.URLSearchParams(e) : k.converters.DOMString(e);
}, k.converters.BodyInit = function(e) {
    return e instanceof v ? k.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : k.converters.XMLHttpRequestBodyInit(e);
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
    makeNetworkError: J,
    makeResponse: _,
    makeAppropriateNetworkError: function(e, t = null) {
        return R(g(e)), E(e) ? J(Object.assign(new C("The operation was aborted.", "AbortError"), {
            cause: t
        })) : J(Object.assign(new C("Request was cancelled."), {
            cause: t
        }));
    },
    filterResponse: Y,
    Response: U,
    cloneResponse: L
};
