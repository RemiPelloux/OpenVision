import { PRt } from "./glass-diff-utils.js";
import { DFi } from "./ofv.js";
import { E } from "./tslib.es6.js";
var ZRs;
export { ZRs };
var __wakaru_t10_initialized = false;
export function t10() {
if (__wakaru_t10_initialized) return;
__wakaru_t10_initialized = true;
"use strict";
E(), PRt(), ZRs = class beu {
    constructor(){
        this._slotsByPath = new Map;
    }
    getCached(e) {
        return this._slotsByPath.get(e.filePath)?.get(beu._keyParts(e).scopeKey)?.material;
    }
    getOrCompute(e, n) {
        const i = e.filePath, { scopeKey: r, viewKey: s } = beu._keyParts(e), o = this._ensureSlot(i, r, e.scope, s);
        if (o.material !== void 0 && !o.stale) return Promise.resolve(o.material);
        if (o.inFlight !== void 0) return o.inFlight;
        const a = n().then((l)=>(o.inFlight === a && (o.inFlight = void 0, l !== void 0 && (o.material = l, o.stale = !1)), this._pruneIfEmpty(i, r, o), l), (l)=>{
            throw o.inFlight === a && (o.inFlight = void 0), this._pruneIfEmpty(i, r, o), l;
        });
        return o.inFlight = a, a;
    }
    hasMaterial(e) {
        const n = this._slotsByPath.get(e);
        if (n === void 0) return !1;
        for (const i of n.values())if (i.material !== void 0) return !0;
        return !1;
    }
    markStale(e) {
        const n = e, i = this._slotsByPath.get(n);
        if (i !== void 0) {
            for (const [r, s] of i)s.inFlight = void 0, s.material !== void 0 ? s.stale = !0 : i.delete(r);
            i.size === 0 && this._slotsByPath.delete(n);
        }
    }
    evictPath(e) {
        this._slotsByPath.delete(e);
    }
    evictView(e) {
        const n = e;
        this._evictWhere((i)=>i.viewKey === n);
    }
    evictScope(e) {
        this._evictWhere((n)=>n.scope === e);
    }
    clear() {
        this._slotsByPath.clear();
    }
    _evictWhere(e) {
        for (const [n, i] of this._slotsByPath){
            for (const [r, s] of i)e(s) && i.delete(r);
            i.size === 0 && this._slotsByPath.delete(n);
        }
    }
    _ensureSlot(e, n, i, r) {
        let s = this._slotsByPath.get(e);
        s === void 0 && (s = new Map, this._slotsByPath.set(e, s));
        let o = s.get(n);
        return o === void 0 && (o = {
            scope: i,
            viewKey: r,
            material: void 0,
            stale: !1,
            inFlight: void 0
        }, s.set(n, o)), o;
    }
    _pruneIfEmpty(e, n, i) {
        if (i.material !== void 0 || i.inFlight !== void 0) return;
        const r = this._slotsByPath.get(e);
        r?.get(n) === i && (r.delete(n), r.size === 0 && this._slotsByPath.delete(e));
    }
    static _keyParts({ scope: e, subPath: n, comparisonMode: i = "scoped" }) {
        const r = DFi(n);
        return {
            scopeKey: `${e}\0${i}\0${r}`,
            viewKey: r
        };
    }
};

}
