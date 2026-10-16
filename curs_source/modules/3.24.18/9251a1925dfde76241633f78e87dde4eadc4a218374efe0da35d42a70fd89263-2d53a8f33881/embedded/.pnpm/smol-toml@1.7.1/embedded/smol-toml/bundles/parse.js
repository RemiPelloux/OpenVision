import { init_error } from "./error.js";
import { init_extract } from "./extract.js";
import { init_struct } from "./struct.js";
import { init_util2 } from "./util.js";
var __wakaru_init_parse_initialized = false;
export function init_parse() {
if (__wakaru_init_parse_initialized) return;
__wakaru_init_parse_initialized = true;
init_struct();
init_extract();
init_util2();
init_error();

}
