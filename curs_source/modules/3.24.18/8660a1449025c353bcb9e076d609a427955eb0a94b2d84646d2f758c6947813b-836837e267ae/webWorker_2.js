import { Hqf, eZ } from "./BA.js";
import { uce } from "./debug-build_3.js";
import { ZNi } from "./eventbuilder_2.js";
import { n7l } from "./globalhandlers.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var Wqf, Gqf;
export { Gqf, Wqf };
var __wakaru_WFw_initialized = false;
export function WFw() {
if (__wakaru_WFw_initialized) return;
__wakaru_WFw_initialized = true;
E(), fh(), uce(), ZNi(), eZ(), n7l(), Wqf = "WebWorker", Gqf = ({ worker: t })=>({
        name: Wqf,
        setupOnce: ()=>{
            (Array.isArray(t) ? t : [
                t
            ]).forEach((e)=>Hqf(e));
        },
        addWorker: (e)=>Hqf(e)
    });

}
