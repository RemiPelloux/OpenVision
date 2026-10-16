import { HQt } from "./Feature.mjs";
import { tkv } from "./event-info.mjs";
import { r8 } from "./index_18.mjs";
import { nkv, qf0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
var ikv;
export { ikv };
var __wakaru_bb0_initialized = false;
export function bb0() {
if (__wakaru_bb0_initialized) return;
__wakaru_bb0_initialized = true;
E(), r8(), tkv(), ikv = class extends HQt {
    mount() {
        const { current: t } = this.node;
        t && (this.unmount = qf0(t, (e, n)=>(nkv(this.node, n, "Start"), (i)=>nkv(this.node, i, "End"))));
    }
    unmount() {}
};

}
