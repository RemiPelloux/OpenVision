"use strict";
const r = require(77030), s = require(56970), o = require("./module-55201.js"), { InvalidArgumentError: n, ConnectTimeoutError: i } = require("./module-38238.js"), a = require("./module-29254.js");
function Q() {}
let g, E;
E = !global.FinalizationRegistry || process.env.NODE_V8_COVERAGE || process.env.UNDICI_NO_FG ? class {
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
} : class {
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
};
const B = "win32" === process.platform ? (A, e)=>{
    if (!e.timeout) return Q;
    let t = null, r = null;
    const s = a.setFastTimeout(()=>{
        t = setImmediate(()=>{
            r = setImmediate(()=>c(A.deref(), e));
        });
    }, e.timeout);
    return ()=>{
        a.clearFastTimeout(s), clearImmediate(t), clearImmediate(r);
    };
} : (A, e)=>{
    if (!e.timeout) return Q;
    let t = null;
    const r = a.setFastTimeout(()=>{
        t = setImmediate(()=>{
            c(A.deref(), e);
        });
    }, e.timeout);
    return ()=>{
        a.clearFastTimeout(r), clearImmediate(t);
    };
};
function c(A, e) {
    if (null == A) return;
    let t = "Connect Timeout Error";
    Array.isArray(A.autoSelectFamilyAttemptedAddresses) ? t += ` (attempted addresses: ${A.autoSelectFamilyAttemptedAddresses.join(", ")},` : t += ` (attempted address: ${e.hostname}:${e.port},`, t += ` timeout: ${e.timeout}ms)`, o.destroy(A, new i(t));
}
module.exports = function({ allowH2: A, maxCachedSessions: e, socketPath: i, timeout: a, session: Q, ...c }) {
    if (null != e && (!Number.isInteger(e) || e < 0)) throw new n("maxCachedSessions must be a positive integer or zero");
    const I = {
        path: i,
        ...c
    }, C = new E(e ?? 100);
    return a = a ?? 1e4, A = null != A && A, function({ hostname: e, host: n, protocol: i, port: E, servername: c, localAddress: h, httpSocket: l }, u) {
        let d;
        if ("https:" === i) {
            g || (g = require(41692));
            const r = (c = c || I.servername || o.getServerName(n) || null) || e;
            s(r);
            const i = Q || C.get(r) || null;
            E = E || 443, d = g.connect({
                highWaterMark: 16384,
                ...I,
                servername: c,
                session: i,
                localAddress: h,
                ALPNProtocols: A ? [
                    "http/1.1",
                    "h2"
                ] : [
                    "http/1.1"
                ],
                socket: l,
                port: E,
                host: e
            }), d.on("session", function(A) {
                C.set(r, A);
            });
        } else s(!l, "httpSocket can only be sent on TLS update"), E = E || 80, d = r.connect({
            highWaterMark: 65536,
            ...I,
            localAddress: h,
            port: E,
            host: e
        });
        if (null == I.keepAlive || I.keepAlive) {
            const A = void 0 === I.keepAliveInitialDelay ? 6e4 : I.keepAliveInitialDelay;
            d.setKeepAlive(!0, A);
        }
        const f = B(new WeakRef(d), {
            timeout: a,
            hostname: e,
            port: E
        });
        return d.setNoDelay(!0).once("https:" === i ? "secureConnect" : "connect", function() {
            if (queueMicrotask(f), u) {
                const A = u;
                u = null, A(null, this);
            }
        }).on("error", function(A) {
            if (queueMicrotask(f), u) {
                const e = u;
                u = null, e(A);
            }
        }), d;
    };
};
