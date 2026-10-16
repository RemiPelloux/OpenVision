"use strict";
const n = require("./module-9278.js"), r = require("./module-2613.js"), o = require("./module-9361.js"), { InvalidArgumentError: s, ConnectTimeoutError: i } = require("./module-7902.js");
let a, c;
c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
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
}, module.exports = function({ allowH2: e, maxCachedSessions: t, socketPath: l, timeout: u, ...g }) {
    if (null != t && (!Number.isInteger(t) || t < 0)) throw new s("maxCachedSessions must be a positive integer or zero");
    const E = {
        path: l,
        ...g
    }, h = new c(t ?? 100);
    return u = u ?? 1e4, e = null != e && e, function({ hostname: t, host: s, protocol: c, port: l, servername: g, localAddress: d, httpSocket: I }, B) {
        let Q;
        if ("https:" === c) {
            a || (a = require("./module-4756.js"));
            const n = (g = g || E.servername || o.getServerName(s) || null) || t, i = h.get(n) || null;
            r(n), Q = a.connect({
                highWaterMark: 16384,
                ...E,
                servername: g,
                session: i,
                localAddress: d,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: I,
                port: l || 443,
                host: t
            }), Q.on("session", function(e) {
                h.set(n, e);
            });
        } else r(!I, "httpSocket can only be sent on TLS update"), Q = n.connect({
            highWaterMark: 65536,
            ...E,
            localAddress: d,
            port: l || 80,
            host: t
        });
        if (null == E.keepAlive || E.keepAlive) {
            const e = void 0 === E.keepAliveInitialDelay ? 6e4 : E.keepAliveInitialDelay;
            Q.setKeepAlive(!0, e);
        }
        const f = function(e, t) {
            if (!t) return ()=>{};
            let A = null, n = null;
            const r = setTimeout(()=>{
                A = setImmediate(()=>{
                    "win32" === process.platform ? n = setImmediate(()=>e()) : e();
                });
            }, t);
            return ()=>{
                clearTimeout(r), clearImmediate(A), clearImmediate(n);
            };
        }(()=>(function(e) {
                o.destroy(e, new i);
            })(Q), u);
        return Q.setNoDelay(!0).once("https:" === c ? "secureConnect" : "connect", function() {
            if (f(), B) {
                const e = B;
                B = null, e(null, this);
            }
        }).on("error", function(e) {
            if (f(), B) {
                const t = B;
                B = null, t(e);
            }
        }), Q;
    };
};
