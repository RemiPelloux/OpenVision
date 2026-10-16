var s = require("./module-6706.js"), n = require("./module-34.js"), r = require("./module-7750.js"), a = require("./module-3506.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var t, e = !1, i = {};
    try {
        (t = s(Object.prototype, "__proto__", "set"))(i, []), e = i instanceof Array;
    } catch (t) {}
    return function(i, s) {
        return r(i), a(s), n(i) ? (e ? t(i, s) : i.__proto__ = s, i) : i;
    };
}() : void 0);
