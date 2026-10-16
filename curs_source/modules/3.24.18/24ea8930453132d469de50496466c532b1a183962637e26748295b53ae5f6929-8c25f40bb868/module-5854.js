var toPrimitive = require("./module-2777.js");
var $TypeError = TypeError;
module.exports = function(argument) {
    var prim = toPrimitive(argument, "number");
    if (typeof prim == "number") throw new $TypeError("Can't convert number to bigint");
    return BigInt(prim);
};
