import { i } from "./plugin-brand-icon.js";
var __wakaru_y4i_cache;
export function y4i() {
if (__wakaru_y4i_cache) return __wakaru_y4i_cache.exports;
var r = {};
var e = { exports: r };
__wakaru_y4i_cache = e;
"use strict";
var a = Object.prototype.hasOwnProperty, s = Object.prototype.toString, l = Object.defineProperty, u = Object.getOwnPropertyDescriptor, p = i(function(v) {
    return typeof Array.isArray == "function" ? Array.isArray(v) : s.call(v) === "[object Array]";
}, "isArray"), m = i(function(v) {
    if (!v || s.call(v) !== "[object Object]") return !1;
    var x = a.call(v, "constructor"), C = v.constructor && v.constructor.prototype && a.call(v.constructor.prototype, "isPrototypeOf");
    if (v.constructor && !x && !C) return !1;
    var E;
    for(E in v);
    return typeof E > "u" || a.call(v, E);
}, "isPlainObject"), b = i(function(v, x) {
    l && x.name === "__proto__" ? l(v, x.name, {
        enumerable: !0,
        configurable: !0,
        value: x.newValue,
        writable: !0
    }) : v[x.name] = x.newValue;
}, "setProperty"), g = i(function(v, x) {
    if (x === "__proto__") if (a.call(v, x)) {
        if (u) return u(v, x).value;
    } else return;
    return v[x];
}, "getProperty");
e.exports = i(function _() {
    var v, x, C, E, A, $, I = arguments[0], N = 1, R = arguments.length, P = !1;
    for(typeof I == "boolean" && (P = I, I = arguments[1] || {}, N = 2), (I == null || typeof I != "object" && typeof I != "function") && (I = {}); N < R; ++N)if (v = arguments[N], v != null) for(x in v)C = g(I, x), E = g(v, x), I !== E && (P && E && (m(E) || (A = p(E))) ? (A ? (A = !1, $ = C && p(C) ? C : []) : $ = C && m(C) ? C : {}, b(I, {
        name: x,
        newValue: _(P, $, E)
    })) : typeof E < "u" && b(I, {
        name: x,
        newValue: E
    }));
    return I;
}, "extend");

return e.exports;
}
