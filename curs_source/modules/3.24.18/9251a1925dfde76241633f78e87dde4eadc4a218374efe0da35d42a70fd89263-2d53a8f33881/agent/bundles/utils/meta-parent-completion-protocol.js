import { init_prompt_xml_escape } from "./prompt-xml-escape.js";
var META_PARENT_COMPLETION_TAG, META_PARENT_COMPLETION_OPEN_TAG, META_PARENT_COMPLETION_CLOSE_TAG, META_PARENT_COMPLETION_SYSTEM_REMINDER;
export { META_PARENT_COMPLETION_CLOSE_TAG, META_PARENT_COMPLETION_OPEN_TAG, META_PARENT_COMPLETION_SYSTEM_REMINDER, META_PARENT_COMPLETION_TAG };
var __wakaru_init_meta_parent_completion_protocol_initialized = false;
export function init_meta_parent_completion_protocol() {
if (__wakaru_init_meta_parent_completion_protocol_initialized) return;
__wakaru_init_meta_parent_completion_protocol_initialized = true;
"use strict";
init_prompt_xml_escape();
META_PARENT_COMPLETION_TAG = "agent_notification";
META_PARENT_COMPLETION_OPEN_TAG = `<${META_PARENT_COMPLETION_TAG}>`;
META_PARENT_COMPLETION_CLOSE_TAG = `</${META_PARENT_COMPLETION_TAG}>`;
META_PARENT_COMPLETION_SYSTEM_REMINDER = `<system_reminder>
Do not reiterate or repeat the contents of this agent notification to the user unless asked to do so.

Follow your instructions for Handling subagent notifications.
</system_reminder>`;

}
