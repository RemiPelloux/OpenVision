import { init_config_from_env } from "./config-from-env.js";
import { init_credential_provider } from "./credential-provider.js";
var __wakaru_init_minter_initialized = false;
export function init_minter() {
if (__wakaru_init_minter_initialized) return;
__wakaru_init_minter_initialized = true;
"use strict";
init_config_from_env();
init_credential_provider();

}
