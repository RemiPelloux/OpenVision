var s = require("./module-7751.js"), n = function(t) {
    return {
        size: t,
        has: function() {
            return !1;
        },
        keys: function() {
            return {
                next: function() {
                    return {
                        done: !0
                    };
                }
            };
        }
    };
}, r = function(t) {
    return {
        size: t,
        has: function() {
            return !0;
        },
        keys: function() {
            throw new Error("e");
        }
    };
};
module.exports = function(t, e) {
    var i = s("Set");
    try {
        (new i)[t](n(0));
        try {
            return (new i)[t](n(-1)), !1;
        } catch (s) {
            if (!e) return !0;
            try {
                return (new i)[t](r(-1 / 0)), !1;
            } catch (s) {
                var a = new i;
                return a.add(1), a.add(2), e(a[t](r(1 / 0)));
            }
        }
    } catch (t) {
        return !1;
    }
};
