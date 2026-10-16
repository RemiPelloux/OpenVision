import { HookStep, init_hook_step } from "./hook-step.js";
var CLAUDE_EVENT_TO_CURSOR_STEP, CURSOR_STEP_TO_CLAUDE_EVENT, CLAUDE_TOOL_TO_CURSOR_TOOL, UNSUPPORTED_CLAUDE_TOOLS, UNSUPPORTED_CLAUDE_EVENTS;
export { CLAUDE_EVENT_TO_CURSOR_STEP, CLAUDE_TOOL_TO_CURSOR_TOOL, CURSOR_STEP_TO_CLAUDE_EVENT, UNSUPPORTED_CLAUDE_EVENTS, UNSUPPORTED_CLAUDE_TOOLS };
var __wakaru_init_claude_code_types_initialized = false;
export function init_claude_code_types() {
if (__wakaru_init_claude_code_types_initialized) return;
__wakaru_init_claude_code_types_initialized = true;
"use strict";
init_hook_step();
CLAUDE_EVENT_TO_CURSOR_STEP = {
    PreToolUse: HookStep.preToolUse,
    PermissionRequest: null,
    PostToolUse: HookStep.postToolUse,
    UserPromptSubmit: HookStep.beforeSubmitPrompt,
    Stop: HookStep.stop,
    SubagentStop: HookStep.subagentStop,
    SessionStart: HookStep.sessionStart,
    SessionEnd: HookStep.sessionEnd,
    PreCompact: HookStep.preCompact,
    Notification: null
};
CURSOR_STEP_TO_CLAUDE_EVENT = Object.fromEntries(Object.entries(CLAUDE_EVENT_TO_CURSOR_STEP).filter((entry)=>entry[1] !== null).map(([event, step])=>[
        step,
        event
    ]));
CLAUDE_TOOL_TO_CURSOR_TOOL = {
    Bash: "Shell",
    Read: "Read",
    Write: "Write",
    Edit: "Write",
    Glob: null,
    Grep: "Grep",
    WebFetch: "WebFetch",
    WebSearch: "WebSearch",
    Task: "Task"
};
UNSUPPORTED_CLAUDE_TOOLS = [
    "Glob"
];
UNSUPPORTED_CLAUDE_EVENTS = [
    "Notification",
    "PermissionRequest"
];

}
