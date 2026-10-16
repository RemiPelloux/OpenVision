import { _Yo } from "./LYd.js";
import { Fxr } from "./stringifyString.js";
import { E } from "./tslib.es6.js";
var Fai;
export { Fai };
var __wakaru_$xr_initialized = false;
export function $xr() {
if (__wakaru_$xr_initialized) return;
__wakaru_$xr_initialized = true;
E(), Fxr(), Fai = {
    identify: (t)=>typeof t == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (t)=>t,
    stringify (t, e, n, i) {
        return e = Object.assign({
            actualString: !0
        }, e), _Yo(t, e, n, i);
    }
};

}
