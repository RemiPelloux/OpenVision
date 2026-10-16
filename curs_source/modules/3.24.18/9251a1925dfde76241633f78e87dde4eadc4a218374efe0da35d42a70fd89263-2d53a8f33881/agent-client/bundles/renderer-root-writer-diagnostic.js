var RENDERER_ROOT_WRITER_DIAGNOSTIC_MAX_BYTES, RENDERER_ROOT_WRITER_DIAGNOSTIC_TTL_MS;
export { RENDERER_ROOT_WRITER_DIAGNOSTIC_MAX_BYTES, RENDERER_ROOT_WRITER_DIAGNOSTIC_TTL_MS };
var __wakaru_init_renderer_root_writer_diagnostic_initialized = false;
export function init_renderer_root_writer_diagnostic() {
if (__wakaru_init_renderer_root_writer_diagnostic_initialized) return;
__wakaru_init_renderer_root_writer_diagnostic_initialized = true;
"use strict";
RENDERER_ROOT_WRITER_DIAGNOSTIC_MAX_BYTES = 4 * 1024;
RENDERER_ROOT_WRITER_DIAGNOSTIC_TTL_MS = 7 * 24 * 60 * 60 * 1e3;

}
