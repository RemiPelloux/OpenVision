var n = require("./module-5613.js"), o = require("./module-1942.js"), i = require("./module-7301.js").CONSTRUCTOR, a = require("./module-6453.js"), u = require("./module-5604.js"), s = require("./module-4188.js"), c = require("./module-7509.js"), f = a && a.prototype;
if (n({
    target: "Promise",
    proto: !0,
    forced: i,
    real: !0
}, {
    catch: function(t) {
        return this.then(void 0, t);
    }
}), !o && s(a)) {
    var h = u("Promise").prototype.catch;
    f.catch !== h && c(f, "catch", h, {
        unsafe: !0
    });
}
