var $ = require("./module-6518.js");
var isDisjointFrom = require("./module-4449.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var INCORRECT = !setMethodAcceptSetLike("isDisjointFrom", function(result) {
    return !result;
});
$({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
}, {
    isDisjointFrom
});
