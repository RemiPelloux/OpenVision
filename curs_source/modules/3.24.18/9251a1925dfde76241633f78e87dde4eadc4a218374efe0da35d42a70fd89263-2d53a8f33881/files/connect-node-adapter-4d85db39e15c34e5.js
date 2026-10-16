import { init_compression2 } from "./compression.js";
import { init_node_universal_handler } from "./node-universal-handler.js";
import { init_esm3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
import { uResponseNotFound } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/universal.js";
var fallback2;
export { fallback2 };
var __wakaru_init_connect_node_adapter_initialized = false;
export function init_connect_node_adapter() {
if (__wakaru_init_connect_node_adapter_initialized) return;
__wakaru_init_connect_node_adapter_initialized = true;
init_esm3();
init_protocol();
init_node_universal_handler();
init_compression2();
fallback2 = (request3, response)=>{
    response.writeHead(uResponseNotFound.status);
    response.end();
};

}
