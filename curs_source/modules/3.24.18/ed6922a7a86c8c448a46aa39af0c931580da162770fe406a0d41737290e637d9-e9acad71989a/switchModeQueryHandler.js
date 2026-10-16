import { ca, la } from "./aiMiscServices.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { ZQi } from "./composerMigrationUtils.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { Jm, ps } from "./composer_pb.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { $Qe, L0e, bDn, yDn } from "./switch_mode_tool_pb.js";
import { YZe, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
function $Qv(e) {
    const t = e?.autoApprovedModeTransitions;
    return Array.isArray(t) && t.some((n)=>typeof n == "string" && n.trim().length > 0) || typeof t == "string" && t.trim().length > 0;
}
function XQi(e) {
    return e?.autoApproveModeTransitions === !0 || $Qv(e);
}
var VTh;
export { $Qv, VTh, XQi };
var __wakaru_VQv_initialized = false;
export function VQv() {
if (__wakaru_VQv_initialized) return;
__wakaru_VQv_initialized = true;
"use strict";
x(), yDn(), Jm(), ql(), Ha(), nl(), ZQi(), AA(), la(), VTh = class {
    constructor(e){
        this.context = e, this.handledToolCalls = new Set;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    getComposerDataService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(Zs));
    }
    getComposerModesService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(xC));
    }
    getReactiveStorageService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(Do));
    }
    getAnalyticsService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(ca));
    }
    async handleSwitchModeRequest(e) {
        const t = this.getToolFormer(), n = this.getComposerModesService(), i = this.getReactiveStorageService(), r = this.getAnalyticsService(), s = this.getComposerDataService(), o = this.context.composerDataHandle.data.composerId, a = e.args?.toolCallId;
        if (!a) return new L0e({
            result: {
                case: "rejected",
                value: new $Qe({
                    reason: "Missing toolCallId"
                })
            }
        });
        const c = e.args?.targetModeId ?? "", l = n.getComposerUnifiedMode(o) || "agent", u = e.args?.explanation, h = new YZe({
            fromModeId: l,
            toModeId: c,
            explanation: u
        }), p = JSON.stringify({
            fromModeId: l,
            toModeId: c,
            explanation: u
        }), g = t.getOrCreateBubbleId({
            toolCallId: a,
            toolIndex: 0,
            modelCallId: a,
            toolCallType: nt.SWITCH_MODE,
            params: {
                case: "switchModeParams",
                value: h
            },
            rawArgs: p,
            name: "switch_mode"
        });
        t.setBubbleData(g, {
            tool: nt.SWITCH_MODE,
            toolCallId: a,
            name: "switch_mode",
            rawArgs: p,
            params: h
        });
        const f = t.getBubbleData(g);
        if (f?.userDecision !== void 0) return f.userDecision === "accepted" ? this.performModeSwitch(o, l, c, !0, !1) : new L0e({
            result: {
                case: "rejected",
                value: new $Qe({
                    reason: "User rejected the mode switch"
                })
            }
        });
        if (l === c) return t.acceptToolCall(a), new L0e({
            result: {
                case: "approved",
                value: new bDn
            }
        });
        if (this.handledToolCalls.has(a)) return new L0e({
            result: {
                case: "rejected",
                value: new $Qe({
                    reason: "Mode switch already handled"
                })
            }
        });
        this.handledToolCalls.add(a);
        const v = `${l}->${c}`;
        if ((i.applicationUserPersistentStorage?.composerState?.autoRejectedModeTransitions || []).includes(v)) {
            g && t.setBubbleData(g, {
                userDecision: "rejected"
            });
            const A = s.getComposerData(this.context.composerDataHandle);
            return r.trackEvent("switch_mode_invoked", {
                fromModeId: l,
                toModeId: c,
                accepted: !1,
                model: A?.modelConfig?.modelName
            }), this.handledToolCalls.delete(a), new L0e({
                result: {
                    case: "rejected",
                    value: new $Qe({
                        reason: `Mode switch from ${l} to ${c} is disabled by user preference`
                    })
                }
            });
        }
        const T = i.applicationUserPersistentStorage?.composerState;
        return XQi(T) ? (t.acceptToolCall(a), this.handledToolCalls.delete(a), this.performModeSwitch(o, l, c, !0, !0)) : (this.context.trackTrajectoryStopped?.({
            composerId: o,
            invocationID: this.context.generationUUID,
            toolCallId: a,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "switch_mode.needs_approval"
        }), new Promise((A)=>{
            const R = t.addPendingDecision(g, nt.SWITCH_MODE, a, (D)=>{
                if (R(), this.handledToolCalls.delete(a), D) A(this.performModeSwitch(o, l, c, !0, !1));
                else {
                    const P = s.getComposerData(this.context.composerDataHandle);
                    r.trackEvent("switch_mode_invoked", {
                        fromModeId: l,
                        toModeId: c,
                        accepted: !1,
                        model: P?.modelConfig?.modelName
                    }), A(new L0e({
                        result: {
                            case: "rejected",
                            value: new $Qe({
                                reason: "User rejected the mode switch"
                            })
                        }
                    }));
                }
            }, !0);
        }));
    }
    performModeSwitch(e, t, n, i, r) {
        const s = this.getComposerModesService(), o = this.getComposerDataService(), a = this.getAnalyticsService(), c = o.getComposerData(this.context.composerDataHandle);
        return a.trackEvent("switch_mode_invoked", {
            fromModeId: t,
            toModeId: n,
            accepted: !0,
            model: c?.modelConfig?.modelName
        }), n === "plan" && a.trackEvent("composer.plan_mode.entry_point", {
            entrypoint: "switch_mode_tool",
            model: c?.modelConfig?.modelName || "unknown"
        }), s.setComposerUnifiedMode(this.context.composerDataHandle, n), new L0e({
            result: {
                case: "approved",
                value: new bDn
            }
        });
    }
};

}
