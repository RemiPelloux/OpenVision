var n = require("./module-6744.js"), o = Math.max, i = Math.min;
module.exports = function(t, r) {
    var e = n(t);
    return e < 0 ? o(e + r, 0) : i(e, r);
};
