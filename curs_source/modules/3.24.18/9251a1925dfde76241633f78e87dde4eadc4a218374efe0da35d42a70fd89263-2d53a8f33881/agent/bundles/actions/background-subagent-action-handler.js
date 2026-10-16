import { NoOpSideChannelActionHandler, init_background_shell_action_handler } from "./background-shell-action-handler.js";
var BackgroundSubagentActionHandler;
export { BackgroundSubagentActionHandler };
var __wakaru_init_background_subagent_action_handler_initialized = false;
export function init_background_subagent_action_handler() {
if (__wakaru_init_background_subagent_action_handler_initialized) return;
__wakaru_init_background_subagent_action_handler_initialized = true;
"use strict";
init_background_shell_action_handler();
BackgroundSubagentActionHandler = class extends NoOpSideChannelActionHandler {
};

}
