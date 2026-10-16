import { registry } from "../../../../../../../util_exports.js";
var $ZodRegistry, globalRegistry;
export { $ZodRegistry, globalRegistry };
var __wakaru_init_registries_initialized = false;
export function init_registries() {
if (__wakaru_init_registries_initialized) return;
__wakaru_init_registries_initialized = true;
$ZodRegistry = class {
    constructor(){
        this._map = new Map();
        this._idmap = new Map();
    }
    add(schema2, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema2, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error(`ID ${meta.id} already exists in the registry`);
            }
            this._idmap.set(meta.id, schema2);
        }
        return this;
    }
    clear() {
        this._map = new Map();
        this._idmap = new Map();
        return this;
    }
    remove(schema2) {
        const meta = this._map.get(schema2);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema2);
        return this;
    }
    get(schema2) {
        const p2 = schema2._zod.parent;
        if (p2) {
            const pm = {
                ...this.get(p2) ?? {}
            };
            delete pm.id;
            return {
                ...pm,
                ...this._map.get(schema2)
            };
        }
        return this._map.get(schema2);
    }
    has(schema2) {
        return this._map.has(schema2);
    }
};
globalRegistry = registry();

}
