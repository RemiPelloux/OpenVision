import { init_error } from "./error.js";
import { init_extract } from "./extract.js";
import { init_primitive } from "./primitive.js";
import { init_util2 } from "./util.js";
var KEY_PART_RE;
export { KEY_PART_RE };
var __wakaru_init_struct_initialized = false;
export function init_struct() {
if (__wakaru_init_struct_initialized) return;
__wakaru_init_struct_initialized = true;
init_primitive();
init_extract();
init_util2();
init_error();
KEY_PART_RE = /^[a-zA-Z0-9-_]+[ \t]*$/;

}
