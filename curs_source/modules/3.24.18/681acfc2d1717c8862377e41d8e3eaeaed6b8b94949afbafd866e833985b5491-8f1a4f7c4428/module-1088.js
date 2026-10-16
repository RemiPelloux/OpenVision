"use strict";
require.r(exports), require.d(exports, {
    format: ()=>u,
    parse: ()=>c
});
var n = /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/, r = 1e3, o = 60 * r, s = 60 * o, i = 24 * s, a = 365.25 * i;
function c(e) {
    var t, A = e.toLowerCase().match(n);
    if (null != A && (t = parseFloat(A[1]))) return null != A[3] ? t * r : null != A[4] ? t * o : null != A[5] ? t * s : null != A[6] ? t * i : null != A[7] ? t * i * 7 : null != A[8] ? t * a : t;
}
function l(e, t, A, n) {
    var r = (0 | e) === e ? e : ~~(e + .5);
    return t + r + (n ? " " + A + (1 != r ? "s" : "") : A[0]);
}
function u(e, t) {
    var A = e < 0 ? "-" : "", n = e < 0 ? -e : e;
    return n < r ? e + (t ? " ms" : "ms") : n < o ? l(n / r, A, "second", t) : n < s ? l(n / o, A, "minute", t) : n < i ? l(n / s, A, "hour", t) : n < a ? l(n / i, A, "day", t) : l(n / a, A, "year", t);
}
