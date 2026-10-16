import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_http_headers } from "../http-headers.js";
import { init_error_json } from "./error-json.js";
var endStreamFlag;
export { endStreamFlag };
var __wakaru_init_end_stream_initialized = false;
export function init_end_stream() {
if (__wakaru_init_end_stream_initialized) return;
__wakaru_init_end_stream_initialized = true;
init_error_json();
init_http_headers();
init_connect_error();
init_code();
endStreamFlag = 2;

}
