import { init_cloud_agent2 } from "../cloud-agent.js";
import { init_available_secret_names_list_item } from "./available-secret-names-list-item.js";
import { init_shared2 } from "../shared.js";
import { init_dist2 } from "../../../../constants/dist/index.js";
import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_cloud_environment_setup_initialized = false;
export function init_cloud_environment_setup() {
if (__wakaru_init_cloud_environment_setup_initialized) return;
__wakaru_init_cloud_environment_setup_initialized = true;
"use strict";
init_jsx_runtime();
init_dist2();
init_cloud_agent2();
init_shared2();
init_available_secret_names_list_item();

}
