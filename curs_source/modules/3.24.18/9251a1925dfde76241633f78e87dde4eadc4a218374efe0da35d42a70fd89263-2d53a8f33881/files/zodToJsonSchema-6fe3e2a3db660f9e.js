import { parseDef } from "../../../../../../../coerce_exports.js";
import { getRefs, init_Refs } from "./Refs.js";
import { init_parseDef } from "./parseDef.js";
var zodToJsonSchema;
export { zodToJsonSchema };
var __wakaru_init_zodToJsonSchema_initialized = false;
export function init_zodToJsonSchema() {
if (__wakaru_init_zodToJsonSchema_initialized) return;
__wakaru_init_zodToJsonSchema_initialized = true;
init_parseDef();
init_Refs();
zodToJsonSchema = (schema2, options2)=>{
    const refs = getRefs(options2);
    const definitions = typeof options2 === "object" && options2.definitions ? Object.entries(options2.definitions).reduce((acc, [name18, schema3])=>({
            ...acc,
            [name18]: parseDef(schema3._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name18
                ]
            }, true) ?? {}
        }), {}) : void 0;
    const name17 = typeof options2 === "string" ? options2 : options2?.nameStrategy === "title" ? void 0 : options2?.name;
    const main = parseDef(schema2._def, name17 === void 0 ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name17
        ]
    }, false) ?? {};
    const title = typeof options2 === "object" && options2.name !== void 0 && options2.nameStrategy === "title" ? options2.name : void 0;
    if (title !== void 0) {
        main.title = title;
    }
    const combined = name17 === void 0 ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name17
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name17]: main
        }
    };
    if (refs.target === "jsonSchema7") {
        combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
        combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
        console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    }
    return combined;
};

}
