var n = require("./module-2937.js"), o = require("./module-3243.js"), i = require("./module-679.js"), a = require("./module-5558.js"), u = require("./module-7032.js"), s = o.add, c = o.has, f = o.remove;
module.exports = function(t) {
    var r = n(this), e = a(t).getIterator(), o = i(r);
    return u(e, function(t) {
        c(r, t) ? f(o, t) : s(o, t);
    }), o;
};
