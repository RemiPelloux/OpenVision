"use strict";
var n = require("./module-77454.js"), o = Object.prototype.toString;
module.exports = new n("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: function(e) {
        if (null === e) return !0;
        var t, r, n, s, i, a = e;
        for(i = new Array(a.length), t = 0, r = a.length; t < r; t += 1){
            if (n = a[t], "[object Object]" !== o.call(n)) return !1;
            if (1 !== (s = Object.keys(n)).length) return !1;
            i[t] = [
                s[0],
                n[s[0]]
            ];
        }
        return !0;
    },
    construct: function(e) {
        if (null === e) return [];
        var t, r, n, o, s, i = e;
        for(s = new Array(i.length), t = 0, r = i.length; t < r; t += 1)n = i[t], o = Object.keys(n), s[t] = [
            o[0],
            n[o[0]]
        ];
        return s;
    }
});
