import { init_dist2 } from "../../../constants/dist/index.js";
var PRM_CACHE_TTL_MS, cache;
export { PRM_CACHE_TTL_MS, cache };
var __wakaru_init_rest_mcp_provider_metadata_initialized = false;
export function init_rest_mcp_provider_metadata() {
if (__wakaru_init_rest_mcp_provider_metadata_initialized) return;
__wakaru_init_rest_mcp_provider_metadata_initialized = true;
"use strict";
init_dist2();
PRM_CACHE_TTL_MS = 5 * 60 * 1e3;
cache = new Map();

}
