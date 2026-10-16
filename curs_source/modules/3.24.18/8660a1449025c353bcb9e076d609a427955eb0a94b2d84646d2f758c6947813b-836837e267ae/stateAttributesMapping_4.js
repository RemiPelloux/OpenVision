import { pkS, rga } from "./RadioRootDataAttributes.js";
import { BY, wne } from "./constants_11.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
var r5r;
export { r5r };
var __wakaru_V4h_initialized = false;
export function V4h() {
if (__wakaru_V4h_initialized) return;
__wakaru_V4h_initialized = true;
E(), l6(), BY(), pkS(), r5r = {
    checked (t) {
        return t ? {
            [rga.checked]: ""
        } : {
            [rga.unchecked]: ""
        };
    },
    ...D7,
    ...wne
};

}
