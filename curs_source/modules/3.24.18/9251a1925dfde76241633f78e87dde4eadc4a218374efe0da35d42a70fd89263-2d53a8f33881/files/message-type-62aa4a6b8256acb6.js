import { init_message } from "../message.js";
var __wakaru_init_message_type_initialized = false;
export function init_message_type() {
if (__wakaru_init_message_type_initialized) return;
__wakaru_init_message_type_initialized = true;
init_message();

}
