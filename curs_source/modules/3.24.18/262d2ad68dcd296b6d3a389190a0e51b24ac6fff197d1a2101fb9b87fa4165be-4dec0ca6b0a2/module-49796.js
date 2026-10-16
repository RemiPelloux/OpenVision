"use strict";
var n;
try {
    n = require("./module-20181.js").Buffer;
} catch (e) {}
var o = require("./module-77454.js"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
module.exports = new o("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: function(e) {
        if (null === e) return !1;
        var t, r, n = 0, o = e.length, i = s;
        for(r = 0; r < o; r++)if (!((t = i.indexOf(e.charAt(r))) > 64)) {
            if (t < 0) return !1;
            n += 6;
        }
        return n % 8 == 0;
    },
    construct: function(e) {
        var t, r, o = e.replace(/[\r\n=]/g, ""), i = o.length, a = s, l = 0, c = [];
        for(t = 0; t < i; t++)t % 4 == 0 && t && (c.push(l >> 16 & 255), c.push(l >> 8 & 255), c.push(255 & l)), l = l << 6 | a.indexOf(o.charAt(t));
        return 0 === (r = i % 4 * 6) ? (c.push(l >> 16 & 255), c.push(l >> 8 & 255), c.push(255 & l)) : 18 === r ? (c.push(l >> 10 & 255), c.push(l >> 2 & 255)) : 12 === r && c.push(l >> 4 & 255), n ? n.from ? n.from(c) : new n(c) : c;
    },
    predicate: function(e) {
        return n && n.isBuffer(e);
    },
    represent: function(e) {
        var t, r, n = "", o = 0, i = e.length, a = s;
        for(t = 0; t < i; t++)t % 3 == 0 && t && (n += a[o >> 18 & 63], n += a[o >> 12 & 63], n += a[o >> 6 & 63], n += a[63 & o]), o = (o << 8) + e[t];
        return 0 === (r = i % 3) ? (n += a[o >> 18 & 63], n += a[o >> 12 & 63], n += a[o >> 6 & 63], n += a[63 & o]) : 2 === r ? (n += a[o >> 10 & 63], n += a[o >> 4 & 63], n += a[o << 2 & 63], n += a[64]) : 1 === r && (n += a[o >> 2 & 63], n += a[o << 4 & 63], n += a[64], n += a[64]), n;
    }
});
