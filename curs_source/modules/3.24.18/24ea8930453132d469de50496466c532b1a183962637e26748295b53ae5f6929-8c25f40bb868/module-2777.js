var call = require("./module-9565.js");
var isObject = require("./module-34.js");
var isSymbol = require("./module-757.js");
var getMethod = require("./module-5966.js");
var ordinaryToPrimitive = require("./module-4270.js");
var wellKnownSymbol = require("./module-8227.js");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === void 0) pref = "number";
    return ordinaryToPrimitive(input, pref);
};
