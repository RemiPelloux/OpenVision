var n = require("./module-9117.js");
module.exports = function(t, r) {
    var e = n.Iterator, o = e && e.prototype, i = o && o[t], a = !1;
    if (i) try {
        i.call({
            next: function() {
                return {
                    done: !0
                };
            },
            return: function() {
                a = !0;
            }
        }, -1);
    } catch (t) {
        t instanceof r || (a = !1);
    }
    if (!a) return i;
};
