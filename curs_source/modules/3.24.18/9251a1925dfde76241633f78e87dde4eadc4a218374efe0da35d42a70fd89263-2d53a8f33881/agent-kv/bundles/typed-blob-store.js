import { init_writethrough_middleware } from "./writethrough-middleware.js";
var BLOB_METADATA_CALLBACK_SYMBOL;
export { BLOB_METADATA_CALLBACK_SYMBOL };
var __wakaru_init_typed_blob_store_initialized = false;
export function init_typed_blob_store() {
if (__wakaru_init_typed_blob_store_initialized) return;
__wakaru_init_typed_blob_store_initialized = true;
"use strict";
init_writethrough_middleware();
BLOB_METADATA_CALLBACK_SYMBOL = Symbol.for("anysphere.blobMetadataCallback");

}
