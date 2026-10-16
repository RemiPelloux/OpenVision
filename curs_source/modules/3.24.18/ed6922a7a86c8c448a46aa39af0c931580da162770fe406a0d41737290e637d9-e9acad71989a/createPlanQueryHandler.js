import { bX } from "./A3u.js";
import { aG, gq } from "./composerPlanService.js";
import { Hv, rE } from "./composerViews.js";
import { Jm, ps } from "./composer_pb.js";
import { FTh } from "./createPlanIdentity.js";
import { tTo } from "./createPlanToolCallHandler.js";
import { E4i, Lyt, UQe, uDn } from "./create_plan_tool_pb.js";
import { eF } from "./planFileUtils.js";
import { x } from "./tslib.es6.js";
var UTh;
export { UTh };
var __wakaru_OQv_initialized = false;
export function OQv() {
if (__wakaru_OQv_initialized) return;
__wakaru_OQv_initialized = true;
"use strict";
x(), aG(), rE(), eF(), Jm(), Lyt(), FTh(), UTh = class {
    constructor(e){
        this.context = e;
    }
    shouldAutoOpenPlanEditor(e) {
        const t = this.context.instantiationService.invokeFunction((n)=>n.get(Hv));
        return t.isFocused(e) || t.isPrevBubbleFocused(e);
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    async handleCreatePlanRequest(e) {
        const t = this.context.instantiationService.invokeFunction((p)=>p.get(gq)), n = this.context.composerDataHandle.data.composerId, i = e.toolCallId, r = e.args, s = this.getToolFormer(), o = s.getBubbleIdByToolCallId(i), a = o ? s.getBubbleData(o) : void 0, c = a?.additionalData, l = c?.planId, u = c?.planUri;
        let h;
        if (u) {
            const p = bX(u);
            if (h = p.fsPath, o && !l) {
                const g = await t.getRegistryEntry(p);
                s.setBubbleData(o, {
                    additionalData: {
                        ...a?.additionalData,
                        planId: g?.id,
                        planUri: p.toString()
                    }
                });
            }
        } else try {
            const p = r?.name || void 0, g = r?.overview || "", f = r?.todos?.map((T)=>({
                    id: T.id || "",
                    content: T.content,
                    status: "pending",
                    dependencies: []
                })) || [], v = p ?? t.getPlanTitle(r?.plan ?? ""), b = await tTo(i, async ()=>{
                const T = await t.createPlanFile(n, v, g, f, r?.plan ?? ""), E = await t.getRegistryEntry(T);
                return {
                    planUri: T,
                    planId: E?.id ?? l
                };
            }), y = b.planUri;
            if (h = y.fsPath, o && s.setBubbleData(o, {
                additionalData: {
                    ...a?.additionalData,
                    planId: b.planId ?? l,
                    planUri: y.toString(),
                    hasOpenedEditor: !0
                }
            }), this.shouldAutoOpenPlanEditor(n)) try {
                await t.openPlanInEditor(y, {
                    stealFocus: !1,
                    composerId: n
                });
            } catch (T) {
                console.error("[CreatePlanQueryHandler] Failed to open plan editor in fallback path:", T);
            }
        } catch (p) {
            console.error("[CreatePlanQueryHandler] Failed to create plan file in fallback path:", p);
        }
        return new E4i({
            result: new UQe({
                result: {
                    case: "success",
                    value: new uDn
                },
                planUri: h ?? ""
            })
        });
    }
};

}
