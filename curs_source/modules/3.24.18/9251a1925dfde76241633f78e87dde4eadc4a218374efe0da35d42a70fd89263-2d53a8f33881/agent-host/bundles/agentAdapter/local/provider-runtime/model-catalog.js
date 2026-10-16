import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var ROUTABLE_API_TYPES, costShapeSchema, extendedCapabilityEntrySchema;
export { ROUTABLE_API_TYPES, costShapeSchema, extendedCapabilityEntrySchema };
var __wakaru_init_model_catalog_initialized = false;
export function init_model_catalog() {
if (__wakaru_init_model_catalog_initialized) return;
__wakaru_init_model_catalog_initialized = true;
"use strict";
init_zod();
ROUTABLE_API_TYPES = new Set([
    "chat_completions",
    "responses",
    "openai_chat",
    "openai_responses"
]);
costShapeSchema = external_exports.union([
    external_exports.record(external_exports.unknown()),
    external_exports.array(external_exports.record(external_exports.unknown()))
]);
extendedCapabilityEntrySchema = external_exports.object({
    api_types: external_exports.array(external_exports.string().min(1)).min(1).refine((types3)=>types3.some((type2)=>ROUTABLE_API_TYPES.has(type2))),
    capabilities: external_exports.object({
        context_length: external_exports.number().finite().positive().optional(),
        max_output_tokens: external_exports.number().finite().positive().optional(),
        output_modalities: external_exports.array(external_exports.string()).optional(),
        input_modalities: external_exports.array(external_exports.string()).optional(),
        supports_tool_use: external_exports.boolean().optional(),
        supports_streaming: external_exports.boolean().optional(),
        supports_reasoning: external_exports.boolean().optional(),
        supports_vision: external_exports.boolean().optional(),
        reasoning_effort: external_exports.array(external_exports.string()).optional(),
        cost: costShapeSchema.optional()
    }).optional(),
    cost: costShapeSchema.optional()
});

}
