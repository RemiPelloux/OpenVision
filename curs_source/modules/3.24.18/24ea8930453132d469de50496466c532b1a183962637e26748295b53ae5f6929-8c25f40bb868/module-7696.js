var toIntegerOrInfinity = require("./module-1291.js");
var toLength = require("./module-8014.js");
var $RangeError = RangeError;
module.exports = function(it) {
    if (it === void 0) return 0;
    var number = toIntegerOrInfinity(it);
    var length = toLength(number);
    if (number !== length) throw new $RangeError("Wrong length or index");
    return length;
};
