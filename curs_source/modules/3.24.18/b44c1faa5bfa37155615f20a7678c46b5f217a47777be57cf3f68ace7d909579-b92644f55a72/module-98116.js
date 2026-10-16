"use strict";
const { redirectStatusSet: n, referrerPolicySet: s, badPortsSet: o } = require("./module-22955.js"), { getGlobalOrigin: i } = require("./module-13967.js"), { performance: a } = require("./module-82987.js"), { isBlobLike: c, toUSVString: l, ReadableStreamFrom: u } = require("./module-83589.js"), d = require("./module-42613.js"), { isUint8Array: p } = require("./module-98253.js");
let m, h = [];
try {
    m = require("./module-76982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    h = m.getHashes().filter((t)=>e.includes(t));
} catch  {}
function f(e) {
    const t = e.urlList, r = t.length;
    return 0 === r ? null : t[r - 1].toString();
}
function g(e) {
    return e.urlList[e.urlList.length - 1];
}
function y(e) {
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
function w(e) {
    if (0 === e.length) return !1;
    for(let t = 0; t < e.length; ++t)if (!y(e.charCodeAt(t))) return !1;
    return !0;
}
function v(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function _(e, t) {
    return d(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", t && (e.pathname = "", e.search = ""), e);
}
function A(e) {
    return e instanceof URL && ("about:blank" === e.href || "about:srcdoc" === e.href || "data:" === e.protocol || "file:" === e.protocol || function(e) {
        if (null == e || "null" === e) return !1;
        const t = new URL(e);
        if ("https:" === t.protocol || "wss:" === t.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(t.hostname) || "localhost" === t.hostname || t.hostname.includes("localhost.") || t.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(e.origin));
}
const S = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function b(e) {
    const t = [];
    let r = !0;
    for (const n of e.split(" ")){
        r = !1;
        const e = S.exec(n);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const s = e.groups.algo.toLowerCase();
        h.includes(s) && t.push(e.groups);
    }
    return !0 === r ? "no metadata" : t;
}
function E(e, t) {
    if (e.length !== t.length) return !1;
    for(let r = 0; r < e.length; ++r)if (e[r] !== t[r]) {
        if ("+" === e[r] && "-" === t[r] || "/" === e[r] && "_" === t[r]) continue;
        return !1;
    }
    return !0;
}
function I(e, t) {
    return e.origin === t.origin && "null" === e.origin || e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port;
}
const C = {
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
Object.setPrototypeOf(C, null);
const k = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let x = globalThis.ReadableStream;
async function T(e) {
    const t = [];
    let r = 0;
    for(;;){
        const { done: n, value: s } = await e.read();
        if (n) return Buffer.concat(t, r);
        if (!p(s)) throw new TypeError("Received non-Uint8Array chunk");
        t.push(s), r += s.length;
    }
}
function R(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function B(e) {
    d("protocol" in e);
    const t = e.protocol;
    return "http:" === t || "https:" === t;
}
const P = Object.hasOwn || ((e, t)=>Object.prototype.hasOwnProperty.call(e, t));
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
            promise: new Promise((r, n)=>{
                e = r, t = n;
            }),
            resolve: e,
            reject: t
        };
    },
    ReadableStreamFrom: u,
    toUSVString: l,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return a.now();
    },
    determineRequestsReferrer: function(e) {
        const t = e.referrerPolicy;
        d(t);
        let r = null;
        if ("client" === e.referrer) {
            const e = i();
            if (!e || "null" === e.origin) return "no-referrer";
            r = new URL(e);
        } else e.referrer instanceof URL && (r = e.referrer);
        let n = _(r);
        const s = _(r, !0);
        n.toString().length > 4096 && (n = s);
        const o = I(e, n), a = A(n) && !A(e.url);
        switch(t){
            case "origin":
                return null != s ? s : _(r, !0);
            case "unsafe-url":
                return n;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? n : s;
            case "strict-origin-when-cross-origin":
                {
                    const t = g(e);
                    return I(n, t) ? n : A(n) && !A(t) ? "no-referrer" : s;
                }
            default:
                return a ? "no-referrer" : s;
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
                    e.origin && R(e.origin) && !R(g(e)) && (t = null);
                    break;
                case "same-origin":
                    I(e, g(e)) || (t = null);
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
        const { headersList: r } = t, n = (r.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (n.length > 0) for(let e = n.length; 0 !== e; e--){
            const t = n[e - 1].trim();
            if (s.has(t)) {
                o = t;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: w,
    requestBadPort: function(e) {
        const t = g(e);
        return B(t) && o.has(t.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: g,
    responseURL: f,
    responseLocationURL: function(e, t) {
        if (!n.has(e.status)) return null;
        let r = e.headersList.get("location");
        return null !== r && v(r) && (r = new URL(r, f(e))), r && !r.hash && (r.hash = t), r;
    },
    isBlobLike: c,
    isURLPotentiallyTrustworthy: A,
    isValidReasonPhrase: function(e) {
        for(let t = 0; t < e.length; ++t){
            const r = e.charCodeAt(t);
            if (!(9 === r || r >= 32 && r <= 126 || r >= 128 && r <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: I,
    normalizeMethod: function(e) {
        return C[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const t = JSON.stringify(e);
        if (void 0 === t) throw new TypeError("Value is not JSON serializable");
        return d("string" == typeof t), t;
    },
    makeIterator: function(e, t, r) {
        const n = {
            index: 0,
            kind: r,
            target: e
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${t} Iterator.`);
                const { index: e, kind: r, target: o } = n, i = o();
                if (e >= i.length) return {
                    value: void 0,
                    done: !0
                };
                const a = i[e];
                return n.index = e + 1, function(e, t) {
                    let r;
                    switch(t){
                        case "key":
                            r = e[0];
                            break;
                        case "value":
                            r = e[1];
                            break;
                        case "key+value":
                            r = e;
                    }
                    return {
                        value: r,
                        done: !1
                    };
                }(a, r);
            },
            [Symbol.toStringTag]: `${t} Iterator`
        };
        return Object.setPrototypeOf(s, k), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(e) {
        return w(e);
    },
    isValidHeaderValue: v,
    hasOwn: P,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, t, r) {
        const n = t, s = r;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void s(e);
        }
        try {
            n(await T(o));
        } catch (e) {
            s(e);
        }
    },
    bytesMatch: function(e, t) {
        if (void 0 === m) return !0;
        const r = b(t);
        if ("no metadata" === r) return !0;
        if (0 === r.length) return !0;
        const n = function(e) {
            let t = e[0].algo;
            if ("5" === t[3]) return t;
            for(let r = 1; r < e.length; ++r){
                const n = e[r];
                if ("5" === n.algo[3]) {
                    t = "sha512";
                    break;
                }
                "3" !== t[3] && "3" === n.algo[3] && (t = "sha384");
            }
            return t;
        }(r), s = function(e, t) {
            if (1 === e.length) return e;
            let r = 0;
            for(let n = 0; n < e.length; ++n)e[n].algo === t && (e[r++] = e[n]);
            return e.length = r, e;
        }(r, n);
        for (const t of s){
            const r = t.algo, n = t.hash;
            let s = m.createHash(r).update(e).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), E(s, n)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(e) {
        return x || (x = require("./module-63774.js").ReadableStream), e instanceof x || "ReadableStream" === e[Symbol.toStringTag] && "function" == typeof e.tee;
    },
    readableStreamClose: function(e) {
        try {
            e.close();
        } catch (e) {
            if (!e.message.includes("Controller is already closed")) throw e;
        }
    },
    isomorphicEncode: function(e) {
        for(let t = 0; t < e.length; t++)d(e.charCodeAt(t) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, t)=>e + String.fromCharCode(t), "");
    },
    urlIsLocal: function(e) {
        d("protocol" in e);
        const t = e.protocol;
        return "about:" === t || "blob:" === t || "data:" === t;
    },
    urlHasHttpsScheme: R,
    urlIsHttpHttpsScheme: B,
    readAllBytes: T,
    normalizeMethodRecord: C,
    parseMetadata: b
};
