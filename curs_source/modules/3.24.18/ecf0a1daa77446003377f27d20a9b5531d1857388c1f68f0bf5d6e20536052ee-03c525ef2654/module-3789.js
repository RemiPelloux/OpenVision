var s = require("./module-9306.js"), n = require("./module-8551.js"), r = require("./module-9565.js"), a = require("./module-1291.js"), o = require("./module-1767.js"), l = "Invalid size", h = RangeError, c = TypeError, d = Math.max, u = function(t, e) {
    this.set = t, this.size = d(e, 0), this.has = s(t.has), this.keys = s(t.keys);
};
u.prototype = {
    getIterator: function() {
        return o(n(r(this.keys, this.set)));
    },
    includes: function(t) {
        return r(this.has, this.set, t);
    }
}, module.exports = function(t) {
    n(t);
    var e = +t.size;
    if (e != e) throw new c(l);
    var i = a(e);
    if (i < 0) throw new h(l);
    return new u(t, i);
};
