var s = require("./module-7080.js"), n = require("./module-4402.js").add, r = require("./module-9286.js"), a = require("./module-3789.js"), o = require("./module-507.js");
module.exports = function(t) {
    var e = s(this), i = a(t).getIterator(), l = r(e);
    return o(i, function(t) {
        n(l, t);
    }), l;
};
