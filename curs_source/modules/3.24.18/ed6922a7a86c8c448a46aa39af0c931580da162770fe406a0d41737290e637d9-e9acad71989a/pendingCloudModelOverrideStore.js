import { HM, cb } from "./index_191.js";
import { ag, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var VJi, nRh, iRh, rRh, sRh;
export { VJi, iRh, nRh, rRh, sRh };
var __wakaru_Jn__initialized = false;
export function Jn_() {
if (__wakaru_Jn__initialized) return;
__wakaru_Jn__initialized = true;
"use strict";
x(), HM(), oc(), VJi = "cloudAgentRepository.pendingModelOverrides", nRh = 50, iRh = cb.object({
    modelName: cb.string(),
    maxMode: cb.boolean(),
    selectedModels: cb.array(cb.object({
        modelId: cb.string(),
        parameters: cb.array(cb.object({
            id: cb.string(),
            value: cb.string()
        }))
    })).optional()
}), rRh = cb.tuple([
    cb.string().min(1),
    iRh
]), sRh = class {
    constructor(e){
        this._options = e;
    }
    _getEntries() {
        return this._entries ??= this._loadEntries(), this._entries;
    }
    _loadEntries() {
        const e = new ag(this._options.maxEntries ?? nRh);
        try {
            const t = this._options.loadRaw();
            if (t === void 0) return e;
            const n = JSON.parse(t);
            if (!Array.isArray(n)) return e;
            for (const i of n){
                const r = rRh.safeParse(i);
                r.success && e.set(r.data[0], r.data[1]);
            }
        } catch  {}
        return e;
    }
    _saveEntries() {
        const e = this._entries;
        if (e !== void 0) try {
            this._options.saveRaw(JSON.stringify(e.toJSON()));
        } catch (t) {
            this._options.onSaveError?.(t);
        }
    }
    record(e, t) {
        this._getEntries().set(e, {
            modelName: t.modelName,
            maxMode: t.maxMode === !0,
            selectedModels: t.selectedModels == null ? void 0 : t.selectedModels.map((n)=>({
                    modelId: n.modelId,
                    parameters: n.parameters?.map((i)=>({
                            id: i.id,
                            value: i.value
                        })) ?? []
                }))
        }), this._saveEntries();
    }
    get(e) {
        return this._getEntries().get(e);
    }
    clear(e) {
        this._getEntries().delete(e) && this._saveEntries();
    }
    clearIfSame(e, t) {
        this._getEntries().peek(e) === t && this.clear(e);
    }
    reset() {
        this._entries = void 0;
    }
};

}
