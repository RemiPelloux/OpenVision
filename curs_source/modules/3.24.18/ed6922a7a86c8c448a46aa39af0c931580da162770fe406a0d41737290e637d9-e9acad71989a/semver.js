import { x } from "./tslib.es6.js";
import { dNu } from "./version_2.js";
var __wakaru_Cgv_cache;
export function Cgv() {
if (__wakaru_Cgv_cache) return __wakaru_Cgv_cache;
var e = {};
__wakaru_Cgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.isCompatible = e._makeCompatibilityCheck = void 0;
var t = dNu(), n = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function i(r) {
    const s = new Set([
        r
    ]), o = new Set, a = r.match(n);
    if (!a) return ()=>!1;
    const c = {
        major: +a[1],
        minor: +a[2],
        patch: +a[3],
        prerelease: a[4]
    };
    if (c.prerelease != null) return function(p) {
        return p === r;
    };
    function l(h) {
        return o.add(h), !1;
    }
    function u(h) {
        return s.add(h), !0;
    }
    return function(p) {
        if (s.has(p)) return !0;
        if (o.has(p)) return !1;
        const g = p.match(n);
        if (!g) return l(p);
        const f = {
            major: +g[1],
            minor: +g[2],
            patch: +g[3],
            prerelease: g[4]
        };
        return f.prerelease != null || c.major !== f.major ? l(p) : c.major === 0 ? c.minor === f.minor && c.patch <= f.patch ? u(p) : l(p) : c.minor <= f.minor ? u(p) : l(p);
    };
}
e._makeCompatibilityCheck = i, e.isCompatible = i(t.VERSION);

return e;
}
