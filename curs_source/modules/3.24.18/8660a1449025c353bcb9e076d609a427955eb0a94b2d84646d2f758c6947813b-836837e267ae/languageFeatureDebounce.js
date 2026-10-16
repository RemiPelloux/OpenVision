import { xke } from "./Iwo.js";
import { Wmr, bn, jn } from "./SZu.js";
import { cy, fb } from "./environment.js";
import { Rn } from "./extensions.js";
import { Xy } from "./hash.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { du, kv } from "./map.js";
import { Ki } from "./network.js";
import { POd, a7o, b4 } from "./numbers.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { f1 } from "./ze.js";
var Twe, _Er, Jzd, eVd, bEr;
export { Jzd, Twe, _Er, bEr, eVd };
var __wakaru_xHe_initialized = false;
export function xHe() {
if (__wakaru_xHe_initialized) return;
__wakaru_xHe_initialized = true;
"use strict";
E(), Xy(), du(), b4(), fb(), Rn(), It(), Ji(), Ki(), Twe = jn("ILanguageFeatureDebounceService"), ((t)=>{
    const e = new WeakMap;
    let n = 0;
    function i(r) {
        let s = e.get(r);
        return s === void 0 && (s = ++n, e.set(r, s)), s;
    }
    t.of = i;
})(_Er || (_Er = {})), Jzd = class {
    constructor(t){
        this._default = t;
    }
    get(t) {
        return this._default;
    }
    update(t, e) {
        return this._default;
    }
    default() {
        return this._default;
    }
}, eVd = class {
    constructor(t, e, n, i, r, s){
        this._logService = t, this._name = e, this._registry = n, this._default = i, this._min = r, this._max = s, this._cache = new kv(50, .7);
    }
    _key(t) {
        return t.id + this._registry.all(t).reduce((e, n)=>Wmr(_Er.of(n), e), 0);
    }
    get(t) {
        const e = this._key(t), n = this._cache.get(e);
        return n ? f1(n.value, this._min, this._max) : this.default();
    }
    update(t, e) {
        const n = this._key(t);
        let i = this._cache.get(n);
        i || (i = new POd(6), this._cache.set(n, i));
        const r = f1(i.update(e), this._min, this._max);
        return xke(t.uri, "output") || this._logService.trace(`[DEBOUNCE: ${this._name}] for ${t.uri.toString()} is ${r}ms`), r;
    }
    _overall() {
        const t = new a7o;
        for (const [, e] of this._cache)t.update(e.value);
        return t.value;
    }
    default() {
        const t = this._overall() | 0 || this._default;
        return f1(t, this._min, this._max);
    }
}, bEr = class {
    constructor(t, e){
        this._logService = t, this._data = new Map, this._isDev = e.isExtensionDevelopment || !e.isBuilt;
    }
    for(t, e, n) {
        const i = n?.min ?? 50, r = n?.max ?? i ** 2, s = n?.key ?? void 0, o = `${_Er.of(t)},${i}${s ? "," + s : ""}`;
        let a = this._data.get(o);
        return a || (this._isDev ? (this._logService.debug(`[DEBOUNCE: ${e}] is disabled in developed mode`), a = new Jzd(i * 1.5)) : a = new eVd(this._logService, e, t, this._overallAverage() | 0 || i * 1.5, i, r), this._data.set(o, a)), a;
    }
    _overallAverage() {
        const t = new a7o;
        for (const e of this._data.values())t.update(e.default());
        return t.value;
    }
}, bEr = Re([
    F(0, Li),
    F(1, cy)
], bEr), bn(Twe, bEr, 1);

}
