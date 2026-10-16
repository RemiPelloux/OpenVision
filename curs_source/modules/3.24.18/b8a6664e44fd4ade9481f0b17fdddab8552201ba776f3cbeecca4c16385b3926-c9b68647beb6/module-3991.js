"use strict";
const r = require(69278), s = require(42613), o = require("./module-9361.js"), { InvalidArgumentError: n, ConnectTimeoutError: i } = require("./module-95521.js");
let E, Q;
Q = global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? class {
    constructor(A){
        this._maxCachedSessions = A, this._sessionCache = new Map, this._sessionRegistry = new global.FinalizationRegistry((A)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const e = this._sessionCache.get(A);
            void 0 !== e && void 0 === e.deref() && this._sessionCache.delete(A);
        });
    }
    get(A) {
        const e = this._sessionCache.get(A);
        return e ? e.deref() : null;
    }
    set(A, e) {
        0 !== this._maxCachedSessions && (this._sessionCache.set(A, new WeakRef(e)), this._sessionRegistry.register(e, A));
    }
} : class {
    constructor(A){
        this._maxCachedSessions = A, this._sessionCache = new Map;
    }
    get(A) {
        return this._sessionCache.get(A);
    }
    set(A, e) {
        if (0 !== this._maxCachedSessions) {
            if (this._sessionCache.size >= this._maxCachedSessions) {
                const { value: A } = this._sessionCache.keys().next();
                this._sessionCache.delete(A);
            }
            this._sessionCache.set(A, e);
        }
    }
}, module.exports = function({ allowH2: A, maxCachedSessions: e, socketPath: g, timeout: C, ...B }) {
    if (null != e && (!Number.isInteger(e) || e < 0)) throw new n("maxCachedSessions must be a positive integer or zero");
    const a = {
        path: g,
        ...B
    }, I = new Q(e ?? 100);
    return C = C ?? 1e4, A = null != A && A, function({ hostname: e, host: n, protocol: Q, port: g, servername: B, localAddress: c, httpSocket: h }, l) {
        let u;
        if ("https:" === Q) {
            E || (E = require(64756));
            const r = (B = B || a.servername || o.getServerName(n) || null) || e, i = I.get(r) || null;
            s(r), u = E.connect({
                highWaterMark: 16384,
                ...a,
                servername: B,
                session: i,
                localAddress: c,
                ALPNProtocols: A ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: h,
                port: g || 443,
                host: e
            }), u.on("session", function(A) {
                I.set(r, A);
            });
        } else s(!h, "httpSocket can only be sent on TLS update"), u = r.connect({
            highWaterMark: 65536,
            ...a,
            localAddress: c,
            port: g || 80,
            host: e
        });
        if (null == a.keepAlive || a.keepAlive) {
            const A = void 0 === a.keepAliveInitialDelay ? 6e4 : a.keepAliveInitialDelay;
            u.setKeepAlive(!0, A);
        }
        const d = function(A, e) {
            if (!e) return ()=>{};
            let t = null, r = null;
            const s = setTimeout(()=>{
                t = setImmediate(()=>{
                    "win32" === process.platform ? r = setImmediate(()=>A()) : A();
                });
            }, e);
            return ()=>{
                clearTimeout(s), clearImmediate(t), clearImmediate(r);
            };
        }(()=>(function(A) {
                o.destroy(A, new i);
            })(u), C);
        return u.setNoDelay(!0).once("https:" === Q ? "secureConnect" : "connect", function() {
            if (d(), l) {
                const A = l;
                l = null, A(null, this);
            }
        }).on("error", function(A) {
            if (d(), l) {
                const e = l;
                l = null, e(A);
            }
        }), u;
    };
};
