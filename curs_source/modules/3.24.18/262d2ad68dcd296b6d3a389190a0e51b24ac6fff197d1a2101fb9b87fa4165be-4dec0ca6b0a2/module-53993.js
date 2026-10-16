"use strict";
const n = require("./module-94443.js"), o = require("./module-68139.js"), { MAX_LENGTH: s, POSIX_REGEX_SOURCE: i, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: l, REPLACEMENTS: c } = n, u = (e, t)=>{
    if ("function" == typeof t.expandRange) return t.expandRange(...e, t);
    e.sort();
    const r = `[${e.join("-")}]`;
    try {
        new RegExp(r);
    } catch (t) {
        return e.map((e)=>o.escapeRegex(e)).join("..");
    }
    return r;
}, d = (e, t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`, p = (e)=>{
    const t = [];
    let r = 0, n = 0, o = 0, s = "", i = !1;
    for (const a of e)if (!0 !== i) if ("\\" !== a) if ('"' !== a) {
        if (0 === o) {
            if ("[" === a) r++;
            else if ("]" === a && r > 0) r--;
            else if (0 === r) {
                if ("(" === a) n++;
                else if (")" === a && n > 0) n--;
                else if ("|" === a && 0 === n) {
                    t.push(s), s = "";
                    continue;
                }
            }
        }
        s += a;
    } else o = 1 === o ? 0 : 1, s += a;
    else s += a, i = !0;
    else s += a, i = !1;
    return t.push(s), t;
}, h = (e)=>{
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
}, m = (e, t = !0)=>{
    if ("+" !== e[0] && "*" !== e[0] || "(" !== e[1]) return;
    let r = 0, n = 0, o = 0, s = !1;
    for(let i = 1; i < e.length; i++){
        const a = e[i];
        if (!0 !== s) if ("\\" !== a) if ('"' !== a) {
            if (1 !== o) if ("[" !== a) {
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
        } else o = 1 === o ? 0 : 1;
        else s = !0;
        else s = !1;
    }
}, f = (e)=>{
    let t = 0;
    const r = [];
    for(; t < e.length;){
        const n = m(e.slice(t), !1);
        if (!n || "*" !== n.type) return;
        const o = p(n.body).map((e)=>e.trim());
        if (1 !== o.length) return;
        const s = h(o[0]);
        if (!s || 1 !== s.length) return;
        r.push(s), t += n.end + 1;
    }
    if (!(r.length < 1)) return r;
}, g = (e)=>{
    let t = 0, r = e.trim(), n = m(r);
    for(; n;)t++, r = n.body.trim(), n = m(r);
    return t;
}, y = (e, t)=>{
    if (!1 === t.maxExtglobRecursion) return {
        risky: !1
    };
    const r = "number" == typeof t.maxExtglobRecursion ? t.maxExtglobRecursion : n.DEFAULT_MAX_EXTGLOB_RECURSION, s = p(e).map((e)=>e.trim());
    if (s.length > 1 && (s.some((e)=>"" === e) || s.some((e)=>/^[*?]+$/.test(e)) || ((e)=>{
        const t = e.map(h).filter(Boolean);
        for(let e = 0; e < t.length; e++)for(let r = e + 1; r < t.length; r++){
            const n = t[e], o = t[r], s = n[0];
            if (s && n === s.repeat(n.length) && o === s.repeat(o.length) && (n === o || n.startsWith(o) || o.startsWith(n))) return !0;
        }
        return !1;
    })(s))) return {
        risky: !0
    };
    const i = [];
    let a = !1, l = !0;
    for (const e of s){
        const t = f(e);
        if (t) {
            a = !0, i.push(...t);
            continue;
        }
        const n = h(e);
        if (n && 1 === n.length) i.push(n);
        else if (l = !1, g(e) > r) return {
            risky: !0
        };
    }
    return a ? l ? {
        risky: !0,
        safeOutput: (c = [
            ...new Set(i)
        ], `${1 === c.length ? o.escapeRegex(c[0]) : `[${c.map((e)=>o.escapeRegex(e)).join("")}]`}*`)
    } : {
        risky: !0
    } : {
        risky: !1
    };
    var c;
}, v = (e, t)=>{
    if ("string" != typeof e) throw new TypeError("Expected a string");
    e = c[e] || e;
    const r = {
        ...t
    }, p = "number" == typeof r.maxLength ? Math.min(s, r.maxLength) : s;
    let h = e.length;
    if (h > p) throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${p}`);
    const m = {
        type: "bos",
        value: "",
        output: r.prepend || ""
    }, f = [
        m
    ], g = r.capture ? "" : "?:", w = n.globChars(r.windows), b = n.extglobChars(w), { DOT_LITERAL: _, PLUS_LITERAL: S, SLASH_LITERAL: x, ONE_CHAR: k, DOTS_SLASH: E, NO_DOT: T, NO_DOT_SLASH: C, NO_DOTS_SLASH: I, QMARK: A, QMARK_NO_DOT: P, STAR: M, START_ANCHOR: R } = w, O = (e)=>`(${g}(?:(?!${R}${e.dot ? E : _}).)*?)`, D = r.dot ? "" : T, N = r.dot ? A : P;
    let F = !0 === r.bash ? O(r) : M;
    r.capture && (F = `(${F})`), "boolean" == typeof r.noext && (r.noextglob = r.noext);
    const L = {
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
    e = o.removePrefix(e, L), h = e.length;
    const U = [], B = [], $ = [];
    let q, j = m;
    const J = ()=>L.index === h - 1, z = L.peek = (t = 1)=>e[L.index + t], H = L.advance = ()=>e[++L.index] || "", W = ()=>e.slice(L.index + 1), G = (e = "", t = 0)=>{
        L.consumed += e, L.index += t;
    }, Y = (e)=>{
        L.output += null != e.output ? e.output : e.value, G(e.value);
    }, V = ()=>{
        let e = 1;
        for(; "!" === z() && ("(" !== z(2) || "?" === z(3));)H(), L.start++, e++;
        return e % 2 != 0 && (L.negated = !0, L.start++, !0);
    }, K = (e)=>{
        L[e]++, $.push(e);
    }, Z = (e)=>{
        L[e]--, $.pop();
    }, X = (e)=>{
        if ("globstar" === j.type) {
            const t = L.braces > 0 && ("comma" === e.type || "brace" === e.type), r = !0 === e.extglob || U.length && ("pipe" === e.type || "paren" === e.type);
            "slash" === e.type || "paren" === e.type || t || r || (L.output = L.output.slice(0, -j.output.length), j.type = "star", j.value = "*", j.output = F, L.output += j.output);
        }
        if (U.length && "paren" !== e.type && (U[U.length - 1].inner += e.value), (e.value || e.output) && Y(e), j && "text" === j.type && "text" === e.type) return j.output = (j.output || j.value) + e.value, void (j.value += e.value);
        e.prev = j, f.push(e), j = e;
    }, Q = (e, t)=>{
        const n = {
            ...b[t],
            conditions: 1,
            inner: ""
        };
        n.prev = j, n.parens = L.parens, n.output = L.output, n.startIndex = L.index, n.tokensIndex = f.length;
        const o = (r.capture ? "(" : "") + n.open;
        K("parens"), X({
            type: e,
            value: t,
            output: L.output ? "" : k
        }), X({
            type: "paren",
            extglob: !0,
            value: H(),
            output: o
        }), U.push(n);
    }, ee = (n)=>{
        const s = e.slice(n.startIndex, L.index + 1), i = e.slice(n.startIndex + 2, L.index), a = y(i, r);
        if (("plus" === n.type || "star" === n.type) && a.risky) {
            const e = a.safeOutput ? (n.output ? "" : k) + (r.capture ? `(${a.safeOutput})` : a.safeOutput) : void 0, t = f[n.tokensIndex];
            t.type = "text", t.value = s, t.output = e || o.escapeRegex(s);
            for(let e = n.tokensIndex + 1; e < f.length; e++)f[e].value = "", f[e].output = "", delete f[e].suffix;
            return L.output = n.output + t.output, L.backtrack = !0, X({
                type: "paren",
                extglob: !0,
                value: q,
                output: ""
            }), void Z("parens");
        }
        let l, c = n.close + (r.capture ? ")" : "");
        if ("negate" === n.type) {
            let e = F;
            if (n.inner && n.inner.length > 1 && n.inner.includes("/") && (e = O(r)), (e !== F || J() || /^\)+$/.test(W())) && (c = n.close = `)$))${e}`), n.inner.includes("*") && (l = W()) && /^\.[^\\/.]+$/.test(l)) {
                const r = v(l, {
                    ...t,
                    fastpaths: !1
                }).output;
                c = n.close = `)${r})${e})`;
            }
            "bos" === n.prev.type && (L.negatedExtglob = !0);
        }
        X({
            type: "paren",
            extglob: !0,
            value: q,
            output: c
        }), Z("parens");
    };
    if (!1 !== r.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e)) {
        let n = !1, s = e.replace(l, (e, t, r, o, s, i)=>"\\" === o ? (n = !0, e) : "?" === o ? t ? t + o + (s ? A.repeat(s.length) : "") : 0 === i ? N + (s ? A.repeat(s.length) : "") : A.repeat(r.length) : "." === o ? _.repeat(r.length) : "*" === o ? t ? t + o + (s ? F : "") : F : t ? e : `\\${e}`);
        return !0 === n && (s = !0 === r.unescape ? s.replace(/\\/g, "") : s.replace(/\\+/g, (e)=>e.length % 2 == 0 ? "\\\\" : e ? "\\" : "")), s === e && !0 === r.contains ? (L.output = e, L) : (L.output = o.wrapOutput(s, L, t), L);
    }
    for(; !J();){
        if (q = H(), "\0" === q) continue;
        if ("\\" === q) {
            const e = z();
            if ("/" === e && !0 !== r.bash) continue;
            if ("." === e || ";" === e) continue;
            if (!e) {
                q += "\\", X({
                    type: "text",
                    value: q
                });
                continue;
            }
            const t = /^\\+/.exec(W());
            let n = 0;
            if (t && t[0].length > 2 && (n = t[0].length, L.index += n, n % 2 != 0 && (q += "\\")), !0 === r.unescape ? q = H() : q += H(), 0 === L.brackets) {
                X({
                    type: "text",
                    value: q
                });
                continue;
            }
        }
        if (L.brackets > 0 && ("]" !== q || "[" === j.value || "[^" === j.value)) {
            if (!1 !== r.posix && ":" === q) {
                const e = j.value.slice(1);
                if (e.includes("[") && (j.posix = !0, e.includes(":"))) {
                    const e = j.value.lastIndexOf("["), t = j.value.slice(0, e), r = j.value.slice(e + 2), n = i[r];
                    if (n) {
                        j.value = t + n, L.backtrack = !0, H(), m.output || 1 !== f.indexOf(j) || (m.output = k);
                        continue;
                    }
                }
            }
            ("[" === q && ":" !== z() || "-" === q && "]" === z()) && (q = `\\${q}`), "]" !== q || "[" !== j.value && "[^" !== j.value || (q = `\\${q}`), !0 === r.posix && "!" === q && "[" === j.value && (q = "^"), j.value += q, Y({
                value: q
            });
            continue;
        }
        if (1 === L.quotes && '"' !== q) {
            q = o.escapeRegex(q), j.value += q, Y({
                value: q
            });
            continue;
        }
        if ('"' === q) {
            L.quotes = 1 === L.quotes ? 0 : 1, !0 === r.keepQuotes && X({
                type: "text",
                value: q
            });
            continue;
        }
        if ("(" === q) {
            K("parens"), X({
                type: "paren",
                value: q
            });
            continue;
        }
        if (")" === q) {
            if (0 === L.parens && !0 === r.strictBrackets) throw new SyntaxError(d("opening", "("));
            const e = U[U.length - 1];
            if (e && L.parens === e.parens + 1) {
                ee(U.pop());
                continue;
            }
            X({
                type: "paren",
                value: q,
                output: L.parens ? ")" : "\\)"
            }), Z("parens");
            continue;
        }
        if ("[" === q) {
            if (!0 !== r.nobracket && W().includes("]")) K("brackets");
            else {
                if (!0 !== r.nobracket && !0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
                q = `\\${q}`;
            }
            X({
                type: "bracket",
                value: q
            });
            continue;
        }
        if ("]" === q) {
            if (!0 === r.nobracket || j && "bracket" === j.type && 1 === j.value.length) {
                X({
                    type: "text",
                    value: q,
                    output: `\\${q}`
                });
                continue;
            }
            if (0 === L.brackets) {
                if (!0 === r.strictBrackets) throw new SyntaxError(d("opening", "["));
                X({
                    type: "text",
                    value: q,
                    output: `\\${q}`
                });
                continue;
            }
            Z("brackets");
            const e = j.value.slice(1);
            if (!0 === j.posix || "^" !== e[0] || e.includes("/") || (q = `/${q}`), j.value += q, Y({
                value: q
            }), !1 === r.literalBrackets || o.hasRegexChars(e)) continue;
            const t = o.escapeRegex(j.value);
            if (L.output = L.output.slice(0, -j.value.length), !0 === r.literalBrackets) {
                L.output += t, j.value = t;
                continue;
            }
            j.value = `(${g}${t}|${j.value})`, L.output += j.value;
            continue;
        }
        if ("{" === q && !0 !== r.nobrace) {
            K("braces");
            const e = {
                type: "brace",
                value: q,
                output: "(",
                outputIndex: L.output.length,
                tokensIndex: L.tokens.length
            };
            B.push(e), X(e);
            continue;
        }
        if ("}" === q) {
            const e = B[B.length - 1];
            if (!0 === r.nobrace || !e) {
                X({
                    type: "text",
                    value: q,
                    output: q
                });
                continue;
            }
            let t = ")";
            if (!0 === e.dots) {
                const e = f.slice(), n = [];
                for(let t = e.length - 1; t >= 0 && (f.pop(), "brace" !== e[t].type); t--)"dots" !== e[t].type && n.unshift(e[t].value);
                t = u(n, r), L.backtrack = !0;
            }
            if (!0 !== e.comma && !0 !== e.dots) {
                const r = L.output.slice(0, e.outputIndex), n = L.tokens.slice(e.tokensIndex);
                e.value = e.output = "\\{", q = t = "\\}", L.output = r;
                for (const e of n)L.output += e.output || e.value;
            }
            X({
                type: "brace",
                value: q,
                output: t
            }), Z("braces"), B.pop();
            continue;
        }
        if ("|" === q) {
            U.length > 0 && U[U.length - 1].conditions++, X({
                type: "text",
                value: q
            });
            continue;
        }
        if ("," === q) {
            let e = q;
            const t = B[B.length - 1];
            t && "braces" === $[$.length - 1] && (t.comma = !0, e = "|"), X({
                type: "comma",
                value: q,
                output: e
            });
            continue;
        }
        if ("/" === q) {
            if ("dot" === j.type && L.index === L.start + 1) {
                L.start = L.index + 1, L.consumed = "", L.output = "", f.pop(), j = m;
                continue;
            }
            X({
                type: "slash",
                value: q,
                output: x
            });
            continue;
        }
        if ("." === q) {
            if (L.braces > 0 && "dot" === j.type) {
                "." === j.value && (j.output = _);
                const e = B[B.length - 1];
                j.type = "dots", j.output += q, j.value += q, e.dots = !0;
                continue;
            }
            if (L.braces + L.parens === 0 && "bos" !== j.type && "slash" !== j.type) {
                X({
                    type: "text",
                    value: q,
                    output: _
                });
                continue;
            }
            X({
                type: "dot",
                value: q,
                output: _
            });
            continue;
        }
        if ("?" === q) {
            if (!(j && "(" === j.value) && !0 !== r.noextglob && "(" === z() && "?" !== z(2)) {
                Q("qmark", q);
                continue;
            }
            if (j && "paren" === j.type) {
                const e = z();
                let t = q;
                ("(" === j.value && !/[!=<:]/.test(e) || "<" === e && !/<([!=]|\w+>)/.test(W())) && (t = `\\${q}`), X({
                    type: "text",
                    value: q,
                    output: t
                });
                continue;
            }
            if (!0 !== r.dot && ("slash" === j.type || "bos" === j.type)) {
                X({
                    type: "qmark",
                    value: q,
                    output: P
                });
                continue;
            }
            X({
                type: "qmark",
                value: q,
                output: A
            });
            continue;
        }
        if ("!" === q) {
            if (!0 !== r.noextglob && "(" === z() && ("?" !== z(2) || !/[!=<:]/.test(z(3)))) {
                Q("negate", q);
                continue;
            }
            if (!0 !== r.nonegate && 0 === L.index) {
                V();
                continue;
            }
        }
        if ("+" === q) {
            if (!0 !== r.noextglob && "(" === z() && "?" !== z(2)) {
                Q("plus", q);
                continue;
            }
            if (j && "(" === j.value || !1 === r.regex) {
                X({
                    type: "plus",
                    value: q,
                    output: S
                });
                continue;
            }
            if (j && ("bracket" === j.type || "paren" === j.type || "brace" === j.type) || L.parens > 0) {
                X({
                    type: "plus",
                    value: q
                });
                continue;
            }
            X({
                type: "plus",
                value: S
            });
            continue;
        }
        if ("@" === q) {
            if (!0 !== r.noextglob && "(" === z() && "?" !== z(2)) {
                X({
                    type: "at",
                    extglob: !0,
                    value: q,
                    output: ""
                });
                continue;
            }
            X({
                type: "text",
                value: q
            });
            continue;
        }
        if ("*" !== q) {
            "$" !== q && "^" !== q || (q = `\\${q}`);
            const e = a.exec(W());
            e && (q += e[0], L.index += e[0].length), X({
                type: "text",
                value: q
            });
            continue;
        }
        if (j && ("globstar" === j.type || !0 === j.star)) {
            j.type = "star", j.star = !0, j.value += q, j.output = F, L.backtrack = !0, L.globstar = !0, G(q);
            continue;
        }
        let t = W();
        if (!0 !== r.noextglob && /^\([^?]/.test(t)) {
            Q("star", q);
            continue;
        }
        if ("star" === j.type) {
            if (!0 === r.noglobstar) {
                G(q);
                continue;
            }
            const n = j.prev, o = n.prev, s = "slash" === n.type || "bos" === n.type, i = o && ("star" === o.type || "globstar" === o.type);
            if (!0 === r.bash && (!s || t[0] && "/" !== t[0])) {
                X({
                    type: "star",
                    value: q,
                    output: ""
                });
                continue;
            }
            const a = L.braces > 0 && ("comma" === n.type || "brace" === n.type), l = U.length && ("pipe" === n.type || "paren" === n.type);
            if (!s && "paren" !== n.type && !a && !l) {
                X({
                    type: "star",
                    value: q,
                    output: ""
                });
                continue;
            }
            for(; "/**" === t.slice(0, 3);){
                const r = e[L.index + 4];
                if (r && "/" !== r) break;
                t = t.slice(3), G("/**", 3);
            }
            if ("bos" === n.type && J()) {
                j.type = "globstar", j.value += q, j.output = O(r), L.output = j.output, L.globstar = !0, G(q);
                continue;
            }
            if ("slash" === n.type && "bos" !== n.prev.type && !i && J()) {
                L.output = L.output.slice(0, -(n.output + j.output).length), n.output = `(?:${n.output}`, j.type = "globstar", j.output = O(r) + (r.strictSlashes ? ")" : "|$)"), j.value += q, L.globstar = !0, L.output += n.output + j.output, G(q);
                continue;
            }
            if ("slash" === n.type && "bos" !== n.prev.type && "/" === t[0]) {
                const e = void 0 !== t[1] ? "|$" : "";
                L.output = L.output.slice(0, -(n.output + j.output).length), n.output = `(?:${n.output}`, j.type = "globstar", j.output = `${O(r)}${x}|${x}${e})`, j.value += q, L.output += n.output + j.output, L.globstar = !0, G(q + H()), X({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            if ("bos" === n.type && "/" === t[0]) {
                j.type = "globstar", j.value += q, j.output = `(?:^|${x}|${O(r)}${x})`, L.output = j.output, L.globstar = !0, G(q + H()), X({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            L.output = L.output.slice(0, -j.output.length), j.type = "globstar", j.output = O(r), j.value += q, L.output += j.output, L.globstar = !0, G(q);
            continue;
        }
        const n = {
            type: "star",
            value: q,
            output: F
        };
        !0 !== r.bash ? !j || "bracket" !== j.type && "paren" !== j.type || !0 !== r.regex ? (L.index !== L.start && "slash" !== j.type && "dot" !== j.type || ("dot" === j.type ? (L.output += C, j.output += C) : !0 === r.dot ? (L.output += I, j.output += I) : (L.output += D, j.output += D), "*" !== z() && (L.output += k, j.output += k)), X(n)) : (n.output = q, X(n)) : (n.output = ".*?", "bos" !== j.type && "slash" !== j.type || (n.output = D + n.output), X(n));
    }
    for(; L.brackets > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "]"));
        L.output = o.escapeLast(L.output, "["), Z("brackets");
    }
    for(; L.parens > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", ")"));
        L.output = o.escapeLast(L.output, "("), Z("parens");
    }
    for(; L.braces > 0;){
        if (!0 === r.strictBrackets) throw new SyntaxError(d("closing", "}"));
        L.output = o.escapeLast(L.output, "{"), Z("braces");
    }
    if (!0 === r.strictSlashes || "star" !== j.type && "bracket" !== j.type || X({
        type: "maybe_slash",
        value: "",
        output: `${x}?`
    }), !0 === L.backtrack) {
        L.output = "";
        for (const e of L.tokens)L.output += null != e.output ? e.output : e.value, e.suffix && (L.output += e.suffix);
    }
    return L;
};
v.fastpaths = (e, t)=>{
    const r = {
        ...t
    }, i = "number" == typeof r.maxLength ? Math.min(s, r.maxLength) : s, a = e.length;
    if (a > i) throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${i}`);
    e = c[e] || e;
    const { DOT_LITERAL: l, SLASH_LITERAL: u, ONE_CHAR: d, DOTS_SLASH: p, NO_DOT: h, NO_DOTS: m, NO_DOTS_SLASH: f, STAR: g, START_ANCHOR: y } = n.globChars(r.windows), v = r.dot ? m : h, w = r.dot ? f : h, b = r.capture ? "" : "?:";
    let _ = !0 === r.bash ? ".*?" : g;
    r.capture && (_ = `(${_})`);
    const S = (e)=>!0 === e.noglobstar ? _ : `(${b}(?:(?!${y}${e.dot ? p : l}).)*?)`, x = (e)=>{
        switch(e){
            case "*":
                return `${v}${d}${_}`;
            case ".*":
                return `${l}${d}${_}`;
            case "*.*":
                return `${v}${_}${l}${d}${_}`;
            case "*/*":
                return `${v}${_}${u}${d}${w}${_}`;
            case "**":
                return v + S(r);
            case "**/*":
                return `(?:${v}${S(r)}${u})?${w}${d}${_}`;
            case "**/*.*":
                return `(?:${v}${S(r)}${u})?${w}${_}${l}${d}${_}`;
            case "**/.*":
                return `(?:${v}${S(r)}${u})?${l}${d}${_}`;
            default:
                {
                    const t = /^(.*?)\.(\w+)$/.exec(e);
                    if (!t) return;
                    const r = x(t[1]);
                    if (!r) return;
                    return r + l + t[2];
                }
        }
    }, k = o.removePrefix(e, {
        negated: !1,
        prefix: ""
    });
    let E = x(k);
    return E && !0 !== r.strictSlashes && (E += `${u}?`), E;
}, module.exports = v;
