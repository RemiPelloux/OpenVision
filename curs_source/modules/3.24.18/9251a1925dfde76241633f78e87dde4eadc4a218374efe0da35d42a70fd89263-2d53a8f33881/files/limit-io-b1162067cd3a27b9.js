import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
var maxReadMaxBytes, maxWriteMaxBytes, defaultCompressMinBytes;
export { defaultCompressMinBytes, maxReadMaxBytes, maxWriteMaxBytes };
var __wakaru_init_limit_io_initialized = false;
export function init_limit_io() {
if (__wakaru_init_limit_io_initialized) return;
__wakaru_init_limit_io_initialized = true;
init_connect_error();
init_code();
maxReadMaxBytes = 4294967295;
maxWriteMaxBytes = maxReadMaxBytes;
defaultCompressMinBytes = 1024;

}
