import { mo, tf } from "./composer_pb.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Ct, E4t, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { G4t, rni, sni, ymn } from "./web_search_tool_pb.js";
var ppg;
export { ppg };
var __wakaru_qyk_initialized = false;
export function qyk() {
if (__wakaru_qyk_initialized) return;
__wakaru_qyk_initialized = true;
"use strict";
E(), ymn(), el(), tf(), Pu(), ppg = class {
    constructor(t){
        this.context = t;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    async handleWebSearchRequest(t) {
        const e = this.getToolFormer(), n = this.context.instantiationService.invokeFunction((c)=>c.get(sa)), i = t.args?.searchTerm ?? "", r = t.args?.toolCallId;
        if (!r) return new G4t({
            result: {
                case: "rejected",
                value: new sni({
                    reason: "Missing toolCallId"
                })
            }
        });
        const s = new E4t({
            searchTerm: i
        }), o = JSON.stringify({
            searchTerm: i
        }), a = e.getOrCreateBubbleId({
            toolCallId: r,
            toolIndex: 0,
            modelCallId: r,
            toolCallType: Ct.WEB_SEARCH,
            params: {
                case: "webSearchParams",
                value: s
            },
            rawArgs: o,
            name: "web_search"
        });
        return e.setBubbleData(a, {
            tool: Ct.WEB_SEARCH,
            toolCallId: r,
            name: "web_search",
            rawArgs: o,
            params: s
        }), !e.isAutoRunDisabledByAdmin() && (e.shouldAutoRun_runEverythingMode() || n.applicationUserPersistentStorage?.composerState?.autoAcceptWebSearchTool === !0) ? (e.acceptToolCall(r), new G4t({
            result: {
                case: "approved",
                value: new rni
            }
        })) : (this.context.trackTrajectoryStopped?.({
            composerId: this.context.composerDataHandle.data.composerId,
            invocationID: this.context.generationUUID,
            toolCallId: r,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "web_search.needs_approval"
        }), new Promise((c)=>{
            const u = e.addPendingDecision(a, Ct.WEB_SEARCH, r, (d)=>{
                u(), c(new G4t({
                    result: d ? {
                        case: "approved",
                        value: new rni
                    } : {
                        case: "rejected",
                        value: new sni({
                            reason: "User chose to skip"
                        })
                    }
                }));
            }, !0);
        }));
    }
};

}
