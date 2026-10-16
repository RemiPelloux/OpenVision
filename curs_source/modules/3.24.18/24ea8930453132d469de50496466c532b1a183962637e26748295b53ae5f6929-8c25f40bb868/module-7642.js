var $ = require("./module-6518.js");
var difference = require("./module-3440.js");
var fails = require("./module-9039.js");
var setMethodAcceptSetLike = require("./module-4916.js");
var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike("difference", function(result) {
    return result.size === 0;
});
var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function() {
    var setLike = {
        size: 1,
        has: function() {
            return true;
        },
        keys: function() {
            var index = 0;
            return {
                next: function() {
                    var done = index++ > 1;
                    if (baseSet.has(1)) baseSet.clear();
                    return {
                        done,
                        value: 2
                    };
                }
            };
        }
    };
    var baseSet = new Set([
        1,
        2,
        3,
        4
    ]);
    return baseSet.difference(setLike).size !== 3;
});
$({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
}, {
    difference
});
