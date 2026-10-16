import { init_date } from "./date.js";
import { init_error } from "./error.js";
import { init_parse } from "./parse.js";
import { init_stringify } from "./stringify.js";
var __wakaru_init_dist10_initialized = false;
export function init_dist10() {
if (__wakaru_init_dist10_initialized) return;
__wakaru_init_dist10_initialized = true;
init_parse();
init_stringify();
init_date();
init_error();

}
