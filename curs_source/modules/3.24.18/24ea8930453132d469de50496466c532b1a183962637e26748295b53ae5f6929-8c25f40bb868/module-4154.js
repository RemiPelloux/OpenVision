var classof = require("./module-6955.js");
var $TypeError = TypeError;
module.exports = function(argument) {
    if (classof(argument) === "Uint8Array") return argument;
    throw new $TypeError("Argument is not an Uint8Array");
};
