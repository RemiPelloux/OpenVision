import { $Fl, u1s } from "./MenuStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { Qu } from "./qIc.js";
import { x } from "./tslib.es6.js";
var XFl;
export { XFl };
var __wakaru_Paf_initialized = false;
export function Paf() {
if (__wakaru_Paf_initialized) return;
__wakaru_Paf_initialized = true;
x(), Eb(), Ty(), $Fl(), XFl = class {
    constructor(){
        this.store = new u1s;
    }
    open(e) {
        const t = e ? this.store.context.triggerElements.getById(e) : void 0;
        if (e && !t) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: MenuHandle.open: No trigger found with id "${e}".` : p_(83, e));
        this.store.setOpen(!0, Qu("imperative-action", void 0, t));
    }
    close() {
        this.store.setOpen(!1, Qu("imperative-action", void 0, void 0));
    }
    get isOpen() {
        return this.store.select("open");
    }
};

}
