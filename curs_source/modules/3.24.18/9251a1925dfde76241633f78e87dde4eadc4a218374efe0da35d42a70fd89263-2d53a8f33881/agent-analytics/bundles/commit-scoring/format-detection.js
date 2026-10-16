import { init_line_normalizer } from "./line-normalizer.js";
import { init_murmurhash } from "./murmurhash.js";
import { init_types15 } from "./types.js";
var __wakaru_init_format_detection_initialized = false;
export function init_format_detection() {
if (__wakaru_init_format_detection_initialized) return;
__wakaru_init_format_detection_initialized = true;
"use strict";
init_line_normalizer();
init_murmurhash();
init_types15();

}
