var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-9504.js"), a = require("./module-3972.js"), o = require("./module-4154.js"), l = require("./module-5169.js"), h = require("./module-2804.js"), c = require("./module-944.js"), d = h.i2c, u = h.i2cUrl, p = r("".charAt), g = n.Uint8Array, m = !g || !g.prototype.toBase64 || !function() {
    try {
        (new g).toBase64(null);
    } catch (t) {
        return !0;
    }
}();
g && s({
    target: "Uint8Array",
    proto: !0,
    forced: m
}, {
    toBase64: function() {
        var t = o(this), e = arguments.length ? a(arguments[0]) : void 0, i = "base64" === c(e) ? d : u, s = !!e && !!e.omitPadding;
        l(this.buffer);
        for(var n, r = "", h = 0, g = t.length, m = function(t) {
            return p(i, n >> 6 * t & 63);
        }; h + 2 < g; h += 3)n = (t[h] << 16) + (t[h + 1] << 8) + t[h + 2], r += m(3) + m(2) + m(1) + m(0);
        return h + 2 === g ? (n = (t[h] << 16) + (t[h + 1] << 8), r += m(3) + m(2) + m(1) + (s ? "" : "=")) : h + 1 === g && (n = t[h] << 16, r += m(3) + m(2) + (s ? "" : "==")), r;
    }
});
