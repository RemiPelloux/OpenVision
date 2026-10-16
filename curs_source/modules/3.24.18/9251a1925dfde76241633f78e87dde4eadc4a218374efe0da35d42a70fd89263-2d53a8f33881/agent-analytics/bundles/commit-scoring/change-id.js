import { init_murmurhash } from "./murmurhash.js";
var __wakaru_init_change_id_initialized = false;
export function init_change_id() {
if (__wakaru_init_change_id_initialized) return;
__wakaru_init_change_id_initialized = true;
"use strict";
init_murmurhash();

}
