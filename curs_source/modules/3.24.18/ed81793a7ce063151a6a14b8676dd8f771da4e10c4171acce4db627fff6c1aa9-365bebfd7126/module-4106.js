var n = require("./module-3770.js"), o = require("./module-9944.js"), i = require("./module-2331.js"), a = require("./module-6224.js"), u = require("./module-6002.js"), s = require("./module-8500.js"), c = require("./module-2175.js"), f = require("./module-6881.js"), h = TypeError, l = f([].push), p = f([].slice), v = "allow-partial", d = i(function() {
    for(var t, r, e = this.iterator, i = this.next, u = this.buffer, s = this.windowSize, c = this.allowPartial;;){
        if (t = n(o(i, e)), r = this.done = !!t.done, c && r && u.length && u.length < s) return a(p(u, 0), !1);
        if (r) return a(void 0, !0);
        if (u.length === s && (this.buffer = u = p(u, 1)), l(u, t.value), u.length === s) return a(p(u, 0), !1);
    }
}, !1, !0);
module.exports = function(t, r, e) {
    return n(t), c(r, t), void 0 !== e && "only-full" !== e && e !== v ? s(t, "throw", new h("Incorrect `undersized` argument")) : new d(u(t), {
        windowSize: r,
        buffer: [],
        allowPartial: e === v
    });
};
