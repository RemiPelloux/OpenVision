"use strict";
const { BalancedPoolMissingUpstreamError: n, InvalidArgumentError: s } = require("./module-48762.js"), { PoolBase: o, kClients: i, kNeedDrain: a, kAddClient: c, kRemoveClient: l, kGetDispatcher: u } = require("./module-53802.js"), d = require("./module-26215.js"), { kUrl: p, kInterceptors: m } = require("./module-15532.js"), { parseOrigin: h } = require("./module-83589.js"), f = Symbol("factory"), g = Symbol("options"), y = Symbol("kGreatestCommonDivisor"), w = Symbol("kCurrentWeight"), v = Symbol("kIndex"), _ = Symbol("kWeight"), A = Symbol("kMaxWeightPerServer"), S = Symbol("kErrorPenalty");
function b(e, t) {
    return 0 === t ? e : b(t, e % t);
}
function E(e, t) {
    return new d(e, t);
}
module.exports = class extends o {
    constructor(e = [], { factory: t = E, ...r } = {}){
        if (super(), this[g] = r, this[v] = -1, this[w] = 0, this[A] = this[g].maxWeightPerServer || 100, this[S] = this[g].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof t) throw new s("factory must be a function.");
        this[m] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[f] = t;
        for (const t of e)this.addUpstream(t);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const t = h(e).origin;
        if (this[i].find((e)=>e[p].origin === t && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const r = this[f](t, Object.assign({}, this[g]));
        this[c](r), r.on("connect", ()=>{
            r[_] = Math.min(this[A], r[_] + this[S]);
        }), r.on("connectionError", ()=>{
            r[_] = Math.max(1, r[_] - this[S]), this._updateBalancedPoolStats();
        }), r.on("disconnect", (...e)=>{
            const t = e[2];
            t && "UND_ERR_SOCKET" === t.code && (r[_] = Math.max(1, r[_] - this[S]), this._updateBalancedPoolStats());
        });
        for (const e of this[i])e[_] = this[A];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[y] = this[i].map((e)=>e[_]).reduce(b, 0);
    }
    removeUpstream(e) {
        const t = h(e).origin, r = this[i].find((e)=>e[p].origin === t && !0 !== e.closed && !0 !== e.destroyed);
        return r && this[l](r), this;
    }
    get upstreams() {
        return this[i].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[p].origin);
    }
    [u]() {
        if (0 === this[i].length) throw new n;
        if (!this[i].find((e)=>!e[a] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[i].map((e)=>e[a]).reduce((e, t)=>e && t, !0)) return;
        let e = 0, t = this[i].findIndex((e)=>!e[a]);
        for(; e++ < this[i].length;){
            this[v] = (this[v] + 1) % this[i].length;
            const e = this[i][this[v]];
            if (e[_] > this[i][t][_] && !e[a] && (t = this[v]), 0 === this[v] && (this[w] = this[w] - this[y], this[w] <= 0 && (this[w] = this[A])), e[_] >= this[w] && !e[a]) return e;
        }
        return this[w] = this[i][t][_], this[v] = t, this[i][t];
    }
};
