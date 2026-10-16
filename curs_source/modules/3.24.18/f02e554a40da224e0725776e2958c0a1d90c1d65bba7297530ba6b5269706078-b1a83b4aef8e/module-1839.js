"use strict";
const { BalancedPoolMissingUpstreamError: n, InvalidArgumentError: s } = require("./module-8762.js"), { PoolBase: i, kClients: o, kNeedDrain: a, kAddClient: u, kRemoveClient: c, kGetDispatcher: l } = require("./module-1421.js"), m = require("./module-6215.js"), { kUrl: d, kInterceptors: f } = require("./module-5532.js"), { parseOrigin: p } = require("./module-3589.js"), h = Symbol("factory"), g = Symbol("options"), A = Symbol("kGreatestCommonDivisor"), _ = Symbol("kCurrentWeight"), y = Symbol("kIndex"), w = Symbol("kWeight"), S = Symbol("kMaxWeightPerServer"), J = Symbol("kErrorPenalty");
function B(t, e) {
    return 0 === e ? t : B(e, t % e);
}
function E(t, e) {
    return new m(t, e);
}
module.exports = class extends i {
    constructor(t = [], { factory: e = E, ...r } = {}){
        if (super(), this[g] = r, this[y] = -1, this[_] = 0, this[S] = this[g].maxWeightPerServer || 100, this[J] = this[g].errorPenalty || 15, Array.isArray(t) || (t = [
            t
        ]), "function" != typeof e) throw new s("factory must be a function.");
        this[f] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[h] = e;
        for (const e of t)this.addUpstream(e);
        this._updateBalancedPoolStats();
    }
    addUpstream(t) {
        const e = p(t).origin;
        if (this[o].find((t)=>t[d].origin === e && !0 !== t.closed && !0 !== t.destroyed)) return this;
        const r = this[h](e, Object.assign({}, this[g]));
        this[u](r), r.on("connect", ()=>{
            r[w] = Math.min(this[S], r[w] + this[J]);
        }), r.on("connectionError", ()=>{
            r[w] = Math.max(1, r[w] - this[J]), this._updateBalancedPoolStats();
        }), r.on("disconnect", (...t)=>{
            const e = t[2];
            e && "UND_ERR_SOCKET" === e.code && (r[w] = Math.max(1, r[w] - this[J]), this._updateBalancedPoolStats());
        });
        for (const t of this[o])t[w] = this[S];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[A] = this[o].map((t)=>t[w]).reduce(B, 0);
    }
    removeUpstream(t) {
        const e = p(t).origin, r = this[o].find((t)=>t[d].origin === e && !0 !== t.closed && !0 !== t.destroyed);
        return r && this[c](r), this;
    }
    get upstreams() {
        return this[o].filter((t)=>!0 !== t.closed && !0 !== t.destroyed).map((t)=>t[d].origin);
    }
    [l]() {
        if (0 === this[o].length) throw new n;
        if (!this[o].find((t)=>!t[a] && !0 !== t.closed && !0 !== t.destroyed)) return;
        if (this[o].map((t)=>t[a]).reduce((t, e)=>t && e, !0)) return;
        let t = 0, e = this[o].findIndex((t)=>!t[a]);
        for(; t++ < this[o].length;){
            this[y] = (this[y] + 1) % this[o].length;
            const t = this[o][this[y]];
            if (t[w] > this[o][e][w] && !t[a] && (e = this[y]), 0 === this[y] && (this[_] = this[_] - this[A], this[_] <= 0 && (this[_] = this[S])), t[w] >= this[_] && !t[a]) return t;
        }
        return this[_] = this[o][e][w], this[y] = e, this[o][e];
    }
};
