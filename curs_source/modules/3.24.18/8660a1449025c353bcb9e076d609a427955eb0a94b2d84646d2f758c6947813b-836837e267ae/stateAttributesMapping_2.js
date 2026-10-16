import { $pa, LyS } from "./MenuCheckboxItemDataAttributes.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
var Hpa;
export { Hpa };
var __wakaru_YFh_initialized = false;
export function YFh() {
if (__wakaru_YFh_initialized) return;
__wakaru_YFh_initialized = true;
E(), l6(), LyS(), Hpa = {
    checked (t) {
        return t ? {
            [$pa.checked]: ""
        } : {
            [$pa.unchecked]: ""
        };
    },
    ...D7
};

}
