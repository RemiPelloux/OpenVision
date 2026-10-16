"use strict";
require.d(exports, {
    af: ()=>I,
    Qu: ()=>S,
    _E: ()=>n,
    fp: ()=>p,
    bi: ()=>m,
    Qk: ()=>h,
    Mw: ()=>E,
    U4: ()=>A,
    sl: ()=>d,
    RV: ()=>x
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
}, s = {
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
}, o = (Object.fromEntries(Object.entries(s).filter((e)=>null !== e[1]).map(([e, t])=>[
        t,
        e
    ])), {
    Bash: "Shell",
    Read: "Read",
    Write: "Write",
    Edit: "Write",
    Glob: null,
    Grep: "Grep",
    WebFetch: "WebFetch",
    WebSearch: "WebSearch",
    Task: "Task"
}), i = [
    "Glob"
], a = [
    "Notification",
    "PermissionRequest"
], c = {
    warn: ()=>{},
    info: ()=>{}
};
function l(e, t) {
    const r = {
        loop_limit: null,
        failClosed: !1
    };
    return t && "*" !== t && (r.matcher = t), void 0 !== e.timeout && (r.timeout = e.timeout), "prompt" === e.type ? e.prompt ? {
        type: "prompt",
        prompt: e.prompt,
        ...r
    } : null : e.command ? {
        type: "command",
        command: e.command,
        ...r
    } : null;
}
function u(e, t, r = c) {
    const n = [];
    let s;
    if ("PreToolUse" === t || "PostToolUse" === t) {
        const t = function(e, t = c) {
            if (!e || "*" === e) return "*";
            const r = e.split("|"), n = [], s = [];
            for (const e of r){
                const t = e.trim();
                if (t.startsWith("mcp__")) {
                    const e = t.split("__");
                    if (e.length >= 3) {
                        const t = e.slice(2).join("__");
                        n.push(`MCP:${t}`);
                        continue;
                    }
                }
                const r = o[t];
                null !== r ? void 0 !== r ? n.includes(r) || n.push(r) : n.push(t) : i.includes(t) && s.push(`Tool "${t}" is not supported in Cursor and will be ignored`);
            }
            for (const e of s)t.warn(e);
            return 0 === n.length ? null : n.join("|");
        }(e.matcher, r);
        if (null === t) return r.warn(`All tools in matcher "${e.matcher}" are unsupported, skipping hooks`), [];
        s = "*" === t ? void 0 : t;
    } else "SessionStart" === t || "PreCompact" === t ? (e.matcher && "*" !== e.matcher && "" !== e.matcher && ("SessionStart" === t ? [
        "startup",
        "resume",
        "clear",
        "compact"
    ].includes(e.matcher) : [
        "manual",
        "auto"
    ].includes(e.matcher)) && r.warn(`${t} trigger matcher "${e.matcher}" is not supported in Cursor, hooks will fire for all triggers`), s = void 0) : s = void 0;
    for (const t of e.hooks){
        const e = l(t, s);
        e && n.push(e);
    }
    return n;
}
function d(e, t = c) {
    const r = {};
    for (const [n, o] of Object.entries(e)){
        const e = n;
        if (a.includes(e)) {
            t.warn(`Claude Code event "${e}" is not supported in Cursor and will be ignored`);
            continue;
        }
        const i = s[e];
        if (!i) {
            t.warn(`Unknown Claude Code event "${e}", skipping`);
            continue;
        }
        const c = [];
        if (Array.isArray(o)) for (const r of o){
            const n = u(r, e, t);
            c.push(...n);
        }
        else void 0 !== o && t.warn(`Claude Code event "${e}" has invalid value (expected array), skipping`);
        if (c.length > 0) {
            const e = r[i] || [];
            r[i] = [
                ...e,
                ...c
            ];
        }
    }
    return {
        version: 1,
        hooks: r
    };
}
function p(e) {
    if ("object" != typeof e || null === e) return "unknown";
    const t = e, r = "object" == typeof t.hooks && null !== t.hooks ? t.hooks : null;
    if (!r) return "unknown";
    for (const e of Object.values(r)){
        if (!Array.isArray(e) || 0 === e.length) continue;
        const t = e[0];
        if ("object" != typeof t || null === t) continue;
        const r = t;
        if ("hooks" in r && Array.isArray(r.hooks)) return "claude-code";
        if ("command" in r || "prompt" in r || "type" in r) return "cursor";
    }
    return "unknown";
}
function m(e, t) {
    switch(e){
        case "beforeShellExecution":
        case "afterShellExecution":
            return t.command || void 0;
        case "beforeMCPExecution":
        case "afterMCPExecution":
            {
                const e = t;
                return e.tool_name ? `MCP:${e.tool_name}` : void 0;
            }
        case "beforeReadFile":
            return "Read";
        case "afterFileEdit":
            return "Write";
        case "beforeTabFileRead":
            return "TabRead";
        case "afterTabFileEdit":
            return "TabWrite";
        case "beforeSubmitPrompt":
            return "UserPromptSubmit";
        case "stop":
            return "Stop";
        case "afterAgentResponse":
            return "AgentResponse";
        case "afterAgentThought":
            return "AgentThought";
        case "subagentStart":
            return t.subagent_type || void 0;
        case "subagentStop":
            return t.subagent_type || void 0;
        case "preToolUse":
        case "postToolUse":
        case "postToolUseFailure":
            return t.tool_name || void 0;
        default:
            return;
    }
}
function h(e, t) {
    return e.filter((e)=>(function(e, t) {
            if (!e.matcher || "" === e.matcher || "*" === e.matcher) return !0;
            if (void 0 === t) return !0;
            try {
                return new RegExp(e.matcher).test(t);
            } catch  {
                return !0;
            }
        })(e, t));
}
const f = (e)=>"string" == typeof e, g = (e)=>null !== e && "object" == typeof e && !Array.isArray(e), y = (e, t = [])=>({
        isValid: e,
        errors: t
    });
function w(e, t, r) {
    void 0 === e || f(e) || r.push(`${t} must be a string if provided`);
}
const v = (e)=>{
    const t = [];
    return g(e) ? y(!0) : (t.push("Expected an object"), y(!1, t));
}, _ = (e)=>{
    const t = [], r = v(e);
    if (!r.isValid) return r;
    if (void 0 !== e.permission) {
        const r = [
            "allow",
            "deny",
            "ask"
        ];
        r.includes(e.permission) || t.push(`Invalid permission value. Expected one of: ${r.join(", ")}, or undefined`);
    }
    return void 0 !== e.user_message && "string" != typeof e.user_message && t.push("Invalid user_message value. Expected a string if provided"), void 0 !== e.agent_message && "string" != typeof e.agent_message && t.push("Invalid agent_message value. Expected a string if provided"), y(0 === t.length, t);
};
function A(e) {
    const t = e.modelId, r = e.modelParams;
    return {
        ...void 0 !== t && {
            model_id: t
        },
        ...void 0 !== r && r.length > 0 ? {
            model_params: r.map((e)=>({
                    id: e.id,
                    value: e.value
                }))
        } : {}
    };
}
const S = new Set([
    n.sessionStart,
    n.beforeSubmitPrompt,
    n.preToolUse,
    n.postToolUse,
    n.postToolUseFailure
]);
n.beforeShellExecution, n.beforeMCPExecution, n.afterShellExecution, n.afterMCPExecution, n.beforeReadFile, n.afterFileEdit, n.beforeTabFileRead, n.afterTabFileEdit, n.beforeSubmitPrompt, n.stop, n.afterAgentResponse, n.afterAgentThought, n.sessionStart, n.sessionEnd, n.preCompact, n.subagentStart, n.subagentStop, n.preToolUse, n.postToolUse, n.postToolUseFailure, n.workspaceOpen, n.beforeShellExecution, n.beforeMCPExecution, n.beforeReadFile, n.beforeTabFileRead, n.subagentStart, n.preToolUse, n.workspaceOpen;
const b = /<(\/?)system_reminder>/gi;
function E(e) {
    return e.replace(b, (e, t)=>`<${t}system_reminder_>`);
}
const I = [
    "stdin",
    "argv_base64",
    "argv_heredoc",
    "windows_temp_file",
    "prompt"
];
const C = (e)=>{
    const t = [];
    if (!g(e)) return t.push("Hook script must be an object with either a 'command' property (command hook) or 'type: \"prompt\"' with a 'prompt' property (prompt hook)"), y(!1, t);
    const r = e.type;
    return "prompt" === r ? ((e, t)=>{
        f(e.prompt) ? "" === e.prompt.trim() && t.push("Prompt hook 'prompt' property cannot be empty") : t.push("Prompt hook must have a 'prompt' property (string)"), void 0 !== e.model && (f(e.model) ? "" === e.model.trim() && t.push("Prompt hook 'model' cannot be an empty string") : t.push("Prompt hook 'model' must be a string if provided"));
    })(e, t) : "command" === r || void 0 === r ? ((e, t)=>{
        f(e.command) || t.push("Hook script command must be a string");
    })(e, t) : t.push(`Invalid hook type: "${r}". Must be "command", "prompt", or omitted (defaults to "command")`), ((e, t)=>{
        if (void 0 !== e.matcher) if (f(e.matcher)) {
            if ("" !== e.matcher && "*" !== e.matcher) try {
                new RegExp(e.matcher);
            } catch (r) {
                t.push(`Hook script matcher "${e.matcher}" is not a valid regex: ${r?.message ?? String(r)}`);
            }
        } else t.push("Hook script matcher must be a string if provided");
        if (void 0 !== e.timeout && ("number" != typeof e.timeout ? t.push("Hook script timeout must be a number (seconds)") : e.timeout <= 0 ? t.push("Hook script timeout must be a positive number") : e.timeout > 3600 && console.warn(`[hooks] Hook timeout of ${e.timeout}s is very long (>1 hour)`)), void 0 !== e.loop_limit) {
            const r = e.loop_limit;
            null !== r && ("number" != typeof r ? t.push("Hook script loop_limit must be a positive integer or null") : Number.isInteger(r) ? r <= 0 && t.push("Hook script loop_limit must be a positive integer (use null for no limit)") : t.push("Hook script loop_limit must be an integer"));
        }
        void 0 !== e.failClosed && "boolean" != typeof e.failClosed && t.push("Hook script failClosed must be a boolean");
    })(e, t), y(0 === t.length, t);
}, k = (e, t)=>{
    const r = [];
    if (!Array.isArray(e)) return r.push(`${t} must be an array of hook scripts`), y(!1, r);
    for(let n = 0; n < e.length; n++){
        const s = C(e[n]);
        s.isValid || r.push(`${t}[${n}]: ${s.errors.join(", ")}`);
    }
    return y(0 === r.length, r);
}, x = (e)=>{
    const t = [];
    if (!g(e)) return t.push("Hooks config must be an object"), y(!1, t);
    if ("number" != typeof e.version ? t.push("Config version must be a number") : (!Number.isInteger(e.version) || e.version < 1) && t.push("Config version must be a positive integer"), !g(e.hooks)) return t.push("Config hooks must be an object"), y(!1, t);
    void 0 !== e.stop_hook_loop_limit && console.warn("[hooks] DEPRECATION WARNING: 'stop_hook_loop_limit' is deprecated. Use 'loop_limit' on individual hook scripts instead. The configured value is being ignored.");
    const r = Object.values(n), s = e.hooks;
    for (const [e, n] of Object.entries(s))if (r.includes(e)) {
        if (void 0 !== n) {
            const r = k(n, e);
            r.isValid || t.push(...r.errors);
        }
    } else t.push(`Unknown hook type: ${e}. Valid types are: ${r.join(", ")}`);
    return y(0 === t.length, t);
};
