var n = require("./module-2937.js"), o = require("./module-3243.js").has, i = require("./module-7173.js"), a = require("./module-5558.js"), u = require("./module-9800.js"), s = require("./module-7032.js"), c = require("./module-8500.js");
module.exports = function(t) {
    var r = n(this), e = a(t);
    if (i(r) <= e.size) return !1 !== u(r, function(t) {
        if (e.includes(t)) return !1;
    }, !0);
    var f = e.getIterator();
    return !1 !== s(f, function(t) {
        if (o(r, t)) return c(f.iterator, "normal", !1);
    });
};
