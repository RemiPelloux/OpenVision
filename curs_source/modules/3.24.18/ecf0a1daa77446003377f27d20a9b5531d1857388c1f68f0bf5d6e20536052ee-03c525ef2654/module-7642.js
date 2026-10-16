var s = require("./module-6518.js"), n = require("./module-3440.js"), r = require("./module-9039.js");
s({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !require("./module-4916.js")("difference", function(t) {
        return 0 === t.size;
    }) || r(function() {
        var t = {
            size: 1,
            has: function() {
                return !0;
            },
            keys: function() {
                var t = 0;
                return {
                    next: function() {
                        var i = t++ > 1;
                        return e.has(1) && e.clear(), {
                            done: i,
                            value: 2
                        };
                    }
                };
            }
        }, e = new Set([
            1,
            2,
            3,
            4
        ]);
        return 3 !== e.difference(t).size;
    })
}, {
    difference: n
});
