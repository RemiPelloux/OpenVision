var n = require("./module-4188.js"), o = require("./module-4466.js"), i = require("./module-4530.js"), a = require("./module-4798.js");
module.exports = function(t, r, e, u) {
    u || (u = {});
    var s = u.enumerable, c = void 0 !== u.name ? u.name : r;
    if (n(e) && i(e, c, u), u.global) s ? t[r] = e : a(r, e);
    else {
        try {
            u.unsafe ? t[r] && (s = !0) : delete t[r];
        } catch (t) {}
        s ? t[r] = e : o.f(t, r, {
            value: e,
            enumerable: !1,
            configurable: !u.nonConfigurable,
            writable: !u.nonWritable
        });
    }
    return t;
};
