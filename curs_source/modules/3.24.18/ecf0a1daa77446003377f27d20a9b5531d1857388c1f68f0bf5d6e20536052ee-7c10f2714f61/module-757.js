var s = require("./module-7751.js"), n = require("./module-4901.js"), r = require("./module-1625.js"), a = require("./module-7040.js"), o = Object;
module.exports = a ? function(t) {
    return "symbol" == typeof t;
} : function(t) {
    var e = s("Symbol");
    return n(e) && r(e.prototype, o(t));
};
