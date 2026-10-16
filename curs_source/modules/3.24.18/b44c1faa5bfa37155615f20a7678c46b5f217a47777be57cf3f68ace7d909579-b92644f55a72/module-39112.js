"use strict";
var n = require("./module-77454.js");
module.exports = new n("tag:yaml.org,2002:js/regexp", {
    kind: "scalar",
    resolve: function(e) {
        if (null === e) return !1;
        if (0 === e.length) return !1;
        var t = e, r = /\/([gim]*)$/.exec(e), n = "";
        if ("/" === t[0]) {
            if (r && (n = r[1]), n.length > 3) return !1;
            if ("/" !== t[t.length - n.length - 1]) return !1;
        }
        return !0;
    },
    construct: function(e) {
        var t = e, r = /\/([gim]*)$/.exec(e), n = "";
        return "/" === t[0] && (r && (n = r[1]), t = t.slice(1, t.length - n.length - 1)), new RegExp(t, n);
    },
    predicate: function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
    },
    represent: function(e) {
        var t = "/" + e.source + "/";
        return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t;
    }
});
