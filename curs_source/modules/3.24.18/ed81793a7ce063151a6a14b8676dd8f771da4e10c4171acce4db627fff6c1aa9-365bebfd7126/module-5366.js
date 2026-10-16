var n = require("./module-8500.js");
module.exports = function(t, r, e) {
    for(var o = t.length - 1; o >= 0; o--)if (void 0 !== t[o]) try {
        e = n(t[o].iterator, r, e);
    } catch (t) {
        r = "throw", e = t;
    }
    if ("throw" === r) throw e;
    return e;
};
