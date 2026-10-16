import { init_diff_tab_git_action_prompt } from "./diff-tab-git-action-prompt.js";
import { init_multitask_action_prompt } from "./multitask-action-prompt.js";
import { init_task_tool_name } from "./tools/task-tool-name.js";
var __wakaru_init_simulated_message_prompts_initialized = false;
export function init_simulated_message_prompts() {
if (__wakaru_init_simulated_message_prompts_initialized) return;
__wakaru_init_simulated_message_prompts_initialized = true;
"use strict";
init_diff_tab_git_action_prompt();
init_multitask_action_prompt();
init_task_tool_name();

}
