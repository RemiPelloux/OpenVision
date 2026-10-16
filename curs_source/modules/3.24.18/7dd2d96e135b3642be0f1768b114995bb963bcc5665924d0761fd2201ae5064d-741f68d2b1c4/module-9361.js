"use strict";
const a = require("./module-2613.js"), { kDestroyed: s, kBodyUsed: o } = require("./module-8832.js"), { IncomingMessage: r } = require("./module-8611.js"), i = require("./module-2203.js"), A = require("./module-9278.js"), { InvalidArgumentError: c } = require("./module-7902.js"), { Blob: l } = require("./module-181.js"), d = require("./module-9023.js"), { stringify: m } = require("./module-3480.js"), { headerNameLowerCasedRecord: u } = require("./module-6560.js"), [g, p] = process.versions.node.split(".").map((e)=>Number(e));
function E(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function h(e) {
    return l && e instanceof l || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function T(e) {
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
        const n = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let t = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${n}`, a = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        t.endsWith("/") && (t = t.substring(0, t.length - 1)), a && !a.startsWith("/") && (a = `/${a}`), e = new URL(t + a);
    }
    return e;
}
function k(e) {
    return !e || !(!e.destroyed && !e[s]);
}
function f(e) {
    const n = e && e._readableState;
    return k(e) && n && !n.endEmitted;
}
const _ = /timeout=(\d+)/;
function I(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let C;
const y = !!String.prototype.toWellFormed;
const B = Object.create(null);
B.enumerable = !0, module.exports = {
    kEnumerableProperty: B,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(i.isDisturbed ? i.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || f(e)));
    },
    isErrored: function(e) {
        return !(!e || !(i.isErrored ? i.isErrored(e) : /state: 'errored'/.test(d.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(i.isReadable ? i.isReadable(e) : /state: 'readable'/.test(d.inspect(e))));
    },
    toUSVString: function(e) {
        return y ? `${e}`.toWellFormed() : d.toUSVString ? d.toUSVString(e) : `${e}`;
    },
    isReadableAborted: f,
    isBlobLike: h,
    parseOrigin: function(e) {
        if ("/" !== (e = T(e)).pathname || e.search || e.hash) throw new c("invalid url");
        return e;
    },
    parseURL: T,
    getServerName: function(e) {
        if (!e) return null;
        a.strictEqual(typeof e, "string");
        const n = function(e) {
            if ("[" === e[0]) {
                const n = e.indexOf("]");
                return a(-1 !== n), e.substring(1, n);
            }
            const n = e.indexOf(":");
            return -1 === n ? e : e.substring(0, n);
        }(e);
        return A.isIP(n) ? "" : n;
    },
    isStream: E,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: k,
    headerNameToString: function(e) {
        return u[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const n = [];
        let t = !1, a = -1;
        for(let s = 0; s < e.length; s += 2){
            const o = e[s + 0].toString(), r = e[s + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? n.push(o, r) : a = n.push(o, r) - 1 : (n.push(o, r), t = !0);
        }
        return t && -1 !== a && (n[a] = Buffer.from(n[a]).toString("latin1")), n;
    },
    parseHeaders: function(e, n = {}) {
        if (!Array.isArray(e)) return e;
        for(let t = 0; t < e.length; t += 2){
            const a = e[t].toString().toLowerCase();
            let s = n[a];
            s ? (Array.isArray(s) || (s = [
                s
            ], n[a] = s), s.push(e[t + 1].toString("utf8"))) : Array.isArray(e[t + 1]) ? n[a] = e[t + 1].map((e)=>e.toString("utf8")) : n[a] = e[t + 1].toString("utf8");
        }
        return "content-length" in n && "content-disposition" in n && (n["content-disposition"] = Buffer.from(n["content-disposition"]).toString("latin1")), n;
    },
    parseKeepAliveTimeout: function(e) {
        const n = e.toString().match(_);
        return n ? 1e3 * parseInt(n[1], 10) : null;
    },
    destroy: function(e, n) {
        null != e && E(e) && !k(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === r && (e.socket = null), e.destroy(n)) : n && process.nextTick((e, n)=>{
            e.emit("error", n);
        }, e, n), !0 !== e.destroyed && (e[s] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (E(e)) {
            const n = e._readableState;
            return n && !1 === n.objectMode && !0 === n.ended && Number.isFinite(n.length) ? n.length : null;
        }
        return h(e) ? null != e.size ? e.size : null : I(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (C || (C = require("./module-3774.js").ReadableStream), C.from) return C.from(async function*(e) {
            for await (const n of e)yield Buffer.isBuffer(n) ? n : Buffer.from(n);
        }(e));
        let n;
        return new C({
            async start () {
                n = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: t, value: a } = await n.next();
                if (t) queueMicrotask(()=>{
                    e.close();
                });
                else {
                    const n = Buffer.isBuffer(a) ? a : Buffer.from(a);
                    e.enqueue(new Uint8Array(n));
                }
                return e.desiredSize > 0;
            },
            async cancel (e) {
                await n.return();
            }
        }, 0);
    },
    isBuffer: I,
    validateHandler: function(e, n, t) {
        if (!e || "object" != typeof e) throw new c("handler must be an object");
        if ("function" != typeof e.onConnect) throw new c("invalid onConnect method");
        if ("function" != typeof e.onError) throw new c("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new c("invalid onBodySent method");
        if (t || "CONNECT" === n) {
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
    buildURL: function(e, n) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const t = m(n);
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
    nodeMajor: g,
    nodeMinor: p,
    nodeHasAutoSelectFamily: g > 18 || 18 === g && p >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
