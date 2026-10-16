import { Rlf, hTs } from "./RadioRootDataAttributes.js";
import { Ore, sY } from "./constants_11.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
var bBl;
export { bBl };
var __wakaru_Dlf_initialized = false;
export function Dlf() {
if (__wakaru_Dlf_initialized) return;
__wakaru_Dlf_initialized = true;
x(), $O(), sY(), Rlf(), bBl = {
    checked (e) {
        return e ? {
            [hTs.checked]: ""
        } : {
            [hTs.unchecked]: ""
        };
    },
    ...T5,
    ...Ore
};

}
