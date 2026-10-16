var n = require("./module-5234.js"), o = require("./module-4188.js"), i = /#|\.prototype\./, a = function(t, r) {
    var e = s[u(t)];
    return e === f || e !== c && (o(r) ? n(r) : !!r);
}, u = a.normalize = function(t) {
    return String(t).replace(i, ".").toLowerCase();
}, s = a.data = {}, c = a.NATIVE = "N", f = a.POLYFILL = "P";
module.exports = a;
