import { P$h, dFr } from "./CollapsiblePanelDataAttributes.js";
import { M$h, ixS } from "./CollapsibleTriggerDataAttributes.js";
import { E } from "./tslib.es6.js";
var D$h, N$h, L$h, O$h;
export { D$h, L$h, N$h, O$h };
var __wakaru_F$h_initialized = false;
export function F$h() {
if (__wakaru_F$h_initialized) return;
__wakaru_F$h_initialized = true;
E(), P$h(), ixS(), D$h = {
    [dFr.open]: ""
}, N$h = {
    [dFr.closed]: ""
}, L$h = {
    open (t) {
        return t ? {
            [M$h.panelOpen]: ""
        } : null;
    }
}, O$h = {
    open (t) {
        return t ? D$h : N$h;
    }
};

}
