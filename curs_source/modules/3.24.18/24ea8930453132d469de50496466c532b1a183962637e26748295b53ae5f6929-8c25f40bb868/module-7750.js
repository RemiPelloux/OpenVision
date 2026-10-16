var isNullOrUndefined = require("./module-4117.js");
var $TypeError = TypeError;
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};
