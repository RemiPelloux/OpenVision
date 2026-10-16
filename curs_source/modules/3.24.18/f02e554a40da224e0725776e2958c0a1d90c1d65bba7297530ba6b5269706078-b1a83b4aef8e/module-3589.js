"use strict";
const n = require("./module-2613.js"), { kDestroyed: s, kBodyUsed: i } = require("./module-5532.js"), { IncomingMessage: o } = require("./module-8611.js"), a = require("./module-2203.js"), u = require("./module-9278.js"), { InvalidArgumentError: c } = require("./module-8762.js"), { Blob: l } = require("./module-181.js"), m = require("./module-9023.js"), { stringify: d } = require("./module-3480.js"), { headerNameLowerCasedRecord: f } = require("./module-7676.js"), [p, h] = process.versions.node.split(".").map((t)=>Number(t));
function g(t) {
    return t && "object" == typeof t && "function" == typeof t.pipe && "function" == typeof t.on;
}
function A(t) {
    return l && t instanceof l || t && "object" == typeof t && ("function" == typeof t.stream || "function" == typeof t.arrayBuffer) && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
}
function _(t) {
    if ("string" == typeof t) {
        if (t = new URL(t), !/^https?:/.test(t.origin || t.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return t;
    }
    if (!t || "object" != typeof t) throw new c("Invalid URL: The URL argument must be a non-null object.");
    if (!/^https?:/.test(t.origin || t.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    if (!(t instanceof URL)) {
        if (null != t.port && "" !== t.port && !Number.isFinite(parseInt(t.port))) throw new c("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != t.path && "string" != typeof t.path) throw new c("Invalid URL path: the path must be a string or null/undefined.");
        if (null != t.pathname && "string" != typeof t.pathname) throw new c("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != t.hostname && "string" != typeof t.hostname) throw new c("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != t.origin && "string" != typeof t.origin) throw new c("Invalid URL origin: the origin must be a string or null/undefined.");
        const e = null != t.port ? t.port : "https:" === t.protocol ? 443 : 80;
        let r = null != t.origin ? t.origin : `${t.protocol}//${t.hostname}:${e}`, n = null != t.path ? t.path : `${t.pathname || ""}${t.search || ""}`;
        r.endsWith("/") && (r = r.substring(0, r.length - 1)), n && !n.startsWith("/") && (n = `/${n}`), t = new URL(r + n);
    }
    return t;
}
function y(t) {
    return !t || !(!t.destroyed && !t[s]);
}
function w(t) {
    const e = t && t._readableState;
    return y(t) && e && !e.endEmitted;
}
const S = /timeout=(\d+)/;
function J(t) {
    return t instanceof Uint8Array || Buffer.isBuffer(t);
}
let B;
const E = !!String.prototype.toWellFormed;
const I = Object.create(null);
I.enumerable = !0, module.exports = {
    kEnumerableProperty: I,
    nop: function() {},
    isDisturbed: function(t) {
        return !(!t || !(a.isDisturbed ? a.isDisturbed(t) || t[i] : t[i] || t.readableDidRead || t._readableState && t._readableState.dataEmitted || w(t)));
    },
    isErrored: function(t) {
        return !(!t || !(a.isErrored ? a.isErrored(t) : /state: 'errored'/.test(m.inspect(t))));
    },
    isReadable: function(t) {
        return !(!t || !(a.isReadable ? a.isReadable(t) : /state: 'readable'/.test(m.inspect(t))));
    },
    toUSVString: function(t) {
        return E ? `${t}`.toWellFormed() : m.toUSVString ? m.toUSVString(t) : `${t}`;
    },
    isReadableAborted: w,
    isBlobLike: A,
    parseOrigin: function(t) {
        if ("/" !== (t = _(t)).pathname || t.search || t.hash) throw new c("invalid url");
        return t;
    },
    parseURL: _,
    getServerName: function(t) {
        if (!t) return null;
        n.strictEqual(typeof t, "string");
        const e = function(t) {
            if ("[" === t[0]) {
                const e = t.indexOf("]");
                return n(-1 !== e), t.substring(1, e);
            }
            const e = t.indexOf(":");
            return -1 === e ? t : t.substring(0, e);
        }(t);
        return u.isIP(e) ? "" : e;
    },
    isStream: g,
    isIterable: function(t) {
        return !(null == t || "function" != typeof t[Symbol.iterator] && "function" != typeof t[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(t) {
        return !(null == t || "function" != typeof t[Symbol.asyncIterator]);
    },
    isDestroyed: y,
    headerNameToString: function(t) {
        return f[t] || t.toLowerCase();
    },
    parseRawHeaders: function(t) {
        const e = [];
        let r = !1, n = -1;
        for(let s = 0; s < t.length; s += 2){
            const i = t[s + 0].toString(), o = t[s + 1].toString("utf8");
            14 !== i.length || "content-length" !== i && "content-length" !== i.toLowerCase() ? 19 !== i.length || "content-disposition" !== i && "content-disposition" !== i.toLowerCase() ? e.push(i, o) : n = e.push(i, o) - 1 : (e.push(i, o), r = !0);
        }
        return r && -1 !== n && (e[n] = Buffer.from(e[n]).toString("latin1")), e;
    },
    parseHeaders: function(t, e = {}) {
        if (!Array.isArray(t)) return t;
        for(let r = 0; r < t.length; r += 2){
            const n = t[r].toString().toLowerCase();
            let s = e[n];
            s ? (Array.isArray(s) || (s = [
                s
            ], e[n] = s), s.push(t[r + 1].toString("utf8"))) : Array.isArray(t[r + 1]) ? e[n] = t[r + 1].map((t)=>t.toString("utf8")) : e[n] = t[r + 1].toString("utf8");
        }
        return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
    },
    parseKeepAliveTimeout: function(t) {
        const e = t.toString().match(S);
        return e ? 1e3 * parseInt(e[1], 10) : null;
    },
    destroy: function(t, e) {
        null != t && g(t) && !y(t) && ("function" == typeof t.destroy ? (Object.getPrototypeOf(t).constructor === o && (t.socket = null), t.destroy(e)) : e && process.nextTick((t, e)=>{
            t.emit("error", e);
        }, t, e), !0 !== t.destroyed && (t[s] = !0));
    },
    bodyLength: function(t) {
        if (null == t) return 0;
        if (g(t)) {
            const e = t._readableState;
            return e && !1 === e.objectMode && !0 === e.ended && Number.isFinite(e.length) ? e.length : null;
        }
        return A(t) ? null != t.size ? t.size : null : J(t) ? t.byteLength : null;
    },
    deepClone: function(t) {
        return JSON.parse(JSON.stringify(t));
    },
    ReadableStreamFrom: function(t) {
        if (B || (B = require("./module-3774.js").ReadableStream), B.from) return B.from(async function*(t) {
            for await (const e of t)yield Buffer.isBuffer(e) ? e : Buffer.from(e);
        }(t));
        let e;
        return new B({
            async start () {
                e = t[Symbol.asyncIterator]();
            },
            async pull (t) {
                const { done: r, value: n } = await e.next();
                if (r) queueMicrotask(()=>{
                    t.close();
                });
                else {
                    const e = Buffer.isBuffer(n) ? n : Buffer.from(n);
                    t.enqueue(new Uint8Array(e));
                }
                return t.desiredSize > 0;
            },
            async cancel (t) {
                await e.return();
            }
        }, 0);
    },
    isBuffer: J,
    validateHandler: function(t, e, r) {
        if (!t || "object" != typeof t) throw new c("handler must be an object");
        if ("function" != typeof t.onConnect) throw new c("invalid onConnect method");
        if ("function" != typeof t.onError) throw new c("invalid onError method");
        if ("function" != typeof t.onBodySent && void 0 !== t.onBodySent) throw new c("invalid onBodySent method");
        if (r || "CONNECT" === e) {
            if ("function" != typeof t.onUpgrade) throw new c("invalid onUpgrade method");
        } else {
            if ("function" != typeof t.onHeaders) throw new c("invalid onHeaders method");
            if ("function" != typeof t.onData) throw new c("invalid onData method");
            if ("function" != typeof t.onComplete) throw new c("invalid onComplete method");
        }
    },
    getSocketInfo: function(t) {
        return {
            localAddress: t.localAddress,
            localPort: t.localPort,
            remoteAddress: t.remoteAddress,
            remotePort: t.remotePort,
            remoteFamily: t.remoteFamily,
            timeout: t.timeout,
            bytesWritten: t.bytesWritten,
            bytesRead: t.bytesRead
        };
    },
    isFormDataLike: function(t) {
        return t && "object" == typeof t && "function" == typeof t.append && "function" == typeof t.delete && "function" == typeof t.get && "function" == typeof t.getAll && "function" == typeof t.has && "function" == typeof t.set && "FormData" === t[Symbol.toStringTag];
    },
    buildURL: function(t, e) {
        if (t.includes("?") || t.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const r = d(e);
        return r && (t += "?" + r), t;
    },
    throwIfAborted: function(t) {
        if (t) {
            if ("function" == typeof t.throwIfAborted) t.throwIfAborted();
            else if (t.aborted) {
                const t = new Error("The operation was aborted");
                throw t.name = "AbortError", t;
            }
        }
    },
    addAbortListener: function(t, e) {
        return "addEventListener" in t ? (t.addEventListener("abort", e, {
            once: !0
        }), ()=>t.removeEventListener("abort", e)) : (t.addListener("abort", e), ()=>t.removeListener("abort", e));
    },
    parseRangeHeader: function(t) {
        if (null == t || "" === t) return {
            start: 0,
            end: null,
            size: null
        };
        const e = t ? t.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return e ? {
            start: parseInt(e[1]),
            end: e[2] ? parseInt(e[2]) : null,
            size: e[3] ? parseInt(e[3]) : null
        } : null;
    },
    nodeMajor: p,
    nodeMinor: h,
    nodeHasAutoSelectFamily: p > 18 || 18 === p && h >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
