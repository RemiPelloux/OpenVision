var n = require("./module-6712.js"), o = String, i = TypeError;
module.exports = function(t) {
    if (n(t)) return t;
    throw new i("Can't set " + o(t) + " as a prototype");
};
