import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { import_meta_url } from "../edit/common.js";
import { init_worker_script_location } from "../worker-script-location.js";
import { resolveWorkerLocation } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_esm_wrapper } from "../../../../../node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/esm-wrapper.mjs";
var import_node_os26, import_node_path89, PDF_HEADER, PDF_EXTENSION_REGEX, workerDir2, extension2, sanitizedEnvForWorkers2;
export { PDF_EXTENSION_REGEX, PDF_HEADER, extension2, import_node_os26, import_node_path89, sanitizedEnvForWorkers2, workerDir2 };
var __wakaru_init_pdf_utils_initialized = false;
export function init_pdf_utils() {
if (__wakaru_init_pdf_utils_initialized) return;
__wakaru_init_pdf_utils_initialized = true;
"use strict";
import_node_os26 = __toESM(require("node:os"), 1);
import_node_path89 = __toESM(require("node:path"), 1);
init_esm_wrapper();
init_worker_script_location();
PDF_HEADER = [
    37,
    80,
    68,
    70
];
PDF_EXTENSION_REGEX = /\.pdf$/i;
({ dir: workerDir2, extension: extension2 } = resolveWorkerLocation(import_meta_url, "pdf-worker"));
sanitizedEnvForWorkers2 = Object.fromEntries(Object.entries(process.env).filter(([key, value])=>key !== "NSOLID_STATSD" && value !== void 0));

}
