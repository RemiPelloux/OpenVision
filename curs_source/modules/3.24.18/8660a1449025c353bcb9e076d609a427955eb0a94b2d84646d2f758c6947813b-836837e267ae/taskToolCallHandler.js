import { Pyk, Ryk } from "./Ycg.js";
import { bs, sd } from "./chat_pb.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { U0t, eot } from "./composerMessageStorageService.js";
import { mo, tf } from "./composer_pb.js";
import { IX, _le } from "./cursorHooks.js";
import { dh } from "./hook-step.ts";
import { eg, of } from "./modelConfigServiceTypes.js";
import { oIi } from "./nestedTaskUtils.js";
import { Zi, ki } from "./storage_2.js";
import { yos } from "./subagentComposerService.js";
import { nme } from "./subagentComposerServiceInterface.js";
import { B3, Ct, L$e, Pu, Vet } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { L4e } from "./types_10.js";
import { Qm, pi } from "./ze.js";
var Sos, kos, ipg, rpg;
export { Sos, ipg, kos, rpg };
var __wakaru_Myk_initialized = false;
export function Myk() {
if (__wakaru_Myk_initialized) return;
__wakaru_Myk_initialized = true;
"use strict";
E(), pi(), sd(), tf(), Pu(), L4e(), Zi(), Pl(), U0t(), _le(), of(), yos(), oIi(), Sos = class extends Error {
    constructor(t){
        super(t), this.name = "SubagentBlockedByHookError";
    }
}, kos = "agent.taskToolCallHandler.subagentHookRuns", ipg = 1e3, rpg = class {
    constructor(t){
        this.context = t, this.taskComposerHandles = new Map, this.subagentMetadata = new Map, this.deniedToolCallIds = new Set, this.clientSideSubagentIds = new Set, this.isDisposed = !1;
    }
    dispose() {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (const [t, e] of this.taskComposerHandles)this.disposeNestedTask(t, e);
            this.taskComposerHandles.clear(), this.subagentMetadata.clear(), this.deniedToolCallIds.clear(), this.clientSideSubagentIds.clear();
        }
    }
    disposeNestedTask(t, e) {
        this.taskComposerHandles.delete(t), Ryk(e);
    }
    findClientSideSubagentComposerId(t) {
        const e = this.context.instantiationService.invokeFunction((i)=>i.get(no)), n = e.getLoadedComposers();
        for (const i of n){
            const r = e.getHandleIfLoaded(i);
            if (r && e.getComposerData(r)?.subagentInfo?.toolCallId === t) return i;
        }
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    getSubagentTerminationReason(t) {
        return t ? this.context.instantiationService.invokeFunction((n)=>n.get(nme)).getLastTerminationReason(t) : void 0;
    }
    getTaskCompletionStatus(t, e) {
        return e?.terminationReason === "aborted" || e?.status === "cancelled" ? "aborted" : t.tool.value.result?.result?.case === "success" ? "completed" : "error";
    }
    getErrorTerminationReason(t) {
        const e = t?.subagentComposerId;
        return this.getSubagentTerminationReason(e) === "aborted" || t?.terminationReason === "aborted" ? "aborted" : "error";
    }
    getTaskSubagentComposerId(t, e) {
        const n = t.tool.value, i = n.cloudAgentBcId?.trim();
        if (i) return i;
        const r = n.result?.result?.case === "success" ? n.result.result.value.agentId?.trim() : void 0;
        if (r) return r;
        const s = n.args?.agentId?.trim();
        return s || e;
    }
    getTaskBubbleAdditionalData(t) {
        const { toolCall: e, status: n, terminationReason: i, existingAdditionalData: r } = t, s = this.getTaskSubagentComposerId(e, r?.subagentComposerId);
        return this.existingIfShallowEqual(r, {
            ...r,
            status: n,
            ...i ? {
                terminationReason: i
            } : {},
            ...s ? {
                subagentComposerId: s
            } : {}
        });
    }
    getBackgroundTaskBubbleAdditionalData(t) {
        const e = this.getTaskSubagentComposerId(t.toolCall, t.existingAdditionalData?.subagentComposerId);
        return this.existingIfShallowEqual(t.existingAdditionalData, {
            ...t.existingAdditionalData,
            status: "running",
            backgrounded: !0,
            terminationReason: void 0,
            ...e ? {
                subagentComposerId: e
            } : {}
        });
    }
    existingIfShallowEqual(t, e) {
        if (t === void 0) return e;
        const n = t, i = e, r = Object.keys(n), s = Object.keys(i);
        if (r.length !== s.length) return e;
        for (const o of s)if (!Object.is(n[o], i[o])) return e;
        return t;
    }
    ensurePlaceholderTaskBubble(t, e) {
        const n = this.getToolFormer();
        n.getBubbleIdByToolCallId(t) || Qm(()=>{
            const i = n.getOrCreateBubbleId({
                toolCallId: t,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: Ct.TASK_V2,
                name: "task_v2",
                params: {
                    case: "taskV2Params",
                    value: new L$e({
                        description: "",
                        prompt: "",
                        subagentType: "",
                        name: "general-purpose"
                    })
                },
                toolCall: e
            });
            n.setBubbleData(i, {
                status: "loading",
                additionalData: {
                    status: "loading"
                }
            });
        });
    }
    async handlePartialToolCall(t, e) {
        if (!this.isDisposed) {
            if (!t.tool.value.args) {
                this.ensurePlaceholderTaskBubble(e, t);
                return;
            }
            this.subagentMetadata.has(e) || this.deniedToolCallIds.has(e) || await this.handleToolCallStarted(t, e);
        }
    }
    async handleToolCallDelta(t, e, n) {
        if (this.isDisposed) return;
        const i = this.context.composerDataHandle.data;
        if (i.createdFromBackgroundAgent !== void 0 && (i.subagentInfo?.toolCallId === n || i.subagentInfo?.toolCallIdHistory?.includes(n) === !0) || this.deniedToolCallIds.has(n) || this.clientSideSubagentIds.has(n)) return;
        if (this.findClientSideSubagentComposerId(n)) {
            this.clientSideSubagentIds.add(n);
            return;
        }
        let s = this.taskComposerHandles.get(n);
        if (!s) {
            const a = this.getToolFormer(), l = this.context.instantiationService.invokeFunction((h)=>h.get(no));
            let c = a.getBubbleIdByToolCallId(n);
            if (!c) {
                const h = a.getBubbleDataByToolCallId(n);
                let p;
                h?.params ? p = h.params : p = new L$e({
                    description: "",
                    prompt: "",
                    subagentType: "",
                    name: "general-purpose"
                }), c = a.getOrCreateBubbleId({
                    toolCallId: n,
                    toolIndex: 0,
                    modelCallId: "",
                    toolCallType: Ct.TASK_V2,
                    name: "task_v2",
                    params: {
                        case: "taskV2Params",
                        value: p
                    }
                });
            }
            s = Pyk({
                instantiationService: this.context.instantiationService,
                composerDataService: l,
                parentHandle: this.context.composerDataHandle,
                bubbleId: c,
                toolCallId: n,
                conversationActionManager: this.context.conversationActionManager,
                toolFormer: a
            });
            const u = a.getBubbleData(c), d = u?.params?.description;
            if (d) {
                s.handle.data.name = d;
                const h = u?.additionalData;
                h && "composerData" in h && h.composerData && a.setBubbleData(c, {
                    additionalData: {
                        ...h,
                        composerData: {
                            ...h.composerData,
                            name: d
                        }
                    }
                });
            }
            this.taskComposerHandles.set(n, s);
        }
        const o = e.interactionUpdate;
        o && await s.adapter.sendUpdate(t, o);
    }
    async handleToolCallStarted(t, e, n = !1) {
        if (this.isDisposed) return;
        const i = t.tool.value, r = this.getToolFormer(), s = i.args, o = s?.description || "", a = s?.prompt || "", l = s?.subagentType, c = l?.type.case ?? "unspecified", u = s?.model;
        let d;
        l?.type.case === "custom" ? d = l.type.value.name : l?.type.case === "unspecified" || !l ? d = "general-purpose" : d = l.type.case ?? "unknown";
        const h = new L$e({
            description: o,
            prompt: a,
            subagentType: c,
            model: u,
            name: d,
            mode: s?.mode
        });
        let p = r.getBubbleIdByToolCallId(e);
        if (!p) p = Qm(()=>{
            const f = r.getOrCreateBubbleId({
                toolCallId: e,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: Ct.TASK_V2,
                name: "task_v2",
                params: {
                    case: "taskV2Params",
                    value: h
                },
                toolCall: t
            });
            return r.setBubbleData(f, {
                status: "loading",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: t,
                    status: "loading"
                })
            }), f;
        });
        else {
            const f = r.getBubbleData(p)?.additionalData;
            r.setBubbleData(p, {
                status: "loading",
                params: h,
                toolCall: t,
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: t,
                    status: "loading",
                    existingAdditionalData: f
                })
            });
        }
        const g = this.subagentMetadata.has(e);
        if (g || this.subagentMetadata.set(e, {
            startTime: Date.now(),
            subagentType: d,
            taskDescription: o,
            taskPrompt: a,
            model: u
        }), !n && !g) try {
            const f = this.context.instantiationService.invokeFunction((_)=>_.get(IX));
            if (f.hasHookForStep(dh.subagentStart) && !this.hookRan(dh.subagentStart, e)) {
                const _ = this.context.composerDataHandle.data, b = _.composerId, y = this.context.instantiationService.invokeFunction((T)=>T.get(eg)), S = y.getHookModelString(_.modelConfig), k = u ? {} : y.getHookModelFields(_.modelConfig), C = await f.executeHookForStep(dh.subagentStart, {
                    conversation_id: b,
                    generation_id: b,
                    model: u || S || "unknown",
                    ...k,
                    subagent_id: e,
                    subagent_type: d,
                    task: a,
                    parent_conversation_id: b,
                    tool_call_id: e,
                    subagent_model: u,
                    is_parallel_worker: !1,
                    git_branch: _.gitWorktree?.branchName
                });
                if (C?.permission === "deny") {
                    const T = C.user_message ? `Subagent creation blocked by hook: ${C.user_message}` : "Subagent creation blocked by hook";
                    throw console.warn("[TaskToolCallHandler] subagentStart hook denied subagent creation:", T), new Sos(T);
                }
                if (C?.permission === "ask") {
                    const T = "The 'ask' permission for subagentStart hooks is not yet implemented. Use 'allow' or 'deny' instead.";
                    throw console.warn('[TaskToolCallHandler] subagentStart hook returned unsupported permission "ask"'), new Sos(T);
                }
                this.recordHookRan(dh.subagentStart, e);
            }
        } catch (f) {
            if (f instanceof Sos) throw this.deniedToolCallIds.add(e), this.subagentMetadata.delete(e), p && r.setBubbleData(p, {
                status: "error",
                additionalData: {
                    status: "error"
                }
            }), f;
            console.error("[TaskToolCallHandler] Error executing subagentStart hook:", f);
        }
    }
    async handleToolCallCompleted(t, e) {
        if (this.isDisposed) return;
        const n = t.tool.value, i = this.getToolFormer();
        let r = i.getBubbleIdByToolCallId(e);
        const s = this.findClientSideSubagentComposerId(e);
        if (s) {
            if (r || (await this.handleToolCallStarted(t, e, !0), r = i.getBubbleIdByToolCallId(e)), r) {
                const S = this.context.instantiationService.invokeFunction(($)=>$.get(no)), k = S.getHandleIfLoaded(s), C = k ? S.getComposerData(k) : void 0, T = n.result?.result?.case === "success", I = n.result?.result?.case === "error", A = n.result?.result;
                if (A?.case === "success" && A.value.isBackground === !0) {
                    const H = A.value.agentId, G = new Vet({
                        agentId: H || s,
                        isBackground: !0
                    });
                    i.setBubbleData(r, {
                        status: "loading",
                        additionalData: {
                            status: "running",
                            backgrounded: !0,
                            terminationReason: void 0,
                            composerData: C,
                            subagentComposerId: s
                        }
                    }), i.handleToolResult(new B3({
                        tool: Ct.TASK_V2,
                        toolCallId: e,
                        result: {
                            case: "taskV2Result",
                            value: G
                        }
                    }), e, !1), this.subagentMetadata.delete(e), this.clientSideSubagentIds.delete(e);
                    return;
                }
                const P = this.getSubagentTerminationReason(s), O = T ? "completed" : I ? P === "aborted" ? "aborted" : "error" : P ?? "error", N = O === "completed" ? "completed" : O === "aborted" ? "cancelled" : "error", U = O === "completed" ? "success" : O === "aborted" ? "cancelled" : "error";
                if (i.setBubbleData(r, {
                    status: N,
                    additionalData: {
                        status: U,
                        terminationReason: O,
                        composerData: C,
                        subagentComposerId: s
                    }
                }), T) {
                    const H = n.result.result.value.agentId, G = new Vet({
                        agentId: H || s
                    });
                    i.handleToolResult(new B3({
                        tool: Ct.TASK_V2,
                        toolCallId: e,
                        result: {
                            case: "taskV2Result",
                            value: G
                        }
                    }), e, !0);
                }
                const j = this.subagentMetadata.get(e);
                if (j) {
                    const $ = O;
                    await this.executeSubagentStopHook(e, j, $, {
                        childConversationId: s
                    }), this.subagentMetadata.delete(e);
                }
                this.clientSideSubagentIds.delete(e);
            }
            return;
        }
        const o = this.taskComposerHandles.get(e), a = o?.handle.composerId;
        let l;
        o && (l = o.handle.data);
        let c;
        if (!r && l) {
            const S = l.fullConversationHeadersOnly?.[0];
            if (S) {
                const k = l.conversationMap?.[S.bubbleId];
                k?.createdAt && (c = new Date(k.createdAt).getTime());
            }
        }
        if (!r) {
            if (await this.handleToolCallStarted(t, e, !0), r = i.getBubbleIdByToolCallId(e), !r) throw new Error(`Bubble not found for tool call id ${e}`);
            if (c !== void 0) {
                const S = this.subagentMetadata.get(e);
                S && (S.startTime = c);
            }
        }
        const u = this.context.instantiationService.invokeFunction((S)=>S.get(no)), d = this.context.instantiationService.invokeFunction((S)=>S.get(eot)), h = u.getComposerBubble(this.context.composerDataHandle, r);
        if (!h) throw new Error(`Bubble data not found for bubble id ${r}`);
        await d.storeMessage(this.context.composerDataHandle.data.composerId, h);
        const g = i.getBubbleData(r)?.additionalData, f = this.getTaskCompletionStatus(t, g);
        o && this.disposeNestedTask(e, o);
        let _ = f, b, y;
        if (_ !== "aborted" && n.result?.result?.case === "success") {
            const S = n.result.result.value, k = S.agentId, C = new Vet({
                agentId: k,
                isBackground: S.isBackground
            });
            if (S.isBackground === !0) {
                i.setBubbleData(r, {
                    status: "loading",
                    additionalData: this.getBackgroundTaskBubbleAdditionalData({
                        toolCall: t,
                        existingAdditionalData: g
                    })
                }), i.handleToolResult(new B3({
                    tool: Ct.TASK_V2,
                    toolCallId: e,
                    result: {
                        case: "taskV2Result",
                        value: C
                    }
                }), e, !1), this.subagentMetadata.delete(e);
                return;
            }
            i.setBubbleData(r, {
                status: "completed",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: t,
                    status: "success",
                    terminationReason: "completed",
                    existingAdditionalData: g
                })
            }), i.handleToolResult(new B3({
                tool: Ct.TASK_V2,
                toolCallId: e,
                result: {
                    case: "taskV2Result",
                    value: C
                }
            }), e, !0), _ = "completed";
        } else if (_ !== "aborted" && n.result?.result?.case === "error") {
            const S = n.result.result.value;
            this.getErrorTerminationReason(g) === "aborted" ? (i.setBubbleData(r, {
                status: "cancelled",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: t,
                    status: "cancelled",
                    terminationReason: "aborted",
                    existingAdditionalData: g
                })
            }), _ = "aborted") : (i.setBubbleData(r, {
                status: "error",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: t,
                    status: "error",
                    terminationReason: "error",
                    existingAdditionalData: g
                })
            }), i.handleToolResult(new B3({
                tool: Ct.TASK_V2,
                toolCallId: e,
                error: {
                    clientVisibleErrorMessage: "Task failed",
                    modelVisibleErrorMessage: `Task failed: ${S.error}`,
                    actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: S.error
                }
            }), e, !0), _ = "error", b = S.error);
        }
        try {
            const S = this.context.instantiationService.invokeFunction((k)=>k.get(IX));
            if (this.deniedToolCallIds.has(e)) console.log(`[TaskToolCallHandler] Skipping subagentStop hook for denied tool call ${e}`);
            else if (S.hasHookForStep(dh.subagentStop) && !this.hookRan(dh.subagentStop, e)) {
                const k = this.subagentMetadata.get(e), C = this.context.composerDataHandle.data, T = C.composerId, I = k ? Date.now() - k.startTime : 0, A = this.context.instantiationService.invokeFunction((j)=>j.get(eg)), P = A.getHookModelString(C.modelConfig), M = k?.model ? {} : A.getHookModelFields(C.modelConfig);
                let O = 0, N = 0;
                const U = [];
                if (l) {
                    O = l.fullConversationHeadersOnly?.length ?? 0, N = Object.keys(l.codeBlockData?.codeblockMap ?? {}).length;
                    const j = [
                        ...l.fullConversationHeadersOnly ?? []
                    ].reverse().find(($)=>$.type === bs.AI);
                    if (j) {
                        const $ = l.conversationMap?.[j.bubbleId];
                        $?.text && (y = $.text);
                    }
                }
                await S.executeHookForStep(dh.subagentStop, {
                    conversation_id: T,
                    generation_id: T,
                    model: k?.model || P || "unknown",
                    ...M,
                    subagent_id: e,
                    subagent_type: k?.subagentType ?? "unknown",
                    status: _,
                    duration_ms: I,
                    summary: y,
                    parent_conversation_id: T,
                    ...a ? {
                        child_conversation_id: a
                    } : {},
                    message_count: O,
                    tool_call_count: N,
                    error_message: b,
                    modified_files: U.length > 0 ? U : void 0,
                    git_branch: C.gitWorktree?.branchName,
                    loop_count: 0,
                    task: k?.taskPrompt,
                    description: k?.taskDescription
                }), this.recordHookRan(dh.subagentStop, e);
            }
        } catch (S) {
            console.error("[TaskToolCallHandler] Error executing subagentStop hook:", S);
        }
        this.subagentMetadata.delete(e), this.deniedToolCallIds.delete(e);
    }
    hookRan(t, e) {
        return this.context.instantiationService.invokeFunction((r)=>r.get(ki)).getObject(kos, 0, []).includes(`${this.context.composerDataHandle.data.composerId}:${e}:${t}`);
    }
    recordHookRan(t, e) {
        const n = this.context.instantiationService.invokeFunction((s)=>s.get(ki)), i = n.getObject(kos, 0, []), r = `${this.context.composerDataHandle.data.composerId}:${e}:${t}`;
        n.store(kos, [
            ...i,
            r
        ].slice(-ipg), 0, 1);
    }
    async executeSubagentStopHook(t, e, n, i) {
        try {
            const r = this.context.instantiationService.invokeFunction((s)=>s.get(IX));
            if (r.hasHookForStep(dh.subagentStop) && !this.hookRan(dh.subagentStop, t)) {
                const s = this.context.composerDataHandle.data, o = s.composerId, a = Date.now() - e.startTime, l = this.context.instantiationService.invokeFunction((d)=>d.get(eg)), c = l.getHookModelString(s.modelConfig), u = e.model ? {} : l.getHookModelFields(s.modelConfig);
                await r.executeHookForStep(dh.subagentStop, {
                    conversation_id: o,
                    generation_id: o,
                    model: e.model || c || "unknown",
                    ...u,
                    subagent_id: t,
                    subagent_type: e.subagentType,
                    status: n,
                    duration_ms: a,
                    summary: i?.summary,
                    parent_conversation_id: o,
                    ...i?.childConversationId ? {
                        child_conversation_id: i.childConversationId
                    } : {},
                    message_count: i?.messageCount ?? 0,
                    tool_call_count: i?.toolCallCount ?? 0,
                    error_message: i?.errorMessage,
                    modified_files: void 0,
                    git_branch: s.gitWorktree?.branchName,
                    loop_count: 0,
                    task: e.taskPrompt,
                    description: e.taskDescription
                }), this.recordHookRan(dh.subagentStop, t);
            }
        } catch (r) {
            console.error("[TaskToolCallHandler] Error executing subagentStop hook:", r);
        }
    }
};

}
