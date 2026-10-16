var n = require("./module-5613.js"), o = require("./module-3628.js"), i = require("./module-9389.js"), a = require("./module-4224.js"), u = require("./module-2197.js");
n({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: require("./module-5234.js")(function() {
        return 4294967297 !== [].push.call({
            length: 4294967296
        }, 1);
    }) || !function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push();
        } catch (t) {
            return t instanceof TypeError;
        }
    }()
}, {
    push: function(t) {
        var r = o(this), e = i(r), n = arguments.length;
        u(e + n);
        for(var s = 0; s < n; s++)r[e] = arguments[s], e++;
        return a(r, e), e;
    }
});
