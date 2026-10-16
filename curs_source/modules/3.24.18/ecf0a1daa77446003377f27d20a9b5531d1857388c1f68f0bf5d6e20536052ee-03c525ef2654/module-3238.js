var s = require("./module-4576.js"), n = require("./module-7811.js"), r = require("./module-7394.js"), a = s.DataView;
module.exports = function(t) {
    if (!n || 0 !== r(t)) return !1;
    try {
        return new a(t), !1;
    } catch (t) {
        return !0;
    }
};
