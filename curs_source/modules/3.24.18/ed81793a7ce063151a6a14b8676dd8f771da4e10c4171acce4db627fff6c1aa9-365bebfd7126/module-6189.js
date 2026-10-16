var n = require("./module-5613.js"), o = require("./module-6881.js"), i = require("./module-4977.js"), a = require("./module-9509.js"), u = require("./module-8873.js"), s = require("./module-2197.js"), c = require("./module-8093.js"), f = require("./module-1942.js"), h = require("./module-5234.js"), l = c.Map, p = c.has, v = c.get, d = c.set, g = o([].push), y = f || h(function() {
    return 1 !== l.groupBy("ab", function(t) {
        return t;
    }).get("a").length;
});
n({
    target: "Map",
    stat: !0,
    forced: f || y
}, {
    groupBy: function(t, r) {
        a(t), i(r);
        var e = new l, n = 0;
        return u(t, function(t) {
            s(n);
            var o = r(t, n++);
            p(e, o) ? g(v(e, o), t) : d(e, o, [
                t
            ]);
        }), e;
    }
});
