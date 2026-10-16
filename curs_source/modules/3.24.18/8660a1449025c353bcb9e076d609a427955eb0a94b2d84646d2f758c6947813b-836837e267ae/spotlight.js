import { cNw, lNw } from "./BA.js";
import { qv, uce } from "./debug-build_3.js";
import { so } from "./debug-logger.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { E } from "./tslib.es6.js";
var AHf, RHf, PHf;
export { AHf, PHf, RHf };
var __wakaru_uNw_initialized = false;
export function uNw() {
if (__wakaru_uNw_initialized) return;
__wakaru_uNw_initialized = true;
E(), fh(), pQ(), uce(), AHf = "SpotlightBrowser", RHf = ((t = {})=>{
    const e = t.sidecarUrl || "http://localhost:8969/stream";
    return {
        name: AHf,
        setup: ()=>{
            qv && so.log("Using Sidecar URL", e);
        },
        processEvent: (n)=>cNw(n) ? null : n,
        afterAllSetup: (n)=>{
            lNw(n, e);
        }
    };
}), PHf = RHf;

}
