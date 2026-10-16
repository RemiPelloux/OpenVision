import { init_state } from "../state.js";
import { adaptSubscriptionNotificationAction, delegateOptions } from "../../../mcp_sandbox_policy_exports.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
var SubscriptionNotificationActionHandler;
export { SubscriptionNotificationActionHandler };
var __wakaru_init_subscription_notification_action_handler_initialized = false;
export function init_subscription_notification_action_handler() {
if (__wakaru_init_subscription_notification_action_handler_initialized) return;
__wakaru_init_subscription_notification_action_handler_initialized = true;
"use strict";
init_agent_v1();
init_state();
SubscriptionNotificationActionHandler = class {
    constructor(userMessageActionHandler){
        this.userMessageActionHandler = userMessageActionHandler;
    }
    getUserMessageActionHandler() {
        return this.userMessageActionHandler;
    }
    async handle(ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        return await this.userMessageActionHandler.handle(ctx, adaptSubscriptionNotificationAction(action), rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, delegateOptions(action));
    }
    async handleSingleStep(ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        return await this.userMessageActionHandler.handleSingleStep(ctx, adaptSubscriptionNotificationAction(action), rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, delegateOptions(action));
    }
    async handleModelStep(ctx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        return await this.userMessageActionHandler.handleModelStep(ctx, adaptSubscriptionNotificationAction(action), rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, delegateOptions(action));
    }
};

}
