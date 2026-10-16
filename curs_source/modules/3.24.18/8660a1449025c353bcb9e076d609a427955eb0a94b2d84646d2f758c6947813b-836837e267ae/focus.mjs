import { HQt } from "./Feature.mjs";
import { xR } from "./index_10.mjs";
import { r8 } from "./index_18.mjs";
import { v1v } from "./ofv.js";
import { tFi } from "./pipe.mjs";
import { E } from "./tslib.es6.js";
var rkv;
export { rkv };
var __wakaru_yb0_initialized = false;
export function yb0() {
if (__wakaru_yb0_initialized) return;
__wakaru_yb0_initialized = true;
E(), r8(), xR(), rkv = class extends HQt {
    constructor(){
        super(...arguments), this.isActive = !1;
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch  {
            t = !0;
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
    }
    mount() {
        this.unmount = tFi(v1v(this.node.current, "focus", ()=>this.onFocus()), v1v(this.node.current, "blur", ()=>this.onBlur()));
    }
    unmount() {}
};

}
