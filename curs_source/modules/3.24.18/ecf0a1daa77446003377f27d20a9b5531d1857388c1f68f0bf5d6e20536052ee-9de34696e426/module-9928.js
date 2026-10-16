var s = require("./module-6198.js"), n = require("./module-1291.js"), r = RangeError;
module.exports = function(t, e, i, a) {
    var o = s(t), l = n(i), h = l < 0 ? o + l : l;
    if (h >= o || h < 0) throw new r("Incorrect index");
    for(var c = new e(o), d = 0; d < o; d++)c[d] = d === h ? a : t[d];
    return c;
};
