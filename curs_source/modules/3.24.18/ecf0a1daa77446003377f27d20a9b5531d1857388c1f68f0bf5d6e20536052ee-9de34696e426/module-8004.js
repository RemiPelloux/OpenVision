var s = require("./module-6518.js"), n = require("./module-9039.js"), r = require("./module-8750.js");
s({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !require("./module-4916.js")("intersection", function(t) {
        return 2 === t.size && t.has(1) && t.has(2);
    }) || n(function() {
        return "3,2" !== String(Array.from(new Set([
            1,
            2,
            3
        ]).intersection(new Set([
            3,
            2
        ]))));
    })
}, {
    intersection: r
});
