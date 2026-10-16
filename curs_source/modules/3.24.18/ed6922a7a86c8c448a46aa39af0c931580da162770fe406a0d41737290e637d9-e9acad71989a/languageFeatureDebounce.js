import { MP } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { nf, sv } from "./environment.js";
import { Pn } from "./extensions.js";
import { T_ } from "./hash.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { ag, oc } from "./map.js";
import { li } from "./network.js";
import { Kzr, UAc, cR } from "./numbers.js";
import { Jmi, kb, mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var TJ, wyi, a$c, c$c, Cyi;
export { Cyi, TJ, a$c, c$c, wyi };
var __wakaru_nfe_initialized = false;
export function nfe() {
if (__wakaru_nfe_initialized) return;
__wakaru_nfe_initialized = true;
"use strict";
x(), T_(), oc(), cR(), nf(), Pn(), Ze(), Qn(), li(), TJ = vn("ILanguageFeatureDebounceService"), ((e)=>{
    const t = new WeakMap;
    let n = 0;
    function i(r) {
        let s = t.get(r);
        return s === void 0 && (s = ++n, t.set(r, s)), s;
    }
    e.of = i;
})(wyi || (wyi = {})), a$c = class {
    constructor(e){
        this._default = e;
    }
    get(e) {
        return this._default;
    }
    update(e, t) {
        return this._default;
    }
    default() {
        return this._default;
    }
}, c$c = class {
    constructor(e, t, n, i, r, s){
        this._logService = e, this._name = t, this._registry = n, this._default = i, this._min = r, this._max = s, this._cache = new ag(50, .7);
    }
    _key(e) {
        return e.id + this._registry.all(e).reduce((t, n)=>Jmi(wyi.of(n), t), 0);
    }
    get(e) {
        const t = this._key(e), n = this._cache.get(t);
        return n ? kb(n.value, this._min, this._max) : this.default();
    }
    update(e, t) {
        const n = this._key(e);
        let i = this._cache.get(n);
        i || (i = new UAc(6), this._cache.set(n, i));
        const r = kb(i.update(t), this._min, this._max);
        return MP(e.uri, "output") || this._logService.trace(`[DEBOUNCE: ${this._name}] for ${e.uri.toString()} is ${r}ms`), r;
    }
    _overall() {
        const e = new Kzr;
        for (const [, t] of this._cache)e.update(t.value);
        return e.value;
    }
    default() {
        const e = this._overall() | 0 || this._default;
        return kb(e, this._min, this._max);
    }
}, Cyi = class {
    constructor(e, t){
        this._logService = e, this._data = new Map, this._isDev = t.isExtensionDevelopment || !t.isBuilt;
    }
    for(e, t, n) {
        const i = n?.min ?? 50, r = n?.max ?? i ** 2, s = n?.key ?? void 0, o = `${wyi.of(e)},${i}${s ? "," + s : ""}`;
        let a = this._data.get(o);
        return a || (this._isDev ? (this._logService.debug(`[DEBOUNCE: ${t}] is disabled in developed mode`), a = new a$c(i * 1.5)) : a = new c$c(this._logService, t, e, this._overallAverage() | 0 || i * 1.5, i, r), this._data.set(o, a)), a;
    }
    _overallAverage() {
        const e = new Kzr;
        for (const t of this._data.values())e.update(t.default());
        return e.value;
    }
}, Cyi = ie([
    C(0, Wn),
    C(1, sv)
], Cyi), mn(TJ, Cyi, 1);

}
