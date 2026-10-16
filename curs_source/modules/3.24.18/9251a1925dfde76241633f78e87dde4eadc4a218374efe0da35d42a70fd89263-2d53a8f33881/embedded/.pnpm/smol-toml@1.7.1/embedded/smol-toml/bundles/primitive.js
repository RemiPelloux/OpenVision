import { init_date } from "./date.js";
import { init_error } from "./error.js";
var INT_REGEX, FLOAT_REGEX, LEADING_ZERO;
export { FLOAT_REGEX, INT_REGEX, LEADING_ZERO };
var __wakaru_init_primitive_initialized = false;
export function init_primitive() {
if (__wakaru_init_primitive_initialized) return;
__wakaru_init_primitive_initialized = true;
init_date();
init_error();
INT_REGEX = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
FLOAT_REGEX = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
LEADING_ZERO = /^[+-]?0[0-9_]/;

}
