import { init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
var NoopWebScraperService, NoopDocumentationHydrationService, NoopCommandClassifierService, AgentType, shouldUseExperimentalCloudBehavior, COMPUTER_USE_ELIGIBLE_MODEL_PREFIXES;
export { AgentType, COMPUTER_USE_ELIGIBLE_MODEL_PREFIXES, NoopCommandClassifierService, NoopDocumentationHydrationService, NoopWebScraperService, shouldUseExperimentalCloudBehavior };
var __wakaru_init_agent_config_initialized = false;
export function init_agent_config() {
if (__wakaru_init_agent_config_initialized) return;
__wakaru_init_agent_config_initialized = true;
"use strict";
init_shell_exec_pb();
init_background_composer_pb();
NoopWebScraperService = class {
    async getContentInWebsiteFast(_ctx, _url3) {
        return null;
    }
};
NoopDocumentationHydrationService = class {
    async hydrateDocumentation(_ctx, _documentationIdentifiers, _conversationQuery) {
        return {
            chunks: [],
            customDocNotes: []
        };
    }
};
NoopCommandClassifierService = class {
    async classifyCommand(_ctx, _args) {
        return {
            kind: "classification-failed"
        };
    }
};
(function(AgentType2) {
    AgentType2["IDE"] = "ide";
    AgentType2["CLI"] = "cli";
    AgentType2["BACKGROUND"] = "background";
    AgentType2["BUGBOT"] = "bugbot";
})(AgentType || (AgentType = {}));
shouldUseExperimentalCloudBehavior = (props)=>props.enableCloudTesting === true && props.agentType === AgentType.BACKGROUND;
COMPUTER_USE_ELIGIBLE_MODEL_PREFIXES = [
    "claude-4-sonnet",
    "claude-4.5-sonnet",
    "claude-4.5-haiku",
    "claude-4.5-opus"
];

}
