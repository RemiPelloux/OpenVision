var n = require("./module-4752.js"), o = require("./module-8500.js"), i = RangeError, a = TypeError, u = "Chunk size must be an integer in [1, 2^32-1]";
module.exports = function(t, r) {
    return "number" == typeof t && n(t) ? 0 === t || t >>> 0 !== t ? o(r, "throw", new i(u)) : void 0 : o(r, "throw", new a(u));
};
