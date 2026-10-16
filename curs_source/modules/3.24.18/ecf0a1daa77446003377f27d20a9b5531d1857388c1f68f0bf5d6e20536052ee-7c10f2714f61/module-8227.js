var s = require("./module-4576.js"), n = require("./module-5745.js"), r = require("./module-9297.js"), a = require("./module-3392.js"), o = require("./module-4495.js"), l = require("./module-7040.js"), h = s.Symbol, c = n("wks"), d = l ? h.for || h : h && h.withoutSetter || a;
module.exports = function(t) {
    return r(c, t) || (c[t] = o && r(h, t) ? h[t] : d("Symbol." + t)), c[t];
};
