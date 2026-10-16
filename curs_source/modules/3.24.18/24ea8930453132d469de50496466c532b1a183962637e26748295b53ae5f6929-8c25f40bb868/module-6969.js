var toPrimitive = require("./module-2777.js");
var isSymbol = require("./module-757.js");
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};
