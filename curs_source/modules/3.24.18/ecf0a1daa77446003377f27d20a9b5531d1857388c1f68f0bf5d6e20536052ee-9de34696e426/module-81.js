var s = require("./module-9565.js"), n = require("./module-9306.js"), r = require("./module-8551.js"), a = require("./module-6823.js"), o = require("./module-851.js"), l = TypeError;
module.exports = function(t, e) {
    var i = arguments.length < 2 ? o(t) : e;
    if (n(i)) return r(s(i, t));
    throw new l(a(t) + " is not iterable");
};
