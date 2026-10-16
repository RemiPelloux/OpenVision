import { aG, gq } from "./composerPlanService.js";
import { Jm, ps } from "./composer_pb.js";
import { DI, Lbt, nt, q6e, ql, xR } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var Abh;
export { Abh };
var __wakaru_kqv_initialized = false;
export function kqv() {
if (__wakaru_kqv_initialized) return;
__wakaru_kqv_initialized = true;
"use strict";
x(), ql(), Jm(), aG(), Abh = class {
    constructor(e){
        this.context = e;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    convertTodoStatus(e) {
        switch(e){
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
    async handlePartialToolCall(e, t) {
        await this.handleToolCallStarted(e, t);
    }
    async handleToolCallDelta(e, t, n) {}
    async handleToolCallStarted(e, t) {
        const n = e.tool.value, i = this.getToolFormer(), r = n.args?.todos || [], s = n.args?.merge ?? !0, o = this.context.composerDataHandle.data.todos || [], a = r.map((u)=>{
            const h = o.find((p)=>p.id === u.id);
            return new DI({
                id: u.id,
                content: u.content || h?.content || "",
                status: this.convertTodoStatus(u.status),
                dependencies: u.dependencies
            });
        }), c = new Lbt({
            todos: a,
            merge: s
        });
        let l = i.getBubbleIdByToolCallId(t);
        if (l || (l = i.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.TODO_WRITE,
            name: "todo_write",
            params: {
                case: "todoWriteParams",
                value: c
            },
            toolCall: e
        })), a.length > 0) {
            const h = i.getBubbleData(l)?.result?.finalTodos || [], p = s ? [
                ...h,
                ...a
            ] : a;
            i.handleToolResult(new xR({
                tool: nt.TODO_WRITE,
                toolCallId: t,
                result: {
                    case: "todoWriteResult",
                    value: new q6e({
                        success: !0,
                        finalTodos: p,
                        readyTaskIds: [],
                        needsInProgressTodos: !1,
                        wasMerge: s
                    })
                }
            }), t, !1);
        }
    }
    async handleToolCallCompleted(e, t) {
        const n = e.tool.value, i = this.getToolFormer(), r = this.context.instantiationService.invokeFunction((o)=>o.get(gq));
        if (i.getBubbleIdByToolCallId(t)) {
            if (n.result?.result?.case === "success") {
                const o = n.result.result.value, a = n.args?.merge ?? !0, c = this.context.composerDataHandle.data.todos || [], l = o.todos?.map((f)=>{
                    const v = c.find((b)=>b.id === f.id);
                    return new DI({
                        id: f.id,
                        content: f.content || v?.content || "",
                        status: this.convertTodoStatus(f.status),
                        dependencies: f.dependencies
                    });
                }) || [], u = a ? (()=>{
                    const f = new Map(c.map((v)=>[
                            v.id,
                            v
                        ]));
                    for (const v of l)f.set(v.id, v);
                    return Array.from(f.values());
                })() : l, h = this.context.composerDataHandle.data.composerId, p = new Map;
                for (const f of l)p.set(f.id, f.status);
                await r.syncTodoUpdatesToFile(h, p);
                const g = new q6e({
                    success: !0,
                    finalTodos: u,
                    readyTaskIds: [],
                    needsInProgressTodos: !1,
                    wasMerge: a
                });
                i.handleToolResult(new xR({
                    tool: nt.TODO_WRITE,
                    toolCallId: t,
                    result: {
                        case: "todoWriteResult",
                        value: g
                    }
                }), t, !0), this.context.onTodoToolCallCompleted?.();
            } else if (n.result?.result?.case === "error") {
                const o = n.result.result.value;
                i.handleToolResult(new xR({
                    tool: nt.TODO_WRITE,
                    toolCallId: t,
                    error: {
                        clientVisibleErrorMessage: "Todo update failed",
                        modelVisibleErrorMessage: `Todo update failed: ${o.error}`,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: o.error
                    }
                }), t, !0);
            }
        }
    }
};

}
