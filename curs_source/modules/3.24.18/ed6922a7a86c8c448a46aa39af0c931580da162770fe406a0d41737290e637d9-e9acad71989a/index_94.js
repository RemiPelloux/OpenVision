import { x } from "./tslib.es6.js";
var sgl, ogl, agl, wvs, cgl, lgl, Cvs, Tvs, Evs, ugl, xvs, fY, dgl, hgl, h9e, pgl, mgl, ggl, fgl, vgl, _gl, bgl, ygl, Sgl, OYe, Ivs, kgl, wgl, Cgl, Tgl, Egl, Avs, tDe, xgl, Rvs, Igl, Agl, Rgl, fwn, Dgl, Dvs, Mgl, $Ei, Mvs, Pgl, vwn, Lgl, Ngl, Pvs, Ogl, Fgl, Bgl, HEi, Lvs, Ugl, $gl, Hgl, Wgl, Ggl, Vgl, Nvs, jgl, qgl, zgl, Kgl, Ygl, Xgl, Zgl, Qgl, Jgl, efl, tfl, Ovs, nfl, ifl, rfl, sfl, ofl, afl, Fvs, cfl, Bvs, lfl, ufl, dfl, hfl, pfl, mfl, gfl, ffl, WEi, vfl, vY, _fl, bfl, yfl, Uvs;
export { $Ei, $gl, Agl, Avs, Bgl, Bvs, Cgl, Cvs, Dgl, Dvs, Egl, Evs, Fgl, Fvs, Ggl, HEi, Hgl, Igl, Ivs, Jgl, Kgl, Lgl, Lvs, Mgl, Mvs, Ngl, Nvs, OYe, Ogl, Ovs, Pgl, Pvs, Qgl, Rgl, Rvs, Sgl, Tgl, Tvs, Ugl, Uvs, Vgl, WEi, Wgl, Xgl, Ygl, Zgl, _fl, _gl, afl, agl, bfl, bgl, cfl, cgl, dfl, dgl, efl, fY, ffl, fgl, fwn, gfl, ggl, h9e, hfl, hgl, ifl, jgl, kgl, lfl, lgl, mfl, mgl, nfl, ofl, ogl, pfl, pgl, qgl, rfl, sfl, sgl, tDe, tfl, ufl, ugl, vY, vfl, vgl, vwn, wgl, wvs, xgl, xvs, yfl, ygl, zgl };
var __wakaru_Sfl_initialized = false;
export function Sfl() {
if (__wakaru_Sfl_initialized) return;
__wakaru_Sfl_initialized = true;
x(), sgl = Object.defineProperty, ogl = Object.defineProperties, agl = Object.getOwnPropertyDescriptors, wvs = Object.getOwnPropertySymbols, cgl = Object.prototype.hasOwnProperty, lgl = Object.prototype.propertyIsEnumerable, Cvs = (e, t, n)=>t in e ? sgl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Tvs = (e, t)=>{
    for(var n in t || (t = {}))cgl.call(t, n) && Cvs(e, n, t[n]);
    if (wvs) for (var n of wvs(t))lgl.call(t, n) && Cvs(e, n, t[n]);
    return e;
}, Evs = (e, t)=>ogl(e, agl(t)), ugl = (e)=>{
    let t = new Uint8Array(e.length + 1), n = !1, i = !1, r = 0;
    for(; r < e.length;){
        if (e[r] === "\\" && r + 1 < e.length && e[r + 1] === "`") {
            let s = n || i ? 1 : 0;
            t[r + 1] = s, t[r + 2] = s, r += 2;
            continue;
        }
        if (e.substring(r, r + 3) === "```") {
            i = !i;
            let s = n || i ? 1 : 0, o = Math.min(r + 3, e.length);
            for(let a = r + 1; a <= o; a += 1)t[a] = s;
            r = o;
            continue;
        }
        !i && e[r] === "`" && (n = !n), t[r + 1] = n || i ? 1 : 0, r += 1;
    }
    return t;
}, xvs = null, fY = (e, t)=>{
    let n = xvs;
    return (n === null || n.text !== e) && (n = {
        text: e,
        lookup: ugl(e)
    }, xvs = n), n.lookup[Math.min(t, e.length)] === 1;
}, dgl = (e, t)=>{
    let n = e.substring(t, t + 3) === "```", i = t > 0 && e.substring(t - 1, t + 2) === "```", r = t > 1 && e.substring(t - 2, t + 1) === "```";
    return n || i || r;
}, hgl = (e)=>{
    let t = 0;
    for(let n = 0; n < e.length; n += 1){
        if (e[n] === "\\" && n + 1 < e.length && e[n + 1] === "`") {
            n += 1;
            continue;
        }
        e[n] === "`" && !dgl(e, n) && (t += 1);
    }
    return t;
}, h9e = (e, t)=>{
    let n = !1, i = !1, r = -1;
    for(let s = 0; s < e.length; s += 1){
        if (e[s] === "\\" && s + 1 < e.length && e[s + 1] === "`") {
            s += 1;
            continue;
        }
        if (e.substring(s, s + 3) === "```") {
            i = !i, s += 2;
            continue;
        }
        if (!i && e[s] === "`") if (n) {
            if (r < t && t < s) return !0;
            n = !1, r = -1;
        } else n = !0, r = s;
    }
    return !1;
}, pgl = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm, mgl = (e)=>!e || typeof e != "string" || !e.includes(">") ? e : e.replace(pgl, (t, n, i, r)=>fY(e, r) ? t : `${n}\\>${i}`), ggl = /(\*\*)([^*]*\*?)$/, fgl = /(__)([^_]*?)$/, vgl = /(\*\*\*)([^*]*?)$/, _gl = /(\*)([^*]*?)$/, bgl = /(_)([^_]*?)$/, ygl = /(`)([^`]*?)$/, Sgl = /(~~)([^~]*?)$/, OYe = /^[\s_~*`]*$/, Ivs = /^[\s]*[-*+][\s]+$/, kgl = /[\p{L}\p{N}_]/u, wgl = /^```[^`\n]*```?$/, Cgl = /^\*{4,}$/, Tgl = /(__)([^_]+)_$/, Egl = /(~~)([^~]+)~$/, Avs = /~~/g, tDe = (e)=>{
    if (!e) return !1;
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t === 95 ? !0 : kgl.test(e);
}, xgl = (e, t)=>{
    let n = 1;
    for(let i = t - 1; i >= 0; i -= 1)if (e[i] === "]") n += 1;
    else if (e[i] === "[" && (n -= 1, n === 0)) return i;
    return -1;
}, Rvs = (e, t)=>{
    let n = 1;
    for(let i = t + 1; i < e.length; i += 1)if (e[i] === "[") n += 1;
    else if (e[i] === "]" && (n -= 1, n === 0)) return i;
    return -1;
}, Igl = (e)=>e === "inlineLatex" || e === "blockLatex", Agl = (e, t)=>t === "[" && e === "none" ? "blockLatex" : t === "]" && e === "blockLatex" ? "none" : t === "(" && e === "none" ? "inlineLatex" : t === ")" && e === "inlineLatex" ? "none" : null, Rgl = (e, t)=>t ? e === "blockDollar" ? "none" : "blockDollar" : e === "blockDollar" ? e : e === "inlineDollar" ? "none" : "inlineDollar", fwn = (e, t)=>{
    let n = "none";
    for(let i = 0; i < e.length && i < t; i += 1){
        if (e[i] === "\\" && e[i + 1] === "$") {
            i += 1;
            continue;
        }
        if (e[i] === "\\") {
            let r = Agl(n, e[i + 1]);
            if (r !== null) {
                n = r, i += 1;
                continue;
            }
        }
        if (e[i] === "$" && !Igl(n)) {
            let r = e[i + 1] === "$";
            n = Rgl(n, r), r && (i += 1);
        }
    }
    return n !== "none";
}, Dgl = (e, t)=>{
    for(let n = t; n < e.length; n += 1){
        if (e[n] === ")") return !0;
        if (e[n] === `
`) return !1;
    }
    return !1;
}, Dvs = (e, t)=>{
    for(let n = t - 1; n >= 0; n -= 1){
        if (e[n] === ")") return !1;
        if (e[n] === "(") return n > 0 && e[n - 1] === "]" ? Dgl(e, t) : !1;
        if (e[n] === `
`) return !1;
    }
    return !1;
}, Mgl = (e, t)=>{
    for(let n = t - 1; n >= 0; n -= 1){
        if (e[n] === ">") return !1;
        if (e[n] === "<") {
            let i = n + 1 < e.length ? e[n + 1] : "";
            return i >= "a" && i <= "z" || i >= "A" && i <= "Z" || i === "/";
        }
        if (e[n] === `
`) return !1;
    }
    return !1;
}, $Ei = (e, t, n)=>{
    let i = 0;
    for(let c = t - 1; c >= 0; c -= 1)if (e[c] === `
`) {
        i = c + 1;
        break;
    }
    let r = e.length;
    for(let c = t; c < e.length; c += 1)if (e[c] === `
`) {
        r = c;
        break;
    }
    let s = e.substring(i, r), o = 0, a = !1;
    for (let c of s)if (c === n) o += 1;
    else if (c !== " " && c !== "	") {
        a = !0;
        break;
    }
    return o >= 3 && !a;
}, Mvs = (e)=>e.includes("$") || e.includes("\\(") || e.includes("\\["), Pgl = (e, t, n, i)=>n === "\\" || Mvs(e) && fwn(e, t) ? !0 : n !== "*" && i === "*" ? (t < e.length - 2 ? e[t + 2] : "") !== "*" : n === "*" || (!n || n === " " || n === "	" || n === `
`) && (!i || i === " " || i === "	" || i === `
`), vwn = (e)=>e === " " || e === "	" || e === `
`, Lgl = (e, t)=>!!(e && t && tDe(e) && tDe(t)), Ngl = (e, t, n, i)=>{
    let r = Lgl(e, t), s = !!t && !vwn(t), o = !!e && !vwn(e);
    return r && n % 2 === 0 && !i ? {
        count: !1
    } : o && n % 2 === 1 || s ? {
        count: !0,
        inWordAsteriskChain: r
    } : {
        count: !1
    };
}, Pvs = (e)=>{
    let t = 0, n = !1, i = !1, r = e.length;
    for(let s = 0; s < r; s += 1){
        if (e[s] === "`" && s + 2 < r && e[s + 1] === "`" && e[s + 2] === "`") {
            n = !n, s += 2;
            continue;
        }
        if (n) continue;
        if (e[s] !== "*") {
            tDe(e[s]) || (i = !1);
            continue;
        }
        let o = s > 0 ? e[s - 1] : "", a = s < r - 1 ? e[s + 1] : "";
        if (Pgl(e, s, o, a)) continue;
        let c = Ngl(o, a, t, i);
        c.count && (t += 1, i = c.inWordAsteriskChain);
    }
    return t;
}, Ogl = (e, t, n, i)=>!!(n === "\\" || Mvs(e) && fwn(e, t) || Dvs(e, t) || Mgl(e, t) || n === "_" || i === "_" || n && i && tDe(n) && tDe(i)), Fgl = (e)=>{
    let t = 0, n = !1, i = e.length;
    for(let r = 0; r < i; r += 1){
        if (e[r] === "`" && r + 2 < i && e[r + 1] === "`" && e[r + 2] === "`") {
            n = !n, r += 2;
            continue;
        }
        if (n || e[r] !== "_") continue;
        let s = r > 0 ? e[r - 1] : "", o = r < i - 1 ? e[r + 1] : "";
        Ogl(e, r, s, o) || (t += 1);
    }
    return t;
}, Bgl = (e)=>{
    let t = 0, n = 0, i = !1;
    for(let r = 0; r < e.length; r += 1){
        if (e[r] === "`" && r + 2 < e.length && e[r + 1] === "`" && e[r + 2] === "`") {
            n >= 3 && (t += Math.floor(n / 3)), n = 0, i = !i, r += 2;
            continue;
        }
        i || (e[r] === "*" ? n += 1 : (n >= 3 && (t += Math.floor(n / 3)), n = 0));
    }
    return n >= 3 && (t += Math.floor(n / 3)), t;
}, HEi = (e)=>{
    let t = 0, n = !1;
    for(let i = 0; i < e.length; i += 1){
        if (e[i] === "`" && i + 2 < e.length && e[i + 1] === "`" && e[i + 2] === "`") {
            n = !n, i += 2;
            continue;
        }
        n || e[i] === "*" && i + 1 < e.length && e[i + 1] === "*" && (t += 1, i += 1);
    }
    return t;
}, Lvs = (e)=>{
    let t = 0, n = !1;
    for(let i = 0; i < e.length; i += 1){
        if (e[i] === "`" && i + 2 < e.length && e[i + 1] === "`" && e[i + 2] === "`") {
            n = !n, i += 2;
            continue;
        }
        n || e[i] === "_" && i + 1 < e.length && e[i + 1] === "_" && (t += 1, i += 1);
    }
    return t;
}, Ugl = (e, t, n)=>{
    if (!t || OYe.test(t)) return !0;
    let i = e.substring(0, n).lastIndexOf(`
`), r = i === -1 ? 0 : i + 1, s = e.substring(r, n);
    return Ivs.test(s) && t.includes(`
`) ? !0 : $Ei(e, n, "*");
}, $gl = (e)=>{
    let t = e.match(ggl);
    if (!t) return e;
    let n = t[2], i = e.lastIndexOf(t[1]);
    return fY(e, i) || h9e(e, i) || Ugl(e, n, i) ? e : HEi(e) % 2 === 1 ? n.endsWith("*") ? `${e}*` : `${e}**` : e;
}, Hgl = (e, t, n)=>{
    if (!t || OYe.test(t)) return !0;
    let i = e.substring(0, n).lastIndexOf(`
`), r = i === -1 ? 0 : i + 1, s = e.substring(r, n);
    return Ivs.test(s) && t.includes(`
`) ? !0 : $Ei(e, n, "_");
}, Wgl = (e)=>{
    let t = e.match(fgl);
    if (!t) {
        let r = e.match(Tgl);
        if (r) {
            let s = e.lastIndexOf(r[1]);
            if (!(fY(e, s) || h9e(e, s)) && Lvs(e) % 2 === 1) return `${e}_`;
        }
        return e;
    }
    let n = t[2], i = e.lastIndexOf(t[1]);
    return fY(e, i) || h9e(e, i) || Hgl(e, n, i) ? e : Lvs(e) % 2 === 1 ? `${e}__` : e;
}, Ggl = (e)=>{
    let t = !1;
    for(let n = 0; n < e.length; n += 1){
        if (e[n] === "`" && n + 2 < e.length && e[n + 1] === "`" && e[n + 2] === "`") {
            t = !t, n += 2;
            continue;
        }
        if (!t && e[n] === "*" && e[n - 1] !== "*" && e[n + 1] !== "*" && e[n - 1] !== "\\" && !fwn(e, n)) {
            let i = n > 0 ? e[n - 1] : "", r = n < e.length - 1 ? e[n + 1] : "", s = !i || vwn(i), o = !r || vwn(r);
            if (s && o || i && r && tDe(i) && tDe(r) || o) continue;
            return n;
        }
    }
    return -1;
}, Vgl = (e)=>{
    if (!e.match(_gl)) return e;
    let t = Ggl(e);
    if (t === -1 || fY(e, t) || h9e(e, t)) return e;
    let n = e.substring(t + 1);
    return !n || OYe.test(n) ? e : Pvs(e) % 2 === 1 ? `${e}*` : e;
}, Nvs = (e)=>{
    let t = !1;
    for(let n = 0; n < e.length; n += 1){
        if (e[n] === "`" && n + 2 < e.length && e[n + 1] === "`" && e[n + 2] === "`") {
            t = !t, n += 2;
            continue;
        }
        if (!t && e[n] === "_" && e[n - 1] !== "_" && e[n + 1] !== "_" && e[n - 1] !== "\\" && !fwn(e, n) && !Dvs(e, n)) {
            let i = n > 0 ? e[n - 1] : "", r = n < e.length - 1 ? e[n + 1] : "";
            if (i && r && tDe(i) && tDe(r)) continue;
            return n;
        }
    }
    return -1;
}, jgl = (e)=>{
    let t = e.length;
    for(; t > 0 && e[t - 1] === `
`;)t -= 1;
    if (t < e.length) {
        let n = e.slice(0, t), i = e.slice(t);
        return `${n}_${i}`;
    }
    return `${e}_`;
}, qgl = (e)=>{
    if (!e.endsWith("**")) return null;
    let t = e.slice(0, -2);
    if (HEi(t) % 2 !== 1) return null;
    let n = t.indexOf("**"), i = Nvs(t);
    return n !== -1 && i !== -1 && n < i ? `${t}_**` : null;
}, zgl = (e)=>{
    if (!e.match(bgl)) return e;
    let t = Nvs(e);
    if (t === -1) return e;
    let n = e.substring(t + 1);
    if (!n || OYe.test(n) || fY(e, t) || h9e(e, t)) return e;
    if (Fgl(e) % 2 === 1) {
        let i = qgl(e);
        return i !== null ? i : jgl(e);
    }
    return e;
}, Kgl = (e)=>{
    let t = HEi(e), n = Pvs(e);
    return t % 2 === 0 && n % 2 === 0;
}, Ygl = (e, t, n)=>!t || OYe.test(t) || fY(e, n) || h9e(e, n) ? !0 : $Ei(e, n, "*"), Xgl = (e)=>{
    if (Cgl.test(e)) return e;
    let t = e.match(vgl);
    if (!t) return e;
    let n = t[2], i = e.lastIndexOf(t[1]);
    return Ygl(e, n, i) ? e : Bgl(e) % 2 === 1 ? Kgl(e) ? e : `${e}***` : e;
}, Zgl = /<[a-zA-Z/][^>]*$/, Qgl = (e)=>{
    let t = e.match(Zgl);
    return !t || t.index === void 0 || fY(e, t.index) ? e : e.substring(0, t.index).trimEnd();
}, Jgl = (e)=>!e.match(wgl) || e.includes(`
`) ? null : e.endsWith("``") && !e.endsWith("```") ? `${e}\`` : e, efl = (e)=>(e.match(/```/g) || []).length % 2 === 1, tfl = (e)=>{
    let t = Jgl(e);
    if (t !== null) return t;
    let n = e.match(ygl);
    if (n && !efl(e)) {
        let i = n[2];
        if (!i || OYe.test(i)) return e;
        if (hgl(e) % 2 === 1) return `${e}\``;
    }
    return e;
}, Ovs = (e, t)=>t >= 2 && e.substring(t - 2, t + 1) === "```" || t >= 1 && e.substring(t - 1, t + 2) === "```" || t <= e.length - 3 && e.substring(t, t + 3) === "```", nfl = (e)=>{
    let t = 0, n = !1;
    for(let i = 0; i < e.length - 1; i += 1)e[i] === "`" && !Ovs(e, i) && (n = !n), !n && e[i] === "$" && e[i + 1] === "$" && (t += 1, i += 1);
    return t;
}, ifl = (e)=>{
    let t = 0, n = !1;
    for(let i = 0; i < e.length; i += 1){
        if (e[i] === "\\") {
            i += 1;
            continue;
        }
        if (e[i] === "`" && !Ovs(e, i)) {
            n = !n;
            continue;
        }
        !n && e[i] === "$" && (i + 1 < e.length && e[i + 1] === "$" ? i += 1 : t += 1);
    }
    return t;
}, rfl = (e)=>{
    if (e.endsWith("$") && !e.endsWith("$$")) return `${e}$`;
    let t = e.indexOf("$$");
    return t !== -1 && e.indexOf(`
`, t) !== -1 && !e.endsWith(`
`) ? `${e}
$$` : `${e}$$`;
}, sfl = (e)=>nfl(e) % 2 === 0 ? e : rfl(e), ofl = (e)=>ifl(e) % 2 === 1 ? `${e}$` : e, afl = (e, t, n)=>{
    if (e.substring(t + 2).includes(")")) return null;
    let i = xgl(e, t);
    if (i === -1 || fY(e, i)) return null;
    let r = i > 0 && e[i - 1] === "!", s = r ? i - 1 : i, o = e.substring(0, s);
    if (r) return o;
    let a = e.substring(i + 1, t);
    return n === "text-only" ? `${o}${a}` : `${o}[${a}](streamdown:incomplete-link)`;
}, Fvs = (e, t)=>{
    for(let n = 0; n < t; n++)if (e[n] === "[" && !fY(e, n)) {
        if (n > 0 && e[n - 1] === "!") continue;
        let i = Rvs(e, n);
        if (i === -1) return n;
        if (i + 1 < e.length && e[i + 1] === "(") {
            let r = e.indexOf(")", i + 2);
            r !== -1 && (n = r);
        }
    }
    return t;
}, cfl = (e, t, n)=>{
    let i = t > 0 && e[t - 1] === "!", r = i ? t - 1 : t;
    if (!e.substring(t + 1).includes("]")) {
        let s = e.substring(0, r);
        if (i) return s;
        if (n === "text-only") {
            let o = Fvs(e, t);
            return e.substring(0, o) + e.substring(o + 1);
        }
        return `${e}](streamdown:incomplete-link)`;
    }
    if (Rvs(e, t) === -1) {
        let s = e.substring(0, r);
        if (i) return s;
        if (n === "text-only") {
            let o = Fvs(e, t);
            return e.substring(0, o) + e.substring(o + 1);
        }
        return `${e}](streamdown:incomplete-link)`;
    }
    return null;
}, Bvs = (e, t = "protocol")=>{
    let n = e.lastIndexOf("](");
    if (n !== -1 && !fY(e, n)) {
        let i = afl(e, n, t);
        if (i !== null) return i;
    }
    for(let i = e.length - 1; i >= 0; i -= 1)if (e[i] === "[" && !fY(e, i)) {
        let r = cfl(e, i, t);
        if (r !== null) return r;
    }
    return e;
}, lfl = /^-{1,2}$/, ufl = /^[\s]*-{1,2}[\s]+$/, dfl = /^={1,2}$/, hfl = /^[\s]*={1,2}[\s]+$/, pfl = (e)=>{
    if (!e || typeof e != "string") return e;
    let t = e.lastIndexOf(`
`);
    if (t === -1) return e;
    let n = e.substring(t + 1), i = e.substring(0, t), r = n.trim();
    if (lfl.test(r) && !n.match(ufl)) {
        let s = i.split(`
`).at(-1);
        if (s && s.trim().length > 0) return `${e}\u200B`;
    }
    if (dfl.test(r) && !n.match(hfl)) {
        let s = i.split(`
`).at(-1);
        if (s && s.trim().length > 0) return `${e}\u200B`;
    }
    return e;
}, mfl = /([\p{L}\p{N}_])~(?!~)(?=[\p{L}\p{N}_])/gu, gfl = (e)=>!e || typeof e != "string" || !e.includes("~") ? e : e.replace(mfl, (t, n, i)=>{
        let r = i + n.length;
        return fY(e, r) ? t : `${n}\\~`;
    }), ffl = (e)=>{
    var t, n;
    let i = e.match(Sgl);
    if (i) {
        let r = i[2];
        if (!r || OYe.test(r)) return e;
        let s = e.lastIndexOf(i[1]);
        if (fY(e, s) || h9e(e, s)) return e;
        if (((t = e.match(Avs)) == null ? void 0 : t.length) % 2 === 1) return `${e}~~`;
    } else {
        let r = e.match(Egl);
        if (r) {
            let s = e.lastIndexOf(r[0].slice(0, 2));
            if (fY(e, s) || h9e(e, s)) return e;
            if (((n = e.match(Avs)) == null ? void 0 : n.length) % 2 === 1) return `${e}~`;
        }
    }
    return e;
}, WEi = (e)=>e !== !1, vfl = (e)=>e === !0, vY = {
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
}, _fl = [
    {
        handler: {
            name: "singleTilde",
            handle: gfl,
            priority: vY.SINGLE_TILDE
        },
        optionKey: "singleTilde"
    },
    {
        handler: {
            name: "comparisonOperators",
            handle: mgl,
            priority: vY.COMPARISON_OPERATORS
        },
        optionKey: "comparisonOperators"
    },
    {
        handler: {
            name: "htmlTags",
            handle: Qgl,
            priority: vY.HTML_TAGS
        },
        optionKey: "htmlTags"
    },
    {
        handler: {
            name: "setextHeadings",
            handle: pfl,
            priority: vY.SETEXT_HEADINGS
        },
        optionKey: "setextHeadings"
    },
    {
        handler: {
            name: "links",
            handle: Bvs,
            priority: vY.LINKS
        },
        optionKey: "links",
        earlyReturn: (e)=>e.endsWith("](streamdown:incomplete-link)")
    },
    {
        handler: {
            name: "boldItalic",
            handle: Xgl,
            priority: vY.BOLD_ITALIC
        },
        optionKey: "boldItalic"
    },
    {
        handler: {
            name: "bold",
            handle: $gl,
            priority: vY.BOLD
        },
        optionKey: "bold"
    },
    {
        handler: {
            name: "italicDoubleUnderscore",
            handle: Wgl,
            priority: vY.ITALIC_DOUBLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleAsterisk",
            handle: Vgl,
            priority: vY.ITALIC_SINGLE_ASTERISK
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleUnderscore",
            handle: zgl,
            priority: vY.ITALIC_SINGLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "inlineCode",
            handle: tfl,
            priority: vY.INLINE_CODE
        },
        optionKey: "inlineCode"
    },
    {
        handler: {
            name: "strikethrough",
            handle: ffl,
            priority: vY.STRIKETHROUGH
        },
        optionKey: "strikethrough"
    },
    {
        handler: {
            name: "katex",
            handle: sfl,
            priority: vY.KATEX
        },
        optionKey: "katex"
    },
    {
        handler: {
            name: "inlineKatex",
            handle: ofl,
            priority: vY.INLINE_KATEX
        },
        optionKey: "inlineKatex"
    }
], bfl = (e)=>{
    var t;
    let n = (t = e?.linkMode) != null ? t : "protocol";
    return _fl.filter(({ handler: i, optionKey: r })=>i.name === "links" ? WEi(e?.links) || WEi(e?.images) : i.name === "inlineKatex" ? vfl(e?.inlineKatex) : WEi(e?.[r])).map(({ handler: i, earlyReturn: r })=>i.name === "links" ? {
            handler: Evs(Tvs({}, i), {
                handle: (s)=>Bvs(s, n)
            }),
            earlyReturn: n === "protocol" ? r : void 0
        } : {
            handler: i,
            earlyReturn: r
        });
}, yfl = (e, t)=>{
    var n;
    if (!e || typeof e != "string") return e;
    let i = e.endsWith(" ") && !e.endsWith("  ") ? e.slice(0, -1) : e, r = bfl(t), s = ((n = t?.handlers) != null ? n : []).map((a)=>{
        var c;
        return {
            handler: Evs(Tvs({}, a), {
                priority: (c = a.priority) != null ? c : vY.DEFAULT
            }),
            earlyReturn: void 0
        };
    }), o = [
        ...r,
        ...s
    ].sort((a, c)=>{
        var l, u;
        return ((l = a.handler.priority) != null ? l : 0) - ((u = c.handler.priority) != null ? u : 0);
    });
    for (let { handler: a, earlyReturn: c } of o)if (i = a.handle(i), c != null && c(i)) return i;
    return i;
}, Uvs = yfl;

}
