import { Se, bt, ns, rn, si, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var qQr, c3c;
export { c3c, qQr };
var __wakaru_gfg_initialized = false;
export function gfg() {
if (__wakaru_gfg_initialized) return;
__wakaru_gfg_initialized = true;
"use strict";
x(), si(), bt(), Se(), qQr = class {
    constructor(){
        this._tokenizationSupports = new Map, this._factories = new Map, this._requestedLanguages = new Set, this._onDidChange = new ve, this.onDidChange = this._onDidChange.event, this._colorMap = null;
    }
    handleChange(e) {
        this._onDidChange.fire({
            changedLanguages: e,
            changedColorMap: !1
        });
    }
    register(e, t) {
        return this._tokenizationSupports.set(e, t), this.handleChange([
            e
        ]), rn(()=>{
            this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([
                e
            ]));
        });
    }
    get(e) {
        return this._tokenizationSupports.get(e) || null;
    }
    registerFactory(e, t) {
        this._factories.get(e)?.dispose();
        const n = new c3c(this, e, t);
        this._factories.set(e, n), this._requestedLanguages.has(e) && n.resolve().catch(ns);
        const i = new WeakRef(n);
        return rn(()=>{
            const r = this._factories.get(e), s = i.deref();
            !r || !s || r !== s || (this._factories.delete(e), r.dispose());
        });
    }
    async getOrCreate(e) {
        this._requestedLanguages.add(e);
        const t = this.get(e);
        if (t) return t;
        const n = this._factories.get(e);
        return !n || n.isResolved ? null : (await n.resolve(), this.get(e));
    }
    isResolved(e) {
        if (this.get(e)) return !0;
        const n = this._factories.get(e);
        return !!(!n || n.isResolved);
    }
    setColorMap(e) {
        this._colorMap = e, this._onDidChange.fire({
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
}, c3c = class extends we {
    constructor(e, t, n){
        super(), this._registry = e, this._languageId = t, this._factory = n, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
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
        const e = await this._factory.tokenizationSupport;
        this._isResolved = !0, e && !this._isDisposed && this._register(this._registry.register(this._languageId, e));
    }
};

}
