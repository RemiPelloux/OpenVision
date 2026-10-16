import { init_line_normalizer } from "./line-normalizer.js";
import { init_murmurhash } from "./murmurhash.js";
var __wakaru_init_hash_line_initialized = false;
export function init_hash_line() {
if (__wakaru_init_hash_line_initialized) return;
__wakaru_init_hash_line_initialized = true;
"use strict";
init_line_normalizer();
init_murmurhash();

}
