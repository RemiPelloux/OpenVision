import { init_parseDef } from "../parseDef.js";
var isJsonSchema7AllOfType;
export { isJsonSchema7AllOfType };
var __wakaru_init_intersection_initialized = false;
export function init_intersection() {
if (__wakaru_init_intersection_initialized) return;
__wakaru_init_intersection_initialized = true;
init_parseDef();
isJsonSchema7AllOfType = (type2)=>{
    if ("type" in type2 && type2.type === "string") return false;
    return "allOf" in type2;
};

}
