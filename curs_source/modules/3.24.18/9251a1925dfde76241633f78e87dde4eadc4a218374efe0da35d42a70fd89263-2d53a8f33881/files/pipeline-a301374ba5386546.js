import { parseDef } from "../../../../../../../../coerce_exports.js";
import { init_parseDef } from "../parseDef.js";
var parsePipelineDef;
export { parsePipelineDef };
var __wakaru_init_pipeline_initialized = false;
export function init_pipeline() {
if (__wakaru_init_pipeline_initialized) return;
__wakaru_init_pipeline_initialized = true;
init_parseDef();
parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b2 = parseDef(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b2
        ].filter((x)=>x !== void 0)
    };
};

}
