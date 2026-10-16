import { Ei, Is, bi, gR } from "./process.js";
import { h } from "./tslib.es6.js";
function yUe(e, t) {
    if (e === null || typeof e != "object") throw new _R(t, "Object", e);
}
function hn(e, t) {
    if (typeof e != "string") throw new _R(t, "string", e);
}
function He(e) {
    return e === $n || e === Dr;
}
function fR(e) {
    return e === $n;
}
function la(e) {
    return e >= s5 && e <= a5 || e >= i5 && e <= o5;
}
function jv(e, t, n, r) {
    let s = "", i = 0, a = -1, o = 0, l = 0;
    for(let d = 0; d <= e.length; ++d){
        if (d < e.length) l = e.charCodeAt(d);
        else {
            if (r(l)) break;
            l = $n;
        }
        if (r(l)) {
            if (!(a === d - 1 || o === 1)) if (o === 2) {
                if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== Va || s.charCodeAt(s.length - 2) !== Va) {
                    if (s.length > 2) {
                        const u = s.lastIndexOf(n);
                        u === -1 ? (s = "", i = 0) : (s = s.slice(0, u), i = s.length - 1 - s.lastIndexOf(n)), a = d, o = 0;
                        continue;
                    } else if (s.length !== 0) {
                        s = "", i = 0, a = d, o = 0;
                        continue;
                    }
                }
                t && (s += s.length > 0 ? `${n}..` : "..", i = 2);
            } else s.length > 0 ? s += `${n}${e.slice(a + 1, d)}` : s = e.slice(a + 1, d), i = d - a - 1;
            a = d, o = 0;
        } else l === Va && o !== -1 ? ++o : o = -1;
    }
    return s;
}
function wUe(e) {
    return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function r5(e, t) {
    yUe(t, "pathObject");
    const n = t.dir || t.root, r = t.base || `${t.name || ""}${wUe(t.ext)}`;
    return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
}
var s5, i5, a5, o5, Va, $n, Dr, Ri, c5, _R, Or, Yt, l5, De, on, Dm, L, xn, d5, st, _t, Hv, EUe, bUe, RUe, Fn, Om;
export { $n, De, Dm, Dr, EUe, Fn, He, Hv, L, Om, Or, RUe, Ri, Va, Yt, _R, _t, a5, bUe, c5, d5, fR, hn, i5, jv, l5, la, o5, on, r5, s5, st, wUe, xn, yUe };
var __wakaru_Ce_initialized = false;
export function Ce() {
if (__wakaru_Ce_initialized) return;
__wakaru_Ce_initialized = true;
"use strict";
h(), bi(), s5 = 65, i5 = 97, a5 = 90, o5 = 122, Va = 46, $n = 47, Dr = 92, Ri = 58, c5 = 63, _R = class extends Error {
    constructor(e, t, n){
        let r;
        typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
        const s = e.indexOf(".") !== -1 ? "property" : "argument";
        let i = `The "${e}" ${s} ${r} of type ${t}`;
        i += `. Received type ${typeof n}`, super(i), this.code = "ERR_INVALID_ARG_TYPE";
    }
}, Or = gR === "win32", Yt = {
    resolve (...e) {
        let t = "", n = "", r = !1;
        for(let s = e.length - 1; s >= -1; s--){
            let i;
            if (s >= 0) {
                if (i = e[s], hn(i, `paths[${s}]`), i.length === 0) continue;
            } else t.length === 0 ? i = Ei() : (i = Is[`=${t}`] || Ei(), (i === void 0 || i.slice(0, 2).toLowerCase() !== t.toLowerCase() && i.charCodeAt(2) === Dr) && (i = `${t}\\`));
            const a = i.length;
            let o = 0, l = "", d = !1;
            const u = i.charCodeAt(0);
            if (a === 1) He(u) && (o = 1, d = !0);
            else if (He(u)) if (d = !0, He(i.charCodeAt(1))) {
                let m = 2, f = m;
                for(; m < a && !He(i.charCodeAt(m));)m++;
                if (m < a && m !== f) {
                    const v = i.slice(f, m);
                    for(f = m; m < a && He(i.charCodeAt(m));)m++;
                    if (m < a && m !== f) {
                        for(f = m; m < a && !He(i.charCodeAt(m));)m++;
                        (m === a || m !== f) && (l = `\\\\${v}\\${i.slice(f, m)}`, o = m);
                    }
                }
            } else o = 1;
            else la(u) && i.charCodeAt(1) === Ri && (l = i.slice(0, 2), o = 2, a > 2 && He(i.charCodeAt(2)) && (d = !0, o = 3));
            if (l.length > 0) if (t.length > 0) {
                if (l.toLowerCase() !== t.toLowerCase()) continue;
            } else t = l;
            if (r) {
                if (t.length > 0) break;
            } else if (n = `${i.slice(o)}\\${n}`, r = d, d && t.length > 0) break;
        }
        return n = jv(n, !r, "\\", He), r ? `${t}\\${n}` : `${t}${n}` || ".";
    },
    normalize (e) {
        hn(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let n = 0, r, s = !1;
        const i = e.charCodeAt(0);
        if (t === 1) return fR(i) ? "\\" : e;
        if (He(i)) if (s = !0, He(e.charCodeAt(1))) {
            let o = 2, l = o;
            for(; o < t && !He(e.charCodeAt(o));)o++;
            if (o < t && o !== l) {
                const d = e.slice(l, o);
                for(l = o; o < t && He(e.charCodeAt(o));)o++;
                if (o < t && o !== l) {
                    for(l = o; o < t && !He(e.charCodeAt(o));)o++;
                    if (o === t) return `\\\\${d}\\${e.slice(l)}\\`;
                    o !== l && (r = `\\\\${d}\\${e.slice(l, o)}`, n = o);
                }
            }
        } else n = 1;
        else la(i) && e.charCodeAt(1) === Ri && (r = e.slice(0, 2), n = 2, t > 2 && He(e.charCodeAt(2)) && (s = !0, n = 3));
        let a = n < t ? jv(e.slice(n), !s, "\\", He) : "";
        if (a.length === 0 && !s && (a = "."), a.length > 0 && He(e.charCodeAt(t - 1)) && (a += "\\"), !s && r === void 0 && e.includes(":")) {
            if (a.length >= 2 && la(a.charCodeAt(0)) && a.charCodeAt(1) === Ri) return `.\\${a}`;
            let o = e.indexOf(":");
            do if (o === t - 1 || He(e.charCodeAt(o + 1))) return `.\\${a}`;
            while ((o = e.indexOf(":", o + 1)) !== -1)
        }
        return r === void 0 ? s ? `\\${a}` : a : s ? `${r}\\${a}` : `${r}${a}`;
    },
    isAbsolute (e) {
        hn(e, "path");
        const t = e.length;
        if (t === 0) return !1;
        const n = e.charCodeAt(0);
        return He(n) || t > 2 && la(n) && e.charCodeAt(1) === Ri && He(e.charCodeAt(2));
    },
    join (...e) {
        if (e.length === 0) return ".";
        let t, n;
        for(let i = 0; i < e.length; ++i){
            const a = e[i];
            hn(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
        }
        if (t === void 0) return ".";
        let r = !0, s = 0;
        if (typeof n == "string" && He(n.charCodeAt(0))) {
            ++s;
            const i = n.length;
            i > 1 && He(n.charCodeAt(1)) && (++s, i > 2 && (He(n.charCodeAt(2)) ? ++s : r = !1));
        }
        if (r) {
            for(; s < t.length && He(t.charCodeAt(s));)s++;
            s >= 2 && (t = `\\${t.slice(s)}`);
        }
        return Yt.normalize(t);
    },
    relative (e, t) {
        if (hn(e, "from"), hn(t, "to"), e === t) return "";
        const n = Yt.resolve(e), r = Yt.resolve(t);
        if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
        if (n.length !== e.length || r.length !== t.length) {
            const T = n.split("\\"), S = r.split("\\");
            T[T.length - 1] === "" && T.pop(), S[S.length - 1] === "" && S.pop();
            const k = T.length, y = S.length, b = k < y ? k : y;
            let I;
            for(I = 0; I < b && T[I].toLowerCase() === S[I].toLowerCase(); I++);
            return I === 0 ? r : I === b ? y > b ? S.slice(I).join("\\") : k > b ? "..\\".repeat(k - 1 - I) + ".." : "" : "..\\".repeat(k - I) + S.slice(I).join("\\");
        }
        let s = 0;
        for(; s < e.length && e.charCodeAt(s) === Dr;)s++;
        let i = e.length;
        for(; i - 1 > s && e.charCodeAt(i - 1) === Dr;)i--;
        const a = i - s;
        let o = 0;
        for(; o < t.length && t.charCodeAt(o) === Dr;)o++;
        let l = t.length;
        for(; l - 1 > o && t.charCodeAt(l - 1) === Dr;)l--;
        const d = l - o, u = a < d ? a : d;
        let m = -1, f = 0;
        for(; f < u; f++){
            const T = e.charCodeAt(s + f);
            if (T !== t.charCodeAt(o + f)) break;
            T === Dr && (m = f);
        }
        if (f !== u) {
            if (m === -1) return r;
        } else {
            if (d > u) {
                if (t.charCodeAt(o + f) === Dr) return r.slice(o + f + 1);
                if (f === 2) return r.slice(o + f);
            }
            a > u && (e.charCodeAt(s + f) === Dr ? m = f : f === 2 && (m = 3)), m === -1 && (m = 0);
        }
        let v = "";
        for(f = s + m + 1; f <= i; ++f)(f === i || e.charCodeAt(f) === Dr) && (v += v.length === 0 ? ".." : "\\..");
        return o += m, v.length > 0 ? `${v}${r.slice(o, l)}` : (r.charCodeAt(o) === Dr && ++o, r.slice(o, l));
    },
    toNamespacedPath (e) {
        if (typeof e != "string" || e.length === 0) return e;
        const t = Yt.resolve(e);
        if (t.length <= 2) return e;
        if (t.charCodeAt(0) === Dr) {
            if (t.charCodeAt(1) === Dr) {
                const n = t.charCodeAt(2);
                if (n !== c5 && n !== Va) return `\\\\?\\UNC\\${t.slice(2)}`;
            }
        } else if (la(t.charCodeAt(0)) && t.charCodeAt(1) === Ri && t.charCodeAt(2) === Dr) return `\\\\?\\${t}`;
        return t;
    },
    dirname (e) {
        hn(e, "path");
        const t = e.length;
        if (t === 0) return ".";
        let n = -1, r = 0;
        const s = e.charCodeAt(0);
        if (t === 1) return He(s) ? e : ".";
        if (He(s)) {
            if (n = r = 1, He(e.charCodeAt(1))) {
                let o = 2, l = o;
                for(; o < t && !He(e.charCodeAt(o));)o++;
                if (o < t && o !== l) {
                    for(l = o; o < t && He(e.charCodeAt(o));)o++;
                    if (o < t && o !== l) {
                        for(l = o; o < t && !He(e.charCodeAt(o));)o++;
                        if (o === t) return e;
                        o !== l && (n = r = o + 1);
                    }
                }
            }
        } else la(s) && e.charCodeAt(1) === Ri && (n = t > 2 && He(e.charCodeAt(2)) ? 3 : 2, r = n);
        let i = -1, a = !0;
        for(let o = t - 1; o >= r; --o)if (He(e.charCodeAt(o))) {
            if (!a) {
                i = o;
                break;
            }
        } else a = !1;
        if (i === -1) {
            if (n === -1) return ".";
            i = n;
        }
        return e.slice(0, i);
    },
    basename (e, t) {
        t !== void 0 && hn(t, "suffix"), hn(e, "path");
        let n = 0, r = -1, s = !0, i;
        if (e.length >= 2 && la(e.charCodeAt(0)) && e.charCodeAt(1) === Ri && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let a = t.length - 1, o = -1;
            for(i = e.length - 1; i >= n; --i){
                const l = e.charCodeAt(i);
                if (He(l)) {
                    if (!s) {
                        n = i + 1;
                        break;
                    }
                } else o === -1 && (s = !1, o = i + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = i) : (a = -1, r = o));
            }
            return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
        }
        for(i = e.length - 1; i >= n; --i)if (He(e.charCodeAt(i))) {
            if (!s) {
                n = i + 1;
                break;
            }
        } else r === -1 && (s = !1, r = i + 1);
        return r === -1 ? "" : e.slice(n, r);
    },
    extname (e) {
        hn(e, "path");
        let t = 0, n = -1, r = 0, s = -1, i = !0, a = 0;
        e.length >= 2 && e.charCodeAt(1) === Ri && la(e.charCodeAt(0)) && (t = r = 2);
        for(let o = e.length - 1; o >= t; --o){
            const l = e.charCodeAt(o);
            if (He(l)) {
                if (!i) {
                    r = o + 1;
                    break;
                }
                continue;
            }
            s === -1 && (i = !1, s = o + 1), l === Va ? n === -1 ? n = o : a !== 1 && (a = 1) : n !== -1 && (a = -1);
        }
        return n === -1 || s === -1 || a === 0 || a === 1 && n === s - 1 && n === r + 1 ? "" : e.slice(n, s);
    },
    format: r5.bind(null, "\\"),
    parse (e) {
        hn(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const n = e.length;
        let r = 0, s = e.charCodeAt(0);
        if (n === 1) return He(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
        if (He(s)) {
            if (r = 1, He(e.charCodeAt(1))) {
                let m = 2, f = m;
                for(; m < n && !He(e.charCodeAt(m));)m++;
                if (m < n && m !== f) {
                    for(f = m; m < n && He(e.charCodeAt(m));)m++;
                    if (m < n && m !== f) {
                        for(f = m; m < n && !He(e.charCodeAt(m));)m++;
                        m === n ? r = m : m !== f && (r = m + 1);
                    }
                }
            }
        } else if (la(s) && e.charCodeAt(1) === Ri) {
            if (n <= 2) return t.root = t.dir = e, t;
            if (r = 2, He(e.charCodeAt(2))) {
                if (n === 3) return t.root = t.dir = e, t;
                r = 3;
            }
        }
        r > 0 && (t.root = e.slice(0, r));
        let i = -1, a = r, o = -1, l = !0, d = e.length - 1, u = 0;
        for(; d >= r; --d){
            if (s = e.charCodeAt(d), He(s)) {
                if (!l) {
                    a = d + 1;
                    break;
                }
                continue;
            }
            o === -1 && (l = !1, o = d + 1), s === Va ? i === -1 ? i = d : u !== 1 && (u = 1) : i !== -1 && (u = -1);
        }
        return o !== -1 && (i === -1 || u === 0 || u === 1 && i === o - 1 && i === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, i), t.base = e.slice(a, o), t.ext = e.slice(i, o))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
}, l5 = (()=>{
    if (Or) {
        const e = /\\/g;
        return ()=>{
            const t = Ei().replace(e, "/");
            return t.slice(t.indexOf("/"));
        };
    }
    return ()=>Ei();
})(), De = {
    resolve (...e) {
        let t = "", n = !1;
        for(let r = e.length - 1; r >= 0 && !n; r--){
            const s = e[r];
            hn(s, `paths[${r}]`), s.length !== 0 && (t = `${s}/${t}`, n = s.charCodeAt(0) === $n);
        }
        if (!n) {
            const r = l5();
            t = `${r}/${t}`, n = r.charCodeAt(0) === $n;
        }
        return t = jv(t, !n, "/", fR), n ? `/${t}` : t.length > 0 ? t : ".";
    },
    normalize (e) {
        if (hn(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === $n, n = e.charCodeAt(e.length - 1) === $n;
        return e = jv(e, !t, "/", fR), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
    },
    isAbsolute (e) {
        return hn(e, "path"), e.length > 0 && e.charCodeAt(0) === $n;
    },
    join (...e) {
        if (e.length === 0) return ".";
        const t = [];
        for(let n = 0; n < e.length; ++n){
            const r = e[n];
            hn(r, "path"), r.length > 0 && t.push(r);
        }
        return t.length === 0 ? "." : De.normalize(t.join("/"));
    },
    relative (e, t) {
        if (hn(e, "from"), hn(t, "to"), e === t || (e = De.resolve(e), t = De.resolve(t), e === t)) return "";
        const n = 1, r = e.length, s = r - n, i = 1, a = t.length - i, o = s < a ? s : a;
        let l = -1, d = 0;
        for(; d < o; d++){
            const m = e.charCodeAt(n + d);
            if (m !== t.charCodeAt(i + d)) break;
            m === $n && (l = d);
        }
        if (d === o) if (a > o) {
            if (t.charCodeAt(i + d) === $n) return t.slice(i + d + 1);
            if (d === 0) return t.slice(i + d);
        } else s > o && (e.charCodeAt(n + d) === $n ? l = d : d === 0 && (l = 0));
        let u = "";
        for(d = n + l + 1; d <= r; ++d)(d === r || e.charCodeAt(d) === $n) && (u += u.length === 0 ? ".." : "/..");
        return `${u}${t.slice(i + l)}`;
    },
    toNamespacedPath (e) {
        return e;
    },
    dirname (e) {
        if (hn(e, "path"), e.length === 0) return ".";
        const t = e.charCodeAt(0) === $n;
        let n = -1, r = !0;
        for(let s = e.length - 1; s >= 1; --s)if (e.charCodeAt(s) === $n) {
            if (!r) {
                n = s;
                break;
            }
        } else r = !1;
        return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
    },
    basename (e, t) {
        t !== void 0 && hn(t, "suffix"), hn(e, "path");
        let n = 0, r = -1, s = !0, i;
        if (t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return "";
            let a = t.length - 1, o = -1;
            for(i = e.length - 1; i >= 0; --i){
                const l = e.charCodeAt(i);
                if (l === $n) {
                    if (!s) {
                        n = i + 1;
                        break;
                    }
                } else o === -1 && (s = !1, o = i + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = i) : (a = -1, r = o));
            }
            return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
        }
        for(i = e.length - 1; i >= 0; --i)if (e.charCodeAt(i) === $n) {
            if (!s) {
                n = i + 1;
                break;
            }
        } else r === -1 && (s = !1, r = i + 1);
        return r === -1 ? "" : e.slice(n, r);
    },
    extname (e) {
        hn(e, "path");
        let t = -1, n = 0, r = -1, s = !0, i = 0;
        for(let a = e.length - 1; a >= 0; --a){
            const o = e[a];
            if (o === "/") {
                if (!s) {
                    n = a + 1;
                    break;
                }
                continue;
            }
            r === -1 && (s = !1, r = a + 1), o === "." ? t === -1 ? t = a : i !== 1 && (i = 1) : t !== -1 && (i = -1);
        }
        return t === -1 || r === -1 || i === 0 || i === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    },
    format: r5.bind(null, "/"),
    parse (e) {
        hn(e, "path");
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (e.length === 0) return t;
        const n = e.charCodeAt(0) === $n;
        let r;
        n ? (t.root = "/", r = 1) : r = 0;
        let s = -1, i = 0, a = -1, o = !0, l = e.length - 1, d = 0;
        for(; l >= r; --l){
            const u = e.charCodeAt(l);
            if (u === $n) {
                if (!o) {
                    i = l + 1;
                    break;
                }
                continue;
            }
            a === -1 && (o = !1, a = l + 1), u === Va ? s === -1 ? s = l : d !== 1 && (d = 1) : s !== -1 && (d = -1);
        }
        if (a !== -1) {
            const u = i === 0 && n ? 1 : i;
            s === -1 || d === 0 || d === 1 && s === a - 1 && s === i + 1 ? t.base = t.name = e.slice(u, a) : (t.name = e.slice(u, s), t.base = e.slice(u, a), t.ext = e.slice(s, a));
        }
        return i > 0 ? t.dir = e.slice(0, i - 1) : n && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
}, De.win32 = Yt.win32 = Yt, De.posix = Yt.posix = De, on = Or ? Yt.normalize : De.normalize, Dm = Or ? Yt.isAbsolute : De.isAbsolute, L = Or ? Yt.join : De.join, xn = Or ? Yt.resolve : De.resolve, d5 = Or ? Yt.relative : De.relative, st = Or ? Yt.dirname : De.dirname, _t = Or ? Yt.basename : De.basename, Hv = Or ? Yt.extname : De.extname, EUe = Or ? Yt.format : De.format, bUe = Or ? Yt.parse : De.parse, RUe = Or ? Yt.toNamespacedPath : De.toNamespacedPath, Fn = Or ? Yt.sep : De.sep, Om = Or ? Yt.delimiter : De.delimiter;

}
