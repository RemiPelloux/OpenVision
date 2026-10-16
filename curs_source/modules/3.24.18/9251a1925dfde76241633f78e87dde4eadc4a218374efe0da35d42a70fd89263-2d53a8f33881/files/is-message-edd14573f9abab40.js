import { init_message } from "./message.js";
var __wakaru_init_is_message_initialized = false;
export function init_is_message() {
if (__wakaru_init_is_message_initialized) return;
__wakaru_init_is_message_initialized = true;
init_message();

}
