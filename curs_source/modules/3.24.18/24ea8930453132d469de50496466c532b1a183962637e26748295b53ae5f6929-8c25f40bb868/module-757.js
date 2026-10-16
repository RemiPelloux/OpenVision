var getBuiltIn = require("./module-7751.js");
var isCallable = require("./module-4901.js");
var isPrototypeOf = require("./module-1625.js");
var USE_SYMBOL_AS_UID = require("./module-7040.js");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};
