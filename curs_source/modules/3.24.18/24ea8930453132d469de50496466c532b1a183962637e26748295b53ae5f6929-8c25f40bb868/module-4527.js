var DESCRIPTORS = require("./module-3724.js");
var isArray = require("./module-4376.js");
var $TypeError = TypeError;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
    if (this !== void 0) return true;
    try {
        Object.defineProperty([], "length", {
            writable: false
        }).length = 1;
    } catch (error) {
        return error instanceof TypeError;
    }
}();
module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
    }
    return O.length = length;
} : function(O, length) {
    return O.length = length;
};
