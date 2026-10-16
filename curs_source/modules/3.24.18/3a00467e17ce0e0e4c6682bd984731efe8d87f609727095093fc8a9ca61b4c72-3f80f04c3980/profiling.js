import { D1, Sn } from "./instantiation.js";
import { Q, le, st, ze } from "./path.js";
import { w } from "./tslib.es6.js";
var w0, $1;
export { $1, w0 };
var __wakaru_b0_initialized = false;
export function b0() {
if (__wakaru_b0_initialized) return;
__wakaru_b0_initialized = true;
"use strict";
w(), le(), Sn(), w0 = D1("IV8InspectProfilingService"), ((e)=>{
    function t(i) {
        return !!(i.samples && i.timeDeltas);
    }
    e.isValidProfile = t;
    function r(i, n = "noAbsolutePaths") {
        for (const a of i.nodes)a.callFrame && a.callFrame.url && (ze(a.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(a.callFrame.url)) && (a.callFrame.url = Q(n, st(a.callFrame.url)));
        return i;
    }
    e.rewriteAbsolutePaths = r;
    function s(i, n = "noAbsolutePaths") {
        const a = (o)=>{
            o.callFrame.url && (ze(o.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(o.callFrame.url)) && (o.callFrame.url = Q(n, st(o.callFrame.url)));
            for (const l of o.children)a(l);
        };
        return a(i.head), i;
    }
    e.rewriteAbsolutePathsInHeapProfile = s;
})($1 || ($1 = {}));

}
