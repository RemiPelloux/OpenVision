var n = require("./module-4418.js"), o = require("./module-4188.js"), i = require("./module-3628.js"), a = require("./module-168.js"), u = require("./module-680.js"), s = a("IE_PROTO"), c = Object, f = c.prototype;
module.exports = u ? c.getPrototypeOf : function(t) {
    var r = i(t);
    if (n(r, s)) return r[s];
    var e = r.constructor;
    return o(e) && r instanceof e ? e.prototype : r instanceof c ? f : null;
};
