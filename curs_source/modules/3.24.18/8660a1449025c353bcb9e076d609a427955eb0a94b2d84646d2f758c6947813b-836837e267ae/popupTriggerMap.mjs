import { E } from "./tslib.es6.js";
var KSs;
export { KSs };
var __wakaru_bmw_initialized = false;
export function bmw() {
if (__wakaru_bmw_initialized) return;
__wakaru_bmw_initialized = true;
E(), KSs = class {
    constructor(){
        this.elementsSet = new Set, this.idMap = new Map;
    }
    add(t, e) {
        const n = this.idMap.get(t);
        if (n !== e && (n !== void 0 && this.elementsSet.delete(n), this.elementsSet.add(e), this.idMap.set(t, e), process.env.NODE_ENV !== "production" && this.elementsSet.size !== this.idMap.size)) throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
    }
    delete(t) {
        const e = this.idMap.get(t);
        e && (this.elementsSet.delete(e), this.idMap.delete(t));
    }
    hasElement(t) {
        return this.elementsSet.has(t);
    }
    hasMatchingElement(t) {
        for (const e of this.elementsSet)if (t(e)) return !0;
        return !1;
    }
    getById(t) {
        return this.idMap.get(t);
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
