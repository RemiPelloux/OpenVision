var n = require("./module-5613.js"), o = require("./module-6881.js"), i = require("./module-7588.js"), a = require("./module-831.js"), u = require("./module-4418.js"), s = require("./module-4466.js").f, c = require("./module-5629.js"), f = require("./module-3701.js"), h = require("./module-1927.js"), l = require("./module-6209.js"), p = require("./module-9391.js"), v = !1, d = l("meta"), g = 0, y = function(t) {
    s(t, d, {
        value: {
            objectID: "O" + g++,
            weakData: {}
        }
    });
}, w = module.exports = {
    enable: function() {
        w.enable = function() {}, v = !0;
        var t = c.f, r = o([].splice), e = {};
        e[d] = 1, t(e).length && (c.f = function(e) {
            for(var n = t(e), o = 0, i = n.length; o < i; o++)if (n[o] === d) {
                r(n, o, 1);
                break;
            }
            return n;
        }, n({
            target: "Object",
            stat: !0,
            forced: !0
        }, {
            getOwnPropertyNames: f.f
        }));
    },
    fastKey: function(t, r) {
        if (!a(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!u(t, d)) {
            if (!h(t)) return "F";
            if (!r) return "E";
            y(t);
        }
        return t[d].objectID;
    },
    getWeakData: function(t, r) {
        if (!u(t, d)) {
            if (!h(t)) return !0;
            if (!r) return !1;
            y(t);
        }
        return t[d].weakData;
    },
    onFreeze: function(t) {
        return p && v && h(t) && !u(t, d) && y(t), t;
    }
};
i[d] = !0;
