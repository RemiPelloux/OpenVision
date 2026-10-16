"use strict";
require.d(exports, {
    Bp: ()=>n,
    q2: ()=>o,
    xk: ()=>i,
    y: ()=>s
});
const n = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc+proto", o = "application/grpc+json";
function i(e) {
    const t = null == e ? void 0 : e.match(n);
    if (!t) return;
    return {
        binary: !t[1]
    };
}
