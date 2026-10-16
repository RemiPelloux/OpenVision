var __wakaru_i_cache;
export function i() {
if (__wakaru_i_cache) return __wakaru_i_cache;
var e = {};
__wakaru_i_cache = e;
"use strict";
var t = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
function _(l, r, s) {
    var n = null;
    if (s !== void 0 && (n = "" + s), r.key !== void 0 && (n = "" + r.key), "key" in r) {
        s = {};
        for(var x in r)x !== "key" && (s[x] = r[x]);
    } else s = r;
    return r = s.ref, {
        $$typeof: t,
        type: l,
        key: n,
        ref: r !== void 0 ? r : null,
        props: s
    };
}
e.Fragment = u, e.jsx = _, e.jsxs = _;

return e;
}
