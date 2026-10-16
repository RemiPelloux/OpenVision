import { A3u, bX } from "./A3u.js";
import { z1u } from "./De_3.js";
import { la } from "./aiMiscServices.js";
import { aG, gq } from "./composerPlanService.js";
import { Hv, rE } from "./composerViews.js";
import { Jm, ps } from "./composer_pb.js";
import { FTh, KQi } from "./createPlanIdentity.js";
import { eF } from "./planFileUtils.js";
import { kq, ote } from "./toolCallHumanReviewService.js";
import { dg } from "./toolCallHumanReviewTypes.js";
import { DI, KZe, Obt, nt, ql, xR } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
function tTo(e, t) {
    const n = KQi.get(e);
    if (n) return n;
    const i = t().catch((r)=>{
        throw KQi.delete(e), r;
    });
    return KQi.set(e, i), i;
}
var BTh;
export { BTh, tTo };
var __wakaru_NQv_initialized = false;
export function NQv() {
if (__wakaru_NQv_initialized) return;
__wakaru_NQv_initialized = true;
"use strict";
x(), ql(), Jm(), aG(), rE(), ote(), eF(), FTh(), BTh = class {
    constructor(e){
        this.context = e, this.pendingQueue = new Map, this.scanInvalidatedToolCalls = new Set;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    convertTodoStatus(e) {
        switch(e){
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
    shouldAutoOpenPlanEditor(e) {
        const t = this.context.instantiationService.invokeFunction((n)=>n.get(Hv));
        return t.isFocused(e) || t.isPrevBubbleFocused(e);
    }
    isBackendControlledPlanComposer() {
        return this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId !== void 0;
    }
    async handlePartialToolCall(e, t) {
        await this.handleToolCallStarted(e, t);
    }
    async handleToolCallDelta(e, t, n) {}
    async handleToolCallStarted(e, t) {
        const i = (this.pendingQueue.get(t) ?? Promise.resolve()).then(()=>this.processToolCallStarted(e, t));
        this.pendingQueue.set(t, i);
        try {
            await i;
        } finally{
            this.pendingQueue.get(t) === i && this.pendingQueue.delete(t);
        }
    }
    async processToolCallStarted(e, t) {
        const n = e.tool.value, i = this.context.instantiationService.invokeFunction((E)=>E.get(gq)), r = this.getToolFormer(), s = n.args, o = new KZe({
            plan: s?.plan,
            overview: s?.overview,
            todos: s?.todos?.map((E)=>new DI({
                    id: E.id,
                    content: E.content,
                    status: this.convertTodoStatus(E.status),
                    dependencies: E.dependencies
                })),
            name: s?.name,
            isProject: s?.isProject,
            phases: s?.phases?.map((E)=>({
                    name: E.name,
                    todos: E.todos?.map((A)=>new DI({
                            id: A.id,
                            content: A.content,
                            status: this.convertTodoStatus(A.status),
                            dependencies: A.dependencies
                        })) || []
                }))
        }), a = r.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.CREATE_PLAN,
            name: "create_plan",
            params: {
                case: "createPlanParams",
                value: o
            },
            toolCall: e
        }), c = this.context.composerDataHandle.data.composerId;
        this.scanInvalidatedToolCalls.has(t) || (this.scanInvalidatedToolCalls.add(t), i.notifyPlanToolAttached(c));
        const u = r.getBubbleData(a)?.additionalData, h = u?.hasOpenedEditor === !0, p = u?.planId, g = u?.planUri, f = s?.name, v = this.isBackendControlledPlanComposer(), b = s?.plan || "", y = s?.overview || "", T = s?.todos?.map((E)=>({
                id: E.id || "",
                content: E.content,
                status: "pending",
                dependencies: E.dependencies || []
            })) || [];
        try {
            if (v) return;
            if (g) {
                if (b) {
                    const E = bX(g), A = s?.phases?.map((R)=>({
                            name: R.name,
                            todos: R.todos?.map((D)=>({
                                    id: D.id || "",
                                    content: D.content,
                                    status: "pending",
                                    dependencies: D.dependencies || []
                                })) || []
                        }));
                    await i.updatePlanByUriDirty(E, f, y, T, b, c, s?.isProject, A);
                }
            } else if (f && b) {
                let E = p;
                const A = s?.phases?.map((P)=>({
                        name: P.name,
                        todos: P.todos?.map((N)=>({
                                id: N.id || "",
                                content: N.content,
                                status: "pending",
                                dependencies: N.dependencies || []
                            })) || []
                    })), R = await tTo(t, async ()=>{
                    const P = await i.createPlanFile(c, f, y, T, b, s?.isProject, A), N = await i.getRegistryEntry(P);
                    return {
                        planUri: P,
                        planId: N?.id
                    };
                }), D = R.planUri;
                if (E = R.planId, r.setBubbleData(a, {
                    params: o,
                    additionalData: {
                        planId: E,
                        planUri: D.toString(),
                        hasOpenedEditor: !0
                    }
                }), E && i.notifyPlanIdentityAttached(E, D), !h && this.shouldAutoOpenPlanEditor(c)) try {
                    await i.openPlanInEditor(D, {
                        stealFocus: !1,
                        composerId: c
                    });
                } catch (P) {
                    console.error("[CreatePlanToolCallHandler] Failed to open plan editor during streaming:", P);
                }
            }
        } catch (E) {
            console.error("[CreatePlanToolCallHandler] Failed to create/update plan file during streaming:", E);
        }
    }
    async handleToolCallCompleted(e, t) {
        const i = (this.pendingQueue.get(t) ?? Promise.resolve()).then(()=>this.processToolCallCompleted(e, t));
        this.pendingQueue.set(t, i);
        try {
            await i;
        } finally{
            this.pendingQueue.get(t) === i && this.pendingQueue.delete(t);
        }
    }
    async processToolCallCompleted(e, t) {
        const n = e.tool.value, i = this.context.instantiationService.invokeFunction((f)=>f.get(gq)), r = await Promise.resolve().then(()=>(la(), z1u)), s = this.context.instantiationService.invokeFunction((f)=>f.get(r.IAnalyticsService)), o = this.context.instantiationService.invokeFunction((f)=>f.get(kq)), a = this.getToolFormer(), c = a.getBubbleIdByToolCallId(t);
        if (!c) throw new Error(`Bubble not found for tool call id ${t}`);
        const l = this.context.composerDataHandle, u = l.data.composerId, h = l.data;
        if (!h) throw new Error(`Composer not found for composer id ${u}`);
        this.scanInvalidatedToolCalls.has(t) || i.notifyPlanToolAttached(u), this.scanInvalidatedToolCalls.delete(t);
        const p = n.args;
        if (!p || !p.plan) throw new Error(`Plan args not found for tool call id ${t}`);
        const g = new KZe({
            plan: p?.plan,
            overview: p?.overview,
            todos: p?.todos?.map((f)=>new DI({
                    id: f.id,
                    content: f.content,
                    status: this.convertTodoStatus(f.status),
                    dependencies: f.dependencies
                })),
            name: p?.name,
            isProject: p?.isProject,
            phases: p?.phases?.map((f)=>({
                    name: f.name,
                    todos: f.todos?.map((v)=>new DI({
                            id: v.id,
                            content: v.content,
                            status: this.convertTodoStatus(v.status),
                            dependencies: v.dependencies
                        })) || []
                }))
        });
        if (n.result?.result?.case === "success") {
            const v = a.getBubbleData(c)?.additionalData, b = v?.hasOpenedEditor === !0;
            let y = v?.planId, E = v?.planUri ?? n.result?.planUri;
            if (this.isBackendControlledPlanComposer()) {
                if (E && !b) try {
                    const P = bX(E);
                    this.shouldAutoOpenPlanEditor(u) && await i.openPlanInEditor(P, {
                        stealFocus: !1,
                        composerId: u
                    });
                } catch (P) {
                    console.error("[CreatePlanToolCallHandler] Failed to open backend-controlled plan file:", P);
                }
                if (E && !y) try {
                    const P = bX(E);
                    y = (await i.getRegistryEntry(P))?.id;
                } catch (P) {
                    console.error("[CreatePlanToolCallHandler] Failed to resolve backend-controlled plan id:", P);
                }
            } else if (E) {
                const P = p.name || void 0, N = p.overview || "", O = p.todos?.map((H)=>({
                        id: H.id || "",
                        content: H.content,
                        status: "pending",
                        dependencies: H.dependencies || []
                    })) || [], F = p?.phases?.map((H)=>({
                        name: H.name,
                        todos: H.todos?.map(($)=>({
                                id: $.id || "",
                                content: $.content,
                                status: "pending",
                                dependencies: $.dependencies || []
                            })) || []
                    }));
                try {
                    const H = bX(E);
                    if (await i.updatePlanByUriDirty(H, P, N, O, p.plan, u, p?.isProject, F), await i.savePlanModel(H), y || (y = (await i.getRegistryEntry(H))?.id), !b && this.shouldAutoOpenPlanEditor(u)) try {
                        await i.openPlanInEditor(H, {
                            stealFocus: !1,
                            composerId: u
                        });
                    } catch ($) {
                        console.error("[CreatePlanToolCallHandler] Failed to open plan editor on completion:", $);
                    }
                } catch (H) {
                    console.error("[CreatePlanToolCallHandler] Failed to update plan file:", H);
                }
            } else {
                const P = p.name || void 0, N = p.overview || "", O = p.todos?.map((F)=>({
                        id: F.id || "",
                        content: F.content,
                        status: "pending",
                        dependencies: F.dependencies || []
                    })) || [];
                try {
                    const F = p?.phases?.map(($)=>({
                            name: $.name,
                            todos: $.todos?.map((W)=>({
                                    id: W.id || "",
                                    content: W.content,
                                    status: "pending",
                                    dependencies: W.dependencies || []
                                })) || []
                        })), H = await tTo(t, async ()=>{
                        const $ = await i.createPlanFile(u, P || i.getPlanTitle(p.plan), N, O, p.plan, p?.isProject, F), W = await i.getRegistryEntry($);
                        return {
                            planUri: $,
                            planId: W?.id
                        };
                    });
                    if (E = H.planUri.toString(), y = H.planId, !b && this.shouldAutoOpenPlanEditor(u)) try {
                        await i.openPlanInEditor(H.planUri, {
                            stealFocus: !1,
                            composerId: u
                        });
                    } catch ($) {
                        console.error("[CreatePlanToolCallHandler] Failed to open plan editor on completion create:", $);
                    }
                } catch (F) {
                    console.error("[CreatePlanToolCallHandler] Failed to create plan file:", F);
                }
            }
            if (a.setBubbleData(c, {
                params: g,
                additionalData: {
                    planId: y,
                    planUri: E,
                    hasOpenedEditor: !0
                }
            }), y && E) try {
                i.notifyPlanIdentityAttached(y, bX(E));
            } catch  {}
            s.trackEvent("composer.plan_mode.plan_created", {
                iteration_number: 1,
                model: h.modelConfig?.modelName || "unknown",
                composerId: u,
                invocationID: h?.latestChatGenerationUUID
            });
            const R = o.getPlanReviewModelForBubble(l, c);
            if (R) {
                try {
                    s.trackEvent("composer.agent_trajectory_stopped", {
                        composerId: u,
                        invocationID: h?.latestChatGenerationUUID,
                        toolCallId: t,
                        stop_category: "needs_user_approval",
                        stop_source: "other",
                        reason_code: "plan.needs_approval"
                    });
                } catch  {}
                R.setStatus(dg.REQUESTED);
            }
            const D = new Obt({
                result: {
                    case: "rejected",
                    value: {}
                }
            });
            a.handleToolResult(new xR({
                tool: nt.CREATE_PLAN,
                toolCallId: t,
                result: {
                    case: "createPlanResult",
                    value: D
                }
            }), t, !0);
        } else if (n.result?.result?.case === "error") {
            const f = n.result.result.value, y = a.getBubbleData(c)?.additionalData?.planUri;
            if (y) try {
                const { parsePlanUriString: T } = await Promise.resolve().then(()=>(eF(), A3u)), E = T(y);
                i.discardPlanModel(E);
            } catch (T) {
                console.error("[CreatePlanToolCallHandler] Failed to discard streamed plan model after error:", T);
            }
            a.setBubbleData(c, {
                status: "error",
                additionalData: {
                    status: "error"
                }
            }), a.handleToolResult(new xR({
                tool: nt.CREATE_PLAN,
                toolCallId: t,
                error: {
                    clientVisibleErrorMessage: "Plan creation failed",
                    modelVisibleErrorMessage: `Plan creation failed: ${f.error}`,
                    actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: f.error
                }
            }), t, !0);
        }
    }
};

}
