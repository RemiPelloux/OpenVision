var $ = require("./module-6518.js");
var fails = require("./module-9039.js");
var intersection = require("./module-8750.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var INCORRECT = !setMethodAcceptSetLike("intersection", function(result) {
    return result.size === 2 && result.has(1) && result.has(2);
}) || fails(function() {
    return String(Array.from(new Set([
        1,
        2,
        3
    ]).intersection(new Set([
        3,
        2
    ])))) !== "3,2";
});
$({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
}, {
    intersection
});
