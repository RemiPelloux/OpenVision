"use strict";
var n = require("./module-36755.js"), s = require("./module-39425.js"), o = require("./module-80599.js"), i = require("./module-52315.js"), a = Object.prototype.toString, c = Object.prototype.hasOwnProperty, l = {
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
    var t, r, o;
    if (t = e.toString(16).toUpperCase(), e <= 255) r = "x", o = 2;
    else if (e <= 65535) r = "u", o = 4;
    else {
        if (!(e <= 4294967295)) throw new s("code point within a string may not be greater than 0xFFFFFFFF");
        r = "U", o = 8;
    }
    return "\\" + r + n.repeat("0", o - t.length) + t;
}
function p(e) {
    this.schema = e.schema || o, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = n.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = function(e, t) {
        var r, n, s, o, i, a, l;
        if (null === t) return {};
        for(r = {}, s = 0, o = (n = Object.keys(t)).length; s < o; s += 1)i = n[s], a = String(t[i]), "!!" === i.slice(0, 2) && (i = "tag:yaml.org,2002:" + i.slice(2)), (l = e.compiledTypeMap.fallback[i]) && c.call(l.styleAliases, a) && (a = l.styleAliases[a]), r[i] = a;
        return r;
    }(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function m(e, t) {
    for(var r, s = n.repeat(" ", t), o = 0, i = -1, a = "", c = e.length; o < c;)-1 === (i = e.indexOf("\n", o)) ? (r = e.slice(o), o = c) : (r = e.slice(o, i + 1), o = i + 1), r.length && "\n" !== r && (a += s), a += r;
    return a;
}
function h(e, t) {
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
function w(e) {
    return /^\n* /.test(e);
}
function v(e, t, r, n, s) {
    var o, i, a, c, l = !1, u = !1, d = -1 !== n, p = -1, m = g(c = e.charCodeAt(0)) && 65279 !== c && !f(c) && 45 !== c && 63 !== c && 58 !== c && 44 !== c && 91 !== c && 93 !== c && 123 !== c && 125 !== c && 35 !== c && 38 !== c && 42 !== c && 33 !== c && 124 !== c && 61 !== c && 62 !== c && 39 !== c && 34 !== c && 37 !== c && 64 !== c && 96 !== c && !f(e.charCodeAt(e.length - 1));
    if (t) for(o = 0; o < e.length; o++){
        if (!g(i = e.charCodeAt(o))) return 5;
        a = o > 0 ? e.charCodeAt(o - 1) : null, m = m && y(i, a);
    }
    else {
        for(o = 0; o < e.length; o++){
            if (10 === (i = e.charCodeAt(o))) l = !0, d && (u = u || o - p - 1 > n && " " !== e[p + 1], p = o);
            else if (!g(i)) return 5;
            a = o > 0 ? e.charCodeAt(o - 1) : null, m = m && y(i, a);
        }
        u = u || d && o - p - 1 > n && " " !== e[p + 1];
    }
    return l || u ? r > 9 && w(e) ? 5 : u ? 4 : 3 : m && !s(e) ? 1 : 2;
}
function _(e, t, r, n) {
    e.dump = function() {
        if (0 === t.length) return "''";
        if (!e.noCompatMode && -1 !== u.indexOf(t)) return "'" + t + "'";
        var o = e.indent * Math.max(1, r), i = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), a = n || e.flowLevel > -1 && r >= e.flowLevel;
        switch(v(t, a, e.indent, i, function(t) {
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
                return "|" + b(t, e.indent) + S(m(t, o));
            case 4:
                return ">" + b(t, e.indent) + S(m(function(e, t) {
                    var r, n, s = /(\n+)([^\n]*)/g, o = (a = e.indexOf("\n"), a = -1 !== a ? a : e.length, s.lastIndex = a, k(e.slice(0, a), t)), i = "\n" === e[0] || " " === e[0];
                    var a;
                    for(; n = s.exec(e);){
                        var c = n[1], l = n[2];
                        r = " " === l[0], o += c + (i || r || "" === l ? "" : "\n") + k(l, t), i = r;
                    }
                    return o;
                }(t, i), o));
            case 5:
                return '"' + function(e) {
                    for(var t, r, n, s = "", o = 0; o < e.length; o++)(t = e.charCodeAt(o)) >= 55296 && t <= 56319 && (r = e.charCodeAt(o + 1)) >= 56320 && r <= 57343 ? (s += d(1024 * (t - 55296) + r - 56320 + 65536), o++) : s += !(n = l[t]) && g(t) ? e[o] : n || d(t);
                    return s;
                }(t) + '"';
            default:
                throw new s("impossible error: invalid scalar style");
        }
    }();
}
function b(e, t) {
    var r = w(e) ? String(t) : "", n = "\n" === e[e.length - 1];
    return r + (n && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : n ? "" : "-") + "\n";
}
function S(e) {
    return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
}
function k(e, t) {
    if ("" === e || " " === e[0]) return e;
    for(var r, n, s = / [^ ]/g, o = 0, i = 0, a = 0, c = ""; r = s.exec(e);)(a = r.index) - o > t && (n = i > o ? i : a, c += "\n" + e.slice(o, n), o = n + 1), i = a;
    return c += "\n", e.length - o > t && i > o ? c += e.slice(o, i) + "\n" + e.slice(i + 1) : c += e.slice(o), c.slice(1);
}
function x(e, t, r) {
    var n, o, i, l, u, d;
    for(i = 0, l = (o = r ? e.explicitTypes : e.implicitTypes).length; i < l; i += 1)if (((u = o[i]).instanceOf || u.predicate) && (!u.instanceOf || "object" == typeof t && t instanceof u.instanceOf) && (!u.predicate || u.predicate(t))) {
        if (e.tag = r ? u.tag : "?", u.represent) {
            if (d = e.styleMap[u.tag] || u.defaultStyle, "[object Function]" === a.call(u.represent)) n = u.represent(t, d);
            else {
                if (!c.call(u.represent, d)) throw new s("!<" + u.tag + '> tag resolver accepts not "' + d + '" style');
                n = u.represent[d](t, d);
            }
            e.dump = n;
        }
        return !0;
    }
    return !1;
}
function E(e, t, r, n, o, i) {
    e.tag = null, e.dump = r, x(e, r, !1) || x(e, r, !0);
    var c = a.call(e.dump);
    n && (n = e.flowLevel < 0 || e.flowLevel > t);
    var l, u, d = "[object Object]" === c || "[object Array]" === c;
    if (d && (u = -1 !== (l = e.duplicates.indexOf(r))), (null !== e.tag && "?" !== e.tag || u || 2 !== e.indent && t > 0) && (o = !1), u && e.usedDuplicates[l]) e.dump = "*ref_" + l;
    else {
        if (d && u && !e.usedDuplicates[l] && (e.usedDuplicates[l] = !0), "[object Object]" === c) n && 0 !== Object.keys(e.dump).length ? (!function(e, t, r, n) {
            var o, i, a, c, l, u, d = "", p = e.tag, m = Object.keys(r);
            if (!0 === e.sortKeys) m.sort();
            else if ("function" == typeof e.sortKeys) m.sort(e.sortKeys);
            else if (e.sortKeys) throw new s("sortKeys must be a boolean or a function");
            for(o = 0, i = m.length; o < i; o += 1)u = "", n && 0 === o || (u += h(e, t)), c = r[a = m[o]], E(e, t + 1, a, !0, !0, !0) && ((l = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, l && (u += h(e, t)), E(e, t + 1, c, !0, l) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", d += u += e.dump));
            e.tag = p, e.dump = d || "{}";
        }(e, t, e.dump, o), u && (e.dump = "&ref_" + l + e.dump)) : (!function(e, t, r) {
            var n, s, o, i, a, c = "", l = e.tag, u = Object.keys(r);
            for(n = 0, s = u.length; n < s; n += 1)a = "", 0 !== n && (a += ", "), e.condenseFlow && (a += '"'), i = r[o = u[n]], E(e, t, o, !1, !1) && (e.dump.length > 1024 && (a += "? "), a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), E(e, t, i, !1, !1) && (c += a += e.dump));
            e.tag = l, e.dump = "{" + c + "}";
        }(e, t, e.dump), u && (e.dump = "&ref_" + l + " " + e.dump));
        else if ("[object Array]" === c) {
            var p = e.noArrayIndent && t > 0 ? t - 1 : t;
            n && 0 !== e.dump.length ? (!function(e, t, r, n) {
                var s, o, i = "", a = e.tag;
                for(s = 0, o = r.length; s < o; s += 1)E(e, t + 1, r[s], !0, !0) && (n && 0 === s || (i += h(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
                e.tag = a, e.dump = i || "[]";
            }(e, p, e.dump, o), u && (e.dump = "&ref_" + l + e.dump)) : (!function(e, t, r) {
                var n, s, o = "", i = e.tag;
                for(n = 0, s = r.length; n < s; n += 1)E(e, t, r[n], !1, !1) && (0 !== n && (o += "," + (e.condenseFlow ? "" : " ")), o += e.dump);
                e.tag = i, e.dump = "[" + o + "]";
            }(e, p, e.dump), u && (e.dump = "&ref_" + l + " " + e.dump));
        } else {
            if ("[object String]" !== c) {
                if (e.skipInvalid) return !1;
                throw new s("unacceptable kind of an object to dump " + c);
            }
            "?" !== e.tag && _(e, e.dump, t, i);
        }
        null !== e.tag && "?" !== e.tag && (e.dump = "!<" + e.tag + "> " + e.dump);
    }
    return !0;
}
function I(e, t) {
    var r, n, s = [], o = [];
    for(T(e, s, o), r = 0, n = o.length; r < n; r += 1)t.duplicates.push(s[o[r]]);
    t.usedDuplicates = new Array(n);
}
function T(e, t, r) {
    var n, s, o;
    if (null !== e && "object" == typeof e) if (-1 !== (s = t.indexOf(e))) -1 === r.indexOf(s) && r.push(s);
    else if (t.push(e), Array.isArray(e)) for(s = 0, o = e.length; s < o; s += 1)T(e[s], t, r);
    else for(s = 0, o = (n = Object.keys(e)).length; s < o; s += 1)T(e[n[s]], t, r);
}
function C(e, t) {
    var r = new p(t = t || {});
    return r.noRefs || I(e, r), E(r, 0, e, !0, !0) ? r.dump + "\n" : "";
}
module.exports.dump = C, module.exports.safeDump = function(e, t) {
    return C(e, n.extend({
        schema: i
    }, t));
};
