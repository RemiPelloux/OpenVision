"use strict";
var n = require("./module-77454.js"), s = Object.prototype.hasOwnProperty;
module.exports = new n("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: function(e) {
        if (null === e) return !0;
        var t, r = e;
        for(t in r)if (s.call(r, t) && null !== r[t]) return !1;
        return !0;
    },
    construct: function(e) {
        return null !== e ? e : {};
    }
});
