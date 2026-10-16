"use strict";
const t = require("./module-2613.js"), { kDestroyed: s, kBodyUsed: o } = require("./module-8832.js"), { IncomingMessage: r } = require("./module-8611.js"), i = require("./module-2203.js"), A = require("./module-9278.js"), { InvalidArgumentError: l } = require("./module-7902.js"), { Blob: c } = require("./module-181.js"), m = require("./module-9023.js"), { stringify: d } = require("./module-3480.js"), { headerNameLowerCasedRecord: g } = require("./module-6560.js"), [u, E] = process.versions.node.split(".").map((e)=>Number(e));
function p(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function T(e) {
    return c && e instanceof c || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function k(e) {
    if ("string" == typeof e) {
        if (e = new URL(e), !/^https?:/.test(e.origin || e.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e;
    }
    if (!e || "object" != typeof e) throw new l("Invalid URL: The URL argument must be a non-null object.");
    if (!/^https?:/.test(e.origin || e.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    if (!(e instanceof URL)) {
        if (null != e.port && "" !== e.port && !Number.isFinite(parseInt(e.port))) throw new l("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e.path && "string" != typeof e.path) throw new l("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e.pathname && "string" != typeof e.pathname) throw new l("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e.hostname && "string" != typeof e.hostname) throw new l("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e.origin && "string" != typeof e.origin) throw new l("Invalid URL origin: the origin must be a string or null/undefined.");
        const n = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let a = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${n}`, t = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        a.endsWith("/") && (a = a.substring(0, a.length - 1)), t && !t.startsWith("/") && (t = `/${t}`), e = new URL(a + t);
    }
    return e;
}
function I(e) {
    return !e || !(!e.destroyed && !e[s]);
}
function h(e) {
    const n = e && e._readableState;
    return I(e) && n && !n.endEmitted;
}
const _ = /timeout=(\d+)/;
function C(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let f;
const B = !!String.prototype.toWellFormed;
const Q = Object.create(null);
Q.enumerable = !0, module.exports = {
    kEnumerableProperty: Q,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(i.isDisturbed ? i.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || h(e)));
    },
    isErrored: function(e) {
        return !(!e || !(i.isErrored ? i.isErrored(e) : /state: 'errored'/.test(m.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(i.isReadable ? i.isReadable(e) : /state: 'readable'/.test(m.inspect(e))));
    },
    toUSVString: function(e) {
        return B ? `${e}`.toWellFormed() : m.toUSVString ? m.toUSVString(e) : `${e}`;
    },
    isReadableAborted: h,
    isBlobLike: T,
    parseOrigin: function(e) {
        if ("/" !== (e = k(e)).pathname || e.search || e.hash) throw new l("invalid url");
        return e;
    },
    parseURL: k,
    getServerName: function(e) {
        if (!e) return null;
        t.strictEqual(typeof e, "string");
        const n = function(e) {
            if ("[" === e[0]) {
                const n = e.indexOf("]");
                return t(-1 !== n), e.substring(1, n);
            }
            const n = e.indexOf(":");
            return -1 === n ? e : e.substring(0, n);
        }(e);
        return A.isIP(n) ? "" : n;
    },
    isStream: p,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: I,
    headerNameToString: function(e) {
        return g[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const n = [];
        let a = !1, t = -1;
        for(let s = 0; s < e.length; s += 2){
            const o = e[s + 0].toString(), r = e[s + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? n.push(o, r) : t = n.push(o, r) - 1 : (n.push(o, r), a = !0);
        }
        return a && -1 !== t && (n[t] = Buffer.from(n[t]).toString("latin1")), n;
    },
    parseHeaders: function(e, n = {}) {
        if (!Array.isArray(e)) return e;
        for(let a = 0; a < e.length; a += 2){
            const t = e[a].toString().toLowerCase();
            let s = n[t];
            s ? (Array.isArray(s) || (s = [
                s
            ], n[t] = s), s.push(e[a + 1].toString("utf8"))) : Array.isArray(e[a + 1]) ? n[t] = e[a + 1].map((e)=>e.toString("utf8")) : n[t] = e[a + 1].toString("utf8");
        }
        return "content-length" in n && "content-disposition" in n && (n["content-disposition"] = Buffer.from(n["content-disposition"]).toString("latin1")), n;
    },
    parseKeepAliveTimeout: function(e) {
        const n = e.toString().match(_);
        return n ? 1e3 * parseInt(n[1], 10) : null;
    },
    destroy: function(e, n) {
        null != e && p(e) && !I(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === r && (e.socket = null), e.destroy(n)) : n && process.nextTick((e, n)=>{
            e.emit("error", n);
        }, e, n), !0 !== e.destroyed && (e[s] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (p(e)) {
            const n = e._readableState;
            return n && !1 === n.objectMode && !0 === n.ended && Number.isFinite(n.length) ? n.length : null;
        }
        return T(e) ? null != e.size ? e.size : null : C(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (f || (f = require("./module-3774.js").ReadableStream), f.from) return f.from(async function*(e) {
            for await (const n of e)yield Buffer.isBuffer(n) ? n : Buffer.from(n);
        }(e));
        let n;
        return new f({
            async start () {
                n = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: a, value: t } = await n.next();
                if (a) queueMicrotask(()=>{
                    e.close();
                });
                else {
                    const n = Buffer.isBuffer(t) ? t : Buffer.from(t);
                    e.enqueue(new Uint8Array(n));
                }
                return e.desiredSize > 0;
            },
            async cancel (e) {
                await n.return();
            }
        }, 0);
    },
    isBuffer: C,
    validateHandler: function(e, n, a) {
        if (!e || "object" != typeof e) throw new l("handler must be an object");
        if ("function" != typeof e.onConnect) throw new l("invalid onConnect method");
        if ("function" != typeof e.onError) throw new l("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new l("invalid onBodySent method");
        if (a || "CONNECT" === n) {
            if ("function" != typeof e.onUpgrade) throw new l("invalid onUpgrade method");
        } else {
            if ("function" != typeof e.onHeaders) throw new l("invalid onHeaders method");
            if ("function" != typeof e.onData) throw new l("invalid onData method");
            if ("function" != typeof e.onComplete) throw new l("invalid onComplete method");
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
    buildURL: function(e, n) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const a = d(n);
        return a && (e += "?" + a), e;
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
    addAbortListener: function(e, n) {
        return "addEventListener" in e ? (e.addEventListener("abort", n, {
            once: !0
        }), ()=>e.removeEventListener("abort", n)) : (e.addListener("abort", n), ()=>e.removeListener("abort", n));
    },
    parseRangeHeader: function(e) {
        if (null == e || "" === e) return {
            start: 0,
            end: null,
            size: null
        };
        const n = e ? e.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return n ? {
            start: parseInt(n[1]),
            end: n[2] ? parseInt(n[2]) : null,
            size: n[3] ? parseInt(n[3]) : null
        } : null;
    },
    nodeMajor: u,
    nodeMinor: E,
    nodeHasAutoSelectFamily: u > 18 || 18 === u && E >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
