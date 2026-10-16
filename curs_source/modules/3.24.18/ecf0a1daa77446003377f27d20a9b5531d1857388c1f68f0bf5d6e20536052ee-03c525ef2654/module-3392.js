var s = require("./module-9504.js"), n = 0, r = Math.random(), a = s(1.1.toString);
module.exports = function(t) {
    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++n + r, 36);
};
