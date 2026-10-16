"use strict";
require.d(exports, {
    DA: ()=>l,
    Zy: ()=>d,
    Po: ()=>u
});
var n = require("./module-6688.js");
function s(e) {
    const t = [
        "## Model requests (private inference)",
        ""
    ];
    t.push(`${e.length} run${1 === e.length ? "" : "s"} captured on this device. Each request below is what the client sent to the configured gateway and what the gateway returned; nothing here was sent to Cursor.`, "");
    let r = 0;
    return e.forEach((e, n)=>{
        t.push(`### Run ${n + 1} — ${e.generationUUID}`, "", `- Status: ${e.terminalStatus}`, `- Session: ${e.conversationId}`, `- Captured: ${e.createdAt}`, `- Requests: ${e.invocations.length}`, ""), e.invocations.forEach((e, n)=>{
            r++, t.push(...function(e, t) {
                const r = [
                    `#### Request ${t} — ${e.modelId}`,
                    "",
                    `- Provider: ${e.providerName}`,
                    `- Status: ${e.status}${void 0 === e.errorMessage ? "" : ` (${e.errorMessage})`}`,
                    `- Attempt: ${e.attempt} (${e.attemptRequestId})`,
                    `- Started: ${e.startedAt}; completed: ${e.completedAt}`,
                    `- Tokens: ${e.promptTokens} prompt + ${e.completionTokens} completion = ${e.totalTokens}${void 0 === e.tokenLimit ? "" : ` (limit ${e.tokenLimit})`}`,
                    `- Tools offered (${e.tools.length}): ${e.tools.map((e)=>`\`${e.name}\``).join(", ") || "none"}`,
                    "",
                    "**Prompt**",
                    ""
                ];
                for (const t of e.messagesBase64)r.push(...i(o(t)));
                r.push("**Response**", ""), 0 === e.responseMessagesBase64.length && r.push("_No response messages._", "");
                for (const t of e.responseMessagesBase64)r.push(...i(o(t)));
                return r;
            }(e, n + 1));
        });
    }), {
        markdown: `${t.join("\n").trimEnd()}\n`,
        json: JSON.stringify(e, null, 2),
        runCount: e.length,
        invocationCount: r
    };
}
function o(e) {
    try {
        return n.A2J.deserialize(Buffer.from(e, "base64"));
    } catch  {
        return;
    }
}
function i(e) {
    if (void 0 === e) return [
        "> **(undecodable message)**",
        ""
    ];
    const t = [
        `**${e.role}**`,
        ""
    ];
    if ("string" == typeof e.content) return t.push(a(e.content), ""), t;
    for (const r of e.content)switch(r.type){
        case "text":
            t.push(a(r.text), "");
            break;
        case "reasoning":
            t.push("_reasoning_", "", a(r.text), "");
            break;
        case "redacted-reasoning":
            t.push("_reasoning (redacted)_", "");
            break;
        case "image":
            t.push(`_image${void 0 === r.mimeType ? "" : ` (${r.mimeType})`}_`, "");
            break;
        case "file":
            t.push(`_file (${r.mimeType})_`, "");
            break;
        case "tool-call":
            t.push(`_tool call_ \`${r.toolName}\` (${r.toolCallId})`, "", a(JSON.stringify(r.args, null, 2), "json"), "");
            break;
        case "tool-result":
            t.push(`_tool result_ \`${r.toolName}\` (${r.toolCallId})${!0 === r.isError ? " — error" : ""}`, "", a("string" == typeof r.result ? r.result : JSON.stringify(r.result, null, 2), "string" == typeof r.result ? "" : "json"), "");
            break;
        default:
            t.push(a(JSON.stringify(r, null, 2), "json"), "");
    }
    return t;
}
function a(e, t = "") {
    const r = Math.max(2, ...Array.from(e.matchAll(/`+/gu), (e)=>e[0].length)), n = "`".repeat(r + 1);
    return `${n}${t}\n${e}\n${n}`;
}
const c = (0, require("./module-37949.js").h)("@anysphere/agent-host:private-inference-prompt-quality"), l = "CURSOR_PRIVATE_INFERENCE_PQ_SNAPSHOTS";
function u(e) {
    return !0 === e.isDevelopmentBuild && "1" === e.env[l];
}
class d {
    constructor(e = {}){
        this.options = e, this.captures = new Map, this.runs = [];
    }
    wrapAttemptSession(e, t, r) {
        const s = {
            generationUUID: e.originalRequestId,
            attemptRequestId: e.attemptRequestId,
            attempt: e.attempt,
            conversationId: e.runOptions.conversationId
        }, o = (0, n.Xc9)(t.promptSession, {
            capture: this.captureForRun({
                requestId: e.originalRequestId,
                conversationId: e.runOptions.conversationId,
                conversationGroupId: e.runOptions.conversationGroupId ?? e.runOptions.conversationId
            }),
            requestLogMetadata: s,
            modelId: r,
            providerName: "openai-responses"
        });
        return {
            promptSession: o,
            promptToolSession: {
                getExecutor: (e)=>new n.Ycw(o.getExecutor(e))
            }
        };
    }
    async finishRun(e, t, r) {
        const n = this.captures.get(t);
        if (void 0 !== n) {
            this.captures.delete(t);
            try {
                const s = await n.capture.collect(r);
                if (void 0 === s) return;
                this.runs.push({
                    conversationGroupId: n.conversationGroupId,
                    snapshot: s
                }), this.runs.length > 200 && this.runs.splice(0, this.runs.length - 200), c.debug(e, "Kept private-inference run for transcript export", {
                    requestId: t,
                    conversationId: s.conversationId,
                    conversationGroupId: n.conversationGroupId,
                    invocationCount: s.invocations.length,
                    terminalStatus: s.terminalStatus
                }), this.writeSnapshot(e, t, s);
            } catch (r) {
                c.error(e, "Failed to collect local Prompt Quality capture", {
                    requestId: t,
                    error: r
                });
            }
        }
    }
    writeSnapshot(e, t, r) {
        if (void 0 !== this.options.writeSnapshot) try {
            const n = this.options.writeSnapshot(r);
            c.info(e, "Wrote private-inference run snapshot (dev build)", {
                requestId: t,
                path: n
            });
        } catch (r) {
            c.error(e, "Failed to write private-inference run snapshot", {
                requestId: t,
                error: r
            });
        }
    }
    runsForConversation(e) {
        return this.runs.filter((t)=>t.conversationGroupId === e || t.snapshot.conversationId === e).map((e)=>e.snapshot);
    }
    report(e) {
        const t = this.runsForConversation(e);
        return 0 === t.length ? void 0 : s(t);
    }
    captureForRun(e) {
        const t = this.captures.get(e.requestId);
        if (void 0 !== t) return t.capture;
        const r = new n.yZI({
            generationUUID: e.requestId,
            conversationId: e.conversationId,
            uploadEligible: !0
        });
        return this.captures.set(e.requestId, {
            capture: r,
            conversationGroupId: e.conversationGroupId
        }), r;
    }
}
