var n, o, i, a = require("./module-5234.js"), u = require("./module-4188.js"), s = require("./module-831.js"), c = require("./module-7065.js"), f = require("./module-1786.js"), h = require("./module-7509.js"), l = require("./module-4282.js"), p = require("./module-1942.js"), v = l("iterator"), d = !1;
[].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : d = !0), !s(n) || a(function() {
    var t = {};
    return n[v].call(t) !== t;
}) ? n = {} : p && (n = c(n)), u(n[v]) || h(n, v, function() {
    return this;
}), module.exports = {
    IteratorPrototype: n,
    BUGGY_SAFARI_ITERATORS: d
};
