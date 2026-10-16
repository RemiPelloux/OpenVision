import { external_exports } from "../../../../../../external_exports.js";
import { init_zod } from "../../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var descriptionDsv3, EXPLANATION_DESCRIPTION, createParametersSchema2, createParametersSchemaForModelDsv3, createParametersSchemaDsv32, parametersSchemaForModelDsv3, parametersSchemaDsv33;
export { EXPLANATION_DESCRIPTION, createParametersSchema2, createParametersSchemaDsv32, createParametersSchemaForModelDsv3, descriptionDsv3, parametersSchemaDsv33, parametersSchemaForModelDsv3 };
var __wakaru_init_dsv3_initialized = false;
export function init_dsv3() {
if (__wakaru_init_dsv3_initialized) return;
__wakaru_init_dsv3_initialized = true;
"use strict";
init_zod();
descriptionDsv3 = `Find snippets of code from the codebase most relevant to the search query.
This is a semantic search tool, so the query should ask for something semantically matching what is needed.
Ask a complete question about what you want to understand. Ask as if talking to a colleague: 'How does X work?', 'What happens when Y?', 'Where is Z handled?
If it makes sense to only search in particular directories, please specify them in the target_directories field (single directory only, no glob patterns).`;
EXPLANATION_DESCRIPTION = "One sentence explanation as to why this tool is being used, and how it contributes to the goal.";
createParametersSchema2 = (options2)=>{
    const baseSchema = external_exports.object({
        explanation: options2.explanationRequired ? external_exports.string().describe(EXPLANATION_DESCRIPTION) : external_exports.string().optional().describe(EXPLANATION_DESCRIPTION),
        query: external_exports.string().describe("A complete question about what you want to understand. Ask as if talking to a colleague: 'How does X work?', 'What happens when Y?', 'Where is Z handled?'"),
        target_directories: external_exports.array(external_exports.string()).describe("Prefix directory paths to limit search scope (single directory only, no glob patterns)"),
        search_only_prs: external_exports.boolean().optional().describe("If true, only search pull requests and return no code results.")
    });
    if (options2.numResultsConfig?.enabled) {
        const topK = options2.numResultsConfig.topK;
        const numResultsSchema = external_exports.number().int().min(1).max(topK).describe(options2.numResultsConfig.required ? `The number of results to return. Must be between 1 and ${topK}.` : `The number of results to return. Defaults to ${topK}. Do not specify a value larger than ${topK}.`);
        return baseSchema.extend({
            num_results: options2.numResultsConfig.required ? numResultsSchema : numResultsSchema.optional()
        });
    }
    return baseSchema;
};
createParametersSchemaForModelDsv3 = (numResultsConfig)=>createParametersSchema2({
        explanationRequired: true,
        numResultsConfig
    });
createParametersSchemaDsv32 = (numResultsConfig)=>createParametersSchema2({
        explanationRequired: false,
        numResultsConfig
    });
parametersSchemaForModelDsv3 = createParametersSchemaForModelDsv3();
parametersSchemaDsv33 = createParametersSchemaDsv32();

}
