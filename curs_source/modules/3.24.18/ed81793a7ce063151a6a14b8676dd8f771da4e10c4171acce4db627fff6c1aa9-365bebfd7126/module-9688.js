var n = require("./module-5613.js"), o = require("./module-9944.js"), i = require("./module-3628.js"), a = require("./module-4578.js"), u = require("./module-2037.js").IteratorPrototype, s = require("./module-2331.js"), c = require("./module-1829.js"), f = require("./module-1942.js") || function() {
    try {
        Iterator.from({
            return: null
        }).return();
    } catch (t) {
        return !0;
    }
}(), h = s(function() {
    return o(this.next, this.iterator);
}, !0);
n({
    target: "Iterator",
    stat: !0,
    forced: f
}, {
    from: function(t) {
        var r = c("string" == typeof t ? i(t) : t, !0);
        return a(u, r.iterator) ? r.iterator : new h(r);
    }
});
