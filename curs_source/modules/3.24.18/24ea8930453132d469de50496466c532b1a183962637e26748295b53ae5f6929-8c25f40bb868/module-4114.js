var $ = require("./module-6518.js");
var toObject = require("./module-8981.js");
var lengthOfArrayLike = require("./module-6198.js");
var setArrayLength = require("./module-4527.js");
var doesNotExceedSafeInteger = require("./module-6837.js");
var fails = require("./module-9039.js");
var INCORRECT_TO_LENGTH = fails(function() {
    return [].push.call({
        length: 4294967296
    }, 1) !== 4294967297;
});
var properErrorOnNonWritableLength = function() {
    try {
        Object.defineProperty([], "length", {
            writable: false
        }).push();
    } catch (error) {
        return error instanceof TypeError;
    }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
$({
    target: "Array",
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for(var i = 0; i < argCount; i++){
            O[len] = arguments[i];
            len++;
        }
        setArrayLength(O, len);
        return len;
    }
});
