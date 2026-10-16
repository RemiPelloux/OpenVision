import { $wp, ORa } from "./DialogStore.js";
import { zd } from "./LYd.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Uwe, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
var $Ra;
export { $Ra };
var __wakaru_z_1_initialized = false;
export function z_1() {
if (__wakaru_z_1_initialized) return;
__wakaru_z_1_initialized = true;
E(), $wp(), VS(), Zb(), $Ra = class {
    constructor(t){
        this.store = t ?? new ORa;
    }
    open(t) {
        const e = t ? this.store.context.triggerElements.getById(t) : void 0;
        process.env.NODE_ENV !== "production" && t && !e && console.warn(`Base UI: DialogHandle.open: No trigger found with id "${t}". The dialog will open, but the trigger will not be associated with the dialog.`), this.store.setOpen(!0, zd(Uwe, void 0, e));
    }
    openWithPayload(t) {
        this.store.set("payload", t), this.store.setOpen(!0, zd(Uwe, void 0, void 0));
    }
    close() {
        this.store.setOpen(!1, zd(Uwe, void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
