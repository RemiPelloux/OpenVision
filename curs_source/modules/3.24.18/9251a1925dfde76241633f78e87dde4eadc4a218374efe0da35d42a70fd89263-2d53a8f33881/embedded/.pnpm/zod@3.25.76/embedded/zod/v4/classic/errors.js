import { $constructor } from "../../../../../../../esm_exports8.js";
import { $ZodError } from "../core/errors.js";
import { init_core4 } from "../core/index.js";
import { flattenError, formatError } from "../../../../../../../util_exports.js";
var initializer2, ZodError2, ZodRealError;
export { ZodError2, ZodRealError, initializer2 };
var __wakaru_init_errors5_initialized = false;
export function init_errors5() {
if (__wakaru_init_errors5_initialized) return;
__wakaru_init_errors5_initialized = true;
init_core4();
init_core4();
initializer2 = (inst, issues)=>{
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
        format: {
            value: (mapper)=>formatError(inst, mapper)
        },
        flatten: {
            value: (mapper)=>flattenError(inst, mapper)
        },
        addIssue: {
            value: (issue2)=>inst.issues.push(issue2)
        },
        addIssues: {
            value: (issues2)=>inst.issues.push(...issues2)
        },
        isEmpty: {
            get () {
                return inst.issues.length === 0;
            }
        }
    });
};
ZodError2 = $constructor("ZodError", initializer2);
ZodRealError = $constructor("ZodError", initializer2, {
    Parent: Error
});

}
