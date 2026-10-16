import { I6, Y4 } from "./composerPlanService.js";
import { mo, tf } from "./composer_pb.js";
import { A4t, B3, Ct, Ket, Pu, yM } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var qrg;
export { qrg };
var __wakaru_Fmk_initialized = false;
export function Fmk() {
if (__wakaru_Fmk_initialized) return;
__wakaru_Fmk_initialized = true;
"use strict";
E(), Pu(), tf(), I6(), qrg = class {
    constructor(t){
        this.context = t;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    convertTodoStatus(t) {
        switch(t){
            case 1:
                return "pending";
            case 2:
                return "in_progress";
            case 3:
                return "completed";
            case 4:
                return "cancelled";
            default:
                return "pending";
        }
    }
    async handlePartialToolCall(t, e) {
        await this.handleToolCallStarted(t, e);
    }
    async handleToolCallDelta(t, e, n) {}
    async handleToolCallStarted(t, e) {
        const n = t.tool.value, i = this.getToolFormer(), r = n.args?.todos || [], s = n.args?.merge ?? !0, o = this.context.composerDataHandle.data.todos || [], a = r.map((u)=>{
            const d = o.find((h)=>h.id === u.id);
            return new yM({
                id: u.id,
                content: u.content || d?.content || "",
                status: this.convertTodoStatus(u.status),
                dependencies: u.dependencies
            });
        }), l = new A4t({
            todos: a,
            merge: s
        });
        let c = i.getBubbleIdByToolCallId(e);
        if (c || (c = i.getOrCreateBubbleId({
            toolCallId: e,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.TODO_WRITE,
            name: "todo_write",
            params: {
                case: "todoWriteParams",
                value: l
            },
            toolCall: t
        })), a.length > 0) {
            const d = i.getBubbleData(c)?.result?.finalTodos || [], h = s ? [
                ...d,
                ...a
            ] : a;
            i.handleToolResult(new B3({
                tool: Ct.TODO_WRITE,
                toolCallId: e,
                result: {
                    case: "todoWriteResult",
                    value: new Ket({
                        success: !0,
                        finalTodos: h,
                        readyTaskIds: [],
                        needsInProgressTodos: !1,
                        wasMerge: s
                    })
                }
            }), e, !1);
        }
    }
    async handleToolCallCompleted(t, e) {
        const n = t.tool.value, i = this.getToolFormer(), r = this.context.instantiationService.invokeFunction((o)=>o.get(Y4));
        if (i.getBubbleIdByToolCallId(e)) {
            if (n.result?.result?.case === "success") {
                const o = n.result.result.value, a = n.args?.merge ?? !0, l = this.context.composerDataHandle.data.todos || [], c = o.todos?.map((g)=>{
                    const f = l.find((_)=>_.id === g.id);
                    return new yM({
                        id: g.id,
                        content: g.content || f?.content || "",
                        status: this.convertTodoStatus(g.status),
                        dependencies: g.dependencies
                    });
                }) || [], u = a ? (()=>{
                    const g = new Map(l.map((f)=>[
                            f.id,
                            f
                        ]));
                    for (const f of c)g.set(f.id, f);
                    return Array.from(g.values());
                })() : c, d = this.context.composerDataHandle.data.composerId, h = new Map;
                for (const g of c)h.set(g.id, g.status);
                await r.syncTodoUpdatesToFile(d, h);
                const p = new Ket({
                    success: !0,
                    finalTodos: u,
                    readyTaskIds: [],
                    needsInProgressTodos: !1,
                    wasMerge: a
                });
                i.handleToolResult(new B3({
                    tool: Ct.TODO_WRITE,
                    toolCallId: e,
                    result: {
                        case: "todoWriteResult",
                        value: p
                    }
                }), e, !0), this.context.onTodoToolCallCompleted?.();
            } else if (n.result?.result?.case === "error") {
                const o = n.result.result.value;
                i.handleToolResult(new B3({
                    tool: Ct.TODO_WRITE,
                    toolCallId: e,
                    error: {
                        clientVisibleErrorMessage: "Todo update failed",
                        modelVisibleErrorMessage: `Todo update failed: ${o.error}`,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: o.error
                    }
                }), e, !0);
            }
        }
    }
};

}
