import { og0 } from "./ofv.js";
import { OYl, yRt } from "./rgba.mjs";
import { E } from "./tslib.es6.js";
import { HAs, LYl } from "./utils_2.mjs";
var GAs;
export { GAs };
var __wakaru_wbv_initialized = false;
export function wbv() {
if (__wakaru_wbv_initialized) return;
__wakaru_wbv_initialized = true;
E(), OYl(), LYl(), GAs = {
    test: HAs("#"),
    parse: og0,
    transform: yRt.transform
};

}
