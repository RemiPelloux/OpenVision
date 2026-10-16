import { Lqr, Lxc, Qk, Y3e, e5, umi } from "./HVr.js";
import { Cqe, QH, fNt, oR } from "./process.js";
import { x } from "./tslib.es6.js";
var Nxc, Oxc, Fxc, Bxc, Tqe, A7, oJ, SAe, Uxc, Nqr, aJ, Cw, $xc, Eu, gD, e2, Jk, Eqe, X3e, kO, Xl, dM, tug, sht, nug, uS, iug;
export { $xc, A7, Bxc, Cw, Eqe, Eu, Fxc, Jk, Nqr, Nxc, Oxc, SAe, Tqe, Uxc, X3e, Xl, aJ, dM, e2, gD, iug, kO, nug, oJ, sht, tug, uS };
var __wakaru_ba_initialized = false;
export function ba() {
if (__wakaru_ba_initialized) return;
__wakaru_ba_initialized = true;
"use strict";
x(), QH(), Nxc = 65, Oxc = 97, Fxc = 90, Bxc = 122, Tqe = 46, A7 = 47, oJ = 92, SAe = 58, Uxc = 63, Nqr = class extends Error {
    constructor(e, t, n){
        let i;
        typeof t == "string" && t.indexOf("not ") === 0 ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
        const r = e.indexOf(".") !== -1 ? "property" : "argument";
        let s = `The "${e}" ${r} ${i} of type ${t}`;
        s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
    }
}, aJ = Cqe === "win32", Cw = {
    resolve (...e) {
        let t = "", n = "", i = !1;
        for(let r = e.length - 1; r >= -1; r--){
            let s;
            if (r >= 0) {
                if (s = e[r], e5(s, `paths[${r}]`), s.length === 0) continue;
            } else t.length === 0 ? s = fNt() : (s = oR[`=${t}`] || fNt(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === oJ) && (s = `${t}\\`));
            const o = s.length;
            let a = 0, c = "", l = !1;
            const u = s.charCodeAt(0);
            if (o === 1) Qk(u) && (a = 1, l = !0);
            else if (Qk(u)) if (l = !0, Qk(s.charCodeAt(1))) {
                let h = 2, p = h;
                for(; h < o && !Qk(s.charCodeAt(h));)h++;
                if (h < o && h !== p) {
                    const g = s.slice(p, h);
                    for(p = h; h < o && Qk(s.charCodeAt(h));)h++;
                    if (h < o && h !== p) {
                        for(p = h; h < o && !Qk(s.charCodeAt(h));)h++;
                        (h === o || h !== p) && (c = `\\\\${g}\\${s.slice(p, h)}`, a = h);
                    }
                }
            } else a = 1;
            else Y3e(u) && s.charCodeAt(1) === SAe && (c = s.slice(0, 2), a = 2, o > 2 && Qk(s.charCodeAt(2)) && (l = !0, a = 3));
            if (c.length > 0) if (t.length > 0) {
                if (c.toLowerCase() !== t.toLowerCase()) continue;
            } else t = c;
            if (i) {
                if (t.length > 0) break;
            } else if (n = `${s.slice(a)}\\${n}`, i = l, l && t.length > 0) break;
        }
        return n = umi(n, !i, "\\", Qk), i ? `${t}\\${n}` : `${t}${n}` || ".";
    },
    normalize (e) {
        e5(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let n = 0, i, r = !1;
        const s = e.charCodeAt(0);
        if (t === 1) return Lqr(s) ? "\\" : e;
        if (Qk(s)) if (r = !0, Qk(e.charCodeAt(1))) {
            let a = 2, c = a;
            for(; a < t && !Qk(e.charCodeAt(a));)a++;
            if (a < t && a !== c) {
                const l = e.slice(c, a);
                for(c = a; a < t && Qk(e.charCodeAt(a));)a++;
                if (a < t && a !== c) {
                    for(c = a; a < t && !Qk(e.charCodeAt(a));)a++;
                    if (a === t) return `\\\\${l}\\${e.slice(c)}\\`;
                    a !== c && (i = `\\\\${l}\\${e.slice(c, a)}`, n = a);
                }
            }
        } else n = 1;
        else Y3e(s) && e.charCodeAt(1) === SAe && (i = e.slice(0, 2), n = 2, t > 2 && Qk(e.charCodeAt(2)) && (r = !0, n = 3));
        let o = n < t ? umi(e.slice(n), !r, "\\", Qk) : "";
        if (o.length === 0 && !r && (o = "."), o.length > 0 && Qk(e.charCodeAt(t - 1)) && (o += "\\"), !r && i === void 0 && e.includes(":")) {
            if (o.length >= 2 && Y3e(o.charCodeAt(0)) && o.charCodeAt(1) === SAe) return `.\\${o}`;
            let a = e.indexOf(":");
            do if (a === t - 1 || Qk(e.charCodeAt(a + 1))) return `.\\${o}`;
            while ((a = e.indexOf(":", a + 1)) !== -1)
        }
        return i === void 0 ? r ? `\\${o}` : o : r ? `${i}\\${o}` : `${i}${o}`;
    },
    isAbsolute (e) {
        e5(e, "path");
        const t = e.length;
        if (t === 0) return !1;
        const n = e.charCodeAt(0);
        return Qk(n) || t > 2 && Y3e(n) && e.charCodeAt(1) === SAe && Qk(e.charCodeAt(2));
    },
    join (...e) {
        if (e.length === 0) return ".";
        let t, n;
        for(let s = 0; s < e.length; ++s){
            const o = e[s];
            e5(o, "path"), o.length > 0 && (t === void 0 ? t = n = o : t += `\\${o}`);
        }
        if (t === void 0) return ".";
        let i = !0, r = 0;
        if (typeof n == "string" && Qk(n.charCodeAt(0))) {
            ++r;
            const s = n.length;
            s > 1 && Qk(n.charCodeAt(1)) && (++r, s > 2 && (Qk(n.charCodeAt(2)) ? ++r : i = !1));
        }
        if (i) {
            for(; r < t.length && Qk(t.charCodeAt(r));)r++;
            r >= 2 && (t = `\\${t.slice(r)}`);
        }
        return Cw.normalize(t);
    },
    relative (e, t) {
        if (e5(e, "from"), e5(t, "to"), e === t) return "";
        const n = Cw.resolve(e), i = Cw.resolve(t);
        if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t)) return "";
        if (n.length !== e.length || i.length !== t.length) {
            const f = n.split("\\"), v = i.split("\\");
            f[f.length - 1] === "" && f.pop(), v[v.length - 1] === "" && v.pop();
            const b = f.length, y = v.length, T = b < y ? b : y;
            let E;
            for(E = 0; E < T && f[E].toLowerCase() === v[E].toLowerCase(); E++);
            return E === 0 ? i : E === T ? y > T ? v.slice(E).join("\\") : b > T ? "..\\".repeat(b - 1 - E) + ".." : "" : "..\\".repeat(b - E) + v.slice(E).join("\\");
        }
        let r = 0;
        for(; r < e.length && e.charCodeAt(r) === oJ;)r++;
        let s = e.length;
        for(; s - 1 > r && e.charCodeAt(s - 1) === oJ;)s--;
        const o = s - r;
        let a = 0;
        for(; a < t.length && t.charCodeAt(a) === oJ;)a++;
        let c = t.length;
        for(; c - 1 > a && t.charCodeAt(c - 1) === oJ;)c--;
        const l = c - a, u = o < l ? o : l;
        let h = -1, p = 0;
        for(; p < u; p++){
            const f = e.charCodeAt(r + p);
            if (f !== t.charCodeAt(a + p)) break;
            f === oJ && (h = p);
        }
        if (p !== u) {
            if (h === -1) return i;
        } else {
            if (l > u) {
                if (t.charCodeAt(a + p) === oJ) return i.slice(a + p + 1);
                if (p === 2) return i.slice(a + p);
            }
            o > u && (e.charCodeAt(r + p) === oJ ? h = p : p === 2 && (h = 3)), h === -1 && (h = 0);
        }
        let g = "";
        for(p = r + h + 1; p <= s; ++p)(p === s || e.charCodeAt(p) === oJ) && (g += g.length === 0 ? ".." : "\\..");
        return a += h, g.length > 0 ? `${g}${i.slice(a, c)}` : (i.charCodeAt(a) === oJ && ++a, i.slice(a, c));
    },
    toNamespacedPath (e) {
        if (typeof e != "string" || e.length === 0) return e;
        const t = Cw.resolve(e);
        if (t.length <= 2) return e;
        if (t.charCodeAt(0) === oJ) {
            if (t.charCodeAt(1) === oJ) {
                const n = t.charCodeAt(2);
                if (n !== Uxc && n !== Tqe) return `\\\\?\\UNC\\${t.slice(2)}`;
            }
        } else if (Y3e(t.charCodeAt(0)) && t.charCodeAt(1) === SAe && t.charCodeAt(2) === oJ) return `\\\\?\\${t}`;
        return t;
    },
    dirname (e) {
        e5(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let n = -1, i = 0;
        const r = e.charCodeAt(0);
        if (t === 1) return Qk(r) ? e : ".";
        if (Qk(r)) {
            if (n = i = 1, Qk(e.charCodeAt(1))) {
                let a = 2, c = a;
                for(; a < t && !Qk(e.charCodeAt(a));)a++;
                if (a < t && a !== c) {
                    for(c = a; a < t && Qk(e.charCodeAt(a));)a++;
                    if (a < t && a !== c) {
                        for(c = a; a < t && !Qk(e.charCodeAt(a));)a++;
                        if (a === t) return e;
                        a !== c && (n = i = a + 1);
                    }
                }
            }
        } else Y3e(r) && e.charCodeAt(1) === SAe && (n = t > 2 && Qk(e.charCodeAt(2)) ? 3 : 2, i = n);
        let s = -1, o = !0;
        for(let a = t - 1; a >= i; --a)if (Qk(e.charCodeAt(a))) {
            if (!o) {
                s = a;
                break;
            }
        } else o = !1;
        if (s === -1) {
            if (n === -1) return ".";
            s = n;
        }
        return e.slice(0, s);
    },
    basename (e, t) {
        t !== void 0 && e5(t, "suffix"), e5(e, "path");
        let n = 0, i = -1, r = !0, s;
        if (e.length >= 2 && Y3e(e.charCodeAt(0)) && e.charCodeAt(1) === SAe && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let o = t.length - 1, a = -1;
            for(s = e.length - 1; s >= n; --s){
                const c = e.charCodeAt(s);
                if (Qk(c)) {
                    if (!r) {
                        n = s + 1;
                        break;
                    }
                } else a === -1 && (r = !1, a = s + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = a));
            }
            return n === i ? i = a : i === -1 && (i = e.length), e.slice(n, i);
        }
        for(s = e.length - 1; s >= n; --s)if (Qk(e.charCodeAt(s))) {
            if (!r) {
                n = s + 1;
                break;
            }
        } else i === -1 && (r = !1, i = s + 1);
        return i === -1 ? "" : e.slice(n, i);
    },
    extname (e) {
        e5(e, "path");
        let t = 0, n = -1, i = 0, r = -1, s = !0, o = 0;
        e.length >= 2 && e.charCodeAt(1) === SAe && Y3e(e.charCodeAt(0)) && (t = i = 2);
        for(let a = e.length - 1; a >= t; --a){
            const c = e.charCodeAt(a);
            if (Qk(c)) {
                if (!s) {
                    i = a + 1;
                    break;
                }
                continue;
            }
            r === -1 && (s = !1, r = a + 1), c === Tqe ? n === -1 ? n = a : o !== 1 && (o = 1) : n !== -1 && (o = -1);
        }
        return n === -1 || r === -1 || o === 0 || o === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
    },
    format: Lxc.bind(null, "\\"),
    parse (e) {
        e5(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const n = e.length;
        let i = 0, r = e.charCodeAt(0);
        if (n === 1) return Qk(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
        if (Qk(r)) {
            if (i = 1, Qk(e.charCodeAt(1))) {
                let h = 2, p = h;
                for(; h < n && !Qk(e.charCodeAt(h));)h++;
                if (h < n && h !== p) {
                    for(p = h; h < n && Qk(e.charCodeAt(h));)h++;
                    if (h < n && h !== p) {
                        for(p = h; h < n && !Qk(e.charCodeAt(h));)h++;
                        h === n ? i = h : h !== p && (i = h + 1);
                    }
                }
            }
        } else if (Y3e(r) && e.charCodeAt(1) === SAe) {
            if (n <= 2) return t.root = t.dir = e, t;
            if (i = 2, Qk(e.charCodeAt(2))) {
                if (n === 3) return t.root = t.dir = e, t;
                i = 3;
            }
        }
        i > 0 && (t.root = e.slice(0, i));
        let s = -1, o = i, a = -1, c = !0, l = e.length - 1, u = 0;
        for(; l >= i; --l){
            if (r = e.charCodeAt(l), Qk(r)) {
                if (!c) {
                    o = l + 1;
                    break;
                }
                continue;
            }
            a === -1 && (c = !1, a = l + 1), r === Tqe ? s === -1 ? s = l : u !== 1 && (u = 1) : s !== -1 && (u = -1);
        }
        return a !== -1 && (s === -1 || u === 0 || u === 1 && s === a - 1 && s === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, s), t.base = e.slice(o, a), t.ext = e.slice(s, a))), o > 0 && o !== i ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
}, $xc = (()=>{
    if (aJ) {
        const e = /\\/g;
        return ()=>{
            const t = fNt().replace(e, "/");
            return t.slice(t.indexOf("/"));
        };
    }
    return ()=>fNt();
})(), Eu = {
    resolve (...e) {
        let t = "", n = !1;
        for(let i = e.length - 1; i >= 0 && !n; i--){
            const r = e[i];
            e5(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === A7);
        }
        if (!n) {
            const i = $xc();
            t = `${i}/${t}`, n = i.charCodeAt(0) === A7;
        }
        return t = umi(t, !n, "/", Lqr), n ? `/${t}` : t.length > 0 ? t : ".";
    },
    normalize (e) {
        if (e5(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === A7, n = e.charCodeAt(e.length - 1) === A7;
        return e = umi(e, !t, "/", Lqr), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    },
    isAbsolute (e) {
        return e5(e, "path"), e.length > 0 && e.charCodeAt(0) === A7;
    },
    join (...e) {
        if (e.length === 0) return ".";
        const t = [];
        for(let n = 0; n < e.length; ++n){
            const i = e[n];
            e5(i, "path"), i.length > 0 && t.push(i);
        }
        return t.length === 0 ? "." : Eu.normalize(t.join("/"));
    },
    relative (e, t) {
        if (e5(e, "from"), e5(t, "to"), e === t || (e = Eu.resolve(e), t = Eu.resolve(t), e === t)) return "";
        const n = 1, i = e.length, r = i - n, s = 1, o = t.length - s, a = r < o ? r : o;
        let c = -1, l = 0;
        for(; l < a; l++){
            const h = e.charCodeAt(n + l);
            if (h !== t.charCodeAt(s + l)) break;
            h === A7 && (c = l);
        }
        if (l === a) if (o > a) {
            if (t.charCodeAt(s + l) === A7) return t.slice(s + l + 1);
            if (l === 0) return t.slice(s + l);
        } else r > a && (e.charCodeAt(n + l) === A7 ? c = l : l === 0 && (c = 0));
        let u = "";
        for(l = n + c + 1; l <= i; ++l)(l === i || e.charCodeAt(l) === A7) && (u += u.length === 0 ? ".." : "/..");
        return `${u}${t.slice(s + c)}`;
    },
    toNamespacedPath (e) {
        return e;
    },
    dirname (e) {
        if (e5(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === A7;
        let n = -1, i = !0;
        for(let r = e.length - 1; r >= 1; --r)if (e.charCodeAt(r) === A7) {
            if (!i) {
                n = r;
                break;
            }
        } else i = !1;
        return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
    },
    basename (e, t) {
        t !== void 0 && e5(t, "suffix"), e5(e, "path");
        let n = 0, i = -1, r = !0, s;
        if (t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let o = t.length - 1, a = -1;
            for(s = e.length - 1; s >= 0; --s){
                const c = e.charCodeAt(s);
                if (c === A7) {
                    if (!r) {
                        n = s + 1;
                        break;
                    }
                } else a === -1 && (r = !1, a = s + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = a));
            }
            return n === i ? i = a : i === -1 && (i = e.length), e.slice(n, i);
        }
        for(s = e.length - 1; s >= 0; --s)if (e.charCodeAt(s) === A7) {
            if (!r) {
                n = s + 1;
                break;
            }
        } else i === -1 && (r = !1, i = s + 1);
        return i === -1 ? "" : e.slice(n, i);
    },
    extname (e) {
        e5(e, "path");
        let t = -1, n = 0, i = -1, r = !0, s = 0;
        for(let o = e.length - 1; o >= 0; --o){
            const a = e[o];
            if (a === "/") {
                if (!r) {
                    n = o + 1;
                    break;
                }
                continue;
            }
            i === -1 && (r = !1, i = o + 1), a === "." ? t === -1 ? t = o : s !== 1 && (s = 1) : t !== -1 && (s = -1);
        }
        return t === -1 || i === -1 || s === 0 || s === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
    },
    format: Lxc.bind(null, "/"),
    parse (e) {
        e5(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const n = e.charCodeAt(0) === A7;
        let i;
        n ? (t.root = "/", i = 1) : i = 0;
        let r = -1, s = 0, o = -1, a = !0, c = e.length - 1, l = 0;
        for(; c >= i; --c){
            const u = e.charCodeAt(c);
            if (u === A7) {
                if (!a) {
                    s = c + 1;
                    break;
                }
                continue;
            }
            o === -1 && (a = !1, o = c + 1), u === Tqe ? r === -1 ? r = c : l !== 1 && (l = 1) : r !== -1 && (l = -1);
        }
        if (o !== -1) {
            const u = s === 0 && n ? 1 : s;
            r === -1 || l === 0 || l === 1 && r === o - 1 && r === s + 1 ? t.base = t.name = e.slice(u, o) : (t.name = e.slice(u, r), t.base = e.slice(u, o), t.ext = e.slice(r, o));
        }
        return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
}, Eu.win32 = Cw.win32 = Cw, Eu.posix = Cw.posix = Eu, gD = aJ ? Cw.normalize : Eu.normalize, e2 = aJ ? Cw.isAbsolute : Eu.isAbsolute, Jk = aJ ? Cw.join : Eu.join, Eqe = aJ ? Cw.resolve : Eu.resolve, X3e = aJ ? Cw.relative : Eu.relative, kO = aJ ? Cw.dirname : Eu.dirname, Xl = aJ ? Cw.basename : Eu.basename, dM = aJ ? Cw.extname : Eu.extname, tug = aJ ? Cw.format : Eu.format, sht = aJ ? Cw.parse : Eu.parse, nug = aJ ? Cw.toNamespacedPath : Eu.toNamespacedPath, uS = aJ ? Cw.sep : Eu.sep, iug = aJ ? Cw.delimiter : Eu.delimiter;

}
