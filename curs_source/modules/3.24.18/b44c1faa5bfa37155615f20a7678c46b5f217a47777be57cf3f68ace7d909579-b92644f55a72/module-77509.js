"use strict";
var n = require("./module-36755.js"), s = require("./module-39425.js"), o = require("./module-72519.js"), i = require("./module-52315.js"), a = require("./module-80599.js"), c = Object.prototype.hasOwnProperty, l = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, u = /[\x85\u2028\u2029]/, d = /[,\[\]\{\}]/, p = /^(?:!|!!|![a-z\-]+!)$/i, m = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function h(e) {
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
function w(e) {
    return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
}
function v(e) {
    var t;
    return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1;
}
function _(e) {
    return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0;
}
function A(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
}
function S(e) {
    return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : "";
}
function b(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
}
for(var E = new Array(256), I = new Array(256), C = 0; C < 256; C++)E[C] = S(C) ? 1 : 0, I[C] = S(C);
function k(e, t) {
    this.input = e, this.filename = t.filename || null, this.schema = t.schema || a, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
}
function x(e, t) {
    return new s(t, new o(e.filename, e.input, e.position, e.line, e.position - e.lineStart));
}
function T(e, t) {
    throw x(e, t);
}
function R(e, t) {
    e.onWarning && e.onWarning.call(null, x(e, t));
}
var B = {
    YAML: function(e, t, r) {
        var n, s, o;
        null !== e.version && T(e, "duplication of %YAML directive"), 1 !== r.length && T(e, "YAML directive accepts exactly one argument"), null === (n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) && T(e, "ill-formed argument of the YAML directive"), s = parseInt(n[1], 10), o = parseInt(n[2], 10), 1 !== s && T(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && R(e, "unsupported YAML version of the document");
    },
    TAG: function(e, t, r) {
        var n, s;
        2 !== r.length && T(e, "TAG directive accepts exactly two arguments"), n = r[0], s = r[1], p.test(n) || T(e, "ill-formed tag handle (first argument) of the TAG directive"), c.call(e.tagMap, n) && T(e, 'there is a previously declared suffix for "' + n + '" tag handle'), m.test(s) || T(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagMap[n] = s;
    }
};
function P(e, t, r, n) {
    var s, o, i, a;
    if (t < r) {
        if (a = e.input.slice(t, r), n) for(s = 0, o = a.length; s < o; s += 1)9 === (i = a.charCodeAt(s)) || 32 <= i && i <= 1114111 || T(e, "expected valid JSON character");
        else l.test(a) && T(e, "the stream contains non-printable characters");
        e.result += a;
    }
}
function J(e, t, r, s) {
    var o, i, a, l;
    for(n.isObject(r) || T(e, "cannot merge mappings; the provided source object is unacceptable"), a = 0, l = (o = Object.keys(r)).length; a < l; a += 1)i = o[a], c.call(t, i) || (t[i] = r[i], s[i] = !0);
}
function M(e, t, r, n, s, o, i, a) {
    var l, u;
    if (Array.isArray(s)) for(l = 0, u = (s = Array.prototype.slice.call(s)).length; l < u; l += 1)Array.isArray(s[l]) && T(e, "nested arrays are not supported inside keys"), "object" == typeof s && "[object Object]" === h(s[l]) && (s[l] = "[object Object]");
    if ("object" == typeof s && "[object Object]" === h(s) && (s = "[object Object]"), s = String(s), null === t && (t = {}), "tag:yaml.org,2002:merge" === n) if (Array.isArray(o)) for(l = 0, u = o.length; l < u; l += 1)J(e, t, o[l], r);
    else J(e, t, o, r);
    else e.json || c.call(r, s) || !c.call(t, s) || (e.line = i || e.line, e.position = a || e.position, T(e, "duplicated mapping key")), t[s] = o, delete r[s];
    return t;
}
function q(e) {
    var t;
    10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : T(e, "a line break is expected"), e.line += 1, e.lineStart = e.position;
}
function D(e, t, r) {
    for(var n = 0, s = e.input.charCodeAt(e.position); 0 !== s;){
        for(; g(s);)s = e.input.charCodeAt(++e.position);
        if (t && 35 === s) do {
            s = e.input.charCodeAt(++e.position);
        }while (10 !== s && 13 !== s && 0 !== s)
        if (!f(s)) break;
        for(q(e), s = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; 32 === s;)e.lineIndent++, s = e.input.charCodeAt(++e.position);
    }
    return -1 !== r && 0 !== n && e.lineIndent < r && R(e, "deficient indentation"), n;
}
function O(e) {
    var t, r = e.position;
    return !(45 !== (t = e.input.charCodeAt(r)) && 46 !== t || t !== e.input.charCodeAt(r + 1) || t !== e.input.charCodeAt(r + 2) || (r += 3, 0 !== (t = e.input.charCodeAt(r)) && !y(t)));
}
function N(e, t) {
    1 === t ? e.result += " " : t > 1 && (e.result += n.repeat("\n", t - 1));
}
function F(e, t) {
    var r, n, s = e.tag, o = e.anchor, i = [], a = !1;
    for(null !== e.anchor && (e.anchorMap[e.anchor] = i), n = e.input.charCodeAt(e.position); 0 !== n && 45 === n && y(e.input.charCodeAt(e.position + 1));)if (a = !0, e.position++, D(e, !0, -1) && e.lineIndent <= t) i.push(null), n = e.input.charCodeAt(e.position);
    else if (r = e.line, $(e, t, 3, !1, !0), i.push(e.result), D(e, !0, -1), n = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && 0 !== n) T(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t) break;
    return !!a && (e.tag = s, e.anchor = o, e.kind = "sequence", e.result = i, !0);
}
function U(e) {
    var t, r, n, s, o = !1, i = !1;
    if (33 !== (s = e.input.charCodeAt(e.position))) return !1;
    if (null !== e.tag && T(e, "duplication of a tag property"), 60 === (s = e.input.charCodeAt(++e.position)) ? (o = !0, s = e.input.charCodeAt(++e.position)) : 33 === s ? (i = !0, r = "!!", s = e.input.charCodeAt(++e.position)) : r = "!", t = e.position, o) {
        do {
            s = e.input.charCodeAt(++e.position);
        }while (0 !== s && 62 !== s)
        e.position < e.length ? (n = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : T(e, "unexpected end of the stream within a verbatim tag");
    } else {
        for(; 0 !== s && !y(s);)33 === s && (i ? T(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(t - 1, e.position + 1), p.test(r) || T(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
        n = e.input.slice(t, e.position), d.test(n) && T(e, "tag suffix cannot contain flow indicator characters");
    }
    return n && !m.test(n) && T(e, "tag name cannot contain such characters: " + n), o ? e.tag = n : c.call(e.tagMap, r) ? e.tag = e.tagMap[r] + n : "!" === r ? e.tag = "!" + n : "!!" === r ? e.tag = "tag:yaml.org,2002:" + n : T(e, 'undeclared tag handle "' + r + '"'), !0;
}
function L(e) {
    var t, r;
    if (38 !== (r = e.input.charCodeAt(e.position))) return !1;
    for(null !== e.anchor && T(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !y(r) && !w(r);)r = e.input.charCodeAt(++e.position);
    return e.position === t && T(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function $(e, t, r, s, o) {
    var i, a, l, u, d, p, m, h, S = 1, C = !1, k = !1;
    if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, i = a = l = 4 === r || 3 === r, s && D(e, !0, -1) && (C = !0, e.lineIndent > t ? S = 1 : e.lineIndent === t ? S = 0 : e.lineIndent < t && (S = -1)), 1 === S) for(; U(e) || L(e);)D(e, !0, -1) ? (C = !0, l = i, e.lineIndent > t ? S = 1 : e.lineIndent === t ? S = 0 : e.lineIndent < t && (S = -1)) : l = !1;
    if (l && (l = C || o), 1 !== S && 4 !== r || (m = 1 === r || 2 === r ? t : t + 1, h = e.position - e.lineStart, 1 === S ? l && (F(e, h) || function(e, t, r) {
        var n, s, o, i, a, c = e.tag, l = e.anchor, u = {}, d = {}, p = null, m = null, h = null, f = !1, w = !1;
        for(null !== e.anchor && (e.anchorMap[e.anchor] = u), a = e.input.charCodeAt(e.position); 0 !== a;){
            if (n = e.input.charCodeAt(e.position + 1), o = e.line, i = e.position, 63 !== a && 58 !== a || !y(n)) {
                if (!$(e, r, 2, !1, !0)) break;
                if (e.line === o) {
                    for(a = e.input.charCodeAt(e.position); g(a);)a = e.input.charCodeAt(++e.position);
                    if (58 === a) y(a = e.input.charCodeAt(++e.position)) || T(e, "a whitespace character is expected after the key-value separator within a block mapping"), f && (M(e, u, d, p, m, null), p = m = h = null), w = !0, f = !1, s = !1, p = e.tag, m = e.result;
                    else {
                        if (!w) return e.tag = c, e.anchor = l, !0;
                        T(e, "can not read an implicit mapping pair; a colon is missed");
                    }
                } else {
                    if (!w) return e.tag = c, e.anchor = l, !0;
                    T(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
                }
            } else 63 === a ? (f && (M(e, u, d, p, m, null), p = m = h = null), w = !0, f = !0, s = !0) : f ? (f = !1, s = !0) : T(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, a = n;
            if ((e.line === o || e.lineIndent > t) && ($(e, t, 4, !0, s) && (f ? m = e.result : h = e.result), f || (M(e, u, d, p, m, h, o, i), p = m = h = null), D(e, !0, -1), a = e.input.charCodeAt(e.position)), e.lineIndent > t && 0 !== a) T(e, "bad indentation of a mapping entry");
            else if (e.lineIndent < t) break;
        }
        return f && M(e, u, d, p, m, null), w && (e.tag = c, e.anchor = l, e.kind = "mapping", e.result = u), w;
    }(e, h, m)) || function(e, t) {
        var r, n, s, o, i, a, c, l, u, d, p = !0, m = e.tag, h = e.anchor, f = {};
        if (91 === (d = e.input.charCodeAt(e.position))) s = 93, a = !1, n = [];
        else {
            if (123 !== d) return !1;
            s = 125, a = !0, n = {};
        }
        for(null !== e.anchor && (e.anchorMap[e.anchor] = n), d = e.input.charCodeAt(++e.position); 0 !== d;){
            if (D(e, !0, t), (d = e.input.charCodeAt(e.position)) === s) return e.position++, e.tag = m, e.anchor = h, e.kind = a ? "mapping" : "sequence", e.result = n, !0;
            p || T(e, "missed comma between flow collection entries"), u = null, o = i = !1, 63 === d && y(e.input.charCodeAt(e.position + 1)) && (o = i = !0, e.position++, D(e, !0, t)), r = e.line, $(e, t, 1, !1, !0), l = e.tag, c = e.result, D(e, !0, t), d = e.input.charCodeAt(e.position), !i && e.line !== r || 58 !== d || (o = !0, d = e.input.charCodeAt(++e.position), D(e, !0, t), $(e, t, 1, !1, !0), u = e.result), a ? M(e, n, f, l, c, u) : o ? n.push(M(e, null, f, l, c, u)) : n.push(c), D(e, !0, t), 44 === (d = e.input.charCodeAt(e.position)) ? (p = !0, d = e.input.charCodeAt(++e.position)) : p = !1;
        }
        T(e, "unexpected end of the stream within a flow collection");
    }(e, m) ? k = !0 : (a && function(e, t) {
        var r, s, o, i, a = 1, c = !1, l = !1, u = t, d = 0, p = !1;
        if (124 === (i = e.input.charCodeAt(e.position))) s = !1;
        else {
            if (62 !== i) return !1;
            s = !0;
        }
        for(e.kind = "scalar", e.result = ""; 0 !== i;)if (43 === (i = e.input.charCodeAt(++e.position)) || 45 === i) 1 === a ? a = 43 === i ? 3 : 2 : T(e, "repeat of a chomping mode identifier");
        else {
            if (!((o = A(i)) >= 0)) break;
            0 === o ? T(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : l ? T(e, "repeat of an indentation width identifier") : (u = t + o - 1, l = !0);
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
            for(q(e), e.lineIndent = 0, i = e.input.charCodeAt(e.position); (!l || e.lineIndent < u) && 32 === i;)e.lineIndent++, i = e.input.charCodeAt(++e.position);
            if (!l && e.lineIndent > u && (u = e.lineIndent), f(i)) d++;
            else {
                if (e.lineIndent < u) {
                    3 === a ? e.result += n.repeat("\n", c ? 1 + d : d) : 1 === a && c && (e.result += "\n");
                    break;
                }
                for(s ? g(i) ? (p = !0, e.result += n.repeat("\n", c ? 1 + d : d)) : p ? (p = !1, e.result += n.repeat("\n", d + 1)) : 0 === d ? c && (e.result += " ") : e.result += n.repeat("\n", d) : e.result += n.repeat("\n", c ? 1 + d : d), c = !0, l = !0, d = 0, r = e.position; !f(i) && 0 !== i;)i = e.input.charCodeAt(++e.position);
                P(e, r, e.position, !1);
            }
        }
        return !0;
    }(e, m) || function(e, t) {
        var r, n, s;
        if (39 !== (r = e.input.charCodeAt(e.position))) return !1;
        for(e.kind = "scalar", e.result = "", e.position++, n = s = e.position; 0 !== (r = e.input.charCodeAt(e.position));)if (39 === r) {
            if (P(e, n, e.position, !0), 39 !== (r = e.input.charCodeAt(++e.position))) return !0;
            n = e.position, e.position++, s = e.position;
        } else f(r) ? (P(e, n, s, !0), N(e, D(e, !1, t)), n = s = e.position) : e.position === e.lineStart && O(e) ? T(e, "unexpected end of the document within a single quoted scalar") : (e.position++, s = e.position);
        T(e, "unexpected end of the stream within a single quoted scalar");
    }(e, m) || function(e, t) {
        var r, n, s, o, i, a;
        if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
        for(e.kind = "scalar", e.result = "", e.position++, r = n = e.position; 0 !== (a = e.input.charCodeAt(e.position));){
            if (34 === a) return P(e, r, e.position, !0), e.position++, !0;
            if (92 === a) {
                if (P(e, r, e.position, !0), f(a = e.input.charCodeAt(++e.position))) D(e, !1, t);
                else if (a < 256 && E[a]) e.result += I[a], e.position++;
                else if ((i = _(a)) > 0) {
                    for(s = i, o = 0; s > 0; s--)(i = v(a = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + i : T(e, "expected hexadecimal character");
                    e.result += b(o), e.position++;
                } else T(e, "unknown escape sequence");
                r = n = e.position;
            } else f(a) ? (P(e, r, n, !0), N(e, D(e, !1, t)), r = n = e.position) : e.position === e.lineStart && O(e) ? T(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
        }
        T(e, "unexpected end of the stream within a double quoted scalar");
    }(e, m) ? k = !0 : !function(e) {
        var t, r, n;
        if (42 !== (n = e.input.charCodeAt(e.position))) return !1;
        for(n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !y(n) && !w(n);)n = e.input.charCodeAt(++e.position);
        return e.position === t && T(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), c.call(e.anchorMap, r) || T(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], D(e, !0, -1), !0;
    }(e) ? function(e, t, r) {
        var n, s, o, i, a, c, l, u, d = e.kind, p = e.result;
        if (y(u = e.input.charCodeAt(e.position)) || w(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u) return !1;
        if ((63 === u || 45 === u) && (y(n = e.input.charCodeAt(e.position + 1)) || r && w(n))) return !1;
        for(e.kind = "scalar", e.result = "", s = o = e.position, i = !1; 0 !== u;){
            if (58 === u) {
                if (y(n = e.input.charCodeAt(e.position + 1)) || r && w(n)) break;
            } else if (35 === u) {
                if (y(e.input.charCodeAt(e.position - 1))) break;
            } else {
                if (e.position === e.lineStart && O(e) || r && w(u)) break;
                if (f(u)) {
                    if (a = e.line, c = e.lineStart, l = e.lineIndent, D(e, !1, -1), e.lineIndent >= t) {
                        i = !0, u = e.input.charCodeAt(e.position);
                        continue;
                    }
                    e.position = o, e.line = a, e.lineStart = c, e.lineIndent = l;
                    break;
                }
            }
            i && (P(e, s, o, !1), N(e, e.line - a), s = o = e.position, i = !1), g(u) || (o = e.position + 1), u = e.input.charCodeAt(++e.position);
        }
        return P(e, s, o, !1), !!e.result || (e.kind = d, e.result = p, !1);
    }(e, m, 1 === r) && (k = !0, null === e.tag && (e.tag = "?")) : (k = !0, null === e.tag && null === e.anchor || T(e, "alias node should not have any properties")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === S && (k = l && F(e, h))), null !== e.tag && "!" !== e.tag) if ("?" === e.tag) {
        for(null !== e.result && "scalar" !== e.kind && T(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, d = e.implicitTypes.length; u < d; u += 1)if ((p = e.implicitTypes[u]).resolve(e.result)) {
            e.result = p.construct(e.result), e.tag = p.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
            break;
        }
    } else c.call(e.typeMap[e.kind || "fallback"], e.tag) ? (p = e.typeMap[e.kind || "fallback"][e.tag], null !== e.result && p.kind !== e.kind && T(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + p.kind + '", not "' + e.kind + '"'), p.resolve(e.result) ? (e.result = p.construct(e.result), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : T(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : T(e, "unknown tag !<" + e.tag + ">");
    return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || k;
}
function Q(e) {
    var t, r, n, s, o = e.position, i = !1;
    for(e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; 0 !== (s = e.input.charCodeAt(e.position)) && (D(e, !0, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== s));){
        for(i = !0, s = e.input.charCodeAt(++e.position), t = e.position; 0 !== s && !y(s);)s = e.input.charCodeAt(++e.position);
        for(n = [], (r = e.input.slice(t, e.position)).length < 1 && T(e, "directive name must not be less than one character in length"); 0 !== s;){
            for(; g(s);)s = e.input.charCodeAt(++e.position);
            if (35 === s) {
                do {
                    s = e.input.charCodeAt(++e.position);
                }while (0 !== s && !f(s))
                break;
            }
            if (f(s)) break;
            for(t = e.position; 0 !== s && !y(s);)s = e.input.charCodeAt(++e.position);
            n.push(e.input.slice(t, e.position));
        }
        0 !== s && q(e), c.call(B, r) ? B[r](e, r, n) : R(e, 'unknown document directive "' + r + '"');
    }
    D(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, D(e, !0, -1)) : i && T(e, "directives end mark is expected"), $(e, e.lineIndent - 1, 4, !1, !0), D(e, !0, -1), e.checkLineBreaks && u.test(e.input.slice(o, e.position)) && R(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && O(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, D(e, !0, -1)) : e.position < e.length - 1 && T(e, "end of the stream or a document separator is expected");
}
function j(e, t) {
    t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
    var r = new k(e, t), n = e.indexOf("\0");
    for(-1 !== n && (r.position = n, T(r, "null byte is not allowed in input")), r.input += "\0"; 32 === r.input.charCodeAt(r.position);)r.lineIndent += 1, r.position += 1;
    for(; r.position < r.length - 1;)Q(r);
    return r.documents;
}
function G(e, t, r) {
    null !== t && "object" == typeof t && void 0 === r && (r = t, t = null);
    var n = j(e, r);
    if ("function" != typeof t) return n;
    for(var s = 0, o = n.length; s < o; s += 1)t(n[s]);
}
function H(e, t) {
    var r = j(e, t);
    if (0 !== r.length) {
        if (1 === r.length) return r[0];
        throw new s("expected a single document in the stream, but found more");
    }
}
module.exports.loadAll = G, module.exports.load = H, module.exports.safeLoadAll = function(e, t, r) {
    return "object" == typeof t && null !== t && void 0 === r && (r = t, t = null), G(e, t, n.extend({
        schema: i
    }, r));
}, module.exports.safeLoad = function(e, t) {
    return H(e, n.extend({
        schema: i
    }, t));
};
