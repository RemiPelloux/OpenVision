var import_node_child_process17, SUCCESS_FLUSH_GRACE_MS, LlmGatewayCredentialError, MAX_BUFFERED_STDERR_BYTES;
export { LlmGatewayCredentialError, MAX_BUFFERED_STDERR_BYTES, SUCCESS_FLUSH_GRACE_MS, import_node_child_process17 };
var __wakaru_init_credential_helper_initialized = false;
export function init_credential_helper() {
if (__wakaru_init_credential_helper_initialized) return;
__wakaru_init_credential_helper_initialized = true;
"use strict";
import_node_child_process17 = require("node:child_process");
SUCCESS_FLUSH_GRACE_MS = 250;
LlmGatewayCredentialError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "LlmGatewayCredentialError";
    }
};
MAX_BUFFERED_STDERR_BYTES = 8 * 1024;

}
