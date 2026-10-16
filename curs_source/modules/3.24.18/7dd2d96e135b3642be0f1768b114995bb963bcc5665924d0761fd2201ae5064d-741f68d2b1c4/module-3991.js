"use strict";
const a = require("./module-9278.js"), s = require("./module-2613.js"), o = require("./module-9361.js"), { InvalidArgumentError: r, ConnectTimeoutError: i } = require("./module-7902.js");
let A, c;
c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((e)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const n = this._sessionCache.get(e);
            void 0 !== n && void 0 === n.deref() && this._sessionCache.delete(e);
        });
    }
    get(e) {
        const n = this._sessionCache.get(e);
        return n ? n.deref() : null;
    }
    set(e, n) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e, new WeakRef(n)), this._sessionRegistry.register(n, e));
    }
} : class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map;
    }
    get(e) {
        return this._sessionCache.get(e);
    }
    set(e, n) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: e } = this._sessionCache.keys().next();
                this._sessionCache.delete(e);
            }
            this._sessionCache.set(e, n);
        }
    }
}, module.exports = function({ allowH2: e, maxCachedSessions: n, socketPath: l, timeout: d, ...m }) {
    if (null != n && (!Number.isInteger(n) || n < 0)) throw new r("maxCachedSessions must be a positive integer or zero");
    const u = {
        path: l,
        ...m
    }, g = new c(n ?? 100);
    return d = d ?? 1e4, e = null != e && e, function({ hostname: n, host: r, protocol: c, port: l, servername: m, localAddress: p, httpSocket: E }, h) {
        let T;
        if ("https:" === c) {
            A || (A = require("./module-4756.js"));
            const a = (m = m || u.servername || o.getServerName(r) || null) || n, i = g.get(a) || null;
            s(a), T = A.connect({
                highWaterMark: 16384,
                ...u,
                servername: m,
                session: i,
                localAddress: p,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: E,
                port: l || 443,
                host: n
            }), T.on("session", function(e) {
                g.set(a, e);
            });
        } else s(!E, "httpSocket can only be sent on TLS update"), T = a.connect({
            highWaterMark: 65536,
            ...u,
            localAddress: p,
            port: l || 80,
            host: n
        });
        if (null == u.keepAlive || u.keepAlive) {
            const e = void 0 === u.keepAliveInitialDelay ? 6e4 : u.keepAliveInitialDelay;
            T.setKeepAlive(!0, e);
        }
        const k = function(e, n) {
            if (!n) return ()=>{};
            let t = null, a = null;
            const s = setTimeout(()=>{
                t = setImmediate(()=>{
                    "win32" === process.platform ? a = setImmediate(()=>e()) : e();
                });
            }, n);
            return ()=>{
                clearTimeout(s), clearImmediate(t), clearImmediate(a);
            };
        }(()=>(function(e) {
                o.destroy(e, new i);
            })(T), d);
        return T.setNoDelay(!0).once("https:" === c ? "secureConnect" : "connect", function() {
            if (k(), h) {
                const e = h;
                h = null, e(null, this);
            }
        }).on("error", function(e) {
            if (k(), h) {
                const n = h;
                h = null, n(e);
            }
        }), T;
    };
};
