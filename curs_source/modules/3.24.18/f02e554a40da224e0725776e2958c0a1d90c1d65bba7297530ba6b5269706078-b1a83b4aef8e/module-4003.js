"use strict";
const n = require("./module-9278.js"), s = require("./module-2613.js"), i = require("./module-3589.js"), { InvalidArgumentError: o, ConnectTimeoutError: a } = require("./module-8762.js");
let u, c;
c = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(t){
        this._maxCachedSessions = t, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((t)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const e = this._sessionCache.get(t);
            void 0 !== e && void 0 === e.deref() && this._sessionCache.delete(t);
        });
    }
    get(t) {
        const e = this._sessionCache.get(t);
        return e ? e.deref() : null;
    }
    set(t, e) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(t, new WeakRef(e)), this._sessionRegistry.register(e, t));
    }
} : class {
    constructor(t){
        this._maxCachedSessions = t, this._sessionCache = new Map;
    }
    get(t) {
        return this._sessionCache.get(t);
    }
    set(t, e) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: t } = this._sessionCache.keys().next();
                this._sessionCache.delete(t);
            }
            this._sessionCache.set(t, e);
        }
    }
}, module.exports = function({ allowH2: t, maxCachedSessions: e, socketPath: l, timeout: m, ...d }) {
    if (null != e && (!Number.isInteger(e) || e < 0)) throw new o("maxCachedSessions must be a positive integer or zero");
    const f = {
        path: l,
        ...d
    }, p = new c(e ?? 100);
    return m = m ?? 1e4, t = null != t && t, function({ hostname: e, host: o, protocol: c, port: l, servername: d, localAddress: h, httpSocket: g }, A) {
        let _;
        if ("https:" === c) {
            u || (u = require("./module-4756.js"));
            const n = (d = d || f.servername || i.getServerName(o) || null) || e, a = p.get(n) || null;
            s(n), _ = u.connect({
                highWaterMark: 16384,
                ...f,
                servername: d,
                session: a,
                localAddress: h,
                ALPNProtocols: t ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: g,
                port: l || 443,
                host: e
            }), _.on("session", function(t) {
                p.set(n, t);
            });
        } else s(!g, "httpSocket can only be sent on TLS update"), _ = n.connect({
            highWaterMark: 65536,
            ...f,
            localAddress: h,
            port: l || 80,
            host: e
        });
        if (null == f.keepAlive || f.keepAlive) {
            const t = void 0 === f.keepAliveInitialDelay ? 6e4 : f.keepAliveInitialDelay;
            _.setKeepAlive(!0, t);
        }
        const y = function(t, e) {
            if (!e) return ()=>{};
            let r = null, n = null;
            const s = setTimeout(()=>{
                r = setImmediate(()=>{
                    "win32" === process.platform ? n = setImmediate(()=>t()) : t();
                });
            }, e);
            return ()=>{
                clearTimeout(s), clearImmediate(r), clearImmediate(n);
            };
        }(()=>(function(t) {
                i.destroy(t, new a);
            })(_), m);
        return _.setNoDelay(!0).once("https:" === c ? "secureConnect" : "connect", function() {
            if (y(), A) {
                const t = A;
                A = null, t(null, this);
            }
        }).on("error", function(t) {
            if (y(), A) {
                const e = A;
                A = null, e(t);
            }
        }), _;
    };
};
