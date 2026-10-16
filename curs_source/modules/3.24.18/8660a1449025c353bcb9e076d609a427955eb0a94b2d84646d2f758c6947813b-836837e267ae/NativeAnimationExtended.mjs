import { XYl, dFi } from "./JSAnimation.mjs";
import { Eyv, oXl } from "./NativeAnimation.mjs";
import { Lut } from "./clamp.mjs";
import { xR } from "./index_10.mjs";
import { Qg0, Qye, gyv, lOn, tyv } from "./ofv.js";
import { iyv } from "./replace-transition-type.mjs";
import { fyv } from "./style-set.mjs";
import { E } from "./tslib.es6.js";
import { Jg0 } from "./unsupported-easing.mjs";
var oRs, Iyv;
export { Iyv, oRs };
var __wakaru_ef0_initialized = false;
export function ef0() {
if (__wakaru_ef0_initialized) return;
__wakaru_ef0_initialized = true;
E(), xR(), lOn(), fyv(), XYl(), Eyv(), iyv(), Jg0(), oRs = 10, Iyv = class extends oXl {
    constructor(t){
        Qg0(t), tyv(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
    }
    updateMotionValue(t) {
        const { motionValue: e, onUpdate: n, onComplete: i, element: r, ...s } = this.options;
        if (!e) return;
        if (t !== void 0) {
            e.set(t);
            return;
        }
        const o = new dFi({
            ...s,
            autoplay: !1
        }), a = Math.max(oRs, Qye.now() - this.startTime), l = Lut(0, oRs, a - oRs), c = o.sample(a).value, { name: u } = this.options;
        r && u && gyv(r, u, c), e.setWithVelocity(o.sample(Math.max(0, a - l)).value, c, l), o.stop();
    }
};

}
