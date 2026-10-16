import { DCo, DOe, Di, Fa, OXu, Zw, a_, c$e, fQ, l6t, xa } from "./Iwo.js";
import { pP } from "./extpath.js";
import { Ki, Ot } from "./network.js";
import { Qxe, Ul, g1, g4, l$e, lh, nL } from "./path_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var lZn, Iu, eTo, u$e, gu, YR, hZu, l7, Aa, XR, Mc, Os, Xvt, iL, Tmr, tTo, Zvt, Idn, Qvt, NOe, Jvt;
export { Aa, Idn, Iu, Jvt, Mc, NOe, Os, Qvt, Tmr, XR, Xvt, YR, Zvt, eTo, gu, hZu, iL, l7, lZn, tTo, u$e };
var __wakaru_Lr_initialized = false;
export function Lr() {
if (__wakaru_Lr_initialized) return;
__wakaru_Lr_initialized = true;
"use strict";
E(), pP(), Ki(), Ul(), Di(), Fa(), fn(), lZn = class {
    constructor(t){
        this._ignorePathCasing = t;
    }
    compare(t, e, n = !1) {
        return t === e ? 0 : fQ(this.getComparisonKey(t, n), this.getComparisonKey(e, n));
    }
    isEqual(t, e, n = !1) {
        return t === e ? !0 : !t || !e ? !1 : this.getComparisonKey(t, n) === this.getComparisonKey(e, n);
    }
    getComparisonKey(t, e = !1) {
        return t.with({
            path: this._ignorePathCasing(t) ? t.path.toLowerCase() : void 0,
            fragment: e ? null : void 0
        }).toString();
    }
    ignorePathCasing(t) {
        return this._ignorePathCasing(t);
    }
    isEqualOrParent(t, e, n = !1) {
        if (t.scheme === e.scheme) {
            if (t.scheme === Ot.file) return c$e(DOe(t), DOe(e), this._ignorePathCasing(t)) && t.query === e.query && (n || t.fragment === e.fragment);
            if (Zvt(t.authority, e.authority)) return c$e(t.path, e.path, this._ignorePathCasing(t), "/") && t.query === e.query && (n || t.fragment === e.fragment);
        }
        return !1;
    }
    joinPath(t, ...e) {
        return rt.joinPath(t, ...e);
    }
    basenameOrAuthority(t) {
        return Aa(t) || t.authority;
    }
    basename(t) {
        return lh.basename(t.path);
    }
    extname(t) {
        return lh.extname(t.path);
    }
    dirname(t) {
        if (t.path.length === 0) return t;
        let e;
        return t.scheme === Ot.file ? e = rt.file(g4(DOe(t))).path : (e = lh.dirname(t.path), t.authority && e.length && e.charCodeAt(0) !== 47 && (console.error(`dirname("${t.toString})) resulted in a relative path`), e = "/")), t.with({
            path: e
        });
    }
    normalizePath(t) {
        if (!t.path.length) return t;
        let e;
        return t.scheme === Ot.file ? e = rt.file(nL(DOe(t))).path : e = lh.normalize(t.path), t.with({
            path: e
        });
    }
    relativePath(t, e) {
        if (t.scheme !== e.scheme || !Zvt(t.authority, e.authority)) return;
        if (t.scheme === Ot.file) {
            const r = Qxe(DOe(t), DOe(e));
            return xa ? l6t(r) : r;
        }
        let n = t.path || "/";
        const i = e.path || "/";
        if (this._ignorePathCasing(t)) {
            let r = 0;
            for(const s = Math.min(n.length, i.length); r < s && !(n.charCodeAt(r) !== i.charCodeAt(r) && n.charAt(r).toLowerCase() !== i.charAt(r).toLowerCase()); r++);
            n = i.substr(0, r) + n.substr(r);
        }
        return lh.relative(n, i);
    }
    resolvePath(t, e) {
        if (t.scheme === Ot.file) {
            const n = rt.file(l$e(DOe(t), e));
            return t.with({
                authority: n.authority,
                path: n.path
            });
        }
        return e = OXu(e), t.with({
            path: lh.resolve(t.path, e)
        });
    }
    isAbsolutePath(t) {
        return !!t.path && t.path[0] === "/";
    }
    isEqualAuthority(t, e) {
        return t === e || t !== void 0 && e !== void 0 && Zw(t, e);
    }
    hasTrailingPathSeparator(t, e = g1) {
        if (t.scheme === Ot.file) {
            const n = DOe(t);
            return n.length > DCo(n).length && n[n.length - 1] === e;
        } else {
            const n = t.path;
            return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
        }
    }
    removeTrailingPathSeparator(t, e = g1) {
        return Idn(t, e) ? t.with({
            path: t.path.substr(0, t.path.length - 1)
        }) : t;
    }
    addTrailingPathSeparator(t, e = g1) {
        let n = !1;
        if (t.scheme === Ot.file) {
            const i = DOe(t);
            n = i !== void 0 && i.length === DCo(i).length && i[i.length - 1] === e;
        } else {
            e = "/";
            const i = t.path;
            n = i.length === 1 && i.charCodeAt(i.length - 1) === 47;
        }
        return !n && !Idn(t, e) ? t.with({
            path: t.path + "/"
        }) : t;
    }
}, Iu = new lZn(()=>!1), eTo = new lZn((t)=>t.scheme === Ot.file ? !a_ : !0), u$e = new lZn((t)=>!0), gu = Iu.isEqual.bind(Iu), YR = Iu.isEqualOrParent.bind(Iu), hZu = Iu.getComparisonKey.bind(Iu), l7 = Iu.basenameOrAuthority.bind(Iu), Aa = Iu.basename.bind(Iu), XR = Iu.extname.bind(Iu), Mc = Iu.dirname.bind(Iu), Os = Iu.joinPath.bind(Iu), Xvt = Iu.normalizePath.bind(Iu), iL = Iu.relativePath.bind(Iu), Tmr = Iu.resolvePath.bind(Iu), tTo = Iu.isAbsolutePath.bind(Iu), Zvt = Iu.isEqualAuthority.bind(Iu), Idn = Iu.hasTrailingPathSeparator.bind(Iu), Qvt = Iu.removeTrailingPathSeparator.bind(Iu), NOe = Iu.addTrailingPathSeparator.bind(Iu), ((t)=>{
    t.META_DATA_LABEL = "label", t.META_DATA_DESCRIPTION = "description", t.META_DATA_SIZE = "size", t.META_DATA_MIME = "mime";
    function e(n) {
        const i = new Map;
        n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o)=>{
            const [a, l] = o.split(":");
            a && l && i.set(a, l);
        });
        const s = n.path.substring(0, n.path.indexOf(";"));
        return s && i.set(t.META_DATA_MIME, s), i;
    }
    t.parseMetaData = e;
})(Jvt || (Jvt = {}));

}
