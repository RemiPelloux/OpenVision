import { E } from "./tslib.es6.js";
var IY;
export { IY };
var __wakaru_sTr_initialized = false;
export function sTr() {
if (__wakaru_sTr_initialized) return;
__wakaru_sTr_initialized = true;
"use strict";
E(), ((t)=>{
    function e(s, o) {
        if (s.start >= o.end || o.start >= s.end) return {
            start: 0,
            end: 0
        };
        const a = Math.max(s.start, o.start), l = Math.min(s.end, o.end);
        return l - a <= 0 ? {
            start: 0,
            end: 0
        } : {
            start: a,
            end: l
        };
    }
    t.intersect = e;
    function n(s) {
        return s.end - s.start <= 0;
    }
    t.isEmpty = n;
    function i(s, o) {
        return !n(e(s, o));
    }
    t.intersects = i;
    function r(s, o) {
        const a = [], l = {
            start: s.start,
            end: Math.min(o.start, s.end)
        }, c = {
            start: Math.max(o.end, s.start),
            end: s.end
        };
        return n(l) || a.push(l), n(c) || a.push(c), a;
    }
    t.relativeComplement = r;
})(IY || (IY = {}));

}
