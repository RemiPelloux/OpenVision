"use strict";
const { PoolBase: a, kClients: s, kNeedDrain: o, kAddClient: r, kGetDispatcher: i } = require("./module-1329.js"), A = require("./module-4814.js"), { InvalidArgumentError: c } = require("./module-7902.js"), l = require("./module-9361.js"), { kUrl: d, kInterceptors: m } = require("./module-8832.js"), u = require("./module-3991.js"), g = Symbol("options"), p = Symbol("connections"), E = Symbol("factory");
function h(e, n) {
    return new A(e, n);
}
module.exports = class extends a {
    constructor(e, { connections: n, factory: t = h, connect: a, connectTimeout: o, tls: r, maxCachedSessions: i, socketPath: A, autoSelectFamily: T, autoSelectFamilyAttemptTimeout: k, allowH2: f, ..._ } = {}){
        if (super(), null != n && (!Number.isFinite(n) || n < 0)) throw new c("invalid connections");
        if ("function" != typeof t) throw new c("factory must be a function.");
        if (null != a && "function" != typeof a && "object" != typeof a) throw new c("connect must be a function or an object");
        "function" != typeof a && (a = u({
            ...r,
            maxCachedSessions: i,
            allowH2: f,
            socketPath: A,
            timeout: o,
            ...l.nodeHasAutoSelectFamily && T ? {
                autoSelectFamily: T,
                autoSelectFamilyAttemptTimeout: k
            } : void 0,
            ...a
        })), this[m] = _.interceptors && _.interceptors.Pool && Array.isArray(_.interceptors.Pool) ? _.interceptors.Pool : [], this[p] = n || null, this[d] = l.parseOrigin(e), this[g] = {
            ...l.deepClone(_),
            connect: a,
            allowH2: f
        }, this[g].interceptors = _.interceptors ? {
            ..._.interceptors
        } : void 0, this[E] = t, this.on("connectionError", (e, n, t)=>{
            for (const e of n){
                const n = this[s].indexOf(e);
                -1 !== n && this[s].splice(n, 1);
            }
        });
    }
    [i]() {
        let e = this[s].find((e)=>!e[o]);
        return e || ((!this[p] || this[s].length < this[p]) && (e = this[E](this[d], this[g]), this[r](e)), e);
    }
};
