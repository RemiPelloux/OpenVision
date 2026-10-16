import { dES } from "./ipa.js";
import { E } from "./tslib.es6.js";
var MUh, hES, pES, DUh, NSn;
export { DUh, MUh, NSn, hES, pES };
var __wakaru_qpi_initialized = false;
export function qpi() {
if (__wakaru_qpi_initialized) return;
__wakaru_qpi_initialized = true;
E(), hES = Symbol("ZodOutput"), pES = Symbol("ZodInput"), DUh = class {
    constructor(){
        this._map = new WeakMap, this._idmap = new Map;
    }
    add(t, ...e) {
        const n = e[0];
        return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
    }
    clear() {
        return this._map = new WeakMap, this._idmap = new Map, this;
    }
    remove(t) {
        const e = this._map.get(t);
        return e && typeof e == "object" && "id" in e && this._idmap.delete(e.id), this._map.delete(t), this;
    }
    get(t) {
        const e = t._zod.parent;
        if (e) {
            const n = {
                ...this.get(e) ?? {}
            };
            delete n.id;
            const i = {
                ...n,
                ...this._map.get(t)
            };
            return Object.keys(i).length ? i : void 0;
        }
        return this._map.get(t);
    }
    has(t) {
        return this._map.has(t);
    }
}, (MUh = globalThis).__zod_globalRegistry ?? (MUh.__zod_globalRegistry = dES()), NSn = globalThis.__zod_globalRegistry;

}
