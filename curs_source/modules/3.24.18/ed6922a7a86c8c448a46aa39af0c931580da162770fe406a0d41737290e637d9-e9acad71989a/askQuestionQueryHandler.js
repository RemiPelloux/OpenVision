import { Cl, Se, po } from "./HVr.js";
import { E4e, zd } from "./agent_pb.js";
import { ca, la } from "./aiMiscServices.js";
import { EGs, Ise, K7t, fDn, vDn } from "./ask_question_tool_pb.js";
import { bn } from "./async.js";
import { FFn, QSo, YGv, _Xi, ctt, goe, iko, ltt, zGv } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { OR, loe } from "./composerChatServiceInterface.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Jm, ps } from "./composer_pb.js";
import { PVt } from "./questionnaireDecision.js";
import { DVt } from "./questionnaireUtils.js";
import { Xh, im } from "./structuredLog.js";
import { Pve, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var HTh, WTh;
export { HTh, WTh };
var __wakaru_UQv_initialized = false;
export function UQv() {
if (__wakaru_UQv_initialized) return;
__wakaru_UQv_initialized = true;
"use strict";
x(), zd(), K7t(), Jm(), ql(), bn(), Se(), im(), loe(), nl(), Hu(), la(), DVt(), PVt(), HTh = 3e4, WTh = class {
    constructor(e){
        this.context = e, this.isDisposed = !1, this.disposedPromise = new Promise((t)=>{
            this.resolveDisposed = t;
        }), this.waiters = new Map;
    }
    armAnswerDeliveryWatchdog(e, t, n) {
        this.deliveryWatchdogs ??= new po, this.deliveryWatchdogs.set(n, Cl(()=>{
            this.deliveryWatchdogs?.deleteAndDispose(n), this.redeliverUndeliveredAnswer(e, t, n);
        }, this.context.answerDeliveryWatchdogMs ?? HTh));
    }
    async redeliverUndeliveredAnswer(e, t, n) {
        if (this.isDisposed || this.context.conversationActionManager.signal.aborted) return;
        const i = e.getBubbleData(t);
        if (i?.tool !== nt.ASK_QUESTION || i.additionalData?.completionDelivered === !0 || ctt(i) !== "submitted" || !ltt(e, t, n)) return;
        const r = i.params, s = i.result;
        if (!(!r || !s || !goe(s))) try {
            const o = this.context.instantiationService.invokeFunction((c)=>c.get(OR)), { resume: a } = _Xi({
                handle: this.context.composerDataHandle,
                composerChatService: o
            });
            this.getStructuredLogService()?.warn("composer", "AskQuestionQueryHandler: no completion echo for answered ask_question; redelivering", {
                toolCallId: n
            }), await a(iko(n, r, s));
        } catch (o) {
            this.getStructuredLogService()?.error("composer", "AskQuestionQueryHandler: no-echo answer redelivery failed", o instanceof Error ? o : void 0, {
                toolCallId: n
            });
        }
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    getComposerDataService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(Zs));
    }
    getAnalyticsService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(ca));
    }
    getStructuredLogService() {
        try {
            return this.context.instantiationService.invokeFunction((e)=>e.get(Xh));
        } catch  {
            return;
        }
    }
    async handleAskQuestionRequest(e) {
        if (this.isDisposed) return this.createDisposedResponse();
        const t = this.getToolFormer(), n = this.context.composerDataHandle.data.composerId, i = e.args, r = e.toolCallId, s = QSo(new Pve({
            title: i?.title ?? "",
            questions: (i?.questions ?? []).map((a)=>({
                    id: a.id,
                    prompt: a.prompt,
                    allowMultiple: a.allowMultiple ?? !1,
                    options: a.options.map((c)=>({
                            id: c.id,
                            label: c.label
                        }))
                })),
            runAsync: i?.runAsync ?? !1
        }));
        return await zGv({
            capability: t,
            toolCallId: r,
            stopWaiting: this.disposedPromise,
            read: ()=>this.isDisposed ? this.createDisposedResponse() : this.handleAskQuestionRequestWithDecisionLock(t, n, r, s)
        }) ?? this.createDisposedResponse();
    }
    createDisposedResponse() {
        return new E4e({
            result: FFn("Agent run ended before questionnaire decision registration")
        });
    }
    handleAskQuestionRequestWithDecisionLock(e, t, n, i) {
        const r = e.getOrCreateBubbleId({
            toolCallId: n,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.ASK_QUESTION,
            name: "ask_question",
            params: {
                case: "askQuestionParams",
                value: i
            }
        }), s = e.getBubbleData(r), o = ctt(s);
        if (o !== "submitted" && o !== "cancelled" ? e.setBubbleData(r, {
            params: i,
            status: "loading",
            additionalData: {
                status: "pending"
            }
        }) : e.setBubbleData(r, {
            params: i,
            status: "loading"
        }), this.context.trackTrajectoryStopped?.({
            composerId: t,
            invocationID: this.context.generationUUID,
            toolCallId: n,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "questionnaire.needs_input"
        }), o === "submitted") {
            const a = s?.result;
            if (a && goe(a)) return this.settleSupersededAskQuestionRequest(n), this.convertToAgentResult(a);
        }
        if (o === "cancelled") {
            this.settleSupersededAskQuestionRequest(n);
            const a = FFn("User cancelled questionnaire");
            return new E4e({
                result: a
            });
        }
        return this.settleSupersededAskQuestionRequest(n), e.setBubbleData(r, {
            params: i,
            status: "completed",
            additionalData: {
                status: "pending"
            },
            userDecision: void 0
        }), this.setGeneratingState(t, !1), new Promise((a)=>{
            let c = !1;
            const l = (h)=>{
                c || (c = !0, this.waiters.delete(n), this.trackAnalytics(t, i, !1, !1), this.setGeneratingState(t, !0), a(new E4e({
                    result: new Ise({
                        result: {
                            case: "rejected",
                            value: new vDn({
                                reason: h
                            })
                        }
                    })
                })));
            }, u = ()=>{
                const h = e.addPendingDecision(r, nt.ASK_QUESTION, n, (p)=>{
                    if (c) return;
                    if (!p) {
                        l("User cancelled questionnaire"), e.setBubbleData(r, {
                            additionalData: {
                                status: "cancelled"
                            }
                        });
                        return;
                    }
                    const g = YGv({
                        params: i,
                        bubble: e.getBubbleData(r)
                    });
                    if (!g) {
                        if (e.setBubbleData(r, {
                            userDecision: void 0,
                            status: "completed",
                            additionalData: {
                                status: "pending"
                            }
                        }), e.getBubbleData(r)?.userDecision !== void 0) return;
                        this.waiters.get(n)?.disposeDecision(), queueMicrotask(()=>{
                            c || this.isDisposed || (this.waiters.delete(n), u());
                        });
                        return;
                    }
                    e.setBubbleData(r, {
                        status: "completed",
                        result: g,
                        additionalData: {
                            status: "submitted"
                        }
                    });
                    const f = i.questions?.every((v)=>(g.answers?.find((y)=>y.questionId === v.id)?.selectedOptionIds?.length ?? 0) > 0) ?? !1;
                    c = !0, this.waiters.delete(n), this.trackAnalytics(t, i, !0, f), this.setGeneratingState(t, !0), this.armAnswerDeliveryWatchdog(e, r, n), a(this.convertToAgentResult(g));
                }, !0);
                c ? h() : this.waiters.set(n, {
                    rejectSuperseded: l,
                    disposeDecision: h
                });
            };
            u();
        });
    }
    settleSupersededAskQuestionRequest(e) {
        const t = this.waiters.get(e);
        t?.rejectSuperseded("Superseded by a resumed ask_question request"), t?.disposeDecision(), this.waiters.delete(e);
    }
    convertToAgentResult(e) {
        return !e || e.answers.length === 0 ? new E4e({
            result: new Ise({
                result: {
                    case: "success",
                    value: new fDn({
                        answers: []
                    })
                }
            })
        }) : new E4e({
            result: new Ise({
                result: {
                    case: "success",
                    value: new fDn({
                        answers: e.answers.map((t)=>new EGs({
                                questionId: t.questionId,
                                selectedOptionIds: t.selectedOptionIds,
                                freeformText: t.freeformText
                            }))
                    })
                }
            })
        });
    }
    trackAnalytics(e, t, n, i) {
        try {
            const s = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
            this.getAnalyticsService().trackEvent("ask_question_invoked", {
                number_of_questions: t?.questions?.length ?? 0,
                submitted: n,
                all_questions_answered: i,
                model: s?.modelConfig?.modelName
            });
        } catch  {}
    }
    getLastAiBubbleId(e) {
        const n = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
        if (n) return [
            ...n.fullConversationHeadersOnly ?? []
        ].reverse().find((i)=>i.type === Tr.AI)?.bubbleId;
    }
    setGeneratingState(e, t) {
        const n = this.getLastAiBubbleId(e);
        if (!n) return;
        const i = this.getComposerDataService(), s = i.getComposerData(this.context.composerDataHandle)?.generatingBubbleIds ?? [], o = s.includes(n);
        t && !o ? i.updateComposerData(this.context.composerDataHandle, {
            generatingBubbleIds: [
                ...s,
                n
            ]
        }) : !t && o && i.updateComposerData(this.context.composerDataHandle, {
            generatingBubbleIds: s.filter((a)=>a !== n)
        }), i.updateComposerDataSetStore(this.context.composerDataHandle, (a)=>a("status", t ? "generating" : "completed"));
    }
    dispose() {
        if (this.isDisposed) return;
        this.isDisposed = !0, this.resolveDisposed(), this.deliveryWatchdogs?.dispose();
        const e = [
            ...this.waiters.values()
        ];
        this.waiters.clear();
        for (const t of e)t.rejectSuperseded("Agent run ended before questionnaire completion"), t.disposeDecision();
    }
};

}
