var n = require("./module-866.js"), o = require("./module-3174.js"), i = TypeError;
module.exports = function(t) {
    if (n(t)) return t;
    throw new i(o(t) + " is not a constructor");
};
