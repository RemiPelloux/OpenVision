"use strict";
const n = require("./module-94443.js"), s = require("./module-68139.js"), { MAX_LENGTH: o, POSIX_REGEX_SOURCE: i, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: c, REPLACEMENTS: l } = n, u = (e, t)=>{
    if ("function" == typeof t.expandRange) return t.expandRange(...e, t);
    e.sort();
    const r = `[${e.join("-")}]`;
    try {
        new RegExp(r);
    } catch (t) {
        return e.map((e)=>s.escapeRegex(e)).join("..");
    }
    return r;
}, d = (e, t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`, p = (e)=>{
    const t = [];
    let r = 0, n = 0, s = 0, o = "", i = !1;
    for (const a of e)if (!0 !== i) if ("\\" !== a) if ('"' !== a) {
        if (0 === s) {
            if ("[" === a) r++;
            else if ("]" === a && r > 0) r--;
            else if (0 === r) {
                if ("(" === a) n++;
                else if (")" === a && n > 0) n--;
                else if ("|" === a && 0 === n) {
                    t.push(o), o = "";
                    continue;
                }
            }
        }
        o += a;
    } else s = 1 === s ? 0 : 1, o += a;
    else o += a, i = !0;
    else o += a, i = !1;
    return t.push(o), t;
}, m = (e)=>{
    let t = e.trim(), r = !0;
    for(; !0 === r;)r = !1, /^@\([^\\()[\]{}|]+\)$/.test(t) && (t = t.slice(2, -1), r = !0);
    if (((e)=>{
        let t = !1;
        for (const r of e)if (!0 !== t) if ("\\" !== r) {
            if (/[?*+@!()[\]{}]/.test(r)) return !1;
        } else t = !0;
        else t = !1;
        return !0;
    })(t)) return t.replace(/\\(.)/g, "$1");
}, h = (e, t = !0)=>{
    if ("+" !== e[0] && "*" !== e[0] || "(" !== e[1]) return;
    let r = 0, n = 0, s = 0, o = !1;
    for(let i = 1; i < e.length; i++){
        const a = e[i];
        if (!0 !== o) if ("\\" !== a) if ('"' !== a) {
            if (1 !== s) if ("[" !== a) {
                if ("]" === a && r > 0) r--;
                else if (!(r > 0)) if ("(" !== a) {
                    if (")" === a && (n--, 0 === n)) {
                        if (!0 === t && i !== e.length - 1) return;
                        return {
                            type: e[0],
                            body: e.slice(2, i),
                            end: i
                        };
                    }
                } else n++;
            } else r++;
        } else s = 1 === s ? 0 : 1;
        else o = !0;
        else o = !1;
    }
}, f = (e)=>{
    let t = 0;
    const r = [];
    for(; t < e.length;){
        const n = h(e.slice(t), !1);
        if (!n || "*" !== n.type) return;
        const s = p(n.body).map((e)=>e.trim());
        if (1 !== s.length) return;
        const o = m(s[0]);
        if (!o || 1 !== o.length) return;
        r.push(o), t += n.end + 1;
    }
    if (!(r.length < 1)) return r;
}, g = (e)=>{
    let t = 0, r = e.trim(), n = h(r);
    for(; n;)t++, r = n.body.trim(), n = h(r);
    return t;
}, y = (e, t)=>{
    if (!1 === t.maxExtglobRecursion) return {
        risky: !1
    };
    const r = "number" == typeof t.maxExtglobRecursion ? t.maxExtglobRecursion : n.DEFAULT_MAX_EXTGLOB_RECURSION, o = p(e).map((e)=>e.trim());
    if (o.length > 1 && (o.some((e)=>"" === e) || o.some((e)=>/^[*?]+$/.test(e)) || ((e)=>{
        const t = e.map(m).filter(Boolean);
        for(let e = 0; e < t.length; e++)for(let r = e + 1; r < t.length; r++){
            const n = t[e], s = t[r], o = n[0];
            if (o && n === o.repeat(n.length) && s === o.repeat(s.length) && (n === s || n.startsWith(s) || s.startsWith(n))) return !0;
        }
        return !1;
    })(o))) return {
        risky: !0
    };
    const i = [];
    let a = !1, c = !0;
    for (const e of o){
        const t = f(e);
        if (t) {
            a = !0, i.push(...t);
            continue;
        }
        const n = m(e);
        if (n && 1 === n.length) i.push(n);
        else if (c = !1, g(e) > r) return {
            risky: !0
        };
    }
    return a ? c ? {
        risky: !0,
        safeOutput: (l = [
            ...new Set(i)
        ], `${1 === l.length ? s.escapeRegex(l[0]) : `[${l.map((e)=>s.escapeRegex(e)).join("")}]`}*`)
    } : {
        risky: !0
    } : {
        risky: !1
    };
    var l;
}, w = (e, t)=>{
    if ("string" != typeof e) throw new TypeError("Expected a string");
    e = l[e] || e;
    const r = {
        ...t
    }, p = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o;
    let m = e.length;
    if (m > p) throw new SyntaxError(`Input length: ${m}, exceeds maximum allowed length: ${p}`);
    const h = {
        type: "bos",
        value: "",
        output: r.prepend || ""
    }, f = [
        h
    ], g = r.capture ? "" : "?:", v = n.globChars(r.windows), _ = n.extglobChars(v), { DOT_LITERAL: b, PLUS_LITERAL: S, SLASH_LITERAL: k, ONE_CHAR: x, DOTS_SLASH: E, NO_DOT: I, NO_DOT_SLASH: T, NO_DOTS_SLASH: C, QMARK: P, QMARK_NO_DOT: A, STAR: R, START_ANCHOR: M } = v, J = (e)=>`(${g}(?:(?!${M}${e.dot ? E : b}).)*?)`, O = r.dot ? "" : I, B = r.dot ? P : A;
    let D = !0 === r.bash ? J(r) : R;
    r.capture && (D = `(${D})`), "boolean" == typeof r.noext && (r.noextglob = r.noext);
    const q = {
        input: e,
        index: -1,
        start: 0,
        dot: !0 === r.dot,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: !1,
        negated: !1,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: !1,
        tokens: f
    };
    e = s.removePrefix(e, q), m = e.length;
    const N = [], F = [], U = [];
    let L, $ = h;
    const j = ()=>q.index === m - 1, G = q.peek = (t = 1)=>e[q.index + t], z = q.advance = ()=>e[++q.index] || "", W = ()=>e.slice(q.index + 1), H = (e = "", t = 0)=>{
        q.consumed += e, q.index += t;
    }, K = (e)=>{
        q.output += null != e.output ? e.output : e.value, H(e.value);
    }, V = ()=>{
        let e = 1;
        for(; "!" === G() && ("(" !== G(2) || "?" === G(3));)z(), q.start++, e++;
        return e % 2 != 0 && (q.negated = !0, q.start++, !0);
    }, Y = (e)=>{
        q[e]++, U.push(e);
    }, Q = (e)=>{
        q[e]--, U.pop();
    }, X = (e)=>{
        if ("globstar" === $.type) {
            const t = q.braces > 0 && ("comma" === e.type || "brace" === e.type), r = !0 === e.extglob || N.length && ("pipe" === e.type || "paren" === e.type);
            "slash" === e.type || "paren" === e.type || t || r || (q.output = q.output.slice(0, -$.output.length), $.type = "star", $.value = "*", $.output = D, q.output += $.output);
        }
        if (N.length && "paren" !== e.type && (N[N.length - 1].inner += e.value), (e.value || e.output) && K(e), $ && "text" === $.type && "text" === e.type) return $.output = ($.output || $.value) + e.value, void ($.value += e.value);
        e.prev = $, f.push(e), $ = e;
    }, Z = (e, t)=>{
        const n = {
            ..._[t],
            conditions: 1,
            inner: ""
        };
        n.prev = $, n.parens = q.parens, n.output = q.output, n.startIndex = q.index, n.tokensIndex = f.length;
        const s = (r.capture ? "(" : "") + n.open;
        Y("parens"), X({
            type: e,
            value: t,
            output: q.output ? "" : x
        }), X({
            type: "paren",
            extglob: !0,
            value: z(),
            output: s
        }), N.push(n);
    }, ee = (n)=>{
        const o = e.slice(n.startIndex, q.index + 1), i = e.slice(n.startIndex + 2, q.index), a = y(i, r);
        if (("plus" === n.type || "star" === n.type) && a.risky) {
            const e = a.safeOutput ? (n.output ? "" : x) + (r.capture ? `(${a.safeOutput})` : a.safeOutput) : void 0, t = f[n.tokensIndex];
            t.type = "text", t.value = o, t.output = e || s.escapeRegex(o);
            for(let e = n.tokensIndex + 1; e < f.length; e++)f[e].value = "", f[e].output = "", delete f[e].suffix;
            return q.output = n.output + t.output, q.backtrack = !0, X({
                type: "paren",
                extglob: !0,
                value: L,
                output: ""
            }), void Q("parens");
        }
        let c, l = n.close + (r.capture ? ")" : "");
        if ("negate" === n.type) {
            let e = D;
            if (n.inner && n.inner.length > 1 && n.inner.includes("/") && (e = J(r)), (e !== D || j() || /^\)+$/.test(W())) && (l = n.close = `)$))${e}`), n.inner.includes("*") && (c = W()) && /^\.[^\\/.]+$/.test(c)) {
                const r = w(c, {
                    ...t,
                    fastpaths: !1
                }).output;
                l = n.close = `)${r})${e})`;
            }
            "bos" === n.prev.type && (q.negatedExtglob = !0);
        }
        X({
            type: "paren",
            extglob: !0,
            value: L,
            output: l
        }), Q("parens");
    };
    if (!1 !== r.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e)) {
        let n = !1, o = e.replace(c, (e, t, r, s, o, i)=>"\\" === s ? (n = !0, e) : "?" === s ? t ? t + s + (o ? P.repeat(o.length) : "") : 0 === i ? B + (o ? P.repeat(o.length) : "") : P.repeat(r.length) : "." === s ? b.repeat(r.length) : "*" === s ? t ? t + s + (o ? D : "") : D : t ? e : `\\${e}`);
        return !0 === n && (o = !0 === r.unescape ? o.replace(/\\/g, "") : o.replace(/\\+/g, (e)=>e.length % 2 == 0 ? "\\\\" : e ? "\\" : "")), o === e && !0 === r.contains ? (q.output = e, q) : (q.output = s.wrapOutput(o, q, t), q);
    }
    for(; !j();){
        if (L = z(), "\0" === L) continue;
        if ("\\" === L) {
            const e = G();
            if ("/" === e && !0 !== r.bash) continue;
            if ("." === e || ";" === e) continue;
            if (!e) {
                L += "\\", X({
                    type: "text",
                    value: L
                });
                continue;
            }
            const t = /^\\+/.exec(W());
            let n = 0;
            if (t && t[0].length > 2 && (n = t[0].length, q.index += n, n % 2 != 0 && (L += "\\")), !0 === r.unescape ? L = z() : L += z(), 0 === q.brackets) {
                X({
                    type: "text",
                    value: L
                });
                continue;
            }
        }
        if (q.brackets > 0 && ("]" !== L || "[" === $.value || "[^" === $.value)) {
            if (!1 !== r.posix && ":" === L) {
                const e = $.value.slice(1);
                if (e.includes("[") && ($.posix = !0, e.includes(":"))) {
                    const e = $.value.lastIndexOf("["), t = $.value.slice(0, e), r = $.value.slice(e + 2), n = i[r];
                    if (n) {
                        $.value = t + n, q.backtrack = !0, z(), h.output || 1 !== f.indexOf($) || (h.output = x);
                        continue;
                    }
                }
            }
            ("[" === L && ":" !== G() || "-" === L && "]" === G()) && (L = `\\${L}`), "]" !== L || "[" !== $.value && "[^" !== $.value || (L = `\\${L}`), !0 === r.posix && "!" === L && "[" === $.value && (L = "^"), $.value += L, K({
                value: L
            });
            continue;
        }
        if (1 === q.quotes && '"' !== L) {
            L = s.escapeRegex(L), $.value += L, K({
                value: L
            });
            continue;
        }
        if ('"' === L) {
            q.quotes = 1 === q.quotes ? 0 : 1, !0 === r.keepQuotes && X({
                type: "text",
                value: L
            });
            continue;
        }
        if ("(" === L) {
            Y("parens"), X({
                type: "paren",
                value: L
            });
            continue;
        }
        if (")" === L) {
            if (0 === q.parens && !0 === r.strictBrackets) throw new SyntaxError(d("opening", "("));
            const e = N[N.length - 1];
            if (e && q.parens === e.parens + 1) {
                ee(N.pop());
                continue;
            }
            X({
                type: "paren",
                value: L,
                output: q.parens ? ")" : "\\)"
            }), Q("parens");
            continue;
        }
        if ("[" === L) {
            if (!0 !== r.nobracket && W().includes("]")) Y("brackets");
            else {
                if (!0 !== r.nobracket && !0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
                L = `\\${L}`;
            }
            X({
                type: "bracket",
                value: L
            });
            continue;
        }
        if ("]" === L) {
            if (!0 === r.nobracket || $ && "bracket" === $.type && 1 === $.value.length) {
                X({
                    type: "text",
                    value: L,
                    output: `\\${L}`
                });
                continue;
            }
            if (0 === q.brackets) {
                if (!0 === r.strictBrackets) throw new SyntaxError(d("opening", "["));
                X({
                    type: "text",
                    value: L,
                    output: `\\${L}`
                });
                continue;
            }
            Q("brackets");
            const e = $.value.slice(1);
            if (!0 === $.posix || "^" !== e[0] || e.includes("/") || (L = `/${L}`), $.value += L, K({
                value: L
            }), !1 === r.literalBrackets || s.hasRegexChars(e)) continue;
            const t = s.escapeRegex($.value);
            if (q.output = q.output.slice(0, -$.value.length), !0 === r.literalBrackets) {
                q.output += t, $.value = t;
                continue;
            }
            $.value = `(${g}${t}|${$.value})`, q.output += $.value;
            continue;
        }
        if ("{" === L && !0 !== r.nobrace) {
            Y("braces");
            const e = {
                type: "brace",
                value: L,
                output: "(",
                outputIndex: q.output.length,
                tokensIndex: q.tokens.length
            };
            F.push(e), X(e);
            continue;
        }
        if ("}" === L) {
            const e = F[F.length - 1];
            if (!0 === r.nobrace || !e) {
                X({
                    type: "text",
                    value: L,
                    output: L
                });
                continue;
            }
            let t = ")";
            if (!0 === e.dots) {
                const e = f.slice(), n = [];
                for(let t = e.length - 1; t >= 0 && (f.pop(), "brace" !== e[t].type); t--)"dots" !== e[t].type && n.unshift(e[t].value);
                t = u(n, r), q.backtrack = !0;
            }
            if (!0 !== e.comma && !0 !== e.dots) {
                const r = q.output.slice(0, e.outputIndex), n = q.tokens.slice(e.tokensIndex);
                e.value = e.output = "\\{", L = t = "\\}", q.output = r;
                for (const e of n)q.output += e.output || e.value;
            }
            X({
                type: "brace",
                value: L,
                output: t
            }), Q("braces"), F.pop();
            continue;
        }
        if ("|" === L) {
            N.length > 0 && N[N.length - 1].conditions++, X({
                type: "text",
                value: L
            });
            continue;
        }
        if ("," === L) {
            let e = L;
            const t = F[F.length - 1];
            t && "braces" === U[U.length - 1] && (t.comma = !0, e = "|"), X({
                type: "comma",
                value: L,
                output: e
            });
            continue;
        }
        if ("/" === L) {
            if ("dot" === $.type && q.index === q.start + 1) {
                q.start = q.index + 1, q.consumed = "", q.output = "", f.pop(), $ = h;
                continue;
            }
            X({
                type: "slash",
                value: L,
                output: k
            });
            continue;
        }
        if ("." === L) {
            if (q.braces > 0 && "dot" === $.type) {
                "." === $.value && ($.output = b);
                const e = F[F.length - 1];
                $.type = "dots", $.output += L, $.value += L, e.dots = !0;
                continue;
            }
            if (q.braces + q.parens === 0 && "bos" !== $.type && "slash" !== $.type) {
                X({
                    type: "text",
                    value: L,
                    output: b
                });
                continue;
            }
            X({
                type: "dot",
                value: L,
                output: b
            });
            continue;
        }
        if ("?" === L) {
            if (!($ && "(" === $.value) && !0 !== r.noextglob && "(" === G() && "?" !== G(2)) {
                Z("qmark", L);
                continue;
            }
            if ($ && "paren" === $.type) {
                const e = G();
                let t = L;
                ("(" === $.value && !/[!=<:]/.test(e) || "<" === e && !/<([!=]|\w+>)/.test(W())) && (t = `\\${L}`), X({
                    type: "text",
                    value: L,
                    output: t
                });
                continue;
            }
            if (!0 !== r.dot && ("slash" === $.type || "bos" === $.type)) {
                X({
                    type: "qmark",
                    value: L,
                    output: A
                });
                continue;
            }
            X({
                type: "qmark",
                value: L,
                output: P
            });
            continue;
        }
        if ("!" === L) {
            if (!0 !== r.noextglob && "(" === G() && ("?" !== G(2) || !/[!=<:]/.test(G(3)))) {
                Z("negate", L);
                continue;
            }
            if (!0 !== r.nonegate && 0 === q.index) {
                V();
                continue;
            }
        }
        if ("+" === L) {
            if (!0 !== r.noextglob && "(" === G() && "?" !== G(2)) {
                Z("plus", L);
                continue;
            }
            if ($ && "(" === $.value || !1 === r.regex) {
                X({
                    type: "plus",
                    value: L,
                    output: S
                });
                continue;
            }
            if ($ && ("bracket" === $.type || "paren" === $.type || "brace" === $.type) || q.parens > 0) {
                X({
                    type: "plus",
                    value: L
                });
                continue;
            }
            X({
                type: "plus",
                value: S
            });
            continue;
        }
        if ("@" === L) {
            if (!0 !== r.noextglob && "(" === G() && "?" !== G(2)) {
                X({
                    type: "at",
                    extglob: !0,
                    value: L,
                    output: ""
                });
                continue;
            }
            X({
                type: "text",
                value: L
            });
            continue;
        }
        if ("*" !== L) {
            "$" !== L && "^" !== L || (L = `\\${L}`);
            const e = a.exec(W());
            e && (L += e[0], q.index += e[0].length), X({
                type: "text",
                value: L
            });
            continue;
        }
        if ($ && ("globstar" === $.type || !0 === $.star)) {
            $.type = "star", $.star = !0, $.value += L, $.output = D, q.backtrack = !0, q.globstar = !0, H(L);
            continue;
        }
        let t = W();
        if (!0 !== r.noextglob && /^\([^?]/.test(t)) {
            Z("star", L);
            continue;
        }
        if ("star" === $.type) {
            if (!0 === r.noglobstar) {
                H(L);
                continue;
            }
            const n = $.prev, s = n.prev, o = "slash" === n.type || "bos" === n.type, i = s && ("star" === s.type || "globstar" === s.type);
            if (!0 === r.bash && (!o || t[0] && "/" !== t[0])) {
                X({
                    type: "star",
                    value: L,
                    output: ""
                });
                continue;
            }
            const a = q.braces > 0 && ("comma" === n.type || "brace" === n.type), c = N.length && ("pipe" === n.type || "paren" === n.type);
            if (!o && "paren" !== n.type && !a && !c) {
                X({
                    type: "star",
                    value: L,
                    output: ""
                });
                continue;
            }
            for(; "/**" === t.slice(0, 3);){
                const r = e[q.index + 4];
                if (r && "/" !== r) break;
                t = t.slice(3), H("/**", 3);
            }
            if ("bos" === n.type && j()) {
                $.type = "globstar", $.value += L, $.output = J(r), q.output = $.output, q.globstar = !0, H(L);
                continue;
            }
            if ("slash" === n.type && "bos" !== n.prev.type && !i && j()) {
                q.output = q.output.slice(0, -(n.output + $.output).length), n.output = `(?:${n.output}`, $.type = "globstar", $.output = J(r) + (r.strictSlashes ? ")" : "|$)"), $.value += L, q.globstar = !0, q.output += n.output + $.output, H(L);
                continue;
            }
            if ("slash" === n.type && "bos" !== n.prev.type && "/" === t[0]) {
                const e = void 0 !== t[1] ? "|$" : "";
                q.output = q.output.slice(0, -(n.output + $.output).length), n.output = `(?:${n.output}`, $.type = "globstar", $.output = `${J(r)}${k}|${k}${e})`, $.value += L, q.output += n.output + $.output, q.globstar = !0, H(L + z()), X({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            if ("bos" === n.type && "/" === t[0]) {
                $.type = "globstar", $.value += L, $.output = `(?:^|${k}|${J(r)}${k})`, q.output = $.output, q.globstar = !0, H(L + z()), X({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            q.output = q.output.slice(0, -$.output.length), $.type = "globstar", $.output = J(r), $.value += L, q.output += $.output, q.globstar = !0, H(L);
            continue;
        }
        const n = {
            type: "star",
            value: L,
            output: D
        };
        !0 !== r.bash ? !$ || "bracket" !== $.type && "paren" !== $.type || !0 !== r.regex ? (q.index !== q.start && "slash" !== $.type && "dot" !== $.type || ("dot" === $.type ? (q.output += T, $.output += T) : !0 === r.dot ? (q.output += C, $.output += C) : (q.output += O, $.output += O), "*" !== G() && (q.output += x, $.output += x)), X(n)) : (n.output = L, X(n)) : (n.output = ".*?", "bos" !== $.type && "slash" !== $.type || (n.output = O + n.output), X(n));
    }
    for(; q.brackets > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
        q.output = s.escapeLast(q.output, "["), Q("brackets");
    }
    for(; q.parens > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", ")"));
        q.output = s.escapeLast(q.output, "("), Q("parens");
    }
    for(; q.braces > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "}"));
        q.output = s.escapeLast(q.output, "{"), Q("braces");
    }
    if (!0 === r.strictSlashes || "star" !== $.type && "bracket" !== $.type || X({
        type: "maybe_slash",
        value: "",
        output: `${k}?`
    }), !0 === q.backtrack) {
        q.output = "";
        for (const e of q.tokens)q.output += null != e.output ? e.output : e.value, e.suffix && (q.output += e.suffix);
    }
    return q;
};
w.fastpaths = (e, t)=>{
    const r = {
        ...t
    }, i = "number" == typeof r.maxLength ? Math.min(o, r.maxLength) : o, a = e.length;
    if (a > i) throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${i}`);
    e = l[e] || e;
    const { DOT_LITERAL: c, SLASH_LITERAL: u, ONE_CHAR: d, DOTS_SLASH: p, NO_DOT: m, NO_DOTS: h, NO_DOTS_SLASH: f, STAR: g, START_ANCHOR: y } = n.globChars(r.windows), w = r.dot ? h : m, v = r.dot ? f : m, _ = r.capture ? "" : "?:";
    let b = !0 === r.bash ? ".*?" : g;
    r.capture && (b = `(${b})`);
    const S = (e)=>!0 === e.noglobstar ? b : `(${_}(?:(?!${y}${e.dot ? p : c}).)*?)`, k = (e)=>{
        switch(e){
            case "*":
                return `${w}${d}${b}`;
            case ".*":
                return `${c}${d}${b}`;
            case "*.*":
                return `${w}${b}${c}${d}${b}`;
            case "*/*":
                return `${w}${b}${u}${d}${v}${b}`;
            case "**":
                return w + S(r);
            case "**/*":
                return `(?:${w}${S(r)}${u})?${v}${d}${b}`;
            case "**/*.*":
                return `(?:${w}${S(r)}${u})?${v}${b}${c}${d}${b}`;
            case "**/.*":
                return `(?:${w}${S(r)}${u})?${c}${d}${b}`;
            default:
                {
                    const t = /^(.*?)\.(\w+)$/.exec(e);
                    if (!t) return;
                    const r = k(t[1]);
                    if (!r) return;
                    return r + c + t[2];
                }
        }
    }, x = s.removePrefix(e, {
        negated: !1,
        prefix: ""
    });
    let E = k(x);
    return E && !0 !== r.strictSlashes && (E += `${u}?`), E;
}, module.exports = w;
