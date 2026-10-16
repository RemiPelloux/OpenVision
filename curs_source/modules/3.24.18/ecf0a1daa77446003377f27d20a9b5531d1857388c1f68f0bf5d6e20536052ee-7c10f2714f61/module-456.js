var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-9504.js"), a = require("./module-4154.js"), o = require("./module-5169.js"), l = r(1.1.toString), h = n.Uint8Array, c = !h || !h.prototype.toHex || !function() {
    try {
        return "ffffffffffffffff" === new h([
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
        ]).toHex();
    } catch (t) {
        return !1;
    }
}();
h && s({
    target: "Uint8Array",
    proto: !0,
    forced: c
}, {
    toHex: function() {
        a(this), o(this.buffer);
        for(var t = "", e = 0, i = this.length; e < i; e++){
            var s = l(this[e], 16);
            t += 1 === s.length ? "0" + s : s;
        }
        return t;
    }
});
