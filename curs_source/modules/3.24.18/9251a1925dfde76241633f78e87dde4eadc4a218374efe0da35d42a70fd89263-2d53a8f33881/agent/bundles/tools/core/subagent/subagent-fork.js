import { init_dist29 } from "../../../../../agent-summarization/dist/index.js";
import { init_synthetic_user_message } from "../../../actions/user-message-action/synthetic-user-message.js";
import { init_prompt_xml_escape } from "../../../utils/prompt-xml-escape.js";
var USER_QUERY_OPEN, USER_QUERY_CLOSE, SYSTEM_REMINDER_PATTERN;
export { SYSTEM_REMINDER_PATTERN, USER_QUERY_CLOSE, USER_QUERY_OPEN };
var __wakaru_init_subagent_fork_initialized = false;
export function init_subagent_fork() {
if (__wakaru_init_subagent_fork_initialized) return;
__wakaru_init_subagent_fork_initialized = true;
"use strict";
init_dist29();
init_synthetic_user_message();
init_prompt_xml_escape();
USER_QUERY_OPEN = "<user_query>";
USER_QUERY_CLOSE = "</user_query>";
SYSTEM_REMINDER_PATTERN = /<system_reminder>[\s\S]*?<\/system_reminder>/g;

}
