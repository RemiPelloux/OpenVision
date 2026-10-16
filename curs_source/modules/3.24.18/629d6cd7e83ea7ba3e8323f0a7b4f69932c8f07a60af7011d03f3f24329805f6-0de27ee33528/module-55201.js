"use strict";
const r = require(56970), { kDestroyed: s, kBodyUsed: o, kListeners: n, kBody: i } = require("./module-76992.js"), { IncomingMessage: a } = require(37067), Q = require(57075), g = require(77030), { Blob: E } = require(4573), B = require(57975), { stringify: c } = require(41792), { EventEmitter: I } = require(78474), { InvalidArgumentError: C } = require("./module-38238.js"), { headerNameLowerCasedRecord: h } = require("./module-71648.js"), { tree: l } = require("./module-59865.js"), [u, d] = process.versions.node.split(".").map((A)=>Number(A));
class f {
    constructor(A){
        this[i] = A, this[o] = !1;
    }
    async *[Symbol.asyncIterator]() {
        r(!this[o], "disturbed"), this[o] = !0, yield* this[i];
    }
}
function w(A) {
    return A && "object" == typeof A && "function" == typeof A.pipe && "function" == typeof A.on;
}
function y(A) {
    if (null === A) return !1;
    if (A instanceof E) return !0;
    if ("object" != typeof A) return !1;
    {
        const e = A[Symbol.toStringTag];
        return ("Blob" === e || "File" === e) && ("stream" in A && "function" == typeof A.stream || "arrayBuffer" in A && "function" == typeof A.arrayBuffer);
    }
}
function D(A) {
    const e = parseInt(A, 10);
    return e === Number(A) && e >= 0 && e <= 65535;
}
function p(A) {
    return null != A && "h" === A[0] && "t" === A[1] && "t" === A[2] && "p" === A[3] && (":" === A[4] || "s" === A[4] && ":" === A[5]);
}
function k(A) {
    if ("string" == typeof A) {
        if (!p((A = new URL(A)).origin || A.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return A;
    }
    if (!A || "object" != typeof A) throw new C("Invalid URL: The URL argument must be a non-null object.");
    if (!(A instanceof URL)) {
        if (null != A.port && "" !== A.port && !1 === D(A.port)) throw new C("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != A.path && "string" != typeof A.path) throw new C("Invalid URL path: the path must be a string or null/undefined.");
        if (null != A.pathname && "string" != typeof A.pathname) throw new C("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != A.hostname && "string" != typeof A.hostname) throw new C("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != A.origin && "string" != typeof A.origin) throw new C("Invalid URL origin: the origin must be a string or null/undefined.");
        if (!p(A.origin || A.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        const e = null != A.port ? A.port : "https:" === A.protocol ? 443 : 80;
        let t = null != A.origin ? A.origin : `${A.protocol || ""}//${A.hostname || ""}:${e}`, r = null != A.path ? A.path : `${A.pathname || ""}${A.search || ""}`;
        return "/" === t[t.length - 1] && (t = t.slice(0, t.length - 1)), r && "/" !== r[0] && (r = `/${r}`), new URL(`${t}${r}`);
    }
    if (!p(A.origin || A.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    return A;
}
function R(A) {
    return !(null == A || "function" != typeof A[Symbol.iterator] && "function" != typeof A[Symbol.asyncIterator]);
}
function F(A) {
    if (null == A) return 0;
    if (w(A)) {
        const e = A._readableState;
        return e && !1 === e.objectMode && !0 === e.ended && Number.isFinite(e.length) ? e.length : null;
    }
    return y(A) ? null != A.size ? A.size : null : S(A) ? A.byteLength : null;
}
function m(A) {
    return A && !!(A.destroyed || A[s] || Q.isDestroyed?.(A));
}
const b = /timeout=(\d+)/;
function N(A) {
    return "string" == typeof A ? h[A] ?? A.toLowerCase() : l.lookup(A) ?? A.toString("latin1").toLowerCase();
}
function S(A) {
    return A instanceof Uint8Array || Buffer.isBuffer(A);
}
const M = "function" == typeof String.prototype.toWellFormed, U = "function" == typeof String.prototype.isWellFormed;
function L(A) {
    return M ? `${A}`.toWellFormed() : B.toUSVString(A);
}
function T(A) {
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
const Y = /[^\t\x20-\x7e\x80-\xff]/;
const G = Object.create(null);
G.enumerable = !0;
const J = {
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
}, v = {
    ...J,
    patch: "patch",
    PATCH: "PATCH"
};
Object.setPrototypeOf(J, null), Object.setPrototypeOf(v, null), module.exports = {
    kEnumerableProperty: G,
    nop: function() {},
    isDisturbed: function(A) {
        return !(!A || !Q.isDisturbed(A) && !A[o]);
    },
    isErrored: function(A) {
        return !(!A || !Q.isErrored(A));
    },
    isReadable: function(A) {
        return !(!A || !Q.isReadable(A));
    },
    toUSVString: L,
    isUSVString: function(A) {
        return U ? `${A}`.isWellFormed() : L(A) === `${A}`;
    },
    isBlobLike: y,
    parseOrigin: function(A) {
        if ("/" !== (A = k(A)).pathname || A.search || A.hash) throw new C("invalid url");
        return A;
    },
    parseURL: k,
    getServerName: function(A) {
        if (!A) return null;
        r("string" == typeof A);
        const e = function(A) {
            if ("[" === A[0]) {
                const e = A.indexOf("]");
                return r(-1 !== e), A.substring(1, e);
            }
            const e = A.indexOf(":");
            return -1 === e ? A : A.substring(0, e);
        }(A);
        return g.isIP(e) ? "" : e;
    },
    isStream: w,
    isIterable: R,
    isAsyncIterable: function(A) {
        return !(null == A || "function" != typeof A[Symbol.asyncIterator]);
    },
    isDestroyed: m,
    headerNameToString: N,
    bufferToLowerCasedHeaderName: function(A) {
        return l.lookup(A) ?? A.toString("latin1").toLowerCase();
    },
    addListener: function(A, e, t) {
        return (A[n] ??= []).push([
            e,
            t
        ]), A.on(e, t), A;
    },
    removeAllListeners: function(A) {
        for (const [e, t] of A[n] ?? [])A.removeListener(e, t);
        A[n] = null;
    },
    errorRequest: function(A, e, t) {
        try {
            e.onError(t), r(e.aborted);
        } catch (t) {
            A.emit("error", t);
        }
    },
    parseRawHeaders: function(A) {
        const e = A.length, t = new Array(e);
        let r, s, o = !1, n = -1, i = 0;
        for(let e = 0; e < A.length; e += 2)r = A[e], s = A[e + 1], "string" != typeof r && (r = r.toString()), "string" != typeof s && (s = s.toString("utf8")), i = r.length, 14 !== i || "-" !== r[7] || "content-length" !== r && "content-length" !== r.toLowerCase() ? 19 !== i || "-" !== r[7] || "content-disposition" !== r && "content-disposition" !== r.toLowerCase() || (n = e + 1) : o = !0, t[e] = r, t[e + 1] = s;
        return o && -1 !== n && (t[n] = Buffer.from(t[n]).toString("latin1")), t;
    },
    parseHeaders: function(A, e) {
        void 0 === e && (e = {});
        for(let t = 0; t < A.length; t += 2){
            const r = N(A[t]);
            let s = e[r];
            if (s) "string" == typeof s && (s = [
                s
            ], e[r] = s), s.push(A[t + 1].toString("utf8"));
            else {
                const s = A[t + 1];
                e[r] = "string" == typeof s ? s : Array.isArray(s) ? s.map((A)=>A.toString("utf8")) : s.toString("utf8");
            }
        }
        return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
    },
    parseKeepAliveTimeout: function(A) {
        const e = A.toString().match(b);
        return e ? 1e3 * parseInt(e[1], 10) : null;
    },
    destroy: function(A, e) {
        null != A && w(A) && !m(A) && ("function" == typeof A.destroy ? (Object.getPrototypeOf(A).constructor === a && (A.socket = null), A.destroy(e)) : e && queueMicrotask(()=>{
            A.emit("error", e);
        }), !0 !== A.destroyed && (A[s] = !0));
    },
    bodyLength: F,
    deepClone: function(A) {
        return JSON.parse(JSON.stringify(A));
    },
    ReadableStreamFrom: function(A) {
        let e;
        return new ReadableStream({
            async start () {
                e = A[Symbol.asyncIterator]();
            },
            async pull (A) {
                const { done: t, value: r } = await e.next();
                if (t) queueMicrotask(()=>{
                    A.close(), A.byobRequest?.respond(0);
                });
                else {
                    const e = Buffer.isBuffer(r) ? r : Buffer.from(r);
                    e.byteLength && A.enqueue(new Uint8Array(e));
                }
                return A.desiredSize > 0;
            },
            async cancel (A) {
                await e.return();
            },
            type: "bytes"
        });
    },
    isBuffer: S,
    validateHandler: function(A, e, t) {
        if (!A || "object" != typeof A) throw new C("handler must be an object");
        if ("function" != typeof A.onConnect) throw new C("invalid onConnect method");
        if ("function" != typeof A.onError) throw new C("invalid onError method");
        if ("function" != typeof A.onBodySent && void 0 !== A.onBodySent) throw new C("invalid onBodySent method");
        if (t || "CONNECT" === e) {
            if ("function" != typeof A.onUpgrade) throw new C("invalid onUpgrade method");
        } else {
            if ("function" != typeof A.onHeaders) throw new C("invalid onHeaders method");
            if ("function" != typeof A.onData) throw new C("invalid onData method");
            if ("function" != typeof A.onComplete) throw new C("invalid onComplete method");
        }
    },
    getSocketInfo: function(A) {
        return {
            localAddress: A.localAddress,
            localPort: A.localPort,
            remoteAddress: A.remoteAddress,
            remotePort: A.remotePort,
            remoteFamily: A.remoteFamily,
            timeout: A.timeout,
            bytesWritten: A.bytesWritten,
            bytesRead: A.bytesRead
        };
    },
    isFormDataLike: function(A) {
        return A && "object" == typeof A && "function" == typeof A.append && "function" == typeof A.delete && "function" == typeof A.get && "function" == typeof A.getAll && "function" == typeof A.has && "function" == typeof A.set && "FormData" === A[Symbol.toStringTag];
    },
    buildURL: function(A, e) {
        if (A.includes("?") || A.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const t = c(e);
        return t && (A += "?" + t), A;
    },
    addAbortListener: function(A, e) {
        return "addEventListener" in A ? (A.addEventListener("abort", e, {
            once: !0
        }), ()=>A.removeEventListener("abort", e)) : (A.addListener("abort", e), ()=>A.removeListener("abort", e));
    },
    isValidHTTPToken: function(A) {
        if (0 === A.length) return !1;
        for(let e = 0; e < A.length; ++e)if (!T(A.charCodeAt(e))) return !1;
        return !0;
    },
    isValidHeaderValue: function(A) {
        return !Y.test(A);
    },
    isTokenCharCode: T,
    parseRangeHeader: function(A) {
        if (null == A || "" === A) return {
            start: 0,
            end: null,
            size: null
        };
        const e = A ? A.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return e ? {
            start: parseInt(e[1]),
            end: e[2] ? parseInt(e[2]) : null,
            size: e[3] ? parseInt(e[3]) : null
        } : null;
    },
    normalizedMethodRecordsBase: J,
    normalizedMethodRecords: v,
    isValidPort: D,
    isHttpOrHttpsPrefixed: p,
    nodeMajor: u,
    nodeMinor: d,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ],
    wrapRequestBody: function(A) {
        return w(A) ? (0 === F(A) && A.on("data", function() {
            r(!1);
        }), "boolean" != typeof A.readableDidRead && (A[o] = !1, I.prototype.on.call(A, "data", function() {
            this[o] = !0;
        })), A) : A && "function" == typeof A.pipeTo || A && "string" != typeof A && !ArrayBuffer.isView(A) && R(A) ? new f(A) : A;
    }
};
