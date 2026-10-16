var s = require("./module-7080.js"), n = require("./module-5170.js"), r = require("./module-8469.js"), a = require("./module-3789.js");
module.exports = function(t) {
    var e = s(this), i = a(t);
    return !(n(e) > i.size) && !1 !== r(e, function(t) {
        if (!i.includes(t)) return !1;
    }, !0);
};
