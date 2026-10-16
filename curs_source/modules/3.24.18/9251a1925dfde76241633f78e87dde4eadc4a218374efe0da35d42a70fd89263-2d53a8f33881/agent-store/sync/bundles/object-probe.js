import { init_etag } from "./etag.js";
import { init_presigned_url } from "./presigned-url.js";
import { init_safe_paths } from "./safe-paths.js";
var __wakaru_init_object_probe_initialized = false;
export function init_object_probe() {
if (__wakaru_init_object_probe_initialized) return;
__wakaru_init_object_probe_initialized = true;
"use strict";
init_etag();
init_presigned_url();
init_safe_paths();

}
