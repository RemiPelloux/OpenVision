"use strict";
function n(e) {
    const t = new Headers, r = new Headers;
    return e.forEach((e, n)=>{
        n.toLowerCase().startsWith("trailer-") ? r.append(n.substring(8), e) : t.append(n, e);
    }), [
        t,
        r
    ];
}
function s(e, t) {
    const r = new Headers(e);
    return t.forEach((e, t)=>{
        r.append(`trailer-${t}`, e);
    }), r;
}
require.d(exports, {
    E: ()=>s,
    z: ()=>n
});
