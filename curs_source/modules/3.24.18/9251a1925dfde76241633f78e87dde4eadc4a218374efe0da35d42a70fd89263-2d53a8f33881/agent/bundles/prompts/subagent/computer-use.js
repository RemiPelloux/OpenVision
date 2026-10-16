import { init_cloud_agent2 } from "../cloud-agent.js";
import { init_shared2 } from "../shared.js";
import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_computer_use6_initialized = false;
export function init_computer_use6() {
if (__wakaru_init_computer_use6_initialized) return;
__wakaru_init_computer_use6_initialized = true;
"use strict";
init_jsx_runtime();
init_cloud_agent2();
init_shared2();

}
