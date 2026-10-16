"use strict";
const { PoolBase: n, kClients: r, kNeedDrain: o, kAddClient: s, kGetDispatcher: a } = require("./module-1329.js"), i = require("./module-4814.js"), { InvalidArgumentError: c } = require("./module-7902.js"), l = require("./module-9361.js"), { kUrl: g, kInterceptors: E } = require("./module-8832.js"), u = require("./module-3991.js"), d = Symbol("options"), I = Symbol("connections"), h = Symbol("factory");
function Q(e, A) {
    return new i(e, A);
}
module.exports = class extends n {
    constructor(e, { connections: A, factory: t = Q, connect: n, connectTimeout: o, tls: s, maxCachedSessions: a, socketPath: i, autoSelectFamily: m, autoSelectFamilyAttemptTimeout: C, allowH2: B, ...p } = {}){
        if (super(), null != A && (!Number.isFinite(A) || A < 0)) throw new c("invalid connections");
        if ("function" != typeof t) throw new c("factory must be a function.");
        if (null != n && "function" != typeof n && "object" != typeof n) throw new c("connect must be a function or an object");
        "function" != typeof n && (n = u({
            ...s,
            maxCachedSessions: a,
            allowH2: B,
            socketPath: i,
            timeout: o,
            ...l.nodeHasAutoSelectFamily && m ? {
                autoSelectFamily: m,
                autoSelectFamilyAttemptTimeout: C
            } : void 0,
            ...n
        })), this[E] = p.interceptors && p.interceptors.Pool && Array.isArray(p.interceptors.Pool) ? p.interceptors.Pool : [], this[I] = A || null, this[g] = l.parseOrigin(e), this[d] = {
            ...l.deepClone(p),
            connect: n,
            allowH2: B
        }, this[d].interceptors = p.interceptors ? {
            ...p.interceptors
        } : void 0, this[h] = t, this.on("connectionError", (e, A, t)=>{
            for (const e of A){
                const A = this[r].indexOf(e);
                -1 !== A && this[r].splice(A, 1);
            }
        });
    }
    [a]() {
        let e = this[r].find((e)=>!e[o]);
        return e || ((!this[I] || this[r].length < this[I]) && (e = this[h](this[g], this[d]), this[s](e)), e);
    }
};
