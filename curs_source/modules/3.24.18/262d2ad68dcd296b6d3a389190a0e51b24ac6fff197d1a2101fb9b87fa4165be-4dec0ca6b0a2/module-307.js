"use strict";
require.d(exports, {
    af: ()=>m,
    Qu: ()=>d,
    _E: ()=>n,
    Mw: ()=>h
});
const n = {
    beforeShellExecution: "beforeShellExecution",
    beforeMCPExecution: "beforeMCPExecution",
    afterShellExecution: "afterShellExecution",
    afterMCPExecution: "afterMCPExecution",
    beforeReadFile: "beforeReadFile",
    afterFileEdit: "afterFileEdit",
    beforeTabFileRead: "beforeTabFileRead",
    afterTabFileEdit: "afterTabFileEdit",
    stop: "stop",
    beforeSubmitPrompt: "beforeSubmitPrompt",
    afterAgentResponse: "afterAgentResponse",
    afterAgentThought: "afterAgentThought",
    sessionStart: "sessionStart",
    sessionEnd: "sessionEnd",
    preCompact: "preCompact",
    subagentStart: "subagentStart",
    subagentStop: "subagentStop",
    preToolUse: "preToolUse",
    postToolUse: "postToolUse",
    postToolUseFailure: "postToolUseFailure",
    workspaceOpen: "workspaceOpen"
}, o = {
    PreToolUse: n.preToolUse,
    PermissionRequest: null,
    PostToolUse: n.postToolUse,
    UserPromptSubmit: n.beforeSubmitPrompt,
    Stop: n.stop,
    SubagentStop: n.subagentStop,
    SessionStart: n.sessionStart,
    SessionEnd: n.sessionEnd,
    PreCompact: n.preCompact,
    Notification: null
};
Object.fromEntries(Object.entries(o).filter((e)=>null !== e[1]).map(([e, t])=>[
        t,
        e
    ]));
const s = (e)=>"string" == typeof e, i = (e)=>null !== e && "object" == typeof e && !Array.isArray(e), a = (e, t = [])=>({
        isValid: e,
        errors: t
    });
function l(e, t, r) {
    void 0 === e || s(e) || r.push(`${t} must be a string if provided`);
}
const c = (e)=>{
    const t = [];
    return i(e) ? a(!0) : (t.push("Expected an object"), a(!1, t));
}, u = (e)=>{
    const t = [], r = c(e);
    if (!r.isValid) return r;
    if (void 0 !== e.permission) {
        const r = [
            "allow",
            "deny",
            "ask"
        ];
        r.includes(e.permission) || t.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`);
    }
    return void 0 !== e.user_message && "string" != typeof e.user_message && t.push("Invalid user_message value. Expected a string if provided"), void 0 !== e.agent_message && "string" != typeof e.agent_message && t.push("Invalid agent_message value. Expected a string if provided"), a(0 === t.length, t);
};
const d = new Set([
    n.sessionStart,
    n.beforeSubmitPrompt,
    n.preToolUse,
    n.postToolUse,
    n.postToolUseFailure
]);
n.beforeShellExecution, n.beforeMCPExecution, n.afterShellExecution, n.afterMCPExecution, n.beforeReadFile, n.afterFileEdit, n.beforeTabFileRead, n.afterTabFileEdit, n.beforeSubmitPrompt, n.stop, n.afterAgentResponse, n.afterAgentThought, n.sessionStart, n.sessionEnd, n.preCompact, n.subagentStart, n.subagentStop, n.preToolUse, n.postToolUse, n.postToolUseFailure, n.workspaceOpen, n.beforeShellExecution, n.beforeMCPExecution, n.beforeReadFile, n.beforeTabFileRead, n.subagentStart, n.preToolUse, n.workspaceOpen;
const p = /<(\/?)system_reminder>/gi;
function h(e) {
    return e.replace(p, (e, t)=>`<${t}system_reminder_>`);
}
const m = [
    "stdin",
    "argv_base64",
    "argv_heredoc",
    "windows_temp_file",
    "prompt"
];
