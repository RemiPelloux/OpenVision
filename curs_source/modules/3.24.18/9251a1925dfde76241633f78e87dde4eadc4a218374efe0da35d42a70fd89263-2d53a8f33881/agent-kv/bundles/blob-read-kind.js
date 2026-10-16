import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var BLOB_READ_KIND_KEY;
export { BLOB_READ_KIND_KEY };
var __wakaru_init_blob_read_kind_initialized = false;
export function init_blob_read_kind() {
if (__wakaru_init_blob_read_kind_initialized) return;
__wakaru_init_blob_read_kind_initialized = true;
"use strict";
init_dist();
BLOB_READ_KIND_KEY = createKey(Symbol("blob-read-kind"), void 0);

}
