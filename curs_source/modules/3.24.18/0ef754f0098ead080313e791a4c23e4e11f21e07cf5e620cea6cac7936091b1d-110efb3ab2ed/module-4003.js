"use strict";
const { PoolBase: t, kClients: s, kNeedDrain: o, kAddClient: r, kGetDispatcher: i } = require("./module-1329.js"), l = require("./module-4814.js"), { InvalidArgumentError: d } = require("./module-7902.js"), m = require("./module-9361.js"), { kUrl: c, kInterceptors: p } = require("./module-8832.js"), A = require("./module-3991.js"), u = Symbol("options"), g = Symbol("connections"), T = Symbol("factory");
function h(e, a) {
    return new l(e, a);
}
module.exports = class extends t {
    constructor(e, { connections: a, factory: n = h, connect: t, connectTimeout: o, tls: r, maxCachedSessions: i, socketPath: l, autoSelectFamily: k, autoSelectFamilyAttemptTimeout: _, allowH2: E, ...f } = {}){
        if (super(), null != a && (!Number.isFinite(a) || a < 0)) throw new d("invalid connections");
        if ("function" != typeof n) throw new d("factory must be a function.");
        if (null != t && "function" != typeof t && "object" != typeof t) throw new d("connect must be a function or an object");
        "function" != typeof t && (t = A({
            ...r,
            maxCachedSessions: i,
            allowH2: E,
            socketPath: l,
            timeout: o,
            ...m.nodeHasAutoSelectFamily && k ? {
                autoSelectFamily: k,
                autoSelectFamilyAttemptTimeout: _
            } : void 0,
            ...t
        })), this[p] = f.interceptors && f.interceptors.Pool && Array.isArray(f.interceptors.Pool) ? f.interceptors.Pool : [], this[g] = a || null, this[c] = m.parseOrigin(e), this[u] = {
            ...m.deepClone(f),
            connect: t,
            allowH2: E
        }, this[u].interceptors = f.interceptors ? {
            ...f.interceptors
        } : void 0, this[T] = n, this.on("connectionError", (e, a, n)=>{
            for (const e of a){
                const a = this[s].indexOf(e);
                -1 !== a && this[s].splice(a, 1);
            }
        });
    }
    [i]() {
        let e = this[s].find((e)=>!e[o]);
        return e || ((!this[g] || this[s].length < this[g]) && (e = this[T](this[c], this[u]), this[r](e)), e);
    }
};
