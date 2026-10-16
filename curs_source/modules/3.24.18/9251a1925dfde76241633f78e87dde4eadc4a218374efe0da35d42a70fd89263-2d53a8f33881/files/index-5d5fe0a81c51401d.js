import { init_code } from "./code.js";
import { init_connect_error } from "./connect-error.js";
import { init_context_values } from "./context-values.js";
import { init_promise_client } from "./promise-client.js";
import { init_router } from "./router.js";
var __wakaru_init_esm3_initialized = false;
export function init_esm3() {
if (__wakaru_init_esm3_initialized) return;
__wakaru_init_esm3_initialized = true;
init_connect_error();
init_code();
init_promise_client();
init_router();
init_context_values();

}
