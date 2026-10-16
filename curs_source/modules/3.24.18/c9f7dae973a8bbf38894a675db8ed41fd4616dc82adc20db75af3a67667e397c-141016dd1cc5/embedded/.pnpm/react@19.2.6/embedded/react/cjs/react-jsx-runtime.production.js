var __wakaru_require_react_jsx_runtime_production_cache;
export function require_react_jsx_runtime_production() {
if (__wakaru_require_react_jsx_runtime_production_cache) return __wakaru_require_react_jsx_runtime_production_cache;
var e = {};
__wakaru_require_react_jsx_runtime_production_cache = e;
"use strict";
var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
function a(e, t, a) {
    var s = null;
    if (void 0 !== a && (s = "" + a), void 0 !== t.key && (s = "" + t.key), "key" in t) for(var i in a = {}, t)"key" !== i && (a[i] = t[i]);
    else a = t;
    return t = a.ref, {
        $$typeof: n,
        type: e,
        key: s,
        ref: void 0 !== t ? t : null,
        props: a
    };
}
e.Fragment = t, e.jsx = a, e.jsxs = a;

return e;
}
