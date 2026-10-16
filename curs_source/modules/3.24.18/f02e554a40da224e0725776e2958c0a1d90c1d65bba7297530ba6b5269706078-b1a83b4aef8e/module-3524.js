"use strict";
require.d(exports, {
    Bp: ()=>n,
    q2: ()=>i,
    xk: ()=>o,
    y: ()=>s
});
const n = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc-web+proto", i = "application/grpc-web+json";
function o(t) {
    const e = null == t ? void 0 : t.match(n);
    if (!e) return;
    return {
        text: !!e[1],
        binary: !e[2]
    };
}
