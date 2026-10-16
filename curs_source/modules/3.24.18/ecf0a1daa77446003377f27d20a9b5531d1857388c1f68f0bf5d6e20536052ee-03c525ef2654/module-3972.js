var s = require("./module-34.js"), n = String, r = TypeError;
module.exports = function(t) {
    if (void 0 === t || s(t)) return t;
    throw new r(n(t) + " is not an object or undefined");
};
