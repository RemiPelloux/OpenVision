"use strict";
const { redirectStatusSet: n, referrerPolicySet: r, badPortsSet: o } = require("./module-6687.js"), { getGlobalOrigin: s } = require("./module-9523.js"), { performance: a } = require("./module-2987.js"), { isBlobLike: i, toUSVString: c, ReadableStreamFrom: l } = require("./module-9361.js"), g = require("./module-2613.js"), { isUint8Array: E } = require("./module-8253.js");
let u, d = [];
try {
    u = require("./module-6982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    d = u.getHashes().filter((A)=>e.includes(A));
} catch  {}
function I(e) {
    const A = e.urlList, t = A.length;
    return 0 === t ? null : A[t - 1].toString();
}
function h(e) {
    return e.urlList[e.urlList.length - 1];
}
function Q(e) {
    switch(e){
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
            return e >= 33 && e <= 126;
    }
}
function m(e) {
    if (0 === e.length) return !1;
    for(let A = 0; A < e.length; ++A)if (!Q(e.charCodeAt(A))) return !1;
    return !0;
}
function C(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function B(e, A) {
    return g(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", A && (e.pathname = "", e.search = ""), e);
}
function p(e) {
    return e instanceof URL && ("about:blank" === e.href || "about:srcdoc" === e.href || "data:" === e.protocol || "file:" === e.protocol || function(e) {
        if (null == e || "null" === e) return !1;
        const A = new URL(e);
        if ("https:" === A.protocol || "wss:" === A.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(A.hostname) || "localhost" === A.hostname || A.hostname.includes("localhost.") || A.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(e.origin));
}
const f = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function y(e) {
    const A = [];
    let t = !0;
    for (const n of e.split(" ")){
        t = !1;
        const e = f.exec(n);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const r = e.groups.algo.toLowerCase();
        d.includes(r) && A.push(e.groups);
    }
    return !0 === t ? "no metadata" : A;
}
function T(e, A) {
    if (e.length !== A.length) return !1;
    for(let t = 0; t < e.length; ++t)if (e[t] !== A[t]) {
        if ("+" === e[t] && "-" === A[t] || "/" === e[t] && "_" === A[t]) continue;
        return !1;
    }
    return !0;
}
function k(e, A) {
    return e.origin === A.origin && "null" === e.origin || e.protocol === A.protocol && e.hostname === A.hostname && e.port === A.port;
}
const w = {
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
Object.setPrototypeOf(w, null);
const N = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let D = globalThis.ReadableStream;
async function R(e) {
    const A = [];
    let t = 0;
    for(;;){
        const { done: n, value: r } = await e.read();
        if (n) return Buffer.concat(A, t);
        if (!E(r)) throw new TypeError("Received non-Uint8Array chunk");
        A.push(r), t += r.length;
    }
}
function S(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function b(e) {
    g("protocol" in e);
    const A = e.protocol;
    return "http:" === A || "https:" === A;
}
const F = Object.hasOwn || ((e, A)=>Object.prototype.hasOwnProperty.call(e, A));
module.exports = {
    isAborted: function(e) {
        return "aborted" === e.controller.state;
    },
    isCancelled: function(e) {
        return "aborted" === e.controller.state || "terminated" === e.controller.state;
    },
    createDeferredPromise: function() {
        let e, A;
        return {
            promise: new Promise((t, n)=>{
                e = t, A = n;
            }),
            resolve: e,
            reject: A
        };
    },
    ReadableStreamFrom: l,
    toUSVString: c,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return a.now();
    },
    determineRequestsReferrer: function(e) {
        const A = e.referrerPolicy;
        g(A);
        let t = null;
        if ("client" === e.referrer) {
            const e = s();
            if (!e || "null" === e.origin) return "no-referrer";
            t = new URL(e);
        } else e.referrer instanceof URL && (t = e.referrer);
        let n = B(t);
        const r = B(t, !0);
        n.toString().length > 4096 && (n = r);
        const o = k(e, n), a = p(n) && !p(e.url);
        switch(A){
            case "origin":
                return null != r ? r : B(t, !0);
            case "unsafe-url":
                return n;
            case "same-origin":
                return o ? r : "no-referrer";
            case "origin-when-cross-origin":
                return o ? n : r;
            case "strict-origin-when-cross-origin":
                {
                    const A = h(e);
                    return k(n, A) ? n : p(n) && !p(A) ? "no-referrer" : r;
                }
            default:
                return a ? "no-referrer" : r;
        }
    },
    makePolicyContainer: function() {
        return {
            referrerPolicy: "strict-origin-when-cross-origin"
        };
    },
    clonePolicyContainer: function(e) {
        return {
            referrerPolicy: e.referrerPolicy
        };
    },
    appendFetchMetadata: function(e) {
        let A = null;
        A = e.mode, e.headersList.set("sec-fetch-mode", A);
    },
    appendRequestOriginHeader: function(e) {
        let A = e.origin;
        if ("cors" === e.responseTainting || "websocket" === e.mode) A && e.headersList.append("origin", A);
        else if ("GET" !== e.method && "HEAD" !== e.method) {
            switch(e.referrerPolicy){
                case "no-referrer":
                    A = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    e.origin && S(e.origin) && !S(h(e)) && (A = null);
                    break;
                case "same-origin":
                    k(e, h(e)) || (A = null);
            }
            A && e.headersList.append("origin", A);
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
    createOpaqueTimingInfo: function(e) {
        return {
            startTime: e.startTime ?? 0,
            redirectStartTime: 0,
            redirectEndTime: 0,
            postRedirectStartTime: e.startTime ?? 0,
            finalServiceWorkerStartTime: 0,
            finalNetworkResponseStartTime: 0,
            finalNetworkRequestStartTime: 0,
            endTime: 0,
            encodedBodySize: 0,
            decodedBodySize: 0,
            finalConnectionTimingInfo: null
        };
    },
    setRequestReferrerPolicyOnRedirect: function(e, A) {
        const { headersList: t } = A, n = (t.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (n.length > 0) for(let e = n.length; 0 !== e; e--){
            const A = n[e - 1].trim();
            if (r.has(A)) {
                o = A;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: m,
    requestBadPort: function(e) {
        const A = h(e);
        return b(A) && o.has(A.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: h,
    responseURL: I,
    responseLocationURL: function(e, A) {
        if (!n.has(e.status)) return null;
        let t = e.headersList.get("location");
        return null !== t && C(t) && (t = new URL(t, I(e))), t && !t.hash && (t.hash = A), t;
    },
    isBlobLike: i,
    isURLPotentiallyTrustworthy: p,
    isValidReasonPhrase: function(e) {
        for(let A = 0; A < e.length; ++A){
            const t = e.charCodeAt(A);
            if (!(9 === t || t >= 32 && t <= 126 || t >= 128 && t <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: k,
    normalizeMethod: function(e) {
        return w[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const A = JSON.stringify(e);
        if (void 0 === A) throw new TypeError("Value is not JSON serializable");
        return g("string" == typeof A), A;
    },
    makeIterator: function(e, A, t) {
        const n = {
            index: 0,
            kind: t,
            target: e
        }, r = {
            next () {
                if (Object.getPrototypeOf(this) !== r) throw new TypeError(`'next' called on an object that does not implement interface ${A} Iterator.`);
                const { index: e, kind: t, target: o } = n, s = o();
                if (e >= s.length) return {
                    value: void 0,
                    done: !0
                };
                const a = s[e];
                return n.index = e + 1, function(e, A) {
                    let t;
                    switch(A){
                        case "key":
                            t = e[0];
                            break;
                        case "value":
                            t = e[1];
                            break;
                        case "key+value":
                            t = e;
                    }
                    return {
                        value: t,
                        done: !1
                    };
                }(a, t);
            },
            [Symbol.toStringTag]: `${A} Iterator`
        };
        return Object.setPrototypeOf(r, N), Object.setPrototypeOf({}, r);
    },
    isValidHeaderName: function(e) {
        return m(e);
    },
    isValidHeaderValue: C,
    hasOwn: F,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, A, t) {
        const n = A, r = t;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void r(e);
        }
        try {
            n(await R(o));
        } catch (e) {
            r(e);
        }
    },
    bytesMatch: function(e, A) {
        if (void 0 === u) return !0;
        const t = y(A);
        if ("no metadata" === t) return !0;
        if (0 === t.length) return !0;
        const n = function(e) {
            let A = e[0].algo;
            if ("5" === A[3]) return A;
            for(let t = 1; t < e.length; ++t){
                const n = e[t];
                if ("5" === n.algo[3]) {
                    A = "sha512";
                    break;
                }
                "3" !== A[3] && "3" === n.algo[3] && (A = "sha384");
            }
            return A;
        }(t), r = function(e, A) {
            if (1 === e.length) return e;
            let t = 0;
            for(let n = 0; n < e.length; ++n)e[n].algo === A && (e[t++] = e[n]);
            return e.length = t, e;
        }(t, n);
        for (const A of r){
            const t = A.algo, n = A.hash;
            let r = u.createHash(t).update(e).digest("base64");
            if ("=" === r[r.length - 1] && (r = "=" === r[r.length - 2] ? r.slice(0, -2) : r.slice(0, -1)), T(r, n)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(e) {
        return D || (D = require("./module-3774.js").ReadableStream), e instanceof D || "ReadableStream" === e[Symbol.toStringTag] && "function" == typeof e.tee;
    },
    readableStreamClose: function(e) {
        try {
            e.close();
        } catch (e) {
            if (!e.message.includes("Controller is already closed")) throw e;
        }
    },
    isomorphicEncode: function(e) {
        for(let A = 0; A < e.length; A++)g(e.charCodeAt(A) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, A)=>e + String.fromCharCode(A), "");
    },
    urlIsLocal: function(e) {
        g("protocol" in e);
        const A = e.protocol;
        return "about:" === A || "blob:" === A || "data:" === A;
    },
    urlHasHttpsScheme: S,
    urlIsHttpHttpsScheme: b,
    readAllBytes: R,
    normalizeMethodRecord: w,
    parseMetadata: y
};
