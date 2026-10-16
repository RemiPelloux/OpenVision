"use strict";
const { redirectStatusSet: t, referrerPolicySet: s, badPortsSet: o } = require("./module-6687.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { performance: i } = require("./module-2987.js"), { isBlobLike: l, toUSVString: d, ReadableStreamFrom: m } = require("./module-9361.js"), c = require("./module-2613.js"), { isUint8Array: p } = require("./module-8253.js");
let A, u = [];
try {
    A = require("./module-6982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    u = A.getHashes().filter((a)=>e.includes(a));
} catch  {}
function g(e) {
    const a = e.urlList, n = a.length;
    return 0 === n ? null : a[n - 1].toString();
}
function T(e) {
    return e.urlList[e.urlList.length - 1];
}
function h(e) {
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
function k(e) {
    if (0 === e.length) return !1;
    for(let a = 0; a < e.length; ++a)if (!h(e.charCodeAt(a))) return !1;
    return !0;
}
function _(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function E(e, a) {
    return c(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", a && (e.pathname = "", e.search = ""), e);
}
function f(e) {
    return e instanceof URL && ("about:blank" === e.href || "about:srcdoc" === e.href || "data:" === e.protocol || "file:" === e.protocol || function(e) {
        if (null == e || "null" === e) return !1;
        const a = new URL(e);
        if ("https:" === a.protocol || "wss:" === a.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(a.hostname) || "localhost" === a.hostname || a.hostname.includes("localhost.") || a.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(e.origin));
}
const C = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function I(e) {
    const a = [];
    let n = !0;
    for (const t of e.split(" ")){
        n = !1;
        const e = C.exec(t);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const s = e.groups.algo.toLowerCase();
        u.includes(s) && a.push(e.groups);
    }
    return !0 === n ? "no metadata" : a;
}
function v(e, a) {
    if (e.length !== a.length) return !1;
    for(let n = 0; n < e.length; ++n)if (e[n] !== a[n]) {
        if ("+" === e[n] && "-" === a[n] || "/" === e[n] && "_" === a[n]) continue;
        return !1;
    }
    return !0;
}
function y(e, a) {
    return e.origin === a.origin && "null" === e.origin || e.protocol === a.protocol && e.hostname === a.hostname && e.port === a.port;
}
const S = {
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
Object.setPrototypeOf(S, null);
const R = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let N = globalThis.ReadableStream;
async function B(e) {
    const a = [];
    let n = 0;
    for(;;){
        const { done: t, value: s } = await e.read();
        if (t) return Buffer.concat(a, n);
        if (!p(s)) throw new TypeError("Received non-Uint8Array chunk");
        a.push(s), n += s.length;
    }
}
function w(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function b(e) {
    c("protocol" in e);
    const a = e.protocol;
    return "http:" === a || "https:" === a;
}
const Q = Object.hasOwn || ((e, a)=>Object.prototype.hasOwnProperty.call(e, a));
module.exports = {
    isAborted: function(e) {
        return "aborted" === e.controller.state;
    },
    isCancelled: function(e) {
        return "aborted" === e.controller.state || "terminated" === e.controller.state;
    },
    createDeferredPromise: function() {
        let e, a;
        return {
            promise: new Promise((n, t)=>{
                e = n, a = t;
            }),
            resolve: e,
            reject: a
        };
    },
    ReadableStreamFrom: m,
    toUSVString: d,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return i.now();
    },
    determineRequestsReferrer: function(e) {
        const a = e.referrerPolicy;
        c(a);
        let n = null;
        if ("client" === e.referrer) {
            const e = r();
            if (!e || "null" === e.origin) return "no-referrer";
            n = new URL(e);
        } else e.referrer instanceof URL && (n = e.referrer);
        let t = E(n);
        const s = E(n, !0);
        t.toString().length > 4096 && (t = s);
        const o = y(e, t), i = f(t) && !f(e.url);
        switch(a){
            case "origin":
                return null != s ? s : E(n, !0);
            case "unsafe-url":
                return t;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? t : s;
            case "strict-origin-when-cross-origin":
                {
                    const a = T(e);
                    return y(t, a) ? t : f(t) && !f(a) ? "no-referrer" : s;
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
    clonePolicyContainer: function(e) {
        return {
            referrerPolicy: e.referrerPolicy
        };
    },
    appendFetchMetadata: function(e) {
        let a = null;
        a = e.mode, e.headersList.set("sec-fetch-mode", a);
    },
    appendRequestOriginHeader: function(e) {
        let a = e.origin;
        if ("cors" === e.responseTainting || "websocket" === e.mode) a && e.headersList.append("origin", a);
        else if ("GET" !== e.method && "HEAD" !== e.method) {
            switch(e.referrerPolicy){
                case "no-referrer":
                    a = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    e.origin && w(e.origin) && !w(T(e)) && (a = null);
                    break;
                case "same-origin":
                    y(e, T(e)) || (a = null);
            }
            a && e.headersList.append("origin", a);
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
    setRequestReferrerPolicyOnRedirect: function(e, a) {
        const { headersList: n } = a, t = (n.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (t.length > 0) for(let e = t.length; 0 !== e; e--){
            const a = t[e - 1].trim();
            if (s.has(a)) {
                o = a;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: k,
    requestBadPort: function(e) {
        const a = T(e);
        return b(a) && o.has(a.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: T,
    responseURL: g,
    responseLocationURL: function(e, a) {
        if (!t.has(e.status)) return null;
        let n = e.headersList.get("location");
        return null !== n && _(n) && (n = new URL(n, g(e))), n && !n.hash && (n.hash = a), n;
    },
    isBlobLike: l,
    isURLPotentiallyTrustworthy: f,
    isValidReasonPhrase: function(e) {
        for(let a = 0; a < e.length; ++a){
            const n = e.charCodeAt(a);
            if (!(9 === n || n >= 32 && n <= 126 || n >= 128 && n <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: y,
    normalizeMethod: function(e) {
        return S[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const a = JSON.stringify(e);
        if (void 0 === a) throw new TypeError("Value is not JSON serializable");
        return c("string" == typeof a), a;
    },
    makeIterator: function(e, a, n) {
        const t = {
            index: 0,
            kind: n,
            target: e
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${a} Iterator.`);
                const { index: e, kind: n, target: o } = t, r = o();
                if (e >= r.length) return {
                    value: void 0,
                    done: !0
                };
                const i = r[e];
                return t.index = e + 1, function(e, a) {
                    let n;
                    switch(a){
                        case "key":
                            n = e[0];
                            break;
                        case "value":
                            n = e[1];
                            break;
                        case "key+value":
                            n = e;
                    }
                    return {
                        value: n,
                        done: !1
                    };
                }(i, n);
            },
            [Symbol.toStringTag]: `${a} Iterator`
        };
        return Object.setPrototypeOf(s, R), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(e) {
        return k(e);
    },
    isValidHeaderValue: _,
    hasOwn: Q,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, a, n) {
        const t = a, s = n;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void s(e);
        }
        try {
            t(await B(o));
        } catch (e) {
            s(e);
        }
    },
    bytesMatch: function(e, a) {
        if (void 0 === A) return !0;
        const n = I(a);
        if ("no metadata" === n) return !0;
        if (0 === n.length) return !0;
        const t = function(e) {
            let a = e[0].algo;
            if ("5" === a[3]) return a;
            for(let n = 1; n < e.length; ++n){
                const t = e[n];
                if ("5" === t.algo[3]) {
                    a = "sha512";
                    break;
                }
                "3" !== a[3] && "3" === t.algo[3] && (a = "sha384");
            }
            return a;
        }(n), s = function(e, a) {
            if (1 === e.length) return e;
            let n = 0;
            for(let t = 0; t < e.length; ++t)e[t].algo === a && (e[n++] = e[t]);
            return e.length = n, e;
        }(n, t);
        for (const a of s){
            const n = a.algo, t = a.hash;
            let s = A.createHash(n).update(e).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), v(s, t)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(e) {
        return N || (N = require("./module-3774.js").ReadableStream), e instanceof N || "ReadableStream" === e[Symbol.toStringTag] && "function" == typeof e.tee;
    },
    readableStreamClose: function(e) {
        try {
            e.close();
        } catch (e) {
            if (!e.message.includes("Controller is already closed")) throw e;
        }
    },
    isomorphicEncode: function(e) {
        for(let a = 0; a < e.length; a++)c(e.charCodeAt(a) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, a)=>e + String.fromCharCode(a), "");
    },
    urlIsLocal: function(e) {
        c("protocol" in e);
        const a = e.protocol;
        return "about:" === a || "blob:" === a || "data:" === a;
    },
    urlHasHttpsScheme: w,
    urlIsHttpHttpsScheme: b,
    readAllBytes: B,
    normalizeMethodRecord: S,
    parseMetadata: I
};
