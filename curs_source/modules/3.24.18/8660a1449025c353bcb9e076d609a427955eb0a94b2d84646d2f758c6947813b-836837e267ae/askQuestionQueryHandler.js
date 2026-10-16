import { ATt, Czt, Gil, HTi, Ybe, Zil, dhk, phk, xTt } from "./Aeg.js";
import { Ec, Qe, da } from "./Iwo.js";
import { ju, ltt } from "./agent_pb.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Nve, ani, kmn, oni, u5o } from "./ask_question_tool_pb.js";
import { qn } from "./async.js";
import { bs, sd } from "./chat_pb.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { mo, tf } from "./composer_pb.js";
import { Tzt } from "./questionnaireDecision.js";
import { Axn } from "./questionnaireUtils.js";
import { Cm, wh } from "./structuredLog.js";
import { Ct, EAe, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var cpg, upg;
export { cpg, upg };
var __wakaru_Byk_initialized = false;
export function Byk() {
if (__wakaru_Byk_initialized) return;
__wakaru_Byk_initialized = true;
"use strict";
E(), ju(), kmn(), tf(), Pu(), qn(), Qe(), Cm(), mV(), Pl(), sd(), Ss(), Axn(), Tzt(), cpg = 3e4, upg = class {
    constructor(t){
        this.context = t, this.isDisposed = !1, this.disposedPromise = new Promise((e)=>{
            this.resolveDisposed = e;
        }), this.waiters = new Map;
    }
    armAnswerDeliveryWatchdog(t, e, n) {
        this.deliveryWatchdogs ??= new da, this.deliveryWatchdogs.set(n, Ec(()=>{
            this.deliveryWatchdogs?.deleteAndDispose(n), this.redeliverUndeliveredAnswer(t, e, n);
        }, this.context.answerDeliveryWatchdogMs ?? cpg));
    }
    async redeliverUndeliveredAnswer(t, e, n) {
        if (this.isDisposed || this.context.conversationActionManager.signal.aborted) return;
        const i = t.getBubbleData(e);
        if (i?.tool !== Ct.ASK_QUESTION || i.additionalData?.completionDelivered === !0 || xTt(i) !== "submitted" || !ATt(t, e, n)) return;
        const r = i.params, s = i.result;
        if (!(!r || !s || !Ybe(s))) try {
            const o = this.context.instantiationService.invokeFunction((l)=>l.get(l0)), { resume: a } = Czt({
                handle: this.context.composerDataHandle,
                composerChatService: o
            });
            this.getStructuredLogService()?.warn("composer", "AskQuestionQueryHandler: no completion echo for answered ask_question; redelivering", {
                toolCallId: n
            }), await a(Zil(n, r, s));
        } catch (o) {
            this.getStructuredLogService()?.error("composer", "AskQuestionQueryHandler: no-echo answer redelivery failed", o instanceof Error ? o : void 0, {
                toolCallId: n
            });
        }
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    getComposerDataService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(no));
    }
    getAnalyticsService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(Qr));
    }
    getStructuredLogService() {
        try {
            return this.context.instantiationService.invokeFunction((t)=>t.get(wh));
        } catch  {
            return;
        }
    }
    async handleAskQuestionRequest(t) {
        if (this.isDisposed) return this.createDisposedResponse();
        const e = this.getToolFormer(), n = this.context.composerDataHandle.data.composerId, i = t.args, r = t.toolCallId, s = Gil(new EAe({
            title: i?.title ?? "",
            questions: (i?.questions ?? []).map((a)=>({
                    id: a.id,
                    prompt: a.prompt,
                    allowMultiple: a.allowMultiple ?? !1,
                    options: a.options.map((l)=>({
                            id: l.id,
                            label: l.label
                        }))
                })),
            runAsync: i?.runAsync ?? !1
        }));
        return await dhk({
            capability: e,
            toolCallId: r,
            stopWaiting: this.disposedPromise,
            read: ()=>this.isDisposed ? this.createDisposedResponse() : this.handleAskQuestionRequestWithDecisionLock(e, n, r, s)
        }) ?? this.createDisposedResponse();
    }
    createDisposedResponse() {
        return new ltt({
            result: HTi("Agent run ended before questionnaire decision registration")
        });
    }
    handleAskQuestionRequestWithDecisionLock(t, e, n, i) {
        const r = t.getOrCreateBubbleId({
            toolCallId: n,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.ASK_QUESTION,
            name: "ask_question",
            params: {
                case: "askQuestionParams",
                value: i
            }
        }), s = t.getBubbleData(r), o = xTt(s);
        if (o !== "submitted" && o !== "cancelled" ? t.setBubbleData(r, {
            params: i,
            status: "loading",
            additionalData: {
                status: "pending"
            }
        }) : t.setBubbleData(r, {
            params: i,
            status: "loading"
        }), this.context.trackTrajectoryStopped?.({
            composerId: e,
            invocationID: this.context.generationUUID,
            toolCallId: n,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "questionnaire.needs_input"
        }), o === "submitted") {
            const a = s?.result;
            if (a && Ybe(a)) return this.settleSupersededAskQuestionRequest(n), this.convertToAgentResult(a);
        }
        if (o === "cancelled") {
            this.settleSupersededAskQuestionRequest(n);
            const a = HTi("User cancelled questionnaire");
            return new ltt({
                result: a
            });
        }
        return this.settleSupersededAskQuestionRequest(n), t.setBubbleData(r, {
            params: i,
            status: "completed",
            additionalData: {
                status: "pending"
            },
            userDecision: void 0
        }), this.setGeneratingState(e, !1), new Promise((a)=>{
            let l = !1;
            const c = (d)=>{
                l || (l = !0, this.waiters.delete(n), this.trackAnalytics(e, i, !1, !1), this.setGeneratingState(e, !0), a(new ltt({
                    result: new Nve({
                        result: {
                            case: "rejected",
                            value: new ani({
                                reason: d
                            })
                        }
                    })
                })));
            }, u = ()=>{
                const d = t.addPendingDecision(r, Ct.ASK_QUESTION, n, (h)=>{
                    if (l) return;
                    if (!h) {
                        c("User cancelled questionnaire"), t.setBubbleData(r, {
                            additionalData: {
                                status: "cancelled"
                            }
                        });
                        return;
                    }
                    const p = phk({
                        params: i,
                        bubble: t.getBubbleData(r)
                    });
                    if (!p) {
                        if (t.setBubbleData(r, {
                            userDecision: void 0,
                            status: "completed",
                            additionalData: {
                                status: "pending"
                            }
                        }), t.getBubbleData(r)?.userDecision !== void 0) return;
                        this.waiters.get(n)?.disposeDecision(), queueMicrotask(()=>{
                            l || this.isDisposed || (this.waiters.delete(n), u());
                        });
                        return;
                    }
                    t.setBubbleData(r, {
                        status: "completed",
                        result: p,
                        additionalData: {
                            status: "submitted"
                        }
                    });
                    const g = i.questions?.every((f)=>(p.answers?.find((b)=>b.questionId === f.id)?.selectedOptionIds?.length ?? 0) > 0) ?? !1;
                    l = !0, this.waiters.delete(n), this.trackAnalytics(e, i, !0, g), this.setGeneratingState(e, !0), this.armAnswerDeliveryWatchdog(t, r, n), a(this.convertToAgentResult(p));
                }, !0);
                l ? d() : this.waiters.set(n, {
                    rejectSuperseded: c,
                    disposeDecision: d
                });
            };
            u();
        });
    }
    settleSupersededAskQuestionRequest(t) {
        const e = this.waiters.get(t);
        e?.rejectSuperseded("Superseded by a resumed ask_question request"), e?.disposeDecision(), this.waiters.delete(t);
    }
    convertToAgentResult(t) {
        return !t || t.answers.length === 0 ? new ltt({
            result: new Nve({
                result: {
                    case: "success",
                    value: new oni({
                        answers: []
                    })
                }
            })
        }) : new ltt({
            result: new Nve({
                result: {
                    case: "success",
                    value: new oni({
                        answers: t.answers.map((e)=>new u5o({
                                questionId: e.questionId,
                                selectedOptionIds: e.selectedOptionIds,
                                freeformText: e.freeformText
                            }))
                    })
                }
            })
        });
    }
    trackAnalytics(t, e, n, i) {
        try {
            const s = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
            this.getAnalyticsService().trackEvent("ask_question_invoked", {
                number_of_questions: e?.questions?.length ?? 0,
                submitted: n,
                all_questions_answered: i,
                model: s?.modelConfig?.modelName
            });
        } catch  {}
    }
    getLastAiBubbleId(t) {
        const n = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
        if (n) return [
            ...n.fullConversationHeadersOnly ?? []
        ].reverse().find((i)=>i.type === bs.AI)?.bubbleId;
    }
    setGeneratingState(t, e) {
        const n = this.getLastAiBubbleId(t);
        if (!n) return;
        const i = this.getComposerDataService(), s = i.getComposerData(this.context.composerDataHandle)?.generatingBubbleIds ?? [], o = s.includes(n);
        e && !o ? i.updateComposerData(this.context.composerDataHandle, {
            generatingBubbleIds: [
                ...s,
                n
            ]
        }) : !e && o && i.updateComposerData(this.context.composerDataHandle, {
            generatingBubbleIds: s.filter((a)=>a !== n)
        }), i.updateComposerDataSetStore(this.context.composerDataHandle, (a)=>a("status", e ? "generating" : "completed"));
    }
    dispose() {
        if (this.isDisposed) return;
        this.isDisposed = !0, this.resolveDisposed(), this.deliveryWatchdogs?.dispose();
        const t = [
            ...this.waiters.values()
        ];
        this.waiters.clear();
        for (const e of t)e.rejectSuperseded("Agent run ended before questionnaire completion"), e.disposeDecision();
    }
};

}
