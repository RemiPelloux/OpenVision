import { E } from "./tslib.es6.js";
var Ivh, xvh, Avh, Fra, Rvh, Pvh, Bra, Ura, jra, Mvh, $ra, Goe, Dvh, Nvh, Sit, Lvh, Ovh, Fvh, Bvh, Uvh, jvh, $vh, Hvh, Wvh, o1t, Hra, Gvh, qvh, zvh, Vvh, Kvh, Wra, vWe, Yvh, Gra, Xvh, Zvh, Qvh, Rui, Jvh, qra, e_h, JMr, zra, t_h, Pui, n_h, i_h, Vra, r_h, s_h, o_h, eDr, Kra, a_h, l_h, c_h, u_h, d_h, h_h, Yra, p_h, m_h, g_h, f_h, v_h, __h, b_h, y_h, S_h, k_h, w_h, Xra, C_h, T_h, E_h, I_h, x_h, A_h, Zra, R_h, Qra, P_h, M_h, D_h, N_h, L_h, O_h, F_h, B_h, tDr, U_h, qoe, j_h, $_h, H_h, Jra;
export { $_h, $ra, $vh, A_h, Avh, B_h, Bra, Bvh, C_h, D_h, Dvh, E_h, F_h, Fra, Fvh, Goe, Gra, Gvh, H_h, Hra, Hvh, I_h, Ivh, JMr, Jra, Jvh, Kra, Kvh, L_h, Lvh, M_h, Mvh, N_h, Nvh, O_h, Ovh, P_h, Pui, Pvh, Qra, Qvh, R_h, Rui, Rvh, S_h, Sit, T_h, U_h, Ura, Uvh, Vra, Vvh, Wra, Wvh, Xra, Xvh, Yra, Yvh, Zra, Zvh, __h, a_h, b_h, c_h, d_h, eDr, e_h, f_h, g_h, h_h, i_h, j_h, jra, jvh, k_h, l_h, m_h, n_h, o1t, o_h, p_h, qoe, qra, qvh, r_h, s_h, tDr, t_h, u_h, vWe, v_h, w_h, x_h, xvh, y_h, zra, zvh };
var __wakaru_W_h_initialized = false;
export function W_h() {
if (__wakaru_W_h_initialized) return;
__wakaru_W_h_initialized = true;
E(), Ivh = Object.defineProperty, xvh = Object.defineProperties, Avh = Object.getOwnPropertyDescriptors, Fra = Object.getOwnPropertySymbols, Rvh = Object.prototype.hasOwnProperty, Pvh = Object.prototype.propertyIsEnumerable, Bra = (t, e, n)=>e in t ? Ivh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Ura = (t, e)=>{
    for(var n in e || (e = {}))Rvh.call(e, n) && Bra(t, n, e[n]);
    if (Fra) for (var n of Fra(e))Pvh.call(e, n) && Bra(t, n, e[n]);
    return t;
}, jra = (t, e)=>xvh(t, Avh(e)), Mvh = (t)=>{
    let e = new Uint8Array(t.length + 1), n = !1, i = !1, r = 0;
    for(; r < t.length;){
        if (t[r] === "\\" && r + 1 < t.length && t[r + 1] === "`") {
            let s = n || i ? 1 : 0;
            e[r + 1] = s, e[r + 2] = s, r += 2;
            continue;
        }
        if (t.substring(r, r + 3) === "```") {
            i = !i;
            let s = n || i ? 1 : 0, o = Math.min(r + 3, t.length);
            for(let a = r + 1; a <= o; a += 1)e[a] = s;
            r = o;
            continue;
        }
        !i && t[r] === "`" && (n = !n), e[r + 1] = n || i ? 1 : 0, r += 1;
    }
    return e;
}, $ra = null, Goe = (t, e)=>{
    let n = $ra;
    return (n === null || n.text !== t) && (n = {
        text: t,
        lookup: Mvh(t)
    }, $ra = n), n.lookup[Math.min(e, t.length)] === 1;
}, Dvh = (t, e)=>{
    let n = t.substring(e, e + 3) === "```", i = e > 0 && t.substring(e - 1, e + 2) === "```", r = e > 1 && t.substring(e - 2, e + 1) === "```";
    return n || i || r;
}, Nvh = (t)=>{
    let e = 0;
    for(let n = 0; n < t.length; n += 1){
        if (t[n] === "\\" && n + 1 < t.length && t[n + 1] === "`") {
            n += 1;
            continue;
        }
        t[n] === "`" && !Dvh(t, n) && (e += 1);
    }
    return e;
}, Sit = (t, e)=>{
    let n = !1, i = !1, r = -1;
    for(let s = 0; s < t.length; s += 1){
        if (t[s] === "\\" && s + 1 < t.length && t[s + 1] === "`") {
            s += 1;
            continue;
        }
        if (t.substring(s, s + 3) === "```") {
            i = !i, s += 2;
            continue;
        }
        if (!i && t[s] === "`") if (n) {
            if (r < e && e < s) return !0;
            n = !1, r = -1;
        } else n = !0, r = s;
    }
    return !1;
}, Lvh = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm, Ovh = (t)=>!t || typeof t != "string" || !t.includes(">") ? t : t.replace(Lvh, (e, n, i, r)=>Goe(t, r) ? e : `${n}\\>${i}`), Fvh = /(\*\*)([^*]*\*?)$/, Bvh = /(__)([^_]*?)$/, Uvh = /(\*\*\*)([^*]*?)$/, jvh = /(\*)([^*]*?)$/, $vh = /(_)([^_]*?)$/, Hvh = /(`)([^`]*?)$/, Wvh = /(~~)([^~]*?)$/, o1t = /^[\s_~*`]*$/, Hra = /^[\s]*[-*+][\s]+$/, Gvh = /[\p{L}\p{N}_]/u, qvh = /^```[^`\n]*```?$/, zvh = /^\*{4,}$/, Vvh = /(__)([^_]+)_$/, Kvh = /(~~)([^~]+)~$/, Wra = /~~/g, vWe = (t)=>{
    if (!t) return !1;
    let e = t.charCodeAt(0);
    return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 95 ? !0 : Gvh.test(t);
}, Yvh = (t, e)=>{
    let n = 1;
    for(let i = e - 1; i >= 0; i -= 1)if (t[i] === "]") n += 1;
    else if (t[i] === "[" && (n -= 1, n === 0)) return i;
    return -1;
}, Gra = (t, e)=>{
    let n = 1;
    for(let i = e + 1; i < t.length; i += 1)if (t[i] === "[") n += 1;
    else if (t[i] === "]" && (n -= 1, n === 0)) return i;
    return -1;
}, Xvh = (t)=>t === "inlineLatex" || t === "blockLatex", Zvh = (t, e)=>e === "[" && t === "none" ? "blockLatex" : e === "]" && t === "blockLatex" ? "none" : e === "(" && t === "none" ? "inlineLatex" : e === ")" && t === "inlineLatex" ? "none" : null, Qvh = (t, e)=>e ? t === "blockDollar" ? "none" : "blockDollar" : t === "blockDollar" ? t : t === "inlineDollar" ? "none" : "inlineDollar", Rui = (t, e)=>{
    let n = "none";
    for(let i = 0; i < t.length && i < e; i += 1){
        if (t[i] === "\\" && t[i + 1] === "$") {
            i += 1;
            continue;
        }
        if (t[i] === "\\") {
            let r = Zvh(n, t[i + 1]);
            if (r !== null) {
                n = r, i += 1;
                continue;
            }
        }
        if (t[i] === "$" && !Xvh(n)) {
            let r = t[i + 1] === "$";
            n = Qvh(n, r), r && (i += 1);
        }
    }
    return n !== "none";
}, Jvh = (t, e)=>{
    for(let n = e; n < t.length; n += 1){
        if (t[n] === ")") return !0;
        if (t[n] === `
`) return !1;
    }
    return !1;
}, qra = (t, e)=>{
    for(let n = e - 1; n >= 0; n -= 1){
        if (t[n] === ")") return !1;
        if (t[n] === "(") return n > 0 && t[n - 1] === "]" ? Jvh(t, e) : !1;
        if (t[n] === `
`) return !1;
    }
    return !1;
}, e_h = (t, e)=>{
    for(let n = e - 1; n >= 0; n -= 1){
        if (t[n] === ">") return !1;
        if (t[n] === "<") {
            let i = n + 1 < t.length ? t[n + 1] : "";
            return i >= "a" && i <= "z" || i >= "A" && i <= "Z" || i === "/";
        }
        if (t[n] === `
`) return !1;
    }
    return !1;
}, JMr = (t, e, n)=>{
    let i = 0;
    for(let l = e - 1; l >= 0; l -= 1)if (t[l] === `
`) {
        i = l + 1;
        break;
    }
    let r = t.length;
    for(let l = e; l < t.length; l += 1)if (t[l] === `
`) {
        r = l;
        break;
    }
    let s = t.substring(i, r), o = 0, a = !1;
    for (let l of s)if (l === n) o += 1;
    else if (l !== " " && l !== "	") {
        a = !0;
        break;
    }
    return o >= 3 && !a;
}, zra = (t)=>t.includes("$") || t.includes("\\(") || t.includes("\\["), t_h = (t, e, n, i)=>n === "\\" || zra(t) && Rui(t, e) ? !0 : n !== "*" && i === "*" ? (e < t.length - 2 ? t[e + 2] : "") !== "*" : n === "*" || (!n || n === " " || n === "	" || n === `
`) && (!i || i === " " || i === "	" || i === `
`), Pui = (t)=>t === " " || t === "	" || t === `
`, n_h = (t, e)=>!!(t && e && vWe(t) && vWe(e)), i_h = (t, e, n, i)=>{
    let r = n_h(t, e), s = !!e && !Pui(e), o = !!t && !Pui(t);
    return r && n % 2 === 0 && !i ? {
        count: !1
    } : o && n % 2 === 1 || s ? {
        count: !0,
        inWordAsteriskChain: r
    } : {
        count: !1
    };
}, Vra = (t)=>{
    let e = 0, n = !1, i = !1, r = t.length;
    for(let s = 0; s < r; s += 1){
        if (t[s] === "`" && s + 2 < r && t[s + 1] === "`" && t[s + 2] === "`") {
            n = !n, s += 2;
            continue;
        }
        if (n) continue;
        if (t[s] !== "*") {
            vWe(t[s]) || (i = !1);
            continue;
        }
        let o = s > 0 ? t[s - 1] : "", a = s < r - 1 ? t[s + 1] : "";
        if (t_h(t, s, o, a)) continue;
        let l = i_h(o, a, e, i);
        l.count && (e += 1, i = l.inWordAsteriskChain);
    }
    return e;
}, r_h = (t, e, n, i)=>!!(n === "\\" || zra(t) && Rui(t, e) || qra(t, e) || e_h(t, e) || n === "_" || i === "_" || n && i && vWe(n) && vWe(i)), s_h = (t)=>{
    let e = 0, n = !1, i = t.length;
    for(let r = 0; r < i; r += 1){
        if (t[r] === "`" && r + 2 < i && t[r + 1] === "`" && t[r + 2] === "`") {
            n = !n, r += 2;
            continue;
        }
        if (n || t[r] !== "_") continue;
        let s = r > 0 ? t[r - 1] : "", o = r < i - 1 ? t[r + 1] : "";
        r_h(t, r, s, o) || (e += 1);
    }
    return e;
}, o_h = (t)=>{
    let e = 0, n = 0, i = !1;
    for(let r = 0; r < t.length; r += 1){
        if (t[r] === "`" && r + 2 < t.length && t[r + 1] === "`" && t[r + 2] === "`") {
            n >= 3 && (e += Math.floor(n / 3)), n = 0, i = !i, r += 2;
            continue;
        }
        i || (t[r] === "*" ? n += 1 : (n >= 3 && (e += Math.floor(n / 3)), n = 0));
    }
    return n >= 3 && (e += Math.floor(n / 3)), e;
}, eDr = (t)=>{
    let e = 0, n = !1;
    for(let i = 0; i < t.length; i += 1){
        if (t[i] === "`" && i + 2 < t.length && t[i + 1] === "`" && t[i + 2] === "`") {
            n = !n, i += 2;
            continue;
        }
        n || t[i] === "*" && i + 1 < t.length && t[i + 1] === "*" && (e += 1, i += 1);
    }
    return e;
}, Kra = (t)=>{
    let e = 0, n = !1;
    for(let i = 0; i < t.length; i += 1){
        if (t[i] === "`" && i + 2 < t.length && t[i + 1] === "`" && t[i + 2] === "`") {
            n = !n, i += 2;
            continue;
        }
        n || t[i] === "_" && i + 1 < t.length && t[i + 1] === "_" && (e += 1, i += 1);
    }
    return e;
}, a_h = (t, e, n)=>{
    if (!e || o1t.test(e)) return !0;
    let i = t.substring(0, n).lastIndexOf(`
`), r = i === -1 ? 0 : i + 1, s = t.substring(r, n);
    return Hra.test(s) && e.includes(`
`) ? !0 : JMr(t, n, "*");
}, l_h = (t)=>{
    let e = t.match(Fvh);
    if (!e) return t;
    let n = e[2], i = t.lastIndexOf(e[1]);
    return Goe(t, i) || Sit(t, i) || a_h(t, n, i) ? t : eDr(t) % 2 === 1 ? n.endsWith("*") ? `${t}*` : `${t}**` : t;
}, c_h = (t, e, n)=>{
    if (!e || o1t.test(e)) return !0;
    let i = t.substring(0, n).lastIndexOf(`
`), r = i === -1 ? 0 : i + 1, s = t.substring(r, n);
    return Hra.test(s) && e.includes(`
`) ? !0 : JMr(t, n, "_");
}, u_h = (t)=>{
    let e = t.match(Bvh);
    if (!e) {
        let r = t.match(Vvh);
        if (r) {
            let s = t.lastIndexOf(r[1]);
            if (!(Goe(t, s) || Sit(t, s)) && Kra(t) % 2 === 1) return `${t}_`;
        }
        return t;
    }
    let n = e[2], i = t.lastIndexOf(e[1]);
    return Goe(t, i) || Sit(t, i) || c_h(t, n, i) ? t : Kra(t) % 2 === 1 ? `${t}__` : t;
}, d_h = (t)=>{
    let e = !1;
    for(let n = 0; n < t.length; n += 1){
        if (t[n] === "`" && n + 2 < t.length && t[n + 1] === "`" && t[n + 2] === "`") {
            e = !e, n += 2;
            continue;
        }
        if (!e && t[n] === "*" && t[n - 1] !== "*" && t[n + 1] !== "*" && t[n - 1] !== "\\" && !Rui(t, n)) {
            let i = n > 0 ? t[n - 1] : "", r = n < t.length - 1 ? t[n + 1] : "", s = !i || Pui(i), o = !r || Pui(r);
            if (s && o || i && r && vWe(i) && vWe(r) || o) continue;
            return n;
        }
    }
    return -1;
}, h_h = (t)=>{
    if (!t.match(jvh)) return t;
    let e = d_h(t);
    if (e === -1 || Goe(t, e) || Sit(t, e)) return t;
    let n = t.substring(e + 1);
    return !n || o1t.test(n) ? t : Vra(t) % 2 === 1 ? `${t}*` : t;
}, Yra = (t)=>{
    let e = !1;
    for(let n = 0; n < t.length; n += 1){
        if (t[n] === "`" && n + 2 < t.length && t[n + 1] === "`" && t[n + 2] === "`") {
            e = !e, n += 2;
            continue;
        }
        if (!e && t[n] === "_" && t[n - 1] !== "_" && t[n + 1] !== "_" && t[n - 1] !== "\\" && !Rui(t, n) && !qra(t, n)) {
            let i = n > 0 ? t[n - 1] : "", r = n < t.length - 1 ? t[n + 1] : "";
            if (i && r && vWe(i) && vWe(r)) continue;
            return n;
        }
    }
    return -1;
}, p_h = (t)=>{
    let e = t.length;
    for(; e > 0 && t[e - 1] === `
`;)e -= 1;
    if (e < t.length) {
        let n = t.slice(0, e), i = t.slice(e);
        return `${n}_${i}`;
    }
    return `${t}_`;
}, m_h = (t)=>{
    if (!t.endsWith("**")) return null;
    let e = t.slice(0, -2);
    if (eDr(e) % 2 !== 1) return null;
    let n = e.indexOf("**"), i = Yra(e);
    return n !== -1 && i !== -1 && n < i ? `${e}_**` : null;
}, g_h = (t)=>{
    if (!t.match($vh)) return t;
    let e = Yra(t);
    if (e === -1) return t;
    let n = t.substring(e + 1);
    if (!n || o1t.test(n) || Goe(t, e) || Sit(t, e)) return t;
    if (s_h(t) % 2 === 1) {
        let i = m_h(t);
        return i !== null ? i : p_h(t);
    }
    return t;
}, f_h = (t)=>{
    let e = eDr(t), n = Vra(t);
    return e % 2 === 0 && n % 2 === 0;
}, v_h = (t, e, n)=>!e || o1t.test(e) || Goe(t, n) || Sit(t, n) ? !0 : JMr(t, n, "*"), __h = (t)=>{
    if (zvh.test(t)) return t;
    let e = t.match(Uvh);
    if (!e) return t;
    let n = e[2], i = t.lastIndexOf(e[1]);
    return v_h(t, n, i) ? t : o_h(t) % 2 === 1 ? f_h(t) ? t : `${t}***` : t;
}, b_h = /<[a-zA-Z/][^>]*$/, y_h = (t)=>{
    let e = t.match(b_h);
    return !e || e.index === void 0 || Goe(t, e.index) ? t : t.substring(0, e.index).trimEnd();
}, S_h = (t)=>!t.match(qvh) || t.includes(`
`) ? null : t.endsWith("``") && !t.endsWith("```") ? `${t}\`` : t, k_h = (t)=>(t.match(/```/g) || []).length % 2 === 1, w_h = (t)=>{
    let e = S_h(t);
    if (e !== null) return e;
    let n = t.match(Hvh);
    if (n && !k_h(t)) {
        let i = n[2];
        if (!i || o1t.test(i)) return t;
        if (Nvh(t) % 2 === 1) return `${t}\``;
    }
    return t;
}, Xra = (t, e)=>e >= 2 && t.substring(e - 2, e + 1) === "```" || e >= 1 && t.substring(e - 1, e + 2) === "```" || e <= t.length - 3 && t.substring(e, e + 3) === "```", C_h = (t)=>{
    let e = 0, n = !1;
    for(let i = 0; i < t.length - 1; i += 1)t[i] === "`" && !Xra(t, i) && (n = !n), !n && t[i] === "$" && t[i + 1] === "$" && (e += 1, i += 1);
    return e;
}, T_h = (t)=>{
    let e = 0, n = !1;
    for(let i = 0; i < t.length; i += 1){
        if (t[i] === "\\") {
            i += 1;
            continue;
        }
        if (t[i] === "`" && !Xra(t, i)) {
            n = !n;
            continue;
        }
        !n && t[i] === "$" && (i + 1 < t.length && t[i + 1] === "$" ? i += 1 : e += 1);
    }
    return e;
}, E_h = (t)=>{
    if (t.endsWith("$") && !t.endsWith("$$")) return `${t}$`;
    let e = t.indexOf("$$");
    return e !== -1 && t.indexOf(`
`, e) !== -1 && !t.endsWith(`
`) ? `${t}
$$` : `${t}$$`;
}, I_h = (t)=>C_h(t) % 2 === 0 ? t : E_h(t), x_h = (t)=>T_h(t) % 2 === 1 ? `${t}$` : t, A_h = (t, e, n)=>{
    if (t.substring(e + 2).includes(")")) return null;
    let i = Yvh(t, e);
    if (i === -1 || Goe(t, i)) return null;
    let r = i > 0 && t[i - 1] === "!", s = r ? i - 1 : i, o = t.substring(0, s);
    if (r) return o;
    let a = t.substring(i + 1, e);
    return n === "text-only" ? `${o}${a}` : `${o}[${a}](streamdown:incomplete-link)`;
}, Zra = (t, e)=>{
    for(let n = 0; n < e; n++)if (t[n] === "[" && !Goe(t, n)) {
        if (n > 0 && t[n - 1] === "!") continue;
        let i = Gra(t, n);
        if (i === -1) return n;
        if (i + 1 < t.length && t[i + 1] === "(") {
            let r = t.indexOf(")", i + 2);
            r !== -1 && (n = r);
        }
    }
    return e;
}, R_h = (t, e, n)=>{
    let i = e > 0 && t[e - 1] === "!", r = i ? e - 1 : e;
    if (!t.substring(e + 1).includes("]")) {
        let s = t.substring(0, r);
        if (i) return s;
        if (n === "text-only") {
            let o = Zra(t, e);
            return t.substring(0, o) + t.substring(o + 1);
        }
        return `${t}](streamdown:incomplete-link)`;
    }
    if (Gra(t, e) === -1) {
        let s = t.substring(0, r);
        if (i) return s;
        if (n === "text-only") {
            let o = Zra(t, e);
            return t.substring(0, o) + t.substring(o + 1);
        }
        return `${t}](streamdown:incomplete-link)`;
    }
    return null;
}, Qra = (t, e = "protocol")=>{
    let n = t.lastIndexOf("](");
    if (n !== -1 && !Goe(t, n)) {
        let i = A_h(t, n, e);
        if (i !== null) return i;
    }
    for(let i = t.length - 1; i >= 0; i -= 1)if (t[i] === "[" && !Goe(t, i)) {
        let r = R_h(t, i, e);
        if (r !== null) return r;
    }
    return t;
}, P_h = /^-{1,2}$/, M_h = /^[\s]*-{1,2}[\s]+$/, D_h = /^={1,2}$/, N_h = /^[\s]*={1,2}[\s]+$/, L_h = (t)=>{
    if (!t || typeof t != "string") return t;
    let e = t.lastIndexOf(`
`);
    if (e === -1) return t;
    let n = t.substring(e + 1), i = t.substring(0, e), r = n.trim();
    if (P_h.test(r) && !n.match(M_h)) {
        let s = i.split(`
`).at(-1);
        if (s && s.trim().length > 0) return `${t}\u200B`;
    }
    if (D_h.test(r) && !n.match(N_h)) {
        let s = i.split(`
`).at(-1);
        if (s && s.trim().length > 0) return `${t}\u200B`;
    }
    return t;
}, O_h = /([\p{L}\p{N}_])~(?!~)(?=[\p{L}\p{N}_])/gu, F_h = (t)=>!t || typeof t != "string" || !t.includes("~") ? t : t.replace(O_h, (e, n, i)=>{
        let r = i + n.length;
        return Goe(t, r) ? e : `${n}\\~`;
    }), B_h = (t)=>{
    var e, n;
    let i = t.match(Wvh);
    if (i) {
        let r = i[2];
        if (!r || o1t.test(r)) return t;
        let s = t.lastIndexOf(i[1]);
        if (Goe(t, s) || Sit(t, s)) return t;
        if (((e = t.match(Wra)) == null ? void 0 : e.length) % 2 === 1) return `${t}~~`;
    } else {
        let r = t.match(Kvh);
        if (r) {
            let s = t.lastIndexOf(r[0].slice(0, 2));
            if (Goe(t, s) || Sit(t, s)) return t;
            if (((n = t.match(Wra)) == null ? void 0 : n.length) % 2 === 1) return `${t}~`;
        }
    }
    return t;
}, tDr = (t)=>t !== !1, U_h = (t)=>t === !0, qoe = {
    SINGLE_TILDE: 0,
    COMPARISON_OPERATORS: 5,
    HTML_TAGS: 10,
    SETEXT_HEADINGS: 15,
    LINKS: 20,
    BOLD_ITALIC: 30,
    BOLD: 35,
    ITALIC_DOUBLE_UNDERSCORE: 40,
    ITALIC_SINGLE_ASTERISK: 41,
    ITALIC_SINGLE_UNDERSCORE: 42,
    INLINE_CODE: 50,
    STRIKETHROUGH: 60,
    KATEX: 70,
    INLINE_KATEX: 75,
    DEFAULT: 100
}, j_h = [
    {
        handler: {
            name: "singleTilde",
            handle: F_h,
            priority: qoe.SINGLE_TILDE
        },
        optionKey: "singleTilde"
    },
    {
        handler: {
            name: "comparisonOperators",
            handle: Ovh,
            priority: qoe.COMPARISON_OPERATORS
        },
        optionKey: "comparisonOperators"
    },
    {
        handler: {
            name: "htmlTags",
            handle: y_h,
            priority: qoe.HTML_TAGS
        },
        optionKey: "htmlTags"
    },
    {
        handler: {
            name: "setextHeadings",
            handle: L_h,
            priority: qoe.SETEXT_HEADINGS
        },
        optionKey: "setextHeadings"
    },
    {
        handler: {
            name: "links",
            handle: Qra,
            priority: qoe.LINKS
        },
        optionKey: "links",
        earlyReturn: (t)=>t.endsWith("](streamdown:incomplete-link)")
    },
    {
        handler: {
            name: "boldItalic",
            handle: __h,
            priority: qoe.BOLD_ITALIC
        },
        optionKey: "boldItalic"
    },
    {
        handler: {
            name: "bold",
            handle: l_h,
            priority: qoe.BOLD
        },
        optionKey: "bold"
    },
    {
        handler: {
            name: "italicDoubleUnderscore",
            handle: u_h,
            priority: qoe.ITALIC_DOUBLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleAsterisk",
            handle: h_h,
            priority: qoe.ITALIC_SINGLE_ASTERISK
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleUnderscore",
            handle: g_h,
            priority: qoe.ITALIC_SINGLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "inlineCode",
            handle: w_h,
            priority: qoe.INLINE_CODE
        },
        optionKey: "inlineCode"
    },
    {
        handler: {
            name: "strikethrough",
            handle: B_h,
            priority: qoe.STRIKETHROUGH
        },
        optionKey: "strikethrough"
    },
    {
        handler: {
            name: "katex",
            handle: I_h,
            priority: qoe.KATEX
        },
        optionKey: "katex"
    },
    {
        handler: {
            name: "inlineKatex",
            handle: x_h,
            priority: qoe.INLINE_KATEX
        },
        optionKey: "inlineKatex"
    }
], $_h = (t)=>{
    var e;
    let n = (e = t?.linkMode) != null ? e : "protocol";
    return j_h.filter(({ handler: i, optionKey: r })=>i.name === "links" ? tDr(t?.links) || tDr(t?.images) : i.name === "inlineKatex" ? U_h(t?.inlineKatex) : tDr(t?.[r])).map(({ handler: i, earlyReturn: r })=>i.name === "links" ? {
            handler: jra(Ura({}, i), {
                handle: (s)=>Qra(s, n)
            }),
            earlyReturn: n === "protocol" ? r : void 0
        } : {
            handler: i,
            earlyReturn: r
        });
}, H_h = (t, e)=>{
    var n;
    if (!t || typeof t != "string") return t;
    let i = t.endsWith(" ") && !t.endsWith("  ") ? t.slice(0, -1) : t, r = $_h(e), s = ((n = e?.handlers) != null ? n : []).map((a)=>{
        var l;
        return {
            handler: jra(Ura({}, a), {
                priority: (l = a.priority) != null ? l : qoe.DEFAULT
            }),
            earlyReturn: void 0
        };
    }), o = [
        ...r,
        ...s
    ].sort((a, l)=>{
        var c, u;
        return ((c = a.handler.priority) != null ? c : 0) - ((u = l.handler.priority) != null ? u : 0);
    });
    for (let { handler: a, earlyReturn: l } of o)if (i = a.handle(i), l != null && l(i)) return i;
    return i;
}, Jra = H_h;

}
