var n = require("./module-6893.js"), o = require("./module-9622.js"), i = require("./module-3315.js"), a = require("./module-3770.js"), u = require("./module-2344.js"), s = TypeError, c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, h = "enumerable", l = "configurable", p = "writable";
exports.f = n ? i ? function(t, r, e) {
    if (a(t), r = u(r), a(e), "function" == typeof t && "prototype" === r && "value" in e && p in e && !e[p]) {
        var n = f(t, r);
        n && n[p] && (t[r] = e.value, e = {
            configurable: l in e ? e[l] : n[l],
            enumerable: h in e ? e[h] : n[h],
            writable: !1
        });
    }
    return c(t, r, e);
} : c : function(t, r, e) {
    if (a(t), r = u(r), a(e), o) try {
        return c(t, r, e);
    } catch (t) {}
    if ("get" in e || "set" in e) throw new s("Accessors not supported");
    return "value" in e && (t[r] = e.value), t;
};
