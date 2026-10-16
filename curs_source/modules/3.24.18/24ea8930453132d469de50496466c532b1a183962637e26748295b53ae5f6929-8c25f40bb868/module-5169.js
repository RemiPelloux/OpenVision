var isDetached = require("./module-3238.js");
var $TypeError = TypeError;
module.exports = function(it) {
    if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
    return it;
};
