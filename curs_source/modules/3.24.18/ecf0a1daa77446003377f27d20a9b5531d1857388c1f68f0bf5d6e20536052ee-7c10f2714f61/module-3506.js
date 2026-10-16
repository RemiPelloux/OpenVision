var s = require("./module-3925.js"), n = String, r = TypeError;
module.exports = function(t) {
    if (s(t)) return t;
    throw new r("Can't set " + n(t) + " as a prototype");
};
