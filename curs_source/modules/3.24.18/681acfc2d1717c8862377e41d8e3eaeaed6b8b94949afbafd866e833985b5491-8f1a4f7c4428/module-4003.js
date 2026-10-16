"use strict";
const { PoolBase: n, kClients: r, kNeedDrain: o, kAddClient: s, kGetDispatcher: i } = require("./module-1329.js"), a = require("./module-4814.js"), { InvalidArgumentError: c } = require("./module-7902.js"), l = require("./module-9361.js"), { kUrl: u, kInterceptors: g } = require("./module-8832.js"), E = require("./module-3991.js"), h = Symbol("options"), d = Symbol("connections"), I = Symbol("factory");
function B(e, t) {
    return new a(e, t);
}
module.exports = class extends n {
    constructor(e, { connections: t, factory: A = B, connect: n, connectTimeout: o, tls: s, maxCachedSessions: i, socketPath: a, autoSelectFamily: Q, autoSelectFamilyAttemptTimeout: f, allowH2: C, ...p } = {}){
        if (super(), null != t && (!Number.isFinite(t) || t < 0)) throw new c("invalid connections");
        if ("function" != typeof A) throw new c("factory must be a function.");
        if (null != n && "function" != typeof n && "object" != typeof n) throw new c("connect must be a function or an object");
        "function" != typeof n && (n = E({
            ...s,
            maxCachedSessions: i,
            allowH2: C,
            socketPath: a,
            timeout: o,
            ...l.nodeHasAutoSelectFamily && Q ? {
                autoSelectFamily: Q,
                autoSelectFamilyAttemptTimeout: f
            } : void 0,
            ...n
        })), this[g] = p.interceptors && p.interceptors.Pool && Array.isArray(p.interceptors.Pool) ? p.interceptors.Pool : [], this[d] = t || null, this[u] = l.parseOrigin(e), this[h] = {
            ...l.deepClone(p),
            connect: n,
            allowH2: C
        }, this[h].interceptors = p.interceptors ? {
            ...p.interceptors
        } : void 0, this[I] = A, this.on("connectionError", (e, t, A)=>{
            for (const e of t){
                const t = this[r].indexOf(e);
                -1 !== t && this[r].splice(t, 1);
            }
        });
    }
    [i]() {
        let e = this[r].find((e)=>!e[o]);
        return e || ((!this[d] || this[r].length < this[d]) && (e = this[I](this[u], this[h]), this[s](e)), e);
    }
};
