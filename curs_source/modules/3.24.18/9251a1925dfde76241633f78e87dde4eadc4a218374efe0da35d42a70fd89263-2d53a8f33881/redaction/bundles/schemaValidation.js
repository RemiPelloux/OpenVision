import { init_schema } from "./schema.js";
var __wakaru_init_schemaValidation_initialized = false;
export function init_schemaValidation() {
if (__wakaru_init_schemaValidation_initialized) return;
__wakaru_init_schemaValidation_initialized = true;
"use strict";
init_schema();

}
