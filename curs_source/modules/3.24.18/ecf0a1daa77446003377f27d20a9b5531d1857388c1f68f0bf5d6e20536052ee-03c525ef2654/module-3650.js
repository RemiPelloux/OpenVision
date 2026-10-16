var s = require("./module-7080.js"), n = require("./module-4402.js"), r = require("./module-9286.js"), a = require("./module-3789.js"), o = require("./module-507.js"), l = n.add, h = n.has, c = n.remove;
module.exports = function(t) {
    var e = s(this), i = a(t).getIterator(), n = r(e);
    return o(i, function(t) {
        h(e, t) ? c(n, t) : l(n, t);
    }), n;
};
