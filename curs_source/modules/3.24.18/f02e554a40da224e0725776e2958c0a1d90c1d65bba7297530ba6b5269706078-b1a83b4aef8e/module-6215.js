"use strict";
const { PoolBase: n, kClients: s, kNeedDrain: i, kAddClient: o, kGetDispatcher: a } = require("./module-1421.js"), u = require("./module-6602.js"), { InvalidArgumentError: c } = require("./module-8762.js"), l = require("./module-3589.js"), { kUrl: m, kInterceptors: d } = require("./module-5532.js"), f = require("./module-4003.js"), p = Symbol("options"), h = Symbol("connections"), g = Symbol("factory");
function A(t, e) {
    return new u(t, e);
}
module.exports = class extends n {
    constructor(t, { connections: e, factory: r = A, connect: n, connectTimeout: i, tls: o, maxCachedSessions: a, socketPath: u, autoSelectFamily: _, autoSelectFamilyAttemptTimeout: y, allowH2: w, ...S } = {}){
        if (super(), null != e && (!Number.isFinite(e) || e < 0)) throw new c("invalid connections");
        if ("function" != typeof r) throw new c("factory must be a function.");
        if (null != n && "function" != typeof n && "object" != typeof n) throw new c("connect must be a function or an object");
        "function" != typeof n && (n = f({
            ...o,
            maxCachedSessions: a,
            allowH2: w,
            socketPath: u,
            timeout: i,
            ...l.nodeHasAutoSelectFamily && _ ? {
                autoSelectFamily: _,
                autoSelectFamilyAttemptTimeout: y
            } : void 0,
            ...n
        })), this[d] = S.interceptors && S.interceptors.Pool && Array.isArray(S.interceptors.Pool) ? S.interceptors.Pool : [], this[h] = e || null, this[m] = l.parseOrigin(t), this[p] = {
            ...l.deepClone(S),
            connect: n,
            allowH2: w
        }, this[p].interceptors = S.interceptors ? {
            ...S.interceptors
        } : void 0, this[g] = r, this.on("connectionError", (t, e, r)=>{
            for (const t of e){
                const e = this[s].indexOf(t);
                -1 !== e && this[s].splice(e, 1);
            }
        });
    }
    [a]() {
        let t = this[s].find((t)=>!t[i]);
        return t || ((!this[h] || this[s].length < this[h]) && (t = this[g](this[m], this[p]), this[o](t)), t);
    }
};
