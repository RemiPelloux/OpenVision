import { NHv } from "./cgh.js";
import { $Je } from "./index_9.ts";
import { x } from "./tslib.es6.js";
import { EWi } from "./types.ts";
var mgh;
export { mgh };
var __wakaru_ggh_initialized = false;
export function ggh() {
if (__wakaru_ggh_initialized) return;
__wakaru_ggh_initialized = true;
"use strict";
x(), $Je(), mgh = Object.fromEntries(Array.from(EWi).map((e)=>{
    if (!NHv(e)) throw new Error(`HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT lists ${e} but HookStepAdditionalContextEventName does not include it. Extend the Extract<> union in spec.ts.`);
    return [
        e,
        {
            hookEventName: e
        }
    ];
}));

}
