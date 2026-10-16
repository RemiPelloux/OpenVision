var s = require("./module-6518.js"), n = require("./module-4576.js"), r = require("./module-5370.js"), a = require("./module-9143.js"), o = n.Uint8Array, l = !o || !o.fromBase64 || !function() {
    try {
        return void o.fromBase64("a");
    } catch (t) {}
    try {
        o.fromBase64("", null);
    } catch (t) {
        return !0;
    }
}();
o && s({
    target: "Uint8Array",
    stat: !0,
    forced: l
}, {
    fromBase64: function(t) {
        var e = a(t, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
        return r(o, e.bytes);
    }
});
