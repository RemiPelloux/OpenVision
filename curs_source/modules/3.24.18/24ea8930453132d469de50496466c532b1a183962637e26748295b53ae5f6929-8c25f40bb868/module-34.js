var isCallable = require("./module-4901.js");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};
