import { icl } from "./Ycg.js";
import { Ss } from "./aiMiscServices.js";
import { I6, Y4 } from "./composerPlanService.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { spg } from "./createPlanIdentity.js";
import { kLp } from "./ipa.js";
import { AB } from "./planFileUtils.js";
import { WJ, fV } from "./toolCallHumanReviewService.js";
import { Cv } from "./toolCallHumanReviewTypes.js";
import { B3, Ct, H_t, P4t, Pu, yM } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Hae, yBp } from "./yBp.js";
var opg;
export { opg };
var __wakaru_Nyk_initialized = false;
export function Nyk() {
if (__wakaru_Nyk_initialized) return;
__wakaru_Nyk_initialized = true;
"use strict";
E(), Pu(), tf(), I6(), Ux(), WJ(), AB(), spg(), opg = class {
    constructor(t){
        this.context = t, this.pendingQueue = new Map, this.scanInvalidatedToolCalls = new Set;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    convertTodoStatus(t) {
        switch(t){
            case 1:
                return "pending";
            case 2:
                return "in_progress";
            case 3:
                return "completed";
            case 4:
                return "cancelled";
            default:
                return "pending";
        }
    }
    shouldAutoOpenPlanEditor(t) {
        const e = this.context.instantiationService.invokeFunction((n)=>n.get(Bb));
        return e.isFocused(t) || e.isPrevBubbleFocused(t);
    }
    isBackendControlledPlanComposer() {
        return this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId !== void 0;
    }
    async handlePartialToolCall(t, e) {
        await this.handleToolCallStarted(t, e);
    }
    async handleToolCallDelta(t, e, n) {}
    async handleToolCallStarted(t, e) {
        const i = (this.pendingQueue.get(e) ?? Promise.resolve()).then(()=>this.processToolCallStarted(t, e));
        this.pendingQueue.set(e, i);
        try {
            await i;
        } finally{
            this.pendingQueue.get(e) === i && this.pendingQueue.delete(e);
        }
    }
    async processToolCallStarted(t, e) {
        const n = t.tool.value, i = this.context.instantiationService.invokeFunction((S)=>S.get(Y4)), r = this.getToolFormer(), s = n.args, o = new H_t({
            plan: s?.plan,
            overview: s?.overview,
            todos: s?.todos?.map((S)=>new yM({
                    id: S.id,
                    content: S.content,
                    status: this.convertTodoStatus(S.status),
                    dependencies: S.dependencies
                })),
            name: s?.name,
            isProject: s?.isProject,
            phases: s?.phases?.map((S)=>({
                    name: S.name,
                    todos: S.todos?.map((k)=>new yM({
                            id: k.id,
                            content: k.content,
                            status: this.convertTodoStatus(k.status),
                            dependencies: k.dependencies
                        })) || []
                }))
        }), a = r.getOrCreateBubbleId({
            toolCallId: e,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.CREATE_PLAN,
            name: "create_plan",
            params: {
                case: "createPlanParams",
                value: o
            },
            toolCall: t
        }), l = this.context.composerDataHandle.data.composerId;
        this.scanInvalidatedToolCalls.has(e) || (this.scanInvalidatedToolCalls.add(e), i.notifyPlanToolAttached(l));
        const u = r.getBubbleData(a)?.additionalData, d = u?.hasOpenedEditor === !0, h = u?.planId, p = u?.planUri, g = s?.name, f = this.isBackendControlledPlanComposer(), _ = s?.plan || "", b = s?.overview || "", y = s?.todos?.map((S)=>({
                id: S.id || "",
                content: S.content,
                status: "pending",
                dependencies: S.dependencies || []
            })) || [];
        try {
            if (f) return;
            if (p) {
                if (_) {
                    const S = Hae(p), k = s?.phases?.map((C)=>({
                            name: C.name,
                            todos: C.todos?.map((T)=>({
                                    id: T.id || "",
                                    content: T.content,
                                    status: "pending",
                                    dependencies: T.dependencies || []
                                })) || []
                        }));
                    await i.updatePlanByUriDirty(S, g, b, y, _, l, s?.isProject, k);
                }
            } else if (g && _) {
                let S = h;
                const k = s?.phases?.map((I)=>({
                        name: I.name,
                        todos: I.todos?.map((A)=>({
                                id: A.id || "",
                                content: A.content,
                                status: "pending",
                                dependencies: A.dependencies || []
                            })) || []
                    })), C = await icl(e, async ()=>{
                    const I = await i.createPlanFile(l, g, b, y, _, s?.isProject, k), A = await i.getRegistryEntry(I);
                    return {
                        planUri: I,
                        planId: A?.id
                    };
                }), T = C.planUri;
                if (S = C.planId, r.setBubbleData(a, {
                    params: o,
                    additionalData: {
                        planId: S,
                        planUri: T.toString(),
                        hasOpenedEditor: !0
                    }
                }), S && i.notifyPlanIdentityAttached(S, T), !d && this.shouldAutoOpenPlanEditor(l)) try {
                    await i.openPlanInEditor(T, {
                        stealFocus: !1,
                        composerId: l
                    });
                } catch (I) {
                    console.error("[CreatePlanToolCallHandler] Failed to open plan editor during streaming:", I);
                }
            }
        } catch (S) {
            console.error("[CreatePlanToolCallHandler] Failed to create/update plan file during streaming:", S);
        }
    }
    async handleToolCallCompleted(t, e) {
        const i = (this.pendingQueue.get(e) ?? Promise.resolve()).then(()=>this.processToolCallCompleted(t, e));
        this.pendingQueue.set(e, i);
        try {
            await i;
        } finally{
            this.pendingQueue.get(e) === i && this.pendingQueue.delete(e);
        }
    }
    async processToolCallCompleted(t, e) {
        const n = t.tool.value, i = this.context.instantiationService.invokeFunction((g)=>g.get(Y4)), r = await Promise.resolve().then(()=>(Ss(), kLp)), s = this.context.instantiationService.invokeFunction((g)=>g.get(r.IAnalyticsService)), o = this.context.instantiationService.invokeFunction((g)=>g.get(fV)), a = this.getToolFormer(), l = a.getBubbleIdByToolCallId(e);
        if (!l) throw new Error(`Bubble not found for tool call id ${e}`);
        const c = this.context.composerDataHandle, u = c.data.composerId, d = c.data;
        if (!d) throw new Error(`Composer not found for composer id ${u}`);
        this.scanInvalidatedToolCalls.has(e) || i.notifyPlanToolAttached(u), this.scanInvalidatedToolCalls.delete(e);
        const h = n.args;
        if (!h || !h.plan) throw new Error(`Plan args not found for tool call id ${e}`);
        const p = new H_t({
            plan: h?.plan,
            overview: h?.overview,
            todos: h?.todos?.map((g)=>new yM({
                    id: g.id,
                    content: g.content,
                    status: this.convertTodoStatus(g.status),
                    dependencies: g.dependencies
                })),
            name: h?.name,
            isProject: h?.isProject,
            phases: h?.phases?.map((g)=>({
                    name: g.name,
                    todos: g.todos?.map((f)=>new yM({
                            id: f.id,
                            content: f.content,
                            status: this.convertTodoStatus(f.status),
                            dependencies: f.dependencies
                        })) || []
                }))
        });
        if (n.result?.result?.case === "success") {
            const f = a.getBubbleData(l)?.additionalData, _ = f?.hasOpenedEditor === !0;
            let b = f?.planId, S = f?.planUri ?? n.result?.planUri;
            if (this.isBackendControlledPlanComposer()) {
                if (S && !_) try {
                    const I = Hae(S);
                    this.shouldAutoOpenPlanEditor(u) && await i.openPlanInEditor(I, {
                        stealFocus: !1,
                        composerId: u
                    });
                } catch (I) {
                    console.error("[CreatePlanToolCallHandler] Failed to open backend-controlled plan file:", I);
                }
                if (S && !b) try {
                    const I = Hae(S);
                    b = (await i.getRegistryEntry(I))?.id;
                } catch (I) {
                    console.error("[CreatePlanToolCallHandler] Failed to resolve backend-controlled plan id:", I);
                }
            } else if (S) {
                const I = h.name || void 0, A = h.overview || "", P = h.todos?.map((O)=>({
                        id: O.id || "",
                        content: O.content,
                        status: "pending",
                        dependencies: O.dependencies || []
                    })) || [], M = h?.phases?.map((O)=>({
                        name: O.name,
                        todos: O.todos?.map((N)=>({
                                id: N.id || "",
                                content: N.content,
                                status: "pending",
                                dependencies: N.dependencies || []
                            })) || []
                    }));
                try {
                    const O = Hae(S);
                    if (await i.updatePlanByUriDirty(O, I, A, P, h.plan, u, h?.isProject, M), await i.savePlanModel(O), b || (b = (await i.getRegistryEntry(O))?.id), !_ && this.shouldAutoOpenPlanEditor(u)) try {
                        await i.openPlanInEditor(O, {
                            stealFocus: !1,
                            composerId: u
                        });
                    } catch (N) {
                        console.error("[CreatePlanToolCallHandler] Failed to open plan editor on completion:", N);
                    }
                } catch (O) {
                    console.error("[CreatePlanToolCallHandler] Failed to update plan file:", O);
                }
            } else {
                const I = h.name || void 0, A = h.overview || "", P = h.todos?.map((M)=>({
                        id: M.id || "",
                        content: M.content,
                        status: "pending",
                        dependencies: M.dependencies || []
                    })) || [];
                try {
                    const M = h?.phases?.map((N)=>({
                            name: N.name,
                            todos: N.todos?.map((U)=>({
                                    id: U.id || "",
                                    content: U.content,
                                    status: "pending",
                                    dependencies: U.dependencies || []
                                })) || []
                        })), O = await icl(e, async ()=>{
                        const N = await i.createPlanFile(u, I || i.getPlanTitle(h.plan), A, P, h.plan, h?.isProject, M), U = await i.getRegistryEntry(N);
                        return {
                            planUri: N,
                            planId: U?.id
                        };
                    });
                    if (S = O.planUri.toString(), b = O.planId, !_ && this.shouldAutoOpenPlanEditor(u)) try {
                        await i.openPlanInEditor(O.planUri, {
                            stealFocus: !1,
                            composerId: u
                        });
                    } catch (N) {
                        console.error("[CreatePlanToolCallHandler] Failed to open plan editor on completion create:", N);
                    }
                } catch (M) {
                    console.error("[CreatePlanToolCallHandler] Failed to create plan file:", M);
                }
            }
            if (a.setBubbleData(l, {
                params: p,
                additionalData: {
                    planId: b,
                    planUri: S,
                    hasOpenedEditor: !0
                }
            }), b && S) try {
                i.notifyPlanIdentityAttached(b, Hae(S));
            } catch  {}
            s.trackEvent("composer.plan_mode.plan_created", {
                iteration_number: 1,
                model: d.modelConfig?.modelName || "unknown",
                composerId: u,
                invocationID: d?.latestChatGenerationUUID
            });
            const C = o.getPlanReviewModelForBubble(c, l);
            if (C) {
                try {
                    s.trackEvent("composer.agent_trajectory_stopped", {
                        composerId: u,
                        invocationID: d?.latestChatGenerationUUID,
                        toolCallId: e,
                        stop_category: "needs_user_approval",
                        stop_source: "other",
                        reason_code: "plan.needs_approval"
                    });
                } catch  {}
                C.setStatus(Cv.REQUESTED);
            }
            const T = new P4t({
                result: {
                    case: "rejected",
                    value: {}
                }
            });
            a.handleToolResult(new B3({
                tool: Ct.CREATE_PLAN,
                toolCallId: e,
                result: {
                    case: "createPlanResult",
                    value: T
                }
            }), e, !0);
        } else if (n.result?.result?.case === "error") {
            const g = n.result.result.value, b = a.getBubbleData(l)?.additionalData?.planUri;
            if (b) try {
                const { parsePlanUriString: y } = await Promise.resolve().then(()=>(AB(), yBp)), S = y(b);
                i.discardPlanModel(S);
            } catch (y) {
                console.error("[CreatePlanToolCallHandler] Failed to discard streamed plan model after error:", y);
            }
            a.setBubbleData(l, {
                status: "error",
                additionalData: {
                    status: "error"
                }
            }), a.handleToolResult(new B3({
                tool: Ct.CREATE_PLAN,
                toolCallId: e,
                error: {
                    clientVisibleErrorMessage: "Plan creation failed",
                    modelVisibleErrorMessage: `Plan creation failed: ${g.error}`,
                    actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: g.error
                }
            }), e, !0);
        }
    }
};

}
