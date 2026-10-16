var s = require("./module-7080.js"), n = require("./module-4402.js"), r = require("./module-9286.js"), a = require("./module-5170.js"), o = require("./module-3789.js"), l = require("./module-8469.js"), h = require("./module-507.js"), c = n.has, d = n.remove;
module.exports = function(t) {
    var e = s(this), i = o(t), n = r(e);
    return a(e) <= i.size ? l(e, function(t) {
        i.includes(t) && d(n, t);
    }) : h(i.getIterator(), function(t) {
        c(n, t) && d(n, t);
    }), n;
};
