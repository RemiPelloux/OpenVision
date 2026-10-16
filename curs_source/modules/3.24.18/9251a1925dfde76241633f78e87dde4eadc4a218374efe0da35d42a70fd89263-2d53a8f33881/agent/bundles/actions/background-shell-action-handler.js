var NoOpSideChannelActionHandler, BackgroundShellActionHandler;
export { BackgroundShellActionHandler, NoOpSideChannelActionHandler };
var __wakaru_init_background_shell_action_handler_initialized = false;
export function init_background_shell_action_handler() {
if (__wakaru_init_background_shell_action_handler_initialized) return;
__wakaru_init_background_shell_action_handler_initialized = true;
"use strict";
NoOpSideChannelActionHandler = class {
    async handle(ctx, _action, _rootPromptExecutor, stateHandler, _mcpTools, _onStateUpdate) {
        return stateHandler.computeNewStructure(ctx);
    }
    async handleSingleStep(ctx, _action, _rootPromptExecutor, stateHandler, _mcpTools, _onStateUpdate) {
        return {
            state: await stateHandler.computeNewStructure(ctx),
            hasToolCall: false
        };
    }
};
BackgroundShellActionHandler = class extends NoOpSideChannelActionHandler {
};

}
