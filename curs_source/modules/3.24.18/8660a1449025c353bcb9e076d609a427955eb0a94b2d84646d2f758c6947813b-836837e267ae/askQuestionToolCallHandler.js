import { Gil, Wis, Ybe } from "./Aeg.js";
import { uIo, xtd } from "./SZu.js";
import { mo, tf } from "./composer_pb.js";
import { nl } from "./index.ts";
import { Tzt } from "./questionnaireDecision.js";
import { Axn } from "./questionnaireUtils.js";
import { Ct, EAe, Hde, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { y3o } from "./ze.js";
var lpg;
export { lpg };
var __wakaru_Fyk_initialized = false;
export function Fyk() {
if (__wakaru_Fyk_initialized) return;
__wakaru_Fyk_initialized = true;
"use strict";
E(), nl(), tf(), Pu(), Tzt(), Axn(), lpg = class {
    constructor(t){
        this.context = t;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    linkAsyncCompletionToOriginal(t, e, n) {
        const i = n.args?.asyncOriginalToolCallId;
        if (!i) return;
        const r = t.getBubbleIdByToolCallId(i);
        if (!r) return;
        const s = t.getBubbleData(r), o = n.result?.result;
        if (o?.case !== "rejected" || !xtd(o.value.reason)) {
            t.setBubbleData(r, {
                additionalData: {
                    ...s?.additionalData,
                    answerBubbleId: e
                }
            });
            return;
        }
        const a = uIo(o.value.reason)?.kind ?? "timeout";
        t.setBubbleData(r, {
            status: "cancelled",
            additionalData: {
                ...s?.additionalData,
                status: "cancelled",
                answerBubbleId: e,
                skipReason: a
            }
        }), t.removePendingDecisionForToolCall(i);
    }
    async handlePartialToolCall(t, e) {
        const n = t.tool.value, i = this.getToolFormer();
        if (n.args) {
            const r = n.args, s = r?.title || "", o = r?.questions || [];
            let a = i.getBubbleIdByToolCallId(e);
            a || (a = i.getOrCreateBubbleId({
                toolCallId: e,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: Ct.ASK_QUESTION,
                name: "ask_question",
                params: void 0,
                toolCall: t
            }));
            const u = i.getBubbleData(a)?.params?.questions?.length ?? 0, d = Math.max(0, Math.min(u, o.length));
            for(let p = d; p < o.length; p++){
                const g = o.slice(0, p + 1), f = new EAe({
                    title: s,
                    questions: g.map((_)=>({
                            id: _.id,
                            prompt: _.prompt,
                            allowMultiple: _.allowMultiple ?? !1,
                            options: _.options.map((b)=>({
                                    id: b.id,
                                    label: b.label
                                }))
                        }))
                });
                i.setBubbleData(a, {
                    params: f
                });
            }
            const h = Gil(new EAe({
                title: s,
                questions: o.map((p)=>({
                        id: p.id,
                        prompt: p.prompt,
                        allowMultiple: p.allowMultiple ?? !1,
                        options: p.options.map((g)=>({
                                id: g.id,
                                label: g.label
                            }))
                    })),
                runAsync: r?.runAsync ?? !1
            }));
            i.setBubbleData(a, {
                params: h
            });
        } else i.getOrCreateBubbleId({
            toolCallId: e,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.ASK_QUESTION,
            name: "ask_question",
            params: void 0,
            toolCall: t
        });
    }
    async handleToolCallDelta(t, e, n) {}
    async handleToolCallStarted(t, e) {
        const n = t.tool.value, i = this.getToolFormer(), r = n.args, s = r?.title || "", o = r?.questions || [], a = r?.asyncOriginalToolCallId, l = Gil(new EAe({
            title: s,
            questions: o.map((d)=>({
                    id: d.id,
                    prompt: d.prompt,
                    allowMultiple: d.allowMultiple ?? !1,
                    options: d.options.map((h)=>({
                            id: h.id,
                            label: h.label
                        }))
                })),
            runAsync: r?.runAsync ?? !1
        })), c = i.getOrCreateBubbleId({
            toolCallId: e,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.ASK_QUESTION,
            name: "ask_question",
            params: {
                case: "askQuestionParams",
                value: l
            },
            toolCall: t
        });
        if (n.result && n.result.result.case !== void 0 && n.result.result.case !== "async" && n.result) {
            const { AskQuestionResult: d, AskQuestionResult_Answer: h } = await Promise.resolve().then(()=>(Pu(), y3o));
            let p;
            n.result.result.case === "success" && (p = new d({
                answers: n.result.result.value.answers.map((_)=>new h({
                        questionId: _.questionId,
                        selectedOptionIds: _.selectedOptionIds,
                        freeformText: _.freeformText
                    }))
            }));
            const g = i.getBubbleData(c);
            !(g?.tool === Ct.ASK_QUESTION && g.additionalData?.resultProvenance === "unconfirmed-cloud-submission") && (!p || !Ybe(p)) && g?.tool === Ct.ASK_QUESTION && g.result && Ybe(g.result) && (p = g.result), i.setBubbleData(c, {
                params: l,
                result: p,
                additionalData: {
                    status: "submitted",
                    resultProvenance: void 0
                }
            }), a && this.linkAsyncCompletionToOriginal(i, c, n);
            return;
        }
        i.setBubbleData(c, {
            params: l
        });
    }
    async handleToolCallCompleted(t, e) {
        const n = t.tool.value, i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(e);
        if (!r) return;
        const s = n.result?.result;
        if (s?.case === void 0) return;
        const o = i.getBubbleData(r), l = !(o?.tool === Ct.ASK_QUESTION && o.additionalData?.resultProvenance === "unconfirmed-cloud-submission") && o?.tool === Ct.ASK_QUESTION && o.result && Ybe(o.result) ? o.result : void 0;
        let c, u = "submitted", d;
        switch(s.case){
            case "success":
                {
                    c = new Hde({
                        answers: s.value.answers.map((p)=>({
                                questionId: p.questionId,
                                selectedOptionIds: p.selectedOptionIds,
                                freeformText: p.freeformText
                            }))
                    });
                    break;
                }
            case "async":
                {
                    c = new Hde({
                        isAsync: !0
                    }), u = "pending";
                    break;
                }
            case "rejected":
                {
                    const p = s.value.reason;
                    c = new Hde({
                        answers: []
                    }), u = "cancelled", xtd(p) ? d = uIo(p)?.kind ?? "timeout" : d = "user", this.linkAsyncCompletionToOriginal(i, r, n);
                    break;
                }
            case "error":
                {
                    if (l) {
                        i.setBubbleData(r, {
                            status: "completed",
                            result: l,
                            additionalData: {
                                ...o?.additionalData,
                                status: "submitted"
                            }
                        });
                        return;
                    }
                    i.setBubbleData(r, {
                        status: "error",
                        result: void 0,
                        additionalData: {
                            status: "error",
                            resultProvenance: void 0
                        }
                    });
                    return;
                }
            default:
                return s;
        }
        const h = s.case === "success" || s.case === "rejected" && d === "user";
        if (l && (!c || !Ybe(c))) {
            i.setBubbleData(r, {
                status: "completed",
                result: l,
                additionalData: {
                    ...o?.additionalData,
                    status: "submitted"
                }
            }), h && Wis(i, r);
            return;
        }
        i.setBubbleData(r, {
            status: "completed",
            result: c,
            additionalData: {
                status: u,
                resultProvenance: void 0,
                ...d !== void 0 ? {
                    skipReason: d
                } : {}
            }
        }), h && Wis(i, r);
    }
};

}
