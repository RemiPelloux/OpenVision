import { ZKr, dh } from "./hook-step.ts";
import { E } from "./tslib.es6.js";
var QKr, Uym, jym, $ym, Hym;
export { $ym, Hym, QKr, Uym, jym };
var __wakaru_s7a_initialized = false;
export function s7a() {
if (__wakaru_s7a_initialized) return;
__wakaru_s7a_initialized = true;
"use strict";
E(), ZKr(), QKr = {
    PreToolUse: dh.preToolUse,
    PermissionRequest: null,
    PostToolUse: dh.postToolUse,
    UserPromptSubmit: dh.beforeSubmitPrompt,
    Stop: dh.stop,
    SubagentStop: dh.subagentStop,
    SessionStart: dh.sessionStart,
    SessionEnd: dh.sessionEnd,
    PreCompact: dh.preCompact,
    Notification: null
}, Uym = Object.fromEntries(Object.entries(QKr).filter((t)=>t[1] !== null).map(([t, e])=>[
        e,
        t
    ])), jym = {
    Bash: "Shell",
    Read: "Read",
    Write: "Write",
    Edit: "Write",
    Glob: null,
    Grep: "Grep",
    WebFetch: "WebFetch",
    WebSearch: "WebSearch",
    Task: "Task"
}, $ym = [
    "Glob"
], Hym = [
    "Notification",
    "PermissionRequest"
];

}
