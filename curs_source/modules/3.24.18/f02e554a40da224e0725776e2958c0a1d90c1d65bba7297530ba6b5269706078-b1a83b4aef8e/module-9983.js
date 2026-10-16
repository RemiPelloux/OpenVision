"use strict";
require.d(exports, {
    Ch: ()=>i,
    p2: ()=>o,
    xz: ()=>a
});
var n = require("./module-328.js"), s = require("./module-8032.js");
function i(...t) {
    const e = new AbortController, r = t.filter((t)=>void 0 !== t).concat(e.signal);
    for (const t of r){
        if (t.aborted) {
            n.apply(t);
            break;
        }
        t.addEventListener("abort", n);
    }
    function n() {
        e.signal.aborted || e.abort(a(this));
        for (const t of r)t.removeEventListener("abort", n);
    }
    return e;
}
function o(t) {
    const e = new AbortController, r = ()=>{
        e.abort(new n.T("the operation timed out", s.C.DeadlineExceeded));
    };
    let i;
    return void 0 !== t && (t <= 0 ? r() : i = setTimeout(r, t)), {
        signal: e.signal,
        cleanup: ()=>clearTimeout(i)
    };
}
function a(t) {
    if (!t.aborted) return;
    if (void 0 !== t.reason) return t.reason;
    const e = new Error("This operation was aborted");
    return e.name = "AbortError", e;
}
