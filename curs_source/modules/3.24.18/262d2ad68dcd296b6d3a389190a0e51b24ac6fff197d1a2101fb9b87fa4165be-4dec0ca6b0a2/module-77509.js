"use strict";
var n = require("./module-36755.js"), o = require("./module-39425.js"), s = require("./module-72519.js"), i = require("./module-52315.js"), a = require("./module-80599.js"), l = Object.prototype.hasOwnProperty, c = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, u = /[\x85\u2028\u2029]/, d = /[,\[\]\{\}]/, p = /^(?:!|!!|![a-z\-]+!)$/i, h = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function m(e) {
    return Object.prototype.toString.call(e);
}
function f(e) {
    return 10 === e || 13 === e;
}
function g(e) {
    return 9 === e || 32 === e;
}
function y(e) {
    return 9 === e || 32 === e || 10 === e || 13 === e;
}
function v(e) {
    return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
}
function w(e) {
    var t;
    return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1;
}
function b(e) {
    return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0;
}
function _(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
}
function S(e) {
    return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : "";
}
function x(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
}
for(var k = new Array(256), E = new Array(256), T = 0; T < 256; T++)k[T] = S(T) ? 1 : 0, E[T] = S(T);
function C(e, t) {
    this.input = e, this.filename = t.filename || null, this.schema = t.schema || a, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
}
function I(e, t) {
    return new o(t, new s(e.filename, e.input, e.position, e.line, e.position - e.lineStart));
}
function A(e, t) {
    throw I(e, t);
}
function P(e, t) {
    e.onWarning && e.onWarning.call(null, I(e, t));
}
var M = {
    YAML: function(e, t, r) {
        var n, o, s;
        null !== e.version && A(e, "duplication of %YAML directive"), 1 !== r.length && A(e, "YAML directive accepts exactly one argument"), null === (n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) && A(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), 1 !== o && A(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, 1 !== s && 2 !== s && P(e, "unsupported YAML version of the document");
    },
    TAG: function(e, t, r) {
        var n, o;
        2 !== r.length && A(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], p.test(n) || A(e, "ill-formed tag handle (first argument) of the TAG directive"), l.call(e.tagMap, n) && A(e, 'there is a previously declared suffix for "' + n + '" tag handle'), h.test(o) || A(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagMap[n] = o;
    }
};
function R(e, t, r, n) {
    var o, s, i, a;
    if (t < r) {
        if (a = e.input.slice(t, r), n) for(o = 0, s = a.length; o < s; o += 1)9 === (i = a.charCodeAt(o)) || 32 <= i && i <= 1114111 || A(e, "expected valid JSON character");
        else c.test(a) && A(e, "the stream contains non-printable characters");
        e.result += a;
    }
}
function O(e, t, r, o) {
    var s, i, a, c;
    for(n.isObject(r) || A(e, "cannot merge mappings; the provided source object is unacceptable"), a = 0, c = (s = Object.keys(r)).length; a < c; a += 1)i = s[a], l.call(t, i) || (t[i] = r[i], o[i] = !0);
}
function D(e, t, r, n, o, s, i, a) {
    var c, u;
    if (Array.isArray(o)) for(c = 0, u = (o = Array.prototype.slice.call(o)).length; c < u; c += 1)Array.isArray(o[c]) && A(e, "nested arrays are not supported inside keys"), "object" == typeof o && "[object Object]" === m(o[c]) && (o[c] = "[object Object]");
    if ("object" == typeof o && "[object Object]" === m(o) && (o = "[object Object]"), o = String(o), null === t && (t = {}), "tag:yaml.org,2002:merge" === n) if (Array.isArray(s)) for(c = 0, u = s.length; c < u; c += 1)O(e, t, s[c], r);
    else O(e, t, s, r);
    else e.json || l.call(r, o) || !l.call(t, o) || (e.line = i || e.line, e.position = a || e.position, A(e, "duplicated mapping key")), t[o] = s, delete r[o];
    return t;
}
function N(e) {
    var t;
    10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : A(e, "a line break is expected"), e.line += 1, e.lineStart = e.position;
}
function F(e, t, r) {
    for(var n = 0, o = e.input.charCodeAt(e.position); 0 !== o;){
        for(; g(o);)o = e.input.charCodeAt(++e.position);
        if (t && 35 === o) do {
            o = e.input.charCodeAt(++e.position);
        }while (10 !== o && 13 !== o && 0 !== o)
        if (!f(o)) break;
        for(N(e), o = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; 32 === o;)e.lineIndent++, o = e.input.charCodeAt(++e.position);
    }
    return -1 !== r && 0 !== n && e.lineIndent < r && P(e, "deficient indentation"), n;
}
function L(e) {
    var t, r = e.position;
    return !(45 !== (t = e.input.charCodeAt(r)) && 46 !== t || t !== e.input.charCodeAt(r + 1) || t !== e.input.charCodeAt(r + 2) || (r += 3, 0 !== (t = e.input.charCodeAt(r)) && !y(t)));
}
function U(e, t) {
    1 === t ? e.result += " " : t > 1 && (e.result += n.repeat("\n", t - 1));
}
function B(e, t) {
    var r, n, o = e.tag, s = e.anchor, i = [], a = !1;
    for(null !== e.anchor && (e.anchorMap[e.anchor] = i), n = e.input.charCodeAt(e.position); 0 !== n && 45 === n && y(e.input.charCodeAt(e.position + 1));)if (a = !0, e.position++, F(e, !0, -1) && e.lineIndent <= t) i.push(null), n = e.input.charCodeAt(e.position);
    else if (r = e.line, j(e, t, 3, !1, !0), i.push(e.result), F(e, !0, -1), n = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && 0 !== n) A(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t) break;
    return !!a && (e.tag = o, e.anchor = s, e.kind = "sequence", e.result = i, !0);
}
function $(e) {
    var t, r, n, o, s = !1, i = !1;
    if (33 !== (o = e.input.charCodeAt(e.position))) return !1;
    if (null !== e.tag && A(e, "duplication of a tag property"), 60 === (o = e.input.charCodeAt(++e.position)) ? (s = !0, o = e.input.charCodeAt(++e.position)) : 33 === o ? (i = !0, r = "!!", o = e.input.charCodeAt(++e.position)) : r = "!", t = e.position, s) {
        do {
            o = e.input.charCodeAt(++e.position);
        }while (0 !== o && 62 !== o)
        e.position < e.length ? (n = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : A(e, "unexpected end of the stream within a verbatim tag");
    } else {
        for(; 0 !== o && !y(o);)33 === o && (i ? A(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(t - 1, e.position + 1), p.test(r) || A(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
        n = e.input.slice(t, e.position), d.test(n) && A(e, "tag suffix cannot contain flow indicator characters");
    }
    return n && !h.test(n) && A(e, "tag name cannot contain such characters: " + n), s ? e.tag = n : l.call(e.tagMap, r) ? e.tag = e.tagMap[r] + n : "!" === r ? e.tag = "!" + n : "!!" === r ? e.tag = "tag:yaml.org,2002:" + n : A(e, 'undeclared tag handle "' + r + '"'), !0;
}
function q(e) {
    var t, r;
    if (38 !== (r = e.input.charCodeAt(e.position))) return !1;
    for(null !== e.anchor && A(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !y(r) && !v(r);)r = e.input.charCodeAt(++e.position);
    return e.position === t && A(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function j(e, t, r, o, s) {
    var i, a, c, u, d, p, h, m, S = 1, T = !1, C = !1;
    if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, i = a = c = 4 === r || 3 === r, o && F(e, !0, -1) && (T = !0, e.lineIndent > t ? S = 1 : e.lineIndent === t ? S = 0 : e.lineIndent < t && (S = -1)), 1 === S) for(; $(e) || q(e);)F(e, !0, -1) ? (T = !0, c = i, e.lineIndent > t ? S = 1 : e.lineIndent === t ? S = 0 : e.lineIndent < t && (S = -1)) : c = !1;
    if (c && (c = T || s), 1 !== S && 4 !== r || (h = 1 === r || 2 === r ? t : t + 1, m = e.position - e.lineStart, 1 === S ? c && (B(e, m) || function(e, t, r) {
        var n, o, s, i, a, l = e.tag, c = e.anchor, u = {}, d = {}, p = null, h = null, m = null, f = !1, v = !1;
        for(null !== e.anchor && (e.anchorMap[e.anchor] = u), a = e.input.charCodeAt(e.position); 0 !== a;){
            if (n = e.input.charCodeAt(e.position + 1), s = e.line, i = e.position, 63 !== a && 58 !== a || !y(n)) {
                if (!j(e, r, 2, !1, !0)) break;
                if (e.line === s) {
                    for(a = e.input.charCodeAt(e.position); g(a);)a = e.input.charCodeAt(++e.position);
                    if (58 === a) y(a = e.input.charCodeAt(++e.position)) || A(e, "a whitespace character is expected after the key-value separator within a block mapping"), f && (D(e, u, d, p, h, null), p = h = m = null), v = !0, f = !1, o = !1, p = e.tag, h = e.result;
                    else {
                        if (!v) return e.tag = l, e.anchor = c, !0;
                        A(e, "can not read an implicit mapping pair; a colon is missed");
                    }
                } else {
                    if (!v) return e.tag = l, e.anchor = c, !0;
                    A(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
                }
            } else 63 === a ? (f && (D(e, u, d, p, h, null), p = h = m = null), v = !0, f = !0, o = !0) : f ? (f = !1, o = !0) : A(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, a = n;
            if ((e.line === s || e.lineIndent > t) && (j(e, t, 4, !0, o) && (f ? h = e.result : m = e.result), f || (D(e, u, d, p, h, m, s, i), p = h = m = null), F(e, !0, -1), a = e.input.charCodeAt(e.position)), e.lineIndent > t && 0 !== a) A(e, "bad indentation of a mapping entry");
            else if (e.lineIndent < t) break;
        }
        return f && D(e, u, d, p, h, null), v && (e.tag = l, e.anchor = c, e.kind = "mapping", e.result = u), v;
    }(e, m, h)) || function(e, t) {
        var r, n, o, s, i, a, l, c, u, d, p = !0, h = e.tag, m = e.anchor, f = {};
        if (91 === (d = e.input.charCodeAt(e.position))) o = 93, a = !1, n = [];
        else {
            if (123 !== d) return !1;
            o = 125, a = !0, n = {};
        }
        for(null !== e.anchor && (e.anchorMap[e.anchor] = n), d = e.input.charCodeAt(++e.position); 0 !== d;){
            if (F(e, !0, t), (d = e.input.charCodeAt(e.position)) === o) return e.position++, e.tag = h, e.anchor = m, e.kind = a ? "mapping" : "sequence", e.result = n, !0;
            p || A(e, "missed comma between flow collection entries"), u = null, s = i = !1, 63 === d && y(e.input.charCodeAt(e.position + 1)) && (s = i = !0, e.position++, F(e, !0, t)), r = e.line, j(e, t, 1, !1, !0), c = e.tag, l = e.result, F(e, !0, t), d = e.input.charCodeAt(e.position), !i && e.line !== r || 58 !== d || (s = !0, d = e.input.charCodeAt(++e.position), F(e, !0, t), j(e, t, 1, !1, !0), u = e.result), a ? D(e, n, f, c, l, u) : s ? n.push(D(e, null, f, c, l, u)) : n.push(l), F(e, !0, t), 44 === (d = e.input.charCodeAt(e.position)) ? (p = !0, d = e.input.charCodeAt(++e.position)) : p = !1;
        }
        A(e, "unexpected end of the stream within a flow collection");
    }(e, h) ? C = !0 : (a && function(e, t) {
        var r, o, s, i, a = 1, l = !1, c = !1, u = t, d = 0, p = !1;
        if (124 === (i = e.input.charCodeAt(e.position))) o = !1;
        else {
            if (62 !== i) return !1;
            o = !0;
        }
        for(e.kind = "scalar", e.result = ""; 0 !== i;)if (43 === (i = e.input.charCodeAt(++e.position)) || 45 === i) 1 === a ? a = 43 === i ? 3 : 2 : A(e, "repeat of a chomping mode identifier");
        else {
            if (!((s = _(i)) >= 0)) break;
            0 === s ? A(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? A(e, "repeat of an indentation width identifier") : (u = t + s - 1, c = !0);
        }
        if (g(i)) {
            do {
                i = e.input.charCodeAt(++e.position);
            }while (g(i))
            if (35 === i) do {
                i = e.input.charCodeAt(++e.position);
            }while (!f(i) && 0 !== i)
        }
        for(; 0 !== i;){
            for(N(e), e.lineIndent = 0, i = e.input.charCodeAt(e.position); (!c || e.lineIndent < u) && 32 === i;)e.lineIndent++, i = e.input.charCodeAt(++e.position);
            if (!c && e.lineIndent > u && (u = e.lineIndent), f(i)) d++;
            else {
                if (e.lineIndent < u) {
                    3 === a ? e.result += n.repeat("\n", l ? 1 + d : d) : 1 === a && l && (e.result += "\n");
                    break;
                }
                for(o ? g(i) ? (p = !0, e.result += n.repeat("\n", l ? 1 + d : d)) : p ? (p = !1, e.result += n.repeat("\n", d + 1)) : 0 === d ? l && (e.result += " ") : e.result += n.repeat("\n", d) : e.result += n.repeat("\n", l ? 1 + d : d), l = !0, c = !0, d = 0, r = e.position; !f(i) && 0 !== i;)i = e.input.charCodeAt(++e.position);
                R(e, r, e.position, !1);
            }
        }
        return !0;
    }(e, h) || function(e, t) {
        var r, n, o;
        if (39 !== (r = e.input.charCodeAt(e.position))) return !1;
        for(e.kind = "scalar", e.result = "", e.position++, n = o = e.position; 0 !== (r = e.input.charCodeAt(e.position));)if (39 === r) {
            if (R(e, n, e.position, !0), 39 !== (r = e.input.charCodeAt(++e.position))) return !0;
            n = e.position, e.position++, o = e.position;
        } else f(r) ? (R(e, n, o, !0), U(e, F(e, !1, t)), n = o = e.position) : e.position === e.lineStart && L(e) ? A(e, "unexpected end of the document within a single quoted scalar") : (e.position++, o = e.position);
        A(e, "unexpected end of the stream within a single quoted scalar");
    }(e, h) || function(e, t) {
        var r, n, o, s, i, a;
        if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
        for(e.kind = "scalar", e.result = "", e.position++, r = n = e.position; 0 !== (a = e.input.charCodeAt(e.position));){
            if (34 === a) return R(e, r, e.position, !0), e.position++, !0;
            if (92 === a) {
                if (R(e, r, e.position, !0), f(a = e.input.charCodeAt(++e.position))) F(e, !1, t);
                else if (a < 256 && k[a]) e.result += E[a], e.position++;
                else if ((i = b(a)) > 0) {
                    for(o = i, s = 0; o > 0; o--)(i = w(a = e.input.charCodeAt(++e.position))) >= 0 ? s = (s << 4) + i : A(e, "expected hexadecimal character");
                    e.result += x(s), e.position++;
                } else A(e, "unknown escape sequence");
                r = n = e.position;
            } else f(a) ? (R(e, r, n, !0), U(e, F(e, !1, t)), r = n = e.position) : e.position === e.lineStart && L(e) ? A(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
        }
        A(e, "unexpected end of the stream within a double quoted scalar");
    }(e, h) ? C = !0 : !function(e) {
        var t, r, n;
        if (42 !== (n = e.input.charCodeAt(e.position))) return !1;
        for(n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !y(n) && !v(n);)n = e.input.charCodeAt(++e.position);
        return e.position === t && A(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), l.call(e.anchorMap, r) || A(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], F(e, !0, -1), !0;
    }(e) ? function(e, t, r) {
        var n, o, s, i, a, l, c, u, d = e.kind, p = e.result;
        if (y(u = e.input.charCodeAt(e.position)) || v(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u) return !1;
        if ((63 === u || 45 === u) && (y(n = e.input.charCodeAt(e.position + 1)) || r && v(n))) return !1;
        for(e.kind = "scalar", e.result = "", o = s = e.position, i = !1; 0 !== u;){
            if (58 === u) {
                if (y(n = e.input.charCodeAt(e.position + 1)) || r && v(n)) break;
            } else if (35 === u) {
                if (y(e.input.charCodeAt(e.position - 1))) break;
            } else {
                if (e.position === e.lineStart && L(e) || r && v(u)) break;
                if (f(u)) {
                    if (a = e.line, l = e.lineStart, c = e.lineIndent, F(e, !1, -1), e.lineIndent >= t) {
                        i = !0, u = e.input.charCodeAt(e.position);
                        continue;
                    }
                    e.position = s, e.line = a, e.lineStart = l, e.lineIndent = c;
                    break;
                }
            }
            i && (R(e, o, s, !1), U(e, e.line - a), o = s = e.position, i = !1), g(u) || (s = e.position + 1), u = e.input.charCodeAt(++e.position);
        }
        return R(e, o, s, !1), !!e.result || (e.kind = d, e.result = p, !1);
    }(e, h, 1 === r) && (C = !0, null === e.tag && (e.tag = "?")) : (C = !0, null === e.tag && null === e.anchor || A(e, "alias node should not have any properties")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === S && (C = c && B(e, m))), null !== e.tag && "!" !== e.tag) if ("?" === e.tag) {
        for(null !== e.result && "scalar" !== e.kind && A(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, d = e.implicitTypes.length; u < d; u += 1)if ((p = e.implicitTypes[u]).resolve(e.result)) {
            e.result = p.construct(e.result), e.tag = p.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
            break;
        }
    } else l.call(e.typeMap[e.kind || "fallback"], e.tag) ? (p = e.typeMap[e.kind || "fallback"][e.tag], null !== e.result && p.kind !== e.kind && A(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + p.kind + '", not "' + e.kind + '"'), p.resolve(e.result) ? (e.result = p.construct(e.result), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : A(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : A(e, "unknown tag !<" + e.tag + ">");
    return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || C;
}
function J(e) {
    var t, r, n, o, s = e.position, i = !1;
    for(e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; 0 !== (o = e.input.charCodeAt(e.position)) && (F(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== o));){
        for(i = !0, o = e.input.charCodeAt(++e.position), t = e.position; 0 !== o && !y(o);)o = e.input.charCodeAt(++e.position);
        for(n = [], (r = e.input.slice(t, e.position)).length < 1 && A(e, "directive name must not be less than one character in length"); 0 !== o;){
            for(; g(o);)o = e.input.charCodeAt(++e.position);
            if (35 === o) {
                do {
                    o = e.input.charCodeAt(++e.position);
                }while (0 !== o && !f(o))
                break;
            }
            if (f(o)) break;
            for(t = e.position; 0 !== o && !y(o);)o = e.input.charCodeAt(++e.position);
            n.push(e.input.slice(t, e.position));
        }
        0 !== o && N(e), l.call(M, r) ? M[r](e, r, n) : P(e, 'unknown document directive "' + r + '"');
    }
    F(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, F(e, !0, -1)) : i && A(e, "directives end mark is expected"), j(e, e.lineIndent - 1, 4, !1, !0), F(e, !0, -1), e.checkLineBreaks && u.test(e.input.slice(s, e.position)) && P(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && L(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, F(e, !0, -1)) : e.position < e.length - 1 && A(e, "end of the stream or a document separator is expected");
}
function z(e, t) {
    t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
    var r = new C(e, t), n = e.indexOf("\0");
    for(-1 !== n && (r.position = n, A(r, "null byte is not allowed in input")), r.input += "\0"; 32 === r.input.charCodeAt(r.position);)r.lineIndent += 1, r.position += 1;
    for(; r.position < r.length - 1;)J(r);
    return r.documents;
}
function H(e, t, r) {
    null !== t && "object" == typeof t && void 0 === r && (r = t, t = null);
    var n = z(e, r);
    if ("function" != typeof t) return n;
    for(var o = 0, s = n.length; o < s; o += 1)t(n[o]);
}
function W(e, t) {
    var r = z(e, t);
    if (0 !== r.length) {
        if (1 === r.length) return r[0];
        throw new o("expected a single document in the stream, but found more");
    }
}
module.exports.loadAll = H, module.exports.load = W, module.exports.safeLoadAll = function(e, t, r) {
    return "object" == typeof t && null !== t && void 0 === r && (r = t, t = null), H(e, t, n.extend({
        schema: i
    }, r));
}, module.exports.safeLoad = function(e, t) {
    return W(e, n.extend({
        schema: i
    }, t));
};
