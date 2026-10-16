var s = require("./module-8551.js"), n = require("./module-9539.js");
module.exports = function(t, e, i, r) {
    try {
        return r ? e(s(i)[0], i[1]) : e(i);
    } catch (e) {
        n(t, "throw", e);
    }
};
