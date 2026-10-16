var n = require("./module-4212.js").charAt, o = require("./module-2618.js"), i = require("./module-3086.js"), a = require("./module-3217.js"), u = require("./module-6224.js"), s = "String Iterator", c = i.set, f = i.getterFor(s);
a(String, "String", function(t) {
    c(this, {
        type: s,
        string: o(t),
        index: 0
    });
}, function() {
    var t, r = f(this), e = r.string, o = r.index;
    return o >= e.length ? u(void 0, !0) : (t = n(e, o), r.index += t.length, u(t, !1));
});
