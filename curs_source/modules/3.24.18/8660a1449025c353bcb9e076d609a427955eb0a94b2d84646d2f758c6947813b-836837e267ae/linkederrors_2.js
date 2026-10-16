import { f0s } from "./BA.js";
import { ZNi } from "./eventbuilder_2.js";
import { fh } from "./index_10.js";
import { Bhr } from "./linkederrors.js";
import { E } from "./tslib.es6.js";
var CHf, THf, EHf, IHf, r7l;
export { CHf, EHf, IHf, THf, r7l };
var __wakaru_xHf_initialized = false;
export function xHf() {
if (__wakaru_xHf_initialized) return;
__wakaru_xHf_initialized = true;
E(), fh(), ZNi(), CHf = "cause", THf = 5, EHf = "LinkedErrors", IHf = ((t = {})=>{
    const e = t.limit || THf, n = t.key || CHf;
    return {
        name: EHf,
        preprocessEvent (i, r, s) {
            const o = s.getOptions();
            Bhr(f0s, o.stackParser, n, e, i, r);
        }
    };
}), r7l = IHf;

}
