import { Ei } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { E } from "./tslib.es6.js";
var Ide, Sj, pYu, Yxe, $pr, sdn, mYu;
export { $pr, Ide, Sj, Yxe, mYu, pYu, sdn };
var __wakaru_bo_initialized = false;
export function bo() {
if (__wakaru_bo_initialized) return;
__wakaru_bo_initialized = true;
"use strict";
E(), p4(), Ei(), ((t)=>{
    function e(s) {
        return s < 0;
    }
    t.isLessThan = e;
    function n(s) {
        return s <= 0;
    }
    t.isLessThanOrEqual = n;
    function i(s) {
        return s > 0;
    }
    t.isGreaterThan = i;
    function r(s) {
        return s === 0;
    }
    t.isNeitherLessOrGreaterThan = r, t.greaterThan = 1, t.lessThan = -1, t.neitherLessOrGreaterThan = 0;
})(Ide || (Ide = {})), Sj = (t, e)=>t - e, pYu = (t, e)=>Sj(t ? 1 : 0, e ? 1 : 0), Yxe = class {
    constructor(t){
        this.items = t, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
    }
    get length() {
        return this.lastIdx - this.firstIdx + 1;
    }
    takeWhile(t) {
        let e = this.firstIdx;
        for(; e < this.items.length && t(this.items[e]);)e++;
        const n = e === this.firstIdx ? null : this.items.slice(this.firstIdx, e);
        return this.firstIdx = e, n;
    }
    takeFromEndWhile(t) {
        let e = this.lastIdx;
        for(; e >= 0 && t(this.items[e]);)e--;
        const n = e === this.lastIdx ? null : this.items.slice(e + 1, this.lastIdx + 1);
        return this.lastIdx = e, n;
    }
    peek() {
        if (this.length !== 0) return this.items[this.firstIdx];
    }
    peekLast() {
        if (this.length !== 0) return this.items[this.lastIdx];
    }
    dequeue() {
        const t = this.items[this.firstIdx];
        return this.firstIdx++, t;
    }
    removeLast() {
        const t = this.items[this.lastIdx];
        return this.lastIdx--, t;
    }
    takeCount(t) {
        const e = this.items.slice(this.firstIdx, this.firstIdx + t);
        return this.firstIdx += t, e;
    }
}, $pr = class BQc {
    constructor(e){
        this.iterate = e;
    }
    forEach(e) {
        this.iterate((n)=>(e(n), !0));
    }
    toArray() {
        const e = [];
        return this.iterate((n)=>(e.push(n), !0)), e;
    }
    filter(e) {
        return new BQc((n)=>this.iterate((i)=>e(i) ? n(i) : !0));
    }
    map(e) {
        return new BQc((n)=>this.iterate((i)=>n(e(i))));
    }
    some(e) {
        let n = !1;
        return this.iterate((i)=>(n = e(i), !n)), n;
    }
    findFirst(e) {
        let n;
        return this.iterate((i)=>e(i) ? (n = i, !1) : !0), n;
    }
    findLast(e) {
        let n;
        return this.iterate((i)=>(e(i) && (n = i), !0)), n;
    }
    findLastMaxBy(e) {
        let n, i = !0;
        return this.iterate((r)=>((i || Ide.isGreaterThan(e(r, n))) && (i = !1, n = r), !0)), n;
    }
}, $pr.empty = new $pr((t)=>{}), sdn = $pr, mYu = class UQc {
    constructor(e){
        this._indexMap = e;
    }
    static createSortPermutation(e, n) {
        const i = Array.from(e.keys()).sort((r, s)=>n(e[r], e[s]));
        return new UQc(i);
    }
    apply(e) {
        return e.map((n, i)=>e[this._indexMap[i]]);
    }
    inverse() {
        const e = this._indexMap.slice();
        for(let n = 0; n < this._indexMap.length; n++)e[this._indexMap[n]] = n;
        return new UQc(e);
    }
};

}
