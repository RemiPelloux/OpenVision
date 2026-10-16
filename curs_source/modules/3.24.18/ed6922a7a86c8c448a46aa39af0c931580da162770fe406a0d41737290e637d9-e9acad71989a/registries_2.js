import { ZUs } from "./f0s.js";
import { x } from "./tslib.es6.js";
var Ibu, QUs, JUs, e8s, Xue;
export { Ibu, JUs, QUs, Xue, e8s };
var __wakaru_r5i_initialized = false;
export function r5i() {
if (__wakaru_r5i_initialized) return;
__wakaru_r5i_initialized = true;
x(), QUs = Symbol("ZodOutput"), JUs = Symbol("ZodInput"), e8s = class {
    constructor(){
        this._map = new WeakMap, this._idmap = new Map;
    }
    add(e, ...t) {
        const n = t[0];
        return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
    }
    clear() {
        return this._map = new WeakMap, this._idmap = new Map, this;
    }
    remove(e) {
        const t = this._map.get(e);
        return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
    }
    get(e) {
        const t = e._zod.parent;
        if (t) {
            const n = {
                ...this.get(t) ?? {}
            };
            delete n.id;
            const i = {
                ...n,
                ...this._map.get(e)
            };
            return Object.keys(i).length ? i : void 0;
        }
        return this._map.get(e);
    }
    has(e) {
        return this._map.has(e);
    }
}, (Ibu = globalThis).__zod_globalRegistry ?? (Ibu.__zod_globalRegistry = ZUs()), Xue = globalThis.__zod_globalRegistry;

}
