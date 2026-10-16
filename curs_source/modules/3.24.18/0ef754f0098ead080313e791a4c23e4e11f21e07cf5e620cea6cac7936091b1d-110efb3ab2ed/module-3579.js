"use strict";
const t = require("./module-557.js"), s = require("./module-8977.js"), { MAX_LENGTH: o, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: i, REGEX_SPECIAL_CHARS_BACKREF: l, REPLACEMENTS: d } = t, m = (e, a)=>{
    if ("function" == typeof a.expandRange) return a.expandRange(...e, a);
    e.sort();
    const n = `[${e.join("-")}]`;
    try {
        new RegExp(n);
    } catch (a) {
        return e.map((e)=>s.escapeRegex(e)).join("..");
    }
    return n;
}, c = (e, a)=>`Missing ${e}: "${a}" - use "\\\\${a}" to match literal characters`, p = (e)=>{
    const a = [];
    let n = 0, t = 0, s = 0, o = "", r = !1;
    for (const i of e)if (!0 !== r) if ("\\" !== i) if ('"' !== i) {
        if (0 === s) {
            if ("[" === i) n++;
            else if ("]" === i && n > 0) n--;
            else if (0 === n) {
                if ("(" === i) t++;
                else if (")" === i && t > 0) t--;
                else if ("|" === i && 0 === t) {
                    a.push(o), o = "";
                    continue;
                }
            }
        }
        o += i;
    } else s = 1 === s ? 0 : 1, o += i;
    else o += i, r = !0;
    else o += i, r = !1;
    return a.push(o), a;
}, A = (e)=>{
    let a = e.trim(), n = !0;
    for(; !0 === n;)n = !1, /^@\([^\\()[\]{}|]+\)$/.test(a) && (a = a.slice(2, -1), n = !0);
    if (((e)=>{
        let a = !1;
        for (const n of e)if (!0 !== a) if ("\\" !== n) {
            if (/[?*+@!()[\]{}]/.test(n)) return !1;
        } else a = !0;
        else a = !1;
        return !0;
    })(a)) return a.replace(/\\(.)/g, "$1");
}, u = (e, a = !0)=>{
    if ("+" !== e[0] && "*" !== e[0] || "(" !== e[1]) return;
    let n = 0, t = 0, s = 0, o = !1;
    for(let r = 1; r < e.length; r++){
        const i = e[r];
        if (!0 !== o) if ("\\" !== i) if ('"' !== i) {
            if (1 !== s) if ("[" !== i) {
                if ("]" === i && n > 0) n--;
                else if (!(n > 0)) if ("(" !== i) {
                    if (")" === i && (t--, 0 === t)) {
                        if (!0 === a && r !== e.length - 1) return;
                        return {
                            type: e[0],
                            body: e.slice(2, r),
                            end: r
                        };
                    }
                } else t++;
            } else n++;
        } else s = 1 === s ? 0 : 1;
        else o = !0;
        else o = !1;
    }
}, g = (e)=>{
    let a = 0;
    const n = [];
    for(; a < e.length;){
        const t = u(e.slice(a), !1);
        if (!t || "*" !== t.type) return;
        const s = p(t.body).map((e)=>e.trim());
        if (1 !== s.length) return;
        const o = A(s[0]);
        if (!o || 1 !== o.length) return;
        n.push(o), a += t.end + 1;
    }
    if (n.length < 1) return;
    return `${1 === n.length ? s.escapeRegex(n[0]) : `[${n.map((e)=>s.escapeRegex(e)).join("")}]`}*`;
}, T = (e)=>{
    let a = 0, n = e.trim(), t = u(n);
    for(; t;)a++, n = t.body.trim(), t = u(n);
    return a;
}, h = (e, a)=>{
    if (!1 === a.maxExtglobRecursion) return {
        risky: !1
    };
    const n = "number" == typeof a.maxExtglobRecursion ? a.maxExtglobRecursion : t.DEFAULT_MAX_EXTGLOB_RECURSION, s = p(e).map((e)=>e.trim());
    if (s.length > 1 && (s.some((e)=>"" === e) || s.some((e)=>/^[*?]+$/.test(e)) || ((e)=>{
        const a = e.map(A).filter(Boolean);
        for(let e = 0; e < a.length; e++)for(let n = e + 1; n < a.length; n++){
            const t = a[e], s = a[n], o = t[0];
            if (o && t === o.repeat(t.length) && s === o.repeat(s.length) && (t === s || t.startsWith(s) || s.startsWith(t))) return !0;
        }
        return !1;
    })(s))) return {
        risky: !0
    };
    for (const e of s){
        const a = g(e);
        if (a) return {
            risky: !0,
            safeOutput: a
        };
        if (T(e) > n) return {
            risky: !0
        };
    }
    return {
        risky: !1
    };
}, k = (e, a)=>{
    if ("string" != typeof e) throw new TypeError("Expected a string");
    e = d[e] || e;
    const n = {
        ...a
    }, p = "number" == typeof n.maxLength ? Math.min(o, n.maxLength) : o;
    let A = e.length;
    if (A > p) throw new SyntaxError(`Input length: ${A}, exceeds maximum allowed length: ${p}`);
    const u = {
        type: "bos",
        value: "",
        output: n.prepend || ""
    }, g = [
        u
    ], T = n.capture ? "" : "?:", _ = s.isWindows(a), E = t.globChars(_), f = t.extglobChars(E), { DOT_LITERAL: C, PLUS_LITERAL: I, SLASH_LITERAL: v, ONE_CHAR: y, DOTS_SLASH: S, NO_DOT: R, NO_DOT_SLASH: N, NO_DOTS_SLASH: B, QMARK: w, QMARK_NO_DOT: b, STAR: Q, START_ANCHOR: D } = E, M = (e)=>`(${T}(?:(?!${D}${e.dot ? S : C}).)*?)`, O = n.dot ? "" : R, U = n.dot ? w : b;
    let F = !0 === n.bash ? M(n) : Q;
    n.capture && (F = `(${F})`), "boolean" == typeof n.noext && (n.noextglob = n.noext);
    const P = {
        input: e,
        index: -1,
        start: 0,
        dot: !0 === n.dot,
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
        tokens: g
    };
    e = s.removePrefix(e, P), A = e.length;
    const L = [], G = [], x = [];
    let V, Y = u;
    const q = ()=>P.index === A - 1, H = P.peek = (a = 1)=>e[P.index + a], J = P.advance = ()=>e[++P.index] || "", W = ()=>e.slice(P.index + 1), K = (e = "", a = 0)=>{
        P.consumed += e, P.index += a;
    }, j = (e)=>{
        P.output += null != e.output ? e.output : e.value, K(e.value);
    }, $ = ()=>{
        let e = 1;
        for(; "!" === H() && ("(" !== H(2) || "?" === H(3));)J(), P.start++, e++;
        return e % 2 != 0 && (P.negated = !0, P.start++, !0);
    }, X = (e)=>{
        P[e]++, x.push(e);
    }, z = (e)=>{
        P[e]--, x.pop();
    }, Z = (e)=>{
        if ("globstar" === Y.type) {
            const a = P.braces > 0 && ("comma" === e.type || "brace" === e.type), n = !0 === e.extglob || L.length && ("pipe" === e.type || "paren" === e.type);
            "slash" === e.type || "paren" === e.type || a || n || (P.output = P.output.slice(0, -Y.output.length), Y.type = "star", Y.value = "*", Y.output = F, P.output += Y.output);
        }
        if (L.length && "paren" !== e.type && (L[L.length - 1].inner += e.value), (e.value || e.output) && j(e), Y && "text" === Y.type && "text" === e.type) return Y.value += e.value, void (Y.output = (Y.output || "") + e.value);
        e.prev = Y, g.push(e), Y = e;
    }, ee = (e, a)=>{
        const t = {
            ...f[a],
            conditions: 1,
            inner: ""
        };
        t.prev = Y, t.parens = P.parens, t.output = P.output, t.startIndex = P.index, t.tokensIndex = g.length;
        const s = (n.capture ? "(" : "") + t.open;
        X("parens"), Z({
            type: e,
            value: a,
            output: P.output ? "" : y
        }), Z({
            type: "paren",
            extglob: !0,
            value: J(),
            output: s
        }), L.push(t);
    }, ae = (t)=>{
        const o = e.slice(t.startIndex, P.index + 1), r = e.slice(t.startIndex + 2, P.index), i = h(r, n);
        if (("plus" === t.type || "star" === t.type) && i.risky) {
            const e = i.safeOutput ? (t.output ? "" : y) + (n.capture ? `(${i.safeOutput})` : i.safeOutput) : void 0, a = g[t.tokensIndex];
            a.type = "text", a.value = o, a.output = e || s.escapeRegex(o);
            for(let e = t.tokensIndex + 1; e < g.length; e++)g[e].value = "", g[e].output = "", delete g[e].suffix;
            return P.output = t.output + a.output, P.backtrack = !0, Z({
                type: "paren",
                extglob: !0,
                value: V,
                output: ""
            }), void z("parens");
        }
        let l, d = t.close + (n.capture ? ")" : "");
        if ("negate" === t.type) {
            let e = F;
            if (t.inner && t.inner.length > 1 && t.inner.includes("/") && (e = M(n)), (e !== F || q() || /^\)+$/.test(W())) && (d = t.close = `)$))${e}`), t.inner.includes("*") && (l = W()) && /^\.[^\\/.]+$/.test(l)) {
                const n = k(l, {
                    ...a,
                    fastpaths: !1
                }).output;
                d = t.close = `)${n})${e})`;
            }
            "bos" === t.prev.type && (P.negatedExtglob = !0);
        }
        Z({
            type: "paren",
            extglob: !0,
            value: V,
            output: d
        }), z("parens");
    };
    if (!1 !== n.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e)) {
        let t = !1, o = e.replace(l, (e, a, n, s, o, r)=>"\\" === s ? (t = !0, e) : "?" === s ? a ? a + s + (o ? w.repeat(o.length) : "") : 0 === r ? U + (o ? w.repeat(o.length) : "") : w.repeat(n.length) : "." === s ? C.repeat(n.length) : "*" === s ? a ? a + s + (o ? F : "") : F : a ? e : `\\${e}`);
        return !0 === t && (o = !0 === n.unescape ? o.replace(/\\/g, "") : o.replace(/\\+/g, (e)=>e.length % 2 == 0 ? "\\\\" : e ? "\\" : "")), o === e && !0 === n.contains ? (P.output = e, P) : (P.output = s.wrapOutput(o, P, a), P);
    }
    for(; !q();){
        if (V = J(), "\0" === V) continue;
        if ("\\" === V) {
            const e = H();
            if ("/" === e && !0 !== n.bash) continue;
            if ("." === e || ";" === e) continue;
            if (!e) {
                V += "\\", Z({
                    type: "text",
                    value: V
                });
                continue;
            }
            const a = /^\\+/.exec(W());
            let t = 0;
            if (a && a[0].length > 2 && (t = a[0].length, P.index += t, t % 2 != 0 && (V += "\\")), !0 === n.unescape ? V = J() : V += J(), 0 === P.brackets) {
                Z({
                    type: "text",
                    value: V
                });
                continue;
            }
        }
        if (P.brackets > 0 && ("]" !== V || "[" === Y.value || "[^" === Y.value)) {
            if (!1 !== n.posix && ":" === V) {
                const e = Y.value.slice(1);
                if (e.includes("[") && (Y.posix = !0, e.includes(":"))) {
                    const e = Y.value.lastIndexOf("["), a = Y.value.slice(0, e), n = Y.value.slice(e + 2), t = r[n];
                    if (t) {
                        Y.value = a + t, P.backtrack = !0, J(), u.output || 1 !== g.indexOf(Y) || (u.output = y);
                        continue;
                    }
                }
            }
            ("[" === V && ":" !== H() || "-" === V && "]" === H()) && (V = `\\${V}`), "]" !== V || "[" !== Y.value && "[^" !== Y.value || (V = `\\${V}`), !0 === n.posix && "!" === V && "[" === Y.value && (V = "^"), Y.value += V, j({
                value: V
            });
            continue;
        }
        if (1 === P.quotes && '"' !== V) {
            V = s.escapeRegex(V), Y.value += V, j({
                value: V
            });
            continue;
        }
        if ('"' === V) {
            P.quotes = 1 === P.quotes ? 0 : 1, !0 === n.keepQuotes && Z({
                type: "text",
                value: V
            });
            continue;
        }
        if ("(" === V) {
            X("parens"), Z({
                type: "paren",
                value: V
            });
            continue;
        }
        if (")" === V) {
            if (0 === P.parens && !0 === n.strictBrackets) throw new SyntaxError(c("opening", "("));
            const e = L[L.length - 1];
            if (e && P.parens === e.parens + 1) {
                ae(L.pop());
                continue;
            }
            Z({
                type: "paren",
                value: V,
                output: P.parens ? ")" : "\\)"
            }), z("parens");
            continue;
        }
        if ("[" === V) {
            if (!0 !== n.nobracket && W().includes("]")) X("brackets");
            else {
                if (!0 !== n.nobracket && !0 === n.strictBrackets) throw new SyntaxError(c("closing", "]"));
                V = `\\${V}`;
            }
            Z({
                type: "bracket",
                value: V
            });
            continue;
        }
        if ("]" === V) {
            if (!0 === n.nobracket || Y && "bracket" === Y.type && 1 === Y.value.length) {
                Z({
                    type: "text",
                    value: V,
                    output: `\\${V}`
                });
                continue;
            }
            if (0 === P.brackets) {
                if (!0 === n.strictBrackets) throw new SyntaxError(c("opening", "["));
                Z({
                    type: "text",
                    value: V,
                    output: `\\${V}`
                });
                continue;
            }
            z("brackets");
            const e = Y.value.slice(1);
            if (!0 === Y.posix || "^" !== e[0] || e.includes("/") || (V = `/${V}`), Y.value += V, j({
                value: V
            }), !1 === n.literalBrackets || s.hasRegexChars(e)) continue;
            const a = s.escapeRegex(Y.value);
            if (P.output = P.output.slice(0, -Y.value.length), !0 === n.literalBrackets) {
                P.output += a, Y.value = a;
                continue;
            }
            Y.value = `(${T}${a}|${Y.value})`, P.output += Y.value;
            continue;
        }
        if ("{" === V && !0 !== n.nobrace) {
            X("braces");
            const e = {
                type: "brace",
                value: V,
                output: "(",
                outputIndex: P.output.length,
                tokensIndex: P.tokens.length
            };
            G.push(e), Z(e);
            continue;
        }
        if ("}" === V) {
            const e = G[G.length - 1];
            if (!0 === n.nobrace || !e) {
                Z({
                    type: "text",
                    value: V,
                    output: V
                });
                continue;
            }
            let a = ")";
            if (!0 === e.dots) {
                const e = g.slice(), t = [];
                for(let a = e.length - 1; a >= 0 && (g.pop(), "brace" !== e[a].type); a--)"dots" !== e[a].type && t.unshift(e[a].value);
                a = m(t, n), P.backtrack = !0;
            }
            if (!0 !== e.comma && !0 !== e.dots) {
                const n = P.output.slice(0, e.outputIndex), t = P.tokens.slice(e.tokensIndex);
                e.value = e.output = "\\{", V = a = "\\}", P.output = n;
                for (const e of t)P.output += e.output || e.value;
            }
            Z({
                type: "brace",
                value: V,
                output: a
            }), z("braces"), G.pop();
            continue;
        }
        if ("|" === V) {
            L.length > 0 && L[L.length - 1].conditions++, Z({
                type: "text",
                value: V
            });
            continue;
        }
        if ("," === V) {
            let e = V;
            const a = G[G.length - 1];
            a && "braces" === x[x.length - 1] && (a.comma = !0, e = "|"), Z({
                type: "comma",
                value: V,
                output: e
            });
            continue;
        }
        if ("/" === V) {
            if ("dot" === Y.type && P.index === P.start + 1) {
                P.start = P.index + 1, P.consumed = "", P.output = "", g.pop(), Y = u;
                continue;
            }
            Z({
                type: "slash",
                value: V,
                output: v
            });
            continue;
        }
        if ("." === V) {
            if (P.braces > 0 && "dot" === Y.type) {
                "." === Y.value && (Y.output = C);
                const e = G[G.length - 1];
                Y.type = "dots", Y.output += V, Y.value += V, e.dots = !0;
                continue;
            }
            if (P.braces + P.parens === 0 && "bos" !== Y.type && "slash" !== Y.type) {
                Z({
                    type: "text",
                    value: V,
                    output: C
                });
                continue;
            }
            Z({
                type: "dot",
                value: V,
                output: C
            });
            continue;
        }
        if ("?" === V) {
            if (!(Y && "(" === Y.value) && !0 !== n.noextglob && "(" === H() && "?" !== H(2)) {
                ee("qmark", V);
                continue;
            }
            if (Y && "paren" === Y.type) {
                const e = H();
                let a = V;
                if ("<" === e && !s.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                ("(" === Y.value && !/[!=<:]/.test(e) || "<" === e && !/<([!=]|\w+>)/.test(W())) && (a = `\\${V}`), Z({
                    type: "text",
                    value: V,
                    output: a
                });
                continue;
            }
            if (!0 !== n.dot && ("slash" === Y.type || "bos" === Y.type)) {
                Z({
                    type: "qmark",
                    value: V,
                    output: b
                });
                continue;
            }
            Z({
                type: "qmark",
                value: V,
                output: w
            });
            continue;
        }
        if ("!" === V) {
            if (!0 !== n.noextglob && "(" === H() && ("?" !== H(2) || !/[!=<:]/.test(H(3)))) {
                ee("negate", V);
                continue;
            }
            if (!0 !== n.nonegate && 0 === P.index) {
                $();
                continue;
            }
        }
        if ("+" === V) {
            if (!0 !== n.noextglob && "(" === H() && "?" !== H(2)) {
                ee("plus", V);
                continue;
            }
            if (Y && "(" === Y.value || !1 === n.regex) {
                Z({
                    type: "plus",
                    value: V,
                    output: I
                });
                continue;
            }
            if (Y && ("bracket" === Y.type || "paren" === Y.type || "brace" === Y.type) || P.parens > 0) {
                Z({
                    type: "plus",
                    value: V
                });
                continue;
            }
            Z({
                type: "plus",
                value: I
            });
            continue;
        }
        if ("@" === V) {
            if (!0 !== n.noextglob && "(" === H() && "?" !== H(2)) {
                Z({
                    type: "at",
                    extglob: !0,
                    value: V,
                    output: ""
                });
                continue;
            }
            Z({
                type: "text",
                value: V
            });
            continue;
        }
        if ("*" !== V) {
            "$" !== V && "^" !== V || (V = `\\${V}`);
            const e = i.exec(W());
            e && (V += e[0], P.index += e[0].length), Z({
                type: "text",
                value: V
            });
            continue;
        }
        if (Y && ("globstar" === Y.type || !0 === Y.star)) {
            Y.type = "star", Y.star = !0, Y.value += V, Y.output = F, P.backtrack = !0, P.globstar = !0, K(V);
            continue;
        }
        let a = W();
        if (!0 !== n.noextglob && /^\([^?]/.test(a)) {
            ee("star", V);
            continue;
        }
        if ("star" === Y.type) {
            if (!0 === n.noglobstar) {
                K(V);
                continue;
            }
            const t = Y.prev, s = t.prev, o = "slash" === t.type || "bos" === t.type, r = s && ("star" === s.type || "globstar" === s.type);
            if (!0 === n.bash && (!o || a[0] && "/" !== a[0])) {
                Z({
                    type: "star",
                    value: V,
                    output: ""
                });
                continue;
            }
            const i = P.braces > 0 && ("comma" === t.type || "brace" === t.type), l = L.length && ("pipe" === t.type || "paren" === t.type);
            if (!o && "paren" !== t.type && !i && !l) {
                Z({
                    type: "star",
                    value: V,
                    output: ""
                });
                continue;
            }
            for(; "/**" === a.slice(0, 3);){
                const n = e[P.index + 4];
                if (n && "/" !== n) break;
                a = a.slice(3), K("/**", 3);
            }
            if ("bos" === t.type && q()) {
                Y.type = "globstar", Y.value += V, Y.output = M(n), P.output = Y.output, P.globstar = !0, K(V);
                continue;
            }
            if ("slash" === t.type && "bos" !== t.prev.type && !r && q()) {
                P.output = P.output.slice(0, -(t.output + Y.output).length), t.output = `(?:${t.output}`, Y.type = "globstar", Y.output = M(n) + (n.strictSlashes ? ")" : "|$)"), Y.value += V, P.globstar = !0, P.output += t.output + Y.output, K(V);
                continue;
            }
            if ("slash" === t.type && "bos" !== t.prev.type && "/" === a[0]) {
                const e = void 0 !== a[1] ? "|$" : "";
                P.output = P.output.slice(0, -(t.output + Y.output).length), t.output = `(?:${t.output}`, Y.type = "globstar", Y.output = `${M(n)}${v}|${v}${e})`, Y.value += V, P.output += t.output + Y.output, P.globstar = !0, K(V + J()), Z({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            if ("bos" === t.type && "/" === a[0]) {
                Y.type = "globstar", Y.value += V, Y.output = `(?:^|${v}|${M(n)}${v})`, P.output = Y.output, P.globstar = !0, K(V + J()), Z({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            P.output = P.output.slice(0, -Y.output.length), Y.type = "globstar", Y.output = M(n), Y.value += V, P.output += Y.output, P.globstar = !0, K(V);
            continue;
        }
        const t = {
            type: "star",
            value: V,
            output: F
        };
        !0 !== n.bash ? !Y || "bracket" !== Y.type && "paren" !== Y.type || !0 !== n.regex ? (P.index !== P.start && "slash" !== Y.type && "dot" !== Y.type || ("dot" === Y.type ? (P.output += N, Y.output += N) : !0 === n.dot ? (P.output += B, Y.output += B) : (P.output += O, Y.output += O), "*" !== H() && (P.output += y, Y.output += y)), Z(t)) : (t.output = V, Z(t)) : (t.output = ".*?", "bos" !== Y.type && "slash" !== Y.type || (t.output = O + t.output), Z(t));
    }
    for(; P.brackets > 0;){
        if (!0 === n.strictBrackets) throw new SyntaxError(c("closing", "]"));
        P.output = s.escapeLast(P.output, "["), z("brackets");
    }
    for(; P.parens > 0;){
        if (!0 === n.strictBrackets) throw new SyntaxError(c("closing", ")"));
        P.output = s.escapeLast(P.output, "("), z("parens");
    }
    for(; P.braces > 0;){
        if (!0 === n.strictBrackets) throw new SyntaxError(c("closing", "}"));
        P.output = s.escapeLast(P.output, "{"), z("braces");
    }
    if (!0 === n.strictSlashes || "star" !== Y.type && "bracket" !== Y.type || Z({
        type: "maybe_slash",
        value: "",
        output: `${v}?`
    }), !0 === P.backtrack) {
        P.output = "";
        for (const e of P.tokens)P.output += null != e.output ? e.output : e.value, e.suffix && (P.output += e.suffix);
    }
    return P;
};
k.fastpaths = (e, a)=>{
    const n = {
        ...a
    }, r = "number" == typeof n.maxLength ? Math.min(o, n.maxLength) : o, i = e.length;
    if (i > r) throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${r}`);
    e = d[e] || e;
    const l = s.isWindows(a), { DOT_LITERAL: m, SLASH_LITERAL: c, ONE_CHAR: p, DOTS_SLASH: A, NO_DOT: u, NO_DOTS: g, NO_DOTS_SLASH: T, STAR: h, START_ANCHOR: k } = t.globChars(l), _ = n.dot ? g : u, E = n.dot ? T : u, f = n.capture ? "" : "?:";
    let C = !0 === n.bash ? ".*?" : h;
    n.capture && (C = `(${C})`);
    const I = (e)=>!0 === e.noglobstar ? C : `(${f}(?:(?!${k}${e.dot ? A : m}).)*?)`, v = (e)=>{
        switch(e){
            case "*":
                return `${_}${p}${C}`;
            case ".*":
                return `${m}${p}${C}`;
            case "*.*":
                return `${_}${C}${m}${p}${C}`;
            case "*/*":
                return `${_}${C}${c}${p}${E}${C}`;
            case "**":
                return _ + I(n);
            case "**/*":
                return `(?:${_}${I(n)}${c})?${E}${p}${C}`;
            case "**/*.*":
                return `(?:${_}${I(n)}${c})?${E}${C}${m}${p}${C}`;
            case "**/.*":
                return `(?:${_}${I(n)}${c})?${m}${p}${C}`;
            default:
                {
                    const a = /^(.*?)\.(\w+)$/.exec(e);
                    if (!a) return;
                    const n = v(a[1]);
                    if (!n) return;
                    return n + m + a[2];
                }
        }
    }, y = s.removePrefix(e, {
        negated: !1,
        prefix: ""
    });
    let S = v(y);
    return S && !0 !== n.strictSlashes && (S += `${c}?`), S;
}, module.exports = k;
