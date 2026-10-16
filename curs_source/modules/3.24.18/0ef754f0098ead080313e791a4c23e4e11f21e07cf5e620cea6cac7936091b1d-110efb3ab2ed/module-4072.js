"use strict";
const { BalancedPoolMissingUpstreamError: t, InvalidArgumentError: s } = require("./module-7902.js"), { PoolBase: o, kClients: r, kNeedDrain: i, kAddClient: l, kRemoveClient: d, kGetDispatcher: m } = require("./module-1329.js"), c = require("./module-4003.js"), { kUrl: p, kInterceptors: A } = require("./module-8832.js"), { parseOrigin: u } = require("./module-9361.js"), g = Symbol("factory"), T = Symbol("options"), h = Symbol("kGreatestCommonDivisor"), k = Symbol("kCurrentWeight"), _ = Symbol("kIndex"), E = Symbol("kWeight"), f = Symbol("kMaxWeightPerServer"), C = Symbol("kErrorPenalty");
function I(e, a) {
    return 0 === a ? e : I(a, e % a);
}
function v(e, a) {
    return new c(e, a);
}
module.exports = class extends o {
    constructor(e = [], { factory: a = v, ...n } = {}){
        if (super(), this[T] = n, this[_] = -1, this[k] = 0, this[f] = this[T].maxWeightPerServer || 100, this[C] = this[T].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof a) throw new s("factory must be a function.");
        this[A] = n.interceptors && n.interceptors.BalancedPool && Array.isArray(n.interceptors.BalancedPool) ? n.interceptors.BalancedPool : [], this[g] = a;
        for (const a of e)this.addUpstream(a);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const a = u(e).origin;
        if (this[r].find((e)=>e[p].origin === a && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const n = this[g](a, Object.assign({}, this[T]));
        this[l](n), n.on("connect", ()=>{
            n[E] = Math.min(this[f], n[E] + this[C]);
        }), n.on("connectionError", ()=>{
            n[E] = Math.max(1, n[E] - this[C]), this._updateBalancedPoolStats();
        }), n.on("disconnect", (...e)=>{
            const a = e[2];
            a && "UND_ERR_SOCKET" === a.code && (n[E] = Math.max(1, n[E] - this[C]), this._updateBalancedPoolStats());
        });
        for (const e of this[r])e[E] = this[f];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[h] = this[r].map((e)=>e[E]).reduce(I, 0);
    }
    removeUpstream(e) {
        const a = u(e).origin, n = this[r].find((e)=>e[p].origin === a && !0 !== e.closed && !0 !== e.destroyed);
        return n && this[d](n), this;
    }
    get upstreams() {
        return this[r].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[p].origin);
    }
    [m]() {
        if (0 === this[r].length) throw new t;
        if (!this[r].find((e)=>!e[i] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[r].map((e)=>e[i]).reduce((e, a)=>e && a, !0)) return;
        let e = 0, a = this[r].findIndex((e)=>!e[i]);
        for(; e++ < this[r].length;){
            this[_] = (this[_] + 1) % this[r].length;
            const e = this[r][this[_]];
            if (e[E] > this[r][a][E] && !e[i] && (a = this[_]), 0 === this[_] && (this[k] = this[k] - this[h], this[k] <= 0 && (this[k] = this[f])), e[E] >= this[k] && !e[i]) return e;
        }
        return this[k] = this[r][a][E], this[_] = a, this[r][a];
    }
};
