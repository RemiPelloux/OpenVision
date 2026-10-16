import { init_esm3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var H2Code;
export { H2Code };
var __wakaru_init_node_error_initialized = false;
export function init_node_error() {
if (__wakaru_init_node_error_initialized) return;
__wakaru_init_node_error_initialized = true;
init_esm3();
(function(H2Code2) {
    H2Code2[H2Code2["PROTOCOL_ERROR"] = 1] = "PROTOCOL_ERROR";
    H2Code2[H2Code2["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    H2Code2[H2Code2["FLOW_CONTROL_ERROR"] = 3] = "FLOW_CONTROL_ERROR";
    H2Code2[H2Code2["SETTINGS_TIMEOUT"] = 4] = "SETTINGS_TIMEOUT";
    H2Code2[H2Code2["STREAM_CLOSED"] = 5] = "STREAM_CLOSED";
    H2Code2[H2Code2["FRAME_SIZE_ERROR"] = 6] = "FRAME_SIZE_ERROR";
    H2Code2[H2Code2["REFUSED_STREAM"] = 7] = "REFUSED_STREAM";
    H2Code2[H2Code2["CANCEL"] = 8] = "CANCEL";
    H2Code2[H2Code2["COMPRESSION_ERROR"] = 9] = "COMPRESSION_ERROR";
    H2Code2[H2Code2["CONNECT_ERROR"] = 10] = "CONNECT_ERROR";
    H2Code2[H2Code2["ENHANCE_YOUR_CALM"] = 11] = "ENHANCE_YOUR_CALM";
    H2Code2[H2Code2["INADEQUATE_SECURITY"] = 12] = "INADEQUATE_SECURITY";
    H2Code2[H2Code2["HTTP_1_1_REQUIRED"] = 13] = "HTTP_1_1_REQUIRED";
})(H2Code || (H2Code = {}));

}
