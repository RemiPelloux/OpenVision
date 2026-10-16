import { WOs, zcu } from "./DialogStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Qu } from "./qIc.js";
import { aCe, g_ } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
var zOs;
export { zOs };
var __wakaru_VJf_initialized = false;
export function VJf() {
if (__wakaru_VJf_initialized) return;
__wakaru_VJf_initialized = true;
x(), zcu(), Ty(), g_(), zOs = class {
    constructor(e){
        this.store = e ?? new WOs;
    }
    open(e) {
        const t = e ? this.store.context.triggerElements.getById(e) : void 0;
        process.env.NODE_ENV !== "production" && e && !t && console.warn(`Base UI: DialogHandle.open: No trigger found with id "${e}". The dialog will open, but the trigger will not be associated with the dialog.`), this.store.setOpen(!0, Qu(aCe, void 0, t));
    }
    openWithPayload(e) {
        this.store.set("payload", e), this.store.setOpen(!0, Qu(aCe, void 0, void 0));
    }
    close() {
        this.store.setOpen(!1, Qu(aCe, void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
