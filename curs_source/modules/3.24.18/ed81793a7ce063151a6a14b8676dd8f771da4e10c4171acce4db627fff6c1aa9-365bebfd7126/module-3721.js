var n = require("./module-2937.js"), o = require("./module-3243.js"), i = require("./module-7173.js"), a = require("./module-5558.js"), u = require("./module-9800.js"), s = require("./module-7032.js"), c = o.Set, f = o.add, h = o.has;
module.exports = function(t) {
    var r = n(this), e = a(t), o = new c;
    return i(r) > e.size ? s(e.getIterator(), function(t) {
        h(r, t) && f(o, t);
    }) : u(r, function(t) {
        e.includes(t) && f(o, t);
    }), o;
};
