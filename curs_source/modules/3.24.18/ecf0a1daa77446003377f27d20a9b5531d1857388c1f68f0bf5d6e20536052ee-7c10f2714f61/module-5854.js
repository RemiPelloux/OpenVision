var s = require("./module-2777.js"), n = TypeError;
module.exports = function(t) {
    var e = s(t, "number");
    if ("number" == typeof e) throw new n("Can't convert number to bigint");
    return BigInt(e);
};
