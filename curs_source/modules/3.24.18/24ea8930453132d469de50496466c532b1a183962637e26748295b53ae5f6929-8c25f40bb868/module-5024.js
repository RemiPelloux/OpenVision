var $ = require("./module-6518.js");
var symmetricDifference = require("./module-3650.js");
var setMethodGetKeysBeforeCloning = require("./module-9835.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var FORCED = !setMethodAcceptSetLike("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference");
$({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
}, {
    symmetricDifference
});
