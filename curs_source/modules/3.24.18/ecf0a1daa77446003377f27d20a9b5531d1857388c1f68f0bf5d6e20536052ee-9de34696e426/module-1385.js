var s = require("./module-9539.js");
module.exports = function(t, e, i) {
    for(var n = t.length - 1; n >= 0; n--)if (void 0 !== t[n]) try {
        i = s(t[n].iterator, e, i);
    } catch (t) {
        e = "throw", i = t;
    }
    if ("throw" === e) throw i;
    return i;
};
