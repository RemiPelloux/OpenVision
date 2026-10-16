"use strict";
const { redirectStatusSet: a, referrerPolicySet: s, badPortsSet: o } = require("./module-6687.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { performance: i } = require("./module-2987.js"), { isBlobLike: A, toUSVString: c, ReadableStreamFrom: l } = require("./module-9361.js"), d = require("./module-2613.js"), { isUint8Array: m } = require("./module-8253.js");
let u, g = [];
try {
    u = require("./module-6982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    g = u.getHashes().filter((n)=>e.includes(n));
} catch  {}
function p(e) {
    const n = e.urlList, t = n.length;
    return 0 === t ? null : n[t - 1].toString();
}
function E(e) {
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
function T(e) {
    if (0 === e.length) return !1;
    for(let n = 0; n < e.length; ++n)if (!h(e.charCodeAt(n))) return !1;
    return !0;
}
function k(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function f(e, n) {
    return d(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", n && (e.pathname = "", e.search = ""), e);
}
function _(e) {
    return e instanceof URL && ("about:blank" === e.href || "about:srcdoc" === e.href || "data:" === e.protocol || "file:" === e.protocol || function(e) {
        if (null == e || "null" === e) return !1;
        const n = new URL(e);
        if ("https:" === n.protocol || "wss:" === n.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(n.hostname) || "localhost" === n.hostname || n.hostname.includes("localhost.") || n.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(e.origin));
}
const I = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function C(e) {
    const n = [];
    let t = !0;
    for (const a of e.split(" ")){
        t = !1;
        const e = I.exec(a);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const s = e.groups.algo.toLowerCase();
        g.includes(s) && n.push(e.groups);
    }
    return !0 === t ? "no metadata" : n;
}
function y(e, n) {
    if (e.length !== n.length) return !1;
    for(let t = 0; t < e.length; ++t)if (e[t] !== n[t]) {
        if ("+" === e[t] && "-" === n[t] || "/" === e[t] && "_" === n[t]) continue;
        return !1;
    }
    return !0;
}
function B(e, n) {
    return e.origin === n.origin && "null" === e.origin || e.protocol === n.protocol && e.hostname === n.hostname && e.port === n.port;
}
const Q = {
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
Object.setPrototypeOf(Q, null);
const v = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let R = globalThis.ReadableStream;
async function N(e) {
    const n = [];
    let t = 0;
    for(;;){
        const { done: a, value: s } = await e.read();
        if (a) return Buffer.concat(n, t);
        if (!m(s)) throw new TypeError("Received non-Uint8Array chunk");
        n.push(s), t += s.length;
    }
}
function S(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function w(e) {
    d("protocol" in e);
    const n = e.protocol;
    return "http:" === n || "https:" === n;
}
const b = Object.hasOwn || ((e, n)=>Object.prototype.hasOwnProperty.call(e, n));
module.exports = {
    isAborted: function(e) {
        return "aborted" === e.controller.state;
    },
    isCancelled: function(e) {
        return "aborted" === e.controller.state || "terminated" === e.controller.state;
    },
    createDeferredPromise: function() {
        let e, n;
        return {
            promise: new Promise((t, a)=>{
                e = t, n = a;
            }),
            resolve: e,
            reject: n
        };
    },
    ReadableStreamFrom: l,
    toUSVString: c,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return i.now();
    },
    determineRequestsReferrer: function(e) {
        const n = e.referrerPolicy;
        d(n);
        let t = null;
        if ("client" === e.referrer) {
            const e = r();
            if (!e || "null" === e.origin) return "no-referrer";
            t = new URL(e);
        } else e.referrer instanceof URL && (t = e.referrer);
        let a = f(t);
        const s = f(t, !0);
        a.toString().length > 4096 && (a = s);
        const o = B(e, a), i = _(a) && !_(e.url);
        switch(n){
            case "origin":
                return null != s ? s : f(t, !0);
            case "unsafe-url":
                return a;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? a : s;
            case "strict-origin-when-cross-origin":
                {
                    const n = E(e);
                    return B(a, n) ? a : _(a) && !_(n) ? "no-referrer" : s;
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
        let n = null;
        n = e.mode, e.headersList.set("sec-fetch-mode", n);
    },
    appendRequestOriginHeader: function(e) {
        let n = e.origin;
        if ("cors" === e.responseTainting || "websocket" === e.mode) n && e.headersList.append("origin", n);
        else if ("GET" !== e.method && "HEAD" !== e.method) {
            switch(e.referrerPolicy){
                case "no-referrer":
                    n = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    e.origin && S(e.origin) && !S(E(e)) && (n = null);
                    break;
                case "same-origin":
                    B(e, E(e)) || (n = null);
            }
            n && e.headersList.append("origin", n);
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
    setRequestReferrerPolicyOnRedirect: function(e, n) {
        const { headersList: t } = n, a = (t.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (a.length > 0) for(let e = a.length; 0 !== e; e--){
            const n = a[e - 1].trim();
            if (s.has(n)) {
                o = n;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: T,
    requestBadPort: function(e) {
        const n = E(e);
        return w(n) && o.has(n.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: E,
    responseURL: p,
    responseLocationURL: function(e, n) {
        if (!a.has(e.status)) return null;
        let t = e.headersList.get("location");
        return null !== t && k(t) && (t = new URL(t, p(e))), t && !t.hash && (t.hash = n), t;
    },
    isBlobLike: A,
    isURLPotentiallyTrustworthy: _,
    isValidReasonPhrase: function(e) {
        for(let n = 0; n < e.length; ++n){
            const t = e.charCodeAt(n);
            if (!(9 === t || t >= 32 && t <= 126 || t >= 128 && t <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: B,
    normalizeMethod: function(e) {
        return Q[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const n = JSON.stringify(e);
        if (void 0 === n) throw new TypeError("Value is not JSON serializable");
        return d("string" == typeof n), n;
    },
    makeIterator: function(e, n, t) {
        const a = {
            index: 0,
            kind: t,
            target: e
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${n} Iterator.`);
                const { index: e, kind: t, target: o } = a, r = o();
                if (e >= r.length) return {
                    value: void 0,
                    done: !0
                };
                const i = r[e];
                return a.index = e + 1, function(e, n) {
                    let t;
                    switch(n){
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
                }(i, t);
            },
            [Symbol.toStringTag]: `${n} Iterator`
        };
        return Object.setPrototypeOf(s, v), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(e) {
        return T(e);
    },
    isValidHeaderValue: k,
    hasOwn: b,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, n, t) {
        const a = n, s = t;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void s(e);
        }
        try {
            a(await N(o));
        } catch (e) {
            s(e);
        }
    },
    bytesMatch: function(e, n) {
        if (void 0 === u) return !0;
        const t = C(n);
        if ("no metadata" === t) return !0;
        if (0 === t.length) return !0;
        const a = function(e) {
            let n = e[0].algo;
            if ("5" === n[3]) return n;
            for(let t = 1; t < e.length; ++t){
                const a = e[t];
                if ("5" === a.algo[3]) {
                    n = "sha512";
                    break;
                }
                "3" !== n[3] && "3" === a.algo[3] && (n = "sha384");
            }
            return n;
        }(t), s = function(e, n) {
            if (1 === e.length) return e;
            let t = 0;
            for(let a = 0; a < e.length; ++a)e[a].algo === n && (e[t++] = e[a]);
            return e.length = t, e;
        }(t, a);
        for (const n of s){
            const t = n.algo, a = n.hash;
            let s = u.createHash(t).update(e).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), y(s, a)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(e) {
        return R || (R = require("./module-3774.js").ReadableStream), e instanceof R || "ReadableStream" === e[Symbol.toStringTag] && "function" == typeof e.tee;
    },
    readableStreamClose: function(e) {
        try {
            e.close();
        } catch (e) {
            if (!e.message.includes("Controller is already closed")) throw e;
        }
    },
    isomorphicEncode: function(e) {
        for(let n = 0; n < e.length; n++)d(e.charCodeAt(n) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, n)=>e + String.fromCharCode(n), "");
    },
    urlIsLocal: function(e) {
        d("protocol" in e);
        const n = e.protocol;
        return "about:" === n || "blob:" === n || "data:" === n;
    },
    urlHasHttpsScheme: S,
    urlIsHttpHttpsScheme: w,
    readAllBytes: N,
    normalizeMethodRecord: Q,
    parseMetadata: C
};
