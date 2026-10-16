import { init_esm21 } from "../../../../../node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/esm/index.js";
var __wakaru_init_pdf_worker_initialized = false;
export function init_pdf_worker() {
if (__wakaru_init_pdf_worker_initialized) return;
__wakaru_init_pdf_worker_initialized = true;
"use strict";
init_esm21();

}
