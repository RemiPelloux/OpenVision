var n = require("./module-6744.js"), o = RangeError;
module.exports = function(t) {
    var r = n(t);
    if (r < 0) throw new o("The argument can't be less than 0");
    return r;
};
