var n = require("./module-2937.js"), o = require("./module-3243.js"), i = require("./module-679.js"), a = require("./module-7173.js"), u = require("./module-5558.js"), s = require("./module-9800.js"), c = require("./module-7032.js"), f = o.has, h = o.remove;
module.exports = function(t) {
    var r = n(this), e = u(t), o = i(r);
    return a(o) <= e.size ? s(o, function(t) {
        e.includes(t) && h(o, t);
    }) : c(e.getIterator(), function(t) {
        f(o, t) && h(o, t);
    }), o;
};
