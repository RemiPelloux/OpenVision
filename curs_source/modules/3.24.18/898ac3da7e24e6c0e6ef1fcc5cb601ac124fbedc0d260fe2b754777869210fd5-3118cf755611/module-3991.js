"use strict";
const t = require("./module-9278.js"), s = require("./module-2613.js"), o = require("./module-9361.js"), { InvalidArgumentError: r, ConnectTimeoutError: i } = require("./module-7902.js");
let A, l;
l = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
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
}, module.exports = function({ allowH2: e, maxCachedSessions: n, socketPath: c, timeout: m, ...d }) {
    if (null != n && (!Number.isInteger(n) || n < 0)) throw new r("maxCachedSessions must be a positive integer or zero");
    const g = {
        path: c,
        ...d
    }, u = new l(n ?? 100);
    return m = m ?? 1e4, e = null != e && e, function({ hostname: n, host: r, protocol: l, port: c, servername: d, localAddress: E, httpSocket: p }, T) {
        let k;
        if ("https:" === l) {
            A || (A = require("./module-4756.js"));
            const t = (d = d || g.servername || o.getServerName(r) || null) || n, i = u.get(t) || null;
            s(t), k = A.connect({
                highWaterMark: 16384,
                ...g,
                servername: d,
                session: i,
                localAddress: E,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: p,
                port: c || 443,
                host: n
            }), k.on("session", function(e) {
                u.set(t, e);
            });
        } else s(!p, "httpSocket can only be sent on TLS update"), k = t.connect({
            highWaterMark: 65536,
            ...g,
            localAddress: E,
            port: c || 80,
            host: n
        });
        if (null == g.keepAlive || g.keepAlive) {
            const e = void 0 === g.keepAliveInitialDelay ? 6e4 : g.keepAliveInitialDelay;
            k.setKeepAlive(!0, e);
        }
        const I = function(e, n) {
            if (!n) return ()=>{};
            let a = null, t = null;
            const s = setTimeout(()=>{
                a = setImmediate(()=>{
                    "win32" === process.platform ? t = setImmediate(()=>e()) : e();
                });
            }, n);
            return ()=>{
                clearTimeout(s), clearImmediate(a), clearImmediate(t);
            };
        }(()=>(function(e) {
                o.destroy(e, new i);
            })(k), m);
        return k.setNoDelay(!0).once("https:" === l ? "secureConnect" : "connect", function() {
            if (I(), T) {
                const e = T;
                T = null, e(null, this);
            }
        }).on("error", function(e) {
            if (I(), T) {
                const n = T;
                T = null, n(e);
            }
        }), k;
    };
};
