import { init_headers } from "../protocol-grpc/headers.js";
var __wakaru_init_headers2_initialized = false;
export function init_headers2() {
if (__wakaru_init_headers2_initialized) return;
__wakaru_init_headers2_initialized = true;
init_headers();

}
