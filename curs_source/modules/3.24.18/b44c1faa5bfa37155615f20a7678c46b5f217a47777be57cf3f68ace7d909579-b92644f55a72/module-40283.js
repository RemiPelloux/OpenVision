"use strict";
function n(e, t = !1) {
    const r = e.length;
    let n = 0, a = "", c = 0, l = 16, u = 0, d = 0, p = 0, m = 0, h = 0;
    function f(t, r) {
        let s = 0, o = 0;
        for(; s < t || !r;){
            let t = e.charCodeAt(n);
            if (t >= 48 && t <= 57) o = 16 * o + t - 48;
            else if (t >= 65 && t <= 70) o = 16 * o + t - 65 + 10;
            else {
                if (!(t >= 97 && t <= 102)) break;
                o = 16 * o + t - 97 + 10;
            }
            n++, s++;
        }
        return s < t && (o = -1), o;
    }
    function g() {
        if (a = "", h = 0, c = n, d = u, m = p, n >= r) return c = r, l = 17;
        let t = e.charCodeAt(n);
        if (s(t)) {
            do {
                n++, a += String.fromCharCode(t), t = e.charCodeAt(n);
            }while (s(t))
            return l = 15;
        }
        if (o(t)) return n++, a += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(n) && (n++, a += "\n"), u++, p = n, l = 14;
        switch(t){
            case 123:
                return n++, l = 1;
            case 125:
                return n++, l = 2;
            case 91:
                return n++, l = 3;
            case 93:
                return n++, l = 4;
            case 58:
                return n++, l = 6;
            case 44:
                return n++, l = 5;
            case 34:
                return n++, a = function() {
                    let t = "", s = n;
                    for(;;){
                        if (n >= r) {
                            t += e.substring(s, n), h = 2;
                            break;
                        }
                        const i = e.charCodeAt(n);
                        if (34 === i) {
                            t += e.substring(s, n), n++;
                            break;
                        }
                        if (92 !== i) {
                            if (i >= 0 && i <= 31) {
                                if (o(i)) {
                                    t += e.substring(s, n), h = 2;
                                    break;
                                }
                                h = 6;
                            }
                            n++;
                        } else {
                            if (t += e.substring(s, n), n++, n >= r) {
                                h = 2;
                                break;
                            }
                            switch(e.charCodeAt(n++)){
                                case 34:
                                    t += '"';
                                    break;
                                case 92:
                                    t += "\\";
                                    break;
                                case 47:
                                    t += "/";
                                    break;
                                case 98:
                                    t += "\b";
                                    break;
                                case 102:
                                    t += "\f";
                                    break;
                                case 110:
                                    t += "\n";
                                    break;
                                case 114:
                                    t += "\r";
                                    break;
                                case 116:
                                    t += "\t";
                                    break;
                                case 117:
                                    const e = f(4, !0);
                                    e >= 0 ? t += String.fromCharCode(e) : h = 4;
                                    break;
                                default:
                                    h = 5;
                            }
                            s = n;
                        }
                    }
                    return t;
                }(), l = 10;
            case 47:
                const s = n - 1;
                if (47 === e.charCodeAt(n + 1)) {
                    for(n += 2; n < r && !o(e.charCodeAt(n));)n++;
                    return a = e.substring(s, n), l = 12;
                }
                if (42 === e.charCodeAt(n + 1)) {
                    n += 2;
                    const t = r - 1;
                    let i = !1;
                    for(; n < t;){
                        const t = e.charCodeAt(n);
                        if (42 === t && 47 === e.charCodeAt(n + 1)) {
                            n += 2, i = !0;
                            break;
                        }
                        n++, o(t) && (13 === t && 10 === e.charCodeAt(n) && n++, u++, p = n);
                    }
                    return i || (n++, h = 1), a = e.substring(s, n), l = 13;
                }
                return a += String.fromCharCode(t), n++, l = 16;
            case 45:
                if (a += String.fromCharCode(t), n++, n === r || !i(e.charCodeAt(n))) return l = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return a += function() {
                    let t = n;
                    if (48 === e.charCodeAt(n)) n++;
                    else for(n++; n < e.length && i(e.charCodeAt(n));)n++;
                    if (n < e.length && 46 === e.charCodeAt(n)) {
                        if (n++, !(n < e.length && i(e.charCodeAt(n)))) return h = 3, e.substring(t, n);
                        for(n++; n < e.length && i(e.charCodeAt(n));)n++;
                    }
                    let r = n;
                    if (n < e.length && (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n))) if (n++, (n < e.length && 43 === e.charCodeAt(n) || 45 === e.charCodeAt(n)) && n++, n < e.length && i(e.charCodeAt(n))) {
                        for(n++; n < e.length && i(e.charCodeAt(n));)n++;
                        r = n;
                    } else h = 3;
                    return e.substring(t, r);
                }(), l = 11;
            default:
                for(; n < r && y(t);)n++, t = e.charCodeAt(n);
                if (c !== n) {
                    switch(a = e.substring(c, n), a){
                        case "true":
                            return l = 8;
                        case "false":
                            return l = 9;
                        case "null":
                            return l = 7;
                    }
                    return l = 16;
                }
                return a += String.fromCharCode(t), n++, l = 16;
        }
    }
    function y(e) {
        if (s(e) || o(e)) return !1;
        switch(e){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1;
        }
        return !0;
    }
    return {
        setPosition: function(e) {
            n = e, a = "", c = 0, l = 16, h = 0;
        },
        getPosition: ()=>n,
        scan: t ? function() {
            let e;
            do {
                e = g();
            }while (e >= 12 && e <= 15)
            return e;
        } : g,
        getToken: ()=>l,
        getTokenValue: ()=>a,
        getTokenOffset: ()=>c,
        getTokenLength: ()=>n - c,
        getTokenStartLine: ()=>d,
        getTokenStartCharacter: ()=>c - m,
        getTokenError: ()=>h
    };
}
function s(e) {
    return 32 === e || 9 === e;
}
function o(e) {
    return 10 === e || 13 === e;
}
function i(e) {
    return e >= 48 && e <= 57;
}
var a;
require.d(exports, {
    ct: ()=>T,
    JP: ()=>x,
    qg: ()=>I,
    _n: ()=>k
}), function(e) {
    e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
}(a || (a = {}));
const c = new Array(20).fill(0).map((e, t)=>" ".repeat(t)), l = 200, u = {
    " ": {
        "\n": new Array(l).fill(0).map((e, t)=>"\n" + " ".repeat(t)),
        "\r": new Array(l).fill(0).map((e, t)=>"\r" + " ".repeat(t)),
        "\r\n": new Array(l).fill(0).map((e, t)=>"\r\n" + " ".repeat(t))
    },
    "\t": {
        "\n": new Array(l).fill(0).map((e, t)=>"\n" + "\t".repeat(t)),
        "\r": new Array(l).fill(0).map((e, t)=>"\r" + "\t".repeat(t)),
        "\r\n": new Array(l).fill(0).map((e, t)=>"\r\n" + "\t".repeat(t))
    }
}, d = [
    "\n",
    "\r",
    "\r\n"
];
function p(e, t, r) {
    let s, o, i, a, l;
    if (t) {
        for(a = t.offset, l = a + t.length, i = a; i > 0 && !h(e, i - 1);)i--;
        let n = l;
        for(; n < e.length && !h(e, n);)n++;
        o = e.substring(i, n), s = function(e, t) {
            let r = 0, n = 0;
            const s = t.tabSize || 4;
            for(; r < e.length;){
                let t = e.charAt(r);
                if (t === c[1]) n++;
                else {
                    if ("\t" !== t) break;
                    n += s;
                }
                r++;
            }
            return Math.floor(n / s);
        }(o, r);
    } else o = e, s = 0, i = 0, a = 0, l = e.length;
    const p = function(e, t) {
        for(let e = 0; e < t.length; e++){
            const r = t.charAt(e);
            if ("\r" === r) return e + 1 < t.length && "\n" === t.charAt(e + 1) ? "\r\n" : "\r";
            if ("\n" === r) return "\n";
        }
        return e && e.eol || "\n";
    }(r, e), f = d.includes(p);
    let g, y = 0, w = 0;
    g = r.insertSpaces ? c[r.tabSize || 4] ?? m(c[1], r.tabSize || 4) : "\t";
    const v = "\t" === g ? "\t" : " ";
    let _ = n(o, !1), A = !1;
    function S() {
        if (y > 1) return m(p, y) + m(g, s + w);
        const e = g.length * (s + w);
        return !f || e > u[v][p].length ? p + m(g, s + w) : e <= 0 ? p : u[v][p][e];
    }
    function b() {
        let e = _.scan();
        for(y = 0; 15 === e || 14 === e;)14 === e && r.keepLines ? y += 1 : 14 === e && (y = 1), e = _.scan();
        return A = 16 === e || 0 !== _.getTokenError(), e;
    }
    const E = [];
    function I(r, n, s) {
        A || t && !(n < l && s > a) || e.substring(n, s) === r || E.push({
            offset: n,
            length: s - n,
            content: r
        });
    }
    let C = b();
    if (r.keepLines && y > 0 && I(m(p, y), 0, 0), 17 !== C) {
        let e = _.getTokenOffset() + i;
        I(g.length * s < 20 && r.insertSpaces ? c[g.length * s] : m(g, s), i, e);
    }
    for(; 17 !== C;){
        let e = _.getTokenOffset() + _.getTokenLength() + i, t = b(), n = "", s = !1;
        for(; 0 === y && (12 === t || 13 === t);){
            let r = _.getTokenOffset() + i;
            I(c[1], e, r), e = _.getTokenOffset() + _.getTokenLength() + i, s = 12 === t, n = s ? S() : "", t = b();
        }
        if (2 === t) 1 !== C && w--, r.keepLines && y > 0 || !r.keepLines && 1 !== C ? n = S() : r.keepLines && (n = c[1]);
        else if (4 === t) 3 !== C && w--, r.keepLines && y > 0 || !r.keepLines && 3 !== C ? n = S() : r.keepLines && (n = c[1]);
        else {
            switch(C){
                case 3:
                case 1:
                    w++, n = r.keepLines && y > 0 || !r.keepLines ? S() : c[1];
                    break;
                case 5:
                    n = r.keepLines && y > 0 || !r.keepLines ? S() : c[1];
                    break;
                case 12:
                    n = S();
                    break;
                case 13:
                    y > 0 ? n = S() : s || (n = c[1]);
                    break;
                case 6:
                    r.keepLines && y > 0 ? n = S() : s || (n = c[1]);
                    break;
                case 10:
                    r.keepLines && y > 0 ? n = S() : 6 !== t || s || (n = "");
                    break;
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    r.keepLines && y > 0 ? n = S() : 12 !== t && 13 !== t || s ? 5 !== t && 17 !== t && (A = !0) : n = c[1];
                    break;
                case 16:
                    A = !0;
            }
            y > 0 && (12 === t || 13 === t) && (n = S());
        }
        17 === t && (n = r.keepLines && y > 0 ? S() : r.insertFinalNewline ? p : "");
        I(n, e, _.getTokenOffset() + i), C = t;
    }
    return E;
}
function m(e, t) {
    let r = "";
    for(let n = 0; n < t; n++)r += e;
    return r;
}
function h(e, t) {
    return -1 !== "\r\n".indexOf(e.charAt(t));
}
var f;
function g(e, t = [], r = f.DEFAULT) {
    let n = {
        type: "array",
        offset: -1,
        length: -1,
        children: [],
        parent: void 0
    };
    function s(e) {
        "property" === n.type && (n.length = e - n.offset, n = n.parent);
    }
    function o(e) {
        return n.children.push(e), e;
    }
    w(e, {
        onObjectBegin: (e)=>{
            n = o({
                type: "object",
                offset: e,
                length: -1,
                parent: n,
                children: []
            });
        },
        onObjectProperty: (e, t, r)=>{
            n = o({
                type: "property",
                offset: t,
                length: -1,
                parent: n,
                children: []
            }), n.children.push({
                type: "string",
                value: e,
                offset: t,
                length: r,
                parent: n
            });
        },
        onObjectEnd: (e, t)=>{
            s(e + t), n.length = e + t - n.offset, n = n.parent, s(e + t);
        },
        onArrayBegin: (e, t)=>{
            n = o({
                type: "array",
                offset: e,
                length: -1,
                parent: n,
                children: []
            });
        },
        onArrayEnd: (e, t)=>{
            n.length = e + t - n.offset, n = n.parent, s(e + t);
        },
        onLiteralValue: (e, t, r)=>{
            o({
                type: v(e),
                offset: t,
                length: r,
                parent: n,
                value: e
            }), s(t + r);
        },
        onSeparator: (e, t, r)=>{
            "property" === n.type && (":" === e ? n.colonOffset = t : "," === e && s(t));
        },
        onError: (e, r, n)=>{
            t.push({
                error: e,
                offset: r,
                length: n
            });
        }
    }, r);
    const i = n.children[0];
    return i && delete i.parent, i;
}
function y(e, t) {
    if (!e) return;
    let r = e;
    for (let e of t)if ("string" == typeof e) {
        if ("object" !== r.type || !Array.isArray(r.children)) return;
        let t = !1;
        for (const n of r.children)if (Array.isArray(n.children) && n.children[0].value === e && 2 === n.children.length) {
            r = n.children[1], t = !0;
            break;
        }
        if (!t) return;
    } else {
        const t = e;
        if ("array" !== r.type || t < 0 || !Array.isArray(r.children) || t >= r.children.length) return;
        r = r.children[t];
    }
    return r;
}
function w(e, t, r = f.DEFAULT) {
    const s = n(e, !1), o = [];
    let i = 0;
    function a(e) {
        return e ? (t)=>0 === i && e(t, s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter()) : ()=>!0;
    }
    function c(e) {
        return e ? (t)=>0 === i && e(t, s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter(), ()=>o.slice()) : ()=>!0;
    }
    function l(e) {
        return e ? ()=>{
            if (i > 0) i++;
            else {
                !1 === e(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter(), ()=>o.slice()) && (i = 1);
            }
        } : ()=>!0;
    }
    function u(e) {
        return e ? ()=>{
            i > 0 && i--, 0 === i && e(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter());
        } : ()=>!0;
    }
    const d = l(t.onObjectBegin), p = c(t.onObjectProperty), m = u(t.onObjectEnd), h = l(t.onArrayBegin), g = u(t.onArrayEnd), y = c(t.onLiteralValue), w = a(t.onSeparator), v = (A = t.onComment) ? ()=>0 === i && A(s.getTokenOffset(), s.getTokenLength(), s.getTokenStartLine(), s.getTokenStartCharacter()) : ()=>!0, _ = a(t.onError);
    var A;
    const S = r && r.disallowComments, b = r && r.allowTrailingComma;
    function E() {
        for(;;){
            const e = s.scan();
            switch(s.getTokenError()){
                case 4:
                    I(14);
                    break;
                case 5:
                    I(15);
                    break;
                case 3:
                    I(13);
                    break;
                case 1:
                    S || I(11);
                    break;
                case 2:
                    I(12);
                    break;
                case 6:
                    I(16);
            }
            switch(e){
                case 12:
                case 13:
                    S ? I(10) : v();
                    break;
                case 16:
                    I(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return e;
            }
        }
    }
    function I(e, t = [], r = []) {
        if (_(e), t.length + r.length > 0) {
            let e = s.getToken();
            for(; 17 !== e;){
                if (-1 !== t.indexOf(e)) {
                    E();
                    break;
                }
                if (-1 !== r.indexOf(e)) break;
                e = E();
            }
        }
    }
    function C(e) {
        const t = s.getTokenValue();
        return e ? y(t) : (p(t), o.push(t)), E(), !0;
    }
    function k() {
        return 10 !== s.getToken() ? (I(3, [], [
            2,
            5
        ]), !1) : (C(!1), 6 === s.getToken() ? (w(":"), E(), x() || I(4, [], [
            2,
            5
        ])) : I(5, [], [
            2,
            5
        ]), o.pop(), !0);
    }
    function x() {
        switch(s.getToken()){
            case 3:
                return function() {
                    h(), E();
                    let e = !0, t = !1;
                    for(; 4 !== s.getToken() && 17 !== s.getToken();){
                        if (5 === s.getToken()) {
                            if (t || I(4, [], []), w(","), E(), 4 === s.getToken() && b) break;
                        } else t && I(6, [], []);
                        e ? (o.push(0), e = !1) : o[o.length - 1]++, x() || I(4, [], [
                            4,
                            5
                        ]), t = !0;
                    }
                    return g(), e || o.pop(), 4 !== s.getToken() ? I(8, [
                        4
                    ], []) : E(), !0;
                }();
            case 1:
                return function() {
                    d(), E();
                    let e = !1;
                    for(; 2 !== s.getToken() && 17 !== s.getToken();){
                        if (5 === s.getToken()) {
                            if (e || I(4, [], []), w(","), E(), 2 === s.getToken() && b) break;
                        } else e && I(6, [], []);
                        k() || I(4, [], [
                            2,
                            5
                        ]), e = !0;
                    }
                    return m(), 2 !== s.getToken() ? I(7, [
                        2
                    ], []) : E(), !0;
                }();
            case 10:
                return C(!0);
            default:
                return function() {
                    switch(s.getToken()){
                        case 11:
                            const e = s.getTokenValue();
                            let t = Number(e);
                            isNaN(t) && (I(2), t = 0), y(t);
                            break;
                        case 7:
                            y(null);
                            break;
                        case 8:
                            y(!0);
                            break;
                        case 9:
                            y(!1);
                            break;
                        default:
                            return !1;
                    }
                    return E(), !0;
                }();
        }
    }
    return E(), 17 === s.getToken() ? !!r.allowEmptyContent || (I(4, [], []), !1) : x() ? (17 !== s.getToken() && I(9, [], []), !0) : (I(4, [], []), !1);
}
function v(e) {
    switch(typeof e){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        case "object":
            return e ? Array.isArray(e) ? "array" : "object" : "null";
        default:
            return "null";
    }
}
function _(e, t, r, n) {
    const s = t.slice(), o = g(e, []);
    let i, a;
    for(; s.length > 0 && (a = s.pop(), i = y(o, s), void 0 === i && void 0 !== r);)r = "string" == typeof a ? {
        [a]: r
    } : [
        r
    ];
    if (i) {
        if ("object" === i.type && "string" == typeof a && Array.isArray(i.children)) {
            const t = y(i, [
                a
            ]);
            if (void 0 !== t) {
                if (void 0 === r) {
                    if (!t.parent) throw new Error("Malformed AST");
                    const r = i.children.indexOf(t.parent);
                    let s, o = t.parent.offset + t.parent.length;
                    if (r > 0) {
                        let e = i.children[r - 1];
                        s = e.offset + e.length;
                    } else if (s = i.offset + 1, i.children.length > 1) {
                        o = i.children[1].offset;
                    }
                    return A(e, {
                        offset: s,
                        length: o - s,
                        content: ""
                    }, n);
                }
                return A(e, {
                    offset: t.offset,
                    length: t.length,
                    content: JSON.stringify(r)
                }, n);
            }
            {
                if (void 0 === r) return [];
                const t = `${JSON.stringify(a)}: ${JSON.stringify(r)}`, s = n.getInsertionIndex ? n.getInsertionIndex(i.children.map((e)=>e.children[0].value)) : i.children.length;
                let o;
                if (s > 0) {
                    let e = i.children[s - 1];
                    o = {
                        offset: e.offset + e.length,
                        length: 0,
                        content: "," + t
                    };
                } else o = 0 === i.children.length ? {
                    offset: i.offset + 1,
                    length: 0,
                    content: t
                } : {
                    offset: i.offset + 1,
                    length: 0,
                    content: t + ","
                };
                return A(e, o, n);
            }
        }
        if ("array" === i.type && "number" == typeof a && Array.isArray(i.children)) {
            const t = a;
            if (-1 === t) {
                const t = `${JSON.stringify(r)}`;
                let s;
                if (0 === i.children.length) s = {
                    offset: i.offset + 1,
                    length: 0,
                    content: t
                };
                else {
                    const e = i.children[i.children.length - 1];
                    s = {
                        offset: e.offset + e.length,
                        length: 0,
                        content: "," + t
                    };
                }
                return A(e, s, n);
            }
            if (void 0 === r && i.children.length >= 0) {
                const t = a, r = i.children[t];
                let s;
                if (1 === i.children.length) s = {
                    offset: i.offset + 1,
                    length: i.length - 2,
                    content: ""
                };
                else if (i.children.length - 1 === t) {
                    let e = i.children[t - 1], r = e.offset + e.length;
                    s = {
                        offset: r,
                        length: i.offset + i.length - 2 - r,
                        content: ""
                    };
                } else s = {
                    offset: r.offset,
                    length: i.children[t + 1].offset - r.offset,
                    content: ""
                };
                return A(e, s, n);
            }
            if (void 0 !== r) {
                let t;
                const s = `${JSON.stringify(r)}`;
                if (!n.isArrayInsertion && i.children.length > a) {
                    const e = i.children[a];
                    t = {
                        offset: e.offset,
                        length: e.length,
                        content: s
                    };
                } else if (0 === i.children.length || 0 === a) t = {
                    offset: i.offset + 1,
                    length: 0,
                    content: 0 === i.children.length ? s : s + ","
                };
                else {
                    const e = a > i.children.length ? i.children.length : a, r = i.children[e - 1];
                    t = {
                        offset: r.offset + r.length,
                        length: 0,
                        content: "," + s
                    };
                }
                return A(e, t, n);
            }
            throw new Error(`Can not ${void 0 === r ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${t} as length is not sufficient`);
        }
        throw new Error(`Can not add ${"number" != typeof a ? "index" : "property"} to parent of type ${i.type}`);
    }
    if (void 0 === r) throw new Error("Can not delete in empty document");
    return A(e, {
        offset: o ? o.offset : 0,
        length: o ? o.length : 0,
        content: JSON.stringify(r)
    }, n);
}
function A(e, t, r) {
    if (!r.formattingOptions) return [
        t
    ];
    let n = S(e, t), s = t.offset, o = t.offset + t.content.length;
    if (0 === t.length || 0 === t.content.length) {
        for(; s > 0 && !h(n, s - 1);)s--;
        for(; o < n.length && !h(n, o);)o++;
    }
    const i = p(n, {
        offset: s,
        length: o - s
    }, {
        ...r.formattingOptions,
        keepLines: !1
    });
    for(let e = i.length - 1; e >= 0; e--){
        const t = i[e];
        n = S(n, t), s = Math.min(s, t.offset), o = Math.max(o, t.offset + t.length), o += t.content.length - t.length;
    }
    return [
        {
            offset: s,
            length: e.length - (n.length - o) - s,
            content: n.substring(s, o)
        }
    ];
}
function S(e, t) {
    return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
!function(e) {
    e.DEFAULT = {
        allowTrailingComma: !1
    };
}(f || (f = {}));
var b, E;
!function(e) {
    e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
}(b || (b = {})), function(e) {
    e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
}(E || (E = {}));
const I = function(e, t = [], r = f.DEFAULT) {
    let n = null, s = [];
    const o = [];
    function i(e) {
        Array.isArray(s) ? s.push(e) : null !== n && (s[n] = e);
    }
    return w(e, {
        onObjectBegin: ()=>{
            const e = {};
            i(e), o.push(s), s = e, n = null;
        },
        onObjectProperty: (e)=>{
            n = e;
        },
        onObjectEnd: ()=>{
            s = o.pop();
        },
        onArrayBegin: ()=>{
            const e = [];
            i(e), o.push(s), s = e, n = null;
        },
        onArrayEnd: ()=>{
            s = o.pop();
        },
        onLiteralValue: i,
        onError: (e, r, n)=>{
            t.push({
                error: e,
                offset: r,
                length: n
            });
        }
    }, r), s[0];
};
var C;
function k(e) {
    switch(e){
        case 1:
            return "InvalidSymbol";
        case 2:
            return "InvalidNumberFormat";
        case 3:
            return "PropertyNameExpected";
        case 4:
            return "ValueExpected";
        case 5:
            return "ColonExpected";
        case 6:
            return "CommaExpected";
        case 7:
            return "CloseBraceExpected";
        case 8:
            return "CloseBracketExpected";
        case 9:
            return "EndOfFileExpected";
        case 10:
            return "InvalidCommentToken";
        case 11:
            return "UnexpectedEndOfComment";
        case 12:
            return "UnexpectedEndOfString";
        case 13:
            return "UnexpectedEndOfNumber";
        case 14:
            return "InvalidUnicode";
        case 15:
            return "InvalidEscapeCharacter";
        case 16:
            return "InvalidCharacter";
    }
    return "<unknown ParseErrorCode>";
}
function x(e, t, r, n) {
    return _(e, t, r, n);
}
function T(e, t) {
    let r = t.slice(0).sort((e, t)=>{
        const r = e.offset - t.offset;
        return 0 === r ? e.length - t.length : r;
    }), n = e.length;
    for(let t = r.length - 1; t >= 0; t--){
        let s = r[t];
        if (!(s.offset + s.length <= n)) throw new Error("Overlapping edit");
        e = S(e, s), n = s.offset;
    }
    return e;
}
!function(e) {
    e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
}(C || (C = {}));
