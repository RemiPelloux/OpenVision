import { CWi, Lu } from "./hook-step.ts";
import { x } from "./tslib.es6.js";
var TWi, oMd, aMd, cMd, lMd;
export { TWi, aMd, cMd, lMd, oMd };
var __wakaru_Xro_initialized = false;
export function Xro() {
if (__wakaru_Xro_initialized) return;
__wakaru_Xro_initialized = true;
"use strict";
x(), CWi(), TWi = {
    PreToolUse: Lu.preToolUse,
    PermissionRequest: null,
    PostToolUse: Lu.postToolUse,
    UserPromptSubmit: Lu.beforeSubmitPrompt,
    Stop: Lu.stop,
    SubagentStop: Lu.subagentStop,
    SessionStart: Lu.sessionStart,
    SessionEnd: Lu.sessionEnd,
    PreCompact: Lu.preCompact,
    Notification: null
}, oMd = Object.fromEntries(Object.entries(TWi).filter((e)=>e[1] !== null).map(([e, t])=>[
        t,
        e
    ])), aMd = {
    Bash: "Shell",
    Read: "Read",
    Write: "Write",
    Edit: "Write",
    Glob: null,
    Grep: "Grep",
    WebFetch: "WebFetch",
    WebSearch: "WebSearch",
    Task: "Task"
}, cMd = [
    "Glob"
], lMd = [
    "Notification",
    "PermissionRequest"
];

}
