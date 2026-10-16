var isObject = require("./module-34.js");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};
