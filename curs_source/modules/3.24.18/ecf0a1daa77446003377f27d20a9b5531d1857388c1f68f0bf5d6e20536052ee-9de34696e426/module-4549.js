var s = require("./module-4576.js");
module.exports = function(t, e) {
    var i = s.Iterator, n = i && i.prototype, r = n && n[t], a = !1;
    if (r) try {
        r.call({
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
        t instanceof e || (a = !1);
    }
    if (!a) return r;
};
