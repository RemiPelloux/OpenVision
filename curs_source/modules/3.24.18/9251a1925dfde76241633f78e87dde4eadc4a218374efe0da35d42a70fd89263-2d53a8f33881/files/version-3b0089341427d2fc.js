import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_headers3 } from "./headers.js";
import { init_query_params } from "./query-params.js";
var protocolVersion;
export { protocolVersion };
var __wakaru_init_version2_initialized = false;
export function init_version2() {
if (__wakaru_init_version2_initialized) return;
__wakaru_init_version2_initialized = true;
init_headers3();
init_query_params();
init_connect_error();
init_code();
protocolVersion = "1";

}
