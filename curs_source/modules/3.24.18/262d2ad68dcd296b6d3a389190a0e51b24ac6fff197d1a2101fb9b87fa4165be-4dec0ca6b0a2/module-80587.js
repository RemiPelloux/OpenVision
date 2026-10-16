"use strict";
var n = require("./module-36755.js"), o = require("./module-77454.js"), s = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
var i = /^[-+]?[0-9]+e/;
module.exports = new o("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: function(e) {
        return null !== e && !(!s.test(e) || "_" === e[e.length - 1]);
    },
    construct: function(e) {
        var t, r, n, o;
        return r = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, o = [], "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : t.indexOf(":") >= 0 ? (t.split(":").forEach(function(e) {
            o.unshift(parseFloat(e, 10));
        }), t = 0, n = 1, o.forEach(function(e) {
            t += e * n, n *= 60;
        }), r * t) : r * parseFloat(t, 10);
    },
    predicate: function(e) {
        return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || n.isNegativeZero(e));
    },
    represent: function(e, t) {
        var r;
        if (isNaN(e)) switch(t){
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN";
        }
        else if (Number.POSITIVE_INFINITY === e) switch(t){
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf";
        }
        else if (Number.NEGATIVE_INFINITY === e) switch(t){
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf";
        }
        else if (n.isNegativeZero(e)) return "-0.0";
        return r = e.toString(10), i.test(r) ? r.replace("e", ".e") : r;
    },
    defaultStyle: "lowercase"
});
