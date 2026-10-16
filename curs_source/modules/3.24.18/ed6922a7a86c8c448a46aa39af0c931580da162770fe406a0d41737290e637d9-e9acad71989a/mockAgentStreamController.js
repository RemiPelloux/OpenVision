import { qh } from "./De_3.js";
import { Fo, Rl, si, wi } from "./HVr.js";
import { GDn, HDn, Hm, I1, VDn, Vyt, Yb, jDn, jyt, lUi, mX, njs, qQe, qyt, tg, zQe, zd } from "./agent_pb.js";
import { KW, aUe } from "./agent_service_pb.js";
import { J0e, ub } from "./async.cursor.js";
import { Xwt } from "./cgh.js";
import { Rs } from "./code_3.js";
import { BU, SN } from "./composerBlobStore.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { ACt, fjt } from "./composerDecisionsService.js";
import { A3n, n0h } from "./composerFileChangeHandlerTypes.js";
import { hoe } from "./composerUriUtils.js";
import { Jm, ps } from "./composer_pb.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { Lyt, UQe, j7t, q7t, uDn } from "./create_plan_tool_pb.js";
import { QM, R2 } from "./cursorIgnoreService.js";
import { F7t, O7t } from "./delete_exec_pb.js";
import { c4i, xyt } from "./delete_tool_pb.js";
import { G7t, NQe, Ryt, ide, tDn, xse } from "./edit_tool_pb.js";
import { Iee, _X } from "./exec_pb.js";
import { Fi, Ii } from "./files.js";
import { B7t, Iyt } from "./grep_exec_pb.js";
import { QRn, v4e } from "./grep_tool_pb.js";
import { Gp } from "./index_3.ts";
import { G6e, jUt } from "./ls_exec_pb.js";
import { Dyt, f4i } from "./ls_tool_pb.js";
import { BQe, P0e } from "./mcp_exec_pb.js";
import { Pyt, T4i } from "./mcp_tool_pb.js";
import { Jk, ba, e2 } from "./path_2.js";
import { LMn, PMn } from "./read_exec_pb.js";
import { IMe, W7t } from "./read_tool_pb.js";
import { B6e, U6e, zue } from "./sandbox_pb.js";
import { Tee, jW, q4i } from "./selected_context_pb.js";
import { $6e, Sbt, hee, l3i } from "./shell_exec_pb.js";
import { Ese, KRn } from "./shell_tool_pb.js";
import { Vn, yn } from "./storage_2.js";
import { $Me, sJe } from "./subagent_exec_pb.js";
import { ABs, C3i, DBs, IBs, MBs, PBs, Pj, RBs, S3i, T3i, k3i, w$, w3i } from "./subagents_pb.js";
import { DGs, _Dn, yDn } from "./switch_mode_tool_pb.js";
import { Kve, b4e, yN } from "./todo_tool_pb.js";
import { Kue, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { hu, io, vk } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
function i0h(e) {
    switch(e){
        case "explore":
            return new w$({
                type: {
                    case: "explore",
                    value: new k3i
                }
            });
        case "bash":
            return new w$({
                type: {
                    case: "bash",
                    value: new RBs
                }
            });
        case "shell":
            return new w$({
                type: {
                    case: "shell",
                    value: new w3i
                }
            });
        case "computerUse":
            return new w$({
                type: {
                    case: "computerUse",
                    value: new S3i
                }
            });
        case "videoReview":
        case "mediaReview":
            return new w$({
                type: {
                    case: "mediaReview",
                    value: new ABs
                }
            });
        case "watchVideo":
            return new w$({
                type: {
                    case: "watchVideo",
                    value: new PBs
                }
            });
        case "browserUse":
            return new w$({
                type: {
                    case: "browserUse",
                    value: new DBs
                }
            });
        case "debug":
            return new w$({
                type: {
                    case: "debug",
                    value: new C3i
                }
            });
        case "vmSetupHelper":
            return new w$({
                type: {
                    case: "vmSetupHelper",
                    value: new MBs
                }
            });
        case "generalPurpose":
        case "unspecified":
            return new w$({
                type: {
                    case: "unspecified",
                    value: new IBs
                }
            });
        default:
            {
                const t = "custom:", n = e.startsWith(t) ? e.slice(t.length) : e;
                return new w$({
                    type: {
                        case: "custom",
                        value: new T3i({
                            name: n
                        })
                    }
                });
            }
    }
}
function pXv(e) {
    switch(e){
        case "insecure_none":
            return B6e.INSECURE_NONE;
        case "workspace_readonly":
            return B6e.WORKSPACE_READONLY;
        case "workspace_readwrite":
        case void 0:
        default:
            return B6e.WORKSPACE_READWRITE;
    }
}
function r0h(e, t) {
    const n = t.command.trim().split(/\s+/)[0] || t.command, i = new Sbt({
        parsingFailed: !1,
        executableCommands: [
            new l3i({
                name: n,
                fullText: t.command,
                args: []
            })
        ],
        hasRedirects: !1,
        hasCommandSubstitution: !1
    }), r = new zue({
        type: pXv(t.sandbox_type),
        networkAccess: t.network_access ?? !1,
        disableTmpWrite: t.disable_tmp_write ?? !1
    });
    return new $6e({
        command: t.command,
        workingDirectory: t.working_directory ?? "",
        timeout: t.timeout ?? 0,
        toolCallId: e,
        isBackground: t.is_background ?? !1,
        skipApproval: t.skip_approval,
        parsingResult: i,
        requestedSandboxPolicy: r
    });
}
function mXv(e) {
    return s0h[e];
}
var s0h, o0h;
export { i0h, mXv, o0h, pXv, r0h, s0h };
var __wakaru_gXv_initialized = false;
export function gXv() {
if (__wakaru_gXv_initialized) return;
__wakaru_gXv_initialized = true;
"use strict";
x(), Gp(), hg(), zd(), aUe(), Lyt(), F7t(), c4i(), tDn(), _X(), B7t(), QRn(), G6e(), f4i(), P0e(), T4i(), LMn(), W7t(), U6e(), jW(), hee(), KRn(), $Me(), Pj(), yDn(), b4e(), Jm(), ql(), hu(), ub(), Fo(), si(), ba(), Qt(), Js(), Fi(), Vn(), ci(), BU(), nl(), fjt(), n0h(), hoe(), R2(), s0h = {
    delete: {
        buildToolCall: (e, t)=>{
            const n = new O7t({
                path: t.path,
                toolCallId: e
            }), i = new xyt({
                args: n
            });
            return new tg({
                tool: {
                    case: "deleteToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (e, t)=>{
            const n = new O7t({
                path: t.path,
                toolCallId: e
            });
            return new Iee({
                id: 1,
                message: {
                    case: "deleteArgs",
                    value: n
                }
            });
        }
    },
    read: {
        buildToolCall: (e, t)=>{
            const n = new IMe({
                args: {
                    path: t.path,
                    offset: t.offset,
                    limit: t.limit
                }
            });
            return new tg({
                tool: {
                    case: "readToolCall",
                    value: n
                }
            });
        },
        buildExecMessage: (e, t)=>{
            const n = new PMn({
                path: t.path,
                offset: t.offset,
                limit: t.limit,
                toolCallId: e
            });
            return new Iee({
                id: 1,
                message: {
                    case: "readArgs",
                    value: n
                }
            });
        }
    },
    ls: {
        buildToolCall: (e, t)=>{
            const n = new jUt({
                path: t.path,
                ignore: t.ignore ? [
                    ...t.ignore
                ] : [],
                toolCallId: e
            }), i = new Dyt({
                args: n
            });
            return new tg({
                tool: {
                    case: "lsToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (e, t)=>{
            const n = new jUt({
                path: t.path,
                ignore: t.ignore ? [
                    ...t.ignore
                ] : [],
                toolCallId: e
            });
            return new Iee({
                id: 1,
                message: {
                    case: "lsArgs",
                    value: n
                }
            });
        }
    },
    grep: {
        buildToolCall: (e, t)=>{
            const n = new Iyt({
                pattern: t.pattern,
                path: t.path,
                glob: t.glob,
                outputMode: t.outputMode,
                contextBefore: t.contextBefore,
                contextAfter: t.contextAfter,
                context: t.context,
                caseInsensitive: t.caseInsensitive,
                type: t.type,
                headLimit: t.headLimit,
                multiline: t.multiline,
                toolCallId: e
            }), i = new v4e({
                args: n
            });
            return new tg({
                tool: {
                    case: "grepToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (e, t)=>{
            const n = new Iyt({
                pattern: t.pattern,
                path: t.path,
                glob: t.glob,
                outputMode: t.outputMode,
                contextBefore: t.contextBefore,
                contextAfter: t.contextAfter,
                context: t.context,
                caseInsensitive: t.caseInsensitive,
                type: t.type,
                headLimit: t.headLimit,
                multiline: t.multiline,
                toolCallId: e
            });
            return new Iee({
                id: 1,
                message: {
                    case: "grepArgs",
                    value: n
                }
            });
        }
    },
    shell: {
        buildToolCall: (e, t)=>{
            const n = r0h(e, t), i = new Ese({
                args: n
            });
            return new tg({
                tool: {
                    case: "shellToolCall",
                    value: i
                }
            });
        },
        buildExecMessage: (e, t)=>{
            const n = r0h(e, t);
            return new Iee({
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
        buildToolCall: (e, t)=>{
            const n = new Ryt({
                path: t.path,
                streamContent: `<<<<<<< SEARCH
${t.old_string}
=======
${t.new_string}
>>>>>>> REPLACE`
            }), i = new xse({
                args: n
            });
            return new tg({
                tool: {
                    case: "editToolCall",
                    value: i
                }
            });
        }
    },
    create_plan: {
        isStreaming: !0,
        buildToolCall: (e, t)=>{
            const n = (o)=>{
                switch(o){
                    case "pending":
                        return yN.PENDING;
                    case "in_progress":
                        return yN.IN_PROGRESS;
                    case "completed":
                        return yN.COMPLETED;
                    case "cancelled":
                        return yN.CANCELLED;
                    default:
                        return yN.PENDING;
                }
            }, i = (o)=>o ? o.map((a)=>new Kve({
                        id: a.id,
                        content: a.content,
                        status: n(a.status),
                        dependencies: a.dependencies ? [
                            ...a.dependencies
                        ] : []
                    })) : [], r = new q7t({
                plan: t.plan,
                overview: t.overview ?? "",
                name: t.name ?? "",
                todos: i(t.todos),
                isProject: t.is_project ?? !1,
                phases: t.phases?.map((o)=>({
                        name: o.name,
                        todos: i(o.todos)
                    })) ?? []
            }), s = new j7t({
                args: r
            });
            return new tg({
                tool: {
                    case: "createPlanToolCall",
                    value: s
                }
            });
        }
    },
    task: {
        buildToolCall: (e, t)=>{
            const n = new qQe({
                args: {
                    prompt: t.prompt,
                    description: t.description ?? t.prompt,
                    model: t.model,
                    resume: t.resume,
                    subagentType: t.subagent_type ? i0h(t.subagent_type) : void 0
                }
            });
            return new tg({
                tool: {
                    case: "taskToolCall",
                    value: n
                }
            });
        },
        buildCompletedToolCall: (e, t)=>{
            const n = new qQe({
                args: {
                    prompt: t.prompt,
                    description: t.description ?? t.prompt,
                    model: t.model,
                    resume: t.resume,
                    subagentType: t.subagent_type ? i0h(t.subagent_type) : void 0
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
            return new tg({
                tool: {
                    case: "taskToolCall",
                    value: n
                }
            });
        }
    }
}, o0h = class {
    constructor(e, t){
        this.pendingMocks = new Map, this.activeStreams = new Map, this.interactionQueryIdCounter = 0, this.recordedRunRequests = [], this.logService = e, this.instantiationService = t;
    }
    createMock(e) {
        const t = zn(), n = {
            mockId: t,
            composerId: e,
            events: new J0e(void 0),
            pendingExecToolCallIds: new Set
        };
        return this.pendingMocks.set(t, n), this.logService.info(`[mock agent] created mock ${t} (composer=${e})`), t;
    }
    createMockEvent(e) {
        if (e.kind !== "tool-call") return {
            step: e
        };
        try {
            const t = Kue.fromJsonString(JSON.stringify(e.toolCall));
            return {
                step: e,
                parsedToolCall: t
            };
        } catch (t) {
            const n = t instanceof Error ? t.message : String(t);
            throw new Error(`Failed to parse tool call event: ${n}`);
        }
    }
    pushEvent(e, t) {
        const n = this.pendingMocks.get(e);
        if (n === void 0) throw new Error(`Mock agent stream ${e} not found`);
        const i = this.createMockEvent(t);
        n.events.push(i), this.logService.info(`[mock agent] pushed event for mock ${e} (kind=${t.kind})`);
    }
    async completeMock(e) {
        const t = this.pendingMocks.get(e);
        if (t === void 0) {
            this.logService.warn(`[mock agent] completeMock called for unknown mock ${e}`);
            return;
        }
        t.pendingExecToolCallIds.size > 0 && (this.logService.info(`[mock agent] waiting for ${t.pendingExecToolCallIds.size} pending exec tool calls to complete`), await this.waitForPendingExecToolCalls(t)), t.events.push({
            step: {
                kind: "turn-ended"
            }
        }), t.events.end(), this.logService.info(`[mock agent] completed mock ${e}`);
    }
    async waitForPendingExecToolCalls(e) {
        const t = this.instantiationService.invokeFunction((a)=>a.get(Zs)), n = await t.getComposerHandleById(e.composerId);
        if (!n) {
            this.logService.warn(`[mock agent] could not get composer handle for ${e.composerId}`);
            return;
        }
        const i = t.getComposerCapability(n, ps.TOOL_FORMER);
        if (!i) {
            this.logService.warn(`[mock agent] could not get ToolFormer for ${e.composerId}`);
            return;
        }
        const r = 1e4, s = 100, o = Date.now();
        for(; e.pendingExecToolCallIds.size > 0 && Date.now() - o < r;){
            for (const a of [
                ...e.pendingExecToolCallIds
            ]){
                const c = i.getBubbleIdByToolCallId(a);
                if (!c) continue;
                const l = i.getBubbleData(c);
                (l?.status === "completed" || l?.status === "error") && (e.pendingExecToolCallIds.delete(a), this.logService.info(`[mock agent] tool call ${a} completed with status ${l.status}`));
            }
            e.pendingExecToolCallIds.size > 0 && await new Promise((a)=>setTimeout(a, s));
        }
        e.pendingExecToolCallIds.size > 0 && this.logService.warn(`[mock agent] timed out waiting for pending exec tool calls: ${[
            ...e.pendingExecToolCallIds
        ].join(", ")}`);
    }
    disposeMock(e) {
        const t = this.pendingMocks.get(e);
        if (t === void 0) {
            this.logService.warn(`[mock agent] disposeMock called for unknown mock ${e}`);
            return;
        }
        const n = t.conversationId, i = t.requestId;
        if (n !== void 0 && i !== void 0) {
            const r = `${n}:${i}`;
            this.logService.info(`[mock agent] disposing active mock ${e} (streamKey=${r})`), this.cleanupStream(r, new Rl);
        } else this.logService.info(`[mock agent] disposing pending mock ${e}`), this.pendingMocks.delete(e), t.events.error(new Rl);
    }
    abortMock(e) {
        this.disposeMock(e);
    }
    async buildSyntheticCheckpointMessage(e) {
        const t = e.conversationId ?? e.composerId, n = this.instantiationService.invokeFunction((y)=>y.get(Zs)), i = this.instantiationService.invokeFunction((y)=>y.get(yn)), r = await n.getComposerHandleById(t), s = r ? n.getLastHumanBubbleId(r) : void 0, o = r?.data.conversationState, a = o?.turns ?? [], c = a.length, l = new TextEncoder, u = l.encode(`mock-turn-${e.mockId}-${c}`), h = l.encode(`mock-usermsg-${e.mockId}-${c}`), p = new I1({
            text: "",
            messageId: s ?? t
        }), g = new SN(i, t), f = qh();
        await g.setBlob(f, h, p.toBinary());
        const v = new mX({
            turn: {
                case: "agentConversationTurn",
                value: new HDn({
                    userMessage: h,
                    steps: []
                })
            }
        });
        await g.setBlob(f, u, v.toBinary());
        const b = new Hm({
            ...o,
            turns: [
                ...a,
                u
            ]
        });
        return this.logService.info(`[mock agent] built synthetic checkpoint for mock ${e.mockId} (turns=${b.turns.length}, messageId=${s ?? t})`), new KW({
            message: {
                case: "conversationCheckpointUpdate",
                value: b
            }
        });
    }
    getMockStream(e, t, n, i) {
        i !== void 0 && this.recordRunRequest(e, i);
        const r = this.pickPendingMock(e);
        if (r === void 0) return;
        r.composerId = e, r.conversationId = e, r.requestId = t;
        const s = `${e}:${t}`, o = ()=>{
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
    recordRunRequest(e, t) {
        const n = t.action?.action.case === "userMessageAction" ? t.action.action.value.userMessage : void 0;
        this.recordedRunRequests.push({
            conversationId: e,
            subagentTypeName: t.subagentTypeName || void 0,
            modelId: t.requestedModel?.modelId || t.modelDetails?.modelId || void 0,
            maxMode: t.requestedModel?.maxMode ?? t.modelDetails?.maxMode,
            parameters: (t.requestedModel?.parameters ?? []).map((i)=>({
                    id: i.id,
                    value: i.value
                })),
            externalLinkCount: n?.selectedContext?.externalLinks.length ?? 0
        });
    }
    getRecordedRunRequests() {
        return this.recordedRunRequests.map((e)=>({
                ...e,
                parameters: e.parameters.map((t)=>({
                        ...t
                    }))
            }));
    }
    pickPendingMock(e) {
        for (const t of this.pendingMocks.values())if (t.conversationId === void 0 && t.composerId === e) return t;
        for (const t of this.pendingMocks.values())if (t.conversationId === void 0) return t;
    }
    async *createStreamFromEvents(e, t) {
        try {
            let n = 0;
            for await (const i of e.events){
                if (n++, "kind" in i && i.kind === "delayed-exec") {
                    const s = i;
                    this.logService.info(`[mock agent] emitting delayed exec message for ${s.toolCallId}`), yield new KW({
                        message: {
                            case: "execServerMessage",
                            value: s.execServerMessage
                        }
                    });
                    continue;
                }
                const r = i;
                if (r.step.kind === "checkpoint") try {
                    const s = this.buildSyntheticCheckpointMessage(e), o = new Promise((c)=>setTimeout(()=>c(void 0), 3e3)), a = await Promise.race([
                        s,
                        o
                    ]);
                    a ? yield a : this.logService.warn(`[mock agent] synthetic checkpoint timed out for mock ${e.mockId}, skipping`);
                } catch (s) {
                    this.logService.warn(`[mock agent] failed to build synthetic checkpoint for mock ${e.mockId}, skipping`, s instanceof Error ? s : void 0);
                }
                else if (r.step.kind === "agent-tool") for await (const s of this.createMessagesForAgentToolEvent(r, e, e.pendingExecToolCallIds))yield s;
                else if (r.step.kind === "tool-call" && r.parsedToolCall?.tool === nt.CALL_MCP_TOOL) for await (const s of this.createMessagesForMcpToolCall(r.parsedToolCall, e))yield s;
                else yield this.createMessageForEvent(r);
            }
            this.logService.info(`[mock agent] stream ${t} completed with ${n} events`);
        } catch (n) {
            const i = n instanceof Error ? n : new Error(String(n));
            throw this.logService.error(`[mock agent] stream error for ${t}`, i), this.cleanupStream(t, i), i;
        } finally{
            this.cleanupStream(t, void 0);
        }
    }
    nextInteractionQueryId() {
        return this.interactionQueryIdCounter += 1, this.interactionQueryIdCounter;
    }
    createInteractionQueryMessage(e) {
        if (e.tool !== nt.SWITCH_MODE) return;
        if (e.params.case !== "switchModeParams") {
            this.logService.warn("[mock agent] switch mode tool call missing switch_mode_params");
            return;
        }
        const t = e.params.value, n = new _Dn({
            targetModeId: t.toModeId,
            explanation: t.explanation,
            toolCallId: e.toolCallId
        }), i = new qyt({
            id: this.nextInteractionQueryId(),
            query: {
                case: "switchModeRequestQuery",
                value: new DGs({
                    args: n
                })
            }
        });
        return new KW({
            message: {
                case: "interactionQuery",
                value: i
            }
        });
    }
    createMessageForEvent(e) {
        if (e.step.kind === "tool-call") {
            const n = e.parsedToolCall ?? Kue.fromJsonString(JSON.stringify(e.step.toolCall));
            if (n.tool === nt.CALL_MCP_TOOL && n.params.case === "callMcpToolParams") {
                const r = n.params.value, s = new Pyt({
                    args: new BQe({
                        name: `mcp-${r.server}-${r.toolName}`,
                        toolCallId: n.toolCallId,
                        providerIdentifier: r.server,
                        toolName: r.toolName
                    })
                }), o = new tg({
                    tool: {
                        case: "mcpToolCall",
                        value: s
                    }
                });
                return new KW({
                    message: {
                        case: "interactionUpdate",
                        value: new Yb({
                            message: {
                                case: "toolCallStarted",
                                value: new jyt({
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
            return i || (this.logService.warn("[mock agent] unsupported client-side tool call in mock stream"), new KW({
                message: {
                    case: "interactionUpdate",
                    value: new Yb({
                        message: {
                            case: "textDelta",
                            value: new Vyt({
                                text: ""
                            })
                        }
                    })
                }
            }));
        }
        let t;
        if (e.step.kind === "error") throw this.createConnectErrorFromStep(e.step);
        return e.step.kind === "thinking" ? t = new Yb({
            message: {
                case: "thinkingDelta",
                value: new GDn({
                    text: e.step.value
                })
            }
        }) : e.step.kind === "thinking-complete" ? t = new Yb({
            message: {
                case: "thinkingCompleted",
                value: new VDn({})
            }
        }) : e.step.kind === "text" ? t = new Yb({
            message: {
                case: "textDelta",
                value: new Vyt({
                    text: e.step.value
                })
            }
        }) : e.step.kind === "turn-ended" ? t = new Yb({
            message: {
                case: "turnEnded",
                value: new jDn({})
            }
        }) : t = new Yb({
            message: {
                case: "textDelta",
                value: new Vyt({
                    text: ""
                })
            }
        }), new KW({
            message: {
                case: "interactionUpdate",
                value: t
            }
        });
    }
    mapErrorCode(e) {
        switch(e){
            case "RATE_LIMITED_CHANGEABLE":
                return io.RATE_LIMITED_CHANGEABLE;
            case "FREE_USER_RATE_LIMIT_EXCEEDED":
                return io.FREE_USER_RATE_LIMIT_EXCEEDED;
            case "PRO_USER_RATE_LIMIT_EXCEEDED":
                return io.PRO_USER_RATE_LIMIT_EXCEEDED;
            case "RESOURCE_EXHAUSTED":
                return io.RESOURCE_EXHAUSTED;
            case "TIMEOUT":
                return io.TIMEOUT;
            case "CUSTOM":
                return io.CUSTOM;
            default:
                {
                    let t;
                    throw new Error(`Unknown error code: ${e}`);
                }
        }
    }
    createConnectErrorFromStep(e) {
        const t = this.mapErrorCode(e.errorCode), n = new vk({
            error: t,
            details: {
                title: e.title ?? "Error",
                detail: e.detail ?? "An error occurred",
                isRetryable: e.isRetryable ?? !0
            }
        }), i = new Qo(e.detail ?? "Mock error", Rs.ResourceExhausted);
        return i.details.push({
            type: vk.typeName,
            value: n.toBinary(),
            debug: n.toJson()
        }), this.logService.info(`[mock agent] throwing mock error (code=${e.errorCode})`), i;
    }
    async *createMessagesForAgentToolEvent(e, t, n) {
        if (e.step.kind !== "agent-tool") return;
        const i = e.step, r = t.composerId, s = i.tool, o = mXv(s);
        if (!o) {
            this.logService.warn(`[mock agent] unknown agent-tool ${i.tool}`);
            return;
        }
        const a = o.buildToolCall(i.toolCallId, i.args);
        if (o.isStreaming === !0) {
            const c = new lUi({
                callId: i.toolCallId,
                toolCall: a,
                modelCallId: i.toolCallId
            }), l = new Yb({
                message: {
                    case: "partialToolCall",
                    value: c
                }
            });
            yield new KW({
                message: {
                    case: "interactionUpdate",
                    value: l
                }
            });
        } else {
            const c = new jyt({
                callId: i.toolCallId,
                toolCall: a,
                modelCallId: i.toolCallId
            }), l = new Yb({
                message: {
                    case: "toolCallStarted",
                    value: c
                }
            });
            yield new KW({
                message: {
                    case: "interactionUpdate",
                    value: l
                }
            });
        }
        if (o.buildExecMessage !== void 0) {
            const c = o.buildExecMessage(i.toolCallId, i.args);
            n.add(i.toolCallId), this.logService.info(`[mock agent] tracking pending exec tool call ${i.toolCallId}`);
            const l = i.execDelayMs;
            l !== void 0 && l > 0 ? (this.logService.info(`[mock agent] scheduling delayed exec message for ${i.toolCallId} in ${l}ms`), setTimeout(()=>{
                const u = {
                    kind: "delayed-exec",
                    toolCallId: i.toolCallId,
                    execServerMessage: c
                };
                t.events.push(u);
            }, l)) : yield new KW({
                message: {
                    case: "execServerMessage",
                    value: c
                }
            });
        } else if (o.isStreaming === !0) {
            let c = a;
            if (i.tool === "edit") {
                const p = i;
                c = await this.performMockEdit(a, p.args, r, i.toolCallId);
            } else if (i.tool === "create_plan") {
                const p = i;
                c = this.performMockCreatePlan(a, p.args);
            }
            const l = i.completionDelayMs;
            l !== void 0 && l > 0 && await new Promise((p)=>setTimeout(p, l));
            const u = new zQe({
                callId: i.toolCallId,
                toolCall: c,
                modelCallId: i.toolCallId
            }), h = new Yb({
                message: {
                    case: "toolCallCompleted",
                    value: u
                }
            });
            yield new KW({
                message: {
                    case: "interactionUpdate",
                    value: h
                }
            });
        } else if (i.tool === "task" && i.args.execute === !0) {
            const c = i, l = t.conversationId ?? t.composerId, u = new Iee({
                id: 1,
                message: {
                    case: "subagentArgs",
                    value: new sJe({
                        toolCallId: i.toolCallId,
                        subagentType: c.args.subagent_type ?? "generalPurpose",
                        modelId: c.args.model ?? "",
                        prompt: c.args.prompt,
                        parentConversationId: l,
                        rootParentConversationId: l,
                        ...c.args.resume !== void 0 ? {
                            resumeAgentId: c.args.resume
                        } : {},
                        ...c.args.external_link_attachments !== void 0 && c.args.external_link_attachments.length > 0 ? {
                            selectedContext: new Tee({
                                externalLinks: c.args.external_link_attachments.map((h, p)=>new q4i({
                                        url: h,
                                        uuid: `${i.toolCallId}-attachment-${p}`
                                    }))
                            })
                        } : {}
                    })
                }
            });
            n.add(i.toolCallId), this.logService.info(`[mock agent] emitting subagent exec message for task ${i.toolCallId}`), yield new KW({
                message: {
                    case: "execServerMessage",
                    value: u
                }
            });
        } else if (o.buildCompletedToolCall !== void 0) {
            const c = new zQe({
                callId: i.toolCallId,
                toolCall: o.buildCompletedToolCall(i.toolCallId, i.args),
                modelCallId: i.toolCallId
            });
            yield new KW({
                message: {
                    case: "interactionUpdate",
                    value: new Yb({
                        message: {
                            case: "toolCallCompleted",
                            value: c
                        }
                    })
                }
            });
        }
    }
    async *createMessagesForMcpToolCall(e, t) {
        const n = e.params.case === "callMcpToolParams" ? e.params.value : void 0, i = n?.server ?? "", r = n?.toolName ?? "", s = {};
        if (n?.toolArgs?.fields) for (const [u, h] of Object.entries(n.toolArgs.fields))s[u] = h;
        const o = new BQe({
            name: `mcp-${i}-${r}`,
            toolCallId: e.toolCallId,
            providerIdentifier: i,
            toolName: r,
            args: s
        }), a = new tg({
            tool: {
                case: "mcpToolCall",
                value: new Pyt({
                    args: o
                })
            }
        });
        yield new KW({
            message: {
                case: "interactionUpdate",
                value: new Yb({
                    message: {
                        case: "toolCallStarted",
                        value: new jyt({
                            callId: e.toolCallId,
                            toolCall: a,
                            modelCallId: e.toolCallId
                        })
                    }
                })
            }
        });
        const c = this.instantiationService.invokeFunction((u)=>u.get(ACt));
        if (!c.getMcpToolApprovalForAppCall({
            toolName: r,
            serverIdentifier: i,
            composerId: t.composerId
        }).approved) {
            const h = await this.instantiationService.invokeFunction((p)=>p.get(Zs)).getComposerHandleById(t.composerId);
            h && (this.logService.info(`[mock agent] MCP tool "${i}:${r}" needs approval, routing through decisions service`), await c.handleApprovalRequest(h, {
                toolCallId: e.toolCallId,
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
        yield new KW({
            message: {
                case: "interactionUpdate",
                value: new Yb({
                    message: {
                        case: "toolCallCompleted",
                        value: new zQe({
                            callId: e.toolCallId,
                            toolCall: a,
                            modelCallId: e.toolCallId
                        })
                    }
                })
            }
        });
    }
    isProtectedPath(e) {
        const t = e.replace(/\\/g, "/");
        if (t.startsWith(".vscode/") || t === ".vscode") return "Protected .vscode directory";
        if (t.startsWith(".git/") || t === ".git") return "Protected .git directory";
        if (t.startsWith(".cursor/") || t === ".cursor") return "Protected .cursor directory";
        if (t.endsWith(".code-workspace")) return "Protected .code-workspace file";
    }
    async performMockEdit(e, t, n, i) {
        if (e.tool.case !== "editToolCall") throw new Error("Expected editToolCall");
        const r = e.tool.value;
        try {
            let o = function(Y) {
                const Z = Y.replace(/-/g, ""), K = new Uint8Array(Z.length / 2);
                for(let J = 0; J < K.length; J++){
                    const ne = Z.slice(J * 2, J * 2 + 2);
                    K[J] = Number.parseInt(ne, 16);
                }
                return K;
            };
            var s = o;
            const a = this.instantiationService.invokeFunction((Y)=>Y.get(Ii)), c = this.instantiationService.invokeFunction((Y)=>Y.get(Jn)), l = this.instantiationService.invokeFunction((Y)=>Y.get(QM)), u = this.instantiationService.invokeFunction((Y)=>Y.get(Zs)), h = this.isProtectedPath(t.path);
            if (h) {
                const Y = `${h}: ${t.path}`, Z = new ide({
                    result: {
                        case: "error",
                        value: new NQe({
                            path: t.path,
                            error: Y,
                            modelVisibleError: Y
                        })
                    }
                });
                return new tg({
                    tool: {
                        case: "editToolCall",
                        value: new xse({
                            args: r.args,
                            result: Z
                        })
                    }
                });
            }
            const p = u.getComposerDataIfLoaded(n), f = p?.selectedSubComposerId ?? n, v = u.getComposerDataIfLoaded(f);
            let b = v ?? p;
            const y = b?.subagentInfo?.parentComposerId, T = y !== void 0 ? u.getComposerDataIfLoaded(y) : void 0, E = p?.applied === !0 || v?.applied === !0 || T?.applied === !0;
            let A = E ? void 0 : b?.gitWorktree?.worktreePath;
            const R = (()=>{
                if (e2(t.path)) return Ee.file(t.path);
                if (A !== void 0) return Ee.file(Jk(A, t.path));
                if (E) return c.resolveRelativePath(t.path);
                const Y = Xwt(t.path, c, b);
                return Y || c.resolveRelativePath(t.path);
            })(), D = c.getWorkspace().folders;
            if (D.length > 0 && await l.reloadCursorIgnoreForDirectory(D[0].uri), await l.shouldIgnoreUri(R, b)) {
                const Y = `File is blocked by .cursorignore: ${t.path}`, Z = new ide({
                    result: {
                        case: "error",
                        value: new NQe({
                            path: t.path,
                            error: Y,
                            modelVisibleError: Y
                        })
                    }
                });
                return new tg({
                    tool: {
                        case: "editToolCall",
                        value: new xse({
                            args: r.args,
                            result: Z
                        })
                    }
                });
            }
            const N = await a.exists(R), O = async (Y)=>{
                const Z = this.instantiationService.invokeFunction((se)=>se.get(yn)), K = new TextEncoder, J = qh(), ne = Y.targetUri.scheme === "file" ? Y.targetUri.fsPath : Y.targetUri.path, ee = f === n ? [
                    f
                ] : [
                    f,
                    n
                ];
                for (const se of ee){
                    const re = u.getHandleIfLoaded(se) ?? await u.getComposerHandleById(se);
                    if (!re) continue;
                    const ue = new SN(Z, se);
                    let de = u.getComposerData(re)?.conversationState?.fileStatesV2?.[ne]?.initialContent;
                    de === void 0 && Y.beforeContent !== void 0 && (de = o(zn()), await ue.setBlob(J, de, K.encode(Y.beforeContent)));
                    let le;
                    Y.afterContent !== void 0 && (le = o(zn()), await ue.setBlob(J, le, K.encode(Y.afterContent))), u.updateComposerDataSetStore(re, (ye)=>{
                        ye("conversationState", "fileStatesV2", ne, new njs({
                            content: le,
                            initialContent: de
                        }));
                    });
                }
            };
            if (!N && t.old_string === "") {
                const Y = t.new_string;
                await a.writeFile(R, wi.fromString(Y)), await O({
                    targetUri: R,
                    beforeContent: void 0,
                    afterContent: Y
                });
                const Z = this.instantiationService.invokeFunction((ee)=>ee.get(A3n)), K = {
                    path: t.path,
                    before: void 0,
                    after: Y,
                    metadata: {
                        toolCallId: i
                    }
                };
                await Z.handleFileChange(f, K);
                const J = new G7t({
                    path: t.path,
                    beforeFullFileContent: void 0,
                    afterFullFileContent: Y
                }), ne = new ide({
                    result: {
                        case: "success",
                        value: J
                    }
                });
                return new tg({
                    tool: {
                        case: "editToolCall",
                        value: new xse({
                            args: r.args,
                            result: ne
                        })
                    }
                });
            }
            if (!N) {
                const Y = `File not found: ${t.path}`, Z = new ide({
                    result: {
                        case: "error",
                        value: new NQe({
                            path: t.path,
                            error: Y,
                            modelVisibleError: Y
                        })
                    }
                });
                return new tg({
                    tool: {
                        case: "editToolCall",
                        value: new xse({
                            args: r.args,
                            result: Z
                        })
                    }
                });
            }
            const F = R, $ = (await a.readFile(R)).value.toString(), W = $.replace(t.old_string, t.new_string);
            if (t.old_string !== "" && $ === W) {
                const Y = "The string to replace was not found in the file.", Z = new ide({
                    result: {
                        case: "error",
                        value: new NQe({
                            path: t.path,
                            error: Y,
                            modelVisibleError: Y
                        })
                    }
                });
                return new tg({
                    tool: {
                        case: "editToolCall",
                        value: new xse({
                            args: r.args,
                            result: Z
                        })
                    }
                });
            }
            await a.writeFile(F, wi.fromString(W)), await O({
                targetUri: F,
                beforeContent: $,
                afterContent: W
            });
            const G = this.instantiationService.invokeFunction((Y)=>Y.get(A3n)), q = {
                path: t.path,
                before: $,
                after: W,
                metadata: {
                    toolCallId: i
                }
            };
            await G.handleFileChange(f, q);
            const z = new G7t({
                path: t.path,
                beforeFullFileContent: $,
                afterFullFileContent: W
            }), X = new ide({
                result: {
                    case: "success",
                    value: z
                }
            });
            return new tg({
                tool: {
                    case: "editToolCall",
                    value: new xse({
                        args: r.args,
                        result: X
                    })
                }
            });
        } catch (o) {
            const a = o instanceof Error ? o.message : String(o), c = new ide({
                result: {
                    case: "error",
                    value: new NQe({
                        path: t.path,
                        error: a,
                        modelVisibleError: a
                    })
                }
            });
            return new tg({
                tool: {
                    case: "editToolCall",
                    value: new xse({
                        args: r.args,
                        result: c
                    })
                }
            });
        }
    }
    performMockCreatePlan(e, t) {
        if (e.tool.case !== "createPlanToolCall") throw new Error("Expected createPlanToolCall");
        const n = e.tool.value, i = new UQe({
            result: {
                case: "success",
                value: new uDn
            },
            planUri: ""
        });
        return new tg({
            tool: {
                case: "createPlanToolCall",
                value: new j7t({
                    args: n.args,
                    result: i
                })
            }
        });
    }
    cleanupStream(e, t) {
        const n = this.activeStreams.get(e);
        if (n === void 0) return;
        this.activeStreams.delete(e), n.signal.removeEventListener("abort", n.abortListener), t !== void 0 && !(t instanceof Rl) ? n.mock.events.error(t) : n.mock.events.end();
        const i = n.mock;
        i.conversationId = void 0, i.requestId = void 0, this.pendingMocks.delete(i.mockId);
    }
};

}
