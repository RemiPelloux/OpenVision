import { Hr, Kt, ei, rt } from "./process.js";
import { w } from "./tslib.es6.js";
function fa(e, t) {
    if (e === null || typeof e != "object") throw new Jr(t, "Object", e);
}
function q(e, t) {
    if (typeof e != "string") throw new Jr(t, "string", e);
}
function R(e) {
    return e === z || e === ee;
}
function Kr(e) {
    return e === z;
}
function ke(e) {
    return e >= ri && e <= ii || e >= si && e <= ni;
}
function Jt(e, t, r, s) {
    let i = "", n = 0, a = -1, o = 0, l = 0;
    for(let c = 0; c <= e.length; ++c){
        if (c < e.length) l = e.charCodeAt(c);
        else {
            if (s(l)) break;
            l = z;
        }
        if (s(l)) {
            if (!(a === c - 1 || o === 1)) if (o === 2) {
                if (i.length < 2 || n !== 2 || i.charCodeAt(i.length - 1) !== Ie || i.charCodeAt(i.length - 2) !== Ie) {
                    if (i.length > 2) {
                        const h = i.lastIndexOf(r);
                        h === -1 ? (i = "", n = 0) : (i = i.slice(0, h), n = i.length - 1 - i.lastIndexOf(r)), a = c, o = 0;
                        continue;
                    } else if (i.length !== 0) {
                        i = "", n = 0, a = c, o = 0;
                        continue;
                    }
                }
                t && (i += i.length > 0 ? `${r}..` : "..", n = 2);
            } else i.length > 0 ? i += `${r}${e.slice(a + 1, c)}` : i = e.slice(a + 1, c), n = c - a - 1;
            a = c, o = 0;
        } else l === Ie && o !== -1 ? ++o : o = -1;
    }
    return i;
}
function da(e) {
    return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function ti(e, t) {
    fa(t, "pathObject");
    const r = t.dir || t.root, s = t.base || `${t.name || ""}${da(t.ext)}`;
    return r ? r === t.root ? `${r}${s}` : `${r}${e}${s}` : s;
}
var ri, si, ii, ni, Ie, z, ee, be, oi, Jr, te, B, ai, F, Qt, ze, Q, Qr, li, Ne, st, ci, pa, ma, ga, ie, _a;
export { B, F, Ie, Jr, Jt, Kr, Ne, Q, Qr, Qt, R, _a, ai, be, ci, da, ee, fa, ga, ie, ii, ke, li, ma, ni, oi, pa, q, ri, si, st, te, ti, z, ze };
var __wakaru_le_initialized = false;
export function le() {
if (__wakaru_le_initialized) return;
__wakaru_le_initialized = true;
"use strict";
w(), Hr(), ri = 65, si = 97, ii = 90, ni = 122, Ie = 46, z = 47, ee = 92, be = 58, oi = 63, Jr = class extends Error {
    constructor(e, t, r){
        let s;
        typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
        const i = e.indexOf(".") !== -1 ? "property" : "argument";
        let n = `The "${e}" ${i} ${s} of type ${t}`;
        n += `. Received type ${typeof r}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
    }
}, te = ei === "win32", B = {
    resolve (...e) {
        let t = "", r = "", s = !1;
        for(let i = e.length - 1; i >= -1; i--){
            let n;
            if (i >= 0) {
                if (n = e[i], q(n, `paths[${i}]`), n.length === 0) continue;
            } else t.length === 0 ? n = rt() : (n = Kt[`=${t}`] || rt(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === ee) && (n = `${t}\\`));
            const a = n.length;
            let o = 0, l = "", c = !1;
            const h = n.charCodeAt(0);
            if (a === 1) R(h) && (o = 1, c = !0);
            else if (R(h)) if (c = !0, R(n.charCodeAt(1))) {
                let u = 2, f = u;
                for(; u < a && !R(n.charCodeAt(u));)u++;
                if (u < a && u !== f) {
                    const d = n.slice(f, u);
                    for(f = u; u < a && R(n.charCodeAt(u));)u++;
                    if (u < a && u !== f) {
                        for(f = u; u < a && !R(n.charCodeAt(u));)u++;
                        (u === a || u !== f) && (l = `\\\\${d}\\${n.slice(f, u)}`, o = u);
                    }
                }
            } else o = 1;
            else ke(h) && n.charCodeAt(1) === be && (l = n.slice(0, 2), o = 2, a > 2 && R(n.charCodeAt(2)) && (c = !0, o = 3));
            if (l.length > 0) if (t.length > 0) {
                if (l.toLowerCase() !== t.toLowerCase()) continue;
            } else t = l;
            if (s) {
                if (t.length > 0) break;
            } else if (r = `${n.slice(o)}\\${r}`, s = c, c && t.length > 0) break;
        }
        return r = Jt(r, !s, "\\", R), s ? `${t}\\${r}` : `${t}${r}` || ".";
    },
    normalize (e) {
        q(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let r = 0, s, i = !1;
        const n = e.charCodeAt(0);
        if (t === 1) return Kr(n) ? "\\" : e;
        if (R(n)) if (i = !0, R(e.charCodeAt(1))) {
            let o = 2, l = o;
            for(; o < t && !R(e.charCodeAt(o));)o++;
            if (o < t && o !== l) {
                const c = e.slice(l, o);
                for(l = o; o < t && R(e.charCodeAt(o));)o++;
                if (o < t && o !== l) {
                    for(l = o; o < t && !R(e.charCodeAt(o));)o++;
                    if (o === t) return `\\\\${c}\\${e.slice(l)}\\`;
                    o !== l && (s = `\\\\${c}\\${e.slice(l, o)}`, r = o);
                }
            }
        } else r = 1;
        else ke(n) && e.charCodeAt(1) === be && (s = e.slice(0, 2), r = 2, t > 2 && R(e.charCodeAt(2)) && (i = !0, r = 3));
        let a = r < t ? Jt(e.slice(r), !i, "\\", R) : "";
        if (a.length === 0 && !i && (a = "."), a.length > 0 && R(e.charCodeAt(t - 1)) && (a += "\\"), !i && s === void 0 && e.includes(":")) {
            if (a.length >= 2 && ke(a.charCodeAt(0)) && a.charCodeAt(1) === be) return `.\\${a}`;
            let o = e.indexOf(":");
            do if (o === t - 1 || R(e.charCodeAt(o + 1))) return `.\\${a}`;
            while ((o = e.indexOf(":", o + 1)) !== -1)
        }
        return s === void 0 ? i ? `\\${a}` : a : i ? `${s}\\${a}` : `${s}${a}`;
    },
    isAbsolute (e) {
        q(e, "path");
        const t = e.length;
        if (t === 0) return !1;
        const r = e.charCodeAt(0);
        return R(r) || t > 2 && ke(r) && e.charCodeAt(1) === be && R(e.charCodeAt(2));
    },
    join (...e) {
        if (e.length === 0) return ".";
        let t, r;
        for(let n = 0; n < e.length; ++n){
            const a = e[n];
            q(a, "path"), a.length > 0 && (t === void 0 ? t = r = a : t += `\\${a}`);
        }
        if (t === void 0) return ".";
        let s = !0, i = 0;
        if (typeof r == "string" && R(r.charCodeAt(0))) {
            ++i;
            const n = r.length;
            n > 1 && R(r.charCodeAt(1)) && (++i, n > 2 && (R(r.charCodeAt(2)) ? ++i : s = !1));
        }
        if (s) {
            for(; i < t.length && R(t.charCodeAt(i));)i++;
            i >= 2 && (t = `\\${t.slice(i)}`);
        }
        return B.normalize(t);
    },
    relative (e, t) {
        if (q(e, "from"), q(t, "to"), e === t) return "";
        const r = B.resolve(e), s = B.resolve(t);
        if (r === s || (e = r.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
        if (r.length !== e.length || s.length !== t.length) {
            const m = r.split("\\"), k = s.split("\\");
            m[m.length - 1] === "" && m.pop(), k[k.length - 1] === "" && k.pop();
            const D = m.length, P = k.length, x = D < P ? D : P;
            let O;
            for(O = 0; O < x && m[O].toLowerCase() === k[O].toLowerCase(); O++);
            return O === 0 ? s : O === x ? P > x ? k.slice(O).join("\\") : D > x ? "..\\".repeat(D - 1 - O) + ".." : "" : "..\\".repeat(D - O) + k.slice(O).join("\\");
        }
        let i = 0;
        for(; i < e.length && e.charCodeAt(i) === ee;)i++;
        let n = e.length;
        for(; n - 1 > i && e.charCodeAt(n - 1) === ee;)n--;
        const a = n - i;
        let o = 0;
        for(; o < t.length && t.charCodeAt(o) === ee;)o++;
        let l = t.length;
        for(; l - 1 > o && t.charCodeAt(l - 1) === ee;)l--;
        const c = l - o, h = a < c ? a : c;
        let u = -1, f = 0;
        for(; f < h; f++){
            const m = e.charCodeAt(i + f);
            if (m !== t.charCodeAt(o + f)) break;
            m === ee && (u = f);
        }
        if (f !== h) {
            if (u === -1) return s;
        } else {
            if (c > h) {
                if (t.charCodeAt(o + f) === ee) return s.slice(o + f + 1);
                if (f === 2) return s.slice(o + f);
            }
            a > h && (e.charCodeAt(i + f) === ee ? u = f : f === 2 && (u = 3)), u === -1 && (u = 0);
        }
        let d = "";
        for(f = i + u + 1; f <= n; ++f)(f === n || e.charCodeAt(f) === ee) && (d += d.length === 0 ? ".." : "\\..");
        return o += u, d.length > 0 ? `${d}${s.slice(o, l)}` : (s.charCodeAt(o) === ee && ++o, s.slice(o, l));
    },
    toNamespacedPath (e) {
        if (typeof e != "string" || e.length === 0) return e;
        const t = B.resolve(e);
        if (t.length <= 2) return e;
        if (t.charCodeAt(0) === ee) {
            if (t.charCodeAt(1) === ee) {
                const r = t.charCodeAt(2);
                if (r !== oi && r !== Ie) return `\\\\?\\UNC\\${t.slice(2)}`;
            }
        } else if (ke(t.charCodeAt(0)) && t.charCodeAt(1) === be && t.charCodeAt(2) === ee) return `\\\\?\\${t}`;
        return t;
    },
    dirname (e) {
        q(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let r = -1, s = 0;
        const i = e.charCodeAt(0);
        if (t === 1) return R(i) ? e : ".";
        if (R(i)) {
            if (r = s = 1, R(e.charCodeAt(1))) {
                let o = 2, l = o;
                for(; o < t && !R(e.charCodeAt(o));)o++;
                if (o < t && o !== l) {
                    for(l = o; o < t && R(e.charCodeAt(o));)o++;
                    if (o < t && o !== l) {
                        for(l = o; o < t && !R(e.charCodeAt(o));)o++;
                        if (o === t) return e;
                        o !== l && (r = s = o + 1);
                    }
                }
            }
        } else ke(i) && e.charCodeAt(1) === be && (r = t > 2 && R(e.charCodeAt(2)) ? 3 : 2, s = r);
        let n = -1, a = !0;
        for(let o = t - 1; o >= s; --o)if (R(e.charCodeAt(o))) {
            if (!a) {
                n = o;
                break;
            }
        } else a = !1;
        if (n === -1) {
            if (r === -1) return ".";
            n = r;
        }
        return e.slice(0, n);
    },
    basename (e, t) {
        t !== void 0 && q(t, "suffix"), q(e, "path");
        let r = 0, s = -1, i = !0, n;
        if (e.length >= 2 && ke(e.charCodeAt(0)) && e.charCodeAt(1) === be && (r = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let a = t.length - 1, o = -1;
            for(n = e.length - 1; n >= r; --n){
                const l = e.charCodeAt(n);
                if (R(l)) {
                    if (!i) {
                        r = n + 1;
                        break;
                    }
                } else o === -1 && (i = !1, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (s = n) : (a = -1, s = o));
            }
            return r === s ? s = o : s === -1 && (s = e.length), e.slice(r, s);
        }
        for(n = e.length - 1; n >= r; --n)if (R(e.charCodeAt(n))) {
            if (!i) {
                r = n + 1;
                break;
            }
        } else s === -1 && (i = !1, s = n + 1);
        return s === -1 ? "" : e.slice(r, s);
    },
    extname (e) {
        q(e, "path");
        let t = 0, r = -1, s = 0, i = -1, n = !0, a = 0;
        e.length >= 2 && e.charCodeAt(1) === be && ke(e.charCodeAt(0)) && (t = s = 2);
        for(let o = e.length - 1; o >= t; --o){
            const l = e.charCodeAt(o);
            if (R(l)) {
                if (!n) {
                    s = o + 1;
                    break;
                }
                continue;
            }
            i === -1 && (n = !1, i = o + 1), l === Ie ? r === -1 ? r = o : a !== 1 && (a = 1) : r !== -1 && (a = -1);
        }
        return r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === s + 1 ? "" : e.slice(r, i);
    },
    format: ti.bind(null, "\\"),
    parse (e) {
        q(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const r = e.length;
        let s = 0, i = e.charCodeAt(0);
        if (r === 1) return R(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
        if (R(i)) {
            if (s = 1, R(e.charCodeAt(1))) {
                let u = 2, f = u;
                for(; u < r && !R(e.charCodeAt(u));)u++;
                if (u < r && u !== f) {
                    for(f = u; u < r && R(e.charCodeAt(u));)u++;
                    if (u < r && u !== f) {
                        for(f = u; u < r && !R(e.charCodeAt(u));)u++;
                        u === r ? s = u : u !== f && (s = u + 1);
                    }
                }
            }
        } else if (ke(i) && e.charCodeAt(1) === be) {
            if (r <= 2) return t.root = t.dir = e, t;
            if (s = 2, R(e.charCodeAt(2))) {
                if (r === 3) return t.root = t.dir = e, t;
                s = 3;
            }
        }
        s > 0 && (t.root = e.slice(0, s));
        let n = -1, a = s, o = -1, l = !0, c = e.length - 1, h = 0;
        for(; c >= s; --c){
            if (i = e.charCodeAt(c), R(i)) {
                if (!l) {
                    a = c + 1;
                    break;
                }
                continue;
            }
            o === -1 && (l = !1, o = c + 1), i === Ie ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1);
        }
        return o !== -1 && (n === -1 || h === 0 || h === 1 && n === o - 1 && n === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, n), t.base = e.slice(a, o), t.ext = e.slice(n, o))), a > 0 && a !== s ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
}, ai = (()=>{
    if (te) {
        const e = /\\/g;
        return ()=>{
            const t = rt().replace(e, "/");
            return t.slice(t.indexOf("/"));
        };
    }
    return ()=>rt();
})(), F = {
    resolve (...e) {
        let t = "", r = !1;
        for(let s = e.length - 1; s >= 0 && !r; s--){
            const i = e[s];
            q(i, `paths[${s}]`), i.length !== 0 && (t = `${i}/${t}`, r = i.charCodeAt(0) === z);
        }
        if (!r) {
            const s = ai();
            t = `${s}/${t}`, r = s.charCodeAt(0) === z;
        }
        return t = Jt(t, !r, "/", Kr), r ? `/${t}` : t.length > 0 ? t : ".";
    },
    normalize (e) {
        if (q(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === z, r = e.charCodeAt(e.length - 1) === z;
        return e = Jt(e, !t, "/", Kr), e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"), t ? `/${e}` : e);
    },
    isAbsolute (e) {
        return q(e, "path"), e.length > 0 && e.charCodeAt(0) === z;
    },
    join (...e) {
        if (e.length === 0) return ".";
        const t = [];
        for(let r = 0; r < e.length; ++r){
            const s = e[r];
            q(s, "path"), s.length > 0 && t.push(s);
        }
        return t.length === 0 ? "." : F.normalize(t.join("/"));
    },
    relative (e, t) {
        if (q(e, "from"), q(t, "to"), e === t || (e = F.resolve(e), t = F.resolve(t), e === t)) return "";
        const r = 1, s = e.length, i = s - r, n = 1, a = t.length - n, o = i < a ? i : a;
        let l = -1, c = 0;
        for(; c < o; c++){
            const u = e.charCodeAt(r + c);
            if (u !== t.charCodeAt(n + c)) break;
            u === z && (l = c);
        }
        if (c === o) if (a > o) {
            if (t.charCodeAt(n + c) === z) return t.slice(n + c + 1);
            if (c === 0) return t.slice(n + c);
        } else i > o && (e.charCodeAt(r + c) === z ? l = c : c === 0 && (l = 0));
        let h = "";
        for(c = r + l + 1; c <= s; ++c)(c === s || e.charCodeAt(c) === z) && (h += h.length === 0 ? ".." : "/..");
        return `${h}${t.slice(n + l)}`;
    },
    toNamespacedPath (e) {
        return e;
    },
    dirname (e) {
        if (q(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === z;
        let r = -1, s = !0;
        for(let i = e.length - 1; i >= 1; --i)if (e.charCodeAt(i) === z) {
            if (!s) {
                r = i;
                break;
            }
        } else s = !1;
        return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r);
    },
    basename (e, t) {
        t !== void 0 && q(t, "suffix"), q(e, "path");
        let r = 0, s = -1, i = !0, n;
        if (t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let a = t.length - 1, o = -1;
            for(n = e.length - 1; n >= 0; --n){
                const l = e.charCodeAt(n);
                if (l === z) {
                    if (!i) {
                        r = n + 1;
                        break;
                    }
                } else o === -1 && (i = !1, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (s = n) : (a = -1, s = o));
            }
            return r === s ? s = o : s === -1 && (s = e.length), e.slice(r, s);
        }
        for(n = e.length - 1; n >= 0; --n)if (e.charCodeAt(n) === z) {
            if (!i) {
                r = n + 1;
                break;
            }
        } else s === -1 && (i = !1, s = n + 1);
        return s === -1 ? "" : e.slice(r, s);
    },
    extname (e) {
        q(e, "path");
        let t = -1, r = 0, s = -1, i = !0, n = 0;
        for(let a = e.length - 1; a >= 0; --a){
            const o = e[a];
            if (o === "/") {
                if (!i) {
                    r = a + 1;
                    break;
                }
                continue;
            }
            s === -1 && (i = !1, s = a + 1), o === "." ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
        }
        return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === r + 1 ? "" : e.slice(t, s);
    },
    format: ti.bind(null, "/"),
    parse (e) {
        q(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const r = e.charCodeAt(0) === z;
        let s;
        r ? (t.root = "/", s = 1) : s = 0;
        let i = -1, n = 0, a = -1, o = !0, l = e.length - 1, c = 0;
        for(; l >= s; --l){
            const h = e.charCodeAt(l);
            if (h === z) {
                if (!o) {
                    n = l + 1;
                    break;
                }
                continue;
            }
            a === -1 && (o = !1, a = l + 1), h === Ie ? i === -1 ? i = l : c !== 1 && (c = 1) : i !== -1 && (c = -1);
        }
        if (a !== -1) {
            const h = n === 0 && r ? 1 : n;
            i === -1 || c === 0 || c === 1 && i === a - 1 && i === n + 1 ? t.base = t.name = e.slice(h, a) : (t.name = e.slice(h, i), t.base = e.slice(h, a), t.ext = e.slice(i, a));
        }
        return n > 0 ? t.dir = e.slice(0, n - 1) : r && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
}, F.win32 = B.win32 = B, F.posix = B.posix = F, Qt = te ? B.normalize : F.normalize, ze = te ? B.isAbsolute : F.isAbsolute, Q = te ? B.join : F.join, Qr = te ? B.resolve : F.resolve, li = te ? B.relative : F.relative, Ne = te ? B.dirname : F.dirname, st = te ? B.basename : F.basename, ci = te ? B.extname : F.extname, pa = te ? B.format : F.format, ma = te ? B.parse : F.parse, ga = te ? B.toNamespacedPath : F.toNamespacedPath, ie = te ? B.sep : F.sep, _a = te ? B.delimiter : F.delimiter;

}
