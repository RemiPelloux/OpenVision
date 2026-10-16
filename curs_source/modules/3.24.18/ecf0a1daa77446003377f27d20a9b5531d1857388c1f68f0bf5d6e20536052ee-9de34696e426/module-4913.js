var s = require("./module-3724.js"), n = require("./module-5917.js"), r = require("./module-8686.js"), a = require("./module-8551.js"), o = require("./module-6969.js"), l = TypeError, h = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = "enumerable", u = "configurable", p = "writable";
exports.f = s ? r ? function(t, e, i) {
    if (a(t), e = o(e), a(i), "function" == typeof t && "prototype" === e && "value" in i && p in i && !i[p]) {
        var s = c(t, e);
        s && s[p] && (t[e] = i.value, i = {
            configurable: u in i ? i[u] : s[u],
            enumerable: d in i ? i[d] : s[d],
            writable: !1
        });
    }
    return h(t, e, i);
} : h : function(t, e, i) {
    if (a(t), e = o(e), a(i), n) try {
        return h(t, e, i);
    } catch (t) {}
    if ("get" in i || "set" in i) throw new l("Accessors not supported");
    return "value" in i && (t[e] = i.value), t;
};
