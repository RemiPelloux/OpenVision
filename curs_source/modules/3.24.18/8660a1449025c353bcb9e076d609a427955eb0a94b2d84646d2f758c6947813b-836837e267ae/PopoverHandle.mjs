import { BA, NG } from "./BA.js";
import { SOl, sPf } from "./PopoverStore.mjs";
import { xBe } from "./createBaseUIEventDetails.mjs";
import { fKe, vKe } from "./formatErrorMessage.mjs";
import { rce } from "./reasons.mjs";
import { E } from "./tslib.es6.js";
var VOl;
export { VOl };
var __wakaru_gfw_initialized = false;
export function gfw() {
if (__wakaru_gfw_initialized) return;
__wakaru_gfw_initialized = true;
E(), vKe(), xBe(), rce(), sPf(), VOl = class {
    constructor(){
        this.store = new SOl;
    }
    open(t) {
        const e = t ? this.store.context.triggerElements.getById(t) ?? void 0 : void 0;
        if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: PopoverHandle.open: No trigger found with id "${t}".` : fKe(80, t));
        this.store.setOpen(!0, NG(BA.imperativeAction, void 0, e));
    }
    close() {
        this.store.setOpen(!1, NG(BA.imperativeAction, void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
