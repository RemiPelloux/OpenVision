import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_computer_use2 } from "./computer-use.js";
import { init_display } from "./display.js";
var logger19;
export { logger19 };
var __wakaru_init_lazy_computer_use_initialized = false;
export function init_lazy_computer_use() {
if (__wakaru_init_lazy_computer_use_initialized) return;
__wakaru_init_lazy_computer_use_initialized = true;
"use strict";
init_dist();
init_computer_use2();
init_display();
logger19 = createLogger("computer-use-lazy");

}
