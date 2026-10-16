var n = require("./module-9117.js"), o = require("./module-6453.js"), i = require("./module-4188.js"), a = require("./module-8489.js"), u = require("./module-3029.js"), s = require("./module-4282.js"), c = require("./module-1078.js"), f = require("./module-1942.js"), h = require("./module-3008.js"), l = o && o.prototype, p = s("species"), v = !1, d = i(n.PromiseRejectionEvent), g = a("Promise", function() {
    var t = u(o), r = t !== String(o);
    if (!r && 66 === h) return !0;
    if (f && (!l.catch || !l.finally)) return !0;
    if (!h || h < 51 || !/native code/.test(t)) {
        var e = new o(function(t) {
            t(1);
        }), n = function(t) {
            t(function() {}, function() {});
        };
        if ((e.constructor = {})[p] = n, !(v = e.then(function() {}) instanceof n)) return !0;
    }
    return !(r || "BROWSER" !== c && "DENO" !== c || d);
});
module.exports = {
    CONSTRUCTOR: g,
    REJECTION_EVENT: d,
    SUBCLASSING: v
};
