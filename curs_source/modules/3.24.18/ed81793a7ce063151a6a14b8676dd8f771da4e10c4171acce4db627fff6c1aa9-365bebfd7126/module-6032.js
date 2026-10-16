var n = require("./module-5604.js"), o = require("./module-4188.js"), i = require("./module-4578.js"), a = require("./module-9809.js"), u = Object;
module.exports = a ? function(t) {
    return "symbol" == typeof t;
} : function(t) {
    var r = n("Symbol");
    return o(r) && i(r.prototype, u(t));
};
