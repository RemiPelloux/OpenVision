var n = require("./module-3770.js"), o = require("./module-8500.js");
module.exports = function(t, r, e, i) {
    try {
        return i ? r(n(e)[0], e[1]) : r(e);
    } catch (r) {
        o(t, "throw", r);
    }
};
