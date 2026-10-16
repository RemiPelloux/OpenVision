import { zd } from "./LYd.js";
import { nma, v6h } from "./MenuStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
var I6h;
export { I6h };
var __wakaru_fSS_initialized = false;
export function fSS() {
if (__wakaru_fSS_initialized) return;
__wakaru_fSS_initialized = true;
E(), zS(), VS(), v6h(), I6h = class {
    constructor(){
        this.store = new nma;
    }
    open(t) {
        const e = t ? this.store.context.triggerElements.getById(t) : void 0;
        if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: MenuHandle.open: No trigger found with id "${t}".` : Oy(83, t));
        this.store.setOpen(!0, zd("imperative-action", void 0, e));
    }
    close() {
        this.store.setOpen(!1, zd("imperative-action", void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
