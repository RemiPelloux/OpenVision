"use strict";
const { Transform: r } = require(57075), s = require(38522), { redirectStatusSet: o, referrerPolicySet: n, badPortsSet: i } = require("./module-99354.js"), { getGlobalOrigin: a } = require("./module-12808.js"), { collectASequenceOfCodePoints: Q, collectAnHTTPQuotedString: g, removeChars: E, parseMIMEType: B } = require("./module-52603.js"), { performance: c } = require(643), { isBlobLike: I, ReadableStreamFrom: C, isValidHTTPToken: h, normalizedMethodRecordsBase: l } = require("./module-55201.js"), u = require(56970), { isUint8Array: d } = require(73429), { webidl: f } = require("./module-43290.js");
let w, y = [];
try {
    w = require(77598);
    const A = [
        "sha256",
        "sha384",
        "sha512"
    ];
    y = w.getHashes().filter((e)=>A.includes(e));
} catch  {}
function D(A) {
    const e = A.urlList, t = e.length;
    return 0 === t ? null : e[t - 1].toString();
}
function p(A) {
    for(let e = 0; e < A.length; ++e){
        const t = A.charCodeAt(e);
        if (t > 126 || t < 32) return !1;
    }
    return !0;
}
function k(A) {
    return A.urlList[A.urlList.length - 1];
}
const R = h;
function F(A) {
    return !1 === ("\t" === A[0] || " " === A[0] || "\t" === A[A.length - 1] || " " === A[A.length - 1] || A.includes("\n") || A.includes("\r") || A.includes("\0"));
}
function m(A, e) {
    return A;
}
function b() {
    return {
        referrerPolicy: "strict-origin-when-cross-origin"
    };
}
function N(A, e) {
    return u(A instanceof URL), "file:" === (A = new URL(A)).protocol || "about:" === A.protocol || "blank:" === A.protocol ? "no-referrer" : (A.username = "", A.password = "", A.hash = "", e && (A.pathname = "", A.search = ""), A);
}
function S(A) {
    return A instanceof URL && ("about:blank" === A.href || "about:srcdoc" === A.href || "data:" === A.protocol || "file:" === A.protocol || function(A) {
        if (null == A || "null" === A) return !1;
        const e = new URL(A);
        if ("https:" === e.protocol || "wss:" === e.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(e.hostname) || "localhost" === e.hostname || e.hostname.includes("localhost.") || e.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(A.origin));
}
const M = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function U(A) {
    const e = [];
    let t = !0;
    for (const r of A.split(" ")){
        t = !1;
        const A = M.exec(r);
        if (null === A || void 0 === A.groups || void 0 === A.groups.algo) continue;
        const s = A.groups.algo.toLowerCase();
        y.includes(s) && e.push(A.groups);
    }
    return !0 === t ? "no metadata" : e;
}
function L(A, e) {
    if (A.length !== e.length) return !1;
    for(let t = 0; t < A.length; ++t)if (A[t] !== e[t]) {
        if ("+" === A[t] && "-" === e[t] || "/" === A[t] && "_" === e[t]) continue;
        return !1;
    }
    return !0;
}
function T(A, e) {
    return A.origin === e.origin && "null" === A.origin || A.protocol === e.protocol && A.hostname === e.hostname && A.port === e.port;
}
const Y = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
function G(A, e, t = 0, r = 1) {
    class s {
        #U;
        #L;
        #T;
        constructor(A, e){
            this.#U = A, this.#L = e, this.#T = 0;
        }
        next() {
            if ("object" != typeof this || null === this || !(#U in this)) throw new TypeError(`'next' called on an object that does not implement interface ${A} Iterator.`);
            const s = this.#T, o = this.#U[e];
            if (s >= o.length) return {
                value: void 0,
                done: !0
            };
            const { [t]: n, [r]: i } = o[s];
            let a;
            switch(this.#T = s + 1, this.#L){
                case "key":
                    a = n;
                    break;
                case "value":
                    a = i;
                    break;
                case "key+value":
                    a = [
                        n,
                        i
                    ];
            }
            return {
                value: a,
                done: !1
            };
        }
    }
    return delete s.prototype.constructor, Object.setPrototypeOf(s.prototype, Y), Object.defineProperties(s.prototype, {
        [Symbol.toStringTag]: {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: `${A} Iterator`
        },
        next: {
            writable: !0,
            enumerable: !0,
            configurable: !0
        }
    }), function(A, e) {
        return new s(A, e);
    };
}
const J = /[^\x00-\xFF]/;
function v(A) {
    return u(!J.test(A)), A;
}
async function H(A) {
    const e = [];
    let t = 0;
    for(;;){
        const { done: r, value: s } = await A.read();
        if (r) return Buffer.concat(e, t);
        if (!d(s)) throw new TypeError("Received non-Uint8Array chunk");
        e.push(s), t += s.length;
    }
}
function V(A) {
    return "string" == typeof A && ":" === A[5] && "h" === A[0] && "t" === A[1] && "t" === A[2] && "p" === A[3] && "s" === A[4] || "https:" === A.protocol;
}
function x(A) {
    u("protocol" in A);
    const e = A.protocol;
    return "http:" === e || "https:" === e;
}
class W extends r {
    #Y;
    constructor(A){
        super(), this.#Y = A;
    }
    _transform(A, e, t) {
        if (!this._inflateStream) {
            if (0 === A.length) return void t();
            this._inflateStream = 8 == (15 & A[0]) ? s.createInflate(this.#Y) : s.createInflateRaw(this.#Y), this._inflateStream.on("data", this.push.bind(this)), this._inflateStream.on("end", ()=>this.push(null)), this._inflateStream.on("error", (A)=>this.destroy(A));
        }
        this._inflateStream.write(A, e, t);
    }
    _final(A) {
        this._inflateStream && (this._inflateStream.end(), this._inflateStream = null), A();
    }
}
function O(A, e) {
    const t = e.get(A, !0);
    return null === t ? null : function(A) {
        const e = A, t = {
            position: 0
        }, r = [];
        let s = "";
        for(; t.position < e.length;){
            if (s += Q((A)=>'"' !== A && "," !== A, e, t), t.position < e.length) if (34 === e.charCodeAt(t.position)) {
                if (s += g(e, t), t.position < e.length) continue;
            } else u(44 === e.charCodeAt(t.position)), t.position++;
            s = E(s, !0, !0, (A)=>9 === A || 32 === A), r.push(s), s = "";
        }
        return r;
    }(t);
}
const P = new TextDecoder;
class q {
    get baseUrl() {
        return a();
    }
    get origin() {
        return this.baseUrl?.origin;
    }
    policyContainer = {
        referrerPolicy: "strict-origin-when-cross-origin"
    };
}
const Z = new class {
    settingsObject = new q;
};
module.exports = {
    isAborted: function(A) {
        return "aborted" === A.controller.state;
    },
    isCancelled: function(A) {
        return "aborted" === A.controller.state || "terminated" === A.controller.state;
    },
    isValidEncodedURL: p,
    createDeferredPromise: function() {
        let A, e;
        return {
            promise: new Promise((t, r)=>{
                A = t, e = r;
            }),
            resolve: A,
            reject: e
        };
    },
    ReadableStreamFrom: C,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(A) {},
    clampAndCoarsenConnectionTimingInfo: function(A, e, t) {
        return !A?.startTime || A.startTime < e ? {
            domainLookupStartTime: e,
            domainLookupEndTime: e,
            connectionStartTime: e,
            connectionEndTime: e,
            secureConnectionStartTime: e,
            ALPNNegotiatedProtocol: A?.ALPNNegotiatedProtocol
        } : {
            domainLookupStartTime: m(A.domainLookupStartTime),
            domainLookupEndTime: m(A.domainLookupEndTime),
            connectionStartTime: m(A.connectionStartTime),
            connectionEndTime: m(A.connectionEndTime),
            secureConnectionStartTime: m(A.secureConnectionStartTime),
            ALPNNegotiatedProtocol: A.ALPNNegotiatedProtocol
        };
    },
    coarsenedSharedCurrentTime: function(A) {
        return m(c.now());
    },
    determineRequestsReferrer: function(A) {
        const e = A.referrerPolicy;
        u(e);
        let t = null;
        if ("client" === A.referrer) {
            const A = a();
            if (!A || "null" === A.origin) return "no-referrer";
            t = new URL(A);
        } else A.referrer instanceof URL && (t = A.referrer);
        let r = N(t);
        const s = N(t, !0);
        r.toString().length > 4096 && (r = s);
        const o = T(A, r), n = S(r) && !S(A.url);
        switch(e){
            case "origin":
                return null != s ? s : N(t, !0);
            case "unsafe-url":
                return r;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? r : s;
            case "strict-origin-when-cross-origin":
                {
                    const e = k(A);
                    return T(r, e) ? r : S(r) && !S(e) ? "no-referrer" : s;
                }
            default:
                return n ? "no-referrer" : s;
        }
    },
    makePolicyContainer: b,
    clonePolicyContainer: function(A) {
        return {
            referrerPolicy: A.referrerPolicy
        };
    },
    appendFetchMetadata: function(A) {
        let e = null;
        e = A.mode, A.headersList.set("sec-fetch-mode", e, !0);
    },
    appendRequestOriginHeader: function(A) {
        let e = A.origin;
        if ("client" !== e && void 0 !== e) {
            if ("cors" === A.responseTainting || "websocket" === A.mode) A.headersList.append("origin", e, !0);
            else if ("GET" !== A.method && "HEAD" !== A.method) {
                switch(A.referrerPolicy){
                    case "no-referrer":
                        e = null;
                        break;
                    case "no-referrer-when-downgrade":
                    case "strict-origin":
                    case "strict-origin-when-cross-origin":
                        A.origin && V(A.origin) && !V(k(A)) && (e = null);
                        break;
                    case "same-origin":
                        T(A, k(A)) || (e = null);
                }
                A.headersList.append("origin", e, !0);
            }
        }
    },
    TAOCheck: function() {
        return "success";
    },
    corsCheck: function() {
        return "success";
    },
    crossOriginResourcePolicyCheck: function() {
        return "allowed";
    },
    createOpaqueTimingInfo: function(A) {
        return {
            startTime: A.startTime ?? 0,
            redirectStartTime: 0,
            redirectEndTime: 0,
            postRedirectStartTime: A.startTime ?? 0,
            finalServiceWorkerStartTime: 0,
            finalNetworkResponseStartTime: 0,
            finalNetworkRequestStartTime: 0,
            endTime: 0,
            encodedBodySize: 0,
            decodedBodySize: 0,
            finalConnectionTimingInfo: null
        };
    },
    setRequestReferrerPolicyOnRedirect: function(A, e) {
        const { headersList: t } = e, r = (t.get("referrer-policy", !0) ?? "").split(",");
        let s = "";
        if (r.length > 0) for(let A = r.length; 0 !== A; A--){
            const e = r[A - 1].trim();
            if (n.has(e)) {
                s = e;
                break;
            }
        }
        "" !== s && (A.referrerPolicy = s);
    },
    isValidHTTPToken: h,
    requestBadPort: function(A) {
        const e = k(A);
        return x(e) && i.has(e.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: k,
    responseURL: D,
    responseLocationURL: function(A, e) {
        if (!o.has(A.status)) return null;
        let t = A.headersList.get("location", !0);
        var r;
        return null !== t && F(t) && (p(t) || (r = t, t = Buffer.from(r, "binary").toString("utf8")), t = new URL(t, D(A))), t && !t.hash && (t.hash = e), t;
    },
    isBlobLike: I,
    isURLPotentiallyTrustworthy: S,
    isValidReasonPhrase: function(A) {
        for(let e = 0; e < A.length; ++e){
            const t = A.charCodeAt(e);
            if (!(9 === t || t >= 32 && t <= 126 || t >= 128 && t <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: T,
    normalizeMethod: function(A) {
        return l[A.toLowerCase()] ?? A;
    },
    serializeJavascriptValueToJSONString: function(A) {
        const e = JSON.stringify(A);
        if (void 0 === e) throw new TypeError("Value is not JSON serializable");
        return u("string" == typeof e), e;
    },
    iteratorMixin: function(A, e, t, r = 0, s = 1) {
        const o = G(A, t, r, s), n = {
            keys: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function() {
                    return f.brandCheck(this, e), o(this, "key");
                }
            },
            values: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function() {
                    return f.brandCheck(this, e), o(this, "value");
                }
            },
            entries: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function() {
                    return f.brandCheck(this, e), o(this, "key+value");
                }
            },
            forEach: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function(t, r = globalThis) {
                    if (f.brandCheck(this, e), f.argumentLengthCheck(arguments, 1, `${A}.forEach`), "function" != typeof t) throw new TypeError(`Failed to execute 'forEach' on '${A}': parameter 1 is not of type 'Function'.`);
                    for (const { 0: A, 1: e } of o(this, "key+value"))t.call(r, e, A, this);
                }
            }
        };
        return Object.defineProperties(e.prototype, {
            ...n,
            [Symbol.iterator]: {
                writable: !0,
                enumerable: !1,
                configurable: !0,
                value: n.entries.value
            }
        });
    },
    createIterator: G,
    isValidHeaderName: R,
    isValidHeaderValue: F,
    isErrorLike: function(A) {
        return A instanceof Error || "Error" === A?.constructor?.name || "DOMException" === A?.constructor?.name;
    },
    fullyReadBody: async function(A, e, t) {
        const r = e, s = t;
        let o;
        try {
            o = A.stream.getReader();
        } catch (A) {
            return void s(A);
        }
        try {
            r(await H(o));
        } catch (A) {
            s(A);
        }
    },
    bytesMatch: function(A, e) {
        if (void 0 === w) return !0;
        const t = U(e);
        if ("no metadata" === t) return !0;
        if (0 === t.length) return !0;
        const r = function(A) {
            let e = A[0].algo;
            if ("5" === e[3]) return e;
            for(let t = 1; t < A.length; ++t){
                const r = A[t];
                if ("5" === r.algo[3]) {
                    e = "sha512";
                    break;
                }
                "3" !== e[3] && "3" === r.algo[3] && (e = "sha384");
            }
            return e;
        }(t), s = function(A, e) {
            if (1 === A.length) return A;
            let t = 0;
            for(let r = 0; r < A.length; ++r)A[r].algo === e && (A[t++] = A[r]);
            return A.length = t, A;
        }(t, r);
        for (const e of s){
            const t = e.algo, r = e.hash;
            let s = w.createHash(t).update(A).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), L(s, r)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(A) {
        return A instanceof ReadableStream || "ReadableStream" === A[Symbol.toStringTag] && "function" == typeof A.tee;
    },
    readableStreamClose: function(A) {
        try {
            A.close(), A.byobRequest?.respond(0);
        } catch (A) {
            if (!A.message.includes("Controller is already closed") && !A.message.includes("ReadableStream is already closed")) throw A;
        }
    },
    isomorphicEncode: v,
    urlIsLocal: function(A) {
        u("protocol" in A);
        const e = A.protocol;
        return "about:" === e || "blob:" === e || "data:" === e;
    },
    urlHasHttpsScheme: V,
    urlIsHttpHttpsScheme: x,
    readAllBytes: H,
    simpleRangeHeaderValue: function(A, e) {
        const t = A;
        if (!t.startsWith("bytes")) return "failure";
        const r = {
            position: 5
        };
        if (e && Q((A)=>"\t" === A || " " === A, t, r), 61 !== t.charCodeAt(r.position)) return "failure";
        r.position++, e && Q((A)=>"\t" === A || " " === A, t, r);
        const s = Q((A)=>{
            const e = A.charCodeAt(0);
            return e >= 48 && e <= 57;
        }, t, r), o = s.length ? Number(s) : null;
        if (e && Q((A)=>"\t" === A || " " === A, t, r), 45 !== t.charCodeAt(r.position)) return "failure";
        r.position++, e && Q((A)=>"\t" === A || " " === A, t, r);
        const n = Q((A)=>{
            const e = A.charCodeAt(0);
            return e >= 48 && e <= 57;
        }, t, r), i = n.length ? Number(n) : null;
        return r.position < t.length || null === i && null === o || o > i ? "failure" : {
            rangeStartValue: o,
            rangeEndValue: i
        };
    },
    buildContentRange: function(A, e, t) {
        let r = "bytes ";
        return r += v(`${A}`), r += "-", r += v(`${e}`), r += "/", r += v(`${t}`), r;
    },
    parseMetadata: U,
    createInflate: function(A) {
        return new W(A);
    },
    extractMimeType: function(A) {
        let e = null, t = null, r = null;
        const s = O("content-type", A);
        if (null === s) return "failure";
        for (const A of s){
            const s = B(A);
            "failure" !== s && "*/*" !== s.essence && (r = s, r.essence !== t ? (e = null, r.parameters.has("charset") && (e = r.parameters.get("charset")), t = r.essence) : r.parameters.has("charset") || null === e || r.parameters.set("charset", e));
        }
        return r ?? "failure";
    },
    getDecodeSplit: O,
    utf8DecodeBytes: function(A) {
        return 0 === A.length ? "" : (239 === A[0] && 187 === A[1] && 191 === A[2] && (A = A.subarray(3)), P.decode(A));
    },
    environmentSettingsObject: Z
};
