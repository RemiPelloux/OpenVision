import { tUe } from "./arraysFind.js";
import { Ve } from "./errors.js";
import { h } from "./tslib.es6.js";
var Qb, b4, Zb;
export { Qb, Zb, b4 };
var __wakaru_Vn_initialized = false;
export function Vn() {
if (__wakaru_Vn_initialized) return;
__wakaru_Vn_initialized = true;
"use strict";
h(), tUe(), Ve(), ((e)=>{
    function t(i) {
        return i < 0;
    }
    e.isLessThan = t;
    function n(i) {
        return i <= 0;
    }
    e.isLessThanOrEqual = n;
    function r(i) {
        return i > 0;
    }
    e.isGreaterThan = r;
    function s(i) {
        return i === 0;
    }
    e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(Qb || (Qb = {})), b4 = (e, t)=>e - t, Zb = class _x {
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
        return new _x((n)=>this.iterate((r)=>t(r) ? n(r) : !0));
    }
    map(t) {
        return new _x((n)=>this.iterate((r)=>n(t(r))));
    }
    some(t) {
        let n = !1;
        return this.iterate((r)=>(n = t(r), !n)), n;
    }
    findFirst(t) {
        let n;
        return this.iterate((r)=>t(r) ? (n = r, !1) : !0), n;
    }
    findLast(t) {
        let n;
        return this.iterate((r)=>(t(r) && (n = r), !0)), n;
    }
    findLastMaxBy(t) {
        let n, r = !0;
        return this.iterate((s)=>((r || Qb.isGreaterThan(t(s, n))) && (r = !1, n = s), !0)), n;
    }
}, Zb.empty = new Zb((e)=>{});

}
