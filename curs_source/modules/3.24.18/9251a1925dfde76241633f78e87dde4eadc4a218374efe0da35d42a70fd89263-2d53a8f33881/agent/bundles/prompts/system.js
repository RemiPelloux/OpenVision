import { init_platform_communication_tools } from "../automations/platform-communication-tools.js";
import { init_openai_codex_cloud2, openAICodexCloudSystemPrompt } from "../configs/openai-codex-cloud.js";
import { init_cloud_meta_agent } from "./cloud-meta-agent/index.js";
import { init_codex_spark } from "./codex-spark.js";
import { init_codex } from "./codex.js";
import { init_default2 } from "./default.js";
import { init_gpt5 } from "./gpt5.js";
import { init_computer_use6 } from "./subagent/computer-use.js";
import { AgentType, init_agent_config } from "../utils/agent-config.js";
import { CodexSparkSystemPromptComponent, CodexSystemPromptComponent, ComputerUseSubagentSystemPromptComponent, DefaultSystemPromptComponent, Gpt5SystemPromptComponent, NamedAgentHomeSystemPrompt, extractToolInfo, isNamedAgentHomePromptSession, jsx, renderContent } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
var systemPromptGenerator;
export { systemPromptGenerator };
var __wakaru_init_system_initialized = false;
export function init_system() {
if (__wakaru_init_system_initialized) return;
__wakaru_init_system_initialized = true;
"use strict";
init_jsx_runtime();
init_dist32();
init_platform_communication_tools();
init_openai_codex_cloud2();
init_agent_config();
init_cloud_meta_agent();
init_codex();
init_codex_spark();
init_default2();
init_gpt5();
init_computer_use6();
systemPromptGenerator = (props, toolSetHandle)=>{
    const isNamedAgentHome = isNamedAgentHomePromptSession(props);
    const promptProps = props.useLocalAgentPrompting === true ? {
        ...props,
        agentType: AgentType.IDE,
        backgroundAgentSource: isNamedAgentHome ? props.backgroundAgentSource : void 0,
        enableCloudTesting: false
    } : props.useProjectCoordinatorPrompting === true ? ({
        ...props,
        enableCloudTesting: false
    }) : props;
    const toolInfo = extractToolInfo(toolSetHandle);
    if (isNamedAgentHome) {
        return renderContent(jsx(NamedAgentHomeSystemPrompt, {
            agentName: props.namedAgentName
        }));
    }
    if (promptProps.modelInfo.isGpt53CodexSpark) {
        return renderContent(jsx(CodexSparkSystemPromptComponent, {
            props: {
                ...promptProps,
                toolInfo
            }
        }));
    } else if (promptProps.modelInfo.isGpt5) {
        return renderContent(jsx(Gpt5SystemPromptComponent, {
            props: {
                ...promptProps,
                toolInfo
            }
        }));
    } else if (promptProps.modelInfo.isCodexFamily || promptProps.modelInfo.isGpt55 === true || promptProps.modelInfo.isGpt56 === true) {
        if (promptProps.agentType === AgentType.BACKGROUND) {
            return openAICodexCloudSystemPrompt({
                ...promptProps,
                toolInfo
            });
        }
        return renderContent(jsx(CodexSystemPromptComponent, {
            props: {
                ...promptProps,
                toolInfo
            }
        }));
    }
    if (promptProps.subagentType?.type?.case === "computerUse") {
        return renderContent(jsx(ComputerUseSubagentSystemPromptComponent, {
            props: {
                ...promptProps,
                toolInfo
            }
        }));
    }
    return renderContent(jsx(DefaultSystemPromptComponent, {
        props: {
            ...promptProps,
            toolInfo
        }
    }));
};

}
