import { init_bcs_client } from "./bcs-client.js";
import { init_bcs_list_adapter } from "./bcs-list-adapter.js";
import { init_connect_errors } from "./connect-errors.js";
import { init_etag } from "./etag.js";
import { init_rpc_service } from "./rpc-service.js";
import { init_safe_paths } from "./safe-paths.js";
var DIRECTORY_LIST_PAGE_SIZE, DIRECTORY_LIST_MAX_PAGES, DIRECTORY_LIST_MAX_ENTRIES, DEFAULT_LARGE_TARGET_TTL_MS, MIN_LARGE_TARGET_TTL_MS, MAX_LARGE_TARGET_TTL_MS;
export { DEFAULT_LARGE_TARGET_TTL_MS, DIRECTORY_LIST_MAX_ENTRIES, DIRECTORY_LIST_MAX_PAGES, DIRECTORY_LIST_PAGE_SIZE, MAX_LARGE_TARGET_TTL_MS, MIN_LARGE_TARGET_TTL_MS };
var __wakaru_init_bcs_transport_initialized = false;
export function init_bcs_transport() {
if (__wakaru_init_bcs_transport_initialized) return;
__wakaru_init_bcs_transport_initialized = true;
"use strict";
init_bcs_client();
init_bcs_list_adapter();
init_connect_errors();
init_etag();
init_rpc_service();
init_safe_paths();
DIRECTORY_LIST_PAGE_SIZE = 1e3;
DIRECTORY_LIST_MAX_PAGES = 10;
DIRECTORY_LIST_MAX_ENTRIES = DIRECTORY_LIST_PAGE_SIZE * DIRECTORY_LIST_MAX_PAGES;
DEFAULT_LARGE_TARGET_TTL_MS = 30 * 60 * 1e3;
MIN_LARGE_TARGET_TTL_MS = 60 * 1e3;
MAX_LARGE_TARGET_TTL_MS = 24 * 60 * 60 * 1e3;

}
