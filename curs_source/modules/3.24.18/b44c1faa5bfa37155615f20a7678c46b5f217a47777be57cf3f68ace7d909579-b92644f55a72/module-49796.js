"use strict";
var n;
try {
    n = require("./module-20181.js").Buffer;
} catch (e) {}
var s = require("./module-77454.js"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
module.exports = new s("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: function(e) {
        if (null === e) return !1;
        var t, r, n = 0, s = e.length, i = o;
        for(r = 0; r < s; r++)if (!((t = i.indexOf(e.charAt(r))) > 64)) {
            if (t < 0) return !1;
            n += 6;
        }
        return n % 8 == 0;
    },
    construct: function(e) {
        var t, r, s = e.replace(/[\r\n=]/g, ""), i = s.length, a = o, c = 0, l = [];
        for(t = 0; t < i; t++)t % 4 == 0 && t && (l.push(c >> 16 & 255), l.push(c >> 8 & 255), l.push(255 & c)), c = c << 6 | a.indexOf(s.charAt(t));
        return 0 === (r = i % 4 * 6) ? (l.push(c >> 16 & 255), l.push(c >> 8 & 255), l.push(255 & c)) : 18 === r ? (l.push(c >> 10 & 255), l.push(c >> 2 & 255)) : 12 === r && l.push(c >> 4 & 255), n ? n.from ? n.from(l) : new n(l) : l;
    },
    predicate: function(e) {
        return n && n.isBuffer(e);
    },
    represent: function(e) {
        var t, r, n = "", s = 0, i = e.length, a = o;
        for(t = 0; t < i; t++)t % 3 == 0 && t && (n += a[s >> 18 & 63], n += a[s >> 12 & 63], n += a[s >> 6 & 63], n += a[63 & s]), s = (s << 8) + e[t];
        return 0 === (r = i % 3) ? (n += a[s >> 18 & 63], n += a[s >> 12 & 63], n += a[s >> 6 & 63], n += a[63 & s]) : 2 === r ? (n += a[s >> 10 & 63], n += a[s >> 4 & 63], n += a[s << 2 & 63], n += a[64]) : 1 === r && (n += a[s >> 2 & 63], n += a[s << 4 & 63], n += a[64], n += a[64]), n;
    }
});
