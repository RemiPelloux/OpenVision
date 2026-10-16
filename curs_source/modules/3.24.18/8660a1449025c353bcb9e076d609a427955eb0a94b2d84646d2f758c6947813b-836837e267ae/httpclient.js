import { ANw, xNw } from "./BA.js";
import { uce } from "./debug-build_3.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { E } from "./tslib.es6.js";
var HHf, WHf, GHf;
export { GHf, HHf, WHf };
var __wakaru_PNw_initialized = false;
export function PNw() {
if (__wakaru_PNw_initialized) return;
__wakaru_PNw_initialized = true;
E(), fh(), pQ(), uce(), HHf = "HttpClient", WHf = ((t = {})=>{
    const e = {
        failedRequestStatusCodes: [
            [
                500,
                599
            ]
        ],
        failedRequestTargets: [
            /.*/
        ],
        ...t
    };
    return {
        name: HHf,
        setup (n) {
            xNw(n, e), ANw(n, e);
        }
    };
}), GHf = WHf;

}
