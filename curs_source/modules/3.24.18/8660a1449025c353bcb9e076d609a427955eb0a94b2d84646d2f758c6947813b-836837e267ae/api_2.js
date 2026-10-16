import { uAo } from "./checks.js";
import { Jfr } from "./registries.js";
import { vsd } from "./schemas.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var VRo;
export { VRo };
var __wakaru_yTy_initialized = false;
export function yTy() {
if (__wakaru_yTy_initialized) return;
__wakaru_yTy_initialized = true;
E(), uAo(), Jfr(), vsd(), ky(), VRo = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
};

}
