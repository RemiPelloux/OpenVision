import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { BaseMiddleware } from "../../chat-inference/dist/base.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { init_dist } from "../../context/dist/index.js";
import { countConsecutiveToolCallsAndResultsWithoutAssistantText, createProgressUpdateReminderMessage, isProgressUpdateReminderMessage } from "../../mcp_sandbox_policy_exports.js";
var logger86, DEFAULT_PROGRESS_UPDATE_REMINDER_THRESHOLD, PROGRESS_UPDATE_REMINDER_MESSAGE, THINKING_PART_TYPES, ProgressUpdateReminderMiddleware;
export { DEFAULT_PROGRESS_UPDATE_REMINDER_THRESHOLD, PROGRESS_UPDATE_REMINDER_MESSAGE, ProgressUpdateReminderMiddleware, THINKING_PART_TYPES, logger86 };
var __wakaru_init_progress_update_reminder_middleware_initialized = false;
export function init_progress_update_reminder_middleware() {
if (__wakaru_init_progress_update_reminder_middleware_initialized) return;
__wakaru_init_progress_update_reminder_middleware_initialized = true;
"use strict";
init_dist26();
init_dist();
logger86 = createLogger("@anysphere/agent:progress-update-reminder-middleware");
DEFAULT_PROGRESS_UPDATE_REMINDER_THRESHOLD = 8;
PROGRESS_UPDATE_REMINDER_MESSAGE = `<system_reminder>
  IMPORTANT: Provide a status update of what you are doing.
</system_reminder>`;
THINKING_PART_TYPES = new Set([
    "reasoning",
    "redacted-reasoning",
    "reasoning-signature"
]);
ProgressUpdateReminderMiddleware = class extends BaseMiddleware {
    constructor(innerExecutor, threshold){
        super(innerExecutor);
        this.threshold = threshold;
    }
    stream(ctx, invocationId, tools, options2) {
        const messages = this.innerExecutor.getMessages();
        const lastMessage = messages.at(-1);
        if (lastMessage !== void 0 && isProgressUpdateReminderMessage(lastMessage)) {
            return this.innerExecutor.stream(ctx, invocationId, tools, options2);
        }
        const consecutiveToolCallsAndResults = countConsecutiveToolCallsAndResultsWithoutAssistantText(messages);
        if (consecutiveToolCallsAndResults > this.threshold) {
            logger86.info(ctx, "[progress-update-reminder] injecting progress update reminder", {
                consecutiveToolCallsAndResults,
                threshold: this.threshold,
                messageCount: messages.length
            });
            this.innerExecutor.appendMessages(createProgressUpdateReminderMessage());
        }
        return this.innerExecutor.stream(ctx, invocationId, tools, options2);
    }
};

}
