import { zd } from "./LYd.js";
import { Ina, jhh } from "./TooltipStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { Uwe, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
var oph;
export { oph };
var __wakaru_fGy_initialized = false;
export function fGy() {
if (__wakaru_fGy_initialized) return;
__wakaru_fGy_initialized = true;
E(), zS(), jhh(), VS(), Zb(), oph = class {
    constructor(){
        this.store = new Ina;
    }
    open(t) {
        const e = t ? this.store.context.triggerElements.getById(t) : void 0;
        if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: TooltipHandle.open: No trigger found with id "${t}".` : Oy(81, t));
        this.store.setOpen(!0, zd(Uwe, void 0, e));
    }
    close() {
        this.store.setOpen(!1, zd(Uwe, void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
