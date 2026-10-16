import { parseDef } from "../../../../../../../../coerce_exports.js";
import { init_parseDef } from "../parseDef.js";
var primitiveMappings, asAnyOf;
export { asAnyOf, primitiveMappings };
var __wakaru_init_union_initialized = false;
export function init_union() {
if (__wakaru_init_union_initialized) return;
__wakaru_init_union_initialized = true;
init_parseDef();
primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>parseDef(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : void 0;
};

}
