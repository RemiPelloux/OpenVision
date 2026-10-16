import { L4e, S_, Wj, vMu, xee } from "./De_3.js";
import { Yu } from "./browser.ts";
import { QQ, ege } from "./controlled.ts";
import { Iee, OMn, _X } from "./exec_pb.js";
import { Gp } from "./index_3.ts";
import { mde } from "./index_4.ts";
import { x } from "./tslib.es6.js";
var WDd, GDd, kC, VDd;
export { GDd, VDd, WDd, kC };
var __wakaru_cT_initialized = false;
export function cT() {
if (__wakaru_cT_initialized) return;
__wakaru_cT_initialized = true;
"use strict";
x(), Gp(), mde(), _X(), Yu(), WDd = Wj("ExecutorResource"), GDd = xee("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
}), kC = class {
    constructor(e, t, n){
        this.execManager = e, this.serializeArgs = t, this.deserializeResult = n;
    }
    async execute(e, t, n) {
        var i = [];
        try {
            const o = QQ(i, S_(e.withName("ExecutorResource.execute"))), a = o.ctx;
            n?.execId !== void 0 && o.span.setAttribute("exec.id", n.execId);
            const c = L4e(a), l = c ? new OMn(c) : void 0, u = this.execManager.createExecInstance(a, (b)=>{
                const y = this.serializeArgs(b, t);
                return new Iee({
                    id: y.id,
                    message: y.message,
                    execId: n?.execId,
                    machineId: n?.machineId,
                    spanContext: l,
                    acceptHookAdditionalContexts: n?.hookContextCollector !== void 0
                });
            }), h = await vMu(u);
            if (h === void 0) throw new Error("No exec result");
            let { firstItem: p, rest: g } = h;
            const f = (b)=>{
                if (n?.hookContextCollector !== void 0 && b.hookAdditionalContexts.length > 0) {
                    n.hookContextCollector.push(...b.hookAdditionalContexts);
                    for (const y of b.hookAdditionalContexts)GDd.increment(a, 1, {
                        hook_event_name: y.hookEventName
                    });
                }
            };
            f(p);
            let v = this.deserializeResult(p);
            for(; v === void 0;){
                const b = await vMu(g);
                if (b === void 0) throw new Error("No result value");
                p = b.firstItem, g = b.rest, f(p), v = this.deserializeResult(p);
            }
            return (async ()=>{
                try {
                    for await (const b of g)f(b);
                } catch (b) {
                    WDd.info(a, "Ignoring exec stream shutdown during detached drain", {
                        error: b
                    });
                }
            })().catch(()=>{}), v;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            ege(i, r, s);
        }
    }
}, VDd = class {
    constructor(e, t, n){
        this.execManager = e, this.serializeArgs = t, this.deserializeStream = n;
    }
    async *execute(e, t, n) {
        var i = [];
        try {
            const a = QQ(i, S_(e.withName("StreamExecutorResource.execute"))).ctx, c = L4e(a), l = c ? new OMn(c) : void 0, u = this.execManager.createExecInstance(a, (h)=>{
                const p = this.serializeArgs(h, t);
                return new Iee({
                    id: p.id,
                    message: p.message,
                    execId: n?.execId,
                    machineId: n?.machineId,
                    spanContext: l,
                    acceptHookAdditionalContexts: n?.hookContextCollector !== void 0 || n?.deliverAgentStoreConflictNotices === !0
                });
            });
            for await (const h of u){
                n?.hookContextCollector !== void 0 && h.hookAdditionalContexts.length > 0 && n.hookContextCollector.push(...h.hookAdditionalContexts);
                const p = this.deserializeStream(h);
                p !== void 0 && (yield p);
            }
        } catch (o) {
            var r = o, s = !0;
        } finally{
            ege(i, r, s);
        }
    }
};

}
