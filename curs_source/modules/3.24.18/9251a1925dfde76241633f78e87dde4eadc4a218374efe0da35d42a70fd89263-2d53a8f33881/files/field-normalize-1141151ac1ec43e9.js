import { init_field } from "./field.js";
import { init_names } from "./names.js";
import { init_scalar } from "../scalar.js";
var __wakaru_init_field_normalize_initialized = false;
export function init_field_normalize() {
if (__wakaru_init_field_normalize_initialized) return;
__wakaru_init_field_normalize_initialized = true;
init_field();
init_names();
init_scalar();

}
