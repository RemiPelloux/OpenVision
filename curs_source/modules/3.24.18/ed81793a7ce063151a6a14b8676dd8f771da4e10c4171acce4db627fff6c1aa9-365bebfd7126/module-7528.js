var n = require("./module-2937.js"), o = require("./module-3243.js").has, i = require("./module-7173.js"), a = require("./module-5558.js"), u = require("./module-7032.js"), s = require("./module-8500.js");
module.exports = function(t) {
    var r = n(this), e = a(t);
    if (i(r) < e.size) return !1;
    var c = e.getIterator();
    return !1 !== u(c, function(t) {
        if (!o(r, t)) return s(c.iterator, "normal", !1);
    });
};
