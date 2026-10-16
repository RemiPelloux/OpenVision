import { uie } from "./index_11.ts";
import { iPe } from "./request-context.ts";
import { Gte, ntt } from "./request_context_exec_pb.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
import { lB1 } from "./yBp.js";
var lYr, o1m, a1m, l1m;
export { a1m, l1m, lYr, o1m };
var __wakaru_cYr_initialized = false;
export function cYr() {
if (__wakaru_cYr_initialized) return;
__wakaru_cYr_initialized = true;
"use strict";
E(), uie(), Gte(), Hu(), lYr = (t)=>String(t).replace(/[\r\n]/g, ""), o1m = "x-inference-authentication-jwt", a1m = [
    "userMessageAction",
    "resumeAction"
], l1m = async (t, e, n, i)=>{
    const r = e.action.case;
    if (lB1(a1m, r)) {
        const s = e.action.value, a = await n.get(iPe).execute(t, new ntt({
            notesSessionId: i
        }));
        if (a.result.case !== "success" || a.result.value.requestContext === void 0) throw new Error(`Failed to compute request context: ${JSON.stringify(a.result.value?.toJson())}`);
        s.requestContext = a.result.value.requestContext;
    }
};

}
