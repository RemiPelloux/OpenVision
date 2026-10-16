"use strict";
const { BalancedPoolMissingUpstreamError: n, InvalidArgumentError: r } = require("./module-7902.js"), { PoolBase: o, kClients: s, kNeedDrain: a, kAddClient: i, kRemoveClient: c, kGetDispatcher: l } = require("./module-1329.js"), g = require("./module-4003.js"), { kUrl: E, kInterceptors: u } = require("./module-8832.js"), { parseOrigin: d } = require("./module-9361.js"), I = Symbol("factory"), h = Symbol("options"), Q = Symbol("kGreatestCommonDivisor"), m = Symbol("kCurrentWeight"), C = Symbol("kIndex"), B = Symbol("kWeight"), p = Symbol("kMaxWeightPerServer"), f = Symbol("kErrorPenalty");
function y(e, A) {
    return 0 === A ? e : y(A, e % A);
}
function T(e, A) {
    return new g(e, A);
}
module.exports = class extends o {
    constructor(e = [], { factory: A = T, ...t } = {}){
        if (super(), this[h] = t, this[C] = -1, this[m] = 0, this[p] = this[h].maxWeightPerServer || 100, this[f] = this[h].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof A) throw new r("factory must be a function.");
        this[u] = t.interceptors && t.interceptors.BalancedPool && Array.isArray(t.interceptors.BalancedPool) ? t.interceptors.BalancedPool : [], this[I] = A;
        for (const A of e)this.addUpstream(A);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const A = d(e).origin;
        if (this[s].find((e)=>e[E].origin === A && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const t = this[I](A, Object.assign({}, this[h]));
        this[i](t), t.on("connect", ()=>{
            t[B] = Math.min(this[p], t[B] + this[f]);
        }), t.on("connectionError", ()=>{
            t[B] = Math.max(1, t[B] - this[f]), this._updateBalancedPoolStats();
        }), t.on("disconnect", (...e)=>{
            const A = e[2];
            A && "UND_ERR_SOCKET" === A.code && (t[B] = Math.max(1, t[B] - this[f]), this._updateBalancedPoolStats());
        });
        for (const e of this[s])e[B] = this[p];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[Q] = this[s].map((e)=>e[B]).reduce(y, 0);
    }
    removeUpstream(e) {
        const A = d(e).origin, t = this[s].find((e)=>e[E].origin === A && !0 !== e.closed && !0 !== e.destroyed);
        return t && this[c](t), this;
    }
    get upstreams() {
        return this[s].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[E].origin);
    }
    [l]() {
        if (0 === this[s].length) throw new n;
        if (!this[s].find((e)=>!e[a] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[s].map((e)=>e[a]).reduce((e, A)=>e && A, !0)) return;
        let e = 0, A = this[s].findIndex((e)=>!e[a]);
        for(; e++ < this[s].length;){
            this[C] = (this[C] + 1) % this[s].length;
            const e = this[s][this[C]];
            if (e[B] > this[s][A][B] && !e[a] && (A = this[C]), 0 === this[C] && (this[m] = this[m] - this[Q], this[m] <= 0 && (this[m] = this[p])), e[B] >= this[m] && !e[a]) return e;
        }
        return this[m] = this[s][A][B], this[C] = A, this[s][A];
    }
};
