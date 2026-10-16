"use strict";
const { PoolBase: n, kClients: s, kNeedDrain: o, kAddClient: i, kGetDispatcher: a } = require("./module-53802.js"), c = require("./module-6602.js"), { InvalidArgumentError: l } = require("./module-48762.js"), u = require("./module-83589.js"), { kUrl: d, kInterceptors: p } = require("./module-15532.js"), m = require("./module-4003.js"), h = Symbol("options"), f = Symbol("connections"), g = Symbol("factory");
function y(e, t) {
    return new c(e, t);
}
module.exports = class extends n {
    constructor(e, { connections: t, factory: r = y, connect: n, connectTimeout: o, tls: i, maxCachedSessions: a, socketPath: c, autoSelectFamily: w, autoSelectFamilyAttemptTimeout: v, allowH2: _, ...A } = {}){
        if (super(), null != t && (!Number.isFinite(t) || t < 0)) throw new l("invalid connections");
        if ("function" != typeof r) throw new l("factory must be a function.");
        if (null != n && "function" != typeof n && "object" != typeof n) throw new l("connect must be a function or an object");
        "function" != typeof n && (n = m({
            ...i,
            maxCachedSessions: a,
            allowH2: _,
            socketPath: c,
            timeout: o,
            ...u.nodeHasAutoSelectFamily && w ? {
                autoSelectFamily: w,
                autoSelectFamilyAttemptTimeout: v
            } : void 0,
            ...n
        })), this[p] = A.interceptors && A.interceptors.Pool && Array.isArray(A.interceptors.Pool) ? A.interceptors.Pool : [], this[f] = t || null, this[d] = u.parseOrigin(e), this[h] = {
            ...u.deepClone(A),
            connect: n,
            allowH2: _
        }, this[h].interceptors = A.interceptors ? {
            ...A.interceptors
        } : void 0, this[g] = r, this.on("connectionError", (e, t, r)=>{
            for (const e of t){
                const t = this[s].indexOf(e);
                -1 !== t && this[s].splice(t, 1);
            }
        });
    }
    [a]() {
        let e = this[s].find((e)=>!e[o]);
        return e || ((!this[f] || this[s].length < this[f]) && (e = this[g](this[d], this[h]), this[i](e)), e);
    }
};
