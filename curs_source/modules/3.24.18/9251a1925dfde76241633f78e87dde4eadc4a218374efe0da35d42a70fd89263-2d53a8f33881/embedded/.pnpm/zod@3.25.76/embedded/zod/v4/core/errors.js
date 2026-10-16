import { $constructor } from "../../../../../../../esm_exports8.js";
import { init_core3 } from "./core.js";
import { init_util4 } from "./util.js";
import { jsonStringifyReplacer } from "../../../../../../../util_exports.js";
var initializer, $ZodError, $ZodRealError;
export { $ZodError, $ZodRealError, initializer };
var __wakaru_init_errors4_initialized = false;
export function init_errors4() {
if (__wakaru_init_errors4_initialized) return;
__wakaru_init_errors4_initialized = true;
init_core3();
init_util4();
initializer = (inst, def)=>{
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
    });
    Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
    });
    Object.defineProperty(inst, "message", {
        get () {
            return JSON.stringify(def, jsonStringifyReplacer, 2);
        },
        enumerable: true
    });
    Object.defineProperty(inst, "toString", {
        value: ()=>inst.message,
        enumerable: false
    });
};
$ZodError = $constructor("$ZodError", initializer);
$ZodRealError = $constructor("$ZodError", initializer, {
    Parent: Error
});

}
