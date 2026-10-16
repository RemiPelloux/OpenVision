var MAX_PREFETCH_FILE_SIZE_BYTES, emptyPrefetch;
export { MAX_PREFETCH_FILE_SIZE_BYTES, emptyPrefetch };
var __wakaru_init_prefetch_request_context_files_initialized = false;
export function init_prefetch_request_context_files() {
if (__wakaru_init_prefetch_request_context_files_initialized) return;
__wakaru_init_prefetch_request_context_files_initialized = true;
"use strict";
MAX_PREFETCH_FILE_SIZE_BYTES = 10 * 1024 * 1024;
emptyPrefetch = (prefetchMs)=>({
        fileContents: {},
        fileCount: 0,
        prefetchedCount: 0,
        skippedLargeCount: 0,
        failedCount: 0,
        totalBytes: 0,
        prefetchMs
    });

}
