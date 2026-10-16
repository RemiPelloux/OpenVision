"use strict";
function n(t) {
    const e = new Headers, r = new Headers;
    return t.forEach((t, n)=>{
        n.toLowerCase().startsWith("trailer-") ? r.append(n.substring(8), t) : e.append(n, t);
    }), [
        e,
        r
    ];
}
function s(t, e) {
    const r = new Headers(t);
    return e.forEach((t, e)=>{
        r.append(`trailer-${e}`, t);
    }), r;
}
require.d(exports, {
    E: ()=>s,
    z: ()=>n
});
