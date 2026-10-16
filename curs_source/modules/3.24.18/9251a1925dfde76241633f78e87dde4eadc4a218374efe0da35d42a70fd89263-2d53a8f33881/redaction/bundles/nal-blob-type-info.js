import { init_classification } from "./classification.js";
import { init_factory } from "./factory.js";
import { init_types11 } from "./types.js";
var __wakaru_init_nal_blob_type_info_initialized = false;
export function init_nal_blob_type_info() {
if (__wakaru_init_nal_blob_type_info_initialized) return;
__wakaru_init_nal_blob_type_info_initialized = true;
"use strict";
init_classification();
init_factory();
init_types11();

}
