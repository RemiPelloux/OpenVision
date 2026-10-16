var n = require("./module-380.js"), o = require("./module-5458.js"), i = require("./module-9164.js"), a = require("./module-3086.js"), u = require("./module-4466.js").f, s = require("./module-3217.js"), c = require("./module-6224.js"), f = require("./module-1942.js"), h = require("./module-6893.js"), l = "Array Iterator", p = a.set, v = a.getterFor(l);
module.exports = s(Array, "Array", function(t, r) {
    p(this, {
        type: l,
        target: n(t),
        index: 0,
        kind: r
    });
}, function() {
    var t = v(this), r = t.target, e = t.index++;
    if (!r || e >= r.length) return t.target = null, c(void 0, !0);
    switch(t.kind){
        case "keys":
            return c(e, !1);
        case "values":
            return c(r[e], !1);
    }
    return c([
        e,
        r[e]
    ], !1);
}, "values");
var d = i.Arguments = i.Array;
if (o("keys"), o("values"), o("entries"), !f && h && "values" !== d.name) try {
    u(d, "name", {
        value: "values"
    });
} catch (t) {}
