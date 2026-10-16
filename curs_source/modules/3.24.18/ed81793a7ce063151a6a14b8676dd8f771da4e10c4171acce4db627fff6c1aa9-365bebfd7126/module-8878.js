var n = require("./module-5613.js"), o = require("./module-4977.js"), i = require("./module-8093.js"), a = require("./module-1942.js"), u = i.get, s = i.has, c = i.set;
n({
    target: "Map",
    proto: !0,
    real: !0,
    forced: a
}, {
    getOrInsertComputed: function(t, r) {
        var e = s(this, t);
        if (o(r), e) return u(this, t);
        0 === t && 1 / t == -1 / 0 && (t = 0);
        var n = r(t);
        return c(this, t, n), n;
    }
});
