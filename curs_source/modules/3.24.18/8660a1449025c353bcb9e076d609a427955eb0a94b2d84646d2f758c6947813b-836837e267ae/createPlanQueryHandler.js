import { icl } from "./Ycg.js";
import { I6, Y4 } from "./composerPlanService.js";
import { Bb, Ux } from "./composerViews.js";
import { mo, tf } from "./composer_pb.js";
import { spg } from "./createPlanIdentity.js";
import { J_t, ebt, nni, uSr } from "./create_plan_tool_pb.js";
import { AB } from "./planFileUtils.js";
import { E } from "./tslib.es6.js";
import { Hae } from "./yBp.js";
var apg;
export { apg };
var __wakaru_Lyk_initialized = false;
export function Lyk() {
if (__wakaru_Lyk_initialized) return;
__wakaru_Lyk_initialized = true;
"use strict";
E(), I6(), Ux(), AB(), tf(), ebt(), spg(), apg = class {
    constructor(t){
        this.context = t;
    }
    shouldAutoOpenPlanEditor(t) {
        const e = this.context.instantiationService.invokeFunction((n)=>n.get(Bb));
        return e.isFocused(t) || e.isPrevBubbleFocused(t);
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    async handleCreatePlanRequest(t) {
        const e = this.context.instantiationService.invokeFunction((h)=>h.get(Y4)), n = this.context.composerDataHandle.data.composerId, i = t.toolCallId, r = t.args, s = this.getToolFormer(), o = s.getBubbleIdByToolCallId(i), a = o ? s.getBubbleData(o) : void 0, l = a?.additionalData, c = l?.planId, u = l?.planUri;
        let d;
        if (u) {
            const h = Hae(u);
            if (d = h.fsPath, o && !c) {
                const p = await e.getRegistryEntry(h);
                s.setBubbleData(o, {
                    additionalData: {
                        ...a?.additionalData,
                        planId: p?.id,
                        planUri: h.toString()
                    }
                });
            }
        } else try {
            const h = r?.name || void 0, p = r?.overview || "", g = r?.todos?.map((y)=>({
                    id: y.id || "",
                    content: y.content,
                    status: "pending",
                    dependencies: []
                })) || [], f = h ?? e.getPlanTitle(r?.plan ?? ""), _ = await icl(i, async ()=>{
                const y = await e.createPlanFile(n, f, p, g, r?.plan ?? ""), S = await e.getRegistryEntry(y);
                return {
                    planUri: y,
                    planId: S?.id ?? c
                };
            }), b = _.planUri;
            if (d = b.fsPath, o && s.setBubbleData(o, {
                additionalData: {
                    ...a?.additionalData,
                    planId: _.planId ?? c,
                    planUri: b.toString(),
                    hasOpenedEditor: !0
                }
            }), this.shouldAutoOpenPlanEditor(n)) try {
                await e.openPlanInEditor(b, {
                    stealFocus: !1,
                    composerId: n
                });
            } catch (y) {
                console.error("[CreatePlanQueryHandler] Failed to open plan editor in fallback path:", y);
            }
        } catch (h) {
            console.error("[CreatePlanQueryHandler] Failed to create plan file in fallback path:", h);
        }
        return new uSr({
            result: new J_t({
                result: {
                    case: "success",
                    value: new nni
                },
                planUri: d ?? ""
            })
        });
    }
};

}
