var s = require("./module-4901.js"), n = require("./module-4913.js"), r = require("./module-283.js"), a = require("./module-9433.js");
module.exports = function(t, e, i, o) {
    o || (o = {});
    var l = o.enumerable, h = void 0 !== o.name ? o.name : e;
    if (s(i) && r(i, h, o), o.global) l ? t[e] = i : a(e, i);
    else {
        try {
            o.unsafe ? t[e] && (l = !0) : delete t[e];
        } catch (t) {}
        l ? t[e] = i : n.f(t, e, {
            value: i,
            enumerable: !1,
            configurable: !o.nonConfigurable,
            writable: !o.nonWritable
        });
    }
    return t;
};
