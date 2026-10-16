"use strict";
const { redirectStatusSet: n, referrerPolicySet: r, badPortsSet: o } = require("./module-6687.js"), { getGlobalOrigin: s } = require("./module-9523.js"), { performance: i } = require("./module-2987.js"), { isBlobLike: a, toUSVString: c, ReadableStreamFrom: l } = require("./module-9361.js"), u = require("./module-2613.js"), { isUint8Array: g } = require("./module-8253.js");
let E, h = [];
try {
    E = require("./module-6982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    h = E.getHashes().filter((t)=>e.includes(t));
} catch  {}
function d(e) {
    const t = e.urlList, A = t.length;
    return 0 === A ? null : t[A - 1].toString();
}
function I(e) {
    return e.urlList[e.urlList.length - 1];
}
function B(e) {
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
function Q(e) {
    if (0 === e.length) return !1;
    for(let t = 0; t < e.length; ++t)if (!B(e.charCodeAt(t))) return !1;
    return !0;
}
function f(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function C(e, t) {
    return u(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", t && (e.pathname = "", e.search = ""), e);
}
function p(e) {
    return e instanceof URL && ("about:blank" === e.href || "about:srcdoc" === e.href || "data:" === e.protocol || "file:" === e.protocol || function(e) {
        if (null == e || "null" === e) return !1;
        const t = new URL(e);
        if ("https:" === t.protocol || "wss:" === t.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(t.hostname) || "localhost" === t.hostname || t.hostname.includes("localhost.") || t.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(e.origin));
}
const m = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function y(e) {
    const t = [];
    let A = !0;
    for (const n of e.split(" ")){
        A = !1;
        const e = m.exec(n);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const r = e.groups.algo.toLowerCase();
        h.includes(r) && t.push(e.groups);
    }
    return !0 === A ? "no metadata" : t;
}
function w(e, t) {
    if (e.length !== t.length) return !1;
    for(let A = 0; A < e.length; ++A)if (e[A] !== t[A]) {
        if ("+" === e[A] && "-" === t[A] || "/" === e[A] && "_" === t[A]) continue;
        return !1;
    }
    return !0;
}
function k(e, t) {
    return e.origin === t.origin && "null" === e.origin || e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port;
}
const b = {
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
Object.setPrototypeOf(b, null);
const N = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let T = globalThis.ReadableStream;
async function D(e) {
    const t = [];
    let A = 0;
    for(;;){
        const { done: n, value: r } = await e.read();
        if (n) return Buffer.concat(t, A);
        if (!g(r)) throw new TypeError("Received non-Uint8Array chunk");
        t.push(r), A += r.length;
    }
}
function S(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function R(e) {
    u("protocol" in e);
    const t = e.protocol;
    return "http:" === t || "https:" === t;
}
const F = Object.hasOwn || ((e, t)=>Object.prototype.hasOwnProperty.call(e, t));
module.exports = {
    isAborted: function(e) {
        return "aborted" === e.controller.state;
    },
    isCancelled: function(e) {
        return "aborted" === e.controller.state || "terminated" === e.controller.state;
    },
    createDeferredPromise: function() {
        let e, t;
        return {
            promise: new Promise((A, n)=>{
                e = A, t = n;
            }),
            resolve: e,
            reject: t
        };
    },
    ReadableStreamFrom: l,
    toUSVString: c,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return i.now();
    },
    determineRequestsReferrer: function(e) {
        const t = e.referrerPolicy;
        u(t);
        let A = null;
        if ("client" === e.referrer) {
            const e = s();
            if (!e || "null" === e.origin) return "no-referrer";
            A = new URL(e);
        } else e.referrer instanceof URL && (A = e.referrer);
        let n = C(A);
        const r = C(A, !0);
        n.toString().length > 4096 && (n = r);
        const o = k(e, n), i = p(n) && !p(e.url);
        switch(t){
            case "origin":
                return null != r ? r : C(A, !0);
            case "unsafe-url":
                return n;
            case "same-origin":
                return o ? r : "no-referrer";
            case "origin-when-cross-origin":
                return o ? n : r;
            case "strict-origin-when-cross-origin":
                {
                    const t = I(e);
                    return k(n, t) ? n : p(n) && !p(t) ? "no-referrer" : r;
                }
            default:
                return i ? "no-referrer" : r;
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
        let t = null;
        t = e.mode, e.headersList.set("sec-fetch-mode", t);
    },
    appendRequestOriginHeader: function(e) {
        let t = e.origin;
        if ("cors" === e.responseTainting || "websocket" === e.mode) t && e.headersList.append("origin", t);
        else if ("GET" !== e.method && "HEAD" !== e.method) {
            switch(e.referrerPolicy){
                case "no-referrer":
                    t = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    e.origin && S(e.origin) && !S(I(e)) && (t = null);
                    break;
                case "same-origin":
                    k(e, I(e)) || (t = null);
            }
            t && e.headersList.append("origin", t);
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
    setRequestReferrerPolicyOnRedirect: function(e, t) {
        const { headersList: A } = t, n = (A.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (n.length > 0) for(let e = n.length; 0 !== e; e--){
            const t = n[e - 1].trim();
            if (r.has(t)) {
                o = t;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: Q,
    requestBadPort: function(e) {
        const t = I(e);
        return R(t) && o.has(t.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: I,
    responseURL: d,
    responseLocationURL: function(e, t) {
        if (!n.has(e.status)) return null;
        let A = e.headersList.get("location");
        return null !== A && f(A) && (A = new URL(A, d(e))), A && !A.hash && (A.hash = t), A;
    },
    isBlobLike: a,
    isURLPotentiallyTrustworthy: p,
    isValidReasonPhrase: function(e) {
        for(let t = 0; t < e.length; ++t){
            const A = e.charCodeAt(t);
            if (!(9 === A || A >= 32 && A <= 126 || A >= 128 && A <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: k,
    normalizeMethod: function(e) {
        return b[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const t = JSON.stringify(e);
        if (void 0 === t) throw new TypeError("Value is not JSON serializable");
        return u("string" == typeof t), t;
    },
    makeIterator: function(e, t, A) {
        const n = {
            index: 0,
            kind: A,
            target: e
        }, r = {
            next () {
                if (Object.getPrototypeOf(this) !== r) throw new TypeError(`'next' called on an object that does not implement interface ${t} Iterator.`);
                const { index: e, kind: A, target: o } = n, s = o();
                if (e >= s.length) return {
                    value: void 0,
                    done: !0
                };
                const i = s[e];
                return n.index = e + 1, function(e, t) {
                    let A;
                    switch(t){
                        case "key":
                            A = e[0];
                            break;
                        case "value":
                            A = e[1];
                            break;
                        case "key+value":
                            A = e;
                    }
                    return {
                        value: A,
                        done: !1
                    };
                }(i, A);
            },
            [Symbol.toStringTag]: `${t} Iterator`
        };
        return Object.setPrototypeOf(r, N), Object.setPrototypeOf({}, r);
    },
    isValidHeaderName: function(e) {
        return Q(e);
    },
    isValidHeaderValue: f,
    hasOwn: F,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, t, A) {
        const n = t, r = A;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void r(e);
        }
        try {
            n(await D(o));
        } catch (e) {
            r(e);
        }
    },
    bytesMatch: function(e, t) {
        if (void 0 === E) return !0;
        const A = y(t);
        if ("no metadata" === A) return !0;
        if (0 === A.length) return !0;
        const n = function(e) {
            let t = e[0].algo;
            if ("5" === t[3]) return t;
            for(let A = 1; A < e.length; ++A){
                const n = e[A];
                if ("5" === n.algo[3]) {
                    t = "sha512";
                    break;
                }
                "3" !== t[3] && "3" === n.algo[3] && (t = "sha384");
            }
            return t;
        }(A), r = function(e, t) {
            if (1 === e.length) return e;
            let A = 0;
            for(let n = 0; n < e.length; ++n)e[n].algo === t && (e[A++] = e[n]);
            return e.length = A, e;
        }(A, n);
        for (const t of r){
            const A = t.algo, n = t.hash;
            let r = E.createHash(A).update(e).digest("base64");
            if ("=" === r[r.length - 1] && (r = "=" === r[r.length - 2] ? r.slice(0, -2) : r.slice(0, -1)), w(r, n)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(e) {
        return T || (T = require("./module-3774.js").ReadableStream), e instanceof T || "ReadableStream" === e[Symbol.toStringTag] && "function" == typeof e.tee;
    },
    readableStreamClose: function(e) {
        try {
            e.close();
        } catch (e) {
            if (!e.message.includes("Controller is already closed")) throw e;
        }
    },
    isomorphicEncode: function(e) {
        for(let t = 0; t < e.length; t++)u(e.charCodeAt(t) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, t)=>e + String.fromCharCode(t), "");
    },
    urlIsLocal: function(e) {
        u("protocol" in e);
        const t = e.protocol;
        return "about:" === t || "blob:" === t || "data:" === t;
    },
    urlHasHttpsScheme: S,
    urlIsHttpHttpsScheme: R,
    readAllBytes: D,
    normalizeMethodRecord: b,
    parseMetadata: y
};
