"use strict";
const n = require("./module-9278.js"), r = require("./module-2613.js"), o = require("./module-9361.js"), { InvalidArgumentError: s, ConnectTimeoutError: a } = require("./module-7902.js");
let i, c;
c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((e)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const A = this._sessionCache.get(e);
            void 0 !== A && void 0 === A.deref() && this._sessionCache.delete(e);
        });
    }
    get(e) {
        const A = this._sessionCache.get(e);
        return A ? A.deref() : null;
    }
    set(e, A) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(e, new WeakRef(A)), this._sessionRegistry.register(A, e));
    }
} : class {
    constructor(e){
        this._maxCachedSessions = e, this._sessionCache = new Map;
    }
    get(e) {
        return this._sessionCache.get(e);
    }
    set(e, A) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: e } = this._sessionCache.keys().next();
                this._sessionCache.delete(e);
            }
            this._sessionCache.set(e, A);
        }
    }
}, module.exports = function({ allowH2: e, maxCachedSessions: A, socketPath: l, timeout: g, ...E }) {
    if (null != A && (!Number.isInteger(A) || A < 0)) throw new s("maxCachedSessions must be a positive integer or zero");
    const u = {
        path: l,
        ...E
    }, d = new c(A ?? 100);
    return g = g ?? 1e4, e = null != e && e, function({ hostname: A, host: s, protocol: c, port: l, servername: E, localAddress: I, httpSocket: h }, Q) {
        let m;
        if ("https:" === c) {
            i || (i = require("./module-4756.js"));
            const n = (E = E || u.servername || o.getServerName(s) || null) || A, a = d.get(n) || null;
            r(n), m = i.connect({
                highWaterMark: 16384,
                ...u,
                servername: E,
                session: a,
                localAddress: I,
                ALPNProtocols: e ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: h,
                port: l || 443,
                host: A
            }), m.on("session", function(e) {
                d.set(n, e);
            });
        } else r(!h, "httpSocket can only be sent on TLS update"), m = n.connect({
            highWaterMark: 65536,
            ...u,
            localAddress: I,
            port: l || 80,
            host: A
        });
        if (null == u.keepAlive || u.keepAlive) {
            const e = void 0 === u.keepAliveInitialDelay ? 6e4 : u.keepAliveInitialDelay;
            m.setKeepAlive(!0, e);
        }
        const C = function(e, A) {
            if (!A) return ()=>{};
            let t = null, n = null;
            const r = setTimeout(()=>{
                t = setImmediate(()=>{
                    "win32" === process.platform ? n = setImmediate(()=>e()) : e();
                });
            }, A);
            return ()=>{
                clearTimeout(r), clearImmediate(t), clearImmediate(n);
            };
        }(()=>(function(e) {
                o.destroy(e, new a);
            })(m), g);
        return m.setNoDelay(!0).once("https:" === c ? "secureConnect" : "connect", function() {
            if (C(), Q) {
                const e = Q;
                Q = null, e(null, this);
            }
        }).on("error", function(e) {
            if (C(), Q) {
                const A = Q;
                Q = null, A(e);
            }
        }), m;
    };
};
