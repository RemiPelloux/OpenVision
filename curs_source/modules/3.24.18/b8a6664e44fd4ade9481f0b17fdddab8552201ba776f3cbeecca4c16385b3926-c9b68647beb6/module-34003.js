"use strict";
const { PoolBase: r, kClients: s, kNeedDrain: o, kAddClient: n, kGetDispatcher: i } = require("./module-11329.js"), E = require("./module-54814.js"), { InvalidArgumentError: Q } = require("./module-95521.js"), g = require("./module-9361.js"), { kUrl: C, kInterceptors: B } = require("./module-58832.js"), a = require("./module-3991.js"), I = Symbol("options"), c = Symbol("connections"), h = Symbol("factory");
function l(A, e) {
    return new E(A, e);
}
module.exports = class extends r {
    constructor(A, { connections: e, factory: t = l, connect: r, connectTimeout: o, tls: n, maxCachedSessions: i, socketPath: E, autoSelectFamily: u, autoSelectFamilyAttemptTimeout: d, allowH2: f, ...y } = {}){
        if (super(), null != e && (!Number.isFinite(e) || e < 0)) throw new Q("invalid connections");
        if ("function" != typeof t) throw new Q("factory must be a function.");
        if (null != r && "function" != typeof r && "object" != typeof r) throw new Q("connect must be a function or an object");
        "function" != typeof r && (r = a({
            ...n,
            maxCachedSessions: i,
            allowH2: f,
            socketPath: E,
            timeout: o,
            ...g.nodeHasAutoSelectFamily && u ? {
                autoSelectFamily: u,
                autoSelectFamilyAttemptTimeout: d
            } : void 0,
            ...r
        })), this[B] = y.interceptors && y.interceptors.Pool && Array.isArray(y.interceptors.Pool) ? y.interceptors.Pool : [], this[c] = e || null, this[C] = g.parseOrigin(A), this[I] = {
            ...g.deepClone(y),
            connect: r,
            allowH2: f
        }, this[I].interceptors = y.interceptors ? {
            ...y.interceptors
        } : void 0, this[h] = t, this.on("connectionError", (A, e, t)=>{
            for (const A of e){
                const e = this[s].indexOf(A);
                -1 !== e && this[s].splice(e, 1);
            }
        });
    }
    [i]() {
        let A = this[s].find((A)=>!A[o]);
        return A || ((!this[c] || this[s].length < this[c]) && (A = this[h](this[C], this[I]), this[n](A)), A);
    }
};
