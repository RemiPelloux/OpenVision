import { init_local_marketplace_settings } from "./local-marketplace-settings.js";
import { init_manifest_parser } from "./manifest-parser.js";
var __wakaru_init_local_marketplace_cache_initialized = false;
export function init_local_marketplace_cache() {
if (__wakaru_init_local_marketplace_cache_initialized) return;
__wakaru_init_local_marketplace_cache_initialized = true;
"use strict";
init_local_marketplace_settings();
init_manifest_parser();

}
