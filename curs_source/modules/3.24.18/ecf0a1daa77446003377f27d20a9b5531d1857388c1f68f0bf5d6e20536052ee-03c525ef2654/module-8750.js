var s = require("./module-7080.js"), n = require("./module-4402.js"), r = require("./module-5170.js"), a = require("./module-3789.js"), o = require("./module-8469.js"), l = require("./module-507.js"), h = n.Set, c = n.add, d = n.has;
module.exports = function(t) {
    var e = s(this), i = a(t), n = new h;
    return r(e) > i.size ? l(i.getIterator(), function(t) {
        d(e, t) && c(n, t);
    }) : o(e, function(t) {
        i.includes(t) && c(n, t);
    }), n;
};
