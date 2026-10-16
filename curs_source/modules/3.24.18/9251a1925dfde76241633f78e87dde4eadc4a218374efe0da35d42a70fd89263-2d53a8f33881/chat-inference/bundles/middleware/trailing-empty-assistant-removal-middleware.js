import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { BaseMiddleware, init_base3 } from "../base.js";
import { init_dist } from "../../../context/dist/index.js";
import { removeTrailingEmptyAssistantMessages } from "../../../mcp_sandbox_policy_exports.js";
var logger41, TrailingEmptyAssistantRemovalMiddleware, createTrailingEmptyAssistantRemovalMiddleware, trailingEmptyAssistantRemovalMiddleware;
export { TrailingEmptyAssistantRemovalMiddleware, createTrailingEmptyAssistantRemovalMiddleware, logger41, trailingEmptyAssistantRemovalMiddleware };
var __wakaru_init_trailing_empty_assistant_removal_middleware_initialized = false;
export function init_trailing_empty_assistant_removal_middleware() {
if (__wakaru_init_trailing_empty_assistant_removal_middleware_initialized) return;
__wakaru_init_trailing_empty_assistant_removal_middleware_initialized = true;
"use strict";
init_dist();
init_base3();
logger41 = createLogger("@anysphere/chat-inference/trailing-empty-assistant-removal-middleware");
TrailingEmptyAssistantRemovalMiddleware = class extends BaseMiddleware {
    stream(ctx, invocationId, tools, options2) {
        const messages = this.innerExecutor.getMessages();
        const { cleanedMessages, removedMessageCount } = removeTrailingEmptyAssistantMessages(messages);
        if (removedMessageCount > 0) {
            logger41.info(ctx, "[trailing-empty-assistant-removal] removing empty assistant message(s) before stream", {
                messageCount: messages.length,
                removedMessageCount
            });
            this.innerExecutor.clearMessages();
            if (cleanedMessages.length > 0) {
                this.innerExecutor.appendMessages(cleanedMessages);
            }
        }
        return this.innerExecutor.stream(ctx, invocationId, tools, options2);
    }
};
createTrailingEmptyAssistantRemovalMiddleware = ()=>{
    return (executor)=>new TrailingEmptyAssistantRemovalMiddleware(executor);
};
trailingEmptyAssistantRemovalMiddleware = createTrailingEmptyAssistantRemovalMiddleware();

}
