var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-4977.js"), a = require("./module-9444.js"), u = require("./module-6042.js"), s = require("./module-8873.js");
n({
    target: "Promise",
    stat: !0,
    forced: require("./module-6292.js")
}, {
    all: function(t) {
        var r = this, e = a.f(r), n = e.resolve, c = e.reject, f = u(function() {
            var e = i(r.resolve), a = [], u = 0, f = 1;
            s(t, function(t) {
                var i = u++, s = !1;
                f++, o(e, r, t).then(function(t) {
                    s || (s = !0, a[i] = t, --f || n(a));
                }, c);
            }), --f || n(a);
        });
        return f.error && c(f.value), e.promise;
    }
});
