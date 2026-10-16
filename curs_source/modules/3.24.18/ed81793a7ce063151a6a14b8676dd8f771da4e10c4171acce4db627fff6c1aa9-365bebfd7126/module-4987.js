var n = require("./module-831.js"), o = require("./module-3086.js").get;
module.exports = function(t) {
    if (!n(t)) return !1;
    var r = o(t);
    return !!r && "RawJSON" === r.type;
};
