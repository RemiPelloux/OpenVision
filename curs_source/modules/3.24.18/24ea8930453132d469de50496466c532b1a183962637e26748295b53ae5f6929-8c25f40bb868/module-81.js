var call = require("./module-9565.js");
var aCallable = require("./module-9306.js");
var anObject = require("./module-8551.js");
var tryToString = require("./module-6823.js");
var getIteratorMethod = require("./module-851.js");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + " is not iterable");
};
