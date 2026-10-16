import { p } from "./tslib.es6.js";
var __wakaru__a_cache;
export function _a() {
if (__wakaru__a_cache) return __wakaru__a_cache.exports;
var e = {};
var t = { exports: e };
__wakaru__a_cache = t;
"use strict";
p();
function i(n, o) {
    var a = n;
    o.slice(0, -1).forEach(function(c) {
        a = a[c] || {};
    });
    var l = o[o.length - 1];
    return l in a;
}
function s(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
}
function r(n, o) {
    return o === "constructor" && typeof n[o] == "function" || o === "__proto__";
}
t.exports = function(n, o) {
    o || (o = {});
    var a = {
        bools: {},
        strings: {},
        unknownFn: null
    };
    typeof o.unknown == "function" && (a.unknownFn = o.unknown), typeof o.boolean == "boolean" && o.boolean ? a.allBools = !0 : [].concat(o.boolean).filter(Boolean).forEach(function(T) {
        a.bools[T] = !0;
    });
    var l = {};
    function c(T) {
        return l[T].some(function(J) {
            return a.bools[J];
        });
    }
    Object.keys(o.alias || {}).forEach(function(T) {
        l[T] = [].concat(o.alias[T]), l[T].forEach(function(J) {
            l[J] = [
                T
            ].concat(l[T].filter(function(be) {
                return J !== be;
            }));
        });
    }), [].concat(o.string).filter(Boolean).forEach(function(T) {
        a.strings[T] = !0, l[T] && [].concat(l[T]).forEach(function(J) {
            a.strings[J] = !0;
        });
    });
    var h = o.default || {}, u = {
        _: []
    };
    function d(T, J) {
        return a.allBools && /^--[^=]+$/.test(J) || a.strings[T] || a.bools[T] || l[T];
    }
    function f(T, J, be) {
        for(var z = T, Ke = 0; Ke < J.length - 1; Ke++){
            var ye = J[Ke];
            if (r(z, ye)) return;
            z[ye] === void 0 && (z[ye] = {}), (z[ye] === Object.prototype || z[ye] === Number.prototype || z[ye] === String.prototype) && (z[ye] = {}), z[ye] === Array.prototype && (z[ye] = []), z = z[ye];
        }
        var b = J[J.length - 1];
        r(z, b) || ((z === Object.prototype || z === Number.prototype || z === String.prototype) && (z = {}), z === Array.prototype && (z = []), z[b] === void 0 || a.bools[b] || typeof z[b] == "boolean" ? z[b] = be : Array.isArray(z[b]) ? z[b].push(be) : z[b] = [
            z[b],
            be
        ]);
    }
    function _(T, J, be) {
        if (!(be && a.unknownFn && !d(T, be) && a.unknownFn(be) === !1)) {
            var z = !a.strings[T] && s(J) ? Number(J) : J;
            f(u, T.split("."), z), (l[T] || []).forEach(function(Ke) {
                f(u, Ke.split("."), z);
            });
        }
    }
    Object.keys(a.bools).forEach(function(T) {
        _(T, h[T] === void 0 ? !1 : h[T]);
    });
    var E = [];
    n.indexOf("--") !== -1 && (E = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for(var g = 0; g < n.length; g++){
        var y = n[g], R, U;
        if (/^--.+=/.test(y)) {
            var lt = y.match(/^--([^=]+)=([\s\S]*)$/);
            R = lt[1];
            var I = lt[2];
            a.bools[R] && (I = I !== "false"), _(R, I, y);
        } else if (/^--no-.+/.test(y)) R = y.match(/^--no-(.+)/)[1], _(R, !1, y);
        else if (/^--.+/.test(y)) R = y.match(/^--(.+)/)[1], U = n[g + 1], U !== void 0 && !/^(-|--)[^-]/.test(U) && !a.bools[R] && !a.allBools && (!l[R] || !c(R)) ? (_(R, U, y), g += 1) : /^(true|false)$/.test(U) ? (_(R, U === "true", y), g += 1) : _(R, a.strings[R] ? "" : !0, y);
        else if (/^-[^-]+/.test(y)) {
            for(var D = y.slice(1, -1).split(""), B = !1, j = 0; j < D.length; j++){
                if (U = y.slice(j + 2), U === "-") {
                    _(D[j], U, y);
                    continue;
                }
                if (/[A-Za-z]/.test(D[j]) && U[0] === "=") {
                    _(D[j], U.slice(1), y), B = !0;
                    break;
                }
                if (/[A-Za-z]/.test(D[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(U)) {
                    _(D[j], U, y), B = !0;
                    break;
                }
                if (D[j + 1] && D[j + 1].match(/\W/)) {
                    _(D[j], y.slice(j + 2), y), B = !0;
                    break;
                } else _(D[j], a.strings[D[j]] ? "" : !0, y);
            }
            R = y.slice(-1)[0], !B && R !== "-" && (n[g + 1] && !/^(-|--)[^-]/.test(n[g + 1]) && !a.bools[R] && (!l[R] || !c(R)) ? (_(R, n[g + 1], y), g += 1) : n[g + 1] && /^(true|false)$/.test(n[g + 1]) ? (_(R, n[g + 1] === "true", y), g += 1) : _(R, a.strings[R] ? "" : !0, y));
        } else if ((!a.unknownFn || a.unknownFn(y) !== !1) && u._.push(a.strings._ || !s(y) ? y : Number(y)), o.stopEarly) {
            u._.push.apply(u._, n.slice(g + 1));
            break;
        }
    }
    return Object.keys(h).forEach(function(T) {
        i(u, T.split(".")) || (f(u, T.split("."), h[T]), (l[T] || []).forEach(function(J) {
            f(u, J.split("."), h[T]);
        }));
    }), o["--"] ? u["--"] = E.slice() : E.forEach(function(T) {
        u._.push(T);
    }), u;
};

return t.exports;
}
