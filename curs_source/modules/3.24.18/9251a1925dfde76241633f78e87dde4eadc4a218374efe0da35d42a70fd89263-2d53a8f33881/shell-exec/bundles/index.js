import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { init_hardcoded_policy } from "../../bidi_connect_exports.js";
import { init_bash } from "./bash.js";
import { init_core2 } from "./core.js";
import { init_ignore_mapping } from "./ignore-mapping.js";
import { init_lazy } from "./lazy.js";
import { init_naive } from "./naive.js";
import { init_output_suppression } from "./output-suppression.js";
import { init_powershell } from "./powershell.js";
import { init_ripgrep } from "./ripgrep.js";
import { init_cache_env } from "./sandbox/cache-env.js";
import { init_network_policy_utils } from "./sandbox/network-policy-utils.js";
import { init_policy_loader } from "./sandbox/policy-loader.js";
import { init_policy_merge } from "./sandbox/policy-merge.js";
import { init_sandbox } from "./sandbox/sandbox.js";
import { init_types4 } from "./types.js";
import { init_zsh_light } from "./zsh-light.js";
import { init_zsh } from "./zsh.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_path17, INSECURE_NONE_SANDBOX_POLICY;
export { INSECURE_NONE_SANDBOX_POLICY, import_node_path17 };
var __wakaru_init_dist13_initialized = false;
export function init_dist13() {
if (__wakaru_init_dist13_initialized) return;
__wakaru_init_dist13_initialized = true;
"use strict";
import_node_path17 = __toESM(require("node:path"), 1);
init_dist3();
init_bash();
init_lazy();
init_naive();
init_powershell();
init_types4();
init_zsh();
init_zsh_light();
init_bash();
init_core2();
init_ignore_mapping();
init_naive();
init_output_suppression();
init_powershell();
init_ripgrep();
init_cache_env();
init_hardcoded_policy();
init_network_policy_utils();
init_policy_loader();
init_policy_merge();
init_sandbox();
init_types4();
init_zsh();
INSECURE_NONE_SANDBOX_POLICY = {
    perUser: {
        type: "insecure_none"
    }
};

}
