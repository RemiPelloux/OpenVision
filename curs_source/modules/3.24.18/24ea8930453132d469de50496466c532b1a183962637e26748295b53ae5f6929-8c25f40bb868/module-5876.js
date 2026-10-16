var $ = require("./module-6518.js");
var isSubsetOf = require("./module-3838.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var INCORRECT = !setMethodAcceptSetLike("isSubsetOf", function(result) {
    return result;
});
$({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
}, {
    isSubsetOf
});
