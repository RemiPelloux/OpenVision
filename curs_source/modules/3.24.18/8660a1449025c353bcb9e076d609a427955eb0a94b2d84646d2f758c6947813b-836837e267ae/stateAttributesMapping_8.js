import { BY, wne } from "./constants_11.js";
import { I4, a7t } from "./popupStateMapping.js";
import { E } from "./tslib.es6.js";
var z8r;
export { z8r };
var __wakaru_ZCa_initialized = false;
export function ZCa() {
if (__wakaru_ZCa_initialized) return;
__wakaru_ZCa_initialized = true;
E(), I4(), BY(), z8r = {
    ...a7t,
    ...wne,
    popupSide: (t)=>t ? {
            "data-popup-side": t
        } : null,
    listEmpty: (t)=>t ? {
            "data-list-empty": ""
        } : null
};

}
