import { S1s, tcf } from "./SwitchRootDataAttributes.js";
import { Ore, sY } from "./constants_11.js";
import { x } from "./tslib.es6.js";
var k1s;
export { k1s };
var __wakaru_s3l_initialized = false;
export function s3l() {
if (__wakaru_s3l_initialized) return;
__wakaru_s3l_initialized = true;
x(), sY(), tcf(), k1s = {
    ...Ore,
    checked (e) {
        return e ? {
            [S1s.checked]: ""
        } : {
            [S1s.unchecked]: ""
        };
    }
};

}
