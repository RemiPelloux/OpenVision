import { iv, zo } from "./index_16.js";
import { du, kv } from "./map.js";
import { E } from "./tslib.es6.js";
var xas, qvg, zvg, Vvg, Kvg;
export { Kvg, Vvg, qvg, xas, zvg };
var __wakaru_kwk_initialized = false;
export function kwk() {
if (__wakaru_kwk_initialized) return;
__wakaru_kwk_initialized = true;
"use strict";
E(), iv(), du(), xas = "cloudAgentRepository.pendingModelOverrides", qvg = 50, zvg = zo.object({
    modelName: zo.string(),
    maxMode: zo.boolean(),
    selectedModels: zo.array(zo.object({
        modelId: zo.string(),
        parameters: zo.array(zo.object({
            id: zo.string(),
            value: zo.string()
        }))
    })).optional()
}), Vvg = zo.tuple([
    zo.string().min(1),
    zvg
]), Kvg = class {
    constructor(t){
        this._options = t;
    }
    _getEntries() {
        return this._entries ??= this._loadEntries(), this._entries;
    }
    _loadEntries() {
        const t = new kv(this._options.maxEntries ?? qvg);
        try {
            const e = this._options.loadRaw();
            if (e === void 0) return t;
            const n = JSON.parse(e);
            if (!Array.isArray(n)) return t;
            for (const i of n){
                const r = Vvg.safeParse(i);
                r.success && t.set(r.data[0], r.data[1]);
            }
        } catch  {}
        return t;
    }
    _saveEntries() {
        const t = this._entries;
        if (t !== void 0) try {
            this._options.saveRaw(JSON.stringify(t.toJSON()));
        } catch (e) {
            this._options.onSaveError?.(e);
        }
    }
    record(t, e) {
        this._getEntries().set(t, {
            modelName: e.modelName,
            maxMode: e.maxMode === !0,
            selectedModels: e.selectedModels == null ? void 0 : e.selectedModels.map((n)=>({
                    modelId: n.modelId,
                    parameters: n.parameters?.map((i)=>({
                            id: i.id,
                            value: i.value
                        })) ?? []
                }))
        }), this._saveEntries();
    }
    get(t) {
        return this._getEntries().get(t);
    }
    clear(t) {
        this._getEntries().delete(t) && this._saveEntries();
    }
    clearIfSame(t, e) {
        this._getEntries().peek(t) === e && this.clear(t);
    }
    reset() {
        this._entries = void 0;
    }
};

}
