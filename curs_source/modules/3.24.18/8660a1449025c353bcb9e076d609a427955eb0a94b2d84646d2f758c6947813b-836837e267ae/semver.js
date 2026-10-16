import { E } from "./tslib.es6.js";
import { L6p } from "./version_2.js";
var __wakaru_G31_cache;
export function G31() {
if (__wakaru_G31_cache) return __wakaru_G31_cache;
var t = {};
__wakaru_G31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.isCompatible = t._makeCompatibilityCheck = void 0;
var e = L6p(), n = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function i(r) {
    const s = new Set([
        r
    ]), o = new Set, a = r.match(n);
    if (!a) return ()=>!1;
    const l = {
        major: +a[1],
        minor: +a[2],
        patch: +a[3],
        prerelease: a[4]
    };
    if (l.prerelease != null) return function(h) {
        return h === r;
    };
    function c(d) {
        return o.add(d), !1;
    }
    function u(d) {
        return s.add(d), !0;
    }
    return function(h) {
        if (s.has(h)) return !0;
        if (o.has(h)) return !1;
        const p = h.match(n);
        if (!p) return c(h);
        const g = {
            major: +p[1],
            minor: +p[2],
            patch: +p[3],
            prerelease: p[4]
        };
        return g.prerelease != null || l.major !== g.major ? c(h) : l.major === 0 ? l.minor === g.minor && l.patch <= g.patch ? u(h) : c(h) : l.minor <= g.minor ? u(h) : c(h);
    };
}
t._makeCompatibilityCheck = i, t.isCompatible = i(e.VERSION);

return t;
}
