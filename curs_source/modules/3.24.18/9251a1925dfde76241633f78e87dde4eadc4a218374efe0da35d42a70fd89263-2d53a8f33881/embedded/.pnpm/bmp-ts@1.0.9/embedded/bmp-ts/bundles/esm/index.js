import { init_decoder } from "./decoder.js";
import { init_encoder } from "./encoder.js";
import { init_types7 } from "./types.js";
var __wakaru_init_esm15_initialized = false;
export function init_esm15() {
if (__wakaru_init_esm15_initialized) return;
__wakaru_init_esm15_initialized = true;
init_decoder();
init_encoder();
init_types7();

}
