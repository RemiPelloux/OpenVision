import { Cos } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Tos } from "./composerMigrationUtils.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { mo, tf } from "./composer_pb.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { a5e, cni, tbt, uni } from "./switch_mode_tool_pb.js";
import { Ct, Pu, W_t } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var hpg;
export { hpg };
var __wakaru_Wyk_initialized = false;
export function Wyk() {
if (__wakaru_Wyk_initialized) return;
__wakaru_Wyk_initialized = true;
"use strict";
E(), uni(), tf(), Pu(), el(), Pl(), Tos(), xE(), Ss(), hpg = class {
    constructor(t){
        this.context = t, this.handledToolCalls = new Set;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    getComposerDataService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(no));
    }
    getComposerModesService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(uk));
    }
    getReactiveStorageService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(sa));
    }
    getAnalyticsService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(Qr));
    }
    async handleSwitchModeRequest(t) {
        const e = this.getToolFormer(), n = this.getComposerModesService(), i = this.getReactiveStorageService(), r = this.getAnalyticsService(), s = this.getComposerDataService(), o = this.context.composerDataHandle.data.composerId, a = t.args?.toolCallId;
        if (!a) return new a5e({
            result: {
                case: "rejected",
                value: new tbt({
                    reason: "Missing toolCallId"
                })
            }
        });
        const l = t.args?.targetModeId ?? "", c = n.getComposerUnifiedMode(o) || "agent", u = t.args?.explanation, d = new W_t({
            fromModeId: c,
            toModeId: l,
            explanation: u
        }), h = JSON.stringify({
            fromModeId: c,
            toModeId: l,
            explanation: u
        }), p = e.getOrCreateBubbleId({
            toolCallId: a,
            toolIndex: 0,
            modelCallId: a,
            toolCallType: Ct.SWITCH_MODE,
            params: {
                case: "switchModeParams",
                value: d
            },
            rawArgs: h,
            name: "switch_mode"
        });
        e.setBubbleData(p, {
            tool: Ct.SWITCH_MODE,
            toolCallId: a,
            name: "switch_mode",
            rawArgs: h,
            params: d
        });
        const g = e.getBubbleData(p);
        if (g?.userDecision !== void 0) return g.userDecision === "accepted" ? this.performModeSwitch(o, c, l, !0, !1) : new a5e({
            result: {
                case: "rejected",
                value: new tbt({
                    reason: "User rejected the mode switch"
                })
            }
        });
        if (c === l) return e.acceptToolCall(a), new a5e({
            result: {
                case: "approved",
                value: new cni
            }
        });
        if (this.handledToolCalls.has(a)) return new a5e({
            result: {
                case: "rejected",
                value: new tbt({
                    reason: "Mode switch already handled"
                })
            }
        });
        this.handledToolCalls.add(a);
        const f = `${c}->${l}`;
        if ((i.applicationUserPersistentStorage?.composerState?.autoRejectedModeTransitions || []).includes(f)) {
            p && e.setBubbleData(p, {
                userDecision: "rejected"
            });
            const k = s.getComposerData(this.context.composerDataHandle);
            return r.trackEvent("switch_mode_invoked", {
                fromModeId: c,
                toModeId: l,
                accepted: !1,
                model: k?.modelConfig?.modelName
            }), this.handledToolCalls.delete(a), new a5e({
                result: {
                    case: "rejected",
                    value: new tbt({
                        reason: `Mode switch from ${c} to ${l} is disabled by user preference`
                    })
                }
            });
        }
        const y = i.applicationUserPersistentStorage?.composerState;
        return Cos(y) ? (e.acceptToolCall(a), this.handledToolCalls.delete(a), this.performModeSwitch(o, c, l, !0, !0)) : (this.context.trackTrajectoryStopped?.({
            composerId: o,
            invocationID: this.context.generationUUID,
            toolCallId: a,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "switch_mode.needs_approval"
        }), new Promise((k)=>{
            const C = e.addPendingDecision(p, Ct.SWITCH_MODE, a, (T)=>{
                if (C(), this.handledToolCalls.delete(a), T) k(this.performModeSwitch(o, c, l, !0, !1));
                else {
                    const I = s.getComposerData(this.context.composerDataHandle);
                    r.trackEvent("switch_mode_invoked", {
                        fromModeId: c,
                        toModeId: l,
                        accepted: !1,
                        model: I?.modelConfig?.modelName
                    }), k(new a5e({
                        result: {
                            case: "rejected",
                            value: new tbt({
                                reason: "User rejected the mode switch"
                            })
                        }
                    }));
                }
            }, !0);
        }));
    }
    performModeSwitch(t, e, n, i, r) {
        const s = this.getComposerModesService(), o = this.getComposerDataService(), a = this.getAnalyticsService(), l = o.getComposerData(this.context.composerDataHandle);
        return a.trackEvent("switch_mode_invoked", {
            fromModeId: e,
            toModeId: n,
            accepted: !0,
            model: l?.modelConfig?.modelName
        }), n === "plan" && a.trackEvent("composer.plan_mode.entry_point", {
            entrypoint: "switch_mode_tool",
            model: l?.modelConfig?.modelName || "unknown"
        }), s.setComposerUnifiedMode(this.context.composerDataHandle, n), new a5e({
            result: {
                case: "approved",
                value: new cni
            }
        });
    }
};

}
