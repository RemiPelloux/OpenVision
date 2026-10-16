"use strict";
var n = require("./module-77454.js"), s = Object.prototype.hasOwnProperty, o = Object.prototype.toString;
module.exports = new n("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: function(e) {
        if (null === e) return !0;
        var t, r, n, i, a, c = [], l = e;
        for(t = 0, r = l.length; t < r; t += 1){
            if (n = l[t], a = !1, "[object Object]" !== o.call(n)) return !1;
            for(i in n)if (s.call(n, i)) {
                if (a) return !1;
                a = !0;
            }
            if (!a) return !1;
            if (-1 !== c.indexOf(i)) return !1;
            c.push(i);
        }
        return !0;
    },
    construct: function(e) {
        return null !== e ? e : [];
    }
});
