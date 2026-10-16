"use strict";
const { Headers: r, HeadersList: s, fill: o, getHeadersGuard: n, setHeadersGuard: i, setHeadersList: a } = require("./module-48969.js"), { extractBody: Q, cloneBody: g, mixinBody: E, hasFinalizationRegistry: B, streamRegistry: c, bodyUnusable: I } = require("./module-33095.js"), C = require("./module-55201.js"), h = require(57975), { kEnumerableProperty: l } = C, { isValidReasonPhrase: u, isCancelled: d, isAborted: f, isBlobLike: w, serializeJavascriptValueToJSONString: y, isErrorLike: D, isomorphicEncode: p, environmentSettingsObject: k } = require("./module-48215.js"), { redirectStatusSet: R, nullBodyStatus: F } = require("./module-99354.js"), { kState: m, kHeaders: b } = require("./module-15978.js"), { webidl: N } = require("./module-43290.js"), { FormData: S } = require("./module-41445.js"), { URLSerializer: M } = require("./module-52603.js"), { kConstruct: U } = require("./module-76992.js"), L = require(56970), { types: T } = require(57975), Y = new TextEncoder("utf-8");
class G {
    static error() {
        return O(H(), "immutable");
    }
    static json(A, e = {}) {
        N.argumentLengthCheck(arguments, 1, "Response.json"), null !== e && (e = N.converters.ResponseInit(e));
        const t = Y.encode(y(A)), r = Q(t), s = O(v({}), "response");
        return W(s, e, {
            body: r[0],
            type: "application/json"
        }), s;
    }
    static redirect(A, e = 302) {
        let t;
        N.argumentLengthCheck(arguments, 1, "Response.redirect"), A = N.converters.USVString(A), e = N.converters["unsigned short"](e);
        try {
            t = new URL(A, k.settingsObject.baseUrl);
        } catch (e) {
            throw new TypeError(`Failed to parse URL from ${A}`, {
                cause: e
            });
        }
        if (!R.has(e)) throw new RangeError(`Invalid status code ${e}`);
        const r = O(v({}), "immutable");
        r[m].status = e;
        const s = p(M(t));
        return r[m].headersList.append("location", s, !0), r;
    }
    constructor(A = null, e = {}){
        if (N.util.markAsUncloneable(this), A === U) return;
        null !== A && (A = N.converters.BodyInit(A)), e = N.converters.ResponseInit(e), this[m] = v({}), this[b] = new r(U), i(this[b], "response"), a(this[b], this[m].headersList);
        let t = null;
        if (null != A) {
            const [e, r] = Q(A);
            t = {
                body: e,
                type: r
            };
        }
        W(this, e, t);
    }
    get type() {
        return N.brandCheck(this, G), this[m].type;
    }
    get url() {
        N.brandCheck(this, G);
        const A = this[m].urlList, e = A[A.length - 1] ?? null;
        return null === e ? "" : M(e, !0);
    }
    get redirected() {
        return N.brandCheck(this, G), this[m].urlList.length > 1;
    }
    get status() {
        return N.brandCheck(this, G), this[m].status;
    }
    get ok() {
        return N.brandCheck(this, G), this[m].status >= 200 && this[m].status <= 299;
    }
    get statusText() {
        return N.brandCheck(this, G), this[m].statusText;
    }
    get headers() {
        return N.brandCheck(this, G), this[b];
    }
    get body() {
        return N.brandCheck(this, G), this[m].body ? this[m].body.stream : null;
    }
    get bodyUsed() {
        return N.brandCheck(this, G), !!this[m].body && C.isDisturbed(this[m].body.stream);
    }
    clone() {
        if (N.brandCheck(this, G), I(this)) throw N.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
        });
        const A = J(this[m]);
        return B && this[m].body?.stream && c.register(this, new WeakRef(this[m].body.stream)), O(A, n(this[b]));
    }
    [h.inspect.custom](A, e) {
        null === e.depth && (e.depth = 2), e.colors ??= !0;
        const t = {
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            body: this.body,
            bodyUsed: this.bodyUsed,
            ok: this.ok,
            redirected: this.redirected,
            type: this.type,
            url: this.url
        };
        return `Response ${h.formatWithOptions(e, t)}`;
    }
}
function J(A) {
    if (A.internalResponse) return x(J(A.internalResponse), A.type);
    const e = v({
        ...A,
        body: null
    });
    return null != A.body && (e.body = g(e, A.body)), e;
}
function v(A) {
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
        headersList: A?.headersList ? new s(A?.headersList) : new s,
        urlList: A?.urlList ? [
            ...A.urlList
        ] : []
    };
}
function H(A) {
    return v({
        type: "error",
        status: 0,
        error: D(A) ? A : new Error(A ? String(A) : A),
        aborted: A && "AbortError" === A.name
    });
}
function V(A, e) {
    return e = {
        internalResponse: A,
        ...e
    }, new Proxy(A, {
        get: (A, t)=>t in e ? e[t] : A[t],
        set: (A, t, r)=>(L(!(t in e)), A[t] = r, !0)
    });
}
function x(A, e) {
    return "basic" === e ? V(A, {
        type: "basic",
        headersList: A.headersList
    }) : "cors" === e ? V(A, {
        type: "cors",
        headersList: A.headersList
    }) : "opaque" === e ? V(A, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
    }) : "opaqueredirect" === e ? V(A, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
    }) : void L(!1);
}
function W(A, e, t) {
    if (null !== e.status && (e.status < 200 || e.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in e && null != e.statusText && !u(String(e.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in e && null != e.status && (A[m].status = e.status), "statusText" in e && null != e.statusText && (A[m].statusText = e.statusText), "headers" in e && null != e.headers && o(A[b], e.headers), t) {
        if (F.includes(A.status)) throw N.errors.exception({
            header: "Response constructor",
            message: `Invalid response status code ${A.status}`
        });
        A[m].body = t.body, null == t.type || A[m].headersList.contains("content-type", !0) || A[m].headersList.append("content-type", t.type, !0);
    }
}
function O(A, e) {
    const t = new G(U);
    return t[m] = A, t[b] = new r(U), a(t[b], A.headersList), i(t[b], e), B && A.body?.stream && c.register(t, new WeakRef(A.body.stream)), t;
}
E(G), Object.defineProperties(G.prototype, {
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
}), Object.defineProperties(G, {
    json: l,
    redirect: l,
    error: l
}), N.converters.ReadableStream = N.interfaceConverter(ReadableStream), N.converters.FormData = N.interfaceConverter(S), N.converters.URLSearchParams = N.interfaceConverter(URLSearchParams), N.converters.XMLHttpRequestBodyInit = function(A, e, t) {
    return "string" == typeof A ? N.converters.USVString(A, e, t) : w(A) ? N.converters.Blob(A, e, t, {
        strict: !1
    }) : ArrayBuffer.isView(A) || T.isArrayBuffer(A) ? N.converters.BufferSource(A, e, t) : C.isFormDataLike(A) ? N.converters.FormData(A, e, t, {
        strict: !1
    }) : A instanceof URLSearchParams ? N.converters.URLSearchParams(A, e, t) : N.converters.DOMString(A, e, t);
}, N.converters.BodyInit = function(A, e, t) {
    return A instanceof ReadableStream ? N.converters.ReadableStream(A, e, t) : A?.[Symbol.asyncIterator] ? A : N.converters.XMLHttpRequestBodyInit(A, e, t);
}, N.converters.ResponseInit = N.dictionaryConverter([
    {
        key: "status",
        converter: N.converters["unsigned short"],
        defaultValue: ()=>200
    },
    {
        key: "statusText",
        converter: N.converters.ByteString,
        defaultValue: ()=>""
    },
    {
        key: "headers",
        converter: N.converters.HeadersInit
    }
]), module.exports = {
    isNetworkError: function(A) {
        return "error" === A.type && 0 === A.status;
    },
    makeNetworkError: H,
    makeResponse: v,
    makeAppropriateNetworkError: function(A, e = null) {
        return L(d(A)), f(A) ? H(Object.assign(new DOMException("The operation was aborted.", "AbortError"), {
            cause: e
        })) : H(Object.assign(new DOMException("Request was cancelled."), {
            cause: e
        }));
    },
    filterResponse: x,
    Response: G,
    cloneResponse: J,
    fromInnerResponse: O
};
