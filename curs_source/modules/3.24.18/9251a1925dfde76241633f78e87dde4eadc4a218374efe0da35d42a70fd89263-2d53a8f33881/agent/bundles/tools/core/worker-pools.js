import { init_common15 } from "./edit/common.js";
import { init_pdf_utils } from "./read/pdf-utils.js";
var __wakaru_init_worker_pools_initialized = false;
export function init_worker_pools() {
if (__wakaru_init_worker_pools_initialized) return;
__wakaru_init_worker_pools_initialized = true;
"use strict";
init_common15();
init_pdf_utils();

}
