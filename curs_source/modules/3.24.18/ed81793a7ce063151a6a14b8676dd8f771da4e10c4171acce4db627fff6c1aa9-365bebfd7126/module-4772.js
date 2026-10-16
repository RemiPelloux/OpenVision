var n = require("./module-5613.js"), o = require("./module-5691.js"), i = require("./module-5234.js"), a = require("./module-8633.js"), u = require("./module-3770.js"), s = require("./module-675.js"), c = require("./module-7611.js"), f = a.ArrayBuffer, h = a.DataView, l = h.prototype, p = o(f.prototype.slice), v = o(l.getUint8), d = o(l.setUint8);
n({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: i(function() {
        return !new f(2).slice(1, void 0).byteLength;
    })
}, {
    slice: function(t, r) {
        if (p && void 0 === r) return p(u(this), t);
        for(var e = u(this).byteLength, n = s(t, e), o = s(void 0 === r ? e : r, e), i = new f(c(o - n)), a = new h(this), l = new h(i), g = 0; n < o;)d(l, g++, v(a, n++));
        return i;
    }
});
