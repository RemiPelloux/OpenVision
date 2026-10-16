"use strict";
var n = require("./module-36755.js"), o = require("./module-39425.js"), s = require("./module-80599.js"), i = require("./module-52315.js"), a = Object.prototype.toString, l = Object.prototype.hasOwnProperty, c = {
    0: "\\0",
    7: "\\a",
    8: "\\b",
    9: "\\t",
    10: "\\n",
    11: "\\v",
    12: "\\f",
    13: "\\r",
    27: "\\e",
    34: '\\"',
    92: "\\\\",
    133: "\\N",
    160: "\\_",
    8232: "\\L",
    8233: "\\P"
}, u = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
];
function d(e) {
    var t, r, s;
    if (t = e.toString(16).toUpperCase(), e <= 255) r = "x", s = 2;
    else if (e <= 65535) r = "u", s = 4;
    else {
        if (!(e <= 4294967295)) throw new o("code point within a string may not be greater than 0xFFFFFFFF");
        r = "U", s = 8;
    }
    return "\\" + r + n.repeat("0", s - t.length) + t;
}
function p(e) {
    this.schema = e.schema || s, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = n.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = function(e, t) {
        var r, n, o, s, i, a, c;
        if (null === t) return {};
        for(r = {}, o = 0, s = (n = Object.keys(t)).length; o < s; o += 1)i = n[o], a = String(t[i]), "!!" === i.slice(0, 2) && (i = "tag:yaml.org,2002:" + i.slice(2)), (c = e.compiledTypeMap.fallback[i]) && l.call(c.styleAliases, a) && (a = c.styleAliases[a]), r[i] = a;
        return r;
    }(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function h(e, t) {
    for(var r, o = n.repeat(" ", t), s = 0, i = -1, a = "", l = e.length; s < l;)-1 === (i = e.indexOf("\n", s)) ? (r = e.slice(s), s = l) : (r = e.slice(s, i + 1), s = i + 1), r.length && "\n" !== r && (a += o), a += r;
    return a;
}
function m(e, t) {
    return "\n" + n.repeat(" ", e.indent * t);
}
function f(e) {
    return 32 === e || 9 === e;
}
function g(e) {
    return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111;
}
function y(e, t) {
    return g(e) && 65279 !== e && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e && 58 !== e && (35 !== e || t && function(e) {
        return g(e) && !f(e) && 65279 !== e && 13 !== e && 10 !== e;
    }(t));
}
function v(e) {
    return /^\n* /.test(e);
}
function w(e, t, r, n, o) {
    var s, i, a, l, c = !1, u = !1, d = -1 !== n, p = -1, h = g(l = e.charCodeAt(0)) && 65279 !== l && !f(l) && 45 !== l && 63 !== l && 58 !== l && 44 !== l && 91 !== l && 93 !== l && 123 !== l && 125 !== l && 35 !== l && 38 !== l && 42 !== l && 33 !== l && 124 !== l && 61 !== l && 62 !== l && 39 !== l && 34 !== l && 37 !== l && 64 !== l && 96 !== l && !f(e.charCodeAt(e.length - 1));
    if (t) for(s = 0; s < e.length; s++){
        if (!g(i = e.charCodeAt(s))) return 5;
        a = s > 0 ? e.charCodeAt(s - 1) : null, h = h && y(i, a);
    }
    else {
        for(s = 0; s < e.length; s++){
            if (10 === (i = e.charCodeAt(s))) c = !0, d && (u = u || s - p - 1 > n && " " !== e[p + 1], p = s);
            else if (!g(i)) return 5;
            a = s > 0 ? e.charCodeAt(s - 1) : null, h = h && y(i, a);
        }
        u = u || d && s - p - 1 > n && " " !== e[p + 1];
    }
    return c || u ? r > 9 && v(e) ? 5 : u ? 4 : 3 : h && !o(e) ? 1 : 2;
}
function b(e, t, r, n) {
    e.dump = function() {
        if (0 === t.length) return "''";
        if (!e.noCompatMode && -1 !== u.indexOf(t)) return "'" + t + "'";
        var s = e.indent * Math.max(1, r), i = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), a = n || e.flowLevel > -1 && r >= e.flowLevel;
        switch(w(t, a, e.indent, i, function(t) {
            return function(e, t) {
                var r, n;
                for(r = 0, n = e.implicitTypes.length; r < n; r += 1)if (e.implicitTypes[r].resolve(t)) return !0;
                return !1;
            }(e, t);
        })){
            case 1:
                return t;
            case 2:
                return "'" + t.replace(/'/g, "''") + "'";
            case 3:
                return "|" + _(t, e.indent) + S(h(t, s));
            case 4:
                return ">" + _(t, e.indent) + S(h(function(e, t) {
                    var r, n, o = /(\n+)([^\n]*)/g, s = (a = e.indexOf("\n"), a = -1 !== a ? a : e.length, o.lastIndex = a, x(e.slice(0, a), t)), i = "\n" === e[0] || " " === e[0];
                    var a;
                    for(; n = o.exec(e);){
                        var l = n[1], c = n[2];
                        r = " " === c[0], s += l + (i || r || "" === c ? "" : "\n") + x(c, t), i = r;
                    }
                    return s;
                }(t, i), s));
            case 5:
                return '"' + function(e) {
                    for(var t, r, n, o = "", s = 0; s < e.length; s++)(t = e.charCodeAt(s)) >= 55296 && t <= 56319 && (r = e.charCodeAt(s + 1)) >= 56320 && r <= 57343 ? (o += d(1024 * (t - 55296) + r - 56320 + 65536), s++) : o += !(n = c[t]) && g(t) ? e[s] : n || d(t);
                    return o;
                }(t) + '"';
            default:
                throw new o("impossible error: invalid scalar style");
        }
    }();
}
function _(e, t) {
    var r = v(e) ? String(t) : "", n = "\n" === e[e.length - 1];
    return r + (n && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : n ? "" : "-") + "\n";
}
function S(e) {
    return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
}
function x(e, t) {
    if ("" === e || " " === e[0]) return e;
    for(var r, n, o = / [^ ]/g, s = 0, i = 0, a = 0, l = ""; r = o.exec(e);)(a = r.index) - s > t && (n = i > s ? i : a, l += "\n" + e.slice(s, n), s = n + 1), i = a;
    return l += "\n", e.length - s > t && i > s ? l += e.slice(s, i) + "\n" + e.slice(i + 1) : l += e.slice(s), l.slice(1);
}
function k(e, t, r) {
    var n, s, i, c, u, d;
    for(i = 0, c = (s = r ? e.explicitTypes : e.implicitTypes).length; i < c; i += 1)if (((u = s[i]).instanceOf || u.predicate) && (!u.instanceOf || "object" == typeof t && t instanceof u.instanceOf) && (!u.predicate || u.predicate(t))) {
        if (e.tag = r ? u.tag : "?", u.represent) {
            if (d = e.styleMap[u.tag] || u.defaultStyle, "[object Function]" === a.call(u.represent)) n = u.represent(t, d);
            else {
                if (!l.call(u.represent, d)) throw new o("!<" + u.tag + '> tag resolver accepts not "' + d + '" style');
                n = u.represent[d](t, d);
            }
            e.dump = n;
        }
        return !0;
    }
    return !1;
}
function E(e, t, r, n, s, i) {
    e.tag = null, e.dump = r, k(e, r, !1) || k(e, r, !0);
    var l = a.call(e.dump);
    n && (n = e.flowLevel < 0 || e.flowLevel > t);
    var c, u, d = "[object Object]" === l || "[object Array]" === l;
    if (d && (u = -1 !== (c = e.duplicates.indexOf(r))), (null !== e.tag && "?" !== e.tag || u || 2 !== e.indent && t > 0) && (s = !1), u && e.usedDuplicates[c]) e.dump = "*ref_" + c;
    else {
        if (d && u && !e.usedDuplicates[c] && (e.usedDuplicates[c] = !0), "[object Object]" === l) n && 0 !== Object.keys(e.dump).length ? (!function(e, t, r, n) {
            var s, i, a, l, c, u, d = "", p = e.tag, h = Object.keys(r);
            if (!0 === e.sortKeys) h.sort();
            else if ("function" == typeof e.sortKeys) h.sort(e.sortKeys);
            else if (e.sortKeys) throw new o("sortKeys must be a boolean or a function");
            for(s = 0, i = h.length; s < i; s += 1)u = "", n && 0 === s || (u += m(e, t)), l = r[a = h[s]], E(e, t + 1, a, !0, !0, !0) && ((c = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, c && (u += m(e, t)), E(e, t + 1, l, !0, c) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", d += u += e.dump));
            e.tag = p, e.dump = d || "{}";
        }(e, t, e.dump, s), u && (e.dump = "&ref_" + c + e.dump)) : (!function(e, t, r) {
            var n, o, s, i, a, l = "", c = e.tag, u = Object.keys(r);
            for(n = 0, o = u.length; n < o; n += 1)a = "", 0 !== n && (a += ", "), e.condenseFlow && (a += '"'), i = r[s = u[n]], E(e, t, s, !1, !1) && (e.dump.length > 1024 && (a += "? "), a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), E(e, t, i, !1, !1) && (l += a += e.dump));
            e.tag = c, e.dump = "{" + l + "}";
        }(e, t, e.dump), u && (e.dump = "&ref_" + c + " " + e.dump));
        else if ("[object Array]" === l) {
            var p = e.noArrayIndent && t > 0 ? t - 1 : t;
            n && 0 !== e.dump.length ? (!function(e, t, r, n) {
                var o, s, i = "", a = e.tag;
                for(o = 0, s = r.length; o < s; o += 1)E(e, t + 1, r[o], !0, !0) && (n && 0 === o || (i += m(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
                e.tag = a, e.dump = i || "[]";
            }(e, p, e.dump, s), u && (e.dump = "&ref_" + c + e.dump)) : (!function(e, t, r) {
                var n, o, s = "", i = e.tag;
                for(n = 0, o = r.length; n < o; n += 1)E(e, t, r[n], !1, !1) && (0 !== n && (s += "," + (e.condenseFlow ? "" : " ")), s += e.dump);
                e.tag = i, e.dump = "[" + s + "]";
            }(e, p, e.dump), u && (e.dump = "&ref_" + c + " " + e.dump));
        } else {
            if ("[object String]" !== l) {
                if (e.skipInvalid) return !1;
                throw new o("unacceptable kind of an object to dump " + l);
            }
            "?" !== e.tag && b(e, e.dump, t, i);
        }
        null !== e.tag && "?" !== e.tag && (e.dump = "!<" + e.tag + "> " + e.dump);
    }
    return !0;
}
function T(e, t) {
    var r, n, o = [], s = [];
    for(C(e, o, s), r = 0, n = s.length; r < n; r += 1)t.duplicates.push(o[s[r]]);
    t.usedDuplicates = new Array(n);
}
function C(e, t, r) {
    var n, o, s;
    if (null !== e && "object" == typeof e) if (-1 !== (o = t.indexOf(e))) -1 === r.indexOf(o) && r.push(o);
    else if (t.push(e), Array.isArray(e)) for(o = 0, s = e.length; o < s; o += 1)C(e[o], t, r);
    else for(o = 0, s = (n = Object.keys(e)).length; o < s; o += 1)C(e[n[o]], t, r);
}
function I(e, t) {
    var r = new p(t = t || {});
    return r.noRefs || T(e, r), E(r, 0, e, !0, !0) ? r.dump + "\n" : "";
}
module.exports.dump = I, module.exports.safeDump = function(e, t) {
    return I(e, n.extend({
        schema: i
    }, t));
};
