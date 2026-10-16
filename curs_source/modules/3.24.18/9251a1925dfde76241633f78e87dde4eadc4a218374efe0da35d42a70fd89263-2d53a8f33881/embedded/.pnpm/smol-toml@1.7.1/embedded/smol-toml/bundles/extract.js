import { init_error } from "./error.js";
import { init_primitive } from "./primitive.js";
import { init_struct } from "./struct.js";
import { init_util2 } from "./util.js";
var __wakaru_init_extract_initialized = false;
export function init_extract() {
if (__wakaru_init_extract_initialized) return;
__wakaru_init_extract_initialized = true;
init_primitive();
init_struct();
init_util2();
init_error();

}
