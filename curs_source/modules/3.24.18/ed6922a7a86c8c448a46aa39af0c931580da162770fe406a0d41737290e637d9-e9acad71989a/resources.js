import { CAe, Hb, J3e, Oo, Ps, iIc, jn, kAe, n5, rIc, vf } from "./HVr.js";
import { vI } from "./extpath.js";
import { gt, li } from "./network.js";
import { Eqe, Eu, X3e, ba, gD, kO, uS } from "./path_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var Vpn, pl, PIc, yge, Ac, d3, LIc, mM, fo, u1, ml, jr, Tmi, h3, Emi, vzr, mht, ANt, Bqe, rwe, Uqe;
export { ANt, Ac, Bqe, Emi, LIc, PIc, Tmi, Uqe, Vpn, d3, fo, h3, jr, mM, mht, ml, pl, rwe, u1, vzr, yge };
var __wakaru_Li_initialized = false;
export function Li() {
if (__wakaru_Li_initialized) return;
__wakaru_Li_initialized = true;
"use strict";
x(), vI(), li(), ba(), jn(), Ps(), Qt(), Vpn = class {
    constructor(e){
        this._ignorePathCasing = e;
    }
    compare(e, t, n = !1) {
        return e === t ? 0 : n5(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
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
            if (e.scheme === gt.file) return kAe(CAe(e), CAe(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
            if (mht(e.authority, t.authority)) return kAe(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
        }
        return !1;
    }
    joinPath(e, ...t) {
        return Ee.joinPath(e, ...t);
    }
    basenameOrAuthority(e) {
        return fo(e) || e.authority;
    }
    basename(e) {
        return Eu.basename(e.path);
    }
    extname(e) {
        return Eu.extname(e.path);
    }
    dirname(e) {
        if (e.path.length === 0) return e;
        let t;
        return e.scheme === gt.file ? t = Ee.file(kO(CAe(e))).path : (t = Eu.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({
            path: t
        });
    }
    normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return e.scheme === gt.file ? t = Ee.file(gD(CAe(e))).path : t = Eu.normalize(e.path), e.with({
            path: t
        });
    }
    relativePath(e, t) {
        if (e.scheme !== t.scheme || !mht(e.authority, t.authority)) return;
        if (e.scheme === gt.file) {
            const r = X3e(CAe(e), CAe(t));
            return Oo ? J3e(r) : r;
        }
        let n = e.path || "/";
        const i = t.path || "/";
        if (this._ignorePathCasing(e)) {
            let r = 0;
            for(const s = Math.min(n.length, i.length); r < s && !(n.charCodeAt(r) !== i.charCodeAt(r) && n.charAt(r).toLowerCase() !== i.charAt(r).toLowerCase()); r++);
            n = i.substr(0, r) + n.substr(r);
        }
        return Eu.relative(n, i);
    }
    resolvePath(e, t) {
        if (e.scheme === gt.file) {
            const n = Ee.file(Eqe(CAe(e), t));
            return e.with({
                authority: n.authority,
                path: n.path
            });
        }
        return t = iIc(t), e.with({
            path: Eu.resolve(e.path, t)
        });
    }
    isAbsolutePath(e) {
        return !!e.path && e.path[0] === "/";
    }
    isEqualAuthority(e, t) {
        return e === t || e !== void 0 && t !== void 0 && Hb(e, t);
    }
    hasTrailingPathSeparator(e, t = uS) {
        if (e.scheme === gt.file) {
            const n = CAe(e);
            return n.length > rIc(n).length && n[n.length - 1] === t;
        } else {
            const n = e.path;
            return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
        }
    }
    removeTrailingPathSeparator(e, t = uS) {
        return ANt(e, t) ? e.with({
            path: e.path.substr(0, e.path.length - 1)
        }) : e;
    }
    addTrailingPathSeparator(e, t = uS) {
        let n = !1;
        if (e.scheme === gt.file) {
            const i = CAe(e);
            n = i !== void 0 && i.length === rIc(i).length && i[i.length - 1] === t;
        } else {
            t = "/";
            const i = e.path;
            n = i.length === 1 && i.charCodeAt(i.length - 1) === 47;
        }
        return !n && !ANt(e, t) ? e.with({
            path: e.path + "/"
        }) : e;
    }
}, pl = new Vpn(()=>!1), PIc = new Vpn((e)=>e.scheme === gt.file ? !vf : !0), yge = new Vpn((e)=>!0), Ac = pl.isEqual.bind(pl), d3 = pl.isEqualOrParent.bind(pl), LIc = pl.getComparisonKey.bind(pl), mM = pl.basenameOrAuthority.bind(pl), fo = pl.basename.bind(pl), u1 = pl.extname.bind(pl), ml = pl.dirname.bind(pl), jr = pl.joinPath.bind(pl), Tmi = pl.normalizePath.bind(pl), h3 = pl.relativePath.bind(pl), Emi = pl.resolvePath.bind(pl), vzr = pl.isAbsolutePath.bind(pl), mht = pl.isEqualAuthority.bind(pl), ANt = pl.hasTrailingPathSeparator.bind(pl), Bqe = pl.removeTrailingPathSeparator.bind(pl), rwe = pl.addTrailingPathSeparator.bind(pl), ((e)=>{
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
    function t(n) {
        const i = new Map;
        n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o)=>{
            const [a, c] = o.split(":");
            a && c && i.set(a, c);
        });
        const s = n.path.substring(0, n.path.indexOf(";"));
        return s && i.set(e.META_DATA_MIME, s), i;
    }
    e.parseMetaData = t;
})(Uqe || (Uqe = {}));

}
