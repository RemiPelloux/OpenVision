"use strict";
const t = require("./module-2613.js"), { kDestroyed: s, kBodyUsed: o } = require("./module-8832.js"), { IncomingMessage: r } = require("./module-8611.js"), i = require("./module-2203.js"), l = require("./module-9278.js"), { InvalidArgumentError: d } = require("./module-7902.js"), { Blob: m } = require("./module-181.js"), c = require("./module-9023.js"), { stringify: p } = require("./module-3480.js"), { headerNameLowerCasedRecord: A } = require("./module-6560.js"), [u, g] = process.versions.node.split(".").map((e)=>Number(e));
function T(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function h(e) {
    return m && e instanceof m || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function k(e) {
    if ("string" == typeof e) {
        if (e = new URL(e), !/^https?:/.test(e.origin || e.protocol)) throw new d("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e;
    }
    if (!e || "object" != typeof e) throw new d("Invalid URL: The URL argument must be a non-null object.");
    if (!/^https?:/.test(e.origin || e.protocol)) throw new d("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    if (!(e instanceof URL)) {
        if (null != e.port && "" !== e.port && !Number.isFinite(parseInt(e.port))) throw new d("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e.path && "string" != typeof e.path) throw new d("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e.pathname && "string" != typeof e.pathname) throw new d("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e.hostname && "string" != typeof e.hostname) throw new d("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e.origin && "string" != typeof e.origin) throw new d("Invalid URL origin: the origin must be a string or null/undefined.");
        const a = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let n = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${a}`, t = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        n.endsWith("/") && (n = n.substring(0, n.length - 1)), t && !t.startsWith("/") && (t = `/${t}`), e = new URL(n + t);
    }
    return e;
}
function _(e) {
    return !e || !(!e.destroyed && !e[s]);
}
function E(e) {
    const a = e && e._readableState;
    return _(e) && a && !a.endEmitted;
}
const f = /timeout=(\d+)/;
function C(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let I;
const v = !!String.prototype.toWellFormed;
const y = Object.create(null);
y.enumerable = !0, module.exports = {
    kEnumerableProperty: y,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(i.isDisturbed ? i.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || E(e)));
    },
    isErrored: function(e) {
        return !(!e || !(i.isErrored ? i.isErrored(e) : /state: 'errored'/.test(c.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(i.isReadable ? i.isReadable(e) : /state: 'readable'/.test(c.inspect(e))));
    },
    toUSVString: function(e) {
        return v ? `${e}`.toWellFormed() : c.toUSVString ? c.toUSVString(e) : `${e}`;
    },
    isReadableAborted: E,
    isBlobLike: h,
    parseOrigin: function(e) {
        if ("/" !== (e = k(e)).pathname || e.search || e.hash) throw new d("invalid url");
        return e;
    },
    parseURL: k,
    getServerName: function(e) {
        if (!e) return null;
        t.strictEqual(typeof e, "string");
        const a = function(e) {
            if ("[" === e[0]) {
                const a = e.indexOf("]");
                return t(-1 !== a), e.substring(1, a);
            }
            const a = e.indexOf(":");
            return -1 === a ? e : e.substring(0, a);
        }(e);
        return l.isIP(a) ? "" : a;
    },
    isStream: T,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: _,
    headerNameToString: function(e) {
        return A[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const a = [];
        let n = !1, t = -1;
        for(let s = 0; s < e.length; s += 2){
            const o = e[s + 0].toString(), r = e[s + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? a.push(o, r) : t = a.push(o, r) - 1 : (a.push(o, r), n = !0);
        }
        return n && -1 !== t && (a[t] = Buffer.from(a[t]).toString("latin1")), a;
    },
    parseHeaders: function(e, a = {}) {
        if (!Array.isArray(e)) return e;
        for(let n = 0; n < e.length; n += 2){
            const t = e[n].toString().toLowerCase();
            let s = a[t];
            s ? (Array.isArray(s) || (s = [
                s
            ], a[t] = s), s.push(e[n + 1].toString("utf8"))) : Array.isArray(e[n + 1]) ? a[t] = e[n + 1].map((e)=>e.toString("utf8")) : a[t] = e[n + 1].toString("utf8");
        }
        return "content-length" in a && "content-disposition" in a && (a["content-disposition"] = Buffer.from(a["content-disposition"]).toString("latin1")), a;
    },
    parseKeepAliveTimeout: function(e) {
        const a = e.toString().match(f);
        return a ? 1e3 * parseInt(a[1], 10) : null;
    },
    destroy: function(e, a) {
        null != e && T(e) && !_(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === r && (e.socket = null), e.destroy(a)) : a && process.nextTick((e, a)=>{
            e.emit("error", a);
        }, e, a), !0 !== e.destroyed && (e[s] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (T(e)) {
            const a = e._readableState;
            return a && !1 === a.objectMode && !0 === a.ended && Number.isFinite(a.length) ? a.length : null;
        }
        return h(e) ? null != e.size ? e.size : null : C(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (I || (I = require("./module-3774.js").ReadableStream), I.from) return I.from(async function*(e) {
            for await (const a of e)yield Buffer.isBuffer(a) ? a : Buffer.from(a);
        }(e));
        let a;
        return new I({
            async start () {
                a = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: n, value: t } = await a.next();
                if (n) queueMicrotask(()=>{
                    e.close();
                });
                else {
                    const a = Buffer.isBuffer(t) ? t : Buffer.from(t);
                    e.enqueue(new Uint8Array(a));
                }
                return e.desiredSize > 0;
            },
            async cancel (e) {
                await a.return();
            }
        }, 0);
    },
    isBuffer: C,
    validateHandler: function(e, a, n) {
        if (!e || "object" != typeof e) throw new d("handler must be an object");
        if ("function" != typeof e.onConnect) throw new d("invalid onConnect method");
        if ("function" != typeof e.onError) throw new d("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new d("invalid onBodySent method");
        if (n || "CONNECT" === a) {
            if ("function" != typeof e.onUpgrade) throw new d("invalid onUpgrade method");
        } else {
            if ("function" != typeof e.onHeaders) throw new d("invalid onHeaders method");
            if ("function" != typeof e.onData) throw new d("invalid onData method");
            if ("function" != typeof e.onComplete) throw new d("invalid onComplete method");
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
    buildURL: function(e, a) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const n = p(a);
        return n && (e += "?" + n), e;
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
    addAbortListener: function(e, a) {
        return "addEventListener" in e ? (e.addEventListener("abort", a, {
            once: !0
        }), ()=>e.removeEventListener("abort", a)) : (e.addListener("abort", a), ()=>e.removeListener("abort", a));
    },
    parseRangeHeader: function(e) {
        if (null == e || "" === e) return {
            start: 0,
            end: null,
            size: null
        };
        const a = e ? e.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return a ? {
            start: parseInt(a[1]),
            end: a[2] ? parseInt(a[2]) : null,
            size: a[3] ? parseInt(a[3]) : null
        } : null;
    },
    nodeMajor: u,
    nodeMinor: g,
    nodeHasAutoSelectFamily: u > 18 || 18 === u && g >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
