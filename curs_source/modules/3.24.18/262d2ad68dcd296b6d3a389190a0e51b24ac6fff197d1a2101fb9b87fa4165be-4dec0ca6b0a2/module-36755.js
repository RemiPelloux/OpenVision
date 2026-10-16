"use strict";
function t(e) {
    return null == e;
}
module.exports.isNothing = t, module.exports.isObject = function(e) {
    return "object" == typeof e && null !== e;
}, module.exports.toArray = function(e) {
    return Array.isArray(e) ? e : t(e) ? [] : [
        e
    ];
}, module.exports.repeat = function(e, t) {
    var r, n = "";
    for(r = 0; r < t; r += 1)n += e;
    return n;
}, module.exports.isNegativeZero = function(e) {
    return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
}, module.exports.extend = function(e, t) {
    var r, n, o, s;
    if (t) for(r = 0, n = (s = Object.keys(t)).length; r < n; r += 1)e[o = s[r]] = t[o];
    return e;
};
