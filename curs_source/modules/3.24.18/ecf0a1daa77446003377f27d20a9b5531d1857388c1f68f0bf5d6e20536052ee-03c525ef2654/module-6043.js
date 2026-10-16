var s = require("./module-9306.js"), n = TypeError, r = function(t) {
    var e, i;
    this.promise = new t(function(t, s) {
        if (void 0 !== e || void 0 !== i) throw new n("Bad Promise constructor");
        e = t, i = s;
    }), this.resolve = s(e), this.reject = s(i);
};
module.exports.f = function(t) {
    return new r(t);
};
