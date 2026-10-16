var n = require("./module-9944.js"), o = require("./module-4188.js"), i = require("./module-3770.js"), a = require("./module-3174.js"), u = require("./module-4366.js"), s = TypeError;
module.exports = function(t, r) {
    var e = arguments.length < 2 ? u(t) : r;
    if (o(e)) return i(n(e, t));
    throw new s(a(t) + " is not iterable");
};
