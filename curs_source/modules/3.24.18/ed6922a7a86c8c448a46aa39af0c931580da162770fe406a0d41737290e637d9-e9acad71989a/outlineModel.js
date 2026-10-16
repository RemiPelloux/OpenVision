import { He, Ps, Se, Tpn, V3e, c1, jie, nh, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { Ar, Eo } from "./cancellation.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Eg, _a } from "./iterator.js";
import { TJ, nfe } from "./languageFeatureDebounce.js";
import { Jc, kh } from "./languageFeatures.js";
import { ag, oc } from "./map.js";
import { Ll, fc } from "./model.js";
import { Yn, ya } from "./position.js";
import { mn, vn } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var Yrs, dfe, o6, xJ, IKe, Ere, uSi;
export { Ere, IKe, Yrs, dfe, o6, uSi, xJ };
var __wakaru_xre_initialized = false;
export function xre() {
if (__wakaru_xre_initialized) return;
__wakaru_xre_initialized = true;
"use strict";
x(), dr(), Ar(), si(), Eg(), oc(), Ps(), ya(), qi(), nfe(), Ze(), Pn(), Ll(), Se(), kh(), Yrs = class YXn {
    remove() {
        this.parent?.children.delete(this.id);
    }
    static findId(t, n) {
        let i;
        if (typeof t == "string" ? i = `${n.id}/${t}` : (i = `${n.id}/${t.name}`, n.children.get(i) !== void 0 && (i = `${n.id}/${t.name}_${t.range.startLineNumber}_${t.range.startColumn}`)), n.children.get(i) === void 0) return i;
        let r = YXn._idProbeHints.get(n);
        r || (r = new Map, YXn._idProbeHints.set(n, r));
        let s = r.get(i) ?? 0, o;
        do o = `${i}_${s}`, s++;
        while (n.children.get(o) !== void 0)
        return r.set(i, s), o;
    }
    static getElementById(t, n) {
        if (!t) return;
        const i = jie(t, n.id);
        if (i === t.length) return n;
        if (!(i < n.id.length)) for (const [, r] of n.children){
            const s = YXn.getElementById(t, r);
            if (s) return s;
        }
    }
    static size(t) {
        let n = 1;
        for (const [, i] of t.children)n += YXn.size(i);
        return n;
    }
    static empty(t) {
        return t.children.size === 0;
    }
}, Yrs._idProbeHints = new WeakMap, dfe = Yrs, o6 = class extends dfe {
    constructor(e, t, n){
        super(), this.id = e, this.parent = t, this.symbol = n, this.children = new Map;
    }
    getAllSymbols(e) {
        const t = [];
        t.push(this.symbol);
        for (const [, n] of this.children)t.push(...n.getAllSymbols(e));
        return t;
    }
}, xJ = class extends dfe {
    constructor(e, t, n, i){
        super(), this.id = e, this.parent = t, this.label = n, this.order = i, this.children = new Map;
    }
    getAllSymbols(e) {
        const t = [];
        for (const [, n] of this.children)t.push(...n.getAllSymbols(e));
        return t;
    }
    getItemEnclosingPosition(e, t = !1) {
        return e ? this._getItemEnclosingPosition(e, this.children, t) : void 0;
    }
    _getItemEnclosingPosition(e, t, n) {
        for (const [, i] of t)if (!(!i.symbol.range || !dt.containsPosition(i.symbol.range, e))) return n ? i : this._getItemEnclosingPosition(e, i.children, n) || i;
    }
    updateMarker(e) {
        for (const [, t] of this.children)this._updateMarker(e, t);
    }
    _updateMarker(e, t) {
        t.marker = void 0;
        const n = V3e(e, t.symbol.range, dt.compareRangesUsingStarts);
        let i;
        n < 0 ? (i = ~n, i > 0 && dt.areIntersecting(e[i - 1], t.symbol.range) && (i -= 1)) : i = n;
        const r = [];
        let s;
        for(; i < e.length && dt.areIntersecting(t.symbol.range, e[i]); i++){
            const o = e[i];
            r.push(o), e[i] = void 0, (!s || o.severity > s) && (s = o.severity);
        }
        for (const [, o] of t.children)this._updateMarker(r, o);
        s && (t.marker = {
            count: r.length,
            topSev: s
        }), Tpn(e);
    }
}, IKe = class Kot extends dfe {
    constructor(t){
        super(), this.uri = t, this.id = "root", this.parent = void 0, this._groups = new Map, this.children = new Map, this.id = "root", this.parent = void 0;
    }
    static create(t, n, i) {
        const r = new Eo(i), s = new Kot(n.uri), o = t.ordered(n), a = o.map((l, u)=>{
            const h = dfe.findId(`provider_${u}`, s), p = new xJ(h, s, l.displayName ?? "Unknown Outline Provider", u);
            return Promise.resolve(l.provideDocumentSymbols(n, r.token)).then((g)=>{
                for (const f of g || [])Kot._makeOutlineElement(f, p);
                return p;
            }, (g)=>(c1(g), p)).then((g)=>{
                dfe.empty(g) ? g.remove() : s._groups.set(h, g);
            });
        }), c = t.onDidChange(()=>{
            const l = t.ordered(n);
            nh(l, o) || r.cancel();
        });
        return Promise.all(a).then(()=>r.token.isCancellationRequested && !i.isCancellationRequested ? Kot.create(t, n, i) : s._compact()).finally(()=>{
            r.dispose(), c.dispose(), r.dispose();
        });
    }
    static _makeOutlineElement(t, n) {
        const i = dfe.findId(t, n), r = new o6(i, n, t);
        if (t.children) for (const s of t.children)Kot._makeOutlineElement(s, r);
        n.children.set(r.id, r);
    }
    static get(t) {
        for(; t;){
            if (t instanceof Kot) return t;
            t = t.parent;
        }
    }
    _compact() {
        let t = 0;
        for (const [n, i] of this._groups)i.children.size === 0 ? this._groups.delete(n) : t += 1;
        if (t !== 1) this.children = this._groups;
        else {
            const n = _a.first(this._groups.values());
            for (const [, i] of n.children)i.parent = this, this.children.set(i.id, i);
        }
        return this;
    }
    merge(t) {
        return this.uri.toString() !== t.uri.toString() || this._groups.size !== t._groups.size ? !1 : (this._groups = t._groups, this.children = t.children, !0);
    }
    getAllSymbols(t) {
        const n = [];
        for (const [, i] of this._groups)n.push(...i.getAllSymbols(t));
        return n;
    }
    getGlobalItemEnclosingPosition(t) {
        let n;
        for (const [, i] of this._groups)if (n = i.getItemEnclosingPosition(t, !0), n) break;
        return n;
    }
    getItemEnclosingPosition(t, n) {
        let i;
        if (n) {
            let s = n.parent;
            for(; s && !i;)s instanceof xJ && (i = s), s = s.parent;
        }
        let r;
        for (const [, s] of this._groups)if (r = s.getItemEnclosingPosition(t), r && (!i || i === s)) break;
        return r;
    }
    getItemById(t) {
        return dfe.getElementById(t, this);
    }
    updateMarker(t) {
        t.sort(dt.compareRangesUsingStarts);
        for (const [, n] of this._groups)n.updateMarker(t.slice(0));
    }
    getTopLevelSymbols() {
        const t = [];
        for (const n of this.children.values())n instanceof o6 ? t.push(n.symbol) : t.push(..._a.map(n.children.values(), (i)=>i.symbol));
        return t.sort((n, i)=>dt.compareRangesUsingStarts(n.range, i.range));
    }
    getTopLevelSymbolNames() {
        return this.getTopLevelSymbols().map((t)=>t.name);
    }
    asListOfDocumentSymbols() {
        const t = this.getTopLevelSymbols(), n = [];
        return Kot._flattenDocumentSymbols(n, t, ""), n.sort((i, r)=>Yn.compare(dt.getStartPosition(i.range), dt.getStartPosition(r.range)) || Yn.compare(dt.getEndPosition(r.range), dt.getEndPosition(i.range)));
    }
    static _flattenDocumentSymbols(t, n, i) {
        for (const r of n)t.push({
            kind: r.kind,
            tags: r.tags,
            name: r.name,
            detail: r.detail,
            containerName: r.containerName || i,
            range: r.range,
            selectionRange: r.selectionRange,
            children: void 0
        }), r.children && Kot._flattenDocumentSymbols(t, r.children, r.name);
    }
}, Ere = vn("IOutlineModelService"), uSi = class {
    constructor(e, t, n){
        this._languageFeaturesService = e, this._disposables = new He, this._cache = new ag(15, .7), this._debounceInformation = t.for(e.documentSymbolProvider, "DocumentSymbols", {
            min: 350
        }), this._disposables.add(n.onModelRemoved((i)=>{
            this._cache.delete(i.id);
        }));
    }
    dispose() {
        this._disposables.dispose();
    }
    async getOrCreate(e, t) {
        const n = this._languageFeaturesService.documentSymbolProvider, i = n.ordered(e);
        let r = this._cache.get(e.id);
        if (!r || r.versionId !== e.getVersionId() || !nh(r.provider, i)) {
            const o = new Eo;
            r = {
                versionId: e.getVersionId(),
                provider: i,
                promiseCnt: 0,
                source: o,
                promise: IKe.create(n, e, o.token),
                model: void 0
            }, this._cache.set(e.id, r);
            const a = Date.now();
            r.promise.then((c)=>{
                r.model = c, this._debounceInformation.update(e, Date.now() - a);
            }).catch((c)=>{
                this._cache.delete(e.id);
            });
        }
        if (r.model) return r.model;
        r.promiseCnt += 1;
        const s = t.onCancellationRequested(()=>{
            --r.promiseCnt === 0 && (r.source.cancel(), this._cache.delete(e.id));
        });
        try {
            return await r.promise;
        } finally{
            s.dispose();
        }
    }
    getDebounceValue(e) {
        return this._debounceInformation.get(e);
    }
    getCachedModels() {
        return _a.filter(_a.map(this._cache.values(), (e)=>e.model), (e)=>e !== void 0);
    }
}, uSi = ie([
    C(0, Jc),
    C(1, TJ),
    C(2, fc)
], uSi), mn(Ere, uSi, 1);

}
