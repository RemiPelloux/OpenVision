import { init_async_ask_question_completion_action_handler } from "./async-ask-question-completion-action-handler.js";
import { init_background_shell_action_handler } from "./background-shell-action-handler.js";
import { init_background_subagent_action_handler } from "./background-subagent-action-handler.js";
import { init_background_task_completion_action_handler } from "./background-task-completion-action-handler.js";
import { init_cancel_action_handler } from "./cancel-action-handler.js";
import { init_common12 } from "./common.js";
import { init_execute_plan_action_handler } from "./execute-plan-action-handler.js";
import { init_goal_continuation_action_handler } from "./goal-continuation-action-handler.js";
import { init_shell_command_action_handler } from "./shell-command-action-handler.js";
import { init_subscription_notification_action_handler } from "./subscription-notification-action-handler.js";
import { init_summarize_action_handler } from "./summarize-action-handler.js";
import { init_resume_action_handler } from "./user-message-action/resume-action-handler.js";
import { init_user_message_action_handler } from "./user-message-action/user-message-action-handler.js";
var __wakaru_init_actions_initialized = false;
export function init_actions() {
if (__wakaru_init_actions_initialized) return;
__wakaru_init_actions_initialized = true;
"use strict";
init_async_ask_question_completion_action_handler();
init_background_shell_action_handler();
init_background_subagent_action_handler();
init_background_task_completion_action_handler();
init_cancel_action_handler();
init_common12();
init_execute_plan_action_handler();
init_goal_continuation_action_handler();
init_shell_command_action_handler();
init_subscription_notification_action_handler();
init_summarize_action_handler();
init_resume_action_handler();
init_user_message_action_handler();

}
