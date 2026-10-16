import { QSo, goe, yXi } from "./cgh.js";
import { Jm, ps } from "./composer_pb.js";
import { $Bs } from "./f0s.js";
import { Ml } from "./index.ts";
import { Kss, zjc } from "./qIc.js";
import { PVt } from "./questionnaireDecision.js";
import { DVt } from "./questionnaireUtils.js";
import { Pve, mee, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var $Th;
export { $Th };
var __wakaru_BQv_initialized = false;
export function BQv() {
if (__wakaru_BQv_initialized) return;
__wakaru_BQv_initialized = true;
"use strict";
x(), Ml(), Jm(), ql(), PVt(), DVt(), $Th = class {
    constructor(e){
        this.context = e;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    linkAsyncCompletionToOriginal(e, t, n) {
        const i = n.args?.asyncOriginalToolCallId;
        if (!i) return;
        const r = e.getBubbleIdByToolCallId(i);
        if (!r) return;
        const s = e.getBubbleData(r), o = n.result?.result;
        if (o?.case !== "rejected" || !zjc(o.value.reason)) {
            e.setBubbleData(r, {
                additionalData: {
                    ...s?.additionalData,
                    answerBubbleId: t
                }
            });
            return;
        }
        const a = Kss(o.value.reason)?.kind ?? "timeout";
        e.setBubbleData(r, {
            status: "cancelled",
            additionalData: {
                ...s?.additionalData,
                status: "cancelled",
                answerBubbleId: t,
                skipReason: a
            }
        }), e.removePendingDecisionForToolCall(i);
    }
    async handlePartialToolCall(e, t) {
        const n = e.tool.value, i = this.getToolFormer();
        if (n.args) {
            const r = n.args, s = r?.title || "", o = r?.questions || [];
            let a = i.getBubbleIdByToolCallId(t);
            a || (a = i.getOrCreateBubbleId({
                toolCallId: t,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: nt.ASK_QUESTION,
                name: "ask_question",
                params: void 0,
                toolCall: e
            }));
            const u = i.getBubbleData(a)?.params?.questions?.length ?? 0, h = Math.max(0, Math.min(u, o.length));
            for(let g = h; g < o.length; g++){
                const f = o.slice(0, g + 1), v = new Pve({
                    title: s,
                    questions: f.map((b)=>({
                            id: b.id,
                            prompt: b.prompt,
                            allowMultiple: b.allowMultiple ?? !1,
                            options: b.options.map((y)=>({
                                    id: y.id,
                                    label: y.label
                                }))
                        }))
                });
                i.setBubbleData(a, {
                    params: v
                });
            }
            const p = QSo(new Pve({
                title: s,
                questions: o.map((g)=>({
                        id: g.id,
                        prompt: g.prompt,
                        allowMultiple: g.allowMultiple ?? !1,
                        options: g.options.map((f)=>({
                                id: f.id,
                                label: f.label
                            }))
                    })),
                runAsync: r?.runAsync ?? !1
            }));
            i.setBubbleData(a, {
                params: p
            });
        } else i.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.ASK_QUESTION,
            name: "ask_question",
            params: void 0,
            toolCall: e
        });
    }
    async handleToolCallDelta(e, t, n) {}
    async handleToolCallStarted(e, t) {
        const n = e.tool.value, i = this.getToolFormer(), r = n.args, s = r?.title || "", o = r?.questions || [], a = r?.asyncOriginalToolCallId, c = QSo(new Pve({
            title: s,
            questions: o.map((h)=>({
                    id: h.id,
                    prompt: h.prompt,
                    allowMultiple: h.allowMultiple ?? !1,
                    options: h.options.map((p)=>({
                            id: p.id,
                            label: p.label
                        }))
                })),
            runAsync: r?.runAsync ?? !1
        })), l = i.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.ASK_QUESTION,
            name: "ask_question",
            params: {
                case: "askQuestionParams",
                value: c
            },
            toolCall: e
        });
        if (n.result && n.result.result.case !== void 0 && n.result.result.case !== "async" && n.result) {
            const { AskQuestionResult: h, AskQuestionResult_Answer: p } = await Promise.resolve().then(()=>(ql(), $Bs));
            let g;
            n.result.result.case === "success" && (g = new h({
                answers: n.result.result.value.answers.map((b)=>new p({
                        questionId: b.questionId,
                        selectedOptionIds: b.selectedOptionIds,
                        freeformText: b.freeformText
                    }))
            }));
            const f = i.getBubbleData(l);
            !(f?.tool === nt.ASK_QUESTION && f.additionalData?.resultProvenance === "unconfirmed-cloud-submission") && (!g || !goe(g)) && f?.tool === nt.ASK_QUESTION && f.result && goe(f.result) && (g = f.result), i.setBubbleData(l, {
                params: c,
                result: g,
                additionalData: {
                    status: "submitted",
                    resultProvenance: void 0
                }
            }), a && this.linkAsyncCompletionToOriginal(i, l, n);
            return;
        }
        i.setBubbleData(l, {
            params: c
        });
    }
    async handleToolCallCompleted(e, t) {
        const n = e.tool.value, i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(t);
        if (!r) return;
        const s = n.result?.result;
        if (s?.case === void 0) return;
        const o = i.getBubbleData(r), c = !(o?.tool === nt.ASK_QUESTION && o.additionalData?.resultProvenance === "unconfirmed-cloud-submission") && o?.tool === nt.ASK_QUESTION && o.result && goe(o.result) ? o.result : void 0;
        let l, u = "submitted", h;
        switch(s.case){
            case "success":
                {
                    l = new mee({
                        answers: s.value.answers.map((g)=>({
                                questionId: g.questionId,
                                selectedOptionIds: g.selectedOptionIds,
                                freeformText: g.freeformText
                            }))
                    });
                    break;
                }
            case "async":
                {
                    l = new mee({
                        isAsync: !0
                    }), u = "pending";
                    break;
                }
            case "rejected":
                {
                    const g = s.value.reason;
                    l = new mee({
                        answers: []
                    }), u = "cancelled", zjc(g) ? h = Kss(g)?.kind ?? "timeout" : h = "user", this.linkAsyncCompletionToOriginal(i, r, n);
                    break;
                }
            case "error":
                {
                    if (c) {
                        i.setBubbleData(r, {
                            status: "completed",
                            result: c,
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
        const p = s.case === "success" || s.case === "rejected" && h === "user";
        if (c && (!l || !goe(l))) {
            i.setBubbleData(r, {
                status: "completed",
                result: c,
                additionalData: {
                    ...o?.additionalData,
                    status: "submitted"
                }
            }), p && yXi(i, r);
            return;
        }
        i.setBubbleData(r, {
            status: "completed",
            result: l,
            additionalData: {
                status: u,
                resultProvenance: void 0,
                ...h !== void 0 ? {
                    skipReason: h
                } : {}
            }
        }), p && yXi(i, r);
    }
};

}
