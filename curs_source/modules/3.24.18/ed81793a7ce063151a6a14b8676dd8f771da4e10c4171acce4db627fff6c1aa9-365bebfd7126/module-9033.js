var n = require("./module-5613.js"), o = require("./module-7059.js"), i = require("./module-5234.js");
n({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !require("./module-4471.js")("difference", function(t) {
        return 0 === t.size;
    }) || i(function() {
        var t = {
            size: 1,
            has: function() {
                return !0;
            },
            keys: function() {
                var t = 0;
                return {
                    next: function() {
                        var e = t++ > 1;
                        return r.has(1) && r.clear(), {
                            done: e,
                            value: 2
                        };
                    }
                };
            }
        }, r = new Set([
            1,
            2,
            3,
            4
        ]);
        return 3 !== r.difference(t).size;
    })
}, {
    difference: o
});
