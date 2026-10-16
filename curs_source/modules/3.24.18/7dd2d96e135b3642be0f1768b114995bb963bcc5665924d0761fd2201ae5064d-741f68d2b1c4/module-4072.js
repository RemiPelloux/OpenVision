"use strict";
const { BalancedPoolMissingUpstreamError: a, InvalidArgumentError: s } = require("./module-7902.js"), { PoolBase: o, kClients: r, kNeedDrain: i, kAddClient: A, kRemoveClient: c, kGetDispatcher: l } = require("./module-1329.js"), d = require("./module-4003.js"), { kUrl: m, kInterceptors: u } = require("./module-8832.js"), { parseOrigin: g } = require("./module-9361.js"), p = Symbol("factory"), E = Symbol("options"), h = Symbol("kGreatestCommonDivisor"), T = Symbol("kCurrentWeight"), k = Symbol("kIndex"), f = Symbol("kWeight"), _ = Symbol("kMaxWeightPerServer"), I = Symbol("kErrorPenalty");
function C(e, n) {
    return 0 === n ? e : C(n, e % n);
}
function y(e, n) {
    return new d(e, n);
}
module.exports = class extends o {
    constructor(e = [], { factory: n = y, ...t } = {}){
        if (super(), this[E] = t, this[k] = -1, this[T] = 0, this[_] = this[E].maxWeightPerServer || 100, this[I] = this[E].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof n) throw new s("factory must be a function.");
        this[u] = t.interceptors && t.interceptors.BalancedPool && Array.isArray(t.interceptors.BalancedPool) ? t.interceptors.BalancedPool : [], this[p] = n;
        for (const n of e)this.addUpstream(n);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const n = g(e).origin;
        if (this[r].find((e)=>e[m].origin === n && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const t = this[p](n, Object.assign({}, this[E]));
        this[A](t), t.on("connect", ()=>{
            t[f] = Math.min(this[_], t[f] + this[I]);
        }), t.on("connectionError", ()=>{
            t[f] = Math.max(1, t[f] - this[I]), this._updateBalancedPoolStats();
        }), t.on("disconnect", (...e)=>{
            const n = e[2];
            n && "UND_ERR_SOCKET" === n.code && (t[f] = Math.max(1, t[f] - this[I]), this._updateBalancedPoolStats());
        });
        for (const e of this[r])e[f] = this[_];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[h] = this[r].map((e)=>e[f]).reduce(C, 0);
    }
    removeUpstream(e) {
        const n = g(e).origin, t = this[r].find((e)=>e[m].origin === n && !0 !== e.closed && !0 !== e.destroyed);
        return t && this[c](t), this;
    }
    get upstreams() {
        return this[r].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[m].origin);
    }
    [l]() {
        if (0 === this[r].length) throw new a;
        if (!this[r].find((e)=>!e[i] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[r].map((e)=>e[i]).reduce((e, n)=>e && n, !0)) return;
        let e = 0, n = this[r].findIndex((e)=>!e[i]);
        for(; e++ < this[r].length;){
            this[k] = (this[k] + 1) % this[r].length;
            const e = this[r][this[k]];
            if (e[f] > this[r][n][f] && !e[i] && (n = this[k]), 0 === this[k] && (this[T] = this[T] - this[h], this[T] <= 0 && (this[T] = this[_])), e[f] >= this[T] && !e[i]) return e;
        }
        return this[T] = this[r][n][f], this[k] = n, this[r][n];
    }
};
