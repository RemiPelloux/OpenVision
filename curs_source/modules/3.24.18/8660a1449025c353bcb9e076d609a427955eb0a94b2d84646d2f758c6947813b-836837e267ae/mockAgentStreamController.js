import { bxn } from "./Aeg.js";
import { Ei, Ga, Hc, Tr } from "./Iwo.js";
import { Sug, y_k, yug } from "./Ycg.js";
import { Fni, Hm, Lni, Oni, Q4t, YSr, att, cbt, fY, i9t, jFo, ju, n9t, nf, ok, t0, t9t } from "./agent_pb.js";
import { V6e, _J } from "./agent_service_pb.js";
import { c_, nPe } from "./async.cursor.js";
import { pr } from "./code_3.js";
import { KD, zW } from "./composerBlobStore.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { fAn, tVt } from "./composerDecisionsService.js";
import { WEi, bug } from "./composerFileChangeHandlerTypes.js";
import { $Ce } from "./composerUriUtils.js";
import { mo, tf } from "./composer_pb.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { H4t, J_t, W4t, ebt, nni } from "./create_plan_tool_pb.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { amn, lmn } from "./delete_exec_pb.js";
import { L4t, qyr } from "./delete_tool_pb.js";
import { F$e, Jet, Qet, U4t, Wte, yQ } from "./edit_tool_pb.js";
import { Xse, qde } from "./exec_pb.js";
import { is, ms } from "./files.js";
import { O4t, V_t } from "./grep_exec_pb.js";
import { F4t, o5e } from "./grep_tool_pb.js";
import { Ng } from "./index_3.ts";
import { Xp } from "./ipa.js";
import { Fpn, zet } from "./ls_exec_pb.js";
import { eSr, j4t } from "./ls_tool_pb.js";
import { U$e, zke } from "./mcp_exec_pb.js";
import { fmn, ttt } from "./mcp_tool_pb.js";
import { Ul, Z0, eW } from "./path_2.js";
import { qni, zni } from "./read_exec_pb.js";
import { IAe, X_t } from "./read_tool_pb.js";
import { Het } from "./sandbox_pb.js";
import { ASr, Rj, gY } from "./selected_context_pb.js";
import { $te } from "./shell_exec_pb.js";
import { Kse, N4t } from "./shell_tool_pb.js";
import { Zi, ki } from "./storage_2.js";
import { hbt, q$e } from "./subagent_exec_pb.js";
import { bQ } from "./subagents_pb.js";
import { g5o, lni, uni } from "./switch_mode_tool_pb.js";
import { QF, Zet, xAe } from "./todo_tool_pb.js";
import { Ct, Gke, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Hu, pS, wo } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
var kug, wug;
export { kug, wug };
var __wakaru_S_k_initialized = false;
export function S_k() {
if (__wakaru_S_k_initialized) return;
__wakaru_S_k_initialized = true;
"use strict";
E(), Ng(), dp(), ju(), V6e(), ebt(), lmn(), qyr(), U4t(), Xse(), O4t(), F4t(), zet(), eSr(), zke(), fmn(), zni(), X_t(), Het(), Rj(), $te(), N4t(), q$e(), bQ(), uni(), Zet(), tf(), Pu(), Hu(), c_(), Ga(), Ei(), Ul(), fn(), Xo(), ms(), Zi(), Sr(), zW(), Pl(), fAn(), bug(), $Ce(), S2(), kug = {
    delete: {
        buildToolCall: (t, e)=>{
            const n = new amn({
                path: e.path,
                toolCallId: t
            }), i = new L4t({
                args: n
            });
            return new Hm({
                tool: {
                    case: "deleteToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (t, e)=>{
            const n = new amn({
                path: e.path,
                toolCallId: t
            });
            return new qde({
                id: 1,
                message: {
                    case: "deleteArgs",
                    value: n
                }
            });
        }
    },
    read: {
        buildToolCall: (t, e)=>{
            const n = new IAe({
                args: {
                    path: e.path,
                    offset: e.offset,
                    limit: e.limit
                }
            });
            return new Hm({
                tool: {
                    case: "readToolCall",
                    value: n
                }
            });
        },
        buildExecMessage: (t, e)=>{
            const n = new qni({
                path: e.path,
                offset: e.offset,
                limit: e.limit,
                toolCallId: t
            });
            return new qde({
                id: 1,
                message: {
                    case: "readArgs",
                    value: n
                }
            });
        }
    },
    ls: {
        buildToolCall: (t, e)=>{
            const n = new Fpn({
                path: e.path,
                ignore: e.ignore ? [
                    ...e.ignore
                ] : [],
                toolCallId: t
            }), i = new j4t({
                args: n
            });
            return new Hm({
                tool: {
                    case: "lsToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (t, e)=>{
            const n = new Fpn({
                path: e.path,
                ignore: e.ignore ? [
                    ...e.ignore
                ] : [],
                toolCallId: t
            });
            return new qde({
                id: 1,
                message: {
                    case: "lsArgs",
                    value: n
                }
            });
        }
    },
    grep: {
        buildToolCall: (t, e)=>{
            const n = new V_t({
                pattern: e.pattern,
                path: e.path,
                glob: e.glob,
                outputMode: e.outputMode,
                contextBefore: e.contextBefore,
                contextAfter: e.contextAfter,
                context: e.context,
                caseInsensitive: e.caseInsensitive,
                type: e.type,
                headLimit: e.headLimit,
                multiline: e.multiline,
                toolCallId: t
            }), i = new o5e({
                args: n
            });
            return new Hm({
                tool: {
                    case: "grepToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (t, e)=>{
            const n = new V_t({
                pattern: e.pattern,
                path: e.path,
                glob: e.glob,
                outputMode: e.outputMode,
                contextBefore: e.contextBefore,
                contextAfter: e.contextAfter,
                context: e.context,
                caseInsensitive: e.caseInsensitive,
                type: e.type,
                headLimit: e.headLimit,
                multiline: e.multiline,
                toolCallId: t
            });
            return new qde({
                id: 1,
                message: {
                    case: "grepArgs",
                    value: n
                }
            });
        }
    },
    shell: {
        buildToolCall: (t, e)=>{
            const n = Sug(t, e), i = new Kse({
                args: n
            });
            return new Hm({
                tool: {
                    case: "shellToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (t, e)=>{
            const n = Sug(t, e);
            return new qde({
                id: 1,
                message: {
                    case: "shellArgs",
                    value: n
                }
            });
        }
    },
    edit: {
        isStreaming: !0,
        buildToolCall: (t, e)=>{
            const n = new Qet({
                path: e.path,
                streamContent: `<<<<<<< SEARCH
${e.old_string}
=======
${e.new_string}
>>>>>>> REPLACE`
            }), i = new Wte({
                args: n
            });
            return new Hm({
                tool: {
                    case: "editToolCall",
                    value: i
                }
            });
        }
    },
    create_plan: {
        isStreaming: !0,
        buildToolCall: (t, e)=>{
            const n = (o)=>{
                switch(o){
                    case "pending":
                        return QF.PENDING;
                    case "in_progress":
                        return QF.IN_PROGRESS;
                    case "completed":
                        return QF.COMPLETED;
                    case "cancelled":
                        return QF.CANCELLED;
                    default:
                        return QF.PENDING;
                }
            }, i = (o)=>o ? o.map((a)=>new xAe({
                        id: a.id,
                        content: a.content,
                        status: n(a.status),
                        dependencies: a.dependencies ? [
                            ...a.dependencies
                        ] : []
                    })) : [], r = new W4t({
                plan: e.plan,
                overview: e.overview ?? "",
                name: e.name ?? "",
                todos: i(e.todos),
                isProject: e.is_project ?? !1,
                phases: e.phases?.map((o)=>({
                        name: o.name,
                        todos: i(o.todos)
                    })) ?? []
            }), s = new H4t({
                args: r
            });
            return new Hm({
                tool: {
                    case: "createPlanToolCall",
                    value: s
                }
            });
        }
    },
    task: {
        buildToolCall: (t, e)=>{
            const n = new att({
                args: {
                    prompt: e.prompt,
                    description: e.description ?? e.prompt,
                    model: e.model,
                    resume: e.resume,
                    subagentType: e.subagent_type ? yug(e.subagent_type) : void 0
                }
            });
            return new Hm({
                tool: {
                    case: "taskToolCall",
                    value: n
                }
            });
        },
        buildCompletedToolCall: (t, e)=>{
            const n = new att({
                args: {
                    prompt: e.prompt,
                    description: e.description ?? e.prompt,
                    model: e.model,
                    resume: e.resume,
                    subagentType: e.subagent_type ? yug(e.subagent_type) : void 0
                },
                result: {
                    result: {
                        case: "success",
                        value: {
                            conversationSteps: []
                        }
                    }
                }
            });
            return new Hm({
                tool: {
                    case: "taskToolCall",
                    value: n
                }
            });
        }
    }
}, wug = class {
    constructor(t, e){
        this.pendingMocks = new Map, this.activeStreams = new Map, this.interactionQueryIdCounter = 0, this.recordedRunRequests = [], this.logService = t, this.instantiationService = e;
    }
    createMock(t) {
        const e = Ai(), n = {
            mockId: e,
            composerId: t,
            events: new nPe(void 0),
            pendingExecToolCallIds: new Set
        };
        return this.pendingMocks.set(e, n), this.logService.info(`[mock agent] created mock ${e} (composer=${t})`), e;
    }
    createMockEvent(t) {
        if (t.kind !== "tool-call") return {
            step: t
        };
        try {
            const e = Gke.fromJsonString(JSON.stringify(t.toolCall));
            return {
                step: t,
                parsedToolCall: e
            };
        } catch (e) {
            const n = e instanceof Error ? e.message : String(e);
            throw new Error(`Failed to parse tool call event: ${n}`);
        }
    }
    pushEvent(t, e) {
        const n = this.pendingMocks.get(t);
        if (n === void 0) throw new Error(`Mock agent stream ${t} not found`);
        const i = this.createMockEvent(e);
        n.events.push(i), this.logService.info(`[mock agent] pushed event for mock ${t} (kind=${e.kind})`);
    }
    async completeMock(t) {
        const e = this.pendingMocks.get(t);
        if (e === void 0) {
            this.logService.warn(`[mock agent] completeMock called for unknown mock ${t}`);
            return;
        }
        e.pendingExecToolCallIds.size > 0 && (this.logService.info(`[mock agent] waiting for ${e.pendingExecToolCallIds.size} pending exec tool calls to complete`), await this.waitForPendingExecToolCalls(e)), e.events.push({
            step: {
                kind: "turn-ended"
            }
        }), e.events.end(), this.logService.info(`[mock agent] completed mock ${t}`);
    }
    async waitForPendingExecToolCalls(t) {
        const e = this.instantiationService.invokeFunction((a)=>a.get(no)), n = await e.getComposerHandleById(t.composerId);
        if (!n) {
            this.logService.warn(`[mock agent] could not get composer handle for ${t.composerId}`);
            return;
        }
        const i = e.getComposerCapability(n, mo.TOOL_FORMER);
        if (!i) {
            this.logService.warn(`[mock agent] could not get ToolFormer for ${t.composerId}`);
            return;
        }
        const r = 1e4, s = 100, o = Date.now();
        for(; t.pendingExecToolCallIds.size > 0 && Date.now() - o < r;){
            for (const a of [
                ...t.pendingExecToolCallIds
            ]){
                const l = i.getBubbleIdByToolCallId(a);
                if (!l) continue;
                const c = i.getBubbleData(l);
                (c?.status === "completed" || c?.status === "error") && (t.pendingExecToolCallIds.delete(a), this.logService.info(`[mock agent] tool call ${a} completed with status ${c.status}`));
            }
            t.pendingExecToolCallIds.size > 0 && await new Promise((a)=>setTimeout(a, s));
        }
        t.pendingExecToolCallIds.size > 0 && this.logService.warn(`[mock agent] timed out waiting for pending exec tool calls: ${[
            ...t.pendingExecToolCallIds
        ].join(", ")}`);
    }
    disposeMock(t) {
        const e = this.pendingMocks.get(t);
        if (e === void 0) {
            this.logService.warn(`[mock agent] disposeMock called for unknown mock ${t}`);
            return;
        }
        const n = e.conversationId, i = e.requestId;
        if (n !== void 0 && i !== void 0) {
            const r = `${n}:${i}`;
            this.logService.info(`[mock agent] disposing active mock ${t} (streamKey=${r})`), this.cleanupStream(r, new Hc);
        } else this.logService.info(`[mock agent] disposing pending mock ${t}`), this.pendingMocks.delete(t), e.events.error(new Hc);
    }
    abortMock(t) {
        this.disposeMock(t);
    }
    async buildSyntheticCheckpointMessage(t) {
        const e = t.conversationId ?? t.composerId, n = this.instantiationService.invokeFunction((b)=>b.get(no)), i = this.instantiationService.invokeFunction((b)=>b.get(ki)), r = await n.getComposerHandleById(e), s = r ? n.getLastHumanBubbleId(r) : void 0, o = r?.data.conversationState, a = o?.turns ?? [], l = a.length, c = new TextEncoder, u = c.encode(`mock-turn-${t.mockId}-${l}`), d = c.encode(`mock-usermsg-${t.mockId}-${l}`), h = new t0({
            text: "",
            messageId: s ?? e
        }), p = new KD(i, e), g = Xp();
        await p.setBlob(g, d, h.toBinary());
        const f = new fY({
            turn: {
                case: "agentConversationTurn",
                value: new Q4t({
                    userMessage: d,
                    steps: []
                })
            }
        });
        await p.setBlob(g, u, f.toBinary());
        const _ = new nf({
            ...o,
            turns: [
                ...a,
                u
            ]
        });
        return this.logService.info(`[mock agent] built synthetic checkpoint for mock ${t.mockId} (turns=${_.turns.length}, messageId=${s ?? e})`), new _J({
            message: {
                case: "conversationCheckpointUpdate",
                value: _
            }
        });
    }
    getMockStream(t, e, n, i) {
        i !== void 0 && this.recordRunRequest(t, i);
        const r = this.pickPendingMock(t);
        if (r === void 0) return;
        r.composerId = t, r.conversationId = t, r.requestId = e;
        const s = `${t}:${e}`, o = ()=>{
            this.logService.info(`[mock agent] abort signaled for mock ${r.mockId} (streamKey=${s})`), this.disposeMock(r.mockId);
        };
        n.addEventListener("abort", o, {
            once: !0
        });
        const a = {
            mock: r,
            signal: n,
            abortListener: o
        };
        return this.activeStreams.set(s, a), this.logService.info(`[mock agent] attached mock ${r.mockId} to stream ${s}`), this.createStreamFromEvents(r, s);
    }
    recordRunRequest(t, e) {
        const n = e.action?.action.case === "userMessageAction" ? e.action.action.value.userMessage : void 0;
        this.recordedRunRequests.push({
            conversationId: t,
            subagentTypeName: e.subagentTypeName || void 0,
            modelId: e.requestedModel?.modelId || e.modelDetails?.modelId || void 0,
            maxMode: e.requestedModel?.maxMode ?? e.modelDetails?.maxMode,
            parameters: (e.requestedModel?.parameters ?? []).map((i)=>({
                    id: i.id,
                    value: i.value
                })),
            externalLinkCount: n?.selectedContext?.externalLinks.length ?? 0
        });
    }
    getRecordedRunRequests() {
        return this.recordedRunRequests.map((t)=>({
                ...t,
                parameters: t.parameters.map((e)=>({
                        ...e
                    }))
            }));
    }
    pickPendingMock(t) {
        for (const e of this.pendingMocks.values())if (e.conversationId === void 0 && e.composerId === t) return e;
        for (const e of this.pendingMocks.values())if (e.conversationId === void 0) return e;
    }
    async *createStreamFromEvents(t, e) {
        try {
            let n = 0;
            for await (const i of t.events){
                if (n++, "kind" in i && i.kind === "delayed-exec") {
                    const s = i;
                    this.logService.info(`[mock agent] emitting delayed exec message for ${s.toolCallId}`), yield new _J({
                        message: {
                            case: "execServerMessage",
                            value: s.execServerMessage
                        }
                    });
                    continue;
                }
                const r = i;
                if (r.step.kind === "checkpoint") try {
                    const s = this.buildSyntheticCheckpointMessage(t), o = new Promise((l)=>setTimeout(()=>l(void 0), 3e3)), a = await Promise.race([
                        s,
                        o
                    ]);
                    a ? yield a : this.logService.warn(`[mock agent] synthetic checkpoint timed out for mock ${t.mockId}, skipping`);
                } catch (s) {
                    this.logService.warn(`[mock agent] failed to build synthetic checkpoint for mock ${t.mockId}, skipping`, s instanceof Error ? s : void 0);
                }
                else if (r.step.kind === "agent-tool") for await (const s of this.createMessagesForAgentToolEvent(r, t, t.pendingExecToolCallIds))yield s;
                else if (r.step.kind === "tool-call" && r.parsedToolCall?.tool === Ct.CALL_MCP_TOOL) for await (const s of this.createMessagesForMcpToolCall(r.parsedToolCall, t))yield s;
                else yield this.createMessageForEvent(r);
            }
            this.logService.info(`[mock agent] stream ${e} completed with ${n} events`);
        } catch (n) {
            const i = n instanceof Error ? n : new Error(String(n));
            throw this.logService.error(`[mock agent] stream error for ${e}`, i), this.cleanupStream(e, i), i;
        } finally{
            this.cleanupStream(e, void 0);
        }
    }
    nextInteractionQueryId() {
        return this.interactionQueryIdCounter += 1, this.interactionQueryIdCounter;
    }
    createInteractionQueryMessage(t) {
        if (t.tool !== Ct.SWITCH_MODE) return;
        if (t.params.case !== "switchModeParams") {
            this.logService.warn("[mock agent] switch mode tool call missing switch_mode_params");
            return;
        }
        const e = t.params.value, n = new lni({
            targetModeId: e.toModeId,
            explanation: e.explanation,
            toolCallId: t.toolCallId
        }), i = new i9t({
            id: this.nextInteractionQueryId(),
            query: {
                case: "switchModeRequestQuery",
                value: new g5o({
                    args: n
                })
            }
        });
        return new _J({
            message: {
                case: "interactionQuery",
                value: i
            }
        });
    }
    createMessageForEvent(t) {
        if (t.step.kind === "tool-call") {
            const n = t.parsedToolCall ?? Gke.fromJsonString(JSON.stringify(t.step.toolCall));
            if (n.tool === Ct.CALL_MCP_TOOL && n.params.case === "callMcpToolParams") {
                const r = n.params.value, s = new ttt({
                    args: new U$e({
                        name: `mcp-${r.server}-${r.toolName}`,
                        toolCallId: n.toolCallId,
                        providerIdentifier: r.server,
                        toolName: r.toolName
                    })
                }), o = new Hm({
                    tool: {
                        case: "mcpToolCall",
                        value: s
                    }
                });
                return new _J({
                    message: {
                        case: "interactionUpdate",
                        value: new ok({
                            message: {
                                case: "toolCallStarted",
                                value: new n9t({
                                    callId: n.toolCallId,
                                    toolCall: o,
                                    modelCallId: n.toolCallId
                                })
                            }
                        })
                    }
                });
            }
            const i = this.createInteractionQueryMessage(n);
            return i || (this.logService.warn("[mock agent] unsupported client-side tool call in mock stream"), new _J({
                message: {
                    case: "interactionUpdate",
                    value: new ok({
                        message: {
                            case: "textDelta",
                            value: new t9t({
                                text: ""
                            })
                        }
                    })
                }
            }));
        }
        let e;
        if (t.step.kind === "error") throw this.createConnectErrorFromStep(t.step);
        return t.step.kind === "thinking" ? e = new ok({
            message: {
                case: "thinkingDelta",
                value: new Lni({
                    text: t.step.value
                })
            }
        }) : t.step.kind === "thinking-complete" ? e = new ok({
            message: {
                case: "thinkingCompleted",
                value: new Oni({})
            }
        }) : t.step.kind === "text" ? e = new ok({
            message: {
                case: "textDelta",
                value: new t9t({
                    text: t.step.value
                })
            }
        }) : t.step.kind === "turn-ended" ? e = new ok({
            message: {
                case: "turnEnded",
                value: new Fni({})
            }
        }) : e = new ok({
            message: {
                case: "textDelta",
                value: new t9t({
                    text: ""
                })
            }
        }), new _J({
            message: {
                case: "interactionUpdate",
                value: e
            }
        });
    }
    mapErrorCode(t) {
        switch(t){
            case "RATE_LIMITED_CHANGEABLE":
                return wo.RATE_LIMITED_CHANGEABLE;
            case "FREE_USER_RATE_LIMIT_EXCEEDED":
                return wo.FREE_USER_RATE_LIMIT_EXCEEDED;
            case "PRO_USER_RATE_LIMIT_EXCEEDED":
                return wo.PRO_USER_RATE_LIMIT_EXCEEDED;
            case "RESOURCE_EXHAUSTED":
                return wo.RESOURCE_EXHAUSTED;
            case "TIMEOUT":
                return wo.TIMEOUT;
            case "CUSTOM":
                return wo.CUSTOM;
            default:
                {
                    let e;
                    throw new Error(`Unknown error code: ${t}`);
                }
        }
    }
    createConnectErrorFromStep(t) {
        const e = this.mapErrorCode(t.errorCode), n = new pS({
            error: e,
            details: {
                title: t.title ?? "Error",
                detail: t.detail ?? "An error occurred",
                isRetryable: t.isRetryable ?? !0
            }
        }), i = new Us(t.detail ?? "Mock error", pr.ResourceExhausted);
        return i.details.push({
            type: pS.typeName,
            value: n.toBinary(),
            debug: n.toJson()
        }), this.logService.info(`[mock agent] throwing mock error (code=${t.errorCode})`), i;
    }
    async *createMessagesForAgentToolEvent(t, e, n) {
        if (t.step.kind !== "agent-tool") return;
        const i = t.step, r = e.composerId, s = i.tool, o = y_k(s);
        if (!o) {
            this.logService.warn(`[mock agent] unknown agent-tool ${i.tool}`);
            return;
        }
        const a = o.buildToolCall(i.toolCallId, i.args);
        if (o.isStreaming === !0) {
            const l = new YSr({
                callId: i.toolCallId,
                toolCall: a,
                modelCallId: i.toolCallId
            }), c = new ok({
                message: {
                    case: "partialToolCall",
                    value: l
                }
            });
            yield new _J({
                message: {
                    case: "interactionUpdate",
                    value: c
                }
            });
        } else {
            const l = new n9t({
                callId: i.toolCallId,
                toolCall: a,
                modelCallId: i.toolCallId
            }), c = new ok({
                message: {
                    case: "toolCallStarted",
                    value: l
                }
            });
            yield new _J({
                message: {
                    case: "interactionUpdate",
                    value: c
                }
            });
        }
        if (o.buildExecMessage !== void 0) {
            const l = o.buildExecMessage(i.toolCallId, i.args);
            n.add(i.toolCallId), this.logService.info(`[mock agent] tracking pending exec tool call ${i.toolCallId}`);
            const c = i.execDelayMs;
            c !== void 0 && c > 0 ? (this.logService.info(`[mock agent] scheduling delayed exec message for ${i.toolCallId} in ${c}ms`), setTimeout(()=>{
                const u = {
                    kind: "delayed-exec",
                    toolCallId: i.toolCallId,
                    execServerMessage: l
                };
                e.events.push(u);
            }, c)) : yield new _J({
                message: {
                    case: "execServerMessage",
                    value: l
                }
            });
        } else if (o.isStreaming === !0) {
            let l = a;
            if (i.tool === "edit") {
                const h = i;
                l = await this.performMockEdit(a, h.args, r, i.toolCallId);
            } else if (i.tool === "create_plan") {
                const h = i;
                l = this.performMockCreatePlan(a, h.args);
            }
            const c = i.completionDelayMs;
            c !== void 0 && c > 0 && await new Promise((h)=>setTimeout(h, c));
            const u = new cbt({
                callId: i.toolCallId,
                toolCall: l,
                modelCallId: i.toolCallId
            }), d = new ok({
                message: {
                    case: "toolCallCompleted",
                    value: u
                }
            });
            yield new _J({
                message: {
                    case: "interactionUpdate",
                    value: d
                }
            });
        } else if (i.tool === "task" && i.args.execute === !0) {
            const l = i, c = e.conversationId ?? e.composerId, u = new qde({
                id: 1,
                message: {
                    case: "subagentArgs",
                    value: new hbt({
                        toolCallId: i.toolCallId,
                        subagentType: l.args.subagent_type ?? "generalPurpose",
                        modelId: l.args.model ?? "",
                        prompt: l.args.prompt,
                        parentConversationId: c,
                        rootParentConversationId: c,
                        ...l.args.resume !== void 0 ? {
                            resumeAgentId: l.args.resume
                        } : {},
                        ...l.args.external_link_attachments !== void 0 && l.args.external_link_attachments.length > 0 ? {
                            selectedContext: new gY({
                                externalLinks: l.args.external_link_attachments.map((d, h)=>new ASr({
                                        url: d,
                                        uuid: `${i.toolCallId}-attachment-${h}`
                                    }))
                            })
                        } : {}
                    })
                }
            });
            n.add(i.toolCallId), this.logService.info(`[mock agent] emitting subagent exec message for task ${i.toolCallId}`), yield new _J({
                message: {
                    case: "execServerMessage",
                    value: u
                }
            });
        } else if (o.buildCompletedToolCall !== void 0) {
            const l = new cbt({
                callId: i.toolCallId,
                toolCall: o.buildCompletedToolCall(i.toolCallId, i.args),
                modelCallId: i.toolCallId
            });
            yield new _J({
                message: {
                    case: "interactionUpdate",
                    value: new ok({
                        message: {
                            case: "toolCallCompleted",
                            value: l
                        }
                    })
                }
            });
        }
    }
    async *createMessagesForMcpToolCall(t, e) {
        const n = t.params.case === "callMcpToolParams" ? t.params.value : void 0, i = n?.server ?? "", r = n?.toolName ?? "", s = {};
        if (n?.toolArgs?.fields) for (const [u, d] of Object.entries(n.toolArgs.fields))s[u] = d;
        const o = new U$e({
            name: `mcp-${i}-${r}`,
            toolCallId: t.toolCallId,
            providerIdentifier: i,
            toolName: r,
            args: s
        }), a = new Hm({
            tool: {
                case: "mcpToolCall",
                value: new ttt({
                    args: o
                })
            }
        });
        yield new _J({
            message: {
                case: "interactionUpdate",
                value: new ok({
                    message: {
                        case: "toolCallStarted",
                        value: new n9t({
                            callId: t.toolCallId,
                            toolCall: a,
                            modelCallId: t.toolCallId
                        })
                    }
                })
            }
        });
        const l = this.instantiationService.invokeFunction((u)=>u.get(tVt));
        if (!l.getMcpToolApprovalForAppCall({
            toolName: r,
            serverIdentifier: i,
            composerId: e.composerId
        }).approved) {
            const d = await this.instantiationService.invokeFunction((h)=>h.get(no)).getComposerHandleById(e.composerId);
            d && (this.logService.info(`[mock agent] MCP tool "${i}:${r}" needs approval, routing through decisions service`), await l.handleApprovalRequest(d, {
                toolCallId: t.toolCallId,
                operation: {
                    type: "mcp",
                    details: {
                        name: `mcp-${i}-${r}`,
                        toolName: r,
                        providerIdentifier: i,
                        args: {},
                        reason: "notInAllowlist",
                        canAllowlist: !0
                    }
                }
            }));
        }
        yield new _J({
            message: {
                case: "interactionUpdate",
                value: new ok({
                    message: {
                        case: "toolCallCompleted",
                        value: new cbt({
                            callId: t.toolCallId,
                            toolCall: a,
                            modelCallId: t.toolCallId
                        })
                    }
                })
            }
        });
    }
    isProtectedPath(t) {
        const e = t.replace(/\\/g, "/");
        if (e.startsWith(".vscode/") || e === ".vscode") return "Protected .vscode directory";
        if (e.startsWith(".git/") || e === ".git") return "Protected .git directory";
        if (e.startsWith(".cursor/") || e === ".cursor") return "Protected .cursor directory";
        if (e.endsWith(".code-workspace")) return "Protected .code-workspace file";
    }
    async performMockEdit(t, e, n, i) {
        if (t.tool.case !== "editToolCall") throw new Error("Expected editToolCall");
        const r = t.tool.value;
        try {
            let o = function(q) {
                const K = q.replace(/-/g, ""), V = new Uint8Array(K.length / 2);
                for(let Y = 0; Y < V.length; Y++){
                    const J = K.slice(Y * 2, Y * 2 + 2);
                    V[Y] = Number.parseInt(J, 16);
                }
                return V;
            };
            var s = o;
            const a = this.instantiationService.invokeFunction((q)=>q.get(is)), l = this.instantiationService.invokeFunction((q)=>q.get(yr)), c = this.instantiationService.invokeFunction((q)=>q.get(AE)), u = this.instantiationService.invokeFunction((q)=>q.get(no)), d = this.isProtectedPath(e.path);
            if (d) {
                const q = `${d}: ${e.path}`, K = new yQ({
                    result: {
                        case: "error",
                        value: new F$e({
                            path: e.path,
                            error: q,
                            modelVisibleError: q
                        })
                    }
                });
                return new Hm({
                    tool: {
                        case: "editToolCall",
                        value: new Wte({
                            args: r.args,
                            result: K
                        })
                    }
                });
            }
            const h = u.getComposerDataIfLoaded(n), g = h?.selectedSubComposerId ?? n, f = u.getComposerDataIfLoaded(g);
            let _ = f ?? h;
            const b = _?.subagentInfo?.parentComposerId, y = b !== void 0 ? u.getComposerDataIfLoaded(b) : void 0, S = h?.applied === !0 || f?.applied === !0 || y?.applied === !0;
            let k = S ? void 0 : _?.gitWorktree?.worktreePath;
            const C = (()=>{
                if (eW(e.path)) return rt.file(e.path);
                if (k !== void 0) return rt.file(Z0(k, e.path));
                if (S) return l.resolveRelativePath(e.path);
                const q = bxn(e.path, l, _);
                return q || l.resolveRelativePath(e.path);
            })(), T = l.getWorkspace().folders;
            if (T.length > 0 && await c.reloadCursorIgnoreForDirectory(T[0].uri), await c.shouldIgnoreUri(C, _)) {
                const q = `File is blocked by .cursorignore: ${e.path}`, K = new yQ({
                    result: {
                        case: "error",
                        value: new F$e({
                            path: e.path,
                            error: q,
                            modelVisibleError: q
                        })
                    }
                });
                return new Hm({
                    tool: {
                        case: "editToolCall",
                        value: new Wte({
                            args: r.args,
                            result: K
                        })
                    }
                });
            }
            const A = await a.exists(C), P = async (q)=>{
                const K = this.instantiationService.invokeFunction((te)=>te.get(ki)), V = new TextEncoder, Y = Xp(), J = q.targetUri.scheme === "file" ? q.targetUri.fsPath : q.targetUri.path, Q = g === n ? [
                    g
                ] : [
                    g,
                    n
                ];
                for (const te of Q){
                    const ee = u.getHandleIfLoaded(te) ?? await u.getComposerHandleById(te);
                    if (!ee) continue;
                    const re = new KD(K, te);
                    let oe = u.getComposerData(ee)?.conversationState?.fileStatesV2?.[J]?.initialContent;
                    oe === void 0 && q.beforeContent !== void 0 && (oe = o(Ai()), await re.setBlob(Y, oe, V.encode(q.beforeContent)));
                    let se;
                    q.afterContent !== void 0 && (se = o(Ai()), await re.setBlob(Y, se, V.encode(q.afterContent))), u.updateComposerDataSetStore(ee, (le)=>{
                        le("conversationState", "fileStatesV2", J, new jFo({
                            content: se,
                            initialContent: oe
                        }));
                    });
                }
            };
            if (!A && e.old_string === "") {
                const q = e.new_string;
                await a.writeFile(C, Tr.fromString(q)), await P({
                    targetUri: C,
                    beforeContent: void 0,
                    afterContent: q
                });
                const K = this.instantiationService.invokeFunction((Q)=>Q.get(WEi)), V = {
                    path: e.path,
                    before: void 0,
                    after: q,
                    metadata: {
                        toolCallId: i
                    }
                };
                await K.handleFileChange(g, V);
                const Y = new Jet({
                    path: e.path,
                    beforeFullFileContent: void 0,
                    afterFullFileContent: q
                }), J = new yQ({
                    result: {
                        case: "success",
                        value: Y
                    }
                });
                return new Hm({
                    tool: {
                        case: "editToolCall",
                        value: new Wte({
                            args: r.args,
                            result: J
                        })
                    }
                });
            }
            if (!A) {
                const q = `File not found: ${e.path}`, K = new yQ({
                    result: {
                        case: "error",
                        value: new F$e({
                            path: e.path,
                            error: q,
                            modelVisibleError: q
                        })
                    }
                });
                return new Hm({
                    tool: {
                        case: "editToolCall",
                        value: new Wte({
                            args: r.args,
                            result: K
                        })
                    }
                });
            }
            const M = C, N = (await a.readFile(C)).value.toString(), U = N.replace(e.old_string, e.new_string);
            if (e.old_string !== "" && N === U) {
                const q = "The string to replace was not found in the file.", K = new yQ({
                    result: {
                        case: "error",
                        value: new F$e({
                            path: e.path,
                            error: q,
                            modelVisibleError: q
                        })
                    }
                });
                return new Hm({
                    tool: {
                        case: "editToolCall",
                        value: new Wte({
                            args: r.args,
                            result: K
                        })
                    }
                });
            }
            await a.writeFile(M, Tr.fromString(U)), await P({
                targetUri: M,
                beforeContent: N,
                afterContent: U
            });
            const j = this.instantiationService.invokeFunction((q)=>q.get(WEi)), $ = {
                path: e.path,
                before: N,
                after: U,
                metadata: {
                    toolCallId: i
                }
            };
            await j.handleFileChange(g, $);
            const H = new Jet({
                path: e.path,
                beforeFullFileContent: N,
                afterFullFileContent: U
            }), G = new yQ({
                result: {
                    case: "success",
                    value: H
                }
            });
            return new Hm({
                tool: {
                    case: "editToolCall",
                    value: new Wte({
                        args: r.args,
                        result: G
                    })
                }
            });
        } catch (o) {
            const a = o instanceof Error ? o.message : String(o), l = new yQ({
                result: {
                    case: "error",
                    value: new F$e({
                        path: e.path,
                        error: a,
                        modelVisibleError: a
                    })
                }
            });
            return new Hm({
                tool: {
                    case: "editToolCall",
                    value: new Wte({
                        args: r.args,
                        result: l
                    })
                }
            });
        }
    }
    performMockCreatePlan(t, e) {
        if (t.tool.case !== "createPlanToolCall") throw new Error("Expected createPlanToolCall");
        const n = t.tool.value, i = new J_t({
            result: {
                case: "success",
                value: new nni
            },
            planUri: ""
        });
        return new Hm({
            tool: {
                case: "createPlanToolCall",
                value: new H4t({
                    args: n.args,
                    result: i
                })
            }
        });
    }
    cleanupStream(t, e) {
        const n = this.activeStreams.get(t);
        if (n === void 0) return;
        this.activeStreams.delete(t), n.signal.removeEventListener("abort", n.abortListener), e !== void 0 && !(e instanceof Hc) ? n.mock.events.error(e) : n.mock.events.end();
        const i = n.mock;
        i.conversationId = void 0, i.requestId = void 0, this.pendingMocks.delete(i.mockId);
    }
};

}
