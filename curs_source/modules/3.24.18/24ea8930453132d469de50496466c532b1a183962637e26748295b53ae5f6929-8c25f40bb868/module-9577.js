var arrayWith = require("./module-9928.js");
var ArrayBufferViewCore = require("./module-4644.js");
var isBigIntArray = require("./module-1108.js");
var toIntegerOrInfinity = require("./module-1291.js");
var toBigInt = require("./module-5854.js");
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var PROPER_ORDER = function() {
    try {
        new Int8Array(1)["with"](2, {
            valueOf: function() {
                throw 8;
            }
        });
    } catch (error) {
        return error === 8;
    }
}();
var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && function() {
    try {
        new Int8Array(1)["with"](-0.5, 1);
    } catch (error) {
        return true;
    }
}();
exportTypedArrayMethod("with", {
    "with": function(index, value) {
        var O = aTypedArray(this);
        var relativeIndex = toIntegerOrInfinity(index);
        var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
        return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
    }
}["with"], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);
