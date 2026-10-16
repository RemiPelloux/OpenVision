"use strict";
const n = require("./module-42613.js"), { kDestroyed: s, kBodyUsed: o } = require("./module-15532.js"), { IncomingMessage: i } = require("./module-58611.js"), a = require("./module-2203.js"), c = require("./module-69278.js"), { InvalidArgumentError: l } = require("./module-48762.js"), { Blob: u } = require("./module-20181.js"), d = require("./module-39023.js"), { stringify: p } = require("./module-83480.js"), { headerNameLowerCasedRecord: m } = require("./module-77676.js"), [h, f] = process.versions.node.split(".").map((e)=>Number(e));
function g(e) {
    return e && "object" == typeof e && "function" == typeof e.pipe && "function" == typeof e.on;
}
function y(e) {
    return u && e instanceof u || e && "object" == typeof e && ("function" == typeof e.stream || "function" == typeof e.arrayBuffer) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
}
function w(e) {
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
        const t = null != e.port ? e.port : "https:" === e.protocol ? 443 : 80;
        let r = null != e.origin ? e.origin : `${e.protocol}//${e.hostname}:${t}`, n = null != e.path ? e.path : `${e.pathname || ""}${e.search || ""}`;
        r.endsWith("/") && (r = r.substring(0, r.length - 1)), n && !n.startsWith("/") && (n = `/${n}`), e = new URL(r + n);
    }
    return e;
}
function v(e) {
    return !e || !(!e.destroyed && !e[s]);
}
function _(e) {
    const t = e && e._readableState;
    return v(e) && t && !t.endEmitted;
}
const A = /timeout=(\d+)/;
function S(e) {
    return e instanceof Uint8Array || Buffer.isBuffer(e);
}
let b;
const E = !!String.prototype.toWellFormed;
const I = Object.create(null);
I.enumerable = !0, module.exports = {
    kEnumerableProperty: I,
    nop: function() {},
    isDisturbed: function(e) {
        return !(!e || !(a.isDisturbed ? a.isDisturbed(e) || e[o] : e[o] || e.readableDidRead || e._readableState && e._readableState.dataEmitted || _(e)));
    },
    isErrored: function(e) {
        return !(!e || !(a.isErrored ? a.isErrored(e) : /state: 'errored'/.test(d.inspect(e))));
    },
    isReadable: function(e) {
        return !(!e || !(a.isReadable ? a.isReadable(e) : /state: 'readable'/.test(d.inspect(e))));
    },
    toUSVString: function(e) {
        return E ? `${e}`.toWellFormed() : d.toUSVString ? d.toUSVString(e) : `${e}`;
    },
    isReadableAborted: _,
    isBlobLike: y,
    parseOrigin: function(e) {
        if ("/" !== (e = w(e)).pathname || e.search || e.hash) throw new l("invalid url");
        return e;
    },
    parseURL: w,
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
        return c.isIP(t) ? "" : t;
    },
    isStream: g,
    isIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.iterator] && "function" != typeof e[Symbol.asyncIterator]);
    },
    isAsyncIterable: function(e) {
        return !(null == e || "function" != typeof e[Symbol.asyncIterator]);
    },
    isDestroyed: v,
    headerNameToString: function(e) {
        return m[e] || e.toLowerCase();
    },
    parseRawHeaders: function(e) {
        const t = [];
        let r = !1, n = -1;
        for(let s = 0; s < e.length; s += 2){
            const o = e[s + 0].toString(), i = e[s + 1].toString("utf8");
            14 !== o.length || "content-length" !== o && "content-length" !== o.toLowerCase() ? 19 !== o.length || "content-disposition" !== o && "content-disposition" !== o.toLowerCase() ? t.push(o, i) : n = t.push(o, i) - 1 : (t.push(o, i), r = !0);
        }
        return r && -1 !== n && (t[n] = Buffer.from(t[n]).toString("latin1")), t;
    },
    parseHeaders: function(e, t = {}) {
        if (!Array.isArray(e)) return e;
        for(let r = 0; r < e.length; r += 2){
            const n = e[r].toString().toLowerCase();
            let s = t[n];
            s ? (Array.isArray(s) || (s = [
                s
            ], t[n] = s), s.push(e[r + 1].toString("utf8"))) : Array.isArray(e[r + 1]) ? t[n] = e[r + 1].map((e)=>e.toString("utf8")) : t[n] = e[r + 1].toString("utf8");
        }
        return "content-length" in t && "content-disposition" in t && (t["content-disposition"] = Buffer.from(t["content-disposition"]).toString("latin1")), t;
    },
    parseKeepAliveTimeout: function(e) {
        const t = e.toString().match(A);
        return t ? 1e3 * parseInt(t[1], 10) : null;
    },
    destroy: function(e, t) {
        null != e && g(e) && !v(e) && ("function" == typeof e.destroy ? (Object.getPrototypeOf(e).constructor === i && (e.socket = null), e.destroy(t)) : t && process.nextTick((e, t)=>{
            e.emit("error", t);
        }, e, t), !0 !== e.destroyed && (e[s] = !0));
    },
    bodyLength: function(e) {
        if (null == e) return 0;
        if (g(e)) {
            const t = e._readableState;
            return t && !1 === t.objectMode && !0 === t.ended && Number.isFinite(t.length) ? t.length : null;
        }
        return y(e) ? null != e.size ? e.size : null : S(e) ? e.byteLength : null;
    },
    deepClone: function(e) {
        return JSON.parse(JSON.stringify(e));
    },
    ReadableStreamFrom: function(e) {
        if (b || (b = require("./module-63774.js").ReadableStream), b.from) return b.from(async function*(e) {
            for await (const t of e)yield Buffer.isBuffer(t) ? t : Buffer.from(t);
        }(e));
        let t;
        return new b({
            async start () {
                t = e[Symbol.asyncIterator]();
            },
            async pull (e) {
                const { done: r, value: n } = await t.next();
                if (r) queueMicrotask(()=>{
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
    isBuffer: S,
    validateHandler: function(e, t, r) {
        if (!e || "object" != typeof e) throw new l("handler must be an object");
        if ("function" != typeof e.onConnect) throw new l("invalid onConnect method");
        if ("function" != typeof e.onError) throw new l("invalid onError method");
        if ("function" != typeof e.onBodySent && void 0 !== e.onBodySent) throw new l("invalid onBodySent method");
        if (r || "CONNECT" === t) {
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
    buildURL: function(e, t) {
        if (e.includes("?") || e.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
        const r = p(t);
        return r && (e += "?" + r), e;
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
    nodeMinor: f,
    nodeHasAutoSelectFamily: h > 18 || 18 === h && f >= 13,
    safeHTTPMethods: [
        "GET",
        "HEAD",
        "OPTIONS",
        "TRACE"
    ]
};
