import { init_api_key_helper } from "./api-key-helper.js";
import { init_helper_authorized_fetch } from "./helper-authorized-fetch.js";
import { init_model_catalog_probe } from "./model-catalog-probe.js";
import { init_user_agent } from "./user-agent.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var contentSchema, responsesResultSchema;
export { contentSchema, responsesResultSchema };
var __wakaru_init_web_search2_initialized = false;
export function init_web_search2() {
if (__wakaru_init_web_search2_initialized) return;
__wakaru_init_web_search2_initialized = true;
"use strict";
init_zod();
init_api_key_helper();
init_helper_authorized_fetch();
init_model_catalog_probe();
init_user_agent();
contentSchema = external_exports.object({
    text: external_exports.string().optional(),
    annotations: external_exports.object({
        title: external_exports.string().optional(),
        url: external_exports.string().optional()
    }).array().optional()
});
responsesResultSchema = external_exports.object({
    output_text: external_exports.string().optional(),
    output: external_exports.object({
        content: contentSchema.array().optional()
    }).array().optional()
});

}
