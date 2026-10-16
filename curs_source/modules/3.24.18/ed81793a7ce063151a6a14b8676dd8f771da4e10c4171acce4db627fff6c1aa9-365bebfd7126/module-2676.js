var n = require("./module-6821.js"), o = TypeError;
module.exports = function(t) {
    if (n(t)) throw new o("ArrayBuffer is detached");
    return t;
};
