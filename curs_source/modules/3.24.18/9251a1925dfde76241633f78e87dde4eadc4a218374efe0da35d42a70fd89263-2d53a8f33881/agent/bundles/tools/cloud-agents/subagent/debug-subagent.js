import { init_debug } from "../../../prompts/subagent/debug.js";
import { SubagentResumeMode, init_types13 } from "../../core/subagent/types.js";
import { DebugSubagentSystemPrompt, renderContent } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist32 } from "../../../../../prompt-jsx/dist/index.js";
import { SubagentType, SubagentTypeDebug, init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var DEBUG_SUBAGENT_RESULT_SUFFIX, DEBUG_SUBAGENT_CONFIG;
export { DEBUG_SUBAGENT_CONFIG, DEBUG_SUBAGENT_RESULT_SUFFIX };
var __wakaru_init_debug_subagent_initialized = false;
export function init_debug_subagent() {
if (__wakaru_init_debug_subagent_initialized) return;
__wakaru_init_debug_subagent_initialized = true;
"use strict";
init_dist32();
init_subagents_pb();
init_debug();
init_types13();
DEBUG_SUBAGENT_RESULT_SUFFIX = `The debug subagent has finished.
- After reproducing the bug: "Issue reproduced, please proceed. <additional notes>"
- To clean up debug logs: "<The issue has been fixed.> Please clean up the instrumentation."`;
DEBUG_SUBAGENT_CONFIG = {
    subagent_type: new SubagentType({
        type: {
            case: "debug",
            value: new SubagentTypeDebug()
        }
    }),
    description: "Debug specialist that uses hypothesis-driven investigation with instrumentation logs. Use when investigating reproducible bugs with non-obvious root causes. The subagent will instrument code and provide reproduction steps. After reproduction, it will analyze logs, and repeat until the root cause is found and fixed. This subagent is stateful and auto-resumes from previous context.",
    preserveTaskTool: false,
    systemReminder: ()=>renderContent(DebugSubagentSystemPrompt()),
    resumeModeOverride: SubagentResumeMode.LAST_AGENT_SAME_TYPE,
    resultSuffix: DEBUG_SUBAGENT_RESULT_SUFFIX
};

}
