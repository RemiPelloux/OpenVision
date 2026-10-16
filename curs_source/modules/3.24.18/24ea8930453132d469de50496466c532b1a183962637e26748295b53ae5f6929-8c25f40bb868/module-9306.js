var isCallable = require("./module-4901.js");
var tryToString = require("./module-6823.js");
var $TypeError = TypeError;
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};
