"use strict";
const t = require("./module-9278.js"), s = require("./module-2613.js"), o = require("./module-9361.js"), { InvalidArgumentError: r, ConnectTimeoutError: i } = require("./module-7902.js");
let l, d;
d = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((e)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const a = this._sessionCache.get(e);
            void 0 !== a && void 0 === a.deref() && this._sessionCache.delete(e);
        });
    }
    get(e) {
        const a = this._sessionCache.get(e);
        return a ? a.deref() : null;
    }
    set(e, a) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e, new WeakRef(a)), this._sessionRegistry.register(a, e));
    }
} : class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map;
    }
    get(e) {
        return this._sessionCache.get(e);
    }
    set(e, a) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: e } = this._sessionCache.keys().next();
                this._sessionCache.delete(e);
            }
            this._sessionCache.set(e, a);
        }
    }
}, module.exports = function({ allowH2: e, maxCachedSessions: a, socketPath: m, timeout: c, ...p }) {
    if (null != a && (!Number.isInteger(a) || a < 0)) throw new r("maxCachedSessions must be a positive integer or zero");
    const A = {
        path: m,
        ...p
    }, u = new d(a ?? 100);
    return c = c ?? 1e4, e = null != e && e, function({ hostname: a, host: r, protocol: d, port: m, servername: p, localAddress: g, httpSocket: T }, h) {
        let k;
        if ("https:" === d) {
            l || (l = require("./module-4756.js"));
            const t = (p = p || A.servername || o.getServerName(r) || null) || a, i = u.get(t) || null;
            s(t), k = l.connect({
                highWaterMark: 16384,
                ...A,
                servername: p,
                session: i,
                localAddress: g,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: T,
                port: m || 443,
                host: a
            }), k.on("session", function(e) {
                u.set(t, e);
            });
        } else s(!T, "httpSocket can only be sent on TLS update"), k = t.connect({
            highWaterMark: 65536,
            ...A,
            localAddress: g,
            port: m || 80,
            host: a
        });
        if (null == A.keepAlive || A.keepAlive) {
            const e = void 0 === A.keepAliveInitialDelay ? 6e4 : A.keepAliveInitialDelay;
            k.setKeepAlive(!0, e);
        }
        const _ = function(e, a) {
            if (!a) return ()=>{};
            let n = null, t = null;
            const s = setTimeout(()=>{
                n = setImmediate(()=>{
                    "win32" === process.platform ? t = setImmediate(()=>e()) : e();
                });
            }, a);
            return ()=>{
                clearTimeout(s), clearImmediate(n), clearImmediate(t);
            };
        }(()=>(function(e) {
                o.destroy(e, new i);
            })(k), c);
        return k.setNoDelay(!0).once("https:" === d ? "secureConnect" : "connect", function() {
            if (_(), h) {
                const e = h;
                h = null, e(null, this);
            }
        }).on("error", function(e) {
            if (_(), h) {
                const a = h;
                h = null, a(e);
            }
        }), k;
    };
};
