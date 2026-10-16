"use strict";
const { redirectStatusSet: n, referrerPolicySet: s, badPortsSet: i } = require("./module-2955.js"), { getGlobalOrigin: o } = require("./module-3967.js"), { performance: a } = require("./module-2987.js"), { isBlobLike: u, toUSVString: c, ReadableStreamFrom: l } = require("./module-3589.js"), m = require("./module-2613.js"), { isUint8Array: d } = require("./module-8253.js");
let f, p = [];
try {
    f = require("./module-6982.js");
    const t = [
        "sha256",
        "sha384",
        "sha512"
    ];
    p = f.getHashes().filter((e)=>t.includes(e));
} catch  {}
function h(t) {
    const e = t.urlList, r = e.length;
    return 0 === r ? null : e[r - 1].toString();
}
function g(t) {
    return t.urlList[t.urlList.length - 1];
}
function A(t) {
    switch(t){
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
            return t >= 33 && t <= 126;
    }
}
function _(t) {
    if (0 === t.length) return !1;
    for(let e = 0; e < t.length; ++e)if (!A(t.charCodeAt(e))) return !1;
    return !0;
}
function y(t) {
    return !(t.startsWith("\t") || t.startsWith(" ") || t.endsWith("\t") || t.endsWith(" ")) && !(t.includes("\0") || t.includes("\r") || t.includes("\n"));
}
function w(t, e) {
    return m(t instanceof URL), "file:" === t.protocol || "about:" === t.protocol || "blank:" === t.protocol ? "no-referrer" : (t.username = "", t.password = "", t.hash = "", e && (t.pathname = "", t.search = ""), t);
}
function S(t) {
    return t instanceof URL && ("about:blank" === t.href || "about:srcdoc" === t.href || "data:" === t.protocol || "file:" === t.protocol || function(t) {
        if (null == t || "null" === t) return !1;
        const e = new URL(t);
        if ("https:" === e.protocol || "wss:" === e.protocol) return !0;
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(e.hostname) || "localhost" === e.hostname || e.hostname.includes("localhost.") || e.hostname.endsWith(".localhost")) return !0;
        return !1;
    }(t.origin));
}
const J = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function B(t) {
    const e = [];
    let r = !0;
    for (const n of t.split(" ")){
        r = !1;
        const t = J.exec(n);
        if (null === t || void 0 === t.groups || void 0 === t.groups.algo) continue;
        const s = t.groups.algo.toLowerCase();
        p.includes(s) && e.push(t.groups);
    }
    return !0 === r ? "no metadata" : e;
}
function E(t, e) {
    if (t.length !== e.length) return !1;
    for(let r = 0; r < t.length; ++r)if (t[r] !== e[r]) {
        if ("+" === t[r] && "-" === e[r] || "/" === t[r] && "_" === e[r]) continue;
        return !1;
    }
    return !0;
}
function I(t, e) {
    return t.origin === e.origin && "null" === t.origin || t.protocol === e.protocol && t.hostname === e.hostname && t.port === e.port;
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
const b = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let k = globalThis.ReadableStream;
async function v(t) {
    const e = [];
    let r = 0;
    for(;;){
        const { done: n, value: s } = await t.read();
        if (n) return Buffer.concat(e, r);
        if (!d(s)) throw new TypeError("Received non-Uint8Array chunk");
        e.push(s), r += s.length;
    }
}
function q(t) {
    return "string" == typeof t ? t.startsWith("https:") : "https:" === t.protocol;
}
function R(t) {
    m("protocol" in t);
    const e = t.protocol;
    return "http:" === e || "https:" === e;
}
const P = Object.hasOwn || ((t, e)=>Object.prototype.hasOwnProperty.call(t, e));
module.exports = {
    isAborted: function(t) {
        return "aborted" === t.controller.state;
    },
    isCancelled: function(t) {
        return "aborted" === t.controller.state || "terminated" === t.controller.state;
    },
    createDeferredPromise: function() {
        let t, e;
        return {
            promise: new Promise((r, n)=>{
                t = r, e = n;
            }),
            resolve: t,
            reject: e
        };
    },
    ReadableStreamFrom: l,
    toUSVString: c,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(t) {},
    coarsenedSharedCurrentTime: function(t) {
        return a.now();
    },
    determineRequestsReferrer: function(t) {
        const e = t.referrerPolicy;
        m(e);
        let r = null;
        if ("client" === t.referrer) {
            const t = o();
            if (!t || "null" === t.origin) return "no-referrer";
            r = new URL(t);
        } else t.referrer instanceof URL && (r = t.referrer);
        let n = w(r);
        const s = w(r, !0);
        n.toString().length > 4096 && (n = s);
        const i = I(t, n), a = S(n) && !S(t.url);
        switch(e){
            case "origin":
                return null != s ? s : w(r, !0);
            case "unsafe-url":
                return n;
            case "same-origin":
                return i ? s : "no-referrer";
            case "origin-when-cross-origin":
                return i ? n : s;
            case "strict-origin-when-cross-origin":
                {
                    const e = g(t);
                    return I(n, e) ? n : S(n) && !S(e) ? "no-referrer" : s;
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
    clonePolicyContainer: function(t) {
        return {
            referrerPolicy: t.referrerPolicy
        };
    },
    appendFetchMetadata: function(t) {
        let e = null;
        e = t.mode, t.headersList.set("sec-fetch-mode", e);
    },
    appendRequestOriginHeader: function(t) {
        let e = t.origin;
        if ("cors" === t.responseTainting || "websocket" === t.mode) e && t.headersList.append("origin", e);
        else if ("GET" !== t.method && "HEAD" !== t.method) {
            switch(t.referrerPolicy){
                case "no-referrer":
                    e = null;
                    break;
                case "no-referrer-when-downgrade":
                case "strict-origin":
                case "strict-origin-when-cross-origin":
                    t.origin && q(t.origin) && !q(g(t)) && (e = null);
                    break;
                case "same-origin":
                    I(t, g(t)) || (e = null);
            }
            e && t.headersList.append("origin", e);
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
    createOpaqueTimingInfo: function(t) {
        return {
            startTime: t.startTime ?? 0,
            redirectStartTime: 0,
            redirectEndTime: 0,
            postRedirectStartTime: t.startTime ?? 0,
            finalServiceWorkerStartTime: 0,
            finalNetworkResponseStartTime: 0,
            finalNetworkRequestStartTime: 0,
            endTime: 0,
            encodedBodySize: 0,
            decodedBodySize: 0,
            finalConnectionTimingInfo: null
        };
    },
    setRequestReferrerPolicyOnRedirect: function(t, e) {
        const { headersList: r } = e, n = (r.get("referrer-policy") ?? "").split(",");
        let i = "";
        if (n.length > 0) for(let t = n.length; 0 !== t; t--){
            const e = n[t - 1].trim();
            if (s.has(e)) {
                i = e;
                break;
            }
        }
        "" !== i && (t.referrerPolicy = i);
    },
    isValidHTTPToken: _,
    requestBadPort: function(t) {
        const e = g(t);
        return R(e) && i.has(e.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: g,
    responseURL: h,
    responseLocationURL: function(t, e) {
        if (!n.has(t.status)) return null;
        let r = t.headersList.get("location");
        return null !== r && y(r) && (r = new URL(r, h(t))), r && !r.hash && (r.hash = e), r;
    },
    isBlobLike: u,
    isURLPotentiallyTrustworthy: S,
    isValidReasonPhrase: function(t) {
        for(let e = 0; e < t.length; ++e){
            const r = t.charCodeAt(e);
            if (!(9 === r || r >= 32 && r <= 126 || r >= 128 && r <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: I,
    normalizeMethod: function(t) {
        return C[t.toLowerCase()] ?? t;
    },
    serializeJavascriptValueToJSONString: function(t) {
        const e = JSON.stringify(t);
        if (void 0 === e) throw new TypeError("Value is not JSON serializable");
        return m("string" == typeof e), e;
    },
    makeIterator: function(t, e, r) {
        const n = {
            index: 0,
            kind: r,
            target: t
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${e} Iterator.`);
                const { index: t, kind: r, target: i } = n, o = i();
                if (t >= o.length) return {
                    value: void 0,
                    done: !0
                };
                const a = o[t];
                return n.index = t + 1, function(t, e) {
                    let r;
                    switch(e){
                        case "key":
                            r = t[0];
                            break;
                        case "value":
                            r = t[1];
                            break;
                        case "key+value":
                            r = t;
                    }
                    return {
                        value: r,
                        done: !1
                    };
                }(a, r);
            },
            [Symbol.toStringTag]: `${e} Iterator`
        };
        return Object.setPrototypeOf(s, b), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(t) {
        return _(t);
    },
    isValidHeaderValue: y,
    hasOwn: P,
    isErrorLike: function(t) {
        return t instanceof Error || "Error" === t?.constructor?.name || "DOMException" === t?.constructor?.name;
    },
    fullyReadBody: async function(t, e, r) {
        const n = e, s = r;
        let i;
        try {
            i = t.stream.getReader();
        } catch (t) {
            return void s(t);
        }
        try {
            n(await v(i));
        } catch (t) {
            s(t);
        }
    },
    bytesMatch: function(t, e) {
        if (void 0 === f) return !0;
        const r = B(e);
        if ("no metadata" === r) return !0;
        if (0 === r.length) return !0;
        const n = function(t) {
            let e = t[0].algo;
            if ("5" === e[3]) return e;
            for(let r = 1; r < t.length; ++r){
                const n = t[r];
                if ("5" === n.algo[3]) {
                    e = "sha512";
                    break;
                }
                "3" !== e[3] && "3" === n.algo[3] && (e = "sha384");
            }
            return e;
        }(r), s = function(t, e) {
            if (1 === t.length) return t;
            let r = 0;
            for(let n = 0; n < t.length; ++n)t[n].algo === e && (t[r++] = t[n]);
            return t.length = r, t;
        }(r, n);
        for (const e of s){
            const r = e.algo, n = e.hash;
            let s = f.createHash(r).update(t).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), E(s, n)) return !0;
        }
        return !1;
    },
    isReadableStreamLike: function(t) {
        return k || (k = require("./module-3774.js").ReadableStream), t instanceof k || "ReadableStream" === t[Symbol.toStringTag] && "function" == typeof t.tee;
    },
    readableStreamClose: function(t) {
        try {
            t.close();
        } catch (t) {
            if (!t.message.includes("Controller is already closed")) throw t;
        }
    },
    isomorphicEncode: function(t) {
        for(let e = 0; e < t.length; e++)m(t.charCodeAt(e) <= 255);
        return t;
    },
    isomorphicDecode: function(t) {
        return t.length < 65535 ? String.fromCharCode(...t) : t.reduce((t, e)=>t + String.fromCharCode(e), "");
    },
    urlIsLocal: function(t) {
        m("protocol" in t);
        const e = t.protocol;
        return "about:" === e || "blob:" === e || "data:" === e;
    },
    urlHasHttpsScheme: q,
    urlIsHttpHttpsScheme: R,
    readAllBytes: v,
    normalizeMethodRecord: C,
    parseMetadata: B
};
