import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_limit_io } from "./limit-io.js";
var __wakaru_init_serialization2_initialized = false;
export function init_serialization2() {
if (__wakaru_init_serialization2_initialized) return;
__wakaru_init_serialization2_initialized = true;
init_connect_error();
init_code();
init_limit_io();

}
