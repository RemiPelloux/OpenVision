"use strict";
const n = require("./module-2613.js"), { kDestroyed: r, kBodyUsed: o } = require("./module-8832.js"), { IncomingMessage: s } = require("./module-8611.js"), a = require("./module-2203.js"), i = require("./module-9278.js"), { InvalidArgumentError: c } = require("./module-7902.js"), { Blob: l } = require("./module-181.js"), g = require("./module-9023.js"), { stringify: E } = require("./module-3480.js"), { headerNameLowerCasedRecord: u } = require("./module-6560.js"), [d, I] = process.versions.node.split(".").map((e)=>Number(e));
function h(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function Q(e) {
    return l && e instanceof l || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function m(e) {
    if ("string" == typeof e) {
        if (e = new URL(e), !/^https?:/.test(e.origin || e.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e;
    }
    if (!e || "object" != typeof e) throw new c("Invalid URL: The URL argument must be a non-null object.");
    if (!/^https?:/.test(e.origin || e.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    if (!(e instanceof URL)) {
        if (null != e.port && "" !== e.port && !Number.isFinite(parseInt(e.port))) throw new c("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e.path && "string" != typeof e.path) throw new c("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e.pathname && "string" != typeof e.pathname) throw new c("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e.hostname && "string" != typeof e.hostname) throw new c("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e.origin && "string" != typeof e.origin) throw new c("Invalid URL origin: the origin must be a string or null/undefined.");
        const A = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let t = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${A}`, n = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        t.endsWith("/") && (t = t.substring(0, t.length - 1)), n && !n.startsWith("/") && (n = `/${n}`), e = new URL(t + n);
    }
    return e;
}
function C(e) {
    return !e || !(!e.destroyed && !e[r]);
}
function B(e) {
    const A = e && e._readableState;
    return C(e) && A && !A.endEmitted;
}
const p = /timeout=(\d+)/;
function f(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let y;
const T = !!String.prototype.toWellFormed;
const k = Object.create(null);
k.enumerable = !0, module.exports = {
    kEnumerableProperty: k,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(a.isDisturbed ? a.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || B(e)));
    },
    isErrored: function(e) {
        return !(!e || !(a.isErrored ? a.isErrored(e) : /state: 'errored'/.test(g.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(a.isReadable ? a.isReadable(e) : /state: 'readable'/.test(g.inspect(e))));
    },
    toUSVString: function(e) {
        return T ? `${e}`.toWellFormed() : g.toUSVString ? g.toUSVString(e) : `${e}`;
    },
    isReadableAborted: B,
    isBlobLike: Q,
    parseOrigin: function(e) {
        if ("/" !== (e = m(e)).pathname || e.search || e.hash) throw new c("invalid url");
        return e;
    },
    parseURL: m,
    getServerName: function(e) {
        if (!e) return null;
        n.strictEqual(typeof e, "string");
        const A = function(e) {
            if ("[" === e[0]) {
                const A = e.indexOf("]");
                return n(-1 !== A), e.substring(1, A);
            }
            const A = e.indexOf(":");
            return -1 === A ? e : e.substring(0, A);
        }(e);
        return i.isIP(A) ? "" : A;
    },
    isStream: h,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: C,
    headerNameToString: function(e) {
        return u[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const A = [];
        let t = !1, n = -1;
        for(let r = 0; r < e.length; r += 2){
            const o = e[r + 0].toString(), s = e[r + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? A.push(o, s) : n = A.push(o, s) - 1 : (A.push(o, s), t = !0);
        }
        return t && -1 !== n && (A[n] = Buffer.from(A[n]).toString("latin1")), A;
    },
    parseHeaders: function(e, A = {}) {
        if (!Array.isArray(e)) return e;
        for(let t = 0; t < e.length; t += 2){
            const n = e[t].toString().toLowerCase();
            let r = A[n];
            r ? (Array.isArray(r) || (r = [
                r
            ], A[n] = r), r.push(e[t + 1].toString("utf8"))) : Array.isArray(e[t + 1]) ? A[n] = e[t + 1].map((e)=>e.toString("utf8")) : A[n] = e[t + 1].toString("utf8");
        }
        return "content-length" in A && "content-disposition" in A && (A["content-disposition"] = Buffer.from(A["content-disposition"]).toString("latin1")), A;
    },
    parseKeepAliveTimeout: function(e) {
        const A = e.toString().match(p);
        return A ? 1e3 * parseInt(A[1], 10) : null;
    },
    destroy: function(e, A) {
        null != e && h(e) && !C(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === s && (e.socket = null), e.destroy(A)) : A && process.nextTick((e, A)=>{
            e.emit("error", A);
        }, e, A), !0 !== e.destroyed && (e[r] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (h(e)) {
            const A = e._readableState;
            return A && !1 === A.objectMode && !0 === A.ended && Number.isFinite(A.length) ? A.length : null;
        }
        return Q(e) ? null != e.size ? e.size : null : f(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (y || (y = require("./module-3774.js").ReadableStream), y.from) return y.from(async function*(e) {
            for await (const A of e)yield Buffer.isBuffer(A) ? A : Buffer.from(A);
        }(e));
        let A;
        return new y({
            async start () {
                A = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: t, value: n } = await A.next();
                if (t) queueMicrotask(()=>{
                    e.close();
                });
                else {
                    const A = Buffer.isBuffer(n) ? n : Buffer.from(n);
                    e.enqueue(new Uint8Array(A));
                }
                return e.desiredSize > 0;
            },
            async cancel (e) {
                await A.return();
            }
        }, 0);
    },
    isBuffer: f,
    validateHandler: function(e, A, t) {
        if (!e || "object" != typeof e) throw new c("handler must be an object");
        if ("function" != typeof e.onConnect) throw new c("invalid onConnect method");
        if ("function" != typeof e.onError) throw new c("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new c("invalid onBodySent method");
        if (t || "CONNECT" === A) {
            if ("function" != typeof e.onUpgrade) throw new c("invalid onUpgrade method");
        } else {
            if ("function" != typeof e.onHeaders) throw new c("invalid onHeaders method");
            if ("function" != typeof e.onData) throw new c("invalid onData method");
            if ("function" != typeof e.onComplete) throw new c("invalid onComplete method");
        }
    },
    getSocketInfo: function(e) {
        return {
            localAddress: e.localAddress,
            localPort: e.localPort,
            remoteAddress: e.remoteAddress,
            remotePort: e.remotePort,
            remoteFamily: e.remoteFamily,
            timeout: e.timeout,
            bytesWritten: e.bytesWritten,
            bytesRead: e.bytesRead
        };
    },
    isFormDataLike: function(e) {
        return e && "object" == typeof e && "function" == typeof e.append && "function" == typeof e.delete && "function" == typeof e.get && "function" == typeof e.getAll && "function" == typeof e.has && "function" == typeof e.set && "FormData" === e[Symbol.toStringTag];
    },
    buildURL: function(e, A) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const t = E(A);
        return t && (e += "?" + t), e;
    },
    throwIfAborted: function(e) {
        if (e) {
            if ("function" == typeof e.throwIfAborted) e.throwIfAborted();
            else if (e.aborted) {
                const e = new Error("The operation was aborted");
                throw e.name = "AbortError", e;
            }
        }
    },
    addAbortListener: function(e, A) {
        return "addEventListener" in e ? (e.addEventListener("abort", A, {
            once: !0
        }), ()=>e.removeEventListener("abort", A)) : (e.addListener("abort", A), ()=>e.removeListener("abort", A));
    },
    parseRangeHeader: function(e) {
        if (null == e || "" === e) return {
            start: 0,
            end: null,
            size: null
        };
        const A = e ? e.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return A ? {
            start: parseInt(A[1]),
            end: A[2] ? parseInt(A[2]) : null,
            size: A[3] ? parseInt(A[3]) : null
        } : null;
    },
    nodeMajor: d,
    nodeMinor: I,
    nodeHasAutoSelectFamily: d > 18 || 18 === d && I >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
