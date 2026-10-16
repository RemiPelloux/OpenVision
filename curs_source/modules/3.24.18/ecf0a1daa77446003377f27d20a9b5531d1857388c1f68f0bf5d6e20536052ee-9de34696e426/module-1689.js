var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-8745.js"), a = require("./module-7680.js"), o = require("./module-6043.js"), l = require("./module-9306.js"), h = require("./module-1103.js"), c = n.Promise, d = !1;
s({
    target: "Promise",
    stat: !0,
    forced: !c || !c.try || h(function() {
        c.try(function(t) {
            d = 8 === t;
        }, 8);
    }).error || !d
}, {
    try: function(t) {
        var e = arguments.length > 1 ? a(arguments, 1) : [], i = o.f(this), s = h(function() {
            return r(l(t), void 0, e);
        });
        return (s.error ? i.reject : i.resolve)(s.value), i.promise;
    }
});
