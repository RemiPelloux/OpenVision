var n = require("./module-4282.js")("iterator"), o = !1;
try {
    var i = 0, a = {
        next: function() {
            return {
                done: !!i++
            };
        },
        return: function() {
            o = !0;
        }
    };
    a[n] = function() {
        return this;
    }, Array.from(a, function() {
        throw 2;
    });
} catch (t) {}
module.exports = function(t, r) {
    try {
        if (!r && !o) return !1;
    } catch (t) {
        return !1;
    }
    var e = !1;
    try {
        var i = {};
        i[n] = function() {
            return {
                next: function() {
                    return {
                        done: e = !0
                    };
                }
            };
        }, t(i);
    } catch (t) {}
    return e;
};
