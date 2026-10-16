var n = require("./module-5604.js"), o = function(t) {
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
}, i = function(t) {
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
module.exports = function(t, r) {
    var e = n("Set");
    try {
        (new e)[t](o(0));
        try {
            return (new e)[t](o(-1)), !1;
        } catch (n) {
            if (!r) return !0;
            try {
                return (new e)[t](i(-1 / 0)), !1;
            } catch (n) {
                return r(new e([
                    1,
                    2
                ])[t](i(1 / 0)));
            }
        }
    } catch (t) {
        return !1;
    }
};
