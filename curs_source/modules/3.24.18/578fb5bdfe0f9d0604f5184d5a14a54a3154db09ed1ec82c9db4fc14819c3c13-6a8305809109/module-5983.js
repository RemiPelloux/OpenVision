var a = require("./module-512.js");
module.exports = {
    create: function(e, t) {
        if (e instanceof (t = t || (0, eval)("this")).ArrayBuffer) {
            var n = require("./module-2774.js");
            return new a(new n(e, 0, e.byteLength, !0, t));
        }
        var r = require("./module-6702.js");
        return new a(new r(e, 0, e.length, !0));
    }
};
