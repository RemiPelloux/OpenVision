"use strict";
const { PoolBase: t, kClients: s, kNeedDrain: o, kAddClient: r, kGetDispatcher: i } = require("./module-1329.js"), A = require("./module-4814.js"), { InvalidArgumentError: l } = require("./module-7902.js"), c = require("./module-9361.js"), { kUrl: m, kInterceptors: d } = require("./module-8832.js"), g = require("./module-3991.js"), u = Symbol("options"), E = Symbol("connections"), p = Symbol("factory");
function T(e, n) {
    return new A(e, n);
}
module.exports = class extends t {
    constructor(e, { connections: n, factory: a = T, connect: t, connectTimeout: o, tls: r, maxCachedSessions: i, socketPath: A, autoSelectFamily: k, autoSelectFamilyAttemptTimeout: I, allowH2: h, ..._ } = {}){
        if (super(), null != n && (!Number.isFinite(n) || n < 0)) throw new l("invalid connections");
        if ("function" != typeof a) throw new l("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new l("connect must be a function or an object");
        "function" != typeof t && (t = g({
            ...r,
            maxCachedSessions: i,
            allowH2: h,
            socketPath: A,
            timeout: o,
            ...c.nodeHasAutoSelectFamily && k ? {
                autoSelectFamily: k,
                autoSelectFamilyAttemptTimeout: I
            } : void 0,
            ...t
        })), this[d] = _.interceptors && _.interceptors.Pool && Array.isArray(_.interceptors.Pool) ? _.interceptors.Pool : [], this[E] = n || null, this[m] = c.parseOrigin(e), this[u] = {
            ...c.deepClone(_),
            connect: t,
            allowH2: h
        }, this[u].interceptors = _.interceptors ? {
            ..._.interceptors
        } : void 0, this[p] = a, this.on("connectionError", (e, n, a)=>{
            for (const e of n){
                const n = this[s].indexOf(e);
                -1 !== n && this[s].splice(n, 1);
            }
        });
    }
    [i]() {
        let e = this[s].find((e)=>!e[o]);
        return e || ((!this[E] || this[s].length < this[E]) && (e = this[p](this[m], this[u]), this[r](e)), e);
    }
};
