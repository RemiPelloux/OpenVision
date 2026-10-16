import { parseDef } from "../../../../../../../../coerce_exports.js";
import { init_parseDef } from "../parseDef.js";
var parseCatchDef;
export { parseCatchDef };
var __wakaru_init_catch_initialized = false;
export function init_catch() {
if (__wakaru_init_catch_initialized) return;
__wakaru_init_catch_initialized = true;
init_parseDef();
parseCatchDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};

}
