import { HQt } from "./Feature.mjs";
import { r8 } from "./index_18.mjs";
import { Ev0, pRs } from "./ofv.js";
import { E } from "./tslib.es6.js";
var X1v;
export { X1v };
var __wakaru_fb0_initialized = false;
export function fb0() {
if (__wakaru_fb0_initialized) return;
__wakaru_fb0_initialized = true;
E(), r8(), X1v = class extends HQt {
    constructor(t){
        super(t), t.animationState || (t.animationState = Ev0(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        pRs(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(), { animate: e } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription();
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls?.();
    }
};

}
