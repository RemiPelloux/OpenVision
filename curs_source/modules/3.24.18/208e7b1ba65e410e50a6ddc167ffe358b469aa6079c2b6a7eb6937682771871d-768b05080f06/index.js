import { h } from "./tslib.es6.js";
var __wakaru_Px_cache;
export function Px() {
if (__wakaru_Px_cache) return __wakaru_Px_cache.exports;
var e = {};
var t = { exports: e };
__wakaru_Px_cache = t;
"use strict";
h();
function n(i, a) {
    var o = i;
    a.slice(0, -1).forEach(function(d) {
        o = o[d] || {};
    });
    var l = a[a.length - 1];
    return l in o;
}
function r(i) {
    return typeof i == "number" || /^0x[0-9a-f]+$/i.test(i) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(i);
}
function s(i, a) {
    return a === "constructor" && typeof i[a] == "function" || a === "__proto__";
}
t.exports = function(i, a) {
    a || (a = {});
    var o = {
        bools: {},
        strings: {},
        unknownFn: null
    };
    typeof a.unknown == "function" && (o.unknownFn = a.unknown), typeof a.boolean == "boolean" && a.boolean ? o.allBools = !0 : [].concat(a.boolean).filter(Boolean).forEach(function(H) {
        o.bools[H] = !0;
    });
    var l = {};
    function d(H) {
        return l[H].some(function(ue) {
            return o.bools[ue];
        });
    }
    Object.keys(a.alias || {}).forEach(function(H) {
        l[H] = [].concat(a.alias[H]), l[H].forEach(function(ue) {
            l[ue] = [
                H
            ].concat(l[H].filter(function(Ee) {
                return ue !== Ee;
            }));
        });
    }), [].concat(a.string).filter(Boolean).forEach(function(H) {
        o.strings[H] = !0, l[H] && [].concat(l[H]).forEach(function(ue) {
            o.strings[ue] = !0;
        });
    });
    var u = a.default || {}, m = {
        _: []
    };
    function f(H, ue) {
        return o.allBools && /^--[^=]+$/.test(ue) || o.strings[H] || o.bools[H] || l[H];
    }
    function v(H, ue, Ee) {
        for(var me = H, Nt = 0; Nt < ue.length - 1; Nt++){
            var Le = ue[Nt];
            if (s(me, Le)) return;
            me[Le] === void 0 && (me[Le] = {}), (me[Le] === Object.prototype || me[Le] === Number.prototype || me[Le] === String.prototype) && (me[Le] = {}), me[Le] === Array.prototype && (me[Le] = []), me = me[Le];
        }
        var re = ue[ue.length - 1];
        s(me, re) || ((me === Object.prototype || me === Number.prototype || me === String.prototype) && (me = {}), me === Array.prototype && (me = []), me[re] === void 0 || o.bools[re] || typeof me[re] == "boolean" ? me[re] = Ee : Array.isArray(me[re]) ? me[re].push(Ee) : me[re] = [
            me[re],
            Ee
        ]);
    }
    function T(H, ue, Ee) {
        if (!(Ee && o.unknownFn && !f(H, Ee) && o.unknownFn(Ee) === !1)) {
            var me = !o.strings[H] && r(ue) ? Number(ue) : ue;
            v(m, H.split("."), me), (l[H] || []).forEach(function(Nt) {
                v(m, Nt.split("."), me);
            });
        }
    }
    Object.keys(o.bools).forEach(function(H) {
        T(H, u[H] === void 0 ? !1 : u[H]);
    });
    var S = [];
    i.indexOf("--") !== -1 && (S = i.slice(i.indexOf("--") + 1), i = i.slice(0, i.indexOf("--")));
    for(var k = 0; k < i.length; k++){
        var y = i[k], b, I;
        if (/^--.+=/.test(y)) {
            var G = y.match(/^--([^=]+)=([\s\S]*)$/);
            b = G[1];
            var U = G[2];
            o.bools[b] && (U = U !== "false"), T(b, U, y);
        } else if (/^--no-.+/.test(y)) b = y.match(/^--no-(.+)/)[1], T(b, !1, y);
        else if (/^--.+/.test(y)) b = y.match(/^--(.+)/)[1], I = i[k + 1], I !== void 0 && !/^(-|--)[^-]/.test(I) && !o.bools[b] && !o.allBools && (!l[b] || !d(b)) ? (T(b, I, y), k += 1) : /^(true|false)$/.test(I) ? (T(b, I === "true", y), k += 1) : T(b, o.strings[b] ? "" : !0, y);
        else if (/^-[^-]+/.test(y)) {
            for(var X = y.slice(1, -1).split(""), W = !1, K = 0; K < X.length; K++){
                if (I = y.slice(K + 2), I === "-") {
                    T(X[K], I, y);
                    continue;
                }
                if (/[A-Za-z]/.test(X[K]) && I[0] === "=") {
                    T(X[K], I.slice(1), y), W = !0;
                    break;
                }
                if (/[A-Za-z]/.test(X[K]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(I)) {
                    T(X[K], I, y), W = !0;
                    break;
                }
                if (X[K + 1] && X[K + 1].match(/\W/)) {
                    T(X[K], y.slice(K + 2), y), W = !0;
                    break;
                } else T(X[K], o.strings[X[K]] ? "" : !0, y);
            }
            b = y.slice(-1)[0], !W && b !== "-" && (i[k + 1] && !/^(-|--)[^-]/.test(i[k + 1]) && !o.bools[b] && (!l[b] || !d(b)) ? (T(b, i[k + 1], y), k += 1) : i[k + 1] && /^(true|false)$/.test(i[k + 1]) ? (T(b, i[k + 1] === "true", y), k += 1) : T(b, o.strings[b] ? "" : !0, y));
        } else if ((!o.unknownFn || o.unknownFn(y) !== !1) && m._.push(o.strings._ || !r(y) ? y : Number(y)), a.stopEarly) {
            m._.push.apply(m._, i.slice(k + 1));
            break;
        }
    }
    return Object.keys(u).forEach(function(H) {
        n(m, H.split(".")) || (v(m, H.split("."), u[H]), (l[H] || []).forEach(function(ue) {
            v(m, ue.split("."), u[H]);
        }));
    }), a["--"] ? m["--"] = S.slice() : S.forEach(function(H) {
        m._.push(H);
    }), m;
};

return t.exports;
}
