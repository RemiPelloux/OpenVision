import { Gmf } from "./f0s.js";
import { x } from "./tslib.es6.js";
var h6l, Vmf, jmf, p6l, qmf;
export { Vmf, h6l, jmf, p6l, qmf };
var __wakaru_bMi_initialized = false;
export function bMi() {
if (__wakaru_bMi_initialized) return;
__wakaru_bMi_initialized = true;
x(), Vmf = Symbol("ZodOutput"), jmf = Symbol("ZodInput"), p6l = class {
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
}, (h6l = globalThis).__zod_globalRegistry ?? (h6l.__zod_globalRegistry = Gmf()), qmf = globalThis.__zod_globalRegistry;

}
