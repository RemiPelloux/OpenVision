import { init_async_iterable } from "./async-iterable.js";
import { init_limit_io } from "./limit-io.js";
import { init_signals } from "./signals.js";
import { init_universal_handler_client } from "./universal-handler-client.js";
import { init_universal } from "./universal.js";
var __wakaru_init_protocol_initialized = false;
export function init_protocol() {
if (__wakaru_init_protocol_initialized) return;
__wakaru_init_protocol_initialized = true;
init_universal_handler_client();
init_limit_io();
init_async_iterable();
init_signals();
init_universal();

}
