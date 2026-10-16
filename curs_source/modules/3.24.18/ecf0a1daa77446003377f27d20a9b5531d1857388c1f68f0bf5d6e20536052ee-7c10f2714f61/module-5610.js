var s = require("./module-1291.js"), n = Math.max, r = Math.min;
module.exports = function(t, e) {
    var i = s(t);
    return i < 0 ? n(i + e, 0) : r(i, e);
};
