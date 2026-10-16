var s, n, r, a = require("./module-9039.js"), o = require("./module-4901.js"), l = require("./module-34.js"), h = require("./module-2360.js"), c = require("./module-2787.js"), d = require("./module-6840.js"), u = require("./module-8227.js"), p = require("./module-6395.js"), g = u("iterator"), m = !1;
[].keys && ("next" in (r = [].keys()) ? (n = c(c(r))) !== Object.prototype && (s = n) : m = !0), !l(s) || a(function() {
    var t = {};
    return s[g].call(t) !== t;
}) ? s = {} : p && (s = h(s)), o(s[g]) || d(s, g, function() {
    return this;
}), module.exports = {
    IteratorPrototype: s,
    BUGGY_SAFARI_ITERATORS: m
};
