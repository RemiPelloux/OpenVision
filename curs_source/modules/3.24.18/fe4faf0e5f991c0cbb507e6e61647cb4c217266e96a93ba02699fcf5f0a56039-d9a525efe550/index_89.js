import { i } from "./plugin-brand-icon.js";
var Jdr, Qdr, epr, BRt, tpr, npr, qRt, URt, GRt, rpr, WRt, Hy, ipr, apr, t$, opr, spr, cpr, lpr, upr, dpr, ppr, mpr, fpr, CP, HRt, hpr, gpr, bpr, ypr, wpr, ZRt, jS, _pr, VRt, kpr, vpr, xpr, zfe, Cpr, KRt, Spr, aMe, XRt, Epr, Bfe, Apr, Tpr, YRt, $pr, Ipr, Npr, oMe, JRt, Mpr, Rpr, Ppr, jpr, Lpr, Dpr, QRt, Fpr, Opr, zpr, Bpr, qpr, Upr, Gpr, Wpr, Hpr, Zpr, Vpr, ePt, Kpr, Xpr, Ypr, Jpr, Qpr, emr, tPt, tmr, nPt, nmr, rmr, imr, amr, omr, smr, cmr, lmr, sMe, umr, Zy, dmr, pmr, mmr, rPt;
export { $pr, Apr, BRt, Bfe, Bpr, CP, Cpr, Dpr, Epr, Fpr, GRt, Gpr, HRt, Hpr, Hy, Ipr, JRt, Jdr, Jpr, KRt, Kpr, Lpr, Mpr, Npr, Opr, Ppr, QRt, Qdr, Qpr, Rpr, Spr, Tpr, URt, Upr, VRt, Vpr, WRt, Wpr, XRt, Xpr, YRt, Ypr, ZRt, Zpr, Zy, _pr, aMe, amr, apr, bpr, cmr, cpr, dmr, dpr, ePt, emr, epr, fpr, gpr, hpr, imr, ipr, jS, jpr, kpr, lmr, lpr, mmr, mpr, nPt, nmr, npr, oMe, omr, opr, pmr, ppr, qRt, qpr, rPt, rmr, rpr, sMe, smr, spr, t$, tPt, tmr, tpr, umr, upr, vpr, wpr, xpr, ypr, zfe, zpr };
var __wakaru_fmr_initialized = false;
export function fmr() {
if (__wakaru_fmr_initialized) return;
__wakaru_fmr_initialized = true;
Jdr = Object.defineProperty, Qdr = Object.defineProperties, epr = Object.getOwnPropertyDescriptors, BRt = Object.getOwnPropertySymbols, tpr = Object.prototype.hasOwnProperty, npr = Object.prototype.propertyIsEnumerable, qRt = i((r, e, a)=>e in r ? Jdr(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a, "P"), URt = i((r, e)=>{
    for(var a in e || (e = {}))tpr.call(e, a) && qRt(r, a, e[a]);
    if (BRt) for (var a of BRt(e))npr.call(e, a) && qRt(r, a, e[a]);
    return r;
}, "I"), GRt = i((r, e)=>Qdr(r, epr(e)), "b"), rpr = i((r)=>{
    let e = new Uint8Array(r.length + 1), a = !1, s = !1, l = 0;
    for(; l < r.length;){
        if (r[l] === "\\" && l + 1 < r.length && r[l + 1] === "`") {
            let u = a || s ? 1 : 0;
            e[l + 1] = u, e[l + 2] = u, l += 2;
            continue;
        }
        if (r.substring(l, l + 3) === "```") {
            s = !s;
            let u = a || s ? 1 : 0, p = Math.min(l + 3, r.length);
            for(let m = l + 1; m <= p; m += 1)e[m] = u;
            l = p;
            continue;
        }
        !s && r[l] === "`" && (a = !a), e[l + 1] = a || s ? 1 : 0, l += 1;
    }
    return e;
}, "kn"), WRt = null, Hy = i((r, e)=>{
    let a = WRt;
    return (a === null || a.text !== r) && (a = {
        text: r,
        lookup: rpr(r)
    }, WRt = a), a.lookup[Math.min(e, r.length)] === 1;
}, "c"), ipr = i((r, e)=>{
    let a = r.substring(e, e + 3) === "```", s = e > 0 && r.substring(e - 1, e + 2) === "```", l = e > 1 && r.substring(e - 2, e + 1) === "```";
    return a || s || l;
}, "In"), apr = i((r)=>{
    let e = 0;
    for(let a = 0; a < r.length; a += 1){
        if (r[a] === "\\" && a + 1 < r.length && r[a + 1] === "`") {
            a += 1;
            continue;
        }
        r[a] === "`" && !ipr(r, a) && (e += 1);
    }
    return e;
}, "E"), t$ = i((r, e)=>{
    let a = !1, s = !1, l = -1;
    for(let u = 0; u < r.length; u += 1){
        if (r[u] === "\\" && u + 1 < r.length && r[u + 1] === "`") {
            u += 1;
            continue;
        }
        if (r.substring(u, u + 3) === "```") {
            s = !s, u += 2;
            continue;
        }
        if (!s && r[u] === "`") if (a) {
            if (l < e && e < u) return !0;
            a = !1, l = -1;
        } else a = !0, l = u;
    }
    return !1;
}, "d"), opr = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm, spr = i((r)=>!r || typeof r != "string" || !r.includes(">") ? r : r.replace(opr, (e, a, s, l)=>Hy(r, l) ? e : `${a}\\>${s}`), "y"), cpr = /(\*\*)([^*]*\*?)$/, lpr = /(__)([^_]*?)$/, upr = /(\*\*\*)([^*]*?)$/, dpr = /(\*)([^*]*?)$/, ppr = /(_)([^_]*?)$/, mpr = /(`)([^`]*?)$/, fpr = /(~~)([^~]*?)$/, CP = /^[\s_~*`]*$/, HRt = /^[\s]*[-*+][\s]+$/, hpr = /[\p{L}\p{N}_]/u, gpr = /^```[^`\n]*```?$/, bpr = /^\*{4,}$/, ypr = /(__)([^_]+)_$/, wpr = /(~~)([^~]+)~$/, ZRt = /~~/g, jS = i((r)=>{
    if (!r) return !1;
    let e = r.charCodeAt(0);
    return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 95 ? !0 : hpr.test(r);
}, "f"), _pr = i((r, e)=>{
    let a = 1;
    for(let s = e - 1; s >= 0; s -= 1)if (r[s] === "]") a += 1;
    else if (r[s] === "[" && (a -= 1, a === 0)) return s;
    return -1;
}, "Y"), VRt = i((r, e)=>{
    let a = 1;
    for(let s = e + 1; s < r.length; s += 1)if (r[s] === "[") a += 1;
    else if (r[s] === "]" && (a -= 1, a === 0)) return s;
    return -1;
}, "T"), kpr = i((r)=>r === "inlineLatex" || r === "blockLatex", "An"), vpr = i((r, e)=>e === "[" && r === "none" ? "blockLatex" : e === "]" && r === "blockLatex" ? "none" : e === "(" && r === "none" ? "inlineLatex" : e === ")" && r === "inlineLatex" ? "none" : null, "Tn"), xpr = i((r, e)=>e ? r === "blockDollar" ? "none" : "blockDollar" : r === "blockDollar" ? r : r === "inlineDollar" ? "none" : "inlineDollar", "Ln"), zfe = i((r, e)=>{
    let a = "none";
    for(let s = 0; s < r.length && s < e; s += 1){
        if (r[s] === "\\" && r[s + 1] === "$") {
            s += 1;
            continue;
        }
        if (r[s] === "\\") {
            let l = vpr(a, r[s + 1]);
            if (l !== null) {
                a = l, s += 1;
                continue;
            }
        }
        if (r[s] === "$" && !kpr(a)) {
            let l = r[s + 1] === "$";
            a = xpr(a, l), l && (s += 1);
        }
    }
    return a !== "none";
}, "h"), Cpr = i((r, e)=>{
    for(let a = e; a < r.length; a += 1){
        if (r[a] === ")") return !0;
        if (r[a] === `
`) return !1;
    }
    return !1;
}, "Bn"), KRt = i((r, e)=>{
    for(let a = e - 1; a >= 0; a -= 1){
        if (r[a] === ")") return !1;
        if (r[a] === "(") return a > 0 && r[a - 1] === "]" ? Cpr(r, e) : !1;
        if (r[a] === `
`) return !1;
    }
    return !1;
}, "m"), Spr = i((r, e)=>{
    for(let a = e - 1; a >= 0; a -= 1){
        if (r[a] === ">") return !1;
        if (r[a] === "<") {
            let s = a + 1 < r.length ? r[a + 1] : "";
            return s >= "a" && s <= "z" || s >= "A" && s <= "Z" || s === "/";
        }
        if (r[a] === `
`) return !1;
    }
    return !1;
}, "j"), aMe = i((r, e, a)=>{
    let s = 0;
    for(let b = e - 1; b >= 0; b -= 1)if (r[b] === `
`) {
        s = b + 1;
        break;
    }
    let l = r.length;
    for(let b = e; b < r.length; b += 1)if (r[b] === `
`) {
        l = b;
        break;
    }
    let u = r.substring(s, l), p = 0, m = !1;
    for (let b of u)if (b === a) p += 1;
    else if (b !== " " && b !== "	") {
        m = !0;
        break;
    }
    return p >= 3 && !m;
}, "p"), XRt = i((r)=>r.includes("$") || r.includes("\\(") || r.includes("\\["), "Z"), Epr = i((r, e, a, s)=>a === "\\" || XRt(r) && zfe(r, e) ? !0 : a !== "*" && s === "*" ? (e < r.length - 2 ? r[e + 2] : "") !== "*" : a === "*" || (!a || a === " " || a === "	" || a === `
`) && (!s || s === " " || s === "	" || s === `
`), "Sn"), Bfe = i((r)=>r === " " || r === "	" || r === `
`, "k"), Apr = i((r, e)=>!!(r && e && jS(r) && jS(e)), "On"), Tpr = i((r, e, a, s)=>{
    let l = Apr(r, e), u = !!e && !Bfe(e), p = !!r && !Bfe(r);
    return l && a % 2 === 0 && !s ? {
        count: !1
    } : p && a % 2 === 1 || u ? {
        count: !0,
        inWordAsteriskChain: l
    } : {
        count: !1
    };
}, "_n"), YRt = i((r)=>{
    let e = 0, a = !1, s = !1, l = r.length;
    for(let u = 0; u < l; u += 1){
        if (r[u] === "`" && u + 2 < l && r[u + 1] === "`" && r[u + 2] === "`") {
            a = !a, u += 2;
            continue;
        }
        if (a) continue;
        if (r[u] !== "*") {
            jS(r[u]) || (s = !1);
            continue;
        }
        let p = u > 0 ? r[u - 1] : "", m = u < l - 1 ? r[u + 1] : "";
        if (Epr(r, u, p, m)) continue;
        let b = Tpr(p, m, e, s);
        b.count && (e += 1, s = b.inWordAsteriskChain);
    }
    return e;
}, "v"), $pr = i((r, e, a, s)=>!!(a === "\\" || XRt(r) && zfe(r, e) || KRt(r, e) || Spr(r, e) || a === "_" || s === "_" || a && s && jS(a) && jS(s)), "Mn"), Ipr = i((r)=>{
    let e = 0, a = !1, s = r.length;
    for(let l = 0; l < s; l += 1){
        if (r[l] === "`" && l + 2 < s && r[l + 1] === "`" && r[l + 2] === "`") {
            a = !a, l += 2;
            continue;
        }
        if (a || r[l] !== "_") continue;
        let u = l > 0 ? r[l - 1] : "", p = l < s - 1 ? r[l + 1] : "";
        $pr(r, l, u, p) || (e += 1);
    }
    return e;
}, "Pn"), Npr = i((r)=>{
    let e = 0, a = 0, s = !1;
    for(let l = 0; l < r.length; l += 1){
        if (r[l] === "`" && l + 2 < r.length && r[l + 1] === "`" && r[l + 2] === "`") {
            a >= 3 && (e += Math.floor(a / 3)), a = 0, s = !s, l += 2;
            continue;
        }
        s || (r[l] === "*" ? a += 1 : (a >= 3 && (e += Math.floor(a / 3)), a = 0));
    }
    return a >= 3 && (e += Math.floor(a / 3)), e;
}, "$n"), oMe = i((r)=>{
    let e = 0, a = !1;
    for(let s = 0; s < r.length; s += 1){
        if (r[s] === "`" && s + 2 < r.length && r[s + 1] === "`" && r[s + 2] === "`") {
            a = !a, s += 2;
            continue;
        }
        a || r[s] === "*" && s + 1 < r.length && r[s + 1] === "*" && (e += 1, s += 1);
    }
    return e;
}, "L"), JRt = i((r)=>{
    let e = 0, a = !1;
    for(let s = 0; s < r.length; s += 1){
        if (r[s] === "`" && s + 2 < r.length && r[s + 1] === "`" && r[s + 2] === "`") {
            a = !a, s += 2;
            continue;
        }
        a || r[s] === "_" && s + 1 < r.length && r[s + 1] === "_" && (e += 1, s += 1);
    }
    return e;
}, "Q"), Mpr = i((r, e, a)=>{
    if (!e || CP.test(e)) return !0;
    let s = r.substring(0, a).lastIndexOf(`
`), l = s === -1 ? 0 : s + 1, u = r.substring(l, a);
    return HRt.test(u) && e.includes(`
`) ? !0 : aMe(r, a, "*");
}, "En"), Rpr = i((r)=>{
    let e = r.match(cpr);
    if (!e) return r;
    let a = e[2], s = r.lastIndexOf(e[1]);
    return Hy(r, s) || t$(r, s) || Mpr(r, a, s) ? r : oMe(r) % 2 === 1 ? a.endsWith("*") ? `${r}*` : `${r}**` : r;
}, "q"), Ppr = i((r, e, a)=>{
    if (!e || CP.test(e)) return !0;
    let s = r.substring(0, a).lastIndexOf(`
`), l = s === -1 ? 0 : s + 1, u = r.substring(l, a);
    return HRt.test(u) && e.includes(`
`) ? !0 : aMe(r, a, "_");
}, "yn"), jpr = i((r)=>{
    let e = r.match(lpr);
    if (!e) {
        let l = r.match(ypr);
        if (l) {
            let u = r.lastIndexOf(l[1]);
            if (!(Hy(r, u) || t$(r, u)) && JRt(r) % 2 === 1) return `${r}_`;
        }
        return r;
    }
    let a = e[2], s = r.lastIndexOf(e[1]);
    return Hy(r, s) || t$(r, s) || Ppr(r, a, s) ? r : JRt(r) % 2 === 1 ? `${r}__` : r;
}, "J"), Lpr = i((r)=>{
    let e = !1;
    for(let a = 0; a < r.length; a += 1){
        if (r[a] === "`" && a + 2 < r.length && r[a + 1] === "`" && r[a + 2] === "`") {
            e = !e, a += 2;
            continue;
        }
        if (!e && r[a] === "*" && r[a - 1] !== "*" && r[a + 1] !== "*" && r[a - 1] !== "\\" && !zfe(r, a)) {
            let s = a > 0 ? r[a - 1] : "", l = a < r.length - 1 ? r[a + 1] : "", u = !s || Bfe(s), p = !l || Bfe(l);
            if (u && p || s && l && jS(s) && jS(l) || p) continue;
            return a;
        }
    }
    return -1;
}, "Nn"), Dpr = i((r)=>{
    if (!r.match(dpr)) return r;
    let e = Lpr(r);
    if (e === -1 || Hy(r, e) || t$(r, e)) return r;
    let a = r.substring(e + 1);
    return !a || CP.test(a) ? r : YRt(r) % 2 === 1 ? `${r}*` : r;
}, "V"), QRt = i((r)=>{
    let e = !1;
    for(let a = 0; a < r.length; a += 1){
        if (r[a] === "`" && a + 2 < r.length && r[a + 1] === "`" && r[a + 2] === "`") {
            e = !e, a += 2;
            continue;
        }
        if (!e && r[a] === "_" && r[a - 1] !== "_" && r[a + 1] !== "_" && r[a - 1] !== "\\" && !zfe(r, a) && !KRt(r, a)) {
            let s = a > 0 ? r[a - 1] : "", l = a < r.length - 1 ? r[a + 1] : "";
            if (s && l && jS(s) && jS(l)) continue;
            return a;
        }
    }
    return -1;
}, "x"), Fpr = i((r)=>{
    let e = r.length;
    for(; e > 0 && r[e - 1] === `
`;)e -= 1;
    if (e < r.length) {
        let a = r.slice(0, e), s = r.slice(e);
        return `${a}_${s}`;
    }
    return `${r}_`;
}, "Rn"), Opr = i((r)=>{
    if (!r.endsWith("**")) return null;
    let e = r.slice(0, -2);
    if (oMe(e) % 2 !== 1) return null;
    let a = e.indexOf("**"), s = QRt(e);
    return a !== -1 && s !== -1 && a < s ? `${e}_**` : null;
}, "Un"), zpr = i((r)=>{
    if (!r.match(ppr)) return r;
    let e = QRt(r);
    if (e === -1) return r;
    let a = r.substring(e + 1);
    if (!a || CP.test(a) || Hy(r, e) || t$(r, e)) return r;
    if (Ipr(r) % 2 === 1) {
        let s = Opr(r);
        return s !== null ? s : Fpr(r);
    }
    return r;
}, "nn"), Bpr = i((r)=>{
    let e = oMe(r), a = YRt(r);
    return e % 2 === 0 && a % 2 === 0;
}, "Wn"), qpr = i((r, e, a)=>!e || CP.test(e) || Hy(r, a) || t$(r, a) ? !0 : aMe(r, a, "*"), "Dn"), Upr = i((r)=>{
    if (bpr.test(r)) return r;
    let e = r.match(upr);
    if (!e) return r;
    let a = e[2], s = r.lastIndexOf(e[1]);
    return qpr(r, a, s) ? r : Npr(r) % 2 === 1 ? Bpr(r) ? r : `${r}***` : r;
}, "en"), Gpr = /<[a-zA-Z/][^>]*$/, Wpr = i((r)=>{
    let e = r.match(Gpr);
    return !e || e.index === void 0 || Hy(r, e.index) ? r : r.substring(0, e.index).trimEnd();
}, "rn"), Hpr = i((r)=>!r.match(gpr) || r.includes(`
`) ? null : r.endsWith("``") && !r.endsWith("```") ? `${r}\`` : r, "Hn"), Zpr = i((r)=>(r.match(/```/g) || []).length % 2 === 1, "wn"), Vpr = i((r)=>{
    let e = Hpr(r);
    if (e !== null) return e;
    let a = r.match(mpr);
    if (a && !Zpr(r)) {
        let s = a[2];
        if (!s || CP.test(s)) return r;
        if (apr(r) % 2 === 1) return `${r}\``;
    }
    return r;
}, "on"), ePt = i((r, e)=>e >= 2 && r.substring(e - 2, e + 1) === "```" || e >= 1 && r.substring(e - 1, e + 2) === "```" || e <= r.length - 3 && r.substring(e, e + 3) === "```", "sn"), Kpr = i((r)=>{
    let e = 0, a = !1;
    for(let s = 0; s < r.length - 1; s += 1)r[s] === "`" && !ePt(r, s) && (a = !a), !a && r[s] === "$" && r[s + 1] === "$" && (e += 1, s += 1);
    return e;
}, "Gn"), Xpr = i((r)=>{
    let e = 0, a = !1;
    for(let s = 0; s < r.length; s += 1){
        if (r[s] === "\\") {
            s += 1;
            continue;
        }
        if (r[s] === "`" && !ePt(r, s)) {
            a = !a;
            continue;
        }
        !a && r[s] === "$" && (s + 1 < r.length && r[s + 1] === "$" ? s += 1 : e += 1);
    }
    return e;
}, "Fn"), Ypr = i((r)=>{
    if (r.endsWith("$") && !r.endsWith("$$")) return `${r}$`;
    let e = r.indexOf("$$");
    return e !== -1 && r.indexOf(`
`, e) !== -1 && !r.endsWith(`
`) ? `${r}
$$` : `${r}$$`;
}, "Xn"), Jpr = i((r)=>Kpr(r) % 2 === 0 ? r : Ypr(r), "tn"), Qpr = i((r)=>Xpr(r) % 2 === 1 ? `${r}$` : r, "ln"), emr = i((r, e, a)=>{
    if (r.substring(e + 2).includes(")")) return null;
    let s = _pr(r, e);
    if (s === -1 || Hy(r, s)) return null;
    let l = s > 0 && r[s - 1] === "!", u = l ? s - 1 : s, p = r.substring(0, u);
    if (l) return p;
    let m = r.substring(s + 1, e);
    return a === "text-only" ? `${p}${m}` : `${p}[${m}](streamdown:incomplete-link)`;
}, "zn"), tPt = i((r, e)=>{
    for(let a = 0; a < e; a++)if (r[a] === "[" && !Hy(r, a)) {
        if (a > 0 && r[a - 1] === "!") continue;
        let s = VRt(r, a);
        if (s === -1) return a;
        if (s + 1 < r.length && r[s + 1] === "(") {
            let l = r.indexOf(")", s + 2);
            l !== -1 && (a = l);
        }
    }
    return e;
}, "an"), tmr = i((r, e, a)=>{
    let s = e > 0 && r[e - 1] === "!", l = s ? e - 1 : e;
    if (!r.substring(e + 1).includes("]")) {
        let u = r.substring(0, l);
        if (s) return u;
        if (a === "text-only") {
            let p = tPt(r, e);
            return r.substring(0, p) + r.substring(p + 1);
        }
        return `${r}](streamdown:incomplete-link)`;
    }
    if (VRt(r, e) === -1) {
        let u = r.substring(0, l);
        if (s) return u;
        if (a === "text-only") {
            let p = tPt(r, e);
            return r.substring(0, p) + r.substring(p + 1);
        }
        return `${r}](streamdown:incomplete-link)`;
    }
    return null;
}, "Yn"), nPt = i((r, e = "protocol")=>{
    let a = r.lastIndexOf("](");
    if (a !== -1 && !Hy(r, a)) {
        let s = emr(r, a, e);
        if (s !== null) return s;
    }
    for(let s = r.length - 1; s >= 0; s -= 1)if (r[s] === "[" && !Hy(r, s)) {
        let l = tmr(r, s, e);
        if (l !== null) return l;
    }
    return r;
}, "B"), nmr = /^-{1,2}$/, rmr = /^[\s]*-{1,2}[\s]+$/, imr = /^={1,2}$/, amr = /^[\s]*={1,2}[\s]+$/, omr = i((r)=>{
    if (!r || typeof r != "string") return r;
    let e = r.lastIndexOf(`
`);
    if (e === -1) return r;
    let a = r.substring(e + 1), s = r.substring(0, e), l = a.trim();
    if (nmr.test(l) && !a.match(rmr)) {
        let u = s.split(`
`).at(-1);
        if (u && u.trim().length > 0) return `${r}\u200B`;
    }
    if (imr.test(l) && !a.match(amr)) {
        let u = s.split(`
`).at(-1);
        if (u && u.trim().length > 0) return `${r}\u200B`;
    }
    return r;
}, "cn"), smr = /([\p{L}\p{N}_])~(?!~)(?=[\p{L}\p{N}_])/gu, cmr = i((r)=>!r || typeof r != "string" || !r.includes("~") ? r : r.replace(smr, (e, a, s)=>{
        let l = s + a.length;
        return Hy(r, l) ? e : `${a}\\~`;
    }), "un"), lmr = i((r)=>{
    var e, a;
    let s = r.match(fpr);
    if (s) {
        let l = s[2];
        if (!l || CP.test(l)) return r;
        let u = r.lastIndexOf(s[1]);
        if (Hy(r, u) || t$(r, u)) return r;
        if (((e = r.match(ZRt)) == null ? void 0 : e.length) % 2 === 1) return `${r}~~`;
    } else {
        let l = r.match(wpr);
        if (l) {
            let u = r.lastIndexOf(l[0].slice(0, 2));
            if (Hy(r, u) || t$(r, u)) return r;
            if (((a = r.match(ZRt)) == null ? void 0 : a.length) % 2 === 1) return `${r}~`;
        }
    }
    return r;
}, "fn"), sMe = i((r)=>r !== !1, "S"), umr = i((r)=>r === !0, "Jn"), Zy = {
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
}, dmr = [
    {
        handler: {
            name: "singleTilde",
            handle: cmr,
            priority: Zy.SINGLE_TILDE
        },
        optionKey: "singleTilde"
    },
    {
        handler: {
            name: "comparisonOperators",
            handle: spr,
            priority: Zy.COMPARISON_OPERATORS
        },
        optionKey: "comparisonOperators"
    },
    {
        handler: {
            name: "htmlTags",
            handle: Wpr,
            priority: Zy.HTML_TAGS
        },
        optionKey: "htmlTags"
    },
    {
        handler: {
            name: "setextHeadings",
            handle: omr,
            priority: Zy.SETEXT_HEADINGS
        },
        optionKey: "setextHeadings"
    },
    {
        handler: {
            name: "links",
            handle: nPt,
            priority: Zy.LINKS
        },
        optionKey: "links",
        earlyReturn: i((r)=>r.endsWith("](streamdown:incomplete-link)"), "earlyReturn")
    },
    {
        handler: {
            name: "boldItalic",
            handle: Upr,
            priority: Zy.BOLD_ITALIC
        },
        optionKey: "boldItalic"
    },
    {
        handler: {
            name: "bold",
            handle: Rpr,
            priority: Zy.BOLD
        },
        optionKey: "bold"
    },
    {
        handler: {
            name: "italicDoubleUnderscore",
            handle: jpr,
            priority: Zy.ITALIC_DOUBLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleAsterisk",
            handle: Dpr,
            priority: Zy.ITALIC_SINGLE_ASTERISK
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "italicSingleUnderscore",
            handle: zpr,
            priority: Zy.ITALIC_SINGLE_UNDERSCORE
        },
        optionKey: "italic"
    },
    {
        handler: {
            name: "inlineCode",
            handle: Vpr,
            priority: Zy.INLINE_CODE
        },
        optionKey: "inlineCode"
    },
    {
        handler: {
            name: "strikethrough",
            handle: lmr,
            priority: Zy.STRIKETHROUGH
        },
        optionKey: "strikethrough"
    },
    {
        handler: {
            name: "katex",
            handle: Jpr,
            priority: Zy.KATEX
        },
        optionKey: "katex"
    },
    {
        handler: {
            name: "inlineKatex",
            handle: Qpr,
            priority: Zy.INLINE_KATEX
        },
        optionKey: "inlineKatex"
    }
], pmr = i((r)=>{
    var e;
    let a = (e = r?.linkMode) != null ? e : "protocol";
    return dmr.filter(({ handler: s, optionKey: l })=>s.name === "links" ? sMe(r?.links) || sMe(r?.images) : s.name === "inlineKatex" ? umr(r?.inlineKatex) : sMe(r?.[l])).map(({ handler: s, earlyReturn: l })=>s.name === "links" ? {
            handler: GRt(URt({}, s), {
                handle: i((u)=>nPt(u, a), "handle")
            }),
            earlyReturn: a === "protocol" ? l : void 0
        } : {
            handler: s,
            earlyReturn: l
        });
}, "xn"), mmr = i((r, e)=>{
    var a;
    if (!r || typeof r != "string") return r;
    let s = r.endsWith(" ") && !r.endsWith("  ") ? r.slice(0, -1) : r, l = pmr(e), u = ((a = e?.handlers) != null ? a : []).map((m)=>{
        var b;
        return {
            handler: GRt(URt({}, m), {
                priority: (b = m.priority) != null ? b : Zy.DEFAULT
            }),
            earlyReturn: void 0
        };
    }), p = [
        ...l,
        ...u
    ].sort((m, b)=>{
        var g, _;
        return ((g = m.handler.priority) != null ? g : 0) - ((_ = b.handler.priority) != null ? _ : 0);
    });
    for (let { handler: m, earlyReturn: b } of p)if (s = m.handle(s), b != null && b(s)) return s;
    return s;
}, "ne"), rPt = mmr;

}
