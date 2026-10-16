"use strict";
require.d(exports, {
    O2: ()=>h,
    YF: ()=>q,
    zn: ()=>g,
    nb: ()=>u,
    sh: ()=>f,
    sk: ()=>l
});
var n = require("./module-98875.js"), s = require("./module-69584.js"), o = require("./module-68503.js");
const i = [
    "user_info",
    "project_layout",
    "rules",
    "always_applied_workspace_rules",
    "agent_requestable_workspace_rules",
    "user_rules",
    "agent_skills",
    "available_skills",
    "cloud_instructions",
    "cloud_task_instructions",
    "open_and_recently_viewed_files",
    "system_reminder",
    "system-reminder",
    "instructions_update",
    "mcp_instructions",
    "mcp_file_system",
    "mcp_file_system_servers",
    "git_status",
    "agent_transcripts",
    "cursor_rules_context",
    "attached_files",
    "system_notification",
    "task_notification",
    "agent_notification"
];
function a(e) {
    return c(e, i);
}
function c(e, t) {
    let r = e;
    for (const e of t){
        const t = new RegExp(`<${e}(?:\\s[^>]*)?>[\\s\\S]*?</${e}>`, "gi");
        r = r.replace(t, "");
    }
    return r.replace(/\n{3,}/g, "\n\n").trim();
}
(()=>{
    const e = globalThis.Intl?.Segmenter;
    e && new e(void 0, {
        granularity: "grapheme"
    });
})();
function l(e) {
    const t = (0, o.sh)(e.conversationId);
    if ("subagent" === e.kind && e.parentConversationId) {
        const r = (0, o.sh)(e.parentConversationId);
        return `${o.O2}/${r}/subagents/${t}.${e.ext}`;
    }
    return `${o.O2}/${t}/${t}.${e.ext}`;
}
async function u(e, t, r) {
    for(let n = r.length - 1; n >= 0; n--)try {
        const o = await t.getBlob(e, r[n]);
        if (!o) return;
        const i = s.cmU.fromBinary(o, {
            readUnknownFields: !0
        });
        if ("agentConversationTurn" !== i.turn.case) continue;
        const a = i.turn.value.requestId;
        return void 0 !== a && "" !== a ? a : void 0;
    } catch  {
        return;
    }
}
var d;
!function(e) {
    e.INTERNAL = "INTERNAL", e.EXTERNAL = "EXTERNAL", e.NO_PREAMBLE = "NO_PREAMBLE";
}(d || (d = {}));
var p = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, m = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const h = o.O2, f = o.sh;
function g(e) {
    switch(e){
        case s.xyI.AGENT:
            return "agent";
        case s.xyI.ASK:
            return "ask";
        case s.xyI.PLAN:
            return "plan";
        case s.xyI.DEBUG:
            return "debug";
        case s.xyI.TRIAGE:
            return "triage";
        case s.xyI.MULTITASK:
            return "multitask";
        case s.xyI.CUSTOM:
            return "custom";
        case s.xyI.UNSPECIFIED:
        case void 0:
            return "agent";
        default:
            return "agent";
    }
}
function y(e, t) {
    return t instanceof Uint8Array ? {
        __type: "Uint8Array",
        hex: (r = t, Array.from(r).map((e)=>e.toString(16).padStart(2, "0")).join(""))
    } : "bigint" == typeof t ? t.toString() : t;
    var r;
}
function w(e, t) {
    if (t && "object" == typeof t && "Uint8Array" === t.__type && "string" == typeof t.hex) {
        return `[Binary data omitted from transcript: ${t.hex.length / 2} bytes]`;
    }
    return t;
}
const v = new TextEncoder, _ = new TextDecoder;
function A(e) {
    return {
        role: "assistant",
        content: `[Oversize transcript blob omitted: ${t = e, `${(t / 1e6).toFixed(1)} MB`}]`
    };
    var t;
}
const S = new class {
    serialize(e) {
        const t = JSON.stringify(e, y);
        return v.encode(t);
    }
    deserialize(e) {
        const t = _.decode(e);
        return t.includes('"__type":"Uint8Array"') ? JSON.parse(t, w) : JSON.parse(t);
    }
};
function b(e) {
    const t = e.providerOptions;
    return !0 === t?.cursor?.isSummary;
}
async function E(e, t, r) {
    const n = [];
    let s = 0, o = 0, i = 0, a = 0, c = 0, l = 0, u = 0;
    for (const d of r){
        const r = await t.getBlob(e, d);
        if (r) {
            if (r.length > 5e6) {
                n.push(A(r.length)), c++, l += r.length, u = Math.max(u, r.length);
                continue;
            }
            try {
                const e = performance.now(), t = S.deserialize(r), c = performance.now() - e;
                n.push(t), s++, o += r.length, i = Math.max(i, r.length), a += c;
            } catch  {}
        }
    }
    return {
        messages: n,
        hydratedBlobCount: s,
        hydratedBlobBytes: o,
        largestHydratedBlobBytes: i,
        totalDeserializeDurationMs: a,
        omittedOversizeBlobCount: c,
        omittedOversizeBlobBytes: l,
        largestOmittedOversizeBlobBytes: u
    };
}
async function I(e, t, r) {
    const o = {
        stack: [],
        error: void 0,
        hasError: !1
    };
    try {
        const i = p(o, (0, n.VI)(e.withName("hydrateSummaryArchives")), !1);
        let a = 0;
        const c = (0, n.OA)(i.ctx), l = [];
        let u = 0, d = 0, m = 0, h = 0, f = 0, g = 0, y = 0;
        const w = await Promise.all(r.summaryArchives.map(async (e)=>{
            a++;
            const r = await t.getBlob(c, e);
            if (r) try {
                const e = s.Anz.fromBinary(r);
                a += e.summarizedMessages.length;
                return await E(c, t, e.summarizedMessages);
            } catch  {}
            return {
                messages: [],
                hydratedBlobCount: 0,
                hydratedBlobBytes: 0,
                largestHydratedBlobBytes: 0,
                totalDeserializeDurationMs: 0,
                omittedOversizeBlobCount: 0,
                omittedOversizeBlobBytes: 0,
                largestOmittedOversizeBlobBytes: 0
            };
        }));
        for (const e of w)l.push(...e.messages), u += e.hydratedBlobCount, d += e.hydratedBlobBytes, m = Math.max(m, e.largestHydratedBlobBytes), h += e.totalDeserializeDurationMs, f += e.omittedOversizeBlobCount, g += e.omittedOversizeBlobBytes, y = Math.max(y, e.largestOmittedOversizeBlobBytes);
        i.span.setAttribute("getBlobCount", a), i.span.setAttribute("hydratedBlobCount", u), i.span.setAttribute("hydratedBlobBytes", d), i.span.setAttribute("largestHydratedBlobBytes", m), i.span.setAttribute("totalDeserializeDurationMs", h), i.span.setAttribute("omittedOversizeBlobCount", f), i.span.setAttribute("omittedOversizeBlobBytes", g), i.span.setAttribute("largestOmittedOversizeBlobBytes", y);
        const v = p(o, (0, n.VI)(e.withName("hydratePromptMessages")), !1), _ = await E(c, t, r.rootPromptMessagesJson);
        v.span.setAttribute("getBlobCount", r.rootPromptMessagesJson.length), v.span.setAttribute("hydratedBlobCount", _.hydratedBlobCount), v.span.setAttribute("hydratedBlobBytes", _.hydratedBlobBytes), v.span.setAttribute("largestHydratedBlobBytes", _.largestHydratedBlobBytes), v.span.setAttribute("totalDeserializeDurationMs", _.totalDeserializeDurationMs), v.span.setAttribute("omittedOversizeBlobCount", _.omittedOversizeBlobCount), v.span.setAttribute("omittedOversizeBlobBytes", _.omittedOversizeBlobBytes), v.span.setAttribute("largestOmittedOversizeBlobBytes", _.largestOmittedOversizeBlobBytes);
        const A = _.messages.filter((e)=>"system" !== e.role && !b(e));
        return l.push(...A), l;
    } catch (e) {
        o.error = e, o.hasError = !0;
    } finally{
        m(o);
    }
}
function C(e, t) {
    switch(e.type){
        case "text":
            return t ? k(e.text) : e.text;
        case "image":
            return "[Image]";
        case "file":
            return e.filename ? `[File: ${e.filename}]` : "[File]";
        case "reasoning":
            return `[Thinking] ${e.text}`;
        case "redacted-reasoning":
            return "[Thinking]";
        case "tool-call":
            return `[Tool call] ${e.toolName}${function(e) {
                if (null == e) return "";
                if ("object" != typeof e) return String(e);
                const t = e, r = Object.entries(t);
                return 0 === r.length ? "" : `\n${r.map(([e, t])=>{
                    let r;
                    return r = "string" == typeof t ? t : "object" == typeof t && null !== t ? JSON.stringify(t) : String(t), `  ${e}: ${r}`;
                }).join("\n")}`;
            }(e.args)}`;
        case "tool-result":
            return `[Tool result] ${e.toolName}`;
        default:
            return "";
    }
}
function k(e) {
    return a(e);
}
function x(e) {
    return e.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/<thinking>[\s\S]*?<\/thinking>/gi, "").replace(/\n{3,}/g, "\n\n").trim();
}
function T(e, t, r) {
    if (void 0 === e) return "";
    if ("string" == typeof e) {
        const n = t ? k(e) : e;
        return r ? x(n) : n;
    }
    return e.map((e)=>{
        if (r && "text" === e.type) {
            const r = x(t ? k(e.text) : e.text);
            return C({
                ...e,
                text: r
            }, !1);
        }
        return C(e, t);
    }).filter(Boolean).join("\n");
}
function R(e) {
    let t = e.filter((e)=>"system" !== e.role);
    t.length >= 2 && "user" === t[0].role && "user" === t[1].role && (t = t.slice(1));
    const r = [];
    for (const e of t){
        const t = "user" === e.role, n = "assistant" === e.role, s = T(e.content, t, n);
        s.trim() && ("tool" === e.role ? r.push(s) : r.push(`${e.role}:\n${s}`));
    }
    return r.join("\n\n");
}
function B(e, t) {
    const r = {
        role: e.role
    }, n = e.content;
    if ("string" == typeof n) {
        const s = t ? k(n) : n, o = "assistant" === e.role ? x(s) : s;
        o.trim() && (r.text = o);
    } else if (Array.isArray(n)) {
        const s = [], o = [], i = [];
        let a;
        for (const r of n)switch(r.type){
            case "text":
                {
                    const n = t ? k(r.text) : r.text, o = "assistant" === e.role ? x(n) : n;
                    o.trim() && s.push(o);
                    break;
                }
            case "reasoning":
                r.text.trim() && o.push(r.text);
                break;
            case "redacted-reasoning":
                o.push("[REDACTED]");
                break;
            case "image":
                s.push("[Image]");
                break;
            case "file":
                s.push(r.filename ? `[File: ${r.filename}]` : "[File]");
                break;
            case "tool-call":
                i.push({
                    toolName: r.toolName,
                    args: r.args
                });
                break;
            case "tool-result":
                a = {
                    toolName: r.toolName
                };
        }
        s.length > 0 && (r.text = s.join("\n")), o.length > 0 && (r.thinking = o.join("\n")), i.length > 0 && (r.toolCalls = i), a && (r.toolResult = a);
    }
    return r;
}
function P(e) {
    return e.endsWith("\n") ? e : `${e}\n`;
}
function J(e) {
    const { turnEnded: t } = e, r = [], n = {}, s = [];
    return void 0 !== t && (r.push(function(e) {
        switch(e.status){
            case "success":
                return "Turn ended: success.";
            case "error":
                return `Turn ended: error: ${e.error}`;
            case "aborted":
                return e.error ? `Turn ended: aborted: ${e.error}` : "Turn ended: aborted.";
            default:
                return e;
        }
    }(t)), n.turnEnded = t, s.push(JSON.stringify({
        type: "turn_ended",
        ...t
    }))), {
        textSuffixes: r,
        jsonFields: n,
        jsonlLines: s
    };
}
function M(e) {
    if ("system" === e.role || b(e)) return;
    const t = B(e, "user" === e.role), r = [], n = [];
    if (t.text && n.push(t.text), t.thinking && n.push(t.thinking), n.length > 0 && r.push({
        type: "text",
        text: n.join("\n\n")
    }), t.toolCalls) for (const e of t.toolCalls)r.push({
        type: "tool_use",
        name: e.toolName,
        input: e.args
    });
    if (0 === r.length) return;
    const s = {
        role: e.role,
        message: {
            content: r
        }
    };
    return JSON.stringify(s);
}
class q {
    constructor(e, t, r, n = {}){
        this.projectDir = e, this.blobStore = t, this.writeFile = r, this.options = {
            writeText: n.writeText ?? !0,
            writeJson: n.writeJson ?? !1,
            writeJsonl: n.writeJsonl ?? !1,
            pathResolver: n.pathResolver,
            appendFile: n.appendFile,
            fallbackToFullWriteOnIncrementalFailure: n.fallbackToFullWriteOnIncrementalFailure ?? !0
        };
    }
    resolveFilePath(e, t) {
        if (this.options.pathResolver) return this.options.pathResolver(e, t);
        const r = l({
            conversationId: e,
            ext: t,
            kind: "primary"
        });
        return `${this.projectDir}/${r}`;
    }
    async writeFromStateFull(e, t, r, s = {}) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const i = p(o, (0, n.VI)(e.withName("writeFromState")), !1);
            try {
                const e = await I(i.ctx, this.blobStore, t), { overviewFactory: n } = s, o = J(s);
                if (0 === e.length && 0 === o.jsonlLines.length) return !0;
                let a;
                if ((this.options.writeText || n) && (a = R(e)), this.options.writeText) {
                    const e = a ?? "", t = o.textSuffixes.length > 0 ? e.trim().length > 0 ? `${e}\n\n${o.textSuffixes.join("\n")}` : o.textSuffixes.join("\n") : e;
                    t.trim() && await this.writeFile(this.resolveFilePath(r, "txt"), t);
                }
                if (this.options.writeJson) {
                    const n = function(e) {
                        let t = e.filter((e)=>"system" !== e.role);
                        t.length >= 2 && "user" === t[0].role && "user" === t[1].role && (t = t.slice(1));
                        const r = [];
                        for (const e of t){
                            const t = B(e, "user" === e.role);
                            (t.text || t.thinking || t.toolCalls || t.toolResult) && r.push(t);
                        }
                        return 0 === r.length ? "" : JSON.stringify(r, null, 2);
                    }(e);
                    if (n || o.jsonlLines.length > 0) {
                        const e = {
                            mode: g(t.mode),
                            messages: n ? JSON.parse(n) : [],
                            ...o.jsonFields
                        };
                        await this.writeFile(this.resolveFilePath(r, "json"), JSON.stringify(e, null, 2));
                    }
                }
                if (this.options.writeJsonl) {
                    const t = function(e) {
                        let t = e.filter((e)=>"system" !== e.role);
                        t.length >= 2 && "user" === t[0].role && "user" === t[1].role && (t = t.slice(1));
                        const r = [];
                        for (const e of t){
                            const t = M(e);
                            t && r.push(t);
                        }
                        return r.join("\n");
                    }(e);
                    let s = [
                        t,
                        ...o.jsonlLines
                    ].filter((e)=>e.length > 0).join("\n");
                    if (s && n && a?.trim()) try {
                        const e = (await n(a)).trim();
                        e && (s = function(e, t) {
                            const r = {
                                type: "metadata",
                                metadata: {
                                    overview: t
                                }
                            };
                            return `${JSON.stringify(r)}\n${e}`;
                        }(s, e));
                    } catch (e) {
                        console.error("[TranscriptStore] Failed to generate transcript overview:", e);
                    }
                    s && await this.writeFile(this.resolveFilePath(r, "jsonl"), P(s));
                }
                return !0;
            } catch (e) {
                return console.error("[TranscriptStore] Failed to write transcript:", e), !1;
            }
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            m(o);
        }
    }
    async writeFromStateIncremental(e, t, r, s, o = {}) {
        const i = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const a = t.rootPromptMessagesJson.length, c = J(o), l = c.jsonlLines.length > 0;
            if (a === s && !l && !o.overviewFactory) return a;
            const u = this.options.appendFile;
            if (!(u && this.options.writeJsonl && !this.options.writeText && !this.options.writeJson && s > 0 && a >= s && (a > s || l) && !o.overviewFactory)) {
                return await this.writeFromStateFull(e, t, r, o) ? a : 0;
            }
            const d = p(i, (0, n.VI)(e.withName("writeFromStateIncremental")), !1);
            if (a === s && l) try {
                return await u(this.resolveFilePath(r, "jsonl"), P(c.jsonlLines.join("\n"))), a;
            } catch (n) {
                if (console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", n), !this.options.fallbackToFullWriteOnIncrementalFailure) return 0;
                return await this.writeFromStateFull(e, t, r, o) ? a : 0;
            }
            try {
                const e = t.rootPromptMessagesJson.slice(s), n = await E(d.ctx, this.blobStore, e);
                d.span.setAttribute("hydratedBlobCount", n.hydratedBlobCount), d.span.setAttribute("hydratedBlobBytes", n.hydratedBlobBytes), d.span.setAttribute("largestHydratedBlobBytes", n.largestHydratedBlobBytes), d.span.setAttribute("totalDeserializeDurationMs", n.totalDeserializeDurationMs), d.span.setAttribute("omittedOversizeBlobCount", n.omittedOversizeBlobCount), d.span.setAttribute("omittedOversizeBlobBytes", n.omittedOversizeBlobBytes), d.span.setAttribute("largestOmittedOversizeBlobBytes", n.largestOmittedOversizeBlobBytes);
                const o = [];
                for (const e of n.messages){
                    const t = M(e);
                    t && o.push(t);
                }
                if (o.push(...c.jsonlLines), o.length > 0) {
                    const e = P(o.join("\n"));
                    await u(this.resolveFilePath(r, "jsonl"), e);
                }
                return a;
            } catch (n) {
                if (console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", n), !this.options.fallbackToFullWriteOnIncrementalFailure) return 0;
                return await this.writeFromStateFull(e, t, r, o) ? a : 0;
            }
        } catch (e) {
            i.error = e, i.hasError = !0;
        } finally{
            m(i);
        }
    }
}
