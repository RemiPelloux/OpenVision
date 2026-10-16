"use strict";
const { BalancedPoolMissingUpstreamError: r, InvalidArgumentError: s } = require("./module-95521.js"), { PoolBase: o, kClients: n, kNeedDrain: i, kAddClient: E, kRemoveClient: Q, kGetDispatcher: g } = require("./module-11329.js"), C = require("./module-34003.js"), { kUrl: B, kInterceptors: a } = require("./module-58832.js"), { parseOrigin: I } = require("./module-9361.js"), c = Symbol("factory"), h = Symbol("options"), l = Symbol("kGreatestCommonDivisor"), u = Symbol("kCurrentWeight"), d = Symbol("kIndex"), f = Symbol("kWeight"), y = Symbol("kMaxWeightPerServer"), D = Symbol("kErrorPenalty");
function R(A, e) {
    return 0 === e ? A : R(e, A % e);
}
function w(A, e) {
    return new C(A, e);
}
module.exports = class extends o {
    constructor(A = [], { factory: e = w, ...t } = {}){
        if (super(), this[h] = t, this[d] = -1, this[u] = 0, this[y] = this[h].maxWeightPerServer || 100, this[D] = this[h].errorPenalty || 15, Array.isArray(A) || (A = [
            A
        ]), "function" != typeof e) throw new s("factory must be a function.");
        this[a] = t.interceptors && t.interceptors.BalancedPool && Array.isArray(t.interceptors.BalancedPool) ? t.interceptors.BalancedPool : [], this[c] = e;
        for (const e of A)this.addUpstream(e);
        this._updateBalancedPoolStats();
    }
    addUpstream(A) {
        const e = I(A).origin;
        if (this[n].find((A)=>A[B].origin === e && !0 !== A.closed && !0 !== A.destroyed)) return this;
        const t = this[c](e, Object.assign({}, this[h]));
        this[E](t), t.on("connect", ()=>{
            t[f] = Math.min(this[y], t[f] + this[D]);
        }), t.on("connectionError", ()=>{
            t[f] = Math.max(1, t[f] - this[D]), this._updateBalancedPoolStats();
        }), t.on("disconnect", (...A)=>{
            const e = A[2];
            e && "UND_ERR_SOCKET" === e.code && (t[f] = Math.max(1, t[f] - this[D]), this._updateBalancedPoolStats());
        });
        for (const A of this[n])A[f] = this[y];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[l] = this[n].map((A)=>A[f]).reduce(R, 0);
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
            if (A[f] > this[n][e][f] && !A[i] && (e = this[d]), 0 === this[d] && (this[u] = this[u] - this[l], this[u] <= 0 && (this[u] = this[y])), A[f] >= this[u] && !A[i]) return A;
        }
        return this[u] = this[n][e][f], this[d] = e, this[n][e];
    }
};
