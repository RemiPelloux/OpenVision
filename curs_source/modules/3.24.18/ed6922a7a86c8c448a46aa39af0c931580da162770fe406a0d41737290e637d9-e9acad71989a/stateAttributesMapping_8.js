import { Ore, sY } from "./constants_11.js";
import { Qgt, g2 } from "./popupStateMapping.js";
import { x } from "./tslib.es6.js";
var HPs;
export { HPs };
var __wakaru_FQl_initialized = false;
export function FQl() {
if (__wakaru_FQl_initialized) return;
__wakaru_FQl_initialized = true;
x(), g2(), sY(), HPs = {
    ...Qgt,
    ...Ore,
    popupSide: (e)=>e ? {
            "data-popup-side": e
        } : null,
    listEmpty: (e)=>e ? {
            "data-list-empty": ""
        } : null
};

}
