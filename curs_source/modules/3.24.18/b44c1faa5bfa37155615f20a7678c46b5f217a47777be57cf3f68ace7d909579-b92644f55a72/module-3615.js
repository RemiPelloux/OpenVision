"use strict";
require.d(exports, {
    Bp: ()=>n,
    q2: ()=>o,
    xk: ()=>i,
    y: ()=>s
});
const n = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc-web+proto", o = "application/grpc-web+json";
function i(e) {
    const t = null == e ? void 0 : e.match(n);
    if (!t) return;
    return {
        text: !!t[1],
        binary: !t[2]
    };
}
