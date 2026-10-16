import { T } from "./tslib.es6.js";
var __wakaru_k2_cache;
export function k2() {
if (__wakaru_k2_cache) return __wakaru_k2_cache.exports;
var e = {};
var n = { exports: e };
__wakaru_k2_cache = n;
"use strict";
T();
function a(o, i) {
    var l = o;
    i.slice(0, -1).forEach(function(d) {
        l = l[d] || {};
    });
    var c = i[i.length - 1];
    return c in l;
}
function r(o) {
    return typeof o == "number" || /^0x[0-9a-f]+$/i.test(o) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(o);
}
function s(o, i) {
    return i === "constructor" && typeof o[i] == "function" || i === "__proto__";
}
n.exports = function(o, i) {
    i || (i = {});
    var l = {
        bools: {},
        strings: {},
        unknownFn: null
    };
    typeof i.unknown == "function" && (l.unknownFn = i.unknown), typeof i.boolean == "boolean" && i.boolean ? l.allBools = !0 : [].concat(i.boolean).filter(Boolean).forEach(function($) {
        l.bools[$] = !0;
    });
    var c = {};
    function d($) {
        return c[$].some(function(q) {
            return l.bools[q];
        });
    }
    Object.keys(i.alias || {}).forEach(function($) {
        c[$] = [].concat(i.alias[$]), c[$].forEach(function(q) {
            c[q] = [
                $
            ].concat(c[$].filter(function(ne) {
                return q !== ne;
            }));
        });
    }), [].concat(i.string).filter(Boolean).forEach(function($) {
        l.strings[$] = !0, c[$] && [].concat(c[$]).forEach(function(q) {
            l.strings[q] = !0;
        });
    });
    var u = i.default || {}, p = {
        _: []
    };
    function _($, q) {
        return l.allBools && /^--[^=]+$/.test(q) || l.strings[$] || l.bools[$] || c[$];
    }
    function g($, q, ne) {
        for(var re = $, ce = 0; ce < q.length - 1; ce++){
            var ie = q[ce];
            if (s(re, ie)) return;
            re[ie] === void 0 && (re[ie] = {}), (re[ie] === Object.prototype || re[ie] === Number.prototype || re[ie] === String.prototype) && (re[ie] = {}), re[ie] === Array.prototype && (re[ie] = []), re = re[ie];
        }
        var ee = q[q.length - 1];
        s(re, ee) || ((re === Object.prototype || re === Number.prototype || re === String.prototype) && (re = {}), re === Array.prototype && (re = []), re[ee] === void 0 || l.bools[ee] || typeof re[ee] == "boolean" ? re[ee] = ne : Array.isArray(re[ee]) ? re[ee].push(ne) : re[ee] = [
            re[ee],
            ne
        ]);
    }
    function k($, q, ne) {
        if (!(ne && l.unknownFn && !_($, ne) && l.unknownFn(ne) === !1)) {
            var re = !l.strings[$] && r(q) ? Number(q) : q;
            g(p, $.split("."), re), (c[$] || []).forEach(function(ce) {
                g(p, ce.split("."), re);
            });
        }
    }
    Object.keys(l.bools).forEach(function($) {
        k($, u[$] === void 0 ? !1 : u[$]);
    });
    var R = [];
    o.indexOf("--") !== -1 && (R = o.slice(o.indexOf("--") + 1), o = o.slice(0, o.indexOf("--")));
    for(var E = 0; E < o.length; E++){
        var S = o[E], C, A;
        if (/^--.+=/.test(S)) {
            var M = S.match(/^--([^=]+)=([\s\S]*)$/);
            C = M[1];
            var N = M[2];
            l.bools[C] && (N = N !== "false"), k(C, N, S);
        } else if (/^--no-.+/.test(S)) C = S.match(/^--no-(.+)/)[1], k(C, !1, S);
        else if (/^--.+/.test(S)) C = S.match(/^--(.+)/)[1], A = o[E + 1], A !== void 0 && !/^(-|--)[^-]/.test(A) && !l.bools[C] && !l.allBools && (!c[C] || !d(C)) ? (k(C, A, S), E += 1) : /^(true|false)$/.test(A) ? (k(C, A === "true", S), E += 1) : k(C, l.strings[C] ? "" : !0, S);
        else if (/^-[^-]+/.test(S)) {
            for(var U = S.slice(1, -1).split(""), F = !1, W = 0; W < U.length; W++){
                if (A = S.slice(W + 2), A === "-") {
                    k(U[W], A, S);
                    continue;
                }
                if (/[A-Za-z]/.test(U[W]) && A[0] === "=") {
                    k(U[W], A.slice(1), S), F = !0;
                    break;
                }
                if (/[A-Za-z]/.test(U[W]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(A)) {
                    k(U[W], A, S), F = !0;
                    break;
                }
                if (U[W + 1] && U[W + 1].match(/\W/)) {
                    k(U[W], S.slice(W + 2), S), F = !0;
                    break;
                } else k(U[W], l.strings[U[W]] ? "" : !0, S);
            }
            C = S.slice(-1)[0], !F && C !== "-" && (o[E + 1] && !/^(-|--)[^-]/.test(o[E + 1]) && !l.bools[C] && (!c[C] || !d(C)) ? (k(C, o[E + 1], S), E += 1) : o[E + 1] && /^(true|false)$/.test(o[E + 1]) ? (k(C, o[E + 1] === "true", S), E += 1) : k(C, l.strings[C] ? "" : !0, S));
        } else if ((!l.unknownFn || l.unknownFn(S) !== !1) && p._.push(l.strings._ || !r(S) ? S : Number(S)), i.stopEarly) {
            p._.push.apply(p._, o.slice(E + 1));
            break;
        }
    }
    return Object.keys(u).forEach(function($) {
        a(p, $.split(".")) || (g(p, $.split("."), u[$]), (c[$] || []).forEach(function(q) {
            g(p, q.split("."), u[$]);
        }));
    }), i["--"] ? p["--"] = R.slice() : R.forEach(function($) {
        p._.push($);
    }), p;
};

return n.exports;
}
