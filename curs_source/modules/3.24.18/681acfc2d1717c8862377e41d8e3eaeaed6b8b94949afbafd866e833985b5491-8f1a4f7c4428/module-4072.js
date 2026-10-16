"use strict";
const { BalancedPoolMissingUpstreamError: n, InvalidArgumentError: r } = require("./module-7902.js"), { PoolBase: o, kClients: s, kNeedDrain: i, kAddClient: a, kRemoveClient: c, kGetDispatcher: l } = require("./module-1329.js"), u = require("./module-4003.js"), { kUrl: g, kInterceptors: E } = require("./module-8832.js"), { parseOrigin: h } = require("./module-9361.js"), d = Symbol("factory"), I = Symbol("options"), B = Symbol("kGreatestCommonDivisor"), Q = Symbol("kCurrentWeight"), f = Symbol("kIndex"), C = Symbol("kWeight"), p = Symbol("kMaxWeightPerServer"), m = Symbol("kErrorPenalty");
function y(e, t) {
    return 0 === t ? e : y(t, e % t);
}
function w(e, t) {
    return new u(e, t);
}
module.exports = class extends o {
    constructor(e = [], { factory: t = w, ...A } = {}){
        if (super(), this[I] = A, this[f] = -1, this[Q] = 0, this[p] = this[I].maxWeightPerServer || 100, this[m] = this[I].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof t) throw new r("factory must be a function.");
        this[E] = A.interceptors && A.interceptors.BalancedPool && Array.isArray(A.interceptors.BalancedPool) ? A.interceptors.BalancedPool : [], this[d] = t;
        for (const t of e)this.addUpstream(t);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const t = h(e).origin;
        if (this[s].find((e)=>e[g].origin === t && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const A = this[d](t, Object.assign({}, this[I]));
        this[a](A), A.on("connect", ()=>{
            A[C] = Math.min(this[p], A[C] + this[m]);
        }), A.on("connectionError", ()=>{
            A[C] = Math.max(1, A[C] - this[m]), this._updateBalancedPoolStats();
        }), A.on("disconnect", (...e)=>{
            const t = e[2];
            t && "UND_ERR_SOCKET" === t.code && (A[C] = Math.max(1, A[C] - this[m]), this._updateBalancedPoolStats());
        });
        for (const e of this[s])e[C] = this[p];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[B] = this[s].map((e)=>e[C]).reduce(y, 0);
    }
    removeUpstream(e) {
        const t = h(e).origin, A = this[s].find((e)=>e[g].origin === t && !0 !== e.closed && !0 !== e.destroyed);
        return A && this[c](A), this;
    }
    get upstreams() {
        return this[s].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[g].origin);
    }
    [l]() {
        if (0 === this[s].length) throw new n;
        if (!this[s].find((e)=>!e[i] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[s].map((e)=>e[i]).reduce((e, t)=>e && t, !0)) return;
        let e = 0, t = this[s].findIndex((e)=>!e[i]);
        for(; e++ < this[s].length;){
            this[f] = (this[f] + 1) % this[s].length;
            const e = this[s][this[f]];
            if (e[C] > this[s][t][C] && !e[i] && (t = this[f]), 0 === this[f] && (this[Q] = this[Q] - this[B], this[Q] <= 0 && (this[Q] = this[p])), e[C] >= this[Q] && !e[i]) return e;
        }
        return this[Q] = this[s][t][C], this[f] = t, this[s][t];
    }
};
