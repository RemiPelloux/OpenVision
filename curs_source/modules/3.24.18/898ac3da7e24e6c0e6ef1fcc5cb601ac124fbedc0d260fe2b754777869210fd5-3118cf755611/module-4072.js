"use strict";
const { BalancedPoolMissingUpstreamError: t, InvalidArgumentError: s } = require("./module-7902.js"), { PoolBase: o, kClients: r, kNeedDrain: i, kAddClient: A, kRemoveClient: l, kGetDispatcher: c } = require("./module-1329.js"), m = require("./module-4003.js"), { kUrl: d, kInterceptors: g } = require("./module-8832.js"), { parseOrigin: u } = require("./module-9361.js"), E = Symbol("factory"), p = Symbol("options"), T = Symbol("kGreatestCommonDivisor"), k = Symbol("kCurrentWeight"), I = Symbol("kIndex"), h = Symbol("kWeight"), _ = Symbol("kMaxWeightPerServer"), C = Symbol("kErrorPenalty");
function f(e, n) {
    return 0 === n ? e : f(n, e % n);
}
function B(e, n) {
    return new m(e, n);
}
module.exports = class extends o {
    constructor(e = [], { factory: n = B, ...a } = {}){
        if (super(), this[p] = a, this[I] = -1, this[k] = 0, this[_] = this[p].maxWeightPerServer || 100, this[C] = this[p].errorPenalty || 15, Array.isArray(e) || (e = [
            e
        ]), "function" != typeof n) throw new s("factory must be a function.");
        this[g] = a.interceptors && a.interceptors.BalancedPool && Array.isArray(a.interceptors.BalancedPool) ? a.interceptors.BalancedPool : [], this[E] = n;
        for (const n of e)this.addUpstream(n);
        this._updateBalancedPoolStats();
    }
    addUpstream(e) {
        const n = u(e).origin;
        if (this[r].find((e)=>e[d].origin === n && !0 !== e.closed && !0 !== e.destroyed)) return this;
        const a = this[E](n, Object.assign({}, this[p]));
        this[A](a), a.on("connect", ()=>{
            a[h] = Math.min(this[_], a[h] + this[C]);
        }), a.on("connectionError", ()=>{
            a[h] = Math.max(1, a[h] - this[C]), this._updateBalancedPoolStats();
        }), a.on("disconnect", (...e)=>{
            const n = e[2];
            n && "UND_ERR_SOCKET" === n.code && (a[h] = Math.max(1, a[h] - this[C]), this._updateBalancedPoolStats());
        });
        for (const e of this[r])e[h] = this[_];
        return this._updateBalancedPoolStats(), this;
    }
    _updateBalancedPoolStats() {
        this[T] = this[r].map((e)=>e[h]).reduce(f, 0);
    }
    removeUpstream(e) {
        const n = u(e).origin, a = this[r].find((e)=>e[d].origin === n && !0 !== e.closed && !0 !== e.destroyed);
        return a && this[l](a), this;
    }
    get upstreams() {
        return this[r].filter((e)=>!0 !== e.closed && !0 !== e.destroyed).map((e)=>e[d].origin);
    }
    [c]() {
        if (0 === this[r].length) throw new t;
        if (!this[r].find((e)=>!e[i] && !0 !== e.closed && !0 !== e.destroyed)) return;
        if (this[r].map((e)=>e[i]).reduce((e, n)=>e && n, !0)) return;
        let e = 0, n = this[r].findIndex((e)=>!e[i]);
        for(; e++ < this[r].length;){
            this[I] = (this[I] + 1) % this[r].length;
            const e = this[r][this[I]];
            if (e[h] > this[r][n][h] && !e[i] && (n = this[I]), 0 === this[I] && (this[k] = this[k] - this[T], this[k] <= 0 && (this[k] = this[_])), e[h] >= this[k] && !e[i]) return e;
        }
        return this[k] = this[r][n][h], this[I] = n, this[r][n];
    }
};
