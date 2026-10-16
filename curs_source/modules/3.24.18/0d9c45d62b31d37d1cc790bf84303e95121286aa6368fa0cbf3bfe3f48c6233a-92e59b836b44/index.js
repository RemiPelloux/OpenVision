import { g } from "./tslib.es6.js";
var __wakaru_e__cache;
export function e_() {
if (__wakaru_e__cache) return __wakaru_e__cache.exports;
var e = {};
var t = { exports: e };
__wakaru_e__cache = t;
"use strict";
g();
function i(n, o) {
    var a = n;
    o.slice(0, -1).forEach(function(l) {
        a = a[l] || {};
    });
    var c = o[o.length - 1];
    return c in a;
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
    typeof o.unknown == "function" && (a.unknownFn = o.unknown), typeof o.boolean == "boolean" && o.boolean ? a.allBools = !0 : [].concat(o.boolean).filter(Boolean).forEach(function(L) {
        a.bools[L] = !0;
    });
    var c = {};
    function l(L) {
        return c[L].some(function(ee) {
            return a.bools[ee];
        });
    }
    Object.keys(o.alias || {}).forEach(function(L) {
        c[L] = [].concat(o.alias[L]), c[L].forEach(function(ee) {
            c[ee] = [
                L
            ].concat(c[L].filter(function(xe) {
                return ee !== xe;
            }));
        });
    }), [].concat(o.string).filter(Boolean).forEach(function(L) {
        a.strings[L] = !0, c[L] && [].concat(c[L]).forEach(function(ee) {
            a.strings[ee] = !0;
        });
    });
    var h = o.default || {}, d = {
        _: []
    };
    function f(L, ee) {
        return a.allBools && /^--[^=]+$/.test(ee) || a.strings[L] || a.bools[L] || c[L];
    }
    function p(L, ee, xe) {
        for(var H = L, Pe = 0; Pe < ee.length - 1; Pe++){
            var ae = ee[Pe];
            if (s(H, ae)) return;
            H[ae] === void 0 && (H[ae] = {}), (H[ae] === Object.prototype || H[ae] === Number.prototype || H[ae] === String.prototype) && (H[ae] = {}), H[ae] === Array.prototype && (H[ae] = []), H = H[ae];
        }
        var N = ee[ee.length - 1];
        s(H, N) || ((H === Object.prototype || H === Number.prototype || H === String.prototype) && (H = {}), H === Array.prototype && (H = []), H[N] === void 0 || a.bools[N] || typeof H[N] == "boolean" ? H[N] = xe : Array.isArray(H[N]) ? H[N].push(xe) : H[N] = [
            H[N],
            xe
        ]);
    }
    function m(L, ee, xe) {
        if (!(xe && a.unknownFn && !f(L, xe) && a.unknownFn(xe) === !1)) {
            var H = !a.strings[L] && r(ee) ? Number(ee) : ee;
            p(d, L.split("."), H), (c[L] || []).forEach(function(Pe) {
                p(d, Pe.split("."), H);
            });
        }
    }
    Object.keys(a.bools).forEach(function(L) {
        m(L, h[L] === void 0 ? !1 : h[L]);
    });
    var v = [];
    n.indexOf("--") !== -1 && (v = n.slice(n.indexOf("--") + 1), n = n.slice(0, n.indexOf("--")));
    for(var w = 0; w < n.length; w++){
        var S = n[w], x, D;
        if (/^--.+=/.test(S)) {
            var W = S.match(/^--([^=]+)=([\s\S]*)$/);
            x = W[1];
            var R = W[2];
            a.bools[x] && (R = R !== "false"), m(x, R, S);
        } else if (/^--no-.+/.test(S)) x = S.match(/^--no-(.+)/)[1], m(x, !1, S);
        else if (/^--.+/.test(S)) x = S.match(/^--(.+)/)[1], D = n[w + 1], D !== void 0 && !/^(-|--)[^-]/.test(D) && !a.bools[x] && !a.allBools && (!c[x] || !l(x)) ? (m(x, D, S), w += 1) : /^(true|false)$/.test(D) ? (m(x, D === "true", S), w += 1) : m(x, a.strings[x] ? "" : !0, S);
        else if (/^-[^-]+/.test(S)) {
            for(var O = S.slice(1, -1).split(""), U = !1, K = 0; K < O.length; K++){
                if (D = S.slice(K + 2), D === "-") {
                    m(O[K], D, S);
                    continue;
                }
                if (/[A-Za-z]/.test(O[K]) && D[0] === "=") {
                    m(O[K], D.slice(1), S), U = !0;
                    break;
                }
                if (/[A-Za-z]/.test(O[K]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(D)) {
                    m(O[K], D, S), U = !0;
                    break;
                }
                if (O[K + 1] && O[K + 1].match(/\W/)) {
                    m(O[K], S.slice(K + 2), S), U = !0;
                    break;
                } else m(O[K], a.strings[O[K]] ? "" : !0, S);
            }
            x = S.slice(-1)[0], !U && x !== "-" && (n[w + 1] && !/^(-|--)[^-]/.test(n[w + 1]) && !a.bools[x] && (!c[x] || !l(x)) ? (m(x, n[w + 1], S), w += 1) : n[w + 1] && /^(true|false)$/.test(n[w + 1]) ? (m(x, n[w + 1] === "true", S), w += 1) : m(x, a.strings[x] ? "" : !0, S));
        } else if ((!a.unknownFn || a.unknownFn(S) !== !1) && d._.push(a.strings._ || !r(S) ? S : Number(S)), o.stopEarly) {
            d._.push.apply(d._, n.slice(w + 1));
            break;
        }
    }
    return Object.keys(h).forEach(function(L) {
        i(d, L.split(".")) || (p(d, L.split("."), h[L]), (c[L] || []).forEach(function(ee) {
            p(d, ee.split("."), h[L]);
        }));
    }), o["--"] ? d["--"] = v.slice() : v.forEach(function(L) {
        d._.push(L);
    }), d;
};

return t.exports;
}
