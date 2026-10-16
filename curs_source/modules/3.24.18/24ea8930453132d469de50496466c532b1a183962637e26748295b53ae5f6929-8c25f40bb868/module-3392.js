var uncurryThis = require("./module-9504.js");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);
module.exports = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
};
