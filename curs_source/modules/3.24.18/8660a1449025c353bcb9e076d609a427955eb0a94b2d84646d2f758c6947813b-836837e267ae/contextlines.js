import { MNw } from "./BA.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
var _0s, qHf, zHf, VHf, KHf;
export { KHf, VHf, _0s, qHf, zHf };
var __wakaru_NNw_initialized = false;
export function NNw() {
if (__wakaru_NNw_initialized) return;
__wakaru_NNw_initialized = true;
E(), fh(), _0s = o_, qHf = 7, zHf = "ContextLines", VHf = ((t = {})=>{
    const e = t.frameContextLines != null ? t.frameContextLines : qHf;
    return {
        name: zHf,
        processEvent (n) {
            return MNw(n, e);
        }
    };
}), KHf = VHf;

}
