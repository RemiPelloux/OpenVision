import { Lr } from "./extpath.js";
import { WR } from "./labels.js";
import { $, $e } from "./network.js";
import { Ce, De, Fn, d5, on, st, xn } from "./path.js";
import { Fe, ee, oe } from "./platform.js";
import { jn } from "./strings.js";
import { ec } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { Yv, x, ye } from "./uri.js";
function TR(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function Ii(e, t) {
    return e.length === t.length && ec(e, t) === 0;
}
function qa(e) {
    return e === 47 || e === 92;
}
function Fl(e) {
    return e.replace(/[\\/]/g, De.sep);
}
function Axe(e) {
    return e.indexOf("/") === -1 && (e = Fl(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function i3(e, t = De.sep) {
    if (!e) return "";
    const n = e.length, r = e.charCodeAt(0);
    if (qa(r)) {
        if (qa(e.charCodeAt(1)) && !qa(e.charCodeAt(2))) {
            let i = 3;
            const a = i;
            for(; i < n && !qa(e.charCodeAt(i)); i++);
            if (a !== i && !qa(e.charCodeAt(i + 1))) {
                for(i += 1; i < n; i++)if (qa(e.charCodeAt(i))) return e.slice(0, i + 1).replace(/[\\/]/g, t);
            }
        }
        return t;
    } else if (WR(r) && e.charCodeAt(1) === 58) return qa(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
    let s = e.indexOf("://");
    if (s !== -1) {
        for(s += 3; s < n; s++)if (qa(e.charCodeAt(s))) return e.slice(0, s + 1);
    }
    return "";
}
function Nxe(e, t, n) {
    return n === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : n === 1 ? !0 : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? !1 : e.startsWith(t);
}
function Dxe(e, t, n) {
    for(let r = 0; r < n; r++){
        let s = e.charCodeAt(r), i = t.charCodeAt(r);
        if (s !== i) {
            if (s >= 128 || i >= 128) return ec(e, t, r, n, r, n) === 0;
            if (s >= 97 && s <= 122 && (s -= 32), i >= 97 && i <= 122 && (i -= 32), s !== i) return !1;
        }
    }
    return !0;
}
function ma(e, t, n, r = Fn) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const s = e.length, i = t.length;
    if (i > s) return !1;
    const a = r.charCodeAt(0), o = t.charCodeAt(i - 1) === a;
    if (i < s && !o && e.charCodeAt(i) !== a) return !1;
    if (n) {
        if (!Dxe(e, t, i)) return !1;
    } else if (!Nxe(e, t, i)) return !1;
    return i === s || o ? !0 : e.charCodeAt(i) === a;
}
function cs(e) {
    return Yv(e, !0);
}
var Qm, nt, St, VR, $R, jR, Lxe, Uxe, Mi, m3, p3, Ae, HR, xxe, Fxe, h3, Ur, qR, g3, Wxe, f3;
export { $R, Ae, Axe, Dxe, Fl, Fxe, HR, Ii, Lxe, Mi, Nxe, Qm, St, TR, Ur, Uxe, VR, Wxe, cs, f3, g3, h3, i3, jR, m3, ma, nt, p3, qR, qa, xxe };
var __wakaru_Ft_initialized = false;
export function Ft() {
if (__wakaru_Ft_initialized) return;
__wakaru_Ft_initialized = true;
"use strict";
h(), Lr(), $e(), Ce(), oe(), jn(), ye(), Qm = class {
    constructor(e){
        this._ignorePathCasing = e;
    }
    compare(e, t, n = !1) {
        return e === t ? 0 : TR(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
    }
    isEqual(e, t, n = !1) {
        return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
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
    isEqualOrParent(e, t, n = !1) {
        if (e.scheme === t.scheme) {
            if (e.scheme === $.file) return ma(cs(e), cs(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
            if (Ur(e.authority, t.authority)) return ma(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
        }
        return !1;
    }
    joinPath(e, ...t) {
        return x.joinPath(e, ...t);
    }
    basenameOrAuthority(e) {
        return Mi(e) || e.authority;
    }
    basename(e) {
        return De.basename(e.path);
    }
    extname(e) {
        return De.extname(e.path);
    }
    dirname(e) {
        if (e.path.length === 0) return e;
        let t;
        return e.scheme === $.file ? t = x.file(st(cs(e))).path : (t = De.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({
            path: t
        });
    }
    normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === $.file ? t = x.file(on(cs(e))).path : t = De.normalize(e.path), e.with({
            path: t
        });
    }
    relativePath(e, t) {
        if (e.scheme !== t.scheme || !Ur(e.authority, t.authority)) return;
        if (e.scheme === $.file) {
            const s = d5(cs(e), cs(t));
            return ee ? Fl(s) : s;
        }
        let n = e.path || "/";
        const r = t.path || "/";
        if (this._ignorePathCasing(e)) {
            let s = 0;
            for(const i = Math.min(n.length, r.length); s < i && !(n.charCodeAt(s) !== r.charCodeAt(s) && n.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++);
            n = r.substr(0, s) + n.substr(s);
        }
        return De.relative(n, r);
    }
    resolvePath(e, t) {
        if (e.scheme === $.file) {
            const n = x.file(xn(cs(e), t));
            return e.with({
                authority: n.authority,
                path: n.path
            });
        }
        return t = Axe(t), e.with({
            path: De.resolve(e.path, t)
        });
    }
    isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
    }
    isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && Ii(e, t);
    }
    hasTrailingPathSeparator(e, t = Fn) {
        if (e.scheme === $.file) {
            const n = cs(e);
            return n.length > i3(n).length && n[n.length - 1] === t;
        } else {
            const n = e.path;
            return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
    }
    removeTrailingPathSeparator(e, t = Fn) {
        return qR(e, t) ? e.with({
            path: e.path.substr(0, e.path.length - 1)
        }) : e;
    }
    addTrailingPathSeparator(e, t = Fn) {
        let n = !1;
        if (e.scheme === $.file) {
            const r = cs(e);
            n = r !== void 0 && r.length === i3(r).length && r[r.length - 1] === t;
        } else {
            t = "/";
            const r = e.path;
            n = r.length === 1 && r.charCodeAt(r.length - 1) === 47;
        }
        return !n && !qR(e, t) ? e.with({
            path: e.path + "/"
        }) : e;
    }
}, nt = new Qm(()=>!1), St = new Qm((e)=>e.scheme === $.file ? !Fe : !0), VR = new Qm((e)=>!0), $R = nt.isEqual.bind(nt), jR = nt.isEqualOrParent.bind(nt), Lxe = nt.getComparisonKey.bind(nt), Uxe = nt.basenameOrAuthority.bind(nt), Mi = nt.basename.bind(nt), m3 = nt.extname.bind(nt), p3 = nt.dirname.bind(nt), Ae = nt.joinPath.bind(nt), HR = nt.normalizePath.bind(nt), xxe = nt.relativePath.bind(nt), Fxe = nt.resolvePath.bind(nt), h3 = nt.isAbsolutePath.bind(nt), Ur = nt.isEqualAuthority.bind(nt), qR = nt.hasTrailingPathSeparator.bind(nt), g3 = nt.removeTrailingPathSeparator.bind(nt), Wxe = nt.addTrailingPathSeparator.bind(nt), ((e)=>{
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
    function t(n) {
        const r = new Map;
        n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((a)=>{
            const [o, l] = a.split(":");
            o && l && r.set(o, l);
        });
        const i = n.path.substring(0, n.path.indexOf(";"));
        return i && r.set(e.META_DATA_MIME, i), r;
    }
    e.parseMetaData = t;
})(f3 || (f3 = {}));

}
