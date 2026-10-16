import { Ei, Gt, Pn, Qe, st, tt, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var r$o, O8d;
export { O8d, r$o };
var __wakaru_bPy_initialized = false;
export function bPy() {
if (__wakaru_bPy_initialized) return;
__wakaru_bPy_initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), r$o = class {
    constructor(){
        this._tokenizationSupports = new Map, this._factories = new Map, this._requestedLanguages = new Set, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._colorMap = null;
    }
    handleChange(t) {
        this._onDidChange.fire({
            changedLanguages: t,
            changedColorMap: !1
        });
    }
    register(t, e) {
        return this._tokenizationSupports.set(t, e), this.handleChange([
            t
        ]), Pn(()=>{
            this._tokenizationSupports.get(t) === e && (this._tokenizationSupports.delete(t), this.handleChange([
                t
            ]));
        });
    }
    get(t) {
        return this._tokenizationSupports.get(t) || null;
    }
    registerFactory(t, e) {
        this._factories.get(t)?.dispose();
        const n = new O8d(this, t, e);
        this._factories.set(t, n), this._requestedLanguages.has(t) && n.resolve().catch(xr);
        const i = new WeakRef(n);
        return Pn(()=>{
            const r = this._factories.get(t), s = i.deref();
            !r || !s || r !== s || (this._factories.delete(t), r.dispose());
        });
    }
    async getOrCreate(t) {
        this._requestedLanguages.add(t);
        const e = this.get(t);
        if (e) return e;
        const n = this._factories.get(t);
        return !n || n.isResolved ? null : (await n.resolve(), this.get(t));
    }
    isResolved(t) {
        if (this.get(t)) return !0;
        const n = this._factories.get(t);
        return !!(!n || n.isResolved);
    }
    setColorMap(t) {
        this._colorMap = t, this._onDidChange.fire({
            changedLanguages: Array.from(this._tokenizationSupports.keys()),
            changedColorMap: !0
        });
    }
    getColorMap() {
        return this._colorMap;
    }
    getDefaultBackground() {
        return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null;
    }
}, O8d = class extends st {
    constructor(t, e, n){
        super(), this._registry = t, this._languageId = e, this._factory = n, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
    }
    get isResolved() {
        return this._isResolved;
    }
    dispose() {
        this._isDisposed = !0, super.dispose();
    }
    async resolve() {
        return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise;
    }
    async _create() {
        const t = await this._factory.tokenizationSupport;
        this._isResolved = !0, t && !this._isDisposed && this._register(this._registry.register(this._languageId, t));
    }
};

}
