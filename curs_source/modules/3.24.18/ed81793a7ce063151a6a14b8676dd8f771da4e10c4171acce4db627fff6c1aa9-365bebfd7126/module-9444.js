var n = require("./module-4977.js"), o = TypeError, i = function(t) {
    var r, e;
    this.promise = new t(function(t, n) {
        if (void 0 !== r || void 0 !== e) throw new o("Bad Promise constructor");
        r = t, e = n;
    }), this.resolve = n(r), this.reject = n(e);
};
module.exports.f = function(t) {
    return new i(t);
};
