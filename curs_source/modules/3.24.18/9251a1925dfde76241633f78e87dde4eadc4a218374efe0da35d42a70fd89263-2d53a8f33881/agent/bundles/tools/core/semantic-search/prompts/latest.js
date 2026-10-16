import { init_core5 } from "../../../core.js";
import { external_exports } from "../../../../../../external_exports.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var createParametersSchemaLatest2, parametersSchemaLatest3;
export { createParametersSchemaLatest2, parametersSchemaLatest3 };
var __wakaru_init_latest_initialized = false;
export function init_latest() {
if (__wakaru_init_latest_initialized) return;
__wakaru_init_latest_initialized = true;
"use strict";
init_zod();
init_core5();
createParametersSchemaLatest2 = (numResultsConfig)=>{
    const baseSchema = external_exports.object({
        query: external_exports.string().describe("A complete question about what you want to understand. Ask as if talking to a colleague: 'How does X work?', 'What happens when Y?', 'Where is Z handled?'"),
        target_directories: external_exports.array(external_exports.string()).describe("Prefix directory paths to limit search scope (single directory only, no glob patterns)")
    });
    if (numResultsConfig?.enabled) {
        const topK = numResultsConfig.topK;
        const numResultsSchema = external_exports.number().int().min(1).max(topK).describe(numResultsConfig.required ? `The number of results to return. Must be between 1 and ${topK}.` : `The number of results to return. Defaults to ${topK}. Do not specify a value larger than ${topK}.`);
        return baseSchema.extend({
            num_results: numResultsConfig.required ? numResultsSchema : numResultsSchema.optional()
        });
    }
    return baseSchema;
};
parametersSchemaLatest3 = createParametersSchemaLatest2();

}
