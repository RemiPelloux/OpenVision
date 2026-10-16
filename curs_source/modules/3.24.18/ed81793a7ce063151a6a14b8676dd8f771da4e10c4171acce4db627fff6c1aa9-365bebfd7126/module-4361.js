var n = require("./module-2937.js"), o = require("./module-7173.js"), i = require("./module-9800.js"), a = require("./module-5558.js");
module.exports = function(t) {
    var r = n(this), e = a(t);
    return !(o(r) > e.size) && !1 !== i(r, function(t) {
        if (!e.includes(t)) return !1;
    }, !0);
};
