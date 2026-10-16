import { ouk } from "./Aeg.js";
import { tCt } from "./index_9.ts";
import { E } from "./tslib.es6.js";
import { JKr } from "./types.ts";
var Neg;
export { Neg };
var __wakaru_Leg_initialized = false;
export function Leg() {
if (__wakaru_Leg_initialized) return;
__wakaru_Leg_initialized = true;
"use strict";
E(), tCt(), Neg = Object.fromEntries(Array.from(JKr).map((t)=>{
    if (!ouk(t)) throw new Error(`HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT lists ${t} but HookStepAdditionalContextEventName does not include it. Extend the Extract<> union in spec.ts.`);
    return [
        t,
        {
            hookEventName: t
        }
    ];
}));

}
