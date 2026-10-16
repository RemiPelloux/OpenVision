"use strict";
const n = require("./module-2613.js"), { kDestroyed: r, kBodyUsed: o } = require("./module-8832.js"), { IncomingMessage: s } = require("./module-8611.js"), i = require("./module-2203.js"), a = require("./module-9278.js"), { InvalidArgumentError: c } = require("./module-7902.js"), { Blob: l } = require("./module-181.js"), u = require("./module-9023.js"), { stringify: g } = require("./module-3480.js"), { headerNameLowerCasedRecord: E } = require("./module-6560.js"), [h, d] = process.versions.node.split(".").map((e)=>Number(e));
function I(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function B(e) {
    return l && e instanceof l || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function Q(e) {
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
        const t = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let A = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${t}`, n = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        A.endsWith("/") && (A = A.substring(0, A.length - 1)), n && !n.startsWith("/") && (n = `/${n}`), e = new URL(A + n);
    }
    return e;
}
function f(e) {
    return !e || !(!e.destroyed && !e[r]);
}
function C(e) {
    const t = e && e._readableState;
    return f(e) && t && !t.endEmitted;
}
const p = /timeout=(\d+)/;
function m(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let y;
const w = !!String.prototype.toWellFormed;
const k = Object.create(null);
k.enumerable = !0, module.exports = {
    kEnumerableProperty: k,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(i.isDisturbed ? i.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || C(e)));
    },
    isErrored: function(e) {
        return !(!e || !(i.isErrored ? i.isErrored(e) : /state: 'errored'/.test(u.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(i.isReadable ? i.isReadable(e) : /state: 'readable'/.test(u.inspect(e))));
    },
    toUSVString: function(e) {
        return w ? `${e}`.toWellFormed() : u.toUSVString ? u.toUSVString(e) : `${e}`;
    },
    isReadableAborted: C,
    isBlobLike: B,
    parseOrigin: function(e) {
        if ("/" !== (e = Q(e)).pathname || e.search || e.hash) throw new c("invalid url");
        return e;
    },
    parseURL: Q,
    getServerName: function(e) {
        if (!e) return null;
        n.strictEqual(typeof e, "string");
        const t = function(e) {
            if ("[" === e[0]) {
                const t = e.indexOf("]");
                return n(-1 !== t), e.substring(1, t);
            }
            const t = e.indexOf(":");
            return -1 === t ? e : e.substring(0, t);
        }(e);
        return a.isIP(t) ? "" : t;
    },
    isStream: I,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: f,
    headerNameToString: function(e) {
        return E[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const t = [];
        let A = !1, n = -1;
        for(let r = 0; r < e.length; r += 2){
            const o = e[r + 0].toString(), s = e[r + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? t.push(o, s) : n = t.push(o, s) - 1 : (t.push(o, s), A = !0);
        }
        return A && -1 !== n && (t[n] = Buffer.from(t[n]).toString("latin1")), t;
    },
    parseHeaders: function(e, t = {}) {
        if (!Array.isArray(e)) return e;
        for(let A = 0; A < e.length; A += 2){
            const n = e[A].toString().toLowerCase();
            let r = t[n];
            r ? (Array.isArray(r) || (r = [
                r
            ], t[n] = r), r.push(e[A + 1].toString("utf8"))) : Array.isArray(e[A + 1]) ? t[n] = e[A + 1].map((e)=>e.toString("utf8")) : t[n] = e[A + 1].toString("utf8");
        }
        return "content-length" in t && "content-disposition" in t && (t["content-disposition"] = Buffer.from(t["content-disposition"]).toString("latin1")), t;
    },
    parseKeepAliveTimeout: function(e) {
        const t = e.toString().match(p);
        return t ? 1e3 * parseInt(t[1], 10) : null;
    },
    destroy: function(e, t) {
        null != e && I(e) && !f(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === s && (e.socket = null), e.destroy(t)) : t && process.nextTick((e, t)=>{
            e.emit("error", t);
        }, e, t), !0 !== e.destroyed && (e[r] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (I(e)) {
            const t = e._readableState;
            return t && !1 === t.objectMode && !0 === t.ended && Number.isFinite(t.length) ? t.length : null;
        }
        return B(e) ? null != e.size ? e.size : null : m(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (y || (y = require("./module-3774.js").ReadableStream), y.from) return y.from(async function*(e) {
            for await (const t of e)yield Buffer.isBuffer(t) ? t : Buffer.from(t);
        }(e));
        let t;
        return new y({
            async start () {
                t = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: A, value: n } = await t.next();
                if (A) queueMicrotask(()=>{
                    e.close();
                });
                else {
                    const t = Buffer.isBuffer(n) ? n : Buffer.from(n);
                    e.enqueue(new Uint8Array(t));
                }
                return e.desiredSize > 0;
            },
            async cancel (e) {
                await t.return();
            }
        }, 0);
    },
    isBuffer: m,
    validateHandler: function(e, t, A) {
        if (!e || "object" != typeof e) throw new c("handler must be an object");
        if ("function" != typeof e.onConnect) throw new c("invalid onConnect method");
        if ("function" != typeof e.onError) throw new c("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new c("invalid onBodySent method");
        if (A || "CONNECT" === t) {
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
    buildURL: function(e, t) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const A = g(t);
        return A && (e += "?" + A), e;
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
    addAbortListener: function(e, t) {
        return "addEventListener" in e ? (e.addEventListener("abort", t, {
            once: !0
        }), ()=>e.removeEventListener("abort", t)) : (e.addListener("abort", t), ()=>e.removeListener("abort", t));
    },
    parseRangeHeader: function(e) {
        if (null == e || "" === e) return {
            start: 0,
            end: null,
            size: null
        };
        const t = e ? e.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return t ? {
            start: parseInt(t[1]),
            end: t[2] ? parseInt(t[2]) : null,
            size: t[3] ? parseInt(t[3]) : null
        } : null;
    },
    nodeMajor: h,
    nodeMinor: d,
    nodeHasAutoSelectFamily: h > 18 || 18 === h && d >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
