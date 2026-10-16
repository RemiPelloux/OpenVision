import { init_transcript_location } from "./transcript-location.js";
import { planFilePath, renderTranscript, todoUpdateTag, unwrapPlanContent } from "../../mcp_sandbox_policy_exports.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var SUMMARIZERS, BLOCK_SEPARATOR, BLOCK_RENDERERS;
export { BLOCK_RENDERERS, BLOCK_SEPARATOR, SUMMARIZERS };
var __wakaru_init_durable_blocks_initialized = false;
export function init_durable_blocks() {
if (__wakaru_init_durable_blocks_initialized) return;
__wakaru_init_durable_blocks_initialized = true;
"use strict";
init_dist27();
init_transcript_location();
SUMMARIZERS = {
    external: {
        leading: [],
        trailing: [
            "plan",
            "transcript",
            "mode-prompt",
            "custom-mode",
            "project-root",
            "automation-trigger",
            "todos",
            "active-subscriptions",
            "skills"
        ]
    },
    "self-summary": {
        leading: [
            "mode-prompt",
            "custom-mode",
            "project-root"
        ],
        trailing: [
            "transcript",
            "todos",
            "automation-trigger",
            "active-subscriptions",
            "skills"
        ]
    },
    "openai-compaction": {
        leading: [
            "mode-prompt",
            "custom-mode",
            "project-root"
        ],
        trailing: [
            "todos",
            "automation-trigger",
            "active-subscriptions",
            "skills",
            "transcript"
        ]
    },
    "anthropic-compaction": {
        leading: [
            "mode-prompt",
            "custom-mode",
            "project-root"
        ],
        trailing: [
            "transcript",
            "todos",
            "automation-trigger",
            "active-subscriptions",
            "skills"
        ]
    },
    "xai-compaction": {
        leading: [],
        trailing: [
            "plan",
            "mode-prompt",
            "custom-mode",
            "project-root",
            "todos",
            "automation-trigger",
            "active-subscriptions",
            "skills",
            "transcript"
        ]
    }
};
BLOCK_SEPARATOR = "\n\n";
BLOCK_RENDERERS = {
    "mode-prompt": {
        render: (enrichments)=>enrichments.modePrompt
    },
    "custom-mode": {
        render: (enrichments)=>enrichments.customModeSkillBlock
    },
    "project-root": {
        render: (enrichments)=>enrichments.projectRootPrompt
    },
    plan: {
        render: (enrichments)=>{
            if (!enrichments.currentPlan) {
                return void 0;
            }
            const content = unwrapPlanContent(enrichments.currentPlan);
            if (content === void 0) {
                return void 0;
            }
            const instruction = "The below plan was previously created in this session. If you are still in plan mode, continue to iterate on the plan with the user given the rest of your context on the current conversation. Otherwise, if there are remaining relevant todos, you should continue to implement them according to the plan.";
            return `10. Current plan mode progress:
   ${instruction}

<file_contents path="${planFilePath(enrichments.currentPlan)}" isFullFile="true">
${content}
</file_contents>`;
        },
        overrides: {
            "xai-compaction": (enrichments)=>{
                if (!enrichments.currentPlan) {
                    return void 0;
                }
                const content = unwrapPlanContent(enrichments.currentPlan);
                return content === void 0 ? void 0 : `<current_plan>
${content}
</current_plan>`;
            }
        }
    },
    transcript: {
        render: (enrichments, context2)=>context2.includeTranscript !== false && enrichments.agentTranscriptsFolder ? renderTranscript(enrichments.agentTranscriptsFolder, enrichments.conversationId, true) : void 0,
        overrides: {
            external: (enrichments, context2)=>context2.includeTranscript !== false && enrichments.agentTranscriptsFolder ? renderTranscript(enrichments.agentTranscriptsFolder, enrichments.conversationId, false) : void 0
        }
    },
    "automation-trigger": {
        render: (enrichments)=>enrichments.automationTriggerContext ? `NOTE: This is an automation run. The original trigger info that started this session:
${enrichments.automationTriggerContext}` : void 0,
        overrides: {
            external: (enrichments)=>enrichments.automationTriggerContext ? `12. Automation trigger info (this is the original trigger that started this agent):

${enrichments.automationTriggerContext}` : void 0,
            "xai-compaction": (enrichments)=>enrichments.automationTriggerContext
        }
    },
    todos: {
        render: (enrichments)=>enrichments.todoContent ? `NOTE: There was an active todo list in the conversation. Here is the latest update before summarization:
${todoUpdateTag(enrichments.todoContent)}` : void 0,
        overrides: {
            "xai-compaction": (enrichments)=>enrichments.todoContent ? todoUpdateTag(enrichments.todoContent) : void 0
        }
    },
    "active-subscriptions": {
        render: (enrichments)=>enrichments.activeSubscriptionsContext
    },
    skills: {
        render: (enrichments)=>enrichments.skillBlocks.length > 0 ? enrichments.skillBlocks.join(BLOCK_SEPARATOR) : void 0
    }
};

}
