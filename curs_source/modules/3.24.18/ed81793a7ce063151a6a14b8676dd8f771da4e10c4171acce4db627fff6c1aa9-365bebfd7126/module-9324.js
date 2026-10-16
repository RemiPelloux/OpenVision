var n = require("./module-5613.js"), o = require("./module-8093.js"), i = require("./module-1942.js"), a = o.get, u = o.has, s = o.set;
n({
    target: "Map",
    proto: !0,
    real: !0,
    forced: i
}, {
    getOrInsert: function(t, r) {
        return u(this, t) ? a(this, t) : (s(this, t, r), r);
    }
});
