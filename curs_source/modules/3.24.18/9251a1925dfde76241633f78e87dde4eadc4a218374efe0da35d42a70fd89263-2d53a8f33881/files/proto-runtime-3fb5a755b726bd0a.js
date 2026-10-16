import { init_binary_format } from "./binary-format.js";
import { init_enum } from "./enum.js";
import { init_extensions } from "./extensions.js";
import { init_json_format } from "./json-format.js";
import { init_message_type } from "./message-type.js";
import { init_util_common } from "./util-common.js";
var __wakaru_init_proto_runtime_initialized = false;
export function init_proto_runtime() {
if (__wakaru_init_proto_runtime_initialized) return;
__wakaru_init_proto_runtime_initialized = true;
init_enum();
init_message_type();
init_extensions();
init_json_format();
init_binary_format();
init_util_common();

}
