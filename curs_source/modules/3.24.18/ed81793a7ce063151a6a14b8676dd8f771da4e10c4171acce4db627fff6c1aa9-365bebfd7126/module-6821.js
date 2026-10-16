var n = require("./module-9117.js"), o = require("./module-8732.js"), i = require("./module-1617.js"), a = n.DataView;
module.exports = function(t) {
    if (!o || 0 !== i(t)) return !1;
    try {
        return new a(t), !1;
    } catch (t) {
        return !0;
    }
};
