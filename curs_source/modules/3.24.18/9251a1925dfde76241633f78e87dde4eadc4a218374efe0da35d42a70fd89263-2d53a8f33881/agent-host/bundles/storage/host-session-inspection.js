import { init_session_blob_store } from "./session-blob-store.js";
import { init_session_listing_projection } from "./session-listing-projection.js";
import { init_session_manifest } from "./session-manifest.js";
import { init_session_meta } from "./session-meta.js";
var __wakaru_init_host_session_inspection_initialized = false;
export function init_host_session_inspection() {
if (__wakaru_init_host_session_inspection_initialized) return;
__wakaru_init_host_session_inspection_initialized = true;
"use strict";
init_session_blob_store();
init_session_listing_projection();
init_session_manifest();
init_session_meta();

}
