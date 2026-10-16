var n = require("./module-4977.js"), o = require("./module-3770.js"), i = require("./module-9944.js"), a = require("./module-6744.js"), u = require("./module-6002.js"), s = "Invalid size", c = RangeError, f = TypeError, h = Math.max, l = function(t, r) {
    this.set = t, this.size = h(r, 0), this.has = n(t.has), this.keys = n(t.keys);
};
l.prototype = {
    getIterator: function() {
        return u(o(i(this.keys, this.set)));
    },
    includes: function(t) {
        return i(this.has, this.set, t);
    }
}, module.exports = function(t) {
    o(t);
    var r = +t.size;
    if (r != r) throw new f(s);
    var e = a(r);
    if (e < 0) throw new c(s);
    return new l(t, e);
};
