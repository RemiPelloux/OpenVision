import { qXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { E } from "./tslib.es6.js";
import { lz } from "./uint.js";
import { Cgn } from "./ze.js";
var J$o, yUd, eHo;
export { J$o, eHo, yUd };
var __wakaru_tHo_initialized = false;
export function tHo() {
if (__wakaru_tHo_initialized) return;
__wakaru_tHo_initialized = true;
"use strict";
E(), bo(), lz(), J$o = class {
    constructor(t){
        this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }
    getCount() {
        return this.values.length;
    }
    insertValues(t, e) {
        t = Cgn(t);
        const n = this.values, i = this.prefixSum, r = e.length;
        return r === 0 ? !1 : (this.values = new Uint32Array(n.length + r), this.values.set(n.subarray(0, t), 0), this.values.set(n.subarray(t), t + r), this.values.set(e, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    setValue(t, e) {
        return t = Cgn(t), e = Cgn(e), this.values[t] === e ? !1 : (this.values[t] = e, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
    }
    removeValues(t, e) {
        t = Cgn(t), e = Cgn(e);
        const n = this.values, i = this.prefixSum;
        if (t >= n.length) return !1;
        const r = n.length - t;
        return e >= r && (e = r), e === 0 ? !1 : (this.values = new Uint32Array(n.length - e), this.values.set(n.subarray(0, t), 0), this.values.set(n.subarray(t + e), t), this.prefixSum = new Uint32Array(this.values.length), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }
    getTotalSum() {
        return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(t) {
        return t < 0 ? 0 : (t = Cgn(t), this._getPrefixSum(t));
    }
    _getPrefixSum(t) {
        if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t];
        let e = this.prefixSumValidIndex[0] + 1;
        e === 0 && (this.prefixSum[0] = this.values[0], e++), t >= this.values.length && (t = this.values.length - 1);
        for(let n = e; n <= t; n++)this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
        return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t), this.prefixSum[t];
    }
    getIndexOf(t) {
        t = Math.floor(t), this.getTotalSum();
        let e = 0, n = this.values.length - 1, i = 0, r = 0, s = 0;
        for(; e <= n;)if (i = e + (n - e) / 2 | 0, r = this.prefixSum[i], s = r - this.values[i], t < s) n = i - 1;
        else if (t >= r) e = i + 1;
        else break;
        return new eHo(i, t - s);
    }
}, yUd = class {
    constructor(t){
        this._values = t, this._isValid = !1, this._validEndIndex = -1, this._prefixSum = [], this._indexBySum = [];
    }
    getTotalSum() {
        return this._ensureValid(), this._indexBySum.length;
    }
    getPrefixSum(t) {
        return this._ensureValid(), t === 0 ? 0 : this._prefixSum[t - 1];
    }
    getIndexOf(t) {
        this._ensureValid();
        const e = this._indexBySum[t], n = e > 0 ? this._prefixSum[e - 1] : 0;
        return new eHo(e, t - n);
    }
    removeValues(t, e) {
        this._values.splice(t, e), this._invalidate(t);
    }
    insertValues(t, e) {
        this._values = qXn(this._values, t, e), this._invalidate(t);
    }
    _invalidate(t) {
        this._isValid = !1, this._validEndIndex = Math.min(this._validEndIndex, t - 1);
    }
    _ensureValid() {
        if (!this._isValid) {
            for(let t = this._validEndIndex + 1, e = this._values.length; t < e; t++){
                const n = this._values[t], i = t > 0 ? this._prefixSum[t - 1] : 0;
                this._prefixSum[t] = i + n;
                for(let r = 0; r < n; r++)this._indexBySum[i + r] = t;
            }
            this._prefixSum.length = this._values.length, this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1], this._isValid = !0, this._validEndIndex = this._values.length - 1;
        }
    }
    setValue(t, e) {
        this._values[t] !== e && (this._values[t] = e, this._invalidate(t));
    }
}, eHo = class {
    constructor(t, e){
        this.index = t, this.remainder = e, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = e;
    }
};

}
