import { si } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { x } from "./tslib.es6.js";
var iJ, JB, WEc, hge, qpi, iNt, GEc;
export { GEc, JB, WEc, hge, iJ, iNt, qpi };
var __wakaru_dr_initialized = false;
export function dr() {
if (__wakaru_dr_initialized) return;
__wakaru_dr_initialized = true;
"use strict";
x(), FT(), si(), ((e)=>{
    function t(s) {
        return s < 0;
    }
    e.isLessThan = t;
    function n(s) {
        return s <= 0;
    }
    e.isLessThanOrEqual = n;
    function i(s) {
        return s > 0;
    }
    e.isGreaterThan = i;
    function r(s) {
        return s === 0;
    }
    e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(iJ || (iJ = {})), JB = (e, t)=>e - t, WEc = (e, t)=>JB(e ? 1 : 0, t ? 1 : 0), hge = class {
    constructor(e){
        this.items = e, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
    }
    get length() {
        return this.lastIdx - this.firstIdx + 1;
    }
    takeWhile(e) {
        let t = this.firstIdx;
        for(; t < this.items.length && e(this.items[t]);)t++;
        const n = t === this.firstIdx ? null : this.items.slice(this.firstIdx, t);
        return this.firstIdx = t, n;
    }
    takeFromEndWhile(e) {
        let t = this.lastIdx;
        for(; t >= 0 && e(this.items[t]);)t--;
        const n = t === this.lastIdx ? null : this.items.slice(t + 1, this.lastIdx + 1);
        return this.lastIdx = t, n;
    }
    peek() {
        if (this.length !== 0) return this.items[this.firstIdx];
    }
    peekLast() {
        if (this.length !== 0) return this.items[this.lastIdx];
    }
    dequeue() {
        const e = this.items[this.firstIdx];
        return this.firstIdx++, e;
    }
    removeLast() {
        const e = this.items[this.lastIdx];
        return this.lastIdx--, e;
    }
    takeCount(e) {
        const t = this.items.slice(this.firstIdx, this.firstIdx + e);
        return this.firstIdx += e, t;
    }
}, qpi = class iIa {
    constructor(t){
        this.iterate = t;
    }
    forEach(t) {
        this.iterate((n)=>(t(n), !0));
    }
    toArray() {
        const t = [];
        return this.iterate((n)=>(t.push(n), !0)), t;
    }
    filter(t) {
        return new iIa((n)=>this.iterate((i)=>t(i) ? n(i) : !0));
    }
    map(t) {
        return new iIa((n)=>this.iterate((i)=>n(t(i))));
    }
    some(t) {
        let n = !1;
        return this.iterate((i)=>(n = t(i), !n)), n;
    }
    findFirst(t) {
        let n;
        return this.iterate((i)=>t(i) ? (n = i, !1) : !0), n;
    }
    findLast(t) {
        let n;
        return this.iterate((i)=>(t(i) && (n = i), !0)), n;
    }
    findLastMaxBy(t) {
        let n, i = !0;
        return this.iterate((r)=>((i || iJ.isGreaterThan(t(r, n))) && (i = !1, n = r), !0)), n;
    }
}, qpi.empty = new qpi((e)=>{}), iNt = qpi, GEc = class rIa {
    constructor(t){
        this._indexMap = t;
    }
    static createSortPermutation(t, n) {
        const i = Array.from(t.keys()).sort((r, s)=>n(t[r], t[s]));
        return new rIa(i);
    }
    apply(t) {
        return t.map((n, i)=>t[this._indexMap[i]]);
    }
    inverse() {
        const t = this._indexMap.slice();
        for(let n = 0; n < this._indexMap.length; n++)t[this._indexMap[n]] = n;
        return new rIa(t);
    }
};

}
