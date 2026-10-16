"use strict";
var n = require("./module-77454.js"), s = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), o = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
module.exports = new n("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: function(e) {
        return null !== e && (null !== s.exec(e) || null !== o.exec(e));
    },
    construct: function(e) {
        var t, r, n, i, a, c, l, u, d = 0, p = null;
        if (null === (t = s.exec(e)) && (t = o.exec(e)), null === t) throw new Error("Date resolve error");
        if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4]) return new Date(Date.UTC(r, n, i));
        if (a = +t[4], c = +t[5], l = +t[6], t[7]) {
            for(d = t[7].slice(0, 3); d.length < 3;)d += "0";
            d = +d;
        }
        return t[9] && (p = 6e4 * (60 * +t[10] + +(t[11] || 0)), "-" === t[9] && (p = -p)), u = new Date(Date.UTC(r, n, i, a, c, l, d)), p && u.setTime(u.getTime() - p), u;
    },
    instanceOf: Date,
    represent: function(e) {
        return e.toISOString();
    }
});
