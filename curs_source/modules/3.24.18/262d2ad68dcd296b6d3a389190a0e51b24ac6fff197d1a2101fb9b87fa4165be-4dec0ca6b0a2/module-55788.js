"use strict";
var n = require("./module-36755.js"), o = require("./module-77454.js");
function s(e) {
    return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function i(e) {
    return 48 <= e && e <= 55;
}
function a(e) {
    return 48 <= e && e <= 57;
}
module.exports = new o("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: function(e) {
        if (null === e) return !1;
        var t, r = e.length, n = 0, o = !1;
        if (!r) return !1;
        if ("-" !== (t = e[n]) && "+" !== t || (t = e[++n]), "0" === t) {
            if (n + 1 === r) return !0;
            if ("b" === (t = e[++n])) {
                for(n++; n < r; n++)if ("_" !== (t = e[n])) {
                    if ("0" !== t && "1" !== t) return !1;
                    o = !0;
                }
                return o && "_" !== t;
            }
            if ("x" === t) {
                for(n++; n < r; n++)if ("_" !== (t = e[n])) {
                    if (!s(e.charCodeAt(n))) return !1;
                    o = !0;
                }
                return o && "_" !== t;
            }
            for(; n < r; n++)if ("_" !== (t = e[n])) {
                if (!i(e.charCodeAt(n))) return !1;
                o = !0;
            }
            return o && "_" !== t;
        }
        if ("_" === t) return !1;
        for(; n < r; n++)if ("_" !== (t = e[n])) {
            if (":" === t) break;
            if (!a(e.charCodeAt(n))) return !1;
            o = !0;
        }
        return !(!o || "_" === t) && (":" !== t || /^(:[0-5]?[0-9])+$/.test(e.slice(n)));
    },
    construct: function(e) {
        var t, r, n = e, o = 1, s = [];
        return -1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), "-" !== (t = n[0]) && "+" !== t || ("-" === t && (o = -1), t = (n = n.slice(1))[0]), "0" === n ? 0 : "0" === t ? "b" === n[1] ? o * parseInt(n.slice(2), 2) : "x" === n[1] ? o * parseInt(n, 16) : o * parseInt(n, 8) : -1 !== n.indexOf(":") ? (n.split(":").forEach(function(e) {
            s.unshift(parseInt(e, 10));
        }), n = 0, r = 1, s.forEach(function(e) {
            n += e * r, r *= 60;
        }), o * n) : o * parseInt(n, 10);
    },
    predicate: function(e) {
        return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !n.isNegativeZero(e);
    },
    represent: {
        binary: function(e) {
            return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
        },
        octal: function(e) {
            return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
        },
        decimal: function(e) {
            return e.toString(10);
        },
        hexadecimal: function(e) {
            return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});
