import { xpn } from "./HVr.js";
import { dr } from "./arrays.js";
import { S2t } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { eN } from "./uint.js";
var $Ot, QJr, JJr;
export { $Ot, JJr, QJr };
var __wakaru_Opt_initialized = false;
export function Opt() {
if (__wakaru_Opt_initialized) return;
__wakaru_Opt_initialized = true;
"use strict";
x(), dr(), eN(), $Ot = class {
    constructor(e){
        this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }
    getCount() {
        return this.values.length;
    }
    insertValues(e, t) {
        e = S2t(e);
        const n = this.values, i = this.prefixSum, r = t.length;
        return r === 0 ? !1 : (this.values = new Uint32Array(n.length + r), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + r), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    setValue(e, t) {
        return e = S2t(e), t = S2t(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }
    removeValues(e, t) {
        e = S2t(e), t = S2t(t);
        const n = this.values, i = this.prefixSum;
        if (e >= n.length) return !1;
        const r = n.length - e;
        return t >= r && (t = r), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    getTotalSum() {
        return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(e) {
        return e < 0 ? 0 : (e = S2t(e), this._getPrefixSum(e));
    }
    _getPrefixSum(e) {
        if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
        let t = this.prefixSumValidIndex[0] + 1;
        t === 0 && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
        for(let n = t; n <= e; n++)this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
        return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }
    getIndexOf(e) {
        e = Math.floor(e), this.getTotalSum();
        let t = 0, n = this.values.length - 1, i = 0, r = 0, s = 0;
        for(; t <= n;)if (i = t + (n - t) / 2 | 0, r = this.prefixSum[i], s = r - this.values[i], e < s) n = i - 1;
        else if (e >= r) t = i + 1;
        else break;
        return new JJr(i, e - s);
    }
}, QJr = class {
    constructor(e){
        this._values = e, this._isValid = !1, this._validEndIndex = -1, this._prefixSum = [], this._indexBySum = [];
    }
    getTotalSum() {
        return this._ensureValid(), this._indexBySum.length;
    }
    getPrefixSum(e) {
        return this._ensureValid(), e === 0 ? 0 : this._prefixSum[e - 1];
    }
    getIndexOf(e) {
        this._ensureValid();
        const t = this._indexBySum[e], n = t > 0 ? this._prefixSum[t - 1] : 0;
        return new JJr(t, e - n);
    }
    removeValues(e, t) {
        this._values.splice(e, t), this._invalidate(e);
    }
    insertValues(e, t) {
        this._values = xpn(this._values, e, t), this._invalidate(e);
    }
    _invalidate(e) {
        this._isValid = !1, this._validEndIndex = Math.min(this._validEndIndex, e - 1);
    }
    _ensureValid() {
        if (!this._isValid) {
            for(let e = this._validEndIndex + 1, t = this._values.length; e < t; e++){
                const n = this._values[e], i = e > 0 ? this._prefixSum[e - 1] : 0;
                this._prefixSum[e] = i + n;
                for(let r = 0; r < n; r++)this._indexBySum[i + r] = e;
            }
            this._prefixSum.length = this._values.length, this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1], this._isValid = !0, this._validEndIndex = this._values.length - 1;
        }
    }
    setValue(e, t) {
        this._values[e] !== t && (this._values[e] = t, this._invalidate(e));
    }
}, JJr = class {
    constructor(e, t){
        this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
    }
};

}
