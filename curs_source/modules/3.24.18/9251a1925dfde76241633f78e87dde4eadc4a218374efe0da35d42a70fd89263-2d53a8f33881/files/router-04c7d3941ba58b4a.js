import { init_code } from "./code.js";
import { init_connect_error } from "./connect-error.js";
import { init_implementation } from "./implementation.js";
import { init_handler_factory3 } from "./protocol-connect/handler-factory.js";
import { init_handler_factory } from "./protocol-grpc-web/handler-factory.js";
import { init_handler_factory2 } from "./protocol-grpc/handler-factory.js";
import { init_universal_handler } from "./protocol/universal-handler.js";
var __wakaru_init_router_initialized = false;
export function init_router() {
if (__wakaru_init_router_initialized) return;
__wakaru_init_router_initialized = true;
init_connect_error();
init_code();
init_implementation();
init_handler_factory();
init_handler_factory2();
init_handler_factory3();
init_universal_handler();

}
