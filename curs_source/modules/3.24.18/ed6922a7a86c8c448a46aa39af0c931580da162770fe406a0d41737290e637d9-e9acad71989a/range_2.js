import { x } from "./tslib.es6.js";
var j7;
export { j7 };
var __wakaru_Mbi_initialized = false;
export function Mbi() {
if (__wakaru_Mbi_initialized) return;
__wakaru_Mbi_initialized = true;
"use strict";
x(), ((e)=>{
    function t(s, o) {
        if (s.start >= o.end || o.start >= s.end) return {
            start: 0,
            end: 0
        };
        const a = Math.max(s.start, o.start), c = Math.min(s.end, o.end);
        return c - a <= 0 ? {
            start: 0,
            end: 0
        } : {
            start: a,
            end: c
        };
    }
    e.intersect = t;
    function n(s) {
        return s.end - s.start <= 0;
    }
    e.isEmpty = n;
    function i(s, o) {
        return !n(t(s, o));
    }
    e.intersects = i;
    function r(s, o) {
        const a = [], c = {
            start: s.start,
            end: Math.min(o.start, s.end)
        }, l = {
            start: Math.max(o.end, s.start),
            end: s.end
        };
        return n(c) || a.push(c), n(l) || a.push(l), a;
    }
    e.relativeComplement = r;
})(j7 || (j7 = {}));

}
