"use strict";
require.d(exports, {
    dM: ()=>v,
    zF: ()=>E,
    QO: ()=>b,
    hq: ()=>S,
    rX: ()=>z,
    $B: ()=>J,
    yz: ()=>K
});
let n = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;
class s extends Date {
    #ze = !1;
    #We = !1;
    #Ve = null;
    constructor(e){
        let t = !0, r = !0, s = "Z";
        if ("string" == typeof e) {
            let o = e.match(n);
            o ? (o[1] || (t = !1, e = `0000-01-01T${e}`), r = !!o[2], r && " " === e[10] && (e = e.replace(" ", "T")), o[2] && +o[2] > 23 ? e = "" : (s = o[3] || null, e = e.toUpperCase(), !s && r && (e += "Z"))) : e = "";
        }
        super(e), isNaN(this.getTime()) || (this.#ze = t, this.#We = r, this.#Ve = s);
    }
    isDateTime() {
        return this.#ze && this.#We;
    }
    isLocal() {
        return !this.#ze || !this.#We || !this.#Ve;
    }
    isDate() {
        return this.#ze && !this.#We;
    }
    isTime() {
        return this.#We && !this.#ze;
    }
    isValid() {
        return this.#ze || this.#We;
    }
    toISOString() {
        let e = super.toISOString();
        if (this.isDate()) return e.slice(0, 10);
        if (this.isTime()) return e.slice(11, 23);
        if (null === this.#Ve) return e.slice(0, -1);
        if ("Z" === this.#Ve) return e;
        let t = 60 * +this.#Ve.slice(1, 3) + +this.#Ve.slice(4, 6);
        return t = "-" === this.#Ve[0] ? t : -t, new Date(this.getTime() - 6e4 * t).toISOString().slice(0, -1) + this.#Ve;
    }
    static wrapAsOffsetDateTime(e, t = "Z") {
        let r = new s(e);
        return r.#Ve = t, r;
    }
    static wrapAsLocalDateTime(e) {
        let t = new s(e);
        return t.#Ve = null, t;
    }
    static wrapAsLocalDate(e) {
        let t = new s(e);
        return t.#We = !1, t.#Ve = null, t;
    }
    static wrapAsLocalTime(e) {
        let t = new s(e);
        return t.#ze = !1, t.#Ve = null, t;
    }
}
class o extends Error {
    line;
    column;
    codeblock;
    constructor(e, t){
        const [r, n] = function(e, t) {
            let r = e.slice(0, t).split(/\r\n|\n|\r/g);
            return [
                r.length,
                r.pop().length + 1
            ];
        }(t.toml, t.ptr), s = function(e, t, r) {
            let n = e.split(/\r\n|\n|\r/g), s = "", o = 1 + (0 | Math.log10(t + 1));
            for(let e = t - 1; e <= t + 1; e++){
                let i = n[e - 1];
                i && (s += e.toString().padEnd(o, " "), s += ":  ", s += i, s += "\n", e === t && (s += " ".repeat(o + r + 2), s += "^\n"));
            }
            return s;
        }(t.toml, r, n);
        super(`Invalid TOML document: ${e}\n\n${s}`, t), this.line = r, this.column = n, this.codeblock = s;
    }
}
let i = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/, a = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/, c = /^[+-]?0[0-9_]/;
function l(e, t) {
    let r = e[t++], n = r, s = "'" === r, i = r === e[t] && r === e[t + 1];
    i && ("\n" === e[t += 2] ? t++ : "\r" === e[t] && "\n" === e[t + 1] && (t += 2));
    let a = "", c = t, l = 0;
    for(let u = t; u < e.length; u++)if (r = e[u], i && ("\n" === r || "\r" === r && "\n" === e[u + 1])) l = l && 3;
    else {
        if (r < " " && "\t" !== r || "" === r) throw new o("control characters are not allowed in strings", {
            toml: e,
            ptr: u
        });
        if (!(l && 3 !== l || r !== n || i && (e[u + 1] !== n || e[u + 2] !== n))) return i && (e[u + 3] === n && u++, e[u + 3] === n && u++), [
            l ? a : a + e.slice(c, u),
            u + (i ? 3 : 1)
        ];
        if (l) {
            if (1 === l) if ("x" === r || "u" === r || "U" === r) {
                let t = 0, n = "x" === r ? 2 : "u" === r ? 4 : 8;
                for(let r = 0; r < n; r++, u++){
                    let r = e.charCodeAt(u + 1), n = r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 65 + 10 : r >= 97 && r <= 102 ? r - 97 + 10 : -1;
                    if (n < 0) throw new o("invalid non-hex character in unicode escape", {
                        toml: e,
                        ptr: u + 1
                    });
                    t = t << 4 | n;
                }
                if (t < 0 || t > 1114111 || t >= 55296 && t <= 57343) throw new o("invalid unicode escape", {
                    toml: e,
                    ptr: u
                });
                a += String.fromCodePoint(t), c = u + 1, l = 0;
            } else if (" " === r || "\t" === r) l = 2;
            else {
                if ("b" === r) a += "\b";
                else if ("t" === r) a += "\t";
                else if ("n" === r) a += "\n";
                else if ("f" === r) a += "\f";
                else if ("r" === r) a += "\r";
                else if ("e" === r) a += "";
                else if ('"' === r) a += '"';
                else {
                    if ("\\" !== r) throw new o("unrecognized escape sequence", {
                        toml: e,
                        ptr: u
                    });
                    a += "\\";
                }
                c = u + 1, l = 0;
            }
            else if (" " !== r && "\t" !== r) {
                if (2 === l) throw new o("invalid escape: only line-ending whitespace may be escaped", {
                    toml: e,
                    ptr: c
                });
                l = s || "\\" !== r ? 0 : 1, c = u;
            }
        } else s || "\\" !== r || (a += e.slice(c, c = u), l = 1);
    }
    throw new o("unfinished string", {
        toml: e,
        ptr: t
    });
}
function u(e, t, r, n) {
    if ("true" === e) return !0;
    if ("false" === e) return !1;
    if ("-inf" === e) return -1 / 0;
    if ("inf" === e || "+inf" === e) return 1 / 0;
    if ("nan" === e || "+nan" === e || "-nan" === e) return NaN;
    if ("-0" === e) return n ? 0n : 0;
    let l = i.test(e);
    if (l || a.test(e)) {
        if (c.test(e)) throw new o("leading zeroes are not allowed", {
            toml: t,
            ptr: r
        });
        let s = +(e = e.replace(/_/g, ""));
        if (isNaN(s)) throw new o("invalid number", {
            toml: t,
            ptr: r
        });
        if (l) {
            if ((l = !Number.isSafeInteger(s)) && !n) throw new o("integer value cannot be represented losslessly", {
                toml: t,
                ptr: r
            });
            (l || !0 === n) && (s = BigInt(e));
        }
        return s;
    }
    const u = new s(e);
    if (!u.isValid()) throw new o("invalid value", {
        toml: t,
        ptr: r
    });
    return u;
}
function d(e, t = 0, r = e.length) {
    let n = e.indexOf("\n", t);
    return "\r" === e[n - 1] && n--, n <= r ? n : -1;
}
function p(e, t) {
    for(let r = t; r < e.length; r++){
        let n = e[r];
        if ("\n" === n) return r;
        if ("\r" === n && "\n" === e[r + 1]) return r + 1;
        if (n < " " && "\t" !== n || "" === n) throw new o("control characters are not allowed in comments", {
            toml: e,
            ptr: t
        });
    }
    return e.length;
}
function m(e, t, r, n) {
    let s;
    for(;;){
        for(; " " === (s = e[t]) || "\t" === s || !r && ("\n" === s || "\r" === s && "\n" === e[t + 1]);)t++;
        if (n || "#" !== s) break;
        t = p(e, t);
    }
    return t;
}
function h(e, t, r, n, s) {
    if (0 === n) throw new o("document contains excessively nested structures. aborting.", {
        toml: e,
        ptr: t
    });
    let i = e[t];
    if ("[" === i || "{" === i) {
        let [a, c] = "[" === i ? function(e, t, r, n) {
            let s, i = [];
            t++;
            for(; "]" !== (s = e[t++]) && s;){
                if ("," === s) throw new o("expected value, found comma", {
                    toml: e,
                    ptr: t - 1
                });
                if ("#" === s) t = p(e, t);
                else if (" " !== s && "\t" !== s && "\n" !== s && "\r" !== s) {
                    let s = h(e, t - 1, "]", r - 1, n);
                    i.push(s[0]), t = s[1];
                }
            }
            if (!s) throw new o("unfinished array encountered", {
                toml: e,
                ptr: t
            });
            return [
                i,
                t
            ];
        }(e, t, n, s) : function(e, t, r, n) {
            let s, i = {}, a = new Set;
            t++;
            for(; "}" !== (s = e[t++]) && s;){
                if ("," === s) throw new o("expected value, found comma", {
                    toml: e,
                    ptr: t - 1
                });
                if ("#" === s) t = p(e, t);
                else if (" " !== s && "\t" !== s && "\n" !== s && "\r" !== s) {
                    let s, c = i, l = !1, [u, d] = g(e, t - 1);
                    for(let r = 0; r < u.length; r++){
                        if (r && (c = l ? c[s] : c[s] = {}), s = u[r], (l = Object.hasOwn(c, s)) && ("object" != typeof c[s] || a.has(c[s]))) throw new o("trying to redefine an already defined value", {
                            toml: e,
                            ptr: t
                        });
                        l || "__proto__" !== s || Object.defineProperty(c, s, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        });
                    }
                    if (l) throw new o("trying to redefine an already defined value", {
                        toml: e,
                        ptr: t
                    });
                    let [p, m] = h(e, d, "}", r - 1, n);
                    a.add(p), c[s] = p, t = m;
                }
            }
            if (!s) throw new o("unfinished table encountered", {
                toml: e,
                ptr: t
            });
            return [
                i,
                t
            ];
        }(e, t, n, s);
        if (r) {
            if (c = m(e, c), "," === e[c]) c++;
            else if (e[c] !== r) throw new o("expected comma or end of structure", {
                toml: e,
                ptr: c
            });
        }
        return [
            a,
            c
        ];
    }
    if ('"' === i || "'" === i) {
        let [n, s] = l(e, t);
        if (r) {
            if (s = m(e, s), e[s] && "," !== e[s] && e[s] !== r && "\n" !== e[s] && "\r" !== e[s]) throw new o("unexpected character encountered", {
                toml: e,
                ptr: s
            });
            "," === e[s] && s++;
        }
        return [
            n,
            s
        ];
    }
    let a = function(e, t, r, n, s = !1) {
        if (!n) return (t = d(e, t)) < 0 ? e.length : t;
        for(let o = t; o < e.length; o++){
            let t = e[o];
            if ("#" === t) {
                if (o = d(e, o), o < 0) break;
            } else {
                if (t === r) return o + 1;
                if (t === n || s && ("\n" === t || "\r" === t && "\n" === e[o + 1])) return o;
            }
        }
        throw new o("cannot find end of structure", {
            toml: e,
            ptr: t
        });
    }(e, t, ",", r), c = function(e, t, r) {
        let n = e.slice(t, r), s = n.indexOf("#");
        return s > -1 && (p(e, s), n = n.slice(0, s)), [
            n.trimEnd(),
            s
        ];
    }(e, t, a - ("," === e[a - 1] ? 1 : 0));
    if (!c[0]) throw new o("incomplete key-value declaration: no value specified", {
        toml: e,
        ptr: t
    });
    return r && c[1] > -1 && (a = m(e, t + c[1]), "," === e[a] && a++), [
        u(c[0], e, t, s),
        a
    ];
}
let f = /^[a-zA-Z0-9-_]+[ \t]*$/;
function g(e, t, r = "=") {
    let n = t - 1, s = [], i = e.indexOf(r, t);
    if (i < 0) throw new o("incomplete key-value: cannot find end of key", {
        toml: e,
        ptr: t
    });
    do {
        let a = e[t = ++n];
        if (" " !== a && "\t" !== a) if ('"' === a || "'" === a) {
            if (a === e[t + 1] && a === e[t + 2]) throw new o("multiline strings are not allowed in keys", {
                toml: e,
                ptr: t
            });
            let [c, u] = l(e, t);
            n = e.indexOf(".", u);
            let p = e.slice(u, n < 0 || n > i ? i : n), m = d(p);
            if (m > -1) throw new o("newlines are not allowed in keys", {
                toml: e,
                ptr: t + n + m
            });
            if (p.trimStart()) throw new o("found extra tokens after the string part", {
                toml: e,
                ptr: u
            });
            if (i < u && (i = e.indexOf(r, u), i < 0)) throw new o("incomplete key-value: cannot find end of key", {
                toml: e,
                ptr: t
            });
            s.push(c);
        } else {
            n = e.indexOf(".", t);
            let r = e.slice(t, n < 0 || n > i ? i : n);
            if (!f.test(r)) throw new o("only letter, numbers, dashes and underscores are allowed in keys", {
                toml: e,
                ptr: t
            });
            s.push(r.trimEnd());
        }
    }while (n + 1 && n < i)
    return [
        s,
        m(e, i + 1, !0, !0)
    ];
}
function y(e, t, r, n) {
    let s, o, i = t, a = r, c = !1;
    for(let t = 0; t < e.length; t++){
        if (t) {
            if (i = c ? i[s] : i[s] = {}, a = (o = a[s]).c, 0 === n && (1 === o.t || 2 === o.t)) return null;
            if (2 === o.t) {
                let e = i.length - 1;
                i = i[e], a = a[e].c;
            }
        }
        if (s = e[t], (c = Object.hasOwn(i, s)) && 0 === a[s]?.t && a[s]?.d) return null;
        c || ("__proto__" === s && (Object.defineProperty(i, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(a, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0
        })), a[s] = {
            t: t < e.length - 1 && 2 === n ? 3 : n,
            d: !1,
            i: 0,
            c: {}
        });
    }
    if (o = a[s], o.t !== n && (1 !== n || 3 !== o.t)) return null;
    if (2 === n && (o.d || (o.d = !0, i[s] = []), i[s].push(i = {}), o.c[o.i++] = o = {
        t: 1,
        d: !1,
        i: 0,
        c: {}
    }), o.d) return null;
    if (o.d = !0, 1 === n) i = c ? i[s] : i[s] = {};
    else if (0 === n && c) return null;
    return [
        s,
        i,
        o.c
    ];
}
function w(e, { maxDepth: t = 1e3, integersAsBigInt: r } = {}) {
    let n = {}, s = {}, i = n, a = s;
    for(let c = m(e, 0); c < e.length;){
        if ("[" === e[c]) {
            let t = "[" === e[++c], r = g(e, c += +t, "]");
            if (t) {
                if ("]" !== e[r[1] - 1]) throw new o("expected end of table declaration", {
                    toml: e,
                    ptr: r[1] - 1
                });
                r[1]++;
            }
            let l = y(r[0], n, s, t ? 2 : 1);
            if (!l) throw new o("trying to redefine an already defined table or value", {
                toml: e,
                ptr: c
            });
            a = l[2], i = l[1], c = r[1];
        } else {
            let n = g(e, c), s = y(n[0], i, a, 0);
            if (!s) throw new o("trying to redefine an already defined table or value", {
                toml: e,
                ptr: c
            });
            let l = h(e, n[1], void 0, t, r);
            s[1][s[0]] = l[0], c = l[1];
        }
        if (c = m(e, c, !0), e[c] && "\n" !== e[c] && "\r" !== e[c]) throw new o("each key-value declaration must be followed by an end-of-line", {
            toml: e,
            ptr: c
        });
        c = m(e, c);
    }
    return n;
}
class v extends Error {
    constructor(){
        super(...arguments), this.name = "PrivateInferenceConfigError";
    }
}
const _ = [
    "CURSOR_PRIVATE_INFERENCE_BASE_URL",
    "CURSOR_PRIVATE_INFERENCE_MODEL",
    "CURSOR_PRIVATE_INFERENCE_API_KEY",
    "CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER",
    "CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT",
    "CURSOR_PRIVATE_INFERENCE_API_SHAPE"
], A = "responses";
function S(e) {
    const t = e?.trim();
    return t || void 0;
}
function b(e) {
    return _.some((t)=>void 0 !== S(e[t]));
}
function E(e) {
    throw new v(`Private inference config: ${e}`);
}
function I(e) {
    return null === e || "object" != typeof e || Array.isArray(e);
}
function C(e, t) {
    if (null !== e && "object" == typeof e) {
        for (const [r, n] of Object.entries(e))if (r === t) return n;
    }
}
function k(e, t) {
    return (null === e || "object" != typeof e || Array.isArray(e)) && E(t), Object.entries(e);
}
function x(e, t) {
    if (void 0 !== e) return "string" == typeof e && "" !== e.trim() || E(`${t} must be a non-empty string`), e.trim();
}
function T(e, t) {
    if (void 0 !== e) return ("number" != typeof e || !Number.isSafeInteger(e) || e <= 0) && E(`${t} must be a positive integer`), e;
}
function R(e, t) {
    if (void 0 !== e) return "boolean" != typeof e && E(`${t} must be a boolean`), e;
}
function B(e, t) {
    if (void 0 === e) return;
    const r = {};
    for (const [n, s] of k(e, `${t} must be a table of string values`))"string" != typeof s && E(`${t} must be a table of string values`), r[n] = s;
    return r;
}
function P(e, t) {
    if (void 0 === e) return;
    const r = Array.isArray(e) ? e : [
        e
    ];
    return 0 === r.length && E(`${t} must name at least one environment variable`), r.map((e)=>("string" == typeof e && "" !== e.trim() || E(`${t} must be an environment variable name or a list of names`), e.trim()));
}
function J(e) {
    const t = new Set, r = [];
    for (const n of e.models)t.has(n.endpoint.baseUrl) || (t.add(n.endpoint.baseUrl), r.push(n.endpoint.baseUrl));
    return r;
}
const M = [
    {
        key: "api_key",
        reason: "secrets don't belong in the file; use env_key (an environment variable name) or [auth] auth_provider_command (an executable that prints the key)"
    },
    {
        key: "query_params",
        reason: "not supported on the private path yet"
    },
    {
        key: "env_http_headers",
        reason: "not supported on the private path yet"
    }
];
function q(e, t) {
    for (const { key: r, reason: n } of M)void 0 !== C(e, r) && E(`${t}.${r} is not supported — ${n}`);
    return {
        baseUrl: x(C(e, "base_url"), `${t}.base_url`),
        apiBaseUrl: x(C(e, "api_base_url"), `${t}.api_base_url`),
        apiBackend: x(C(e, "api_backend"), `${t}.api_backend`),
        envKeys: P(C(e, "env_key"), `${t}.env_key`),
        headers: B(C(e, "extra_headers"), `${t}.extra_headers`),
        authProvider: x(C(e, "auth_provider"), `${t}.auth_provider`),
        inlineAuthHelper: t.startsWith("model_providers.") ? N(C(e, "auth"), `${t}.auth`) : void 0
    };
}
const D = 1, O = 600;
function N(e, t) {
    if (void 0 === e) return;
    I(e) && E(`${t} must be a table`);
    const r = x(C(e, "command"), `${t}.command`);
    void 0 === r && E(`${t}.command is required`);
    const n = function(e, t) {
        if (void 0 === e) return;
        Array.isArray(e) && e.every((e)=>"string" == typeof e) || E(`${t} must be an array of strings`);
        return e;
    }(C(e, "args"), `${t}.args`), s = T(C(e, "token_ttl_secs"), `${t}.token_ttl_secs`), o = T(C(e, "timeout_secs"), `${t}.timeout_secs`);
    return {
        command: r,
        ...void 0 === n ? {} : {
            args: n
        },
        ...void 0 === s ? {} : {
            tokenTtlSecs: s
        },
        ...void 0 === o ? {} : {
            timeoutSecs: Math.min(O, Math.max(D, o))
        }
    };
}
function F(e, t, r) {
    const n = R(C(e, "supports_reasoning_effort"), `${t}.supports_reasoning_effort`), s = function(e, t) {
        if (void 0 === e) return;
        const r = `${t} must be a non-empty list of [[${t}]] rungs (id, optional value, label, default)`;
        Array.isArray(e) || E(r);
        const n = new Set;
        let s;
        const o = e.map((e, r)=>{
            const o = `${t}[${r}]`;
            I(e) && E(`${o} must be a table`);
            const i = x(C(e, "id"), `${o}.id`);
            void 0 === i && E(`${o}.id is required`), n.has(i) && E(`${t} lists rung "${i}" more than once`), n.add(i), R(C(e, "default"), `${o}.default`) && (void 0 !== s && E(`${t} flags more than one rung default = true`), s = i);
            const a = x(C(e, "label"), `${o}.label`);
            return {
                id: i,
                value: x(C(e, "value"), `${o}.value`) ?? i,
                ...void 0 === a ? {} : {
                    label: a
                }
            };
        }), i = o[0];
        return void 0 === i && E(r), {
            tiers: o,
            firstId: i.id,
            flaggedDefault: s
        };
    }(C(e, "reasoning_efforts"), `${t}.reasoning_efforts`), o = x(C(e, "reasoning_effort"), `${t}.reasoning_effort`);
    if (!1 === n) return void 0 === s && void 0 === o || E(`${t}.supports_reasoning_effort = false contradicts its reasoning_efforts / reasoning_effort — drop one`), {
        kind: "off"
    };
    const i = s?.flaggedDefault;
    void 0 !== i && void 0 !== o && i !== o && E(`${t}.reasoning_effort = "${o}" disagrees with the rung flagged default = true ("${i}")`);
    const a = i ?? o ?? r;
    if (void 0 !== s) {
        const e = s.tiers.map((e)=>e.id);
        return void 0 === a || e.includes(a) || E(`${t}.reasoning_effort "${a}" is not one of its reasoning_efforts (${e.join(", ")})`), {
            kind: "declared",
            tiers: s.tiers,
            defaultTierId: a ?? s.firstId
        };
    }
    return void 0 !== n || void 0 !== o ? {
        kind: "advertised",
        ...void 0 === a ? {} : {
            defaultTierId: a
        }
    } : void 0;
}
function U(e, t, r, n) {
    const s = `model.${e}`, o = q(t, s), i = x(C(t, "model_provider"), `${s}.model_provider`);
    let a;
    void 0 !== i && (a = r.providers.get(i), void 0 === a && E(`${s}.model_provider names "${i}" but [model_providers.${i}] is not defined`));
    const c = function(e, t) {
        return e.apiBaseUrl ?? t?.apiBaseUrl ?? e.baseUrl ?? t?.baseUrl;
    }(o, a);
    void 0 === c && E(`${s}.base_url is required (on the model or its model_provider; api_base_url is also accepted)`);
    const l = o.apiBackend ?? a?.apiBackend;
    void 0 === l && E(`${s}.api_backend is required — Grok Build defaults to chat_completions, which private inference does not speak; set api_backend = "${A}" on the model or its model_provider`), l !== A && E(`${s}.api_backend = "${l}" is not supported — private inference speaks the OpenAI Responses API only; set api_backend = "${A}"`);
    const u = function(...e) {
        const t = new Map;
        for (const r of e)for (const [e, n] of Object.entries(r ?? {}))t.set(e.toLowerCase(), [
            e,
            n
        ]);
        return 0 === t.size ? void 0 : Object.fromEntries(t.values());
    }(r.headers, a?.headers, o.headers), d = o.envKeys ?? a?.envKeys;
    let p = {};
    for (const e of d ?? []){
        const t = Object.hasOwn(n, e) ? S(n[e]) : void 0;
        if (void 0 !== t) {
            p = {
                apiKey: t
            };
            break;
        }
    }
    if (void 0 === p.apiKey) {
        const e = function(e, t, r, n, s) {
            if (void 0 !== e.authProvider) return L(e.authProvider, n, s);
            if (void 0 !== t?.authProvider) return L(t.authProvider, n, `model_providers.${r ?? "unknown"}`);
            if (void 0 !== t?.inlineAuthHelper) return t.inlineAuthHelper;
            return n.authProviderHelper;
        }(o, a, i, r, s);
        void 0 !== e ? p = {
            apiKeyHelper: e
        } : void 0 !== d && E(`${s}.env_key names ${d.join(", ")} but none is set, and no auth_provider or [auth] auth_provider_command is configured`);
    }
    return {
        baseUrl: c,
        ...p,
        ...void 0 === u ? {} : {
            headers: u
        }
    };
}
function L(e, t, r) {
    const n = t.authProviders.get(e);
    return void 0 === n && E(`${r}.auth_provider names "${e}" but [auth_provider.${e}] is not defined`), n;
}
function $(e) {
    const t = new Map;
    if (void 0 === e) return t;
    for (const [r, n] of k(e, "model_providers must be a table of [model_providers.<name>] tables"))I(n) && E(`model_providers.${r} must be a table`), t.set(r, q(n, `model_providers.${r}`));
    return t;
}
function Q(e) {
    const t = new Map;
    if (void 0 === e) return t;
    for (const [r, n] of k(e, "auth_provider must be a table of [auth_provider.<name>] tables")){
        I(n) && E(`auth_provider.${r} must be a table`);
        const e = N(n, `auth_provider.${r}`);
        void 0 === e && E(`auth_provider.${r}.command is required`), t.set(r, e);
    }
    return t;
}
function j(e) {
    if (void 0 === e) return;
    I(e) && E("auth must be a table");
    const t = x(C(e, "auth_provider_command"), "auth.auth_provider_command"), r = T(C(e, "auth_token_ttl"), "auth.auth_token_ttl");
    if (void 0 !== t) return {
        command: t,
        ...void 0 === r ? {} : {
            tokenTtlSecs: r
        }
    };
    void 0 !== r && E("auth.auth_token_ttl is set but auth.auth_provider_command is not");
}
const G = 'private inference reads a Grok Build config.toml: one [model.<key>] table per model and [models] default = "<key>"';
function H(e, t, r) {
    let n;
    try {
        n = w(e);
    } catch (e) {
        E(`${t} is not valid TOML: ${(e instanceof Error ? e.message : String(e)).split("\n", 1)[0]}`);
    }
    I(n) && E(`${t} must contain a TOML document`);
    const s = C(n, "models");
    void 0 !== s && I(s) && E(`models must be a [models] table, not a list — ${G}`);
    const o = k(C(n, "model"), `no [model.<key>] tables — ${G}`).map(([e, t])=>(I(t) && E(`model.${e} must be a table`), {
            key: e,
            table: t
        })), i = o.map(({ key: e })=>e), a = x(C(s, "default"), "models.default");
    void 0 === a || i.includes(a) || E(`models.default = "${a}" is not one of the [model.<key>] tables (${i.join(", ")})`);
    const c = a ?? (1 === i.length ? i[0] : void 0);
    void 0 === c && E(`models.default is required when more than one model is defined — name one of: ${i.join(", ")}`);
    const l = x(C(s, "default_reasoning_effort"), "models.default_reasoning_effort"), u = {
        providers: $(C(n, "model_providers")),
        authProviders: Q(C(n, "auth_provider")),
        authProviderHelper: j(C(n, "auth")),
        headers: B(C(s, "extra_headers"), "models.extra_headers")
    }, d = o.map(({ key: e, table: t })=>(function(e, t, r, n) {
            const s = `model.${e}`, o = R(C(t, "vision"), `${s}.vision`), i = R(C(t, "supports_backend_search"), `${s}.supports_backend_search`), a = F(t, s, r), c = {
                ...void 0 === o ? {} : {
                    vision: o
                },
                ...void 0 === i ? {} : {
                    supportsBackendSearch: i
                }
            };
            return {
                id: e,
                providerModelId: x(C(t, "model"), `${s}.model`) ?? e,
                contextWindowTokens: T(C(t, "context_window"), `${s}.context_window`),
                longContextThresholdTokens: T(C(t, "long_context_threshold_tokens"), `${s}.long_context_threshold_tokens`),
                capabilities: 0 === Object.keys(c).length ? void 0 : c,
                reasoning: a,
                maxOutputTokens: T(C(t, "max_completion_tokens"), `${s}.max_completion_tokens`),
                cursorModelId: x(C(t, "cursor_model"), `${s}.cursor_model`),
                supportsAssistantPrefill: R(C(t, "supports_assistant_prefill"), `${s}.supports_assistant_prefill`),
                cacheTtlMs: T(C(t, "cache_ttl_ms"), `${s}.cache_ttl_ms`),
                displayName: x(C(t, "name"), `${s}.name`),
                supportsPersistedReasoning: R(C(t, "supports_persisted_reasoning"), `${s}.supports_persisted_reasoning`),
                endpoint: n
            };
        })(e, t, e === c ? l : void 0, U(e, t, u, r)));
    return {
        models: d,
        defaultModelId: c
    };
}
function z(e) {
    const t = void 0 !== e.configFilePath, r = _.filter((t)=>void 0 !== S(e.env[t]));
    if (!t && 0 === r.length) return;
    if (t && r.length > 0 && E(`both a config file (${e.configFilePath}) and shorthand env vars (${r.join(", ")}) are set — ambiguous config; use one source`), !t) return function(e) {
        const t = S(e.CURSOR_PRIVATE_INFERENCE_BASE_URL);
        void 0 === t && E("CURSOR_PRIVATE_INFERENCE_BASE_URL is not set");
        const r = S(e.CURSOR_PRIVATE_INFERENCE_MODEL);
        void 0 === r && E("CURSOR_PRIVATE_INFERENCE_MODEL is not set");
        const n = S(e.CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER), s = {
            baseUrl: t,
            apiKey: S(e.CURSOR_PRIVATE_INFERENCE_API_KEY),
            apiKeyHelper: void 0 === n ? void 0 : {
                command: n
            }
        };
        void 0 !== s.apiKey && void 0 !== s.apiKeyHelper && E("both CURSOR_PRIVATE_INFERENCE_API_KEY and CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER are set — ambiguous credential config; set exactly one");
        const o = S(e.CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT), i = void 0 === o ? void 0 : Number(o);
        return void 0 !== i && (!Number.isSafeInteger(i) || i <= 0) && E("CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT must be a positive integer"), void 0 !== S(e.CURSOR_PRIVATE_INFERENCE_API_SHAPE) && E("CURSOR_PRIVATE_INFERENCE_API_SHAPE is no longer supported — private inference speaks the OpenAI Responses API only"), {
            models: [
                {
                    id: r,
                    providerModelId: r,
                    contextWindowTokens: i,
                    endpoint: s
                }
            ],
            defaultModelId: r
        };
    }(e.env);
    void 0 === e.configFileContent && E(`could not read ${e.configFilePath}`);
    const n = e.configFilePath;
    if (n.toLowerCase().endsWith(".toml")) return H(e.configFileContent, n, e.env);
    n.toLowerCase().endsWith(".json") && E(`${n}: JSON private-inference config is not supported — the config is a Grok Build config.toml; point CURSOR_PRIVATE_INFERENCE_CONFIG at a .toml file`), E(`${n}: CURSOR_PRIVATE_INFERENCE_CONFIG must point at a .toml file`);
}
function W(e, t) {
    const r = e.reasoning;
    switch(r?.kind){
        case "off":
            return;
        case "declared":
            return {
                tiers: r.tiers,
                default: r.defaultTierId
            };
        case "advertised":
        case void 0:
            {
                const n = t?.reasoningEffortValues ?? [], s = n[0];
                if (void 0 === s) return void (void 0 !== r && E(`model "${e.id}": reasoning is declared without [[model.${e.id}.reasoning_efforts]] rungs and the gateway's /models advertises no tiers`));
                const o = r?.defaultTierId ?? s;
                return n.includes(o) || E(`model "${e.id}": reasoning_effort "${o}" is not one of the tiers the gateway advertises (${n.join(", ")})`), {
                    tiers: n.map((e)=>({
                            id: e,
                            value: e
                        })),
                    default: o
                };
            }
    }
}
function V(e, t) {
    if (!1 !== e.capabilities?.supportsBackendSearch) return !0 === t?.extendedCapabilities ? "web_search" : "web_search_preview";
}
function K(e, t) {
    "chat_completions" === t?.advertisedDialect && E(`model "${e.id}": the gateway advertises chat_completions for this model — private inference is Responses-only; the gateway must serve the Responses API`);
    const r = e.contextWindowTokens ?? t?.contextLength;
    void 0 === r && E(`model "${e.id}": context_window is not configured and the gateway's /models advertises no context_length — set context_window (CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT for the shorthand)`);
    const n = e.longContextThresholdTokens ?? t?.longContextThresholdTokens;
    return void 0 !== e.longContextThresholdTokens && e.longContextThresholdTokens > r && E(`model "${e.id}": long_context_threshold_tokens (${e.longContextThresholdTokens}) exceeds context_window (${r})`), {
        id: e.id,
        providerModelId: e.providerModelId,
        contextWindowTokens: r,
        longContextThresholdTokens: n,
        vision: e.capabilities?.vision ?? t?.supportsVision ?? !1,
        webSearchTool: V(e, t),
        effort: W(e, t),
        maxOutputTokens: e.maxOutputTokens ?? t?.maxOutputTokens,
        cursorModelId: e.cursorModelId,
        supportsAssistantPrefill: e.supportsAssistantPrefill,
        cacheTtlMs: e.cacheTtlMs,
        displayName: e.displayName ?? e.id,
        supportsPersistedReasoning: e.supportsPersistedReasoning ?? !0,
        endpoint: e.endpoint
    };
}
