import { W0o } from "./composerDecisionsService.js";
import { Jm, ps } from "./composer_pb.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { VCh } from "./smartModeApprovalCardTracking.js";
import { O4e, dg, zW } from "./toolCallHumanReviewTypes.js";
import { XZe, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { D4i, HQe, Y7t, kDn } from "./web_fetch_tool_pb.js";
function KQv(e, t, n) {
    if (n.isAutoRunDisabledByAdmin()) return !1;
    if (n.shouldAutoRun_runEverythingMode()) return !0;
    if (n.shouldAutoRun_eitherUseAllowlistOrRunEverythingMode()) {
        const i = t.applicationUserPersistentStorage?.composerState?.webFetchDomainAllowlist ?? [];
        if (i.length === 0) return !1;
        let r;
        try {
            r = new URL(e.startsWith("http") ? e : `https://${e}`).hostname;
        } catch  {
            return !1;
        }
        return i.some((s)=>{
            if (s === "*") return !0;
            if (s.startsWith("*.")) {
                const o = s.slice(2);
                return r === o || r.endsWith("." + o);
            }
            return s === r;
        });
    }
    return !1;
}
function YQv(e) {
    const t = e.smartModeApproval?.reason;
    if (typeof t != "string") return;
    const n = t.trim();
    return n.length > 0 ? n : void 0;
}
function XQv(e, t, n, i) {
    return i !== void 0 && !n.shouldAutoRun_runEverythingMode() ? !1 : KQv(e, t, n);
}
var qTh;
export { KQv, XQv, YQv, qTh };
var __wakaru_ZQv_initialized = false;
export function ZQv() {
if (__wakaru_ZQv_initialized) return;
__wakaru_ZQv_initialized = true;
"use strict";
x(), D4i(), Ha(), O4e(), Jm(), ql(), VCh(), qTh = class {
    constructor(e){
        this.context = e;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    async handleWebFetchRequest(e) {
        const t = this.getToolFormer(), n = this.context.instantiationService.invokeFunction((g)=>g.get(Do)), i = e.args?.url ?? "", r = e.args?.toolCallId;
        if (!r) return new HQe({
            result: {
                case: "rejected",
                value: new kDn({
                    reason: "Missing toolCallId"
                })
            }
        });
        const s = new XZe({
            url: i
        }), o = JSON.stringify({
            url: i
        }), a = YQv(e), c = e.smartModeApproval?.requestId, l = t.getOrCreateBubbleId({
            toolCallId: r,
            toolIndex: 0,
            modelCallId: r,
            toolCallType: nt.WEB_FETCH,
            params: {
                case: "webFetchParams",
                value: s
            },
            rawArgs: o,
            name: "web_fetch"
        }), u = t.getBubbleData(l), h = u?.tool === nt.WEB_FETCH ? u.additionalData?.reviewData?.status : void 0;
        return t.setBubbleData(l, {
            tool: nt.WEB_FETCH,
            toolCallId: r,
            name: "web_fetch",
            rawArgs: o,
            params: s,
            additionalData: a === void 0 ? void 0 : {
                smartModeApprovalReason: a,
                smartModeApprovalRequestId: c
            }
        }), e.skipApproval ? (t.acceptToolCall(r), new HQe({
            result: {
                case: "approved",
                value: new Y7t
            }
        })) : XQv(i, n, t, a) ? (t.acceptToolCall(r), new HQe({
            result: {
                case: "approved",
                value: new Y7t
            }
        })) : (t.setBubbleData(l, {
            additionalData: {
                reviewData: {
                    status: dg.REQUESTED,
                    selectedOption: zW.RUN,
                    isShowingInput: !1,
                    highlightedOption: void 0
                },
                smartModeApprovalReason: a,
                smartModeApprovalRequestId: c
            }
        }), this.context.trackTrajectoryStopped?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "web_fetch.needs_approval"
        }), W0o({
            existingReviewStatus: h,
            smartModeApprovalRequestId: c
        }) && this.context.trackApprovalCardShown?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            source: "fetch",
            smartModeApprovalRequestId: c
        }), new Promise((g)=>{
            const f = t.addPendingDecision(l, nt.WEB_FETCH, r, (v)=>{
                f(), g(new HQe({
                    result: v ? {
                        case: "approved",
                        value: new Y7t
                    } : {
                        case: "rejected",
                        value: new kDn({
                            reason: "User chose to skip"
                        })
                    }
                }));
            }, !0);
        }));
    }
};

}
