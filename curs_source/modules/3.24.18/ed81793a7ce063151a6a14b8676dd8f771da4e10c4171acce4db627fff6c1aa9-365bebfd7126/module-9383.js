var n = require("./module-2037.js").IteratorPrototype, o = require("./module-7065.js"), i = require("./module-9123.js"), a = require("./module-3754.js"), u = require("./module-9164.js"), s = function() {
    return this;
};
module.exports = function(t, r, e, c) {
    var f = r + " Iterator";
    return t.prototype = o(n, {
        next: i(+!c, e)
    }), a(t, f, !1, !0), u[f] = s, t;
};
