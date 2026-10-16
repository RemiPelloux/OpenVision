var n = require("./module-9117.js"), o = require("./module-9429.js"), i = require("./module-7463.js"), a = require("./module-3873.js"), u = require("./module-8088.js"), s = require("./module-3754.js"), c = require("./module-4282.js")("iterator"), f = a.values, h = function(t, r) {
    if (t) {
        if (t[c] !== f) try {
            u(t, c, f);
        } catch (r) {
            t[c] = f;
        }
        if (s(t, r, !0), o[r]) {
            for(var e in a)if (t[e] !== a[e]) try {
                u(t, e, a[e]);
            } catch (r) {
                t[e] = a[e];
            }
        }
    }
};
for(var l in o)h(n[l] && n[l].prototype, l);
h(i, "DOMTokenList");
