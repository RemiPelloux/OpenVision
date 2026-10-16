import { init_simple_exec_manager } from "./simple-exec-manager.js";
import { fromRedactedExecClientMessage, toRedactedExecServerMessage } from "../../mcp_sandbox_policy_exports.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var RedactedToPlainExecManagerAdapter;
export { RedactedToPlainExecManagerAdapter };
var __wakaru_init_server4_initialized = false;
export function init_server4() {
if (__wakaru_init_server4_initialized) return;
__wakaru_init_server4_initialized = true;
"use strict";
init_privacy_mode_pb();
init_agent_v1();
init_dist27();
init_simple_exec_manager();
RedactedToPlainExecManagerAdapter = class {
    constructor(redacted, privacyMode = PrivacyMode.UNSPECIFIED){
        this.redacted = redacted;
        this.privacyMode = privacyMode;
    }
    async *createExecInstance(ctx, argsSerializer) {
        const redactedSerializer = (id)=>toRedactedExecServerMessage(argsSerializer(id), this.privacyMode);
        for await (const msg of this.redacted.createExecInstance(ctx, redactedSerializer)){
            yield fromRedactedExecClientMessage(msg, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        }
    }
};

}
