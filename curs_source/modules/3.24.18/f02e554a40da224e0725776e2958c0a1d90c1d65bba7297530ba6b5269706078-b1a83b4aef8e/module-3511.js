"use strict";
const { Headers: n, HeadersList: s, fill: i } = require("./module-2848.js"), { extractBody: o, cloneBody: a, mixinBody: u } = require("./module-9608.js"), c = require("./module-3589.js"), { kEnumerableProperty: l } = c, { isValidReasonPhrase: m, isCancelled: d, isAborted: f, isBlobLike: p, serializeJavascriptValueToJSONString: h, isErrorLike: g, isomorphicEncode: A } = require("./module-8116.js"), { redirectStatusSet: _, nullBodyStatus: y, DOMException: w } = require("./module-2955.js"), { kState: S, kHeaders: J, kGuard: B, kRealm: E } = require("./module-7271.js"), { webidl: I } = require("./module-8193.js"), { FormData: C } = require("./module-6522.js"), { getGlobalOrigin: b } = require("./module-3967.js"), { URLSerializer: k } = require("./module-4387.js"), { kHeadersList: v, kConstruct: q } = require("./module-5532.js"), R = require("./module-2613.js"), { types: P } = require("./module-9023.js"), T = globalThis.ReadableStream || require("./module-3774.js").ReadableStream, x = new TextEncoder("utf-8");
class N {
    static error() {
        const t = {
            settingsObject: {}
        }, e = new N;
        return e[S] = Q(), e[E] = t, e[J][v] = e[S].headersList, e[J][B] = "immutable", e[J][E] = t, e;
    }
    static json(t, e = {}) {
        I.argumentLengthCheck(arguments, 1, {
            header: "Response.json"
        }), null !== e && (e = I.converters.ResponseInit(e));
        const r = x.encode(h(t)), n = o(r), s = {
            settingsObject: {}
        }, i = new N;
        return i[E] = s, i[J][B] = "response", i[J][E] = s, F(i, e, {
            body: n[0],
            type: "application/json"
        }), i;
    }
    static redirect(t, e = 302) {
        const r = {
            settingsObject: {}
        };
        let n;
        I.argumentLengthCheck(arguments, 1, {
            header: "Response.redirect"
        }), t = I.converters.USVString(t), e = I.converters["unsigned short"](e);
        try {
            n = new URL(t, b());
        } catch (e) {
            throw Object.assign(new TypeError("Failed to parse URL from " + t), {
                cause: e
            });
        }
        if (!_.has(e)) throw new RangeError("Invalid status code " + e);
        const s = new N;
        s[E] = r, s[J][B] = "immutable", s[J][E] = r, s[S].status = e;
        const i = A(k(n));
        return s[S].headersList.append("location", i), s;
    }
    constructor(t = null, e = {}){
        null !== t && (t = I.converters.BodyInit(t)), e = I.converters.ResponseInit(e), this[E] = {
            settingsObject: {}
        }, this[S] = U({}), this[J] = new n(q), this[J][B] = "response", this[J][v] = this[S].headersList, this[J][E] = this[E];
        let r = null;
        if (null != t) {
            const [e, n] = o(t);
            r = {
                body: e,
                type: n
            };
        }
        F(this, e, r);
    }
    get type() {
        return I.brandCheck(this, N), this[S].type;
    }
    get url() {
        I.brandCheck(this, N);
        const t = this[S].urlList, e = t[t.length - 1] ?? null;
        return null === e ? "" : k(e, !0);
    }
    get redirected() {
        return I.brandCheck(this, N), this[S].urlList.length > 1;
    }
    get status() {
        return I.brandCheck(this, N), this[S].status;
    }
    get ok() {
        return I.brandCheck(this, N), this[S].status >= 200 && this[S].status <= 299;
    }
    get statusText() {
        return I.brandCheck(this, N), this[S].statusText;
    }
    get headers() {
        return I.brandCheck(this, N), this[J];
    }
    get body() {
        return I.brandCheck(this, N), this[S].body ? this[S].body.stream : null;
    }
    get bodyUsed() {
        return I.brandCheck(this, N), !!this[S].body && c.isDisturbed(this[S].body.stream);
    }
    clone() {
        if (I.brandCheck(this, N), this.bodyUsed || this.body && this.body.locked) throw I.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const t = D(this[S]), e = new N;
        return e[S] = t, e[E] = this[E], e[J][v] = t.headersList, e[J][B] = this[J][B], e[J][E] = this[J][E], e;
    }
}
function D(t) {
    if (t.internalResponse) return O(D(t.internalResponse), t.type);
    const e = U({
        ...t,
        body: null
    });
    return null != t.body && (e.body = a(t.body)), e;
}
function U(t) {
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
        ...t,
        headersList: t.headersList ? new s(t.headersList) : new s,
        urlList: t.urlList ? [
            ...t.urlList
        ] : []
    };
}
function Q(t) {
    return U({
        type: "error",
        status: 0,
        error: g(t) ? t : new Error(t ? String(t) : t),
        aborted: t && "AbortError" === t.name
    });
}
function M(t, e) {
    return e = {
        internalResponse: t,
        ...e
    }, new Proxy(t, {
        get: (t, r)=>r in e ? e[r] : t[r],
        set: (t, r, n)=>(R(!(r in e)), t[r] = n, !0)
    });
}
function O(t, e) {
    return "basic" === e ? M(t, {
        type: "basic",
        headersList: t.headersList
    }) : "cors" === e ? M(t, {
        type: "cors",
        headersList: t.headersList
    }) : "opaque" === e ? M(t, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === e ? M(t, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void R(!1);
}
function F(t, e, r) {
    if (null !== e.status && (e.status < 200 || e.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in e && null != e.statusText && !m(String(e.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in e && null != e.status && (t[S].status = e.status), "statusText" in e && null != e.statusText && (t[S].statusText = e.statusText), "headers" in e && null != e.headers && i(t[J], e.headers), r) {
        if (y.includes(t.status)) throw I.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + t.status
        });
        t[S].body = r.body, null == r.type || t[S].headersList.contains("Content-Type") || t[S].headersList.append("content-type", r.type);
    }
}
u(N), Object.defineProperties(N.prototype, {
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
}), Object.defineProperties(N, {
    json: l,
    redirect: l,
    error: l
}), I.converters.ReadableStream = I.interfaceConverter(T), I.converters.FormData = I.interfaceConverter(C), I.converters.URLSearchParams = I.interfaceConverter(URLSearchParams), I.converters.XMLHttpRequestBodyInit = function(t) {
    return "string" == typeof t ? I.converters.USVString(t) : p(t) ? I.converters.Blob(t, {
        strict: !1
    }) : P.isArrayBuffer(t) || P.isTypedArray(t) || P.isDataView(t) ? I.converters.BufferSource(t) : c.isFormDataLike(t) ? I.converters.FormData(t, {
        strict: !1
    }) : t instanceof URLSearchParams ? I.converters.URLSearchParams(t) : I.converters.DOMString(t);
}, I.converters.BodyInit = function(t) {
    return t instanceof T ? I.converters.ReadableStream(t) : t?.[Symbol.asyncIterator] ? t : I.converters.XMLHttpRequestBodyInit(t);
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
    makeNetworkError: Q,
    makeResponse: U,
    makeAppropriateNetworkError: function(t, e = null) {
        return R(d(t)), f(t) ? Q(Object.assign(new w("The operation was aborted.", "AbortError"), {
            cause: e
        })) : Q(Object.assign(new w("Request was cancelled."), {
            cause: e
        }));
    },
    filterResponse: O,
    Response: N,
    cloneResponse: D
};
