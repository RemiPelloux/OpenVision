var toIntegerOrInfinity = require("./module-1291.js");
var max = Math.max;
var min = Math.min;
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};
