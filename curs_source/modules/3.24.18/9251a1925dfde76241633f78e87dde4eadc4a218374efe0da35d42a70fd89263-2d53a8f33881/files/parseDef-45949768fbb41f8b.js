import { init_Options } from "./Options.js";
import { init_selectParser } from "./selectParser.js";
var get$ref, getRelativePath, addMeta;
export { addMeta, get$ref, getRelativePath };
var __wakaru_init_parseDef_initialized = false;
export function init_parseDef() {
if (__wakaru_init_parseDef_initialized) return;
__wakaru_init_parseDef_initialized = true;
init_Options();
init_selectParser();
get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return {};
                }
                return refs.$refStrategy === "seen" ? {} : void 0;
            }
    }
};
getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
addMeta = (def, refs, jsonSchema2)=>{
    if (def.description) {
        jsonSchema2.description = def.description;
        if (refs.markdownDescription) {
            jsonSchema2.markdownDescription = def.description;
        }
    }
    return jsonSchema2;
};

}
