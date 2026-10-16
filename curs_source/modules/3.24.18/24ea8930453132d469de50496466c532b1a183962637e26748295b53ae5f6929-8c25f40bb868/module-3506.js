var isPossiblePrototype = require("./module-3925.js");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
};
