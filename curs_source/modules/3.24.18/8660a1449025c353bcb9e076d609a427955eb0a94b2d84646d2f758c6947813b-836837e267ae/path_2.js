import { SCo, aXu, eT, get, kj, lmr } from "./Iwo.js";
import { Bvt, ED, fdn, nY } from "./process.js";
import { E } from "./tslib.es6.js";
var lXu, cXu, uXu, dXu, Uvt, iY, Rde, a$e, hXu, kCo, Pde, EC, pXu, lh, nL, eW, Z0, l$e, Qxe, g4, Ku, sO, j_y, i6t, $_y, g1, H_y;
export { $_y, EC, H_y, Ku, Pde, Qxe, Rde, Uvt, Z0, a$e, cXu, dXu, eW, g1, g4, hXu, i6t, iY, j_y, kCo, l$e, lXu, lh, nL, pXu, sO, uXu };
var __wakaru_Ul_initialized = false;
export function Ul() {
if (__wakaru_Ul_initialized) return;
__wakaru_Ul_initialized = true;
"use strict";
E(), nY(), lXu = 65, cXu = 97, uXu = 90, dXu = 122, Uvt = 46, iY = 47, Rde = 92, a$e = 58, hXu = 63, kCo = class extends Error {
    constructor(t, e, n){
        let i;
        typeof e == "string" && e.indexOf("not ") === 0 ? (i = "must not be", e = e.replace(/^not /, "")) : i = "must be";
        const r = t.indexOf(".") !== -1 ? "property" : "argument";
        let s = `The "${t}" ${r} ${i} of type ${e}`;
        s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
    }
}, Pde = Bvt === "win32", EC = {
    resolve (...t) {
        let e = "", n = "", i = !1;
        for(let r = t.length - 1; r >= -1; r--){
            let s;
            if (r >= 0) {
                if (s = t[r], kj(s, `paths[${r}]`), s.length === 0) continue;
            } else e.length === 0 ? s = fdn() : (s = ED[`=${e}`] || fdn(), (s === void 0 || s.slice(0, 2).toLowerCase() !== e.toLowerCase() && s.charCodeAt(2) === Rde) && (s = `${e}\\`));
            const o = s.length;
            let a = 0, l = "", c = !1;
            const u = s.charCodeAt(0);
            if (o === 1) eT(u) && (a = 1, c = !0);
            else if (eT(u)) if (c = !0, eT(s.charCodeAt(1))) {
                let d = 2, h = d;
                for(; d < o && !eT(s.charCodeAt(d));)d++;
                if (d < o && d !== h) {
                    const p = s.slice(h, d);
                    for(h = d; d < o && eT(s.charCodeAt(d));)d++;
                    if (d < o && d !== h) {
                        for(h = d; d < o && !eT(s.charCodeAt(d));)d++;
                        (d === o || d !== h) && (l = `\\\\${p}\\${s.slice(h, d)}`, a = d);
                    }
                }
            } else a = 1;
            else get(u) && s.charCodeAt(1) === a$e && (l = s.slice(0, 2), a = 2, o > 2 && eT(s.charCodeAt(2)) && (c = !0, a = 3));
            if (l.length > 0) if (e.length > 0) {
                if (l.toLowerCase() !== e.toLowerCase()) continue;
            } else e = l;
            if (i) {
                if (e.length > 0) break;
            } else if (n = `${s.slice(a)}\\${n}`, i = c, c && e.length > 0) break;
        }
        return n = lmr(n, !i, "\\", eT), i ? `${e}\\${n}` : `${e}${n}` || ".";
    },
    normalize (t) {
        kj(t, "path");
        const e = t.length;
        if (e === 0) return ".";
        let n = 0, i, r = !1;
        const s = t.charCodeAt(0);
        if (e === 1) return SCo(s) ? "\\" : t;
        if (eT(s)) if (r = !0, eT(t.charCodeAt(1))) {
            let a = 2, l = a;
            for(; a < e && !eT(t.charCodeAt(a));)a++;
            if (a < e && a !== l) {
                const c = t.slice(l, a);
                for(l = a; a < e && eT(t.charCodeAt(a));)a++;
                if (a < e && a !== l) {
                    for(l = a; a < e && !eT(t.charCodeAt(a));)a++;
                    if (a === e) return `\\\\${c}\\${t.slice(l)}\\`;
                    a !== l && (i = `\\\\${c}\\${t.slice(l, a)}`, n = a);
                }
            }
        } else n = 1;
        else get(s) && t.charCodeAt(1) === a$e && (i = t.slice(0, 2), n = 2, e > 2 && eT(t.charCodeAt(2)) && (r = !0, n = 3));
        let o = n < e ? lmr(t.slice(n), !r, "\\", eT) : "";
        if (o.length === 0 && !r && (o = "."), o.length > 0 && eT(t.charCodeAt(e - 1)) && (o += "\\"), !r && i === void 0 && t.includes(":")) {
            if (o.length >= 2 && get(o.charCodeAt(0)) && o.charCodeAt(1) === a$e) return `.\\${o}`;
            let a = t.indexOf(":");
            do if (a === e - 1 || eT(t.charCodeAt(a + 1))) return `.\\${o}`;
            while ((a = t.indexOf(":", a + 1)) !== -1)
        }
        return i === void 0 ? r ? `\\${o}` : o : r ? `${i}\\${o}` : `${i}${o}`;
    },
    isAbsolute (t) {
        kj(t, "path");
        const e = t.length;
        if (e === 0) return !1;
        const n = t.charCodeAt(0);
        return eT(n) || e > 2 && get(n) && t.charCodeAt(1) === a$e && eT(t.charCodeAt(2));
    },
    join (...t) {
        if (t.length === 0) return ".";
        let e, n;
        for(let s = 0; s < t.length; ++s){
            const o = t[s];
            kj(o, "path"), o.length > 0 && (e === void 0 ? e = n = o : e += `\\${o}`);
        }
        if (e === void 0) return ".";
        let i = !0, r = 0;
        if (typeof n == "string" && eT(n.charCodeAt(0))) {
            ++r;
            const s = n.length;
            s > 1 && eT(n.charCodeAt(1)) && (++r, s > 2 && (eT(n.charCodeAt(2)) ? ++r : i = !1));
        }
        if (i) {
            for(; r < e.length && eT(e.charCodeAt(r));)r++;
            r >= 2 && (e = `\\${e.slice(r)}`);
        }
        return EC.normalize(e);
    },
    relative (t, e) {
        if (kj(t, "from"), kj(e, "to"), t === e) return "";
        const n = EC.resolve(t), i = EC.resolve(e);
        if (n === i || (t = n.toLowerCase(), e = i.toLowerCase(), t === e)) return "";
        if (n.length !== t.length || i.length !== e.length) {
            const g = n.split("\\"), f = i.split("\\");
            g[g.length - 1] === "" && g.pop(), f[f.length - 1] === "" && f.pop();
            const _ = g.length, b = f.length, y = _ < b ? _ : b;
            let S;
            for(S = 0; S < y && g[S].toLowerCase() === f[S].toLowerCase(); S++);
            return S === 0 ? i : S === y ? b > y ? f.slice(S).join("\\") : _ > y ? "..\\".repeat(_ - 1 - S) + ".." : "" : "..\\".repeat(_ - S) + f.slice(S).join("\\");
        }
        let r = 0;
        for(; r < t.length && t.charCodeAt(r) === Rde;)r++;
        let s = t.length;
        for(; s - 1 > r && t.charCodeAt(s - 1) === Rde;)s--;
        const o = s - r;
        let a = 0;
        for(; a < e.length && e.charCodeAt(a) === Rde;)a++;
        let l = e.length;
        for(; l - 1 > a && e.charCodeAt(l - 1) === Rde;)l--;
        const c = l - a, u = o < c ? o : c;
        let d = -1, h = 0;
        for(; h < u; h++){
            const g = t.charCodeAt(r + h);
            if (g !== e.charCodeAt(a + h)) break;
            g === Rde && (d = h);
        }
        if (h !== u) {
            if (d === -1) return i;
        } else {
            if (c > u) {
                if (e.charCodeAt(a + h) === Rde) return i.slice(a + h + 1);
                if (h === 2) return i.slice(a + h);
            }
            o > u && (t.charCodeAt(r + h) === Rde ? d = h : h === 2 && (d = 3)), d === -1 && (d = 0);
        }
        let p = "";
        for(h = r + d + 1; h <= s; ++h)(h === s || t.charCodeAt(h) === Rde) && (p += p.length === 0 ? ".." : "\\..");
        return a += d, p.length > 0 ? `${p}${i.slice(a, l)}` : (i.charCodeAt(a) === Rde && ++a, i.slice(a, l));
    },
    toNamespacedPath (t) {
        if (typeof t != "string" || t.length === 0) return t;
        const e = EC.resolve(t);
        if (e.length <= 2) return t;
        if (e.charCodeAt(0) === Rde) {
            if (e.charCodeAt(1) === Rde) {
                const n = e.charCodeAt(2);
                if (n !== hXu && n !== Uvt) return `\\\\?\\UNC\\${e.slice(2)}`;
            }
        } else if (get(e.charCodeAt(0)) && e.charCodeAt(1) === a$e && e.charCodeAt(2) === Rde) return `\\\\?\\${e}`;
        return e;
    },
    dirname (t) {
        kj(t, "path");
        const e = t.length;
        if (e === 0) return ".";
        let n = -1, i = 0;
        const r = t.charCodeAt(0);
        if (e === 1) return eT(r) ? t : ".";
        if (eT(r)) {
            if (n = i = 1, eT(t.charCodeAt(1))) {
                let a = 2, l = a;
                for(; a < e && !eT(t.charCodeAt(a));)a++;
                if (a < e && a !== l) {
                    for(l = a; a < e && eT(t.charCodeAt(a));)a++;
                    if (a < e && a !== l) {
                        for(l = a; a < e && !eT(t.charCodeAt(a));)a++;
                        if (a === e) return t;
                        a !== l && (n = i = a + 1);
                    }
                }
            }
        } else get(r) && t.charCodeAt(1) === a$e && (n = e > 2 && eT(t.charCodeAt(2)) ? 3 : 2, i = n);
        let s = -1, o = !0;
        for(let a = e - 1; a >= i; --a)if (eT(t.charCodeAt(a))) {
            if (!o) {
                s = a;
                break;
            }
        } else o = !1;
        if (s === -1) {
            if (n === -1) return ".";
            s = n;
        }
        return t.slice(0, s);
    },
    basename (t, e) {
        e !== void 0 && kj(e, "suffix"), kj(t, "path");
        let n = 0, i = -1, r = !0, s;
        if (t.length >= 2 && get(t.charCodeAt(0)) && t.charCodeAt(1) === a$e && (n = 2), e !== void 0 && e.length > 0 && e.length <= t.length) {
            if (e === t) return "";
            let o = e.length - 1, a = -1;
            for(s = t.length - 1; s >= n; --s){
                const l = t.charCodeAt(s);
                if (eT(l)) {
                    if (!r) {
                        n = s + 1;
                        break;
                    }
                } else a === -1 && (r = !1, a = s + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = a));
            }
            return n === i ? i = a : i === -1 && (i = t.length), t.slice(n, i);
        }
        for(s = t.length - 1; s >= n; --s)if (eT(t.charCodeAt(s))) {
            if (!r) {
                n = s + 1;
                break;
            }
        } else i === -1 && (r = !1, i = s + 1);
        return i === -1 ? "" : t.slice(n, i);
    },
    extname (t) {
        kj(t, "path");
        let e = 0, n = -1, i = 0, r = -1, s = !0, o = 0;
        t.length >= 2 && t.charCodeAt(1) === a$e && get(t.charCodeAt(0)) && (e = i = 2);
        for(let a = t.length - 1; a >= e; --a){
            const l = t.charCodeAt(a);
            if (eT(l)) {
                if (!s) {
                    i = a + 1;
                    break;
                }
                continue;
            }
            r === -1 && (s = !1, r = a + 1), l === Uvt ? n === -1 ? n = a : o !== 1 && (o = 1) : n !== -1 && (o = -1);
        }
        return n === -1 || r === -1 || o === 0 || o === 1 && n === r - 1 && n === i + 1 ? "" : t.slice(n, r);
    },
    format: aXu.bind(null, "\\"),
    parse (t) {
        kj(t, "path");
        const e = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (t.length === 0) return e;
        const n = t.length;
        let i = 0, r = t.charCodeAt(0);
        if (n === 1) return eT(r) ? (e.root = e.dir = t, e) : (e.base = e.name = t, e);
        if (eT(r)) {
            if (i = 1, eT(t.charCodeAt(1))) {
                let d = 2, h = d;
                for(; d < n && !eT(t.charCodeAt(d));)d++;
                if (d < n && d !== h) {
                    for(h = d; d < n && eT(t.charCodeAt(d));)d++;
                    if (d < n && d !== h) {
                        for(h = d; d < n && !eT(t.charCodeAt(d));)d++;
                        d === n ? i = d : d !== h && (i = d + 1);
                    }
                }
            }
        } else if (get(r) && t.charCodeAt(1) === a$e) {
            if (n <= 2) return e.root = e.dir = t, e;
            if (i = 2, eT(t.charCodeAt(2))) {
                if (n === 3) return e.root = e.dir = t, e;
                i = 3;
            }
        }
        i > 0 && (e.root = t.slice(0, i));
        let s = -1, o = i, a = -1, l = !0, c = t.length - 1, u = 0;
        for(; c >= i; --c){
            if (r = t.charCodeAt(c), eT(r)) {
                if (!l) {
                    o = c + 1;
                    break;
                }
                continue;
            }
            a === -1 && (l = !1, a = c + 1), r === Uvt ? s === -1 ? s = c : u !== 1 && (u = 1) : s !== -1 && (u = -1);
        }
        return a !== -1 && (s === -1 || u === 0 || u === 1 && s === a - 1 && s === o + 1 ? e.base = e.name = t.slice(o, a) : (e.name = t.slice(o, s), e.base = t.slice(o, a), e.ext = t.slice(s, a))), o > 0 && o !== i ? e.dir = t.slice(0, o - 1) : e.dir = e.root, e;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
}, pXu = (()=>{
    if (Pde) {
        const t = /\\/g;
        return ()=>{
            const e = fdn().replace(t, "/");
            return e.slice(e.indexOf("/"));
        };
    }
    return ()=>fdn();
})(), lh = {
    resolve (...t) {
        let e = "", n = !1;
        for(let i = t.length - 1; i >= 0 && !n; i--){
            const r = t[i];
            kj(r, `paths[${i}]`), r.length !== 0 && (e = `${r}/${e}`, n = r.charCodeAt(0) === iY);
        }
        if (!n) {
            const i = pXu();
            e = `${i}/${e}`, n = i.charCodeAt(0) === iY;
        }
        return e = lmr(e, !n, "/", SCo), n ? `/${e}` : e.length > 0 ? e : ".";
    },
    normalize (t) {
        if (kj(t, "path"), t.length === 0) return ".";
        const e = t.charCodeAt(0) === iY, n = t.charCodeAt(t.length - 1) === iY;
        return t = lmr(t, !e, "/", SCo), t.length === 0 ? e ? "/" : n ? "./" : "." : (n && (t += "/"), e ? `/${t}` : t);
    },
    isAbsolute (t) {
        return kj(t, "path"), t.length > 0 && t.charCodeAt(0) === iY;
    },
    join (...t) {
        if (t.length === 0) return ".";
        const e = [];
        for(let n = 0; n < t.length; ++n){
            const i = t[n];
            kj(i, "path"), i.length > 0 && e.push(i);
        }
        return e.length === 0 ? "." : lh.normalize(e.join("/"));
    },
    relative (t, e) {
        if (kj(t, "from"), kj(e, "to"), t === e || (t = lh.resolve(t), e = lh.resolve(e), t === e)) return "";
        const n = 1, i = t.length, r = i - n, s = 1, o = e.length - s, a = r < o ? r : o;
        let l = -1, c = 0;
        for(; c < a; c++){
            const d = t.charCodeAt(n + c);
            if (d !== e.charCodeAt(s + c)) break;
            d === iY && (l = c);
        }
        if (c === a) if (o > a) {
            if (e.charCodeAt(s + c) === iY) return e.slice(s + c + 1);
            if (c === 0) return e.slice(s + c);
        } else r > a && (t.charCodeAt(n + c) === iY ? l = c : c === 0 && (l = 0));
        let u = "";
        for(c = n + l + 1; c <= i; ++c)(c === i || t.charCodeAt(c) === iY) && (u += u.length === 0 ? ".." : "/..");
        return `${u}${e.slice(s + l)}`;
    },
    toNamespacedPath (t) {
        return t;
    },
    dirname (t) {
        if (kj(t, "path"), t.length === 0) return ".";
        const e = t.charCodeAt(0) === iY;
        let n = -1, i = !0;
        for(let r = t.length - 1; r >= 1; --r)if (t.charCodeAt(r) === iY) {
            if (!i) {
                n = r;
                break;
            }
        } else i = !1;
        return n === -1 ? e ? "/" : "." : e && n === 1 ? "//" : t.slice(0, n);
    },
    basename (t, e) {
        e !== void 0 && kj(e, "suffix"), kj(t, "path");
        let n = 0, i = -1, r = !0, s;
        if (e !== void 0 && e.length > 0 && e.length <= t.length) {
            if (e === t) return "";
            let o = e.length - 1, a = -1;
            for(s = t.length - 1; s >= 0; --s){
                const l = t.charCodeAt(s);
                if (l === iY) {
                    if (!r) {
                        n = s + 1;
                        break;
                    }
                } else a === -1 && (r = !1, a = s + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (i = s) : (o = -1, i = a));
            }
            return n === i ? i = a : i === -1 && (i = t.length), t.slice(n, i);
        }
        for(s = t.length - 1; s >= 0; --s)if (t.charCodeAt(s) === iY) {
            if (!r) {
                n = s + 1;
                break;
            }
        } else i === -1 && (r = !1, i = s + 1);
        return i === -1 ? "" : t.slice(n, i);
    },
    extname (t) {
        kj(t, "path");
        let e = -1, n = 0, i = -1, r = !0, s = 0;
        for(let o = t.length - 1; o >= 0; --o){
            const a = t[o];
            if (a === "/") {
                if (!r) {
                    n = o + 1;
                    break;
                }
                continue;
            }
            i === -1 && (r = !1, i = o + 1), a === "." ? e === -1 ? e = o : s !== 1 && (s = 1) : e !== -1 && (s = -1);
        }
        return e === -1 || i === -1 || s === 0 || s === 1 && e === i - 1 && e === n + 1 ? "" : t.slice(e, i);
    },
    format: aXu.bind(null, "/"),
    parse (t) {
        kj(t, "path");
        const e = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (t.length === 0) return e;
        const n = t.charCodeAt(0) === iY;
        let i;
        n ? (e.root = "/", i = 1) : i = 0;
        let r = -1, s = 0, o = -1, a = !0, l = t.length - 1, c = 0;
        for(; l >= i; --l){
            const u = t.charCodeAt(l);
            if (u === iY) {
                if (!a) {
                    s = l + 1;
                    break;
                }
                continue;
            }
            o === -1 && (a = !1, o = l + 1), u === Uvt ? r === -1 ? r = l : c !== 1 && (c = 1) : r !== -1 && (c = -1);
        }
        if (o !== -1) {
            const u = s === 0 && n ? 1 : s;
            r === -1 || c === 0 || c === 1 && r === o - 1 && r === s + 1 ? e.base = e.name = t.slice(u, o) : (e.name = t.slice(u, r), e.base = t.slice(u, o), e.ext = t.slice(r, o));
        }
        return s > 0 ? e.dir = t.slice(0, s - 1) : n && (e.dir = "/"), e;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
}, lh.win32 = EC.win32 = EC, lh.posix = EC.posix = lh, nL = Pde ? EC.normalize : lh.normalize, eW = Pde ? EC.isAbsolute : lh.isAbsolute, Z0 = Pde ? EC.join : lh.join, l$e = Pde ? EC.resolve : lh.resolve, Qxe = Pde ? EC.relative : lh.relative, g4 = Pde ? EC.dirname : lh.dirname, Ku = Pde ? EC.basename : lh.basename, sO = Pde ? EC.extname : lh.extname, j_y = Pde ? EC.format : lh.format, i6t = Pde ? EC.parse : lh.parse, $_y = Pde ? EC.toNamespacedPath : lh.toNamespacedPath, g1 = Pde ? EC.sep : lh.sep, H_y = Pde ? EC.delimiter : lh.delimiter;

}
