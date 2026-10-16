import { Kyk, Yyk, zal } from "./Ycg.js";
import { mo, tf } from "./composer_pb.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { aug } from "./smartModeApprovalCardTracking.js";
import { Cv, oqe, vJ } from "./toolCallHumanReviewTypes.js";
import { Ct, G_t, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { gni, mni, nbt, wmn } from "./web_fetch_tool_pb.js";
var mpg;
export { mpg };
var __wakaru_Xyk_initialized = false;
export function Xyk() {
if (__wakaru_Xyk_initialized) return;
__wakaru_Xyk_initialized = true;
"use strict";
E(), gni(), el(), oqe(), tf(), Pu(), aug(), mpg = class {
    constructor(t){
        this.context = t;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    async handleWebFetchRequest(t) {
        const e = this.getToolFormer(), n = this.context.instantiationService.invokeFunction((p)=>p.get(sa)), i = t.args?.url ?? "", r = t.args?.toolCallId;
        if (!r) return new nbt({
            result: {
                case: "rejected",
                value: new mni({
                    reason: "Missing toolCallId"
                })
            }
        });
        const s = new G_t({
            url: i
        }), o = JSON.stringify({
            url: i
        }), a = Kyk(t), l = t.smartModeApproval?.requestId, c = e.getOrCreateBubbleId({
            toolCallId: r,
            toolIndex: 0,
            modelCallId: r,
            toolCallType: Ct.WEB_FETCH,
            params: {
                case: "webFetchParams",
                value: s
            },
            rawArgs: o,
            name: "web_fetch"
        }), u = e.getBubbleData(c), d = u?.tool === Ct.WEB_FETCH ? u.additionalData?.reviewData?.status : void 0;
        return e.setBubbleData(c, {
            tool: Ct.WEB_FETCH,
            toolCallId: r,
            name: "web_fetch",
            rawArgs: o,
            params: s,
            additionalData: a === void 0 ? void 0 : {
                smartModeApprovalReason: a,
                smartModeApprovalRequestId: l
            }
        }), t.skipApproval ? (e.acceptToolCall(r), new nbt({
            result: {
                case: "approved",
                value: new wmn
            }
        })) : Yyk(i, n, e, a) ? (e.acceptToolCall(r), new nbt({
            result: {
                case: "approved",
                value: new wmn
            }
        })) : (e.setBubbleData(c, {
            additionalData: {
                reviewData: {
                    status: Cv.REQUESTED,
                    selectedOption: vJ.RUN,
                    isShowingInput: !1,
                    highlightedOption: void 0
                },
                smartModeApprovalReason: a,
                smartModeApprovalRequestId: l
            }
        }), this.context.trackTrajectoryStopped?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "web_fetch.needs_approval"
        }), zal({
            existingReviewStatus: d,
            smartModeApprovalRequestId: l
        }) && this.context.trackApprovalCardShown?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            source: "fetch",
            smartModeApprovalRequestId: l
        }), new Promise((p)=>{
            const g = e.addPendingDecision(c, Ct.WEB_FETCH, r, (f)=>{
                g(), p(new nbt({
                    result: f ? {
                        case: "approved",
                        value: new wmn
                    } : {
                        case: "rejected",
                        value: new mni({
                            reason: "User chose to skip"
                        })
                    }
                }));
            }, !0);
        }));
    }
};

}
