var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-4977.js"), a = require("./module-9444.js"), u = require("./module-6042.js"), s = require("./module-8873.js");
n({
    target: "Promise",
    stat: !0,
    forced: require("./module-6292.js")
}, {
    race: function(t) {
        var r = this, e = a.f(r), n = e.reject, c = u(function() {
            var a = i(r.resolve);
            s(t, function(t) {
                o(a, r, t).then(e.resolve, n);
            });
        });
        return c.error && n(c.value), e.promise;
    }
});
