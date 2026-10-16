import { w } from "./tslib.es6.js";
var __wakaru_X2_cache;
export function X2() {
if (__wakaru_X2_cache) return __wakaru_X2_cache.exports;
var e = {};
var t = { exports: e };
__wakaru_X2_cache = t;
"use strict";
w();
function r(n, a) {
    var o = n;
    a.slice(0, -1).forEach(function(c) {
        o = o[c] || {};
    });
    var l = a[a.length - 1];
    return l in o;
}
function s(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
}
function i(n, a) {
    return a === "constructor" && typeof n[a] == "function" || a === "__proto__";
}
t.exports = function(n, a) {
    a || (a = {});
    var o = {
        bools: {},
        strings: {},
        unknownFn: null
    };
    typeof a.unknown == "function" && (o.unknownFn = a.unknown), typeof a.boolean == "boolean" && a.boolean ? o.allBools = !0 : [].concat(a.boolean).filter(Boolean).forEach(function(A) {
        o.bools[A] = !0;
    });
    var l = {};
    function c(A) {
        return l[A].some(function(U) {
            return o.bools[U];
        });
    }
    Object.keys(a.alias || {}).forEach(function(A) {
        l[A] = [].concat(a.alias[A]), l[A].forEach(function(U) {
            l[U] = [
                A
            ].concat(l[A].filter(function(fe) {
                return U !== fe;
            }));
        });
    }), [].concat(a.string).filter(Boolean).forEach(function(A) {
        o.strings[A] = !0, l[A] && [].concat(l[A]).forEach(function(U) {
            o.strings[U] = !0;
        });
    });
    var h = a.default || {}, u = {
        _: []
    };
    function f(A, U) {
        return o.allBools && /^--[^=]+$/.test(U) || o.strings[A] || o.bools[A] || l[A];
    }
    function d(A, U, fe) {
        for(var $ = A, We = 0; We < U.length - 1; We++){
            var ne = U[We];
            if (i($, ne)) return;
            $[ne] === void 0 && ($[ne] = {}), ($[ne] === Object.prototype || $[ne] === Number.prototype || $[ne] === String.prototype) && ($[ne] = {}), $[ne] === Array.prototype && ($[ne] = []), $ = $[ne];
        }
        var g = U[U.length - 1];
        i($, g) || (($ === Object.prototype || $ === Number.prototype || $ === String.prototype) && ($ = {}), $ === Array.prototype && ($ = []), $[g] === void 0 || o.bools[g] || typeof $[g] == "boolean" ? $[g] = fe : Array.isArray($[g]) ? $[g].push(fe) : $[g] = [
            $[g],
            fe
        ]);
    }
    function m(A, U, fe) {
        if (!(fe && o.unknownFn && !f(A, fe) && o.unknownFn(fe) === !1)) {
            var $ = !o.strings[A] && s(U) ? Number(U) : U;
            d(u, A.split("."), $), (l[A] || []).forEach(function(We) {
                d(u, We.split("."), $);
            });
        }
    }
    Object.keys(o.bools).forEach(function(A) {
        m(A, h[A] === void 0 ? !1 : h[A]);
    });
    var k = [];
    n.indexOf("--") !== -1 && (k = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for(var D = 0; D < n.length; D++){
        var P = n[D], x, O;
        if (/^--.+=/.test(P)) {
            var Z = P.match(/^--([^=]+)=([\s\S]*)$/);
            x = Z[1];
            var C = Z[2];
            o.bools[x] && (C = C !== "false"), m(x, C, P);
        } else if (/^--no-.+/.test(P)) x = P.match(/^--no-(.+)/)[1], m(x, !1, P);
        else if (/^--.+/.test(P)) x = P.match(/^--(.+)/)[1], O = n[D + 1], O !== void 0 && !/^(-|--)[^-]/.test(O) && !o.bools[x] && !o.allBools && (!l[x] || !c(x)) ? (m(x, O, P), D += 1) : /^(true|false)$/.test(O) ? (m(x, O === "true", P), D += 1) : m(x, o.strings[x] ? "" : !0, P);
        else if (/^-[^-]+/.test(P)) {
            for(var _ = P.slice(1, -1).split(""), T = !1, I = 0; I < _.length; I++){
                if (O = P.slice(I + 2), O === "-") {
                    m(_[I], O, P);
                    continue;
                }
                if (/[A-Za-z]/.test(_[I]) && O[0] === "=") {
                    m(_[I], O.slice(1), P), T = !0;
                    break;
                }
                if (/[A-Za-z]/.test(_[I]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(O)) {
                    m(_[I], O, P), T = !0;
                    break;
                }
                if (_[I + 1] && _[I + 1].match(/\W/)) {
                    m(_[I], P.slice(I + 2), P), T = !0;
                    break;
                } else m(_[I], o.strings[_[I]] ? "" : !0, P);
            }
            x = P.slice(-1)[0], !T && x !== "-" && (n[D + 1] && !/^(-|--)[^-]/.test(n[D + 1]) && !o.bools[x] && (!l[x] || !c(x)) ? (m(x, n[D + 1], P), D += 1) : n[D + 1] && /^(true|false)$/.test(n[D + 1]) ? (m(x, n[D + 1] === "true", P), D += 1) : m(x, o.strings[x] ? "" : !0, P));
        } else if ((!o.unknownFn || o.unknownFn(P) !== !1) && u._.push(o.strings._ || !s(P) ? P : Number(P)), a.stopEarly) {
            u._.push.apply(u._, n.slice(D + 1));
            break;
        }
    }
    return Object.keys(h).forEach(function(A) {
        r(u, A.split(".")) || (d(u, A.split("."), h[A]), (l[A] || []).forEach(function(U) {
            d(u, U.split("."), h[A]);
        }));
    }), a["--"] ? u["--"] = k.slice() : k.forEach(function(A) {
        u._.push(A);
    }), u;
};

return t.exports;
}
