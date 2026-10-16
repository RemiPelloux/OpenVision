var s = require("./module-3724.js"), n = require("./module-4376.js"), r = TypeError, a = Object.getOwnPropertyDescriptor, o = s && !function() {
    if (void 0 !== this) return !0;
    try {
        Object.defineProperty([], "length", {
            writable: !1
        }).length = 1;
    } catch (t) {
        return t instanceof TypeError;
    }
}();
module.exports = o ? function(t, e) {
    if (n(t) && !a(t, "length").writable) throw new r("Cannot set read only .length");
    return t.length = e;
} : function(t, e) {
    return t.length = e;
};
