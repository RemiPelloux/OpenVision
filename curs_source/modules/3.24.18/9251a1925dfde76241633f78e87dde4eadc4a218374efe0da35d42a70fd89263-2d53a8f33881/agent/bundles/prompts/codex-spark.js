import { init_background_setup_status } from "./cloud/background-setup-status.js";
import { init_cloud_environment_setup } from "./cloud/cloud-environment-setup.js";
import { init_shared2 } from "./shared.js";
import { init_synthesis } from "./subagent/synthesis.js";
import { init_environment_setup_source } from "../utils/environment-setup-source.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var __wakaru_init_codex_spark_initialized = false;
export function init_codex_spark() {
if (__wakaru_init_codex_spark_initialized) return;
__wakaru_init_codex_spark_initialized = true;
"use strict";
init_jsx_runtime();
init_environment_setup_source();
init_background_setup_status();
init_cloud_environment_setup();
init_shared2();
init_synthesis();

}
