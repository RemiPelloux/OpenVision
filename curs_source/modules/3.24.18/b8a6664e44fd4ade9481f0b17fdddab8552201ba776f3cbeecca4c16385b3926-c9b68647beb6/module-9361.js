"use strict";
const r = require(42613), { kDestroyed: s, kBodyUsed: o } = require("./module-58832.js"), { IncomingMessage: n } = require(58611), i = require(2203), E = require(69278), { InvalidArgumentError: Q } = require("./module-95521.js"), { Blob: g } = require(20181), C = require(39023), { stringify: B } = require(83480), { headerNameLowerCasedRecord: a } = require("./module-36560.js"), [I, c] = process.versions.node.split(".").map((A)=>Number(A));
function h(A) {
    return A && "object" == typeof A && "function" == typeof A.pipe && "function" == typeof A.on;
}
function l(A) {
    return g && A instanceof g || A && "object" == typeof A && ("function" == typeof A.stream || "function" == typeof A.arrayBuffer) && /^(Blob|File)$/.test(A[Symbol.toStringTag]);
}
function u(A) {
    if ("string" == typeof A) {
        if (A = new URL(A), !/^https?:/.test(A.origin || A.protocol)) throw new Q("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return A;
    }
    if (!A || "object" != typeof A) throw new Q("Invalid URL: The URL argument must be a non-null object.");
    if (!/^https?:/.test(A.origin || A.protocol)) throw new Q("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    if (!(A instanceof URL)) {
        if (null != A.port && "" !== A.port && !Number.isFinite(parseInt(A.port))) throw new Q("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != A.path && "string" != typeof A.path) throw new Q("Invalid URL path: the path must be a string or null/undefined.");
        if (null != A.pathname && "string" != typeof A.pathname) throw new Q("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != A.hostname && "string" != typeof A.hostname) throw new Q("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != A.origin && "string" != typeof A.origin) throw new Q("Invalid URL origin: the origin must be a string or null/undefined.");
        const e = null != A.port ? A.port : "https:" === A.protocol ? 443 : 80;
        let t = null != A.origin ? A.origin : `${A.protocol}//${A.hostname}:${e}`, r = null != A.path ? A.path : `${A.pathname || ""}${A.search || ""}`;
        t.endsWith("/") && (t = t.substring(0, t.length - 1)), r && !r.startsWith("/") && (r = `/${r}`), A = new URL(t + r);
    }
    return A;
}
function d(A) {
    return !A || !(!A.destroyed && !A[s]);
}
function f(A) {
    const e = A && A._readableState;
    return d(A) && e && !e.endEmitted;
}
const y = /timeout=(\d+)/;
function D(A) {
    return A instanceof Uint8Array || Buffer.isBuffer(A);
}
let R;
const w = !!String.prototype.toWellFormed;
const p = Object.create(null);
p.enumerable = !0, module.exports = {
    kEnumerableProperty: p,
    nop: function() {},
    isDisturbed: function(A) {
        return !(!A || !(i.isDisturbed ? i.isDisturbed(A) || A[o] : A[o] || A.readableDidRead || A._readableState && A._readableState.dataEmitted || f(A)));
    },
    isErrored: function(A) {
        return !(!A || !(i.isErrored ? i.isErrored(A) : /state: 'errored'/.test(C.inspect(A))));
    },
    isReadable: function(A) {
        return !(!A || !(i.isReadable ? i.isReadable(A) : /state: 'readable'/.test(C.inspect(A))));
    },
    toUSVString: function(A) {
        return w ? `${A}`.toWellFormed() : C.toUSVString ? C.toUSVString(A) : `${A}`;
    },
    isReadableAborted: f,
    isBlobLike: l,
    parseOrigin: function(A) {
        if ("/" !== (A = u(A)).pathname || A.search || A.hash) throw new Q("invalid url");
        return A;
    },
    parseURL: u,
    getServerName: function(A) {
        if (!A) return null;
        r.strictEqual(typeof A, "string");
        const e = function(A) {
            if ("[" === A[0]) {
                const e = A.indexOf("]");
                return r(-1 !== e), A.substring(1, e);
            }
            const e = A.indexOf(":");
            return -1 === e ? A : A.substring(0, e);
        }(A);
        return E.isIP(e) ? "" : e;
    },
    isStream: h,
    isIterable: function(A) {
        return !(null == A || "function" != typeof A[Symbol.iterator] && "function" != typeof A[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(A) {
        return !(null == A || "function" != typeof A[Symbol.asyncIterator]);
    },
    isDestroyed: d,
    headerNameToString: function(A) {
        return a[A] || A.toLowerCase();
    },
    parseRawHeaders: function(A) {
        const e = [];
        let t = !1, r = -1;
        for(let s = 0; s < A.length; s += 2){
            const o = A[s + 0].toString(), n = A[s + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? e.push(o, n) : r = e.push(o, n) - 1 : (e.push(o, n), t = !0);
        }
        return t && -1 !== r && (e[r] = Buffer.from(e[r]).toString("latin1")), e;
    },
    parseHeaders: function(A, e = {}) {
        if (!Array.isArray(A)) return A;
        for(let t = 0; t < A.length; t += 2){
            const r = A[t].toString().toLowerCase();
            let s = e[r];
            s ? (Array.isArray(s) || (s = [
                s
            ], e[r] = s), s.push(A[t + 1].toString("utf8"))) : Array.isArray(A[t + 1]) ? e[r] = A[t + 1].map((A)=>A.toString("utf8")) : e[r] = A[t + 1].toString("utf8");
        }
        return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
    },
    parseKeepAliveTimeout: function(A) {
        const e = A.toString().match(y);
        return e ? 1e3 * parseInt(e[1], 10) : null;
    },
    destroy: function(A, e) {
        null != A && h(A) && !d(A) && ("function" == typeof A.destroy ? (Object.getPrototypeOf(A).constructor === n && (A.socket = null), A.destroy(e)) : e && process.nextTick((A, e)=>{
            A.emit("error", e);
        }, A, e), !0 !== A.destroyed && (A[s] = !0));
    },
    bodyLength: function(A) {
        if (null == A) return 0;
        if (h(A)) {
            const e = A._readableState;
            return e && !1 === e.objectMode && !0 === e.ended && Number.isFinite(e.length) ? e.length : null;
        }
        return l(A) ? null != A.size ? A.size : null : D(A) ? A.byteLength : null;
    },
    deepClone: function(A) {
        return JSON.parse(JSON.stringify(A));
    },
    ReadableStreamFrom: function(A) {
        if (R || (R = require(63774).ReadableStream), R.from) return R.from(async function*(A) {
            for await (const e of A)yield Buffer.isBuffer(e) ? e : Buffer.from(e);
        }(A));
        let e;
        return new R({
            async start () {
                e = A[Symbol.asyncIterator]();
            },
            async pull (A) {
                const { done: t, value: r } = await e.next();
                if (t) queueMicrotask(()=>{
                    A.close();
                });
                else {
                    const e = Buffer.isBuffer(r) ? r : Buffer.from(r);
                    A.enqueue(new Uint8Array(e));
                }
                return A.desiredSize > 0;
            },
            async cancel (A) {
                await e.return();
            }
        }, 0);
    },
    isBuffer: D,
    validateHandler: function(A, e, t) {
        if (!A || "object" != typeof A) throw new Q("handler must be an object");
        if ("function" != typeof A.onConnect) throw new Q("invalid onConnect method");
        if ("function" != typeof A.onError) throw new Q("invalid onError method");
        if ("function" != typeof A.onBodySent && void 0 !== A.onBodySent) throw new Q("invalid onBodySent method");
        if (t || "CONNECT" === e) {
            if ("function" != typeof A.onUpgrade) throw new Q("invalid onUpgrade method");
        } else {
            if ("function" != typeof A.onHeaders) throw new Q("invalid onHeaders method");
            if ("function" != typeof A.onData) throw new Q("invalid onData method");
            if ("function" != typeof A.onComplete) throw new Q("invalid onComplete method");
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
        const t = B(e);
        return t && (A += "?" + t), A;
    },
    throwIfAborted: function(A) {
        if (A) {
            if ("function" == typeof A.throwIfAborted) A.throwIfAborted();
            else if (A.aborted) {
                const A = new Error("The operation was aborted");
                throw A.name = "AbortError", A;
            }
        }
    },
    addAbortListener: function(A, e) {
        return "addEventListener" in A ? (A.addEventListener("abort", e, {
            once: !0
        }), ()=>A.removeEventListener("abort", e)) : (A.addListener("abort", e), ()=>A.removeListener("abort", e));
    },
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
    nodeMajor: I,
    nodeMinor: c,
    nodeHasAutoSelectFamily: I > 18 || 18 === I && c >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
