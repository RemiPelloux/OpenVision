var n = require("./module-1025.js"), o = require("./module-831.js"), i = require("./module-9509.js"), a = require("./module-4121.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var t, r = !1, e = {};
    try {
        (t = n(Object.prototype, "__proto__", "set"))(e, []), r = e instanceof Array;
    } catch (t) {}
    return function(e, n) {
        return i(e), a(n), o(e) ? (r ? t(e, n) : e.__proto__ = n, e) : e;
    };
}() : void 0);
