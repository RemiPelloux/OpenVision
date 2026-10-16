"use strict";
const n = require("./module-69278.js"), s = require("./module-42613.js"), o = require("./module-83589.js"), { InvalidArgumentError: i, ConnectTimeoutError: a } = require("./module-48762.js");
let c, l;
l = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((e)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const t = this._sessionCache.get(e);
            void 0 !== t && void 0 === t.deref() && this._sessionCache.delete(e);
        });
    }
    get(e) {
        const t = this._sessionCache.get(e);
        return t ? t.deref() : null;
    }
    set(e, t) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e, new WeakRef(t)), this._sessionRegistry.register(t, e));
    }
} : class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map;
    }
    get(e) {
        return this._sessionCache.get(e);
    }
    set(e, t) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: e } = this._sessionCache.keys().next();
                this._sessionCache.delete(e);
            }
            this._sessionCache.set(e, t);
        }
    }
}, module.exports = function({ allowH2: e, maxCachedSessions: t, socketPath: u, timeout: d, ...p }) {
    if (null != t && (!Number.isInteger(t) || t < 0)) throw new i("maxCachedSessions must be a positive integer or zero");
    const m = {
        path: u,
        ...p
    }, h = new l(t ?? 100);
    return d = d ?? 1e4, e = null != e && e, function({ hostname: t, host: i, protocol: l, port: u, servername: p, localAddress: f, httpSocket: g }, y) {
        let w;
        if ("https:" === l) {
            c || (c = require("./module-64756.js"));
            const n = (p = p || m.servername || o.getServerName(i) || null) || t, a = h.get(n) || null;
            s(n), w = c.connect({
                highWaterMark: 16384,
                ...m,
                servername: p,
                session: a,
                localAddress: f,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: g,
                port: u || 443,
                host: t
            }), w.on("session", function(e) {
                h.set(n, e);
            });
        } else s(!g, "httpSocket can only be sent on TLS update"), w = n.connect({
            highWaterMark: 65536,
            ...m,
            localAddress: f,
            port: u || 80,
            host: t
        });
        if (null == m.keepAlive || m.keepAlive) {
            const e = void 0 === m.keepAliveInitialDelay ? 6e4 : m.keepAliveInitialDelay;
            w.setKeepAlive(!0, e);
        }
        const v = function(e, t) {
            if (!t) return ()=>{};
            let r = null, n = null;
            const s = setTimeout(()=>{
                r = setImmediate(()=>{
                    "win32" === process.platform ? n = setImmediate(()=>e()) : e();
                });
            }, t);
            return ()=>{
                clearTimeout(s), clearImmediate(r), clearImmediate(n);
            };
        }(()=>(function(e) {
                o.destroy(e, new a);
            })(w), d);
        return w.setNoDelay(!0).once("https:" === l ? "secureConnect" : "connect", function() {
            if (v(), y) {
                const e = y;
                y = null, e(null, this);
            }
        }).on("error", function(e) {
            if (v(), y) {
                const t = y;
                y = null, t(e);
            }
        }), w;
    };
};
