"use strict";
var n = require("./module-77454.js"), o = Object.prototype.hasOwnProperty, s = Object.prototype.toString;
module.exports = new n("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: function(e) {
        if (null === e) return !0;
        var t, r, n, i, a, l = [], c = e;
        for(t = 0, r = c.length; t < r; t += 1){
            if (n = c[t], a = !1, "[object Object]" !== s.call(n)) return !1;
            for(i in n)if (o.call(n, i)) {
                if (a) return !1;
                a = !0;
            }
            if (!a) return !1;
            if (-1 !== l.indexOf(i)) return !1;
            l.push(i);
        }
        return !0;
    },
    construct: function(e) {
        return null !== e ? e : [];
    }
});
