var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-9143.js"), a = require("./module-4154.js"), o = n.Uint8Array, l = !o || !o.prototype.setFromBase64 || !function() {
    var t = new o([
        255,
        255,
        255,
        255,
        255
    ]);
    try {
        return void t.setFromBase64("", null);
    } catch (t) {}
    try {
        return void t.setFromBase64("a");
    } catch (t) {}
    try {
        t.setFromBase64("MjYyZg===");
    } catch (e) {
        return 50 === t[0] && 54 === t[1] && 50 === t[2] && 255 === t[3] && 255 === t[4];
    }
}();
o && s({
    target: "Uint8Array",
    proto: !0,
    forced: l
}, {
    setFromBase64: function(t) {
        a(this);
        var e = r(t, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
        return {
            read: e.read,
            written: e.written
        };
    }
});
