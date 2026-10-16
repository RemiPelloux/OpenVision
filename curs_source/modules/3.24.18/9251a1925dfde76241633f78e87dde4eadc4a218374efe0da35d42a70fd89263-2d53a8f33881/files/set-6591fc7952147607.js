import { init_errorMessages } from "../errorMessages.js";
import { init_parseDef } from "../parseDef.js";
var __wakaru_init_set_initialized = false;
export function init_set() {
if (__wakaru_init_set_initialized) return;
__wakaru_init_set_initialized = true;
init_errorMessages();
init_parseDef();

}
