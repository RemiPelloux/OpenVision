import { Bji, d7i } from "./A3u.js";
import { G0e, I$t, O5 } from "./De_3.js";
import { Ltt } from "./agentResponseAdapter.js";
import { Hu, Tr } from "./chat_pb.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { W4e, gJe } from "./composerMessageStorageService.js";
import { Jm, ps } from "./composer_pb.js";
import { KX, V$ } from "./cursorHooks.js";
import { Lu } from "./hook-step.ts";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { H3n } from "./nestedTaskUtils.js";
import { Lh, qn } from "./qIc.js";
import { k2n } from "./standaloneOpenModelConfig.js";
import { Vn, yn } from "./storage_2.js";
import { kjt } from "./subagentComposerConstants.js";
import { jQi } from "./subagentComposerService.js";
import { wtt } from "./subagentComposerServiceInterface.js";
import { V6e, j6e, nt, ql, xR } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { B1e } from "./types_10.js";
function DQv(e) {
    try {
        e.adapter.dispose();
    } finally{
        d7i(e.composerData);
    }
}
function MQv(e) {
    const { instantiationService: t, composerDataService: n, parentHandle: i, bubbleId: r, toolCallId: s, conversationActionManager: o, toolFormer: a } = e, c = `${kjt}${s}`, l = Bji(n, i, r, c), u = G0e(t, c, {
        forceCapabilities: [
            ps.TOOL_FORMER,
            ps.THINKING,
            ps.QUEUING
        ],
        providedHandle: l
    }), h = I$t(i.data.gitWorktree, {
        ...O5({
            modelName: k2n,
            maxMode: !1
        }, c),
        workspaceIdentifier: i.data.workspaceIdentifier,
        capabilities: u
    });
    a.setBubbleData(r, {
        additionalData: {
            composerData: h,
            status: "running"
        }
    });
    const p = new Ltt(t, l, o, void 0);
    return {
        handle: l,
        adapter: p,
        composerData: h
    };
}
var qQi, zQi, NTh, OTh;
export { DQv, MQv, NTh, OTh, qQi, zQi };
var __wakaru_PQv_initialized = false;
export function PQv() {
if (__wakaru_PQv_initialized) return;
__wakaru_PQv_initialized = true;
"use strict";
x(), qn(), Hu(), Jm(), ql(), B1e(), Vn(), nl(), gJe(), KX(), i0(), jQi(), H3n(), qQi = class extends Error {
    constructor(e){
        super(e), this.name = "SubagentBlockedByHookError";
    }
}, zQi = "agent.taskToolCallHandler.subagentHookRuns", NTh = 1e3, OTh = class {
    constructor(e){
        this.context = e, this.taskComposerHandles = new Map, this.subagentMetadata = new Map, this.deniedToolCallIds = new Set, this.clientSideSubagentIds = new Set, this.isDisposed = !1;
    }
    dispose() {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (const [e, t] of this.taskComposerHandles)this.disposeNestedTask(e, t);
            this.taskComposerHandles.clear(), this.subagentMetadata.clear(), this.deniedToolCallIds.clear(), this.clientSideSubagentIds.clear();
        }
    }
    disposeNestedTask(e, t) {
        this.taskComposerHandles.delete(e), DQv(t);
    }
    findClientSideSubagentComposerId(e) {
        const t = this.context.instantiationService.invokeFunction((i)=>i.get(Zs)), n = t.getLoadedComposers();
        for (const i of n){
            const r = t.getHandleIfLoaded(i);
            if (r && t.getComposerData(r)?.subagentInfo?.toolCallId === e) return i;
        }
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    getSubagentTerminationReason(e) {
        return e ? this.context.instantiationService.invokeFunction((n)=>n.get(wtt)).getLastTerminationReason(e) : void 0;
    }
    getTaskCompletionStatus(e, t) {
        return t?.terminationReason === "aborted" || t?.status === "cancelled" ? "aborted" : e.tool.value.result?.result?.case === "success" ? "completed" : "error";
    }
    getErrorTerminationReason(e) {
        const t = e?.subagentComposerId;
        return this.getSubagentTerminationReason(t) === "aborted" || e?.terminationReason === "aborted" ? "aborted" : "error";
    }
    getTaskSubagentComposerId(e, t) {
        const n = e.tool.value, i = n.cloudAgentBcId?.trim();
        if (i) return i;
        const r = n.result?.result?.case === "success" ? n.result.result.value.agentId?.trim() : void 0;
        if (r) return r;
        const s = n.args?.agentId?.trim();
        return s || t;
    }
    getTaskBubbleAdditionalData(e) {
        const { toolCall: t, status: n, terminationReason: i, existingAdditionalData: r } = e, s = this.getTaskSubagentComposerId(t, r?.subagentComposerId);
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
    getBackgroundTaskBubbleAdditionalData(e) {
        const t = this.getTaskSubagentComposerId(e.toolCall, e.existingAdditionalData?.subagentComposerId);
        return this.existingIfShallowEqual(e.existingAdditionalData, {
            ...e.existingAdditionalData,
            status: "running",
            backgrounded: !0,
            terminationReason: void 0,
            ...t ? {
                subagentComposerId: t
            } : {}
        });
    }
    existingIfShallowEqual(e, t) {
        if (e === void 0) return t;
        const n = e, i = t, r = Object.keys(n), s = Object.keys(i);
        if (r.length !== s.length) return t;
        for (const o of s)if (!Object.is(n[o], i[o])) return t;
        return e;
    }
    ensurePlaceholderTaskBubble(e, t) {
        const n = this.getToolFormer();
        n.getBubbleIdByToolCallId(e) || Lh(()=>{
            const i = n.getOrCreateBubbleId({
                toolCallId: e,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: nt.TASK_V2,
                name: "task_v2",
                params: {
                    case: "taskV2Params",
                    value: new V6e({
                        description: "",
                        prompt: "",
                        subagentType: "",
                        name: "general-purpose"
                    })
                },
                toolCall: t
            });
            n.setBubbleData(i, {
                status: "loading",
                additionalData: {
                    status: "loading"
                }
            });
        });
    }
    async handlePartialToolCall(e, t) {
        if (!this.isDisposed) {
            if (!e.tool.value.args) {
                this.ensurePlaceholderTaskBubble(t, e);
                return;
            }
            this.subagentMetadata.has(t) || this.deniedToolCallIds.has(t) || await this.handleToolCallStarted(e, t);
        }
    }
    async handleToolCallDelta(e, t, n) {
        if (this.isDisposed) return;
        const i = this.context.composerDataHandle.data;
        if (i.createdFromBackgroundAgent !== void 0 && (i.subagentInfo?.toolCallId === n || i.subagentInfo?.toolCallIdHistory?.includes(n) === !0) || this.deniedToolCallIds.has(n) || this.clientSideSubagentIds.has(n)) return;
        if (this.findClientSideSubagentComposerId(n)) {
            this.clientSideSubagentIds.add(n);
            return;
        }
        let s = this.taskComposerHandles.get(n);
        if (!s) {
            const a = this.getToolFormer(), c = this.context.instantiationService.invokeFunction((p)=>p.get(Zs));
            let l = a.getBubbleIdByToolCallId(n);
            if (!l) {
                const p = a.getBubbleDataByToolCallId(n);
                let g;
                p?.params ? g = p.params : g = new V6e({
                    description: "",
                    prompt: "",
                    subagentType: "",
                    name: "general-purpose"
                }), l = a.getOrCreateBubbleId({
                    toolCallId: n,
                    toolIndex: 0,
                    modelCallId: "",
                    toolCallType: nt.TASK_V2,
                    name: "task_v2",
                    params: {
                        case: "taskV2Params",
                        value: g
                    }
                });
            }
            s = MQv({
                instantiationService: this.context.instantiationService,
                composerDataService: c,
                parentHandle: this.context.composerDataHandle,
                bubbleId: l,
                toolCallId: n,
                conversationActionManager: this.context.conversationActionManager,
                toolFormer: a
            });
            const u = a.getBubbleData(l), h = u?.params?.description;
            if (h) {
                s.handle.data.name = h;
                const p = u?.additionalData;
                p && "composerData" in p && p.composerData && a.setBubbleData(l, {
                    additionalData: {
                        ...p,
                        composerData: {
                            ...p.composerData,
                            name: h
                        }
                    }
                });
            }
            this.taskComposerHandles.set(n, s);
        }
        const o = t.interactionUpdate;
        o && await s.adapter.sendUpdate(e, o);
    }
    async handleToolCallStarted(e, t, n = !1) {
        if (this.isDisposed) return;
        const i = e.tool.value, r = this.getToolFormer(), s = i.args, o = s?.description || "", a = s?.prompt || "", c = s?.subagentType, l = c?.type.case ?? "unspecified", u = s?.model;
        let h;
        c?.type.case === "custom" ? h = c.type.value.name : c?.type.case === "unspecified" || !c ? h = "general-purpose" : h = c.type.case ?? "unknown";
        const p = new V6e({
            description: o,
            prompt: a,
            subagentType: l,
            model: u,
            name: h,
            mode: s?.mode
        });
        let g = r.getBubbleIdByToolCallId(t);
        if (!g) g = Lh(()=>{
            const v = r.getOrCreateBubbleId({
                toolCallId: t,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: nt.TASK_V2,
                name: "task_v2",
                params: {
                    case: "taskV2Params",
                    value: p
                },
                toolCall: e
            });
            return r.setBubbleData(v, {
                status: "loading",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: e,
                    status: "loading"
                })
            }), v;
        });
        else {
            const v = r.getBubbleData(g)?.additionalData;
            r.setBubbleData(g, {
                status: "loading",
                params: p,
                toolCall: e,
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: e,
                    status: "loading",
                    existingAdditionalData: v
                })
            });
        }
        const f = this.subagentMetadata.has(t);
        if (f || this.subagentMetadata.set(t, {
            startTime: Date.now(),
            subagentType: h,
            taskDescription: o,
            taskPrompt: a,
            model: u
        }), !n && !f) try {
            const v = this.context.instantiationService.invokeFunction((b)=>b.get(V$));
            if (v.hasHookForStep(Lu.subagentStart) && !this.hookRan(Lu.subagentStart, t)) {
                const b = this.context.composerDataHandle.data, y = b.composerId, T = this.context.instantiationService.invokeFunction((D)=>D.get(QS)), E = T.getHookModelString(b.modelConfig), A = u ? {} : T.getHookModelFields(b.modelConfig), R = await v.executeHookForStep(Lu.subagentStart, {
                    conversation_id: y,
                    generation_id: y,
                    model: u || E || "unknown",
                    ...A,
                    subagent_id: t,
                    subagent_type: h,
                    task: a,
                    parent_conversation_id: y,
                    tool_call_id: t,
                    subagent_model: u,
                    is_parallel_worker: !1,
                    git_branch: b.gitWorktree?.branchName
                });
                if (R?.permission === "deny") {
                    const D = R.user_message ? `Subagent creation blocked by hook: ${R.user_message}` : "Subagent creation blocked by hook";
                    throw console.warn("[TaskToolCallHandler] subagentStart hook denied subagent creation:", D), new qQi(D);
                }
                if (R?.permission === "ask") {
                    const D = "The 'ask' permission for subagentStart hooks is not yet implemented. Use 'allow' or 'deny' instead.";
                    throw console.warn('[TaskToolCallHandler] subagentStart hook returned unsupported permission "ask"'), new qQi(D);
                }
                this.recordHookRan(Lu.subagentStart, t);
            }
        } catch (v) {
            if (v instanceof qQi) throw this.deniedToolCallIds.add(t), this.subagentMetadata.delete(t), g && r.setBubbleData(g, {
                status: "error",
                additionalData: {
                    status: "error"
                }
            }), v;
            console.error("[TaskToolCallHandler] Error executing subagentStart hook:", v);
        }
    }
    async handleToolCallCompleted(e, t) {
        if (this.isDisposed) return;
        const n = e.tool.value, i = this.getToolFormer();
        let r = i.getBubbleIdByToolCallId(t);
        const s = this.findClientSideSubagentComposerId(t);
        if (s) {
            if (r || (await this.handleToolCallStarted(e, t, !0), r = i.getBubbleIdByToolCallId(t)), r) {
                const E = this.context.instantiationService.invokeFunction((q)=>q.get(Zs)), A = E.getHandleIfLoaded(s), R = A ? E.getComposerData(A) : void 0, D = n.result?.result?.case === "success", P = n.result?.result?.case === "error", N = n.result?.result;
                if (N?.case === "success" && N.value.isBackground === !0) {
                    const z = N.value.agentId, X = new j6e({
                        agentId: z || s,
                        isBackground: !0
                    });
                    i.setBubbleData(r, {
                        status: "loading",
                        additionalData: {
                            status: "running",
                            backgrounded: !0,
                            terminationReason: void 0,
                            composerData: R,
                            subagentComposerId: s
                        }
                    }), i.handleToolResult(new xR({
                        tool: nt.TASK_V2,
                        toolCallId: t,
                        result: {
                            case: "taskV2Result",
                            value: X
                        }
                    }), t, !1), this.subagentMetadata.delete(t), this.clientSideSubagentIds.delete(t);
                    return;
                }
                const O = this.getSubagentTerminationReason(s), H = D ? "completed" : P ? O === "aborted" ? "aborted" : "error" : O ?? "error", $ = H === "completed" ? "completed" : H === "aborted" ? "cancelled" : "error", W = H === "completed" ? "success" : H === "aborted" ? "cancelled" : "error";
                if (i.setBubbleData(r, {
                    status: $,
                    additionalData: {
                        status: W,
                        terminationReason: H,
                        composerData: R,
                        subagentComposerId: s
                    }
                }), D) {
                    const z = n.result.result.value.agentId, X = new j6e({
                        agentId: z || s
                    });
                    i.handleToolResult(new xR({
                        tool: nt.TASK_V2,
                        toolCallId: t,
                        result: {
                            case: "taskV2Result",
                            value: X
                        }
                    }), t, !0);
                }
                const G = this.subagentMetadata.get(t);
                if (G) {
                    const q = H;
                    await this.executeSubagentStopHook(t, G, q, {
                        childConversationId: s
                    }), this.subagentMetadata.delete(t);
                }
                this.clientSideSubagentIds.delete(t);
            }
            return;
        }
        const o = this.taskComposerHandles.get(t), a = o?.handle.composerId;
        let c;
        o && (c = o.handle.data);
        let l;
        if (!r && c) {
            const E = c.fullConversationHeadersOnly?.[0];
            if (E) {
                const A = c.conversationMap?.[E.bubbleId];
                A?.createdAt && (l = new Date(A.createdAt).getTime());
            }
        }
        if (!r) {
            if (await this.handleToolCallStarted(e, t, !0), r = i.getBubbleIdByToolCallId(t), !r) throw new Error(`Bubble not found for tool call id ${t}`);
            if (l !== void 0) {
                const E = this.subagentMetadata.get(t);
                E && (E.startTime = l);
            }
        }
        const u = this.context.instantiationService.invokeFunction((E)=>E.get(Zs)), h = this.context.instantiationService.invokeFunction((E)=>E.get(W4e)), p = u.getComposerBubble(this.context.composerDataHandle, r);
        if (!p) throw new Error(`Bubble data not found for bubble id ${r}`);
        await h.storeMessage(this.context.composerDataHandle.data.composerId, p);
        const f = i.getBubbleData(r)?.additionalData, v = this.getTaskCompletionStatus(e, f);
        o && this.disposeNestedTask(t, o);
        let b = v, y, T;
        if (b !== "aborted" && n.result?.result?.case === "success") {
            const E = n.result.result.value, A = E.agentId, R = new j6e({
                agentId: A,
                isBackground: E.isBackground
            });
            if (E.isBackground === !0) {
                i.setBubbleData(r, {
                    status: "loading",
                    additionalData: this.getBackgroundTaskBubbleAdditionalData({
                        toolCall: e,
                        existingAdditionalData: f
                    })
                }), i.handleToolResult(new xR({
                    tool: nt.TASK_V2,
                    toolCallId: t,
                    result: {
                        case: "taskV2Result",
                        value: R
                    }
                }), t, !1), this.subagentMetadata.delete(t);
                return;
            }
            i.setBubbleData(r, {
                status: "completed",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: e,
                    status: "success",
                    terminationReason: "completed",
                    existingAdditionalData: f
                })
            }), i.handleToolResult(new xR({
                tool: nt.TASK_V2,
                toolCallId: t,
                result: {
                    case: "taskV2Result",
                    value: R
                }
            }), t, !0), b = "completed";
        } else if (b !== "aborted" && n.result?.result?.case === "error") {
            const E = n.result.result.value;
            this.getErrorTerminationReason(f) === "aborted" ? (i.setBubbleData(r, {
                status: "cancelled",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: e,
                    status: "cancelled",
                    terminationReason: "aborted",
                    existingAdditionalData: f
                })
            }), b = "aborted") : (i.setBubbleData(r, {
                status: "error",
                additionalData: this.getTaskBubbleAdditionalData({
                    toolCall: e,
                    status: "error",
                    terminationReason: "error",
                    existingAdditionalData: f
                })
            }), i.handleToolResult(new xR({
                tool: nt.TASK_V2,
                toolCallId: t,
                error: {
                    clientVisibleErrorMessage: "Task failed",
                    modelVisibleErrorMessage: `Task failed: ${E.error}`,
                    actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: E.error
                }
            }), t, !0), b = "error", y = E.error);
        }
        try {
            const E = this.context.instantiationService.invokeFunction((A)=>A.get(V$));
            if (this.deniedToolCallIds.has(t)) console.log(`[TaskToolCallHandler] Skipping subagentStop hook for denied tool call ${t}`);
            else if (E.hasHookForStep(Lu.subagentStop) && !this.hookRan(Lu.subagentStop, t)) {
                const A = this.subagentMetadata.get(t), R = this.context.composerDataHandle.data, D = R.composerId, P = A ? Date.now() - A.startTime : 0, N = this.context.instantiationService.invokeFunction((G)=>G.get(QS)), O = N.getHookModelString(R.modelConfig), F = A?.model ? {} : N.getHookModelFields(R.modelConfig);
                let H = 0, $ = 0;
                const W = [];
                if (c) {
                    H = c.fullConversationHeadersOnly?.length ?? 0, $ = Object.keys(c.codeBlockData?.codeblockMap ?? {}).length;
                    const G = [
                        ...c.fullConversationHeadersOnly ?? []
                    ].reverse().find((q)=>q.type === Tr.AI);
                    if (G) {
                        const q = c.conversationMap?.[G.bubbleId];
                        q?.text && (T = q.text);
                    }
                }
                await E.executeHookForStep(Lu.subagentStop, {
                    conversation_id: D,
                    generation_id: D,
                    model: A?.model || O || "unknown",
                    ...F,
                    subagent_id: t,
                    subagent_type: A?.subagentType ?? "unknown",
                    status: b,
                    duration_ms: P,
                    summary: T,
                    parent_conversation_id: D,
                    ...a ? {
                        child_conversation_id: a
                    } : {},
                    message_count: H,
                    tool_call_count: $,
                    error_message: y,
                    modified_files: W.length > 0 ? W : void 0,
                    git_branch: R.gitWorktree?.branchName,
                    loop_count: 0,
                    task: A?.taskPrompt,
                    description: A?.taskDescription
                }), this.recordHookRan(Lu.subagentStop, t);
            }
        } catch (E) {
            console.error("[TaskToolCallHandler] Error executing subagentStop hook:", E);
        }
        this.subagentMetadata.delete(t), this.deniedToolCallIds.delete(t);
    }
    hookRan(e, t) {
        return this.context.instantiationService.invokeFunction((r)=>r.get(yn)).getObject(zQi, 0, []).includes(`${this.context.composerDataHandle.data.composerId}:${t}:${e}`);
    }
    recordHookRan(e, t) {
        const n = this.context.instantiationService.invokeFunction((s)=>s.get(yn)), i = n.getObject(zQi, 0, []), r = `${this.context.composerDataHandle.data.composerId}:${t}:${e}`;
        n.store(zQi, [
            ...i,
            r
        ].slice(-NTh), 0, 1);
    }
    async executeSubagentStopHook(e, t, n, i) {
        try {
            const r = this.context.instantiationService.invokeFunction((s)=>s.get(V$));
            if (r.hasHookForStep(Lu.subagentStop) && !this.hookRan(Lu.subagentStop, e)) {
                const s = this.context.composerDataHandle.data, o = s.composerId, a = Date.now() - t.startTime, c = this.context.instantiationService.invokeFunction((h)=>h.get(QS)), l = c.getHookModelString(s.modelConfig), u = t.model ? {} : c.getHookModelFields(s.modelConfig);
                await r.executeHookForStep(Lu.subagentStop, {
                    conversation_id: o,
                    generation_id: o,
                    model: t.model || l || "unknown",
                    ...u,
                    subagent_id: e,
                    subagent_type: t.subagentType,
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
                    task: t.taskPrompt,
                    description: t.taskDescription
                }), this.recordHookRan(Lu.subagentStop, e);
            }
        } catch (r) {
            console.error("[TaskToolCallHandler] Error executing subagentStop hook:", r);
        }
    }
};

}
