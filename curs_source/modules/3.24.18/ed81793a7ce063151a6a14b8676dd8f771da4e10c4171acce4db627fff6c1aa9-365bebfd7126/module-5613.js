var n = require("./module-9117.js"), o = require("./module-9304.js").f, i = require("./module-8088.js"), a = require("./module-7509.js"), u = require("./module-4798.js"), s = require("./module-8657.js"), c = require("./module-8489.js");
module.exports = function(t, r) {
    var e, f, h, l, p, v = t.target, d = t.global, g = t.stat;
    if (e = d ? n : g ? n[v] || u(v, {}) : n[v] && n[v].prototype) for(f in r){
        if (l = r[f], h = t.dontCallGetSet ? (p = o(e, f)) && p.value : e[f], !c(d ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== h) {
            if (typeof l == typeof h) continue;
            s(l, h);
        }
        (t.sham || h && h.sham) && i(l, "sham", !0), a(e, f, l, t);
    }
};
