var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-3463.js"), a = require("./module-4154.js"), o = require("./module-5169.js"), l = require("./module-2303.js");
n.Uint8Array && s({
    target: "Uint8Array",
    proto: !0
}, {
    setFromHex: function(t) {
        a(this), r(t), o(this.buffer);
        var e = l(t, this).read;
        return {
            read: e,
            written: e / 2
        };
    }
});
