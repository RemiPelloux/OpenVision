"use strict";
const { BalancedPoolMissingUpstreamError: r, InvalidArgumentError: s } = require("./module-38238.js"), { PoolBase: o, kClients: n, kNeedDrain: i, kAddClient: a, kRemoveClient: Q, kGetDispatcher: g } = require("./module-10787.js"), E = require("./module-3817.js"), { kUrl: B, kInterceptors: c } = require("./module-76992.js"), { parseOrigin: I } = require("./module-55201.js"), C = Symbol("factory"), h = Symbol("options"), l = Symbol("kGreatestCommonDivisor"), u = Symbol("kCurrentWeight"), d = Symbol("kIndex"), f = Symbol("kWeight"), w = Symbol("kMaxWeightPerServer"), y = Symbol("kErrorPenalty");
function D(A, e) {
    if (0 === A) return e;
    for(; 0 !== e;){
        const t = e;
        e = A % e, A = t;
    }
    return A;
}
function p(A, e) {
    return new E(A, e);
}
module.exports = class extends o {
    constructor(A = [], { factory: e = p, ...t } = {}){
        if (super(), this[h] = t, this[d] = -1, this[u] = 0, this[w] = this[h].maxWeightPerServer || 100, this[y] = this[h].errorPenalty || 15, Array.isArray(A) || (A = [
            A
        ]), "function" != typeof e) throw new s("factory must be a function.");
        this[c] = t.interceptors?.BalancedPool && Array.isArray(t.interceptors.BalancedPool) ? t.interceptors.BalancedPool : [], this[C] = e;
        for (const e of A)this.addUpstream(e);
        this._updateBalancedPoolStats();
    }
    addUpstream(A) {
        const e = I(A).origin;
        if (this[n].find((A)=>A[B].origin === e && !0 !== A.closed && !0 !== A.destroyed)) return this;
        const t = this[C](e, Object.assign({}, this[h]));
        this[a](t), t.on("connect", ()=>{
            t[f] = Math.min(this[w], t[f] + this[y]);
        }), t.on("connectionError", ()=>{
            t[f] = Math.max(1, t[f] - this[y]), this._updateBalancedPoolStats();
        }), t.on("disconnect", (...A)=>{
            const e = A[2];
            e && "UND_ERR_SOCKET" === e.code && (t[f] = Math.max(1, t[f] - this[y]), this._updateBalancedPoolStats());
        });
        for (const A of this[n])A[f] = this[w];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        let A = 0;
        for(let e = 0; e < this[n].length; e++)A = D(this[n][e][f], A);
        this[l] = A;
    }
    removeUpstream(A) {
        const e = I(A).origin, t = this[n].find((A)=>A[B].origin === e && !0 !== A.closed && !0 !== A.destroyed);
        return t && this[Q](t), this;
    }
    get upstreams() {
        return this[n].filter((A)=>!0 !== A.closed && !0 !== A.destroyed).map((A)=>A[B].origin);
    }
    [g]() {
        if (0 === this[n].length) throw new r;
        if (!this[n].find((A)=>!A[i] && !0 !== A.closed && !0 !== A.destroyed)) return;
        if (this[n].map((A)=>A[i]).reduce((A, e)=>A && e, !0)) return;
        let A = 0, e = this[n].findIndex((A)=>!A[i]);
        for(; A++ < this[n].length;){
            this[d] = (this[d] + 1) % this[n].length;
            const A = this[n][this[d]];
            if (A[f] > this[n][e][f] && !A[i] && (e = this[d]), 0 === this[d] && (this[u] = this[u] - this[l], this[u] <= 0 && (this[u] = this[w])), A[f] >= this[u] && !A[i]) return A;
        }
        return this[u] = this[n][e][f], this[d] = e, this[n][e];
    }
};
