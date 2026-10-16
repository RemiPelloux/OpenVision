import { x } from "./tslib.es6.js";
var gYe;
export { gYe };
var __wakaru_Vgt_initialized = false;
export function Vgt() {
if (__wakaru_Vgt_initialized) return;
__wakaru_Vgt_initialized = true;
x(), gYe = class {
    constructor(){
        this.elementsSet = new Set, this.idMap = new Map;
    }
    add(e, t) {
        const n = this.idMap.get(e);
        if (n !== t && (n !== void 0 && this.elementsSet.delete(n), this.elementsSet.add(t), this.idMap.set(e, t), process.env.NODE_ENV !== "production" && this.elementsSet.size !== this.idMap.size)) throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
    }
    delete(e) {
        const t = this.idMap.get(e);
        t && (this.elementsSet.delete(t), this.idMap.delete(e));
    }
    hasElement(e) {
        return this.elementsSet.has(e);
    }
    hasMatchingElement(e) {
        for (const t of this.elementsSet)if (e(t)) return !0;
        return !1;
    }
    getById(e) {
        return this.idMap.get(e);
    }
    entries() {
        return this.idMap.entries();
    }
    elements() {
        return this.elementsSet.values();
    }
    get size() {
        return this.idMap.size;
    }
};

}
