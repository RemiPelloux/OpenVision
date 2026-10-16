import { Dpw, Opw } from "./BA.js";
import { vKe } from "./formatErrorMessage.mjs";
import { Fpw } from "./reselect.mjs";
import { E } from "./tslib.es6.js";
var Bpw;
export { Bpw };
var __wakaru_Upw_initialized = false;
export function Upw() {
if (__wakaru_Upw_initialized) return;
__wakaru_Upw_initialized = true;
E(), vKe(), Fpw(), Bpw = Opw({
    memoize: Dpw,
    memoizeOptions: {
        maxSize: 1,
        equalityCheck: Object.is
    }
});

}
