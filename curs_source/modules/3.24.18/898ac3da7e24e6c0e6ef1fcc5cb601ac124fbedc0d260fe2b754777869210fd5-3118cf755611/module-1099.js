"use strict";
const { Headers: t, HeadersList: s, fill: o } = require("./module-2932.js"), { extractBody: r, cloneBody: i, mixinBody: A } = require("./module-7052.js"), l = require("./module-9361.js"), { kEnumerableProperty: c } = l, { isValidReasonPhrase: m, isCancelled: d, isAborted: g, isBlobLike: u, serializeJavascriptValueToJSONString: E, isErrorLike: p, isomorphicEncode: T } = require("./module-5728.js"), { redirectStatusSet: k, nullBodyStatus: I, DOMException: h } = require("./module-6687.js"), { kState: _, kHeaders: C, kGuard: f, kRealm: B } = require("./module-5899.js"), { webidl: Q } = require("./module-8005.js"), { FormData: y } = require("./module-1606.js"), { getGlobalOrigin: R } = require("./module-9523.js"), { URLSerializer: N } = require("./module-3631.js"), { kHeadersList: v, kConstruct: S } = require("./module-8832.js"), D = require("./module-2613.js"), { types: w } = require("./module-9023.js"), b = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, M = new TextEncoder("utf-8");
class F {
    static error() {
        const e = {
            settingsObject: {}
        }, n = new F;
        return n[_] = L(), n[B] = e, n[C][v] = n[_].headersList, n[C][f] = "immutable", n[C][B] = e, n;
    }
    static json(e, n = {}) {
        Q.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== n && (n = Q.converters.ResponseInit(n));
        const a = M.encode(E(e)), t = r(a), s = {
            settingsObject: {}
        }, o = new F;
        return o[B] = s, o[C][f] = "response", o[C][B] = s, G(o, n, {
            body: t[0],
            type: "application/json"
        }), o;
    }
    static redirect(e, n = 302) {
        const a = {
            settingsObject: {}
        };
        let t;
        Q.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), e = Q.converters.USVString(e), n = Q.converters["unsigned short"](n);
        try {
            t = new URL(e, R());
        } catch (n) {
            throw Object.assign(new TypeError("Failed to parse URL from " + e), {
                cause: n
            });
        }
        if (!k.has(n)) throw new RangeError("Invalid status code " + n);
        const s = new F;
        s[B] = a, s[C][f] = "immutable", s[C][B] = a, s[_].status = n;
        const o = T(N(t));
        return s[_].headersList.append("location", o), s;
    }
    constructor(e = null, n = {}){
        null !== e && (e = Q.converters.BodyInit(e)), n = Q.converters.ResponseInit(n), this[B] = {
            settingsObject: {}
        }, this[_] = U({}), this[C] = new t(S), this[C][f] = "response", this[C][v] = this[_].headersList, this[C][B] = this[B];
        let a = null;
        if (null != e) {
            const [n, t] = r(e);
            a = {
                body: n,
                type: t
            };
        }
        G(this, n, a);
    }
    get type() {
        return Q.brandCheck(this, F), this[_].type;
    }
    get url() {
        Q.brandCheck(this, F);
        const e = this[_].urlList, n = e[e.length - 1] ?? null;
        return null === n ? "" : N(n, !0);
    }
    get redirected() {
        return Q.brandCheck(this, F), this[_].urlList.length > 1;
    }
    get status() {
        return Q.brandCheck(this, F), this[_].status;
    }
    get ok() {
        return Q.brandCheck(this, F), this[_].status >= 200 && this[_].status <= 299;
    }
    get statusText() {
        return Q.brandCheck(this, F), this[_].statusText;
    }
    get headers() {
        return Q.brandCheck(this, F), this[C];
    }
    get body() {
        return Q.brandCheck(this, F), this[_].body ? this[_].body.stream : null;
    }
    get bodyUsed() {
        return Q.brandCheck(this, F), !!this[_].body && l.isDisturbed(this[_].body.stream);
    }
    clone() {
        if (Q.brandCheck(this, F), this.bodyUsed || this.body && this.body.locked) throw Q.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const e = O(this[_]), n = new F;
        return n[_] = e, n[B] = this[B], n[C][v] = e.headersList, n[C][f] = this[C][f], n[C][B] = this[C][B], n;
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
        error: p(e) ? e : new Error(e ? String(e) : e),
        aborted: e && "AbortError" === e.name
    });
}
function P(e, n) {
    return n = {
        internalResponse: e,
        ...n
    }, new Proxy(e, {
        get: (e, a)=>a in n ? n[a] : e[a],
        set: (e, a, t)=>(D(!(a in n)), e[a] = t, !0)
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
    }) : void D(!1);
}
function G(e, n, a) {
    if (null !== n.status && (n.status < 200 || n.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in n && null != n.statusText && !m(String(n.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in n && null != n.status && (e[_].status = n.status), "statusText" in n && null != n.statusText && (e[_].statusText = n.statusText), "headers" in n && null != n.headers && o(e[C], n.headers), a) {
        if (I.includes(e.status)) throw Q.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + e.status
        });
        e[_].body = a.body, null == a.type || e[_].headersList.contains("Content-Type") || e[_].headersList.append("content-type", a.type);
    }
}
A(F), Object.defineProperties(F.prototype, {
    type: c,
    url: c,
    status: c,
    ok: c,
    redirected: c,
    statusText: c,
    headers: c,
    clone: c,
    body: c,
    bodyUsed: c,
    [Symbol.toStringTag]: {
        value: "Response",
        configurable: !0
    }
}), Object.defineProperties(F, {
    json: c,
    redirect: c,
    error: c
}), Q.converters.ReadableStream = Q.interfaceConverter(b), Q.converters.FormData = Q.interfaceConverter(y), Q.converters.URLSearchParams = Q.interfaceConverter(URLSearchParams), Q.converters.XMLHttpRequestBodyInit = function(e) {
    return "string" == typeof e ? Q.converters.USVString(e) : u(e) ? Q.converters.Blob(e, {
        strict: !1
    }) : w.isArrayBuffer(e) || w.isTypedArray(e) || w.isDataView(e) ? Q.converters.BufferSource(e) : l.isFormDataLike(e) ? Q.converters.FormData(e, {
        strict: !1
    }) : e instanceof URLSearchParams ? Q.converters.URLSearchParams(e) : Q.converters.DOMString(e);
}, Q.converters.BodyInit = function(e) {
    return e instanceof b ? Q.converters.ReadableStream(e) : e?.[Symbol.asyncIterator] ? e : Q.converters.XMLHttpRequestBodyInit(e);
}, Q.converters.ResponseInit = Q.dictionaryConverter([
    {
        key: "status",
        converter: Q.converters["unsigned short"],
        defaultValue: 200
    },
    {
        key: "statusText",
        converter: Q.converters.ByteString,
        defaultValue: ""
    },
    {
        key: "headers",
        converter: Q.converters.HeadersInit
    }
]), module.exports = {
    makeNetworkError: L,
    makeResponse: U,
    makeAppropriateNetworkError: function(e, n = null) {
        return D(d(e)), g(e) ? L(Object.assign(new h("The operation was aborted.", "AbortError"), {
            cause: n
        })) : L(Object.assign(new h("Request was cancelled."), {
            cause: n
        }));
    },
    filterResponse: x,
    Response: F,
    cloneResponse: O
};
