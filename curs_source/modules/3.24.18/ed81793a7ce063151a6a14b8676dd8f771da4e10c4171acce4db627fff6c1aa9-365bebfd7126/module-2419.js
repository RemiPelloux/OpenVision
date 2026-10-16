var n = require("./module-5613.js"), o = require("./module-3770.js"), i = require("./module-9944.js"), a = require("./module-2331.js"), u = require("./module-6002.js"), s = require("./module-2175.js"), c = require("./module-6881.js"), f = require("./module-1942.js"), h = c([].push), l = a(function() {
    for(var t, r = this.iterator, e = this.next, n = this.chunkSize, a = [];;){
        if (!!(t = o(i(e, r))).done) return a.length ? a : void (this.done = !0);
        if (h(a, t.value), a.length === n) return a;
    }
});
n({
    target: "Iterator",
    proto: !0,
    real: !0,
    forced: f
}, {
    chunks: function(t) {
        return o(this), s(t, this), new l(u(this), {
            chunkSize: t
        });
    }
});
