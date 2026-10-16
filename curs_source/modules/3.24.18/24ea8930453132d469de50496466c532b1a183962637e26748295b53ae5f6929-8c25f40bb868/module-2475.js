var $ = require("./module-6518.js");
var isSupersetOf = require("./module-8527.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var INCORRECT = !setMethodAcceptSetLike("isSupersetOf", function(result) {
    return !result;
});
$({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
}, {
    isSupersetOf
});
