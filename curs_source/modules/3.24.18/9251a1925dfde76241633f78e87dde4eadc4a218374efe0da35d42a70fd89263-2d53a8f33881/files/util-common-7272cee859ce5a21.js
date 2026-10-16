import { init_is_message } from "../is-message.js";
import { init_enum } from "./enum.js";
import { init_scalars } from "./scalars.js";
import { init_scalar } from "../scalar.js";
var __wakaru_init_util_common_initialized = false;
export function init_util_common() {
if (__wakaru_init_util_common_initialized) return;
__wakaru_init_util_common_initialized = true;
init_enum();
init_scalars();
init_scalar();
init_is_message();

}
