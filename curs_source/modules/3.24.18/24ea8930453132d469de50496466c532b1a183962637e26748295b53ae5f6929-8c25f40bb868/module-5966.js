var aCallable = require("./module-9306.js");
var isNullOrUndefined = require("./module-4117.js");
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? void 0 : aCallable(func);
};
