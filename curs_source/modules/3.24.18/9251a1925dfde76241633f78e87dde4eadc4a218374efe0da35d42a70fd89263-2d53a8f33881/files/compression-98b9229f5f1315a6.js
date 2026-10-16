import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
var compressedFlag;
export { compressedFlag };
var __wakaru_init_compression_initialized = false;
export function init_compression() {
if (__wakaru_init_compression_initialized) return;
__wakaru_init_compression_initialized = true;
init_connect_error();
init_code();
compressedFlag = 1;

}
