import { bHf, eZ, rNw, sNw } from "./BA.js";
import { uce } from "./debug-build_3.js";
import { ZNi } from "./eventbuilder_2.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var SHf, kHf, t7l;
export { SHf, kHf, t7l };
var __wakaru_n7l_initialized = false;
export function n7l() {
if (__wakaru_n7l_initialized) return;
__wakaru_n7l_initialized = true;
E(), fh(), uce(), ZNi(), eZ(), SHf = "GlobalHandlers", kHf = ((t = {})=>{
    const e = {
        onerror: !0,
        onunhandledrejection: !0,
        ...t
    };
    return {
        name: SHf,
        setupOnce () {
            Error.stackTraceLimit = 50;
        },
        setup (n) {
            e.onerror && (rNw(n), bHf("onerror")), e.onunhandledrejection && (sNw(n), bHf("onunhandledrejection"));
        }
    };
}), t7l = kHf;

}
