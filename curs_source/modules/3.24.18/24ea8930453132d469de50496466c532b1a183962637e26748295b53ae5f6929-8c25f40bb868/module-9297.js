var uncurryThis = require("./module-9504.js");
var toObject = require("./module-8981.js");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};
