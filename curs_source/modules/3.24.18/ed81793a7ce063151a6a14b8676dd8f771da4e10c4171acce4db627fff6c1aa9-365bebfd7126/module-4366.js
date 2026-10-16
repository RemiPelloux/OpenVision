var n = require("./module-8689.js"), o = require("./module-4318.js"), i = require("./module-2913.js"), a = require("./module-4282.js")("iterator"), u = Array.prototype;
module.exports = function(t) {
    if (!o(t)) return i(t, a) || i(t, "@@iterator") || ("Arguments" === n(t) ? u[a] : void 0);
};
