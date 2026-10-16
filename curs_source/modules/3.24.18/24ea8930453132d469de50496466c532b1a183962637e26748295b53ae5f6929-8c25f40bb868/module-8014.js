var toIntegerOrInfinity = require("./module-1291.js");
var min = Math.min;
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 9007199254740991) : 0;
};
