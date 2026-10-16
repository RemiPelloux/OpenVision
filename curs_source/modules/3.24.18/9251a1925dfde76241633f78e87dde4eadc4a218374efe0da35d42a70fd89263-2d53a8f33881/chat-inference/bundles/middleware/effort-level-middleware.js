import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { BaseMiddleware, init_base3 } from "../base.js";
import { init_user_turn_reminders } from "../user-turn-reminders.js";
import { init_dist } from "../../../context/dist/index.js";
import { appendEffortLevelToMessages, stripEffortInstructionsFromMessages } from "../../../mcp_sandbox_policy_exports.js";
var logger39, EFFORT_LEVEL_VALUES, EFFORT_INSTRUCTION_PATTERN, ComposerEffortLevelMiddleware, createComposerEffortLevelMiddleware;
export { ComposerEffortLevelMiddleware, EFFORT_INSTRUCTION_PATTERN, EFFORT_LEVEL_VALUES, createComposerEffortLevelMiddleware, logger39 };
var __wakaru_init_effort_level_middleware_initialized = false;
export function init_effort_level_middleware() {
if (__wakaru_init_effort_level_middleware_initialized) return;
__wakaru_init_effort_level_middleware_initialized = true;
"use strict";
init_dist();
init_base3();
init_user_turn_reminders();
logger39 = createLogger("@anysphere/chat-inference/effort-level-middleware");
EFFORT_LEVEL_VALUES = {
    low: 11,
    medium: 13,
    high: 15,
    xhigh: 17
};
EFFORT_INSTRUCTION_PATTERN = /\n(?:<system_reminder>)?Apply effort level \S+ when carrying out the user's request\.(?:<\/system_reminder>)?$/;
ComposerEffortLevelMiddleware = class extends BaseMiddleware {
    constructor(innerExecutor, options2){
        super(innerExecutor);
        this.options = options2;
    }
    stream(ctx, invocationId, tools, options2) {
        const originalMessages = this.innerExecutor.getMessages();
        const baseMessages = this.options.persistEffortInstruction ? originalMessages : stripEffortInstructionsFromMessages(originalMessages);
        const modifiedMessages = appendEffortLevelToMessages(baseMessages, this.options.effortLevel);
        logger39.info(ctx, "[effort-level-middleware] applying effort level to stream", {
            effortLevel: this.options.effortLevel,
            messageCount: originalMessages.length,
            persistInstruction: this.options.persistEffortInstruction
        });
        this.innerExecutor.clearMessages();
        this.innerExecutor.appendMessages(modifiedMessages);
        const result = this.innerExecutor.stream(ctx, invocationId, tools, options2);
        return result;
    }
};
createComposerEffortLevelMiddleware = (options2)=>{
    return (executor)=>new ComposerEffortLevelMiddleware(executor, options2);
};

}
