import { tgs, zll } from "./PreviewCardStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { Qu } from "./qIc.js";
import { aCe, g_ } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
var uul;
export { uul };
var __wakaru_I2g_initialized = false;
export function I2g() {
if (__wakaru_I2g_initialized) return;
__wakaru_I2g_initialized = true;
x(), Eb(), zll(), Ty(), g_(), uul = class {
    constructor(){
        this.store = new tgs;
    }
    open(e) {
        const t = e ? this.store.context.triggerElements.getById(e) : void 0;
        if (e && !t) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: PreviewCardHandle.open: No trigger found with id "${e}".` : p_(88, e));
        this.store.setOpen(!0, Qu(aCe, void 0, t));
    }
    close() {
        this.store.setOpen(!1, Qu(aCe, void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
