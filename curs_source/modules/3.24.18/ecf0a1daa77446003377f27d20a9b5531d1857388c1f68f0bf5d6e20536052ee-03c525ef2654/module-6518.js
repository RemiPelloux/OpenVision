var s = require("./module-4576.js"), n = require("./module-7347.js").f, r = require("./module-6699.js"), a = require("./module-6840.js"), o = require("./module-9433.js"), l = require("./module-7740.js"), h = require("./module-2796.js");
module.exports = function(t, e) {
    var i, c, d, u, p, g = t.target, m = t.global, f = t.stat;
    if (i = m ? s : f ? s[g] || o(g, {}) : s[g] && s[g].prototype) for(c in e){
        if (u = e[c], d = t.dontCallGetSet ? (p = n(i, c)) && p.value : i[c], !h(m ? c : g + (f ? "." : "#") + c, t.forced) && void 0 !== d) {
            if (typeof u == typeof d) continue;
            l(u, d);
        }
        (t.sham || d && d.sham) && r(u, "sham", !0), a(i, c, u, t);
    }
};
