var s = require("./module-9565.js"), n = require("./module-8551.js"), r = require("./module-5966.js");
module.exports = function(t, e, i) {
    var a, o;
    n(t);
    try {
        if (!(a = r(t, "return"))) {
            if ("throw" === e) throw i;
            return i;
        }
        a = s(a, t);
    } catch (t) {
        o = !0, a = t;
    }
    if ("throw" === e) throw i;
    if (o) throw a;
    return n(a), i;
};
