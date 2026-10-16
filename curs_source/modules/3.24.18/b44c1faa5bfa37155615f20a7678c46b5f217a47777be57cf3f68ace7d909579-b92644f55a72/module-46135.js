"use strict";
require.d(exports, {
    xF: ()=>se
});
const n = (e, t, r)=>{
    const n = e instanceof RegExp ? s(e, r) : e, i = t instanceof RegExp ? s(t, r) : t, a = null !== n && null != i && o(n, i, r);
    return a && {
        start: a[0],
        end: a[1],
        pre: r.slice(0, a[0]),
        body: r.slice(a[0] + n.length, a[1]),
        post: r.slice(a[1] + i.length)
    };
}, s = (e, t)=>{
    const r = t.match(e);
    return r ? r[0] : null;
}, o = (e, t, r)=>{
    let n, s, o, i, a, c = r.indexOf(e), l = r.indexOf(t, c + 1), u = c;
    if (c >= 0 && l > 0) {
        if (e === t) return [
            c,
            l
        ];
        for(n = [], o = r.length; u >= 0 && !a;){
            if (u === c) n.push(u), c = r.indexOf(e, u + 1);
            else if (1 === n.length) {
                const e = n.pop();
                void 0 !== e && (a = [
                    e,
                    l
                ]);
            } else s = n.pop(), void 0 !== s && s < o && (o = s, i = l), l = r.indexOf(t, u + 1);
            u = c < l && c >= 0 ? c : l;
        }
        n.length && void 0 !== i && (a = [
            o,
            i
        ]);
    }
    return a;
}, i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", c = "\0CLOSE" + Math.random() + "\0", l = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0", d = new RegExp(i, "g"), p = new RegExp(a, "g"), m = new RegExp(c, "g"), h = new RegExp(l, "g"), f = new RegExp(u, "g"), g = /\\\\/g, y = /\\{/g, w = /\\}/g, v = /\\,/g, _ = /\\\./g, A = 1e5, S = 4e6;
function b(e) {
    return isNaN(e) ? e.charCodeAt(0) : parseInt(e, 10);
}
function E(e) {
    return e.replace(d, "\\").replace(p, "{").replace(m, "}").replace(h, ",").replace(f, ".");
}
function I(e) {
    if (!e) return [
        ""
    ];
    const t = [], r = n("{", "}", e);
    if (!r) return e.split(",");
    const { pre: s, body: o, post: i } = r, a = s.split(",");
    a[a.length - 1] += "{" + o + "}";
    const c = I(i);
    return i.length && (a[a.length - 1] += c.shift(), a.push.apply(a, c)), t.push.apply(t, a), t;
}
function C(e, t = {}) {
    if (!e) return [];
    const { max: r = A, maxLength: n = S } = t;
    return "{}" === e.slice(0, 2) && (e = "\\{\\}" + e.slice(2)), J(function(e) {
        return e.replace(g, i).replace(y, a).replace(w, c).replace(v, l).replace(_, u);
    }(e), r, n, !0).map(E);
}
function k(e) {
    return "{" + e + "}";
}
function x(e) {
    return /^-?0\d/.test(e);
}
function T(e, t) {
    return e <= t;
}
function R(e, t) {
    return e >= t;
}
function B(e, t, r, n, s, o) {
    const i = [];
    let a = 0;
    for(let c = 0; c < e.length; c++)for(let l = 0; l < r.length; l++){
        if (i.length >= n) return i;
        const u = e[c] + t + r[l];
        if (!o || u) {
            if (a + u.length > s) return i;
            i.push(u), a += u.length;
        }
    }
    return i;
}
function P(e, t, r, n) {
    const s = e.split(/\.\./), o = [];
    if (void 0 === s[0] || void 0 === s[1]) return o;
    const i = b(s[0]), a = b(s[1]), c = Math.max(s[0].length, s[1].length);
    let l = 3 === s.length && void 0 !== s[2] ? Math.max(Math.abs(b(s[2])), 1) : 1, u = T;
    a < i && (l *= -1, u = R);
    const d = s.some(x);
    let p = 0;
    for(let e = i; u(e, a) && o.length < r; e += l){
        let r;
        if (t) r = String.fromCharCode(e), "\\" === r && (r = "");
        else if (r = String(e), d) {
            const t = c - r.length;
            if (t > 0) {
                const n = new Array(t + 1).join("0");
                r = e < 0 ? "-" + n + r.slice(1) : n + r;
            }
        }
        if (p + r.length > n) break;
        o.push(r), p += r.length;
    }
    return o;
}
function J(e, t, r, s) {
    let o = [
        ""
    ], i = !1, a = !0;
    for(;;){
        const l = n("{", "}", e);
        if (!l) return B(o, e, [
            ""
        ], t, r, i);
        const u = l.pre;
        if (/\$$/.test(u)) {
            if (o = B(o, u + "{" + l.body + "}", [
                ""
            ], t, r, i && !l.post.length), a = !1, !l.post.length) break;
            e = l.post;
            continue;
        }
        const d = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(l.body), p = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(l.body), m = d || p, h = l.body.indexOf(",") >= 0;
        if (!m && !h) {
            if (l.post.match(/,(?!,).*\}/)) {
                e = l.pre + "{" + l.body + c + l.post, s = !0;
                continue;
            }
            return B(o, u + "{" + l.body + "}" + l.post, [
                ""
            ], t, r, i);
        }
        let f;
        if (a && (i = s && !m, a = !1), m) f = P(l.body, p, t, r);
        else {
            let n = I(l.body);
            if (1 === n.length && void 0 !== n[0] && (n = J(n[0], t, r, !1).map(k), 1 === n.length)) {
                if (o = B(o, u + n[0], [
                    ""
                ], t, r, i && !l.post.length), !l.post.length) break;
                e = l.post;
                continue;
            }
            let s = i && !l.post.length && !u;
            for(let e = 0; s && e < o.length; e++)o[e] && (s = !1);
            f = [];
            let a = 0;
            e: for(let e = 0; e < n.length; e++){
                const o = J(n[e], t, r, !1);
                for(let e = 0; e < o.length; e++){
                    const n = o[e];
                    if (!s || n) {
                        if (f.length >= t || a + n.length > r) break e;
                        f.push(n), a += n.length;
                    }
                }
            }
        }
        if (o = B(o, u, f, t, r, i && !l.post.length), !l.post.length) break;
        e = l.post;
    }
    return o;
}
const M = (e)=>{
    if ("string" != typeof e) throw new TypeError("invalid pattern");
    if (e.length > 65536) throw new TypeError("pattern is too long");
}, q = {
    "[:alnum:]": [
        "\\p{L}\\p{Nl}\\p{Nd}",
        !0
    ],
    "[:alpha:]": [
        "\\p{L}\\p{Nl}",
        !0
    ],
    "[:ascii:]": [
        "\\x00-\\x7f",
        !1
    ],
    "[:blank:]": [
        "\\p{Zs}\\t",
        !0
    ],
    "[:cntrl:]": [
        "\\p{Cc}",
        !0
    ],
    "[:digit:]": [
        "\\p{Nd}",
        !0
    ],
    "[:graph:]": [
        "\\p{Z}\\p{C}",
        !0,
        !0
    ],
    "[:lower:]": [
        "\\p{Ll}",
        !0
    ],
    "[:print:]": [
        "\\p{C}",
        !0
    ],
    "[:punct:]": [
        "\\p{P}",
        !0
    ],
    "[:space:]": [
        "\\p{Z}\\t\\r\\n\\v\\f",
        !0
    ],
    "[:upper:]": [
        "\\p{Lu}",
        !0
    ],
    "[:word:]": [
        "\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",
        !0
    ],
    "[:xdigit:]": [
        "A-Fa-f0-9",
        !1
    ]
}, D = (e)=>e.replace(/[[\]\\-]/g, "\\$&"), O = (e)=>e.join(""), N = (e, t)=>{
    const r = t;
    if ("[" !== e.charAt(r)) throw new Error("not in a brace expression");
    const n = [], s = [];
    let o = r + 1, i = !1, a = !1, c = !1, l = !1, u = r, d = "";
    e: for(; o < e.length;){
        const t = e.charAt(o);
        if ("!" !== t && "^" !== t || o !== r + 1) {
            if ("]" === t && i && !c) {
                u = o + 1;
                break;
            }
            if (i = !0, "\\" !== t || c) {
                if ("[" === t && !c) {
                    for (const [t, [i, c, l]] of Object.entries(q))if (e.startsWith(t, o)) {
                        if (d) return [
                            "$.",
                            !1,
                            e.length - r,
                            !0
                        ];
                        o += t.length, l ? s.push(i) : n.push(i), a = a || c;
                        continue e;
                    }
                }
                c = !1, d ? (t > d ? n.push(D(d) + "-" + D(t)) : t === d && n.push(D(t)), d = "", o++) : e.startsWith("-]", o + 1) ? (n.push(D(t + "-")), o += 2) : e.startsWith("-", o + 1) ? (d = t, o += 2) : (n.push(D(t)), o++);
            } else c = !0, o++;
        } else l = !0, o++;
    }
    if (u < o) return [
        "",
        !1,
        0,
        !1
    ];
    if (!n.length && !s.length) return [
        "$.",
        !1,
        e.length - r,
        !0
    ];
    if (0 === s.length && 1 === n.length && /^\\?.$/.test(n[0]) && !l) {
        const e = 2 === n[0].length ? n[0].slice(-1) : n[0];
        return [
            (p = e, p.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
            !1,
            u - r,
            !1
        ];
    }
    var p;
    const m = "[" + (l ? "^" : "") + O(n) + "]", h = "[" + (l ? "" : "^") + O(s) + "]";
    return [
        n.length && s.length ? "(" + m + "|" + h + ")" : n.length ? m : h,
        a,
        u - r,
        !0
    ];
}, F = (e, { windowsPathsNoEscape: t = !1, magicalBraces: r = !0 } = {})=>r ? t ? e.replace(/\[([^/\\])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : t ? e.replace(/\[([^/\\{}])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
var U;
const L = new Set([
    "!",
    "?",
    "+",
    "*",
    "@"
]), $ = (e)=>L.has(e), Q = (e)=>$(e.type), j = new Map([
    [
        "!",
        [
            "@"
        ]
    ],
    [
        "?",
        [
            "?",
            "@"
        ]
    ],
    [
        "@",
        [
            "@"
        ]
    ],
    [
        "*",
        [
            "*",
            "+",
            "?",
            "@"
        ]
    ],
    [
        "+",
        [
            "+",
            "@"
        ]
    ]
]), G = new Map([
    [
        "!",
        [
            "?"
        ]
    ],
    [
        "@",
        [
            "?"
        ]
    ],
    [
        "+",
        [
            "?",
            "*"
        ]
    ]
]), H = new Map([
    [
        "!",
        [
            "?",
            "@"
        ]
    ],
    [
        "?",
        [
            "?",
            "@"
        ]
    ],
    [
        "@",
        [
            "?",
            "@"
        ]
    ],
    [
        "*",
        [
            "*",
            "+",
            "?",
            "@"
        ]
    ],
    [
        "+",
        [
            "+",
            "@",
            "?",
            "*"
        ]
    ]
]), z = new Map([
    [
        "!",
        new Map([
            [
                "!",
                "@"
            ]
        ])
    ],
    [
        "?",
        new Map([
            [
                "*",
                "*"
            ],
            [
                "+",
                "*"
            ]
        ])
    ],
    [
        "@",
        new Map([
            [
                "!",
                "!"
            ],
            [
                "?",
                "?"
            ],
            [
                "@",
                "@"
            ],
            [
                "*",
                "*"
            ],
            [
                "+",
                "+"
            ]
        ])
    ],
    [
        "+",
        new Map([
            [
                "?",
                "*"
            ],
            [
                "*",
                "*"
            ]
        ])
    ]
]), W = "(?!\\.)", V = new Set([
    "[",
    "."
]), K = new Set([
    "..",
    "."
]), Y = new Set("().*{}+?[]^$\\!"), Z = (e)=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), X = "[^/]", ee = X + "*?", te = X + "+?";
let re = 0;
class ne {
    type;
    #g;
    #y;
    #w = !1;
    #v = [];
    #_;
    #A;
    #S;
    #b = !1;
    #E;
    #I;
    #C = !1;
    id = ++re;
    get depth() {
        return (this.#_?.depth ?? -1) + 1;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return {
            "@@type": "AST",
            id: this.id,
            type: this.type,
            root: this.#g.id,
            parent: this.#_?.id,
            depth: this.depth,
            partsLength: this.#v.length,
            parts: this.#v
        };
    }
    constructor(e, t, r = {}){
        this.type = e, e && (this.#y = !0), this.#_ = t, this.#g = this.#_ ? this.#_.#g : this, this.#E = this.#g === this ? r : this.#g.#E, this.#S = this.#g === this ? [] : this.#g.#S, "!" !== e || this.#g.#b || this.#S.push(this), this.#A = this.#_ ? this.#_.#v.length : 0;
    }
    get hasMagic() {
        if (void 0 !== this.#y) return this.#y;
        for (const e of this.#v)if ("string" != typeof e && (e.type || e.hasMagic)) return this.#y = !0;
        return this.#y;
    }
    toString() {
        return void 0 !== this.#I ? this.#I : this.type ? this.#I = this.type + "(" + this.#v.map((e)=>String(e)).join("|") + ")" : this.#I = this.#v.map((e)=>String(e)).join("");
    }
    #k() {
        if (this !== this.#g) throw new Error("should only call on root");
        if (this.#b) return this;
        let e;
        for(this.toString(), this.#b = !0; e = this.#S.pop();){
            if ("!" !== e.type) continue;
            let t = e, r = t.#_;
            for(; r;){
                for(let n = t.#A + 1; !r.type && n < r.#v.length; n++)for (const t of e.#v){
                    if ("string" == typeof t) throw new Error("string part in extglob AST??");
                    t.copyIn(r.#v[n]);
                }
                t = r, r = t.#_;
            }
        }
        return this;
    }
    push(...e) {
        for (const t of e)if ("" !== t) {
            if ("string" != typeof t && !(t instanceof U && t.#_ === this)) throw new Error("invalid part: " + t);
            this.#v.push(t);
        }
    }
    toJSON() {
        const e = null === this.type ? this.#v.slice().map((e)=>"string" == typeof e ? e : e.toJSON()) : [
            this.type,
            ...this.#v.map((e)=>e.toJSON())
        ];
        return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === this.#g || this.#g.#b && "!" === this.#_?.type) && e.push({}), e;
    }
    isStart() {
        if (this.#g === this) return !0;
        if (!this.#_?.isStart()) return !1;
        if (0 === this.#A) return !0;
        const e = this.#_;
        for(let t = 0; t < this.#A; t++){
            const r = e.#v[t];
            if (!(r instanceof U && "!" === r.type)) return !1;
        }
        return !0;
    }
    isEnd() {
        if (this.#g === this) return !0;
        if ("!" === this.#_?.type) return !0;
        if (!this.#_?.isEnd()) return !1;
        if (!this.type) return this.#_?.isEnd();
        const e = this.#_ ? this.#_.#v.length : 0;
        return this.#A === e - 1;
    }
    copyIn(e) {
        "string" == typeof e ? this.push(e) : this.push(e.clone(this));
    }
    clone(e) {
        const t = new U(this.type, e);
        for (const e of this.#v)t.copyIn(e);
        return t;
    }
    static #x(e, t, r, n, s) {
        const o = n.maxExtglobRecursion ?? 2;
        let i = !1, a = !1, c = -1, l = !1;
        if (null === t.type) {
            let u = r, d = "";
            for(; u < e.length;){
                const r = e.charAt(u++);
                if (i || "\\" === r) {
                    i = !i, d += r;
                    continue;
                }
                if (a) {
                    u === c + 1 ? "^" !== r && "!" !== r || (l = !0) : "]" !== r || u === c + 2 && l || (a = !1), d += r;
                    continue;
                }
                if ("[" === r) {
                    a = !0, c = u, l = !1, d += r;
                    continue;
                }
                if (!n.noext && $(r) && "(" === e.charAt(u) && s <= o) {
                    t.push(d), d = "";
                    const o = new U(r, t);
                    u = U.#x(e, o, u, n, s + 1), t.push(o);
                    continue;
                }
                d += r;
            }
            return t.push(d), u;
        }
        let u = r + 1, d = new U(null, t);
        const p = [];
        let m = "";
        for(; u < e.length;){
            const r = e.charAt(u++);
            if (i || "\\" === r) {
                i = !i, m += r;
                continue;
            }
            if (a) {
                u === c + 1 ? "^" !== r && "!" !== r || (l = !0) : "]" !== r || u === c + 2 && l || (a = !1), m += r;
                continue;
            }
            if ("[" === r) {
                a = !0, c = u, l = !1, m += r;
                continue;
            }
            if (!n.noext && $(r) && "(" === e.charAt(u) && (s <= o || t && t.#T(r))) {
                const o = t && t.#T(r) ? 0 : 1;
                d.push(m), m = "";
                const i = new U(r, d);
                d.push(i), u = U.#x(e, i, u, n, s + o);
                continue;
            }
            if ("|" !== r) {
                if (")" === r) return "" === m && 0 === t.#v.length && (t.#C = !0), d.push(m), m = "", t.push(...p, d), u;
                m += r;
            } else d.push(m), m = "", p.push(d), d = new U(null, t);
        }
        return t.type = null, t.#y = void 0, t.#v = [
            e.substring(r - 1)
        ], u;
    }
    #R(e) {
        return this.#B(e, G);
    }
    #B(e, t = j) {
        if (!e || "object" != typeof e || null !== e.type || 1 !== e.#v.length || null === this.type) return !1;
        const r = e.#v[0];
        return !(!r || "object" != typeof r || null === r.type) && this.#T(r.type, t);
    }
    #T(e, t = H) {
        return !!t.get(this.type)?.includes(e);
    }
    #P(e, t) {
        const r = e.#v[0], n = new U(null, r, this.options);
        n.#v.push(""), r.push(n), this.#J(e, t);
    }
    #J(e, t) {
        const r = e.#v[0];
        this.#v.splice(t, 1, ...r.#v);
        for (const e of r.#v)"object" == typeof e && (e.#_ = this);
        this.#I = void 0;
    }
    #M(e) {
        const t = z.get(this.type);
        return !!t?.has(e);
    }
    #q(e) {
        if (!e || "object" != typeof e || null !== e.type || 1 !== e.#v.length || null === this.type || 1 !== this.#v.length) return !1;
        const t = e.#v[0];
        return !(!t || "object" != typeof t || null === t.type) && this.#M(t.type);
    }
    #D(e) {
        const t = z.get(this.type), r = e.#v[0], n = t?.get(r.type);
        if (!n) return !1;
        this.#v = r.#v;
        for (const e of this.#v)"object" == typeof e && (e.#_ = this);
        this.type = n, this.#I = void 0, this.#C = !1;
    }
    static fromGlob(e, t = {}) {
        const r = new U(null, void 0, t);
        return U.#x(e, r, 0, t, 0), r;
    }
    toMMPattern() {
        if (this !== this.#g) return this.#g.toMMPattern();
        const e = this.toString(), [t, r, n, s] = this.toRegExpSource();
        if (!(n || this.#y || this.#E.nocase && !this.#E.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return r;
        const o = (this.#E.nocase ? "i" : "") + (s ? "u" : "");
        return Object.assign(new RegExp(`^${t}$`, o), {
            _src: t,
            _glob: e
        });
    }
    get options() {
        return this.#E;
    }
    toRegExpSource(e) {
        const t = e ?? !!this.#E.dot;
        if (this.#g === this && (this.#O(), this.#k()), !Q(this)) {
            const r = this.isStart() && this.isEnd() && !this.#v.some((e)=>"string" != typeof e), n = this.#v.map((t)=>{
                const [n, s, o, i] = "string" == typeof t ? U.#N(t, this.#y, r) : t.toRegExpSource(e);
                return this.#y = this.#y || o, this.#w = this.#w || i, n;
            }).join("");
            let s = "";
            if (this.isStart() && "string" == typeof this.#v[0]) {
                if (!(1 === this.#v.length && K.has(this.#v[0]))) {
                    const r = V, o = t && r.has(n.charAt(0)) || n.startsWith("\\.") && r.has(n.charAt(2)) || n.startsWith("\\.\\.") && r.has(n.charAt(4)), i = !t && !e && r.has(n.charAt(0));
                    s = o ? "(?!(?:^|/)\\.\\.?(?:$|/))" : i ? W : "";
                }
            }
            let o = "";
            this.isEnd() && this.#g.#b && "!" === this.#_?.type && (o = "(?:$|\\/)");
            return [
                s + n + o,
                F(n),
                this.#y = !!this.#y,
                this.#w
            ];
        }
        const r = "*" === this.type || "+" === this.type, n = "!" === this.type ? "(?:(?!(?:" : "(?:";
        let s = this.#F(t);
        if (this.isStart() && this.isEnd() && !s && "!" !== this.type) {
            const e = this.toString(), t = this;
            return t.#v = [
                e
            ], t.type = null, t.#y = void 0, [
                e,
                F(this.toString()),
                !1,
                !1
            ];
        }
        let o = !r || e || t ? "" : this.#F(!0);
        o === s && (o = ""), o && (s = `(?:${s})(?:${o})*?`);
        let i = "";
        if ("!" === this.type && this.#C) i = (this.isStart() && !t ? W : "") + te;
        else {
            i = n + s + ("!" === this.type ? "))" + (!this.isStart() || t || e ? "" : W) + ee + ")" : "@" === this.type ? ")" : "?" === this.type ? ")?" : "+" === this.type && o ? ")" : "*" === this.type && o ? ")?" : `)${this.type}`);
        }
        return [
            i,
            F(s),
            this.#y = !!this.#y,
            this.#w
        ];
    }
    #O() {
        if (Q(this)) {
            let e = 0, t = !1;
            do {
                t = !0;
                for(let e = 0; e < this.#v.length; e++){
                    const r = this.#v[e];
                    "object" == typeof r && (r.#O(), this.#B(r) ? (t = !1, this.#J(r, e)) : this.#R(r) ? (t = !1, this.#P(r, e)) : this.#q(r) && (t = !1, this.#D(r)));
                }
            }while (!t && ++e < 10)
        } else for (const e of this.#v)"object" == typeof e && e.#O();
        this.#I = void 0;
    }
    #F(e) {
        return this.#v.map((t)=>{
            if ("string" == typeof t) throw new Error("string type in extglob ast??");
            const [r, n, s, o] = t.toRegExpSource(e);
            return this.#w = this.#w || o, r;
        }).filter((e)=>!(this.isStart() && this.isEnd() && !e)).join("|");
    }
    static #N(e, t, r = !1) {
        let n = !1, s = "", o = !1, i = !1;
        for(let a = 0; a < e.length; a++){
            const c = e.charAt(a);
            if (n) n = !1, s += (Y.has(c) ? "\\" : "") + c;
            else if ("*" !== c) if (i = !1, "\\" !== c) {
                if ("[" === c) {
                    const [r, n, i, c] = N(e, a);
                    if (i) {
                        s += r, o = o || n, a += i - 1, t = t || c;
                        continue;
                    }
                }
                "?" !== c ? s += Z(c) : (s += X, t = !0);
            } else a === e.length - 1 ? s += "\\\\" : n = !0;
            else {
                if (i) continue;
                i = !0, s += r && /^[*]+$/.test(e) ? te : ee, t = !0;
            }
        }
        return [
            s,
            F(e),
            !!t,
            o
        ];
    }
}
U = ne;
const se = (e, t, r = {})=>(M(t), !(!r.nocomment && "#" === t.charAt(0)) && new Be(t, r).match(e)), oe = /^\*+([^+@!?*[(]*)$/, ie = (e)=>(t)=>!t.startsWith(".") && t.endsWith(e), ae = (e)=>(t)=>t.endsWith(e), ce = (e)=>(e = e.toLowerCase(), (t)=>!t.startsWith(".") && t.toLowerCase().endsWith(e)), le = (e)=>(e = e.toLowerCase(), (t)=>t.toLowerCase().endsWith(e)), ue = /^\*+\.\*+$/, de = (e)=>!e.startsWith(".") && e.includes("."), pe = (e)=>"." !== e && ".." !== e && e.includes("."), me = /^\.\*+$/, he = (e)=>"." !== e && ".." !== e && e.startsWith("."), fe = /^\*+$/, ge = (e)=>0 !== e.length && !e.startsWith("."), ye = (e)=>0 !== e.length && "." !== e && ".." !== e, we = /^\?+([^+@!?*[(]*)?$/, ve = ([e, t = ""])=>{
    const r = be([
        e
    ]);
    return t ? (t = t.toLowerCase(), (e)=>r(e) && e.toLowerCase().endsWith(t)) : r;
}, _e = ([e, t = ""])=>{
    const r = Ee([
        e
    ]);
    return t ? (t = t.toLowerCase(), (e)=>r(e) && e.toLowerCase().endsWith(t)) : r;
}, Ae = ([e, t = ""])=>{
    const r = Ee([
        e
    ]);
    return t ? (e)=>r(e) && e.endsWith(t) : r;
}, Se = ([e, t = ""])=>{
    const r = be([
        e
    ]);
    return t ? (e)=>r(e) && e.endsWith(t) : r;
}, be = ([e])=>{
    const t = e.length;
    return (e)=>e.length === t && !e.startsWith(".");
}, Ee = ([e])=>{
    const t = e.length;
    return (e)=>e.length === t && "." !== e && ".." !== e;
}, Ie = "object" == typeof process && process ? "object" == typeof process.env && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Ce = "win32" === Ie ? ({
    sep: "\\"
}).sep : ({
    sep: "/"
}).sep;
se.sep = Ce;
const ke = Symbol("globstar **");
se.GLOBSTAR = ke;
se.filter = (e, t = {})=>(r)=>se(r, e, t);
const xe = (e, t = {})=>Object.assign({}, e, t);
se.defaults = (e)=>{
    if (!e || "object" != typeof e || !Object.keys(e).length) return se;
    const t = se;
    return Object.assign((r, n, s = {})=>t(r, n, xe(e, s)), {
        Minimatch: class extends t.Minimatch {
            constructor(t, r = {}){
                super(t, xe(e, r));
            }
            static defaults(r) {
                return t.defaults(xe(e, r)).Minimatch;
            }
        },
        AST: class extends t.AST {
            constructor(t, r, n = {}){
                super(t, r, xe(e, n));
            }
            static fromGlob(r, n = {}) {
                return t.AST.fromGlob(r, xe(e, n));
            }
        },
        unescape: (r, n = {})=>t.unescape(r, xe(e, n)),
        escape: (r, n = {})=>t.escape(r, xe(e, n)),
        filter: (r, n = {})=>t.filter(r, xe(e, n)),
        defaults: (r)=>t.defaults(xe(e, r)),
        makeRe: (r, n = {})=>t.makeRe(r, xe(e, n)),
        braceExpand: (r, n = {})=>t.braceExpand(r, xe(e, n)),
        match: (r, n, s = {})=>t.match(r, n, xe(e, s)),
        sep: t.sep,
        GLOBSTAR: ke
    });
};
const Te = (e, t = {})=>(M(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [
        e
    ] : C(e, {
        max: t.braceExpandMax
    }));
se.braceExpand = Te;
se.makeRe = (e, t = {})=>new Be(e, t).makeRe();
se.match = (e, t, r = {})=>{
    const n = new Be(t, r);
    return e = e.filter((e)=>n.match(e)), n.options.nonull && !e.length && e.push(t), e;
};
const Re = /[?*]|[+@!]\(.*?\)|\[|\]/;
class Be {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    maxGlobstarRecursion;
    regexp;
    constructor(e, t = {}){
        M(e), t = t || {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || Ie, this.isWindows = "win32" === this.platform;
        this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!t.nonegate, this.comment = !1, this.empty = !1, this.partial = !!t.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = void 0 !== t.windowsNoMagicRoot ? t.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) return !0;
        for (const e of this.set)for (const t of e)if ("string" != typeof t) return !0;
        return !1;
    }
    debug(...e) {}
    make() {
        const e = this.pattern, t = this.options;
        if (!t.nocomment && "#" === e.charAt(0)) return void (this.comment = !0);
        if (!e) return void (this.empty = !0);
        this.parseNegate(), this.globSet = [
            ...new Set(this.braceExpand())
        ], t.debug && (this.debug = (...e)=>console.error(...e)), this.debug(this.pattern, this.globSet);
        const r = this.globSet.map((e)=>this.slashSplit(e));
        this.globParts = this.preprocess(r), this.debug(this.pattern, this.globParts);
        let n = this.globParts.map((e, t, r)=>{
            if (this.isWindows && this.windowsNoMagicRoot) {
                const t = !("" !== e[0] || "" !== e[1] || "?" !== e[2] && Re.test(e[2]) || Re.test(e[3])), r = /^[a-z]:/i.test(e[0]);
                if (t) return [
                    ...e.slice(0, 4),
                    ...e.slice(4).map((e)=>this.parse(e))
                ];
                if (r) return [
                    e[0],
                    ...e.slice(1).map((e)=>this.parse(e))
                ];
            }
            return e.map((e)=>this.parse(e));
        });
        if (this.debug(this.pattern, n), this.set = n.filter((e)=>-1 === e.indexOf(!1)), this.isWindows) for(let e = 0; e < this.set.length; e++){
            const t = this.set[e];
            "" === t[0] && "" === t[1] && "?" === this.globParts[e][2] && "string" == typeof t[3] && /^[a-z]:$/i.test(t[3]) && (t[2] = "?");
        }
        this.debug(this.pattern, this.set);
    }
    preprocess(e) {
        if (this.options.noglobstar) for (const t of e)for(let e = 0; e < t.length; e++)"**" === t[e] && (t[e] = "*");
        const { optimizationLevel: t = 1 } = this.options;
        return t >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = t >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
    }
    adjascentGlobstarOptimize(e) {
        return e.map((e)=>{
            let t = -1;
            for(; -1 !== (t = e.indexOf("**", t + 1));){
                let r = t;
                for(; "**" === e[r + 1];)r++;
                r !== t && e.splice(t, r - t);
            }
            return e;
        });
    }
    levelOneOptimize(e) {
        return e.map((e)=>0 === (e = e.reduce((e, t)=>{
                const r = e[e.length - 1];
                return "**" === t && "**" === r ? e : ".." === t && r && ".." !== r && "." !== r && "**" !== r ? (e.pop(), e) : (e.push(t), e);
            }, [])).length ? [
                ""
            ] : e);
    }
    levelTwoFileOptimize(e) {
        Array.isArray(e) || (e = this.slashSplit(e));
        let t = !1;
        do {
            if (t = !1, !this.preserveMultipleSlashes) {
                for(let r = 1; r < e.length - 1; r++){
                    const n = e[r];
                    1 === r && "" === n && "" === e[0] || "." !== n && "" !== n || (t = !0, e.splice(r, 1), r--);
                }
                "." !== e[0] || 2 !== e.length || "." !== e[1] && "" !== e[1] || (t = !0, e.pop());
            }
            let r = 0;
            for(; -1 !== (r = e.indexOf("..", r + 1));){
                const n = e[r - 1];
                !n || "." === n || ".." === n || "**" === n || this.isWindows && /^[a-z]:$/i.test(n) || (t = !0, e.splice(r - 1, 2), r -= 2);
            }
        }while (t)
        return 0 === e.length ? [
            ""
        ] : e;
    }
    firstPhasePreProcess(e) {
        let t = !1;
        do {
            t = !1;
            for (let r of e){
                let n = -1;
                for(; -1 !== (n = r.indexOf("**", n + 1));){
                    let s = n;
                    for(; "**" === r[s + 1];)s++;
                    s > n && r.splice(n + 1, s - n);
                    let o = r[n + 1];
                    const i = r[n + 2], a = r[n + 3];
                    if (".." !== o) continue;
                    if (!i || "." === i || ".." === i || !a || "." === a || ".." === a) continue;
                    t = !0, r.splice(n, 1);
                    const c = r.slice(0);
                    c[n] = "**", e.push(c), n--;
                }
                if (!this.preserveMultipleSlashes) {
                    for(let e = 1; e < r.length - 1; e++){
                        const n = r[e];
                        1 === e && "" === n && "" === r[0] || "." !== n && "" !== n || (t = !0, r.splice(e, 1), e--);
                    }
                    "." !== r[0] || 2 !== r.length || "." !== r[1] && "" !== r[1] || (t = !0, r.pop());
                }
                let s = 0;
                for(; -1 !== (s = r.indexOf("..", s + 1));){
                    const e = r[s - 1];
                    if (e && "." !== e && ".." !== e && "**" !== e) {
                        t = !0;
                        const e = 1 === s && "**" === r[s + 1] ? [
                            "."
                        ] : [];
                        r.splice(s - 1, 2, ...e), 0 === r.length && r.push(""), s -= 2;
                    }
                }
            }
        }while (t)
        return e;
    }
    secondPhasePreProcess(e) {
        for(let t = 0; t < e.length - 1; t++)for(let r = t + 1; r < e.length; r++){
            const n = this.partsMatch(e[t], e[r], !this.preserveMultipleSlashes);
            if (n) {
                e[t] = [], e[r] = n;
                break;
            }
        }
        return e.filter((e)=>e.length);
    }
    partsMatch(e, t, r = !1) {
        let n = 0, s = 0, o = [], i = "";
        for(; n < e.length && s < t.length;)if (e[n] === t[s]) o.push("b" === i ? t[s] : e[n]), n++, s++;
        else if (r && "**" === e[n] && t[s] === e[n + 1]) o.push(e[n]), n++;
        else if (r && "**" === t[s] && e[n] === t[s + 1]) o.push(t[s]), s++;
        else if ("*" !== e[n] || !t[s] || !this.options.dot && t[s].startsWith(".") || "**" === t[s]) {
            if ("*" !== t[s] || !e[n] || !this.options.dot && e[n].startsWith(".") || "**" === e[n]) return !1;
            if ("a" === i) return !1;
            i = "b", o.push(t[s]), n++, s++;
        } else {
            if ("b" === i) return !1;
            i = "a", o.push(e[n]), n++, s++;
        }
        return e.length === t.length && o;
    }
    parseNegate() {
        if (this.nonegate) return;
        const e = this.pattern;
        let t = !1, r = 0;
        for(let n = 0; n < e.length && "!" === e.charAt(n); n++)t = !t, r++;
        r && (this.pattern = e.slice(r)), this.negate = t;
    }
    matchOne(e, t, r = !1) {
        let n = 0, s = 0;
        if (this.isWindows) {
            const r = "string" == typeof e[0] && /^[a-z]:$/i.test(e[0]), o = !r && "" === e[0] && "" === e[1] && "?" === e[2] && /^[a-z]:$/i.test(e[3]), i = "string" == typeof t[0] && /^[a-z]:$/i.test(t[0]), a = o ? 3 : r ? 0 : void 0, c = !i && "" === t[0] && "" === t[1] && "?" === t[2] && "string" == typeof t[3] && /^[a-z]:$/i.test(t[3]) ? 3 : i ? 0 : void 0;
            if ("number" == typeof a && "number" == typeof c) {
                const [r, o] = [
                    e[a],
                    t[c]
                ];
                r.toLowerCase() === o.toLowerCase() && (t[c] = r, s = c, n = a);
            }
        }
        const { optimizationLevel: o = 1 } = this.options;
        return o >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(ke) ? this.#U(e, t, r, n, s) : this.#L(e, t, r, n, s);
    }
    #U(e, t, r, n, s) {
        const o = t.indexOf(ke, s), i = t.lastIndexOf(ke), [a, c, l] = r ? [
            t.slice(s, o),
            t.slice(o + 1),
            []
        ] : [
            t.slice(s, o),
            t.slice(o + 1, i),
            t.slice(i + 1)
        ];
        if (a.length) {
            const t = e.slice(n, n + a.length);
            if (!this.#L(t, a, r, 0, 0)) return !1;
            n += a.length, s += a.length;
        }
        let u = 0;
        if (l.length) {
            if (l.length + n > e.length) return !1;
            let t = e.length - l.length;
            if (this.#L(e, l, r, t, 0)) u = l.length;
            else {
                if ("" !== e[e.length - 1] || n + l.length === e.length) return !1;
                if (t--, !this.#L(e, l, r, t, 0)) return !1;
                u = l.length + 1;
            }
        }
        if (!c.length) {
            let t = !!u;
            for(let r = n; r < e.length - u; r++){
                const n = String(e[r]);
                if (t = !0, "." === n || ".." === n || !this.options.dot && n.startsWith(".")) return !1;
            }
            return r || t;
        }
        const d = [
            [
                [],
                0
            ]
        ];
        let p = d[0], m = 0;
        const h = [
            0
        ];
        for (const e of c)e === ke ? (h.push(m), p = [
            [],
            0
        ], d.push(p)) : (p[0].push(e), m++);
        let f = d.length - 1;
        const g = e.length - u;
        for (const e of d)e[1] = g - (h[f--] + e[0].length);
        return !!this.#$(e, d, n, 0, r, 0, !!u);
    }
    #$(e, t, r, n, s, o, i) {
        const a = t[n];
        if (!a) {
            for(let t = r; t < e.length; t++){
                i = !0;
                const r = e[t];
                if ("." === r || ".." === r || !this.options.dot && r.startsWith(".")) return !1;
            }
            return i;
        }
        const [c, l] = a;
        for(; r <= l;){
            if (this.#L(e.slice(0, r + c.length), c, s, r, 0) && o < this.maxGlobstarRecursion) {
                const a = this.#$(e, t, r + c.length, n + 1, s, o + 1, i);
                if (!1 !== a) return a;
            }
            const a = e[r];
            if ("." === a || ".." === a || !this.options.dot && a.startsWith(".")) return !1;
            r++;
        }
        return s || null;
    }
    #L(e, t, r, n, s) {
        let o, i, a, c;
        for(o = n, i = s, c = e.length, a = t.length; o < c && i < a; o++, i++){
            this.debug("matchOne loop");
            let r, n = t[i], s = e[o];
            if (this.debug(t, n, s), !1 === n || n === ke) return !1;
            if ("string" == typeof n ? (r = s === n, this.debug("string match", n, s, r)) : (r = n.test(s), this.debug("pattern match", n, s, r)), !r) return !1;
        }
        if (o === c && i === a) return !0;
        if (o === c) return r;
        if (i === a) return o === c - 1 && "" === e[o];
        throw new Error("wtf?");
    }
    braceExpand() {
        return Te(this.pattern, this.options);
    }
    parse(e) {
        M(e);
        const t = this.options;
        if ("**" === e) return ke;
        if ("" === e) return "";
        let r, n = null;
        (r = e.match(fe)) ? n = t.dot ? ye : ge : (r = e.match(oe)) ? n = (t.nocase ? t.dot ? le : ce : t.dot ? ae : ie)(r[1]) : (r = e.match(we)) ? n = (t.nocase ? t.dot ? _e : ve : t.dot ? Ae : Se)(r) : (r = e.match(ue)) ? n = t.dot ? pe : de : (r = e.match(me)) && (n = he);
        const s = ne.fromGlob(e, this.options).toMMPattern();
        return n && "object" == typeof s && Reflect.defineProperty(s, "test", {
            value: n
        }), s;
    }
    makeRe() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        const e = this.set;
        if (!e.length) return this.regexp = !1, this.regexp;
        const t = this.options, r = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", n = new Set(t.nocase ? [
            "i"
        ] : []);
        let s = e.map((e)=>{
            const t = e.map((e)=>{
                if (e instanceof RegExp) for (const t of e.flags.split(""))n.add(t);
                return "string" == typeof e ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === ke ? ke : e._src;
            });
            t.forEach((e, n)=>{
                const s = t[n + 1], o = t[n - 1];
                e === ke && o !== ke && (void 0 === o ? void 0 !== s && s !== ke ? t[n + 1] = "(?:\\/|" + r + "\\/)?" + s : t[n] = r : void 0 === s ? t[n - 1] = o + "(?:\\/|\\/" + r + ")?" : s !== ke && (t[n - 1] = o + "(?:\\/|\\/" + r + "\\/)" + s, t[n + 1] = ke));
            });
            const s = t.filter((e)=>e !== ke);
            if (this.partial && s.length >= 1) {
                const e = [];
                for(let t = 1; t <= s.length; t++)e.push(s.slice(0, t).join("/"));
                return "(?:" + e.join("|") + ")";
            }
            return s.join("/");
        }).join("|");
        const [o, i] = e.length > 1 ? [
            "(?:",
            ")"
        ] : [
            "",
            ""
        ];
        s = "^" + o + s + i + "$", this.partial && (s = "^(?:\\/|" + o + s.slice(1, -1) + i + ")$"), this.negate && (s = "^(?!" + s + ").+$");
        try {
            this.regexp = new RegExp(s, [
                ...n
            ].join(""));
        } catch  {
            this.regexp = !1;
        }
        return this.regexp;
    }
    slashSplit(e) {
        return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^/]+/.test(e) ? [
            "",
            ...e.split(/\/+/)
        ] : e.split(/\/+/);
    }
    match(e, t = this.partial) {
        if (this.debug("match", e, this.pattern), this.comment) return !1;
        if (this.empty) return "" === e;
        if ("/" === e && t) return !0;
        const r = this.options;
        this.isWindows && (e = e.split("\\").join("/"));
        const n = this.slashSplit(e);
        this.debug(this.pattern, "split", n);
        const s = this.set;
        this.debug(this.pattern, "set", s);
        let o = n[n.length - 1];
        if (!o) for(let e = n.length - 2; !o && e >= 0; e--)o = n[e];
        for (const e of s){
            let s = n;
            r.matchBase && 1 === e.length && (s = [
                o
            ]);
            if (this.matchOne(s, e, t)) return !!r.flipNegate || !this.negate;
        }
        return !r.flipNegate && this.negate;
    }
    static defaults(e) {
        return se.defaults(e).Minimatch;
    }
}
se.AST = ne, se.Minimatch = Be, se.escape = (e, { windowsPathsNoEscape: t = !1, magicalBraces: r = !1 } = {})=>r ? t ? e.replace(/[?*()[\]{}]/g, "[$&]") : e.replace(/[?*()[\]\\{}]/g, "\\$&") : t ? e.replace(/[?*()[\]]/g, "[$&]") : e.replace(/[?*()[\]\\]/g, "\\$&"), se.unescape = F;
