import { init_private_inference_config } from "./private-inference-config.js";
var RESERVED_MODEL_ID;
export { RESERVED_MODEL_ID };
var __wakaru_init_private_inference_catalog_initialized = false;
export function init_private_inference_catalog() {
if (__wakaru_init_private_inference_catalog_initialized) return;
__wakaru_init_private_inference_catalog_initialized = true;
"use strict";
init_private_inference_config();
RESERVED_MODEL_ID = "default";

}
