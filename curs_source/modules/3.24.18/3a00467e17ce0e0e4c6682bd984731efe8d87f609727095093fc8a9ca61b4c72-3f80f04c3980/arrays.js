import { qo } from "./arraysFind.js";
import { Ue } from "./errors.js";
import { w } from "./tslib.es6.js";
var Sr, ds, Ar;
export { Ar, Sr, ds };
var __wakaru_kr_initialized = false;
export function kr() {
if (__wakaru_kr_initialized) return;
__wakaru_kr_initialized = true;
"use strict";
w(), qo(), Ue(), ((e)=>{
    function t(n) {
        return n < 0;
    }
    e.isLessThan = t;
    function r(n) {
        return n <= 0;
    }
    e.isLessThanOrEqual = r;
    function s(n) {
        return n > 0;
    }
    e.isGreaterThan = s;
    function i(n) {
        return n === 0;
    }
    e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(Sr || (Sr = {})), ds = (e, t)=>e - t, Ar = class J1 {
    constructor(t){
        this.iterate = t;
    }
    forEach(t) {
        this.iterate((r)=>(t(r), !0));
    }
    toArray() {
        const t = [];
        return this.iterate((r)=>(t.push(r), !0)), t;
    }
    filter(t) {
        return new J1((r)=>this.iterate((s)=>t(s) ? r(s) : !0));
    }
    map(t) {
        return new J1((r)=>this.iterate((s)=>r(t(s))));
    }
    some(t) {
        let r = !1;
        return this.iterate((s)=>(r = t(s), !r)), r;
    }
    findFirst(t) {
        let r;
        return this.iterate((s)=>t(s) ? (r = s, !1) : !0), r;
    }
    findLast(t) {
        let r;
        return this.iterate((s)=>(t(s) && (r = s), !0)), r;
    }
    findLastMaxBy(t) {
        let r, s = !0;
        return this.iterate((i)=>((s || Sr.isGreaterThan(t(i, r))) && (s = !1, r = i), !0)), r;
    }
}, Ar.empty = new Ar((e)=>{});

}
