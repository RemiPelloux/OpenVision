var lengthOfArrayLike = require("./module-6198.js");
var toIntegerOrInfinity = require("./module-1291.js");
var $RangeError = RangeError;
module.exports = function(O, C, index, value) {
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    if (actualIndex >= len || actualIndex < 0) throw new $RangeError("Incorrect index");
    var A = new C(len);
    var k = 0;
    for(; k < len; k++)A[k] = k === actualIndex ? value : O[k];
    return A;
};
