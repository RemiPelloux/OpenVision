import { Ei, Fa, Fpr, Ike, Nt, Ovt, Qe, Zm, uP } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { El, yo } from "./cancellation.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { IT, np } from "./iterator.js";
import { Twe, xHe } from "./languageFeatureDebounce.js";
import { Dg, Nd } from "./languageFeatures.js";
import { du, kv } from "./map.js";
import { dd, xp } from "./model.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var xVo, gRe, R7, une, rSt, Rwe, cIr;
export { R7, Rwe, cIr, gRe, rSt, une, xVo };
var __wakaru_p_e_initialized = false;
export function p_e() {
if (__wakaru_p_e_initialized) return;
__wakaru_p_e_initialized = true;
"use strict";
E(), bo(), yo(), Ei(), IT(), du(), Fa(), jc(), Qs(), xHe(), It(), Rn(), xp(), Qe(), Dg(), xVo = class MZi {
    remove() {
        this.parent?.children.delete(this.id);
    }
    static findId(e, n) {
        let i;
        if (typeof e == "string" ? i = `${n.id}/${e}` : (i = `${n.id}/${e.name}`, n.children.get(i) !== void 0 && (i = `${n.id}/${e.name}_${e.range.startLineNumber}_${e.range.startColumn}`)), n.children.get(i) === void 0) return i;
        let r = MZi._idProbeHints.get(n);
        r || (r = new Map, MZi._idProbeHints.set(n, r));
        let s = r.get(i) ?? 0, o;
        do o = `${i}_${s}`, s++;
        while (n.children.get(o) !== void 0)
        return r.set(i, s), o;
    }
    static getElementById(e, n) {
        if (!e) return;
        const i = Ike(e, n.id);
        if (i === e.length) return n;
        if (!(i < n.id.length)) for (const [, r] of n.children){
            const s = MZi.getElementById(e, r);
            if (s) return s;
        }
    }
    static size(e) {
        let n = 1;
        for (const [, i] of e.children)n += MZi.size(i);
        return n;
    }
    static empty(e) {
        return e.children.size === 0;
    }
}, xVo._idProbeHints = new WeakMap, gRe = xVo, R7 = class extends gRe {
    constructor(t, e, n){
        super(), this.id = t, this.parent = e, this.symbol = n, this.children = new Map;
    }
    getAllSymbols(t) {
        const e = [];
        e.push(this.symbol);
        for (const [, n] of this.children)e.push(...n.getAllSymbols(t));
        return e;
    }
}, une = class extends gRe {
    constructor(t, e, n, i){
        super(), this.id = t, this.parent = e, this.label = n, this.order = i, this.children = new Map;
    }
    getAllSymbols(t) {
        const e = [];
        for (const [, n] of this.children)e.push(...n.getAllSymbols(t));
        return e;
    }
    getItemEnclosingPosition(t, e = !1) {
        return t ? this._getItemEnclosingPosition(t, this.children, e) : void 0;
    }
    _getItemEnclosingPosition(t, e, n) {
        for (const [, i] of e)if (!(!i.symbol.range || !qt.containsPosition(i.symbol.range, t))) return n ? i : this._getItemEnclosingPosition(t, i.children, n) || i;
    }
    updateMarker(t) {
        for (const [, e] of this.children)this._updateMarker(t, e);
    }
    _updateMarker(t, e) {
        e.marker = void 0;
        const n = Ovt(t, e.symbol.range, qt.compareRangesUsingStarts);
        let i;
        n < 0 ? (i = ~n, i > 0 && qt.areIntersecting(t[i - 1], e.symbol.range) && (i -= 1)) : i = n;
        const r = [];
        let s;
        for(; i < t.length && qt.areIntersecting(e.symbol.range, t[i]); i++){
            const o = t[i];
            r.push(o), t[i] = void 0, (!s || o.severity > s) && (s = o.severity);
        }
        for (const [, o] of e.children)this._updateMarker(r, o);
        s && (e.marker = {
            count: r.length,
            topSev: s
        }), Fpr(t);
    }
}, rSt = class q3t extends gRe {
    constructor(e){
        super(), this.uri = e, this.id = "root", this.parent = void 0, this._groups = new Map, this.children = new Map, this.id = "root", this.parent = void 0;
    }
    static create(e, n, i) {
        const r = new El(i), s = new q3t(n.uri), o = e.ordered(n), a = o.map((c, u)=>{
            const d = gRe.findId(`provider_${u}`, s), h = new une(d, s, c.displayName ?? "Unknown Outline Provider", u);
            return Promise.resolve(c.provideDocumentSymbols(n, r.token)).then((p)=>{
                for (const g of p || [])q3t._makeOutlineElement(g, h);
                return h;
            }, (p)=>(uP(p), h)).then((p)=>{
                gRe.empty(p) ? p.remove() : s._groups.set(d, p);
            });
        }), l = e.onDidChange(()=>{
            const c = e.ordered(n);
            Zm(c, o) || r.cancel();
        });
        return Promise.all(a).then(()=>r.token.isCancellationRequested && !i.isCancellationRequested ? q3t.create(e, n, i) : s._compact()).finally(()=>{
            r.dispose(), l.dispose(), r.dispose();
        });
    }
    static _makeOutlineElement(e, n) {
        const i = gRe.findId(e, n), r = new R7(i, n, e);
        if (e.children) for (const s of e.children)q3t._makeOutlineElement(s, r);
        n.children.set(r.id, r);
    }
    static get(e) {
        for(; e;){
            if (e instanceof q3t) return e;
            e = e.parent;
        }
    }
    _compact() {
        let e = 0;
        for (const [n, i] of this._groups)i.children.size === 0 ? this._groups.delete(n) : e += 1;
        if (e !== 1) this.children = this._groups;
        else {
            const n = np.first(this._groups.values());
            for (const [, i] of n.children)i.parent = this, this.children.set(i.id, i);
        }
        return this;
    }
    merge(e) {
        return this.uri.toString() !== e.uri.toString() || this._groups.size !== e._groups.size ? !1 : (this._groups = e._groups, this.children = e.children, !0);
    }
    getAllSymbols(e) {
        const n = [];
        for (const [, i] of this._groups)n.push(...i.getAllSymbols(e));
        return n;
    }
    getGlobalItemEnclosingPosition(e) {
        let n;
        for (const [, i] of this._groups)if (n = i.getItemEnclosingPosition(e, !0), n) break;
        return n;
    }
    getItemEnclosingPosition(e, n) {
        let i;
        if (n) {
            let s = n.parent;
            for(; s && !i;)s instanceof une && (i = s), s = s.parent;
        }
        let r;
        for (const [, s] of this._groups)if (r = s.getItemEnclosingPosition(e), r && (!i || i === s)) break;
        return r;
    }
    getItemById(e) {
        return gRe.getElementById(e, this);
    }
    updateMarker(e) {
        e.sort(qt.compareRangesUsingStarts);
        for (const [, n] of this._groups)n.updateMarker(e.slice(0));
    }
    getTopLevelSymbols() {
        const e = [];
        for (const n of this.children.values())n instanceof R7 ? e.push(n.symbol) : e.push(...np.map(n.children.values(), (i)=>i.symbol));
        return e.sort((n, i)=>qt.compareRangesUsingStarts(n.range, i.range));
    }
    getTopLevelSymbolNames() {
        return this.getTopLevelSymbols().map((e)=>e.name);
    }
    asListOfDocumentSymbols() {
        const e = this.getTopLevelSymbols(), n = [];
        return q3t._flattenDocumentSymbols(n, e, ""), n.sort((i, r)=>er.compare(qt.getStartPosition(i.range), qt.getStartPosition(r.range)) || er.compare(qt.getEndPosition(r.range), qt.getEndPosition(i.range)));
    }
    static _flattenDocumentSymbols(e, n, i) {
        for (const r of n)e.push({
            kind: r.kind,
            tags: r.tags,
            name: r.name,
            detail: r.detail,
            containerName: r.containerName || i,
            range: r.range,
            selectionRange: r.selectionRange,
            children: void 0
        }), r.children && q3t._flattenDocumentSymbols(e, r.children, r.name);
    }
}, Rwe = jn("IOutlineModelService"), cIr = class {
    constructor(t, e, n){
        this._languageFeaturesService = t, this._disposables = new Nt, this._cache = new kv(15, .7), this._debounceInformation = e.for(t.documentSymbolProvider, "DocumentSymbols", {
            min: 350
        }), this._disposables.add(n.onModelRemoved((i)=>{
            this._cache.delete(i.id);
        }));
    }
    dispose() {
        this._disposables.dispose();
    }
    async getOrCreate(t, e) {
        const n = this._languageFeaturesService.documentSymbolProvider, i = n.ordered(t);
        let r = this._cache.get(t.id);
        if (!r || r.versionId !== t.getVersionId() || !Zm(r.provider, i)) {
            const o = new El;
            r = {
                versionId: t.getVersionId(),
                provider: i,
                promiseCnt: 0,
                source: o,
                promise: rSt.create(n, t, o.token),
                model: void 0
            }, this._cache.set(t.id, r);
            const a = Date.now();
            r.promise.then((l)=>{
                r.model = l, this._debounceInformation.update(t, Date.now() - a);
            }).catch((l)=>{
                this._cache.delete(t.id);
            });
        }
        if (r.model) return r.model;
        r.promiseCnt += 1;
        const s = e.onCancellationRequested(()=>{
            --r.promiseCnt === 0 && (r.source.cancel(), this._cache.delete(t.id));
        });
        try {
            return await r.promise;
        } finally{
            s.dispose();
        }
    }
    getDebounceValue(t) {
        return this._debounceInformation.get(t);
    }
    getCachedModels() {
        return np.filter(np.map(this._cache.values(), (t)=>t.model), (t)=>t !== void 0);
    }
}, cIr = Re([
    F(0, Nd),
    F(1, Twe),
    F(2, dd)
], cIr), bn(Rwe, cIr, 1);

}
