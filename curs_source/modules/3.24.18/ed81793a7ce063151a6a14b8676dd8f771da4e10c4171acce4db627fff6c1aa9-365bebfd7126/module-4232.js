var n = require("./module-5613.js"), o = require("./module-4417.js"), i = require("./module-5604.js"), a = require("./module-6881.js"), u = require("./module-4977.js"), s = require("./module-9509.js"), c = require("./module-2344.js"), f = require("./module-8873.js"), h = require("./module-2197.js"), l = require("./module-5234.js"), p = Object.groupBy, v = i("Object", "create"), d = a([].push);
n({
    target: "Object",
    stat: !0,
    forced: !p || l(function() {
        return 1 !== p("ab", function(t) {
            return t;
        }).a.length;
    })
}, {
    groupBy: function(t, r) {
        s(t), u(r);
        var e = v(null), n = 0;
        return f(t, function(t) {
            h(n);
            var i = c(r(t, n++));
            i in e ? d(e[i], t) : o(e, i, [
                t
            ]);
        }), e;
    }
});
