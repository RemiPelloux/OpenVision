"use strict";
const { PoolBase: r, kClients: s, kNeedDrain: o, kAddClient: n, kGetDispatcher: i } = require("./module-10787.js"), a = require("./module-90996.js"), { InvalidArgumentError: Q } = require("./module-38238.js"), g = require("./module-55201.js"), { kUrl: E, kInterceptors: B } = require("./module-76992.js"), c = require("./module-60039.js"), I = Symbol("options"), C = Symbol("connections"), h = Symbol("factory");
function l(A, e) {
    return new a(A, e);
}
module.exports = class extends r {
    constructor(A, { connections: e, factory: t = l, connect: r, connectTimeout: o, tls: n, maxCachedSessions: i, socketPath: a, autoSelectFamily: u, autoSelectFamilyAttemptTimeout: d, allowH2: f, ...w } = {}){
        if (null != e && (!Number.isFinite(e) || e < 0)) throw new Q("invalid connections");
        if ("function" != typeof t) throw new Q("factory must be a function.");
        if (null != r && "function" != typeof r && "object" != typeof r) throw new Q("connect must be a function or an object");
        "function" != typeof r && (r = c({
            ...n,
            maxCachedSessions: i,
            allowH2: f,
            socketPath: a,
            timeout: o,
            ...u ? {
                autoSelectFamily: u,
                autoSelectFamilyAttemptTimeout: d
            } : void 0,
            ...r
        })), super(w), this[B] = w.interceptors?.Pool && Array.isArray(w.interceptors.Pool) ? w.interceptors.Pool : [], this[C] = e || null, this[E] = g.parseOrigin(A), this[I] = {
            ...g.deepClone(w),
            connect: r,
            allowH2: f
        }, this[I].interceptors = w.interceptors ? {
            ...w.interceptors
        } : void 0, this[h] = t, this.on("connectionError", (A, e, t)=>{
            for (const A of e){
                const e = this[s].indexOf(A);
                -1 !== e && this[s].splice(e, 1);
            }
        });
    }
    [i]() {
        for (const A of this[s])if (!A[o]) return A;
        if (!this[C] || this[s].length < this[C]) {
            const A = this[h](this[E], this[I]);
            return this[n](A), A;
        }
    }
};
