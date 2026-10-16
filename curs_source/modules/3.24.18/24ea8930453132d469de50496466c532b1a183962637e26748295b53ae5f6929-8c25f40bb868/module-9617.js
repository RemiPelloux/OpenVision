var toIndexedObject = require("./module-5397.js");
var toAbsoluteIndex = require("./module-5610.js");
var lengthOfArrayLike = require("./module-6198.js");
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            if (value !== value) return true;
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    includes: createMethod(true),
    indexOf: createMethod(false)
};
