"use strict";
require.d(exports, {
    Ch: ()=>o,
    p2: ()=>i,
    xz: ()=>a
});
var n = require("./module-92801.js"), s = require("./module-84959.js");
function o(...e) {
    const t = new AbortController, r = e.filter((e)=>void 0 !== e).concat(t.signal);
    for (const e of r){
        if (e.aborted) {
            n.apply(e);
            break;
        }
        e.addEventListener("abort", n);
    }
    function n() {
        t.signal.aborted || t.abort(a(this));
        for (const e of r)e.removeEventListener("abort", n);
    }
    return t;
}
function i(e) {
    const t = new AbortController, r = ()=>{
        t.abort(new n.T("the operation timed out", s.C.DeadlineExceeded));
    };
    let o;
    return void 0 !== e && (e <= 0 ? r() : o = setTimeout(r, e)), {
        signal: t.signal,
        cleanup: ()=>clearTimeout(o)
    };
}
function a(e) {
    if (!e.aborted) return;
    if (void 0 !== e.reason) return e.reason;
    const t = new Error("This operation was aborted");
    return t.name = "AbortError", t;
}
