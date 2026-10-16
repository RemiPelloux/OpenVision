import { USS, pma } from "./SwitchRootDataAttributes.js";
import { BY, wne } from "./constants_11.js";
import { E } from "./tslib.es6.js";
var mma;
export { mma };
var __wakaru_O6h_initialized = false;
export function O6h() {
if (__wakaru_O6h_initialized) return;
__wakaru_O6h_initialized = true;
E(), BY(), USS(), mma = {
    ...wne,
    checked (t) {
        return t ? {
            [pma.checked]: ""
        } : {
            [pma.unchecked]: ""
        };
    }
};

}
