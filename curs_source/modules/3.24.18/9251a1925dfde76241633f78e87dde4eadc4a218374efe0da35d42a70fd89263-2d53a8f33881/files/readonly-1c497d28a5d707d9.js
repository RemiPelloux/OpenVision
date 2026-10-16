import { parseDef } from "../../../../../../../../coerce_exports.js";
import { init_parseDef } from "../parseDef.js";
var parseReadonlyDef;
export { parseReadonlyDef };
var __wakaru_init_readonly_initialized = false;
export function init_readonly() {
if (__wakaru_init_readonly_initialized) return;
__wakaru_init_readonly_initialized = true;
init_parseDef();
parseReadonlyDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};

}
