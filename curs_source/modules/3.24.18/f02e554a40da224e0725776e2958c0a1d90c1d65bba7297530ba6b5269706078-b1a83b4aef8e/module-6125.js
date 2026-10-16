"use strict";
require.d(exports, {
    Bp: ()=>n,
    q2: ()=>i,
    xk: ()=>o,
    y: ()=>s
});
const n = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc+proto", i = "application/grpc+json";
function o(t) {
    const e = null == t ? void 0 : t.match(n);
    if (!e) return;
    return {
        binary: !e[1]
    };
}
