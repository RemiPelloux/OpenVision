import { HQt } from "./Feature.mjs";
import { tkv } from "./event-info.mjs";
import { r8 } from "./index_18.mjs";
import { Qf0, skv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var okv;
export { okv };
var __wakaru_Sb0_initialized = false;
export function Sb0() {
if (__wakaru_Sb0_initialized) return;
__wakaru_Sb0_initialized = true;
E(), r8(), tkv(), okv = class extends HQt {
    mount() {
        const { current: t } = this.node;
        if (!t) return;
        const { globalTapTarget: e, propagate: n } = this.node.props;
        this.unmount = Qf0(t, (i, r)=>(skv(this.node, r, "Start"), (s, { success: o })=>skv(this.node, s, o ? "End" : "Cancel")), {
            useGlobalTarget: e,
            stopPropagation: n?.tap === !1
        });
    }
    unmount() {}
};

}
