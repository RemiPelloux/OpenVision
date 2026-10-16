"use strict";
const { redirectStatusSet: r, referrerPolicySet: s, badPortsSet: o } = require("./module-96687.js"), { getGlobalOrigin: n } = require("./module-69523.js"), { performance: i } = require(82987), { isBlobLike: E, toUSVString: Q, ReadableStreamFrom: g } = require("./module-9361.js"), C = require(42613), { isUint8Array: B } = require(98253);
let a, I = [];
try {
    a = require(76982);
    const A = [
        "sha256",
        "sha384",
        "sha512"
    ];
    I = a.getHashes().filter((e)=>A.includes(e));
} catch  {}
function c(A) {
    const e = A.urlList, t = e.length;
    return 0 === t ? null : e[t - 1].toString();
}
function h(A) {
    return A.urlList[A.urlList.length - 1];
}
function l(A) {
    switch(A){
        case 34:
        case 40:
        case 41:
        case 44:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 123:
        case 125:
            return !1;
        default:
            return A >= 33 && A <= 126;
    }
}
function u(A) {
    if (0 === A.length) return !1;
    for(let e = 0; e < A.length; ++e)if (!l(A.charCodeAt(e))) return !1;
    return !0;
}
function d(A) {
    return !(A.startsWith("\t") || A.startsWith(" ") || A.endsWith("\t") || A.endsWith(" ")) && !(A.includes("\0") || A.includes("\r") || A.includes("\n"));
}
function f(A, e) {
    return C(A instanceof URL), "file:" === A.protocol || "about:" === A.protocol || "blank:" === A.protocol ? "no-referrer" : (A.username = "", A.password = "", A.hash = "", e && (A.pathname = "", A.search = ""), A);
}
function y(A) {
    return A instanceof URL && ("about:blank" === A.href || "about:srcdoc" === A.href || "data:" === A.protocol || "file:" === A.protocol || function(A) {
        if (null == A || "null" === A) return !1;
        const e = new URL(A);
        if ("https:" === e.protocol || "wss:" === e.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(e.hostname) || "localhost" === e.hostname || e.hostname.includes("localhost.") || e.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(A.origin));
}
const D = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function R(A) {
    const e = [];
    let t = !0;
    for (const r of A.split(" ")){
        t = !1;
        const A = D.exec(r);
        if (null === A || void 0 === A.groups || void 0 === A.groups.algo) continue;
        const s = A.groups.algo.toLowerCase();
        I.includes(s) && e.push(A.groups);
    }
    return !0 === t ? "no metadata" : e;
}
function w(A, e) {
    if (A.length !== e.length) return !1;
    for(let t = 0; t < A.length; ++t)if (A[t] !== e[t]) {
        if ("+" === A[t] && "-" === e[t] || "/" === A[t] && "_" === e[t]) continue;
        return !1;
    }
    return !0;
}
function p(A, e) {
    return A.origin === e.origin && "null" === A.origin || A.protocol === e.protocol && A.hostname === e.hostname && A.port === e.port;
}
const k = {
    delete: "DELETE",
    DELETE: "DELETE",
    get: "GET",
    GET: "GET",
    head: "HEAD",
    HEAD: "HEAD",
    options: "OPTIONS",
    OPTIONS: "OPTIONS",
    post: "POST",
    POST: "POST",
    put: "PUT",
    PUT: "PUT"
};
Object.setPrototypeOf(k, null);
const F = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let N = globalThis.ReadableStream;
async function b(A) {
    const e = [];
    let t = 0;
    for(;;){
        const { done: r, value: s } = await A.read();
        if (r) return Buffer.concat(e, t);
        if (!B(s)) throw new TypeError("Received non-Uint8Array chunk");
        e.push(s), t += s.length;
    }
}
function S(A) {
    return "string" == typeof A ? A.startsWith("https:") : "https:" === A.protocol;
}
function m(A) {
    C("protocol" in A);
    const e = A.protocol;
    return "http:" === e || "https:" === e;
}
const U = Object.hasOwn || ((A, e)=>Object.prototype.hasOwnProperty.call(A, e));
module.exports = {
    isAborted: function(A) {
        return "aborted" === A.controller.state;
    },
    isCancelled: function(A) {
        return "aborted" === A.controller.state || "terminated" === A.controller.state;
    },
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
    ReadableStreamFrom: g,
    toUSVString: Q,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(A) {},
    coarsenedSharedCurrentTime: function(A) {
        return i.now();
    },
    determineRequestsReferrer: function(A) {
        const e = A.referrerPolicy;
        C(e);
        let t = null;
        if ("client" === A.referrer) {
            const A = n();
            if (!A || "null" === A.origin) return "no-referrer";
            t = new URL(A);
        } else A.referrer instanceof URL && (t = A.referrer);
        let r = f(t);
        const s = f(t, !0);
        r.toString().length > 4096 && (r = s);
        const o = p(A, r), i = y(r) && !y(A.url);
        switch(e){
            case "origin":
                return null != s ? s : f(t, !0);
            case "unsafe-url":
                return r;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? r : s;
            case "strict-origin-when-cross-origin":
                {
                    const e = h(A);
                    return p(r, e) ? r : y(r) && !y(e) ? "no-referrer" : s;
                }
            default:
                return i ? "no-referrer" : s;
        }
    },
    makePolicyContainer: function() {
        return {
            referrerPolicy: "strict-origin-when-cross-origin"
        };
    },
    clonePolicyContainer: function(A) {
        return {
            referrerPolicy: A.referrerPolicy
        };
    },
    appendFetchMetadata: function(A) {
        let e = null;
        e = A.mode, A.headersList.set("sec-fetch-mode", e);
    },
    appendRequestOriginHeader: function(A) {
        let e = A.origin;
        if ("cors" === A.responseTainting || "websocket" === A.mode) e && A.headersList.append("origin", e);
        else if ("GET" !== A.method && "HEAD" !== A.method) {
            switch(A.referrerPolicy){
                case "no-referrer":
                    e = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    A.origin && S(A.origin) && !S(h(A)) && (e = null);
                    break;
                case "same-origin":
                    p(A, h(A)) || (e = null);
            }
            e && A.headersList.append("origin", e);
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
        const { headersList: t } = e, r = (t.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (r.length > 0) for(let A = r.length; 0 !== A; A--){
            const e = r[A - 1].trim();
            if (s.has(e)) {
                o = e;
                break;
            }
        }
        "" !== o && (A.referrerPolicy = o);
    },
    isValidHTTPToken: u,
    requestBadPort: function(A) {
        const e = h(A);
        return m(e) && o.has(e.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: h,
    responseURL: c,
    responseLocationURL: function(A, e) {
        if (!r.has(A.status)) return null;
        let t = A.headersList.get("location");
        return null !== t && d(t) && (t = new URL(t, c(A))), t && !t.hash && (t.hash = e), t;
    },
    isBlobLike: E,
    isURLPotentiallyTrustworthy: y,
    isValidReasonPhrase: function(A) {
        for(let e = 0; e < A.length; ++e){
            const t = A.charCodeAt(e);
            if (!(9 === t || t >= 32 && t <= 126 || t >= 128 && t <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: p,
    normalizeMethod: function(A) {
        return k[A.toLowerCase()] ?? A;
    },
    serializeJavascriptValueToJSONString: function(A) {
        const e = JSON.stringify(A);
        if (void 0 === e) throw new TypeError("Value is not JSON serializable");
        return C("string" == typeof e), e;
    },
    makeIterator: function(A, e, t) {
        const r = {
            index: 0,
            kind: t,
            target: A
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${e} Iterator.`);
                const { index: A, kind: t, target: o } = r, n = o();
                if (A >= n.length) return {
                    value: void 0,
                    done: !0
                };
                const i = n[A];
                return r.index = A + 1, function(A, e) {
                    let t;
                    switch(e){
                        case "key":
                            t = A[0];
                            break;
                        case "value":
                            t = A[1];
                            break;
                        case "key+value":
                            t = A;
                    }
                    return {
                        value: t,
                        done: !1
                    };
                }(i, t);
            },
            [Symbol.toStringTag]: `${e} Iterator`
        };
        return Object.setPrototypeOf(s, F), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(A) {
        return u(A);
    },
    isValidHeaderValue: d,
    hasOwn: U,
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
            r(await b(o));
        } catch (A) {
            s(A);
        }
    },
    bytesMatch: function(A, e) {
        if (void 0 === a) return !0;
        const t = R(e);
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
            let s = a.createHash(t).update(A).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), w(s, r)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(A) {
        return N || (N = require(63774).ReadableStream), A instanceof N || "ReadableStream" === A[Symbol.toStringTag] && "function" == typeof A.tee;
    },
    readableStreamClose: function(A) {
        try {
            A.close();
        } catch (A) {
            if (!A.message.includes("Controller is already closed")) throw A;
        }
    },
    isomorphicEncode: function(A) {
        for(let e = 0; e < A.length; e++)C(A.charCodeAt(e) <= 255);
        return A;
    },
    isomorphicDecode: function(A) {
        return A.length < 65535 ? String.fromCharCode(...A) : A.reduce((A, e)=>A + String.fromCharCode(e), "");
    },
    urlIsLocal: function(A) {
        C("protocol" in A);
        const e = A.protocol;
        return "about:" === e || "blob:" === e || "data:" === e;
    },
    urlHasHttpsScheme: S,
    urlIsHttpHttpsScheme: m,
    readAllBytes: b,
    normalizeMethodRecord: k,
    parseMetadata: R
};
