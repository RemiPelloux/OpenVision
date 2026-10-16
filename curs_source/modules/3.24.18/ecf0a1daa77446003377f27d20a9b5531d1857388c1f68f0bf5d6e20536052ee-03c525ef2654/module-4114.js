var s = require("./module-6518.js"), n = require("./module-8981.js"), r = require("./module-6198.js"), a = require("./module-4527.js"), o = require("./module-6837.js");
s({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: require("./module-9039.js")(function() {
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
        var e = n(this), i = r(e), s = arguments.length;
        o(i + s);
        for(var l = 0; l < s; l++)e[i] = arguments[l], i++;
        return a(e, i), i;
    }
});
