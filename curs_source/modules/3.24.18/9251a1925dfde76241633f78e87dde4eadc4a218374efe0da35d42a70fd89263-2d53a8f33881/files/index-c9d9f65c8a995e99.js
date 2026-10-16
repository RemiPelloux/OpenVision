import { init_code_string } from "./code-string.js";
import { init_headers3 } from "./headers.js";
import { init_transport2 } from "./transport.js";
var __wakaru_init_protocol_connect_initialized = false;
export function init_protocol_connect() {
if (__wakaru_init_protocol_connect_initialized) return;
__wakaru_init_protocol_connect_initialized = true;
init_transport2();
init_headers3();
init_code_string();
init_code_string();

}
