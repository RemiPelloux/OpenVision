var n = require("./module-3770.js"), o = require("./module-831.js"), i = require("./module-9444.js");
module.exports = function(t, r) {
    if (n(t), o(r) && r.constructor === t) return r;
    var e = i.f(t);
    return (0, e.resolve)(r), e.promise;
};
