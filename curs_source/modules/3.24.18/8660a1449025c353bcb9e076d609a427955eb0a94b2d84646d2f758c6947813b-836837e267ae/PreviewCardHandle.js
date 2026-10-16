import { zd } from "./LYd.js";
import { hna, uhh } from "./PreviewCardStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { Uwe, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
var Ihh;
export { Ihh };
var __wakaru_xWy_initialized = false;
export function xWy() {
if (__wakaru_xWy_initialized) return;
__wakaru_xWy_initialized = true;
E(), zS(), uhh(), VS(), Zb(), Ihh = class {
    constructor(){
        this.store = new hna;
    }
    open(t) {
        const e = t ? this.store.context.triggerElements.getById(t) : void 0;
        if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: PreviewCardHandle.open: No trigger found with id "${t}".` : Oy(88, t));
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
