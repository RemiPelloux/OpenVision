var n = require("./module-5613.js"), o = require("./module-5234.js"), i = require("./module-3721.js");
n({
    target: "Set",
    proto: !0,
    real: !0,
    forced: !require("./module-4471.js")("intersection", function(t) {
        return 2 === t.size && t.has(1) && t.has(2);
    }) || o(function() {
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
    intersection: i
});
