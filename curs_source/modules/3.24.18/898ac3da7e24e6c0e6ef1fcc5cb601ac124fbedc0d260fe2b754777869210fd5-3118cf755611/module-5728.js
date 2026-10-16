"use strict";
const { redirectStatusSet: t, referrerPolicySet: s, badPortsSet: o } = require("./module-6687.js"), { getGlobalOrigin: r } = require("./module-9523.js"), { performance: i } = require("./module-2987.js"), { isBlobLike: A, toUSVString: l, ReadableStreamFrom: c } = require("./module-9361.js"), m = require("./module-2613.js"), { isUint8Array: d } = require("./module-8253.js");
let g, u = [];
try {
    g = require("./module-6982.js");
    const e = [
        "sha256",
        "sha384",
        "sha512"
    ];
    u = g.getHashes().filter((n)=>e.includes(n));
} catch  {}
function E(e) {
    const n = e.urlList, a = n.length;
    return 0 === a ? null : n[a - 1].toString();
}
function p(e) {
    return e.urlList[e.urlList.length - 1];
}
function T(e) {
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
    for(let n = 0; n < e.length; ++n)if (!T(e.charCodeAt(n))) return !1;
    return !0;
}
function I(e) {
    return !(e.startsWith("\t") || e.startsWith(" ") || e.endsWith("\t") || e.endsWith(" ")) && !(e.includes("\0") || e.includes("\r") || e.includes("\n"));
}
function h(e, n) {
    return m(e instanceof URL), "file:" === e.protocol || "about:" === e.protocol || "blank:" === e.protocol ? "no-referrer" : (e.username = "", e.password = "", e.hash = "", n && (e.pathname = "", e.search = ""), e);
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
const C = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function f(e) {
    const n = [];
    let a = !0;
    for (const t of e.split(" ")){
        a = !1;
        const e = C.exec(t);
        if (null === e || void 0 === e.groups || void 0 === e.groups.algo) continue;
        const s = e.groups.algo.toLowerCase();
        u.includes(s) && n.push(e.groups);
    }
    return !0 === a ? "no metadata" : n;
}
function B(e, n) {
    if (e.length !== n.length) return !1;
    for(let a = 0; a < e.length; ++a)if (e[a] !== n[a]) {
        if ("+" === e[a] && "-" === n[a] || "/" === e[a] && "_" === n[a]) continue;
        return !1;
    }
    return !0;
}
function Q(e, n) {
    return e.origin === n.origin && "null" === e.origin || e.protocol === n.protocol && e.hostname === n.hostname && e.port === n.port;
}
const y = {
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
Object.setPrototypeOf(y, null);
const R = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let N = globalThis.ReadableStream;
async function v(e) {
    const n = [];
    let a = 0;
    for(;;){
        const { done: t, value: s } = await e.read();
        if (t) return Buffer.concat(n, a);
        if (!d(s)) throw new TypeError("Received non-Uint8Array chunk");
        n.push(s), a += s.length;
    }
}
function S(e) {
    return "string" == typeof e ? e.startsWith("https:") : "https:" === e.protocol;
}
function D(e) {
    m("protocol" in e);
    const n = e.protocol;
    return "http:" === n || "https:" === n;
}
const w = Object.hasOwn || ((e, n)=>Object.prototype.hasOwnProperty.call(e, n));
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
            promise: new Promise((a, t)=>{
                e = a, n = t;
            }),
            resolve: e,
            reject: n
        };
    },
    ReadableStreamFrom: c,
    toUSVString: l,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: function(e) {},
    coarsenedSharedCurrentTime: function(e) {
        return i.now();
    },
    determineRequestsReferrer: function(e) {
        const n = e.referrerPolicy;
        m(n);
        let a = null;
        if ("client" === e.referrer) {
            const e = r();
            if (!e || "null" === e.origin) return "no-referrer";
            a = new URL(e);
        } else e.referrer instanceof URL && (a = e.referrer);
        let t = h(a);
        const s = h(a, !0);
        t.toString().length > 4096 && (t = s);
        const o = Q(e, t), i = _(t) && !_(e.url);
        switch(n){
            case "origin":
                return null != s ? s : h(a, !0);
            case "unsafe-url":
                return t;
            case "same-origin":
                return o ? s : "no-referrer";
            case "origin-when-cross-origin":
                return o ? t : s;
            case "strict-origin-when-cross-origin":
                {
                    const n = p(e);
                    return Q(t, n) ? t : _(t) && !_(n) ? "no-referrer" : s;
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
                    e.origin && S(e.origin) && !S(p(e)) && (n = null);
                    break;
                case "same-origin":
                    Q(e, p(e)) || (n = null);
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
        const { headersList: a } = n, t = (a.get("referrer-policy") ?? "").split(",");
        let o = "";
        if (t.length > 0) for(let e = t.length; 0 !== e; e--){
            const n = t[e - 1].trim();
            if (s.has(n)) {
                o = n;
                break;
            }
        }
        "" !== o && (e.referrerPolicy = o);
    },
    isValidHTTPToken: k,
    requestBadPort: function(e) {
        const n = p(e);
        return D(n) && o.has(n.port) ? "blocked" : "allowed";
    },
    requestCurrentURL: p,
    responseURL: E,
    responseLocationURL: function(e, n) {
        if (!t.has(e.status)) return null;
        let a = e.headersList.get("location");
        return null !== a && I(a) && (a = new URL(a, E(e))), a && !a.hash && (a.hash = n), a;
    },
    isBlobLike: A,
    isURLPotentiallyTrustworthy: _,
    isValidReasonPhrase: function(e) {
        for(let n = 0; n < e.length; ++n){
            const a = e.charCodeAt(n);
            if (!(9 === a || a >= 32 && a <= 126 || a >= 128 && a <= 255)) return !1;
        }
        return !0;
    },
    sameOrigin: Q,
    normalizeMethod: function(e) {
        return y[e.toLowerCase()] ?? e;
    },
    serializeJavascriptValueToJSONString: function(e) {
        const n = JSON.stringify(e);
        if (void 0 === n) throw new TypeError("Value is not JSON serializable");
        return m("string" == typeof n), n;
    },
    makeIterator: function(e, n, a) {
        const t = {
            index: 0,
            kind: a,
            target: e
        }, s = {
            next () {
                if (Object.getPrototypeOf(this) !== s) throw new TypeError(`'next' called on an object that does not implement interface ${n} Iterator.`);
                const { index: e, kind: a, target: o } = t, r = o();
                if (e >= r.length) return {
                    value: void 0,
                    done: !0
                };
                const i = r[e];
                return t.index = e + 1, function(e, n) {
                    let a;
                    switch(n){
                        case "key":
                            a = e[0];
                            break;
                        case "value":
                            a = e[1];
                            break;
                        case "key+value":
                            a = e;
                    }
                    return {
                        value: a,
                        done: !1
                    };
                }(i, a);
            },
            [Symbol.toStringTag]: `${n} Iterator`
        };
        return Object.setPrototypeOf(s, R), Object.setPrototypeOf({}, s);
    },
    isValidHeaderName: function(e) {
        return k(e);
    },
    isValidHeaderValue: I,
    hasOwn: w,
    isErrorLike: function(e) {
        return e instanceof Error || "Error" === e?.constructor?.name || "DOMException" === e?.constructor?.name;
    },
    fullyReadBody: async function(e, n, a) {
        const t = n, s = a;
        let o;
        try {
            o = e.stream.getReader();
        } catch (e) {
            return void s(e);
        }
        try {
            t(await v(o));
        } catch (e) {
            s(e);
        }
    },
    bytesMatch: function(e, n) {
        if (void 0 === g) return !0;
        const a = f(n);
        if ("no metadata" === a) return !0;
        if (0 === a.length) return !0;
        const t = function(e) {
            let n = e[0].algo;
            if ("5" === n[3]) return n;
            for(let a = 1; a < e.length; ++a){
                const t = e[a];
                if ("5" === t.algo[3]) {
                    n = "sha512";
                    break;
                }
                "3" !== n[3] && "3" === t.algo[3] && (n = "sha384");
            }
            return n;
        }(a), s = function(e, n) {
            if (1 === e.length) return e;
            let a = 0;
            for(let t = 0; t < e.length; ++t)e[t].algo === n && (e[a++] = e[t]);
            return e.length = a, e;
        }(a, t);
        for (const n of s){
            const a = n.algo, t = n.hash;
            let s = g.createHash(a).update(e).digest("base64");
            if ("=" === s[s.length - 1] && (s = "=" === s[s.length - 2] ? s.slice(0, -2) : s.slice(0, -1)), B(s, t)) return !0;
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
        for(let n = 0; n < e.length; n++)m(e.charCodeAt(n) <= 255);
        return e;
    },
    isomorphicDecode: function(e) {
        return e.length < 65535 ? String.fromCharCode(...e) : e.reduce((e, n)=>e + String.fromCharCode(n), "");
    },
    urlIsLocal: function(e) {
        m("protocol" in e);
        const n = e.protocol;
        return "about:" === n || "blob:" === n || "data:" === n;
    },
    urlHasHttpsScheme: S,
    urlIsHttpHttpsScheme: D,
    readAllBytes: v,
    normalizeMethodRecord: y,
    parseMetadata: f
};
