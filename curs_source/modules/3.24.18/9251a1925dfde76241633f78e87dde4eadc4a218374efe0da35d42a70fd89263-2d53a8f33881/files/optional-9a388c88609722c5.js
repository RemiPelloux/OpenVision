import { parseDef } from "../../../../../../../../coerce_exports.js";
import { init_parseDef } from "../parseDef.js";
var parseOptionalDef;
export { parseOptionalDef };
var __wakaru_init_optional_initialized = false;
export function init_optional() {
if (__wakaru_init_optional_initialized) return;
__wakaru_init_optional_initialized = true;
init_parseDef();
parseOptionalDef = (def, refs)=>{
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: {}
            },
            innerSchema
        ]
    } : {};
};

}
