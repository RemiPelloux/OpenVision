import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var jsonObjectSchema;
export { jsonObjectSchema };
var __wakaru_init_json_object_initialized = false;
export function init_json_object() {
if (__wakaru_init_json_object_initialized) return;
__wakaru_init_json_object_initialized = true;
"use strict";
init_zod();
jsonObjectSchema = external_exports.record(external_exports.unknown());

}
