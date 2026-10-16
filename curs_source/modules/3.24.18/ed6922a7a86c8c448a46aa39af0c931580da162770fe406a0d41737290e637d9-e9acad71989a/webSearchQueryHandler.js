import { Jm, ps } from "./composer_pb.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Dbt, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Nyt, gDn, mDn, pDn } from "./web_search_tool_pb.js";
var jTh;
export { jTh };
var __wakaru_qQv_initialized = false;
export function qQv() {
if (__wakaru_qQv_initialized) return;
__wakaru_qQv_initialized = true;
"use strict";
x(), gDn(), Ha(), Jm(), ql(), jTh = class {
    constructor(e){
        this.context = e;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    async handleWebSearchRequest(e) {
        const t = this.getToolFormer(), n = this.context.instantiationService.invokeFunction((l)=>l.get(Do)), i = e.args?.searchTerm ?? "", r = e.args?.toolCallId;
        if (!r) return new Nyt({
            result: {
                case: "rejected",
                value: new mDn({
                    reason: "Missing toolCallId"
                })
            }
        });
        const s = new Dbt({
            searchTerm: i
        }), o = JSON.stringify({
            searchTerm: i
        }), a = t.getOrCreateBubbleId({
            toolCallId: r,
            toolIndex: 0,
            modelCallId: r,
            toolCallType: nt.WEB_SEARCH,
            params: {
                case: "webSearchParams",
                value: s
            },
            rawArgs: o,
            name: "web_search"
        });
        return t.setBubbleData(a, {
            tool: nt.WEB_SEARCH,
            toolCallId: r,
            name: "web_search",
            rawArgs: o,
            params: s
        }), !t.isAutoRunDisabledByAdmin() && (t.shouldAutoRun_runEverythingMode() || n.applicationUserPersistentStorage?.composerState?.autoAcceptWebSearchTool === !0) ? (t.acceptToolCall(r), new Nyt({
            result: {
                case: "approved",
                value: new pDn
            }
        })) : (this.context.trackTrajectoryStopped?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "web_search.needs_approval"
        }), new Promise((l)=>{
            const u = t.addPendingDecision(a, nt.WEB_SEARCH, r, (h)=>{
                u(), l(new Nyt({
                    result: h ? {
                        case: "approved",
                        value: new pDn
                    } : {
                        case: "rejected",
                        value: new mDn({
                            reason: "User chose to skip"
                        })
                    }
                }));
            }, !0);
        }));
    }
};

}
