import { hRo } from "./SZu.js";
import { E } from "./tslib.es6.js";
var Sod, pRo, mRo, gRo, Bke;
export { Bke, Sod, gRo, mRo, pRo };
var __wakaru_Jfr_initialized = false;
export function Jfr() {
if (__wakaru_Jfr_initialized) return;
__wakaru_Jfr_initialized = true;
E(), pRo = Symbol("ZodOutput"), mRo = Symbol("ZodInput"), gRo = class {
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
}, (Sod = globalThis).__zod_globalRegistry ?? (Sod.__zod_globalRegistry = hRo()), Bke = globalThis.__zod_globalRegistry;

}
