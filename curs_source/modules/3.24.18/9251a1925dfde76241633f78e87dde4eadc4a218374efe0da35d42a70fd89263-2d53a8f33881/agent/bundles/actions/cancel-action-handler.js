var CancelActionHandler;
export { CancelActionHandler };
var __wakaru_init_cancel_action_handler_initialized = false;
export function init_cancel_action_handler() {
if (__wakaru_init_cancel_action_handler_initialized) return;
__wakaru_init_cancel_action_handler_initialized = true;
"use strict";
CancelActionHandler = class {
    constructor(config2, resourceAccessor, interactionListener, summarizationHandler, conversationActionReceiver){
        this.config = config2;
        this.resourceAccessor = resourceAccessor;
        this.interactionListener = interactionListener;
        this.summarizationHandler = summarizationHandler;
        this.conversationActionReceiver = conversationActionReceiver;
    }
    async handle(_ctx, _action, _rootPromptExecutor, _stateHandler, _mcpTools, _onStateUpdate) {
        throw new Error("Cancel Conversation action should never be routed directly to runStream!");
    }
};

}
