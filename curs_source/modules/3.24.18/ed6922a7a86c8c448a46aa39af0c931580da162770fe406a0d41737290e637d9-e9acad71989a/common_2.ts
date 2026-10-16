import { l0v } from "./A3u.js";
import { CX } from "./index_11.ts";
import { a_e } from "./request-context.ts";
import { Bj, S4e } from "./request_context_exec_pb.js";
import { x } from "./tslib.es6.js";
import { hu } from "./utils_pb.js";
var LWi, DPd, MPd, PPd;
export { DPd, LWi, MPd, PPd };
var __wakaru_NWi_initialized = false;
export function NWi() {
if (__wakaru_NWi_initialized) return;
__wakaru_NWi_initialized = true;
"use strict";
x(), CX(), Bj(), hu(), LWi = (e)=>String(e).replace(/[\r\n]/g, ""), DPd = "x-inference-authentication-jwt", MPd = [
    "userMessageAction",
    "resumeAction"
], PPd = async (e, t, n, i)=>{
    const r = t.action.case;
    if (l0v(MPd, r)) {
        const s = t.action.value, a = await n.get(a_e).execute(e, new S4e({
            notesSessionId: i
        }));
        if (a.result.case !== "success" || a.result.value.requestContext === void 0) throw new Error(`Failed to compute request context: ${JSON.stringify(a.result.value?.toJson())}`);
        s.requestContext = a.result.value.requestContext;
    }
};

}
