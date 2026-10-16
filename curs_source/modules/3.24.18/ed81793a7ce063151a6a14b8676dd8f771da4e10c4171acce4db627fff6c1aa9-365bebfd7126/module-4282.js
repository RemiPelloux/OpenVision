var n = require("./module-9117.js"), o = require("./module-746.js"), i = require("./module-4418.js"), a = require("./module-6209.js"), u = require("./module-8944.js"), s = require("./module-9809.js"), c = n.Symbol, f = o("wks"), h = s ? c.for || c : c && c.withoutSetter || a;
module.exports = function(t) {
    return i(f, t) || (f[t] = u && i(c, t) ? c[t] : h("Symbol." + t)), f[t];
};
