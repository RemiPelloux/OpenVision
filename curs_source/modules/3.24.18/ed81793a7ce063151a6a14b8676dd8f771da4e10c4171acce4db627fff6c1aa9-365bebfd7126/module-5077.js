var n = require("./module-2937.js"), o = require("./module-3243.js").add, i = require("./module-679.js"), a = require("./module-5558.js"), u = require("./module-7032.js");
module.exports = function(t) {
    var r = n(this), e = a(t).getIterator(), s = i(r);
    return u(e, function(t) {
        o(s, t);
    }), s;
};
