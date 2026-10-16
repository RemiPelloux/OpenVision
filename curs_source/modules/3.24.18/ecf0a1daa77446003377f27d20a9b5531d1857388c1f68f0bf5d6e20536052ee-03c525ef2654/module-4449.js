var s = require("./module-7080.js"), n = require("./module-4402.js").has, r = require("./module-5170.js"), a = require("./module-3789.js"), o = require("./module-8469.js"), l = require("./module-507.js"), h = require("./module-9539.js");
module.exports = function(t) {
    var e = s(this), i = a(t);
    if (r(e) <= i.size) return !1 !== o(e, function(t) {
        if (i.includes(t)) return !1;
    }, !0);
    var c = i.getIterator();
    return !1 !== l(c, function(t) {
        if (n(e, t)) return h(c, "normal", !1);
    });
};
