var anObject = require("./module-8551.js");
var iteratorClose = require("./module-9539.js");
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator, "throw", error);
    }
};
