import { Je } from "./extpath.js";
import { H, tr } from "./network.js";
import { F, Ne, Qr, Qt, ie, le, li } from "./path.js";
import { V, X, we } from "./platform.js";
import { Ke } from "./strings.js";
import { Ge } from "./ternarySearchTree.js";
import { w } from "./tslib.es6.js";
import { Xt, Y, Ye } from "./uri.js";
function Zr(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function e1(e, t) {
    return e.length === t.length && Ge(e, t) === 0;
}
function Fe(e) {
    return e === 47 || e === 92;
}
function vi(e) {
    return e.replace(/[\\/]/g, F.sep);
}
function Ta(e) {
    return e.indexOf("/") === -1 && (e = vi(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function wi(e, t = F.sep) {
    if (!e) return "";
    const r = e.length, s = e.charCodeAt(0);
    if (Fe(s)) {
        if (Fe(e.charCodeAt(1)) && !Fe(e.charCodeAt(2))) {
            let n = 3;
            const a = n;
            for(; n < r && !Fe(e.charCodeAt(n)); n++);
            if (a !== n && !Fe(e.charCodeAt(n + 1))) {
                for(n += 1; n < r; n++)if (Fe(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
            }
        }
        return t;
    } else if (Ci(s) && e.charCodeAt(1) === 58) return Fe(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
    let i = e.indexOf("://");
    if (i !== -1) {
        for(i += 3; i < r; i++)if (Fe(e.charCodeAt(i))) return e.slice(0, i + 1);
    }
    return "";
}
function La(e, t, r) {
    return r === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : r === 1 ? !0 : e.charCodeAt(r - 1) !== t.charCodeAt(r - 1) ? !1 : e.startsWith(t);
}
function Ra(e, t, r) {
    for(let s = 0; s < r; s++){
        let i = e.charCodeAt(s), n = t.charCodeAt(s);
        if (i !== n) {
            if (i >= 128 || n >= 128) return Ge(e, t, s, r, s, r) === 0;
            if (i >= 97 && i <= 122 && (i -= 32), n >= 97 && n <= 122 && (n -= 32), i !== n) return !1;
        }
    }
    return !0;
}
function Pe(e, t, r, s = ie) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const i = e.length, n = t.length;
    if (n > i) return !1;
    const a = s.charCodeAt(0), o = t.charCodeAt(n - 1) === a;
    if (n < i && !o && e.charCodeAt(n) !== a) return !1;
    if (r) {
        if (!Ra(e, t, n)) return !1;
    } else if (!La(e, t, n)) return !1;
    return n === i || o ? !0 : e.charCodeAt(n) === a;
}
function Ci(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function De(e) {
    return Xt(e, !0);
}
var rr, M, $i, Ga, Ha, Ka, Ja, Qa, ji, Ya, Za, o1, Xa, e2, t2, r2, a1, l1, s2, i2, Wi;
export { $i, Ci, De, Fe, Ga, Ha, Ja, Ka, La, M, Pe, Qa, Ra, Ta, Wi, Xa, Ya, Za, Zr, a1, e1, e2, i2, ji, l1, o1, r2, rr, s2, t2, vi, wi };
var __wakaru_c1_initialized = false;
export function c1() {
if (__wakaru_c1_initialized) return;
__wakaru_c1_initialized = true;
"use strict";
w(), Je(), tr(), le(), X(), Ke(), Ye(), rr = class {
    constructor(e){
        this._ignorePathCasing = e;
    }
    compare(e, t, r = !1) {
        return e === t ? 0 : Zr(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
    }
    isEqual(e, t, r = !1) {
        return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, r) === this.getComparisonKey(t, r);
    }
    getComparisonKey(e, t = !1) {
        return e.with({
            path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0,
            fragment: t ? null : void 0
        }).toString();
    }
    ignorePathCasing(e) {
        return this._ignorePathCasing(e);
    }
    isEqualOrParent(e, t, r = !1) {
        if (e.scheme === t.scheme) {
            if (e.scheme === H.file) return Pe(De(e), De(t), this._ignorePathCasing(e)) && e.query === t.query && (r || e.fragment === t.fragment);
            if (a1(e.authority, t.authority)) return Pe(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (r || e.fragment === t.fragment);
        }
        return !1;
    }
    joinPath(e, ...t) {
        return Y.joinPath(e, ...t);
    }
    basenameOrAuthority(e) {
        return ji(e) || e.authority;
    }
    basename(e) {
        return F.basename(e.path);
    }
    extname(e) {
        return F.extname(e.path);
    }
    dirname(e) {
        if (e.path.length === 0) return e;
        let t;
        return e.scheme === H.file ? t = Y.file(Ne(De(e))).path : (t = F.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({
            path: t
        });
    }
    normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === H.file ? t = Y.file(Qt(De(e))).path : t = F.normalize(e.path), e.with({
            path: t
        });
    }
    relativePath(e, t) {
        if (e.scheme !== t.scheme || !a1(e.authority, t.authority)) return;
        if (e.scheme === H.file) {
            const i = li(De(e), De(t));
            return V ? vi(i) : i;
        }
        let r = e.path || "/";
        const s = t.path || "/";
        if (this._ignorePathCasing(e)) {
            let i = 0;
            for(const n = Math.min(r.length, s.length); i < n && !(r.charCodeAt(i) !== s.charCodeAt(i) && r.charAt(i).toLowerCase() !== s.charAt(i).toLowerCase()); i++);
            r = s.substr(0, i) + r.substr(i);
        }
        return F.relative(r, s);
    }
    resolvePath(e, t) {
        if (e.scheme === H.file) {
            const r = Y.file(Qr(De(e), t));
            return e.with({
                authority: r.authority,
                path: r.path
            });
        }
        return t = Ta(t), e.with({
            path: F.resolve(e.path, t)
        });
    }
    isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
    }
    isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && e1(e, t);
    }
    hasTrailingPathSeparator(e, t = ie) {
        if (e.scheme === H.file) {
            const r = De(e);
            return r.length > wi(r).length && r[r.length - 1] === t;
        } else {
            const r = e.path;
            return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
    }
    removeTrailingPathSeparator(e, t = ie) {
        return l1(e, t) ? e.with({
            path: e.path.substr(0, e.path.length - 1)
        }) : e;
    }
    addTrailingPathSeparator(e, t = ie) {
        let r = !1;
        if (e.scheme === H.file) {
            const s = De(e);
            r = s !== void 0 && s.length === wi(s).length && s[s.length - 1] === t;
        } else {
            t = "/";
            const s = e.path;
            r = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
        }
        return !r && !l1(e, t) ? e.with({
            path: e.path + "/"
        }) : e;
    }
}, M = new rr(()=>!1), $i = new rr((e)=>e.scheme === H.file ? !we : !0), Ga = new rr((e)=>!0), Ha = M.isEqual.bind(M), Ka = M.isEqualOrParent.bind(M), Ja = M.getComparisonKey.bind(M), Qa = M.basenameOrAuthority.bind(M), ji = M.basename.bind(M), Ya = M.extname.bind(M), Za = M.dirname.bind(M), o1 = M.joinPath.bind(M), Xa = M.normalizePath.bind(M), e2 = M.relativePath.bind(M), t2 = M.resolvePath.bind(M), r2 = M.isAbsolutePath.bind(M), a1 = M.isEqualAuthority.bind(M), l1 = M.hasTrailingPathSeparator.bind(M), s2 = M.removeTrailingPathSeparator.bind(M), i2 = M.addTrailingPathSeparator.bind(M), ((e)=>{
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
    function t(r) {
        const s = new Map;
        r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach((a)=>{
            const [o, l] = a.split(":");
            o && l && s.set(o, l);
        });
        const n = r.path.substring(0, r.path.indexOf(";"));
        return n && s.set(e.META_DATA_MIME, n), s;
    }
    e.parseMetaData = t;
})(Wi || (Wi = {}));

}
