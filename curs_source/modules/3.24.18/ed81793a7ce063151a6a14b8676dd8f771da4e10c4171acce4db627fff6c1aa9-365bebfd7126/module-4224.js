var n = require("./module-6893.js"), o = require("./module-6719.js"), i = TypeError, a = Object.getOwnPropertyDescriptor, u = n && !function() {
    if (void 0 !== this) return !0;
    try {
        Object.defineProperty([], "length", {
            writable: !1
        }).length = 1;
    } catch (t) {
        return t instanceof TypeError;
    }
}();
module.exports = u ? function(t, r) {
    if (o(t) && !a(t, "length").writable) throw new i("Cannot set read only .length");
    return t.length = r;
} : function(t, r) {
    return t.length = r;
};
