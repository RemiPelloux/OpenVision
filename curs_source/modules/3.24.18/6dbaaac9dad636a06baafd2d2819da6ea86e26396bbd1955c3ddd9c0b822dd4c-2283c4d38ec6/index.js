import { b } from "./tslib.es6.js";
var __wakaru_Sd_cache;
export function Sd() {
if (__wakaru_Sd_cache) return __wakaru_Sd_cache.exports;
var e = {};
var t = { exports: e };
__wakaru_Sd_cache = t;
"use strict";
b();
function i(n, o) {
    var a = n;
    o.slice(0, -1).forEach(function(c) {
        a = a[c] || {};
    });
    var l = o[o.length - 1];
    return l in a;
}
function r(n) {
    return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
}
function s(n, o) {
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
        return l[T].some(function(ie) {
            return a.bools[ie];
        });
    }
    Object.keys(o.alias || {}).forEach(function(T) {
        l[T] = [].concat(o.alias[T]), l[T].forEach(function(ie) {
            l[ie] = [
                T
            ].concat(l[T].filter(function(Me) {
                return ie !== Me;
            }));
        });
    }), [].concat(o.string).filter(Boolean).forEach(function(T) {
        a.strings[T] = !0, l[T] && [].concat(l[T]).forEach(function(ie) {
            a.strings[ie] = !0;
        });
    });
    var h = o.default || {}, f = {
        _: []
    };
    function d(T, ie) {
        return a.allBools && /^--[^=]+$/.test(ie) || a.strings[T] || a.bools[T] || l[T];
    }
    function p(T, ie, Me) {
        for(var B = T, at = 0; at < ie.length - 1; at++){
            var re = ie[at];
            if (s(B, re)) return;
            B[re] === void 0 && (B[re] = {}), (B[re] === Object.prototype || B[re] === Number.prototype || B[re] === String.prototype) && (B[re] = {}), B[re] === Array.prototype && (B[re] = []), B = B[re];
        }
        var L = ie[ie.length - 1];
        s(B, L) || ((B === Object.prototype || B === Number.prototype || B === String.prototype) && (B = {}), B === Array.prototype && (B = []), B[L] === void 0 || a.bools[L] || typeof B[L] == "boolean" ? B[L] = Me : Array.isArray(B[L]) ? B[L].push(Me) : B[L] = [
            B[L],
            Me
        ]);
    }
    function v(T, ie, Me) {
        if (!(Me && a.unknownFn && !d(T, Me) && a.unknownFn(Me) === !1)) {
            var B = !a.strings[T] && r(ie) ? Number(ie) : ie;
            p(f, T.split("."), B), (l[T] || []).forEach(function(at) {
                p(f, at.split("."), B);
            });
        }
    }
    Object.keys(a.bools).forEach(function(T) {
        v(T, h[T] === void 0 ? !1 : h[T]);
    });
    var y = [];
    n.indexOf("--") !== -1 && (y = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for(var E = 0; E < n.length; E++){
        var _ = n[E], I, D;
        if (/^--.+=/.test(_)) {
            var W = _.match(/^--([^=]+)=([\s\S]*)$/);
            I = W[1];
            var R = W[2];
            a.bools[I] && (R = R !== "false"), v(I, R, _);
        } else if (/^--no-.+/.test(_)) I = _.match(/^--no-(.+)/)[1], v(I, !1, _);
        else if (/^--.+/.test(_)) I = _.match(/^--(.+)/)[1], D = n[E + 1], D !== void 0 && !/^(-|--)[^-]/.test(D) && !a.bools[I] && !a.allBools && (!l[I] || !c(I)) ? (v(I, D, _), E += 1) : /^(true|false)$/.test(D) ? (v(I, D === "true", _), E += 1) : v(I, a.strings[I] ? "" : !0, _);
        else if (/^-[^-]+/.test(_)) {
            for(var C = _.slice(1, -1).split(""), F = !1, Z = 0; Z < C.length; Z++){
                if (D = _.slice(Z + 2), D === "-") {
                    v(C[Z], D, _);
                    continue;
                }
                if (/[A-Za-z]/.test(C[Z]) && D[0] === "=") {
                    v(C[Z], D.slice(1), _), F = !0;
                    break;
                }
                if (/[A-Za-z]/.test(C[Z]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(D)) {
                    v(C[Z], D, _), F = !0;
                    break;
                }
                if (C[Z + 1] && C[Z + 1].match(/\W/)) {
                    v(C[Z], _.slice(Z + 2), _), F = !0;
                    break;
                } else v(C[Z], a.strings[C[Z]] ? "" : !0, _);
            }
            I = _.slice(-1)[0], !F && I !== "-" && (n[E + 1] && !/^(-|--)[^-]/.test(n[E + 1]) && !a.bools[I] && (!l[I] || !c(I)) ? (v(I, n[E + 1], _), E += 1) : n[E + 1] && /^(true|false)$/.test(n[E + 1]) ? (v(I, n[E + 1] === "true", _), E += 1) : v(I, a.strings[I] ? "" : !0, _));
        } else if ((!a.unknownFn || a.unknownFn(_) !== !1) && f._.push(a.strings._ || !r(_) ? _ : Number(_)), o.stopEarly) {
            f._.push.apply(f._, n.slice(E + 1));
            break;
        }
    }
    return Object.keys(h).forEach(function(T) {
        i(f, T.split(".")) || (p(f, T.split("."), h[T]), (l[T] || []).forEach(function(ie) {
            p(f, ie.split("."), h[T]);
        }));
    }), o["--"] ? f["--"] = y.slice() : y.forEach(function(T) {
        f._.push(T);
    }), f;
};

return t.exports;
}
