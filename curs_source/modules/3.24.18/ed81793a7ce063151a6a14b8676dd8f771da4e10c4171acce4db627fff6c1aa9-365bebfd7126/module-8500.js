var n = require("./module-9944.js"), o = require("./module-3770.js"), i = require("./module-2913.js");
module.exports = function(t, r, e) {
    var a, u;
    o(t);
    try {
        if (!(a = i(t, "return"))) {
            if ("throw" === r) throw e;
            return e;
        }
        a = n(a, t);
    } catch (t) {
        u = !0, a = t;
    }
    if ("throw" === r) throw e;
    if (u) throw a;
    return o(a), e;
};
