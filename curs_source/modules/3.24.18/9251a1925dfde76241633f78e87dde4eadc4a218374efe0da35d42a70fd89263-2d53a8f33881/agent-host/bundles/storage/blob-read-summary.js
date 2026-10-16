import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
var summaryKey;
export { summaryKey };
var __wakaru_init_blob_read_summary_initialized = false;
export function init_blob_read_summary() {
if (__wakaru_init_blob_read_summary_initialized) return;
__wakaru_init_blob_read_summary_initialized = true;
"use strict";
init_dist();
summaryKey = createKey(Symbol("agent-host.blob-reads"), void 0);

}
