var $ = require("./module-6518.js");
var union = require("./module-4204.js");
var setMethodGetKeysBeforeCloning = require("./module-9835.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var FORCED = !setMethodAcceptSetLike("union") || !setMethodGetKeysBeforeCloning("union");
$({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
}, {
    union
});
