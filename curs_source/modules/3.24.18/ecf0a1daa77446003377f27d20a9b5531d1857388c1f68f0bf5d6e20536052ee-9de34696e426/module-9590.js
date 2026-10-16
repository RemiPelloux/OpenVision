var s = require("./module-1291.js"), n = RangeError;
module.exports = function(t) {
    var e = s(t);
    if (e < 0) throw new n("The argument can't be less than 0");
    return e;
};
