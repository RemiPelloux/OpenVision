import { init_dist10 } from "../../../../node_modules/.pnpm/smol-toml@1.7.1/node_modules/smol-toml/dist/index.js";
var PrivateInferenceConfigError, PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES, SHORTHAND_ENV_VARS, RESPONSES_API_BACKEND, REJECTED_GATEWAY_KEYS, HELPER_TIMEOUT_SECS_MIN, HELPER_TIMEOUT_SECS_MAX, GRAMMAR_HINT;
export { GRAMMAR_HINT, HELPER_TIMEOUT_SECS_MAX, HELPER_TIMEOUT_SECS_MIN, PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES, PrivateInferenceConfigError, REJECTED_GATEWAY_KEYS, RESPONSES_API_BACKEND, SHORTHAND_ENV_VARS };
var __wakaru_init_private_inference_config_initialized = false;
export function init_private_inference_config() {
if (__wakaru_init_private_inference_config_initialized) return;
__wakaru_init_private_inference_config_initialized = true;
"use strict";
init_dist10();
PrivateInferenceConfigError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "PrivateInferenceConfigError";
    }
};
PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES = [
    "CURSOR_PRIVATE_INFERENCE_API_KEY",
    "CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER"
];
SHORTHAND_ENV_VARS = [
    "CURSOR_PRIVATE_INFERENCE_BASE_URL",
    "CURSOR_PRIVATE_INFERENCE_MODEL",
    ...PRIVATE_INFERENCE_CREDENTIAL_ENV_NAMES,
    "CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT",
    "CURSOR_PRIVATE_INFERENCE_API_SHAPE"
];
RESPONSES_API_BACKEND = "responses";
REJECTED_GATEWAY_KEYS = [
    {
        key: "api_key",
        reason: "secrets don't belong in the file; use env_key (an environment variable name) or [auth] auth_provider_command (an executable that prints the key)"
    },
    {
        key: "query_params",
        reason: "not supported on the private path yet"
    },
    {
        key: "env_http_headers",
        reason: "not supported on the private path yet"
    }
];
HELPER_TIMEOUT_SECS_MIN = 1;
HELPER_TIMEOUT_SECS_MAX = 600;
GRAMMAR_HINT = 'private inference reads a Grok Build config.toml: one [model.<key>] table per model and [models] default = "<key>"';

}
